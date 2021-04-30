import { Seq } from 'immutable';

function capitalLetter(string) {
  return string.trim().replace(/^\w/, (c) => c.toUpperCase());
}

export default function printBestStudents(object) {
  const bestS = Seq(object);
  console.log(bestS
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: capitalLetter(firstName),
        lastName: capitalLetter(lastName),
      };
    })
    .toJS());
}
