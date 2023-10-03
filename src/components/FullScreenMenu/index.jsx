const FullScreenMenu = () => {

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-preto z-30 bg-gradient-to-r opacity-95">
        <ul className="h-full flex flex-col justify-center items-center gap-20 font-openSans delay-300">
            <li><a className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer">Sobre Nos</a></li>
            <li><a className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer">Serviços</a></li>
            <li><a className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer">Barbeiros</a></li>
            <li><a className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer">Produtos</a></li>
        </ul>
    </div>
  )
}

export default FullScreenMenu