import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const StarshipList = () => {

    const [starship, setStarship] = useState({});

    useEffect(() => {
        fetch(`http://swapi.dev/api/starships`)
            .then(res => res.json())
            .then(result => {
                setStarship(result.results)
                console.log(starship)
            })
    }, [])

    return (
        <>
        <h3>Starships:</h3>
            <ul>
                {starship.map((x, i) => <li><Link key={x.name} to={`/starships/${i + 1}`}>{x.name}</Link> </li>)}
            </ul>

        </>
    )
}