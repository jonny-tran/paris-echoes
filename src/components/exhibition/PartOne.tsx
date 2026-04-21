import heroImg from "@/assets/hero-paris.jpg";
import patternImg from "@/assets/pattern-clouds.jpg";
import tetImg from "@/assets/tet-offensive.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Counter } from "./Counter";

export function PartOne() {
  return (
    <section id="hero" className="relative">
      {/* ===== Block 1: Hero ===== */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Khung cảnh phòng đàm phán Paris"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/70 to-surface" />
          <img
            src={patternImg}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-32 left-1/2 w-[900px] -translate-x-1/2 opacity-15 mix-blend-multiply"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
          <Reveal delay={150}>
            <h1 className="text-display mt-8 text-[clamp(3rem,9vw,7.5rem)] ink-text">
              HIỆP ĐỊNH
              <span className="mt-2 block gradient-gold-text">PARIS</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex items-center justify-center gap-4 label-archival font-sans text-sm">
              <span>1969</span>
              <span className="h-px w-16 bg-tertiary/60" />
              <span>1973</span>
            </div>
          </Reveal>
          <Reveal delay={450}>
            <p className="text-headline mx-auto mt-12 max-w-3xl text-balance text-2xl italic ink-soft md:text-3xl">
              "Điều gì khiến Mỹ phải chấp nhận<br />
              ngồi vào bàn đàm phán với ta?"
            </p>
          </Reveal>
          <Reveal delay={650}>
            <a
              href="#part-1-grid"
              aria-label="Cuộn xuống phần nội dung tiếp theo"
              className="group mt-20 inline-flex flex-col items-center gap-2 text-tertiary/85 transition-all duration-500 hover:text-primary"
            >
              <span
                className="block h-10 w-px bg-gradient-to-b from-tertiary/70 via-tertiary/40 to-transparent transition-colors duration-500 group-hover:from-primary/90"
                aria-hidden="true"
              />
              <span className="relative h-8 w-8" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-1/2 top-[34%] h-3 w-3 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-current opacity-95 animate-pulse [animation-duration:1.3s]" />
                <span className="absolute left-1/2 top-[58%] h-3 w-3 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-current opacity-60 animate-pulse [animation-duration:1.3s] [animation-delay:0.25s]" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* ===== Block 2: Info Grid ===== */}
      <div id="part-1-grid" className="bg-surface-low py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">

          <Reveal delay={120}>
            <h2 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              Bốn bên — Một bàn đàm phán
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Time block */}
            <Reveal>
              <div className="paper-texture relative overflow-hidden bg-surface-bright p-10 shadow-ambient hover-lift">
                <span className="label-archival">Thời gian</span>
                <div className="text-display mt-6 text-7xl ink-text md:text-8xl">
                  1969<span className="gradient-gold-text">—</span>1973
                </div>
                <p className="mt-6 max-w-md ink-soft">
                  Năm năm đàm phán giằng co — cuộc thương lượng dài nhất thế kỷ XX trên bàn ngoại giao quốc tế.
                </p>
              </div>
            </Reveal>

            {/* Goal block */}
            <Reveal delay={120}>
              <div className="group relative overflow-hidden bg-primary p-10 text-primary-foreground shadow-ambient hover-lift">
                <span className="label-archival !text-tertiary-container transition-colors duration-300 group-hover:!text-tertiary">
                  Mục tiêu
                </span>
                <h3 className="text-headline mt-6 text-4xl transition-colors duration-300 group-hover:text-primary md:text-5xl">
                  Chấm dứt chiến tranh,<br />lập lại hòa bình
                </h3>
                <p className="mt-6 max-w-md italic opacity-85 transition-colors duration-300 group-hover:text-ink-soft">
                  Giành lại độc lập, chủ quyền và toàn vẹn lãnh thổ cho dân tộc Việt Nam.
                </p>
                <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-primary-glow/30 blur-3xl" />
              </div>
            </Reveal>
          </div>

          {/* Participants */}
          <Reveal delay={200}>
            <div className="mt-12">
              <span className="label-archival">Bốn thành phần tham gia</span>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { side: "Việt Nam DCCH", lead: "Đại diện bởi Bộ trưởng Nguyễn Duy Trinh và Trưởng đoàn đàm phán Xuân Thủy", color: "primary" },
                  { side: "CPCMLT miền Nam Việt Nam", lead: "Đại diện bởi Bộ trưởng Ngoại giao Nguyễn Thị Bình", color: "primary" },
                  { side: "Hoa Kỳ", lead: "Đại diện bởi Bộ trưởng Ngoại giao William P. Rogers", color: "neutral" },
                  { side: "Chính quyền Sài Gòn", lead: "Đại diện bởi Tổng trưởng Ngoại giao Trần Văn Lắm", color: "neutral" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="group relative cursor-default overflow-hidden bg-surface-bright p-6 shadow-ambient transition-all duration-500 hover:bg-surface-high"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center text-xl font-bold ${
                        p.color === "primary"
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-highest ink-text"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <h4 className="text-headline text-lg ink-text">{p.side}</h4>
                    <p className="label-archival mt-3 font-sans !text-ink-soft transition-all duration-500 group-hover:!text-tertiary">
                      Trưởng đoàn
                    </p>
                    <p className="mt-1 font-serif italic ink-soft">{p.lead}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== Block 3: Stat ===== */}
      <div className="relative overflow-hidden bg-ink py-32 md:py-40 text-primary-foreground">
        <img
          src={patternImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="label-archival !text-tertiary-container">
              Cuộc đàm phán kỷ lục
            </span>
          </Reveal>
          <Reveal delay={120}>
            <div className="text-display mt-10 flex items-baseline justify-center gap-2 leading-none">
              <Counter
                to={200}
                className="text-[clamp(8rem,22vw,18rem)] gradient-gold-text"
              />
              <span className="text-[clamp(4rem,10vw,8rem)] gradient-gold-text">+</span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-headline mx-auto mt-6 max-w-2xl text-2xl italic opacity-85 md:text-3xl">
              cuộc họp công khai và bí mật trong suốt 5 năm
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
              {[
                "Kéo dài nhiều năm",
                "Đấu trí chiến lược",
                "Lợi ích xung đột",
                "Căng thẳng tột độ",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-tertiary/40 px-5 py-2 font-sans text-sm tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== Block 4: Narrative ===== */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h3 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              Bối cảnh 1968
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal delay={100}>
                <img
                  src={tetImg}
                  alt="Mậu Thân 1968"
                  className="gold-spine w-full object-cover shadow-ambient-lg"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
              </Reveal>
            </div>
            <div className="space-y-12 md:col-span-5">
              <Reveal delay={150}>
                <div>
                  <span className="label-archival">Phân đoạn 1 — Chiến trường</span>
                  <h3 className="text-headline mt-4 text-3xl ink-text md:text-4xl">
                    Thế sa lầy của siêu cường
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ink-soft">
                    Mỹ triển khai nhiều chiến lược quân sự đắt giá, từ "Chiến tranh đặc biệt" đến "Chiến tranh cục bộ", nhưng đều thất bại trong việc đạt được mục tiêu quyết định trên chiến trường Việt Nam.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div>
                  <span className="label-archival">Phân đoạn 2 — Áp lực</span>
                  <h3 className="text-headline mt-4 text-3xl ink-text md:text-4xl">
                    Vị thế suy yếu
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ink-soft">
                    Đối mặt với khó khăn nội tại sâu sắc và áp lực dồn dập từ cộng đồng quốc tế. Việc tiếp tục leo thang chiến tranh không còn mang lại bất kỳ hiệu quả nào.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <div className="mt-24 border-t border-tertiary/30 pt-16 text-center">
              <p className="text-headline mx-auto max-w-4xl text-3xl ink-text md:text-5xl">
                "Mỹ buộc phải tìm <span className="gradient-gold-text italic">lối thoát</span> trên bàn đàm phán."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
