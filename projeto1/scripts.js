function getChuckNorisPhrase(url) {
    let apiRequest = new XMLHttpRequest();
    apiRequest.open('GET',url,false)
    apiRequest.send()
    return apiRequest.responseText
}


function main() {

    var phrases = [];
    for(let req = 0; req < 9 ; req++) {
        data = getChuckNorisPhrase("https://api.chucknorris.io/jokes/random")
        phrases.push(JSON.parse(data));
        console.log(JSON.parse(data))
    }
    
    var dados_html = document.getElementById('dados');  
    var count = 1
    phrases.forEach(phrase => dados_html.insertAdjacentHTML('beforebegin',`
        
            <div class="col-xs-2">
                
                <img src="img/image${count}.png" class="bd-placeholder-img rounded-circle" width="160" height="160" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/> 
                <h2 class="fw-normal">#${count++}° Chuck Norris</h2>
                <p class="fs-4">${phrase.value}</p>
            </div> 
            <br/>
        `
                                                                            )
     );
}
