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

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string
): string {
    const intial: string = firstName.charAt(0);
    return `${intial}. ${lastName}`;
};

interface Student_Class {
    workOnHomework(): string;
    displayName(): string;
}
  
interface Constructor {
    new (firstName: string, lastName: string): Student_Class;
}

export class StudentClass implements Student_Class {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework(): string {
        return "Currently working";
    }
    
    displayName(): string {
        return this.firstName;
    }
}
