import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid black;
  min-height: 100vh;
`;

export const Champion_Collection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  border: 2px solid green;
  width: 75vw;
  margin: 0 auto;
`;

export const Text_Container = styled.div`
  border: 2px solid red;
  width: 100%;
  text-align: center;
`;

export const Choose_Your_Text = styled.span`
  font-size: 30px;
  display: block;
  text-transform: uppercase;
`;

export const Champion_Text = styled.span`
  display: block;
  font-size: 30px;
  text-transform: uppercase;
`;

export const Sub_Text = styled.div`
  display: block;
  font-size: 30px;
`;

export const Sub_Text_2 = styled.div`
  display: block;
  font-size: 30px;
`;

export const League_Champion_Card = styled.div`
  border: 2px solid red;
  display: flex;
  width: 269px;
  height: 353px;
  flex-direction: column;
`;

export const League_Champion_Card_Image_Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const League_Champion_Card_Title = styled.div`
  background-color: #061c25;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 2px;
`;
