import { config } from "../../api/axios"

type getListType={
      resource: string
}

const dataProvider={
      getList: async({resource}:getListType)=>{
            const response = await config.get(`/${resource}`);
            return {
                  data:response.data
            }
      }
}
export const {getList} = dataProvider