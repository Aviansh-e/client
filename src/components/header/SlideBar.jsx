import { Dialog, DialogTitle, DialogContent, DialogActions, Button, styled, List, ListItem } from '@mui/material';

// Custom styling for the dialog
const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        marginLeft: 0, // Align with the left edge
        marginTop: '113px', // 100px space from the top
        position: 'fixed',
        left: 0, // Position the dialog to start from the left edge
        width: '20%', // Take one-fifth of the screen width
        height: '90%', // Take 90% of the screen height
        maxWidth: 'none', // Prevent Material-UI from setting a default max-width
        transition: 'transform 0.3s ease-in-out', // Smooth slide-in animation
        transform: 'translateX(0)', // Start in the visible position
        overflow: 'hidden',
    },
}));

// Custom styled List item with hover effect and default styles
const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    padding: '10px 15px',
    color: 'black', // Default text color is black
    fontWeight: 'bold', // Make the text bold
    fontSize: '18px', // Increase the font size
    '&:hover': {
        backgroundColor: 'green', // Background color turns green on hover
        color: 'white', // Text color turns white on hover
    },
}));


const SimpleDialog = ({ open, onClose }) => {
    const categories = [
        'Fresh food',
        'River Fish',
        'Chicken and Meat',
        'Drink and Water',
        'Cake and Bread',
        'Butter and Cream',
        'Cooking',
    ];

    return (
        <CustomDialog open={open} onClose={onClose}>
            <DialogTitle style={{ backgroundColor: 'grey' }}>All Categories</DialogTitle>

            <DialogContent>
                <List>
                    {categories.map((category, index) => (
                        <StyledListItem key={index}>
                            {category}
                        </StyledListItem>
                    ))}
                </List>
                <Button
                    style={{
                        marginTop: '20px',
                        width: '100%',
                        color: '#2874f0', // Blue text color for the button
                    }}
                    onClick={() => alert('View All Categories')}
                >
                    View All Categories
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </CustomDialog>
    );
};

export default SimpleDialog;
