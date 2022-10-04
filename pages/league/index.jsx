import React from 'react';

import {
  Container,
  League_Champion_Card,
  League_Champion_Card_Title,
  League_Champion_Card_Image_Wrapper,
  Champion_Collection,
  Text_Container,
  Choose_Your_Text,
  Champion_Text,
  Sub_Text,
  Sub_Text_2,
} from '../../style/league/style';

import { League_Data_Array } from '../../Data/league';

import LeagueSearchBar from '../../components/League/SearchBar';

function Index(props) {
  return (
    <Container>
      <Text_Container>
        <Choose_Your_Text>Choose your</Choose_Your_Text>
        <Champion_Text>champion</Champion_Text>
        <Sub_Text>With more than 140 champions, you'll find the perfect match for</Sub_Text>
        <Sub_Text_2>your playstyle. Master one, or master them all.</Sub_Text_2>
      </Text_Container>

      <LeagueSearchBar />
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
