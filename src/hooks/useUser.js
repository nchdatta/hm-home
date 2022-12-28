import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../utils/firebase.init";

const useUser = () => {
    const [currentUser] = useAuthState(auth);
    const { data: user } = useQuery('user', () => fetch(`https://hm-home.onrender.com/user/${currentUser?.email}`)
        .then(res => res.json()))

    return [user];

};

export default useUser;