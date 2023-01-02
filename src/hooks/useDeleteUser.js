import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../apis/userAPI";

const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });
};

export default useDeleteUser;