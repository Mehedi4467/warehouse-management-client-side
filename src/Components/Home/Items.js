import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Item from "./Item";

const Items = () => {
  const [Items] = useProducts([]);

  return (
    <div>
      <h2 className="text-2xl text-blue-500 text-center my-10">
        Inventory Items
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {Items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>

      <div className="py-10 text-center">
        <Link
          to="/manageInventory"
          className="px-16 rounded-lg py-4 my=10 bg-blue-400 text-white hover:bg-blue-500"
        >
          Manage Items
        </Link>
      </div>
    </div>
  );
};

export default Items;
