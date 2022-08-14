import React from 'react';
import { useFlutterwave } from 'flutterwave-react-v3';
import { Button } from '../components';
 
export default function FlwHook({callback, buttonText, customerDetails}) {
  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'assets/svg',
    },
  };
 
  const handleFlutterPayment = useFlutterwave(config);
 
  return (
      <Button
        primary
        className="w-full"
        onClick={() => {
          handleFlutterPayment({
            callback: callback(),
            onClose: () => {},
          });
        }}
      >
        {buttonText}
      </Button>
  );
}