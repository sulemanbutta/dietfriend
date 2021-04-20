    function result() {
        var searchTerm = document.getElementById("searchInput").value;
        var zipCode = document.getElementById("zipInput").value;
        var price = document.getElementById("priceSelect").value;
        var distance = document.getElementById("searchRadius").value;

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BZm-Byn8OfpJS0zEjkCgbNTVhNWU73UU2bTSKdLnpxuMt81_fJUf2NONWbFUL0nsBiWA6XMLH8al3lbEkaaELj24jFKDOomkJLNOYSU76XH1CjP-87o1H1zOdf9xYHYx");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        if(price == '0'){
            if(distance == '0'){
                fetch("https://sulecorsproxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&location=" + zipCode, requestOptions)
                .then(response => response.json())
                .then(data => {
                console.log(data.businesses)
                for(var i =0; i < data.businesses.length; i++){
                document.getElementById("searchResults").innerHTML += '<br><br><h4>'+data.businesses[i].name+'</h4>';
                document.getElementById("searchResults").innerHTML += '<img src="'+data.businesses[i].image_url+'" width="128" height="128">'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].phone+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].location.address1+'<br>'+data.businesses[i].location.city+', '+data.businesses[i].location.state+' '+data.businesses[i].location.zip_code+'</li>'  
                document.getElementById("searchResults").innerHTML += '<li>Price: '+data.businesses[i].price+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>Rating: '+data.businesses[i].rating+'/5</li>'
                }})
                .catch(error => console.log('error', error));       
            }
            else{
                fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&location=" + zipCode + "&radius=" + distance, requestOptions)
                .then(response => response.json())
                .then(data => {
                console.log(data.businesses)
                for(var i =0; i < data.businesses.length; i++){
                document.getElementById("searchResults").innerHTML += '<br><br><h4>'+data.businesses[i].name+'</h4>';
                document.getElementById("searchResults").innerHTML += '<img src="'+data.businesses[i].image_url+'" width="128" height="128">'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].phone+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].location.address1+'<br>'+data.businesses[i].location.city+', '+data.businesses[i].location.state+' '+data.businesses[i].location.zip_code+'</li>'  
                document.getElementById("searchResults").innerHTML += '<li>Price: '+data.businesses[i].price+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>Rating: '+data.businesses[i].rating+'/5</li>'
                }})
                .catch(error => console.log('error', error)); 
            }
        }
        else{
            if(distance == '0'){
                fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&location=" + zipCode + "&price=" + price, requestOptions)
                .then(response => response.json())
                .then(data => {
                console.log(data.businesses)
                for(var i =0; i < data.businesses.length; i++){
                document.getElementById("searchResults").innerHTML += '<br><br><h4>'+data.businesses[i].name+'</h4>';
                document.getElementById("searchResults").innerHTML += '<img src="'+data.businesses[i].image_url+'" width="128" height="128">'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].phone+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].location.address1+'<br>'+data.businesses[i].location.city+', '+data.businesses[i].location.state+' '+data.businesses[i].location.zip_code+'</li>'  
                document.getElementById("searchResults").innerHTML += '<li>Price: '+data.businesses[i].price+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>Rating: '+data.businesses[i].rating+'/5</li>'
                }})
                .catch(error => console.log('error', error));
            }
            else{
                fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&location=" + zipCode + "&price=" + price + "&radius=" + distance, requestOptions)
                .then(response => response.json())
                .then(data => {
                console.log(data.businesses)
                for(var i =0; i < data.businesses.length; i++){
                document.getElementById("searchResults").innerHTML += '<br><br><h4>'+data.businesses[i].name+'</h4>';
                document.getElementById("searchResults").innerHTML += '<img src="'+data.businesses[i].image_url+'" width="128" height="128">'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].phone+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>'+data.businesses[i].location.address1+'<br>'+data.businesses[i].location.city+', '+data.businesses[i].location.state+' '+data.businesses[i].location.zip_code+'</li>'  
                document.getElementById("searchResults").innerHTML += '<li>Price: '+data.businesses[i].price+'</li>'
                document.getElementById("searchResults").innerHTML += '<li>Rating: '+data.businesses[i].rating+'/5</li>'
                }})
                .catch(error => console.log('error', error));               
            } 
        }
    }
