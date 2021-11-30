
var data = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquam.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas totam voluptatem officia reiciendis itaque? Fuga.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut nobis incidunt ipsum odit? Ipsam aspernatur culpa minima in cum ratione quis unde saepe eos.',
  'Lorem ipsum dolor sit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem cumque nesciunt quaerat perferendis omnis aut sunt molestias.',
  'Lorem, ipsum dolor sit amet consectetur adipisicing.',
  'Lorem, ipsum.',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis molestiae perferendis ipsam.',
  'Lorem ipsum dolor sit amet consectetur.',
];

function longest(s) {
  const appDiv = document.getElementById('long');
  let stations;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].length > max) {
      max = s[i].length;
      stations = s[i];
    }
  }
  appDiv.append(`${stations}`);
}

function longestReduce(s) {
  const appDiv = document.getElementById('long_reduce');
  let stations = data.reduce((x, y) => (x.length >= y.length ? x : y));

  appDiv.append(`${stations}`);
}

function shortest(s) {
  const appDiv = document.getElementById('small');
  let stations = data.reduce((x, y) => (x.length <= y.length ? x : y));

  appDiv.append(`${stations}`);
}

longest(data);
longestReduce(data);
shortest(data);
