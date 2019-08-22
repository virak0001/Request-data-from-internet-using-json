var url = "https://jsonplaceholder.typicode.com/users";
var table = document.querySelector('table');
fetch(url)
.then( response => response.json())
.then (data => {
    data.forEach(item  => {
        table.innerHTML += 
        `
            <tr>
                <td>
                ${item.id}
                </td>
                <td>
                ${item.name}
                </td>
                <td>
                ${item.username}
                </td>
                <td>
                ${item.email}
                </td>
                <td>
                ${item.address.street}<br>
                ${item.address.suite}<br>
                ${item.address.city}<br>
                ${item.address.zipcode}<br>
                ${item.address.geo.lat}<br>
                ${item.address.geo.lng}<br>
                </td>
                <td>
                ${"Tell:  "+item.phone}
                </td>
                <td>
                ${item.website}
                </td>
                <td>
                ${item.company.name}<br>
                ${item.company.catchPhrase}<br>
                ${item.company.bs}<br>
                </td>
            </tr>
        `
    })
})
.catch( () => console.error("Data cannot request!!"));