import { LegalShell } from "../LegalShell";

export const metadata = {
  title: "Términos del Servicio — LOBEL ERP",
  description: "Términos y condiciones de uso de LOBEL ERP.",
};

export default function TerminosPage() {
  return (
    <LegalShell titulo="Términos del Servicio" actualizado="21 de mayo de 2026">
      <p>
        Estos Términos del Servicio regulan el uso de la plataforma <strong>LOBEL ERP</strong>, operada por{" "}
        <strong>LOBEL CAPITAL GROUP LLC</strong>. Al crear una cuenta o usar el servicio, aceptas estos términos.
      </p>

      <h2>1. Descripción del servicio</h2>
      <p>
        LOBEL ERP es un software de gestión empresarial en la nube (facturación electrónica, contabilidad,
        inventario, nómina, cartera, compras y módulos relacionados) ofrecido bajo suscripción.
      </p>

      <h2>2. Cuentas y responsabilidad del usuario</h2>
      <ul>
        <li>Eres responsable de la veracidad de la información que registras y de la actividad de tu cuenta.</li>
        <li>Debes mantener la confidencialidad de tus credenciales de acceso.</li>
        <li>Eres responsable del cumplimiento tributario y legal de los documentos que generes con la plataforma.</li>
      </ul>

      <h2>3. Uso aceptable</h2>
      <p>
        No está permitido usar el servicio para fines ilícitos, vulnerar la seguridad de la plataforma, acceder a
        datos de terceros sin autorización, ni revender el servicio sin acuerdo previo.
      </p>

      <h2>4. Suscripción y pagos</h2>
      <p>
        El acceso al servicio está sujeto al pago de la suscripción según el plan contratado. La falta de pago
        puede suspender el acceso. Los valores y condiciones se informan al momento de la contratación.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        El software, la marca y los contenidos de LOBEL son propiedad de LOBEL CAPITAL GROUP LLC. Los datos que
        cargues en la plataforma son y siguen siendo tuyos.
      </p>

      <h2>6. Disponibilidad y limitación de responsabilidad</h2>
      <p>
        Procuramos la mayor disponibilidad posible, pero el servicio se presta &ldquo;tal cual&rdquo;. En la
        medida permitida por la ley, LOBEL no será responsable por daños indirectos derivados del uso o la
        imposibilidad de uso del servicio.
      </p>

      <h2>7. Terminación</h2>
      <p>
        Puedes cancelar tu suscripción en cualquier momento. Podemos suspender o terminar el servicio ante un
        incumplimiento de estos términos. Tras la terminación puedes solicitar la exportación o eliminación de
        tus datos.
      </p>

      <h2>8. Ley aplicable</h2>
      <p>
        Estos términos se rigen por la legislación aplicable según la jurisdicción de prestación del servicio.
        Cualquier controversia se resolverá ante los tribunales competentes.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Dudas sobre estos términos: <a href="mailto:info@lobelapp.com">info@lobelapp.com</a> ·
        Soporte: <a href="mailto:soportetecnico@lobelapp.com">soportetecnico@lobelapp.com</a>.
      </p>
    </LegalShell>
  );
}
