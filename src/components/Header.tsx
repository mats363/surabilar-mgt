import { Navbar } from "./Navbar";
import logo from "../images/MGT-logo-scaled.jpg"
import { Button } from "./Buttons";

// let img1 = 

export function Header() {
    return (<>
    <section className="w-screen h-screen bg-Hero1 bg-cover flex flex-col justify-between">
        <header className="h-77px w-screen bg-black">
            <div className="flex justify-between items-center">
                <div className="h-77px bg-black">
                    <img src={logo}></img>
                </div>
                <div><Navbar/></div>
            </div>
        </header>  
        
        <div className="flex justify-center items-center flex-col space-y-4">
            <Button textColor={"wind"} buttonColor={"fire"} buttonText={"Get started"}></Button>
            <Button textColor={"fire"} buttonColor={"sun"} buttonText={"Gathering"}></Button> 
            <img src="../src/images/pngwing.com.png"></img>
        </div>   
        {/* <div className="w-screen">
            <button>Get started</button>
            <button>Gathering</button>
        </div> */}
        <div className="w-screen h-16 bg-black"></div>     

    </section>
        
        
    </>)
}