import { useEffect, useState } from "react";

function TestApi() {
  
  const [user, setUser] = useState([{}]);

  useEffect(()=>{
    fetch("link...", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1);
        setUser(data)
    }); 
  }, [])


  return (
    <div>

        {user.map((userr, id)=>(
        <div key={id}><br/><h3>{userr.topic}</h3> {userr.contents} </div>
        ))} 

    </div>
  );
}

export default TestApi;
