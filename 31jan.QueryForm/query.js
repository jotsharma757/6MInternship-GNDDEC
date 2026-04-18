const form =document.getElementById("studentForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value
    const roll = document.getElementById("roll").value;
    const email = document.getElementById("email").value;
    const query = document.getElementById("query").value;

    const studentData = {
        name : name,
        roll : roll,
        email : email,
        query :query, 
        time : new Date().toLocaleString()
    };
    
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(studentData);
    localStorage.setItem("students", JSON.stringify(students));
form.reset();

  alert("Student query submitted successfully ✅");
})