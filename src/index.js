const input = document.querySelector('.input');

function addToInput(key) {
  input.value += key;
}

function clearInput() {
  input.value = '';
}

function compute() {
  const res = Function('return ' + input.value);
  console.log(res());
}
