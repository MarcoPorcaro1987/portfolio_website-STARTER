import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm <br />
        Marco Porcaro
      </SectionTitle>
      <SectionText>
        Junior Full Stack Developer, working in web technologies and Ui / Ux design, delivering quality work.<br />
        I love working in teams and have the initiative to take full ownership of  tasks.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/marco-porcaro/"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
