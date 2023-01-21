import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import { useEffect, useContext, useState } from 'react'
import showsContext from '../context/shows/showsContext'

const Navbar = () => {

    const {getShows} = useContext(showsContext);
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
        if(sendRequest){
              getShows(1);
              setSendRequest(false);
        }

     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [sendRequest])

  return (
   <div className="navbar">
        <div className="container">
            <nav className='navbar__nav'>
                <h3  className = 'nav__brand'>
                    <Link to="/"  onClick={() => setSendRequest(true)}>
                        <i className='fas fa-video'></i> TV SHOW SEARCH
                    </Link>
                </h3>
                <div className='nav__left'>
                    <ul className='nav__links'>
                        <li className='links__link'> <Link to = '/' onClick={() => setSendRequest(true)}>Home</Link></li>
                    </ul>
                    <Searchbar/>
                </div>
            </nav>
        </div>
   </div>
  )
}

export default Navbar