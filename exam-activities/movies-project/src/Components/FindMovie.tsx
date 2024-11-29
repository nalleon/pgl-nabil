import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const FindMovie = (props: Props) => {
  const navigate = useNavigate();

  const findMovieFromAPI = async (e: React.FormEvent<HTMLFormElement>) => {


  }

  return (
      <>
        <div className='container mt-5'>
          <form onSubmit={findMovieFromAPI} className='form-control'>
            <div className="row g-3 align-items-center">
              <div className="col-md-8">
                <input
                  type="text"
                  name="nameSearch"
                  placeholder="Enter your search"
                  className="form-control"
                />
              </div>

              <div className="col-md-4 d-flex align-items-center">
                <label htmlFor="type_search" className="form-label mb-0 me-2">
                  <b>Type:</b>
                </label>
                <select
                  id="type_search"
                  name="type_search"
                  className="form-control w-30"
                >
                  <option value="name" selected>Name</option>
                  <option value="actor">Actor</option>
                </select>

                <button type="submit" className="btn btn-warning w-50 ms-2">
                  Search
                </button>
                </div>
            </div>
          </form>
        </div>

      </>
  )
}

export default FindMovie