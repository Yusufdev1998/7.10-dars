import axios from "axios";

const customAxios = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});

export default customAxios;
