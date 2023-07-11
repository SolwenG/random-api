import { useState } from "react";
import './cat.css';

const Cat = () => {

    const [cats, setCats] = useState([]);

    const handleInput = (e) => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setCats(res);
            });
    }

    return (
        <div className="cats">
            <header>
                <h2>Random Cats</h2>
                <hr />
            </header>
            <button onClick={handleInput}>Show me cats</button>

            <section>
                {cats &&
                    cats.map((c, i) => {
                        return (
                            <figure key={i}>
                                <img src={c.url} alt="cat" />
                            </figure>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Cat;