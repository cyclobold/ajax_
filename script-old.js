let btn = document.querySelector("#btn");

btn.onclick = function(){
    
    const xhr = new XMLHttpRequest;

    console.log(xhr);
    xhr.open("GET", "http://localhost:5501/text.json");




    xhr.addEventListener("load", function(){
        result = JSON.parse(xhr.response);
        document.querySelector("h3").innerText = result.username;

    })




xhr.send();


}


// xhr.onopen = function(){

// }


