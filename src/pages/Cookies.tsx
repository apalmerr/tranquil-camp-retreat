import LegalLayout from "./legal/LegalLayout";

const Cookies = () => (
  <LegalLayout eyebrow="Legal" title="Política de Cookies" updatedAt="24/07/2026">
    <p>
      Esta Política de Cookies explica qué son las cookies, cómo las utiliza PALMER en este sitio web
      y qué opciones tienes para gestionarlas. Al continuar navegando aceptas el uso de cookies
      técnicas necesarias; el resto solo se activarán si otorgas tu consentimiento a través del
      banner de cookies.
    </p>

    <h2>¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo (ordenador,
      móvil o tablet) cuando lo visitas. Sirven para recordar información sobre tu visita, como el
      idioma preferido u otras opciones, con el objetivo de mejorar tu próxima visita y hacer el
      sitio más útil.
    </p>

    <h2>Tipos de cookies que utilizamos</h2>
    <h3>Cookies técnicas (necesarias)</h3>
    <p>
      Son imprescindibles para el correcto funcionamiento del sitio. Permiten recordar tu
      preferencia de idioma, tu decisión sobre el banner de cookies y mantener la sesión de
      navegación. No requieren consentimiento.
    </p>
    <h3>Cookies de preferencias</h3>
    <p>
      Recuerdan opciones de personalización que hayas elegido, como el idioma. Se activan
      únicamente si son necesarias para la funcionalidad solicitada.
    </p>
    <h3>Cookies de medición y de terceros</h3>
    <p>
      Actualmente este sitio no incorpora cookies analíticas ni publicitarias de terceros. Si en el
      futuro añadimos herramientas como Google Analytics, píxeles de redes sociales o mapas
      embebidos, actualizaremos esta política y solicitaremos tu consentimiento previo.
    </p>

    <h2>Gestión y revocación del consentimiento</h2>
    <p>
      Puedes aceptar o rechazar el uso de cookies no esenciales desde el banner que se muestra al
      entrar en el sitio. Para retirar tu consentimiento en cualquier momento, borra las cookies del
      sitio en tu navegador y volveremos a preguntarte en la siguiente visita.
    </p>
    <p>
      La mayoría de navegadores permiten gestionar las cookies desde su configuración:
    </p>
    <ul>
      <li>Google Chrome</li>
      <li>Mozilla Firefox</li>
      <li>Safari</li>
      <li>Microsoft Edge</li>
    </ul>

    <h2>Contacto</h2>
    <p>
      Para cualquier duda sobre esta política puedes escribirnos a{" "}
      <a href="mailto:arnau@palmerit.es">arnau@palmerit.es</a>.
    </p>

    <p className="text-xs text-muted-foreground pt-6 border-t border-border">
      Esta página es mantenida por PALMER para responder preguntas comunes sobre privacidad y uso de
      cookies en este sitio. No constituye una certificación por parte de terceros.
    </p>
  </LegalLayout>
);

export default Cookies;