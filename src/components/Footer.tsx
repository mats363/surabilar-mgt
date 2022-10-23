import logo from "../images/MGT-logo.png"

export function Footer() {
    return (
        <footer className="bg-black flex justify-between items-center">
            <h3 className="text-Magic_4 text-wind text-left">
                Contact <br/>
                tel: 0701 23 45 67 <br/>
                info@magichittepo.com
            </h3>
            <figure>
                <img src={logo} className="h-[77px]"/>
            </figure>
        </footer>)
}