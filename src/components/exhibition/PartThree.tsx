import lethoImg from "@/assets/le-duc-tho.jpg";
import xuanthuyImg from "@/assets/xuan-thuy.jpg";
import madameImg from "@/assets/madame-binh.jpg";
import kissingerImg from "@/assets/henry_kissinger.jpg";
import tetImg from "@/assets/tet-offensive.jpg";
import muadoImg from "@/assets/mua-do-7.jpg";
import thanhCoQuangTri1972 from "@/assets/Thành_cổ_Quảng_Trị_4.jpg"
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PartThree() {
  return (
    <section id="part-3" className="relative bg-surface">
      {/* 3.1 Dual stream */}
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal delay={100}>
          <h2 className="text-display mt-8 text-[clamp(2.5rem,7vw,5.5rem)] ink-text">
            CHIẾN LƯỢC<br />
            <span className="italic gradient-gold-text">"Vừa đánh, vừa đàm"</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Connecting gold line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
            <div className="h-full w-full animate-pulse bg-gradient-to-b from-transparent via-tertiary to-transparent" />
          </div>

          <Reveal delay={150}>
            <div className="relative bg-primary p-10 text-primary-foreground shadow-ambient">
              <span className="label-archival !text-tertiary-container">Cột Quân sự</span>
              <h3 className="text-headline mt-4 text-3xl md:text-4xl">
                Gây sức ép trên chiến trường
              </h3>
              <p className="mt-6 text-lg italic opacity-90">
                Liên tiếp tổ chức các chiến dịch lớn, giữ thế chủ động và làm xói mòn ý chí xâm lược của Mỹ.
              </p>
              <div className="absolute -right-3 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-tertiary md:block" />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="relative bg-surface-bright p-10 shadow-ambient md:mt-20">
              <span className="label-archival">Cột Ngoại giao</span>
              <h3 className="text-headline mt-4 text-3xl ink-text md:text-4xl">
                Chủ động đàm phán tại Paris
              </h3>
              <p className="mt-6 text-lg italic ink-soft">
                Khéo léo tận dụng vị thế chính nghĩa, tranh thủ dư luận và buộc đối phương từng bước nhượng bộ.
              </p>
              <div className="absolute -left-3 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-tertiary md:block" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <p className="text-headline mt-20 text-center text-2xl italic ink-soft md:text-3xl">
            "Mặt trận này hỗ trợ mặt trận kia —<br />Mỹ không thể tập trung vào một phía."
          </p>
        </Reveal>
      </div>

      {/* 3.2 Persistence & flexibility */}
      <div className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={120}>
            <h3 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              Dĩ bất biến,<br />
              <span className="italic gradient-gold-text">ứng vạn biến.</span>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <Reveal delay={150}>
              <div>
                <span className="label-archival">Kiên trì</span>
                <p className="text-display mt-4 text-5xl ink-text md:text-7xl">
                  "Không<br />nhượng bộ"
                </p>
                <p className="mt-8 text-lg leading-relaxed ink-soft">
                  Không nóng vội, không nhượng bộ dễ dàng — bởi ta hiểu rõ rằng mình đang đứng về phía chính nghĩa của lịch sử.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="md:mt-32">
                <span className="label-archival">Linh hoạt</span>
                <p className="text-display mt-4 text-5xl ink-text md:text-7xl">
                  "Giữ vững<br />lập trường"
                </p>
                <p className="mt-8 text-lg leading-relaxed ink-soft">
                  Cách tiếp cận khôn khéo, mềm dẻo trong sách lược nhưng tuyệt đối kiên định ở những vấn đề nguyên tắc cốt lõi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 3.3 VS — Tho vs Kissinger */}
      <div className="relative overflow-hidden bg-ink py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="label-archival !text-tertiary-container">
                Cuộc đấu trí thế kỷ
              </span>
              <h3 className="text-display mt-6 text-4xl md:text-6xl">
                ĐẤU TRÍ TRÊN<br />
                <span className="gradient-gold-text">BÀN ĐÀM PHÁN</span>
              </h3>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 items-center gap-8 md:grid-cols-7">
            <Reveal delay={120} className="md:col-span-3">
              <div className="text-right">
                <img
                  src={lethoImg}
                  alt="Lê Đức Thọ"
                  className="ml-auto aspect-square w-full max-w-sm object-cover grayscale"
                  loading="lazy"
                  width={896}
                  height={1280}
                />
                <p className="text-display mt-6 text-3xl gradient-gold-text md:text-4xl">
                  Lê Đức Thọ
                </p>
                <p className="mt-2 italic opacity-80">
                  Bản lĩnh, kiên định, chặt chẽ
                </p>
              </div>
            </Reveal>

            <Reveal delay={250} className="md:col-span-1">
              <div className="text-display text-center text-7xl gradient-gold-text md:text-9xl">
                VS
              </div>
            </Reveal>

            <Reveal delay={380} className="md:col-span-3">
              <div>
                <div className="aspect-square w-full max-w-sm bg-surface-highest/10 ghost-border flex items-center justify-center text-primary-foreground/40">
                  <img
                    src={kissingerImg}
                    alt="Henry Kissinger"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                    width={896}
                    height={1280}
                  />
                </div>
                <p className="text-display mt-6 text-3xl text-primary-foreground/90 md:text-4xl">
                  Henry Kissinger
                </p>
                <p className="mt-2 italic opacity-70">
                  Cố vấn lão luyện, chiến lược riêng
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <p className="text-headline mx-auto mt-20 max-w-4xl text-center text-xl italic opacity-85 md:text-2xl">
              "Đàm phán không chỉ là thương lượng — mà là cuộc chiến cân não để tạo thế có lợi về lâu dài."
            </p>
          </Reveal>
        </div>
      </div>

      {/* 3.4 Key players */}
      <div className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={120}>
            <h3 className="text-headline mt-6 text-4xl ink-text md:text-6xl">
              Bộ ba <span className="italic gradient-gold-text">đại diện chính nghĩa</span>
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                img: xuanthuyImg,
                name: "Xuân Thuỷ",
                role: "Trưởng đoàn công khai",
                quote: "Đại diện chính thức — tiếng nói chính nghĩa tại các phiên họp công khai.",
              },
              {
                img: lethoImg,
                name: "Lê Đức Thọ",
                role: "Nhân vật chủ chốt bí mật",
                quote: "Người định đoạt những thoả thuận mang tính quyết định trong bóng tối.",
              },
              {
                img: madameImg,
                name: "Nguyễn Thị Bình",
                role: "Bóng hồng thép",
                quote: "Đại diện miền Nam Việt Nam — tiếng nói bản lĩnh của một dân tộc bất khuất.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={150 + i * 120}>
                <article className="group h-full overflow-hidden bg-surface-bright shadow-ambient hover-lift">
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={896}
                      height={1280}
                    />
                  </div>
                  <div className="gold-spine p-8">
                    <span className="label-archival">{p.role}</span>
                    <h4 className="text-headline mt-3 text-3xl ink-text">{p.name}</h4>
                    <p className="mt-4 italic leading-relaxed ink-soft">"{p.quote}"</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* 3.5 Thực lực chiến trường */}
      <div className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={100}>
            <h3 className="text-display mt-8 text-[clamp(2.1rem,6vw,4.4rem)] ink-text">
              THỰC LỰC CHIẾN TRƯỜNG:<br />
              <span className="gradient-gold-text">MỎ NEO CỦA NGOẠI GIAO</span>
            </h3>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal delay={140}>
              <div className="relative overflow-hidden bg-surface-bright shadow-ambient">
                <img
                  src={thanhCoQuangTri1972}
                  alt="Thành cổ Quảng Trị 1972"
                  className="gold-spine aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="h-full space-y-6">
                <div className="overflow-hidden border border-tertiary/30 shadow-ambient">
                  <img
                    src={muadoImg}
                    alt="Mùa đỏ lửa tại Thành cổ Quảng Trị"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    width={1280}
                    height={896}
                  />
                </div>
                <div>
                  <h4 className="text-headline text-3xl ink-text md:text-4xl">
                    81 Ngày Đêm Thành Cổ - Bản Hùng Ca Tạo Thế
                  </h4>
                  <p className="mt-4 leading-relaxed ink-soft">
                    Cuộc chiến đấu bảo vệ Thành cổ (28/06 - 16/09/1972) là minh chứng cho ý chí sắt đá.
                    Dù chênh lệch cực lớn về quân số và vũ khí, ta vẫn kiên cường bám trụ từng tấc đất.
                  </p>
                </div>
                <div className="bg-primary p-6 text-primary-foreground shadow-ambient">
                  <p className="mt-3 leading-relaxed">
                    Thắng lợi tại đây là thực lực cốt lõi, buộc đối phương phải ký kết Hiệp định Paris khi nhận ra
                    không thể khuất phục Việt Nam bằng sức mạnh quân sự.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={380}>
            <div className="mt-16 bg-ink p-8 text-primary-foreground shadow-ambient">
              <p className="text-headline text-2xl italic md:text-3xl">
                "Thực lực là cái chiêng, ngoại giao là cái tiếng"
              </p>
              <p className="mt-4 leading-relaxed opacity-90">
                Quảng Trị chính là phần thân chắc tạo thế đứng vững vàng cho các nhà ngoại giao Việt Nam đấu trí với siêu cường.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
