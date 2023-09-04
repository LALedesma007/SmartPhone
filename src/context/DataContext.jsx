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
  const [searchResults, SetSearchResults] = useState([])
  const [cartResults, SetCartResults] = useState([])
  const [user, SetUser] = useState([])
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [cartFavorite, setCartFavorite ] = useState([])

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

  const getalluser = async() =>{
    try {
      const resp = await axios.get('https://smartphone-deploy.onrender.com/api/getuser');  
      SetUser(resp.data.getData)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getalluser()
  }, [])
  
  const login = async (userData) => {
    try {
      // Realiza la autenticación aquí, comparando los datos con la lista de usuarios
      const userMatch = user.find(
        (user) => user.userName === userData.userName && user.email === userData.email
      );

      if (userMatch) {
        setAuthenticatedUser(userMatch);
        localStorage.setItem("authenticatedUser", JSON.stringify(userMatch));
      } else {
        // Maneja la autenticación fallida
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setAuthenticatedUser(null);
    localStorage.removeItem("authenticatedUser");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("authenticatedUser");
    if (storedUser) {
      setAuthenticatedUser(JSON.parse(storedUser));
    }
  }, []);

 
  return <dataContext.Provider value={{ data, cartPhone, setCartPhone, cartheadset, setCartHeadset, cartgamer , SetCartGamer, cartwatch , SetCartWatch, cartrandom, Setcartrandom, dataOffer, cartOffer, SetcartOffer, searchResults, SetSearchResults, cartResults, SetCartResults, user, SetUser, authenticatedUser, login, logout, favoriteProducts, setFavoriteProducts, cartFavorite, setCartFavorite}}>{children}</dataContext.Provider>
 
}

export default DataProvider

