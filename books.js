const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/books');

const criticSchema = new Schema({
    name: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }]
});

const bookSchema = new Schema({
    title: String,
    author: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }]
});

const reviewSchema = new Schema({
    reviewText: String,
    book: [{ type: Schema.Types.ObjectId, ref: 'book' }],
    critic: [{ type: Schema.Types.ObjectId, ref: 'critic' }]
});

const Book = mongoose.model('book', bookSchema);
const Critic = mongoose.model('critic', criticSchema);
const Review = mongoose.model('review', reviewSchema);

const critic1 = new Critic({
    name: "Critic 1",
    reviews: []
});

const book1 = new Book({
    title: "Book 1",
    author: "Author 1",
    reviews: []
});

const review1 = new Review({
    book: book1._id,
    critic: critic1._id,
    reviewText: "Excellent Book"
});

// review1.save();

// critic1.reviews.push(review1);

// book1.reviews.push(review1);

// critic1.save();
// book1.save();

// Book.findOne({title: "Book 1"}).populate('reviews').exec(function (err, data){
//     console.log(data);
// });

// Critic.findOne({name: "Critic 1"}).populate('reviews').exec(function (err, data){
//     console.log(data);
// });

// Book.findOne({title: "Book 1"}).populate({
//     path: "reviews",
//     populate: {
//         path: "critic"
//     }
// }).exec(function (err, result){
//     console.log(result.reviews[0].critic);
// });

// Critic.findOne({name: "Critic 1"}).populate({
//     path: 'reviews',
//     populate: {
//         path: "book"
//     }
// }).exec(function (err, result){
//     console.log(result.reviews[0].book);
// });

// Review.find({}).populate('critic book').exec(function(err, review){
//     console.log(review[0]);
//   });

// Critic.findOne({name: "Critic 1"}).populate('reviews', 'reviewText').exec(function(err, result){
//     console.log(result);
// });

// Critic.findOne({name: "Critic 1"}).populate('reviews', '-_id + reviewText').exec(function(err, result){
//     console.log(result.reviews);
// });

// Critic.findOne({name: "Critic 1"}, function(err, result){
//     result.populate('reviews', function(){
//         console.log(result.reviews);
//     });
// });

// populate array of documents
// Critic.find(function(err, result){
//     Critic.populate(result, {path: 'reviews'}, function(err, data){
//         console.log(data);
//     })
// })