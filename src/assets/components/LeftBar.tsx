import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import styled from 'styled-components';





export const LeftBar = () => {
  return(
    <LeftBarStyle>
        <ul>
          <li><h2>Natsumi Sugimura</h2></li>
          <li><a href="https://www.google.com">Work</a></li>
          <li><a href="https://www.google.com">Skill</a></li>
          <li><a href="https://www.google.com">Profile</a></li>
          <li><a href="https://github.com/monstera3"><FaGithub className="icon" size="2rem"/><SiZenn size="2rem" /></a></li>

        </ul>
    </LeftBarStyle>

  );
}

const LeftBarStyle = styled.div`

  width: 30%;
    padding: 6rem 0;
    text-align: center;
    background-color: #69B0AC;
    li{
      list-style: none;
      padding: 3rem 0;
      .icon{
        margin-right: 1rem;
      }
  }
`;
