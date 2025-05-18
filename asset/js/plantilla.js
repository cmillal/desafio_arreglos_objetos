//propiedades en venta

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
  ];

  //propiedades en alquiler 
  const propiedades_alquiler = [
    {
        nombre: 'Apartamento moderno con balcón',
        src: 'https://images.unsplash.com/photo-1505843310538-1c11109b92cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        descripcion: 'Luminoso apartamento de 1 habitación con excelente ubicación y balcón privado.',
        ubicacion: 'Av. Principal 123, Santiago',
        habitaciones: 1,
        costo: 850,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa espaciosa con jardín',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad1c153b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        descripcion: 'Amplia casa de 3 habitaciones, 2 baños y un gran jardín ideal para familias.',
        ubicacion: 'Calle Los Robles 456, Ñuñoa',
        habitaciones: 3,
        costo: 1500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft de diseño en zona céntrica',
        src: 'https://images.unsplash.com/photo-1515879235707-1548398558d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfDB8MHwwfHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        descripcion: 'Moderno loft de dos niveles con acabados de lujo y vistas panorámicas.',
        ubicacion: 'Pasaje La Luna 789, Providencia',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: false
    }
];