import React, { useState } from "react";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? "Welcome Back to SkillLink" : "Create an Account to SkillLink"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Name..."
                className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button onClick={toggleForm} className="text-blue-500 hover:underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={toggleForm} className="text-blue-500 hover:underline">
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
