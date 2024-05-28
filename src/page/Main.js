import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PORTFOLIO from "../asset/img/PORTFOLIO.png";
import ME from "../asset/img/me.jpeg";
import styled, { css } from "styled-components";

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const IndexLink = styled.ul`
    position: absolute;
    top: 14%;
    left: 9%;
    width: 55vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    z-index: 3;
    li {
        position: relative;
        width: 100%;
        font-family: "G B";
        font-size: 7vmin;
        line-height: 78px;
        color: #29b66a;
        transition: all 0.3s ease-in-out;
        &:hover {
            width: 100%;
            /* color: #fff; */
            /* -webkit-text-stroke: 2px #29b66a; */
            transform: scale(1.05);
            cursor: pointer;
        }
        &::after {
            content: "<<";
            width: 100%;
            opacity: 0;
            margin-left: 30px;
            transition: transform 0.5s ease;
        }
        &:hover::after {
            opacity: 1;
        }
        ${({ hover }) =>
            hover &&
            css`
                color: #fff;
                -webkit-text-stroke: 1px #29b66a;
            `}
    }
`;

const Portfolio = styled.div`
    position: relative;
    width: 100%;
    height: 230px;
    font-family: "G B";
    /* background: url(${PORTFOLIO}) center/contain no-repeat; */
    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 15vw;
        color: #fff;
        -webkit-text-stroke: 1px #808080;
    }
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 6vw;
        color: #fff;
        -webkit-text-stroke: 1.5px #29b66a;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            color: #29b66a;
        }
    }
`;

const HoverInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: -35%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "G L";
    color: #29b66a;
    opacity: 0;
    transition: opacity 0.3s ease;
    ${({ hover }) =>
        hover &&
        css`
            opacity: 1;
        `}
    p {
        font-size: 22px;
    }
`;

const Me = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background: url(${ME}) center/cover no-repeat;
`;

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        {
            name: "About Me",
            onClick: () =>
                navigate("/contents", { state: { section: "about" } }),
        },
        {
            name: "My Project",
            onClick: () =>
                navigate("/contents", { state: { section: "project" } }),
        },
        {
            name: "Contact",
            onClick: () =>
                navigate("/contents", { state: { section: "contact" } }),
        },
    ];

    return (
        <MainWrapper>
            <IndexLink hover={isHovered}>
                {menuItems.map((item) => (
                    <li key={item.name} onClick={item.onClick}>
                        {item.name}
                    </li>
                ))}
            </IndexLink>
            <Portfolio>
                <h3>PORTFOLIO</h3>
                <h1
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    FrontEnd
                </h1>
                <HoverInfo hover={isHovered}>
                    <Me></Me>
                    <p>
                        Hello, Thank you for visiting my site!
                        <br />
                        Click the menu for more information
                    </p>
                </HoverInfo>
            </Portfolio>
        </MainWrapper>
    );
};

export default Main;
