import { useState } from "react"

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(c => c + 1);
    }

    const dangerClick = clicks > 20;

    if (clicks > 30) {
        return <h1>Finished Clicks</h1>
    }

    return (
        <div>
            {dangerClick && <h1>Danger Clicks</h1>}
            {clicks > 10
                ? <h2>Medium Clicks</h2>
                : <h4>Normal Clicks</h4>
            }
            <button onClick={clickHandler}>{clicks}</button>
        </div>

    )
}