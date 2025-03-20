import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchItems } from "../redux/itemSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";

interface ItemListProps {
  searchQuery: string;
}

const ItemList = ({ searchQuery }: ItemListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-72 overflow-y-auto bg-white">
      {loading ? (
        <Loader />
      ) : (
        <ul className="divide-y">
          {filteredItems.map((item) => (
            <li key={item.id} className="py-3 hover:bg-gray-100">
              <Link to={`/details/${item.id}`} className="block px-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
