import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Skill = () => {

  return(
    <>
      <ContainerStyle>
        <LeftBar />
        <div className="contentStyle">
          Skill
        </div>
      </ContainerStyle>

    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
`;
