import styled from "styled-components";
import { lightBlue, blue, lightGreen, navy } from "../styles/Colors";
import { big, medium } from "../styles/FontSize";
import { small, xSmall } from "../styles/spacings";

const Container = styled.article`
  padding: ${small};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Intro = styled.a`
  color: ${lightGreen};
  font-size: ${medium};
`;

const Name = styled.h1`
  color: ${lightBlue};
  font-size: ${big};
  margin-top: ${xSmall};
  margin-bottom: ${xSmall};
`;

const Quote = styled.p`
  color: ${blue};
  font-size: ${big};
  margin-top: ${xSmall};
  margin-bottom: ${xSmall};
`;

const Description = styled.a`
  color: ${lightBlue};
  font-size: ${medium};
  width: 70%;
  padding-bottom: ${medium};
`;

const Button = styled.button`
  border: solid 2px ${lightGreen};
  border-radius: 5px;
  color: ${lightGreen};
  background-color: ${navy};
  padding: ${medium};
  width: 30%;
`;

const title = () => {
  return (
    <>
      <Container>
        <Intro>Hi, my name is</Intro>
        <Name>Brittany Chiang.</Name>
        <Quote>I build things for the web.</Quote>
        <Description>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Description>
        <Button>Check out my course!</Button>
      </Container>
    </>
  );
};

export default title;
