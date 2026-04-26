async function ObtenerMaterialClases(id) {
    
    try {
        const respuesta = await fetch("https://dragonball-api.com/api/characters");
        const datos = await respuesta.json();
        
        console.log("Material de estudio para el curso de: ", datos.items[id].name);
    } 
        catch (error) {
        console.log("Error en la consulta: ", error);
        }
}

ObtenerMaterialClases(3);