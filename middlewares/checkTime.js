//middleware per eventuali errori

function checkTime(err, req, res, next) {
    console.error("Errore completo", err);
    res.status(500)
    res.json({
    error: err.message,
    });
    };

    module.exports = checkTime;