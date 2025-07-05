# 📌 React-emcast

## 🚀 사용 기술
- **React (v19)**
- **TypeScript**
- **MUI (Material-UI)** : UI 컴포넌트 및 반응형 레이아웃
- **Zustand** : 전역 상태 관리 (사용자 인증, UI 상태)
- **React Query (TanStack)** : 서버 상태 관리, 데이터 캐싱
- **Axios** : API 요청
- **React Hook Form** : 폼 상태 관리 및 검증
- **React Router DOM** : 라우팅
- **i18next** : 다국어 지원
- **Firebase** : 인증 (회원가입, 로그인, 로그아웃)
- **Lodash** : 유틸리티 함수
- **React Hot Toast** : 토스트 알림

---

## 🏗 폴더 구조
```
public/
├── locales/ # 다국어 파일 (ko, en)

src/
├── api/ # axios, react-query 세팅 및 API 함수 (auth, posts, comments)
├── components/ # 재사용 가능한 UI 컴포넌트
├── constants/ # 상수 변수 (queryKeys)
├── pages/ # 라우터에 매핑되는 페이지 컴포넌트
├── hooks/ # 커스텀 훅
│ └── queries/ # react-query 전용 훅
├── store/ # Zustand (사용자 인증, UI 전역 상태)
├── types/ # TypeScript 타입 정의
├── utils/ # 공통 유틸 함수
├── firebase.js # Firebase 설정
└── index.tsx
```
---

---

## ✅ 주요 기능 및 구현 방식

### 📌 게시글 목록 페이지
- `react-query`를 통해 API 호출 및 데이터 캐싱
- `InfiniteQuery` + `Intersection Observer`를 사용해 스크롤이 끝에 도달하면 자동 로딩 (dummyJson offset 방식)
- 게시글 검색 시 `/search?q=검색어` URL로 이동해 상태 유지 → 새로고침 & 뒤로가기 시 스크롤 복원 가능

### 📌 게시글 상세 페이지
- `react-query`를 통한 상세 데이터 호출 및 캐싱

---

### ⚙ 상태 관리
- **API 서버 상태** : `react-query`
- **UI 및 인증 상태** : `zustand`

---

### 🎨 디자인 시스템
- MUI 기반 UI 컴포넌트 설계 및 반응형 레이아웃 적용 (모바일/PC 대응)

---

## 🔐 회원 + 게시판 기능
### ✍ 인증
- `Firebase Auth`를 활용하여 회원가입, 로그인, 로그아웃
- 회원 가입 시 **관리자 / 일반 / 게스트 계정**으로 구분
- `React Hook Form`으로 폼 유효성 검사 및 최소 리렌더 고려

---

### 📝 게시판
- 게시글 **생성 / 삭제**는 dummyJson에서 서버에 실제 저장되지 않기 때문에,
  `react-query` 캐시를 직접 조작하여 Optimistic UI로 즉시 반영

---

### 🔄 상세 → 목록 복귀 시 상태 복원
- `/search?q=검색어` URL로 이동해 상태를 유지 → 새로고침 & 뒤로가기 시 스크롤 및 검색 상태 복원

---

### ⚠ 공통 에러 처리
- `queryClient` 공통 설정으로 네트워크 에러를 처리
- `react-hot-toast`를 활용해 사용자에게 에러 알림 표시

---

### 🌐 다국어 (i18n)
- `i18next`를 사용해 한/영 다국어 전환 지원

---

### 🛠 타입스크립트
- 프로젝트 전반에 TypeScript 적용으로 타입 안정성 확보

---

### 🔍 디자인 패턴
- 특정 패턴에 엄격히 의존하기보다는,  
  `features` + 재사용 `components`를 분리해 유지보수성을 고려하여 자유롭게 구조 설계

---
