import { Box, styled } from "@mui/material";
import { Grid } from "@mui/material";

const imageURL = [
    '/ssc.png',
    '/ssc.png',
    '/ssc.png',
];


const Wrapper = styled(Grid)`
  margin-top: 10px;
  width: 100%;
`;

const MiddleSection = () => {
    return (
        <Wrapper container>
            {
                imageURL.map((image, index) => (
                    <Grid item lg={4} md={4} xs={12} key={index}>
                        <img src={image} alt={`image-${index}`} style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Wrapper>
    )
}

export default MiddleSection;
