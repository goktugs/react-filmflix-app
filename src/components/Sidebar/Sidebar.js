import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import {
  collapseClasses,
  useMediaQuery,
  Divider,
  ListItem,
  List,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Drawer,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery('max-width:600px');
  const redLogo =
    'https://w7.pngwing.com/pngs/280/326/png-transparent-logo-netflix-logos-and-brands-icon-thumbnail.png';
  const blueLogo =
    'https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png';

  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
  ];

  const mockCategories = ['Comedy', 'Action', 'Horror', 'Animation'];

  return (
    <div>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="filmflixLogo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                  alt="listItem"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                  alt="listItem"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
}
