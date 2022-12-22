/* ================================
Week 6 Assignment: Slide Model
================================ */
var currentSlide = 0
var filterer=''
var slideNumber=0
var Intro= {slideNumber:0,
	title: 'Migrant Deaths in the Sonoran Desert',
	x:31.82,
	y:-111.471,
	zoom:8,
	description: "Those who cross the border into the US often underestimate the danger that awaits them on the other side before they reach civilization. As this tool illustrates, many perish in the desert of southern Arizona with the American dream right at their fingertips.",
	description2: "This website provides insight into the individuals who lost their lives attempting to cross the border through the Sonoran Desert. Data includes recorded deaths from 1987 to 2022."}

var Heat={slideNumber:1,
	x:31.82,
	y:-111.471,
	zoom:8,
	title: "Heat Exposure",
	description1: 'According to the U.S. Border Patrol:' + ' "To avoid death or injury from severe dehydration, a person walking across the landscape in the heat of summer must consume no less than two gallons of water per day.  The average person cannot carry sufficient water to avoid life-threatening dehydration over the course of several days in the brush."'}

var Skeletal={slideNumber:2,
	title: "Skeletal Remains Found, Undetermind Cause of Death",
	x:31.82,
	y:-111.471,
	zoom:8,
	description2: "",
	description1:"Hundreds of sets of human remains are found every year in southern Arizona, many of them belonging to migrants who've crossed the Mexico border seeking a better life in America. According to Humane Borders, a nonprofit organization that tracks migrant remains recovered by local medical examiners, 227 separate sets of remains were found in Arizona in 2020 — 220 of them were located in Pima County alone." + "- Joshn Kelety, Phoenix New Times "}

var Trauma={slideNumber:3,
	title: "Blunt Force Injury",
	x:31.82,
	y:-111.471,
	zoom:8,
	description2: "-University of Arizona," + " Binational Migration Institute",
	description1: "The cause of death resulting from a motor vehicle accident involving an undocumented border crosser may be blunt force trauma, while the manner of death would also be accidental."}

var Gunshot={slideNumber:4,
	title: "Gunshot Wound",
	x:31.82,
	y:-111.471,
	zoom:8,
	description1: "Gunshot Wound Text 2."}

var slides = [Intro, Heat, Skeletal, Trauma, Gunshot]

$('#nextButton').click(function(e) {
  next();
  slidePlots();
});
$('#previousButton').click(function(e) {
  previous();
  slidePlots();

});
$('#exposureButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 1;
	loadSlide(slides[currentSlide]);
	slidePlots();
	var heat = document.getElementById("heat").style.display = "block";
	var gun = document.getElementById("gun").style.display = "none";
	var bluntforce = document.getElementById("bluntforce").style.display = "none";
	var skull = document.getElementById("skull").style.display = "none";
});

$('#skeletalButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 2;
	loadSlide(slides[currentSlide]);
	slidePlots();
	var skull = document.getElementById("skull").style.display = "block";
	var heat = document.getElementById("heat").style.display = "none";
	var gun = document.getElementById("gun").style.display = "none";
	var bluntforce = document.getElementById("bluntforce").style.display = "none";
});

$('#bluntforceButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 3;
	loadSlide(slides[currentSlide]);
	slidePlots();
	var bluntforce = document.getElementById("bluntforce").style.display = "block";
	var skull = document.getElementById("skull").style.display = "none";
	var heat = document.getElementById("heat").style.display = "none";
	var gun = document.getElementById("gun").style.display = "none";
});

$('#gunshotButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 4;
	loadSlide(slides[currentSlide]);
	slidePlots();
	var gun = document.getElementById("gun").style.display = "block";
	var bluntforce = document.getElementById("bluntforce").style.display = "none";
	var skull = document.getElementById("skull").style.display = "none";
	var heat = document.getElementById("heat").style.display = "none";
});



// char initialization
const ctx = document.getElementById('myChart');

//Chart.defaults.color = 'white';
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
    labels: ['Exposure', 'Skeletal Remains', 'Blunt Force Injury', 'Gunshot Wound'],
    datasets: [{
      color: 'white',
      data: [1338, 1315, 201, 97],
      backgroundColor: [
        'rgba(202, 86, 44, 0.2)',
        'rgba(136, 136, 136, 0.2)',
        'rgba(61, 89, 65, 0.2)',
        'rgba(102, 17, 0, 0.2)'
      ],
      borderColor: [
        'rgba(202, 86, 44, 1)',
        'rgba(136, 136, 136, 1)',
        'rgba(61, 89, 65, 1)',
        'rgba(102, 17, 0, 1)'
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

// yearLevelSelect.addEventListener('change', handleSelectChange);
//
// function plotUpdate() {
//   const year = String(yearLevelSelect.value);
//   if (year === '2019') {
//     myChartBar.data.datasets[0].data = [353320, 464792, 7995805, 536273];
//   }
//   else if (year === '2020') {
//     myChartBar.data.datasets[0].data = [453864, 463319, 2787947, 257180]; }
//   else {
//     myChartBar.data.datasets[0].data = [333818, 401740, 4174982, 560424]; }
//
//   myChartBar.update();
//
// }
