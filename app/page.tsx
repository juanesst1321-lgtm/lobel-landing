"use client";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.lobelapp.com";

// ── SVG Logos ──────────────────────────────────────────────────────────────
function LogoAWS() {
  return (
    <svg width="52" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.9 19.6c-.8.3-1.7.5-2.6.5-3.6 0-6-2.7-6-6.3 0-3.5 2.5-6.4 6.1-6.4.9 0 1.8.2 2.5.5l-.5 1.6c-.6-.3-1.3-.4-2-.4-2.6 0-4.2 2-4.2 4.7 0 2.8 1.7 4.6 4.1 4.6.8 0 1.5-.1 2.1-.4l.5 1.6z" fill="white"/>
      <path d="M30 20h-1.8l-3.6-12.4h1.9l2 7.4.5 2.1h.1l.5-2.1 2.3-7.4h1.7l2.3 7.4.5 2.1h.1l.5-2.1 2-7.4h1.8L37.4 20h-1.8l-2.4-8-.3-1.3h-.1l-.3 1.3L30 20z" fill="white"/>
      <path d="M45.4 20.2c-2.7 0-4.5-2-4.5-4.8 0-2.9 1.8-4.9 4.5-4.9 2.6 0 4.4 2 4.4 4.9 0 2.8-1.8 4.8-4.4 4.8zm0-1.5c1.6 0 2.6-1.4 2.6-3.3 0-2-.9-3.4-2.6-3.4-1.7 0-2.7 1.4-2.7 3.4 0 2 1 3.3 2.7 3.3z" fill="white"/>
      <path d="M12 27.5C5.5 25 1 19.2 1 12.5 1 5.6 6.1 0 12.5 0h55C73.9 0 79 5.6 79 12.5c0 6.7-4.5 12.5-11 15" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function LogoMeta() {
  return (
    <svg width="44" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 22C6 22 10 8 20 8C26 8 28 14 28 14C28 14 30 8 38 8C46 8 48 16 48 16C48 16 50 8 58 8C68 8 74 22 74 22" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function LogoAnthropic() {
  return (
    <svg width="36" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.2 14H33.8L14 66h13.5l4-11.2h17L52.5 66H66L46.2 14zm-11.5 30.2L40 28.3l5.3 15.9H34.7z" fill="white"/>
    </svg>
  );
}

function LogoCloudflare() {
  return (
    <svg width="56" height="32" viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M74.5 26.2l1.5-5.2c.1-.3.1-.5-.2-.7L73 18.9c-.2-.1-.4-.1-.5.1l-1.6 5.5c-.4 1.3-1.6 2.2-3 2.2H50.4c-.2 0-.3.1-.4.3l-.5 1.7c-.1.4.2.7.6.7H67c3.1 0 5.9-2 7-5l.5-1.5v.3z" fill="white"/>
      <path d="M77.5 15.3c-.2 0-.4.1-.5.3l-1 3.4c-.4 1.3-1.6 2.2-3 2.2H56.5c-.2 0-.4.1-.4.3l-.5 1.7c-.1.4.2.7.6.7h16.5c3.1 0 5.9-2 7-5l.5-1.7c.1-.4-.2-.7-.6-.7l-2.1.8z" fill="white" opacity=".7"/>
      <text x="5" y="30" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill="white">CF</text>
    </svg>
  );
}

const LOGOS = [
  { Logo: LogoAWS, name: "AWS" },
  { Logo: LogoMeta, name: "Meta" },
  { Logo: LogoAnthropic, name: "Anthropic" },
  { Logo: LogoCloudflare, name: "Cloudflare" },
];

// ── Planes ─────────────────────────────────────────────────────────────────
const PLANES = [
  {
    id: "STARTER",
    nombre: "Básica",
    precio: "$150.000",
    descripcion: "Para comenzar a digitalizar tu empresa",
    accent: "from-slate-600 to-slate-800",
    border: "border-slate-200",
    btnBorder: "border-slate-300 text-gray-700 hover:bg-gray-50",
    badge: null,
    modulos: ["Dashboard e indicadores", "Gestión de terceros", "Facturación electrónica DIAN", "Hasta 3 usuarios", "Soporte por email"],
    noIncluye: ["WhatsApp Bot", "Inteligencia Artificial", "Multi-empresa"],
  },
  {
    id: "PROFESIONAL",
    nombre: "Pyme",
    precio: "$350.000",
    descripcion: "Control total para empresas en crecimiento",
    accent: "from-blue-600 to-blue-800",
    border: "border-blue-500",
    btnBorder: "border-blue-500 text-blue-700 hover:bg-blue-50",
    badge: "Más popular",
    modulos: ["Todo lo del plan Básica", "Inventario y bodegas", "Compras y proveedores", "Cartera de clientes", "Nómina básica", "Contabilidad completa", "WhatsApp Bot integrado", "Hasta 10 usuarios", "Soporte prioritario"],
    noIncluye: ["Inteligencia Artificial", "Multi-empresa"],
  },
  {
    id: "EMPRESARIAL",
    nombre: "Empresarial",
    precio: "$700.000",
    descripcion: "Solución completa con IA para empresas",
    accent: "from-[#0E2A47] to-[#1a3d6b]",
    border: "border-[#0E2A47]",
    btnBorder: "border-[#0E2A47] text-[#0E2A47] hover:bg-slate-50",
    badge: "Completo + IA",
    modulos: ["Todo lo del plan Pyme", "Multi-empresa (hasta 5)", "Módulo de importaciones", "Contingencia offline", "Conciliación bancaria", "Tributario y retenciones", "IA (Claude) integrada", "Usuarios ilimitados", "Soporte dedicado"],
    noIncluye: [],
  },
];

const FEATURES = [
  { icon: "🧾", title: "Facturación Electrónica DIAN", desc: "FE, notas crédito/débito y facturas de compra validadas en segundos. Cumplimiento total con la DIAN." },
  { icon: "📊", title: "Contabilidad", desc: "Asientos automáticos por cada documento. Balance de prueba, estados financieros y libro mayor en tiempo real." },
  { icon: "📦", title: "Inventario", desc: "Control de stock por bodega, alertas de mínimos, costos promedio y trazabilidad completa de movimientos." },
  { icon: "👥", title: "Nómina", desc: "Liquidación automática con aportes SENA, ICBF, Caja y seguridad social. Comprobantes de pago incluidos." },
  { icon: "💬", title: "WhatsApp Bot + IA", desc: "Don Luis: tu asistente de ventas inteligente. Consulta stock, crea pedidos y atiende clientes por WhatsApp." },
  { icon: "🏦", title: "Cartera & Tesorería", desc: "CxC, CxP, conciliación bancaria y control de vencimientos. Nunca pierdas de vista tu flujo de caja." },
];

const WHY = [
  { icon: "☁️", title: "100% en la nube AWS", desc: "Sin instalaciones, sin servidores propios. Accede desde cualquier dispositivo con internet." },
  { icon: "🤖", title: "Inteligencia Artificial", desc: "IA integrada que aprende de tu negocio y te ayuda a tomar mejores decisiones comerciales." },
  { icon: "🇨🇴", title: "Hecho para Colombia", desc: "Totalmente alineado con DIAN, UGPP, Supersociedades y la normativa tributaria colombiana." },
  { icon: "🔒", title: "Seguridad empresarial", desc: "Datos cifrados, autenticación 2FA, backups diarios y redundancia geográfica en AWS." },
];

// ── Modales ────────────────────────────────────────────────────────────────
type FormState = { empresa_nombre: string; email_contacto: string; telefono: string; ciudad: string };

function TrialModal({ plan, planId, onClose }: { plan: string; planId: string; onClose: () => void }) {
  const [form, setForm] = useState<FormState>({ empresa_nombre: "", email_contacto: "", telefono: "", ciudad: "" });
  const [estado, setEstado] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [codigo, setCodigo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.empresa_nombre.trim() || !form.email_contacto.trim()) return;
    setEstado("loading");
    try {
      const res = await fetch(`${API_URL}/api/v1/licencias/trial`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ empresa_nombre: form.empresa_nombre, email_contacto: form.email_contacto, plan: planId, telefono: form.telefono || undefined, ciudad: form.ciudad || undefined }),
      });
      if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.detail || "Error del servidor"); }
      const data = await res.json();
      setCodigo(data.codigo);
      setEstado("ok");
    } catch (e: unknown) { setErrorMsg(e instanceof Error ? e.message : "Ocurrió un error."); setEstado("error"); }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Trial gratuito — {plan}</h2>
            <p className="text-sm text-gray-500 mt-0.5">14 días sin compromiso, sin tarjeta</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors text-xl">✕</button>
        </div>
        {estado === "ok" ? (
          <div className="p-6 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">¡Listo! Revisa tu email</h3>
            <p className="text-sm text-gray-500 mb-4">Enviamos el código a <strong>{form.email_contacto}</strong></p>
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-xs text-gray-500 mb-1">Código de activación</p>
              <p className="font-mono text-2xl font-bold text-gray-900 tracking-widest">{codigo}</p>
            </div>
            <a href={`${API_URL}/activar`} className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-colors">Activar mi cuenta →</a>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            {([["empresa_nombre","Nombre de la empresa","Ej: Distribuidora Andina SAS",true],["email_contacto","Email de contacto","tu@empresa.com",true],["telefono","Teléfono","Ej: 3001234567",false],["ciudad","Ciudad","Ej: Bogotá",false]] as const).map(([k, label, ph, req]) => (
              <div key={k}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}{req && <span className="text-red-500 ml-0.5">*</span>}</label>
                <input type={k === "email_contacto" ? "email" : k === "telefono" ? "tel" : "text"} placeholder={ph} value={form[k]} onChange={set(k)} className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              </div>
            ))}
            {estado === "error" && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{errorMsg}</p>}
            <button onClick={submit} disabled={estado === "loading" || !form.empresa_nombre.trim() || !form.email_contacto.trim()} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors">
              {estado === "loading" ? "Procesando..." : "⚡ Iniciar trial gratuito"}
            </button>
            <p className="text-xs text-gray-400 text-center">Sin tarjeta. Sin compromisos.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PagoEpaycoModal({ plan, planId, precio, onClose }: { plan: string; planId: string; precio: string; onClose: () => void }) {
  const [form, setForm] = useState({ empresa_nombre: "", email_contacto: "", telefono: "" });
  const [estado, setEstado] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  const pagar = async () => {
    if (!form.empresa_nombre.trim() || !form.email_contacto.trim()) return;
    setEstado("loading"); setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/v1/licencias/checkout`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, empresa_nombre: form.empresa_nombre, email_contacto: form.email_contacto, telefono: form.telefono || undefined }),
      });
      if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.detail || "Error del servidor"); }
      const cfg = await res.json();
      if (!window.ePayco) throw new Error("La pasarela aún no cargó. Espera unos segundos e intenta de nuevo.");
      const handler = window.ePayco.checkout.configure({ key: cfg.public_key, test: cfg.test });
      handler.open({ name: cfg.name, description: cfg.description, invoice: cfg.invoice, currency: cfg.currency, amount: String(cfg.amount), tax_base: String(cfg.tax_base), tax: String(cfg.tax), country: "co", lang: "es", external: "false", confirmation: cfg.confirmation_url, response: cfg.response_url, email_billing: cfg.email, name_billing: form.empresa_nombre });
      onClose();
    } catch (e: unknown) { setErrorMsg(e instanceof Error ? e.message : "Ocurrió un error."); setEstado("error"); }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Pagar plan {plan}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{precio} /mes + IVA · pago seguro con ePayco</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors text-xl">✕</button>
        </div>
        <div className="p-6 space-y-4">
          {([["empresa_nombre","Nombre de la empresa","Ej: Distribuidora Andina SAS",true],["email_contacto","Email de contacto","tu@empresa.com",true],["telefono","Teléfono","Ej: 3001234567",false]] as const).map(([k, label, ph, req]) => (
            <div key={k}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}{req && <span className="text-red-500 ml-0.5">*</span>}</label>
              <input type={k === "email_contacto" ? "email" : k === "telefono" ? "tel" : "text"} placeholder={ph} value={form[k]} onChange={set(k)} className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
            </div>
          ))}
          {estado === "error" && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{errorMsg}</p>}
          <button onClick={pagar} disabled={estado === "loading" || !form.empresa_nombre.trim() || !form.email_contacto.trim()} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors">
            {estado === "loading" ? "Procesando..." : "💳 Pagar con ePayco"}
          </button>
          <p className="text-xs text-gray-400 text-center">Tras el pago te llega el código de activación al email.</p>
        </div>
      </div>
    </div>
  );
}

const INITIAL_MSG = { role: "assistant" as const, content: "Hola, soy el asistente de LOBEL ERP. ¿En qué puedo ayudarte? Puedo contarte sobre planes, módulos o agendar una demo." };
const LS_KEY = "lobel_chat_history";

function loadHistory(): { role: "user" | "assistant"; content: string }[] {
  try {
    const raw = sessionStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [INITIAL_MSG];
}

// ── Chat Widget ────────────────────────────────────────────────────────────
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>(loadHistory);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function saveHistory(msgs: { role: "user" | "assistant"; content: string }[]) {
    try { sessionStorage.setItem(LS_KEY, JSON.stringify(msgs)); } catch { /* ignore */ }
  }

  async function enviar() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const next = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(next);
    saveHistory(next);
    setLoading(true);
    try {
      const r = await fetch(`${API_URL}/api/v1/landing/chat`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages.slice(-10) }),
      });
      const data = await r.json();
      const reply = data.reply || "Lo siento, intenta de nuevo.";
      const withReply = [...next, { role: "assistant" as const, content: reply }];
      setMessages(withReply);
      saveHistory(withReply);
    } catch {
      const withErr = [...next, { role: "assistant" as const, content: "Error de conexión. Intenta de nuevo." }];
      setMessages(withErr);
      saveHistory(withErr);
    } finally { setLoading(false); }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors text-2xl" aria-label="Abrir chat">
        {open ? "✕" : "💬"}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="bg-[#0E2A47] text-white px-4 py-3">
            <p className="font-semibold text-sm">Asistente LOBEL</p>
            <p className="text-xs text-blue-300">Responde al instante</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="flex justify-start"><div className="bg-gray-100 rounded-xl px-3 py-2 text-sm text-gray-500">Escribiendo...</div></div>}
          </div>
          <div className="border-t p-3 flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && enviar()} placeholder="Escribe tu pregunta..." className="flex-1 text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button onClick={enviar} disabled={loading} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm transition-colors disabled:opacity-50">→</button>
          </div>
        </div>
      )}
    </>
  );
}

declare global {
  interface Window {
    ePayco?: { checkout: { configure: (opts: { key: string; test: boolean }) => { open: (data: Record<string, string>) => void } } };
  }
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [modalPlan, setModalPlan] = useState<{ nombre: string; id: string } | null>(null);
  const [pagoPlan, setPagoPlan] = useState<{ nombre: string; id: string; precio: string } | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Nav */}
      <nav className="bg-[#0E2A47] px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-xl tracking-tight">LOBELAPP</span>
          <span className="bg-[#1a3d63] text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">ERP</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#planes" className="text-blue-200 text-sm hover:text-white transition-colors">Planes</a>
          <a href="#whatsapp" className="text-blue-200 text-sm hover:text-white transition-colors">WhatsApp</a>
          <a href="#demo" className="text-blue-200 text-sm hover:text-white transition-colors">Demo</a>
          <a href={`${API_URL}/login`} className="bg-white text-[#0E2A47] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">Ingresar</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0E2A47] px-6 pt-16 pb-20 text-center">
        <span className="inline-block bg-blue-900 border border-blue-700 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          Sistema de Gestión Empresarial
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
          El ERP colombiano que tu empresa necesita
        </h1>
        <p className="mt-5 text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Facturación electrónica DIAN, contabilidad automática, nómina, inventario y WhatsApp Bot con IA — todo integrado, en la nube, listo para usar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a href="#planes" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3 rounded-xl text-base transition-colors shadow-lg">
            Ver planes y precios
          </a>
          <a href="#demo" className="border border-blue-600 text-blue-200 hover:text-white hover:border-blue-400 font-semibold px-8 py-3 rounded-xl text-base transition-colors">
            Ver demo
          </a>
        </div>

        {/* Marquee logos */}
        <div className="mt-12 overflow-hidden w-full">
          <p className="text-blue-500 text-xs uppercase tracking-widest mb-4 font-semibold">Infraestructura tecnológica</p>
          <div className="marquee-track flex items-center gap-12 justify-start" style={{ width: "max-content" }}>
            {[1, 2].map(copy => (
              <div key={copy} className="flex items-center gap-12 opacity-50">
                {LOGOS.map(({ Logo, name }) => (
                  <div key={name} className="flex flex-col items-center gap-1">
                    <Logo />
                    <span className="text-blue-400 text-[9px] font-semibold uppercase tracking-widest">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section id="demo" className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">En acción</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Mira LOBEL ERP en acción</h2>
            <p className="text-gray-500 text-lg">Un recorrido completo por los módulos principales en menos de 3 minutos.</p>
          </div>
          <div className="relative bg-[#0E2A47] rounded-2xl overflow-hidden shadow-2xl aspect-video">
            {/* src apunta al bucket S3 — reemplazar con URL real cuando el video esté subido */}
            <video
              src="https://lobel-assets.s3.amazonaws.com/demo/lobel-erp-demo.mp4"
              poster="https://lobel-assets.s3.amazonaws.com/demo/lobel-erp-poster.jpg"
              controls
              preload="none"
              className="w-full h-full object-cover"
            >
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="bg-[#f8fafc] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Planes simples, sin sorpresas</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Elige tu plan</h2>
            <p className="text-gray-500">Todos incluyen facturación electrónica DIAN. Sin contratos. Cancela cuando quieras.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANES.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-2xl border-2 ${plan.border} overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col relative`}>
                {plan.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${plan.accent} text-white`}>
                    {plan.badge}
                  </span>
                )}
                <div className={`bg-gradient-to-br ${plan.accent} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-1">{plan.nombre}</h3>
                  <p className="text-white/70 text-sm">{plan.descripcion}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold">{plan.precio}</span>
                    <span className="text-white/60 text-sm ml-1">/mes + IVA</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.modulos.map(m => (
                      <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>{m}
                      </li>
                    ))}
                    {plan.noIncluye.map(m => (
                      <li key={m} className="flex items-start gap-2 text-sm text-gray-300 line-through">
                        <span className="text-gray-200 mt-0.5 flex-shrink-0">✗</span>{m}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setPagoPlan({ nombre: plan.nombre, id: plan.id, precio: plan.precio })}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-colors bg-emerald-600 hover:bg-emerald-700 text-white mb-2">
                    💳 Pagar y activar
                  </button>
                  <button onClick={() => setModalPlan({ nombre: plan.nombre, id: plan.id })}
                    className={`w-full py-2.5 px-6 rounded-xl font-semibold text-sm transition-colors border-2 ${plan.btnBorder}`}>
                    ⚡ Prueba gratis 14 días
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Precios en pesos colombianos (COP). IVA 19% adicional. Pago por PSE, tarjeta, Nequi o Daviplata.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest text-center mb-3">Todo lo que necesitas</p>
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Una plataforma, todos los módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Business */}
      <section id="whatsapp" className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-3">WhatsApp Business API</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Tu empresa habla con sus clientes por WhatsApp</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              LOBEL ERP integra la API oficial de WhatsApp Business para que cada empresa que usa la plataforma
              se comunique con sus propios clientes desde el mismo sistema donde factura y gestiona su negocio,
              sin apps externas ni números personales.
            </p>
          </div>

          {/* Casos de uso */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: "🧾", title: "Facturas y comprobantes", desc: "Envía la factura electrónica DIAN y su soporte al cliente apenas se emite." },
              { icon: "💳", title: "Links de pago", desc: "Comparte enlaces de cobro para que el cliente pague desde el mismo chat." },
              { icon: "📦", title: "Estado de pedidos", desc: "Notifica confirmación, despacho y entrega de cada pedido automáticamente." },
              { icon: "🤖", title: "Atención con IA", desc: "Don Luis responde dudas, consulta stock y toma pedidos las 24 horas." },
            ].map(c => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Cómo ayuda + uso de datos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0E2A47] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-3">¿Cómo ayuda a tu empresa?</h3>
              <ul className="space-y-2.5 text-sm text-blue-100">
                {[
                  "Centraliza la comunicación con clientes en el canal que ya usan a diario.",
                  "Reduce llamadas y mensajes manuales: el ERP envía las notificaciones por ti.",
                  "Acelera el cobro y mejora la atención sin contratar más personal.",
                  "Cada mensaje queda registrado y vinculado a su factura, pedido o cliente.",
                ].map(t => (
                  <li key={t} className="flex items-start gap-2"><span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-7 border border-green-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">🔒 Uso responsable de los datos</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Solo se contacta a los clientes que cada empresa registra en su propio sistema. Los datos de WhatsApp
                (números y mensajes) se usan únicamente para entregar las notificaciones y respuestas del negocio que
                los gestiona.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                LOBEL no vende ni comparte esta información con terceros. Consulta nuestra{" "}
                <a href="/privacidad/" className="text-green-700 font-semibold underline">Política de Privacidad</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest text-center mb-3">¿Por qué LOBELAPP?</p>
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Construido para las empresas colombianas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY.map(w => (
              <div key={w.title} className="flex gap-5 items-start">
                <div className="text-3xl shrink-0">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              ["¿Necesito tarjeta de crédito?", "No. El trial de 14 días es completamente gratuito y sin compromisos."],
              ["¿Incluye facturación electrónica DIAN?", "Sí. Todos los planes incluyen FEL. Cada empresa configura su propia resolución DIAN."],
              ["¿Puedo cambiar de plan?", "Sí, puedes hacer upgrade en cualquier momento. Contáctanos y lo gestionamos de inmediato."],
              ["¿Dónde están los datos?", "En servidores AWS en us-east-1 (Virginia), con backups diarios automáticos y cifrado en tránsito."],
              ["¿Qué es el plan con IA?", "El plan Empresarial incluye Claude (Anthropic) integrado para análisis, asistencia contable y automatización."],
            ].map(([q, a]) => (
              <div key={q} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <p className="font-semibold text-gray-800 text-sm mb-1.5">{q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#0E2A47] px-6 py-20 text-center">
        <h2 className="text-3xl font-black text-white mb-4">¿Listo para empezar?</h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">Elige tu plan, activa tu empresa y empieza a facturar electrónicamente hoy.</p>
        <a href="#planes" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg inline-block">
          Ver planes →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f35] px-6 py-10 border-t border-blue-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-black text-base">LOBELAPP</p>
            <p className="text-blue-400 text-xs mt-0.5">LOBEL CAPITAL GROUP LLC</p>
            <p className="text-blue-500 text-xs mt-1">Kissimmee, FL 34744 · USA</p>
          </div>
          <div className="text-center">
            <p className="text-blue-300 text-sm">
              🇨🇴 <a href="tel:+573228957879" className="hover:text-white transition-colors">322 895 7879</a>
              {" · "}
              🇺🇸 <a href="tel:+16893220830" className="hover:text-white transition-colors">+1 (689) 322-0830</a>
            </p>
            <p className="text-blue-500 text-xs mt-1">
              <a href="mailto:soportetecnico@lobelapp.com" className="hover:text-blue-300 transition-colors">soportetecnico@lobelapp.com</a>
            </p>
          </div>
          <div className="text-center md:text-right">
            <a href="#planes" className="text-blue-400 text-sm hover:text-white transition-colors block">Planes</a>
            <a href={`${API_URL}/login`} className="text-blue-400 text-sm hover:text-white transition-colors block mt-1">Iniciar sesión</a>
          </div>
        </div>
        <p className="text-blue-700 text-xs text-center mt-8">© {new Date().getFullYear()} LOBEL CAPITAL GROUP LLC. Todos los derechos reservados.</p>
      </footer>

      {/* Modales */}
      {modalPlan && <TrialModal plan={modalPlan.nombre} planId={modalPlan.id} onClose={() => setModalPlan(null)} />}
      {pagoPlan && <PagoEpaycoModal plan={pagoPlan.nombre} planId={pagoPlan.id} precio={pagoPlan.precio} onClose={() => setPagoPlan(null)} />}

      {/* Chat widget */}
      <ChatWidget />
    </main>
  );
}
