const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/beersDB');

const reviewSchema = new Schema({
    text: String,
    username: String
});

const beerSchema = new Schema({
    name: String,
    abv: Number,
    style: String,
    reviews: [reviewSchema]
});

const Beer = mongoose.model('Beer', beerSchema);
const goldstar = new Beer({
    name: "Goldstar",
    abv: 5.5,
    style: "Lager",
    reviews: []
});
goldstar.save();
goldstar.reviews.push({text: "Sick Beer", username: "Bob"});
console.log(goldstar.reviews[0]);