import React from "react";
import styled from "styled-components";
import mydata from "../data/mydata";
import SkillBox from "../components/SkillBox";
import ME from "../asset/img/me.jpeg";

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AboutWrap = styled.div`
  width: 90%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  gap: 5%;
`;

const Me = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  border-right: 1px dashed #808080;
`;

const MyImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-radius: 100%;
  background: url(${ME}) center/cover no-repeat;
`;

const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: -30px;
  left: 210px;
  font-size: 100px;
  font-family: "G B";
  color: #fff;
  -webkit-text-stroke: 1px #29b66a;
`;

const MyName = styled.div`
  position: absolute;
  bottom: 0;
  left: 350px;
  width: auto;
  gap: 15px;
  p {
    font-family: "G L";
    font-size: 20px;
    padding-bottom: 15px;
    b {
      font-family: "G M";
    }
  }
  p:last-of-type {
    padding-top: 15px;
  }
  h3 {
    font-size: 32px;
    padding-bottom: 15px;
  }
`;

const WorkWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const WorkUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const WorkList = styled.li`
  width: 100%;
  font-size: 18px;
  h3 {
    font-size: 15px;
    margin-bottom: 5px;
  }
  p {
    font-family: "G L";
  }
`;

const Skills = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 420px;
  h1 {
    font-family: "G B";
    font-size: 60px;
    color: #29b66a;
    padding-bottom: 30px;
  }
`;

const Skill = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const About = () => {
  return (
    <Container>
      <AboutWrap>
        <Me>
          <MyImg></MyImg>
          <Title>ABOUT</Title>
          <MyName>
            <p>KIM SU HYANG</p>
            <h3>김 수 향</h3>
            <p>1997.10.06</p>
            <p>
              빠르게 트렌드를 캐치하고 끝없이 배움에 도전하며,
              <br />
              현재에 안주하지않고 발전해 나가는
              <br />
              <b>프론트엔드</b> 개발자가 되겠습니다.
            </p>
          </MyName>
        </Me>
        <WorkWrap>
          <WorkUl>
            {mydata.work.map((list, idx) => (
              <WorkList key={idx}>
                <h3>{list.date}</h3>
                <p>{list.work}</p>
              </WorkList>
            ))}
          </WorkUl>
        </WorkWrap>
      </AboutWrap>
      <Skills>
        <h1>SKILLS</h1>
        <Skill>
          {mydata.skills.map((skill) => (
            <SkillBox key={skill.id} skill={skill} />
          ))}
        </Skill>
      </Skills>
    </Container>
  );
};

export default About;
