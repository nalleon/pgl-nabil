import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/MovieDetails.css';
type Props = {
    movieId : string | undefined
    onCancel: () => void;
}

const DeleteConfimation = (props: Props) => {
    const { movieId, onCancel } = props;
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/movies/${movieId}`);
            navigate('/movies');
            } catch (error) {
            console.error("Error deleting the movie:", error);
        }
    };

    return (
        <>
            <div className="card card-custom w-50">
                <h5>Are you sure you want to delete this movie?</h5>
                <div className="d-flex justify-content-around mt-4">
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Yes, Delete
                    </button>
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    ) 
}

export default DeleteConfimation