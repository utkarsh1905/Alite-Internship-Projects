// 1. GET request using fetch()
function getApiData() {
    debugger
    console.log("Fetch Works")
    fetch("http://192.168.1.21:6942/users")
    // fetch("https://jsonplaceholder.typicode.com/users")
      // Converting received data to JSON
      .then((response) => response.json())
      .then((data) => {
  
        // 2. Create a variable to store HTML table headers
        let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Email</th> <th>Phone</th><th>Website</th><th>Action</th></tr>`;
  
        // 3. Loop through each data and add a table row
        data.forEach((user) => {
          li += `<tr>
          <td>${user.id}</td>
                  <td>${user.name} </td>
          <td>${user.username}</td>
                  <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
          <td>Edit</td>
              </tr>`;
        });
  
        // 4. DOM Display result
        document.getElementById("users").innerHTML = li;
      });
  
    // main.js
  
    // 5. POST request using fetch()
    // fetch("https://jsonplaceholder.typicode.com/posts"
    fetch("http://192.168.1.21:6942/users", {
      // 6. Adding method type
      method: "POST",
  
      // 7. Adding body or contents to send JSON Stringify
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      }),
  
      // 8. Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      // 9. Converting to JSON
      .then((response) => response.json())
  
      // 10. Displaying results to console
      .then((data) => console.log(data));
  }
  getApiData()