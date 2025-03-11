document.getElementById("temp").addEventListener("keyup", function(e){
    document.getElementById("message").value = document.getElementById("message").value + e.key;
})

async function submitClick() {
    const form = document.getElementById('form');
    const result = document.getElementById('result');
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then( (response) => {
            console.log("we wait");
            result.innterHTML = "Just a moment...";
            
            let json =  response.json();
            if (response.status == 200) {
                console.log("ehre");
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
            window.location.replace("www.google.com");      // TODO: testing with Google for now
        });
}