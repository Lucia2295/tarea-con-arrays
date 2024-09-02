// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];


document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

function showList(strangeArray) {
  // Filtrar elementos, quedarme sólo con los de tipo string
  const stringElements = strangeArray.filter(element => typeof element === 'string');
  
  // Ordenar los elementos de tipo string, alfabéticamente
  stringElements.sort();
  
  // Agarrar el elemento UL con id "list" desde el html
  const ul = document.getElementById('list');
  
  // Crear elemento li en ul y ponerle los elementos del array que filtramos
  stringElements.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });
}
  // Llamo a la función showList con el array extraño 
  showList(strangeArray);
});
