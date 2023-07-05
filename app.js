var cardDiv = document.querySelector('.mycard');
//Creating a get data funtion
function getData(){
    // fetch data 
    const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(data){
        return data.json()
    })
    .then(function(response){
        var data = response
        // console.log(data)
        for (let obj of data) {
            var card = `        <div class="card mt-2" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text">${obj.username}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
          cardDiv.innerHTML += card
        }
    })
    .catch(function (error){
        console.log("error")
    })

}

