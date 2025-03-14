import axios from "axios";



export const getCards = async () => {
  const url = "https://api.pokemontcg.io/v2/cards/";
  
    try{
      const response= await axios.get(url);
      return response.data;      
      
    }catch(error){
      console.log(error);
      throw error;
    };
    
};

