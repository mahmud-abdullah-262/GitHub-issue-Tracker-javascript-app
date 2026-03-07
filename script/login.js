// log in btn

document.getElementById('login-btn')
.addEventListener('click', function(){
 const admin = document.querySelector('.input');
 const adminValue = admin.value;
 const password = document.querySelector('.password');
 const passwordValue = password.value;

 if(adminValue === 'admin' && passwordValue === 'admin123'){
  alert(`login success! 
    welcome to github issue Tracker.


    developed by Abdullah Al Mahmud.`);

    window.location.replace('./home.html')
 } else{
  alert('login failed');
  return
 }
})