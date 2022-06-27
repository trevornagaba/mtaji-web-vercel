import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Tab } from "@headlessui/react";

import HomeNavBar from "../components/HomeNavBar";
import InvestCard from "../components/InvestCard";
import RaiseFunds from "../components/RaiseFunds";

import {
    ExternalLink,
    Button,
    ShareButton,
    StatCard,
    Dot,
} from "../components";

import classNames from "../utils/classnames";

export default function CompanyInfo() {
    // Setup state management
    const [company, setCompany] = useState([]);
    const [companyInfo, setCompanyInfo] = useState([
        {
            id: 1,
            title: "Overview",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit vestibulum in ullamcorper metus, habitasse aliquam pellentesque. Facilisi eleifend quis arcu, dapibus sit cras tristique arcu. Pulvinar in egestas sit amet morbi diam tempor eu tristique. Est sed tortor amet, convallis habitant nunc.",
        },
        {
            id: 2,
            title: "Problem",
            desc: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit vestibulum in ullamcorper metus, habitasse aliquam pellentesque. Facilisi eleifend quis arcu, dapibus sit cras tristique arcu. Pulvinar in egestas sit amet morbi diam tempor eu tristique. Est sed tortor amet, convallis habitant nunc.",
        },
        {
            id: 3,
            title: "Solution",
            desc: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit vestibulum in ullamcorper metus, habitasse aliquam pellentesque. Facilisi eleifend quis arcu, dapibus sit cras tristique arcu. Pulvinar in egestas sit amet morbi diam tempor eu tristique. Est sed tortor amet, convallis habitant nunc.",
        },
        {
            id: 4,
            title: "Team",
            desc: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit vestibulum in ullamcorper metus, habitasse aliquam pellentesque. Facilisi eleifend quis arcu, dapibus sit cras tristique arcu. Pulvinar in egestas sit amet morbi diam tempor eu tristique. Est sed tortor amet, convallis habitant nunc.",
        },
        {
            id: 5,
            title: "Documents",
            desc: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit vestibulum in ullamcorper metus, habitasse aliquam pellentesque. Facilisi eleifend quis arcu, dapibus sit cras tristique arcu. Pulvinar in egestas sit amet morbi diam tempor eu tristique. Est sed tortor amet, convallis habitant nunc.",
        },
    ]);

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
                console.log(error);
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
                console.log(error);
            });
    }

    return (
        <div>
            <HomeNavBar />
            <main>
                <div className="max-w-6xl mx-auto px-4 mb-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/assets/logo_in_card.svg"
                                height={50}
                                width={50}
                            />
                            <h3 className="text-lg font-bold leading-tight">
                                Safe Boda
                            </h3>
                            <div className="hidden lg:block">
                                <Dot />
                            </div>
                            <div className="hidden lg:block">
                                <ExternalLink href="https://www.safeboda.com/">
                                    View website
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="block px-4 py-2 border border-primary rounded-md lg:hidden">
                            <ExternalLink href="https://www.safeboda.com/">
                                View website
                            </ExternalLink>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2">
                            <ShareButton />
                            <Button primary className="px-14">
                                Invest
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-[240px] lg:h-[500px]">
                        <iframe
                            src="https://www.youtube.com/watch?v=xotzaT5ppSE"
                            className="w-full h-full aspect-video mt-4 rounded-xl lg:mt-8"
                        ></iframe>
                    </div>
                    {/* Stats */}
                    <div className="flex items-center justify-between gap-4 mt-6 bg-white rounded-xl py-4 lg:mt-10">
                        <StatCard
                            title="Current Valuation"
                            dollarValue="10"
                            ugxValue="35"
                        />
                        <StatCard
                            title="Target Amount"
                            dollarValue="1"
                            ugxValue="35"
                        />
                        <StatCard
                            title="Amount Raised"
                            dollarValue="90k.1/1"
                            ugxValue="35"
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
                                                    "py-2.5 font-medium leading-5",
                                                    "ring-offset- focus:outline-none focus:ring-0",
                                                    selected
                                                        ? "border-b-2 border-blue-500 bg-white"
                                                        : "text-gray-400 bg-white hover:bg-gray-800 hover:text-gray-800 hover:bg-white"
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
                                        <Button primary className="px-14">
                                            Invest
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Tab.Panels className="mt-10">
                                {companyInfo.map((item) => (
                                    <Tab.Panel key={item.id}>
                                        {item.desc}
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                        <div className="block mt-10 lg:hidden">
                            <div className="flex items-center gap-2">
                                <ShareButton />
                                <Button primary className="px-10 w-full">
                                    Invest
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <RaiseFunds />
            </main>
        </div>
    );
}
