// eslint-disable-next-line react/prop-types
const ProductCard = ({name, productType, image, altImage}) => {
  return (
    <div className="flex flex-col bg-branco2 pb-5 sm:h-60">
        <img src={image} alt={altImage} className=" self-center h-64 w-full drop-shadow-lg shadow-preto sm:h-40 md:w-80" />
        <div className="bg-preto rounded bg-opacity-20 w-16 text-center m-2 py-0.5">
            <p className="text-xs">{productType}</p>    
        </div>
        <h3 className="ml-2 font-openSans text-lg font-bold sm:text-base">{name}</h3>
    </div>
  )
}

export default ProductCard