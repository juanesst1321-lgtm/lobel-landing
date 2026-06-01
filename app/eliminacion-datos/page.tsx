import { LegalShell } from "../LegalShell";

export const metadata = {
  title: "Eliminación de datos — LOBEL ERP",
  description: "Cómo solicitar la eliminación de tus datos personales en LOBEL ERP.",
};

export default function EliminacionDatosPage() {
  return (
    <LegalShell titulo="Instrucciones para la eliminación de datos" actualizado="21 de mayo de 2026">
      <p>
        En <strong>LOBEL ERP</strong> (operado por <strong>LOBEL CAPITAL GROUP LLC</strong>) respetamos tu
        derecho a solicitar la eliminación de tus datos personales, incluida la información asociada a tus
        interacciones por WhatsApp.
      </p>

      <h2>Cómo solicitar la eliminación</h2>
      <ul>
        <li>
          Envía un correo a <a href="mailto:soportetecnico@lobelapp.com">soportetecnico@lobelapp.com</a> con el
          asunto <strong>&ldquo;Eliminación de datos&rdquo;</strong>.
        </li>
        <li>
          Indica tu nombre completo, el número de teléfono y/o correo con el que interactuaste con nosotros, y
          (si aplica) la empresa asociada.
        </li>
        <li>Confirmaremos tu identidad antes de procesar la solicitud, por seguridad.</li>
      </ul>

      <h2>Qué eliminamos</h2>
      <p>
        Eliminaremos los datos personales asociados a tu solicitud, incluido el historial de conversaciones por
        WhatsApp y los datos de contacto, salvo aquella información que debamos conservar por obligaciones
        legales, contables o tributarias (por ejemplo, soportes de facturación exigidos por la ley).
      </p>

      <h2>Plazo</h2>
      <p>
        Procesaremos tu solicitud en un plazo razonable, generalmente dentro de los 15 días hábiles siguientes a
        la verificación de tu identidad, y te confirmaremos cuando se haya completado.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre este proceso, escríbenos a{" "}
        <a href="mailto:soportetecnico@lobelapp.com">soportetecnico@lobelapp.com</a> o{" "}
        <a href="mailto:info@lobelapp.com">info@lobelapp.com</a>.
      </p>
    </LegalShell>
  );
}
