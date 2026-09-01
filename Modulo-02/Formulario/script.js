function printName() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var date = document.getElementById('dob').value;
    var sex = document.getElementById('sex').value;
    var elements = ['name', 'email', 'password', 'age', 'dob', 'sex'];
    var values = [name, email, password, age, date, sex];
    var check = 0
    for (var i = 0; i < values.length; i++) {
        if (values[i] == "") {
            document.getElementById(elements[i]).style.border = "2px solid red";
        }
        else {
            document.getElementById(elements[i]).style.border = "0";
            check++;
        }
        if (check == values.length) {
            alert("All fields are filled");
        }
    }
};