// after connecting to myatlasclusteredu, accessing the 
const database = 'sample_airbnb' //declaring a variable, node.js style
use(database);
db.listingsAndReviews.aggregate(
  [
    {$match: {
      bedrooms:2
    }},
    {$group: {
      _id: '$host.host_location',
      Properties: {
        $count: {}
      }
    }},
    {$sort: {
      Properties: -1
    }
    },
    {$limit: 5}
  ]
)
