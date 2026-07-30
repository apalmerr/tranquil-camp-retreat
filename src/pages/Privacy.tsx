import LegalLayout from "./legal/LegalLayout";

const Privacy = () => (
  <LegalLayout eyebrow="Legal" title="Política de Privacidad" updatedAt="24/07/2026">
    <p>
      En Arnau Palmer nos tomamos la protección de tus datos personales muy en serio. Esta política
      explica qué datos recogemos, con qué finalidad, con qué base legal y qué derechos tienes
      sobre ellos, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 de
      Protección de Datos y garantía de derechos digitales (LOPDGDD).
    </p>

    <h2>Responsable del tratamiento</h2>
    <ul>
      <li>Titular: ARNAU PALMER</li>
      <li>NIF/CIF: [pendiente]</li>
      <li>Domicilio: Mallorca, Illes Balears [dirección completa pendiente]</li>
      <li>Email: <a href="mailto:arnau@palmerit.es">arnau@palmerit.es</a></li>
    </ul>

    <h2>Datos que tratamos y finalidad</h2>
    <ul>
      <li>
        <strong>Formulario de contacto:</strong> nombre, email, asunto y mensaje, con la finalidad
        de atender tu consulta o solicitud de presupuesto.
      </li>
      <li>
        <strong>Comunicaciones por email:</strong> los datos que tú mismo nos facilites al
        escribirnos, para mantener la relación comercial o resolver tu petición.
      </li>
      <li>
        <strong>Datos de navegación técnicos:</strong> información estrictamente necesaria para el
        funcionamiento del sitio (ver Política de Cookies).
      </li>
    </ul>

    <h2>Base legal</h2>
    <ul>
      <li>Tu consentimiento explícito al enviar el formulario o al aceptar cookies no esenciales.</li>
      <li>La ejecución de un contrato o de medidas precontractuales cuando solicitas un servicio.</li>
      <li>El cumplimiento de obligaciones legales aplicables.</li>
    </ul>

    <h2>Plazo de conservación</h2>
    <p>
      Conservamos tus datos el tiempo estrictamente necesario para atender tu solicitud y, cuando
      exista relación contractual, durante los plazos legalmente exigibles (fiscal, mercantil).
      Transcurridos esos plazos, los datos se eliminan o se anonimizan.
    </p>

    <h2>Destinatarios</h2>
    <p>
      No cedemos tus datos a terceros salvo obligación legal. Podemos apoyarnos en proveedores
      tecnológicos (hosting, correo, herramientas de gestión) que actúan como encargados del
      tratamiento bajo contrato conforme al artículo 28 del RGPD y ubicados preferentemente en el
      Espacio Económico Europeo.
    </p>

    <h2>Tus derechos</h2>
    <p>
      Puedes ejercer los siguientes derechos sobre tus datos personales:
    </p>
    <ul>
      <li>Acceso a los datos que tratamos sobre ti.</li>
      <li>Rectificación de datos inexactos o incompletos.</li>
      <li>Supresión ("derecho al olvido") cuando ya no sean necesarios.</li>
      <li>Limitación del tratamiento en los supuestos legalmente previstos.</li>
      <li>Oposición al tratamiento por motivos relacionados con tu situación particular.</li>
      <li>Portabilidad de los datos que nos hayas facilitado.</li>
      <li>Retirar el consentimiento en cualquier momento, sin efectos retroactivos.</li>
    </ul>
    <p>
      Para ejercerlos, escríbenos a <a href="mailto:arnau@palmerit.es">arnau@palmerit.es</a> indicando el
      derecho que deseas ejercer y adjuntando copia de un documento identificativo. También puedes
      presentar una reclamación ante la Agencia Española de Protección de Datos (
      <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>) si consideras
      que tus derechos no han sido correctamente atendidos.
    </p>

    <h2>Medidas de seguridad</h2>
    <p>
      Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a
      pérdida, acceso no autorizado o alteración, revisando periódicamente su eficacia.
    </p>

    <p className="text-xs text-muted-foreground pt-6 border-t border-border">
      Página mantenida por ARNAU PALMER. Los datos fiscales entre corchetes deben completarse por el
      titular antes de la publicación definitiva.
    </p>
  </LegalLayout>
);

export default Privacy;