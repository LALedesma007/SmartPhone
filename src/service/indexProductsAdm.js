import axiosConfig from '../utils/axiosConfig';
import { endpoints } from '../utils/endpointsConfig';

export const addProducts =async (prod) =>{
  try {
    const addOneProducts = await axiosConfig({
      url: `${endpoints.addproduct}`,
      method: 'POST',
      data: prod
    })
    return addOneProducts
  } catch (error) {
    console.error(error);
  }
}

export const getProductsById = async(id) =>{
  try {
    const getOneProductsId = await axiosConfig({
      url: `${endpoints.getproductid}/${id}`,
      method: 'GET',
    })
    return getOneProductsId
  } catch (error) {
    console.error(error);
  }

}

export const getProducts = async () => {
    try {
      const getAllProducts = await axiosConfig({
        url: `${endpoints.getallproduct}`,
        method: 'GET',
      })
      return getAllProducts
    } catch (error) {
      console.error(error);
    }

}

export const editProducts = async (_id, datas) => {
  try {
    const editOneProducts = await axiosConfig({
      url: `${endpoints.editproduct}/${_id}`,
      method: 'PATCH',
      data: datas
    })
    return editOneProducts
  } catch (error) {
    console.error(error);
  }

}

export const deleteProducts = async (_id) => {
  try {
    const deleteOneProducts = await axiosConfig({
      url: `${endpoints.deleteproduct}/${_id}`,
      method: 'DELETE',
    })
    return deleteOneProducts
  } catch (error) {
    console.error(error);
  }

}