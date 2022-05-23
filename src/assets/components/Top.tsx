import styled from 'styled-components';
import { LeftBar } from './LeftBar';

export const Top = () => {

  return(
    <ContainerStyle>
      <LeftBar />
      <div className="contentStyle">
        <p>sugimura natsumi</p>
      </div>
    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  display:flex;
  .contentStyle{
    width: 70%;
    background-color: #F0EFE0;
  }
`;
