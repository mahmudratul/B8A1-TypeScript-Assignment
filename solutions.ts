// function multiplyValue(value: number, multiplier?: number): number {
//   if (multiplier === undefined) {
//     return value * 2;
//   } else if (multiplier !== undefined) {
//     return value * multiplier;
//   } else multiplier === 0;
//   {
//     return 0;
//   

// }



// Problem 1:

function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}


// Problem 2:
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
  return "invalid input";
}



//  Problem 3:
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// Problem 4:
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    result = result.concat(arrays[i]);
  }
  return result;
}










// Problem 5:

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const passedCourses: Course[] = [];

  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      passedCourses.push(course);
    }
  }

  return passedCourses;
}

// Problem 6:

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i][key]);
  }
  return result;
}



// Problem 7:

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary); 
        this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



//  Problem 8:

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18)
       {
      
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
    
  });
}

async function runTests() {
  try {
    console.log("Testing age 20...");
    const result = await validateAgeAsync(20);
    console.log(result); 
  } catch (error) {
    console.error(error);
  }


  try {
    console.log("Testing age 15...");
    const result2 = await validateAgeAsync(15);
    console.log(result2);
  } catch (error) {
    console.error(error); 
  }
}

runTests();