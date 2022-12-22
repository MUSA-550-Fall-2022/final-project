/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

/* 1. BUTTON FUNCTIONS */
var loadSlide = function (slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
  $('#description2').text(slide.description2);
  $('#sidebar').css("background-color", slide.color);
  map.setView([slide.x, slide.y], slide.zoom);
};
var next = function () {
  // first check if not the last slide s
  if (currentSlide == slides.length - 1) {
  } else {
    $('#nextButton').show();
    currentSlide += 1;
    loadSlide(slides[currentSlide]);
  }
  if (currentSlide == slides.length - 1) {
    $('#nextButton').hide();
  }
  if (currentSlide != 0) {
    $('#previousButton').show();
  }
};

var previous = function () {
  if (currentSlide == 0) {
  } else {
    $('#previousButton').show();
    currentSlide -= 1;
    loadSlide(slides[currentSlide]);
  }

  if (currentSlide == 0) {
    $('#previousButton').hide();
  }

  if (currentSlide != slides.length - 1) {
    $('#nextButton').show();
  }
};

/* 2. LOAD DATA FUNCTIONS */
var create_marker = function (row) {
  var lat = row.geometry.coordinates[1];
  var lng = row.geometry.coordinates[0];
  var label = row.properties.Name;
  var gender = row.properties.Sex;
  if (gender == "male") {
    var color = '#0362fa';
  } else if (gender == 'female') {
    var color = '#fc53f1';
  } else if (gender == 'undetermined') {
    	var color = '#b5b5b5';
  } else {
    var color = '#b5b5b5';
  }
  var pathOpts = {
    'radius': 5, 'fillColor': color, 'fillOpacity': 0.8, 'stroke': false
  };
  var marker = L.circleMarker([lat, lng], pathOpts).bindPopup(`<b>Name: </b>${label}</br> <b>Gender: </b>${gender}`);
  return marker;
};
var makeMarkers = function (cleanedData) {
  var markers = _.map(cleanedData, create_marker);
  return (markers);
};

var plotMarkers = function (markers) {
  for (var i = 0; i < markers.length - 1; i++) {
    myMarkers[i].addTo(map);
  }
};

var removeMarkers = function (markers) {
  _.each(markers, (m) => { map.removeLayer(m); });
};

var slidePlots = function () {
  removeMarkers(myMarkers);
  var data = azdata;
  var filterer = "";
  if (currentSlide == 0) {
    var data = azdata;
  } else {
    if (currentSlide == 1) {
	  		filterer = "male";
	  	} else if (currentSlide == 2) {
	  		filterer = "female";
	  	} else if (currentSlide == 3) {
	  		filterer = "undetermined";
    }
	  	var data = _.filter(azdata[0].features, (entry) => {
      return entry.properties.Sex == filterer;
    });
  }

  console.log(data);
  myMarkers = makeMarkers(data);
  console.log(myMarkers);
  plotMarkers(myMarkers);
};
