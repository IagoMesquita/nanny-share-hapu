import axios from 'axios';
async function postUser(user) {
    const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';
    const res = await axios.post(URL, user);

    return res;
}

export default postUser;