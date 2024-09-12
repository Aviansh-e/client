
import { Dialog, TextField, Box, Typography, styled, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

import Authentication, { Authenticationslogin } from '../../Service/Api.jsx';

const Components = styled(Box)`
    height:70vh;
    width:73vh;
`
const Image = styled(Box)`
background:#2874f0 url("data:image/jpeg;base64,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") center 85% no-repeat;
height:83%;
width:28%;

padding: 45px 35px;
& >p, &>h5 {
    color:#FFFFFF;
    font-weight:600;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
& >div, & > button, &> p{
    marginTop:10px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
hover:none;
`
const RequestButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 7px 4px 0 rgb(0 0 0/ 20%);
`
const Createaccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`
const Text = styled(Typography)`
font-size:15px;
color:#2874f0;
`
const acoountInitialvalue = {
    login: {
        view: 'login',
        heading: 'Login',
        SubHeading: 'Get Acces to your Products'
    },
    signup: {
        view: 'signup',
        heading: 'looks like you new here',
        SubHeading: 'signup with mobile Number'
    }
}

const SignupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    passward: '',
    phone: ''

}
const logininitialvalue = {
    username: '',
    passward: ''
}
const Dialogue = ({ open, setopen }) => {
    const [account, toggleaccount] = useState(acoountInitialvalue.login);
    const [signup, setSignup] = useState(SignupInitialValue);

    const [login, setlogin] = useState(logininitialvalue);

    const { setAccount } = useContext(DataContext);
    const [err, seterror] = useState(false);

    const togglesignup = () => {
        toggleaccount(acoountInitialvalue.signup);
    }
    const handleClose = () => {
        setopen(false);
        toggleaccount(acoountInitialvalue.login);
        seterror(false);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    const Usersignup = async () => {
        let respond = await Authentication(signup);
        if (!respond) {
            return;
        }
        handleClose();
        setAccount(signup.firstname);
    }
    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const loginuser = async () => {
        let response = await Authenticationslogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            // setAccount(signup.firstname);
            setAccount(response.data.data.firstname);
        } else {
            seterror(true);
        }

    }

    return (
        <Dialog open={open} onClose={handleClose} >
            <Components>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.view}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.SubHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?

                            <Wrapper>

                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                                {err && <Typography style={{ color: '#ff6161' }}>Please Enter Valid Username or Passward</Typography>}
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='passward' label="Enter Passward" />
                                <Text>By Continuing, you agree to the Food Mart</Text>

                                <LoginButton onClick={loginuser}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestButton>Request Otp</RequestButton>
                                <Createaccount onClick={togglesignup}>New to Food? create an account</Createaccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter User Name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email number" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='passward' label="Passward" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='Phone' label="Enter Phone number" />
                                <LoginButton onClick={Usersignup}>Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Components>
        </Dialog>
    );
}
export default Dialogue;