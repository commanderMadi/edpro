import { useState } from "react"
import { auth, db } from "../firebase/config"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import { useAuthContext } from "./useAuthContext"


export const useRegister = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const register = async (fullName, email, password) => {
    setError(null)
    setIsPending(null)

    try {
      //register user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error('Could not complete registration')
      }

      //create a user document
      const courses = {enrolled: [], completed: []}
      await setDoc(doc(db, 'users', res.user.uid), { fullName, courses }, )

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user})

    }
    catch(err) {
      console.log(err)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, register }
}
