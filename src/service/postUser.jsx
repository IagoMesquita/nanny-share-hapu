import axios from 'axios';
async function postUser(user) {
    const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';
    const res = await axios.post(URL, user);

    return res;
}

// async function getUser(user) {
//     const URL = `https://api.github.com/users/${user}`;
//     const res = await axios.get(URL);

//     return res;
// }

export default postUser;