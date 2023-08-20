import axiosConfig from '../utils/axiosConfig';
import { endpoints } from '../utils/endpointsConfig';


export const addUsers =async (user) =>{
    try {
      const addOneUser = await axiosConfig({
        url: `${endpoints.register}`,
        method: 'POST',
        data: user
      })
      return addOneUser
    } catch (err) {
      console.error(err.message);
    }
}

export const getUser = async (user) => {
    try {
      const getOneUser = await axiosConfig({
        url: `${endpoints.login}`,
        method: 'POST',
        data: user
      })
      return getOneUser
    } catch (err) {
      console.error(err.message);
    }

}
