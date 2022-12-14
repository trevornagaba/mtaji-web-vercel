import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

import { Button } from "..";
import Link from "next/link";

export default function FundSuccessModal({
    isSuccessful,
    openSuccessModal,
    closeSuccessModal,
}) {
    return (
        <Transition appear show={isSuccessful} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={closeSuccessModal}
            >
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
                                    Congratulations
                                </Dialog.Title>
                                <div className="mt-2 p-8 flex justify-center">
                                    <CheckCircleIcon className="h-24 w-24 text-cyan-600" />
                                </div>
                                <div className="px-8 text-center">
                                    <p>
                                        Congratulations!
                                        <br /> Your deposit is complete.
                                    </p>
                                    <span>
                                        Please refresh the home page is balance
                                        does not update automatically
                                    </span>
                                </div>
                                <div className="p-8 flex items-center justify-between gap-3">
                                    <Button
                                        onClick={closeSuccessModal}
                                        primary
                                        className="w-full"
                                    >
                                        Close
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
