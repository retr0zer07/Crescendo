// ============================================
// LOAD SHARED HEADER AND FOOTER COMPONENTS
// ============================================

const DEFAULT_SITE_LANGUAGE = 'en';
const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
const I18N_STRINGS = {
    en: {
        metaTitle: 'Crescendo Digital Marketing - Marketing Agency in Miami | SEO, Digital Advertising, Web Design',
        metaDescription: 'Digital marketing agency in Miami specializing in local SEO, Google Ads, Meta Ads, web design and AI chat. Turn clicks into customers. +50 businesses trust us.',
        navHome: 'Home',
        navServices: 'Services',
        navLocalSeo: 'Local SEO',
        navAds: 'Google Ads & Meta Ads',
        navWebDesign: 'Web Design',
        navAiChat: 'AI Chat 24/7',
        navSocial: 'Social Media',
        navReputation: 'Online Reputation',
        navSuccessStories: 'Success Stories',
        navTestimonials: 'Testimonials',
        navBlog: 'Blog',
        navAboutUs: 'About Us',
        navContact: 'Contact',
        ariaCrescendoHome: 'Crescendo home',
        ariaOpenNavMenu: 'Open navigation menu',
        ariaLanguageSelector: 'Language selector',
        ariaSwitchSpanish: 'Switch to Spanish',
        ariaSwitchEnglish: 'Switch to English',
        accessibilityOptionsTitle: 'Accessibility Options',
        ariaAccessibilityOptions: 'Accessibility options',
        ariaCloseAccessibilityPanel: 'Close accessibility panel',
        accessibilityIncreaseText: 'Increase Text',
        accessibilityDecreaseText: 'Decrease Text',
        accessibilityHighContrast: 'High Contrast',
        accessibilityGrayscale: 'Grayscale',
        accessibilityNegativeContrast: 'Negative Contrast',
        accessibilityUnderlineLinks: 'Underline Links',
        accessibilityReadableFont: 'Readable Font',
        accessibilityResetAll: 'Reset All',
        footerServices: 'Services',
        footerCompany: 'Company',
        footerLegal: 'Legal',
        footerContact: 'Contact',
        footerAboutUs: 'About Us',
        footerSuccessStories: 'Success Stories',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms and Conditions',
        footerSitemap: 'Sitemap',
        footerLocation: 'Miami, Florida',
        footerRights: 'All rights reserved.',
        mapTitle: 'Crescendo Digital Marketing location map in Miami',
        socialGoogle: 'Google',
        socialInstagram: 'Instagram',
        socialFacebook: 'Facebook',
        socialWhatsapp: 'WhatsApp',
        testimonialsHeroTitle: 'Hear From Our Clients — Real Video Testimonials',
        testimonialsHeroDescription: 'Watch real business owners talk about the results they achieved with Crescendo. No scripts, no stock footage — just genuine stories of growth.',
        testimonialsIntroTitle: 'Real Stories From Real Clients',
        testimonialsIntroDescription: 'Each video shows direct experiences from brands that trusted Crescendo to grow their visibility, leads, and results.',
        testimonialsSlotLabel: 'Video slot',
        testimonialsMissingVideo: 'Place the video in the folder to show it here.',
        testimonialsExpectedFile: 'Expected file',
        testimonialsCta: 'Request Free Audit',
        testimonialsCard1Title: 'Eber Martini',
        testimonialsCard1Description: 'A live testimonial that reinforces trust in the Crescendo process and overall client experience.',
        testimonialsCard2Title: 'Alejandro Morua',
        testimonialsCard2Description: 'A second active video in the gallery to strengthen credibility with another real client voice.',
        testimonialsCard3Title: 'Nicky Massage',
        testimonialsCard3Description: 'A third video that adds more social proof and confidence for future clients.',
        logoAlt: 'Crescendo Digital Marketing',
        heroTitle: "Miami's Leading Digital Marketing Agency for Real Growth",
        heroDescription: 'We build the digital engine that fills your calendar - with SEO, Ads, and Web Design built to convert.',
        heroBtnAudit: 'Get My Free Growth Audit',
        heroBtnServices: 'View Services',
        heroCompaniesTrust: 'Strategic roadmap aligned to your monthly revenue target',
        heroLeadsGenerated: 'Weekly optimization focused on lower cost per qualified lead',
        heroAverageRating: 'Fast response team that feels like your in-house marketing department',
        servicesTitle: 'Everything You Need to Win Online',
        servicesDescription: 'From SEO to paid ads to AI-powered chat - we cover every channel that drives revenue for local businesses in Miami.',
        service1Title: 'Local SEO',
        service1Description: 'Dominate search results in Miami and beyond. We will position your business in front of potential customers when they need you most.',
        service1Feature1: 'Google Business Profile optimization',
        service1Feature2: 'Strategic local keywords',
        service1Feature3: 'Complete technical SEO audit',
        service1Feature4: 'Local link building',
        service2Title: 'Google Ads & Meta Ads',
        service2Description: 'Stop burning budget on clicks that do not convert. We run data-driven campaigns that bring buyers - not just browsers - to your business.',
        service2Feature1: 'High-performance search campaigns',
        service2Feature2: 'Targeted social media advertising',
        service2Feature3: 'Landing page optimization',
        service2Feature4: 'Detailed ROI reports',
        service3Title: 'Professional Web Design',
        service3Description: 'We create modern, fast, conversion-focused websites that work as your best salesperson, 24/7.',
        service3Feature1: 'Responsive, mobile-first design',
        service3Feature2: 'Speed optimization',
        service3Feature3: 'CRM and analytics integration',
        service3Feature4: 'Built-in on-page SEO',
        service4Title: 'AI Chat 24/7',
        service4Description: 'Stop losing leads at 2am. Our AI answers questions, qualifies prospects, and books appointments - while you sleep.',
        service4Feature1: 'Advanced AI chatbot',
        service4Feature2: 'Automatic lead qualification',
        service4Feature3: 'Integrated appointment scheduling',
        service4Feature4: 'Available 24/7 in multiple languages',
        service5Title: 'Social Media Marketing',
        service5Description: 'Build a loyal community around your brand with content strategies that generate engagement and sales.',
        service5Feature1: 'Personalized content strategy',
        service5Feature2: 'Active community management',
        service5Feature3: 'Scheduled posts and analytics',
        service5Feature4: 'Influencer partnerships',
        service6Title: 'Online Reputation Management',
        service6Description: 'Drive positive reviews and manage your reputation to build trust that inspires more customers.',
        service6Feature1: 'Generate positive reviews',
        service6Feature2: 'Online mentions monitoring',
        service6Feature3: 'Negative comment response',
        service6Feature4: 'Increase your trust score',
        service1MoreInfo: 'Learn about Local SEO',
        service2MoreInfo: 'Learn about Google Ads and Meta Ads',
        service3MoreInfo: 'Learn about Professional Web Design',
        service4MoreInfo: 'Learn about AI Chat 24/7',
        service5MoreInfo: 'Learn about Social Media Marketing',
        service6MoreInfo: 'Learn about Online Reputation Management',
        whyTitle: 'Your Strategic Partner, Not Just a Vendor',
        whyDescription: 'At Crescendo, we integrate into your team. We understand your business goals and design personalized strategies that deliver real, measurable results.',
        whyPoint1Title: 'ROI Focus',
        whyPoint1Description: 'Every action is aimed at generating positive return on investment for your business.',
        whyPoint2Title: 'Total Transparency',
        whyPoint2Description: 'You will receive clear, detailed reports to know how your investment is performing.',
        whyPoint3Title: 'No Long-Term Contracts',
        whyPoint3Description: 'We trust in our work. No legal ties, you can cancel anytime.',
        whyPoint4Title: 'Certified Experts',
        whyPoint4Description: 'Team certified by Google Partner and Meta Partner with years of experience.',
        whyImageAlt: 'Crescendo Digital Marketing team working on digital marketing strategies',
        casesTitle: 'Our Clients Speak For Us',
        casesDescription: 'Real numbers. Real businesses. Real growth - across industries in South Florida.',
        case1Company: 'Miami Dental Clinic',
        case1Author: 'Maria P., Owner',
        case1StatLabel: 'Qualified Leads',
        case1Quote: 'We went from 15 to 45 qualified patient calls per month after implementing Crescendo\'s local SEO strategy. Google Business Profile optimization was key to dominating search results in Miami.',
        case1Aria: 'See more results from Miami Dental Clinic',
        case2Company: 'Downtown Law Firm',
        case2Author: 'Robert D., Managing Partner',
        case2StatLabel: 'Cost Per Lead',
        case2Quote: 'Crescendo reduced our cost per qualified lead from $85 to $28 while maintaining case quality. Their Google Ads optimization and landing page strategy transformed our acquisition costs.',
        case2Aria: 'See more results from Law Firm',
        case3Company: 'Tech E-commerce',
        case3Author: 'Carlos M., CEO',
        case3StatLabel: 'Organic Traffic',
        case3Quote: 'Crescendo\'s team increased our organic traffic by 180% in 6 months. Their content strategy and link building positioned us as industry leaders.',
        case3Aria: 'See more results from Tech E-commerce',
        caseLinkText: 'See more results',
        trustedByText: 'Trusted by over 50 businesses in South Florida',
        comparisonTitle: 'We Don\'t Sell Marketing. We Build Revenue Systems.',
        comparisonDescription: 'We are not here to sell random tactics. We commit to measurable progress, clear accountability, and decisions that protect your budget.',
        comparisonCommitmentTitle: 'What We Promise as a Brand',
        comparisonCommitmentDescription: 'When you work with Crescendo, your business goals become our operating standard. If a strategy is not moving revenue, we adjust fast and transparently.',
        comparisonPillar1: 'We prioritize profitable growth over vanity metrics.',
        comparisonPillar2: 'We report what is working, what is not, and what changes next.',
        comparisonPillar3: 'We earn retention through performance, not long contracts.',
        comparisonHeaderFeature: 'Our Commitment',
        comparisonHeaderCompetitors: 'What It Means For Your Business',
        comparisonRow1: 'No long-term lock-ins',
        comparisonRow2: 'Weekly optimization rhythm',
        comparisonRow3: 'Radical transparency',
        comparisonRow4: 'Senior-level strategic oversight',
        comparisonRow1Detail: 'You stay with us because results are clear, not because a contract traps you.',
        comparisonRow2Detail: 'Your ads, SEO, and pages improve continuously instead of being "set and forgotten."',
        comparisonRow3Detail: 'You get plain-language reporting tied to leads, calls, and revenue impact.',
        comparisonRow4Detail: 'You work with specialists who adapt strategy quickly to your market and goals.',
        processTitle: 'How It Works',
        processDescription: 'Three steps from your first call to a calendar full of new clients',
        processStep1Title: 'We Find Your Gaps (Free)',
        processStep1Description: 'We analyze your full digital presence in a 30-minute call and hand you a clear, actionable roadmap - at no cost.',
        processStep1Link: 'Schedule now',
        processStep2Title: 'We Build Your Growth Engine',
        processStep2Description: 'We design and launch your complete strategy: website, campaigns, SEO - all aligned to your specific business goals.',
        processStep3Title: 'More Calls, More Revenue',
        processStep3Description: 'Watch your calendar fill up. We continuously optimize based on real data so your results compound over time.',
        faqTitle: 'Frequently Asked Questions',
        faqDescription: 'We answer your questions',
        faqQ1: 'How long does it take to see results?',
        faqA1: 'Results vary by service. With advertising campaigns you can see results in the first week. SEO is a medium to long-term strategy, generally seeing significant progress within 3-6 months.',
        faqQ2: 'Do you have long-term contracts?',
        faqA2: 'No. We operate with a monthly service model. We believe the best way to retain clients is by delivering consistent results, not through contracts.',
        faqQ3: 'What do you need from me to get started?',
        faqA3: 'We start with an initial call to understand your goals. Then we will request access to your existing platforms (Google Analytics, Google Ads, etc.) to perform a complete audit and develop your strategic plan.',
        faqQ4: 'What is the cost of your services?',
        faqA4: 'Prices vary depending on the service and your needs. We offer packages starting at $500/month. We will send you a personalized proposal after the free audit.',
        faqQ5: 'Can I switch agencies at any time?',
        faqA5: 'Yes, absolutely. No long-term contracts means you can cancel anytime. We prefer to demonstrate our value month by month.',
        faqQ6: 'What industries or sectors do you serve?',
        faqA6: 'We work with all types of businesses: dental clinics, law firms, restaurants, auto shops, contractors, e-commerce and more. Our strategies are customized by industry.',
        ctaTitle: 'Your Competitors Are Already Online. Let\'s Make Sure They See You First.',
        ctaDescription: 'Book a free 30-minute audit and leave with a clear roadmap - no commitment, no fluff.',
        ctaPrimary: 'Schedule My Free Audit',
        ctaWhatsapp: 'WhatsApp',
        calendarTitle: 'Schedule Your Free Consultation',
        calendarDescription: 'Choose the time that best fits your availability',
        contactFormTitle: 'Request Your Free Audit',
        contactFormDescription: 'Fill out the form and we will contact you within 24 hours',
        formFullNamePlaceholder: 'Full Name *',
        formEmailPlaceholder: 'Email *',
        formPhonePlaceholder: 'Phone *',
        formObjectivesLabel: 'Main objectives',
        formObjectivesDefault: 'What are your main objectives?',
        formObjectivesSeo: 'Improve SEO',
        formObjectivesAds: 'Increase advertising',
        formObjectivesWeb: 'New website',
        formObjectivesSocial: 'Social media',
        formObjectivesGeneral: 'General strategy',
        formMessagePlaceholder: 'Tell us about your business...',
        formAttachLabel: 'Attach file (optional):',
        formSmsConsent: 'I agree to receive SMS messages from Crescendo Digital Marketing Agency regarding service updates, appointment confirmations, follow-ups, and occasional promotions. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out. Reply HELP for help.',
        formSubmit: 'Request Audit',
        formDisclaimer: 'We do not share your information. We respect your privacy.',
        contactInfoTitle: 'Contact Information',
        contactPhoneLabel: 'Phone',
        contactEmailLabel: 'Email',
        contactLocationLabel: 'Location',
        contactHoursLabel: 'Hours',
        contactHoursValue: 'Monday to Friday: 9am - 5pm EST',
        contactFacebookAria: 'Visit our Facebook page',
        contactInstagramAria: 'Visit our Instagram profile',
        contactGoogleAria: 'See our Google reviews',
        contactWhatsappAria: 'Contact us on WhatsApp'
    },
    es: {
        metaTitle: 'Crescendo Digital Marketing - Agencia de Marketing en Miami | SEO, Publicidad Digital, Diseno Web',
        metaDescription: 'Agencia de marketing digital en Miami especializada en SEO local, Google Ads, Meta Ads, diseno web y chat con IA. Convierte clics en clientes. +50 empresas confian en nosotros.',
        navHome: 'Inicio',
        navServices: 'Servicios',
        navLocalSeo: 'SEO Local',
        navAds: 'Google Ads y Meta Ads',
        navWebDesign: 'Diseno Web',
        navAiChat: 'Chat IA 24/7',
        navSocial: 'Social Media',
        navReputation: 'Reputacion Online',
        navSuccessStories: 'Casos de Exito',
        navTestimonials: 'Testimonios',
        navBlog: 'Blog',
        navAboutUs: 'Nosotros',
        navContact: 'Contacto',
        ariaCrescendoHome: 'Inicio de Crescendo',
        ariaOpenNavMenu: 'Abrir menu de navegacion',
        ariaLanguageSelector: 'Selector de idioma',
        ariaSwitchSpanish: 'Cambiar a espanol',
        ariaSwitchEnglish: 'Cambiar a ingles',
        accessibilityOptionsTitle: 'Opciones de Accesibilidad',
        ariaAccessibilityOptions: 'Opciones de accesibilidad',
        ariaCloseAccessibilityPanel: 'Cerrar panel de accesibilidad',
        accessibilityIncreaseText: 'Aumentar Texto',
        accessibilityDecreaseText: 'Reducir Texto',
        accessibilityHighContrast: 'Alto Contraste',
        accessibilityGrayscale: 'Escala de Grises',
        accessibilityNegativeContrast: 'Contraste Negativo',
        accessibilityUnderlineLinks: 'Subrayar Enlaces',
        accessibilityReadableFont: 'Fuente Legible',
        accessibilityResetAll: 'Restablecer Todo',
        footerServices: 'Servicios',
        footerCompany: 'Empresa',
        footerLegal: 'Legal',
        footerContact: 'Contacto',
        footerAboutUs: 'Nosotros',
        footerSuccessStories: 'Casos de Exito',
        footerPrivacy: 'Politica de Privacidad',
        footerTerms: 'Terminos y Condiciones',
        footerSitemap: 'Mapa del Sitio',
        footerLocation: 'Miami, Florida',
        footerRights: 'Todos los derechos reservados.',
        mapTitle: 'Mapa de ubicacion de Crescendo Digital Marketing en Miami',
        socialGoogle: 'Google',
        socialInstagram: 'Instagram',
        socialFacebook: 'Facebook',
        socialWhatsapp: 'WhatsApp',
        testimonialsHeroTitle: 'Escucha a Nuestros Clientes — Testimonios Reales en Video',
        testimonialsHeroDescription: 'Mira a duenos de negocios reales hablar sobre los resultados que lograron con Crescendo. Sin guiones, sin actores — solo historias genuinas de crecimiento.',
        testimonialsIntroTitle: 'Historias Reales de Clientes Reales',
        testimonialsIntroDescription: 'Cada video muestra experiencias directas de marcas que confiaron en Crescendo para crecer en visibilidad, leads y resultados.',
        testimonialsSlotLabel: 'Espacio de video',
        testimonialsMissingVideo: 'Coloca el video en la carpeta para mostrarlo aqui.',
        testimonialsExpectedFile: 'Archivo esperado',
        testimonialsCta: 'Solicitar Auditoria Gratis',
        testimonialsCard1Title: 'Eber Martini',
        testimonialsCard1Description: 'Un testimonio en video que refuerza la confianza en el proceso de Crescendo y en la experiencia general del cliente.',
        testimonialsCard2Title: 'Alejandro Morua',
        testimonialsCard2Description: 'Un segundo video activo en la galeria para fortalecer la credibilidad con otra voz real de cliente.',
        testimonialsCard3Title: 'Nicky Massage',
        testimonialsCard3Description: 'Un tercer video que suma mas prueba social y confianza para futuros clientes.',
        logoAlt: 'Crescendo Digital Marketing',
        heroTitle: 'La agencia de marketing digital #1 en Miami',
        heroDescription: 'Construimos el motor digital que llena tu agenda: SEO, Ads y Diseno Web pensados para convertir.',
        heroBtnAudit: 'Quiero Mi Auditoria de Crecimiento',
        heroBtnServices: 'Ver Servicios',
        heroCompaniesTrust: 'Plan estrategico alineado a tu meta mensual de ingresos',
        heroLeadsGenerated: 'Optimizacion semanal enfocada en bajar el costo por lead calificado',
        heroAverageRating: 'Equipo de respuesta agil que opera como tu departamento de marketing interno',
        servicesTitle: 'Todo Lo Que Necesitas Para Ganar Online',
        servicesDescription: 'Desde SEO hasta ads de pago y chat con IA: cubrimos todos los canales que generan ingresos para negocios locales en Miami.',
        service1Title: 'SEO Local',
        service1Description: 'Domina los resultados de busqueda en Miami y mas alla. Posicionamos tu negocio frente a clientes potenciales cuando mas te necesitan.',
        service1Feature1: 'Optimizacion de Google Business Profile',
        service1Feature2: 'Palabras clave locales estrategicas',
        service1Feature3: 'Auditoria tecnica SEO completa',
        service1Feature4: 'Link building local',
        service2Title: 'Google Ads y Meta Ads',
        service2Description: 'Deja de quemar presupuesto en clics que no convierten. Ejecutamos campanas basadas en datos que traen compradores, no solo visitas.',
        service2Feature1: 'Campanas de busqueda de alto rendimiento',
        service2Feature2: 'Publicidad segmentada en redes sociales',
        service2Feature3: 'Optimizacion de landing pages',
        service2Feature4: 'Reportes detallados de ROI',
        service3Title: 'Diseno Web Profesional',
        service3Description: 'Creamos sitios web modernos, rapidos y orientados a conversion que trabajan como tu mejor vendedor, 24/7.',
        service3Feature1: 'Diseno responsive y mobile-first',
        service3Feature2: 'Optimizacion de velocidad',
        service3Feature3: 'Integracion con CRM y analitica',
        service3Feature4: 'SEO on-page incorporado',
        service4Title: 'Chat IA 24/7',
        service4Description: 'Deja de perder leads de madrugada. Nuestra IA responde preguntas, califica prospectos y agenda citas mientras duermes.',
        service4Feature1: 'Chatbot IA avanzado',
        service4Feature2: 'Calificacion automatica de leads',
        service4Feature3: 'Agenda de citas integrada',
        service4Feature4: 'Disponible 24/7 en varios idiomas',
        service5Title: 'Marketing en Redes Sociales',
        service5Description: 'Construye una comunidad fiel alrededor de tu marca con estrategias de contenido que generan engagement y ventas.',
        service5Feature1: 'Estrategia de contenido personalizada',
        service5Feature2: 'Gestion activa de comunidad',
        service5Feature3: 'Publicaciones programadas y analitica',
        service5Feature4: 'Colaboraciones con influencers',
        service6Title: 'Gestion de Reputacion Online',
        service6Description: 'Impulsa resenas positivas y gestiona tu reputacion para construir confianza que atraiga mas clientes.',
        service6Feature1: 'Generacion de resenas positivas',
        service6Feature2: 'Monitoreo de menciones online',
        service6Feature3: 'Respuesta a comentarios negativos',
        service6Feature4: 'Aumento de tu puntaje de confianza',
        service1MoreInfo: 'Ver servicio de SEO Local',
        service2MoreInfo: 'Ver servicio de Google Ads y Meta Ads',
        service3MoreInfo: 'Ver servicio de Diseno Web Profesional',
        service4MoreInfo: 'Ver servicio de Chat IA 24/7',
        service5MoreInfo: 'Ver servicio de Marketing en Redes Sociales',
        service6MoreInfo: 'Ver servicio de Gestion de Reputacion Online',
        whyTitle: 'Tu Socio Estrategico, No Solo Un Proveedor',
        whyDescription: 'En Crescendo nos integramos a tu equipo. Entendemos tus objetivos de negocio y diseniamos estrategias personalizadas que entregan resultados reales y medibles.',
        whyPoint1Title: 'Enfoque En ROI',
        whyPoint1Description: 'Cada accion esta orientada a generar retorno positivo de inversion para tu negocio.',
        whyPoint2Title: 'Transparencia Total',
        whyPoint2Description: 'Recibiras reportes claros y detallados para saber como rinde tu inversion.',
        whyPoint3Title: 'Sin Contratos Largos',
        whyPoint3Description: 'Confiamos en nuestro trabajo. Sin ataduras legales, puedes cancelar cuando quieras.',
        whyPoint4Title: 'Expertos Certificados',
        whyPoint4Description: 'Equipo certificado por Google Partner y Meta Partner con anos de experiencia.',
        whyImageAlt: 'Equipo de Crescendo Digital Marketing trabajando en estrategias de marketing digital',
        casesTitle: 'Nuestros Clientes Hablan Por Nosotros',
        casesDescription: 'Numeros reales. Negocios reales. Crecimiento real en industrias de South Florida.',
        case1Company: 'Clinica Dental Miami',
        case1Author: 'Maria P., Propietaria',
        case1StatLabel: 'Leads Calificados',
        case1Quote: 'Pasamos de 15 a 45 llamadas de pacientes calificados al mes despues de implementar la estrategia SEO local de Crescendo. La optimizacion de Google Business Profile fue clave para dominar resultados en Miami.',
        case1Aria: 'Ver mas resultados de Clinica Dental Miami',
        case2Company: 'Firma Legal Downtown',
        case2Author: 'Robert D., Socio Director',
        case2StatLabel: 'Costo Por Lead',
        case2Quote: 'Crescendo redujo nuestro costo por lead calificado de $85 a $28 manteniendo la calidad de casos. Su optimizacion de Google Ads y estrategia de landing pages transformo nuestros costos de adquisicion.',
        case2Aria: 'Ver mas resultados de Firma Legal',
        case3Company: 'E-commerce Tech',
        case3Author: 'Carlos M., CEO',
        case3StatLabel: 'Trafico Organico',
        case3Quote: 'El equipo de Crescendo aumento nuestro trafico organico 180% en 6 meses. Su estrategia de contenido y link building nos posiciono como lideres del sector.',
        case3Aria: 'Ver mas resultados de E-commerce Tech',
        caseLinkText: 'Ver mas resultados',
        trustedByText: 'Con la confianza de mas de 50 negocios en South Florida',
        comparisonTitle: 'No vendemos marketing. Construimos sistemas de ingresos.',
        comparisonDescription: 'No estamos para vender tacticas al azar. Nos comprometemos con progreso medible, responsabilidad clara y decisiones que cuidan tu presupuesto.',
        comparisonCommitmentTitle: 'Lo Que Prometemos Como Marca',
        comparisonCommitmentDescription: 'Cuando trabajas con Crescendo, tus objetivos se convierten en nuestro estandar operativo. Si una estrategia no mueve ingresos, la corregimos rapido y con total transparencia.',
        comparisonPillar1: 'Priorizamos crecimiento rentable por encima de metricas de vanidad.',
        comparisonPillar2: 'Te mostramos que funciona, que no funciona y que cambia despues.',
        comparisonPillar3: 'Nos ganamos tu continuidad con resultados, no con contratos largos.',
        comparisonHeaderFeature: 'Nuestro Compromiso',
        comparisonHeaderCompetitors: 'Lo Que Significa Para Tu Negocio',
        comparisonRow1: 'Sin ataduras a largo plazo',
        comparisonRow2: 'Optimizacion semanal constante',
        comparisonRow3: 'Transparencia radical',
        comparisonRow4: 'Supervision estrategica senior',
        comparisonRow1Detail: 'Sigues con nosotros por resultados reales, no porque un contrato te ate.',
        comparisonRow2Detail: 'Tus Ads, SEO y paginas mejoran cada semana en lugar de quedar en piloto automatico.',
        comparisonRow3Detail: 'Recibes reportes claros conectados con leads, llamadas e impacto en ingresos.',
        comparisonRow4Detail: 'Trabajas con especialistas que ajustan la estrategia segun tu mercado y objetivos.',
        processTitle: 'Asi Funciona',
        processDescription: 'Tres pasos desde tu primera llamada hasta una agenda llena de nuevos clientes',
        processStep1Title: 'Detectamos Tus Brechas (Gratis)',
        processStep1Description: 'Analizamos toda tu presencia digital en 30 minutos y te entregamos una hoja de ruta clara y accionable, sin costo.',
        processStep1Link: 'Agenda ahora',
        processStep2Title: 'Construimos Tu Motor de Crecimiento',
        processStep2Description: 'Diseniamos y lanzamos tu estrategia completa: sitio web, campanas y SEO, todo alineado con tus objetivos de negocio.',
        processStep3Title: 'Mas Llamadas, Mas Ingresos',
        processStep3Description: 'Tu agenda empieza a llenarse. Optimizamos constantemente con datos reales para que tus resultados se multipliquen.',
        faqTitle: 'Preguntas Frecuentes',
        faqDescription: 'Respondemos tus dudas',
        faqQ1: 'Cuanto tiempo tarda en verse resultados?',
        faqA1: 'Los resultados varian por servicio. Con campanas publicitarias puedes ver resultados en la primera semana. SEO es una estrategia de mediano a largo plazo, con avances significativos entre 3 y 6 meses.',
        faqQ2: 'Tienen contratos a largo plazo?',
        faqA2: 'No. Trabajamos con un modelo mensual. Creemos que la mejor forma de retener clientes es dando resultados constantes, no con contratos.',
        faqQ3: 'Que necesitan de mi para empezar?',
        faqA3: 'Iniciamos con una llamada para entender tus objetivos. Luego solicitamos acceso a tus plataformas actuales (Google Analytics, Google Ads, etc.) para hacer una auditoria completa y crear tu plan estrategico.',
        faqQ4: 'Cual es el costo de sus servicios?',
        faqA4: 'Los precios varian segun servicio y necesidades. Ofrecemos paquetes desde $500/mes. Te enviamos una propuesta personalizada despues de la auditoria gratis.',
        faqQ5: 'Puedo cambiar de agencia cuando quiera?',
        faqA5: 'Si, totalmente. Al no tener contratos largos puedes cancelar en cualquier momento. Preferimos demostrar valor mes a mes.',
        faqQ6: 'Que industrias o sectores atienden?',
        faqA6: 'Trabajamos con todo tipo de negocios: clinicas dentales, firmas legales, restaurantes, talleres, contratistas, e-commerce y mas. Nuestras estrategias se personalizan por industria.',
        ctaTitle: 'Tu Competencia Ya Esta Online. Aseguremos Que Te Vean Primero A Ti.',
        ctaDescription: 'Agenda una auditoria gratuita de 30 minutos y sal con una hoja de ruta clara: sin compromiso y sin humo.',
        ctaPrimary: 'Agendar Mi Auditoria Gratis',
        ctaWhatsapp: 'WhatsApp',
        calendarTitle: 'Agenda Tu Consulta Gratis',
        calendarDescription: 'Elige el horario que mejor se adapte a tu disponibilidad',
        contactFormTitle: 'Solicita Tu Auditoria Gratis',
        contactFormDescription: 'Completa el formulario y te contactamos en menos de 24 horas',
        formFullNamePlaceholder: 'Nombre Completo *',
        formEmailPlaceholder: 'Email *',
        formPhonePlaceholder: 'Telefono *',
        formObjectivesLabel: 'Objetivos principales',
        formObjectivesDefault: 'Cuales son tus objetivos principales?',
        formObjectivesSeo: 'Mejorar SEO',
        formObjectivesAds: 'Aumentar publicidad',
        formObjectivesWeb: 'Nuevo sitio web',
        formObjectivesSocial: 'Redes sociales',
        formObjectivesGeneral: 'Estrategia general',
        formMessagePlaceholder: 'Cuentanos sobre tu negocio...',
        formAttachLabel: 'Adjuntar archivo (opcional):',
        formSmsConsent: 'Acepto recibir mensajes SMS de Crescendo Digital Marketing Agency sobre actualizaciones de servicio, confirmaciones de cita, seguimiento y promociones ocasionales. La frecuencia varia. Pueden aplicarse cargos de mensaje y datos. Responde STOP para darte de baja. Responde HELP para ayuda.',
        formSubmit: 'Solicitar Auditoria',
        formDisclaimer: 'No compartimos tu informacion. Respetamos tu privacidad.',
        contactInfoTitle: 'Informacion de Contacto',
        contactPhoneLabel: 'Telefono',
        contactEmailLabel: 'Correo',
        contactLocationLabel: 'Ubicacion',
        contactHoursLabel: 'Horario',
        contactHoursValue: 'Lunes a Viernes: 9am - 5pm EST',
        contactFacebookAria: 'Visita nuestra pagina de Facebook',
        contactInstagramAria: 'Visita nuestro perfil de Instagram',
        contactGoogleAria: 'Ver nuestras resenas en Google',
        contactWhatsappAria: 'Contactanos por WhatsApp'
    }
};

function normalizeLanguage(lang) {
    return lang === 'es' ? 'es' : DEFAULT_SITE_LANGUAGE;
}

function getPreferredLanguage() {
    try {
        const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        return normalizeLanguage(saved);
    } catch (error) {
        return DEFAULT_SITE_LANGUAGE;
    }
}

function getLanguageFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    return lang === 'es' || lang === 'en' ? lang : null;
}

function setPreferredLanguage(lang) {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizeLanguage(lang));
    } catch (error) {
        // Ignore storage access issues.
    }
}

function syncLanguageInputs(lang) {
    document.querySelectorAll('input[name="lang"]').forEach(input => {
        input.value = lang;
    });
}

function getTranslation(lang, key) {
    const safeLang = normalizeLanguage(lang);
    return (I18N_STRINGS[safeLang] && I18N_STRINGS[safeLang][key]) || I18N_STRINGS.en[key] || '';
}

function applyTextTranslations(lang) {
    const safeLang = normalizeLanguage(lang);

    document.querySelectorAll('[data-i18n]').forEach(node => {
        const key = node.getAttribute('data-i18n');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(node => {
        const key = node.getAttribute('data-i18n-aria-label');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.setAttribute('aria-label', value);
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(node => {
        const key = node.getAttribute('data-i18n-title');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.setAttribute('title', value);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(node => {
        const key = node.getAttribute('data-i18n-alt');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.setAttribute('alt', value);
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
        const key = node.getAttribute('data-i18n-placeholder');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('[data-i18n-content]').forEach(node => {
        const key = node.getAttribute('data-i18n-content');
        const value = getTranslation(safeLang, key);

        if (value) {
            node.setAttribute('content', value);
        }
    });
}

function setElementText(selector, key, lang) {
    const node = document.querySelector(selector);
    const value = getTranslation(lang, key);

    if (node && value) {
        setNodeTextPreservingIcon(node, value);
    }
}

function setNodeTextPreservingIcon(node, value) {
    const meaningfulNodes = Array.from(node.childNodes).filter(child => {
        return !(child.nodeType === Node.TEXT_NODE && !child.textContent.trim());
    });

    const firstNode = meaningfulNodes[0] || null;
    const lastNode = meaningfulNodes[meaningfulNodes.length - 1] || null;

    const firstIsIcon = firstNode && firstNode.nodeType === Node.ELEMENT_NODE && firstNode.tagName === 'I';
    const lastIsIcon = lastNode && lastNode.nodeType === Node.ELEMENT_NODE && lastNode.tagName === 'I';

    if (firstIsIcon) {
        const iconClone = firstNode.cloneNode(true);
        node.textContent = '';
        node.appendChild(iconClone);
        node.appendChild(document.createTextNode(` ${value}`));
        return;
    }

    if (lastIsIcon) {
        const iconClone = lastNode.cloneNode(true);
        node.textContent = '';
        node.appendChild(document.createTextNode(`${value} `));
        node.appendChild(iconClone);
        return;
    }

    node.textContent = value;
}

function setElementTextWithIcon(selector, key, lang) {
    const node = document.querySelector(selector);
    const value = getTranslation(lang, key);

    if (!node || !value) return;

    setNodeTextPreservingIcon(node, value);
}

function setAllElementsText(selector, key, lang) {
    const value = getTranslation(lang, key);
    if (!value) return;

    document.querySelectorAll(selector).forEach(node => {
        setNodeTextPreservingIcon(node, value);
    });
}

function setAllElementsTextWithIcon(selector, key, lang) {
    const value = getTranslation(lang, key);
    if (!value) return;

    document.querySelectorAll(selector).forEach(node => {
        setNodeTextPreservingIcon(node, value);
    });
}

function setElementAttribute(selector, attribute, key, lang) {
    const node = document.querySelector(selector);
    const value = getTranslation(lang, key);

    if (node && value) {
        node.setAttribute(attribute, value);
    }
}

function setElementTextValue(selector, value) {
    const node = document.querySelector(selector);
    if (!node || !value) return;

    setNodeTextPreservingIcon(node, value);
}

function setElementAttributeValue(selector, attribute, value) {
    const node = document.querySelector(selector);
    if (!node || !value) return;

    node.setAttribute(attribute, value);
}

const PAGE_TRANSLATIONS = {
    'google-ads.html': {
        en: {
            title: 'Google Ads and Meta Ads | Digital Advertising Campaigns | Crescendo Digital',
            description: 'Google Ads and Meta Ads campaigns optimized for conversions. Get measurable ROI with our proven digital advertising strategy.',
            text: {
                '.hero-content h1': 'Google Ads & Meta Ads Management — Stop Burning Budget, Start Getting Clients',
                '.hero-content > p': 'We design and manage data-driven campaigns on Google and Meta that attract ready-to-buy customers. Every dollar is tracked, optimized, and working toward measurable returns — no guesswork, no wasted spend.',
                '.hero-buttons .btn-primary': 'Free Audit',
                '.hero-buttons .btn-secondary': 'View Strategy',
                '.hero-stats .stat:nth-child(1) p': 'Average ROI on campaigns',
                '.hero-stats .stat:nth-child(2) p': 'Optimized average CPC',
                '.hero-stats .stat:nth-child(3) p': 'To see first results',
                '.servicio-detalle-text h2': 'Why Choose Our Ads Management',
                '.servicio-detalle-text > p': 'While SEO is a long-term strategy, paid advertising puts you in front of customers who are NOW searching for your services. With the right campaigns, you can see results in days.',
                '.cta-final h2': 'Ready to Increase Your Leads?',
                '.cta-final p': 'Get a free audit of your campaigns',
                '.cta-final .btn-primary': 'Request Audit'
            }
        },
        es: {
            title: 'Google Ads y Meta Ads | Campanas de Publicidad Digital | Crescendo Digital',
            description: 'Campanas de Google Ads y Meta Ads optimizadas para conversiones. Obtiene ROI medible con una estrategia de publicidad digital basada en datos.',
            text: {
                '.hero-content h1': 'Gestion de Google Ads y Meta Ads — Deja de Quemar Presupuesto, Empieza a Conseguir Clientes',
                '.hero-content > p': 'Disenamos y gestionamos campanas basadas en datos en Google y Meta que atraen clientes listos para comprar. Cada dolar se rastrea, se optimiza y trabaja para generar retorno medible — sin improvisaciones ni gasto desperdiciado.',
                '.hero-buttons .btn-primary': 'Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Estrategia',
                '.hero-stats .stat:nth-child(1) p': 'ROI promedio en campanas',
                '.hero-stats .stat:nth-child(2) p': 'CPC promedio optimizado',
                '.hero-stats .stat:nth-child(3) p': 'Para ver primeros resultados',
                '.servicio-detalle-text h2': 'Por Que Elegir Nuestra Gestion de Ads',
                '.servicio-detalle-text > p': 'Mientras SEO es una estrategia de largo plazo, la publicidad pagada te pone frente a clientes que estan buscando tus servicios AHORA. Con las campanas correctas, puedes ver resultados en dias.',
                '.cta-final h2': 'Listo Para Aumentar Tus Leads?',
                '.cta-final p': 'Obtiene una auditoria gratuita de tus campanas',
                '.cta-final .btn-primary': 'Solicitar Auditoria'
            }
        }
    },
    'seo-local.html': {
        en: {
            title: 'Local SEO Miami | Google Maps Ranking | Crescendo Digital',
            description: 'Dominate local search results in Miami. Google Business Profile optimization, local keywords, and technical SEO strategy.',
            text: {
                '.hero-content h1': 'Get Found on Google When Customers Search Near You — Local SEO Miami',
                '.hero-content > p': 'We position your business in the Google Local 3-Pack and Google Maps so you show up first when it matters most. Real calls, real foot traffic, real growth — without paying for every click.',
                '.hero-buttons .btn-primary': 'Free Audit',
                '.hero-buttons .btn-secondary': 'View Strategy',
                '.hero-stats .stat:nth-child(1) p': 'Average increase in local traffic',
                '.hero-stats .stat:nth-child(2) p': 'Position in Local Pack',
                '.hero-stats .stat:nth-child(3) p': 'To dominate local searches',
                '.servicio-detalle-text h2': 'What is Local SEO?',
                '.cta-final h2': 'Ready to Dominate Local Results?',
                '.cta-final p': 'Get your free 30-minute Local SEO audit',
                '.cta-final .btn-primary': 'Request Audit'
            }
        },
        es: {
            title: 'SEO Local Miami | Posicionamiento en Google Maps | Crescendo Digital',
            description: 'Domina los resultados de busqueda local en Miami. Optimizacion de Google Business Profile, palabras clave locales y estrategia SEO tecnica.',
            text: {
                '.hero-content h1': 'Aparece en Google Cuando Tus Clientes Buscan Cerca — SEO Local Miami',
                '.hero-content > p': 'Posicionamos tu negocio en el Local 3-Pack de Google y en Google Maps para que aparezcas primero cuando mas importa. Llamadas reales, visitas reales, crecimiento real — sin pagar por cada clic.',
                '.hero-buttons .btn-primary': 'Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Estrategia',
                '.hero-stats .stat:nth-child(1) p': 'Aumento promedio de trafico local',
                '.hero-stats .stat:nth-child(2) p': 'Posicion en Local Pack',
                '.hero-stats .stat:nth-child(3) p': 'Para dominar busquedas locales',
                '.servicio-detalle-text h2': 'Que es SEO Local?',
                '.cta-final h2': 'Listo Para Dominar Resultados Locales?',
                '.cta-final p': 'Obtiene tu auditoria gratuita de SEO Local de 30 minutos',
                '.cta-final .btn-primary': 'Solicitar Auditoria'
            }
        }
    },
    'social-media.html': {
        en: {
            title: 'Social Media Marketing | Social Media Management | Crescendo Digital',
            description: 'Professional social media management. Strategic content, engagement, and growth on Instagram, Facebook, TikTok, and LinkedIn.',
            text: {
                '.hero-content h1': 'Social Media That Builds Your Brand and Drives Real Revenue',
                '.hero-content > p': 'We create and manage content strategies that grow your following, boost engagement, and convert your audience into loyal customers across Instagram, Facebook, TikTok, and LinkedIn.',
                '.hero-buttons .btn-primary': 'Free Audit',
                '.hero-buttons .btn-secondary': 'View Services',
                '.hero-stats .stat:nth-child(1) p': 'Average increase in engagement',
                '.hero-stats .stat:nth-child(2) p': 'Followers managed monthly',
                '.hero-stats .stat:nth-child(3) p': 'Posts created each month',
                '.servicio-detalle-text h2': 'Why Social Media Marketing',
                '.servicio-detalle .container > h2[style*="margin-top: 80px"]': 'Our Services',
                '.cta-final h2': 'Ready to Grow on Social Media?',
                '.cta-final p': 'Get a personalized social media strategy',
                '.cta-final .btn-primary': 'Request Strategy'
            }
        },
        es: {
            title: 'Marketing en Redes Sociales | Gestion de Social Media | Crescendo Digital',
            description: 'Gestion profesional de redes sociales. Contenido estrategico, engagement y crecimiento en Instagram, Facebook, TikTok y LinkedIn.',
            text: {
                '.hero-content h1': 'Redes Sociales Que Construyen Tu Marca y Generan Ingresos Reales',
                '.hero-content > p': 'Creamos y gestionamos estrategias de contenido que hacen crecer tu comunidad, aumentan el engagement y convierten tu audiencia en clientes en Instagram, Facebook, TikTok y LinkedIn.',
                '.hero-buttons .btn-primary': 'Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Servicios',
                '.hero-stats .stat:nth-child(1) p': 'Aumento promedio en engagement',
                '.hero-stats .stat:nth-child(2) p': 'Seguidores gestionados al mes',
                '.hero-stats .stat:nth-child(3) p': 'Publicaciones creadas al mes',
                '.servicio-detalle-text h2': 'Por Que Marketing en Redes Sociales',
                '.servicio-detalle .container > h2[style*="margin-top: 80px"]': 'Nuestros Servicios',
                '.cta-final h2': 'Listo Para Crecer en Redes Sociales?',
                '.cta-final p': 'Obtiene una estrategia personalizada de redes sociales',
                '.cta-final .btn-primary': 'Solicitar Estrategia'
            }
        }
    },
    'web-design.html': {
        en: {
            title: 'Professional Web Design | Sites That Convert | Crescendo Digital',
            description: 'Professional, modern, and responsive web design. Sites optimized for conversions that work as your best salesperson 24/7.',
            text: {
                '.hero-content h1': 'Web Design That Converts — Professional Sites Built to Turn Visitors Into Clients',
                '.hero-content > p': 'We build fast, mobile-first websites engineered to make every visitor take action. From first impression to final click — design, speed, and copy all working together to grow your business.',
                '.hero-buttons .btn-primary': 'Free Audit',
                '.hero-buttons .btn-secondary': 'View Process',
                '.hero-stats .stat:nth-child(1) p': 'Average loading time',
                '.hero-stats .stat:nth-child(2) p': 'Google performance score',
                '.hero-stats .stat:nth-child(3) p': 'Increase in conversion rate',
                '.servicio-detalle-text h2': 'Why You Need a Professional Website?',
                '.cta-final h2': 'Ready for a Website That Sells?',
                '.cta-final p': 'Get a free web design consultation',
                '.cta-final .btn-primary': 'Request Consultation'
            }
        },
        es: {
            title: 'Diseno Web Profesional | Sitios Que Convierten | Crescendo Digital',
            description: 'Diseno web profesional, moderno y responsive. Sitios optimizados para conversiones que trabajan como tu mejor vendedor 24/7.',
            text: {
                '.hero-content h1': 'Diseno Web Que Convierte — Sitios Profesionales Que Transforman Visitas en Clientes',
                '.hero-content > p': 'Construimos sitios web rapidos, optimizados para movil y disenados para que cada visitante tome accion. Del primer impacto al clic final — diseno, velocidad y contenido trabajando juntos para hacer crecer tu negocio.',
                '.hero-buttons .btn-primary': 'Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Proceso',
                '.hero-stats .stat:nth-child(1) p': 'Tiempo de carga promedio',
                '.hero-stats .stat:nth-child(2) p': 'Puntaje de rendimiento en Google',
                '.hero-stats .stat:nth-child(3) p': 'Aumento en tasa de conversion',
                '.servicio-detalle-text h2': 'Por Que Necesitas un Sitio Web Profesional?',
                '.cta-final h2': 'Listo Para un Sitio Web Que Venda?',
                '.cta-final p': 'Obtiene una consulta gratuita de diseno web',
                '.cta-final .btn-primary': 'Solicitar Consulta'
            }
        }
    },
    'ia-chat-24-7.html': {
        en: {
            title: '24/7 AI Chat | Intelligent Chatbot for Your Website | Crescendo Digital',
            description: 'Automatic 24/7 AI chat that qualifies leads and schedules appointments. Never lose a customer because you are out of office hours.',
            text: {
                '.hero-content h1': 'AI Chat 24/7 — Capture, Qualify, and Book Leads While You Sleep',
                '.hero-content > p': 'Our intelligent chatbot answers questions, qualifies prospects, and schedules appointments around the clock. Stop losing leads after business hours — your competition never sleeps, and now neither does your sales process.',
                '.hero-buttons .btn-primary': 'Request Demo',
                '.hero-buttons .btn-secondary': 'View Benefits',
                '.hero-stats .stat:nth-child(1) p': 'Increase in lead conversions',
                '.hero-stats .stat:nth-child(2) p': 'Reduction in lost leads',
                '.hero-stats .stat:nth-child(3) p': 'Availability without interruptions',
                '.servicio-detalle-text h2': 'The Problem',
                '.cta-final h2': 'Ready to Never Lose a Lead?',
                '.cta-final p': 'Request a free demo of the AI Chat',
                '.cta-final .btn-primary': 'Request Demo'
            }
        },
        es: {
            title: 'Chat IA 24/7 | Chatbot Inteligente Para Tu Sitio Web | Crescendo Digital',
            description: 'Chat automatico con IA 24/7 que califica leads y agenda citas. Nunca pierdas un cliente por estar fuera de horario.',
            text: {
                '.hero-content h1': 'Chat IA 24/7 — Captura, Califica y Agenda Leads Mientras Duermes',
                '.hero-content > p': 'Nuestro chatbot inteligente responde preguntas, califica prospectos y agenda citas las 24 horas. Deja de perder leads despues del horario laboral — la competencia no descansa, y ahora tampoco tu proceso de ventas.',
                '.hero-buttons .btn-primary': 'Solicitar Demo',
                '.hero-buttons .btn-secondary': 'Ver Beneficios',
                '.hero-stats .stat:nth-child(1) p': 'Aumento en conversion de leads',
                '.hero-stats .stat:nth-child(2) p': 'Reduccion de leads perdidos',
                '.hero-stats .stat:nth-child(3) p': 'Disponibilidad sin interrupciones',
                '.servicio-detalle-text h2': 'El Problema',
                '.cta-final h2': 'Listo Para No Perder Ningun Lead?',
                '.cta-final p': 'Solicita una demo gratuita del Chat IA',
                '.cta-final .btn-primary': 'Solicitar Demo'
            }
        }
    },
    'reputacion-online.html': {
        en: {
            title: 'Online Reputation | Digital Brand Management | Crescendo Digital',
            description: 'Professional management of your online reputation. We monitor, respond, and improve what is said about your brand on the internet.',
            text: {
                '.hero-content h1': 'Online Reputation That Protects Your Brand and Wins More Clients',
                '.hero-content > p': 'We monitor, respond to, and actively improve what is being said about your business online. Turn your reviews into your strongest sales asset — before a single negative comment costs you a customer.',
                '.hero-buttons .btn-primary': 'Reputation Audit',
                '.hero-buttons .btn-secondary': 'View Services',
                '.hero-stats .stat:nth-child(1) p': 'Average rating managed',
                '.hero-stats .stat:nth-child(2) p': 'Crises handled without losing clients',
                '.hero-stats .stat:nth-child(3) p': 'Mentions monitored each month',
                '#poder-reputacion .servicio-detalle-text h2': 'The Power of Online Reputation',
                '.servicios .section-header h2': 'Online Reputation Services',
                '.cta-final h2': 'Protect Your Online Reputation Today',
                '.cta-final p': 'Get a free analysis of your current reputation',
                '.cta-final .btn-primary': 'Request Analysis'
            }
        },
        es: {
            title: 'Reputacion Online | Gestion de Marca Digital | Crescendo Digital',
            description: 'Gestion profesional de tu reputacion online. Monitoreamos, respondemos y mejoramos lo que se dice de tu marca en internet.',
            text: {
                '.hero-content h1': 'Reputacion Online Que Protege Tu Marca y Gana Mas Clientes',
                '.hero-content > p': 'Monitoreamos, respondemos y mejoramos activamente lo que se dice de tu negocio en internet. Convierte tus resenas en tu herramienta de ventas mas poderosa — antes de que un solo comentario negativo te cueste un cliente.',
                '.hero-buttons .btn-primary': 'Auditoria de Reputacion',
                '.hero-buttons .btn-secondary': 'Ver Servicios',
                '.hero-stats .stat:nth-child(1) p': 'Calificacion promedio gestionada',
                '.hero-stats .stat:nth-child(2) p': 'Crisis manejadas sin perder clientes',
                '.hero-stats .stat:nth-child(3) p': 'Menciones monitoreadas cada mes',
                '#poder-reputacion .servicio-detalle-text h2': 'El Poder de la Reputacion Online',
                '.servicios .section-header h2': 'Servicios de Reputacion Online',
                '.cta-final h2': 'Protege Tu Reputacion Online Hoy',
                '.cta-final p': 'Obtiene un analisis gratuito de tu reputacion actual',
                '.cta-final .btn-primary': 'Solicitar Analisis'
            }
        }
    },
    'nosotros.html': {
        en: {
            title: 'About Us | Crescendo Digital Marketing',
            description: 'Learn who we are. A team of digital marketing specialists focused on growing your business.',
            text: {
                '.hero-content h1': 'Crescendo Digital Marketing Agency - Full-Service Marketing Agency in Miami',
                '.hero-content h2': 'We boost your business with Local SEO, PPC & Meta Ads, Web Design, Social Media & Online Reputation.',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Our Mission',
                '.servicio-detalle .container > p': "Help businesses of every size, from small local companies to larger organizations, grow through smart digital marketing. We don't believe in generic solutions. Every business is unique, and every strategy should be too.",
                '.servicio-detalle .container > h2:nth-of-type(2)': 'Our Values',
                '.por-que-items .por-que-item:nth-child(1) h4': 'Results Focus',
                '.por-que-items .por-que-item:nth-child(1) p': "We don't measure success in pretty reports. We measure in conversions, sales and real business growth.",
                '.por-que-items .por-que-item:nth-child(2) h4': 'Transparency',
                '.por-que-items .por-que-item:nth-child(2) p': 'We explain what we do, why we do it, and how it impacts your business. No unnecessary jargon.',
                '.por-que-items .por-que-item:nth-child(3) h4': 'Innovation',
                '.por-que-items .por-que-item:nth-child(3) p': 'Digital marketing is constantly evolving. We learn, adapt, and bring the best to your strategy.',
                '.por-que-items .por-que-item:nth-child(4) h4': 'Passion',
                '.por-que-items .por-que-item:nth-child(4) p': "We love what we do. Your success is our success. We don't work with clients, we work with partners.",
                '.servicio-detalle .container > h2:nth-of-type(3)': 'Why Choose Crescendo',
                '.servicios-grid .servicio-card:nth-child(1) h3': 'Proven Experience',
                '.servicios-grid .servicio-card:nth-child(1) > p': 'A team with hands-on experience across multiple industries, channels and business stages.',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(1)': 'Documented success stories',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(2)': 'KPI-based planning and reporting',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(3)': 'Support for small, medium and large businesses',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(4)': 'Google and Meta certifications',
                '.servicios-grid .servicio-card:nth-child(2) h3': 'Proven Methodology',
                '.servicios-grid .servicio-card:nth-child(2) > p': 'We do not improvise. Every strategy follows our 5-step framework: Audit -> Strategy -> Execution -> Optimization -> Scaling.',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(1)': 'Tested framework',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(2)': 'Documented processes',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(3)': 'Continuous improvement',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(4)': 'Proven scalability',
                '.servicios-grid .servicio-card:nth-child(3) h3': 'ROI Focus',
                '.servicios-grid .servicio-card:nth-child(3) > p': 'Every dollar invested must generate return. We measure, optimize and report with total transparency.',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(1)': 'Complete tracking',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(2)': 'Monthly reports',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(3)': 'Constant optimization',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(4)': 'Total transparency',
                '.servicios-grid .servicio-card:nth-child(4) h3': 'Dedicated Support',
                '.servicios-grid .servicio-card:nth-child(4) > p': 'An account manager assigned to your account. Available for questions, updates and strategic adjustments.',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(1)': 'Dedicated account manager',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(2)': 'Fast response during business hours',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(3)': '24h max response time',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(4)': 'Regular meetings',
                '.servicios-grid .servicio-card:nth-child(5) h3': 'Advanced Technology',
                '.servicios-grid .servicio-card:nth-child(5) > p': 'We use the most modern tools: AI, automation, advanced analytics and proprietary platforms.',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(1)': 'AI and machine learning',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(2)': 'Smart automation',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(3)': 'Advanced analytics',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(4)': 'Proprietary tools',
                '.servicios-grid .servicio-card:nth-child(6) h3': 'Continuous Training',
                '.servicios-grid .servicio-card:nth-child(6) > p': 'Digital marketing changes every week. Our team is in constant learning and certification.',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(1)': 'Active certifications',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(2)': 'Monthly training',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(3)': 'Access to premium resources',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(4)': 'Expert community',
                '.servicio-detalle .container > h2:nth-of-type(4)': 'How We Build Trust',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(1) > div': 'Clear',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(1) > p': 'KPIs Defined Before Launch',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(2) > div': 'Weekly',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(2) > p': 'Optimization and Monitoring',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(3) > div': 'Monthly',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(3) > p': 'Performance Reports You Can Understand',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(4) > div': 'Real',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(4) > p': 'Recommendations Based on Your Budget and Stage',
                '.cta-final h2': 'Learn More About Our Work',
                '.cta-final p': 'Check out some of our success stories',
                '.cta-final .btn-primary': 'View Success Stories',
                '.cta-final .btn-secondary': 'Schedule Call'
            }
        },
        es: {
            title: 'Nosotros | Crescendo Digital Marketing',
            description: 'Conoce quienes somos. Un equipo de especialistas en marketing digital enfocados en hacer crecer tu negocio.',
            text: {
                '.hero-content h1': 'Crescendo Digital Marketing Agency - Agencia de Marketing Integral en Miami',
                '.hero-content h2': 'Impulsamos tu negocio con SEO Local, PPC y Meta Ads, Diseno Web, Social Media y Reputacion Online.',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Nuestra Mision',
                '.servicio-detalle .container > p': 'Ayudamos a negocios de todos los tamanos, desde pequenas empresas locales hasta organizaciones mas grandes, a crecer con marketing digital inteligente. No creemos en soluciones genericas. Cada negocio es unico y cada estrategia tambien debe serlo.',
                '.servicio-detalle .container > h2:nth-of-type(2)': 'Nuestros Valores',
                '.por-que-items .por-que-item:nth-child(1) h4': 'Enfoque en Resultados',
                '.por-que-items .por-que-item:nth-child(1) p': 'No medimos el exito con reportes bonitos. Lo medimos con conversiones, ventas y crecimiento real del negocio.',
                '.por-que-items .por-que-item:nth-child(2) h4': 'Transparencia',
                '.por-que-items .por-que-item:nth-child(2) p': 'Te explicamos que hacemos, por que lo hacemos y como impacta en tu negocio. Sin tecnicismos innecesarios.',
                '.por-que-items .por-que-item:nth-child(3) h4': 'Innovacion',
                '.por-que-items .por-que-item:nth-child(3) p': 'El marketing digital evoluciona constantemente. Aprendemos, nos adaptamos y llevamos lo mejor a tu estrategia.',
                '.por-que-items .por-que-item:nth-child(4) h4': 'Pasion',
                '.por-que-items .por-que-item:nth-child(4) p': 'Nos encanta lo que hacemos. Tu exito es nuestro exito. No trabajamos con clientes, trabajamos con socios.',
                '.servicio-detalle .container > h2:nth-of-type(3)': 'Por Que Elegir Crescendo',
                '.servicios-grid .servicio-card:nth-child(1) h3': 'Experiencia Comprobada',
                '.servicios-grid .servicio-card:nth-child(1) > p': 'Un equipo con experiencia real en multiples industrias, canales y etapas de negocio.',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(1)': 'Casos de exito documentados',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(2)': 'Planificacion y reportes basados en KPI',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(3)': 'Soporte para negocios pequenos, medianos y grandes',
                '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(4)': 'Certificaciones de Google y Meta',
                '.servicios-grid .servicio-card:nth-child(2) h3': 'Metodologia Comprobada',
                '.servicios-grid .servicio-card:nth-child(2) > p': 'No improvisamos. Cada estrategia sigue nuestro marco de 5 pasos: Auditoria -> Estrategia -> Ejecucion -> Optimizacion -> Escalamiento.',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(1)': 'Marco de trabajo probado',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(2)': 'Procesos documentados',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(3)': 'Mejora continua',
                '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(4)': 'Escalabilidad comprobada',
                '.servicios-grid .servicio-card:nth-child(3) h3': 'Enfoque en ROI',
                '.servicios-grid .servicio-card:nth-child(3) > p': 'Cada dolar invertido debe generar retorno. Medimos, optimizamos y reportamos con total transparencia.',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(1)': 'Seguimiento completo',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(2)': 'Reportes mensuales',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(3)': 'Optimizacion constante',
                '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(4)': 'Transparencia total',
                '.servicios-grid .servicio-card:nth-child(4) h3': 'Soporte Dedicado',
                '.servicios-grid .servicio-card:nth-child(4) > p': 'Un account manager asignado a tu cuenta, disponible para consultas, actualizaciones y ajustes estrategicos.',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(1)': 'Account manager dedicado',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(2)': 'Respuesta agil en horario laboral',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(3)': 'Tiempo maximo de respuesta de 24h',
                '.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(4)': 'Reuniones periodicas',
                '.servicios-grid .servicio-card:nth-child(5) h3': 'Tecnologia Avanzada',
                '.servicios-grid .servicio-card:nth-child(5) > p': 'Usamos herramientas modernas: IA, automatizacion, analitica avanzada y plataformas propias.',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(1)': 'IA y machine learning',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(2)': 'Automatizacion inteligente',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(3)': 'Analitica avanzada',
                '.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(4)': 'Herramientas propias',
                '.servicios-grid .servicio-card:nth-child(6) h3': 'Formacion Continua',
                '.servicios-grid .servicio-card:nth-child(6) > p': 'El marketing digital cambia cada semana. Nuestro equipo se mantiene en formacion y certificacion constante.',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(1)': 'Certificaciones activas',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(2)': 'Capacitacion mensual',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(3)': 'Acceso a recursos premium',
                '.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(4)': 'Comunidad de expertos',
                '.servicio-detalle .container > h2:nth-of-type(4)': 'Como Generamos Confianza',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(1) > div': 'Claros',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(1) > p': 'KPI definidos antes de lanzar',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(2) > div': 'Semanal',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(2) > p': 'Monitoreo y optimizacion continua',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(3) > div': 'Mensual',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(3) > p': 'Reportes de rendimiento faciles de entender',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(4) > div': 'Real',
                '.servicio-detalle .container > h2:nth-of-type(4) + div > div:nth-child(4) > p': 'Recomendaciones segun tu presupuesto y etapa de negocio',
                '.cta-final h2': 'Conoce Mas Sobre Nuestro Trabajo',
                '.cta-final p': 'Revisa algunos de nuestros casos de exito',
                '.cta-final .btn-primary': 'Ver Casos de Exito',
                '.cta-final .btn-secondary': 'Agendar Llamada'
            }
        }
    },
    'blog.html': {
        en: {
            title: 'Blog | Digital Marketing Tips | Crescendo Digital',
            description: 'Articles and guides on digital marketing strategy, SEO, Google Ads, social media and growth hacking.',
            text: {
                '.hero-content h1': 'Crescendo Digital Blog — Marketing Strategies That Actually Work',
                '.hero-content > p': 'Practical guides, expert tips, and data-backed strategies to help your business grow online. New content every week covering Local SEO, paid ads, social media, and web design.',
                '.hero-buttons .btn-primary': 'Get Free Audit',
                '.hero-buttons .btn-secondary': 'View Services',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Recent Articles',
                '.servicio-detalle .container > h2:nth-of-type(2)': 'Categories',
                '.cta-final h2': 'Need More than Articles?',
                '.cta-final p': 'Let us implement a personalized strategy for your business',
                '.cta-final .btn-primary': 'Contact Now'
            }
        },
        es: {
            title: 'Blog | Consejos de Marketing Digital | Crescendo Digital',
            description: 'Articulos y guias sobre estrategia de marketing digital, SEO, Google Ads, social media y growth hacking.',
            text: {
                '.hero-content h1': 'Blog de Crescendo Digital — Estrategias de Marketing Que Realmente Funcionan',
                '.hero-content > p': 'Guias practicas, consejos de expertos y estrategias basadas en datos para hacer crecer tu negocio online. Contenido nuevo cada semana sobre SEO Local, anuncios, redes sociales y diseno web.',
                '.hero-buttons .btn-primary': 'Obtener Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Servicios',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Articulos Recientes',
                '.servicio-detalle .container > h2:nth-of-type(2)': 'Categorias',
                '.cta-final h2': 'Necesitas Mas que Articulos?',
                '.cta-final p': 'Implementemos una estrategia personalizada para tu negocio',
                '.cta-final .btn-primary': 'Contactar Ahora'
            }
        }
    },
    'casos-de-exito.html': {
        en: {
            title: 'Success Stories | Business Growth | Crescendo Digital',
            description: 'Real cases of clients who grew significantly with our digital marketing strategies.',
            text: {
                '.hero-content h1': 'Real Results From Real Businesses — Crescendo Success Stories',
                '.hero-content > p': 'Numbers don\'t lie. See how businesses across multiple industries grew their traffic, leads, and revenue with tailored digital marketing strategies from Crescendo.',
                '.hero-buttons .btn-primary': 'Schedule Free Audit',
                '.hero-buttons .btn-secondary': 'View Services',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Real Results for Real Clients',
                '.cta-final h2': 'Tell Us About Your Business',
                '.cta-final p': 'We will do a free audit and show you what is possible',
                '.cta-final .btn-primary': 'Schedule Free Audit'
            },
            attrs: {
                '#modalImg||alt': 'Enlarged image'
            }
        },
        es: {
            title: 'Casos de Exito | Crecimiento de Negocios | Crescendo Digital',
            description: 'Casos reales de clientes que crecieron significativamente con nuestras estrategias de marketing digital.',
            text: {
                '.hero-content h1': 'Resultados Reales de Negocios Reales — Casos de Exito Crescendo',
                '.hero-content > p': 'Los numeros no mienten. Mira como negocios de distintas industrias aumentaron su trafico, leads e ingresos con estrategias de marketing digital a medida de Crescendo.',
                '.hero-buttons .btn-primary': 'Agendar Auditoria Gratis',
                '.hero-buttons .btn-secondary': 'Ver Servicios',
                '.servicio-detalle .container > h2:nth-of-type(1)': 'Resultados Reales para Clientes Reales',
                '.cta-final h2': 'Cuentanos Sobre Tu Negocio',
                '.cta-final p': 'Haremos una auditoria gratuita y te mostraremos lo que es posible',
                '.cta-final .btn-primary': 'Agendar Auditoria Gratis'
            },
            attrs: {
                '#modalImg||alt': 'Imagen ampliada'
            }
        }
    },
    'testimonios.html': {
        en: {
            title: 'Video Testimonials | Crescendo Digital',
            description: 'A gallery of testimonial videos prepared to strengthen trust and credibility in the project.'
        },
        es: {
            title: 'Testimonios en Video | Crescendo Digital',
            description: 'Una galeria de testimonios en video preparada para reforzar la confianza y la credibilidad en el proyecto.'
        }
    },
    'privacidad.html': {
        en: {
            title: 'Privacy Policy | Crescendo Digital',
            text: {
                '.hero-content h1': 'Privacy Policy',
                '.hero-content > p': 'How we protect your data and privacy'
            }
        },
        es: {
            title: 'Politica de Privacidad | Crescendo Digital',
            text: {
                '.hero-content h1': 'Politica de Privacidad',
                '.hero-content > p': 'Como protegemos tus datos y tu privacidad'
            }
        }
    },
    'terminos.html': {
        en: {
            title: 'Terms and Conditions | Crescendo Digital',
            text: {
                '.hero-content h1': 'Terms and Conditions',
                '.hero-content > p': 'Terms of use for our website and services'
            }
        },
        es: {
            title: 'Terminos y Condiciones | Crescendo Digital',
            text: {
                '.hero-content h1': 'Terminos y Condiciones',
                '.hero-content > p': 'Condiciones de uso de nuestro sitio web y servicios'
            }
        }
    },
    'thank-you.html': {
        en: {
            title: 'Thank You for Contacting Us! | Crescendo Digital Marketing',
            description: 'We have received your request. We will contact you soon.',
            text: {
                '.thank-you-content h1': 'Message Sent!',
                '.thank-you-content > p': 'Thank you for contacting us. We have received your audit request and will respond within 24 hours.',
                '.redirect-info span': 'You will be redirected to home in 5 seconds...',
                '.thank-you-content .btn-primary': 'Back to Home',
                '.thank-you-content .btn-secondary': 'WhatsApp'
            }
        },
        es: {
            title: 'Gracias por Contactarnos! | Crescendo Digital Marketing',
            description: 'Hemos recibido tu solicitud. Te contactaremos pronto.',
            text: {
                '.thank-you-content h1': 'Mensaje Enviado!',
                '.thank-you-content > p': 'Gracias por contactarnos. Hemos recibido tu solicitud de auditoria y responderemos en menos de 24 horas.',
                '.redirect-info span': 'Seras redirigido al inicio en 5 segundos...',
                '.thank-you-content .btn-primary': 'Volver al Inicio',
                '.thank-you-content .btn-secondary': 'WhatsApp'
            }
        }
    },
    'gracias.html': {
        en: {
            title: 'Thank You for Contacting Us! | Crescendo Digital Marketing',
            description: 'We have received your request. We will contact you soon.',
            text: {
                '.thank-you-content h1': 'Message Sent!',
                '.thank-you-content > p': 'Thank you for contacting us. We have received your audit request and will respond within 24 hours.',
                '.redirect-info span': 'You will be redirected to home in 5 seconds...',
                '.thank-you-content .btn-primary': 'Back to Home',
                '.thank-you-content .btn-secondary': 'WhatsApp'
            }
        },
        es: {
            title: 'Gracias por Contactarnos! | Crescendo Digital Marketing',
            description: 'Hemos recibido tu solicitud. Te contactaremos pronto.',
            text: {
                '.thank-you-content h1': 'Mensaje Enviado!',
                '.thank-you-content > p': 'Gracias por contactarnos. Hemos recibido tu solicitud de auditoria y responderemos en menos de 24 horas.',
                '.redirect-info span': 'Seras redirigido al inicio en 5 segundos...',
                '.thank-you-content .btn-primary': 'Volver al Inicio',
                '.thank-you-content .btn-secondary': 'WhatsApp'
            }
        }
    }
};

const PAGE_ES_OVERRIDES = {
    'google-ads.html': {
        text: {
            '.hero-content h1': 'Gestion de Google Ads y Meta Ads para negocios en Miami',
            '.hero-content > p': 'Campanas de publicidad digital optimizadas para conversiones. Obtiene ROI medible con estrategias basadas en datos que generan leads y ventas.',
            '.hero-buttons .btn-primary': 'Auditoria gratis',
            '.hero-buttons .btn-secondary': 'Ver estrategia',
            '.hero-stats .stat:nth-child(1) p': 'ROI promedio en campanas',
            '.hero-stats .stat:nth-child(2) p': 'CPC promedio optimizado',
            '.hero-stats .stat:nth-child(3) p': 'Para ver primeros resultados',
            '.servicio-detalle-text h2': 'Por que elegir nuestra gestion de Ads',
            '.servicio-detalle-text > p': 'Mientras SEO es una estrategia de largo plazo, la publicidad pagada te pone frente a clientes que estan buscando tus servicios AHORA. Con las campanas correctas, puedes ver resultados en dias.',
            '.por-que-items .por-que-item:nth-child(1) h4': 'Resultados inmediatos',
            '.por-que-items .por-que-item:nth-child(1) p': 'Ve conversiones en dias, no en meses. Trafico calificado desde el primer dia.',
            '.por-que-items .por-que-item:nth-child(2) h4': 'ROI medible',
            '.por-que-items .por-que-item:nth-child(2) p': 'Cada dolar invertido es rastreable. Sabes exactamente cuanto gastas y cuanto ganas.',
            '.por-que-items .por-que-item:nth-child(3) h4': 'Audiencia segmentada',
            '.por-que-items .por-que-item:nth-child(3) p': 'Llega exactamente a quien necesita tu servicio. Edad, ubicacion, intereses, comportamiento.',
            '.por-que-items .por-que-item:nth-child(4) h4': 'Optimizacion continua',
            '.por-que-items .por-que-item:nth-child(4) p': 'Pruebas A/B diarias. Mejoramos campanas con datos reales, no intuicion.',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Servicios PPC: Google Search, Display y Meta Ads',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Configuracion de campanas PPC',
            '.servicios-grid .servicio-card:nth-child(1) > p': 'Aparece en los primeros lugares cuando alguien busca tu servicio. Captura alta intencion de compra.',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(1)': 'Investigacion experta de palabras clave',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(2)': 'Copys publicitarios optimizados',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(3)': 'Landing pages para conversion',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(4)': 'Optimizacion automatica de pujas',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Segmentacion y optimizacion de audiencias',
            '.servicios-grid .servicio-card:nth-child(2) > p': 'Remarketing visual para mantener tu marca frente a quienes visitaron tu web y no convirtieron.',
            '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(1)': 'Creativos atractivos',
            '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(2)': 'Segmentacion avanzada de audiencias',
            '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(3)': 'Remarketing estrategico',
            '.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(4)': 'Anuncios en video y carrusel',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Tracking de conversiones y reportes',
            '.servicios-grid .servicio-card:nth-child(3) > p': 'Reportes detallados cada semana. Mejoras continuas basadas en metricas reales.',
            '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(1)': 'Seguimiento real de CPA',
            '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(2)': 'Pruebas A/B continuas',
            '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(3)': 'Reportes transparentes',
            '.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(4)': 'Recomendaciones mensuales',
            '.servicio-detalle .container > h2:nth-of-type(2)': 'Lo que obtienes: ROI, tracking y optimizacion',
            '.servicio-card.scroll-animate h3': '-30% costo por lead calificado',
            '.servicio-card.scroll-animate p:nth-of-type(1)': 'Situacion inicial: invertian $85 por lead calificado y no sabian como optimizar.',
            '.servicio-card.scroll-animate p:nth-of-type(2)': 'Nuestra estrategia: analizamos campanas, redisenamos keywords, optimizamos landing pages e implementamos tracking correcto.',
            '.servicio-card.scroll-animate p:nth-of-type(3)': 'Resultado: en 3 meses reducimos el costo a $28 por lead, aumentando la calidad. +150% en conversiones.',
            '.cta-final h2': 'Listo para aumentar tus leads?',
            '.cta-final p': 'Obtiene una auditoria gratuita de tus campanas',
            '.cta-final .btn-primary': 'Solicitar auditoria'
        }
    },
    'seo-local.html': {
        text: {
            '.hero-content h1': 'SEO Local en Miami',
            '.hero-content > p': 'Domina los resultados de busqueda en tu zona. Posicionate en el Google Local 3-Pack y atrae clientes que te buscan ahora.',
            '.hero-buttons .btn-primary': 'Auditoria gratis',
            '.hero-buttons .btn-secondary': 'Ver estrategia',
            '.hero-stats .stat:nth-child(1) p': 'Aumento promedio de trafico local',
            '.hero-stats .stat:nth-child(2) p': 'Posicion en Local Pack',
            '.hero-stats .stat:nth-child(3) p': 'Para dominar busquedas locales',
            '.servicio-detalle-text h2': 'Que es SEO Local?',
            '.servicio-detalle-text > p': 'SEO Local es una estrategia de posicionamiento digital que optimiza tu presencia online para aparecer cuando clientes potenciales buscan servicios o productos cerca de tu ubicacion.',
            '.por-que-items .por-que-item:nth-child(1) h4': 'Google Local 3-Pack',
            '.por-que-items .por-que-item:nth-child(1) p': 'Aparecer en los 3 primeros resultados locales es clave para captar clientes.',
            '.por-que-items .por-que-item:nth-child(2) h4': 'Mas llamadas',
            '.por-que-items .por-que-item:nth-child(2) p': 'Aumenta significativamente llamadas de clientes locales interesados.',
            '.por-que-items .por-que-item:nth-child(3) h4': 'Trafico local',
            '.por-que-items .por-que-item:nth-child(3) p': 'Atrae visitas fisicas a tu negocio con estrategia local especifica.',
            '.por-que-items .por-que-item:nth-child(4) h4': 'Mejor competencia',
            '.por-que-items .por-que-item:nth-child(4) p': 'Supera a tus competidores locales en visibilidad online.',
            '.proceso .section-header h2': 'Nuestra estrategia de SEO Local',
            '.proceso .section-header p': 'Enfoque completo para dominar resultados locales',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Optimizacion de GBP',
            '.servicios-grid .servicio-card:nth-child(1) > p': 'Optimizamos tu Google Business Profile para maxima visibilidad local.',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(1)': 'Descripcion completa y atractiva',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(2)': 'Fotos y videos de calidad',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(3)': 'Servicios y horarios actualizados',
            '.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(4)': 'Publicaciones y ofertas especiales',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Palabras clave locales',
            '.servicios-grid .servicio-card:nth-child(2) > p': 'Investigacion y optimizacion de keywords especificas por zona geografica.',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Links locales',
            '.servicios-grid .servicio-card:nth-child(3) > p': 'Construccion de enlaces de calidad desde directorios y sitios locales relevantes.',
            '.servicios-grid .servicio-card:nth-child(4) h3': 'Resenas y testimonios',
            '.servicios-grid .servicio-card:nth-child(4) > p': 'Estrategia activa para obtener y gestionar resenas positivas.',
            '.servicios-grid .servicio-card:nth-child(5) h3': 'Auditoria tecnica',
            '.servicios-grid .servicio-card:nth-child(5) > p': 'Analisis profundo de problemas tecnicos que afectan tu SEO local.',
            '.servicios-grid .servicio-card:nth-child(6) h3': 'Reportes mensuales',
            '.servicios-grid .servicio-card:nth-child(6) > p': 'Seguimiento detallado de resultados y optimizacion continua.',
            '.cta-final h2': 'Listo para dominar resultados locales?',
            '.cta-final p': 'Obtiene tu auditoria gratuita de SEO Local de 30 minutos',
            '.cta-final .btn-primary': 'Solicitar auditoria'
        }
    },
    'social-media.html': {
        text: {
            '.hero-content h1': 'Marketing en redes sociales',
            '.hero-content > p': 'Construimos comunidades leales alrededor de tu marca. Contenido estrategico que genera engagement, confianza y ventas.',
            '.hero-buttons .btn-primary': 'Auditoria gratis',
            '.hero-buttons .btn-secondary': 'Ver servicios',
            '.hero-stats .stat:nth-child(1) p': 'Aumento promedio de engagement',
            '.hero-stats .stat:nth-child(2) p': 'Seguidores gestionados al mes',
            '.hero-stats .stat:nth-child(3) p': 'Publicaciones creadas cada mes',
            '.servicio-detalle-text h2': 'Por que social media marketing',
            '.servicio-detalle-text > p': 'Tus clientes estan en redes sociales. Si no estas ahi, tu competencia esta capturando su atencion.',
            '.por-que-items .por-que-item:nth-child(1) h4': 'Construccion de comunidad',
            '.por-que-items .por-que-item:nth-child(1) p': 'Crea una tribu leal de seguidores que confian y compran con regularidad.',
            '.por-que-items .por-que-item:nth-child(2) h4': 'Engagement autentico',
            '.por-que-items .por-que-item:nth-child(2) p': 'Contenido que genera conversaciones reales, no solo likes.',
            '.por-que-items .por-que-item:nth-child(3) h4': 'Crecimiento medible',
            '.por-que-items .por-que-item:nth-child(3) p': 'Seguimiento de metricas reales: seguidores, engagement, clics y ventas.',
            '.por-que-items .por-que-item:nth-child(4) h4': 'Brand awareness',
            '.por-que-items .por-que-item:nth-child(4) p': 'Aumenta la visibilidad de tu marca para que todos conozcan tu negocio.',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Nuestros servicios',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Estrategia de contenido',
            '.servicios-grid .servicio-card:nth-child(1) > p': 'Calendario estrategico alineado a objetivos de negocio y audiencia.',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Community management',
            '.servicios-grid .servicio-card:nth-child(2) > p': 'Construccion de relaciones autenticas con tu audiencia en tiempo real.',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Creacion de contenido',
            '.servicios-grid .servicio-card:nth-child(3) > p': 'Produccion profesional de foto, video y diseno que captura atencion.',
            '.servicios-grid .servicio-card:nth-child(4) h3': 'Publicacion programada',
            '.servicios-grid .servicio-card:nth-child(4) > p': 'Consistencia y planificacion para maximizar alcance en horarios optimos.',
            '.servicios-grid .servicio-card:nth-child(5) h3': 'Influencer marketing',
            '.servicios-grid .servicio-card:nth-child(5) > p': 'Colaboraciones estrategicas con influencers para amplificar alcance.',
            '.servicios-grid .servicio-card:nth-child(6) h3': 'Analisis y reportes',
            '.servicios-grid .servicio-card:nth-child(6) > p': 'Metricas claras y recomendaciones con datos para optimizar resultados.',
            '.servicio-detalle .container > h2:nth-of-type(2)': 'Plataformas que gestionamos',
            '.cta-final h2': 'Listo para crecer en social media?',
            '.cta-final p': 'Obtiene una estrategia personalizada de redes sociales',
            '.cta-final .btn-primary': 'Solicitar estrategia'
        }
    },
    'web-design.html': {
        text: {
            '.hero-content h1': 'Diseno web que convierte',
            '.hero-content > p': 'Sitios web modernos, rapidos y optimizados para conversion. Tu mejor vendedor trabajando 24/7.',
            '.hero-buttons .btn-primary': 'Auditoria gratis',
            '.hero-buttons .btn-secondary': 'Ver proceso',
            '.hero-stats .stat:nth-child(1) p': 'Tiempo promedio de carga',
            '.hero-stats .stat:nth-child(2) p': 'Puntaje de rendimiento en Google',
            '.hero-stats .stat:nth-child(3) p': 'Aumento en tasa de conversion',
            '.servicio-detalle-text h2': 'Por que necesitas un sitio web profesional?',
            '.servicio-detalle-text > p': 'Tu sitio web es tu tarjeta de presentacion digital. Ahi tus clientes potenciales te conocen, revisan servicios y deciden si confiar.',
            '.por-que-items .por-que-item:nth-child(1) h4': 'Mobile first',
            '.por-que-items .por-que-item:nth-child(1) p': '70% de tus visitas llegan desde movil. Tu sitio debe verse perfecto en cualquier dispositivo.',
            '.por-que-items .por-que-item:nth-child(2) h4': 'Velocidad extrema',
            '.por-que-items .por-que-item:nth-child(2) p': 'Cada segundo de carga te hace perder clientes. Optimizamos para menos de 2 segundos.',
            '.por-que-items .por-que-item:nth-child(3) h4': 'SEO integrado',
            '.por-que-items .por-que-item:nth-child(3) p': 'Optimizado desde el codigo para posicionar en Google. Diseno + SEO = resultados.',
            '.por-que-items .por-que-item:nth-child(4) h4': 'Optimizado para conversion',
            '.por-que-items .por-que-item:nth-child(4) p': 'CTAs estrategicos, formularios simples y flujo claro. Disenado para vender.',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Nuestro proceso de diseno',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Estrategia',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Diseno',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Desarrollo',
            '.servicios-grid .servicio-card:nth-child(4) h3': 'Pruebas',
            '.servicios-grid .servicio-card:nth-child(5) h3': 'Lanzamiento',
            '.servicios-grid .servicio-card:nth-child(6) h3': 'Mantenimiento',
            '.servicio-detalle .container > h2:nth-of-type(2)': 'Tecnologias que usamos',
            '.servicios-grid .servicio-card:nth-child(7) h3': 'HTML5 semantico',
            '.servicios-grid .servicio-card:nth-child(8) h3': 'CSS3 responsive',
            '.servicios-grid .servicio-card:nth-child(9) h3': 'JavaScript moderno',
            '.servicios-grid .servicio-card:nth-child(10) h3': 'Backend PHP/Node',
            '.servicios-grid .servicio-card:nth-child(11) h3': 'Base de datos MySQL',
            '.servicios-grid .servicio-card:nth-child(12) h3': 'SSL HTTPS',
            '.servicios-grid .servicio-card:nth-child(13) h3': 'CDN global',
            '.servicios-grid .servicio-card:nth-child(14) h3': 'Analitica integrada',
            '.cta-final h2': 'Listo para un sitio web que venda?',
            '.cta-final p': 'Obtiene una consulta gratuita de diseno web',
            '.cta-final .btn-primary': 'Solicitar consulta'
        }
    },
    'ia-chat-24-7.html': {
        text: {
            '.hero-content h1': 'Chat IA 24/7',
            '.hero-content > p': 'Chatbot inteligente que califica leads, agenda citas y responde preguntas. Nunca pierdas clientes por estar fuera de horario.',
            '.hero-buttons .btn-primary': 'Solicitar demo',
            '.hero-buttons .btn-secondary': 'Ver beneficios',
            '.hero-stats .stat:nth-child(1) p': 'Aumento en conversion de leads',
            '.hero-stats .stat:nth-child(2) p': 'Reduccion de leads perdidos',
            '.hero-stats .stat:nth-child(3) p': 'Disponibilidad sin interrupciones',
            '.servicio-detalle-text h2:nth-of-type(1)': 'El problema',
            '.servicio-detalle-text > p': 'Los clientes potenciales buscan tus servicios a cualquier hora. Si no respondes, se van con la competencia.',
            '.servicio-detalle-text h2:nth-of-type(2)': 'La solucion: chat IA inteligente',
            '.por-que-items .por-que-item:nth-child(1) h4': 'IA conversacional',
            '.por-que-items .por-que-item:nth-child(2) h4': 'Calificacion automatica',
            '.por-que-items .por-que-item:nth-child(3) h4': 'Agenda de citas',
            '.por-que-items .por-que-item:nth-child(4) h4': 'Disponible 24/7',
            '.por-que-items .por-que-item:nth-child(5) h4': 'Multilenguaje',
            '.por-que-items .por-que-item:nth-child(6) h4': 'Integracion con CRM',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Funcionalidades clave',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Respuestas personalizadas',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Calificacion de leads',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Agenda automatica',
            '.servicio-detalle .container > h2:nth-of-type(2)': 'Resultados medibles',
            '.cta-final h2': 'Listo para no perder ningun lead?',
            '.cta-final p': 'Solicita una demo gratuita del Chat IA',
            '.cta-final .btn-primary': 'Solicitar demo'
        }
    },
    'reputacion-online.html': {
        text: {
            '.hero-content h1': 'Reputacion online que protege y convierte',
            '.hero-content > p': 'Monitorea, responde y posiciona contenido positivo antes de que una critica afecte tus ventas.',
            '.hero-buttons .btn-primary': 'Auditoria de reputacion',
            '.hero-buttons .btn-secondary': 'Ver servicios',
            '.hero-stats .stat:nth-child(1) p': 'Calificacion promedio gestionada',
            '.hero-stats .stat:nth-child(2) p': 'Crisis atendidas sin perder clientes',
            '.hero-stats .stat:nth-child(3) p': 'Menciones monitoreadas cada mes',
            '#poder-reputacion .servicio-detalle-text h2': 'El poder de la reputacion online',
            '#poder-reputacion .servicio-detalle-text > p': 'El 93% de los clientes potenciales confia en lo que lee sobre un negocio en internet.',
            '.servicios .section-header h2': 'Servicios de reputacion online',
            '.servicios .section-header p': 'Un stack completo para monitorear, mejorar y proteger lo que se dice de tu marca.',
            '.servicios-grid .servicio-card:nth-child(1) h3': 'Monitoreo 24/7',
            '.servicios-grid .servicio-card:nth-child(2) h3': 'Respuesta a resenas',
            '.servicios-grid .servicio-card:nth-child(3) h3': 'Generacion de resenas',
            '.servicios-grid .servicio-card:nth-child(4) h3': 'Posicionamiento positivo',
            '.servicios-grid .servicio-card:nth-child(5) h3': 'Gestion de crisis',
            '.servicios-grid .servicio-card:nth-child(6) h3': 'Reportes y analitica',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Plataformas monitoreadas',
            '.servicio-detalle .container > h2:nth-of-type(2)': 'Resultados medibles',
            '.cta-final h2': 'Protege tu reputacion online hoy',
            '.cta-final p': 'Obtiene un analisis gratuito de tu reputacion actual',
            '.cta-final .btn-primary': 'Solicitar analisis'
        }
    },
    'casos-de-exito.html': {
        text: {
            '.hero-content h1': 'Casos de exito',
            '.hero-content > p': 'Historias reales de como ayudamos a negocios como el tuyo a crecer de forma exponencial.',
            '.servicio-detalle .container > h2:nth-of-type(1)': 'Resultados reales para clientes reales',
            '.servicio-detalle .container > p:nth-of-type(1)': 'No solo hablamos de marketing, hacemos que funcione. Mira como ayudamos a empresas como la tuya a cumplir objetivos.',
            '.cta-final h2': 'Cuentanos sobre tu negocio',
            '.cta-final p': 'Haremos una auditoria gratuita y te mostraremos lo que es posible',
            '.cta-final .btn-primary': 'Agendar auditoria gratis'
        },
        attrs: {
            '#modalImg||alt': 'Imagen ampliada'
        }
    },
    'privacidad.html': {
        text: {
            '.hero-content h1': 'Politica de privacidad',
            '.hero-content > p': 'Como protegemos tus datos y tu privacidad',
            '.servicio-detalle .container p[style*="font-style: italic"]': 'Ultima actualizacion: enero 2025'
        }
    },
    'terminos.html': {
        text: {
            '.hero-content h1': 'Terminos y condiciones',
            '.hero-content > p': 'Condiciones de uso de nuestro sitio web y servicios',
            '.servicio-detalle .container p[style*="font-style: italic"]': 'Ultima actualizacion: enero 2025'
        }
    },
    'thank-you.html': {
        text: {
            '.thank-you-content h1': 'Mensaje enviado!',
            '.thank-you-content > p': 'Gracias por contactarnos. Hemos recibido tu solicitud de auditoria y responderemos en menos de 24 horas.',
            '.thank-you-content .btn-primary': 'Volver al inicio',
            '.thank-you-content .btn-secondary': 'WhatsApp'
        }
    },
    'gracias.html': {
        text: {
            '.thank-you-content h1': 'Mensaje enviado!',
            '.thank-you-content > p': 'Gracias por contactarnos. Hemos recibido tu solicitud de auditoria y responderemos en menos de 24 horas.',
            '.thank-you-content .btn-primary': 'Volver al inicio',
            '.thank-you-content .btn-secondary': 'WhatsApp'
        }
    }
};

const PAGE_OVERRIDE_SNAPSHOT = {};

function ensurePageSnapshot(pageKey) {
    if (!PAGE_OVERRIDE_SNAPSHOT[pageKey]) {
        PAGE_OVERRIDE_SNAPSHOT[pageKey] = {
            text: {},
            attrs: {}
        };
    }

    return PAGE_OVERRIDE_SNAPSHOT[pageKey];
}

function applyPageEsOverrides(pageKey, lang) {
    const config = PAGE_ES_OVERRIDES[pageKey];
    if (!config) return;

    const snapshot = ensurePageSnapshot(pageKey);

    if (lang === 'es') {
        Object.entries(config.text || {}).forEach(([selector, value]) => {
            const node = document.querySelector(selector);
            if (!node) return;

            if (!Object.prototype.hasOwnProperty.call(snapshot.text, selector)) {
                snapshot.text[selector] = node.textContent;
            }

            setNodeTextPreservingIcon(node, value);
        });

        Object.entries(config.attrs || {}).forEach(([descriptor, value]) => {
            const [selector, attribute] = descriptor.split('||');
            if (!selector || !attribute) return;

            const node = document.querySelector(selector);
            if (!node) return;

            if (!snapshot.attrs[descriptor]) {
                snapshot.attrs[descriptor] = node.getAttribute(attribute) || '';
            }

            node.setAttribute(attribute, value);
        });

        return;
    }

    Object.entries(snapshot.text).forEach(([selector, original]) => {
        const node = document.querySelector(selector);
        if (!node) return;
        setNodeTextPreservingIcon(node, original);
    });

    Object.entries(snapshot.attrs).forEach(([descriptor, original]) => {
        const [selector, attribute] = descriptor.split('||');
        if (!selector || !attribute) return;

        const node = document.querySelector(selector);
        if (!node) return;
        node.setAttribute(attribute, original);
    });
}

const GLOBAL_TEXT_REPLACEMENTS_ES = {
    'Immediate Results': 'Resultados inmediatos',
    'See conversions in days, not months. Qualified traffic from day one.': 'Ve conversiones en dias, no en meses. Trafico calificado desde el primer dia.',
    'Measurable ROI': 'ROI medible',
    'Every dollar invested is trackable. Know exactly how much you spend and how much you earn.': 'Cada dolar invertido es rastreable. Sabes exactamente cuanto gastas y cuanto ganas.',
    'Targeted Audience': 'Audiencia segmentada',
    'Reach exactly who needs your service. Age, location, interests, behavior.': 'Llega exactamente a quien necesita tu servicio. Edad, ubicacion, intereses, comportamiento.',
    'Continuous Optimization': 'Optimizacion continua',
    'Daily A/B testing. We improve campaigns based on real data, not intuition.': 'Pruebas A/B diarias. Mejoramos campanas con datos reales, no intuicion.',
    'PPC Campaign Setup': 'Configuracion de campanas PPC',
    'Appear in first place when someone searches for your service. Capture high purchase intent.': 'Aparece en primeros lugares cuando alguien busca tu servicio. Captura alta intencion de compra.',
    'Expert keyword research': 'Investigacion experta de palabras clave',
    'Optimized ad copy': 'Copys publicitarios optimizados',
    'Conversion landing pages': 'Landing pages para conversion',
    'Automatic bid optimization': 'Optimizacion automatica de pujas',
    'Audience Targeting & Optimization': 'Segmentacion y optimizacion de audiencias',
    "Visual retargeting. Keep your brand in front of those who visited your site but didn't convert.": 'Remarketing visual para mantener tu marca frente a quienes visitaron tu web y no convirtieron.',
    'Attractive creative design': 'Creativos atractivos',
    'Advanced audience targeting': 'Segmentacion avanzada de audiencias',
    'Strategic retargeting': 'Remarketing estrategico',
    'Video and carousel ads': 'Anuncios en video y carrusel',
    'Conversion Tracking & Reporting': 'Tracking de conversiones y reportes',
    'Detailed reports every week. Continuous improvements based on real metrics.': 'Reportes detallados cada semana. Mejoras continuas basadas en metricas reales.',
    'Real CPA tracking': 'Seguimiento real de CPA',
    'Continuous A/B testing': 'Pruebas A/B continuas',
    'Transparent reports': 'Reportes transparentes',
    'Monthly recommendations': 'Recomendaciones mensuales',
    '-30% Cost per Qualified Lead': '-30% costo por lead calificado',
    'Initial Situation:': 'Situacion inicial:',
    'Our Strategy:': 'Nuestra estrategia:',
    'Result:': 'Resultado:',
    "They were spending $85 per qualified lead and didn't know how to optimize.": 'Invertian $85 por lead calificado y no sabian como optimizar.',
    'We analyzed their campaigns, redesigned keywords, optimized landing pages, and implemented proper tracking.': 'Analizamos sus campanas, redisenamos keywords, optimizamos landing pages e implementamos tracking correcto.',
    'In 3 months we reduced cost to $28 per lead, INCREASING quality. +150% in conversions.': 'En 3 meses bajamos el costo a $28 por lead, aumentando la calidad. +150% en conversiones.',
    'What is Local SEO?': 'Que es SEO Local?',
    "Local SEO is a digital positioning strategy that optimizes your online presence so you appear in search results when potential customers search for services or products near your location. It's especially important for businesses with a physical location.": 'SEO Local es una estrategia de posicionamiento digital que optimiza tu presencia online para aparecer cuando clientes potenciales buscan servicios o productos cerca de tu ubicacion. Es especialmente importante para negocios con ubicacion fisica.',
    'Appearing in the top 3 local results is crucial for capturing customers.': 'Aparecer en los 3 primeros resultados locales es clave para captar clientes.',
    'More Calls': 'Mas llamadas',
    'Significantly increases calls from interested local customers.': 'Aumenta significativamente llamadas de clientes locales interesados.',
    'Local Traffic': 'Trafico local',
    'Attract physical visitors to your business with specific local strategy.': 'Atrae visitas fisicas a tu negocio con estrategia local especifica.',
    'Better Competition': 'Mejor competencia',
    'Outperform your local competitors in online visibility.': 'Supera a tus competidores locales en visibilidad online.',
    'Our Local SEO Strategy': 'Nuestra estrategia de SEO Local',
    'Complete approach to dominate local results': 'Enfoque completo para dominar resultados locales',
    'GMB Optimization': 'Optimizacion de GBP',
    'We completely optimize your Google Business Profile for maximum local visibility.': 'Optimizamos tu Google Business Profile para maxima visibilidad local.',
    'Complete and attractive description': 'Descripcion completa y atractiva',
    'Quality photos and videos': 'Fotos y videos de calidad',
    'Updated services and hours': 'Servicios y horarios actualizados',
    'Posts and special offers': 'Publicaciones y ofertas especiales',
    'Local Keywords': 'Palabras clave locales',
    'Research and optimization of keywords specific to your geographic area.': 'Investigacion y optimizacion de keywords especificas por zona geografica.',
    'Local competitive analysis': 'Analisis competitivo local',
    'High-potential keywords': 'Keywords de alto potencial',
    'Local search intent': 'Intencion de busqueda local',
    'Ranking monitoring': 'Monitoreo de posiciones',
    'Local Links': 'Links locales',
    'Building quality links from local directories and relevant sites.': 'Construccion de enlaces de calidad desde directorios y sitios locales relevantes.',
    'Business directories': 'Directorios de negocio',
    'Local associations': 'Asociaciones locales',
    'Relevant partnerships': 'Alianzas relevantes',
    'NAP consistency': 'Consistencia NAP',
    'Reviews and Testimonials': 'Resenas y testimonios',
    'Active strategy to obtain and manage positive reviews.': 'Estrategia activa para obtener y gestionar resenas positivas.',
    'Review generation': 'Generacion de resenas',
    'Comment response': 'Respuesta a comentarios',
    'Reputation management': 'Gestion de reputacion',
    'Rating improvements': 'Mejora de calificaciones',
    'Technical Audit': 'Auditoria tecnica',
    'Deep analysis of technical issues affecting your local SEO.': 'Analisis profundo de problemas tecnicos que afectan tu SEO local.',
    'Loading speed': 'Velocidad de carga',
    'Mobile responsiveness': 'Responsive en moviles',
    'Crawlable errors': 'Errores rastreables',
    'Schema markup': 'Marcado schema',
    'Monthly Reports': 'Reportes mensuales',
    'Detailed tracking of results and continuous optimization.': 'Seguimiento detallado de resultados y optimizacion continua.',
    'Rankings per keyword': 'Posiciones por keyword',
    'Organic traffic': 'Trafico organico',
    'Competitor analysis': 'Analisis de competidores',
    'Measurable ROI': 'ROI medible',
    'Your customers are on social media. They spend 3+ hours daily scrolling. If you are not there, your competition is capturing their attention.': 'Tus clientes estan en redes sociales. Pasan mas de 3 horas al dia en scroll. Si no estas ahi, tu competencia esta capturando su atencion.',
    'Build Community': 'Construccion de comunidad',
    'Create a loyal tribe of followers who trust you and buy regularly.': 'Crea una tribu leal de seguidores que confian y compran con regularidad.',
    'Authentic Engagement': 'Engagement autentico',
    'Content that generates real conversations. Not just "likes" - genuine connections.': 'Contenido que genera conversaciones reales. No solo likes, conexiones genuinas.',
    'Measurable Growth': 'Crecimiento medible',
    'Real metrics tracking: followers, engagement rate, clicks, sales.': 'Seguimiento de metricas reales: seguidores, tasa de engagement, clics y ventas.',
    'Increase your brand visibility. Everyone will know your business.': 'Aumenta la visibilidad de tu marca. Todos conoceran tu negocio.',
    'Content Strategy': 'Estrategia de contenido',
    'Strategic calendar aligned with your business objectives and audience.': 'Calendario estrategico alineado con tus objetivos de negocio y audiencia.',
    'Monthly content calendar': 'Calendario mensual de contenidos',
    'Strategic topics aligned with objectives': 'Temas estrategicos alineados a objetivos',
    'Content mix: educational, inspirational, promotional': 'Mix de contenido: educativo, inspiracional, promocional',
    'Hashtag research and trending topics': 'Investigacion de hashtags y tendencias',
    'Community Management': 'Community management',
    'Building authentic relationships with your audience in real-time.': 'Construccion de relaciones autenticas con tu audiencia en tiempo real.',
    'Quick response to comments': 'Respuesta rapida a comentarios',
    'Conversation management': 'Gestion de conversaciones',
    'Professional moderation': 'Moderacion profesional',
    'Building authentic relationships': 'Construccion de relaciones autenticas',
    'Content Creation': 'Creacion de contenido',
    'Professional production of photography, video, and design that captures attention.': 'Produccion profesional de foto, video y diseno que captura atencion.',
    'Professional photography and videography': 'Fotografia y video profesional',
    'Attractive graphic design': 'Diseno grafico atractivo',
    'Persuasive copywriting': 'Copywriting persuasivo',
    'Professional video editing': 'Edicion profesional de video',
    'Scheduled Publishing': 'Publicacion programada',
    'Consistency and planning to maximize reach at optimal times.': 'Consistencia y planificacion para maximizar alcance en horarios optimos.',
    'Organized calendar': 'Calendario organizado',
    'Publishing at optimal times': 'Publicacion en horarios optimos',
    'Daily consistency': 'Consistencia diaria',
    'Multi-platform synchronization': 'Sincronizacion multiplataforma',
    'Influencer Marketing': 'Influencer marketing',
    'Strategic collaborations with influencers to amplify your reach.': 'Colaboraciones estrategicas con influencers para amplificar tu alcance.',
    'Identification of relevant influencers': 'Identificacion de influencers relevantes',
    'Negotiation and partnerships': 'Negociacion y alianzas',
    'Campaign management': 'Gestion de campanas',
    'Influencer ROI measurement': 'Medicion de ROI de influencers',
    'Analysis and Reports': 'Analisis y reportes',
    'Clear metrics and data-driven recommendations to optimize results.': 'Metricas claras y recomendaciones basadas en datos para optimizar resultados.',
    'Detailed monthly reports': 'Reportes mensuales detallados',
    'Growth metrics': 'Metricas de crecimiento',
    'Improvement recommendations': 'Recomendaciones de mejora',
    'Platforms We Manage': 'Plataformas que gestionamos',
    'Posts, events, groups': 'Publicaciones, eventos, grupos',
    'Feed, Stories, Reels': 'Feed, stories, reels',
    'Viral videos and trends': 'Videos virales y tendencias',
    'B2B and thought leadership': 'B2B y liderazgo de pensamiento',
    'Long-form videos': 'Videos de formato largo',
    'Conversations and news': 'Conversaciones y noticias',
    'Your website is your digital business card. It is where your potential customers go to learn about you, review your services, and decide if they trust you enough to make a call.': 'Tu sitio web es tu tarjeta de presentacion digital. Ahi tus clientes potenciales te conocen, revisan tus servicios y deciden si confiar lo suficiente para llamarte.',
    'Mobile First': 'Mobile first',
    '70% of your visitors come from mobile. Your site must look perfect on any device.': '70% de tus visitas llegan desde movil. Tu sitio debe verse perfecto en cualquier dispositivo.',
    'Extreme Speed': 'Velocidad extrema',
    'Every second it takes to load, you lose customers. We optimize for < 2 seconds.': 'Cada segundo de carga te hace perder clientes. Optimizamos para menos de 2 segundos.',
    'Integrated SEO': 'SEO integrado',
    'Optimized from the code for Google ranking. Design + SEO = Results.': 'Optimizado desde el codigo para posicionar en Google. Diseno + SEO = resultados.',
    'Optimized for Conversions': 'Optimizado para conversion',
    'Strategic CTAs, simple forms, and clear user flow. Designed to sell.': 'CTAs estrategicos, formularios simples y flujo claro. Disenado para vender.',
    'Our Design Process': 'Nuestro proceso de diseno',
    'Strategy': 'Estrategia',
    'We understand your business, competition, and objectives. We design the site structure for maximum conversion.': 'Entendemos tu negocio, competencia y objetivos. Disenamos la estructura del sitio para maxima conversion.',
    'Competitive analysis': 'Analisis competitivo',
    'User experience mapping': 'Mapa de experiencia de usuario',
    'Wireframing': 'Wireframing',
    'Technical roadmap': 'Roadmap tecnico',
    'Design': 'Diseno',
    'We create beautiful visual mockups. Approval in 2-3 iterations. Modern, professional, unique.': 'Creamos mockups visuales de alto nivel. Aprobacion en 2-3 iteraciones. Moderno, profesional y unico.',
    'High-fidelity mockups': 'Mockups de alta fidelidad',
    'Responsive design': 'Diseno responsive',
    'Style guide': 'Guia de estilo',
    'Approved iterations': 'Iteraciones aprobadas',
    'Development': 'Desarrollo',
    'Clean, modern, responsive code. Optimized speed. 100% integrated SEO from the start.': 'Codigo limpio, moderno y responsive. Velocidad optimizada. SEO integrado desde el inicio.',
    'Semantic HTML5': 'HTML5 semantico',
    'Responsive CSS3': 'CSS3 responsive',
    'Modern JavaScript': 'JavaScript moderno',
    'Optimized performance': 'Rendimiento optimizado',
    'Testing': 'Pruebas',
    '100+ tests. Functionality, speed, mobile, accessibility. Everything perfect before launch.': 'Mas de 100 pruebas. Funcionalidad, velocidad, movil y accesibilidad. Todo perfecto antes del lanzamiento.',
    'Multi-browser testing': 'Pruebas multi navegador',
    'Responsive testing': 'Pruebas responsive',
    'Performance testing': 'Pruebas de rendimiento',
    'SEO validation': 'Validacion SEO',
    'Launch': 'Lanzamiento',
    'Server deployment. SSL configured. Automatic backups. Continuous support included.': 'Despliegue en servidor. SSL configurado. Backups automaticos. Soporte continuo incluido.',
    'Server deployment': 'Despliegue en servidor',
    'SSL HTTPS configured': 'SSL HTTPS configurado',
    'Automatic backups': 'Backups automaticos',
    'Initial monitoring': 'Monitoreo inicial',
    'Maintenance': 'Mantenimiento',
    'Monthly updates, performance monitoring, analytics-based improvements.': 'Actualizaciones mensuales, monitoreo de rendimiento y mejoras por analitica.',
    'Monthly updates': 'Actualizaciones mensuales',
    '24/7 monitoring': 'Monitoreo 24/7',
    'Analytics reporting': 'Reportes de analitica',
    'Technical support': 'Soporte tecnico',
    'Technologies We Use': 'Tecnologias que usamos',
    'Modern and accessible structure.': 'Estructura moderna y accesible.',
    'Semantic code': 'Codigo semantico',
    'WCAG accessibility': 'Accesibilidad WCAG',
    'Optimized meta tags': 'Meta tags optimizados',
    'Mobile-first and flexible design.': 'Diseno mobile first y flexible.',
    'Mobile first': 'Mobile first',
    'Flexbox and Grid': 'Flexbox y Grid',
    'Smooth animations': 'Animaciones fluidas',
    'Full compatibility': 'Compatibilidad total',
    'Interactivity without excess weight.': 'Interactividad sin peso excesivo.',
    'Modern ES6+': 'ES6+ moderno',
    'No unnecessary frameworks': 'Sin frameworks innecesarios',
    'Cross-browser compatible': 'Compatible con todos los navegadores',
    'PHP/Node Backend': 'Backend PHP/Node',
    'Scalable and secure.': 'Escalable y seguro.',
    'REST APIs': 'APIs REST',
    'Data validation': 'Validacion de datos',
    'Secure authentication': 'Autenticacion segura',
    'Scalability': 'Escalabilidad',
    'MySQL Database': 'Base de datos MySQL',
    'Secure data management.': 'Gestion segura de datos.',
    'Query optimization': 'Optimizacion de consultas',
    'Data encryption': 'Cifrado de datos',
    'Disaster recovery': 'Recuperacion ante desastres',
    'SSL HTTPS': 'SSL HTTPS',
    'Guaranteed security.': 'Seguridad garantizada.',
    'Valid SSL certificate': 'Certificado SSL valido',
    'End-to-end encryption': 'Cifrado de extremo a extremo',
    'Modern TLS 1.3': 'TLS 1.3 moderno',
    'Automatic renewal': 'Renovacion automatica',
    'Global CDN': 'CDN global',
    'Worldwide speed.': 'Velocidad global.',
    'Global servers': 'Servidores globales',
    'Intelligent caching': 'Cache inteligente',
    'Automatic compression': 'Compresion automatica',
    'DDoS protection': 'Proteccion DDoS',
    'Integrated Analytics': 'Analitica integrada',
    'Data tracking.': 'Seguimiento de datos.',
    'Google Analytics': 'Google Analytics',
    'User heatmaps': 'Mapas de calor de usuarios',
    'Conversion tracking': 'Tracking de conversiones',
    'Detailed reports': 'Reportes detallados',
    'Conversational AI': 'IA conversacional',
    "Answers questions naturally. Visitors believe they are talking to a person, not a bot.": 'Responde preguntas de forma natural. Los visitantes sienten que hablan con una persona, no con un bot.',
    'Automatic Qualification': 'Calificacion automatica',
    'Identifies qualified leads. Sends only real customers to your sales team.': 'Identifica leads calificados. Envia solo clientes reales a tu equipo comercial.',
    'Appointment Scheduling': 'Agenda de citas',
    'Visitors can schedule appointments directly. Automatic synchronization with your calendar.': 'Los visitantes pueden agendar citas directo. Sincronizacion automatica con tu calendario.',
    'Available 24/7': 'Disponible 24/7',
    'Never sleeps. Responds to leads even at 3 AM. Convert them while competition sleeps.': 'Nunca duerme. Responde leads incluso a las 3 AM. Convierte mientras la competencia duerme.',
    'Multilingual': 'Multilenguaje',
    'Spanish, English, Portuguese. Your chat understands your customers in their native language.': 'Espanol, ingles, portugues. Tu chat entiende a tus clientes en su idioma nativo.',
    'CRM Integration': 'Integracion con CRM',
    'Connects with your CRM. All conversation data available for your team.': 'Se conecta con tu CRM. Todos los datos de conversacion disponibles para tu equipo.',
    'Key Features': 'Funcionalidades clave',
    'Personalized Responses': 'Respuestas personalizadas',
    'Trained with your business information.': 'Entrenado con informacion de tu negocio.',
    'Trained with your information': 'Entrenado con tu informacion',
    'Knows your services': 'Conoce tus servicios',
    'Prices and promotions included': 'Precios y promociones incluidos',
    'Answers frequently asked questions': 'Responde preguntas frecuentes',
    'Lead Qualification': 'Calificacion de leads',
    'Identifies the best prospects automatically.': 'Identifica automaticamente los mejores prospectos.',
    'Qualification questions': 'Preguntas de calificacion',
    'Budget and timeline': 'Presupuesto y tiempos',
    'Specific need': 'Necesidad especifica',
    'Quality score': 'Puntaje de calidad',
    'Automatic Scheduling': 'Agenda automatica',
    'Integration with your calendar without complications.': 'Integracion con tu calendario sin complicaciones.',
    'Linked with your calendar': 'Conectado con tu calendario',
    'Real-time availability': 'Disponibilidad en tiempo real',
    'Automatic reminders': 'Recordatorios automaticos',
    'Email/SMS confirmation': 'Confirmacion por email/SMS',
    'Measurable Results': 'Resultados medibles',
    'Customer availability': 'Disponibilidad para clientes',
    'The Power of Online Reputation': 'El poder de la reputacion online',
    '93% of potential customers trust what they read about a business on the internet. A solid reputation converts curious visitors into customers; a negative one diverts sales in seconds.': 'El 93% de clientes potenciales confia en lo que lee de un negocio en internet. Una reputacion solida convierte curiosos en clientes; una negativa desvia ventas en segundos.',
    'Proactive prevention': 'Prevencion proactiva',
    'Real-time monitoring to detect negative mentions before they escalate.': 'Monitoreo en tiempo real para detectar menciones negativas antes de que escalen.',
    'Positive positioning': 'Posicionamiento positivo',
    'Optimized content that drives favorable reviews on Google and social media.': 'Contenido optimizado que impulsa opiniones favorables en Google y redes sociales.',
    'Human and fast response': 'Respuesta humana y rapida',
    'Empathetic scripts approved with you to respond to criticism without losing trust.': 'Guiones empaticos validados contigo para responder criticas sin perder confianza.',
    'A complete stack to monitor, improve, and shield what is said about your brand.': 'Un stack completo para monitorear, mejorar y proteger lo que se dice de tu marca.',
    '24/7 Monitoring': 'Monitoreo 24/7',
    'Smart alerts that prioritize critical mentions and response opportunities.': 'Alertas inteligentes que priorizan menciones criticas y oportunidades de respuesta.',
    'Real-time mention alerts': 'Alertas de menciones en tiempo real',
    'Google, social media, and blog monitoring': 'Monitoreo de Google, redes sociales y blogs',
    'Sentiment analysis': 'Analisis de sentimiento',
    'Reputation crisis detection': 'Deteccion de crisis reputacional',
    'Review Response': 'Respuesta a resenas',
    'Clear protocols to respond with empathy and protect your rating.': 'Protocolos claros para responder con empatia y proteger tu calificacion.',
    'Professional responses to criticisms': 'Respuestas profesionales a criticas',
    'Google Business Profile management': 'Gestion de Google Business Profile',
    'Responses on Trustpilot and TripAdvisor': 'Respuestas en Trustpilot y TripAdvisor',
    'Controversy escalation': 'Escalamiento de controversias',
    'Review Generation': 'Generacion de resenas',
    'Automate invitations and achieve a constant flow of verified reviews.': 'Automatiza invitaciones y logra un flujo constante de resenas verificadas.',
    'Strategy for requesting reviews': 'Estrategia para solicitar resenas',
    'Invitation automation': 'Automatizacion de invitaciones',
    'Increase rating and review volume': 'Aumenta calificacion y volumen de resenas',
    'Progress tracking': 'Seguimiento de progreso',
    'Positive Positioning': 'Posicionamiento positivo',
    'Creation and SEO of assets that push positive results to top positions.': 'Creacion y SEO de activos que empujan resultados positivos a primeras posiciones.',
    'Positive content about the brand': 'Contenido positivo sobre la marca',
    'Position in top Google rankings': 'Posicion en primeras posiciones de Google',
    'Reduce visibility of negative reviews': 'Reducir visibilidad de resenas negativas',
    'Directory profile management': 'Gestion de perfiles en directorios',
    'Crisis Management': 'Gestion de crisis',
    'Contingency plans to respond quickly and clearly when it matters most.': 'Planes de contingencia para responder rapido y con claridad cuando mas importa.',
    'Crisis response plan': 'Plan de respuesta a crisis',
    'Social media crisis communication': 'Comunicacion de crisis en redes sociales',
    'Sensitive situation handling': 'Manejo de situaciones sensibles',
    'Post-crisis reputation recovery': 'Recuperacion reputacional post-crisis',
    'Reports and Analytics': 'Reportes y analitica',
    'Clear metrics and comparisons to make fast decisions with data.': 'Metricas claras y comparativos para tomar decisiones rapidas con datos.',
    'Real-time dashboard': 'Dashboard en tiempo real',
    'Reputation trend analysis': 'Analisis de tendencias de reputacion',
    'Competitor comparison': 'Comparativo con competidores',
    'Monitored Platforms': 'Plataformas monitoreadas',
    'Searches and Google My Business': 'Busquedas y Google My Business',
    'Reviews and ratings': 'Resenas y calificaciones',
    'Local reviews': 'Resenas locales',
    'User opinions': 'Opiniones de usuarios',
    'For hotels and tourism': 'Para hoteles y turismo',
    'Mentions on all platforms': 'Menciones en todas las plataformas',
    'Average increase in rating': 'Aumento promedio de calificacion',
    'Reduction in negative searches': 'Reduccion de busquedas negativas',
    'Increase in review volume': 'Aumento en volumen de resenas',
    'Our Mission': 'Nuestra mision',
    "Help Latin American businesses master digital marketing. We don't believe in generic solutions. Every business is unique, and every strategy should be too.": 'Ayudar a negocios latinos a dominar el marketing digital. No creemos en soluciones genericas. Cada negocio es unico y cada estrategia tambien.',
    'Our Values': 'Nuestros valores',
    'Results Focus': 'Enfoque en resultados',
    "We don't measure success in pretty reports. We measure in conversions, sales and real business growth.": 'No medimos exito en reportes bonitos. Lo medimos en conversiones, ventas y crecimiento real del negocio.',
    'Transparency': 'Transparencia',
    'We explain what we do, why we do it, and how it impacts your business. No unnecessary jargon.': 'Explicamos que hacemos, por que lo hacemos y como impacta tu negocio. Sin tecnicismos innecesarios.',
    'Innovation': 'Innovacion',
    'Digital marketing is constantly evolving. We learn, adapt, and bring the best to your strategy.': 'El marketing digital evoluciona constantemente. Aprendemos, nos adaptamos y llevamos lo mejor a tu estrategia.',
    'Passion': 'Pasion',
    "We love what we do. Your success is our success. We don't work with clients, we work with partners.": 'Amamos lo que hacemos. Tu exito es nuestro exito. No trabajamos con clientes, trabajamos con socios.',
    'Why Choose Crescendo': 'Por que elegir Crescendo',
    'Proven Experience': 'Experiencia comprobada',
    '150+ satisfied clients. 1000+ successful campaigns. Over 50 combined years of digital marketing experience.': '150+ clientes satisfechos. 1000+ campanas exitosas. Mas de 50 anos combinados de experiencia en marketing digital.',
    'Documented success stories': 'Casos de exito documentados',
    'Average ROI 300%+': 'ROI promedio 300%+',
    'Clients across Latin America': 'Clientes en toda Latinoamerica',
    'Google and Meta certifications': 'Certificaciones de Google y Meta',
    'Proven Methodology': 'Metodologia probada',
    'We do not improvise. Every strategy follows our 5-step framework: Audit -> Strategy -> Execution -> Optimization -> Scaling.': 'No improvisamos. Cada estrategia sigue nuestro framework de 5 pasos: Auditoria -> Estrategia -> Ejecucion -> Optimizacion -> Escalamiento.',
    'Tested framework': 'Framework probado',
    'Documented processes': 'Procesos documentados',
    'Continuous improvement': 'Mejora continua',
    'Proven scalability': 'Escalabilidad probada',
    'ROI Focus': 'Enfoque en ROI',
    'Every dollar invested must generate return. We measure, optimize and report with total transparency.': 'Cada dolar invertido debe generar retorno. Medimos, optimizamos y reportamos con total transparencia.',
    'Complete tracking': 'Tracking completo',
    'Dedicated Support': 'Soporte dedicado',
    'An account manager assigned to your account. Available for questions, updates and strategic adjustments.': 'Un account manager asignado a tu cuenta. Disponible para dudas, actualizaciones y ajustes estrategicos.',
    'Dedicated account manager': 'Account manager dedicado',
    '24h max response time': 'Tiempo maximo de respuesta de 24h',
    'Regular meetings': 'Reuniones regulares',
    'Advanced Technology': 'Tecnologia avanzada',
    'We use the most modern tools: AI, automation, advanced analytics and proprietary platforms.': 'Usamos herramientas modernas: IA, automatizacion, analitica avanzada y plataformas propias.',
    'AI and machine learning': 'IA y machine learning',
    'Smart automation': 'Automatizacion inteligente',
    'Advanced analytics': 'Analitica avanzada',
    'Proprietary tools': 'Herramientas propias',
    'Continuous Training': 'Capacitacion continua',
    'Digital marketing changes every week. Our team is in constant learning and certification.': 'El marketing digital cambia cada semana. Nuestro equipo esta en aprendizaje y certificacion continua.',
    'Active certifications': 'Certificaciones activas',
    'Monthly training': 'Capacitacion mensual',
    'Access to premium resources': 'Acceso a recursos premium',
    'Expert community': 'Comunidad experta',
    'Our Numbers': 'Nuestros numeros',
    'Satisfied Clients': 'Clientes satisfechos',
    'Campaigns Executed': 'Campanas ejecutadas',
    'In Revenue Generated for Clients': 'En ingresos generados para clientes',
    'Client Retention Rate': 'Tasa de retencion de clientes',
    'Real Results for Real Clients': 'Resultados reales para clientes reales',
    "We don't just talk about marketing, we make it work. Explore how we've helped companies like yours achieve their goals.": 'No solo hablamos de marketing, hacemos que funcione. Explora como ayudamos a empresas como la tuya a cumplir objetivos.',
    'The Challenge': 'El reto',
    'Results': 'Resultados',
    'Client: E-commerce Business | Service: Multi-Channel Marketing': 'Cliente: Negocio e-commerce | Servicio: Marketing multicanal',
    'Real Performance Growth': 'Crecimiento real de rendimiento',
    'A growing e-commerce business needed to scale their digital marketing efforts across multiple channels while maintaining visibility on performance metrics.': 'Un negocio e-commerce en crecimiento necesitaba escalar su marketing digital en varios canales manteniendo visibilidad total del rendimiento.',
    'Integrated marketing strategy combining Google, social media, and paid ads': 'Estrategia integrada combinando Google, redes sociales y anuncios pagos',
    'Centralized dashboard to track every click, call, message, and conversion': 'Dashboard centralizado para rastrear cada clic, llamada, mensaje y conversion',
    'Continuous optimization based on real-time data': 'Optimizacion continua basada en datos en tiempo real',
    'Impressions in 6 months': 'Impresiones en 6 meses',
    'Interactions': 'Interacciones',
    'Leads Generated': 'Leads generados',
    'Client: B2B Service Provider | Service: Integrated Digital Strategy': 'Cliente: Empresa de servicios B2B | Servicio: Estrategia digital integrada',
    'Real Data. Scalable Growth.': 'Datos reales. Crecimiento escalable.',
    'A B2B service provider struggled to consistently generate qualified leads and measure the true ROI of their marketing efforts.': 'Una empresa B2B tenia dificultades para generar leads calificados de forma constante y medir el ROI real de su marketing.',
    'Comprehensive strategy where content, ads, and local SEO worked together': 'Estrategia integral donde contenido, anuncios y SEO local trabajaron juntos',
    'Single dashboard for complete results transparency': 'Dashboard unico para transparencia total de resultados',
    'Automated tracking of all customer interactions': 'Tracking automatizado de todas las interacciones de clientes',
    'Qualified Leads': 'Leads calificados',
    'Client: Technology Company | Service: Full-Funnel Marketing': 'Cliente: Empresa de tecnologia | Servicio: Marketing de embudo completo',
    'Data-Driven Growth at Scale': 'Crecimiento escalable basado en datos',
    'A technology company needed to accelerate growth and establish market leadership while maintaining a consistent flow of high-quality leads.': 'Una empresa de tecnologia necesitaba acelerar su crecimiento y liderar mercado manteniendo un flujo constante de leads de alta calidad.',
    'Unified strategy where paid ads, social media, Google Business, and local SEO worked together': 'Estrategia unificada donde anuncios, redes, Google Business y SEO local trabajaron juntos',
    'Cohesive plan with real-time tracking on performance dashboard': 'Plan cohesivo con tracking en tiempo real sobre dashboard de rendimiento',
    'Continuous conversion optimization across all channels': 'Optimizacion continua de conversion en todos los canales',
    'User Actions': 'Acciones de usuario',
    'Client: Skin Rejuvenation Clinic | Service: Local SEO': 'Cliente: Clinica de rejuvenecimiento de piel | Servicio: SEO local',
    'Local SEO That Actually Ranks': 'SEO local que realmente posiciona',
    'A specialized skin rejuvenation clinic was virtually invisible in local search results, losing customers with high purchase intent.': 'Una clinica especializada en rejuvenecimiento de piel era casi invisible en resultados locales y perdia clientes de alta intencion.',
    'Targeted local SEO strategy focused on high-intent keywords': 'Estrategia de SEO local enfocada en keywords de alta intencion',
    'Google Maps optimization for "skin rejuvenation therapy" and "skin care clinic"': 'Optimizacion de Google Maps para "terapia de rejuvenecimiento" y "clinica de cuidado de piel"',
    'Local authority building and review management': 'Construccion de autoridad local y gestion de resenas',
    'Google Maps Rankings': 'Posiciones en Google Maps',
    'High-Intent Keywords': 'Keywords de alta intencion',
    'Paid Ads Required': 'Anuncios pagos requeridos',
    'Client: Italian Restaurant | Service: Local SEO': 'Cliente: Restaurante italiano | Servicio: SEO local',
    'Local SEO That Fills Tables': 'SEO local que llena mesas',
    'An authentic Italian restaurant struggled to stand out in a competitive local market, with competitors dominating search results.': 'Un restaurante italiano autentico tenia dificultades para destacar en un mercado local competitivo donde la competencia dominaba las busquedas.',
    'Google Business Profile optimization': 'Optimizacion de Google Business Profile',
    'Local SEO strategy targeting menu and location searches': 'Estrategia SEO local orientada a busquedas de menu y ubicacion',
    'Capturing customers actively searching for Italian food': 'Captura de clientes buscando comida italiana de forma activa',
    'Rankings for Main Keywords': 'Posiciones para keywords principales',
    'Menu + Location Visibility': 'Visibilidad de menu + ubicacion',
    'Increase in Walk-in Customers': 'Aumento de clientes presenciales',
    'Want Similar Results For Your Business?': 'Quieres resultados similares para tu negocio?',
    'Every business is unique. But they all share one truth: exponential growth when they have the right strategy.': 'Cada negocio es unico. Pero todos comparten una verdad: crecimiento exponencial con la estrategia correcta.'
};

const GLOBAL_TEXT_REPLACEMENTS_EN = Object.fromEntries(
    Object.entries(GLOBAL_TEXT_REPLACEMENTS_ES).map(([enText, esText]) => [esText, enText])
);

const SPANISH_WORD_ACCENTS = {
    'mas': 'm\u00e1s',
    'tambien': 'tambi\u00e9n',
    'seras': 'ser\u00e1s',
    'campana': 'campa\u00f1a',
    'campanas': 'campa\u00f1as',
    'diseno': 'dise\u00f1o',
    'disenos': 'dise\u00f1os',
    'resena': 'rese\u00f1a',
    'resenas': 'rese\u00f1as',
    'espanol': 'espa\u00f1ol',
    'anos': 'a\u00f1os',
    'ano': 'a\u00f1o',
    'auditoria': 'auditor\u00eda',
    'auditorias': 'auditor\u00edas',
    'dia': 'd\u00eda',
    'dias': 'd\u00edas',
    'mision': 'misi\u00f3n',
    'politica': 'pol\u00edtica',
    'politicas': 'pol\u00edticas',
    'terminos': 't\u00e9rminos',
    'tecnologia': 'tecnolog\u00eda',
    'tecnologias': 'tecnolog\u00edas',
    'estrategico': 'estrat\u00e9gico',
    'estrategica': 'estrat\u00e9gica',
    'estrategicos': 'estrat\u00e9gicos',
    'estrategicas': 'estrat\u00e9gicas',
    'geografica': 'geogr\u00e1fica',
    'trafico': 'tr\u00e1fico',
    'organico': 'org\u00e1nico',
    'organica': 'org\u00e1nica',
    'metrica': 'm\u00e9trica',
    'metricas': 'm\u00e9tricas',
    'analitica': 'anal\u00edtica',
    'analisis': 'an\u00e1lisis',
    'critica': 'cr\u00edtica',
    'criticas': 'cr\u00edticas',
    'tecnico': 't\u00e9cnico',
    'tecnica': 't\u00e9cnica',
    'tecnicos': 't\u00e9cnicos',
    'tecnicas': 't\u00e9cnicas',
    'rapido': 'r\u00e1pido',
    'rapida': 'r\u00e1pida',
    'rapidos': 'r\u00e1pidos',
    'rapidas': 'r\u00e1pidas',
    'automatico': 'autom\u00e1tico',
    'automatica': 'autom\u00e1tica',
    'automaticos': 'autom\u00e1ticos',
    'automaticas': 'autom\u00e1ticas',
    'configuracion': 'configuraci\u00f3n',
    'optimizacion': 'optimizaci\u00f3n',
    'calificacion': 'calificaci\u00f3n',
    'integracion': 'integraci\u00f3n',
    'comunicacion': 'comunicaci\u00f3n',
    'validacion': 'validaci\u00f3n',
    'certificacion': 'certificaci\u00f3n',
    'generacion': 'generaci\u00f3n',
    'publicacion': 'publicaci\u00f3n',
    'ubicacion': 'ubicaci\u00f3n',
    'investigacion': 'investigaci\u00f3n',
    'conversacion': 'conversaci\u00f3n',
    'conversion': 'conversi\u00f3n',
    'informacion': 'informaci\u00f3n',
    'optimo': '\u00f3ptimo',
    'optima': '\u00f3ptima',
    'maximo': 'm\u00e1ximo',
    'minimo': 'm\u00ednimo',
    'numero': 'n\u00famero',
    'numeros': 'n\u00fameros',
    'unico': '\u00fanico',
    'unica': '\u00fanica',
    'unicos': '\u00fanicos',
    'unicas': '\u00fanicas',
    'ingles': 'ingl\u00e9s',
    'portugues': 'portugu\u00e9s',
    'exito': '\u00e9xito',
    'semantico': 'sem\u00e1ntico',
    'movil': 'm\u00f3vil',
    'moviles': 'm\u00f3viles',
    'pagina': 'p\u00e1gina',
    'paginas': 'p\u00e1ginas',
    'lider': 'l\u00edder',
    'por que': 'por qu\u00e9',
    'Por que': 'Por qu\u00e9',
    'Que es': 'Qu\u00e9 es',
    'que es': 'qu\u00e9 es'
};

function stripSpanishDiacritics(text) {
    if (!text) return text;

    return text
        .replace(/[\u00e1\u00e0\u00e4\u00e2\u00e3\u00c1\u00c0\u00c4\u00c2\u00c3]/g, 'a')
        .replace(/[\u00e9\u00e8\u00eb\u00ea\u00c9\u00c8\u00cb\u00ca]/g, 'e')
        .replace(/[\u00ed\u00ec\u00ef\u00ee\u00cd\u00cc\u00cf\u00ce]/g, 'i')
        .replace(/[\u00f3\u00f2\u00f6\u00f4\u00f5\u00d3\u00d2\u00d6\u00d4\u00d5]/g, 'o')
        .replace(/[\u00fa\u00f9\u00fc\u00fb\u00da\u00d9\u00dc\u00db]/g, 'u')
        .replace(/[\u00f1\u00d1]/g, 'n');
}

function applyWordCase(source, replacement) {
    if (!source) return replacement;

    if (source === source.toUpperCase()) {
        return replacement.toUpperCase();
    }

    if (source[0] === source[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
    }

    return replacement;
}

function addSpanishDiacritics(text) {
    if (!text) return text;

    let updated = text;

    Object.entries(SPANISH_WORD_ACCENTS).forEach(([plain, accented]) => {
        const pattern = new RegExp(`\\b${plain}\\b`, 'g');
        updated = updated.replace(pattern, (match) => applyWordCase(match, accented));

        const lowerPattern = new RegExp(`\\b${plain.toLowerCase()}\\b`, 'g');
        updated = updated.replace(lowerPattern, (match) => applyWordCase(match, accented));

        const upperPattern = new RegExp(`\\b${plain.toUpperCase()}\\b`, 'g');
        updated = updated.replace(upperPattern, (match) => applyWordCase(match, accented));
    });

    return updated;
}

function forEachVisibleTextNode(callback) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node || !node.parentElement) {
                return NodeFilter.FILTER_REJECT;
            }

            const parentTag = node.parentElement.tagName;
            if (parentTag === 'SCRIPT' || parentTag === 'STYLE' || parentTag === 'NOSCRIPT') {
                return NodeFilter.FILTER_REJECT;
            }

            if (!node.textContent || !node.textContent.trim()) {
                return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodes = [];
    let node = walker.nextNode();
    while (node) {
        nodes.push(node);
        node = walker.nextNode();
    }

    nodes.forEach(callback);
}

function normalizeDocumentSpanishTypography(targetLang) {
    const safeLang = normalizeLanguage(targetLang);
    const textTransform = safeLang === 'es' ? addSpanishDiacritics : stripSpanishDiacritics;

    forEachVisibleTextNode((node) => {
        const raw = node.textContent;
        const updated = textTransform(raw);
        if (updated !== raw) {
            node.textContent = updated;
        }
    });

    const translatableAttributes = ['alt', 'title', 'aria-label', 'placeholder', 'content'];
    translatableAttributes.forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((element) => {
            const raw = element.getAttribute(attr);
            if (!raw) return;
            const updated = textTransform(raw);
            if (updated !== raw) {
                element.setAttribute(attr, updated);
            }
        });
    });

    document.title = textTransform(document.title);
}

function applyGlobalExactTextReplacements(lang) {
    const normalizedLang = normalizeLanguage(lang);
    const replacements = normalizedLang === 'es'
        ? GLOBAL_TEXT_REPLACEMENTS_ES
        : GLOBAL_TEXT_REPLACEMENTS_EN;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node || !node.parentElement) {
                return NodeFilter.FILTER_REJECT;
            }

            const parentTag = node.parentElement.tagName;
            if (parentTag === 'SCRIPT' || parentTag === 'STYLE' || parentTag === 'NOSCRIPT') {
                return NodeFilter.FILTER_REJECT;
            }

            const raw = node.textContent;
            if (!raw || !raw.trim()) {
                return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const textNodes = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
        textNodes.push(currentNode);
        currentNode = walker.nextNode();
    }

    textNodes.forEach((node) => {
        const raw = node.textContent;
        const trimmed = raw.trim();
        const replacement = replacements[trimmed] || replacements[stripSpanishDiacritics(trimmed)];

        if (!replacement) {
            return;
        }

        const leadingWhitespace = raw.match(/^\s*/)[0];
        const trailingWhitespace = raw.match(/\s*$/)[0];
        node.textContent = `${leadingWhitespace}${replacement}${trailingWhitespace}`;
    });
}

function getCurrentPageKey() {
    const cleanPath = window.location.pathname.replace(/\\/g, '/');
    const segments = cleanPath.split('/').filter(Boolean);
    const lastSegment = segments.length ? segments[segments.length - 1] : 'index.html';
    
    // If it doesn't have .html extension, add it
    return lastSegment.includes('.') ? lastSegment : lastSegment + '.html';
}

function applyPageSpecificTranslations(lang) {
    const pageKey = getCurrentPageKey();
    const pageConfig = PAGE_TRANSLATIONS[pageKey];

    if (!pageConfig) return;

    const safeLang = normalizeLanguage(lang);
    const localized = pageConfig[safeLang] || pageConfig.en;

    if (localized.title) {
        document.title = localized.title;
    }

    if (localized.description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', localized.description);
        }
    }

    if (localized.text) {
        Object.entries(localized.text).forEach(([selector, value]) => {
            if (selector === '.redirect-info span') {
                const countdown = document.getElementById('countdown');
                const node = document.querySelector(selector);
                if (!node || !countdown) return;

                const base = safeLang === 'es' ? 'Seras redirigido al inicio en ' : 'You will be redirected to home in ';
                const suffix = safeLang === 'es' ? ' segundos...' : ' seconds...';
                node.textContent = '';
                node.appendChild(document.createTextNode(base));
                node.appendChild(countdown);
                node.appendChild(document.createTextNode(suffix));
                return;
            }

            setElementTextValue(selector, value);
        });
    }

    if (localized.attrs) {
        Object.entries(localized.attrs).forEach(([descriptor, value]) => {
            const [selector, attribute] = descriptor.split('||');
            if (!selector || !attribute) return;
            setElementAttributeValue(selector, attribute, value);
        });
    }

    applyPageEsOverrides(pageKey, lang);
}

function applyHomePageTranslations(lang) {
    const isHomePage = document.querySelector('#servicios') && document.querySelector('.comparativa') && document.querySelector('#contactForm');
    if (!isHomePage) return;

    const normalizedLang = normalizeLanguage(lang);

    const titleValue = getTranslation(normalizedLang, 'metaTitle');
    if (titleValue) {
        document.title = titleValue;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    const metaDescriptionValue = getTranslation(normalizedLang, 'metaDescription');
    if (metaDescription && metaDescriptionValue) {
        metaDescription.setAttribute('content', metaDescriptionValue);
    }

    setElementText('.hero-content h1', 'heroTitle', normalizedLang);
    setElementText('.hero-content > p', 'heroDescription', normalizedLang);
    setElementText('.hero-buttons .btn-primary', 'heroBtnAudit', normalizedLang);
    setElementText('.hero-buttons .btn-secondary', 'heroBtnServices', normalizedLang);
    setElementText('.hero-stats .stat:nth-child(1) p', 'heroCompaniesTrust', normalizedLang);
    setElementText('.hero-stats .stat:nth-child(2) p', 'heroLeadsGenerated', normalizedLang);
    setElementText('.hero-stats .stat:nth-child(3) p', 'heroAverageRating', normalizedLang);

    setElementText('.servicios .section-header h2', 'servicesTitle', normalizedLang);
    setElementText('.servicios .section-header p', 'servicesDescription', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) h3', 'service1Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) > p', 'service1Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(1)', 'service1Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(2)', 'service1Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(3)', 'service1Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(1) .servicio-features li:nth-child(4)', 'service1Feature4', normalizedLang);

    setElementText('.servicios-grid .servicio-card:nth-child(2) h3', 'service2Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(2) > p', 'service2Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(1)', 'service2Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(2)', 'service2Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(3)', 'service2Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(2) .servicio-features li:nth-child(4)', 'service2Feature4', normalizedLang);

    setElementText('.servicios-grid .servicio-card:nth-child(3) h3', 'service3Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(3) > p', 'service3Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(1)', 'service3Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(2)', 'service3Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(3)', 'service3Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(3) .servicio-features li:nth-child(4)', 'service3Feature4', normalizedLang);

    setElementText('.servicios-grid .servicio-card:nth-child(4) h3', 'service4Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(4) > p', 'service4Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(1)', 'service4Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(2)', 'service4Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(3)', 'service4Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(4) .servicio-features li:nth-child(4)', 'service4Feature4', normalizedLang);

    setElementText('.servicios-grid .servicio-card:nth-child(5) h3', 'service5Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(5) > p', 'service5Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(1)', 'service5Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(2)', 'service5Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(3)', 'service5Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(5) .servicio-features li:nth-child(4)', 'service5Feature4', normalizedLang);

    setElementText('.servicios-grid .servicio-card:nth-child(6) h3', 'service6Title', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(6) > p', 'service6Description', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(1)', 'service6Feature1', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(2)', 'service6Feature2', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(3)', 'service6Feature3', normalizedLang);
    setElementText('.servicios-grid .servicio-card:nth-child(6) .servicio-features li:nth-child(4)', 'service6Feature4', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(1) .servicio-link', 'service1MoreInfo', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(2) .servicio-link', 'service2MoreInfo', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(3) .servicio-link', 'service3MoreInfo', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(4) .servicio-link', 'service4MoreInfo', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(5) .servicio-link', 'service5MoreInfo', normalizedLang);
    setElementTextWithIcon('.servicios-grid .servicio-card:nth-child(6) .servicio-link', 'service6MoreInfo', normalizedLang);

    setElementText('.por-que-text h2', 'whyTitle', normalizedLang);
    setElementText('.por-que-text > p', 'whyDescription', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(1) h4', 'whyPoint1Title', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(1) p', 'whyPoint1Description', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(2) h4', 'whyPoint2Title', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(2) p', 'whyPoint2Description', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(3) h4', 'whyPoint3Title', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(3) p', 'whyPoint3Description', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(4) h4', 'whyPoint4Title', normalizedLang);
    setElementText('.por-que-items .por-que-item:nth-child(4) p', 'whyPoint4Description', normalizedLang);
    setElementAttribute('.por-que-img', 'alt', 'whyImageAlt', normalizedLang);

    setElementText('.casos-exito .section-header h2', 'casesTitle', normalizedLang);
    setElementText('.casos-exito .section-header p', 'casesDescription', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(1) .caso-author-info h3', 'case1Company', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(1) .caso-autor', 'case1Author', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(1) .stat-label', 'case1StatLabel', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(1) > p', 'case1Quote', normalizedLang);
    setElementAttribute('.casos-grid .caso-card:nth-child(1) .caso-link', 'aria-label', 'case1Aria', normalizedLang);

    setElementText('.casos-grid .caso-card:nth-child(2) .caso-author-info h3', 'case2Company', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(2) .caso-autor', 'case2Author', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(2) .stat-label', 'case2StatLabel', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(2) > p', 'case2Quote', normalizedLang);
    setElementAttribute('.casos-grid .caso-card:nth-child(2) .caso-link', 'aria-label', 'case2Aria', normalizedLang);

    setElementText('.casos-grid .caso-card:nth-child(3) .caso-author-info h3', 'case3Company', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(3) .caso-autor', 'case3Author', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(3) .stat-label', 'case3StatLabel', normalizedLang);
    setElementText('.casos-grid .caso-card:nth-child(3) > p', 'case3Quote', normalizedLang);
    setElementAttribute('.casos-grid .caso-card:nth-child(3) .caso-link', 'aria-label', 'case3Aria', normalizedLang);
    setAllElementsTextWithIcon('.casos-grid .caso-link', 'caseLinkText', normalizedLang);

    setElementText('.clientes-logos p', 'trustedByText', normalizedLang);

    setElementText('.comparativa .section-header h2', 'comparisonTitle', normalizedLang);
    setElementText('.comparativa .section-header p', 'comparisonDescription', normalizedLang);
    setElementText('.comparison-commitment h3', 'comparisonCommitmentTitle', normalizedLang);
    setElementText('.comparison-commitment > p', 'comparisonCommitmentDescription', normalizedLang);
    setElementTextWithIcon('.comparison-pillars li:nth-child(1)', 'comparisonPillar1', normalizedLang);
    setElementTextWithIcon('.comparison-pillars li:nth-child(2)', 'comparisonPillar2', normalizedLang);
    setElementTextWithIcon('.comparison-pillars li:nth-child(3)', 'comparisonPillar3', normalizedLang);
    setElementText('.comparison-table thead th:nth-child(1)', 'comparisonHeaderFeature', normalizedLang);
    setElementText('.comparison-table thead th:nth-child(2)', 'comparisonHeaderCompetitors', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(1) td:first-child', 'comparisonRow1', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(2) td:first-child', 'comparisonRow2', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(3) td:first-child', 'comparisonRow3', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(4) td:first-child', 'comparisonRow4', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(1) td:nth-child(2)', 'comparisonRow1Detail', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(2) td:nth-child(2)', 'comparisonRow2Detail', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(3) td:nth-child(2)', 'comparisonRow3Detail', normalizedLang);
    setElementText('.comparison-table tbody tr:nth-child(4) td:nth-child(2)', 'comparisonRow4Detail', normalizedLang);

    setElementText('.proceso .section-header h2', 'processTitle', normalizedLang);
    setElementText('.proceso .section-header p', 'processDescription', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(1) h3', 'processStep1Title', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(1) p', 'processStep1Description', normalizedLang);
    setElementTextWithIcon('.proceso-steps .paso:nth-child(1) a', 'processStep1Link', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(2) h3', 'processStep2Title', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(2) p', 'processStep2Description', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(3) h3', 'processStep3Title', normalizedLang);
    setElementText('.proceso-steps .paso:nth-child(3) p', 'processStep3Description', normalizedLang);

    setElementText('.faq .section-header h2', 'faqTitle', normalizedLang);
    setElementText('.faq .section-header p', 'faqDescription', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(1) .faq-question span', 'faqQ1', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(1) .faq-answer p', 'faqA1', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(2) .faq-question span', 'faqQ2', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(2) .faq-answer p', 'faqA2', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(3) .faq-question span', 'faqQ3', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(3) .faq-answer p', 'faqA3', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(4) .faq-question span', 'faqQ4', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(4) .faq-answer p', 'faqA4', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(5) .faq-question span', 'faqQ5', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(5) .faq-answer p', 'faqA5', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(6) .faq-question span', 'faqQ6', normalizedLang);
    setElementText('.faq-items .faq-item:nth-child(6) .faq-answer p', 'faqA6', normalizedLang);

    setElementText('.cta-final h2', 'ctaTitle', normalizedLang);
    setElementText('.cta-final p', 'ctaDescription', normalizedLang);
    setElementText('.cta-final .cta-buttons .btn-primary', 'ctaPrimary', normalizedLang);
    setElementTextWithIcon('.cta-final .cta-buttons .btn-secondary', 'ctaWhatsapp', normalizedLang);

    setElementText('.calendario .section-header h2', 'calendarTitle', normalizedLang);
    setElementText('.calendario .section-header p', 'calendarDescription', normalizedLang);

    setElementText('.contacto-form h2', 'contactFormTitle', normalizedLang);
    setElementText('.contacto-form > p', 'contactFormDescription', normalizedLang);
    setElementAttribute('input[name="nombre"]', 'placeholder', 'formFullNamePlaceholder', normalizedLang);
    setElementAttribute('input[name="email"]', 'placeholder', 'formEmailPlaceholder', normalizedLang);
    setElementAttribute('input[name="telefono"]', 'placeholder', 'formPhonePlaceholder', normalizedLang);
    setElementText('label[for="objetivos"].sr-only', 'formObjectivesLabel', normalizedLang);
    setElementText('#objetivos option:nth-child(1)', 'formObjectivesDefault', normalizedLang);
    setElementText('#objetivos option:nth-child(2)', 'formObjectivesSeo', normalizedLang);
    setElementText('#objetivos option:nth-child(3)', 'formObjectivesAds', normalizedLang);
    setElementText('#objetivos option:nth-child(4)', 'formObjectivesWeb', normalizedLang);
    setElementText('#objetivos option:nth-child(5)', 'formObjectivesSocial', normalizedLang);
    setElementText('#objetivos option:nth-child(6)', 'formObjectivesGeneral', normalizedLang);
    setElementAttribute('textarea[name="mensaje"]', 'placeholder', 'formMessagePlaceholder', normalizedLang);
    setElementText('label[for="adjunto"]', 'formAttachLabel', normalizedLang);
    setElementText('.contacto-form .form-group label span', 'formSmsConsent', normalizedLang);
    setElementText('.contacto-form button[type="submit"]', 'formSubmit', normalizedLang);
    setElementText('.contacto-form .form-disclaimer', 'formDisclaimer', normalizedLang);

    setElementText('.contacto-info h2', 'contactInfoTitle', normalizedLang);
    setElementText('.contacto-info .info-item:nth-child(2) h4', 'contactPhoneLabel', normalizedLang);
    setElementText('.contacto-info .info-item:nth-child(3) h4', 'contactEmailLabel', normalizedLang);
    setElementText('.contacto-info .info-item:nth-child(4) h4', 'contactLocationLabel', normalizedLang);
    setElementText('.contacto-info .info-item:nth-child(5) h4', 'contactHoursLabel', normalizedLang);
    setElementText('.contacto-info .info-item:nth-child(5) p', 'contactHoursValue', normalizedLang);
    setElementAttribute('.contacto-info .social-links a:nth-child(1)', 'aria-label', 'contactFacebookAria', normalizedLang);
    setElementAttribute('.contacto-info .social-links a:nth-child(2)', 'aria-label', 'contactInstagramAria', normalizedLang);
    setElementAttribute('.contacto-info .social-links a:nth-child(3)', 'aria-label', 'contactGoogleAria', normalizedLang);
    setElementAttribute('.contacto-info .social-links a:nth-child(4)', 'aria-label', 'contactWhatsappAria', normalizedLang);
}

function applyLanguage(lang) {
    const targetLang = normalizeLanguage(lang);

    setPreferredLanguage(targetLang);
    document.documentElement.lang = targetLang;
    setActiveLang(targetLang);
    syncLanguageInputs(targetLang);
    applyTextTranslations(targetLang);
    applyHomePageTranslations(targetLang);
    applyPageSpecificTranslations(targetLang);

    if (targetLang === 'en') {
        normalizeDocumentSpanishTypography('en');
    }

    applyGlobalExactTextReplacements(targetLang);

    if (targetLang === 'es') {
        // Ensure DOM has fully updated before applying diacritics
        requestAnimationFrame(() => {
            normalizeDocumentSpanishTypography('es');
        });
    }
}

function getComponentBasePaths() {
    const pathname = window.location.pathname.replace(/\\/g, '/');
    const isBlogRoute = pathname.includes('/blogs/');

    if (isBlogRoute) {
        return ['../includes/', 'includes/', '/includes/'];
    }

    return ['includes/', './includes/', '/includes/'];
}

function getProjectRelativePrefix() {
    const pathname = window.location.pathname.replace(/\\/g, '/');
    return pathname.includes('/blogs/') ? '../' : '';
}

function normalizeSharedComponentPath(value, prefix) {
    if (!value || !value.startsWith('/') || value.startsWith('//')) {
        return value;
    }

    if (value === '/') {
        return `${prefix}index.html`;
    }

    return `${prefix}${value.slice(1)}`;
}

function rewriteSharedComponentPaths(container) {
    const prefix = getProjectRelativePrefix();

    container.querySelectorAll('[src^="/"], [href^="/"]').forEach(node => {
        if (node.hasAttribute('src')) {
            node.setAttribute('src', normalizeSharedComponentPath(node.getAttribute('src'), prefix));
        }

        if (node.hasAttribute('href')) {
            node.setAttribute('href', normalizeSharedComponentPath(node.getAttribute('href'), prefix));
        }
    });
}

function fetchWithTimeout(url, timeoutMs = 4500) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    return fetch(url, {
        signal: controller.signal,
        cache: 'no-cache'
    }).finally(() => clearTimeout(timeoutId));
}

function loadComponentIntoPlaceholder(placeholderId, fileName, basePaths, onLoaded) {
    return new Promise(resolve => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            resolve(false);
            return;
        }

        const candidateUrls = basePaths.map(basePath => `${basePath}${fileName}`);
        let currentTry = 0;

        const tryNext = () => {
            if (currentTry >= candidateUrls.length) {
                console.error(`Unable to load ${fileName} after trying:`, candidateUrls);
                resolve(false);
                return;
            }

            const url = candidateUrls[currentTry++];

            fetchWithTimeout(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    if (!html.trim()) {
                        throw new Error('Empty component payload');
                    }

                    placeholder.innerHTML = html;
                    rewriteSharedComponentPaths(placeholder);

                    if (typeof onLoaded === 'function') {
                        onLoaded();
                    }

                    resolve(true);
                })
                .catch(() => {
                    tryNext();
                });
        };

        tryNext();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const langOverride = getLanguageFromQuery();
    if (langOverride) {
        setPreferredLanguage(langOverride);
    }

    const basePaths = getComponentBasePaths();

    const headerLoadPromise = loadComponentIntoPlaceholder('header-placeholder', 'header.html', basePaths, () => {
        initMobileMenu();
        initDropdowns();
        initAccessibilityWidget();
        initLanguageSelector();
    });

    const footerLoadPromise = loadComponentIntoPlaceholder('footer-placeholder', 'footer.html', basePaths);

    Promise.all([headerLoadPromise, footerLoadPromise]).finally(() => {
        const preferredLang = getPreferredLanguage();
        applyLanguage(preferredLang);
    });
});

// Initialize mobile menu after dynamic load
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('open'));
            });
        });
    }
}

// ============================================
// LANGUAGE SELECTOR (ES / EN)
// ============================================

function initLanguageSelector() {
    const langButtons = document.querySelectorAll('[data-lang-select]');
    if (!langButtons.length) return;

    const preferredLang = getPreferredLanguage();
    setActiveLang(preferredLang);
    syncLanguageInputs(preferredLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetLang = this.dataset.langSelect;

            if (targetLang === getPreferredLanguage()) return;
            switchLanguage(targetLang);
        });
    });

    applyLanguage(preferredLang);
}

function switchLanguage(targetLang) {
    const nextLang = normalizeLanguage(targetLang);

    applyLanguage(nextLang);

    if (window.history && typeof window.history.replaceState === 'function') {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', nextLang);
        window.history.replaceState(null, '', url.toString());
    }
}

function setActiveLang(lang) {
    document.querySelectorAll('[data-lang-select]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langSelect === lang);
    });
}

// Initialize dropdowns after dynamic load
function initDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        const parent = toggle.closest('.nav-dropdown');

        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = parent.classList.contains('open');

            // Close other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('open'));

            if (!isOpen) {
                parent.classList.add('open');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const isDropdown = e.target.closest('.nav-dropdown');
        if (!isDropdown) {
            document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('open'));
        }
    });
}

// ============================================
// ACCESSIBILITY WIDGET INITIALIZATION
// ============================================

let fontSizeLevel = 0;
const maxFontSizeLevel = 3;

function initAccessibilityWidget() {
    const accessibilityBtn = document.getElementById('accessibilityBtn');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const closeAccessibility = document.getElementById('closeAccessibility');
    const widget = document.querySelector('.accessibility-widget');

    if (!accessibilityBtn || !accessibilityPanel) return;

    // Toggle accessibility panel
    accessibilityBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        accessibilityPanel.classList.toggle('active');
    });

    // Evitar que clicks dentro del panel lo cierren
    accessibilityPanel.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    if (closeAccessibility) {
        closeAccessibility.addEventListener('click', function(e) {
            e.stopPropagation();
            accessibilityPanel.classList.remove('active');
        });
    }

    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (widget && !widget.contains(e.target)) {
            accessibilityPanel.classList.remove('active');
        }
    });

    // Load saved preferences
    loadAccessibilityPreferences();

    // Setup all accessibility options
    setupAccessibilityOptions();
}

function loadAccessibilityPreferences() {
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const highContrast = localStorage.getItem('accessibility-high-contrast');
    const grayscale = localStorage.getItem('accessibility-grayscale');
    const negativeContrast = localStorage.getItem('accessibility-negative-contrast');
    const underlineLinks = localStorage.getItem('accessibility-underline-links');
    const readableFont = localStorage.getItem('accessibility-readable-font');

    if (savedFontSize) {
        fontSizeLevel = parseInt(savedFontSize);
        applyFontSize();
    }
    if (highContrast === 'true') {
        document.body.classList.add('high-contrast');
        const btn = document.getElementById('highContrast');
        if (btn) btn.classList.add('active');
    }
    if (grayscale === 'true') {
        document.body.classList.add('grayscale');
        const btn = document.getElementById('grayscale');
        if (btn) btn.classList.add('active');
    }
    if (negativeContrast === 'true') {
        document.body.classList.add('negative-contrast');
        const btn = document.getElementById('negativeContrast');
        if (btn) btn.classList.add('active');
    }
    if (underlineLinks === 'true') {
        document.body.classList.add('underline-links');
        const btn = document.getElementById('underlineLinks');
        if (btn) btn.classList.add('active');
    }
    if (readableFont === 'true') {
        document.body.classList.add('readable-font');
        const btn = document.getElementById('readableFont');
        if (btn) btn.classList.add('active');
    }
}

function applyFontSize() {
    const root = document.documentElement;
    root.classList.remove('font-size-large', 'font-size-larger', 'font-size-largest');
    
    if (fontSizeLevel === 1) {
        root.classList.add('font-size-large');
    } else if (fontSizeLevel === 2) {
        root.classList.add('font-size-larger');
    } else if (fontSizeLevel === 3) {
        root.classList.add('font-size-largest');
    }
}

function setupAccessibilityOptions() {
    // Increase font size
    const increaseFontSize = document.getElementById('increaseFontSize');
    if (increaseFontSize) {
        increaseFontSize.addEventListener('click', function(e) {
            e.stopPropagation();
            if (fontSizeLevel < maxFontSizeLevel) {
                fontSizeLevel++;
                applyFontSize();
                localStorage.setItem('accessibility-font-size', fontSizeLevel);
            }
        });
    }

    // Decrease font size
    const decreaseFontSize = document.getElementById('decreaseFontSize');
    if (decreaseFontSize) {
        decreaseFontSize.addEventListener('click', function(e) {
            e.stopPropagation();
            if (fontSizeLevel > 0) {
                fontSizeLevel--;
                applyFontSize();
                localStorage.setItem('accessibility-font-size', fontSizeLevel);
            }
        });
    }

    // High contrast
    const highContrast = document.getElementById('highContrast');
    if (highContrast) {
        highContrast.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('high-contrast');
            this.classList.toggle('active');
            const isActive = document.body.classList.contains('high-contrast');
            localStorage.setItem('accessibility-high-contrast', isActive);
        });
    }

    // Grayscale
    const grayscale = document.getElementById('grayscale');
    if (grayscale) {
        grayscale.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('grayscale');
            this.classList.toggle('active');
            const isActive = document.body.classList.contains('grayscale');
            localStorage.setItem('accessibility-grayscale', isActive);
        });
    }

    // Negative contrast
    const negativeContrast = document.getElementById('negativeContrast');
    if (negativeContrast) {
        negativeContrast.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('negative-contrast');
            this.classList.toggle('active');
            const isActive = document.body.classList.contains('negative-contrast');
            localStorage.setItem('accessibility-negative-contrast', isActive);
        });
    }

    // Underline links
    const underlineLinks = document.getElementById('underlineLinks');
    if (underlineLinks) {
        underlineLinks.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('underline-links');
            this.classList.toggle('active');
            const isActive = document.body.classList.contains('underline-links');
            localStorage.setItem('accessibility-underline-links', isActive);
        });
    }

    // Readable font
    const readableFont = document.getElementById('readableFont');
    if (readableFont) {
        readableFont.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('readable-font');
            this.classList.toggle('active');
            const isActive = document.body.classList.contains('readable-font');
            localStorage.setItem('accessibility-readable-font', isActive);
        });
    }

    // Reset all accessibility options
    const resetAccessibility = document.getElementById('resetAccessibility');
    if (resetAccessibility) {
        resetAccessibility.addEventListener('click', function(e) {
            e.stopPropagation();
            // Remove all classes
            document.body.classList.remove('high-contrast', 'grayscale', 'negative-contrast', 'underline-links', 'readable-font');
            document.documentElement.classList.remove('font-size-large', 'font-size-larger', 'font-size-largest');
            
            // Remove active states
            document.querySelectorAll('.accessibility-option').forEach(option => {
                option.classList.remove('active');
            });
            
            // Reset font size level
            fontSizeLevel = 0;
            
            // Clear localStorage
            localStorage.removeItem('accessibility-font-size');
            localStorage.removeItem('accessibility-high-contrast');
            localStorage.removeItem('accessibility-grayscale');
            localStorage.removeItem('accessibility-negative-contrast');
            localStorage.removeItem('accessibility-underline-links');
            localStorage.removeItem('accessibility-readable-font');
        });
    }
}
