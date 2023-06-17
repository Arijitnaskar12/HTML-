<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Asynchronous Javascript</title>
  </head>
  <body>
    {/* <!-- 
        instagram: 
            searching

            1. are those list of names stored in your phone.

            frontend(web app), backend


            2. Data will be in some servers (Database servers).

            insta server(mumbai, Google Cloud providers(GCP)), Bangalore(frontend js)

            HTML, CSS, javascript


        Client(web app, android app, desktop app, ios app)

            Request URL: (GET)
                https://www.abhibus.com/SearchStations/?s=wara

                endpoint(url),
                request_method,
                payload(data that client needs to send to the server)


            Request Method: 
                GET(Read data from the database)


                Create data (POST)
                {
                    email:
                    password:
                    username:
                    firstName: 
                    lastName: 
                }

                UPDATE(PUT)

                DELETE

            Response status code :
              200

                REST => representational state transfer.

     -->

    <!-- 
        how create variables 
        hoisting
        scope chain
        closures
        event loop
        callback queue
        microtask queue
        Promise()

      -->

    <!-- <script src="./index.js"></script> -->
    <!-- <script src="promises.js"></script> -->

    <!-- <div id="time"></div>
      <script src="date.js"></script> -->
    <!-- <script src="promises2.js"></script> --> */}
    <!-- <input type="number" id="input" />
    <button onclick="fetchData()">Load Data</button> -->
    <button onclick="loadDummyUsers()">Load Dummy users</button>
    <div id="users"></div>
    <div id="places"></div>
    <!-- <script src="prom3.js"></script> -->

    <script>
      const usersContainer = document.getElementById("users");
      function loadDummyUsers() {
        // https://jsonplaceholder.typicode.com/users
        let response = fetch("https://jsonplaceholder.typicode.com/users");
        response.then((data) => {
          let prom = data.json();
          prom.then((finalData) => {
            addUsersOntoWebPage(finalData);
          });
        });
      }

      function addUsersOntoWebPage(users) {
        usersContainer.innerText = "";
        for (let i = 0; i < users.length; i++) {
          let div = document.createElement("div");
          div.innerText = users[i].email;
          usersContainer.append(div);
        }
      }
    </script>
    <!-- <script>
      const pincodeInput = document.getElementById("input");
      const placesContainer = document.getElementById("places") ;

      function fetchData() {
        let pincode = pincodeInput.value;
        let response = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        response.then((data) => {
            // data is Response clas instance 
            let prom = data.json();
            prom.then((finalData) => {
                appendOntoWebPage(finalData[0].PostOffice);
            })
            prom.catch(() => {
                alert("Something went wrong")
            })
        })


        response.catch(() => {
            alert("some error");
        })
      }

      function appendOntoWebPage(arr) {
        placesContainer.innerText = '' ;
        for (let i = 0; i < arr.length; i++) {
          let div = document.createElement("div");
          div.innerText = arr[i].Name;
          placesContainer.append(div);
        }
      }
    </script> -->

    <!-- 
        Login -> button will have a loader -> network call(sending data) -> if response is true -> remove the login form => fetch the details of the user(another network) =>  
                                                                         -> if response is false -> show error message to the users
                            


        
     -->

    <script>
    //   function onloginSuccess(fetchUserDetails) {
    //     // code for removing the form
    //     fetchUserDeatils()
    //   }
    //   function login(onloginSuccess) {
    //     // some time later
    //     // fetch()
    //     onloginSuccess(fetchUserDetails);
    //   }
    // async await
    </script>
    loging => remove the form => fetch the details
  </body>
</html>