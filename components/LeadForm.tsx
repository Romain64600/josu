"use client";

import { useState, FormEvent } from "react";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const form = e.currentTarget;
    window.setTimeout(() => {
      setStatus("done");
      form.reset();
    }, 600);
  }

  if (status === "done") {
    return (
      <div
        className="rounded-[1.75rem] border border-white/10 bg-white p-10 text-center shadow-card-lg"
        role="status"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/12 text-cta">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display mt-6 text-2xl font-bold text-ink">¡Gracias!</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          En producción este correo iría a Supabase o a tu herramienta de
          marketing. Aquí es solo una demo local.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-cta underline decoration-2 underline-offset-4 transition hover:text-cta-hover"
        >
          Enviar otra dirección
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-white/10 bg-white p-10 shadow-card-lg ring-1 ring-black/5"
    >
      <div>
        <label
          htmlFor="email"
          className="text-xs font-bold uppercase tracking-widest text-muted"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@ejemplo.com"
          className="mt-3 w-full rounded-2xl border border-text/10 bg-bg px-5 py-4 text-ink placeholder:text-muted/50 outline-none transition focus:border-cta/40 focus:ring-4 focus:ring-cta/15"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display mt-6 flex h-14 w-full items-center justify-center rounded-full bg-cta text-sm font-bold text-white shadow-glow transition hover:bg-cta-hover disabled:opacity-55"
      >
        {status === "sending" ? "Enviando…" : "Recibir el programa"}
      </button>
    </form>
  );
}
