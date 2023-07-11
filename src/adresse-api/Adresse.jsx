import { useEffect, useState } from 'react';
import { getRequest } from '../commons/request.js';
import './adresse.css';

const Adresse = () => {

    const [ad, setAd] = useState("");
    const [features, setFeatures] = useState([]);

    const cleanText = (input) => {
        input = input.toLocaleLowerCase().replaceAll(/[^\p{Ll}\p{Nd}]+/gu, "+"); //[\s\W]+/g version sans les accents
        return input;
    }

    const handleInput = (e) => {
        const val = e.target.value;
        setAd(cleanText(val));
    }

    useEffect(() => {
        if (ad.length > 4) {
            const url = new URL('https://api-adresse.data.gouv.fr/search/');
            url.searchParams.set("q", ad);
            getRequest(url)
                .then(json => {
                    const f = json.features;
                    setFeatures((json.features)) // '.feature' = '['feature']'
                })
        }
    }, [ad]);

    return (
        <main>
            <header>
                <h2>Adresse</h2>
                <hr />
            </header>

            <section>
                <div>
                    <input list='features' placeholder='Entrez votre adresse...'
                        onInput={handleInput} />
                </div>

                <datalist id='features'>
                    {features &&
                        features.map((f, i) => {
                            return <option key={i}>{f.properties.label}</option>
                        })
                    }
                </datalist>
            </section>
        </main>
    )
}

export default Adresse;