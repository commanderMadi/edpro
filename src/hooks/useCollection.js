import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection) => {
	const [documents, setDocuments] = useState(null)
	const [error, setError] = useState(false)

	useEffect(() => {
		let ref = projectFirestore.collection(collection)

		const unsub = ref.onSnapshot((snapshot) => {
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