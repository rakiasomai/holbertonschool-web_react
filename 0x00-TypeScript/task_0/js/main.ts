interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student_1: Student = {
    firstName: 'Rakia',
    lastName: 'Somai',
    age: 26,
    location: 'Tunis',
}

const student_2: Student = {
    firstName: 'Khalil',
    lastName: 'Sediri',
    age: 30,
    location: 'Ariana',
}

const studentsList = [student_1, student_2]
// let tab: string = ` <table>
//<tr>
 //   <th> firstName </th>
 //   <th> location </th>
//</tr>`

//studentsList.forEach(stud => {
//    tab += `<tr>
  //    <td>${stud.firstName}</td>
    //  <td>${stud.location}</td>
    //</tr>`
//});

//tab += '</table>';
//document.write(tab);
