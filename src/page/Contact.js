import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  position: relative;
  h1 {
    position: absolute;
    bottom: -7%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18vw;
    color: #29b66a;
  }
`;

const Contact = () => {
  return (
    <Container>
      <h1>CONTACT</h1>
    </Container>
  );
};

export default Contact;
