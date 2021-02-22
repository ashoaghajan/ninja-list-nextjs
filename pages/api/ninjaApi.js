import axios from 'axios';

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const getNinjas = async(url) => {
  try{
      const { data } = await API.get(url);
      return data
  }
  catch(err){
    console.log(err);
  }
}
