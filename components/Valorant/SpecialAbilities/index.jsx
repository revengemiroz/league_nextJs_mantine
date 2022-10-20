import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

import {
  Container,
  Abilities,
  Abilities_Video,
  Ability,
  Special_Abilities,
  Ability_Descriptions,
  Ability_Icon,
} from './style';

function Index({ activeAgent, activeAbility, setActiveAbility }) {
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
                    <Ability_Icon
                      active={activeAbility.type == ability.type ? 1 : 0}
                      className="icon"
                      src={ability.icon}
                    />
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
          <ReactPlayer playing={true} url={activeAbility.video} />
        </Abilities_Video>
      </main>
    </Container>
  );
}

export default Index;
