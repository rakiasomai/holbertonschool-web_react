interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

//const teacher3: Teacher = {
  //  firstName: 'John',
   // fullTimeEmployee: false,
    //lastName: 'Doe',
    //location: 'London',
   // contract: false,
  //};
  
 // console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}
