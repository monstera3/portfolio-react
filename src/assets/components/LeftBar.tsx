import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'



type PageType = {
  title: string,
  path: string,
}
const pages: PageType[] = [
  {
    title: 'Work',
    path: '/work',
  },
  {
    title:'Skill',
    path:'/skill'
  },
  {
    title: 'Profile',
    path: '/profile',
  }
];


export const LeftBar = () => {
  return(
    <LeftBarStyle>

      <Menu right>
        <a href="/">Sugimura Natsumi</a>
      </Menu>


      <h2 className="title"><a href="/">Sugimura Natsumi</a></h2>
      <ul>
        {pages.map((page) => (
          <li>
            <a href={page.path}>{page.title}</a>
          </li>
        ))}
          <li>
            <a href="https://github.com/monstera3"><FaGithub className="icon" size="2rem"/></a>
            <a href="https://zenn.dev/monstera"><SiZenn size="2rem" /></a>
          </li>
      </ul>
    </LeftBarStyle>
  );
}

const LeftBarStyle = styled.div`
  width: 30%;
    padding: 6rem 0;
    text-align: center;
    background-color: #69B0AC;
  .title{
    margin-bottom: 2rem;
  }
    li{
      list-style: none;
      padding: 3rem 0;
      .icon{
        margin-right: 1rem;
      }
  }
`;
