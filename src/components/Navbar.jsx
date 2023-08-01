import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div className="flex justify-between px-8 py-5 bg-accent text-white">
      <div className="text-lg font-bold">EdPro</div>
      <nav className="flex space-x-8 mr-5">
        <Link to={`courses`}>Catalog</Link>
        <Link to={`signin`}>Sign In</Link>
        <Link to={`register`}>Register</Link>
      </nav>
    </div>
  )
}

export default Navbar