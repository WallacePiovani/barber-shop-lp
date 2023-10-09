// eslint-disable-next-line react/prop-types
const Card = ({name, photo}) => {
  return (
    <div className="flex flex-col items-center">
        <img 
            className="h-80 w-96"
            src={photo}>    
        </img>
    </div>
  )
}

export default Card