const propiedades_alquiler = [
    {
        nombre: 'Apartamento moderno con balcón',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Luminoso apartamento de 1 habitación con excelente ubicación y balcón privado.',
        ubicacion: 'Av. Principal 123, Santiago',
        habitaciones: 1,
        costo: 850,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa espaciosa con jardín',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Amplia casa de 3 habitaciones, 2 baños y un gran jardín ideal para familias.',
        ubicacion: 'Calle Los Robles 456, Ñuñoa',
        habitaciones: 3,
        costo: 1500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft de diseño en zona céntrica',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Moderno loft de dos niveles con acabados de lujo y vistas panorámicas.',
        ubicacion: 'Pasaje La Luna 789, Providencia',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Loft de diseño en zona céntrica',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Moderno loft de dos niveles con acabados de lujo y vistas panorámicas.',
        ubicacion: 'Pasaje La Luna 789, Providencia',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Loft de diseño en zona céntrica',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Moderno loft de dos niveles con acabados de lujo y vistas panorámicas.',
        ubicacion: 'Pasaje La Luna 789, Providencia',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: false
    }
];

const propiedadesAlquilerDiv = document.getElementById('propiedadesAlquiler');
let htmlPropiedades = '';

for (const propiedad of propiedades_alquiler) {
    const iconoSmoke = propiedad.smoke ? '<i class="fas fa-smoking text-success"></i> Permitido fumar' : '<i class="fas fa-smoking-ban text-danger"></i> No se permite fumar';
    const iconoPets = propiedad.pets ? '<i class="fas fa-paw text-success"></i> Mascotas permitidas' : '<i class="fas fa-ban text-danger"></i> No se permiten mascotas';

    htmlPropiedades += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedad.src}"
                    class="card-img-top"
                    alt="Imagen de ${propiedad.nombre}"
                />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="text-info">
                        ${iconoSmoke}
                    </p>
                    <p class="text-info">
                        ${iconoPets}
                    </p>
                </div>
            </div>
        </div>
    `;
}

propiedadesAlquilerDiv.innerHTML = htmlPropiedades;