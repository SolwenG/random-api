const User = ({ user }) => {

    return (
        <article>
            <div>
                <img src={user.photo} alt="pfp" />
            </div>
            <div className="user">
                <div className='name'>{user.prenom} {user.nom.toUpperCase()}
                    <hr />
                </div>
                <div className="infos">
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.mobile}</p>
                    <p>Rue: {user.rue}</p>
                    <p>Ville: {user.ville}</p>
                </div>
            </div>
        </article >
    )
}

export default User;