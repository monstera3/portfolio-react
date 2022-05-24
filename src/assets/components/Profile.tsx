import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Profile = () => {

  return(
    <>
      <ContainerStyle>
      <LeftBar />
      <div className="contentStyle">
        Profile
      </div>
      </ContainerStyle>
    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
 
`;
