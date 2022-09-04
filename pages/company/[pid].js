import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { AppContext } from "/components/AppContext";
import PageTemplate from "/components/pageTemplate";
import { InvestmentSuccessModal, InvestmentErrorModal } from "/components";
import {
    Navbar,
    ExternalLink,
    Button,
    ShareButton,
    StatCard,
    Dot,
    InvestmentModal,
} from "/components";
import classNames from "/utils/classnames";
import FlashMessage from "../../components/Alert/FlashMessage";
import useSetAlert from "../../hooks/useSetAlert";
import Modal from "../../components/ModalComponent";

export const getServerSideProps = async (context) => {
    const companyId = context.query.pid;
    // console.log(context)
    const company = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies/${companyId}`
    );
    return {
        props: { company: company.data },
    };
};
export default function Company({ company }) {
    const {setAlert} = useSetAlert()
    // Setup use of router to get company id from url
    const router = useRouter();
    const { pid } = router.query;

    const { isLoaded, isAuth, getCompany,checkAuth, userDetails, showAlert} = useContext(AppContext);
    const [user, setUser] = useState({})
    // Setup state management
    // const [company, setCompany] = useState([]);
    const [companyInfo, setCompanyInfo] = useState([
        {
            id: 1,
            title: "Overview",
        },
        {
            id: 2,
            title: "Problem",
        },
        {
            id: 3,
            title: "Solution",
        },
        {
            id: 4,
            title: "Team",
        },
        {
            id: 5,
            title: "Documents",
        },
    ]);

    useEffect(()=>{
        checkAuth()
        setUser(userDetails)
        // console.log(user)
    },[isLoaded])

    // Setup state management for Investment modal
    const [isOpen, setIsOpen] = useState(false);
    const [shwAlert, setShwAlert] = useState(false);
    const [loading, setLoading] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    
    const openModal = () => {
        
        setIsOpen(true);
    };

    // For error Investment modal
    const [isFailed, setIsFailed] = useState(false);

    const closeErrorModal = () => {
        setIsFailed(false);
    };

    const openErrorModal = () => {
        setIsFailed(true);
    };

    const onClickShare = async () => {
        if (shwAlert) {
            setShwAlert(false);
        }
        await navigator.clipboard.writeText(window.location.href);
        // setShwAlert(true);
        setAlert("success", "Url Copied","Url copied, you can now share with other amazing investors like you!")
    };
    const onClickDownload = async (filename, link) => {
        axios
            .get(`${link}`, {
                responseType: "blob",
            })
            .then((res) => {
                console.log(res);

                const url = window.URL.createObjectURL(
                    new Blob([res.data], {
                        type: res.headers["content-type"],
                    })
                );

                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename);
                document.body.appendChild(link);
                link.click();
            });
    };
    let num = 0;

    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={false}
            hasFooter={true}
            isGreyBackgound={true}
        >
            <div className="company-page">
                <main>
                    {/* <Modal/> */}
                    <div className="max-w-6xl mx-auto px-4 mb-6 lg:px-8 pt-36">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="hidden lg:block">
                                    <Image
                                        src={company?.logo}
                                        height={50}
                                        width={50}
                                    />
                                </div>
                                <div className="block lg:hidden">
                                    <Image
                                        src={company?.logo}
                                        height={44}
                                        width={44}
                                    />
                                </div>
                                <h3 className="text-[24px] font-bold leading-tight">
                                    {company?.name}
                                </h3>
                                <div className="hidden lg:block">
                                    <Dot />
                                </div>
                                <div className="hidden lg:block">
                                    <ExternalLink
                                        href={company?.websiteUrl ?? "#"}
                                    >
                                        View website
                                    </ExternalLink>
                                </div>
                            </div>
                            <div className="block lg:hidden">
                                <Button
                                    primary
                                    onClick={()=>{
                                        !user?.isKycVerified ? setAlert('warning','Verification Required','please complete verification before investing'):
                                        openModal
                                    }}
                                    className="w-[125px]"
                                >
                                    Invest
                                </Button>
                            </div>
                            <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2">
                                <ShareButton onClick={() => onClickShare()} />
                                <Button
                                    primary
                                    onClick={()=>{
                                        !user?.isKycVerified ? setAlert('warning','Verification Required','please complete verification before investing'):
                                        openModal()
                                    }}
                                    className="px-14"
                                >
                                    Invest
                                </Button>
                            </div>
                        </div>
                        <div className="max-w-full w-full h-[240px] lg:h-[500px] flex flex-col justify-center relative ">
                            {loading ? (
                                <div className="absolute self-center text-base">
                                    Loading...
                                </div>
                            ) : null}
                            <iframe
                                src={company.videoUrl}
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-full mt-4 rounded-xl lg:mt-8"
                                onLoad={() => setLoading(false)}
                            ></iframe>
                        </div>
                        {/* Stats */}
                        <div className="flex items-center justify-between gap-4 mt-6 bg-white rounded-xl py-4 lg:mt-10">
                            <StatCard
                                title="Current Valuation"
                                // TO-DO: Update to read real time rates from yahoo, reuters etc
                                dollarValue={company.companyValuation}
                                textLeft
                            />
                            <StatCard
                                title="Target Amount"
                                dollarValue={company.targetAmount}
                                // TO-DO: Update to read real time rates from yahoo, reuters etc
                                textCenter
                            />
                            <StatCard
                                title="Amount Raised"
                                dollarValue={company.amountRaised}
                                textRight
                            />
                        </div>
                        {/* Info Tabs */}
                        <div className="w-full p-6 mt-6 bg-white rounded-xl lg:mt-10">
                            <Tab.Group>
                                <div className="flex items-center justify-between">
                                    <Tab.List className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
                                        {companyInfo.map((item) => (
                                            <Tab
                                                key={item.id}
                                                className={({ selected }) =>
                                                    classNames(
                                                        "py-2 text-[16px] font-medium",
                                                        "ring-offset- focus:outline-none focus:ring-0", 
                                                        selected
                                                            ? "border-b-2 border-green bg-white"
                                                            : "text-grey bg-white hover:bg-gray-800 hover:text-gray-800 hover:bg-white"
                                                    )
                                                }
                                            >
                                                {item.title}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                    <div className="hidden lg:block">
                                        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2">
                                            <ShareButton
                                                onClick={() => onClickShare()}
                                            />
                                            <Button
                                                primary
                                                onClick={()=>{
                                                    !user?.isKycVerified ? setAlert('warning','Verification Required','please complete verification before investing'):
                                                    openModal()
                                                }}
                                                className="px-14"
                                            >
                                                Invest
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <Tab.Panels className="mt-10  min-h-[150px]">
                                    {companyInfo.map((item) => (
                                        <Tab.Panel key={item.id}>
                                            {item.title == "Team" ? (
                                                <div className="flex flex-row w-full justify-between text-center bg-slate-50 rounded-lg p-2 px-6">
                                                    <div className="flex flex-row items-center">
                                                        <Image
                                                            src="/assets/file.svg"
                                                            alt="file"
                                                            height={20}
                                                            width={20}
                                                        />
                                                        <p className="ml-3">
                                                        {company.name} Team doc
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="cursor-pointer flex w-10 h-10 justify-center rounded-full hover:bg-slate-100"
                                                        onClick={() =>
                                                            onClickDownload(
                                                                `${company.name} Team`,
                                                                company.teamUrl
                                                            )
                                                        }
                                                    >
                                                        <Image
                                                            src="/assets/download.svg"
                                                            alt="file"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </div>
                                                </div>
                                            ) : item.title == "Documents" ? (
                                                <>
                                                    {company?.companyDocumentsUrl?.map(document=>{
                                                        ++num
                                                        const no= num
                                                        return (
                                                            <>
                                                            <div className="flex flex-row w-full justify-between text-center bg-slate-50 rounded-lg p-2 px-6 mb-5">
                                                        <div className="flex flex-row items-center">
                                                            <Image
                                                                src="/assets/file.svg"
                                                                alt="file"
                                                                height={20}
                                                                width={20}
                                                            />
                                                            <p className="ml-3">
                                                            {company.name} Documents {no}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="cursor-pointer flex w-10 h-10 justify-center rounded-full hover:bg-slate-100"
                                                            onClick={() =>
                                                                onClickDownload(
                                                                    `${company.name} Documents ${no}`, document
                                                                )
                                                            }
                                                        >
                                                            <Image
                                                                src="/assets/download.svg"
                                                                alt="file"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </div>
                                                    </div></>
                                                        )
                                                    })}
                                                    
                                                </>
                                            ) : item.title == "Overview" ? (
                                                <>{company?.briefDescription}</>
                                            ) : item.title === "Problem" ? (
                                                <>{company?.problemStatement}</>
                                            ) : (
                                                <>
                                                    {
                                                        company?.detailedDescription
                                                    }
                                                </>
                                            )}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                            <div className="block mt-10 lg:hidden">
                                <div className="flex items-center gap-2">
                                    <ShareButton
                                        onClick={() => onClickShare()}
                                    />
                                    <Button
                                        primary
                                        onClick={()=>{
                                            !user?.isKycVerified ? setAlert('warning', 'Verification Required','please complete verification before investing'):
                                            openModal()
                                        }}
                                        className="px-10 w-full"
                                    >
                                        Invest
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="max-w-6xl mx-auto px-4 mb-6 lg:px-8"> */}
                </main>
                {/* Modals */}
                <InvestmentModal
                    isOpen={isOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                    companyId={pid}
                    // userId={userId} // TO-DO: Validate if logged in
                />
                {shwAlert && (
                    <FlashMessage message={"Url copied"} type={"success"} />
                )}

                {/* <InvestmentErrorModal
                isFailed={isFailed}
                openErrorModal={openErrorModal}
                closeErrorModal={closeErrorModal}
            /> */}
                <style jsx>
                    {`
                        .company-page {
                            background-color: #f7f7f7 !important;
                        }
                    `}
                </style>
            </div>
            {showAlert ? <Modal/> : ''}
        </PageTemplate>
    );
}
