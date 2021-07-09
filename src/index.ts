
function component() {
  const element:HTMLDivElement = document.createElement('div');
  element.innerHTML = "hello world";
  return element;
}

document.body.appendChild(component());
