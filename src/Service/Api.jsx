import axios from 'axios';

const url = 'http://localhost:3001';

const Authentication = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data);
    } catch (err) {
        console.log('Error while signing up', err);
        throw err; // Throw the error to propagate it
    }
};

const Authenticationslogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data);
    } catch (err) {
        console.log('Error while login up', err);
        // throw err; // Throw the error to propagate it
        return err.response;
    }
};
// export default Authentications;
export default Authentication;
export { Authenticationslogin };