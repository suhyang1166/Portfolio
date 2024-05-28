import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  width: 180%;
  min-width: 360px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #29b66a;
  border-bottom: 1px solid #29b66a;
  padding-bottom: 10px;
`;

const Li = styled.li`
  &:first-child {
    font-family: "G B";
    font-size: 28px;
  }
  &:last-child {
    font-size: 24px;
  }
  .icon {
    width: 50px;
    height: 50px;
    border: 1px solid #29b66a;
    border-radius: 100%;
    color: #fff;
    background: #29b66a;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      border: 1px solid #fff;
      border-radius: 100%;
      color: #29b66a;
      background: #fff;
    }
  }
`;

const ContactBox = ({ item }) => {
  console.log(item.title);
  const goToGit = () => {
    window.open(item.text, "_blank");
  };
  return (
    <Container>
      <Ul>
        <Li>{item.title}</Li>
        {item.title === "Git-Hub" ? (
          <Li onClick={goToGit}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </Li>
        ) : (
          <Li>{item.text}</Li>
        )}
      </Ul>
    </Container>
  );
};

export default ContactBox;
