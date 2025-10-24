export default function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center">
      <form
        action=""
        className="max-w-xl w-full h-14 flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4"
      >
        <input
          type="text"
          placeholder="Search for courses..."
          className="w-full h-full outline-none"
        />
        <button
          type="submit"
          className="py-3 px-7 bg-blue-600 text-white rounded-lg cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
}
