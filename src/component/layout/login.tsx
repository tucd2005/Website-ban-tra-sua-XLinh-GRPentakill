import React from "react";
import Header from "./header";
// import Footer from "./footer";

const login = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-lg flex max-w-3xl w-full">
          {/* Form Section */}
          <div className="w-1/2 p-6">
            <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
            {/* <p className="text-gray-500 text-center mb-6">
                                    Get access to your Orders, Wishlist, and Recommendations.
                              </p> */}
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-left font-bold"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-left font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Login
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Create Account
                </a>
              </p>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Farmer holding vegetables"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default login;
