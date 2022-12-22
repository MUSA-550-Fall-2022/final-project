/* ================================
Week 6 Assignment: Slide Model
================================ */
var currentSlide = 0;
var filterer = '';
var slideNumber = 0;
var Intro = {
  slideNumber: 0,
  title: 'Migrant Deaths by Gender',
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description: "Deaths by Gender Text.",
  description2: "Deaths by Gender Text."
};

var Males = {
  slideNumber: 1,
  x: 31.82,
  y: -111.471,
  zoom: 8,
  title: "Males",
  description1: "Males Text."
};

var Females = {
  slideNumber: 2,
  title: "Females",
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description2: "",
  description1: "Females Text."
};

var Undetermined = {
  slideNumber: 3,
  title: "Undetermined",
  x: 31.82,
  y: -111.471,
  zoom: 8,
  description2: "Undetermined Text 2.",
  description1: "Undetermined Text 1."
};

var slides = [Intro, Males, Females, Undetermined];

$('#nextButton').click((e) => {
  next();
  slidePlots();
});
$('#previousButton').click((e) => {
  previous();
  slidePlots();
});
$('#malesButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 1;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var men = document.getElementById("men").style.display = "block";
  var women = document.getElementById("women").style.display = "none";
  var undeter = document.getElementById("undeter").style.display = "none";
});
$('#femalesButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 2;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var men = document.getElementById("men").style.display = "none";
  var women = document.getElementById("women").style.display = "block";
  var undeter = document.getElementById("undeter").style.display = "none";
});
$('#undeterminedButton').click((e) => {
  $('#nextButton').show();
  $('#previousButton').show();
  currentSlide = 3;
  loadSlide(slides[currentSlide]);
  slidePlots();
  var undeter = document.getElementById("undeter").style.display = "block";
  var men = document.getElementById("men").style.display = "none";
  var women = document.getElementById("women").style.display = "none";
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
    labels: ['Males', 'Females', 'Undetermind'],
    datasets: [{
      color: 'white',
      data: [3143, 523, 172],
      backgroundColor: [
        'rgba(3, 98, 250, 0.2)',
        'rgba(252, 83, 241, 0.2)',
        'rgba(181, 181, 181, 0.2)'
      ],
      borderColor: [
        'rgba(3, 98, 250, 1)',
        'rgba(252, 83, 241, 1)',
        'rgba(181, 181, 181, 1)'
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
