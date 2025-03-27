import { Button, message, Popconfirm, Table } from "antd";
import useList from "../../hooks/useList";
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

    if (error) return <div>Error: {error?.message}</div>;

    return (
        <div>
            <h1>Product List</h1>
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
                pagination={{ pageSize: 5 }}
            />
            {contextHolder}
        </div>
    );
};

export default ProductList;
