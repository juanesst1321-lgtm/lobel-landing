import { LegalShell } from "../LegalShell";

export const metadata = {
  title: "Política de Privacidad — LOBEL ERP",
  description: "Política de tratamiento de datos personales de LOBEL ERP.",
};

export default function PrivacidadPage() {
  return (
    <LegalShell titulo="Política de Privacidad" actualizado="21 de mayo de 2026">
      <p>
        Esta Política de Privacidad describe cómo <strong>LOBEL CAPITAL GROUP LLC</strong> (en adelante
        &ldquo;LOBEL&rdquo;, &ldquo;nosotros&rdquo;), responsable del tratamiento, recopila, usa y protege la
        información de los usuarios de la plataforma <strong>LOBEL ERP</strong> y de sus canales de atención,
        incluido WhatsApp.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        LOBEL CAPITAL GROUP LLC — 1012 E Osceola Parkway Suite 8, Kissimmee, FL 34744 (USA). Correo de
        contacto: <a href="mailto:info@lobelapp.com">info@lobelapp.com</a>.
      </p>

      <h2>2. Qué datos recopilamos</h2>
      <ul>
        <li>Datos de identificación y contacto: nombre, identificación/NIT, correo, teléfono, dirección.</li>
        <li>Datos de la empresa cliente: razón social, datos tributarios y contables necesarios para operar el ERP.</li>
        <li>Datos de uso: registros de actividad, dispositivo, dirección IP y métricas de la plataforma.</li>
        <li>
          Comunicaciones por WhatsApp: número de teléfono y contenido de los mensajes que nos envías a través
          de la API de WhatsApp Business (Meta), para poder atenderte.
        </li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <ul>
        <li>Prestar y administrar el servicio del ERP (facturación, contabilidad, inventario, nómina, etc.).</li>
        <li>Atender solicitudes y brindar soporte por nuestros canales, incluido el asistente de WhatsApp.</li>
        <li>Gestionar la facturación y el cobro de la suscripción.</li>
        <li>Cumplir obligaciones legales y tributarias aplicables.</li>
        <li>Mejorar la seguridad y el funcionamiento de la plataforma.</li>
      </ul>

      <h2>4. Datos a través de WhatsApp y Meta</h2>
      <p>
        Cuando interactúas con nuestro número de WhatsApp, los mensajes se procesan mediante la API de WhatsApp
        Business proporcionada por Meta Platforms, Inc. Usamos esa información únicamente para responder tus
        consultas y prestar el servicio. No vendemos ni compartimos tus mensajes con terceros con fines
        publicitarios.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservamos los datos mientras exista una relación contractual o sea necesario para las finalidades
        descritas y para cumplir obligaciones legales. Luego se eliminan o anonimizan de forma segura.
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        De acuerdo con la Ley 1581 de 2012 (Colombia) y la normativa de protección de datos aplicable, puedes
        conocer, actualizar, rectificar y solicitar la supresión de tus datos, así como revocar la
        autorización. Para ejercer estos derechos escríbenos a{" "}
        <a href="mailto:soportetecnico@lobelapp.com">soportetecnico@lobelapp.com</a>. Consulta también nuestras{" "}
        <a href="/eliminacion-datos">instrucciones para eliminar tus datos</a>.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables (cifrado en tránsito, control de acceso por roles
        y aislamiento por empresa) para proteger tu información frente a accesos no autorizados.
      </p>

      <h2>8. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha de
        actualización.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para cualquier inquietud sobre esta política o el tratamiento de tus datos, escríbenos a{" "}
        <a href="mailto:info@lobelapp.com">info@lobelapp.com</a>.
      </p>
    </LegalShell>
  );
}
