export interface ContactCenterService {
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
  fullContent: {
    es: string[];
    en: string[];
  };
  category: 'contact-center';
}

export const contactCenterServices: ContactCenterService[] = [
  {
    id: 'blasters',
    icon: 'phone',
    title: {
      es: 'Blasters',
      en: 'Blasters'
    },
    description: {
      es: 'Llamadas pregrabadas para informar ofertas, recordatorios y mensajes.',
      en: 'Pre-recorded calls to inform about offers, reminders, and messages.'
    },
    fullContent: {
      es: [
        'Los Blasters o RoboCalls, son un servicio de generación de llamadas pregrabadas con la finalidad de informar de ofertas, recordatorios de pagos, mensajes políticos o fechas de vencimiento los cuales pueden personalizarse y programarse.',
        'Al ser mensajes pregrabados, no requieren de operadores para llevarse a cabo lo que los convierte en una opción muy atractiva por su bajo costo y alta efectividad. Las llamadas se programan para realizarse a las bases de datos de nuestros clientes conforme al calendario y frecuencia que se requiera.',
        'Para que una llamada pregrabada sea efectiva debe ser breve y concisa; nuestros asesores pueden ayudarlo a diseñar e implementar una estrategia promocional que incorpore llamadas pregrabadas o Blasters para automatizar la interacción con las personas que conforman su base de datos y ahorrar en costos sin poner en riesgo la efectividad de los resultados.'
      ],
      en: [
        'Blasters or RoboCalls are a pre-recorded call generation service designed to inform about offers, payment reminders, political messages, or due dates which can be customized and scheduled.',
        'Being pre-recorded messages, they do not require operators to carry them out, which makes them a very attractive option due to their low cost and high effectiveness. Calls are scheduled to be made to our clients\' databases according to the required calendar and frequency.',
        'For a pre-recorded call to be effective, it must be brief and concise; our advisors can help you design and implement a promotional strategy that incorporates pre-recorded calls or Blasters to automate interaction with the people in your database and save costs without compromising the effectiveness of results.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'sms-correos-masivos',
    icon: 'mail',
    title: {
      es: 'SMS y correos masivos',
      en: 'Mass SMS and Emails'
    },
    description: {
      es: 'Envío efectivo de mensajes de texto y correos electrónicos.',
      en: 'Effective delivery of text messages and emails.'
    },
    fullContent: {
      es: [
        'El Envío de mensajes cortos de texto y correos electrónicos permiten que nuestros clientes establezcan comunicación con su audiencia de una manera efectiva y personal.',
        'Ya sea para complementar una campaña promocional, una campaña política, recordar de una fecha de pago, enviar una contraseña o notificar de un vencimiento, los mensajes de texto son una herramienta muy efectiva para captar la atención y comunicar un mensaje.',
        'En Bufete jurídico Pazos Chávez contamos con tecnología de vanguardia que nos permite monitorear la efectividad de los mensajes enviados y ajustar la estrategia en tiempo real para alinear los resultados a la estrategia de nuestros clientes.'
      ],
      en: [
        'Sending short text messages and emails allows our clients to establish communication with their audience in an effective and personal way.',
        'Whether to complement a promotional campaign, a political campaign, remind of a payment date, send a password, or notify of an expiration, text messages are a very effective tool to capture attention and communicate a message.',
        'At Bufete Jurídico Pazos Chávez, we have cutting-edge technology that allows us to monitor the effectiveness of sent messages and adjust the strategy in real time to align results with our clients\' strategy.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'programas-lealtad',
    icon: 'heart',
    title: {
      es: 'Programas de lealtad',
      en: 'Loyalty Programs'
    },
    description: {
      es: 'Estrategias de lealtad para mejorar posicionamiento y ventas.',
      en: 'Loyalty strategies to improve positioning and sales.'
    },
    fullContent: {
      es: [
        'El diseño de un programa de lealtad permite que sus clientes se sientan reconocidos y considerados, lo que puede redituar en un mejor posicionamiento y en un incremento en las ventas de sus productos y servicios.',
        'En Bufete jurídico Pazos Chávez creamos y operamos estrategias de lealtad para propiciar esta interacción y así permitir que nuestros clientes sean recordados y apreciados por su mercado.',
        'Llamadas de felicitación, llamadas para informar de actualizaciones o lanzamientos y mensajes de texto para complementar servicios en línea son ejemplos de las acciones que llevamos a cabo en la implementación de los programas de lealtad.'
      ],
      en: [
        'Designing a loyalty program allows your customers to feel recognized and valued, which can result in better positioning and increased sales of your products and services.',
        'At Bufete Jurídico Pazos Chávez, we create and operate loyalty strategies to promote this interaction and thus allow our clients to be remembered and appreciated by their market.',
        'Congratulatory calls, calls to inform about updates or launches, and text messages to complement online services are examples of the actions we carry out in the implementation of loyalty programs.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'atencion-clientes',
    icon: 'user-group',
    title: {
      es: 'Atención a clientes',
      en: 'Customer Service'
    },
    description: {
      es: 'Atención y seguimiento profesional de casos e incidencias.',
      en: 'Professional attention and follow-up of cases and incidents.'
    },
    fullContent: {
      es: [
        'Ya sea para resolver dudas, recordar fachas de pago, levantar quejas, informar de mejoras y lanzamientos de productos, o bien para interactuar en alguna otra área, en Bufete Jurídico Pazos Chávez contamos con la experiencia necesaria y la infraestructura tecnológica y humana, para apoyarlo en la atención y seguimiento de casos e incidencias con sus clientes.',
        'Mediante nuestro moderno modelo de atención integral combinamos la tecnología más moderna con lo mejor de nuestro capital humano para ofrecer experiencias sobresalientes a sus clientes y una atención de primer nivel basada en una interacción respetuosa, puntual, profesional y apegada a los principios y lineamientos que la ley establece y que nuestros clientes requieren.',
        'Gracias a nuestra infraestructura tecnológica podemos monitorear y reportar en tiempo real los alcances y resultados de nuestras interacciones con las bases de datos de nuestros clientes y ofrecer estrategias de mejora y cumplimiento de objetivos.'
      ],
      en: [
        'Whether to resolve doubts, remind payment dates, raise complaints, inform about improvements and product launches, or to interact in any other area, at Bufete Jurídico Pazos Chávez we have the necessary experience and technological and human infrastructure to support you in the attention and follow-up of cases and incidents with your clients.',
        'Through our modern comprehensive service model, we combine the most modern technology with the best of our human capital to offer outstanding experiences to your clients and first-class attention based on respectful, punctual, professional interaction that adheres to the principles and guidelines that the law establishes and that our clients require.',
        'Thanks to our technological infrastructure, we can monitor and report in real time the scope and results of our interactions with our clients\' databases and offer improvement strategies and goal achievement.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'soporte-tecnico',
    icon: 'cog',
    title: {
      es: 'Soporte técnico',
      en: 'Technical Support'
    },
    description: {
      es: 'Atención personalizada y seguimiento de incidencias técnicas.',
      en: 'Personalized attention and follow-up of technical incidents.'
    },
    fullContent: {
      es: [
        'Mediante un avanzado modelo de servicio aplicamos nuestra amplia experiencia en atención personalizada a usuarios para brindar soporte técnico y asesoría a sus usuarios en tiempo real y apegados a las mejores prácticas.',
        'En Bufete Jurídico Pazos Chávez contamos con la infraestructura tecnológica necesaria para brindar respuestas adecuadas y atención personalizada a sus usuarios de manera que el soporte y la atención de incidencias no distraiga recursos ni tiempo de su operación comercial.',
        'Adicional a lo anterior, contamos con un innovador servicio de generación de tickets que permite dar seguimiento al estatus de los reportes o solicitudes que se reciban desde que se ingresan al sistema hasta que se le da una solución.'
      ],
      en: [
        'Through an advanced service model, we apply our extensive experience in personalized user attention to provide technical support and advice to your users in real time and adhering to best practices.',
        'At Bufete Jurídico Pazos Chávez, we have the necessary technological infrastructure to provide appropriate responses and personalized attention to your users so that support and incident attention does not distract resources or time from your commercial operation.',
        'In addition to the above, we have an innovative ticket generation service that allows tracking the status of reports or requests received from when they enter the system until a solution is provided.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'depuracion-base-datos',
    icon: 'database',
    title: {
      es: 'Depuración de base de datos',
      en: 'Database Cleansing'
    },
    description: {
      es: 'Mantenimiento y actualización de bases de datos.',
      en: 'Database maintenance and updating.'
    },
    fullContent: {
      es: [
        'Ya sea mediante llamadas, mensajes o derivado del control de calidad constante que realizamos de las actividades que llevamos a cabo para la prestación de nuestros servicios, en Bufete Jurídico Pazos Chávez nos encargamos de mantener actualizadas y operativas las bases de datos de nuestros clientes.',
        'Para ello realizamos un escrito control de calidad de la información que se nos proporciona, y mediante la aplicación de filtros y la modificación constante de registros, garantizamos que las bases de datos de nuestros clientes estén permanentemente al día y con información veraz y sin errores.',
        'Al mantener las bases de datos actualizadas, procuramos que las campañas que se realicen a nombre de nuestros clientes sean efectivas, que lleguen a la audiencia esperada y que permitan en el alcance de los objetivos planteados.'
      ],
      en: [
        'Whether through calls, messages, or derived from the constant quality control that we carry out of the activities we perform to provide our services, at Bufete Jurídico Pazos Chávez we are responsible for keeping our clients\' databases updated and operational.',
        'For this, we carry out a written quality control of the information provided to us, and through the application of filters and constant modification of records, we guarantee that our clients\' databases are permanently up to date with truthful and error-free information.',
        'By keeping databases updated, we ensure that campaigns carried out on behalf of our clients are effective, reach the expected audience, and allow the achievement of the stated objectives.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'renta-estaciones-infraestructura',
    icon: 'building',
    title: {
      es: 'Renta de estaciones e infraestructura',
      en: 'Workstation and Infrastructure Rental'
    },
    description: {
      es: 'Infraestructura de primer nivel para campañas temporales o permanentes.',
      en: 'First-class infrastructure for temporary or permanent campaigns.'
    },
    fullContent: {
      es: [
        'En el centro de contacto de Bufete Jurídico pasos Chávez contamos con infraestructura de primer nivel la cual ponemos a disposición de nuestros clientes para realizar campañas temporales o bien ejercicios permanentes permitiendo que la inversión que realicen sea en capital de trabajo y no en infraestructura.',
        'Mediante un avanzado modelo de servicio permitimos que nuestros clientes renten estaciones de trabajo de última generación equipadas con el software y periféricos requeridos para llevar a cabo campañas y programas de atención sin sacrificar calidad y sin invertir tiempo en la instalación y configuración de las mismas.',
        'En caso de ser requerido por nuestros clientes podemos incluso brindar el servicio de operación de las estaciones de trabajo, y de la supervisión y el control de calidad de los servicios que se realicen.'
      ],
      en: [
        'At the Bufete Jurídico Pazos Chávez contact center, we have first-class infrastructure which we make available to our clients to carry out temporary campaigns or permanent exercises, allowing their investment to be in working capital and not in infrastructure.',
        'Through an advanced service model, we allow our clients to rent state-of-the-art workstations equipped with the required software and peripherals to carry out campaigns and service programs without sacrificing quality and without investing time in their installation and configuration.',
        'If required by our clients, we can even provide workstation operation service, and supervision and quality control of the services performed.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'ivrs',
    icon: 'microphone',
    title: {
      es: 'IVRS (Sistema interactivo de respuestas de voz)',
      en: 'IVRS (Interactive Voice Response System)'
    },
    description: {
      es: 'Menús telefónicos automatizados con comandos de voz.',
      en: 'Automated phone menus with voice commands.'
    },
    fullContent: {
      es: [
        'El servicio interactivo de respuesta de voz permite que las personas interactúen con menús telefónicos automatizadas mediante simples comandos de voz.',
        'Por sus características, esta tecnología es ideal para manejar un alto volumen de llamadas y para enrutar a los usuarios a la opción correcta de los menús telefónicos correspondientes, ahorrando tiempo y costos de implementación y permitiendo la reducción de errores de ejecución en las interacciones.',
        'En Bufete Jurídico Pazos Chávez procuramos estar a la vanguardia en cuanto este tipo de tecnologías para permitir que la inversión que realizan nuestros clientes reditúe al incorporar mecanismos de automatización e inteligencia artificial en sus interacciones cotidianas.'
      ],
      en: [
        'The interactive voice response service allows people to interact with automated phone menus through simple voice commands.',
        'Due to its characteristics, this technology is ideal for handling high call volumes and for routing users to the correct option in the corresponding phone menus, saving implementation time and costs and allowing the reduction of execution errors in interactions.',
        'At Bufete Jurídico Pazos Chávez, we strive to be at the forefront of this type of technology to allow our clients\' investment to pay off by incorporating automation mechanisms and artificial intelligence in their daily interactions.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'realizacion-encuestas',
    icon: 'clipboard-list',
    title: {
      es: 'Realización de encuestas',
      en: 'Survey Execution'
    },
    description: {
      es: 'Encuestas para conocer opinión, preferencias e intenciones.',
      en: 'Surveys to learn opinions, preferences, and intentions.'
    },
    fullContent: {
      es: [
        'Ya sea de forma personal o automática, y mediante llamadas o mensajes, en Bufete Jurídico Pazos Chávez apoyamos a nuestros clientes en la realización de encuestas que permiten conocer la opinión, preferencias e intenciones de sus clientes o público meta en diversos aspectos como preferencias políticas, niveles de satisfacción, posicionamiento de marcas, y evaluación de la recordación y efectividad de campañas de comunicación y publicidad.',
        'Junto con nuestros clientes, nuestros asesores realizan el diseño y la implementación de diferentes encuestas para conocer de manera detallada o general la opinión, expectativas y niveles de satisfacción con el objetivo de mejorar servicios, implementar mejoras y enfocar esfuerzos en la comunicación corporativa.',
        'Este tipo de estrategias permiten la interacción con las personas de manera no intrusiva y permiten que las personas expresen su opinión con respecto a diversos temas de forma anónima y siempre con apego a las normas y leyes relacionadas con el uso y manejo de los datos personales de terceros.'
      ],
      en: [
        'Whether personally or automatically, and through calls or messages, at Bufete Jurídico Pazos Chávez we support our clients in conducting surveys that allow knowing the opinion, preferences, and intentions of their clients or target audience in various aspects such as political preferences, satisfaction levels, brand positioning, and evaluation of recall and effectiveness of communication and advertising campaigns.',
        'Together with our clients, our advisors design and implement different surveys to learn in detail or in general the opinion, expectations, and satisfaction levels with the objective of improving services, implementing improvements, and focusing efforts on corporate communication.',
        'This type of strategy allows interaction with people in a non-intrusive way and allows people to express their opinion on various topics anonymously and always in compliance with the rules and laws related to the use and handling of third-party personal data.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'personal-domiciliario',
    icon: 'home',
    title: {
      es: 'Personal domiciliario',
      en: 'In-house Personnel'
    },
    description: {
      es: 'Operación de centro de contacto in-house en sus instalaciones.',
      en: 'In-house contact center operation at your facilities.'
    },
    fullContent: {
      es: [
        'Bufete Jurídico Pazos Chávez pone a disposición de sus clientes el servicio de operación de centro de contacto in-house. Este servicio consiste en implantar de manera permanente o temporal a nuestro talento en las instalaciones de nuestros clientes.',
        'Esto permite que nuestros clientes tengan la tranquilidad de que su información permanece en sus premisas y de que la atención telefónica que se lleva a cabo es de la mejor calidad y apegada a las mejores prácticas del mercado.',
        'El personal que empleamos para este tipo de servicios se encuentra capacitado para llevar a cabo la atención requerida y adherirse a los protocolos y estándares que nuestros clientes requieren.'
      ],
      en: [
        'Bufete Jurídico Pazos Chávez makes available to its clients the in-house contact center operation service. This service consists of permanently or temporarily deploying our talent at our clients\' facilities.',
        'This allows our clients to have peace of mind that their information remains on their premises and that the telephone service provided is of the best quality and adheres to the best market practices.',
        'The personnel we employ for this type of service are trained to provide the required attention and adhere to the protocols and standards that our clients require.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'servicios-sector-medico',
    icon: 'beaker',
    title: {
      es: 'Servicios para el sector médico y laboratorios',
      en: 'Services for Medical Sector and Laboratories'
    },
    description: {
      es: 'Apoyo y seguimiento a pacientes y laboratorios en estudios y procedimientos.',
      en: 'Support and follow-up for patients and laboratories in studies and procedures.'
    },
    fullContent: {
      es: [
        'Bufete Jurídico Pazos Chávez Cuenta con diversos servicios enfocados a la atención del sector médico. Estos servicios permiten brindar apoyo y seguimiento a pacientes y laboratorios en estudios y procedimientos relacionados con el cuidado de la salud.',
        'Realizamos la operación de campañas para informar mediante correos, llamadas telefónicas, o el envío de mensajes acerca de: lanzamiento de nuevos medicamentos y tratamientos, realización de procedimientos, estudios, congresos, distribución de resultados y para propiciar la adhesión a protocolos.',
        'Asimismo, reclutamos pacientes para la realización de estudios clínicos relacionados con el lanzamiento de nuevos medicamentos, aplicamos estudios del tipo "doble ciego" mediante la implementación de sistemas de respuesta de voz interactiva (IVRS), y enviamos recordatorios de tomas de medicamentos y aplicación de procedimientos mediante mensajes de texto y correo electrónico.'
      ],
      en: [
        'Bufete Jurídico Pazos Chávez has various services focused on serving the medical sector. These services allow providing support and follow-up to patients and laboratories in studies and procedures related to health care.',
        'We operate campaigns to inform through emails, phone calls, or sending messages about: launch of new medications and treatments, performance of procedures, studies, congresses, distribution of results, and to promote adherence to protocols.',
        'Likewise, we recruit patients for clinical studies related to the launch of new medications, we apply "double-blind" studies through the implementation of interactive voice response systems (IVRS), and we send reminders of medication intake and application of procedures through text messages and email.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'business-continuity-drp',
    icon: 'shield',
    title: {
      es: 'Business Continuity Plan y DRP',
      en: 'Business Continuity Plan and DRP'
    },
    description: {
      es: 'Estrategias para garantizar la continuidad operacional.',
      en: 'Strategies to guarantee operational continuity.'
    },
    fullContent: {
      es: [
        'Diseñamos e implementamos diferentes estrategias para garantizar la continuidad en la operación y funcionamiento de los negocios de nuestros clientes.',
        'En cualquier momento puede sobrevenir una catástrofe y es nuestra obligación estar preparados para ello. En Bufete Jurídico Pazos Chávez contamos con una serie de protocolos que nos permiten ayudar a nuestros clientes a responder y a operar incluso cuando sus instalaciones o su infraestructura se ha visto comprometida.',
        'Estrategias de respaldo constante de información, implementación de redundancias, planes de operación remota y la instalación de protocolos de emergencia son algunos de los servicios que conforman esta gama de servicios.'
      ],
      en: [
        'We design and implement different strategies to guarantee the continuity in the operation and functioning of our clients\' businesses.',
        'At any time a disaster can occur and it is our obligation to be prepared for it. At Bufete Jurídico Pazos Chávez, we have a series of protocols that allow us to help our clients respond and operate even when their facilities or infrastructure have been compromised.',
        'Constant information backup strategies, implementation of redundancies, remote operation plans, and installation of emergency protocols are some of the services that make up this range of services.'
      ]
    },
    category: 'contact-center'
  },
  {
    id: 'fulfillment',
    icon: 'truck',
    title: {
      es: 'Fulfillment',
      en: 'Fulfillment'
    },
    description: {
      es: 'Garantía de entrega a tiempo y en las mejores condiciones.',
      en: 'Guarantee of on-time delivery in the best conditions.'
    },
    fullContent: {
      es: [
        'Apoyamos a nuestros clientes mediante la implementación de un conjunto de políticas procedimientos y servicios de contacto, para garantizar la entrega a tiempo y en las mejores condiciones de sus productos, promociones y servicios.',
        'Realizamos el envío y confirmación de recepción de correspondencia directa, correspondencia electrónica y mensajes de voz y texto conforme la campaña o el proyecto lo requiera. Garantizamos una atención de primer nivel a tiempo y cuidando la interacción con el cliente para propiciar una experiencia agradable que permita que se genere lealtad y compromiso con las marcas.',
        'Cuidamos en todo momento la adhesión a los protocolos más exigentes relacionados con la atención telefónica y el cuidado de la información personal de las personas con las que interactuamos. ofrecemos reportes en tiempo real de los alcances de las campañas y operaciones que realizamos.'
      ],
      en: [
        'We support our clients through the implementation of a set of policies, procedures, and contact services to guarantee the on-time delivery and in the best conditions of their products, promotions, and services.',
        'We carry out the sending and confirmation of receipt of direct mail, electronic mail, and voice and text messages as required by the campaign or project. We guarantee first-class attention on time and taking care of the interaction with the client to promote a pleasant experience that allows loyalty and commitment to brands to be generated.',
        'We always take care of adherence to the most demanding protocols related to telephone service and the care of personal information of the people with whom we interact. We offer real-time reports on the scope of the campaigns and operations we carry out.'
      ]
    },
    category: 'contact-center'
  }
];
