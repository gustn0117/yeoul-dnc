# 여울디앤씨 홈페이지

Next.js 16 (App Router) · Tailwind CSS v4 · 셀프호스팅 Supabase(`yeoul_dnc` 스키마) · Docker 배포

- 배포: `main`에 푸시하면 서버 webhook이 자동으로 빌드·반영 (`https://yeouldnc.com`)
- 로컬 개발: `.env.local`을 만든 뒤 `npm run dev` (이 폴더에서는 수정이 반영되지 않으면 `.next/dev`를 지우고 다시 실행)
  - 로컬도 운영과 같은 DB를 씁니다. 관리자 계정 변경·상담 접수 테스트는 운영 데이터에 그대로 반영되니 주의하세요.

## 페이지 구성

| 주소 | 내용 |
| --- | --- |
| `/` | 메인: 히어로, 함께하는 업종, 서비스 6가지, 작업물 미리보기, 진행 방식, 여울애드 안내, 상담 |
| `/about` | 회사소개 |
| `/marketing` | 광고·마케팅: 목적별 채널 찾기, 네이버·메타·카카오·구글·LMS·당근 등 매체별 안내 |
| `/production` | 제작서비스 한눈에 보기 (하위: `/production/video`, `/design`, `/document`, `/web`) |
| `/automation` | 고객관리·자동화 |
| `/cases` | 포트폴리오 |
| `/yeoulad` | 분양·부동산 전문 브랜드 여울애드 안내 → `https://yeoulads.com` |
| `/contact` | 상담 신청 폼, 진행·보고·견적 안내(`#guide`), 자주 묻는 질문(`#faq`) |

- 예전 주소 `/services` → `/marketing`, `/process` → `/contact#guide`로 영구 이동합니다 (`next.config.ts`).
- 영상·디자인·문서 작업물은 실제 자료를 받기 전까지 "구성 예시" 표시를 단 예시 화면을 씁니다. 홈페이지 사례 이미지는 `public/images/works/web/`, 목록은 `src/lib/offerings.ts`의 `WEB_WORKS`.

## 관리자 (`/admin`)

- 아이디·비밀번호로 로그인합니다. 초기 계정은 서버 환경변수 `ADMIN_USERNAME`(기본 `admin`) / `ADMIN_PASSWORD`(기본 `1234`)이고, 관리자 화면 **알림·계정 설정**에서 바꾸면 그 값이 우선합니다.
- 아이디 도입 전에 비밀번호만 바꿔 둔 경우(`admin_password`)에는 아이디 `admin`(또는 `ADMIN_USERNAME`) + 그 비밀번호로 로그인합니다.
- 계정을 잊어버렸을 때: `site_settings`에서 `admin_account`(와 `admin_password`) 행을 지우면 환경변수 계정으로 돌아갑니다.
- **상담 접수**: 홈페이지 상담 신청 목록, 상태(신규·진행중·완료·취소)·메모·삭제
- **팝업 관리**: 메인 팝업 켜기/끄기, 노출 기간, 제목(`**강조**`)·내용·이미지·버튼 링크, 실시간 미리보기
- **알림·계정 설정**: 새 접수 알림 받을 번호(최대 3개), 테스트 알림, 관리자 아이디·비밀번호 변경

## 서버 환경변수 (`/home/server/apps/yeoul-dnc/.env.production`)

git에 올리지 않는 파일입니다. Next standalone 빌드가 함께 넣고 서버 시작 시 읽으므로, 값을 바꾼 뒤에는 재배포가 필요합니다.

| 이름 | 설명 |
| --- | --- |
| `SUPABASE_SERVICE_ROLE_KEY` | 서버 전용 DB 키. 테이블은 RLS로 외부 접근을 막고 서버만 이 키로 읽고 씀 |
| `ADMIN_USERNAME` | 관리자 초기 아이디 (기본 `admin`) |
| `ADMIN_PASSWORD` | 관리자 초기 비밀번호 (기본 `1234`) |
| `ADMIN_SESSION_SECRET` | 관리자 로그인 쿠키 서명용 임의 문자열 |
| `SOLAPI_API_KEY` / `SOLAPI_API_SECRET` | 솔라피 API 키 |
| `SOLAPI_PFID` | 솔라피에 연동한 카카오톡 채널(발신프로필) ID, `PF…` |
| `SOLAPI_TEMPLATE_ID` | 승인된 알림톡 템플릿 ID, `KA…` |
| `SOLAPI_SENDER` | 등록된 발신번호. 알림톡 실패 시 문자로 대체발송, 템플릿 승인 전에는 문자(LMS)로 알림 |
| `MAKE_WEBHOOK_URL` | (선택) Make 시나리오로도 받을 때 웹훅 주소 |

솔라피 값이 비어 있으면 알림만 건너뛰고 접수는 그대로 저장됩니다.

## 새 상담 접수 카카오톡 알림 (솔라피)

1. [솔라피](https://solapi.com) 가입 → 충전(알림톡 건당 약 13원) → **API Key 관리**에서 키 발급
2. **카카오 채널 연동**: 여울디앤씨 채널(`pf.kakao.com/_GxipxdX`)을 발신프로필로 등록 (채널 관리자 휴대폰 인증)
3. **발신번호 등록**: 문자 대체발송용 (회사 대표번호 등, 통신서비스 이용증명원 필요)
4. **알림톡 템플릿 등록** → 카카오 검수 승인 (영업일 1~3일). 변수 이름은 아래와 글자 하나까지 같아야 합니다.

```
[여울디앤씨] 새 상담 신청이 접수되었습니다.

■ 업체명: #{업체명}
■ 담당자: #{담당자}
■ 연락처: #{연락처}
■ 업종: #{업종}
■ 문의내용: #{문의내용}

접수시각: #{접수시각}
관리자 페이지에서 자세한 내용을 확인해 주세요.
```

버튼: 웹링크 `관리자 페이지 열기` → `https://yeouldnc.com/admin`

5. 받은 값을 서버 `.env.production`에 넣고 재배포 → 관리자 **알림·계정 설정**에서 **테스트 알림 보내기**로 확인

## 데이터 (Supabase `yeoul_dnc`)

- `inquiries`: 상담 접수 (요청 필드와 선택지 문자열은 `src/lib/inquiry.ts`와 맞춰 둘 것)
- `site_settings`: `popup`, `popup_image`, `notify`, `admin_account`(관리자 화면에서 바꾼 아이디·비밀번호 해시), `admin_password`(아이디 도입 전 비밀번호 해시, `admin_account`가 생기면 쓰지 않음)
- 두 테이블 모두 RLS를 켜고 anon 권한을 없앴습니다. 브라우저에서 직접 DB에 접근하지 않습니다.
