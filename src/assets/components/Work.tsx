import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Work = () => {

  return(
    <>
      <ContainerStyle>
        <LeftBar />
        <div className="contentStyle">
          work
        </div>
      </ContainerStyle>

    </>
  );
}

const ContainerStyle = styled.div`
  display:flex;
  .contentStyle{
    width: 70%;
    background-color: #F0EFE0;
  }
`;
