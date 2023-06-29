export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      const eMessage = 'The fake API is not working currently';
      const error = new Error(eMessage);
      reject(error);
    }
  });
}
