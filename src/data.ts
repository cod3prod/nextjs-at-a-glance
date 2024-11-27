import Image1 from "./assets/image01.png";
import Image2 from "./assets/image02.png";
import Image3 from "./assets/image03.png";
import Image4 from "./assets/image04.png";
import { EssentialData } from "./types/data";


const essentials: EssentialData[] = [
  {
    image: Image1,
    title: "파일 기반 라우팅",
    description:
      "디렉토리와 파일 이름을 기반으로 자동으로 라우팅을 처리합니다.",
    example:
      "Next.js에서는 /app 디렉토리 안에 파일을 생성하면 해당 파일명이 URL 경로가 됩니다. 예를 들어, app/about/page.tsx는 /about 경로에 해당합니다. 이를 통해 별도의 설정 없이 라우팅을 손쉽게 구현할 수 있어 생산성이 크게 향상됩니다.",
  },
  {
    image: Image2,
    title: "서버 사이드 렌더링",
    description:
      "서버에서 렌더링된 페이지를 제공하거나, 정적 HTML 파일을 미리 생성하여 배포합니다.",
    example:
      "Next.js는 페이지별로 SSR, SSG, 클라이언트 사이드 렌더링(CSR)을 유연하게 선택할 수 있습니다. generateStaticParams로 SSG를, 서버 컴포넌트와 API로 SSR을 간단히 구현 가능하며, 초기 로딩 속도와 SEO를 크게 개선합니다.",
  },
  {
    image: Image3,
    title: "API 라우트",
    description: "서버리스 함수로 백엔드 API 쉽게 구현할 수 있습니다.",
    example:
      "/app/api 폴더에 파일을 추가하면 API 엔드포인트가 자동으로 생성됩니다. 예를 들어, app/api/users/route.ts는 /api/users로 접근할 수 있습니다. 이 기능을 통해 프론트엔드와 백엔드를 한 프로젝트에서 통합 관리할 수 있습니다.",
  },
  {
    image: Image4,
    title: "스토어 샘플링",
    description:
      "next/image 컴포넌트를 사용해 성능과 SEO를 고려한 이미지 처리가 가능합니다.",
    example:
      "<Image> 컴포넌트는 자동으로 이미지 크기 조정, 웹포맷 변환, 레이지 로딩 등을 지원합니다. CDN과도 통합되어 빠른 이미지 로딩을 제공하며, 프로젝트의 UX와 성능 최적화에 유리합니다.",
  },
];

export default essentials;