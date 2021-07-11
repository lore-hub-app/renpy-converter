
function component() {
  const element: HTMLDivElement = document.createElement('div');
  element.innerHTML = "hello world from typescript";
  return element;
}

document.body.appendChild(component());
