import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://ramen-kuman-das-server.vercel.app", 
});

const useAxiosSecure = () => {
    
    return axiosSecure;
};

export default useAxiosSecure;