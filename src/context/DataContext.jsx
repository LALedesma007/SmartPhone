import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const dataContext = createContext();

const DataProvider = ({children}) => {

  const [data, setData] = useState([])
  const [cartPhone, setCartPhone] = useState([])
  const [cartheadset, setCartHeadset] = useState([])
  const [cartgamer , SetCartGamer] = useState ([])
  const [cartwatch , SetCartWatch] = useState ([])
  const [cartrandom, Setcartrandom] = useState ([])
  const [dataOffer, SetdataOffer] = useState ([])
  const [cartOffer, SetcartOffer] = useState ([])

  const getallproduct = async() =>{
    try {
      const resp = await axios.get('https://smartphone-deploy.onrender.com/api/getproduct');  
      setData(resp.data.getData)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getallproduct()
  }, [])

  const getallproductOffer = async() =>{
    try {
      const resp = await axios.get('https://smartphone-deploy.onrender.com/api/getproductoffer');  
      SetdataOffer(resp.data.getDataOffers)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getallproductOffer()
  }, [])
  

  return <dataContext.Provider value={{ data, cartPhone, setCartPhone, cartheadset, setCartHeadset, cartgamer , SetCartGamer, cartwatch , SetCartWatch, cartrandom, Setcartrandom, dataOffer, cartOffer, SetcartOffer}}>{children}</dataContext.Provider>
 
}

export default DataProvider

