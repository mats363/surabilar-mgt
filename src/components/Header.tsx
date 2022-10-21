import { Navbar } from "./Navbar";
import logo from "../images/MGT-logo-scaled.jpg"
import { Button } from "./Buttons";
import hero1 from "../images/pngwing.com.png"



export function Header() {
    return (<>
    <section className="w-screen h-screen bg-Hero1 bg-cover flex flex-col justify-between relative">
        <header className="h-77px w-screen bg-black">
            <div className="flex justify-between items-center">
                <div className="h-77px bg-black">
                    <img src={logo}></img>
                </div>
                <div><Navbar/></div>
            </div>
        </header>  
        <div className="flex justify-evenly">
            <div className="flex justify-center items-center flex-col space-y-4">
                <Button textColor={"wind"} buttonColor={"fire"} buttonText={"Get started"}></Button>
                <Button textColor={"fire"} buttonColor={"sun"} buttonText={"Gathering"}></Button> 
            </div>   
        
        
            <div className="hidden tablet:block desktop:block">
                <img src={hero1} className="h-72 bottom-20 scale-150 absolute"></img>
            </div>
        </div>
        <div className="w-screen h-16 bg-black"></div>     
        
    </section>
        
        
    </>)
}