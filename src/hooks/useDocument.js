import { useState, useEffect } from "react"
import { db } from '../firebase/config'
import { onSnapshot, doc } from "firebase/firestore"

export const useDocument = (c, id) => {
  const [document, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = doc(db, c, id)

    const unsub = onSnapshot(ref, (snapshot) => {
      if (snapshot.data()) {
        setDocuments({...snapshot.data(), id: snapshot.id})
        setError(null)
      }
      else {
        setError('Could not find the document')
      }
    }, (err) => {
      console.log(err)
      setError('Failed to get the document')
    })

    return () => unsub()

  }, [c, id])

  return { document, error }
}