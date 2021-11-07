const request = require(`request`);
let breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = function(breedname,callback) {
  request(url , (error, response, body)=> {
  
    // console.log(body.description);
    //console.log(typeof data);
    if (error) {
      callback(error,null);
    }
    const newBreed = JSON.parse(body); 
    console.log(newBreed[0].description);
    if (newBreed) {
      callback(null, newBreed[0].description);
    } else {
      callback('Breed does not exist');
    }
  });
};


module.exports = {fetchBreedDescription};