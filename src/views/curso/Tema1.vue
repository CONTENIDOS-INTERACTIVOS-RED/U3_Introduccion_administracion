<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Administración estratégica y toma de decisiones'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')
      .col-sm-12.col-lg-8
        .p-4.mb-0.bg-color-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/2.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La administración estratégica y toma de decisiones consiste en una estrategia empresarial que analiza, delimita y ejecuta las acciones operativas de una entidad comercial, corporativa y organizacional. En este sentido, constituye un conjunto estructurado de directrices estratégicas, orientadas a establecer metas, tanto a corto como a largo plazo, así como las actividades necesarias para su consecución.
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.1] Definición de la administración estratégica

    .bg-part-1.mb-5(data-aos="fade-right")
      .px-5.py-0-cus
        .row.align-items-center.justify-content-center.img-over
          .col-sm-12.col-lg-6
            p.mt-4 Lo invitamos a escuchar el siguiente pódcast, para estudiar la temática.
            TarjetaAudio.bg-white.mb-0(
              texto="Definición de la administración estratégica"
              :audio="require('../../assets/componentes/audios/definicion_administracion_estrategica.mp3')"
            )
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t1/3.svg')


    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/4.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-4 Los #[strong atributos] de la administración estratégica, son:
        ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-acento-contenido
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 La administración estratégica está orientada hacia las metas y los objetivos generales de la organización.  
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 La administración estratégica incluye a múltiples grupos de interés (stakeholders) en la toma de decisiones. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 La administración estratégica requiere que se incluyan perspectivas de corto y largo plazo. 

    .bg-part-2.mb-5(data-aos="fade-right")
      .px-5.py-0-cus
        .row.align-items-center.img-over
          .col-sm-12.col-lg-7
            .mt-4 
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex.mb-4
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 La administración estratégica implica reconocer los ajustes entre la efectividad, la eficiencia y la eficacia.

                li.d-flex
                  i.fas.fa-check-circle.icon-list
                  p.mb-0 Una empresa obtiene una ventaja competitiva sustentable, cuando satisface las necesidades de los consumidores con mayor eficiencia, eficacia y efectividad, que sus rivales (la competencia).
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t1/5.svg')

    h2.mb-4(data-aos="fade-right") Proceso de administración estratégica
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/6.png', alt='')
      .col-sm-12.col-lg-8
        .bg-color-10.p-4.mb-4
          p.mb-0 La formulación de la estrategia, probablemente sea el tema más discutido y debatido del mundo empresarial. Se considera que el desarrollo de una buena estrategia, es el factor diferenciador del éxito. 
        p.mb-0 Se deben establecer los objetivos estratégicos de la organización, pero no se debe estancar en ese punto. Es más, lo que debe conseguirse por medio de una estrategia, es una aclaración (explicación) sobre cómo van a alcanzarse esos objetivos, y preguntar: 
    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-sm-12.col-lg-6
        .p-2.bg-color-2.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿Qué productos vamos a ofrecer? 
      .col-sm-12.col-lg-6
        .p-2.bg-color-2.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿En qué mercados? 
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-6
        .p-2.bg-color-2.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿A qué tipo de clientes? 
      .col-sm-12.col-lg-6
        .p-2.bg-color-2.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿Se ajustan las capacidades de nuestros trabajadores a la gama de productos y/o servicios a ofrecer?


    .bg-full-width.bg-color-3.mb-5(data-aos="fade-right")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4
            img(src='@/assets/curso/t1/8.svg', alt='')
          .col-sm-12.col-lg-7
            .bg-color-13.p-4.mb-4
              p.mb-0 Hay tres fases permanentes (análisis, decisiones y acciones) y medulares, para la administración estratégica; en la práctica, estos tres procesos, usualmente son llamados análisis y diagnóstico estratégico, formulación estratégica e instrumentación (implantación) de la estrategia.
            p.mb-0 Teniendo en cuenta a Mantilla Duarte & Martínez Velandia (2023), la fase de la implantación de la estrategia (fase 3), debe ir acompañada del seguimiento (evaluación) y control de la estrategia, para que se permita realizar la acción de retroalimentación del proceso de la administración estratégica, la cual debe realizarse de manera periódica, de forma tal, de garantizar los correctivos que sean necesarios, de acuerdo con los resultados de la evolución realizada. El proceso de retroalimentación representa una gran oportunidad de aprendizaje, creatividad, seguimiento y mejora continua de la organización y del proceso en sí. 

    .titulo-figura.mb-2(data-aos="fade-right")
      h5 Figura 1. 
      span Proceso de administración estratégica visto como un sistema retroalimentado.
    .row.justify-content-center.mb-5.bg-color-6
       .col-sm-12.col-lg-10.py-4
         figure
           img(src='@/assets/curso/t1/9.svg', alt='').mb-0


    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.2] La estrategia como proceso emergente
    p.mb-4(data-aos="fade-right") La estrategia en las organizaciones, es un proceso dinámico que combina análisis, adaptación y aprendizaje continuo, para responder a un entorno de negocios impredecible.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-right")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 La estrategia como proceso emergente 
             p.mb-4 En el PDF #[strong La estrategia como proceso emergente], se examinan conceptos claves como el análisis estratégico, la posición y diagnóstico del entorno organizacional, y la implementación de estrategias, ofreciendo un enfoque integral para entender cómo las organizaciones diseñan y ejecutan estrategias efectivas en contextos cambiantes.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/estrategia_como_proceso_emergente.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> La estrategia como proceso emergente 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/10.png', alt='')

    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.3] Función del gobierno corporativo y administración de los grupos de interés
    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/11.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-3 El #[strong gobierno corporativo] es la relación entre los distintos participantes que determinan la orientación y el desempeño de las organizaciones (compañías), los principales son:
        ol.lista-ol--cuadro.lista-ol--cuadro--separador.color-acento-contenido
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Accionistas.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Gerencia (encabezado por el Director General Ejecutivo o Chief Executive Officer - CEO - por sus siglas en inglés).
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Consejo de administración.
    .bg-full-width.bg-color-11.mb-5(data-aos="fade-right")
      .px-5.py-4
        p.mb-0 El gobierno corporativo es la relación entre los distintos participantes que determinan la orientación y el desempeño de las organizaciones (compañías).
    p.mb-4(data-aos="fade-right") Conozcamos cada uno de los gerentes principales:
    .bg-full-width.bg-fondo-4.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Gerentes estratégicos
              p.mb-0 Los gerentes son la pieza clave en el proceso de elaboración de estrategias. Los gerentes, en lo individual, deben ser responsables de formular estrategias para lograr una ventaja competitiva y poner en práctica esas estrategias. Deben liderar el proceso de elaboración de estrategias.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/12.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Gerentes del nivel corporativo
              p.mb-0 El nivel corporativo de la administración está compuesto por el presidente o Director General Ejecutivo (CEO), otros altos directivos y el personal corporativo. Estos individuos ocupan la cima de la jerarquía en el proceso de toma de decisiones dentro de la organización. El CEO es la máxima autoridad.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/13.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Gerentes del nivel negocios
              p.mb-0 Una unidad de negocios es una división autónoma (con sus propias funciones, por ejemplo: departamentos de finanzas, compras, producción y marketing) que ofrece un producto o servicio a un mercado determinado. El gerente de negocios es el director de la división.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/14.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Gerentes del nivel funcional
              p.mb-0 Los gerentes funcionales son responsables de las funciones y operaciones específicas de negocios (recursos humanos, compras, desarrollo de productos, servicio al cliente, otros) que constituyen una empresa o una de sus divisiones. Por tanto, la esfera de responsabilidad de un gerente funcional suele estar confinada a una actividad organizacional, mientras que los gerentes supervisan la organización de toda una división o empresa.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/15.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/16.png', alt='')
      .col-sm-12.col-lg-8
        .px-4.py-3.mb-0.bg-color-1.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/17.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Con respecto a los gerentes estratégicos, existen tres niveles principales de administración: corporativo, de negocios y funcional. Los gerentes generales se encuentran en los primeros dos niveles, pero sus roles estratégicos difieren, según sus esferas de responsabilidad.
        p.mb-0 A continuación, se muestra la organización de una empresa de divisiones múltiples; esto es, una que compite en varios negocios diferentes y que tiene una división separada y autónoma, para administrar cada uno de ellos. 

    .titulo-figura.mb-2(data-aos="fade-right")
      h5 Figura 2. 
      span Niveles de la administración estratégica. 
    .row.justify-content-center.mb-0.bg-color-6
      .col-sm-12.col-lg-10.py-4
        figure
          img(src='@/assets/curso/t1/19.svg', alt='').mb-0
    figcaption.mb-5.mx-0(data-aos="fade-right") #[strong Nota:] basado en Torres Hernández (2015).

    #t_1_4.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.4] Perspectivas alternas de la administración de grupos de interés
    p.mb-4(data-aos="fade-right") Basado en Luna González (2015), es evidente que, además de los accionistas, existen otros grupos de interés que explícitamente deben tomarse en cuenta en el proceso de la administración estratégica. Un grupo de interés se define como un individuo o grupo, al interior o exterior de la compañía, que tiene intereses en el desempeño de la organización, puede influir en él y reclama diferentes acciones.
    .titulo-figura.mb-2.d-d-flex(data-aos="fade-right")
      p.mb-0 #[b Tabla 1.] Grupos de interés.
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
      table
        thead
          tr
            th.w-25 Grupo de interés
            th Índole del reclamo
        tbody
          tr
            td.fw-bold Accionistas
            td Dividendos, apreciación del capital.
          tr
            td.fw-bold Empleados
            td Salario, prestaciones, seguridad en el trabajo y en el empleo.
          tr
            td.fw-bold Proveedores
            td Pago puntual, seguridad que continuará la relación.
          tr
            td.fw-bold Acreedores
            td Pago de intereses, reembolso del capital.
          tr
            td.fw-bold Clientes
            td Valor, garantías.
          tr
            td.fw-bold Gobierno
            td Impuesto, cumplimientos de leyes y reglamentos.
          tr
            td.fw-bold Comunidades
            td Buen comportamiento ciudadano, como obras de beneficencia, empleo, que no se contamine el ambiente.

    h2.mb-3(data-aos="fade-right") Perspectiva de la administración estratégica: un imperativo en toda la organización
    p.mb-5(data-aos="fade-right") La administración estratégica y la toma de decisiones, son elementos fundamentales para garantizar el éxito organizacional, puesto que permiten alinear las metas y objetivos de todos los niveles de la empresa, bajo una visión común.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-right")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Perspectiva de la administración estratégica: un imperativo en toda la organización
             p.mb-4 En el PDF #[strong Perspectiva de la administración estratégica], se analizan los procesos de toma de decisiones, su clasificación, y las estrategias organizativas y procedimentales, necesarias para enfrentar problemas y conflictos de manera eficaz, destacando la importancia de un enfoque integral y colaborativo en todos los niveles.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/perspectiva_administracion_estrategica.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Perspectiva de la administración estratégica: un imperativo en toda la organización
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/18.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://bdigital.uncu.edu.ar/fichas.php?idobjeto=17916' target='_blank' rel='noopener noreferrer') Franco Chignoletti, A. (2021). Planificación estratégica: Transformación de delivery de preparaciones dulces en negocio gastronómico llamado "Distraído". Biblioteca Digital UNCUYO.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://dialnet.unirioja.es/servlet/articulo?codigo=5331843' target='_blank' rel='noopener noreferrer') Maya, M. C. (s.f.). La gerencia estratégica versus la planeación estratégica. Dialnet.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/articulo.oa?id=343929216003' target='_blank' rel='noopener noreferrer') Vargas Vallecilla, R. (2008). Herramientas para la planeación estratégica en microempresas. Redalyc
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://gemini.google.com/app ' target='_blank' rel='noopener noreferrer') Gemini.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=UwvrD6GBXBQ' target='_blank' rel='noopener noreferrer') Universidad Continental - Modalidad a Distancia. (2021). Introducción a la administración estratégica

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=89sxzK5Rm40' target='_blank' rel='noopener noreferrer') Universidad Continental - Modalidad a Distancia. (2021). Presentación de la asignatura: Administración Estratégica
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
