import { Link } from "react-router-dom"

const GenreList = ({value=[]}) => {


  const renderImage=(item) =>{
      return (
        <div className="genrelist">
        <Link to = {`/singleshow/${item.id}`}>
          <img src={ item.image ? 
            item.image.original
            : "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"}
            alt = {item.name}
            ></img> 
        </Link>
        </div>
      )
  }

  return (
    <div className="genre__image">
      {
        (value).map((item) => {
         return(
             renderImage(item)
           )
        }
        )
      }
    </div>
  )
}

export default GenreList