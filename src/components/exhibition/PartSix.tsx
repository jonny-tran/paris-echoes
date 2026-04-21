import { Bot, BookOpenText, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PartSix() {
  return (
    <section id="part-6" className="bg-surface-low py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal delay={120}>
          <h2 className="text-headline mt-6 max-w-5xl text-4xl ink-text md:text-6xl">
            CÔNG CỤ HỖ TRỢ & AI
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[190px] grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[200px]">
          <Reveal delay={150} className="md:col-span-3 md:row-span-2">
            <article className="paper-texture flex h-full flex-col justify-between p-8 shadow-ambient md:p-10">
              <div className="flex items-center justify-between">
                <span className="label-archival">NotebookLM</span>
                <BookOpenText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-headline text-3xl ink-text md:text-4xl">NotebookLM</h3>
                <p className="mt-5 leading-relaxed ink-soft">
                  Dùng để đọc và hệ thống hóa các file tài liệu, giáo trình VNR202. Giúp tra cứu nhanh các sự kiện và nhân vật lịch sử.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={260} className="md:col-span-3 md:row-span-1">
            <article className="flex h-full flex-col justify-between bg-primary p-8 text-primary-foreground shadow-ambient">
              <div className="flex items-center justify-between">
                <span className="label-archival !text-tertiary-container">Gemini</span>
                <Bot className="h-6 w-6 text-tertiary-container" />
              </div>
              <div>
                <h3 className="text-headline text-2xl md:text-3xl">Gemini</h3>
                <p className="mt-4 leading-relaxed opacity-90">
                  Hỗ trợ tìm kiếm thêm thông tin bên ngoài, gợi ý cách diễn đạt nội dung và trao đổi ý tưởng trình bày cho website.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={370} className="md:col-span-3 md:row-span-1">
            <article className="flex h-full flex-col justify-between bg-surface-bright p-8 shadow-ambient">
              <div className="flex items-center justify-between">
                <span className="label-archival">Cursor</span>
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-headline text-2xl ink-text md:text-3xl">Cursor</h3>
                <p className="mt-4 leading-relaxed ink-soft">
                  Công cụ chính để viết code và xây dựng giao diện.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
