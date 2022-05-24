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
    title: 'WORK',
    path: '/work',
  },
  {
    title:'SKILL',
    path:'/skill'
  },
  {
    title: 'PROFILE',
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
  .titleName{
    margin-bottom: 2rem;
    font-family: "times",Meiryo,sans-serif;
    font-weight: normal;
  }
  ul{
    li{
      list-style: none;
      padding: 3rem 0;
      a{
        font-size: 20px;
        color: #999;
        display: inline-block;
        transition: .3s;
        transform: scale(1);
        :hover{
          color: #333;
          transition: color .3s;
          transform: scale(0.95);
        }
      }
      .icon{
        margin-right: 1rem;
      }
   }
  }
`;
