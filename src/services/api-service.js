import axios from 'axios';

class apiService {
    randomUserName = () => {
        return axios.get('https://randomuser.me/api/?results=1');
    }
    submitTitle = (titleInput) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: titleInput
        })
    }
}

export default new apiService();
