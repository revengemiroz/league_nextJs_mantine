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

import { Swiper, SwiperSlide } from 'swiper/react';

function Index({ visibleAgents, setVisibleAgents, nonVisibleAgents, setNonVisibleAgents }) {
  const [activeAgent, setActiveAgent] = useState(Valorant[0]);

  return (
    <Container>
      <Main>
        <Character_List>
          <Swiper
            direction="vertical"
            slidesPerView={4}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            className="mySwiper"
          >
            {Valorant.map((agent) => {
              return (
                <SwiperSlide key={agent.id}>
                  <Character_Name
                    selected={activeAgent.id == agent.id ? 1 : 0}
                    key={agent.id}
                    id={agent.id}
                    onClick={() => {
                      setActiveAgent(agent);
                    }}
                  >
                    <span className="agentNo">
                      {agent.id < 10 ? `${'0' + agent.id}` : agent.id}
                    </span>
                    <span className="agentName">{agent.name}</span>
                  </Character_Name>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
