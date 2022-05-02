import Head from "next/head";
import Image from "next/image";
import Header from "../components/header.jsx";
import React, { useState } from "react";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Mtaji</title>
        <meta name="description" content="Invest in African Start ups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center w-5/6 ">
        <section className="w-2/5">
          <div className="w-[471px] h-[642px]">
            <div className="flex justify-center items-center w-[469px] absolute left-[133.5px] top-[622.5px] gap-2.5 px-2.5 py-5 rounded-[5px] bg-[#2518b8]">
              <p className="flex-grow-0 flex-shrink-0 text-[19.020000457763672px] font-medium text-left text-white">
                Sign Up
              </p>
            </div>
            <p className="absolute left-[229px] top-[700px] text-lg text-left">
              <span className="text-lg font-medium text-left text-[#464646]">
                Already have an account?
              </span>
              <span className="text-lg font-medium text-left text-black">
                {" "}
              </span>
              <span className="text-lg font-semibold text-left text-[#1a3447]">
                Log In
              </span>
            </p>
            <div className="w-[470px] h-[60px]">
              <div className="w-[470px] h-[60px] absolute left-[132.5px] top-[532.5px] rounded-[10px] bg-white border border-[#b0b0b0]" />
              <div className="flex justify-start items-start absolute left-[147.5px] top-[541.5px] gap-2.5 px-[5px] py-2.5 bg-white">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#b0b0b0]">
                  Password
                </p>
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 absolute left-[558.5px] top-[550.5px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                  fill="#B0B0B0"
                />
                <path
                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
            <div className="w-[470px] h-[60px]">
              <div className="w-[470px] h-[60px] absolute left-[132.5px] top-[442.5px] rounded-[10px] bg-white border border-[#b0b0b0]" />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 absolute left-[558.5px] top-[460.5px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                  fill="#B0B0B0"
                />
              </svg>
              <div className="flex justify-start items-start absolute left-[143.5px] top-[451.5px] gap-2.5 px-[5px] py-2.5 bg-white">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#b0b0b0]">
                  E-mail
                </p>
              </div>
            </div>
            <div className="w-[470px] h-[81px]">
              <div className="w-[470px] h-[60px] absolute left-[132.5px] top-[352.5px] rounded-[10px] bg-white border border-[#2518b8]" />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 absolute left-[558.5px] top-[370.5px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                  fill="#09062D"
                />
                <path
                  d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z"
                  fill="#09062D"
                />
              </svg>
              <div className="flex justify-start items-start absolute left-[147.5px] top-[331.5px] gap-2.5 px-[5px] py-2.5 bg-white">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1a3447]">
                  Name
                </p>
              </div>
              <p className="absolute left-[153px] top-[372px] text-base font-medium text-left text-[#1a3447]">
                Emmanuel Agidi
              </p>
            </div>
            <p className="absolute left-[313px] top-[260px] text-[33.18000030517578px] font-semibold text-left text-[#09062d]">
              Sign Up
            </p>
          </div>
          ;
        </section>
        <section className="w-3/5">
          <Image
            priority
            src="/assets/rafiki.svg" // Route of the image file
            height={794} // Desired size with correct aspect ratio
            width={625} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </section>
      </main>
    </div>
  );
}
