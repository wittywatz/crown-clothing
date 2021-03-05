import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/Directory';

// import './homepage.scss';

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

const HomePage = () => {
  return (
    <Homepage>
      <Directory />
    </Homepage>
  );
};

export default HomePage;
