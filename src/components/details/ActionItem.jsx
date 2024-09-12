import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Cart = ShoppingCartIcon;
const Flash = BoltIcon;
const Image = styled('img')`
`
const StyleButton = styled(Button)(({ theme }) => ({


    width: '46%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }

}))

export const ActionItem = ({ product }) => {
    return (
        <LeftContainer>
            <Box style={{ padding: "15px 20px", border: "1 solid #f0f0f0", width: "95%" }}>


                <Image src={product.detailUrl} alt="products" />
            </Box>
            <StyleButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }}><Cart />add to Cart</StyleButton>
            <StyleButton variant='contained' style={{ background: '#fb541b' }}><Flash />Buy Now</StyleButton>
        </LeftContainer>
    )
}