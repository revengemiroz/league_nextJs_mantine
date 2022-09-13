import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid green;
  height: 100vh;
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

export const Champion_Text = styled.span`
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
