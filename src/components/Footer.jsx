import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 20px;
  background-color: #e0e4e7;
  color: #8e7878;
  text-align: center;
`;

const Footer = () => (
  <FooterStyle>
    <p>&copy; 2018 Oluwatoyosi Oyegoke</p>
  </FooterStyle>
);

export default Footer;
