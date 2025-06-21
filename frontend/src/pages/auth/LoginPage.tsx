import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import axios from 'axios';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('customer');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      { phoneNumber, password , role: userType }, 
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );


    if (response.status === 200) {
  const role = response.data.user.role;
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('role', role);
  location.reload();
  navigate(`/dashboard/${role}`);
}

  } catch (err: any) {
    console.error('Login error:', err);
    if (err.response && err.response.data && err.response.data.message) {
      setError(err.response.data.message);
    } else {
      setError('Login failed');
    }
  }
};


  return <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back to Niyo Salon
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>
        <div className="flex border-b border-gray-200 mb-6">
          <button className={`flex-1 py-2 text-center font-medium ${userType === 'customer' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setUserType('customer')}>
            Customer
          </button>
          <button className={`flex-1 py-2 text-center font-medium ${userType === 'staff' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setUserType('staff')}>
            Staff
          </button>
          <button className={`flex-1 py-2 text-center font-medium ${userType === 'admin' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setUserType('admin')}>
            Admin
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon size={18} className="text-gray-400" />
              </div>
              <input id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon size={18} className="text-gray-400" />
              </div>
              <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your password" required />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon size={18} className="text-gray-400" /> : <EyeIcon size={18} className="text-gray-400" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-purple-700 hover:text-purple-900">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-purple-700 hover:text-purple-900">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>;
};
export default LoginPage;