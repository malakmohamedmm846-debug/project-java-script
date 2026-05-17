function addData() {

    let table = document.getElementById("myTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = "1";
    cell2.innerHTML = "fatma";
    cell3.innerHTML = "Developer";
}