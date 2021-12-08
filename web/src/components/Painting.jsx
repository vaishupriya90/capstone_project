import React,{useEffect, useState} from 'react'
import axios from 'axios';


const Painting = () => {
    
    const [error, setError] = useState(null);
    const [name, setName] = useState('');

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/painting`);
                setName(data.name);
            }catch(err){
                setError(err);

            }
        };
        fetchData();
    },[]);

    if (error) {
        return (
          <div>Oops! Could not fetch the painting.</div>
        );
      }

    return (
        <div>
            {name}
        </div>
    )
}

export default Painting
