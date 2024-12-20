// Datos de ejemplo
const investigaciones = [
    {
        titulo: "Cuenta Satélite de Economía Cultural y Creativa de Bogotá (CSECCB)- Resultados 2023",
        descripcion: "Resultados 2023 de la CSECCB en términos de valor agregado y empleo para el sector cultural y Creativo de Bogotá",
        fuente: "SCRD y DANE",
        año publicación: "2024",
        imagen: "ruta/a/la-imagen.jpg"
    },
    {
        titulo: "Mercado laboral",
        descripcion: "xxxx",
        fuente: "SCRD",
        año publicación: "2024",
        imagen: "ruta/a/otra-imagen.jpg"
    }
];

// Contenedor principal
const container = document.getElementById('investigaciones-container');

// Generar tarjetas dinámicamente
investigaciones.forEach(investigacion => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${investigacion.imagen}" alt="Imagen de ${investigacion.titulo}" class="card-img">
        <div class="card-content">
            <h3>${investigacion.titulo}</h3>
            <p>${investigacion.descripcion}</p>
            <p><strong>Año:</strong> ${investigacion.año} | <strong>Solicitante:</strong> ${investigacion.solicitante}</p>
        </div>
    `;

    container.appendChild(card);
});
