import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const Starship = () => {
    const [starship, setStarship] = useState({});
    const { starshipId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        fetch(`http://swapi.dev/api/starships/${starshipId}`)
            .then(res => res.json())
            .then(result => {
                setStarship(result)
            })
    }, [starshipId]);

    const nextProductHandler = () => {
        //Todo redict to next ship
        navigate(`/products/${Number(starshipId) + 1}`)
    }


    return (
        <>
            <h2>Products Page</h2>
            <h3>Product {starshipId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <button onClick={nextProductHandler}></button>
        </>

    );
}