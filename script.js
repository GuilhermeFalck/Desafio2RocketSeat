let students = [
  {
    name: "Guilherme",
    firstNote: 8,
    secondNote: 6,
  },
  {
    name: "Igor",
    firstNote: 2,
    secondNote: 5,
  },
  {
    name: "Gustavo",
    firstNote: 7,
    secondNote: 6,
  },
  {
    name: "Caua",
    firstNote: 9,
    secondNote: 2,
  },
];

function calculateNote(fN, sN) {
  return (fN + sN) / 2;
}

for (let student of students) {
  if (calculateNote(student.firstNote, student.secondNote) >= 6) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${calculateNote(
      student.firstNote,
      student.secondNote
    )} \n
    Parábens, ${student.name}! Você foi aprovado(a) no concurso!
  
    `);
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${calculateNote(
      student.firstNote,
      student.secondNote
    )} \n
   Não foi dessa vez, ${student.name}! Tente Novamente!
  
    `);
  }
}
