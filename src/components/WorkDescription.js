import styled from "styled-components";
import { lightBlue, lightGreen, lightNavy } from "../styles/Colors";
import { small, medium } from "../styles/FontSize";

const BoxContainer = styled.article`
  border: solid 1px black;
  background-color: ${lightNavy};
  width: 60%;
  border-radius: 10px;
`;

const BoxIntro = styled.h3`
  color: ${lightGreen};
  font-size: ${small};
`;

const BoxTitle = styled.h2`
  color: ${lightBlue};
  font-size: ${medium};
`;

const BoxContent = styled.p`
  color: ${lightBlue};
  font-size: ${small};
`;

const BoxLink = styled.a`
  color: ${lightGreen};
`;

const workDescription = () => {
  return (
    <BoxContainer>
      <BoxIntro>Featured Project</BoxIntro>
      <BoxTitle>Halcyon Theme</BoxTitle>
      <BoxContent>
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
        more. Available on
      </BoxContent>
      <BoxLink>
        Visual Studio Marketplace, Package Control, Atom Package Manager, and
        npm.
      </BoxLink>
    </BoxContainer>
  );
};

export default workDescription;
