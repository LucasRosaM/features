import axios from 'axios';

class api {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    }
}
api.getUserInfo('LucasRosaM')