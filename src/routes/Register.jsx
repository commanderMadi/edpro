import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, register } = useRegister()

  const handleSubmit = (e) => {
    e.preventDefault()
    register(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Email</span>
        <input
          required
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          required
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <div>{error}</div>}
    </form>
  )
}

export default Register