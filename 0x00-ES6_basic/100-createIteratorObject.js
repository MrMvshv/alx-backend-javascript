export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;
  const departments = Object.keys(report.allEmployees);

  const iterator = {
    next() {
      const department = departments[departmentIndex];
      const employees = report.allEmployees[department];
      const employee = employees[employeeIndex];

      if (employeeIndex < employees.length - 1) {
        employeeIndex += 1;
      } else {
        employeeIndex = 0;
        departmentIndex += 1;
      }

      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      return { value: employee, done: false };
    },

    [Symbol.iterator]: () => iterator,
  };

  return iterator;
}
