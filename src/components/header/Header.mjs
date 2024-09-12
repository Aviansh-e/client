import { AppBar, Box, Toolbar, styled, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import SimpleDialog from './SlideBar.jsx';
import Custombutton from './Custombutton.mjs';
import TopHeader from './Home/TopHeader.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)`
  background: #23201e;
  height: 50px;
  margin-top: 85px; /* Space for the TopHeader */
`;

const Component = styled(Link)`
  margin-left: 12%;
  text-decoration: none;
  color: inherit;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Plusimage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 2,
});

const CustomWraaperbutton = styled(Box)(({ theme }) => ({
  margin: '0 0 0 12%', // Ensures alignment from the left
}));

const MenuButton = styled(IconButton)`
  display: block; // Always visible
  
`;

const Header = () => {
  const [open, setOpen] = useState(false); // State to control the dialog open/close

  const handleOnClick = () => {
    setOpen((prevState) => !prevState); // Toggle open state
  };

  return (
    <>
      <TopHeader />
      <StyledAppBar>
        <Toolbar style={{ minHeight: 55 }}>
          {/* Menu button always visible */}
          <MenuButton onClick={handleOnClick}>
            <Menu style={{ backgroundColor: 'green', color: 'white' }} />
          </MenuButton>

          {/* Dialog (sidebar) that opens/closes */}
          <SimpleDialog open={open} onClose={handleOnClick} />

          {/* Buttons visible on all screens */}
          <CustomWraaperbutton>
            <Custombutton />
          </CustomWraaperbutton>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
