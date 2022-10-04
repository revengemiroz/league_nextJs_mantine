import React from 'react';

import { Container, Search, List, Type, Difficulty } from './style';

function Index(props) {
  return (
    <Container>
      <Search>Search</Search>
      <List>
        <Type>All</Type>
        <Type>Assassins</Type>
        <Type>Fighters</Type>
        <Type>Mages</Type>
        <Type>Marksmen</Type>
        <Type>Supports</Type>
        <Type>Tanks</Type>
      </List>
      <Difficulty>difficulty</Difficulty>
    </Container>
  );
}

export default Index;
