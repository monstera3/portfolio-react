import React from 'react';
import Drawer from '@mui/material/Drawer';
import {  Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import styled from 'styled-components';

const drawerWidth = 240;


type PageType = {
  title: string,
  path: string,
}
export const pages: PageType[] = [
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


type Anchor = 'right';

export  const ResponsiveDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const drawer =()=> (
    <div>
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
    </div>
  );

  return (
    <div>
      <Box sx={{display: 'block'}}>
        <React.Fragment key={'right'}>
            <Toolbar>
              <IconButton
                onClick={toggleDrawer('right', true)}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                edge="start"
                // どの幅からハンバーガーメニューを出すか sm or md
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          {/*ハンバーガーメニューの時*/}
          <Drawer
            anchor={'right'}
            open={state['right']}
            variant="temporary"
            onClose={toggleDrawer('right', false)}
            sx={{display: { xs: 'block', sm:'none'},
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}
          >
            {drawer()}
          </Drawer>
          {/*sm以上のサイズで表示*/}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer()}
          </Drawer>
        </React.Fragment>
      </Box>

    </div>
  );
}

const LeftBarStyle = styled.div`
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
