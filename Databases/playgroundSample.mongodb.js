use("sample_restaurants")
db.restaurants.findOne()
const mdbNY = {
    type: 'Point',
    coordinates: [-73.9846099,40.7620791]
} 

db.restaurants.aggregate([{
    $geoNear: {
        near: mdbNY,
        distanceField: 'distance',
        maxDistance: 100,
        spherical: true
    }
}])