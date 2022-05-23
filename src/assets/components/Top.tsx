import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';

export const Top = () => {

  return(
    <ContainerStyle>
      <div className="logoStyle">
        <h2>Natsumi Sugimura</h2>
        <ul>
          <li><a href="https://www.google.com">Work</a></li>
          <li><a href="https://www.google.com">Skill</a></li>
          <li><a href="https://www.google.com">Profile</a></li>
          <li><a href="https://github.com/monstera3"><FaGithub size="2rem" /><SiZenn size="2rem" /></a></li>

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
    background-color: #69B0AC;
    li{
      list-style: none;
    }
    
  }
  .contentStyle{
    width: 70%;
    background-color: #F0EFE0;
  }
`;
