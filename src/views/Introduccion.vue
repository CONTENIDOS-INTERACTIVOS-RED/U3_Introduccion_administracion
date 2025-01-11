<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .bg-color-1.p-4.mb-4
          p.mb-0 En esta unidad, se explorarán enfoques y herramientas necesarios, para gestionar las organizaciones en el contexto actual, donde los cambios constantes y las demandas sociales, influyen directamente en las decisiones estratégicas. Para aquellos profesionales que buscan liderar con visión innovadora, adoptar prácticas sostenibles y responder de manera efectiva, a los retos actuales del mercado, obtener estos conocimientos resultará importante y necesario.
        p.mb-0 Durante esta unidad, se desarrollarán los siguientes temas:

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
    .bg-full-width.bg-fondo-1.mb-5
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/2.svg' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Primer enfoque
                p.mb-0.text-center Se abordará la administración estratégica y toma de decisiones, como punto de partida; se analizará cómo las estrategias bien definidas y la toma de decisiones informadas, permiten a las organizaciones adaptarse a un entorno competitivo. Se estudiarán modelos estratégicos y técnicas de análisis para evaluar escenarios y priorizar acciones.
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/3.svg' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Segundo enfoque 
                p.mb-0.text-center Se abordará la innovación y la gestión del cambio en las organizaciones; este tema replicará la importancia de fomentar una cultura de innovación y gestionar el cambio organizacional de manera efectiva, con el objetivo de mantener la competitividad. Se identificarán herramientas y metodologías que faciliten la implementación de iniciativas innovadoras y la adaptación al cambio.
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/4.svg' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Tercer enfoque 
                p.mb-0.text-center Se explorará la responsabilidad social empresarial (RSE) y sostenibilidad; en este tema, se reflexionará sobre el impacto social, económico y ambiental de las organizaciones. Se discutirá cómo la RSE y las prácticas sostenibles, contribuyen al bienestar colectivo, y fortalecen la reputación y el éxito de las empresas, a largo plazo.
    .bg-full-width.bg-color-9.mb-0
      .px-5.py-4
        p.mb-0 Al finalizar esta unidad, se espera que los estudiantes desarrollen competencias para liderar organizaciones con una visión estratégica, tomar decisiones acertadas frente a los desafíos actuales e implementar iniciativas que promuevan la sostenibilidad y el cambio positivo. 

    .bg-full-width.bg-color-7.mb-0
      .px-5.pt-4
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/intro/5.svg', alt='')
          .col-sm-12.col-lg-7
              p.mb-4 La participación activa y el análisis crítico, serán claves para maximizar el aprendizaje en esta etapa del curso.
              p.mb-0 No se requiere experiencia previa en administración estratégica, pero el interés por los temas contemporáneos, será un gran aliado en el desarrollo de las habilidades planteadas. ¡Prepárese para enfrentar los desafíos del entorno actual y potenciar su impacto como administrador!





</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
