function renderUser() {
    const listUser = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')) : []


    let users = `
<tr>
<th>ID</th>
<th>Username</th>
<th>Password</th>
<th>Phone</th>
<th>Action</th>
</tr>
`
    listUser.forEach((value, index) => {
        users += `
    <tr>
    <td>${index}</td>
    <td>${value.name}</td>
    <td>${value.pass}</td>
    <td>${value.phone}</td>
    <td>
    <button onclick="editUser(${index})">edit</button>
    <button onclick="deleteUser(${index})">delete</button>
    </td>
    </tr>
    `
    })
    document.getElementById('table').innerHTML = users;
    resetForm();

}
   
function strigger() {
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let enterThePass = document.getElementById('resetPass').value;
    let phone = document.getElementById('phone').value;
    let weak = document.getElementById('weak');
    console.log(weak);
    let medium = document.getElementById('medium');
    let strong = document.getElementById('strong');
    let indicator = document.querySelector('.indicator');
 
    if(pass != "")
     {
        indicator.style.opacity = "1"
        indicator.style.visibility = "visible"
        
    }
    else {
        indicator.style.opacity = "0"
        indicator.style.visibility = "hidden"
    }
    if(pass.length <=8 ) {
        weak.style.background = "none";
        medium.style.background = "none";
        strong.style.background = "none";
    }
    if(pass.length>=9 &&pass.length < 12) {
        weak.style.display = "block"
        weak.style.background = "#ff4757";
        medium.style.background = "none";
        strong.style.background = "none";
        strong.style.display = "none";
        medium.style.display = "none"
    }
    else if(pass.length>=12 && pass.length<16) {
        weak.style.display = "none";
        medium.style.background = "orange";
        strong.style.background = "none";
        medium.style.display = "block";
        strong.style.display = "none"
        weak.style.background = "none";
    }
    else if(pass.length >=16) {
        medium.style.display = "none"
        strong.style.background = "#23ad5c";
        weak.style.display = "none";
        medium.style.background = "orange";
        strong.style.display = "block"
        weak.style.background = "none";
    }
} 
function editUser(index) {
    const listUser = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')) : []
    
    document.getElementById('name').value = listUser[index].name;
    document.getElementById('pass').value = listUser[index].pass;
    document.getElementById('resetPass').value = listUser[index].enterThePass;
    document.getElementById('phone').value = listUser[index].phone;
    document.getElementById('index').value = index;

}
function updateUser() {
    const listUser = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')) : []
        let keyUser = document.getElementById('index').value;
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let enterThePass = document.getElementById('resetPass').value;
    let phone = document.getElementById('phone').value;
    
    let isCheck = pass !== enterThePass;
    if(name == "" || name.length > 25 || name.length <= 8) {
        document.getElementById('errorName').style.transform = "scale(1)"
    }
    else {
        document.getElementById('errorName').style.transform = "scale(0)";
        document.getElementById('sucessName').style.transform = "scale(1)"

    }
    if(pass == "" || enterThePass == "" || pass.length < 8 || isCheck) {
        document.getElementById('errorPass').style.transform = "scale(1)"
        document.getElementById('errorReset').style.transform = "scale(1)"
    }
    else {
        document.getElementById('errorPass').style.transform = "scale(0)";
        document.getElementById('errorReset').style.transform = "scale(0)";
        document.getElementById('sucessReset').style.transform = "scale(1)";
        document.getElementById('sucessPass').style.transform = "scale(1)";

    }
    if(phone == "" || phone.length <=8 || phone.length > 10) {
        document.getElementById('errorPhone').style.transform = "scale(1)";

    }
    else {
        document.getElementById('errorPhone').style.transform = "scale(0)";
        document.getElementById('sucessPhone').style.transform = "scale(1)";

    }
    if(isNaN(phone)) {
        document.getElementById('errorPhone').style.transform = "scale(1)";
        document.getElementById('sucessPhone').style.transform = "scale(0)";
    }
    if(isCheck || !pass || !enterThePass || phone.length <=8 || phone.length > 10 || pass.length < 8 || name.length > 25 || name.length <=8) {
        // document.getElementById('errorPass').style.transform = "scale(1)"
        // document.getElementById('errorReset').style.transform = "scale(1)"
        // document.getElementById('sucessReset').style.transform = "scale(0)";
        // document.getElementById('sucessPass').style.transform = "scale(0)";
    }
    else {
        listUser[keyUser] = {
            name: document.getElementById('name').value,
            pass: document.getElementById('pass').value,
            phone: document.getElementById('phone').value
    
    
        }
        localStorage.setItem('user', JSON.stringify(listUser));
    
        const name = document.getElementById('name').value;
        const pass = document.getElementById('pass').value;
        const resetPass = document.getElementById('resetPass').value;
        const phone = document.getElementById('phone').value;
    }

    resetForm();
    renderUser();
}
function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('resetPass').value = '';
    document.getElementById('phone').value = '';
}
function deleteUser(user) {
    let listUser = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')) : []
    if (confirm('bạn có chắc chắn muốn xóa ko')) {
        listUser.splice(user, 1);
    }
    localStorage.setItem('user', JSON.stringify(listUser))
    renderUser();
}