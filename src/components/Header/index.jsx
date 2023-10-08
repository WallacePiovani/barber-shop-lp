import { Link } from "react-scroll"
import BurgerMenu from "../BurgerMenu"
import FullScreenMenu from "../FullScreenMenu"
import { useState, useEffect } from "react"


const Header = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isTransparentBackground, setIsTransparentBackground] = useState(false); // Estado para controlar o fundo transparente da barra de navegação

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
      setIsMenuOpen(false);
    };



    useEffect(() => {
        const handleScroll = () => {
          if (!isMenuOpen) {
            // Atualize o estado com base na posição de rolagem
            setIsTransparentBackground(window.scrollY <= 70);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isMenuOpen]);

    return (
        <header className={` sticky top-0 transition-all duration-300  ${
            isTransparentBackground ?"bg-transparent" : "bg-preto bg-opacity-70 backdrop-blur-lg "
        }`}>
            <div className="flex justify-between items-center mx-7 mt-4">
                <Link 
                  to = "home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-150}
                  onClick={ () =>{
                    closeMenu()
                  }}    
                  href="#" className="z-50 ">
                  <h1 className="font-openSans font-bold text-xl border border-marrom text-marrom p-3  mb-3 mt-3">BS</h1>
                </Link>
                <BurgerMenu onMenuClick={toggleMenu}/>
                {isMenuOpen && <FullScreenMenu closeMenu={closeMenu}/>}
            </div>
        </header>
    )


}

export default Header