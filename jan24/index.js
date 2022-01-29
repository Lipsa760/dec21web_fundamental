fetch('http://universities.hipolabs.com/search?country=india')
.then((load)=>load.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++){
            let c = data[i].country;
            let d = data[i].domains[0];
            let n = data[i].name;
            let s = data[i]["state-province"];
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            
            
            tableRow.innerHTML = '<td>' + c + '</td>' + '<td>' + d + '</td>' + '<td>' + n + '</td>' + '<td>' + s + '</td>';
            table.appendChild(tableRow);
        }
    })