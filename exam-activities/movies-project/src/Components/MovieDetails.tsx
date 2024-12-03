import axios from 'axios';
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import '../Styles/MovieDetails.css';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
type Props = {

}

type MovieType = {
  id: number;
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
  const { movieId } = useParams();
  const [data, setData] = React.useState<MovieType>({} as MovieType);
  const uri: string = "http://localhost:3000/"

  useEffect(() => {

    fetchMovie();
    
  }, [movieId])
  

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching the movie:", error);
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center custom-bg">
          <div className="col-sm-12 col-md-6 ">
            <img
              src={uri + data.image}
              alt={data.title}
              className="img-fluid rounded shadow-lg"
            />
            <div className="row mt-5 ms-3">  
              <div className="col-6">
                <button className='btn btn-primary w-75'>Edit</button>               
              </div>
              <div className="col-6">
                <button className='btn btn-danger w-75'>Delete</button>               
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className='card' style={{backgroundColor:'transparent'}}>
              <h3 className="display-5 text-uppercase mb-4 fw-bold">{data.title}</h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <strong>Actor:</strong> {data.actor}
                </li>
                <li className="mb-3">
                  <strong>Director:</strong> {data.director}
                </li>
                <li className="mb-3">
                  <strong>Genre:</strong> {data.genre}
                </li>
                <li className="mb-3">
                  <strong>Release date:</strong> {data.year}
                </li>
              </ul>

              <div className="description mb-4">
                <p className="text-justify">{data.description}</p>
              </div>

              <div className="trailer">
                <h5 className="mb-3">Watch Trailer</h5>
                <ReactPlayer
                  url={data.trailer}
                  controls
                  width="100%"
                  height="300px"
                  className="rounded shadow-lg"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default MovieDetails