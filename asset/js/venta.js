
  
  const propiedadesEnVenta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        descripcion:
            "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4,
        precio: 5000,
        amenidades: {
            fumar: false,
            mascotas: false,
        },
        imagen:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        descripcion:
            "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        banos: 1,
        precio: 1200,
        amenidades: {
            fumar: true,
            mascotas: true,
        },
        imagen:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion:
            "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        amenidades: {
            fumar: false,
            mascotas: true,
        },
        imagen:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion:
            "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        amenidades: {
            fumar: false,
            mascotas: true,
        },
        imagen:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion:
            "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        precio: 4500,
        amenidades: {
            fumar: false,
            mascotas: true,
        },
        imagen:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    },
];

const contenedorPropiedadesVenta = document.getElementById('contenedorPropiedadesVenta');
let htmlPropiedadesVenta = '';

for (const propiedad of propiedadesEnVenta) {
    const iconoFumar = propiedad.amenidades.fumar
        ? '<i class="fas fa-smoking text-success"></i> Permitido fumar'
        : '<i class="fas fa-smoking-ban text-danger"></i> No se permite fumar';

    const iconoMascotas = propiedad.amenidades.mascotas
        ? '<i class="fas fa-paw text-success"></i> Mascotas permitidas'
        : '<i class="fa-solid fa-ban text-danger"></i> No se permiten mascotas';

    htmlPropiedadesVenta += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedad.imagen}"
                    class="card-img-top"
                    alt="${propiedad.nombre}"
                />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                    <p class="text-info">
                        ${iconoFumar}
                    </p>
                    <p class="text-info">
                        ${iconoMascotas}
                    </p>
                </div>
            </div>
        </div>
    `;
}

contenedorPropiedadesVenta.innerHTML = htmlPropiedadesVenta;