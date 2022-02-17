import './ModalMovie.css'
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios'

function ModalMovie({cardInfo, show, handleClose}){
    
    const addToFav = async () => {
            let fav = {title: cardInfo.title, poster_path:cardInfo.poster_path, overview:cardInfo.overview, id:cardInfo.id, release_date:cardInfo.release_date}
            await axios.post(`https://movies-task-1.herokuapp.com/addMovie`,fav)
                .then(()=>{
                    console.log("Done Added");
                }).catch((err)=>{
                    console.log(err);
                });
        }
    
    
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
                <Button variant="secondary"
                    onClick={()=>{
                        addToFav();
                        handleClose();
                    }}
                >Add To Favorite</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;