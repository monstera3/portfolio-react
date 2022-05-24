import { LeftBar } from './LeftBar';
import styled from 'styled-components';

export const Profile = () => {

  return(
    <>
      <ContainerStyle>
      <LeftBar />
      <div className="contentStyle">
        <h1 className="headTitle">Profile</h1>
        Profile
      </div>
      </ContainerStyle>
    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
 
`;
