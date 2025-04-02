import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOne } from "../provider/dataProvider";

type useUpdateParams = {
    resource: string;
    id: number

}
const useUpdate = ({resource, id}: useUpdateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variable) => {
            return updateOne({resource, id, variable})
        },
           onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}

export default useUpdate