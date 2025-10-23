import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto flex items-center gap-4">
      <div className="flex items-center justify-start gap-2 font-semibold text-lg">
        Logo
      </div>
      <div className="flex-1 ml-auto">
        <Link
          href="/educator/add-courses"
          className="mr-4 text-gray-700 hover:text-gray-900"
        >
          Add Courses
        </Link>
        <Link href="/login" className="mr-4 text-gray-700 hover:text-gray-900">
          Login
        </Link>
        <div className="rounded-full  bg-blue-500 hover:bg-blue-600 cursor-pointer">
          <Link
            href="/register"
            className="flex px-4 py-2 min-w-36 text-white text-center"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
