'use srict';

let tool = prompt('What calculation do you want to do? Pick between addition, subtraction, multiplication, division, to the power (case sensetive)');

let n1 = prompt(`What is your first number, ____   ${tool}  -----`);
let n2 = prompt(`What is your second number, ------ ${tool}________`)

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
} else {
  alert ('Invalid !')
}

