import { useEffect, useContext } from "react"
import ShowsContext from "../context/shows/showsContext"
import {useParams} from 'react-router-dom'
const Singlepage = () => {

  const {getSingleShow, singleShow, loading } = useContext(ShowsContext);

  const {id} = useParams()
  useEffect(()=>{
    getSingleShow(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const removeTags = (text) => {
    if(text==null || text === ""){
      return false;
    }else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  }
  const renderCast=(item) => {
    return (
      <div className="image__container">
      <img src={item.person.image ? item.person.image.medium :
         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
         alt={item.person.name}/>
      <div className="cast__info"> {item.person.name}</div>
            &nbsp;as
      <div className="cast__info">
        {item.self ? (  item.person.gender === "Male" ? 'Himself' : "Herself" ): item.character.name}
        
      </div>
      {item.voice ? ('Voice') : null}
      </div>
    )
  }

  return (
      <>
      {loading? <h2>Loading...</h2> 
      :
      <div className="singleshow"> 
        <img src={singleShow.image 
          ?  singleShow.image.original
          : "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"
          } 
          alt={singleShow.name}
          />
        <div className="singleshow__info">

            <h1> {singleShow.name}     
                { singleShow.rating?.average ? (
                <span className="info__rating">        
                  <strong>Rating: </strong>
                  {singleShow.rating.average}
                </span>  ) : null
              }
            </h1>

            {singleShow.genres && singleShow.genres.map( genre => (
            <span key = {genre} className="singleshow__genre">{genre}</span>
            ))}

            {singleShow.averageRuntime ? 
            <p>
            <strong>  Runtime: </strong>
            {singleShow.averageRuntime} Minutes
            </p> : null }

            <p>
              <strong>  Status: </strong>
              {singleShow.status && singleShow.status}
            </p>

            <p>
              <strong>  Official Site: </strong>
                {singleShow.officialSite ? (<a href={singleShow.officialSite} 
                target = "_blank" rel = "noreferrer">{singleShow.officialSite}</a>) : "No official Site"}
            </p>

            {singleShow.language ? 
            <p>
            <strong>  Language: </strong>
            {singleShow.language}
          </p> : null }
            
          <strong> Summary: </strong>
            <p className="info__summary">
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>

            <div className="singleshow__cast">
              <h3>Cast</h3>
              <div className="cast_images">
              {
                (singleShow._embedded?.cast || []).map((item) => {
                       return(renderCast(item)) 
                }
                )
              }
              </div>
        </div>
        </div>
      </div>
      }
      </>
  )
}

export default Singlepage