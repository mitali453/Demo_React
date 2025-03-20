interface Item {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ItemDetailProps {
  item?: Item | null;
}

export default function ItemDetails({ item }: ItemDetailProps) {
  if (!item) {
    return <div className="text-center mt-10 text-gray-600">No item selected.</div>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-md w-1/2 h-72 flex flex-col items-center justify-center">
  <img 
      src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" 
      alt="Profile" 
      className="w-24 h-24 rounded-full mb-4"
    />
    <h2 className="text-xl font-semibold text-gray-800">{item?.name}</h2>
    <p className="text-gray-600">Email: {item?.email}</p>
    <p className="text-gray-600">Phone: {item?.phone}</p>
    <p className="text-gray-600">Website: {item?.website}</p>
  </div>
</div>
  );
}
