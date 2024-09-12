import React from 'react';
import { blogImage } from '../components/Constant/Data.jsx';
import { Box, Grid, Typography, styled } from '@mui/material';

const BlogWrapper = styled(Box)`
marginTop: '130px',
  padding: 20px;
`;

const BlogImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
});

const BlogPost = styled(Box)`
  text-align: center;
  margin-bottom: 30px;
`;

const Blog = () => {
    return (
        <BlogWrapper>
            <Typography variant="h4" gutterBottom>
                Welcome to the Blog
            </Typography>
            <Grid container spacing={3}>
                {blogImage.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <BlogPost>
                            <BlogImage src={image.url} alt={`Blog Post ${index + 1}`} />
                            <Typography variant="h6">Blog Post {index + 1}</Typography>
                            <Typography variant="body2">This is my first blog Post.</Typography>
                        </BlogPost>
                    </Grid>
                ))}
            </Grid>
        </BlogWrapper>
    );
};

export default Blog;
