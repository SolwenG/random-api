/**
 * @param {string} url 
 * @param {HeadersInit?} headers // '?' dit que optionnel
 * @return {Promise<Object>}
 * @throws {Error} erreur si serveur envoie autre chose que status 200
 */


const getRequest = async (url, headers = {}) => { //headers parm optionnel car '= {}'
    const resp = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    if (resp.ok) {
        return await resp.json();
    }
    throw new Error("Problème de serveur. Veuillez contacter l'administrateur.")
}

export {
    getRequest
};

