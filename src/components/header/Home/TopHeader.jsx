import { useState, useContext } from 'react';
import { ShoppingCart } from "@mui/icons-material";
import { Box, Typography, Button } from '@mui/material';
import { DataContext } from '../../../Context/DataProvider'; // Corrected import path
import GoginButton from '../../Login/LoginDialogue.jsx'; // Assuming this is a dialog component
import Search from '../Search.mjs';
import Profile from '../Profile.jsx';


export default function TopHeader() {
    const { account, setAccount } = useContext(DataContext);
    const [open, setOpen] = useState(false);

    const handleOn = () => {
        console.log('Login button clicked');
        setOpen(true);
    };

    return (
        <Box>
            <Box sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: '#fff', // Light background color
                color: 'black', // Text color
                height: '85px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '0 20px', // Padding to ensure content doesn't touch the edges
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Adds shadow for better visibility
            }}>
                <Typography
                    variant="h6"
                    sx={{
                        display: 'flex', // Ensures the image and text are aligned
                        alignItems: 'center', // Vertically align the image and text
                        fontWeight: 'bold',
                        color: '#000', // Black color for text
                        marginRight: 20, // Margin to space out elements
                    }}
                >


                    <img

                        src="data:image/png;base64,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" // Add your image source here
                        alt="Ecobazar Logo"
                        style={{ width: '30px', height: '30px', marginRight: '8px' }} // Adjust image size
                    />
                    Ecobazar
                </Typography>


                <Search />
                <Button
                    variant="contained"
                    style={{
                        height: '35px',
                        borderRadius: '4px',
                        color: 'white',
                        backgroundColor: 'green',
                        marginLeft: '0',
                    }}
                >
                    Search
                </Button>
                {/* Render Login Button or Profile */}
                {account ? (
                    <Profile account={account} setAccount={setAccount} />
                ) : (
                    <Button variant="contained" onClick={handleOn} style={{ marginLeft: '20px' }}>
                        Login
                    </Button>
                )}
                <Box style={{ display: 'flex', marginLeft: 50 }}>
                    <ShoppingCart />
                    <Box>
                        <Typography>Shopping Cart</Typography>
                        <Typography marginLeft={5} fontSize={12}>$10</Typography>
                    </Box>
                </Box>

                <GoginButton open={open} setopen={setOpen} />
            </Box>
        </Box>
    );
}
