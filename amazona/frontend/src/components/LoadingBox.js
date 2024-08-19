//Here we create loading and use it everywhere we want to show a loading box
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
    return(
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>)
}