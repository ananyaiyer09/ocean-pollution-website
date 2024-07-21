/* .js files add interaction to your website */

/* Fact Generator on about.html */

var facts = [
  'Plastic waste makes up 80% percent of all marine pollution and around 10 million metric tons of plastic end up in the ocean each year',
  '17% of the species affected by the presence of plastic in the ocean are on the International Union for Conservation of Nature Red List of Threatened Species',
  'Over 1 million animals are killed every year due to plastic debris in the ocean, which is enough marine animals to fill almost 18 baseball stadiums',
  'It is estimated that 56% of of the all dophin, whale, and porpoise species have consumed plastic',
  '91% of sea turtles that had consumed disgarded plastic in the ocean died',
  'Around 1,000 sea turtles have been found dead along the shores of Australia due to plastic consumption'
]

var credits = [
  'UNESCO Ocean Literacy',
  'UNESCO Ocean Literacy',
  'Sea Turtle Conservancy',
  'WWF Australia',
  'WWF Australia',
  'WWF Australia'
]

var button = document.getElementById('generate-button');
var fact = document.getElementById('random-fact');
var credit = document.getElementById('fact-credit');
var count = 0;

function generateNewFact() {
  fact.innerHTML = facts[count];
  credit.innerHTML = credits[count];

  if (count === 4) {
    count = 0;
  }
  else {
    count += 1;
  }
}

button.addEventListener('click', generateNewFact);



