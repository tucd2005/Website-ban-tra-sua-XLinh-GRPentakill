// import axios from "axios";

// const dataProvider = {
//   getList: async ({ resource }: getListParams) => {
//     try {
//       const respone = await axios.get(`${API_URL}/${resource}`);
//       if (responce.status !== 200) new Error(`Error`);
//       return {
//         data: respone.data,
//       };
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
//   create: async ({ resource, variables, id }: updateParams) => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/${resource}/${id}`,
//         variables
//       );
//       if (response.status !== 200) new Error("Error");
//       return {
//         data: resource.data,
//       };
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// };

// const dataProvider = {
//   getList: async ({ resource }: getListParams) => {
//     try {
//       const responce = await axios;
//     } catch (error) {}
//   },
// };
