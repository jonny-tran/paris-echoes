import { ArrowRight } from "lucide-react";
import signingImg from "@/assets/signing.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PartFour() {
  return (
    <section id="part-4" className="relative bg-surface-low">
      {/* 4.1 Bento grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal delay={100}>
          <h2 className="text-display mt-8 text-[clamp(2.5rem,6vw,5rem)] ink-text">
            Chặng đường <span className="italic gradient-gold-text">5 năm</span><br />
            sự giằng co quyết liệt
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[160px] grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[180px]">
          <Reveal delay={120} className="md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between bg-primary p-10 text-primary-foreground shadow-ambient">
              <span className="label-archival !text-tertiary-container">Quân sự</span>
              <p className="text-display text-3xl md:text-5xl">
                Mậu Thân 1968:<br />
                <span className="italic">Phá sản "Chiến tranh cục bộ"</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-2 md:row-span-1">
            <div className="flex h-full flex-col justify-between bg-ink p-8 text-primary-foreground shadow-ambient">
              <span className="label-archival !text-tertiary-container">Nội bộ Mỹ</span>
              <p className="text-headline text-2xl">
                Khủng hoảng & phản chiến
              </p>
            </div>
          </Reveal>
          <Reveal delay={280} className="md:col-span-2 md:row-span-1">
            <div className="flex h-full flex-col justify-between bg-surface-bright p-8 shadow-ambient">
              <span className="label-archival">Nghệ thuật</span>
              <p className="text-headline text-2xl ink-text italic">
                "Vừa đánh, vừa đàm"
              </p>
            </div>
          </Reveal>
          <Reveal delay={360} className="md:col-span-6">
            <div className="flex h-full items-center justify-between bg-surface-highest p-8 shadow-ambient">
              <span className="label-archival">Tính chất</span>
              <p className="text-headline text-2xl ink-text md:text-3xl">
                5 năm giằng co — phản ánh sự quyết liệt trên chiến trường
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 4.2 Signing moment */}
      <div className="relative overflow-hidden">
        <img
          src={signingImg}
          alt="Ký kết Hiệp định Paris"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1280}
          height={896}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-primary-foreground md:py-44">
          <Reveal>
            <span className="label-archival !text-tertiary-container">Thời khắc lịch sử</span>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-display mt-6 text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
              <span className="gradient-gold-text">27.01</span><br />
              1973
            </h3>
          </Reveal>
          <Reveal delay={250}>
            <p className="text-headline mt-8 max-w-3xl text-2xl italic md:text-3xl">
              Hiệp định Paris chính thức được ký kết.
            </p>
          </Reveal>
          <div className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal delay={350}>
              <div className="ghost-border bg-surface/5 p-6 backdrop-blur-sm">
                <span className="label-archival !text-tertiary-container">Cam kết 01</span>
                <p className="mt-3 font-serif text-xl">
                  Mỹ rút toàn bộ quân viễn chinh khỏi Việt Nam.
                </p>
              </div>
            </Reveal>
            <Reveal delay={450}>
              <div className="ghost-border bg-surface/5 p-6 backdrop-blur-sm">
                <span className="label-archival !text-tertiary-container">Cam kết 02</span>
                <p className="mt-3 font-serif text-xl">
                  Mỹ tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ của ta.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 4.3 Transformation map */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={100}>
            <h3 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              "Đánh cho <span className="gradient-gold-text italic">Mỹ cút</span>"
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-center gap-8 md:grid-cols-11">
            <Reveal delay={120} className="md:col-span-5">
              <div className="bg-surface-container p-10 shadow-ambient">
                <span className="label-archival">Trước 1973</span>
                <p className="text-headline mt-4 text-3xl ink-soft md:text-4xl">
                  Mỹ lúng túng,<br />bế tắc trên mọi mặt trận.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250} className="md:col-span-1">
              <div className="flex justify-center">
                <ArrowRight className="h-12 w-12 text-tertiary md:h-16 md:w-16" />
              </div>
            </Reveal>
            <Reveal delay={380} className="md:col-span-5">
              <div className="bg-primary p-10 text-primary-foreground shadow-ambient">
                <span className="label-archival !text-tertiary-container">Sau 1973</span>
                <p className="text-headline mt-4 text-3xl md:text-4xl">
                  Việt Nam <span className="italic gradient-gold-text">làm chủ</span>,<br />
                  tạo thế và lực mới.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <p className="mt-16 text-center font-serif text-xl italic ink-soft md:text-2xl">
              Tiền đề vững chắc để <span className="ink-text not-italic font-semibold">"Đánh cho Nguỵ nhào"</span> — Đại thắng mùa Xuân 1975.
            </p>
          </Reveal>
        </div>
      </div>

      {/* 4.4 Three pillars */}
      <div className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h3 className="text-headline text-center text-4xl ink-text md:text-5xl">
              Đỉnh cao thắng lợi của<br />
              <span className="italic gradient-gold-text">mặt trận ngoại giao</span>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { label: "Trụ cột 01", title: "QUÂN SỰ", body: "Giữ vững thế chủ động trên chiến trường, tạo sức ép tối đa." },
              { label: "Trụ cột 02", title: "CHÍNH TRỊ", body: "Củng cố khối đại đoàn kết toàn dân tộc, vững chắc nội bộ." },
              { label: "Trụ cột 03", title: "NGOẠI GIAO", body: "Giành thắng lợi quyết định trên bàn đàm phán Paris." },
            ].map((p, i) => (
              <Reveal key={i} delay={120 + i * 120}>
                <div className="relative h-full overflow-hidden bg-tertiary-container/40 p-10 text-center shadow-ambient">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <span className="label-archival !text-primary">{p.label}</span>
                  <h4 className="text-display mt-6 text-3xl text-primary md:text-4xl">
                    {p.title}
                  </h4>
                  <p className="mt-6 leading-relaxed ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="text-headline mx-auto mt-20 max-w-4xl text-center text-2xl italic ink-text md:text-3xl">
              "Sự lãnh đạo sáng suốt của Đảng là<br />
              <span className="gradient-gold-text">yếu tố quyết định.</span>"
            </p>
          </Reveal>
        </div>
      </div>

      {/* 4.5 Bamboo diplomacy bridge */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={100}>
            <h3 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              "Ngoại giao <span className="gradient-gold-text italic">Cây tre</span>"<br />
              từ Paris 1973 đến hiện tại
            </h3>
          </Reveal>

          <div className="mt-16 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[190px]">
            <Reveal delay={140} className="md:col-span-3 md:row-span-2">
              <div className="flex h-full flex-col justify-between bg-primary p-8 text-primary-foreground shadow-ambient md:p-10">
                <span className="label-archival !text-tertiary-container">Gốc vững (Thực lực)</span>
                <p className="text-headline text-2xl md:text-3xl">
                  Thắng lợi tại Paris bắt nguồn từ thực lực trên chiến trường và ý chí độc lập dân tộc.
                </p>
              </div>
            </Reveal>
            <Reveal delay={260} className="md:col-span-3 md:row-span-1">
              <div className="flex h-full flex-col justify-between bg-surface-bright p-8 shadow-ambient">
                <span className="label-archival">Thân chắc (Bản lĩnh)</span>
                <p className="text-headline text-xl ink-text md:text-2xl">
                  Sự kiên định, can trường của những nhà ngoại giao như Lê Đức Thọ, Madame Bình.
                </p>
              </div>
            </Reveal>
            <Reveal delay={380} className="md:col-span-3 md:row-span-1">
              <div className="flex h-full flex-col justify-between bg-ink p-8 text-primary-foreground shadow-ambient">
                <span className="label-archival !text-tertiary-container">Cành uyển chuyển (Linh hoạt)</span>
                <p className="text-headline text-xl md:text-2xl">
                  Nghệ thuật "Dĩ bất biến, ứng vạn biến", "vừa đánh vừa đàm" để tranh thủ sự ủng hộ quốc tế.
                </p>
              </div>
            </Reveal>
            <Reveal delay={500} className="md:col-span-6">
              <div className="bg-tertiary-container/40 p-8 shadow-ambient md:p-10">
                <span className="label-archival !text-primary">Liên hệ thực tế</span>
                <p className="text-headline mt-4 text-2xl ink-text md:text-3xl">
                  Hiệp định Paris 1973 là mốc son chói lọi, đặt nền móng cho trường phái{" "}
                  <span className="gradient-gold-text italic">"Ngoại giao Cây tre Việt Nam"</span> ở thời điểm hiện tại.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 4.6 Closing quote */}
      <div className="gradient-lacquer py-32 text-primary-foreground md:py-44">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal delay={150}>
            <p className="text-headline -mt-4 text-2xl italic md:text-4xl leading-snug">
              Hiệp định Paris là thắng lợi của trí tuệ Việt Nam,<br />
              của lương tri thời đại — và của một dân tộc<br />
              <span className="gradient-gold-text not-italic">không bao giờ chịu cúi đầu.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
