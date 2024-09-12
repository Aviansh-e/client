import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, styled } from '@mui/material';
import Footer from './Footer';

// Styled components for a better look
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: theme.spacing(2),
    textAlign: 'center',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 140,
}));

const Contact = () => {
    return (

        <Box sx={{ padding: 4, backgroundColor: '#f0f0f0', marginTop: 13 }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <StyledCardMedia
                            component="img"
                            image="https://media.istockphoto.com/id/173916299/photo/recycling-symbol.jpg?s=612x612&w=0&k=20&c=JyYzIryTiJ1WxwpTlSyMtaI0OvlAQ-Okuy5CU3MS1Hw="
                            alt="Contact Image"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Our Address
                            </Typography>
                            <Typography variant="body2">
                                123 Green Street, Suite 4B
                                <br />
                                Springfield, IL 62704
                                <br />

                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Phone Numbers
                            </Typography>
                            <Typography variant="body2">
                                (123) 456-7890
                                <br />
                                (987) 654-3210
                                <br />
                                (555) 123-4567
                                <br />
                                (555) 765-4321
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Get in Touch
                            </Typography>
                            <Typography variant="body2">
                                Feel free to reach out to us for any inquiries or feedback. We're here to help!
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                                Contact Us
                            </Button>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
};

export default Contact;
