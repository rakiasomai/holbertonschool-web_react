import { Seq } from 'immutable';

const { Seq } = immutable;

const makeUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(grades) {
  const b_std = Seq(grades)
    .filter((std) => std.score > 70)
    .map((std) => {
      const { firstName, lastName } = std;
      return {
        ...std,
        firstName: makeUppercase(firstName),
        lastName: makeUppercase(lastName),
      };
    });

  b_std.forEach((std) => console.log(std));
}
