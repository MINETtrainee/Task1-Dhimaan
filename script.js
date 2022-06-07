'use srict';

let tool = prompt('What calculation do you want to do? Pick between addition, subtraction, multiplication, division, to the power , square root, sin , cos, tan, log (case sensetive all small)');

let n1 = prompt(`What is your first number, ____   ${tool}  -----`);
let n2;  


if(tool != 'square root' && tool != 'sin' && tool != 'cos' && tool != 'tan' && tool != 'log'){
  prompt(`What is your second number, ------ ${tool}________`)
}


if(tool === 'addition') {
  alert(Number(n1) + Number(n2));
} else if (tool === 'subtraction') {
  alert(Number(n1) - Number(n2));
} else if (tool === 'multiplication') {
  alert(Number(n1) * Number(n2));
} else if (tool === 'division') {
  alert(Number(n1) / Number(n2));
} else if (tool === 'to the power') {
  alert(Number(n1) ** Number(n2));
} else if (tool === 'square root') {
  alert(Math.sqrt(Number(n1)))
} else if (tool === 'sin'){
  alert(Math.sin(Number(n1)))
}else if (tool === 'cos'){
  alert(Math.cos(Number(n1)))
} else if (tool === 'tan') {
  alert(Math.tan(Number(n1)))
} else if (tool === 'log'){
  alert(Math.log(Number(n1)))
}else {
  alert ('Invalid !')
}
