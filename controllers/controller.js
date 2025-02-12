const arrPosts = require('../data/data'); 


function index(req, res) {
    let filteredPosts = arrPosts;
// Se la richiesta contiene un filtro, allora filtriamo i posts
if (req.query.title) {
filteredPosts = arrPosts.filter(
post => post.title.includes(req.query.title)
);
}
// restituiamo la variabile filteredPosts
// potrebbe essere stata filtrata o contenere il menu-post originale
res.json(filteredPosts);
};

function show(req, res) {
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = arrPosts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);
};

function store(req, res) {
    res.send('Creazione nuovo post'); 
}
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id); 
}
function destroy(req, res) {
    console.log("DELETE request ricevuta per il post con ID:", req.params.id); // Aggiungi questa riga per il log

    const id = parseInt(req.params.id);
    const post = arrPosts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    const postIndex = arrPosts.indexOf(post);

    if (postIndex !== -1) {
        arrPosts.splice(postIndex, 1);
    }

    console.log(arrPosts);  // Log dell'array dopo la rimozione

    res.sendStatus(204);  // Restituiamo il codice di stato 204
}


// esportiamo tutto
module.exports = { index, show, store, update, destroy }