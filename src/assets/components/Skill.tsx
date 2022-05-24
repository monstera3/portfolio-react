import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Skill = () => {

  return(
    <>
      <ContainerStyle>
        <LeftBar />
        <div className="contentStyle">
          <h1 className="headTitle">Skill</h1>
          Skill
        </div>
      </ContainerStyle>

    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
`;
