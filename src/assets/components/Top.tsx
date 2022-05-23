import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Top = () => {

  return(
    <ContainerStyle>
      <div className="logoStyle">
        <h2>Natsumi Sugimura</h2>
        <ul>
          <li><a href="https://www.google.com">Work</a></li>
          <li><a href="https://www.google.com">Skill</a></li>
          <li><a href="https://www.google.com">Profile</a></li>
          <li><a href="https://github.com/monstera3"><FaGithub size={30} /></a></li>

        </ul>
      </div>
      <div className="contentStyle">
        <p>sugimura natsumi</p>
      </div>

    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  width:1200px;
  margin: 0 auto;
  display:flex;
  .logoStyle{
    width: 30%;
    text-align: center;

    li{
      list-style: none;
    }
    
  }
  .contentStyle{
    width: 70%;
  }
`;
