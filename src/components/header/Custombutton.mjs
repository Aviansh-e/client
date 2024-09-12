import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { DataContext } from '../../Context/DataProvider.jsx';
import { Box, Typography, styled } from "@mui/material";

// import Profile from "./Profile.js";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: flex-start; // Ensures items start from the left
  align-items: center;
  margin-left: 3%; // Optional if you need spacing from the left side of the parent container
  & > button, & > p, & > div {
    margin-right: 20px; // Adjust this margin for spacing between elements
    font-size: 13px;
  }
`;

const Custombutton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const navigate = useNavigate(); // Correct hook for navigation

    const handleOn = () => {
        setOpen(true);
    };

    const handleOnClick = () => {
        navigate('/pages'); // Navigate to the "pages" route
    };
    const handleOnabouts = () => {
        navigate('/abouts');
    }
    const handleOnhome = () => {
        navigate('/');
    }
    const handleOnshops = () => {
        navigate('/shops');
    }
    const handleOnblogs = () => {
        navigate('/blogs');
    }
    const handleOnContact = () => {
        navigate('/contacts');
    }

    return (
        <Wrapper>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnhome}>Home</Typography>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnshops}>Shop</Typography>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnClick}  >Pages</Typography> {/* Corrected onClick */}
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnblogs} >Blog</Typography>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnabouts}>About</Typography>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }} onClick={handleOnContact} >Contact</Typography>
        </Wrapper>
    );
};

export default Custombutton;
