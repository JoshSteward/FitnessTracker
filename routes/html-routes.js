const db = require("../models");
const path = require("path");

module.exports = (app) => {
    //index.html
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    //exercise.html
    app.get('/exercise', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
    //stats.html
    app.get('/stats', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
}