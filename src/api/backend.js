import axios from "axios";
const baseURl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: baseURl,
});
