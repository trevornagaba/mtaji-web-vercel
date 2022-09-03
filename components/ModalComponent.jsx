import { useState, Fragment, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AppContext } from "./AppContext";
import Image from "next/image";
import Button from "./Button/Button";
import Link from "next/link";

function Modal({ clicked, title, children, type, variant }) {
    const [openModal, setOpenModal] = useState(false);
    const onClickProfileImage = () => {
        return setOpenModal(!openModal);
    };

    const {
        alerts,
        setAlerts,
        showModal,
        setShowModal,
        showAlert,
        setShowAlert,
    } = useContext(AppContext);
    // useEffect(() => {
    //     if (clicked == false) {
    //         return setOpenModal(false);
    //     }
    //     return setOpenModal(true);
    // }, [clicked]);
    return (
        <Transition
            appear
            show={showModal || showAlert ? true : false}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => {
                  setShowModal(false);
                    setAlerts("");
                    setShowAlert(false);
                }}
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
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all pb-5">
                                {showAlert && alerts ? (
                                    <div className="w-full  flex flex-col justify-center text-center">
                                        <div className="w-full flex flex-col justify-center mb-4">
                                            {alerts.variant.toLowerCase() ==
                                            "success" ? (
                                                <>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-white p-6 bg-primary text-center"
                                                    >
                                                        {alerts?.title}
                                                    </Dialog.Title>
                                                    <div className="mt-8">
                                                        <Image
                                                            src="/assets/success.svg"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-white p-6 bg-primary text-center"
                                                    >
                                                        {alerts?.title}
                                                    </Dialog.Title>
                                                    <div className="mt-5 mb-0">
                                                        <Image
                                                            src="/assets/warning.svg"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="text-[#8c8c8c]">
                                          {alerts?.text}
                                        </div>
                                        {alerts.title.toLowerCase() ==
                                        "verification required" ? (
                                            <div className="p-8 flex items-center justify-between gap-3">
                                                <Button
                                                    secondary
                                                    onClick={() => {
                                                        setShowModal(false);
                                                        setAlerts("");
                                                    }}
                                                    className="w-full border-[#8c8c8c]"
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    primary
                                                    className="w-full"
                                                >
                                                    <Link href="/account">
                                                        Verify
                                                    </Link>
                                                </Button>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-white p-6 bg-primary text-center"
                                        >
                                            {title}
                                        </Dialog.Title>
                                        <div className="mt-2">{children}</div>
                                    </>
                                )}

                                {/* <div className="mt-4">
                                    <div
                                        className="absolute rounded-full top-2 right-2 bg-slate-200 w-7 h-7 text-center py-1 cursor-pointer text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => {
                                            setShowModal(false);
                                            setAlerts("");
                                        }}
                                    >
                                        x
                                    </div>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;
