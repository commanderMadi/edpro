import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import { useAuthContext } from "../hooks/useAuthContext"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, login } = useLogin()
  const { user } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (user) {
    return <Navigate to='/my-courses' replace/>
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl text-accent font-medium my-12">Welcome back! Ready to resume your learning journey?</h2>
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 pt-12">
        <label className="labl-txt">
          <span>Email</span>
          <input
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="txt-inpt"
          />
        </label>
        <label className="labl-txt">
          <span>Password</span>
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="txt-inpt"
          />
        </label>
        <div className="flex justify-end mt-8">
          {!isPending && <button className='btn-primary'>Login</button>}
          {isPending && <button className='btn-primary' disabled>Loading</button>}
        </div>
      </form>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}
  
export default Login