# Prompt listo para entregar al siguiente agente

Actúa como desarrollador frontend senior con criterio de UX, SEO técnico y marketing industrial B2B. Continúa el sitio de **Maquinados Castro** usando el código Astro adjunto y `docs/SDD_MAQUINADOS_CASTRO.md` como especificación. Lee primero ese SDD, README, package.json y las instrucciones locales aplicables. No vuelvas a investigar lo ya documentado salvo una duda concreta o información técnica desactualizada.

## Resultado buscado

Una web industrial moderna que proyecte capacidad y confianza para captar empresas grandes en Guadalajara y clientes de otros estados. Debe verse como un taller consolidado, con más de 25 años, capaz de atender proyectos exigentes. El objetivo es conseguir cotizaciones calificadas y relaciones comerciales recurrentes.

## Hechos confirmados

- Nombre: Maquinados Industriales Castro (MIC); Guadalajara, Jalisco.
- Más de 20 años de experiencia. No publicar año de fundación.
- Varios CNC: tanto de torno como de perfiladora/fresado.
- Tornos de gran tamaño, perfiladoras, rectificadoras y otros equipos.
- Clientes de otros estados.
- Dulces de la Rosa es cliente, confirmado por el usuario.

## Reglas de contenido

Trabaja con iniciativa y placeholders: el usuario completará manualmente dirección, contacto, inventario detallado, fotografías, testimonios y casos. No bloquees el trabajo solicitando esos datos. Centraliza lo editable. Se pueden proponer aplicaciones y servicios complementarios para revisión, marcados como pendientes; no inventes tolerancias, certificaciones, cantidades de máquinas, dimensiones máximas, testimonios o plazos garantizados.

La aspiración «ser el mejor taller de Guadalajara» es una dirección de calidad, diseño y posicionamiento. No la presentes como ranking comprobado. No atribuyas frases de recomendación a Dulces de la Rosa. No uses stock como si fuera una foto del taller.

## Implementación

1. Reutiliza el Astro estático existente. No migres a otro stack ni lo rehagas completo sin una razón demostrable.
2. Revisa el prototipo actual y completa los faltantes del SDD: responsive, contacto editable visible, fichas de maquinaria, estructura de casos cuando haya datos y flujo de cotización real según lo autorizado.
3. Conserva una estética industrial de grafito, blanco y naranja; tipografía clara, fotografía de maquinaria real y CTAs orientados a cotización. Mejora la composición si aporta calidad, sin generar alternativas interminables.
4. Separa torno CNC, fresado CNC, gran formato, rectificado, maquinado convencional y refacciones. Diferencia confirmado y propuesto.
5. Mantén HTML semántico, carga rápida y JS mínimo. Las páginas de servicio adicionales se crean solo cuando tengan contenido útil propio; evita páginas duplicadas por ciudad.
6. Revisa que los nuevos campos de `business.ts` se muestren donde corresponda: actualmente algunos son solo configuración pendiente de conectar.
7. El formulario actual prepara/copia un mensaje; no es un envío al taller. Mantén esa distinción. WhatsApp funciona al configurar el número. No introduzcas API, uploads o CRM sin necesidad acordada.
8. Mantén preview sin indexar hasta validar contenido y dominio. No inventes datos de LocalBusiness, reseñas o geolocalización.
9. No publiques ni gastes en anuncios. No actives servicios externos con datos de ejemplo.

## Forma de trabajar

Primero resume en máximo 8 puntos qué está hecho y qué falta. Después ejecuta la mejora solicitada por el usuario usando el SDD; no consumas turnos en planeación reiterativa. Haz cambios pequeños y verificables. Mantén package-lock.json y documenta cualquier dependencia necesaria.

Verifica build, navegación, formulario y responsive en móvil/escritorio. No declares Lighthouse, accesibilidad total, conversiones o SEO como validados si no los mediste. No escribas tests que solo reflejen el código ni añadas arquitectura innecesaria.

Entrega al final: resultado ejecutable, archivos modificados, validación realizada y pendientes reales en una lista breve. Incluye instrucciones claras para que el usuario complete sus datos manualmente.
