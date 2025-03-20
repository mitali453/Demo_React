import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchItemDetails, clearItemDetails } from "../redux/itemDetailsSlice";
import Loader from "../components/Loader";
import ItemDetails from "../components/ItemDetails";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { item, loading } = useSelector(
    (state: RootState) => state.itemDetails
  );

  useEffect(() => {
    if (id) dispatch(fetchItemDetails(id));
    return () => {
      dispatch(clearItemDetails());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-900 text-white p-4 shadow-md text-center w-full">
        <h1 className="text-lg font-semibold">User Details</h1>
      </header>
      <ItemDetails item={item}></ItemDetails>
    </div>
  );
};

export default Details;
