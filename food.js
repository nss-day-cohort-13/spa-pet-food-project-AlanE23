console.log("Begin");

// Function and Event Listener for the Dog Food Line
function doWorkDog () {
// Pulling in my Dog Data
  var dogData = JSON.parse(this.responseText);
  console.log("dogData", dogData);

// Creating a variable to interact with dom
  var k9food = document.getElementById("dogTable");

//Looping thru dogFood.json to assign the values to the table
  for (var a = 0; a < dogData.dog_brands.length; a++) {
    var brand = dogData.dog_brands[a];
    console.log("brands", brand);
    var category
    var volume

    for (var b = 0; b < brand.types.length; b++) {
      var category = brand.types[b];
      console.log("types", category);

      for (var c = 0; c < category.volumes.length; c++) {
        var volume = category.volumes[c];
        console.log("sizes", volume);

        k9food.innerHTML +=
        "<tr>" + "<td>" + brand.name + "</td>" +
                 "<td>" + category.type + "</td>" +
                 "<td>" + volume.size + "</td>" +
                 "<td>" + volume.price + "</td>" +
        "</tr>";

      }
    }
  }
}

// Create an XHR object for Dog json

var myRequestDog = new XMLHttpRequest();

// XHR objects emit events when their operation is complete,
// or an error occurs
myRequestDog.addEventListener("load", doWorkDog);

// Then tell the XHR object exactly what to do
myRequestDog.open("GET", "dogFood.json");

// Tell the XHR object to start
myRequestDog.send();

// Function and Event Listener for the Cat Food Line

function doWorkCat () {
// Pulling in my Cat Data
  var catData = JSON.parse(this.responseText);
  console.log("catData", catData);

// Creating a variable to interact with dom
  var felineFood = document.getElementById("catTable");

//Looping thru catFood.json to assign the values to the table
  for (var a = 0; a < catData.cat_brands.length; a++) {
    var brand = catData.cat_brands[a];
    console.log("brands", brand);
    var variety
    var category
    var volume

    for (var b = 0; b < brand.variety.length; b++) {
      var variety = brand.variety[b];
      console.log("variety", variety);

      for (var c = 0; c < brand.types.length; c++) {
        var category = brand.types[c];
        console.log("types", category);

        for (var d = 0; d < category.volume.length; d++) {
          var volume = category.volume[d];
          console.log("sizes", volume);

          felineFood.innerHTML +=
          "<tr>" + "<td>" + brand.name + "</td>" +
                   "<td>" + variety + "</td>" +
                   "<td>" + category.type + "</td>" +
                   "<td>" + volume.size + "</td>" +
                   "<td>" + volume.price + "</td>" +
          "</tr>";
        }
      }
    }
  }
}

// Create an XHR object for Cat json

var myRequestCat = new XMLHttpRequest();

// XHR objects emit events when their operation is complete,
// or an error occurs
myRequestCat.addEventListener("load", doWorkCat);

// Then tell the XHR object exactly what to do
myRequestCat.open("GET", "catFood.json");

// Tell the XHR object to start
myRequestCat.send();


console.log("End");