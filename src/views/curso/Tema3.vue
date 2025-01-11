<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Responsabilidad Social Empresarial y sostenibilidad'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .p-4.bg-color-3.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/1.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La Responsabilidad Social es la habilidad para responder a la sociedad y la RSE es la habilidad para responder a la sociedad desde las empresas; la RAE la define como deuda, obligación de reparar y satisfacer, por sí o por otra persona, a consecuencia de un delito, de una culpa o de otra causa legal.
        p.mb-0 Comencemos conociendo el concepto moderno de Responsabilidad Social Empresarial, según:
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.png', alt='')
    
    .bg-full-width.bg-fondo-4.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t3/3.png', alt='')
            .col-sm-12.col-lg-7
              h5  ANDI (1993)
              p.mb-0 “La Responsabilidad Social Empresarial es el compromiso que tiene la empresa de contribuir con el desarrollo, el bienestar y el mejoramiento de la calidad de vida de los empleados, sus familias y la comunidad en general”.
          
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t3/4.png', alt='')
            .col-sm-12.col-lg-7
              h5 Global Business for Social Responsibility (2023) GBSR 
              p.mb-0 “Alcanzar el éxito comercial por medio de actividades que honren los valores éticos y respeten a las personas, a las comunidades y al medio ambiente”.
    p.mb-4(data-aos='fade-up') Y finalicemos con el origen y la evolución de la Responsabilidad Social Empresarial (RSE):
    .bg-color-6.p-4.mb-5(data-aos='fade-up')
      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-9
              LineaTiempoD.color-acento-contenido.large
                div(numero='1890' titulo='Fase inicial')
                  .row.align-items-center
                    .col-lg-auto.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
                    .col-lg
                      p.mb-0 #[b 1890 a 1930.] Finales del siglo XIX y principios del XX. No existe el concepto RSE, el cual va apareciendo de forma explícita. Actividades de tipo filantrópica y asistencia social.
                
                div(numero='1930' titulo='Fase primera')
                  .row.align-items-center
                    .col-lg-auto.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
                    .col-lg
                      p.mb-0 #[b 1930 a 1950.] Mitad del siglo XX. Específica, sistemática y voluntaria, desarrollan un criterio más social para el bienestar común y el entorno que las rodean.
                
                div(numero='1950' titulo='Fase segunda')
                  .row.align-items-center
                    .col-lg-auto.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
                    .col-lg
                      p.mb-0 #[b 1950 a 1960.] Papel más crítico, accionar empresarial y los efectos del entorno. El Estado inicia vigilancia y control para salvaguardar los intereses públicos y el medio ambiente.
                
                div(numero='1966' titulo='Fase tercera')
                  .row.align-items-center
                    .col-lg-auto.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
                    .col-lg
                      p.mb-0 #[b 1966 a 1980.] Interrelación Estado y empresa. Políticas más reguladoras a la acción empresarial. Cambio en la sociedad, más crítica, ante las empresas y su fin exclusivamente económico. Inconformidad sociedad. Balance social.
                
                div(numero='1990' titulo='Fase final')
                  .row.align-items-center
                    .col-lg-auto.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
                    .col-lg
                      p.mb-0 #[b 1990 a 2024. Concepto moderno RSE.]
                      ul.lista-ul--color.mb-0.color-primario
                        li.d-flex.mb-0
                          i.fas.fa-check-circle.icon-list
                          p.mb-0 2001. Se publica el Libro Verde de la UE sobre RSE.
                        li.d-flex.mb-0
                          i.fas.fa-check-circle.icon-list
                          p.mb-0 2002. Se realiza la Cumbre del Milenio "Metas del Milenio" y la conferencia regional de RSE "Alianzas para el Desarrollo" en Miami, Florida.
                        li.d-flex.mb-0
                          i.fas.fa-check-circle.icon-list
                          p.mb-0 2003. Se crea el Índice de Inversiones Socialmente Responsables (JSE) en Sudáfrica.
                        li.d-flex.mb-0
                          i.fas.fa-check-circle.icon-list
                          p.mb-0 2004. Se inician los Grupos de Trabajo para la Guía de Recomendaciones ISO 26000 de RSE.
                        li.d-flex.mb-0
                          i.fas.fa-check-circle.icon-list
                          p.mb-0 2005. Entra en vigor el Protocolo de Kioto al Convenio Marco de las Naciones Unidas sobre Cambio Climático.

    #t_3_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.1] Normatividad internacional RSEión
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        p.mb-5 SAI – Social Accountability International. Fundada en 1997, es una organización no gubernamental global que promueve los derechos humanos en el trabajo. La misión es promover los derechos humanos en el entorno laboral. La visión, un mundo donde los trabajadores, las empresas y las comunidades prosperen juntos.
        .bg-color-1.p-4
          p.mb-0 NORMA SA8000. Es el principal estándar de certificación social para fábricas y organizaciones en todo el mundo para promover mejores condiciones laborales. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img.w-75(src='@/assets/curso/t3/6.svg', alt='').mx-auto

    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 3. 
      span Normatividad internacional RSE.
    .row.justify-content-center.mb-5.bg-color-6(data-aos='fade-up')
       .col-sm-12.col-lg-8.py-4
         figure
           img(src='@/assets/curso/t3/7.svg', alt='').mb-0
    p.mb-0(data-aos='fade-up') Los elementos de la norma son:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/8.png')
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Trabajo forzoso y obligatorio')
            p.mb-0 La empresa no debe practicar ni apoyar el uso del trabajo obligatorio o forzoso; tiene la prohibición de retener salarios, beneficios, documentos de identidad o pertenencias de los trabajadores; el personal debe tener derecho a salir del centro de trabajo después de completar su día laborable y es libre de terminar la relación laboral, en tanto lo notifique, con tiempo razonable, a su empleador.
          
          div(titulo='Seguridad y salud')
            p.mb-0 Proveer un ambiente de trabajo seguro y saludable y adoptar medidas efectivas para prevenir potenciales accidentes y lesiones a la salud del trabajador, surgidos por el trabajo o asociados a él o, también originados durante el mismo, minimizando en la medida que sea razonable, las causas de los peligros inherentes al ambiente de trabajo y teniendo en cuenta el conocimiento actual del sector y de cualquier peligro específico

          div(titulo='Derecho de sindicalización')
            p.mb-0 Derecho de formar, afiliarse y organizar asociaciones sindicales, negociar colectivamente con la empresa, informar; existe la libertad de afiliarse a una organización sin represalias por parte de la empresa.

          div(titulo='Discriminación')
            p.mb-0 Queda prohibida cualquier forma de discriminación en la contratación, remuneración, acceso a la capacitación, promoción, despido o jubilación basada en raza, origen social o nacional, casta, nacimiento, religión, discapacidad, género, orientación sexual, responsabilidad familiar, estado civil, afiliación a sindicatos, opiniones políticas, edad o cualquier otra condición que pueda generar discriminación. La empresa debe respetar los derechos del personal para practicar sus creencias o satisfacer sus necesidades relacionadas con estas condiciones y no interferir en su ejercicio. Asimismo, se prohíbe cualquier comportamiento amenazante, abusivo, explotador o sexualmente coercitivo, incluidos gestos, lenguaje o contacto físico, tanto en el lugar de trabajo como en las instalaciones proporcionadas, por la empresa, para los empleados.
    
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Trabajo infantil')
            p.mb-0 La empresa no debe practicar o apoyar el uso de trabajo infantil. 
            p.mb-4 Remediar los casos de niños que se encuentren trabajando; los niños que asistan y permanezcan en la escuela, mientras sean niños. 
            p.mb-4 Trabajadores jóvenes - Leyes sobre escolaridad obligatoria - Fuera del horario escolar, horas de escuela, trabajo y transporte. Prohíbe trabajar en horario nocturno. 
            p.mb-0 No se debe exponer a niños o a trabajadores jóvenes, a situaciones dentro o fuera del lugar de trabajo que sean peligrosas o inseguras para su salud y desarrollo físico y mental.
          
          div(titulo='Trabajo forzoso y obligatorio')
            p.mb-0 La empresa no debe practicar ni apoyar el uso del trabajo obligatorio o forzoso.
            p.mb-4 Prohibido el pago de "depósitos" o retener, salarios, beneficios, sus documentos de identidad o pertenencias.
            p.mb-4 El personal debe tener derecho a salir del centro de trabajo después de completar su día laborable y es libre de terminar la relación laboral, en tanto lo notifique, con tiempo razonable, a su empleador.
            p.mb-0 Ni la empresa ni entidad alguna que trabaje para ella, deben practicar o apoyar el tráfico de seres humanos.
          div(titulo='Horario de trabajo')
            p.mb-0 La empresa debe cumplir con las leyes aplicables y las normas del sector en relación con las horas de trabajo y días festivos, asegurando que la semana laboral normal no exceda las 48 horas, excluyendo horas extraordinarias. Asimismo, debe garantizar al personal, al menos un día libre después de cada período consecutivo de seis días laborados. En caso de requerir horas extraordinarias para atender demandas a corto plazo, estas deben estar respaldadas por un acuerdo de negociación colectiva con las organizaciones laborales que representen una porción significativa de la fuerza de trabajo, cumpliendo estrictamente con los requisitos legales y normativos aplicables.
          
          div(titulo='Remuneración')
            p.mb-0 La empresa debe garantizar que los salarios pagados cumplan, como mínimo, con las normas legales o del sector, asegurando que sean suficientes para cubrir las necesidades básicas del personal y proporcionar cierta capacidad de gasto discrecional. Las horas extraordinarias deben ser reembolsadas, según las primas salariales establecidas por la legislación nacional; en caso que estas no estén reguladas, la compensación deberá ajustarse a una prima igual o superior a la predominante en el sector, priorizando los intereses de los trabajadores. Además, se prohíbe cualquier deducción salarial por razones disciplinarias.

      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/9.png')

    #t_3_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.2] ISO 26000
    .bg-full-width.bg-color-7.mb-5(data-aos='fade-up')
      .px-5.py-0-cus
        .row.justify-content-center.mb-5.align-items-center
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t3/10.svg', alt='')
          .col-sm-12.col-lg-6
            p.mb-0 La Norma ISO 26000 ha sido preparada por el ISO/TMB Grupo de Trabajo sobre Responsabilidad Social. Esta norma internacional se ha desarrollado utilizando un enfoque de múltiples partes interesadas, con la participación de expertos de más de 90 países y 40 organizaciones internacionales o regionales representativas, que están involucradas en diversos aspectos de la responsabilidad social. Estos expertos procedían de seis grupos distintos de partes interesadas: consumidores, gobierno, industria, trabajadores, organizaciones no gubernamentales, ONG y servicios, apoyo, investigación, academia y otros. Adicionalmente, se tomaron disposiciones específicas para lograr un equilibrio en los grupos de redacción, entre países en desarrollo y desarrollados, así como un equilibrio de género. A pesar que se realizaron esfuerzos para asegurar una participación equilibrada de todos los grupos de las partes interesadas, diversos factores, como la disponibilidad de recursos y la necesidad de manejar el idioma inglés, restringieron el logro del equilibrio completo y equitativo, de las partes interesadas.

    h2.mb-3(data-aos='fade-up')  Objetivo de la ISO 26000
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        p.mb-4 El objetivo de ISO 26000 es el de fortalecer la responsabilidad de las organizaciones por su conducta y acciones en línea con el desarrollo sostenible Al adoptar los requisitos de este estándar, mejorará la reputación, cultura interna y responsabilidad social de su organización La norma ISO 26000 se recomienda a todo tipo de organizaciones, tanto del sector público como privado, independientemente de su tamaño o campo de actividad.
        .bg-color-3.p-4
          p.mb-0 ISO 26000 es una Norma Internacional que da orientación/recomendaciones sobre cómo cualquier organización puede mejorar su Responsabilidad Social y así contribuir al desarrollo sustentable ambiental, social y económico ISO 26000 NO ES CERTIFICABLE ya que no contiene requisitos. Apela a quienes, por cualesquiera razones, buscan mejorar sus procesos operativos e impactos operativos, a través del comportamiento socialmente responsable. ISO es el desarrollador más grande del mundo de normas voluntarias internacionales, usadas por organizaciones de negocios y otras organizaciones; sus miembros son los órganos nacionales de normalización, y sus normas y reconocimiento de nombre, tienen alcance global. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/11.png', alt='')

    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 4. 
      span Vinculaciones entre normas internacionales e ISO 26000.
    .row.justify-content-center.mb-5.bg-color-6(data-aos='fade-up')
       .col-sm-12.col-lg-6.py-4
         figure
           img(src='@/assets/curso/t3/12.svg', alt='').mb-0


    h2.mb-3(data-aos='fade-up') Estructura de la ISO 26000
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/13.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-0 Son siete principios que rigen esta norma, los cuales son: 
        ol.lista-ol--cuadro.lista-ol--cuadro--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Son siete principios que rigen esta norma, los cuales son:
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Transparencia.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Comportamiento ético.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Respeto a los intereses de las partes.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Respeto al principio de legalidad.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Respeto a la normativa internacional de comportamiento.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 7
            p.mb-0 Respeto a los derechos humanos.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/lc/tecnologicadeloriente/titulos/130137' target='_blank' rel='noopener noreferrer') Gorrochategui, N. (2019). Responsabilidad Social de las Organizaciones (rso): Estudios desde la mirada de la Responsabilidad Social hacia los Objetivos de Desarrollo Sostenible en América Latina. RIL editores.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://dialnet.unirioja.es/servlet/articulo?codigo=5527480' target='_blank' rel='noopener noreferrer') Betancur Amariles, J. H. (2010). La ética de la responsabilidad social empresarial. Dialnet.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/articulo.oa?id=64623932002' target='_blank' rel='noopener noreferrer') Aguilera Castro, A. & Puerto Becerra, D. P. (2012). Crecimiento empresarial basado en la responsabilidad social. Redalyc
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.optimove.com/' target='_blank' rel='noopener noreferrer') Optimove 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=AiZ4teFJ2Kw' target='_blank' rel='noopener noreferrer') Une Consultores. (2024). Gestión del cambio en las organizaciones

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=DlCoxfQifes&t=136s' target='_blank' rel='noopener noreferrer') El Blog De Raffo. (2021). S01 GESTION DE LA INNOVACIÓN ¿Qué es innovar? - Tipos de innovación

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=F0r9hl9kYhU' target='_blank' rel='noopener noreferrer') Videoconferencias. (2013). UTPL Normas de la RSE [(RESPONSABILIDAD SOCIAL EMPRESARIAL)]
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: '--',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué se centra la administración estratégica según Gregory G. Dess?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sostener ventajas competitivas con análisis, decisiones y acciones',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar planes financieros para la organización',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proponer metas organizacionales ambiciosas e innovadoras',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar estrategias en entornos predecibles de la organización',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Gregory G. Dess destaca que la administración estratégica busca generar una ventaja competitiva mediante análisis, decisiones y acciones que optimicen la posición de la organización frente a sus competidores.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el atributo más relevante de la planeación estratégica?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La orientación hacia objetivos generales y específicos de la organización',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La implementación de estrategias y procesos más complejos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La ejecución de las responsabilidades dentro de la organización',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar estrategias basadas en la intuición de la alta dirección',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La planeación formal sigue un proceso sistemático y documentado, con planes escritos y cronogramas claros, a diferencia de la informal, que carece de estructura.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué beneficio proporciona la planeación al reducir la incertidumbre en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina completamente los riesgos en las operaciones',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite prever situaciones futuras y adaptarse mejor a cambios',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Facilita la implementación de procesos más complejos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la necesidad de análisis estratégico continuo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La planeación es una herramienta fundamental para anticipar y adaptarse a los cambios futuros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una de las actividades principales en el diagnóstico estratégico dentro del proceso de planeación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La formulación de cronogramas detallados',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación de cabilidades organizacionales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La implementación inmediata de planes de acción',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El análisis del entorno interno y externo de la organización',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El diagnóstico estratégico evalúa factores internos y externos para entender el entorno organizacional, utilizando herramientas como el análisis FODA.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué sugiere el modelo de Henry Mintzberg sobre las estrategias organizacionales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las estrategias son siempre deliberadas y predecibles',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las estrategias combinan elementos deliberados y emergentes',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las estrategias se formulan exclusivamente desde una perspectiva racional',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las estrategias no requieren adaptación al entorno',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Mintzberg propone que las estrategias no son completamente predecibles; incluyen elementos deliberados y emergentes, lo que permite adaptarse a un entorno dinámico y cambiante.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
