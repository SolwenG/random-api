import { useEffect, useState } from 'react';
import { getRequest } from '../commons/request';
import './quiz.css';

const Quiz = () => {

    const [question, setQuestion] = useState({});

    useEffect(() => {
        getRequest('http://saminthedark.ddns.net:1478/api/v1/quiz')
            .then(json => {
                if (json.length > 0) {                    
                    setQuestion(json[0]);
                }
            })
    }, []);

    const prop1 = document.getElementById('prop1');
    const prop2 = document.getElementById('prop2');
    const prop3 = document.getElementById('prop3');
    const prop4 = document.getElementById('prop4');
    const verif = document.getElementById('verif');

    let select1 = () => {
        prop1.style.backgroundColor = "#dccd48a9";
        verif.style.display = "inline-block";
        console.log('click');
    }
    let select2 = () => {
        prop2.style.backgroundColor = "#dccd48a9";
        verif.style.display = "inline-block";
    }
    let select3 = () => {
        prop3.style.backgroundColor = "#dccd48a9";
        verif.style.display = "inline-block";
    }
    let select4 = () => {
        prop4.style.backgroundColor = "#dccd48a9";
        verif.style.display = "inline-block";
    }

    const reponse = () => {
        prop1.style.backgroundColor = "#85d755a8";
        prop2.style.backgroundColor = "#aa2e2e9d";
        prop3.style.backgroundColor = "#aa2e2e9d"
        prop4.style.backgroundColor = "#aa2e2e9d";

    }


    return (
        <main className='quiz'>
             <header>
                <h2>Q U I Z</h2>
                <hr />
            </header>

            <section>
                <div className="question">{question['question']}</div>

                <div className="answers">
                    <button id='prop1' onClick={select1}>{question['prop1']}</button>
                    <button id='prop2' onClick={select2}>{question['prop2']}</button>
                    <button id='prop3' onClick={select3}>{question['prop3']}</button>
                    <button id='prop4' onClick={select4}>{question['prop4']}</button>
                </div>

                <button id='verif' onClick={reponse}>Vérifier</button>
            </section>
        </main>
    )
}

export default Quiz;