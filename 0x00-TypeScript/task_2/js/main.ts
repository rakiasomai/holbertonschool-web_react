interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) return new Teacher
    else return new Director;
}

export function isDirector(employee: Teacher | Director): employee is Director {
    return employee.workFromHome() === "Working from home"
}

export function executeWork(employee: Director | Teacher): string {
    var feedback;
  
    if (isDirector(employee)) {
      feedback = employee.workDirectorTasks();
    } else {
      feedback = employee.workTeacherTasks();
    }
  
    console.log(feedback);
    return feedback;
  }
