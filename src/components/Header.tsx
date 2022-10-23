import logo from "../images/MGT-logo.png"
import hero1svg from "../images/Chandra2.svg"



export function Header() {
    return (<>
    <section id="frontpage" className="w-screen h-screen bg-Hero1 bg-cover flex flex-col justify-between relative">
        <header className="h-77px w-screen bg-black">
            <nav className="flex justify-between items-center">    
                <figure className="h-77px bg-black">
                    <img src={logo} className="h-[74px]"/>
                </figure>
                <ul className="flex justify-between gap-4 text-wind text-Magic_4 mr-4 pr-4">
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
        </header>  
        <div className="hidden tablet:block">
            {/* <h1 className="text-Magic_1 text-wind absolute top-[60px] left-32">Magic The Gathering</h1> */}
        </div>
        <div className="w-2/4 ml-32 hidden tablet:block">
            <h1 className="text-Magic_1 text-wind absolute top-[60px] left-32 text-left">Magic The Gathering</h1>
            <p className="text-Magic_3 text-wind">
            New to Magic The Gathering?
            Press Get started to learn how to play and dive in to the world of card games.
            Want to play with others?
            Press Gathering to get locations and events. 
            </p>
        
            <div></div>
        </div>
        <div className="flex justify-evenly">
            
            <div className="flex flex-col space-y-4 tablet:flex-row tablet:space-y-0 tablet:space-x-8">
                <button className="text-Magic_4 w-36 h-12 rounded-xl text-wind bg-fire">Get started</button>
                <button className="text-Magic_4 w-36 h-12 rounded-xl text-fire bg-sun">Gathering</button>
                
            </div>   
            
            <figure className="hidden tablet:block desktop:block m-0 p-0">
                <img src={hero1svg} className="absolute top-[53px] right-[-20px]"></img>
            </figure>   
        </div>
        <div className="w-screen h-16 bg-black"></div>     
        
    </section>
        
        
    </>)
}