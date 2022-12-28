import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../utils/firebase.init";

const useUser = () => {
    const [currentUser] = useAuthState(auth);

    const { data: user } = useQuery('user', () => fetch(`http://localhost:5000/user/${currentUser.email}`)
        .then(res => res.json()));


    return [user];

};

export default useUser;