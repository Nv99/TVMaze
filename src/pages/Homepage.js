import { useContext, useEffect } from "react";
import ShowsContext from "../context/shows/showsContext";
// import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import GenreList from '../components/GenreList';

const Homepage = ()=>{
    const showsContext = useContext(ShowsContext);
    const {loading, showsSearch,allShows, getShows} = showsContext;
    console.log(allShows.length, showsSearch.length, 'length');
    useEffect(() => {
       if(showsSearch.length===0){
        console.log('Hi there');
             getShows(1);
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const genreSort= ((allShows)=> {
        
        const genreMap = {};
        (allShows || []).forEach((show) => {
            if(show.genres){
                (show.genres).forEach((genre) => {
                    genreMap[genre] = genreMap[genre] || [];
                    genreMap[genre].push(show);
                })
            }
        })
        return {genreMap};
    })

    const {genreMap} =  genreSort(allShows);

    return (
        
        <div className="homepage">
            { loading ? <h2>Loading....</h2> : null }
            { (!loading && showsSearch) ?   
                 <div className="list_container" >
                    {(showsSearch || []).map(item => ( 
                    <ListItem
                        show={item.show}
                        key = {item.show.id}
                        id = {item.show.id}
                        image = {item.show.image ? item.show.image.medium : "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"}
                        name = {item.show.name}
                        rating = {item.show.rating.average ? item.show.rating.average : "No rating"}
                    />
                    ))}
                </div> : null 
            }

            {
                (!loading && genreMap) ? 
                    <div className="genrelist__container">


                        {
                            Object.keys(genreMap || {}).map((key)=>{
                                return (
                                 <>
                                    <div className="genre">
                                        <h3>{key}</h3>
                                        <GenreList value={genreMap[key]}/>  
                                     </div>           
                                 </>
                                )
                            })
                        }
                      
                    </div> : null
            }
        </div>
    )
}
export default Homepage;