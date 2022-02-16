import './MovieList.css'
import Movie from '../Movie/Movie'
import {Container, Row} from 'react-bootstrap'


function MovieList(info){
    
    

    return(
        <>
           <Container className='div-container'>
               <Row md={3}>
                    {info.data.length && info.data.map((mov)=>(
                        <Movie mov={mov}/>
                    ))}

                    {
                        !info.data.length && <h1>No Such Resulte, Please Try Again</h1>
                    }
                </Row>    
            </Container>
        </>
    );
}

export default MovieList;