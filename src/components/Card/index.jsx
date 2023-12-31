import { useState } from "react"
// eslint-disable-next-line react/prop-types
const Card = ({ name, photo, experience, price, altImage}) => {

  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className=" flex flex-col items-center shadow-md shadow-preto relative w-fit h-fit xl:w-auto xl:h-auto">
      <img
        className="h-96 w-96 sm:h-80 lg:h-96"
        src={photo}
        alt={altImage}
      >
      </img>
      <div
        onClick={() => {
          setShowInfo(!showInfo)
        }}
        onMouseEnter={() => {
          setShowInfo(true);
        }}
        onMouseLeave={() => {
          setShowInfo(false);
        }}
        className={`w-full h-full top-0 right-0 absolute  bg-preto bg-opacity-60 backdrop-blur-sm flex flex-col justify-center items-center gap-2.5 transition-opacity duration-300 
          ${showInfo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h4 className="text-branco font-bold font-openSans text-3xl mb-5  text-center">{name}</h4>
        <p className="text-branco2 font-openSans text-lg text-center"><strong>Experiencia -</strong> {experience}</p>
        <p className="text-branco2 font-openSans text-lg text-center"><strong>Preço médio -</strong> {price}</p>
      </div>
    </div>
  )
}

export default Card