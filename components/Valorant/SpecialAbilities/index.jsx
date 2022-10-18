import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

import { Valorant } from '../../../Data/valorant';

import {
  Container,
  Abilities,
  Abilities_Video,
  Ability,
  Special_Abilities,
  Ability_Descriptions,
  Ability_Icon,
} from './style';

function Index({ activeAgent }) {
  const [activeAbility, setActiveAbility] = useState(activeAgent.abilities[0]);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef) {
      videoRef.current.load();
    }
  }, [activeAbility]);

  return (
    <Container>
      <main className="abilities">
        <Abilities>
          <main>
            <Special_Abilities>Special Abilities</Special_Abilities>
            <ul>
              {activeAgent.abilities.map((ability) => {
                return (
                  <Ability
                    active={activeAbility.type == ability.type ? 1 : 0}
                    onClick={() => setActiveAbility(ability)}
                  >
                    {/* <Ability_Image> */}
                    <Ability_Icon
                      active={activeAbility.type == ability.type ? 1 : 0}
                      className="icon"
                      src={ability.icon}
                    />
                    {/* </Ability_Image> */}
                  </Ability>
                );
              })}
            </ul>

            <Ability_Descriptions>
              <span className="abilityType">
                {activeAbility.type} - {activeAbility.name}
              </span>
              <span className="abilityDescription">{activeAbility.description}</span>
            </Ability_Descriptions>
          </main>
        </Abilities>
        <Abilities_Video>
          <video ref={videoRef} preload={true} autoPlay loop muted>
            <source src={activeAbility.video} type="video/mp4" />
          </video>
        </Abilities_Video>
      </main>
    </Container>
  );
}

export default Index;
