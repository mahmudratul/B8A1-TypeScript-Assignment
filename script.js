"use strict";
// function multiplyValue(value: number, multiplier?: number): number {
//   if (multiplier === undefined) {
//     return value * 2;
//   } else if (multiplier !== undefined) {
//     return value * multiplier;
//   } else multiplier === 0;
//   {
//     return 0;
//   }
// }
function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
    return "invalid input";
}
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }
    return result;
}
function getPopularCourses(courses, minStudents) {
    const passedCourses = [];
    for (const course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            passedCourses.push(course);
        }
    }
    return passedCourses;
}
