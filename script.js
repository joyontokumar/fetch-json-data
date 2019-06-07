// single json data
document.getElementById('btn1').addEventListener('click', loadjsondata1);

function loadjsondata1() {
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
            document.getElementById('singlejson').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
}

// multiple json data

document.getElementById('btn2').addEventListener('click', loadjsondata2);

function loadjsondata2() {
    fetch('myJson2.json')
        .then(responseData => {
            return responseData.json();
        })
        .then(data => {
            let output = '';
            data.forEach(function (multileItem) {
                output += `<ul class="list-group mt-5"> 
                <li class="list-group-item"> id : ${multileItem.id}</li>
                <li class="list-group-item"> name : ${multileItem.name}</li>
                <li class="list-group-item"> city : ${multileItem.city}</li>
                <li class="list-group-item"> city : ${multileItem.phoneNumber}</li>
                <li class="list-group-item"> city : ${multileItem.gender}</li>
            </ul>`;
            })
            document.getElementById('multiplejson').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
}