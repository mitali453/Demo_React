import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchItems } from "../redux/itemSlice";
import SearchBar from "../components/Searchbar";
import ItemList from "../components/ItemList";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-900 text-white p-4 shadow-md text-center w-full">
        <h1 className="text-lg font-semibold">User List</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-md bg-gray-100 shadow-md rounded-lg p-4">
          <SearchBar onSearch={setSearchQuery} />
           <ItemList searchQuery={searchQuery}></ItemList>
        </div>
      </main>
    </div>
  );
};

export default Home;
