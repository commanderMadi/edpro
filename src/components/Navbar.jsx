import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div className="flex justify-between bg-blue-800 p-5 text-white">
      <div className="text-lg font-bold">EdPro</div>
      <div className="flex space-x-8">
        <Link to={`catalog`}>Catalog</Link>
        <Link to={`signin`}>Sign In</Link>
        <Link to={`register`}>Register</Link>
      </div>
    </div>
  )
}

export default Navbar