import './Movie.css'
import { Card, Button } from "react-bootstrap";
import {useState} from 'react'
import ModalMovie from '../ModalMovie/ModalMovie'


function Movie({mov}) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose =()=> setShow(false);


    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}/>
                <Card.Body>
                    <Card.Title>{mov.title}</Card.Title>
                    <Card.Text>{mov.overview}</Card.Text>
                    <Card.Text>{mov.id}</Card.Text>
                    <div>
                    <Card.Text>{mov.release_date}</Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            setCardInfo(mov);
                            setShow(true);
                        }}
                    >Add To Favorite</Button>
                    </div>
                </Card.Body>
            </Card>

            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
        </>
        
    );
}

export default Movie;