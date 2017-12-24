function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while(node) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node.innerHTML;
}

function increaseRankBy(n) {
  const increaseList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < increaseList.length; i++) {
    increaseList[i].innerHTML = parseInt(increaseList[i].innerHTML) + n;
  }
}
