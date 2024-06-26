import React from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import projectList from "../data/projectdata";

const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    padding: 200px 0 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    h1 {
        font-family: "G B";
        font-size: 60px;
        color: #29b66a;
        text-align: center;
    }
`;

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: 100%;
    @media only screen and (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media only screen and (max-width: 1080px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Project = () => {
    return (
        <>
            <Container>
                <h1>PROJECT</h1>
                <CardWrap>
                    {projectList.map((item) => (
                        <ProjectCard key={item.id} item={item} />
                    ))}
                </CardWrap>
            </Container>
        </>
    );
};

export default Project;
