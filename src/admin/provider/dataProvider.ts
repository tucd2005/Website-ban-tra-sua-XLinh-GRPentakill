
import axios from "axios";
import { config } from "../../api/axios";



type getListType={
      resource: string
}




// const dataProvider = {
//   getList: async ({ resource }: getListParams) => {
//     try {
//       const responce = await axios;
//     } catch (error) {}
//   },
// };

type deleteType = {
    resource : string,
    id: number
}

type createType = {
    resource: string,
    variable: any,
}
type updateType = {
    resource: string,
    variable: any,
    id: number
}

type getOneType = {
    resource: string,
    id: number
}

const dataProvider = {
     getList: async({resource}:getListType)=>{
            const response = await config.get(`/${resource}`);
            return {
                  data:response.data
            }
      },

    deleteOne: async({resource , id}: deleteType) => {
        const response = await config.delete(`/${resource }/${id}`);
        return {
            success: true
        }
    },

    createOne: async({resource, variable}: createType) => {
        const response = await config.post(`/${resource}`, variable);
        return {
            data: response.data
        }
    },

    updateOne: async({resource, variable, id}: updateType) => {
        const response = await axios.put(`/${resource}/${id}`, variable);
        return{
            data: response.data
    }
    },

    getOne: async({resource, id}:getOneType) => {
       const response = await axios.get(`/${resource}/${id}`);
       return {
        data: response.data
       }
    }
}

export const {getList, deleteOne, createOne, updateOne, getOne} = dataProvider;

