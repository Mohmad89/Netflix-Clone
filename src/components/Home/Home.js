import './Home.css'
import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route , Routes } from 'react-router-dom'
import FavList from '../FavList/FavList'
import Navbar2 from '../Navbar2/Navbar2'

function Home() {
    
    //variable to stroe data from API iside it
    const [data, setData] = useState([]);
    
    // Retreive Data From API
    const getTrenMonie = async () => {
        return await axios
            .get("https://movies-task-1.herokuapp.com/trending")
            .then((result) => {
                console.log(result.data);
                return result.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    // put data in useState data with useEffect
    useEffect(() => {
        void (async () => {
            let data = await getTrenMonie();
            setData(data);
        })(); //self calling function ()
    }, []);

    return (
        <>   <Navbar2/>
            <Routes>
                <Route path='/' exact element={<MovieList data={data}/>} />
                <Route path='/getMovies' exact element={<FavList />} />
            </Routes>
            
        </>
    );
}

export default Home;