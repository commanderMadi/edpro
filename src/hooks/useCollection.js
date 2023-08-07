import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot } from 'firebase/firestore'


export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      //update state
      setDocuments(results)
      setError(null)

    }, (error) => {
      console.log(error)
      setError('Could not fetch the data')
    })

    //Unsubscribe on unmount
    return () => unsub()

  }, [collection])

  return { documents, error }
}