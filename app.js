function app() {

const url = "http://ratings.food.gov.uk/FHRSWeb/search/en-gb/cafe/json"

fetch(url, {
    headers: "x-api-version", 2
  })
// .then((resp) => resp.json())
.then(function (data) {
    console.log(data);


});

}

app();