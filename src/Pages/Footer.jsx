import React from 'react';
import { Box, Typography, Grid, Link, styled } from '@mui/material';

// Styled components for footer
const FooterContainer = styled(Box)(({ theme }) => ({
    // width: '100%',
    backgroundColor: '#c2af76',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: '#333',
    margin: '0px',
    // height: '100px'

}));

const FooterSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
    display: 'block',
    color: '#2874f0',
    textDecoration: 'none',
    margin: theme.spacing(0.5, 0),
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <FooterSection>
                        <Typography variant="h6">Ecobazar</Typography>
                        <Typography variant="body2">Subscribe to our Newsletter</Typography>
                        <Typography variant="body2">Your email address</Typography>
                        <FooterLink href="#">Subscribe</FooterLink>
                        <Typography variant="body2">
                            Pellentesque eu nibh eget mauris congue mattis matti.
                        </Typography>
                    </FooterSection>
                </Grid>

                <Grid item xs={12} md={4}>
                    <FooterSection>
                        <Typography variant="h6">About Shopery</Typography>
                        <FooterLink href="#">My Account</FooterLink>

                        <FooterLink href="#">Instagram</FooterLink>
                        <Typography variant="body2">
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                        </Typography>
                    </FooterSection>
                </Grid>

                <Grid item xs={12} md={4}>
                    <FooterSection>
                        <Typography variant="h6">My Account</Typography>
                        <FooterLink href="#">Contact</FooterLink>
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Order History</FooterLink>
                        <Typography variant="body2">Proxy@gmail.com</Typography>

                    </FooterSection>
                </Grid>
            </Grid>

            {/* Footer Address Section */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    Ecobazar eCommerce, 123 Main Street, Springfield, USA
                </Typography>
                {/* <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Phone: (123) 456-7890 | Email: info@ecobazar.com
                </Typography> */}

                {/* Image Below the Address */}
                {/* <img
                    src="https://t3.ftcdn.net/jpg/05/63/83/52/360_F_563835282_EcEeNiy2UzscZrZzOHhZVWjx6E75PfHg.jpg"
                    alt="Footer Image"
                    style={{ width: '150px', height: '150px' }}
                /> */}
            </Box>

            <Typography variant="body2" style={{ marginTop: 20 }}>
                Ecobazar eCommerce © 2021. All Rights Reserved
            </Typography>
            <Typography variant="body2" style={{ marginTop: 10 }}>
                Secure Payment
            </Typography>
        </FooterContainer>
    );
};

export default Footer;
