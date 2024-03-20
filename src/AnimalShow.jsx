  import { useState } from "react"
  import heart from "./svg/heart.svg";
  const AnimalShow = ({animal, className}) => {
    const [like, setLike] = useState(1);
    const handleLike = () => {
      setLike(like + 1);
    };
    return (
      <div onClick={handleLike} className={"AnimalShow border relative" + className}>
        <figure className="image is-4by3">
          <img src={animal} alt="Placeholder image" />
        </figure>
        <span className="like absolute">
          <img src={heart} style={{width: 15 + 5 *like + "px", objectFit: "container"}} alt="" />
        </span>
      </div>
    );
  };

  export default AnimalShow