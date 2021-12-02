const form = document.getElementById('form');
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', onCreate)

const tbody = document.querySelector('tbody');

getStudents();

async function onCreate(event){
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const facultyNumber = formData.get('facultyNumber').trim();
    const grade = formData.get('grade').trim();

    createStudent({firstName,lastName,facultyNumber,grade});
}


async function createStudent(student) {
    url = 'http://localhost:3030/jsonstore/collections/students'
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })

    const result = await res.json();
    getStudents();
    return result;
}

async function getStudents() {
    tbody.replaceChildren();
    url = 'http://localhost:3030/jsonstore/collections/students';
    const res = await fetch(url);
    const data = await res.json();
    const students = Object.values(data).forEach( s=>{
        const tr = createItem('tr');
        tr.innerHTML = ` <th>${s.firstName}</th>
        <th>${s.lastName}</th>
        <th>${s.facultyNumber}</th>
        <th>${s.grade}</th>`

        tbody.appendChild(tr);
    })


    
    return students;
}

function createItem(e){
    const result = document.createElement(`${e}`)
    return result;
}