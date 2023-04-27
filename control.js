

document.addEventListener('DOMContentLoaded', function() {
    // POST method to increment the visitor count
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://n33go4w2kd.execute-api.us-east-1.amazonaws.com/counting');
    xhr.send();
  
    // GET method to retrieve the current visitor count and display it on the webpage
    async function getCurrentCount() {
      const response = await fetch('https://n33go4w2kd.execute-api.us-east-1.amazonaws.com/counting');
      const data = await response.json();
      console.log(data);
      const count = data;
      const countElement = document.getElementById('count');
      countElement.innerText = count;
    }
  
    getCurrentCount();
  });