import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { TextInput, Button } from "..";

export default function InvestmentModal({ isOpen, openModal, closeModal }) {
    return (
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
                                        name="amount"
                                        placeholder="20.00"
                                        leading
                                        leadingSymbol={
                                            <div className="flex items-center gap-1">
                                                ${" "}
                                                <ChevronDownIcon className="h-4 w-4" />
                                            </div>
                                        }
                                    />
                                    <div className="flex justify-end -mt-2">
                                        <small className="text-gray-600">
                                            Avail Bal: $ 0.50
                                        </small>
                                    </div>
                                    <TextInput
                                        label="Enter amount (UGX)"
                                        type="text"
                                        name="amount"
                                        placeholder="7000.00"
                                        leading
                                        leadingSymbol={
                                            <div className="flex items-center gap-1">
                                                UGX{" "}
                                                <ChevronDownIcon className="h-4 w-4" />
                                            </div>
                                        }
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
                                        onClick={closeModal}
                                        className="w-full"
                                    >
                                        Cancel
                                    </Button>
                                    <Button primary className="w-full">
                                        Invest
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
