<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Innovación y gestión del cambio en las organizaciones'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Teniendo en cuenta a Gallardo Gallardo (2015), la innovación y la gestión del cambio son elementos fundamentales en las organizaciones modernas, las cuales buscan adaptarse a los retos del entorno actual, caracterizado por avances tecnológicos, mercados competitivos y demandas sociales cambiantes. Ambos conceptos están estrechamente relacionados, dado que la innovación, frecuentemente, requiere cambios significativos, mientras que la gestión del cambio, facilita la implementación de nuevas ideas y prácticas.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/1.png', alt='')
    
    #t_2_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.1] Innovación

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/2.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-3 La innovación es un proceso estratégico que transforma las organizaciones al permitirles crear valor de forma continua. Al adoptar una mentalidad innovadora, las empresas se vuelven más resilientes, eficientes y capaces de responder a los desafíos del futuro.
        .p-4.mb-0.bg-color-5.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/3.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Continuando con Gallardo Gallardo, E. (2015), la innovación organizacional puede definirse como la capacidad de una empresa para transformar conocimiento e ideas en bienes, servicios o procesos mejorados que aumenten su competitividad y satisfagan las necesidades de los clientes.
        p.mb-0 Peter Drucker, un referente en administración, definió la innovación como el esfuerzo sistemático para aplicar nuevas ideas en las prácticas económicas o sociales.

    .bg-full-width.bg-color-9.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 La OCDE (Organización para la Cooperación y el Desarrollo Económico), señala que la innovación incluye no solo productos y servicios, sino también métodos organizativos, mercadotecnia y procesos.
    p.mb-4(data-aos="fade-up") Los tipos de innovación, son:
    .row.justify-content-center.mb-3(data-aos="fade-up")
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Innovación de producto')
            p.mb-4 Consiste en la creación o mejora significativa de un bien o servicio, introduciendo novedades que lo diferencien de los productos existentes en el mercado.
            p.mb-0 #[strong Ejemplo.] El desarrollo de un teléfono inteligente con capacidades avanzadas para la inteligencia artificial.

          div(titulo='Innovación de proceso')
            p.mb-4 Se refiere a la introducción de cambios significativos en la forma en que se realizan las actividades dentro de una organización. Estos cambios pueden involucrar nuevas técnicas, tecnologías, herramientas o métodos de trabajo, con el objetivo de mejorar la eficiencia, la eficacia y la productividad.
            p.mb-0 #[strong Ejemplo.] La automatización de líneas de ensamblaje mediante robots.

          div(titulo='Innovación organizacional')
            p.mb-4 Va más allá de la simple creación de nuevos productos o servicios. Se trata de un cambio profundo y transformador en la forma en que una empresa opera, interactúa con su entorno y logra sus objetivos. Implica la adopción de nuevas ideas, tecnologías, estructuras y procesos, para mejorar la eficiencia, la eficacia y la competitividad de la organización. Implica modificaciones en las estructuras internas o formas de trabajo.
            p.mb-0 #[strong Ejemplo.] Implementar modelos de trabajo híbrido.

          div(titulo='Innovación tecnológica')
            p.mb-4 La innovación tecnológica se refiere a la creación o mejora significativa de un producto, servicio o proceso, a través de la aplicación de nuevas tecnologías. Esto implica la introducción de novedades que generan un impacto positivo en la eficiencia, la eficacia y la competitividad de una organización.
            p.mb-4 Adopta tecnologías nuevas o avanzadas, para transformar operaciones o productos.
            p.mb-0 #[strong Ejemplo.] Walmart ya utiliza blockchain para rastrear sus productos alimenticios, desde el productor hasta las tiendas, garantizando la frescura y seguridad de los alimentos.

          div(titulo='Innovación de marketing')
            p.mb-4 Este es un proceso continuo que busca desarrollar nuevas estrategias, tácticas y herramientas, para conectar de manera más efectiva con los consumidores y lograr los objetivos de negocio. En el contexto actual cambiante y competitivo, la innovación es necesaria para mantenerse relevante y destacar en el mercado, como desarrollar nuevas estrategias de comunicación, distribución o fijación de precios.
            p.mb-0 #[strong Ejemplo.] Uso de campañas de marketing viral en redes sociales.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png')

    p.mb-4(data-aos="fade-up") Conozcamos ahora, los beneficios de la innovación en las organizaciones:
    .bg-full-width.bg-fondo-7.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
              img(src='@/assets/curso/t2/5.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              // Tarjeta 1 - Ventaja competitiva
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/6.svg' alt='Ventaja competitiva')
                    h4.text-center Ventaja competitiva
                    p.mb-0.text-center Permite a las organizaciones diferenciarse de sus competidores, al ofrecer productos y servicios únicos.

              // Tarjeta 2 - Incremento en la productividad
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/7.svg' alt='Incremento en la productividad')
                    h4.text-center Incremento en la productividad
                    p.mb-0.text-center Optimiza procesos internos, reduce costos y aumenta la rentabilidad.

              // Tarjeta 3 - Mejora de la experiencia del cliente
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/8.svg' alt='Mejora de la experiencia del cliente')
                    h4.text-center Mejora de la experiencia del cliente
                    p.mb-0.text-center Satisface mejor las necesidades del mercado, con soluciones innovadoras y personalizadas.

              // Tarjeta 4 - Adaptabilidad al entorno cambiante
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/9.svg' alt='Adaptabilidad al entorno cambiante')
                    h4.text-center Adaptabilidad al entorno cambiante
                    p.mb-0.text-center Responde con agilidad a los cambios del mercado, crisis o avances tecnológicos.

              // Tarjeta 5 - Atracción y retención de talento
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/10.svg' alt='Atracción y retención de talento')
                    h4.text-center Atracción y retención de talento
                    p.mb-0.text-center Una organización innovadora atrae a profesionales con mentalidad creativa y ambiciosa, motivados por un entorno dinámico.

              // Tarjeta 6 - Fomento de la cultura organizacional
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/11.svg' alt='Fomento de la cultura organizacional')
                    h4.text-center Fomento de la cultura organizacional
                    p.mb-0.text-center Promueve valores de colaboración, creatividad y aprendizaje continuo, entre los empleados.

              // Tarjeta 7 - Incremento en la rentabilidad a largo plazo
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/12.svg' alt='Incremento en la rentabilidad')
                    h4.text-center Incremento en la rentabilidad a largo plazo
                    p.mb-0.text-center La inversión en innovación genera nuevos ingresos y asegura la sostenibilidad del negocio.

              // Tarjeta 8 - Impulso a la sostenibilidad
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/13.svg' alt='Impulso a la sostenibilidad')
                    h4.text-center Impulso a la sostenibilidad
                    p.mb-0.text-center Desarrollar soluciones que reduzcan el impacto ambiental y contribuyan a un desarrollo responsable.

              // Tarjeta 9 - Generación de nuevas oportunidades de negocio
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/14.svg' alt='Generación de nuevas oportunidades')
                    h4.text-center Generación de nuevas oportunidades de negocio
                    p.mb-0.text-center Explora mercados emergentes, tecnologías disruptivas y segmentos inexplorados.

              // Tarjeta 10 - Fortalecimiento de la imagen corporativa
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t2/15.svg' alt='Fortalecimiento de la imagen corporativa')
                    h4.text-center Fortalecimiento de la imagen corporativa
                    p.mb-0.text-center Mejora a percepción pública al posicionarse como una empresa líder y pionera en su industria.
        h2.mb-3 Las 7 Estrategias creativas de Franc Ponti
        p.mb-3 Están diseñadas para liberar el potencial creativo y transformar la forma de pensar. Estas estrategias no son solo herramientas, sino una invitación a explorar nuevos caminos y a ver el mundo desde diferentes perspectivas. 

    .bg-full-width.bg-color-6.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-8
            ImagenInfografica.color-acento-contenido.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t2/16.svg')
              .tarjeta.bg-white.p-3(x="39%" y="7%" numero="+")
                .h5.mb-2 Pensar Zen (Think Zen)
                p.mb-0 Esta estrategia se centra en crear un espacio mental tranquilo y enfocado, para generar ideas. Implica dedicar tiempo a la reflexión, la meditación y la introspección, para conectar con la intuición y la creatividad.

              .tarjeta.bg-white.p-3(x="72.7%" y="11.7%" numero="+")
                .h5.mb-2 Pensar Po (Think Po)
                p.mb-0 Se trata de desafiar los convencionalismos y construir provocaciones. Consiste en cuestionar las normas establecidas y buscar nuevas perspectivas, para generar ideas disruptivas.

              .tarjeta.bg-white.p-3(x="91.7%" y="39.5%" numero="+")
                .h5.mb-2 Abrir la mente (Think Open)
                p.mb-0 Esta estrategia fomenta la apertura a nuevas ideas y experiencias. Implica estar dispuesto a explorar diferentes puntos de vista y aprender de otras personas y culturas.

              .tarjeta.bg-white.p-3(x="88%" y="72.5%" numero="+")
                .h5.mb-2 Pensar con fluidez (Think Flow)
                p.mb-0 La emoción es un motor poderoso de la creatividad. Esta estrategia busca conectar con las emociones para generar ideas más emocionantes y significativas.

              .tarjeta.bg-white.p-3(x="61.5%" y="92%" numero="+")
                .h5.mb-2 Emocionarse (Get Emotional)
                p.mb-0 La emoción es un motor poderoso de la creatividad. Esta estrategia busca conectar con las emociones para generar ideas más emocionantes y significativas.

              .tarjeta.bg-white.p-3(x="27.7%" y="87%" numero="+")
                .h5.mb-2 Alegrar la mente (Think Happy)
                p.mb-0 Esta estrategia se centra en generar un estado de ánimo positivo y optimista para fomentar la creatividad. La alegría y el buen humor son fundamentales para desbloquear el potencial creativo.

              .tarjeta.bg-white.p-3(x="7%" y="61%" numero="+")
                .h5.mb-2 Pensar entre todos (Think Team)
                p.mb-0 La colaboración es clave para la innovación. Esta estrategia fomenta la creación de equipos multidisciplinares para generar ideas de forma colectiva.
              .tarjeta.bg-white.p-3(x="12.4%" y="28%" numero="+")
                .h5.mb-2 Pensar Zen (Think Zen)
                p.mb-0 Esta estrategia se centra en crear un espacio mental tranquilo y enfocado, para generar ideas. Implica dedicar tiempo a la reflexión, la meditación y la introspección, para conectar con la intuición y la creatividad.

    #t_2_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.2] Gestión del cambio en las organizaciones
    p.mb-4(data-aos="fade-up") La gestión del cambio es un proceso esencial en las organizaciones modernas, puesto que permite la adaptación a los entornos dinámicos y asegura la competitividad y supervivencia en el mercado.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Gestión del cambio en las organizaciones
             p.mb-4 En el PDF #[strong Gestión del cambio en las organizaciones], se analizan las fases claves del cambio, desde el diagnóstico hasta la implementación y el ajuste, además de los desafíos asociados, como la resistencia organizacional y las amenazas al equilibrio interno. Asimismo, se presentan estrategias prácticas para superar estas barreras, como la educación, la comunicación efectiva y la participación activa de los empleados, acompañadas de ejemplos ilustrativos que destacan casos exitosos en transformación digital, reestructuración organizacional y cambio cultural en empresas globales.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Gestión del cambio en las organizaciones
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/17.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://dialnet.unirioja.es/servlet/articulo?codigo=9821411' target='_blank' rel='noopener noreferrer') Ortega Gómez, J. A. (2000). Gestión de la tecnología, innovación y competitividad empresarial. Dialnet.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/ereader/tecnologicadeloriente/232951?page=1' target='_blank' rel='noopener noreferrer') Reinoso Lastra, J. F., Vera Calderón, J. A. & Ramírez Ramírez, E. A. (2023). Gestión de la cultura y el cambio organizacional. Sello Editorial Universidad del Tolima.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/articulo.oa?id=477847105007' target='_blank' rel='noopener noreferrer') Abedrapo Gallardo, C. (2014). Cristóbal Abedrapo Gallardo. Redalyc. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://scholar.google.es/schhp?hl=es ' target='_blank' rel='noopener noreferrer') Google académico 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=AiZ4teFJ2Kw' target='_blank' rel='noopener noreferrer') Une Consultores. (2024). Gestión del cambio en las organizaciones

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=DlCoxfQifes&t=136s' target='_blank' rel='noopener noreferrer') El Blog De Raffo. (2021). S01 GESTION DE LA INNOVACIÓN ¿Qué es innovar? - Tipos de innovación
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')









</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
