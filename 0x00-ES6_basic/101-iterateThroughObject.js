export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  
  for (const category of reportWithIterator) {
    for (const employee of category) {
      employeeNames.push(employee);
    }
  }

  return employeeNames.join(' | ');
}
