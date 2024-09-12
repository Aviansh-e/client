import React, { useEffect } from "react";
import { Box, Typography, styled, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/action/ProductAction";
import { ActionItem } from "./ActionItem";
import ProductDetails from "./ProductDetails";
const Components = styled(Box)`
background:#F2F2F2;
`
const Container = styled(Grid)`
background: #FFFFFF;
display :flex;
`
const RightContainer = styled(Grid)`
margin-top: 50px;
`
const DetailsPage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product]);

    console.log("err", product);

    return (
        product && Object.keys(product).length && (
            <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <ProductDetails product={product} />
                </RightContainer>
            </Container>
        )
    );
};

export default DetailsPage;
