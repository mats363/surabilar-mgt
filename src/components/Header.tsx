import { Navbar } from "./Navbar";
import logo from "../images/MGT-logo-scaled.jpg"
import { Button } from "./Buttons";
import hero1 from "../images/pngwing.com.png"
import hero1svg from "../images/Chandra2.svg"



export function Header() {
    return (<>
    <section className="w-screen h-screen bg-Hero1 bg-cover flex flex-col justify-between relative">
        <header className="h-77px w-screen bg-black">
            <div className="flex justify-between items-center">
                <div className="h-77px bg-black">
                    <img src={logo}></img>
                </div>
                <nav className="flex justify-between">
                <ul className="flex justify-between text-wind">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Events</a>
                    </li>
                    <li>
                        <a href="/">Local stores</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
        </nav>

            </div>
        </header>  

        <div className="flex justify-evenly">
            <div className="flex justify-center items-center flex-col space-y-4">
                <Button textColor={"wind"} buttonColor={"fire"} buttonText={"Get started"}></Button>
                <Button textColor={"fire"} buttonColor={"sun"} buttonText={"Gathering"}></Button> 
            </div>   
            

            <div className="hidden tablet:block desktop:block m-0 p-0">
                {/* <img src={hero1} className="h-72 bottom-20 scale-150 absolute"></img> */}
                <img src={hero1svg} className="absolute top-[53px] right-[0px] scale-90 p-0 m-0"></img>
                {/* <img src={hero1svg}></img> */}
            </div>
            
        </div>
        <div className="w-screen h-16 bg-black"></div>     
        
    </section>
        
        
    </>)
}