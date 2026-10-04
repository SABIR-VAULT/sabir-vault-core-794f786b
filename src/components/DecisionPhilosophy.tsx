import { Binary, Eye, Scale, ShieldCheck, Sliders } from "lucide-react";
import { bi, useLang } from "@/lib/i18n";

const cards = [
  {
    icon: ShieldCheck,
    cat: bi("1. Physical & Logical Laws", "1. Фізичні та логічні закони"),
    status: bi("NEVER MODIFIED", "НІКОЛИ НЕ ЗМІНЮЮТЬСЯ"),
    text: bi(
      "Truck speed >150 km/h; asset sale discount >30%; event date preceding contract date. These are immutable laws of nature and common sense. We never compromise them.",
      "Швидкість фури >150 км/год; дисконт продажу активу >30%; дата події раніше дати договору. Це закони фізики та здорового глузду, які не змінюються під замовника.",
    ),
  },
  {
    icon: Scale,
    cat: bi("2. Statutory Thresholds", "2. Законодавчі пороги держави"),
    status: bi("ZERO-CODE JSON UPDATES", "ОНОВЛЕННЯ ЧЕРЕЗ JSON"),
    text: bi(
      "Mandatory AML monitoring limits (e.g. 400,000 UAH under Law #361-IX). When parliament amends statutory limits, we update a single JSON parameter. Zero core code changes. Zero runtime errors.",
      "Поріг обов'язкового фінмоніторингу (400 000 грн за Законом № 361-IX). Якщо парламент змінює норму — оновлюється одна цифра у відкритому конфігу. Код не переписується.",
    ),
    tip: bi(
      "Example: Updating the AML monitoring threshold from 400k to 800k takes 30 seconds of JSON editing. No codebase recompilation or downtime required.",
      "Приклад: Оновлення ліміту фінмоніторингу з 400к на 800к займає 30 секунд редагування JSON-файлу. Жодного переписування коду чи зупинки системи.",
    ),
  },
  {
    icon: Sliders,
    cat: bi("3. Business Sensitivity", "3. Чутливість бізнесу"),
    status: bi("CONFIGURED PER ENTERPRISE", "НАЛАШТОВУЄТЬСЯ З КЛІЄНТОМ"),
    text: bi(
      "50V = High Watchlist; 100V = Critical Blocked Status. Calibrated strictly with your Chief Security Officer to reflect internal risk tolerance and audit policy.",
      "50V = Зона уваги (High); 100V = Критичне блокування (Critical). Калібрується разом із вашою службою безпеки під внутрішній регламент компанії.",
    ),
  },
];

export function DecisionPhilosophy() {
  const { t } = useLang();
  return (
    <section id="decision-philosophy" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <Binary size={14} strokeWidth={1.5} />
          {t(bi("Deterministic Decision Engine", "Детермінований двигун прийняття рішень"))}
        </p>
        <h2 className="mt-6 max-w-4xl text-3xl font-semibold text-foreground md:text-4xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
          {t(bi("Transparency Over Black Boxes: How Decisions Are Made.", "Прозорість замість «чорної скриньки»: Філософія прийняття рішень."))}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t(bi(
            'Most AI systems output a vague "risk percentage" that hides critical outliers. SABIR VAULT isolates the exact blast radius. We illuminate the anomaly — leaving the final judgment to human expertise.',
            "Більшість систем видають абстрактний «відсоток ризику», який приховує поодинокі схеми. SABIR VAULT ізолює точне вогнище ураження. Ми підсвічуємо факт — залишаючи право висновку за вашим експертом.",
          ))}
        </p>

        <div className="glass mt-12 flex gap-5 rounded-2xl border-primary/40 p-7 md:p-8">
          <div className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Eye size={19} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{t(bi("The Outlier Guarantee", "Гарантія виявлення одиничних аномалій"))}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(bi(
                'If a company processes 1,000 clean documents, but a single contract bears a signature dated after the signatory\'s recorded death — SABIR VAULT will NEVER dilute it into a "low average risk". The anomaly is instantly pinned to the incident radar with page-accurate proof.',
                "Якщо в компанії проаналізовано 1 000 чистих документів, але в одному договорі підпис стоїть після зафіксованої дати смерті підписанта — SABIR VAULT НІКОЛИ не розмиє це у «середній низький ризик». Аномалія буде миттєво підсвічена на радарі з точним посиланням на скан.",
              ))}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              tabIndex={c.tip ? 0 : undefined}
              className="group glass glass-hover relative rounded-2xl p-7 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="grid size-11 place-items-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                <c.icon size={19} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{t(c.cat)}</h3>
              <p className="mt-2 text-xs font-semibold tracking-widest text-primary">{t(c.status)}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(c.text)}</p>
              {c.tip && (
                <p
                  role="note"
                  className="mt-5 max-h-0 overflow-hidden border-t border-transparent text-xs leading-relaxed text-primary opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:border-primary/30 group-hover:pt-4 group-hover:opacity-100 group-focus:max-h-40 group-focus:border-primary/30 group-focus:pt-4 group-focus:opacity-100"
                >
                  {t(c.tip)}
                </p>
              )}
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-4xl text-center text-lg leading-relaxed text-foreground md:text-xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {t(bi(
            '"SABIR VAULT is not a probabilistic chatbot guessing guilt. It is an industrial X-ray appliance pinpointing structural fractures in your documentation, leaving the diagnosis strictly to your certified experts."',
            "«SABIR VAULT — це не чат-бот, який вгадує вину компанії. Це промисловий рентген-апарат, який виявляє переломи в документації, залишаючи право постановки діагнозу за вашим експертом.»",
          ))}
        </blockquote>
      </div>
    </section>
  );
}
