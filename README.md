# optimal-nextjs-application-structure-design

**Next.js App Router의 핵심 기능(라우팅·로딩/에러 처리·렌더링 방식·스타일링)을 주제별 화면으로 정리한 학습용 예제**입니다. (2025-01~02, Next.js 15 + React 19 + TypeScript + Tailwind CSS)
왼쪽 메뉴에서 주제를 고르면 그 기능이 실제로 동작하는 화면이 열리고, 서버 컴포넌트/클라이언트 컴포넌트 경계가 색깔 상자(`Boundary`)로 표시됩니다.

## 주제 (왼쪽 메뉴, `data/menu.ts`)

| 묶음 | 주제 | 폴더 (`app/…`) |
| --- | --- | --- |
| 라우팅: 기법 | 라우팅 기본 | `route` |
| | 동적 라우팅 | `dynamic-routing` |
| | 라우팅 그룹 | `route-groups` |
| | 병렬 라우팅 | `parallel-routes` |
| 라우팅: UI | 로딩 | `loading` |
| | 에러 처리 | `error-handling` |
| | 페이지 없음(404) | `not-found` |
| 렌더링: 데이터 가져오기 | 정적 사이트 생성 (SSG) | `ssg` |
| | 증분적 정적 재생성 (ISR) | `isr` |
| | 서버 사이드 렌더링 (SSR) | `ssr` |
| | 서스펜스 스트리밍 | `streaming` |
| 렌더링: 서버/클라이언트 컴포넌트 | 리액트 컨텍스트 | `context` |
| 다양한 기법 | CSS 스타일링 (전역 CSS, CSS 모듈, styled-components, styled-jsx, Tailwind) | `styling` |
| | Next.js 라우팅 훅 | `hooks` |
| | URL 검색 파라미터 설정 | `search-params` |

## 사용 기술

| 구분 | 내용 |
| --- | --- |
| 프레임워크 | Next.js 15.1.6 (App Router, Turbopack 개발 서버) |
| 화면 | React 19, TypeScript 5 |
| 스타일 | Tailwind CSS 3.4 (+ forms, typography), styled-components 6, styled-jsx, CSS 모듈 |
| 보조 | clsx, date-fns, ms, @heroicons/react, use-count-up |
| 코드 검사 | ESLint 9 (`eslint-config-next`) |

## 폴더 구조

```
optimal-nextjs-application-structure-design/
├── app/            # 주제별 화면 (폴더 이름 = 주소)
├── ui/             # 공용 화면 부품 (Boundary, 탭, 메뉴, 상품 카드 등)
├── data/           # 메뉴·카테고리·상품·리뷰 데이터와 타입
├── styles/         # 전역 스타일
└── next.config.ts, tailwind.config.ts, tsconfig.json
```

## 실행 명령

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 배포용 빌드 |
| `npm start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 실행 방법

```bash
git clone https://github.com/jeong-jihyun/optimal-nextjs-application-structure-design.git
cd optimal-nextjs-application-structure-design
npm ci
npm run dev
```

일부 화면(`loading`, `streaming`, `isr`)은 외부 연습용 API(`app-router-api.vercel.app`, `jsonplaceholder.typicode.com`)를 호출하므로 **인터넷 연결이 필요**하고, `npm run build`도 이 호출이 되는 환경에서 해야 합니다.

## 확인 내역 (2026-10)

| 점검 | 결과 |
| --- | --- |
| `npm ci`, `npm run lint` | 성공 |
| `npm run build` 컴파일·타입 검사 | 성공 |
| `npm run build` 정적 페이지 생성 | 이 작업 환경에서는 외부 API에 접속할 수 없어 `/isr/1`에서 `fetch failed`로 중단됨 (코드 문제가 아닌 환경 제한). 인터넷이 되는 환경에서 확인이 필요합니다 |

## 개선 내역 (2026-10)

| 구분 | 문제 | 수정 내용 |
| --- | --- | --- |
| 빌드 실패 | Next.js 15는 `params`를 `Promise`로 받는데 19개 파일이 예전 방식(`{ categorySlug: string }`)으로 타입을 지정해 `npm run build`가 `Type error`로 중단 | 19개 `page.tsx`/`layout.tsx`의 `params` 타입을 `Promise<…>`로 수정, 직접 쓰던 2곳(`streaming/[id]`, `hooks/…/[subCategorySlug]`)은 `await` 추가 |
| 빌드 실패 | `useCounter`가 `typeof window === "undefined"`이면 오류를 던지는데, 클라이언트 컴포넌트도 서버에서 한 번 렌더링되므로 `/context` 정적 생성이 `useCounter must be called in a client-side component`로 중단 | 해당 검사 제거 |

## 앞으로 손보면 좋은 점

- 첫 화면(`app/page.tsx`)이 `Hello, Next.js` 한 줄이고, 메뉴로 이동해야 예제가 보입니다.
- `app/not-found`, `app/dashboard/loading.tsx` 등 일부 폴더는 메뉴에 없거나 화면이 최소한입니다.
- `app/isr/[id]/README.md`, `app/route-groups/README.md`는 해당 화면에 대한 설명 메모입니다.
- 외부 API 대신 `data/` 안의 데이터를 쓰면 오프라인에서도 빌드할 수 있습니다.
- 테스트 코드가 없습니다.
