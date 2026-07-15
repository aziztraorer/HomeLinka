import { Link } from "react-router-dom";
function Scroll() {
    return(
        <>
        <div className="hero-section justify-center flex flex-col  w-[85%] m-auto border-2 border-white items-center">
       
       <div>
         <h3>Fast Food Restaurant</h3>
        <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
        <Link to="/" className="w-42 h-full bg-amber-400 rounded-4xl text-center flex justify-center items-center ">
                Order Online
        </Link>
       </div>

       <div className=" flex gap-2">

        <div className="rounded-2xl border-2 w-5 h-5 bg-amber-700"></div>
        <div className="rounded-2xl border-2 w-5 h-5"></div>
        <div className="rounded-2xl border-2 w-5 h-5"></div>

       </div>

        </div>
        </>
    )
}

export default Scroll;