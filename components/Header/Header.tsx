import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/dist/client/router';

const DRAWER_ITEMS = [
  { text: 'Dictionary', pathname: '/' },
  { text: 'About', pathname: '/about' },
];

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const router = useRouter();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => {
                setIsDrawerOpen(true);
              }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Buddhism Dictionary
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}>
        <List>
          {DRAWER_ITEMS.map(({ text, pathname }) => {
            return (
              <ListItem
                button
                key={text}
                onClick={() => {
                  router.push(pathname);
                  setIsDrawerOpen(false);
                }}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
