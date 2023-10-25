import React, { Dispatch, SetStateAction, FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styles from './Header.module.css';
import HelpModal from './HelpModal';
import logo from '/images/logo-speech-sound-sleuth.png';
import Accordian from '../pages/Game/Accordian';

type HeaderProps = {
  isGamePage: boolean;
  imageLoading: boolean;
  scene: {
    data: {
      imageCreditLink?: string;
      imageCreditName?: string;
      imageUrl?: string;
      sound?: string;
      title?: string;
      _id?: string;
    };
  };
  foundItems: {
    _id: string;
    name: string;
    imageUrl: string;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  }[];
  isPracticeTime: boolean;
  isResumingTime: boolean;
  setIsResumingTime: Dispatch<SetStateAction<boolean>>;
};

const pages = ['New Game', 'Leaderboard'];

const Header: FC<HeaderProps> = ({
  isGamePage,
  scene,
  foundItems,
  imageLoading,
  isPracticeTime,
  isResumingTime,
  setIsResumingTime,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {isGamePage ? (
        <div style={{ position: 'relative' }}>
          <AppBar className={styles.mainHeader}>
            <Container maxWidth='xl' className={styles.headerPadding}>
              <Toolbar disableGutters>
                <Typography
                  noWrap
                  component='a'
                  href='/'
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Box
                    component='img'
                    className={styles.logo}
                    alt='Logo'
                    src={logo}
                  />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size='large'
                    aria-label='menu'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenNavMenu}
                    color='inherit'
                    className={styles.iconButtonPadding}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign='center'>{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant='h5'
                  noWrap
                  component='a'
                  href='/'
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                  }}
                >
                  <Box
                    component='img'
                    className={styles.logoSmall}
                    alt='Logo'
                    src={logo}
                  />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'rgb(215, 215, 215)',
                        display: 'block',
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <HelpModal />
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  ></Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      ) : (
        <AppBar className={`${styles.mainHeader} ${styles.mainHeaderBorder}`}>
          <Container maxWidth='xl' className={styles.headerPadding}>
            <Toolbar disableGutters>
              <Typography
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <Box
                  component='img'
                  className={styles.logo}
                  alt='Logo'
                  src={logo}
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='menu'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                  className={styles.iconButtonPadding}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant='h5'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                }}
              >
                <Box
                  component='img'
                  className={styles.logoSmall}
                  alt='Logo'
                  src={logo}
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'rgb(215, 215, 215)',
                      display: 'block',
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <HelpModal />
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                ></Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
      {isGamePage ? (
        <AppBar
          sx={{
            backgroundColor: '#36445f',
            color: 'rgb(215, 215, 215)',
            height: 'auto',
            position: 'sticky',
            top: '0',
            zIndex: 1,
            boxShadow: 2,
            borderBottom: '1px solid #3c4a66',
          }}
        >
          <Toolbar disableGutters>
            <div className={styles.gameBar}>
              <Accordian
                scene={scene}
                foundItems={foundItems}
                imageLoading={imageLoading}
                isPracticeTime={isPracticeTime}
                isResumingTime={isResumingTime}
                setIsResumingTime={setIsResumingTime}
              />
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
