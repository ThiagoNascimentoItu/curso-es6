import axios from 'axios';

class Api {
    static async getUserInfo(usuername){
        try{
            const response = await axios.get(`https://api.github.com/user/${username}`);
            console.log(response);
        }catch(err){
            console.log('Erro na API');
        }
    }
}

Api.getUserInfo('Thiago');