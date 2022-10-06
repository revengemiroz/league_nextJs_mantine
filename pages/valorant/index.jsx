import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

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
  Role_Pic,
} from '../../style/valorant/style';

import { Valorant } from '../../Data/valorant';

import ScrollContainer from 'react-indiana-drag-scroll';

function Index(props) {
  const [activeAgent, setActiveAgent] = useState(Valorant[0]);

  useEffect(() => {}, [activeAgent]);

  return (
    <Container>
      <Main>
        <Character_List>
          <ScrollContainer draggingClassName="container--dragging" className="container">
            {Valorant.map((agent) => {
              return (
                <InView
                  as={`div`}
                  key={agent.id}
                  onChange={(inView, ref, entry) =>
                    console.log('inview', { inView }, { ref }, { entry })
                  }
                >
                  <Character_Name
                    selected={activeAgent.id == agent.id ? 1 : 0}
                    key={agent.id}
                    id={agent.id}
                    onClick={() => {
                      setActiveAgent(agent);
                      const link = document.getElementById(agent.id);
                      link.scrollIntoView();
                    }}
                  >
                    <span className="agentNo">{agent.id}</span>
                    <span className="agentName">{agent.name}</span>
                  </Character_Name>
                </InView>
              );
            })}
          </ScrollContainer>
        </Character_List>
        <Character>
          <img src={activeAgent.img} />
        </Character>
        <Character_Info>
          <main>
            <Role_Container>
              <span className="role">// ROLE</span>
              <Role>
                <span>{activeAgent.role}</span>
                <Role_Pic>
                  <img src={activeAgent.role_pic} />
                </Role_Pic>
              </Role>
            </Role_Container>
            <Biography_Container>
              <span className="bio">// BIOGRAPHY</span>
              <Biography>{activeAgent.biography}</Biography>
            </Biography_Container>
          </main>
        </Character_Info>
      </Main>
    </Container>
  );
}

export default Index;
