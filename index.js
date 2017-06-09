// Generated by CoffeeScript 1.10.0
var button;

button = document.querySelector('form');

button.onsubmit = function(e) {
  var name, numbers, phone1, phone2, phone3, title, usestockfoods;
  e.preventDefault();
  usestockfoods = e.target.querySelector('input[name="usestockfoods"]').checked;
  if (usestockfoods) {
    document.getElementById('link').href = 'http://swapstockfoods.co.nz';
    document.getElementById('logo').src = './stockfoods.png';
  } else {
    document.getElementById('link').href = 'http://jswap.co.nz';
    document.getElementById('logo').src = './contractors.png';
  }
  name = e.target.querySelector('input[name="name"]').value;
  title = e.target.querySelector('input[name="title"]').value;
  phone1 = e.target.querySelector('input[name="phone1"]').value;
  phone2 = e.target.querySelector('input[name="phone2"]').value;
  phone3 = e.target.querySelector('input[name="phone3"]').value;
  numbers = [];
  if ((phone1 != null) && phone1 !== '') {
    numbers.push(phone1);
  }
  if ((phone2 != null) && phone2 !== '') {
    numbers.push(phone2);
  }
  if ((phone3 != null) && phone3 !== '') {
    numbers.push(phone3);
  }
  numbers = numbers.join(' &bullet; ');
  document.getElementById('name').textContent = name;
  document.getElementById('title').textContent = title;
  return document.getElementById('numbers').innerHTML = numbers;
};
