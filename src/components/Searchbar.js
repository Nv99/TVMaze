import { useState, useContext } from "react"
import { useNavigate} from "react-router-dom";
import showsContext from "../context/shows/showsContext";

const Searchbar = () => {


    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const { searchShows} = useContext(showsContext);

    const onSearchHandler = (e) =>{
        e.preventDefault();
        if(searchTerm === ''){
          window.alert("Please Enter a Show name")
        }
        else{
          searchShows(searchTerm);
          navigate("/");  
        }
    }
  return (
    <div className="searchbar">
        <form className="searchbar__form" onSubmit={onSearchHandler}>
            <div className="input_div">
            <input type = 'text' placeholder="Search for TV Show"
            value={searchTerm} 
            onChange={ (e)=> {setSearchTerm(e.target.value)}}/>
            </div>
        </form>
    </div>
  )
}

export default Searchbar