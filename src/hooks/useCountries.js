import { useQuery } from "react-query";
import api from "../apis/api";
const getCountries = async () => {
    const res = await api.get('/countries');
    return res.data;
}
const useCountries = () => {
    return useQuery('countries', getCountries);
};

export default useCountries;