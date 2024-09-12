import { React, useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
// import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleonclick = (event) => {
        setOpen(event.currentTarget);
    }

    const logoutUser = () => {
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleonclick}>

                <Typography style={{ marginTop: 2, cursor: 'pointer', marginLeft: 30 }}>{account}</Typography>

            </Box >

            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary"></PowerSettingsNewIcon>
                    <Typography>Logout</Typography>
                </MenuItem>

            </Menu>

        </>
    )
}
export default Profile;