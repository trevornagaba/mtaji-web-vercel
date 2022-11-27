import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

import { TextInput, Button } from "../../components";

import { InvestmentSuccessModal, InvestmentErrorModal } from "/components";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import FlwHook from "../../hooks/PaymentHook";
import { AppContext } from "../AppContext";
import useSetAlert from "../../hooks/useSetAlert";
import { PaystackButton } from 'react-paystack';

export default function InvestmentModal({
    isOpen,
    openModal,
    closeModal,
    companyId,
}) {
    const { setAlert } = useSetAlert();
    

    // State management for fund wallet form data
    const [formData, setFormData] = useState({
        amountUSD: "",
        amountUGX: "",
    });
    const handleChange = (e) => {
        const { value } = e.target;

        const validated = value.match(/^(\d*\.{0,1}\d{0,2}$)/);
        if (validated) {
            const newvalue = value.replace(/[e\+\-]/gi, "");
            const approx = (num) => {
                return Math.round(num * 100) / 100;
            };
            setFormData((prevFormData) => {
                return e.target.name == "amountUSD"
                    ? {
                          amountUSD: approx(newvalue),
                          amountUGX: approx(newvalue * 3500),
                      }
                    : {
                          amountUSD: approx(newvalue / 3500),
                          amountUGX: approx(newvalue),
                      };
            });
        }
    };
    const { checkAuth, userDetails, isLoaded } = useContext(AppContext);
    const [user, setUser] = useState({});
    // For succesful Investment modal
    const [isSuccessful, setIsSuccessful] = useState(false);
    
    const config = {
        reference: (new Date()).getTime().toString(),
        email: userDetails.email,
        amount: formData.amountUGX,
        publicKey: 'pk_test_b552d15b654930c99fd625b953c1681b8475476e',
    };
    
   
    // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const componentProps = {
    ...config,
    text: 'Invest',
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
};
    const preventSpeChar = (e) => {
        if (e.key === "e" || e.key === "-" || e.key === "+") {
            e.preventDefault();
        }
    };
    

    const closeSuccessModal = () => {
        setIsSuccessful(false);
        setTimeout(() => {
            // 
        }, 5000);
    };

    const openSuccessModal = () => {
        setIsSuccessful(true);
    };

    // For error Investment modal
    const [isFailed, setIsFailed] = useState(false);

    const closeErrorModal = () => {
        setIsFailed(false);
    };

    const openErrorModal = () => {
        setIsFailed(true);
    };

    const handleInvestmentCallback = async (response) => {
        const token = localStorage.getItem("token");

        if (response?.status == "successful") {
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "Application/json",
                },
            };
            let body = {
                flw_txn_id: response.transaction_id,
                userId: user.userId,
                companyId: companyId,
                type: "company",
                creationDate: "",
                amount: response.amount,
                transactionChannel: "flw",
                currency: "UGX",
            };
            closeModal();

            axios
                .post(
                    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                    body,
                    config
                )
                .then(function (response) {
                    closePaymentModal(); // this will close the flutterwave modal

                    openSuccessModal();

                    // setAlert("success", "Congratulations! You made a simple boss move")
                })
                .catch(function (error) {
                    // 
                    openErrorModal();
                    setAlert(
                        "warning",
                        "Transaction Error",
                        "An error occurred"
                    );
                });
        } else {
            openErrorModal();
        }
    };

    const handleCancel = async (e) => {
        // include preventDefault to prevent default form submission via get/post method and use custom logic defined here
        e.preventDefault();
        closeModal();
    };

    useEffect(() => {
        // checkAuth();
        setUser(userDetails);
    }, [isLoaded, isSuccessful]);

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white p-6 bg-primary text-center"
                                    >
                                        Invest
                                    </Dialog.Title>
                                    <div className="mt-2 p-8">
                                        <TextInput
                                            label="Enter amount ($)"
                                            type="number"
                                            name="amountUSD"
                                            placeholder="20.00"
                                            onChange={handleChange}
                                            value={formData.amountUSD}
                                            leading
                                            onKeyDown={preventSpeChar}
                                        />
                                        {/* <div className="flex justify-end -mt-2">
                                            <small className="text-gray-600">
                                                Avail Bal: $ 0.50
                                            </small>
                                        </div> */}
                                        <TextInput
                                            label="Enter amount (UGX)"
                                            type="number"
                                            name="amountUGX"
                                            placeholder="7000.00"
                                            onChange={handleChange}
                                            value={formData.amountUGX}
                                            leading
                                            onKeyDown={preventSpeChar}
                                        />
                                        {/* <div className="flex justify-end -mt-2">
                                            <small className="text-gray-600">
                                                Avail Bal: UGX 2,500
                                            </small>
                                        </div> */}
                                    </div>
                                    <div className="px-8">
                                        <small>Transaction Fee: UGX 0</small>
                                    </div>
                                    <div className="p-8 flex items-center justify-between gap-3">
                                        <Button
                                            secondary
                                            onClick={handleCancel}
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                        {/* {formData.amountUSD < 10 ? (
                                            <Button
                                                // primary
                                                // onClick={handleInvestment}
                                                className="w-full"
                                                disabled={true}
                                            >
                                                Invest
                                            </Button>
                                        ) : (
                                            // <FlwHook
                                            //     callback={
                                            //         handleInvestmentCallback
                                            //     }
                                            //     buttonText="Invest"
                                            //     customer={user}
                                            //     amount={formData.amountUGX}
                                            //     company={companyId}
                                            // />
                                            <Button
                                                primary
                                                onClick={initializePayment}
                                                className="w-full"
                                                // disabled={true}
                                            >
                                                Invest
                                            </Button>
                                        )} */}
                                        <Button
                                            primary
                                            className="w-full"
                                            // disabled={true}
                                        >
                                    
                                        <PaystackButton {...componentProps} />
                                        </Button>
                                    
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* Modals */}
            <InvestmentSuccessModal
                isSuccessful={isSuccessful}
                openSuccessModal={openSuccessModal}
                closeSuccessModal={closeSuccessModal}
            />
            {/* <InvestmentErrorModal
                isFailed={isFailed}
                openErrorModal={openErrorModal}
                closeErrorModal={closeErrorModal}
            /> */}
        </div>
    );
}
