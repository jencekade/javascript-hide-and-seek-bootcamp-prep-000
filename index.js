function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target');
}

function deepestChild() {
  document.getElementById('grand-node').ques
}

function increaseRankBy(n) {
  const increaseList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < increaseList.length; i++) {
    increaseList[i].innerHTML = parseInt(increaseList[i].innerHTML) + n;
  }
}
