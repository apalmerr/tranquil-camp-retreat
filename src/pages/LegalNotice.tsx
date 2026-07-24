import LegalLayout from "./legal/LegalLayout";

const LegalNotice = () => (
  <LegalLayout eyebrow="Legal" title="Aviso Legal" updatedAt="24/07/2026">
    <p>
      El presente Aviso Legal regula el uso del sitio web de PALMER, en cumplimiento de la Ley
      34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio
      electrónico (LSSI-CE).
    </p>

    <h2>Titular del sitio</h2>
    <ul>
      <li>Denominación: PALMER [razón social completa]</li>
      <li>NIF/CIF: [pendiente]</li>
      <li>Domicilio: Mallorca, Illes Balears [dirección completa pendiente]</li>
      <li>Email: <a href="mailto:info@palmer.es">info@palmer.es</a></li>
      <li>Actividad: Integración tecnológica (redes, domótica, audiovisuales, gestión documental y fotovoltaicas).</li>
    </ul>

    <h2>Condiciones de uso</h2>
    <p>
      El acceso y uso de este sitio atribuye la condición de usuario e implica la aceptación de
      este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y
      servicios ofrecidos y a no emplearlos para actividades ilícitas o lesivas de derechos e
      intereses de terceros.
    </p>

    <h2>Propiedad intelectual e industrial</h2>
    <p>
      Todos los contenidos del sitio (textos, imágenes, marcas, logotipos, código y diseño) son
      titularidad de PALMER o de terceros que han autorizado su uso, y están protegidos por la
      normativa de propiedad intelectual e industrial. Queda prohibida su reproducción,
      distribución o transformación sin autorización expresa.
    </p>

    <h2>Responsabilidad</h2>
    <p>
      PALMER no se hace responsable de los daños derivados del uso indebido del sitio ni de los
      contenidos de páginas de terceros a las que se pudiera enlazar desde este sitio.
    </p>

    <h2>Legislación y jurisdicción</h2>
    <p>
      Este Aviso Legal se rige por la legislación española. Para la resolución de cualquier
      controversia, las partes se someten a los Juzgados y Tribunales competentes de Palma de
      Mallorca, salvo cuando la normativa aplicable disponga otro fuero.
    </p>

    <p className="text-xs text-muted-foreground pt-6 border-t border-border">
      Página mantenida por PALMER. Los datos entre corchetes deben completarse por el titular antes
      de la publicación definitiva.
    </p>
  </LegalLayout>
);

export default LegalNotice;