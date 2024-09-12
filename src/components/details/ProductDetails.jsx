import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
// import styled from "@emotion/styled";

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& >p{
    font-size:14px;
    margin-top:10px;
}
`
const StyleBadge = styled(LoyaltyIcon)`
margin-right:10px;
color:#00CC00;
font-size:15px;
`
const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontsize: 14 }}>8 Rating & 1 Reviews
                <Box component="span">
                    <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" />
                </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>{product.price.cost}</Box>&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}><strike>{product.price.discount}</strike></Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText >
                <Typography><StyleBadge />Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or more </Typography>
                <Typography><StyleBadge />Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
                <Typography><StyleBadge />Special PriceGet extra 15% off (price inclusive of cashback/coupon)</Typography>
                <Typography><StyleBadge />Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and above</Typography>
                <Typography><StyleBadge />Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}> Delivery by{date.toDateString()}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell style={{ fontWeight: 600 }}> No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="span" style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#878787' }}>SuperContent</Box>
                            <Typography > Gst invoice available</Typography>
                            <Typography > View more seller starting from ₹ {product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="FlipcartPoint" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>
                            Description
                        </TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetails;