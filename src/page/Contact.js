import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 100vh;
    padding-top: 150px;
    position: relative;
    h1 {
        width: 100%;
        position: absolute;
        bottom: -7%;
        left: 50%;
        margin: 0 auto;
        transform: translateX(-50%);
        font-size: 24vmin;
        text-align: center;
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
