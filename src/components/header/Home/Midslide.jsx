import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const Components = styled(Box)`
display:flex;
`
const LeftCompo = styled(Box)`
width:100%;
`
// const RightComp = styled(Box)`
// width:17%;
// `
const Midslide = ({ products, title, timer }) => {
    // const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        < Components>


            <LeftCompo>
                <Slide products={products} title={title} timer={timer} />
            </LeftCompo>

            {/* <RightComp>
                <img src={adURL} alt="ads" />
            </RightComp> */}
        </Components>

    )
}
export default Midslide;