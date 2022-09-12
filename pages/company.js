import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Tab } from "@headlessui/react";

import { Grid } from "@mui/material";

import PageTemplate from "../components/pageTemplate";
import RaiseFunds from "../components/RaiseFunds";
import SubscribeCard from "../components/subscribeToMailList";

import {
    Navbar,
    ExternalLink,
    Button,
    ShareButton,
    StatCard,
    Dot,
    InvestmentModal,
    InvestmentSuccessModal,
    InvestmentErrorModal,
} from "../components";

import classNames from "../utils/classnames";
import Footer from "../components/Footer";

export default function CompanyInfo() {
    // Setup state management
    const [company, setCompany] = useState([]);
    const [companyInfo, setCompanyInfo] = useState([
        {
            id: 1,
            title: "Overview",
            desc: "Tubayo is the first Africa focused marketplace that lets travelers book rooms and experiences with locals. An online travel marketplace that makes it easy for locals to earn money by renting out their space to host travellers or lead them on exciting experiences around the community. Save money when travelling, make money when hosting, share culture and local insights of the community, availability of local currencies and payment options.",
        },
        {
            id: 2,
            title: "Problem",
            desc: "Travel in Africa is so expensive, it is difficult for many people to plan, book and pay for a trip. Price is a great concern for customers booking travel in Africa, Limited travel options for accomodation and experiences, Very fragmented travel industry making trip planning very stressful and hectic, No Africa focused travel marketplace exists to work around the realities on local currency, payment methods and language",
        },
        {
            id: 3,
            title: "Solution",
            desc: "Tubayo is an online travel marketplace that makes it easy for locals to earn money by renting out their space to host travellers or lead them on exciting experiences around the community. Save money when travelling, make money when hosting, share culture and local insights of the community, availability of local currencies and payment options.",
        },
        {
            id: 4,
            title: "Team",
            desc: "Tubayo Team.pdf",
        },
        {
            id: 5,
            title: "Documents",
            desc: "Tubayo Mtaji June Pitch.pdf",
        },
    ]);

    // Setup state management for initial Investment modal
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    // For succesful Investment modal
    const [isSuccessful, setIsSuccessful] = useState(false);

    const closeSuccessModal = () => {
        setIsSuccessful(false);
    };

    const openSuccessModal = () => {
        setIsSuccessful(true);
    };

    useEffect(() => {
        getCompany();
    }, []);

    async function getCompany() {
        const response = await axios
            .get(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies/626fde9f814d1b197742cab2` //TO-DO: route from explore page should pass a company id
            )
            .then((result) => {
                setCompany(result.data);
            })
            .catch((error) => {
                // 
            });
    }

    async function makeInvestment() {
        const response = await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                {
                    amount: amount,
                    type: "company",
                    companyId: companyId, //TO-DO: Collect once sorted out the navigation/router to include companyId
                },
                { withCredentials: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((result) => {})
            .catch((error) => {
                // 
            });
    }

    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={false}
            hasFooter={true}
            hasRaiseFunds={true}
        >
            <Grid
                item
                style={{
                    padding: "15vh 10%",
                    mimHeight: "100vh",
                    width: "100%",
                }}
                align={"center"}
            >
                <div
                    className="flex items-center justify-between"
                    style={{ width: "100%" }}
                >
                    <div className="flex items-center gap-2">
                        <div className="hidden lg:block">
                            <Image
                                src="/assets/tubayo_logo.png"
                                height={50}
                                width={50}
                            />
                        </div>
                        <div className="block lg:hidden">
                            <Image
                                src="/assets/tubayo_logo.png"
                                height={44}
                                width={44}
                            />
                        </div>
                        <h3 className="text-[24px] font-bold leading-tight">
                            Tubayo
                        </h3>
                        <div className="hidden lg:block">
                            <Dot />
                        </div>
                        <div className="hidden lg:block">
                            <ExternalLink href="https://tubayo.com/">
                                View website
                            </ExternalLink>
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <Button primary className="w-[125px]">
                            Invest
                        </Button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2">
                        <ShareButton />
                        <Button primary onClick={openModal} className="px-14">
                            Invest
                        </Button>
                    </div>
                </div>
                <div className="max-w-full w-full h-[240px] lg:h-[500px]">
                    <iframe
                        src="https://www.youtube.com/embed/RelkzR5Yn3I"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full mt-4 rounded-xl lg:mt-8"
                    ></iframe>
                </div>
                {/* Stats */}
                <div className="flex items-center justify-between gap-4 mt-6 bg-white rounded-xl py-4 lg:mt-10">
                    <StatCard
                        title="Current Valuation"
                        dollarValue="15"
                        ugxValue="56"
                        textLeft
                    />
                    <StatCard
                        title="Target Amount"
                        dollarValue="3"
                        ugxValue="11"
                        textCenter
                    />
                    <StatCard
                        title="Amount Raised"
                        dollarValue="1.8"
                        ugxValue="6.7"
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
                                    <ShareButton />
                                    <Button
                                        primary
                                        onClick={openModal}
                                        className="px-14"
                                    >
                                        Invest
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Tab.Panels className="mt-10">
                            {companyInfo.map((item) => (
                                <Tab.Panel key={item.id}>{item.desc}</Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                    <div className="block mt-10 lg:hidden">
                        <div className="flex items-center gap-2">
                            <ShareButton />
                            <Button
                                primary
                                onClick={openModal}
                                className="px-10 w-full"
                            >
                                Invest
                            </Button>
                        </div>
                    </div>
                </div>
                <SubscribeCard />
            </Grid>
            {/* <div style={{ marginTop: "5vh " }}>
                <SubscribeCard />
            </div> */}
        </PageTemplate>
    );
}
