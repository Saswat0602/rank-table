let students = [];

ul = document.querySelector("#ul")
function addStudent() {
  const name = document.getElementById("name");
  const marks = document.getElementById("marks");

  const student = {
    name: name.value,
    marks: marks.value,
  };

  students.push(student);
  document.getElementById("form").reset();
  console.log(student);

  
  const li = document.createElement("li")
  const bTag = document.createElement("b")
  bTag.append(student.name)
  li.append(bTag)
  li.append(`--${student.marks}`)
  ul.append(li)
}





function sorted() {
  // function to implement bubble sort
  let n = students.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if ((students[j].marks) < (students[j + 1].marks)) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    const tr = `
        <tr>
          <td>${students[i].name}</td>
          <td>${students[i].marks}</td>
        </tr>
      `;
    tbody.innerHTML += tr;
  }
}

const submit = document.querySelector("#btn");
const sort = document.querySelector("#sort");

submit.addEventListener("click", addStudent);
sort.addEventListener("click", sorted);
