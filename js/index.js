function showPassword() {
    const eye = document.getElementById('eye');
    const eyecego =  document.getElementById('cego');
    const fieldPassword = document.getElementById('field-passoword');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        cego.style.display = 'block';
        fieldPassword.type = 'text';}
    else{
        eye.style.display = 'none';
        cego.style.display = 'block';
        fieldPassword.type = 'password';
    }
};
document.getElementById('logar').addEventListener('click', function(e) {
    e.preventDefault();
    alert('logado!');
});
