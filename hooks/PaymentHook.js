import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";
import { Button } from "../components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";

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
        brand_id: `f6e1d6ac-df45-46b6-8952-e1fa1fffde49`,
    };

    // Create axios request data
    var config = {
        method: "post",
        url: `https://gate.paytota.com/api/v1/purchases/`,
        headers: {
            Authorization: `Bearer R3_wIM6ry35xZP3TRHkB9sSxM_LE1OsoswQk3XDI7J4nhkPCIzgk5vyzrXII8K6P181MfDOhRJLIyB5O9uEmyA==`,
            "Referrer-Policy": "no-referrer",
        },
        data: data,
    };

    const handlePaytotaPayment = (config) => {
        // Initiate purchase
        console.log(config.config);
        axios(config.config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.data.status == "created") {
                    // window.open(response.data.checkout_url, "_blank", "noopener");
                    router.push(response.data.checkout_url);
                }
            })
            .catch(function (error) {
                console.log(error);
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
