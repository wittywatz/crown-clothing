import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = () => {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
};

export default WithSpinner;
