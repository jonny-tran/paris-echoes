import tetImg from "@/assets/tet-offensive.jpg";
import protestsImg from "@/assets/protests.jpg";
import { Reveal } from "./Reveal";

export function PartTwo() {
  return (
    <section id="part-2" className="relative bg-surface-low">
      {/* 2.1 Direct headline */}
      <div className="mx-auto max-w-6xl px-6 py-32 text-center md:py-40">
        <Reveal delay={120}>
          <h2 className="text-display mx-auto mt-10 max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] ink-text">
            TẠI SAO MỸ PHẢI<br />
            <span className="italic gradient-gold-text">ngồi vào</span> BÀN ĐÀM PHÁN?
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <p className="text-headline mx-auto mt-10 max-w-3xl text-xl italic ink-soft md:text-2xl">
            Quyết định không tự nhiên mà có — Mỹ buộc phải thay đổi chiến lược vì không còn khả năng tiếp tục cuộc chiến.
          </p>
        </Reveal>
      </div>

      {/* 2.2 Military — Split */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={tetImg}
                  alt="Tổng tiến công Mậu Thân 1968"
                  className="gold-spine aspect-[4/5] w-full object-cover shadow-ambient-lg"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
                  <span className="label-archival !text-tertiary-container">Mậu Thân 1968</span>
                  <p className="mt-2 font-serif text-2xl text-primary-foreground">
                    Cú hích lịch sử
                  </p>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal delay={180}>
                <h3 className="text-headline mt-6 text-4xl ink-text md:text-5xl">
                  Thất bại quân sự:<br />
                  <span className="italic">Cú hích Mậu Thân 1968</span>
                </h3>
              </Reveal>
              <ul className="mt-10 space-y-6">
                {[
                  'Làm phá sản hoàn toàn chiến lược "Chiến tranh cục bộ".',
                  'Mỹ nhận ra: "Không thể thắng nhanh bằng sức mạnh quân sự."',
                  "Thay đổi vị thế: từ chủ động sang sa lầy và bị động.",
                ].map((t, i) => (
                  <Reveal key={i} delay={240 + i * 100}>
                    <li className="flex gap-5">
                      <span className="text-display gradient-gold-text shrink-0 text-2xl leading-none">
                        0{i + 1}
                      </span>
                      <p className="text-lg leading-relaxed ink-soft">{t}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2.3 Domestic — Editorial offset grid */}
      <div className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={120}>
            <h3 className="text-headline mt-6 max-w-4xl text-4xl ink-text md:text-6xl">
              Áp lực nội tại:<br />
              <span className="italic gradient-gold-text">"Cuộc chiến ngay lòng nước Mỹ"</span>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
            <Reveal delay={150} className="md:col-span-7">
              <img
                src={protestsImg}
                alt="Phong trào phản chiến tại Mỹ"
                className="gold-spine aspect-[16/10] w-full object-cover shadow-ambient-lg"
                loading="lazy"
                width={1280}
                height={896}
              />
            </Reveal>
            <Reveal delay={250} className="md:col-span-5 md:mt-24">
              <div className="bg-surface-bright p-8 shadow-ambient">
                <span className="label-archival">Bùng nổ</span>
                <p className="mt-4 font-serif text-2xl ink-text">
                  Phong trào phản chiến lan rộng khắp các bang.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300} className="md:col-span-5 md:col-start-2 md:-mt-12">
              <div className="bg-primary p-8 text-primary-foreground shadow-ambient">
                <span className="label-archival !text-tertiary-container">Lời hiệu triệu</span>
                <p className="mt-4 font-serif text-2xl italic">
                  "Bring our boys home" — hàng ngàn người xuống đường đòi mang con em họ về nhà.
                </p>
              </div>
            </Reveal>
            <Reveal delay={350} className="md:col-span-6 md:col-start-7 md:-mt-32">
              <div className="bg-surface-highest p-8 shadow-ambient">
                <span className="label-archival">Hệ quả</span>
                <p className="mt-4 font-serif text-2xl ink-text">
                  Chính phủ Mỹ bị cô lập ngay trong dư luận của chính mình.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 2.4 Economic — Card layout */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={120}>
            <h3 className="text-headline mt-6 max-w-4xl text-4xl ink-text md:text-6xl">
              Khủng hoảng kinh tế:<br />
              <span className="italic">Cái giá của siêu cường</span>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                stat: "$168B",
                label: "Chi phí chiến tranh",
                body: "Khoản chi khổng lồ gây thâm hụt ngân sách Mỹ nghiêm trọng, đè nặng lên nền kinh tế quốc gia.",
              },
              {
                stat: "5.6%",
                label: "Lạm phát phi mã",
                body: "Đồng đô-la mất giá nhanh chóng, kinh tế Mỹ bắt đầu giai đoạn suy giảm kéo dài.",
              },
              {
                stat: "∞",
                label: "Cái giá vô hạn",
                body: "Tiếp tục cuộc chiến đồng nghĩa với việc tự sát về kinh tế trong dài hạn.",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={150 + i * 120}>
                <div className="paper-texture flex h-full flex-col bg-surface-bright p-10 shadow-ambient hover-lift">
                  <div className="text-display gradient-gold-text text-6xl md:text-7xl">
                    {c.stat}
                  </div>
                  <span className="label-archival mt-6">{c.label}</span>
                  <p className="mt-4 leading-relaxed ink-soft">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* 2.5 Conclusion */}
      <div className="relative overflow-hidden gradient-lacquer py-32 md:py-40 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="label-archival !text-tertiary-container">Tổng kết Phần 2</span>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-headline mt-10 text-3xl italic md:text-5xl">
              Mỹ buộc phải thay đổi chiến lược —<br />
              từ bỏ tham vọng quân sự để tìm kiếm<br />
              <span className="gradient-gold-text">một giải pháp trên bàn đàm phán.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
