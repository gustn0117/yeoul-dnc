import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // 개편 전 주소로 들어온 방문자·검색 결과를 새 페이지로 연결
  async redirects() {
    return [
      { source: "/services", destination: "/marketing", permanent: true },
      { source: "/process", destination: "/contact#guide", permanent: true },
    ];
  },
};

export default nextConfig;
