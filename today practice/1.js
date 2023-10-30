async function fetchData() {
    const apiUrl = 'https://trapflix.com/streaming_api/videos.php';
  
    for(var i=0;i<=10000;i++)
    try {
      const response = await fetch(apiUrl, { mode: 'no-cors' });
      
      // You won't be able to access the response data in 'no-cors' mode
      console.log('Request was made, but response data is inaccessible due to CORS restrictions.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();