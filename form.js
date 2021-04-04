
    function saveAccount(e) {
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
        if(isCheck || !pass || !enterThePass || phone.length <=8 || isNaN(phone) || phone.length > 10 || pass.length < 8 || name.length > 25 || name.length <=8) {
        }
        else {
            document.getElementById('errorPass').style.transform = "scale(0)"
            document.getElementById('errorReset').style.transform = "scale(0)"
            document.getElementById('sucessReset').style.transform = "scale(1)";
            document.getElementById('sucessPass').style.transform = "scale(1)";
            document.getElementById('submit').setAttribute('type','submit');
        }
     
        if(name && pass && enterThePass && phone && !isCheck && name.length > 8 && name.length < 25 && phone.length > 8 && phone.length <= 10 && !isNaN(phone)) {
            let listUser = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user')) : []
            listUser.push({
                name: name,
                pass: pass,
                enterThePass:enterThePass,
                phone:phone
            })
            localStorage.setItem('user' , JSON.stringify(listUser))
        }
        
       
    }


    function resetForm() {
        document.getElementById('name').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('resetPass').value = '';
        document.getElementById('phone').value = '';
    }