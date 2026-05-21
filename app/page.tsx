"use client";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.lobelapp.com";

const PLANES = [
  {
    id: "STARTER",
    nombre: "Starter",
    precio: 150000,
    descripcion: "Ideal para comenzar",
    color: "border-gray-200",
    badge: null,
    usuarios: "Hasta 3 usuarios",
    empresas: "1 empresa",
    modulos: ["Dashboard", "Terceros", "Facturación electrónica DIAN"],
  },
  {
    id: "PROFESIONAL",
    nombre: "Profesional",
    precio: 350000,
    descripcion: "El más elegido por pymes",
    color: "border-blue-500",
    badge: "Más popular",
    usuarios: "Hasta 10 usuarios",
    empresas: "1 empresa",
    modulos: [
      "Todo lo de Starter",
      "Contabilidad completa",
      "Nómina",
      "Inventario",
      "Compras",
      "Cartera",
      "Tributario",
      "Conciliación bancaria",
    ],
  },
  {
    id: "EMPRESARIAL",
    nombre: "Empresarial",
    precio: 700000,
    descripcion: "Para grupos empresariales",
    color: "border-gray-800",
    badge: null,
    usuarios: "Usuarios ilimitados",
    empresas: "Hasta 5 empresas",
    modulos: [
      "Todo lo de Profesional",
      "Tesorería",
      "Importaciones",
      "Contingencia offline",
      "Subdominio propio",
    ],
  },
];

const FAQS = [
  {
    q: "¿Incluye facturación electrónica DIAN?",
    a: "Sí, todos los planes incluyen facturación electrónica validada ante la DIAN. Emites facturas en segundos desde cualquier dispositivo.",
  },
  {
    q: "¿Puedo migrar mis datos desde otro sistema?",
    a: "Sí. Nuestro equipo te acompaña en la migración de terceros, saldos iniciales y catálogo de productos sin costo adicional.",
  },
  {
    q: "¿Qué pasa si supero el límite de usuarios?",
    a: "Puedes actualizar tu plan en cualquier momento. Solo pagas la diferencia proporcional al tiempo restante del mes.",
  },
  {
    q: "¿Los datos están seguros?",
    a: "Tus datos viven en AWS con backups diarios automáticos, encriptación en tránsito y en reposo. Certificación SOC 2 en proceso.",
  },
  {
    q: "¿Hay contrato de permanencia?",
    a: "No. El pago es mensual y puedes cancelar cuando quieras. Sin letra pequeña.",
  },
  {
    q: "¿Qué soporte tienen?",
    a: "Soporte técnico por WhatsApp y email en horario laboral. Planes Profesional y Empresarial incluyen soporte contable.",
  },
];

function formatCOP(valor: number) {
  return "$" + valor.toLocaleString("es-CO");
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          ERP colombiano en la nube
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Gestiona tu empresa{" "}
          <span className="text-blue-400">desde un solo lugar</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Facturación electrónica DIAN, contabilidad, nómina, inventario y más.
          Sin servidores propios, sin instalaciones. Desde{" "}
          <strong className="text-white">$150.000/mes</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#planes"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Ver planes y precios
          </a>
          <a
            href="#demo"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Ver demo
          </a>
        </div>
      </div>
    </section>
  );
}

function VideoDemo() {
  return (
    <section id="demo" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mira LOBEL ERP en acción
          </h2>
          <p className="text-gray-600 text-lg">
            Un recorrido completo por los módulos principales en menos de 3
            minutos.
          </p>
        </div>
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
          {/* Placeholder hasta subir el video a S3 */}
          <div className="text-center text-white p-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 ml-1" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xl font-semibold mb-2">Demo disponible pronto</p>
            <p className="text-gray-400">
              Mientras tanto, agenda una demo personalizada con nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Planes() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [slugs, setSlugs] = useState<Record<string, string>>({});
  const [slugStatus, setSlugStatus] = useState<
    Record<string, "idle" | "checking" | "ok" | "taken">
  >({});

  async function verificarSlug(plan: string) {
    const slug = slugs[plan];
    if (!slug || slug.length < 3) return;
    setSlugStatus((s) => ({ ...s, [plan]: "checking" }));
    try {
      const r = await fetch(
        `${API_URL}/api/v1/licencias/slug-disponible/${slug}`
      );
      const data = await r.json();
      setSlugStatus((s) => ({
        ...s,
        [plan]: data.disponible ? "ok" : "taken",
      }));
    } catch {
      setSlugStatus((s) => ({ ...s, [plan]: "idle" }));
    }
  }

  async function comprar(planId: string) {
    setLoadingPlan(planId);
    try {
      const body: Record<string, string> = { plan: planId };
      if (slugs[planId]) body.subdominio = slugs[planId];
      const r = await fetch(`${API_URL}/api/v1/licencias/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await r.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else if (data.epayco_config && window.ePayco) {
        const handler = window.ePayco.checkout.configure(data.epayco_config);
        handler.open();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <section id="planes" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Planes y precios
          </h2>
          <p className="text-gray-500 text-lg">
            Todos los planes incluyen facturación electrónica DIAN y soporte
            técnico. Sin contratos. Cancela cuando quieras.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANES.map((plan) => {
            const needsSlug =
              plan.id === "PROFESIONAL" || plan.id === "EMPRESARIAL";
            const slug = slugs[plan.id] || "";
            const status = slugStatus[plan.id] || "idle";
            return (
              <div
                key={plan.id}
                className={`relative border-2 ${plan.color} rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.nombre}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.descripcion}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {formatCOP(plan.precio)}
                  </span>
                  <span className="text-gray-400 text-sm">/mes + IVA</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  <li className="text-sm text-blue-700 font-semibold">
                    {plan.usuarios}
                  </li>
                  <li className="text-sm text-blue-700 font-semibold">
                    {plan.empresas}
                  </li>
                  {plan.modulos.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>

                {needsSlug && (
                  <div className="mb-4">
                    <label className="block text-xs text-gray-500 mb-1 font-medium">
                      Tu subdominio
                    </label>
                    <div className="flex gap-1">
                      <input
                        type="text"
                        placeholder="miempresa"
                        value={slug}
                        onChange={(e) => {
                          const v = e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9-]/g, "")
                            .slice(0, 30);
                          setSlugs((s) => ({ ...s, [plan.id]: v }));
                          setSlugStatus((s) => ({ ...s, [plan.id]: "idle" }));
                        }}
                        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button
                        onClick={() => verificarSlug(plan.id)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 px-3 rounded-lg transition-colors"
                      >
                        {status === "checking" ? "..." : "Verificar"}
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {slug && (
                        <span className="text-gray-500">
                          {slug}.lobelapp.com
                        </span>
                      )}
                      {status === "ok" && (
                        <span className="text-green-600 ml-2">
                          ✓ Disponible
                        </span>
                      )}
                      {status === "taken" && (
                        <span className="text-red-500 ml-2">
                          ✗ No disponible
                        </span>
                      )}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => comprar(plan.id)}
                  disabled={
                    loadingPlan === plan.id ||
                    (needsSlug && status === "taken") ||
                    (needsSlug && slug.length > 0 && status === "idle")
                  }
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                    ${plan.id === "PROFESIONAL"
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-gray-900 hover:bg-gray-700 text-white"
                    }`}
                >
                  {loadingPlan === plan.id ? "Procesando..." : "Comprar ahora"}
                </button>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Precios en pesos colombianos (COP). IVA 19% adicional. Pago mensual
          por PSE, tarjeta de crédito, Nequi o Daviplata.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <span className="text-blue-500 text-lg ml-4">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente de LOBEL ERP. ¿En qué puedo ayudarte? Puedo contarte sobre planes, módulos, precios o agendar una demo.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function enviar() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const r = await fetch(`${API_URL}/api/v1/landing/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });
      const data = await r.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.response || "Lo siento, intenta de nuevo." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Error de conexión. Intenta de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Abrir chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3">
            <p className="font-semibold text-sm">Asistente LOBEL</p>
            <p className="text-xs text-blue-200">Responde al instante</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-xl px-3 py-2 text-sm text-gray-500">
                  Escribiendo...
                </div>
              </div>
            )}
          </div>
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviar()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={enviar}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm transition-colors disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-bold text-lg mb-1">LOBEL ERP</p>
          <p className="text-sm">El ERP colombiano para tu empresa</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="mailto:info@lobelapp.com" className="hover:text-white transition-colors">
            info@lobelapp.com
          </a>
          <a href="https://app.lobelapp.com" className="hover:text-white transition-colors">
            Iniciar sesión
          </a>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} LOBEL ERP. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

declare global {
  interface Window {
    ePayco?: {
      checkout: {
        configure: (config: unknown) => { open: () => void };
      };
    };
  }
}

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <VideoDemo />
      <Planes />
      <FAQ />
      <ChatWidget />
      <Footer />
    </main>
  );
}
