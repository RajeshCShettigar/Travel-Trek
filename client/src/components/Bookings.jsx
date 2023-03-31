import React, { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import GooglePayButton from '@google-pay/button-react';

const Bookings = ({ price }) => {
  const servicecharge=10
  
  const {currentUser}=useContext(AuthContext);

  const userEmail=currentUser?.data.userEmail;

  const [isPaid, setIsPaid] = useState(false);

  const [credentials, setCredentials] = useState({
    id: "",
    fullname: "",
    phoneno: "",
    bookAt: "",
    guestSize: 1,
  });
  
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
    console.log(credentials);
  };

  const handleSubmit = (e) => {
       e.preventDefault();
       //console.log(JSON.parse(credentials));
       navigate('/payment',{state:credentials});
  }

  const total = Number(price)*Number(credentials.guestSize)+Number(servicecharge);
   
  // GPay payment options
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Example Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: total,
      currencyCode: 'INR',
      countryCode: 'IN'
    },
    
  };

  const onPaymentSuccess = () => {
    setIsPaid(true);
    handleSubmit();
  };

    return (
    <div className="shadow-md p-4 w-full h-full">
      <div className="p-2 text-2xl">
        <i className="ri-money-dollar-circle-line"></i>
        {price}/per person
      </div>
      <form onSubmit={handleSubmit} className="p-3 shadow-md">
      <h3>Information</h3>
        <div className="relative z-0 w-full mb-6 group mt-3">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={(e) => handleChange(e)} value={credentials.fullname}
          />
          <label
            htmlFor="fullname"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="phoneno"
            id="phoneno"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={(e) => handleChange(e)} value={credentials.phoneno} 
          />
          <label
            htmlFor="phoneno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="bookAt"
              id="bookAt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleChange(e)} value={credentials.bookAt}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Booking Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="guestSize"
              id="guestSize"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => handleChange(e)} value={credentials.guestSize}
            />
            <label
              htmlFor="guestSize"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guests
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <h5 className="p-2">Service Charges :${servicecharge}</h5>
          <h5 className="p-2">Total Price :${total}</h5>
        </div>
        <button type="submit">
        <GooglePayButton
          environment="TEST"
          paymentRequest={paymentRequest}
          buttonType="pay"
          onLoadPaymentData={() => {
            console.log('Payment data loaded');
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log('Payment authorized:', paymentData);
            onPaymentSuccess();
          }}
          onPaymentDataChanged={(paymentData) => {
            console.log('Payment data changed:', paymentData);
          }}
          onError={(error) => {
            console.error('Payment error:', error);
          }
        }
          />
          </button>
      </form>
    </div>
  );
};

export default Bookings;
