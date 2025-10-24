import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-7 text-center bg-linear-to-b from-cyan-100/70 pt-36">
      <div className="container mx-auto text-center flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-gray-800 mx-auto max-w-3xl">
          Empower your future with the courses designed to{" "}
          <span className="text-blue-600">fit your choice.</span>
        </h1>
        <p className="max-w-2xl mt-4 text-lg text-gray-500 mx-auto">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>
        <SearchBar />
      </div>
    </div>
  );
}
