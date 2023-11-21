This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Next.js란?
Next.js   = 오픈소스 자바스크립트 프레임워크, React.js에 다양한 기능을 제공하는 확장판(서버 사이드 렌더링)
            다양한 기능을 제공함 -> 폴더 구조 기반의 페이지 라우팅 / 이미지, 글꼴, 스크립트 최적화 / *서버 사이드 렌더링 / 기타 등등...
React     = 오픈소스 자바스크립트 라이브러리

# 프레임워크 vs 라이브러리 - 기능 구현의 주도권이 누구에게 있는가?
  프레임워크 = 프레임워크가 주도권을 가진다.
    예시> 페이지 라우팅 구현 -> 프레임워크가 정해놓은 기능을 이용해 정해놓은 방법대로 구현해야함
  자유도가 낮지만 많은 기능이 제공된다.

  라이브러리 = 프로그래머가 주도권을 가진다.
    예시> 페이지 라우팅 구현 -> 프로그래머가 원하는대로 구현하면 됨 무슨 도구를 어떻게 쓰던 자유
  자유도가 높으나 대다수의 기능 제공 안된다.

# 페이지 라우터
Page Router vs App Router
1. Page Router : 기본 버전 모두 제공, 기존부터 제공되어 오던 기능으로 대다수의 프로젝트가 이를 사용하며 배우기 쉽다
                 폴더 구조를 기반으로 라우팅을 제공
                 동적 경로에 대응함
2. App Router : Next 13 버전부터 제공, 새롭게 출시된 기능으로 아직 불안정한 부분이 존재