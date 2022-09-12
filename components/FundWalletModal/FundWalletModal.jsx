import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { v4 as uuidv4 } from "uuid";

import { TextInput, Button } from "..";

import FundSuccessModal from "/components/FundWalletModal/FundSuccessModal";
import FundErrorModal from "/components/FundWalletModal/FundErrorModal";

export default function FundWalletModal({ isOpen, openModal, closeModal }) {
    // Flutterwave payment config
    const config = {
        public_key: `${process.env.NEXT_PUBLIC_FLW_PUBK}`,
        tx_ref: uuidv4(),
        currency: "UGX",
        payment_options: "card, mobilemoneyuganda",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "trevornagaba@gmail.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
        },
        customizations: {
            //TO-DO: Update customizations
            title: "mtaji",
            description: "Investment in Tubayo",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    };
    // Setup the flutterwave payment handler
    const handleFlutterPayment = useFlutterwave(config);

    // Flutterwave payment callback function
    function handeCallBack(res) {
        const response = axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                {
                    amount: res.amount,
                    status: res.status,
                    id: config.tx_ref, //TO-DO: Compare this to res.tx_ref
                    type: "cash",
                    flw_txn_id: res.transaction_id,
                    currency: res.currency,
                },
                { withCredentials: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(function (response) {
                // 
                openSuccessModal();
            })
            .catch(function (error) {
                // 
                openErrorModal();
            });
        closePaymentModal(); // this will close the modal programmatically
    }

    // State management for fund wallet form data
    const [formData, setFormData] = useState({
        amountUSD: "",
        amountUGX: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    // For succesful fund wallet modal
    const [isSuccessful, setIsSuccessful] = useState(false);

    const closeSuccessModal = () => {
        setIsSuccessful(false);
    };

    const openSuccessModal = () => {
        setIsSuccessful(true);
    };

    // For error fund wallet modal
    const [isFailed, setIsFailed] = useState(false);

    const closeErrorModal = () => {
        setIsFailed(false);
    };

    const openErrorModal = () => {
        setIsFailed(true);
    };

    const handleSubmit = async (e) => {
        // include preventDefault to prevent default form submission via get/post method and use custom logic defined here
        e.preventDefault();
        // 
        config.amount = formData.amountUGX;
        // 
        handleFlutterPayment({
            callback: (response) => {
                // 
                try {
                    handeCallBack(response);
                } catch (error) {
                    // 
                }
            },
            onClose: () => {},
        });
    };

    const handleCancel = async (e) => {
        // include preventDefault to prevent default form submission via get/post method and use custom logic defined here
        e.preventDefault();
        closeModal();
    };

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
                                        Fund Wallet
                                    </Dialog.Title>
                                    <form>
                                        <div className="mt-2 p-8">
                                            <TextInput
                                                label="Enter amount ($)"
                                                type="text"
                                                name="amountUSD"
                                                placeholder="20.00"
                                                onChange={handleChange}
                                                value={formData.amountUSD}
                                                leading
                                            />
                                            <TextInput
                                                label="Enter amount (UGX)"
                                                type="text"
                                                name="amountUGX"
                                                placeholder="7000.00"
                                                onChange={handleChange}
                                                value={formData.amountUGX}
                                                leading
                                            />
                                        </div>
                                        <div className="px-8">
                                            <small>Transition Fee: 0</small>
                                        </div>
                                        <div className="p-8 flex items-center justify-between gap-3">
                                            <Button
                                                secondary
                                                onClick={handleCancel}
                                                className="w-full"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                primary
                                                onClick={handleSubmit}
                                                className="w-full"
                                            >
                                                Invest
                                            </Button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* Modals */}
            <FundSuccessModal
                isSuccessful={isSuccessful}
                openSuccessModal={openSuccessModal}
                closeSuccessModal={closeSuccessModal}
            />
            {/* <FundErrorModal
                isFailed={isFailed}
                openErrorModal={openErrorModal}
                closeErrorModal={closeErrorModal}
                /> */}
        </div>
    );
}
