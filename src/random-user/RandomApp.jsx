import { useEffect, useState } from "react";
import User from "./components/User";
import UserModel from "./components/UserModel";
import './random-app.css';

const RandomApp = () => {

    const [users, setUsers] = useState([]);

    const getRequest = async (url) => {
        const resp = await fetch(url)
        if (resp.ok) {
            const json = await resp.json()
            return json['results'];
        }
        throw new Error("Problème de serveur. Veuillez contacter l'administrateur.")
    }

    useEffect(() => {
        getRequest("https://randomuser.me/api/?results=10&nat=fr")
            .then(resultats => {
                setUsers(new UserModel().toArrayUserModel(resultats));
            })
    }, [])


    return (
        <main className="right">
            <header>
                <h2>Random User</h2>
                <hr />
            </header>
            <section>
                {users &&
                    users.map((u, i) => <User key={i} user={u}/>)
                }
            </section>
        </main>
    )
}

export default RandomApp;