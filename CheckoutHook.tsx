import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../assest/assestRoot';
import Api from 'axios';
import RazorpayCheckout from 'react-native-razorpay';

let baseurl = 'https://b2ae-103-106-20-199.ngrok-free.app';
const RAZORPAY_KEY_ID = 'rzp_test_bs2AfrGKZJE7SL';

const useCheckoutHook = () => {
  const navigation = useNavigation();

  const verifyPaymentSignature = useCallback(async (paymentInfo: any) => {
    let url = `${baseurl}/orders/paymentVerify`;
    const payload = {
      razorpay_payment_id: paymentInfo.razorpay_payment_id,
      razorpay_order_id: paymentInfo.razorpay_order_id,
      razorpay_signature: paymentInfo.razorpay_signature,
    };

    try {
      const response = await Api.post(url, payload);
      console.log('payment verify', response);
    } catch (error) {
      console.log('payment verifyError', error);
    }
  }, []);

  const checkoutRazorPayOrder = useCallback(
    async (orderInfo: any) => {
      let options: any = {
        // description: 'Credits towards consultation',
        // image: 'https://i.imgur.com/3g7nmJC.jpg',
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: '50000',
        name: 'Acme Corp',
        order_id: orderInfo.id, //Replace this with an order_id created using Orders API.
        // prefill: {
        //   email: 'gaurav.kumar@example.com',
        //   contact: '9191919191',
        //   name: 'Gaurav Kumar'
        // },
        theme: {color: Colors.primary},
      };
      try {
        const data = await RazorpayCheckout.open(options);
        console.log('checkout sucess', data);
        // handle success
        if (
          data.razorpay_payment_id &&
          data.razorpay_order_id &&
          data.razorpay_signature
        ) {
          verifyPaymentSignature(data);
        }
      } catch (error) {
        console.log('checkout error', error);
      }
    },
    [verifyPaymentSignature],
  );

  const createRazorPayOrder = useCallback(async () => {
    let url = `${baseurl}/orders/createRazorPayOrder`;
    const payload = {
      amount: 50000,
    };
    try {
      const response = await Api.post(url, payload);
      console.log('createRazorpay Order sucess', response);
      if (response.data.data.id) {
        checkoutRazorPayOrder(response.data.data);
      }
    } catch (error) {
      console.log('createRazorpay Order Error', error);
    }
  }, [checkoutRazorPayOrder]);
  return {navigation, createRazorPayOrder};
};

export default useCheckoutHook;
