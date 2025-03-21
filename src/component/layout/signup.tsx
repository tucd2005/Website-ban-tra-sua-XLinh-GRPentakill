import React from 'react'
import Header from './header';

const SignUp = () => {
  return (
    
    <div>
        <div>
        <Header />
      </div>
      <div>
 <main className="container mx-auto my-25">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <form>

              <div className="mb-4">
                <label htmlFor="fullname" className="block text-sm font-medium">Full Name*</label>
                <input type="text" id="fullname" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your full name..." required />
              </div>


              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email Address*</label>
                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your email..." required />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">Password*</label>
                <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your password" required />
              </div>

   
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password*</label>
                <input type="password" id="confirm-password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Confirm your password" required />
              </div>

 
              <button type="submit" className="w-full bg-green-500 text-white rounded-md p-2 hover:bg-green-600">Sign Up</button>
            </form>

            <p className="text-center mt-4">
              <span>Already have an account? </span>
              <a href="#" className="text-blue-500">Login</a>
            </p>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default SignUp;
