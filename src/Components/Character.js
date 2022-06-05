import React from 'react'
import {motion} from 'framer-motion'

function Character({ loading, movies }) {
    return (

        <motion.section className='card'>
            {movies.map((movie) => (
                <section className='card-box' key={movie.char_id}>
                    <div className='front'>
                        <img src={movie.img} alt='character_img'></img>
                    </div>
                    <div className='back'>
                        <h3>Fullname: {movie.name}</h3>
                        <p>Portrayed: {movie.portrayed}</p>
                        <p>Birthday: {movie.birthday}</p>
                        <p>Apperance: {movie.appearance}</p>
                        <p>Status: {movie.status}</p>
                        <p>Nickname: {movie.nickname}</p>

                    </div>
                </section>
            ))}
        </motion.section>
    )
}

export default Character;