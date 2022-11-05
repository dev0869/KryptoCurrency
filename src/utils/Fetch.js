import axios from "axios";
const Base='https://youtube-v31.p.rapidapi.com';

const options = {
    // method: 'GET',
    
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'coding',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'a2a139f442msh90f217a844c442ap1b9404jsn3db8e247daba',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


 const Fetch=async(url)=>{
 const {data}=await axios.get(`${Base}/${url}`,options);
 return data;



  }

  export default Fetch;