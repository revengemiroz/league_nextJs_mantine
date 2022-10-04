import React from 'react';

import {
  Container,
  Main,
  Character_List,
  Character_Name,
  Character,
  Character_Info,
  Biography_Container,
  Role_Container,
  Role,
  Biography,
} from '../../style/valorant/style';

import { Valorant } from '../../Data/valorant';
import { useState } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';

function Index(props) {
  const [activeAgent, setActiveAgent] = useState(Valorant[0]);

  return (
    <Container>
      <Main>
        <Character_List>
          <ScrollContainer draggingClassName="container--dragging" className="container">
            {Valorant.map((agent) => {
              return (
                <Character_Name key={agent.id} onClick={() => setActiveAgent(agent)}>
                  {agent.name}
                </Character_Name>
              );
            })}
          </ScrollContainer>
        </Character_List>
        <Character>
          <img src={activeAgent.img} />
        </Character>
        <Character_Info>
          <Role_Container>
            <span>// ROLE</span>
            <Role>{activeAgent.role}</Role>
          </Role_Container>
          <Biography_Container>
            <span>// BIOGRAPHY</span>
            <Biography>{activeAgent.biography}</Biography>
          </Biography_Container>
        </Character_Info>
      </Main>
    </Container>
  );
}

export default Index;
