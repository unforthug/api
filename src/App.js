import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUSer(res.data);
        console.log(listOfUSer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 


  return (
    <div className="App">
      {listOfUSer.map((el) => (
        <tr>
          <td> {el.id} </td>
          <td> {el.username} </td>
        </tr>
      ))}
    </div>
  );
}

export default App;
