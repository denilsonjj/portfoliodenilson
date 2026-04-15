import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { CheckCircle2, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { useRef, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  challenge: string;
};

const initialState: FormValues = {
  name: "",
  email: "",
  challenge: "",
};

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export const FinalCtaSection = () => {
  const [values, setValues] = useState<FormValues>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { amount: 0.2 });
  const shouldAnimate = !reduceMotion && sectionInView;

  const formRotateX = useMotionValue(0);
  const formRotateY = useMotionValue(0);
  const formGlowX = useMotionValue(50);
  const formGlowY = useMotionValue(50);

  const smoothFormRotateX = useSpring(formRotateX, { stiffness: 170, damping: 20, mass: 0.45 });
  const smoothFormRotateY = useSpring(formRotateY, { stiffness: 170, damping: 20, mass: 0.45 });
  const formGlow = useMotionTemplate`radial-gradient(380px circle at ${formGlowX}% ${formGlowY}%, rgba(151,247,255,0.15), rgba(151,247,255,0) 62%)`;

  const onChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.challenge.trim()) {
      setStatus("error");
      setMessage(siteContent.contact.form.errorRequired);
      return;
    }

    if (!isValidEmail(values.email)) {
      setStatus("error");
      setMessage(siteContent.contact.form.errorEmail);
      return;
    }

    setStatus("loading");
    setMessage(siteContent.contact.form.loading);
    trackEvent("lead_submit_attempt", { source: "homepage_cta" });

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const payload = { name: values.name, email: values.email, message: values.challenge };

      const { error: insertError } = await supabase.from("contact_messages").insert([payload]);
      if (insertError) throw insertError;

      const { data, error: functionError } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });
      if (functionError || !data?.success) throw functionError || new Error("send-contact-email failed");

      trackEvent("generate_lead", { source: "homepage_cta" });
      setStatus("success");
      setMessage(siteContent.contact.form.successMessage);
      setValues(initialState);
    } catch {
      trackEvent("lead_submit_error", { source: "homepage_cta" });
      setStatus("error");
      setMessage(siteContent.contact.form.errorSend);
    }
  };

  const handleFormMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const clampedX = Math.min(Math.max(px, 0), 1);
    const clampedY = Math.min(Math.max(py, 0), 1);

    formGlowX.set(clampedX * 100);
    formGlowY.set(clampedY * 100);
    formRotateX.set((0.5 - clampedY) * 6.6);
    formRotateY.set((clampedX - 0.5) * 6.6);
  };

  const resetFormTilt = () => {
    if (reduceMotion) return;
    animate(formRotateX, 0, { type: "spring", stiffness: 160, damping: 18 });
    animate(formRotateY, 0, { type: "spring", stiffness: 160, damping: 18 });
  };

  return (
    <section
      ref={sectionRef}
      id={siteContent.contact.id}
      className="section-wrap relative overflow-hidden scroll-mt-24"
      aria-labelledby="contact-title"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,224,255,0.12),transparent_52%)]" />
      <motion.div
        aria-hidden="true"
        animate={shouldAnimate ? { x: [0, 18, 0], y: [0, -14, 0], opacity: [0.15, 0.3, 0.15] } : {}}
        transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={shouldAnimate ? { x: [0, -14, 0], y: [0, 10, 0], opacity: [0.1, 0.22, 0.1] } : {}}
        transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[130px]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <h2 id="contact-title" className="font-heading text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[3.9rem]">
              {siteContent.contact.titleLineOne}
              <span className="accent-text block italic">{siteContent.contact.titleAccent}</span>
            </h2>
            <p className="muted-copy mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{siteContent.contact.description}</p>

            <ul className="mt-7 space-y-3">
              {siteContent.contact.reassurance.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200 sm:text-base">
                  <CheckCircle2 size={16} className="text-cyan-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            ref={formRef}
            whileHover={reduceMotion ? {} : { y: -2 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="form-card relative overflow-hidden p-5 sm:p-7"
            style={
              reduceMotion
                ? {}
                : {
                    rotateX: smoothFormRotateX,
                    rotateY: smoothFormRotateY,
                    transformPerspective: 1200,
                    transformStyle: "preserve-3d",
                  }
            }
            onMouseMove={handleFormMove}
            onMouseLeave={resetFormTilt}
            onBlur={resetFormTilt}
          >
            <motion.div
              aria-hidden="true"
              animate={shouldAnimate ? { x: [0, 14, 0], opacity: [0.12, 0.28, 0.12] } : {}}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-12 top-8 h-36 w-36 rounded-full bg-cyan-200/20 blur-3xl"
            />
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: formGlow }} />
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {siteContent.contact.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-dark"
                    value={values.name}
                    onChange={(event) => onChange("name", event.target.value)}
                    placeholder={siteContent.contact.form.namePlaceholder}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {siteContent.contact.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-dark"
                    value={values.email}
                    onChange={(event) => onChange("email", event.target.value)}
                    placeholder={siteContent.contact.form.emailPlaceholder}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="challenge" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {siteContent.contact.form.challengeLabel}
                </label>
                <textarea
                  id="challenge"
                  className="input-dark min-h-[132px] resize-none"
                  value={values.challenge}
                  onChange={(event) => onChange("challenge", event.target.value)}
                  placeholder={siteContent.contact.form.challengePlaceholder}
                  required
                />
              </div>

              <motion.div whileHover={reduceMotion ? {} : { y: -1, scale: 1.005 }} whileTap={reduceMotion ? {} : { scale: 0.985 }}>
                <GradientButton type="submit" className="w-full" size="large" disabled={status === "loading"}>
                  {status === "loading" ? siteContent.contact.form.loading : siteContent.contact.form.submit}
                </GradientButton>
              </motion.div>

              <p className="text-xs text-slate-400">{siteContent.contact.form.helper}</p>

              {message ? (
                <p
                  className={cn(
                    "rounded-sm border px-3 py-2 text-sm",
                    status === "success"
                      ? "border-cyan-200/35 bg-cyan-200/10 text-cyan-100"
                      : status === "error"
                        ? "border-rose-400/35 bg-rose-400/10 text-rose-100"
                        : "border-white/10 bg-[#0d1523] text-slate-300",
                  )}
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" ? `${siteContent.contact.form.successTitle}. ${message}` : message}
                </p>
              ) : null}
            </form>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                href={`mailto:${siteContent.contact.channels.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#0c1420] px-2 py-2 text-xs text-slate-300 transition hover:border-cyan-200/35 hover:text-white"
              >
                <Mail size={13} /> {siteContent.contact.channels.emailLabel}
              </a>
              <a
                href={`tel:${siteContent.contact.channels.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#0c1420] px-2 py-2 text-xs text-slate-300 transition hover:border-cyan-200/35 hover:text-white"
              >
                <Phone size={13} /> {siteContent.contact.channels.phoneLabel}
              </a>
              <a
                href={siteContent.contact.channels.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#0c1420] px-2 py-2 text-xs text-slate-300 transition hover:border-cyan-200/35 hover:text-white"
              >
                <MessageCircle size={13} /> {siteContent.contact.channels.whatsappLabel}
              </a>
              <a
                href={siteContent.contact.channels.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#0c1420] px-2 py-2 text-xs text-slate-300 transition hover:border-cyan-200/35 hover:text-white"
              >
                <Instagram size={13} /> {siteContent.contact.channels.instagramLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
