import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
 import axios from 'axios';
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState<string>('customer'); // Default user type


    const handleSubmit = async (e: React.FormEvent) => {
      console.log('Login attempt with userType:', role);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
      e.preventDefault();
      // setError(''); // Removed because setError is not defined

try {
  const response = await axios.post(
    "http://localhost:8080/api/auth/register",
    {
      name,
      phoneNumber,
      password,
      role: 'customer', // Assuming default role is 'customer'
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200 || response.status === 201) {
    alert("Registration successful! Redirecting to login...");
    window.location.href = "/login";
  } else {
    alert("Registration failed.");
  }
} catch (err: any) {
  if (err.response && err.response.data && err.response.data.message) {
    alert(err.response.data.message);
  } else {
    alert("Registration failed due to a network error.");
    console.error('Registration error:', err);
  }
}

  }

  return <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Create an Account
          </h1>
          <p className="text-gray-600 mt-2">
            Join Niyo Salon to book appointments and more
          </p>
        </div>
    
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon size={18} className="text-gray-400" />
              </div>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your full name" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon size={18} className="text-gray-400" />
              </div>
              <input type="number" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your phone number (94712345678)" required />
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
              <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Create a password" required />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon size={18} className="text-gray-400" /> : <EyeIcon size={18} className="text-gray-400" />}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center">
              <input id="terms" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" required />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-purple-700 hover:text-purple-900">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-purple-700 hover:text-purple-900">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-purple-700 hover:text-purple-900">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>;
};
export default RegisterPage;