var listStudents = [];
var header = `<tr><th>id</th>
<th>name</th>
<th>toan</th>
<th>ly</th>
<th>hoa</th><tr>`
async function getData() {
    const respone = await axios('http://localhost:3000/students')
    listStudents = respone.data

    display(listStudents);
}
getData()
async function display(students) {
    function render(el) {
        return `<tr><td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.toan}</td>
        <td>${el.ly}</td>
        <td>${el.hoa}</td></tr>`
    }

    let tableElement = $("#tb1")
    let str = ''

    for (const el of students) {
        str += render(el)
    }


    tableElement.html(header + str)
}
$("button#filter").click(async function () {
    let listGoodStudents = listStudents.filter(function (el) {
        return (el.toan + el.ly + el.hoa) / 3 > 7
    })

    display(listGoodStudents)
})

$("button#addOneMath").click(async function () {
    listStudents.forEach(element => {
        element.toan += 1;
    });
    console.log(listStudents);
})