import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <div className="text-white font-bold text-lg mb-2">LOBEL ERP</div>
            <p className="text-sm leading-relaxed">
              Sistema de gestión empresarial en la nube para pymes colombianas: facturación
              electrónica DIAN, contabilidad, inventario, nómina y más.
            </p>
            <p className="text-sm mt-3">
              Operado por <span className="text-slate-300">LOBEL CAPITAL GROUP LLC</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <div className="text-white font-semibold text-sm mb-3">Legal</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><Link href="/terminos" className="hover:text-white transition-colors">Términos del Servicio</Link></li>
                <li><Link href="/eliminacion-datos" className="hover:text-white transition-colors">Eliminación de datos</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">Contacto</div>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@lobelapp.com" className="hover:text-white transition-colors">info@lobelapp.com</a></li>
                <li><a href="mailto:soportetecnico@lobelapp.com" className="hover:text-white transition-colors">Soporte técnico</a></li>
                <li><a href="https://app.lobelapp.com" className="hover:text-white transition-colors">Ingresar a la plataforma</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} LOBEL CAPITAL GROUP LLC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
