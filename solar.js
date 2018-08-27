const mongoose= require ('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/solar');

const solarSchema = new Schema({
    planets: [{type: Schema.Types.ObjectId, ref: 'planet'}],
    starName: String
});

const planetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'solar'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'visitor'}]
});

const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'planet'}]
});

const Solar = mongoose.model('solar', solarSchema);
const Planet = mongoose.model('planet', planetSchema);
const Visitor = mongoose.model('visitor', visitorSchema);



const ourPlanet = new Planet({
    name: "Earth",
    system: {},
    visitors: []
});

const ourSolar = new Solar({
    planets: ourPlanet._id,
    starName: "Sun"
});

const mars = new Planet({
    name: "Mars",
    system: {},
    visitors: []
})

const ourVisitors = new Visitor({
    name: "Hugo De Mars",
    homePlanet: {},
    visitedPlanets: []
});

// ourSolar.save();

// ourPlanet.system=ourSolar;
// ourVisitors.homePlanet=mars;
// ourPlanet.visitors.push(ourVisitors);
// mars.system=ourSolar;
// ourVisitors.visitedPlanets.push(ourPlanet);
// ourVisitors.visitedPlanets.push(mars);

// ourPlanet.save();
// mars.save();
// ourVisitors.save();

// Visitor.findOne({}).populate('visitedPlanets').exec(function(err, result){
//     console.log(result);
// });

// Planet.findOne({}).populate('visitors').exec(function (err, result){
//     console.log(result);
// })

// Solar.findOne({}).populate({
//     path: "planets",
//     populate: {
//         path: "visitors"
//     }
// }).exec(function (err, result){
//     console.log(result);
// });

// Visitor.findOne({}).populate({
//     path: "homePlanet",
//     populate: {
//         path: "system"
//     }
// }).exec(function(err, result){
//     console.log(result.homePlanet.system.starName);
// });

Planet.findOne({}).populate('system visitors').exec(function(err, res){
    console.log(res.system.starName+"  "+res.visitors[0].name);
});