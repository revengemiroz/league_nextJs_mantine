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
  Header,
  Layout,
} from '../../style/valorant/style';

import { Valorant } from '../../Data/valorant';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

import ValorantSpecialAbilities from '../../components/Valorant/SpecialAbilities';
import Valorant_Logo from '../../assets/valorant/valorant_logo.svg';

function Index({ visibleAgents, setVisibleAgents, nonVisibleAgents, setNonVisibleAgents }) {
  const [activeAgent, setActiveAgent] = useState(Valorant[0]);

  return (
    <Container>
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="35"
          viewBox="0 0 100 100"
          width="35"
        >
          <path
            d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
            fill="#fff"
          ></path>
        </svg>
        <span>valorant</span>
      </Header>
      <Layout>
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
              keyboard={{ enabled: true }}
              mousewheel={{ enabled: true }}
              grabCursor={true}
              modules={[Mousewheel, Keyboard]}
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
        <ValorantSpecialAbilities activeAgent={activeAgent} />
      </Layout>
    </Container>
  );
}

export default Index;
