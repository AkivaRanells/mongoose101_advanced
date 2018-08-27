const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/peopleDB');
const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    age: {
        type: Number,
        min: [10, "Person Is Too Young"]
    },
    updated_at: Date,
    created_at: Date
})

let Person = mongoose.model('Person', personSchema);

// personSchema.pre('save', function(next) {
  
//     // get the current date
//     var currentDate = new Date();
    
//     // change the updated_at field to current date
//     this.updated_at = currentDate;
   
//     // if created_at doesn't exist, add to that field
//     if (!this.created_at) { this.created_at = currentDate; }
     
//     next();
//   });

// let david = new Person({
//     firstName: "David",
//     lastName: "Smith",
//     age: 9
// });
// david.save();

// let shlomo = new Person({
//     firstName: "Shlomo",
//     lastName: "King",
//     age: 2125
// });
// shlomo.save();
// const addressSchema = new Schema({
//     city: String,
//     street: String,
//     apartment: Number
// });
// let query = Person.find;
// Person.find({firstName: "Shlomo"}, function(err, result){
//     if(err)return console.log(err);
//     console.log(result);
// });



//   Person.findById(1, function(err, person) {
//     if (err) throw err; // or if you want console.error(err)
//     console.log(person); //otherwise show the result, if any
//   });

//  // get a person with ID of 1
// Person.findById(1, function(err, person) {
//     if (err) throw err;
  
//     // change the persons name
//     person.firstName = 'Jimmy';
  
//     // save the person
//     person.save(function(err) {
//       if (err) throw err;
//       else console.log('Person successfully updated!');
//     });
//   });

  Person.findOneAndUpdate({ age: 25 }, { firstName: 'Paul' },{new: true}, function(err, person) {
    if (err) throw err;
    else console.log(person);
  });

  Person.remove({ firstName: 'David' }, function(err) {
    if (err) throw err;
  
    // we have deleted the person
    console.log('Person deleted!');
  });

  Person.findOneAndRemove({firstName: "Shlomo"}, function(err){
      if(err) throw err;
      console.log('One Person Deleted');
  });