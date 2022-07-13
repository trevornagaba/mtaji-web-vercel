import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

import { TextInput, Button } from "../../components";

import { InvestmentSuccessModal } from "/components";

export default function InvestmentModal({ isOpen, openModal, closeModal, companyId }) {

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

    // For succesful Investment modal
    const [isSuccessful, setIsSuccessful] = useState(false);

    const closeSuccessModal = () => {
        setIsSuccessful(false);
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

    const handleInvestment = async (e) => {
        // TO-DO: Add front end validation that compares value to cash balance
        // Add validation that confirms if logged in
        // include preventDefault to prevent default form submission via get/post method and use custom logic defined here
        e.preventDefault();
        console.log(formData);
        const response = axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                {
                    amount: formData.amountUSD,
                    id: uuidv4(),
                    type: "company",
                    companyId: companyId,
                },
                { withCredentials: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(function (response) {
                console.log(response);
                openSuccessModal();
            })
            .catch(function (error) {
                console.log(error);
                openErrorModal();
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
                                        Invest
                                    </Dialog.Title>
                                    <div className="mt-2 p-8">
                                        <TextInput
                                            label="Enter amount ($)"
                                            type="text"
                                            name="amountUSD"
                                            placeholder="20.00"
                                                onChange={handleChange}
                                                value={formData.amount}
                                            leading
                                        />
                                        <div className="flex justify-end -mt-2">
                                            <small className="text-gray-600">
                                                Avail Bal: $ 0.50
                                            </small>
                                        </div>
                                        <TextInput
                                            label="Enter amount (UGX)"
                                            type="text"
                                            name="amountUGX"
                                            placeholder="7000.00"
                                                onChange={handleChange}
                                                value={formData.amountUGX}
                                            leading
                                        />
                                        <div className="flex justify-end -mt-2">
                                            <small className="text-gray-600">
                                                Avail Bal: UGX 2,500
                                            </small>
                                        </div>
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
                                            onClick={handleInvestment}
                                            className="w-full"
                                        >
                                            Invest
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
        </div>
    );
}
