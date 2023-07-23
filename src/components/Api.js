import axios from 'axios';
const URL='https://bayut.p.rapidapi.com/auto-complete'
const options = {
    method: 'GET',
    
    params: {
      query: 'abu dhabi',
      hitsPerPage: '25',
      page: '0',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd9afe80b03msh50e66ae2bf0defbp17ef22jsn932403ee099b',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  
export const getData=async()=>{
    try {
        const {data:{data}} = await axios.request(URL,options);
        return data;
    } catch (error) {
        console.error(error);
        console.log("error display")
    }
}
