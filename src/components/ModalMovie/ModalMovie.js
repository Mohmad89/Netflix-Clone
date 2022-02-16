import './ModalMovie.css'
import {Modal, Button} from 'react-bootstrap';

function ModalMovie({cardInfo, show, handleClose}){
    return(
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>{cardInfo.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={`https://image.tmdb.org/t/p/w500/${cardInfo.poster_path}`}/>
              <div>
                  <lable htmlFor="op">Write Your Opinion</lable>
                  <input placeholder="Opinion ....." type="text" id="op"></input>
              </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Add To Favorite</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;