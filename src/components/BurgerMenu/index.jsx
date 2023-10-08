import { useState } from "react"

// Componente do Menu Hambúrguer
// eslint-disable-next-line react/prop-types
const BurgerMenu = ({onMenuClick}) => {

    // Estado para controlar se o menu está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false)

    // Classe CSS base para as linhas do menu hambúrguer
    const hamburgerMenuLine = `h-1 w-7 my-1 rounded bg-marrom transition ease transform duration-500`;

    // Função para lidar com o clique no botão do menu
    const menuClick = () =>{
        setIsOpen(!isOpen) // Alterna o estado do menu
    }

    const handleMenuClick = () =>{
        menuClick()
        onMenuClick()

    }


  return (
    <button className="h-12 w-12  rounded flex flex-col justify-center items-center group z-50" onClick={handleMenuClick}  aria-label="Abrir/Fechar Menu aria-expanded={isOpen}">
         {/* Linha superior do menu hambúrguer */}

        <div 
            className={`${hamburgerMenuLine} 
            ${
                isOpen
                    ? "rotate-45 translate-y-3 " //Aplica rotação e translação quando o menu está aberto
                    : ""
            }`}
        />

        {/* Linha do meio do menu hambúrguer */}

        <div 
            className={`${hamburgerMenuLine} ${
                isOpen ? "opacity-0" : ""  // Torna a linha do meio transparente quando o menu está aberto
            }`} 
        /> 

        {/* Linha inferior do menu hambúrguer */}

        <div             
            className={`${hamburgerMenuLine} 
            ${
                isOpen
                    ? "-rotate-45 -translate-y-3 " // Aplica rotação e translação invertida quando o menu está aberto
                    : ""
            }`}
        />
    </button>
  )
}

export default BurgerMenu

