import styled from 'styled-components';

export const Container = styled.div`
  background: #0f1823;
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
  border: 2px solid white;
  display: flex;
  flex-direction: row;
`;

export const Character_List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 80px;
  font-weight: 800;
  overflow: auto;
  width: 100%;
`;

export const Character_Name = styled.div`
  color: white;
`;

export const Character = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const Character_Info = styled.div`
  width: 100%;
  span {
    color: white;
    font-weight: 600;
  }
`;

export const Role_Container = styled.div``;

export const Role = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

export const Biography_Container = styled.div``;

export const Biography = styled.div`
  color: white;
  max-width: 100%;
`;
