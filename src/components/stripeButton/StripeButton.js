import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceforStripe = price * 100;
  const publishableKey =
    'pk_test_51IM1QyC0sHlddA1wsQKx8MA4Die3YpLzSANAh6Gz1vX2Gpy0CsEySF1vFnhrLcL5EKcx8Zm069qWnz4UoYTpNaYl001dTVrzc4';
  return (
    <div style={{ marginLeft: 'auto', marginTop: '3rem' }}>
      <StripeCheckout
        label="Make payment"
        name="Crown Enterprise"
        billingAddress
        shippingAddress
        // image
        description={`Your total is $${price}`}
        amount={priceforStripe}
        panelLabel="Pay now"
        token={() => alert('Payment Successful')}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
