import'./IpAdress.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function IpAdress(){
    const [ip,setIP] = useState('');
    
    //Bu kod sayesinde kişinin İP adresine ulaşabilirsiniz
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        getData()
    },[])
    console.log(ip)
    return(

        <div className = "App">
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
        </div>
    );
}

export default IpAdress;