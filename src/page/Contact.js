import React from "react";
import styled from "styled-components";
import mydata from "../data/mydata";
import ContactBox from "../components/ContactBox";

const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 100vh;
    position: relative;
    h1 {
        position: absolute;
        bottom: -7%;
        left: 50%;
        margin: 0 auto;
        transform: translateX(-50%);
        font-size: 17.5vw;
        text-align: center;
        color: #29b66a;
    }
`;

const Contents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 80px;
`;

const Contact = () => {
    return (
        <Container>
            <h1>CONTACT</h1>
            <Contents>
                {mydata.contact.map((item, idx) => (
                    <ContactBox item={item} key={idx} />
                ))}
            </Contents>
        </Container>
    );
};

export default Contact;
