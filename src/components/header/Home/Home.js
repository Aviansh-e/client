import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import Navbaar from "./Navbaar";
import { Fragment } from "react";
import { useEffect } from "react"; // it basically tells us is when we have to call the function
import Slide from "./Slide";
import Midslide from "./Midslide";
import Footer from '../../../Pages/Footer.jsx';

import { getProducts } from "../../../Redux/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

import MiddleSection from "./MiddleSection.jsx";
const Components = styled(Box)`

padding:20px 10px;
background:#F2F2F2;
`
const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    console.log(products, "nothing");
    useEffect(() => {
        dispatch(getProducts());
        // console.log({ products });
    }, [dispatch]);
    return (
        <Fragment>
            <Navbaar />
            <Components>
                <Banner />
                <Midslide products={products} title="Deal  of the Day" timer={true} />
                <MiddleSection></MiddleSection>
                <Slide products={products} title="Discount for you" timer={false} />
                <Slide products={products} title="Suggestion item " timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Item " timer={false} />
                {/* <Slide products={products} title="Trending offer " timer={true} />
                <Slide products={products} title="Top Deals on Vegetables" timer={true} /> */}
            </Components>
            <Footer />

        </Fragment>

    )
}
export default Home