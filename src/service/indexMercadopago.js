import { initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
const VITE_BASE_TEST = import.meta.env.VITE_MERCADO_PAGO_KEY

initMercadoPago(`${VITE_BASE_TEST}`);

export const createPreference = async (totalPrice) => {

  try {
    const response = await axios.post(`${VITE_BASE_URL}/create_preference`, {
      description: 'Producto/s',
      price: totalPrice,
      quantity: 1,
    });
    const { id } = response.data;
    return id;
  } catch (error) {
    console.log(error);
  }
};