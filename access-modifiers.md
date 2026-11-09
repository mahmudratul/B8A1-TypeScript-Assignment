# Understanding Access Modifiers in TypeScript OOP

## Introduction

TypeScript supports Object-Oriented Programming (OOP), which allows developers to organize code using classes and objects. Access modifiers are used to control the accessibility and visibility of class properties and methods. They help to protect data and make code easier to manage and understand.

## Understanding Access Modifiers

TypeScript has three main access modifiers: `public`, `private`, and `protected`.

**1. Public**

The `public` modifier allows a property or method to be accessed from anywhere. It is open for all. It is the default access modifier in TypeScript.

```typescript
class Student {
  public name: string = "Rahim";
}

const student = new Student();
console.log(student.name);
```

**2. Private**

The `private` modifier restricts access to a property or method within the class where it is declared. It cannot be accessed directly from outside the class.

```typescript
class Student {
  private marks: number = 85;
}
```

**3. Protected**

The `protected` modifier allows access within the declaring class and its subclass. However, it cannot be accessed directly from outside these classes.

```typescript
class Person {
  protected name: string = "Rahim";
}

class Student extends Person {
  showName(): string {
    return this.name;
  }
}
```

Another useful modifier is `readonly`. It prevents a property from being reassigned after initialization. However, it can still be read.

```typescript
class Student {
  readonly id: number = 101;
}
```

## Conclusion

Access modifiers play an important role in TypeScript OOP by controlling how class members can be accessed. `public`, `private`, and `protected` provide different levels of accessibility, while `readonly` can prevent unwanted reassignment of any variable or calss. Using them properly helps developers write more organized, secure, and maintainable code which is important for any  project.