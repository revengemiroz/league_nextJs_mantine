import styled, { keyframes } from 'styled-components';

export const Slide = keyframes`
 0% { width: 0px; height: 72px; background-color: #ff4655;}

 100% {  width: 72px; height: 72px; }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .abilities {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export const Special_Abilities = styled.span`
  color: #0f1923;
  font-size: 45px;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 700;
`;

export const Abilities = styled.div`
  /* flex: 1; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  main {
    max-width: 70%;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Abilities_Video = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  /* height: 400px; */

  video {
    min-width: 600px;
    max-width: 600px;
    min-height: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const Ability_Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(${({ active }) => (active == 1 ? 0 : 0.5)});
  opacity: 1;

  /* :hover {
    filter: brightness(${({ active }) => (active == 1 ? 0 : 1)});
  } */
`;

export const Ability = styled.button`
  position: relative;
  background: transparent;
  opacity: 1;
  width: 72px;
  height: 72px;
  padding: 15px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${({ active }) => (active == 1 ? '#0f1923' : '#bdbcb7')};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 150%;
    height: 100%;
    transform: translate(-100%, 0) skew(-15deg);
    transition: 0.5s;
  }

  :hover::before {
    background-color: ${({ active }) => (active == 1 ? 'transparent' : '#ff4655')};
    transform: translate(-5%, 0) skew(-15deg);
  }

  :hover {
    ${Ability_Icon} {
      filter: brightness(${({ active }) => (active == 1 ? 0 : 1)});
      transform: scale(${({ active }) => (active == 1 ? 1 : 1.3)});
      transition: opacity 0.3s ease-out, transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    }
  }
`;

export const Ability_Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .abilityType {
    font-size: 22px;
    font-weight: 500;
    color: #383e3a;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .abilityDescription {
    color: #8b938c;
  }
`;
