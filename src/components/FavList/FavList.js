// /addMovie
import axios from 'axios';
import { Button, Container, Row , Card , Col} from 'react-bootstrap';
import './FavList.css'
import {useEffect, useState} from 'react'
import Navbar2 from '../Navbar2/Navbar2';

function FavList(){
//variable to stroe data from API iside it
    const [data, setData] = useState([]);
    
    // Retreive Data From API
    const getTrenMovie = async () => {
        return await axios.get("https://movies-task-1.herokuapp.com/getMovies")
            .then((result) => {
                console.log(result.data);
                setData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    // put data in useState data with useEffect
    useEffect(() => {
           getTrenMovie();
       //self calling function ()
    }, []);

    // *** delete 
    const deleteFromFav = async (id) =>{
        await axios.delete(`https://movies-task-1.herokuapp.com/DELETE/${id}`)
                   .then(()=>{
                       console.log("Deleted Done");
                       getTrenMovie();
                       
                   }).catch((err)=>{
                       console.log(err);
                   });
    }
    return(
        <>
         
            <Container className='div-container'>
                <Row md={3}>
                   {
                       data.length && data.map((ele) => (
                           <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}/>
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>{ele.overview}</Card.Text>
                            <Card.Text>{ele.id}</Card.Text>
                            <div>
                            <Card.Text>{ele.release_date}</Card.Text>
                            <Button variant="danger"
                                onClick={()=>deleteFromFav(ele.id)}
                            >Delete</Button>
                            <Button variant="primary">Update</Button>
                            </div>
                        </Card.Body>
                    </Card>

                       ))
                       
                    }
                    {
                          
                        !data.length && <h1>No Such Resulte, Please Try Again</h1>
                   
                    }
                </Row>
            </Container>
            
        </>
    );
}
export default FavList;