import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 20%;
    min-width: 240px;
    height: 320px;
    border-radius: 30px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    padding: 30px;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 6px rgba(41, 182, 106, 0.8);
        /* background: #29b66a;
    color: #fff; */
    }
    &:hover h3 {
        color: #29b66a;
    }
    h3 {
        font-family: "G B";
        font-size: 24px;
    }
`;

const SkillWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
`;

const SkillBox = ({ skill }) => {
    return (
        <Container>
            <SkillWrap>
                <h3>{skill.skill}</h3>
                <div>img</div>
                <div>
                    {skill.text.map((li, idx) => (
                        <li key={idx}>- {li}</li>
                    ))}
                </div>
            </SkillWrap>
        </Container>
    );
};

export default SkillBox;
