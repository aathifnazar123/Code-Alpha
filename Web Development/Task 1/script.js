function calculateAge() {
    let dob = document.getElementById('dob').value;
    if (dob === "") {
        alert("Please enter a valid date of birth.");
        return;
    }

    let dobDate = new Date(dob);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - dobDate.getFullYear();
    let monthDiff = currentDate.getMonth() - dobDate.getMonth();
    let dayDiff = currentDate.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
