import { Button, message, Popconfirm, Table } from "antd";
import useList from "../../hooks/useList";
import ProductDrawer from "../../components/ProductDrawer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDelete from "../../hooks/useDelete";  
import { useQueryClient } from "@tanstack/react-query";

const ProductList = () => {
    const { mutate } = useDelete({ resource: "products" });
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Price", dataIndex: "price", key: "price" },
        { title: "Material", dataIndex: "material", key: "material" },
        {
            title: "Action",
            dataIndex: "action",
            render: (_: any, item: any) => (
                <div>
                    <Button type="primary" size="small">
                        <Link to={`/admin/products/edit/${item.id}`}>Edit</Link>
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa không?"
                        onConfirm={() => {
                            mutate(item.id, {
                                onSuccess: () => {
                                    messageApi.success("Xóa thành công");

                                },
                                onError: (error) => messageApi.error(error?.message),
                            });
                        }}
                    >
                        <Button type="primary" danger size="small">
                            Xóa
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

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
