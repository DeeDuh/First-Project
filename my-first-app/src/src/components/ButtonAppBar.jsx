import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    padding: '10px',
    margin: '0 5px',
    color: 'white',
    textDecoration: 'none',
  }
}

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Мой сайт с тестами
          </Typography>
          <Link style={styles.link} to='/'>Домой</Link>
          <Link style={styles.link} to='/create-test'>Создать карточку</Link>
          <Link style={styles.link} to='/tests'>Список тестов</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}