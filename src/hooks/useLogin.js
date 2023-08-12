import { useState } from "react"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      //login the user
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (!res) {
        throw new Error('Could not complete login')
      }

      //dispatch the login action
      dispatch({ type: 'LOGIN', payload: res.user })
      setIsPending(false)
    }
    catch(err) {
      console.log(err)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, login }
}