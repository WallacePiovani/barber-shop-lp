import BurgerMenu from "../BurgerMenu"
import FullScreenMenu from "../FullScreenMenu"
import { useState } from "react"

const Header = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className="m-7">
            <div className="flex justify-between items-center ">
                <a href="#" className="z-50"><h1 className="font-openSans font-bold text-xl border border-marrom text-marrom p-3 ">BS</h1></a>
                <BurgerMenu onMenuClick={toggleMenu} />
                {isMenuOpen && <FullScreenMenu/>}
            </div>
        </div>
    )


}

export default Header