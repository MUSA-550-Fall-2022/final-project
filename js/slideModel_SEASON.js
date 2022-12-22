/* ================================
Week 6 Assignment: Slide Model
================================ */
var currentSlide = 0;
var filterer = '';
var slideNumber = 0;
var Intro = {
  slideNumber: 0,
  title: 'Migrant Deaths by Season',
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description: "Deaths by Season Text.",
  description2: "Deaths by Season Text."
};

var Summer = {
  slideNumber: 1,
  x: 31.82,
  y: -111.471,
  zoom: 8,
  title: "Summer",
  description1: "Summer Text."
};

var Autumn = {
  slideNumber: 2,
  title: "Autumn",
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description2: "",
  description1: "Autumn Text."
};

var Winter = {
  slideNumber: 3,
  title: "Winter",
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description2: "",
  description1: "Winter Text."
};

var Spring = {
  slideNumber: 4,
  title: "Spring",
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description2: "",
  description1: "Spring Text."
};

var slides = [Intro, Summer, Autumn, Winter, Spring];

$('#nextButton').click((e) => {
  next();
  slidePlots();
});
$('#previousButton').click((e) => {
  previous();
  slidePlots();
});
$('#summerButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 1;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var summer = document.getElementById("summer").style.display = "block";
  var autumn = document.getElementById("autumn").style.display = "none";
  var winter = document.getElementById("winter").style.display = "none";
  var spring = document.getElementById("spring").style.display = "none";
});

$('#autumnButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 2;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var summer = document.getElementById("summer").style.display = "none";
  var autumn = document.getElementById("autumn").style.display = "block";
  var winter = document.getElementById("winter").style.display = "none";
  var spring = document.getElementById("spring").style.display = "none";
});
$('#winterButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 3;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var summer = document.getElementById("summer").style.display = "none";
  var autumn = document.getElementById("autumn").style.display = "none";
  var winter = document.getElementById("winter").style.display = "block";
  var spring = document.getElementById("spring").style.display = "none";
});

$('#springButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 4;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var summer = document.getElementById("summer").style.display = "none";
  var autumn = document.getElementById("autumn").style.display = "none";
  var winter = document.getElementById("winter").style.display = "none";
  var spring = document.getElementById("spring").style.display = "block";
});

// char initialization
const ctx = document.getElementById('myChart');

// Chart.defaults.color = 'white';
const variable = document.getElementById('myChart');
// let chart = new Chart(ctx, {
//     type: 'li',
//     data: azdata,
//     options: {
//         layout: {
//             p: 20
//         }
//     }
// });
const myChartBar = new Chart(variable, {
  type: 'bar',
  data: {
    labels: ['Summer', 'Autumn', 'Winter', 'Spring'],
    datasets: [{
      color: 'white',
      data: [1607, 784, 653, 797],
      backgroundColor: [
        'rgba(214, 207, 54, 0.2)',
        'rgba(232, 156, 60, 0.2)',
        'rgba(117, 199, 242, 0.2)',
        'rgba(139, 170, 67, 0.2)'
      ],
      borderColor: [
        'rgba(214, 207, 54, 1)',
        'rgba(232, 156, 60, 1)',
        'rgba(117, 199, 242, 1)',
        'rgba(139, 170, 67, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Total Death Counts by COD'
      },
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  }
});

// selector
const handleSelectChange = () => {
  layers.clearLayers();
  geojson = L.geoJson(trans, { style, onEachFeature }).addTo(layers);
  info.update();
  contentUpdate();
  plotUpdate();
};
