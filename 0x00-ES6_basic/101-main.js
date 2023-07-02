import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);
console.log('report\n' + report)
console.log('reportwith\n' + reportWithIterator)
for (const item of reportWithIterator) {
  console.log(item);
}

console.log(iterateThroughObject(reportWithIterator));
