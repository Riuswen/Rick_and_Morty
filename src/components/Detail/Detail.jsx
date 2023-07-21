import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../Detail/Detail.module.css";

const Detail = () => {
    const {detailId} = useParams ();

    const [character, setCharacter] = useState ({});

    useEffect(() => {
        axios (`https://rickandmortyapi.com/api/character/${detailId}`)
        .then(response => setCharacter(response.data)
        );
    }, []);

    return (
        <div className={style.detail}>
            {character.name ? (
         <>
            <span className={style.title}>{character.name}</span>
            <img src={character.image} alt="img"/>
            <div className={style.data}>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.specie}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            </div>
         </>
        ):( <h3>Loading...</h3>)}
     </div>
    );
};

export default Detail;