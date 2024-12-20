document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("investigaciones-container");
    const searchBar = document.getElementById("search-bar");

    fetch("data/investigaciones.json")
        .then(response => response.json())
        .then(data => {
            renderInvestigaciones(data);

            // Filtrar investigaciones con el cuadro de búsqueda
            searchBar.addEventListener("input", () => {
                const query = searchBar.value.toLowerCase();
                const filteredData = data.filter(item =>
                    item.titulo.toLowerCase().includes(query) ||
                    item.descripcion.toLowerCase().includes(query)
                );
                renderInvestigaciones(filteredData);
            });
        });

    function renderInvestigaciones(data) {
        container.innerHTML = "";
        data.forEach(investigacion => {
            const card = document.createElement("div");
            card.className = "investigacion-card";
            card.innerHTML = `
                <h3>${investigacion.titulo}</h3>
                <p>${investigacion.descripcion}</p>
                <small>Solicitante: ${investigacion.solicitante} | Año: ${investigacion.anio}</small>
            `;
            container.appendChild(card);
        });
    }
});
