import React from 'react'
import { FaTrash } from 'react-icons/fa';

const ProductCart = () => {
  return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <table className="w-full border-b mb-4">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2">Sản phẩm</th>
            <th className="py-2">Giá</th>
            <th className="py-2">Số lượng</th>
            <th className="py-2">Tổng</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-4 flex items-center">
              <img src="https://trasuadodo.vn/wp-content/uploads/2022/09/cach-lam-tra-sua-hokkaido-09.jpg" alt="" width={"100px"} className='pr-2.5'/>
              <div>
                <p className="font-semibold">Trà sữa Oolong</p>
                <p className="text-gray-500 text-sm">Size: M</p>
              </div>
            </td>
            <td className="py-4">40.000 đ</td>
            <td className="py-4">
              <div className="flex items-center border rounded w-fit">
                <button className="px-3 py-1">-</button>
                <span className="px-4">1</span>
                <button className="px-3 py-1">+</button>
              </div>
            </td>
            <td className="py-4">40.000 đ</td>
            <td className="py-4">
              <button className="text-gray-500">
                <FaTrash size={18} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Tổng tiền: <span className="text-red-500">40.000đ</span></p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-black text-white rounded-md">CẬP NHẬP GIỎ HÀNG</button>
        </div>
      </div>
    </div>
  );

}

export default ProductCart