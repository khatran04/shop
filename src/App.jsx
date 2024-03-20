import { useState } from "react";
import "./global.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import AnimalShow from "./AnimalShow";
const App = () => {
    const animalName = [
        bird,
        cat,
        cow,
        dog,
        gator,
        horse
    ];
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
    
        setAnimals([
        ...animals,
        animalName[Math.floor(Math.random() * animalName.length)],
    ]);
    };
    
  return (  
    <>
    <div className="d-flex">

    <button onClick={handleClick}>Add Animal</button>
    </div>
    <div  className="d-flex">
      {animals.map((item) => ( <AnimalShow animal ={item} />))}
    </div>
    
    </>
  );
};

export default App