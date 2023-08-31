import { useState } from "react"
import { db } from "../firebase/config"
import { arrayUnion, updateDoc, doc } from "firebase/firestore"

export const useEnroll = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const enroll = async (user, course) => {
    setError(null)
    setIsPending(true)

    try {
      //enroll user in choosen course
      await updateDoc(doc(db, 'users', user.id), {
        'courses': arrayUnion({
          id: course.id,
          progress: 0,
          isComplete: false
        })
      })
      setIsPending(false)
    }
    catch(err) {
      console.log(err)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, enroll }
}