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
    console.log(req.body);
    res.send('Creazione nuova pizza');
    }
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id); 
}
function destroy(req, res) {
    const id = parseInt(req.params.id)
    // cerchiamo il pizza tramite id
    const post = arrPosts.find(post => post.id === id);
    // Piccolo controllo
    if (!post) {
    return res.status(404).json({
    status: 404,
    error: "Not Found",
    message: "post non trovato"
    })
    }
    // Rimuoviamo la pizza dal menu
    arrPosts.splice(arrPosts.indexOf(post), 1);
    // Verifichiamo sul terminale
    console.log(arrPosts);
    // Restituiamo lo status corretto
    res.sendStatus(204)
    };

// esportiamo tutto
module.exports = { index, show, store, update, destroy }