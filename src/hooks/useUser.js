import { useQuery } from "react-query";
import { getUser } from "../apis/userAPI";

const useUser = (email) => {
    return useQuery(['user', email], () => getUser(email));
};

export default useUser;