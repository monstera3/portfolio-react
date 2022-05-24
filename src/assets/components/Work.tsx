import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Work = () => {

  return(
    <>
      <ContainerStyle>
        <LeftBar />
        <div className="contentStyle">
          <h1 className="headTitle">Work</h1>
          work
        </div>
      </ContainerStyle>

    </>
  );
}

const ContainerStyle = styled.div`
  display:flex;
 
`;
