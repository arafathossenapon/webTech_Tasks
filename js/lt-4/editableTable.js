

function addStudent() {

    let name = document.getElementById("name").value.trim();

    let roll = document.getElementById("roll").value.trim();

    let department = document.getElementById("department").value.trim();

    document.getElementById("error").innerText = "";

    if (name == "" || roll == "" || department == "") {
        document.getElementById("error").innerText ="All fields are required";
        return;
    }

    let table = document.getElementById("studentTable");

    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${name}</td>

            <td>${roll}</td>

            <td>${department}</td>

            <td>

                <button onclick="deleteStudent(this)">

                    Delete

                </button>

            </td>
    `;

    table.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";

}

function deleteStudent(btn) {

    btn.parentElement.parentElement.remove();

}

