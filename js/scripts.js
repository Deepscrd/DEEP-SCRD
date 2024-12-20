const investigaciones = [
    {
        titulo: "Cuenta Satélite de Economía Cultural y Creativa de Bogotá (CSECCB)- Resultados 2023",
        descripcion: "Resultados 2023 de la CSECCB en términos de valor agregado y empleo para el sector cultural y creativo de Bogotá.",
        fuente: "SCRD y DANE",
        año: "2024",
        imagen: "img/cseccb-2023.jpg",
        documento: "docs/cseccb-2023.pdf"
    },
    {
        titulo: "Mercado laboral",
        descripcion: "Análisis del comportamiento del mercado laboral en el sector cultural.",
        fuente: "SCRD",
        año: "2024",
        imagen: "img/mercado-laboral.jpg",
        documento: "docs/mercado-laboral.pdf"
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
            <p><strong>Año:</strong> ${investigacion.año} | <strong>Fuente:</strong> ${investigacion.fuente}</p>
            <a href="${investigacion.documento}" target="_blank" class="btn">Ver Documento</a>
        </div>
    `;

    container.appendChild(card);
});
