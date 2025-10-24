"use client";

import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  const { user } = useUser();
  const { openSignIn, signOut } = useClerk();

  return (
    <div className="py-4 w-full border-b border-gray-300 bg-cyan-100/50">
      <div className="container mx-auto flex items-center gap-4">
        <div className="flex items-center justify-start gap-2 font-semibold text-lg">
          Logo
        </div>
        <div className="flex items-center ml-auto gap-4">
          {/* <div className="hidden md:flex items-center gap-3">
            <Link
              href="/educator/add-courses"
              className="text-gray-500 hover:text-gray-900"
            >
              Add Courses
            </Link>
            <div className="h-4 border-l-2 border-black/60"></div>
            <Link href="/login" className="text-gray-500 hover:text-gray-900">
              Login
            </Link>
          </div> */}
          {user && (
            <>
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/educator/add-courses"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Add Courses
                </Link>
                <div className="h-4 border-l-2 border-black/60"></div>
                <Link
                  href="/my-enrollments"
                  className="text-gray-500 hover:text-gray-900"
                >
                  My Enrollments
                </Link>
              </div>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <div className="rounded-full  bg-blue-500 hover:bg-blue-600">
              <button
                onClick={() => openSignIn()}
                className="flex px-4 py-2 min-w-36 text-white text-center cursor-pointer"
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
