export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);

  return cityStudents.map((student) => {
    const updatedStudent = { ...student };
    let foundGrade = false;
    newGrades.forEach((gradeObj) => {
      if (gradeObj.studentId === student.id) {
        updatedStudent.grade = gradeObj.grade;
        foundGrade = true;
      }
    });

    if (!foundGrade) {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });
}
