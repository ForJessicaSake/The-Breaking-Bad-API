import {useState, useEffect} from 'react'
import axios from 'axios';
import Character from './Character';


function Home() {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

const onChange =(q, e) =>{
    setSearch(q);
    setQuery(q);
    e.preventDefault();
}
    useEffect(()=> {
        setTimeout(() => {
            const fetchMovies = async () => {
                const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

                setMovies(result.data)
                console.log(result.data);
            }
            fetchMovies();
            setLoading(false);
 
        }, 1000);
        
        }, [query])
    return (
        <section className='header'>
            <h1 className='heading'><span>The</span>Breaking<span>bad</span></h1>
            <form className='search'>
                <input
                type='text'
                value={search}
                onChange={(e)=> onChange(e.target.value)}
                />
            </form>
            <p className='text'>Flip a card and just maybe, you'd get to  learn something new about your favourite cast</p>
            {loading &&<section> Loading...
            </section>}

            <Character movies={movies}/>
        </section>
        
        
        )
}

export default Home