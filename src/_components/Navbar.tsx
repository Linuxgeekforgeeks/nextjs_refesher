import Link from "next/link";
import React from "react";

function Navbar() {
  const session = true;
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link className="text-2xl font-bold text-blue-600" href={"/"}>
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link
                href={"/contact"}
                className=" text-blue-600 hover:text-blue-800 mr-8"
              >
                Contact
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
