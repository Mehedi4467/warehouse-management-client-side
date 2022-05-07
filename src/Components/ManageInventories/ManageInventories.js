import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ManageInventories = () => {
  const [Items, setItems] = useProducts();

  const handelDeleteItem = (id) => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reaming = Items.filter((items) => items._id !== id);
          setItems(reaming);
        }
      });
  };
  return (
    <div className="my-10">
      <h2 className="text-xl text-blue-500 text-center my-10">
        Manage Your Product
      </h2>

      <div className="container mx-auto">
        <Link
          to="/addItem"
          className="bg-blue-400 hover:bg-blue-500 py-4 px-4 rounded-full text-white"
        >
          <i className="text-white text-xl fa-solid fa-circle-plus"></i> Add new
          item
        </Link>
      </div>
      <div className="relative container mx-auto overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F4F5F7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                PRODUCT NAME
              </th>

              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                STOCK
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier
              </th>

              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {Items.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <img src={product.img} width="40" alt="" />
                    <p>{product.name}</p>
                  </div>
                </td>

                <td className="px-6 py-4">&#x09F3; {product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>

                <td className="px-6 py-4">{product.supplier}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-between">
                    <i
                      onClick={() => handelDeleteItem(product._id)}
                      className="cursor-pointer fa-solid fa-trash-can"
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
