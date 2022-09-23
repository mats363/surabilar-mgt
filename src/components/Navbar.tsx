export function Navbar() {
    return (
        <div>
            <nav>
                {/* <svg width="44" height="59" viewBox="0 0 44 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.24969 2L2.00001 57.0812L42.05 57.0812L42.2997 2L2.24969 2Z" fill="black" stroke="#F5F5F5" stroke-width="3.28778" stroke-linejoin="round"/>
                </svg> */}

            <ul className="flex text-wind">
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
    )
}