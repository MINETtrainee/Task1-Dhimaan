'use srict';

const tool = prompt('What calculation do you want to do? Pick between addition, subtraction, multiplication, division, to the power , square root, sine, cos, tan, logN');
const toolS = tolowerCase(tool);


let n1 = prompt(`What is your first number, ____   ${tool}  -----`);
let n2;  


if(tool != 'square root' && tool != 'sin' && tool != 'cos' && tool != 'tan' && tool != 'log'){
  n2 = prompt(`What is your second number, ------ ${tool}________`)
}


if(toolS === 'addition') {
  alert(Number(n1) + Number(n2));
} else if (toolS === 'subtraction') {
  alert(Number(n1) - Number(n2));
} else if (toolS === 'multiplication') {
  alert(Number(n1) * Number(n2));
} else if (toolS === 'division') {
  alert(Number(n1) / Number(n2));
} else if (toolS === 'to the power') {
  alert(Number(n1) ** Number(n2));
} else if (toolS === 'square root') {
  alert(Math.sqrt(Number(n1)))
} else if (toolS === 'sine'){
  alert(Math.sin(Number(n1)))
}else if (toolS === 'cos'){
  alert(Math.cos(Number(n1)))
} else if (toolS === 'tan') {
  alert(Math.tan(Number(n1)))
} else if (toolS === 'logn'){
  alert(Math.log(Number(n1)))
}else {
  alert ('Invalid !')
}
