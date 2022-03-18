aboutUs = document.querySelector("#about-us");
container = document.querySelector(".container");
search = document.querySelector("#search");
searchResults = document.querySelector("#search-results");

aboutUs.onclick = function(){

    xhr = new XMLHttpRequest;

    console.log(xhr);

    xhr.open("GET", "/aboutus.html");

    xhr.addEventListener("load", function(){

        response = xhr.response;

        container.innerHTML = response;

    })


    xhr.send();


}


search.addEventListener("keyup", function(event){
    searchItem = event.target.value.trim();
    if(searchItem.length != 0){

        xhr = new XMLHttpRequest;

        xhr.open("GET", "/search_data.json");

        xhr.addEventListener("load", function(){

           response = JSON.parse(xhr.response);

           dataBank = response.items;

           let results = "";
           console.log(dataBank);
           for(let i = 0; i < dataBank.length; i++){
            
            results += `<div>${dataBank[i]['name']}
                            <p><small>${dataBank[i]['description']}</small></p>            
                        </div>`;
                //dataBank[i]

           }

           results += "";

           searchResults.innerHTML = results;




        })


        xhr.send();
        


    }


})


