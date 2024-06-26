export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
          const success = true; // Simulate success/failure
          if (success) {
              resolve('API response');
          } else {
              reject('Error fetching API response');
          }
      }, 1000); // Simulate delay
  });
}
