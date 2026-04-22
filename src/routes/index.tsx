import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/exhibition/ScrollProgress";
import { SideNav } from "@/components/exhibition/SideNav";
import { PartOne } from "@/components/exhibition/PartOne";
import { PartTwo } from "@/components/exhibition/PartTwo";
import { PartThree } from "@/components/exhibition/PartThree";
import { PartFour } from "@/components/exhibition/PartFour";
import { PartFive } from "@/components/exhibition/PartFive";
import { PartSix } from "@/components/exhibition/PartSix";
// import { Part3D } from "@/components/exhibition/Part3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiệp định Paris 1969-1973" },
      {
        name: "description",
        content:
          "Triển lãm số cao cấp về Hiệp định Paris (1969–1973) — câu chuyện về cuộc đàm phán dài nhất thế kỷ XX và bản lĩnh ngoại giao Việt Nam.",
      },
      { property: "og:title", content: "Hiệp định Paris 1969-1973" },
      {
        property: "og:description",
        content:
          "Khám phá hành trình ngoại giao đỉnh cao đưa Mỹ ngồi vào bàn đàm phán — từ Mậu Thân 1968 đến chữ ký lịch sử của Madame Bình.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-surface">
      <ScrollProgress />
      <SideNav />
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFive />
      <PartFour />
      <PartSix />
      {/* <Part3D /> */}
    </main>
  );
}
