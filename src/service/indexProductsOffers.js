import axiosConfig from '../utils/axiosConfig';
import { endpoints } from '../utils/endpointsConfig';

export const addProductsOffers =async (prod) =>{
  try {
    const addOneProductsOffers = await axiosConfig({
      url: `${endpoints.addproductoffer}`,
      method: 'POST',
      data: prod
    })
    return addOneProductsOffers
  } catch (error) {
    console.error(error);
  }
}

export const getProductsOffersById = async(id) =>{
  try {
    const getOneProductsOffersId = await axiosConfig({
      url: `${endpoints.getproductofferid}/${id}`,
      method: 'GET',
    })
    return getOneProductsOffersId
  } catch (error) {
    console.error(error);
  }

}

export const getProductsOffers = async () => {
    try {
      const getAllProductsOffers = await axiosConfig({
        url: `${endpoints.getallpoductoffer}`,
        method: 'GET',
      })
      return getAllProductsOffers
    } catch (error) {
      console.error(error);
    }

}

export const editProductsOffers = async (_id, datas) => {
  try {
    const editOneProductsOffers = await axiosConfig({
      url: `${endpoints.editproductoffer}/${_id}`,
      method: 'PATCH',
      data: datas
    })
    return editOneProductsOffers
  } catch (error) {
    console.error(error);
  }

}

export const deleteProductsOffers = async (_id) => {
  try {
    const deleteOneProductsOffers = await axiosConfig({
      url: `${endpoints.deleteproductoffer}/${_id}`,
      method: 'DELETE',
    })
    return deleteOneProductsOffers
  } catch (error) {
    console.error(error);
  }

}