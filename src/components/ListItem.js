import {Link} from 'react-router-dom'

const ListItem = ({show={},image, name, rating,id}) => {
  return (
    <div>
        <Link to = {`/singleshow/${id}`} className="listitem" >
            <img src={image} alt={name} />
                <div className="listitem__info">
                  <div>
                    <h4 className='info__name'>{name}</h4>
                    {show.averageRuntime ?
                    <span className='info__runtime'>({show.averageRuntime} Minutes)</span> : null}
                  </div>
                  <div>
                    {show.rating.average ?
                     <h5 className='info__rating'> IMDB RATING : {rating}</h5> : null }
                  </div>
                </div>
        </Link>
    </div>
  )
}

export default ListItem