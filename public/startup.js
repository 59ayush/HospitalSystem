baseURL = "http://localhost:3000/"

async function getStartData(){
    const res = await fetch(baseURL + "startup", {
        method: 'GET'
    });

    const data = await res.json();
    console.log(data);
    addElements(data);
}

function addElements(data) {
    const body = document.getElementsByTagName("body")[0];
    const para = document.createElement('p');
    //para.innerHTML = "Database data fetched successfully. Check console";

    body.appendChild(para);

    const tbody = document.getElementsByTagName("tbody")[0];


    data.forEach((item) => {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        const time = document.createElement('td');
        time.classList.add("td");
        time.innerHTML = item.time;
        row.appendChild(time);

        const name = document.createElement('td');
        name.classList.add("td");
        name.innerHTML = item.name;
        row.appendChild(name);

        const age = document.createElement('td');
        age.classList.add("td");
        age.innerHTML = item.age;
        row.appendChild(age);

        const gender = document.createElement('td');
        gender.classList.add("td");
        gender.innerHTML = item.gender;
        row.appendChild(gender);

        const bloodgroup = document.createElement('td');
        bloodgroup.classList.add("td");
        bloodgroup.innerHTML = item.bloodgroup;
        row.appendChild(bloodgroup);

        const ailment = document.createElement('td');
        ailment.innerHTML = item.ailment;
        row.appendChild(ailment);
    })
}

getStartData();