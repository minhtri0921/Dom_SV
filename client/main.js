var listStudents = [];
var header = `<tr>
  <th>id</th>
  <th>name</th>
  <th>toan</th>
  <th>ly</th>
  <th>hoa</th>

  <th>Chức năng</th>
</tr>`;

async function getData() {
  const response = await axios.get('http://localhost:3000/students');
  listStudents = response.data;
  display(listStudents);
}

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
      <td><button id="update" onclick= "update(${el.id})">Sửa</button>
      <button id="remove" onclick= "remove(${el.id})">Xóa</button></td>
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
})

$("button#filter").click(function () {
  let listGoodStudents = listStudents.filter(function (el) {
    return (el.toan + el.ly + el.hoa) / 3 > 7;
  });

  display(listGoodStudents);
})

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

  display(listStudents);
  listStudents.forEach(element => {
    element.tongDiem = element.toan + element.ly + element.hoa;
  });
  listStudents.sort(function (a, b) {
    return b.tongDiem - a.tongDiem;
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

$("button#add").click(async function () {
  let newName = $("input#name").val()
  let newMathPoint = $("input#mathpoint").val()
  let newPhysicalPoint = $("input#physicalpoint").val()
  let newChemicalPoint = $("input#chemicalpoint").val()

  let formData = {
    name: newName,
    toan: newMathPoint,
    ly: newPhysicalPoint,
    hoa: newChemicalPoint
  }

  await axios({
    method: "POST",
    url: 'http://localhost:3000/students/add',
    data: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })

  getData()
  $("input#name").val() = ''
  $("input#mathpoint").val() = ''
  $("input#physicalpoint").val() = ''
  $("input#chemicalpoint").val() = ''
})
async function update(id) {
  let student = listStudents.find(function (el) {
    return el.id = id
  })
  $("input#name").val(student.name)



  listStudents.sort(function (a, b) {
    return b.tongDiem - a.tongDiem;
  });
  display(listStudents);
};

