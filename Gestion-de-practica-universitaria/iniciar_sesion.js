function ejecutarLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.toLowerCase();
    
    if (email.includes('admin')) {
        alert('Detectado como Administrador');
        window.location.href = 'admin/admin.html'; 
    } 
    else if (email.includes('coord')) {
        alert('Detectado como Coordinador');
        window.location.href = 'coord/coord.html';
    } 
    else if (email !== "") {
        alert('Detectado como Estudiante');
        window.location.href = 'estudiante/inicio.html'; 
    } 
    else {
        alert('Por favor, ingresa un correo');
    }
}