const curso = {
    nombre: "Programación en JavaScript",
    categoria: "Desarrollo Web",
    docente: "Juan Pérez",
    modalidad: "En línea",
    duracion: "8 semanas",
    vacantes: 30,
    costo: 200,
    fechaInicio: "2024-07-01",
    estado: "Abierto"
}


const tarjeta = '<div> <h2>' + curso.nombre +'</h2>' +
'<p>Categoría: '+ curso.categoria+ '</p>' + 
'<p>Docente: '+ curso.docente+ '</p>' +
'<p>Modalidad: '+ curso.modalidad+ '</p>' +
'<p>Duración: '+ curso.duracion+ '</p>' +
'<p>Vacantes: '+ curso.vacantes+ '</p>' +
'<p>Costo: $'+ curso.costo+ '</p>' +
'<p>Fecha de Inicio: '+ curso.fechaInicio+ '</p>' +
'<p>Estado: '+ curso.estado+ '</p>' +   
'</div>';


const tarjetaDinamica = `
    <div>
        <h2> ${curso.nombre}</h2>
        <p>Curso: ${curso.categoria}</p>
        <p>Docente: ${curso.docente}</p>
        <p>Modalidad: ${curso.modalidad}</p>
        <p>Duración: ${curso.duracion}</p>
        <p>Vacantes: ${curso.vacantes}</p>
        <p>Costo: $${curso.costo}</p>
        <p>Fecha de Inicio: ${curso.fechaInicio}</p>
        <p>Estado: ${curso.estado}</p>
    </div>
`;

console.log(tarjeta);
console.log(tarjetaDinamica);
