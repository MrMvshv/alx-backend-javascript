export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'data';
      resolve(data); // Promise is fulfilled
    }, 2000);
  });
}
