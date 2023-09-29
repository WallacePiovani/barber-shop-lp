//import { useState } from "react"

const FullScreenMenu = () => {
    //const [isOpen, setIsOpen] = useState (false)

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-preto z-30 bg-gradient-to-r  opacity-40">
        <ul className="h-full flex flex-col justify-center items-center gap-20 font-openSans">
            <li><a className=" text-marrom hover:text-branco duration-300 cursor-pointer">Sobre Nos</a></li>
            <li><a className=" text-marrom hover:text-branco duration-300 cursor-pointer">Serviços</a></li>
            <li><a className=" text-marrom hover:text-branco duration-300 cursor-pointer">Barbeiros</a></li>
            <li><a className=" text-marrom hover:text-branco duration-300 cursor-pointer">Produtos</a></li>
        </ul>
    </div>
  )
}

export default FullScreenMenu