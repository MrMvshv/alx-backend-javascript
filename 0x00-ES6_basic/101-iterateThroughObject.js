export default function iterateThroughObject(reportWithIterator) {
  let empString = '';

  for (const employee of reportWithIterator) {
    empString += `${employee} | `;
  }
  // Remove the trailing ' | ' from the result
  empString = empString.slice(0, -3);
  return empString;
}
