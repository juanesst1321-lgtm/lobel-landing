import Link from "next/link";

export function LegalShell({
  titulo,
  actualizado,
  children,
}: {
  titulo: string;
  actualizado: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-slate-900">LOBEL ERP</Link>
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">← Volver al inicio</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 legal-content">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{titulo}</h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: {actualizado}</p>
        <div className="space-y-5 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-blue-600 [&_a:hover]:text-blue-800">
          {children}
        </div>
      </article>
    </main>
  );
}
