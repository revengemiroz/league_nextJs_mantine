import React from 'react';

import {
  Container,
  Champion_Text,
  League_Champion_Card,
  League_Champion_Card_Title,
  League_Champion_Card_Image_Wrapper,
  Champion_Collection,
} from './style';

import { League_Data_Array } from '../../Data/league';

function Index(props) {
  return (
    <Container>
      <Champion_Text>Champions</Champion_Text>
      <Champion_Collection>
        {League_Data_Array?.map((champion) => {
          return (
            <League_Champion_Card>
              <League_Champion_Card_Image_Wrapper>
                <img src={champion.image} alt={champion.name} />
              </League_Champion_Card_Image_Wrapper>
              <League_Champion_Card_Title>{champion.name}</League_Champion_Card_Title>
            </League_Champion_Card>
          );
        })}
      </Champion_Collection>
    </Container>
  );
}

export default Index;
