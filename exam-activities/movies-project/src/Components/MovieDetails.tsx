import React from 'react'

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
type Props = {
  data : MovieType
  url : string
}

type MovieType = {
  title: string;
  actor: string;
  director: string;
  genre: string;
  year: number;
  description: string;
  image: string;
  trailer: string;
}

const MovieDetails = (props: Props) => {
  const {data, url} = props;
  
  console.log(url + "/" + data.image);
  return (
    <>
    <div className="card">
      <h1>{data.title}</h1>
      <img src={url + data.image} alt={data.title} width={500} />
      <p>Actor: {data.actor}</p>
      <p>Director: {data.director}</p>
      <p>Genre: {data.genre}</p>
      <p>Year: {data.year}</p>
      <p>Description: {data.description}</p>
      <p>Trailer: <a href={data.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a></p>
    </div>
    
    </>
  )
}

export default MovieDetails