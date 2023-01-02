import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../apis/userAPI";

const useDeleteUser = (page, userId) => {
    const queryClient = useQueryClient();
    return useMutation(() => deleteUser(userId), {
        onSuccess: () => {
            queryClient.invalidateQueries(['users', page]);
        }
    });
};

export default useDeleteUser;