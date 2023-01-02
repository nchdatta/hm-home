import { useMutation, useQueryClient } from "react-query";
import { updateUser } from "../apis/userAPI";

const useUpdateUser = (email) => {
    const queryClient = useQueryClient();
    return useMutation(data => updateUser(email, data), {
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['user', { email: variables.email }], variables);
        }
    })

}
export default useUpdateUser;