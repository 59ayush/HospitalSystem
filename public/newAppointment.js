const baseURL = "http://localhost:3000/";
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    const time = document.getElementById("time").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const bloodgroup = document.getElementById("bloodgroup").value;
    const ailment = document.getElementById("ailment").value;


    document.getElementById("time").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("bloodgroup").value = "";
    document.getElementById("ailment").value = "";

    addData(time, name, age, gender, bloodgroup, ailment);
})


async function addData(time, name, age, gender, bloodgroup, ailment) {
    const res = await fetch(baseURL + "newAppointmentData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            time: time,
            name: name,
            age: age,
            gender: gender,
            bloodgroup: bloodgroup,
            ailment: ailment
        })
    })
}