import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import styled from 'styled-components';
import { Box } from '@mui/material';



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
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
    <LeftBarStyle>
      <h1 className="titleName"><a href="/">Sugimura Natsumi</a></h1>
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
    </Box>
  );
}

const LeftBarStyle = styled.div`
  width: 100%;
    padding: 6rem 0;
    text-align: center;
    background-color: #69B0AC;
  .titleName{
    margin-bottom: 2rem;
    font-family: "times",Meiryo,sans-serif;
    font-weight: normal;
  }
    li{
      list-style: none;
      padding: 3rem 0;
      .icon{
        margin-right: 1rem;
      }
  }
`;
