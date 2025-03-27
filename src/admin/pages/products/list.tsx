import { Button, Popconfirm, Table } from "antd";
import useList from "../../hooks/useList"
import ProductDrawer from "../../components/ProductDrawer";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
      const columns = [
            { title: "ID", dataIndex: "id", key: "id" },
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Description", dataIndex: "description", key: "description" },
            { title: "Price", dataIndex: "price", key: "price" },
            { title: "Material", dataIndex: "material", key: "material" },
            {
                  title: "Action",
                  key: "action",
                  render: () => (
                        <div>
                              <Popconfirm title={"Ban co chac chan muon xoa"} okText="Yes" cancelText="No" >
                                    <Button danger className="m-1" >Delete</Button>
                              </Popconfirm>
                              <Button className="m-1">Edit</Button>
                              {/* <Button className="m-1">Detail</Button> */}
                        </div>
                  ),
            },
      ];
      // const [open, setOpen] = useState(false);

      const { data, isLoading, error } = useList({ resource: "products" });

      // const showDrawer = () => {
      //       setOpen(true);
      // };

      // const onClose = () => {
      //       setOpen(false);
      // };

      // if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error?.message}</div>;

      return (
            <div>
                  <h1>Product List</h1>

                  {/* <Button type="primary" onClick={showDrawer}>
                        Open
                  </Button> */}
                  <Link to="add">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 m-2 active:bg-green-700 cursor-pointer">
                              Add Product
                        </button>
                  </Link>
                  <Table
                        className="mt-4"
                        columns={columns}
                        dataSource={data?.data}
                        rowKey="id"
                        pagination={{ pageSize: 5 }} // Số sản phẩm mỗi trang
                  />
            </div>
      );
};

export default ProductList;

// import React from 'react'
// import useDelete from '../../hooks/useDelete';
// import { Button, message, Popconfirm } from 'antd';

// const ProductList = () => {
// const { mutate } = useDelete({ resource: "products" });
//   return (
//     <Popconfirm
//     title="Bạn có chắc chắn muốn xóa không?"
//     onConfirm={() => {
//         mutate(item.id, {
//             onSuccess: () => message.success("Xóa thành công"),
//             onError: (error) => message.error(error?.message),
//         });
//     }}
//     >
//         <Button type="primary" danger size="small">
//             Xóa
//         </Button>
//     </Popconfirm>

//   )
// }

// export default ProductList

