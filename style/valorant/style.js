import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; opacity: 0.2; }

 100% { height: 100%; width: 100%; opacity: 1; }
`;

export const Container = styled.div`
  background: linear-gradient(180deg, #0f1823 70%, #ece8e1 30%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto auto;
  display: flex;
  flex-direction: row;
`;

export const Character_List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* color: white; */
  overflow: auto;
  width: 100%;
  height: 75%;
  /* max-height: 75%; */
  /* max-height: 75%; */

  .swiper {
    width: 100%;
    height: 100%;
    user-select: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Character_Name = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: white;
  width: 100%;
  background: transparent;
  height: 100%;

  .agentNo {
    font-size: 80px;
    font-weight: 800;
    font-size: 20px;
    font-weight: 500;
    height: 100%;
    margin-top: 35px;
    color: ${({ selected }) => (selected == 1 ? '#ff4655' : 'white')};
  }

  .agentName {
    font-size: 80px;
    font-weight: 800;
    padding: 0;
    color: ${({ selected }) => (selected == 1 ? '#ff4655' : 'white')};
  }
`;

export const Character = styled.div`
  width: 100%;
  min-width: 500px;
  min-height: 80vh;
  padding: 30px 0;
  /* z-index: 1000; */
  animation: ${breatheAnimation} 0.5s ease-in;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const Character_Info = styled.div`
  width: 100%;
  margin: auto 0;
  height: 100%;
  max-height: 75%;

  main {
    padding: 0 50px;
  }

  span {
    color: white;
    font-weight: 600;
  }
`;

export const Role_Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .role {
    margin-bottom: 10px;
  }
`;

export const Role = styled.div`
  color: white;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    padding: 0 !important;
    font-size: 47px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`;

export const Role_Pic = styled.div`
  width: 25px;
  height: 100%;
  height: 25px;
  margin-top: -20px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const Biography_Container = styled.div`
  display: flex;
  flex-direction: column;

  .bio {
    margin-bottom: 20px;
  }
`;

export const Biography = styled.div`
  color: white;
  max-width: 100%;
  border-bottom: 2px solid white;
  padding-bottom: 60px;
`;
