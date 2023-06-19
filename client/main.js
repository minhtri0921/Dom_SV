var listStudents = [];
var header = `<tr>
  <th>id</th>
  <th>name</th>
  <th>toan</th>
  <th>ly</th>
  <th>hoa</th>
</tr>`;

async function getData() {
  const response = await axios.get('http://localhost:3000/students');
  listStudents = response.data;
  display(listStudents);
}

getData();

async function display(students) {
  let tableElement = $("#tb1");
  let str = "";

  function render(el) {
    return `<tr>
      <td>${el.id}</td>
      <td>${el.name}</td>
      <td>${el.toan}</td>
      <td>${el.ly}</td>
      <td>${el.hoa}</td>
    </tr>`;
  }

  students.forEach(element => {
    str += render(element);
  });

  tableElement.html(header + str);
}

$("button#filter").click(function () {
  let listGoodStudents = listStudents.filter(function (el) {
    return (el.toan + el.ly + el.hoa) / 3 > 7;
  });

  display(listGoodStudents);
});

$("button#addOneMath").click(function () {
  listStudents.forEach(element => {
    element.toan += 1;
  });

  display(listStudents);
});

$("button#addProperty").click(async function () {
    listStudents.forEach(element => {
        element.tongDiem = element.toan + element.ly + element.hoa;
    });
    header = `<tr>
  <th>id</th>
  <th>name</th>
  <th>toan</th>
  <th>ly</th>
  <th>hoa</th>
  <th>Tong Diem</th>
</tr>`;
    let tableElement = $("#tb1");
    let str = "";

    listStudents.forEach(element => {
        str += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.toan}</td>
            <td>${element.ly}</td>
            <td>${element.hoa}</td>
            <td>${element.tongDiem}</td>
        </tr>`;
    });

    tableElement.html(header + str);
});

$("button#sort").click(function () {
    listStudents.sort(function (a, b) {
      return b.tongDiem - a.tongDiem;
    });
  
    display(listStudents);
  });