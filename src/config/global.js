export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Administración en el entorno actual',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Administración estratégica y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de la administración estratégica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La estrategia como proceso emergente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Función del gobierno corporativo y administración de los grupos de interés',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Perspectivas alternas de la administración de grupos de interés',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mantilla Duarte, A. M. & Martínez Velandia, L. E. (2023). Administración estratégica de A y B: Segunda parte. Bubok Publishing S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/260544?page=1',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). Administración estratégica. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=3',
    },
    {
      referencia:
        'Reinoso Lastra, J. F., Vera Calderón, J. A. & Ramírez Ramírez, E. A. (2023). Gestión de la cultura y el cambio organizacional. Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/232951?page=1',
    },
    {
      referencia:
        'Gallardo Gallardo, E. (2015). ¿Cómo gestionar el cambio en una organización? Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/57894?page=1',
    },
    {
      referencia:
        'Luna González, A. C. (2015). Administración estratégica. Grupo Editorial Patria.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=292',
    },
    {
      referencia:
        'Gorrochategui, N. (2019). Responsabilidad Social de las Organizaciones (rso): Estudios desde la mirada de la Responsabilidad Social hacia los Objetivos de Desarrollo Sostenible en América Latina. RIL editores.',
      link: 'https://elibro.net/es/tc/tecnologicadeloriente/titulos/130137',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Proceso mediante el cual una organización ajusta sus estrategias, estructuras o procesos para enfrentar cambios en el entorno.',
    },
    {
      termino: 'Cambio organizacional',
      significado:
        'El proceso de modificar aspectos fundamentales de la estructura, la cultura o las operaciones dentro de una organización.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso mediante el cual se transmiten e intercambian ideas, instrucciones e información dentro de una organización.',
    },
    {
      termino: 'Competencia',
      significado:
        'La capacidad de una organización para ofrecer productos o servicios de manera más eficaz que sus rivales.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'El conjunto de valores, creencias, comportamientos y normas que comparten los miembros de una organización.',
    },
    {
      termino: 'Delegación',
      significado:
        'El proceso de asignar responsabilidades y autoridad a otros miembros dentro de la estructura jerárquica.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Un plan de acción que guía a la organización hacia la consecución de sus objetivos a largo plazo.',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'El proceso de planificar y gestionar las transformaciones dentro de una organización para garantizar su éxito y sostenibilidad.',
    },
    {
      termino: 'Innovación',
      significado:
        'La introducción de nuevos productos, servicios, procesos o métodos dentro de una organización para mejorar su competitividad.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'La habilidad de influir, motivar y guiar a los miembros de una organización para alcanzar metas comunes.',
    },
    {
      termino: 'Misión',
      significado:
        'La razón fundamental por la cual existe una organización, generalmente expresada en términos de su propósito y objetivos.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Metas específicas que una organización se propone alcanzar dentro de un período determinado.',
    },
    {
      termino: 'Planificación',
      significado:
        'El proceso de definir metas y desarrollar estrategias para alcanzar esas metas dentro de un marco temporal determinado.',
    },
  ],
  complementario: [],
}
