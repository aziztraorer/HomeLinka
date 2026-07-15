import bgimg from "../assets/hero-bg.jpg";
import searchs from "../assets/search.png";
import shopping from "../assets/shopping.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import  Scroll from "./Sectionscroll"


function Header() {
    return(
        <>
        <div
            className="w-full 
            h-screen 
            bg-cover 
            bg-center 
            justify-center
            m-auto
            flex-col
            text-white
            
            "

            style={{ backgroundImage: `url(${bgimg})` }}
        >
        <header className="w-[85%] h-20 text-white  flex m-auto  ">
            <nav className="w-full flex justify-between  items-center">

                <h1 className="text-2xl">Feane</h1>

                <ul className=" flex gap-10">
                    <li className="text-2xl "><Link to="/">Home</Link></li>
                    <li className="text-2xl "><Link to="Menu">Menu</Link></li>
                    <li className="text-2xl "><Link to="About">About</Link></li>
                    <li className="text-2xl "><Link to="BookTable">Book Table</Link></li>
                </ul>

            <div className=" h-10  gap-4 flex items-center">
               <Link to="/user" className="w-5 h-5"><img src={user} alt="" className=" "/></Link>
               <Link to="/shopping" className="w-5 h-5"><img src={shopping} alt="" className=""/></Link>
               <Link to="/searchs" className="w-5 h-5 "><img src={searchs} alt="" className=" "/></Link>
               <Link to="/" className="w-42 h-full bg-amber-400 rounded-4xl text-center flex justify-center items-center ">
                Order Online
              </Link>
            </div>

            </nav>
        </header>
        <Scroll />
        </div>

        </>
    )
}

export default Header;