import React from "react";
import styled from "styled-components";
import EX from "../asset/img/movie.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 30px;
  background: #f5f5f5;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.04);
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 400px;
  background: url(${EX}) center/ cover no-repeat;
  border-radius: 30px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Contents = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 30px;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  h3 {
    font-size: 24px;
  }
`;

const Index = styled.ul`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const IndexList = styled.li`
  width: auto;
  padding: 10px;
  background: #fff;
  border: 1px solid #29b66a;
  border-radius: 50px;
  font-size: 18px;
  color: #29b66a;
`;

const MainText = styled.p`
  font-family: "G L";
  font-size: 18px;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MoreBtn = styled.button`
  width: 120px;
  height: 50px;
  background: #29b66a;
  color: #fff;
  border: 1px solid #29b66a;
  border-radius: 50px;
  padding: 10px 30px;
  font-family: "G M";
  font-size: 18px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #29b66a;
  }
`;

const Icons = styled.ul`
  display: flex;
  gap: 10px;
`;

const Icon = styled.li`
  width: 100%;
  height: 100%;
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
    padding: 10px;
    border: 1px solid #29b66a;
    border-radius: 100%;
    color: #29b66a;
    transition: all 0.2s;
    &:hover {
      background: #29b66a;
      color: #fff;
    }
  }
`;

const ProjectCard = ({ item }) => {
  const goToSite = () => {
    window.open(item.site, "_blank");
  };

  const goToGithub = () => {
    window.open(item.github, "_blank");
  };
  return (
    <Container>
      <ImgWrap />
      <Contents>
        <MainContents>
          <h3>{item?.projectNM}</h3>
          <Index>
            {item.skill.map((li) => (
              <IndexList>#{li}</IndexList>
            ))}
          </Index>
          <MainText>{item?.text}</MainText>
        </MainContents>
        <MoreInfo>
          <MoreBtn>MORE</MoreBtn>
          <Icons onClick={goToSite}>
            <Icon>
              <FontAwesomeIcon icon={faDesktop} className="icon" />
            </Icon>
            <Icon onClick={goToGithub}>
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </Icon>
          </Icons>
        </MoreInfo>
      </Contents>
    </Container>
  );
};

export default ProjectCard;
