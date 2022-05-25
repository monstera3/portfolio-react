import React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



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
      sample
    </div>
  );

  return (
    <div>
        <React.Fragment key={'right'}>

          <IconButton
            onClick={toggleDrawer('right', true)}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            // どの幅からハンバーガーメニューを出すか sm or md
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/*ハンバーガーメニューの時*/}
          <Drawer
            anchor={'right'}
            open={state['right']}
            variant="temporary"
            onClose={toggleDrawer('right', false)}
            sx={{display: { xs: 'block', sm:'none'}}}
          >
            {drawer()}
          </Drawer>
          {/*sm以上のサイズで表示*/}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' }
            }}
            open
          >
            {drawer()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
