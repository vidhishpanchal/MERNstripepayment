import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'
import GooglePayButton from '@google-pay/button-react';
import Home from './components/Home';
import { Card } from 'antd';
import { Button } from 'antd'
import Learn from './components/Learn';
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // const [product, setProduct] = useState({
  //   name: "React from FB",
  //   price: 10,
  //   productBy: "Facekook"
  // })
  // function makePayment(token) {
  //   const body = { token, product }
  //   const headers = { "COntent-Type": "application/json" }
  //   const result = await fetch('https://localhost:5000/payment', {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   })

  //     .then(result => {
  //       console.log('RESULT : ', result);
  //       const { status } = result;
  //       console.log('STATUS : ', status);
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }
  // const makePayment = token => {
  //   const body = { token, product }
  //   const headers = { "Content-Type": "application/json" }
  //   return fetch(`http://localhost:5000/payment`, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   }).then(result => {
  //     console.log('RESULT : ', result);
  //     const { status } = result;
  //     console.log('STATUS : ', status);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "Facekook"
  })
  // function makePayment(token) {
  //   const body = { token, product }
  //   const headers = { "COntent-Type": "application/json" }
  //   const result = await fetch('https://localhost:5000/payment', {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   })

  //     .then(result => {
  //       console.log('RESULT : ', result);
  //       const { status } = result;
  //       console.log('STATUS : ', status);
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }
  const makePayment = token => {
    const body = { token, product }
    const headers = { "Content-Type": "application/json" }
    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }).then(result => {
      console.log('RESULT : ', result);
      const { status } = result;
      console.log('STATUS : ', status);
    }).catch(err => {
      console.log(err);
    })
  }
  return (

    <>
      <Router>

        <Routes>
          <Route component={Home} element={<Home />} exact path="/" />
          <Route component={Learn} element={<Learn />} exact path="/learn" />
        </Routes>

      </Router>


      {/* <div>
        <h1>Learn Everything about Data Science</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ borderRadius: '30px', boxShadow: '5px 5px 5px 5px grey', margin: '10px', backgroundColor: 'aqua' }}>
            <Card style={{ width: 300 }}>
              <h5>Learn Data Science</h5>
              <p>Learn Data science for free from industry experts</p>
              <a href='/learn'><Button type="primary">Start Learning</Button></a>
              <h1>Free</h1>
            </Card>
          </div>
          <div style={{ borderRadius: '30px', boxShadow: '5px 5px 5px 5px grey', margin: '10px', backgroundColor: 'aqua' }}>
            <Card style={{ width: 300 }}>
              <h5>Learn Machine Learning</h5>
              <p>Learn Machine Learning for free from industry experts</p>
              <StripeCheckout stripeKey="pk_test_51JuwWTSAddWXqYxNGzkzPTF4IQ4hJpgsO7InQI3ydY37EzXUgrA0mzF749kgZOxcn6HVZR4sMx2oEETt6fBD0pKL00f63lTK2H" token={makePayment} name="Buy React" amount={product.price * 100}>
                <button className='btn-large pink'> Buy ML Course in just {product.price} $</button>
              </StripeCheckout>
              <br />
              <br />


              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '1',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                  shippingAddressRequired: true,
                  callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={paymentRequest => {
                  console.log('Success', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                  console.log('Payment Authorised Success', paymentData)
                  return { transactionState: 'SUCCESS' }
                }
                }
                onPaymentDataChanged={paymentData => {
                  console.log('On Payment Data Changed', paymentData)
                  return {}
                }
                }
                existingPaymentMethodRequired='false'
                buttonColor='black'
                buttonType='Buy'
              />

            </Card>
          </div>
        </div>
      </div> */}

    </>
  );
}
export default App;
