import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RemoveAllCartItems } from '../../redux/actions';

const StripeButton = ({ RemoveAllCartItems, price, history }) => {
  // let history = useHistory();
  // console.log(history);
  const priceforStripe = price * 100;
  const publishableKey =
    'pk_test_51IM1QyC0sHlddA1wsQKx8MA4Die3YpLzSANAh6Gz1vX2Gpy0CsEySF1vFnhrLcL5EKcx8Zm069qWnz4UoYTpNaYl001dTVrzc4';
  const onToken = async (token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceforStripe,
          token: token,
        },
      });

      alert('Payment Successful');
      RemoveAllCartItems();
      history.push('/');
    } catch (error) {
      console.log('Payment Error: ', error);
      alert(
        'There was an issue with your payment! Please use the provided credit card.'
      );
    }
  };
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
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default connect(null, { RemoveAllCartItems })(withRouter(StripeButton));
