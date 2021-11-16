import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JiNfOBxUZErXEudlcns1UfeUSLmjFtLZepNc6WtZjjDVurK5fENarG92ik55jLtrLVhQbA3a66UiVv2v3tpA5NQ00Jk1XuNQz';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={token => {
                console.log(token)
                alert('Payment Successful')
            }}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;