import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 120px;
    padding: 0 100px;
    @media only screen and (max-width: 1080px) {
        padding: 0 50px;
    }
`;

const Contents = () => {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const section = location.state.section;
            if (section === "about") {
                aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else if (section === "project") {
                projectRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else if (section === "contact") {
                contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [location]);

    const sections = [
        { name: "About", ref: aboutRef },
        { name: "Project", ref: projectRef },
        { name: "Contact", ref: contactRef },
    ];

    const onScrollToSection = (name) => {
        const section = sections.find((section) => section.name === name);
        if (section && section.ref.current) {
            section.ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Container>
            <Header onScrollToSection={onScrollToSection} sections={sections} />
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </Container>
    );
};

export default Contents;
