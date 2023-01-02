import styled from "styled-components";
import { lightBlue, lightGreen, lightNavy } from "../styles/Colors";
import { small, medium, large } from "../styles/FontSize";

const BoxContainer = styled.article`
  width: 50%;
`;

const SubTitle = styled.h3`
  font-size: ${large};
  color: ${lightBlue};
`;

const BoxContent = styled.p`
  color: ${lightBlue};
  font-size: ${medium};
`;

const Link = styled.p`
color: ${lightGreen}
font-size: ${small};
`;

const Techno = styled.ul`
  color: ${lightBlue};
  font-size: ${small};
`;

const About = () => {
  return (
    <BoxContainer>
      <SubTitle>01. About Me</SubTitle>
      <BoxContent>
        Hello! My name is Brittany and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS! Fast-forward to
        today, and I’ve had the privilege of working at{" "}
        <Link>an advertising agency</Link>, a start-up, a huge corporation, and
        a student-led design studio. My main focus these days is building
        accessible, inclusive products and digital experiences at Upstatement
        for a variety of clients. I also recently launched a course that covers
        everything you need to build a web app with the Spotify API using Node &
        React. Here are a few technologies I’ve been working with recently:
      </BoxContent>
      <Techno>
        JavaScript (ES6+) TypeScript React Eleventy Node.js WordPress
      </Techno>
    </BoxContainer>
  );
};

export default About;
