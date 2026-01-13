export interface LegalService {
  id: string;
  icon: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  introduction: {
    es: string;
    en: string;
  };
  benefits: {
    es: string[];
    en: string[];
  };
  category: 'legal';
}

export const legalServices: LegalService[] = [
  {
    id: 'asesoria-consultoria',
    icon: 'document-check',
    title: {
      es: 'Asesoría y consultoría legal',
      en: 'Legal Advisory and Consulting'
    },
    description: {
      es: 'Equipo de abogados altamente calificado con amplia experiencia en diseño de estrategias legales.',
      en: 'Highly qualified team of lawyers with extensive experience in designing legal strategies.'
    },
    introduction: {
      es: 'Contamos con un equipo de abogados altamente calificado y una amplia experiencia en el diseño de estrategias legales lo que nos permite asesorar y orientar a nuestros clientes en la implementación de prácticas y procesos para que la operación de sus negocios, productos o servicios se realice conforme al más estricto apego a la ley.',
      en: 'We have a highly qualified team of lawyers with extensive experience in designing legal strategies, which allows us to advise and guide our clients in implementing practices and processes so that the operation of their businesses, products, or services is carried out in strict compliance with the law.'
    },
    benefits: {
      es: [
        'Análisis detallado de necesidades específicas mediante entrevista personalizada',
        'Plan de trabajo diseñado para implementar soluciones orientadas al cumplimiento legal',
        'Asesoría integral que permite detectar áreas de oportunidad y riesgo',
        'Base operativa sólida para crecimiento seguro con estricto apego a la ley'
      ],
      en: [
        'Detailed analysis of specific needs through personalized interview',
        'Work plan designed to implement solutions aimed at legal compliance',
        'Comprehensive advice that allows detecting areas of opportunity and risk',
        'Solid operational base for safe growth in strict compliance with the law'
      ]
    },
    category: 'legal'
  },
  {
    id: 'derecho-fiscal',
    icon: 'calculator',
    title: {
      es: 'Derecho Fiscal',
      en: 'Tax Law'
    },
    description: {
      es: 'Análisis integral en materia de impuestos y representación ante el SAT.',
      en: 'Comprehensive tax analysis and representation before the SAT.'
    },
    introduction: {
      es: 'En Bufete Jurídico Pazos Chávez realizamos un análisis integral en materia de impuestos para que los actos, contratos o controversias que celebren o en los que se involucren nuestros clientes, estén apegados a la ley y se evite caer en sanciones establecidas por el ordenamiento fiscal o en malas prácticas fiscales.',
      en: 'At Bufete Jurídico Pazos Chávez, we conduct a comprehensive tax analysis to ensure that the acts, contracts, or controversies entered into or in which our clients are involved comply with the law and avoid falling into sanctions established by tax regulations or bad tax practices.'
    },
    benefits: {
      es: [
        'Análisis integral de actos, contratos y controversias fiscales',
        'Representación ante el Servicio de Administración Tributaria',
        'Litigio ante el Tribunal de Justicia Administrativa',
        'Capacitación continua en disposiciones fiscales vigentes'
      ],
      en: [
        'Comprehensive analysis of tax acts, contracts and controversies',
        'Representation before the Tax Administration Service',
        'Litigation before the Administrative Justice Court',
        'Continuous training in current tax provisions'
      ]
    },
    category: 'legal'
  },
  {
    id: 'derecho-civil-mercantil',
    icon: 'briefcase',
    title: {
      es: 'Derecho Civil Mercantil',
      en: 'Commercial Civil Law'
    },
    description: {
      es: 'Planeación integral de estrategias con alto índice de sentencias favorables.',
      en: 'Comprehensive strategy planning with high rate of favorable judgments.'
    },
    introduction: {
      es: 'Todos los actos jurídicos y de comercio traen aparejadas consecuencias legales que obligan a las partes al cumplimiento de los acuerdos que fueron establecidos. La planeación y antelación integral de nuestras estrategias nos ha asegurado un alto índice de sentencias favorables en tribunales y en la mesa de negociaciones.',
      en: 'All legal and commercial acts carry legal consequences that bind the parties to comply with the agreements that were established. The comprehensive planning and anticipation of our strategies has ensured us a high rate of favorable judgments in courts and at the negotiating table.'
    },
    benefits: {
      es: [
        'Alto índice de sentencias favorables en tribunales',
        'Resolución de conflictos mediante medios alternativos',
        'Más de 35 años de experiencia en litigio',
        'Búsqueda de convenios para evitar gastos innecesarios'
      ],
      en: [
        'High rate of favorable court judgments',
        'Conflict resolution through alternative means',
        'Over 35 years of litigation experience',
        'Pursuit of agreements to avoid unnecessary expenses'
      ]
    },
    category: 'legal'
  },
  {
    id: 'derecho-familiar',
    icon: 'users',
    title: {
      es: 'Derecho Familiar',
      en: 'Family Law'
    },
    description: {
      es: 'Atención integral y profesional en conflictos familiares, divorcios y sucesiones.',
      en: 'Comprehensive and professional attention to family conflicts, divorces, and successions.'
    },
    introduction: {
      es: 'Las situaciones de conflicto o controversia familiar son algo que todos quisiéramos evitar. En Bufete Jurídico Pazos Chávez sabemos que estos actos jurídicos pueden ser frustrantes y desgastantes por lo que procuramos atenderlos de manera integral y ampliamente profesional.',
      en: 'Family conflict or dispute situations are something we would all like to avoid. At Bufete Jurídico Pazos Chávez, we know that these legal acts can be frustrating and exhausting, so we try to attend to them comprehensively and broadly professionally.'
    },
    benefits: {
      es: [
        'Amplia experiencia en casos de divorcio y defensa de derechos de menores e incapaces',
        'Protección del interés superior de niñas y niños involucrados en conflictos familiares',
        'Asesoría en sucesiones para disposición testamentaria adecuada y equitativa',
        'Representación legal en controversias sucesorias velando por sus intereses'
      ],
      en: [
        'Extensive experience in divorce cases and defense of rights of minors and incapacitated persons',
        'Protection of the best interests of children involved in family conflicts',
        'Succession advice for adequate and equitable testamentary disposition',
        'Legal representation in succession disputes protecting your interests'
      ]
    },
    category: 'legal'
  },
  {
    id: 'derecho-administrativo',
    icon: 'shield-check',
    title: {
      es: 'Derecho Administrativo',
      en: 'Administrative Law'
    },
    description: {
      es: 'Análisis de legalidad y formalidad de actos emitidos por la autoridad.',
      en: 'Analysis of legality and formality of acts issued by the authority.'
    },
    introduction: {
      es: 'Nuestro sistema jurídico consiste en una amplia variedad de legislaciones y reglamentos por lo que resulta prácticamente imposible evitar que en ocasiones se emitan actos permeados de vicios que pongan en duda su validez y que no les permitan producir efectos jurídicos conforme a derecho.',
      en: 'Our legal system consists of a wide variety of laws and regulations, so it is practically impossible to avoid that sometimes acts permeated with defects are issued that call into question their validity and do not allow them to produce legal effects according to law.'
    },
    benefits: {
      es: [
        'Análisis exhaustivo de legalidad y formalidad de actos de autoridad',
        'Litigio de nulidad ante tribunales cuando los actos no son conforme a derecho',
        'Detección de afectaciones por vicios en actos administrativos',
        'Diseño de estrategias para revertir, resarcir o minimizar daños'
      ],
      en: [
        'Comprehensive analysis of legality and formality of authority acts',
        'Nullity litigation before courts when acts do not comply with law',
        'Detection of damages due to defects in administrative acts',
        'Design of strategies to reverse, compensate, or minimize damages'
      ]
    },
    category: 'legal'
  },
  {
    id: 'expropiacion-indemnizaciones',
    icon: 'scale',
    title: {
      es: 'Expropiación e indemnizaciones',
      en: 'Expropriation and Compensation'
    },
    description: {
      es: 'Asesoría para obtener las mejores condiciones de indemnización.',
      en: 'Advisory to obtain the best compensation conditions.'
    },
    introduction: {
      es: 'La Constitución establece que las expropiaciones que realice la autoridad sólo podrán llevarse a cabo por causa de utilidad pública y los afectados deberán ser indemnizados.',
      en: 'The Constitution establishes that expropriations carried out by the authority may only be carried out for reasons of public utility and those affected must be compensated.'
    },
    benefits: {
      es: [
        'Asesoría para obtener las mejores condiciones de indemnización',
        'Compensaciones realizadas a valor de mercado',
        'Defensa ante decretos de expropiación arbitrarios o infundados',
        'Estrategias con apego a las mejores prácticas y legislación vigente'
      ],
      en: [
        'Advisory to obtain the best compensation conditions',
        'Compensation carried out at market value',
        'Defense against arbitrary or unfounded expropriation decrees',
        'Strategies adhering to best practices and current legislation'
      ]
    },
    category: 'legal'
  },
  {
    id: 'patentes-marcas',
    icon: 'document-search',
    title: {
      es: 'Patentes y marcas',
      en: 'Patents and Trademarks'
    },
    description: {
      es: 'Registro de marcas y defensa de propiedad intelectual.',
      en: 'Trademark registration and intellectual property defense.'
    },
    introduction: {
      es: 'En Bufete Jurídico Pazos Chávez asesoramos a nuestros clientes para el registro de sus marcas ante el Instituto Mexicano de la Propiedad Industrial, así como el registro o controversia de obras ante el Instituto Nacional del Derecho de Autor.',
      en: 'At Bufete Jurídico Pazos Chávez, we advise our clients on registering their trademarks with the Mexican Institute of Industrial Property, as well as the registration or dispute of works with the National Institute of Copyright.'
    },
    benefits: {
      es: [
        'Abogados y gestores especializados en marcas y propiedad intelectual',
        'Asesoría en procedimientos de registro ante IMPI e INDAUTOR',
        'Análisis detallado de viabilidad antes de iniciar trámites',
        'Presentación de controversias para defender sus derechos de autor'
      ],
      en: [
        'Lawyers and managers specialized in trademarks and intellectual property',
        'Advice on registration procedures before IMPI and INDAUTOR',
        'Detailed feasibility analysis before starting procedures',
        'Filing of controversies to defend your copyright'
      ]
    },
    category: 'legal'
  },
  {
    id: 'cobranza-judicial-extrajudicial',
    icon: 'chart-bar',
    title: {
      es: 'Cobranza judicial y extrajudicial',
      en: 'Judicial and Extrajudicial Collection'
    },
    description: {
      es: 'Gestión de cobranza y recuperación de cartera vencida.',
      en: 'Collection management and past due portfolio recovery.'
    },
    introduction: {
      es: 'En Bufete Jurídico Pazos Chávez contamos con una amplia y probada experiencia en la prestación de servicios de gestión de cobranza y recuperación de cartera vencida.',
      en: 'At Bufete Jurídico Pazos Chávez, we have extensive and proven experience in providing collection management services and past due portfolio recovery.'
    },
    benefits: {
      es: [
        'Moderno centro de contacto con mecanismos vanguardistas de comunicación',
        'Recuperación efectiva mediante implementación de mejores prácticas',
        'Alto margen de posibilidades de recuperación en negociaciones',
        'Procedimientos judiciales cuando sea necesario para recuperar capital'
      ],
      en: [
        'Modern contact center with cutting-edge communication mechanisms',
        'Effective recovery through implementation of best practices',
        'High margin of recovery possibilities in negotiations',
        'Judicial procedures when necessary to recover capital'
      ]
    },
    category: 'legal'
  }
];
