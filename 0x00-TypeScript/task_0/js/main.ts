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

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
})

body.append(table);
