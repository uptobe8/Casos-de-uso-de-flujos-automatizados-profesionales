export interface Flow {
  id: string
  name: string
  title: string
  category: "conceptos" | "marketplace" | "acceso" | "practica"
  description: string
  template: {
    objetivo: string
    entradas: string[]
    salidas: string[]
  }
  example: {
    nombre: string
    descripcion: string
    instrucciones: string
  }
  solicitudes: string[]
  limitaciones: string[]
}

export const flows: Flow[] = [
  {
    id: "1",
    name: "¿Qué son los GPTs?",
    title: "Conceptos Básicos de GPTs Personalizados",
    category: "conceptos",
    description:
      "Los GPTs son versiones personalizadas de ChatGPT que cualquier usuario puede crear y adaptar para tareas o temas específicos. Son asistentes especializados que combinan instrucciones personalizadas, conocimiento adicional y capacidades específicas.",
    template: {
      objetivo:
        "Comprender los elementos fundamentales que conforman un GPT personalizado y cómo se diferencia de ChatGPT estándar.",
      entradas: [
        "Instrucciones personalizadas (cómo debe comportarse)",
        "Conocimiento adicional (documentos y archivos)",
        "Capacidades específicas (búsqueda web, generación de imágenes, análisis de datos)",
      ],
      salidas: [
        "Comprensión de la estructura de un GPT",
        "Conocimiento de capacidades disponibles",
        "Ventaja: no necesitas saber programar",
      ],
    },
    example: {
      nombre: "Anatomía de un GPT",
      descripcion: "Piensa en ellos como asistentes especializados a tu medida.",
      instrucciones:
        "Un GPT combina tres elementos: comportamiento (instrucciones), conocimiento (archivos) y herramientas (capacidades nativas). Esto democratiza la IA permitiendo que expertos en cualquier campo creen herramientas útiles sin programar.",
    },
    solicitudes: [
      "¿Qué diferencia hay entre ChatGPT y un GPT personalizado?",
      "¿Necesito saber programar para crear un GPT?",
      "¿Qué tipo de conocimiento puedo agregar a un GPT?",
    ],
    limitaciones: [
      "Los GPTs heredan las limitaciones del modelo base (conocimiento hasta fecha de corte, alucinaciones, etc.)",
      "La calidad depende de las instrucciones y el conocimiento que proporciones",
    ],
  },
  {
    id: "2",
    name: "GPT Store",
    title: "El Marketplace de Asistentes IA",
    category: "marketplace",
    description:
      "Lanzada el 10 de enero de 2024, la GPT Store es como la App Store de Apple pero para asistentes de inteligencia artificial. Ya cuenta con más de 3 millones de GPTs creados por usuarios organizados por categorías.",
    template: {
      objetivo:
        "Descubrir, explorar y utilizar GPTs existentes creados por la comunidad global para resolver necesidades específicas.",
      entradas: ["Búsqueda por categorías", "GPTs destacados semanalmente", "Filtros y recomendaciones"],
      salidas: [
        "Acceso a millones de GPTs especializados",
        "Inspiración para crear tus propios GPTs",
        "Soluciones listas para usar",
      ],
    },
    example: {
      nombre: "GPTs Destacados",
      descripcion: "Ejemplos populares de la GPT Store.",
      instrucciones:
        "AllTrails (recomendaciones de senderismo), Consensus (búsqueda académica en 200M artículos), Code Tutor de Khan Academy, Canva (diseño), Scholar AI, Video AI by invideo con Sora 2.",
    },
    solicitudes: [
      "¿Cómo encuentro GPTs para mi área de trabajo?",
      "¿Qué GPTs son los más populares actualmente?",
      "¿Puedo usar GPTs de la Store gratuitamente?",
    ],
    limitaciones: [
      "La calidad varía según el creador del GPT",
      "Algunos GPTs pueden requerir integraciones o permisos adicionales",
      "Los usuarios gratuitos tienen limitaciones de uso",
    ],
  },
  {
    id: "3",
    name: "Requisitos de Acceso",
    title: "¿Quién Puede Usar y Crear GPTs?",
    category: "acceso",
    description:
      "Los usuarios gratuitos pueden usar GPTs existentes pero no crearlos. Los usuarios de pago (Plus, Pro, Team, Enterprise) tienen acceso completo para crear, publicar y usar GPTs sin limitaciones.",
    template: {
      objetivo: "Entender los diferentes niveles de acceso y funcionalidades según el tipo de cuenta.",
      entradas: ["Tipo de suscripción", "Necesidades de creación vs uso", "Límites de mensajes"],
      salidas: [
        "Claridad sobre qué puedes hacer con tu cuenta",
        "Decisión informada sobre upgrade",
        "Conocimiento de limitaciones",
      ],
    },
    example: {
      nombre: "Niveles de Acceso",
      descripcion: "Comparación entre usuarios gratuitos y de pago.",
      instrucciones:
        "GRATUITOS: ✅ Usar GPTs existentes | ❌ Crear GPTs | ❌ Publicar | ⚠️ Límites de uso. PAGO (Plus/Pro): ✅ Crear ilimitados | ✅ Publicar en Store | ✅ Acceso completo | ✅ Sin límites.",
    },
    solicitudes: [
      "¿Puedo crear GPTs con cuenta gratuita?",
      "¿Cuánto cuesta ChatGPT Plus?",
      "¿Qué diferencia hay entre Plus y Pro?",
    ],
    limitaciones: [
      "Requiere suscripción de pago para crear GPTs propios",
      "Los precios pueden variar según región y tipo de cuenta",
    ],
  },
  {
    id: "4",
    name: "Configuración Básica",
    title: "Elementos de un GPT Personalizado",
    category: "practica",
    description:
      "Para crear un GPT necesitas definir: Nombre, Descripción, Instrucciones (el más importante), Prompt starters, Knowledge/Archivos opcionales, y habilitar herramientas nativas según convenga (Data Analysis, File uploads, Search, Image generation).",
    template: {
      objetivo:
        "Configurar correctamente todos los elementos de un GPT para que funcione según tus necesidades específicas.",
      entradas: [
        "Nombre claro y descriptivo",
        "Descripción del propósito",
        "Instrucciones detalladas de comportamiento",
        "Ejemplos de preguntas iniciales",
        "Archivos de conocimiento (opcional)",
        "Capacidades a habilitar",
      ],
      salidas: ["GPT funcional y especializado", "Comportamiento consistente", "Resultados predecibles y útiles"],
    },
    example: {
      nombre: "Plantilla de Configuración",
      descripcion: "Estructura básica para crear tu primer GPT.",
      instrucciones:
        "1. Nombre: Describe qué hace | 2. Descripción: Para quién es útil | 3. Instrucciones: Comportamiento detallado, tono, formato de respuestas | 4. Starters: 4 preguntas ejemplo | 5. Knowledge: PDFs/docs relevantes | 6. Tools: Activa solo las necesarias.",
    },
    solicitudes: [
      "¿Qué debo poner en las instrucciones?",
      "¿Cuántos archivos puedo subir como Knowledge?",
      "¿Qué herramientas debo activar para análisis de datos?",
    ],
    limitaciones: [
      "Las instrucciones tienen límite de caracteres (suele ser generoso pero existe)",
      "Los archivos de Knowledge tienen límite de tamaño y número",
      "No todas las capacidades son compatibles entre sí",
    ],
  },
  {
    id: "5",
    name: "Instrucciones Efectivas",
    title: "Cómo Escribir Buenas Instrucciones",
    category: "practica",
    description:
      "Las instrucciones son el corazón de tu GPT. Deben ser claras, específicas y cubrir: rol del asistente, tono y estilo, formato de respuestas, qué hacer y qué NO hacer, manejo de casos especiales.",
    template: {
      objetivo: "Redactar instrucciones que produzcan respuestas consistentes, útiles y alineadas con tu objetivo.",
      entradas: [
        "Definición clara del rol",
        "Ejemplos de respuestas ideales",
        "Restricciones y límites",
        "Casos especiales o edge cases",
      ],
      salidas: [
        "Comportamiento predecible del GPT",
        "Respuestas de calidad consistente",
        "Manejo adecuado de situaciones inesperadas",
      ],
    },
    example: {
      nombre: "Estructura de Instrucciones",
      descripcion: "Plantilla para instrucciones efectivas.",
      instrucciones:
        'Eres [ROL]. Tu objetivo es [PROPÓSITO]. TONO: [formal/casual/técnico]. FORMATO: [lista/párrafo/tabla]. SIEMPRE: [comportamientos deseados]. NUNCA: [comportamientos prohibidos]. Si el usuario pregunta X, responde Y. Si no tienes información, di "No tengo esa información" en lugar de inventar.',
    },
    solicitudes: [
      "Dame un ejemplo de instrucciones para un GPT de marketing",
      "¿Cómo evito que mi GPT invente información?",
      "¿Qué tan detalladas deben ser las instrucciones?",
    ],
    limitaciones: [
      "Instrucciones muy largas pueden ser ignoradas parcialmente",
      "El modelo puede interpretar instrucciones ambiguas de forma inesperada",
      "Requiere iteración y pruebas para afinar",
    ],
  },
  {
    id: "6",
    name: "Knowledge Base",
    title: "Agregar Conocimiento Específico",
    category: "practica",
    description:
      "Puedes subir archivos (PDFs, documentos, datos) que el GPT usará como base de conocimiento. Esto es ideal para documentación interna, manuales, políticas, datos de productos, o cualquier información específica de tu dominio.",
    template: {
      objetivo: "Proporcionar al GPT acceso a información específica que no está en su entrenamiento base.",
      entradas: [
        "PDFs, Word, Excel, CSV",
        "Documentación técnica",
        "Políticas y procedimientos",
        "Datos históricos o catálogos",
      ],
      salidas: [
        "Respuestas basadas en tu información real",
        "Referencias a documentos específicos",
        "Análisis de tus datos propios",
      ],
    },
    example: {
      nombre: "Casos de Uso de Knowledge",
      descripcion: "Ejemplos de archivos útiles para subir.",
      instrucciones:
        "Manual de empleados → GPT responde políticas de RR.HH. | Catálogo de productos → GPT asiste en ventas | Documentación técnica → GPT ayuda en soporte | Datos históricos → GPT genera análisis y reportes.",
    },
    solicitudes: [
      "¿Qué formato de archivo funciona mejor?",
      "¿Cuántos archivos puedo subir?",
      "¿El GPT siempre usa los archivos que subo?",
    ],
    limitaciones: [
      "La recuperación de información puede ser imprecisa (vector search)",
      "Archivos muy grandes o mal estructurados dificultan la búsqueda",
      "No garantiza que siempre encuentre la información correcta",
    ],
  },
  {
    id: "7",
    name: "Herramientas Nativas",
    title: "Capacidades y Tools Disponibles",
    category: "practica",
    description:
      "Puedes habilitar diferentes herramientas: Data Analysis (Python para análisis), File uploads (permitir que usuarios suban archivos), Search (búsqueda web), Image generation (crear imágenes con DALL-E).",
    template: {
      objetivo: "Seleccionar y configurar las capacidades que tu GPT necesita para su función específica.",
      entradas: ["Tipo de tarea a realizar", "Necesidad de datos externos", "Requisitos de generación"],
      salidas: [
        "GPT con capacidades adecuadas",
        "Mejor experiencia de usuario",
        "Funcionalidad completa según caso de uso",
      ],
    },
    example: {
      nombre: "Cuándo Usar Cada Tool",
      descripcion: "Guía para elegir herramientas correctas.",
      instrucciones:
        "Data Analysis: para análisis de datos, cálculos, procesamiento de archivos | File uploads: cuando usuarios necesitan subir documentos | Search: para información actualizada o verificación de hechos | Image generation: para crear visuales, logos, ilustraciones.",
    },
    solicitudes: [
      "¿Qué herramienta necesito para análisis de Excel?",
      "¿Puedo combinar varias herramientas?",
      "¿Search consume créditos adicionales?",
    ],
    limitaciones: [
      "Data Analysis tiene límites de tiempo de ejecución y memoria",
      "Search puede no siempre encontrar información relevante",
      "Image generation tiene límites de calidad y coherencia",
    ],
  },
  {
    id: "8",
    name: "Testing y Refinamiento",
    title: "Probar y Mejorar tu GPT",
    category: "practica",
    description:
      "Después de crear tu GPT, es crucial probarlo extensivamente. Haz preguntas variadas, casos límite, situaciones inesperadas. Refina las instrucciones basándote en las respuestas que obtienes.",
    template: {
      objetivo: "Iterar sobre la configuración hasta lograr un GPT que funcione de manera óptima y consistente.",
      entradas: ["Casos de prueba diversos", "Feedback de usuarios reales", "Registro de respuestas incorrectas"],
      salidas: ["GPT refinado y confiable", "Documentación de limitaciones conocidas", "Instrucciones optimizadas"],
    },
    example: {
      nombre: "Proceso de Testing",
      descripcion: "Metodología para probar y mejorar tu GPT.",
      instrucciones:
        "1. Prueba casos normales → 2. Prueba casos límite → 3. Identifica fallos → 4. Ajusta instrucciones → 5. Repite. Pide a otros que lo prueben. Documenta qué funciona y qué no.",
    },
    solicitudes: [
      "¿Cómo sé si mi GPT está listo para publicar?",
      "¿Qué casos debo probar obligatoriamente?",
      "¿Con qué frecuencia debo actualizar mi GPT?",
    ],
    limitaciones: [
      "El testing exhaustivo toma tiempo y múltiples iteraciones",
      "Algunos problemas solo aparecen en uso real por terceros",
      "Las actualizaciones del modelo base pueden afectar el comportamiento",
    ],
  },
  {
    id: "9",
    name: "Publicar en la Store",
    title: "Compartir tu GPT con el Mundo",
    category: "marketplace",
    description:
      "Una vez satisfecho con tu GPT, puedes publicarlo en la GPT Store para que otros lo descubran y usen. Necesitas configurar visibilidad, categoría, y cumplir con las políticas de OpenAI.",
    template: {
      objetivo: "Hacer que tu GPT esté disponible públicamente y sea descubrible por usuarios interesados.",
      entradas: [
        "GPT completamente funcional y probado",
        "Descripción clara y atractiva",
        "Categoría apropiada",
        "Cumplimiento de políticas",
      ],
      salidas: ["GPT visible en la Store", "Potencial de uso por miles de usuarios", "Feedback de la comunidad"],
    },
    example: {
      nombre: "Checklist de Publicación",
      descripcion: "Pasos para publicar tu GPT exitosamente.",
      instrucciones:
        "1. Verifica que funciona correctamente | 2. Escribe descripción clara y útil | 3. Elige categoría correcta | 4. Revisa que cumple políticas | 5. Configura visibilidad pública | 6. Publica | 7. Monitorea feedback.",
    },
    solicitudes: [
      "¿Qué requisitos debe cumplir mi GPT para publicarlo?",
      "¿Puedo monetizar mi GPT en la Store?",
      "¿Cómo hago que mi GPT sea popular?",
    ],
    limitaciones: [
      "OpenAI revisa GPTs publicados y puede rechazar o remover los que violen políticas",
      "La visibilidad depende de calidad, utilidad y adopción",
      "Actualmente no hay monetización directa (puede cambiar)",
    ],
  },
  {
    id: "10",
    name: "GPT Builder Asistente",
    title: "Encontrar un GPT Especialista en Crear GPTs",
    category: "practica",
    description:
      "En la GPT Store puedes encontrar GPTs especializados en ayudarte a crear otros GPTs. Busca términos como 'GPT builder', 'custom GPT creator', 'prompt engineer', que te guiarán en el proceso de construcción.",
    template: {
      objetivo: "Usar un GPT existente como asistente para diseñar y configurar tu propio GPT de manera más efectiva.",
      entradas: ["Descripción de tu caso de uso", "Objetivo del GPT que quieres crear", "Audiencia target"],
      salidas: [
        "Configuración completa lista para copiar",
        "Instrucciones optimizadas",
        "Sugerencias de herramientas y conocimiento",
      ],
    },
    example: {
      nombre: "Búsquedas Efectivas",
      descripcion: "Términos para encontrar GPT builders en la Store.",
      instrucciones:
        'Busca: "GPT builder", "create a custom GPT", "prompt engineer for GPTs", "instruction writer", "system prompt generator". Describe tu caso de uso y el GPT builder te ayudará a estructurar todo.',
    },
    solicitudes: [
      "¿Hay GPTs que me ayuden a crear otros GPTs?",
      "¿Qué GPT builder recomiendas?",
      "¿Puedo pedirle que genere las instrucciones completas?",
    ],
    limitaciones: [
      "La calidad varía según el GPT builder que elijas",
      "Siempre debes revisar y adaptar las sugerencias a tu caso",
      "No reemplaza tu expertise en el tema que quieres cubrir",
    ],
  },
]

export const categories = [
  { value: "all", label: "Todos" },
  { value: "conceptos", label: "Conceptos" },
  { value: "marketplace", label: "Marketplace" },
  { value: "acceso", label: "Acceso" },
  { value: "practica", label: "Práctica" },
]
