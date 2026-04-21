import madameImg from "@/assets/madame-binh.jpg";
import patternImg from "@/assets/pattern-clouds.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PartFive() {
  return (
    <section id="part-5" className="relative bg-surface">
      {/* 5.1 Profile */}
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionLabel number="09" label="Phần 5 — Madame Bình" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <Reveal delay={100}>
              <img
                src={patternImg}
                alt=""
                aria-hidden="true"
                className="absolute -left-12 -top-12 w-72 opacity-25 mix-blend-multiply"
              />
              <img
                src={madameImg}
                alt="Nguyễn Thị Bình"
                className="gold-spine relative aspect-[4/5] w-full object-cover shadow-ambient-lg"
                loading="lazy"
                width={896}
                height={1280}
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={150}>
              <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)] ink-text">
                NGUYỄN THỊ BÌNH
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-headline mt-4 text-2xl italic gradient-gold-text md:text-3xl">
                Bóng hồng trong bão táp ngoại giao
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              <Reveal delay={350}>
                <div className="gold-spine pl-6">
                  <span className="label-archival">Xuất thân</span>
                  <p className="mt-2 font-serif text-lg ink-text">
                    Cháu ngoại của nhà yêu nước <em>Phan Châu Trinh</em> — kế thừa dòng máu cách mạng và tinh thần dân tộc qua nhiều thế hệ.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={450}>
                <div className="gold-spine pl-6">
                  <span className="label-archival">Chức vụ lịch sử</span>
                  <p className="mt-2 font-serif text-lg ink-text">
                    Bộ trưởng Bộ Ngoại giao, Trưởng phái đoàn Chính phủ Cách mạng lâm thời Cộng hoà Miền Nam Việt Nam tại Paris.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* 5.2 Iron diplomat */}
      <div className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="label-archival">Khối 5.2 · Biểu tượng tà áo dài</span>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-display mt-8 text-[clamp(2.5rem,8vw,6rem)] ink-text">
              <span className="font-bold">"NHÀ NGOẠI GIAO</span><br />
              <em className="font-serif italic gradient-gold-text">— thép —</em>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal delay={150} className="md:col-span-7">
              <img
                src={madameImg}
                alt="Madame Bình trong tà áo dài"
                className="aspect-[5/4] w-full object-cover shadow-ambient-lg"
                loading="lazy"
                width={1280}
                height={896}
              />
            </Reveal>
            <div className="space-y-10 md:col-span-5">
              {[
                {
                  title: "Tà áo dài truyền thống",
                  body: "Biểu tượng văn hoá Việt Nam — mang theo cả hồn dân tộc đến giữa lòng phương Tây.",
                  italic: true,
                },
                {
                  title: "Nụ cười rạng rỡ",
                  body: "Vũ khí ngoại giao mềm — tranh thủ được cảm tình và sự ủng hộ của bạn bè quốc tế.",
                  italic: true,
                },
                {
                  title: "Sự kiên định & sắc sảo",
                  body: "Trí tuệ trên bàn đấu trí — không nhân nhượng trước bất kỳ áp lực nào từ đối phương.",
                  italic: false,
                },
              ].map((d, i) => (
                <Reveal key={i} delay={250 + i * 120}>
                  <div>
                    <h4
                      className={`text-headline text-2xl ink-text ${
                        d.italic ? "italic" : "font-bold"
                      }`}
                    >
                      {d.title}
                    </h4>
                    <p className="mt-3 leading-relaxed ink-soft">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5.3 Hero quote — signing */}
      <div className="relative overflow-hidden gradient-lacquer py-32 text-primary-foreground md:py-44">
        <img
          src={patternImg}
          alt=""
          aria-hidden="true"
          className="absolute -right-32 top-1/2 w-[700px] -translate-y-1/2 opacity-15 mix-blend-screen"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="label-archival !text-tertiary-container">Dấu ấn 1973</span>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-display mt-10 text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05]">
              "Người phụ nữ <span className="italic gradient-gold-text">duy nhất</span><br />
              đặt bút ký vào<br />
              Hiệp định Paris năm 1973."
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-16 ghost-border max-w-3xl bg-ink/30 p-8 backdrop-blur-sm">
              <span className="label-archival !text-tertiary-container">Ý nghĩa</span>
              <p className="mt-4 font-serif text-lg italic md:text-xl">
                Chữ ký của bà đã buộc Mỹ và toàn thế giới phải công nhận tư cách pháp lý bình đẳng của Chính phủ Cách mạng lâm thời Cộng hoà Miền Nam Việt Nam — một thắng lợi vô giá trên mặt trận ngoại giao.
              </p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-20 flex flex-col items-start gap-2">
              <span className="text-display text-4xl gradient-gold-text italic">Nguyễn Thị Bình</span>
              <span className="label-archival !text-tertiary-container">
                Paris · 27 tháng 01 · 1973
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ink py-16 text-primary-foreground/70">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-display text-2xl gradient-gold-text">The Diplomatic Archive</p>
              <p className="label-archival mt-2 !text-tertiary-container/80">
                Triển lãm số · Hiệp định Paris 1969–1973
              </p>
            </div>
            <p className="font-serif text-sm italic opacity-70">
              "Mỗi pixel được đặt bằng bàn tay của một sử gia."
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
