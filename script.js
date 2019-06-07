document.getElementById('btn1').addEventListener('click', loadjsondata);

function loadjsondata() {
    fetch('myJson.json')
        .then(responseData => {
            return responseData.json();
        })
        .then(data => {
            const output = `<ul class="list-group mt-5"> 
                <li class="list-group-item"> id : ${data.id}</li>
                <li class="list-group-item"> name : ${data.name}</li>
                <li class="list-group-item"> city : ${data.city}</li>
                <li class="list-group-item"> city : ${data.phoneNumber}</li>
                <li class="list-group-item"> city : ${data.gender}</li>
            </ul>`;
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
}