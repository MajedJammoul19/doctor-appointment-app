import React, { useEffect } from 'react'
import { SignIn, SignUp, useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isSignUp, setIsSignUp] = React.useState(false)
  const navigate = useNavigate()
  const { isSignedIn } = useUser()

  // Redirect to home if already signed in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [isSignedIn, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="w-full max-w-md">
        {isSignUp ? (
          <>
            <SignUp
              routing="virtual"
              afterSignUpUrl="/"
              afterSignOutUrl="/login"
            />
            <p className="text-center mt-4 text-gray-600 text-sm">
              Already have an account?{' '}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign In
              </button>
            </p>
          </>
        ) : (
          <>
            <SignIn
              routing="virtual"
              afterSignInUrl="/"
              afterSignOutUrl="/login"
            />
            <p className="text-center mt-4 text-gray-600 text-sm">
              Don't have an account?{' '}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
