import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";
import { Button } from "../components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";
import { getToken } from "../utils/getToken";

// export default function FlwHook({callback, buttonText, customer, amount, company}) {
//   const config = {
//     public_key: process.env.NEXT_PUBLIC_FLW_PUBK,
//     // test_key: process.env.NEXT_PUBLIC_FLW_SECK,
//     tx_ref: uuidv4(),
//     amount: amount,
//     currency: 'USD',
//     payment_options: 'card,mobilemoneyuganda,ussd',
//     customer: {
//       email: customer.email,
//       phonenumber: customer.phonenumber,
//       name: `${customer.firstName +' '+ customer.lastName}`,
//     },
//     meta:{
//       userId: customer.userId,
//       date: Date.now(),
//       companyId: "629c7846d2421fb469a4ba14"
//     },
//     customizations: {
//       title: 'Invest on mtaji',
//       description: 'invest in company A',
//       logo: 'https://res.cloudinary.com/daat2pgem/image/upload/v1660584212/mtaji/logo_zv1epf.svg',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//       <Button
//         primary
//         className="w-full"
//         onClick={() => {
//           handleFlutterPayment({
//             callback: callback,
//             onClose: () => {},
//           });
//         }}
//       >
//         {buttonText}
//       </Button>
//   );
// }

export default function PaytotaHook({
    callback,
    buttonText,
    customer,
    amount,
    company,
}) {
    const router = useRouter();
    
    const token = getToken();
    var data = {
        client: {
            email: "trevornagaba@gmail.com",
            phone: "256759367905",
        },
        purchase: {
            currency: "UGX",
            products: [
                {
                    name: "trevornagaba@gmail.com",
                    price: "500",
                },
            ],
        },
        skip_capture: false,
        brand_id: `${process.env.NEXT_PUBLIC_PAYTOTA_BRAND_ID}`,
    };

    // Create axios request data
    var config = {
        method: "post",
        url: `${process.env.NEXT_PUBLIC_PAYTOTA_PURCHASE_INITIATE}`,
        data: data,
    };

    const handlePaytotaPayment = async (config) => {

        // Initiate purchase
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions/paytota`,
                config,
                {
                    // method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "Application/json",
                    },
                }
            )
            .then((result) => {
                console.log(result);
                // Open payment window
                window.open(result.data.checkout_url, "_blank");
            })
            .catch((error) => {
                setErrors(error.response.data.message);
            });

        // return ();
    };

    return (
        <Button
            primary
            className="w-full"
            onClick={() => {
                handlePaytotaPayment({
                    config: config,
                    callback: callback,
                    onClose: () => {},
                });
            }}
        >
            {buttonText}
        </Button>
    );
}
