import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="bg-gray-200 shadow-md"> 
     <div className="flex justify-between items-center p-4  max-w-6xl mx-auto">
        <Link to="/" className=" font-bold text-sm sm:text-xl flex flex-wrap">
         <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-blue-800">Home</span>
        <span className="text-blue-500">Linka</span>
      </h1>
        </Link>
      <form action="" className="bg-zinc-100 p-3 rounded-lg flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className=" bg-transparent focus:outline-none w-24 sm:w-64 "
        />
        <FaSearch className="text-gray-500 mr-2" />
      </form>
      <ul className="flex gap-4">
        <Link to="/">
        <li className="text-gray-700 hover:text-blue-500 hidden sm:inline hover:underline">
           Home
        </li>
        </Link>
        <Link to="/about" >
        <li className="hidden text-gray-700 hover:text-blue-500  sm:inline hover:underline">
            About
        </li>
        </Link>
        <Link to="/sign-In">
        <li className="text-gray-700 hover:text-blue-500  sm:inline hover:underline">
            Sign in
        </li>
        </Link>
      </ul>
     </div>
    </header>
  )
}

export default Header
