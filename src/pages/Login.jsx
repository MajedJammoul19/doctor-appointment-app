import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    // هنا تضيف الـ API call
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-3xl font-semibold text-gray-800">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </p>
          <p className="text-gray-500 mt-2">
            Please {state === 'Sign Up' ? 'create an account' : 'login'} to
            book an appointment
          </p>
        </div>

        {/* Full Name (Sign Up Only) */}
        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold mb-4"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle */}
        <p className="text-center text-gray-600 text-sm">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign up here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login
