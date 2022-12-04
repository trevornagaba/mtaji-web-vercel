import React from 'react';
import { useFlutterwave } from 'flutterwave-react-v3';
import { Button } from '../components';
import { v4 as uuidv4 } from "uuid";
 
export default function FlwHook({callback, buttonText, customer, amount, company}) {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBK,
    // test_key: process.env.NEXT_PUBLIC_FLW_SECK,
    tx_ref: uuidv4(),
    amount: amount,
    currency: 'UGX',
    payment_options: 'card, mobilemoneyuganda, ussd',
    customer: {
      email: customer.email,
      phonenumber: customer.phonenumber,
      name: `${customer.firstName +' '+ customer.lastName}`,
    },
    meta:{
      userId: customer.userId,
      date: Date.now(),
      companyId: "629c7846d2421fb469a4ba14"
    },
    customizations: {
      title: 'Invest on mtaji',
      description: 'invest in company A',
      logo: 'https://res.cloudinary.com/daat2pgem/image/upload/v1660584212/mtaji/logo_zv1epf.svg',
    },
  };
 
  const handleFlutterPayment = useFlutterwave(config);
 
  return (
      <Button
        primary
        className="w-full"
        onClick={() => {
          handleFlutterPayment({
            callback: callback,
            onClose: () => {},
          });
        }}
      >
        {buttonText}
      </Button>
  );
}