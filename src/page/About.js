import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 100px 50px 0;
`;

const About = () => {
    return (
        <Container>
            <div>
                <div>img</div>
                <h1>ABOUT</h1>
                <div>
                    <p>KIM SU HYANG</p>
                    <h3>김 수 향</h3>
                    <p>1997.10.06</p>
                    <p>
                        빠르게 트렌드를 캐치하고 끝없이 배움에 도전하며,
                        <br />
                        현재에 안주하지않고 발전해 나가는
                        <br />
                        프론트엔드 개발자가 되겠습니다.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
