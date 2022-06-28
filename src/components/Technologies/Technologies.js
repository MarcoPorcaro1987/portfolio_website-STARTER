import React from "react";
import { DiBootstrap, DiCss3, DiFirebase, DiHtml5, DiJavascript, DiLaravel, DiMysql, DiNodejs, DiPhp, DiReact, DiZend} from "react-icons/di";
import {FiFigma}from "react-icons/fi";
import {FaVuejs}from "react-icons/fa";
import {SiCanva}from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <p>
              Experience with <br />
              Html, Css, Javascript, Vue. js, React.js, Bootstrap
            </p>
            <DiHtml5 size="2em" />
            <DiCss3 size="2em" />
            <DiJavascript size="2em" />
            <FaVuejs size="2em" />
            <DiBootstrap size="2em" />
            <DiReact size="2em" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <p>Experience with <br />
            Node.js, Php, Laravael <br />
            and Databases</p>
            <DiNodejs size="2em" />
            <DiLaravel size="2em" />
            <DiPhp size="2em" />  
            <DiMysql size="2em" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            <p>
            Experience with <br />
            tools like Figma <br />
            and Sketch
            </p>
            <FiFigma size="2em" />
            <SiCanva size="2em" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
