"use strict";

// All translatable page copy lives here. HTML retains Korean for no-JavaScript visits.
const translations = {
  "ko": {
    "title": "Tidemark — 개발자의 Mac을 위한 디스크 정리",
    "meta": "개발 캐시부터 AI 모델까지. 무엇이 공간을 차지하는지 확인하고, 직접 고른 항목만 안전하게 정리하세요. 무료 오픈 소스 Mac 앱 Tidemark.",
    "skip": "본문으로 건너뛰기",
    "nav.label": "주 내비게이션",
    "nav.features": "기능",
    "nav.safety": "안전",
    "nav.ai": "AI",
    "nav.download": "다운로드",
    "nav.sponsor": "후원",
    "nav.language": "언어",
    "nav.github": "GitHub에서 개발자 보기",
    "hero.eyebrow": "개발자를 위한 디스크 정리",
    "hero.line1": "개발하며 쌓인 수십 GB,",
    "hero.line2": "안전하게 되찾으세요.",
    "hero.desc": "캐시, 빌드 산출물, AI 모델까지. 공간을 차지하는 이유를 확인하고, 직접 고른 항목만 정리하세요.",
    "hero.guide": "사용 설명서",
    "hero.trust": "무료 · 오픈 소스 · macOS 11+ · Apple Silicon / Intel",
    "hero.caption": "실제 앱 화면 · 확보 가능한 용량은 Mac마다 다릅니다.",
    "alt.cleanup": "Tidemark 정리 후보 화면: 카테고리별 항목, 위험도와 확보 예상량",
    "alt.map": "Tidemark 용량 지도: 폴더 크기를 비교하는 트리맵",
    "alt.ai": "Tidemark AI 도구 화면: 디스크, CPU와 메모리 사용량",
    "alt.servers": "Tidemark 서버 화면: 프로세스별 열린 포트와 네트워크 노출 상태",
    "features.eyebrow": "무엇을 찾나",
    "features.title": "쌓이는 곳을 알고 있습니다.",
    "features.desc": "개발 도구가 남긴 데이터부터 오래된 파일까지, 종류별로 모아 보여 줍니다.",
    "f.cache.title": "캐시 · 빌드 · 의존성",
    "f.cache.desc": "npm·uv·cargo 캐시와 node_modules, target. 다시 만들 수 있는 데이터부터 찾습니다.",
    "f.dev.title": "IDE · 시뮬레이터 · Docker",
    "f.dev.desc": "Xcode 데이터, 사용 불가 iOS 시뮬레이터, Docker 미사용 데이터를 확인합니다.",
    "f.ai.title": "AI 모델 · 도구 데이터",
    "f.ai.desc": "Hugging Face·Ollama·LM Studio 모델과 AI 도구의 캐시·사용자 데이터를 구분합니다.",
    "f.apps.title": "설치된 앱 · 남은 흔적",
    "f.apps.desc": "오래 안 쓴 앱의 크기와 흔적, 이미 삭제한 앱이 남긴 데이터를 살펴봅니다.",
    "f.files.title": "큰 파일 · 다운로드",
    "f.files.desc": "용량 지도에서 큰 폴더를 찾고, 오래되거나 중복된 다운로드를 직접 확인합니다.",
    "f.packages.title": "전역 패키지 업데이트",
    "f.packages.desc": "Homebrew·npm·pnpm의 새 버전을 확인하고, 공식 명령으로 업그레이드합니다.",
    "tour.eyebrow": "화면 둘러보기",
    "tour.title": "공간을 읽는 네 가지 시선.",
    "tour.label": "앱 화면 선택",
    "tour.cleanup": "정리 후보",
    "tour.map": "용량 지도",
    "tour.ai": "AI 도구",
    "tour.servers": "서버",
    "tour.cleanup.desc": "안전·주의·위험을 먼저 확인하세요. 복구 방법과 git 상태, 공식 명령의 확보 예상량을 보고 선택할 수 있습니다.",
    "tour.map.desc": "크기에 비례한 지도로 큰 폴더를 따라가세요. 큰 파일과 오래된·중복 다운로드도 여기서 확인합니다.",
    "tour.ai.desc": "AI 도구의 디스크·CPU·메모리 사용량을 읽기 전용으로 확인하세요. 캐시와 사용자 데이터를 구분해 보여 줍니다.",
    "tour.servers.desc": "프로세스별 열린 포트와 네트워크 노출 상태를 확인하세요. 종료 전에는 대상을 다시 확인하고 확인 창을 거칩니다.",
    "tour.note": "스크린샷은 다크 테마 예시이며 앱은 라이트·다크 테마를 모두 지원합니다.",
    "safety.eyebrow": "안전장치",
    "safety.title": "지우기 전에, 한 번 더.",
    "safety.desc": "무엇이 지워지는지 보여 주고, 위험한 선택에는 한 번 더 확인을 받습니다.",
    "s.scan.title": "스캔은 읽기 전용",
    "s.scan.desc": "찾고 크기를 재기만 합니다. 스캔은 아무것도 지우지 않습니다.",
    "s.trash.title": "기본은 휴지통으로",
    "s.trash.desc": "되돌릴 수 있도록 휴지통 이동을 기본으로 합니다. 명령 실행·오래된 파일 정리는 즉시 삭제될 수 있습니다.",
    "s.git.title": "git 변경 확인",
    "s.git.desc": "프로젝트의 커밋 안 된 변경과 푸시하지 않은 커밋을 표시합니다.",
    "s.process.title": "사용 중인 프로세스 감지",
    "s.process.desc": "관련 프로그램이 실행 중이면 정리 전에 경고합니다.",
    "s.official.title": "공식 정리 명령 우선",
    "s.official.desc": "npm·uv·Docker가 제공하는 정리 방법을 먼저 사용합니다.",
    "s.preflight.title": "확보량 사전 점검",
    "s.preflight.desc": "지원되는 공식 명령은 전체 크기와 실제 확보 예상량을 구분합니다.",
    "s.personal.title": "개인 파일은 직접 선택",
    "s.personal.desc": "개인 파일은 기본 선택하지 않습니다. 중복 사본 일괄 선택은 원본 후보를 남깁니다.",
    "s.access.title": "권한 창 없이 접근 확인",
    "s.access.desc": "전체 디스크 접근 여부를 조용히 확인하고, 읽을 수 없는 곳은 건너뜁니다.",
    "ai.eyebrow": "AI와 함께",
    "ai.title": "“이 폴더, 지워도 될까?”",
    "ai.desc": "MCP로 지금 보고 있는 항목을 에이전트에게 보여 주세요. 근거와 복구 방법을 검토받고, 정리 여부는 직접 결정합니다.",
    "ai.note": "에이전트는 별도 설치가 필요하며, 로그인·요금은 각 CLI의 설정을 따릅니다.",
    "cli.title": "익숙한 터미널, 같은 엔진.",
    "cli.desc": "앱 안의 터미널에서 살펴보거나, CLI로 바로 스캔하세요.",
    "cli.comment": "# 스캔만 합니다. 아무것도 지우지 않습니다.",
    "privacy.title": "내 Mac의 데이터는, 내 Mac에.",
    "privacy.desc": "스캔 결과와 정리 이력은 이 Mac에만 저장됩니다. 네트워크는 끌 수 있는 업데이트 확인과 직접 실행한 명령·AI 에이전트가 사용합니다.",
    "download.eyebrow": "곧 만나요",
    "download.title": "새로운 여유를 준비 중입니다.",
    "download.desc": "첫 공개 버전을 준비하고 있습니다. 서명·공증된 .dmg로 배포됩니다.",
    "download.follow": "GitHub에서 소식 받기",
    "download.requirements": "시스템 요구 사항: macOS 11 이상 · Apple Silicon / Intel",
    "build.title": "Homebrew · 소스에서 빌드",
    "build.desc": "Homebrew 설치 안내는 공개 릴리스와 함께 제공됩니다. 지금은 소스 저장소에서 아래 명령으로 앱 번들을 만들 수 있습니다.",
    "build.readme": "GitHub에서 소스 공개 소식 →",
    "sponsor.title": "다음 정리를 함께 만듭니다.",
    "sponsor.desc": "Tidemark는 무료 오픈 소스입니다. 도움이 되었다면 개발을 응원해 주세요.",
    "sponsor.button": "GitHub Sponsors로 후원",
    "ai.agents.label": "지원 AI 에이전트"
  },
  "en": {
    "title": "Tidemark — Disk cleanup for your developer Mac",
    "meta": "Find developer caches, build artifacts and AI models. Review what takes up space and clean only what you choose with Tidemark, a free, open-source Mac app.",
    "skip": "Skip to content",
    "nav.label": "Main navigation",
    "nav.features": "Features",
    "nav.safety": "Safety",
    "nav.ai": "AI",
    "nav.download": "Download",
    "nav.sponsor": "Sponsor",
    "nav.language": "Language",
    "nav.github": "View the developer on GitHub",
    "hero.eyebrow": "DISK CLEANUP FOR DEVELOPERS",
    "hero.line1": "Gigabytes of dev clutter.",
    "hero.line2": "Room for what’s next.",
    "hero.desc": "From caches and build artifacts to AI models. See what takes up space, then clean only what you choose.",
    "hero.guide": "User guide",
    "hero.trust": "Free · Open source · macOS 11+ · Apple Silicon / Intel",
    "hero.caption": "Actual app screenshot · Reclaimable space varies by Mac.",
    "alt.cleanup": "Tidemark Cleanup showing categories, risk levels and estimated reclaimable space",
    "alt.map": "Tidemark Disk Map comparing folder sizes in a treemap",
    "alt.ai": "Tidemark AI Tools showing disk, CPU and memory usage",
    "alt.servers": "Tidemark Servers showing open ports by process and network exposure",
    "features.eyebrow": "WHAT’S TAKING UP SPACE",
    "features.title": "Find what development leaves behind.",
    "features.desc": "Developer data and forgotten files, organized so you can make an informed choice.",
    "f.cache.title": "Caches, builds & dependencies",
    "f.cache.desc": "npm, uv and cargo caches, node_modules and target. Start with data you can rebuild.",
    "f.dev.title": "IDEs, simulators & Docker",
    "f.dev.desc": "Review Xcode data, unavailable iOS simulators and unused Docker data.",
    "f.ai.title": "AI models & tool data",
    "f.ai.desc": "Find Hugging Face, Ollama and LM Studio models. Distinguish tool caches from user data.",
    "f.apps.title": "Installed Apps & leftovers",
    "f.apps.desc": "Review unused apps and their data, plus leftovers from apps you already removed.",
    "f.files.title": "Large files & downloads",
    "f.files.desc": "Explore large folders in Disk Map. Review old and duplicate downloads before removing them.",
    "f.packages.title": "Global package updates",
    "f.packages.desc": "Check Homebrew, npm and pnpm packages for updates. Upgrade using their official commands.",
    "tour.eyebrow": "A CLOSER LOOK",
    "tour.title": "Four ways to see your Mac.",
    "tour.label": "Choose an app view",
    "tour.cleanup": "Cleanup",
    "tour.map": "Disk Map",
    "tour.ai": "AI Tools",
    "tour.servers": "Servers",
    "tour.cleanup.desc": "Review Safe, Caution and Danger items before choosing. See recovery guidance, git status and estimated space from cleanup commands.",
    "tour.map.desc": "Follow the largest folders through a proportional map. Find large files and old or duplicate downloads here, too.",
    "tour.ai.desc": "Inspect AI tool disk, CPU and memory usage in a read-only view. Caches and user data are clearly separated.",
    "tour.servers.desc": "See open ports by process and whether they’re network-facing. Stopping a process requires identity checks and your confirmation.",
    "tour.note": "Screenshots show the dark theme. The app supports both light and dark themes.",
    "safety.eyebrow": "SAFETY BY DESIGN",
    "safety.title": "A second look before deletion.",
    "safety.desc": "See exactly what will be removed. Risky choices need an extra confirmation.",
    "s.scan.title": "Read-only scans",
    "s.scan.desc": "Scanning finds items and measures size. It never deletes anything.",
    "s.trash.title": "Trash comes first",
    "s.trash.desc": "Move to Trash is the default. Command-based and aged-file cleanup can delete immediately.",
    "s.git.title": "Check git changes",
    "s.git.desc": "See uncommitted changes and unpushed commits in project repositories.",
    "s.process.title": "Detect running processes",
    "s.process.desc": "Warnings tell you when a related program is still running.",
    "s.official.title": "Official commands first",
    "s.official.desc": "Use the cleanup methods provided by npm, uv and Docker first.",
    "s.preflight.title": "Pre-check reclaimable space",
    "s.preflight.desc": "Supported commands show estimated reclaimable space separately from total size.",
    "s.personal.title": "You choose personal files",
    "s.personal.desc": "Personal files are not selected by default. Selecting duplicate copies keeps the original candidate.",
    "s.access.title": "Check access without a prompt",
    "s.access.desc": "Quietly check Full Disk Access and skip locations that cannot be read.",
    "ai.eyebrow": "WITH YOUR AI",
    "ai.title": "“Can I delete this folder?”",
    "ai.desc": "Share the items you’re viewing with an agent through MCP. Review its reasoning and recovery advice, then make the call yourself.",
    "ai.note": "Agents require a separate installation. Sign-in and billing follow each CLI’s settings.",
    "cli.title": "Your terminal. The same engine.",
    "cli.desc": "Explore in the built-in terminal, or scan directly from the CLI.",
    "cli.comment": "# Scan only. Nothing is deleted.",
    "privacy.title": "Your Mac’s data stays on your Mac.",
    "privacy.desc": "Scan results and cleanup history are stored locally. Network access is used for optional update checks and commands or AI agents you run.",
    "download.eyebrow": "COMING SOON",
    "download.title": "More breathing room is on the way.",
    "download.desc": "We’re preparing the first public release. It will ship as a signed and notarized .dmg.",
    "download.follow": "Follow on GitHub",
    "download.requirements": "System requirements: macOS 11 or later · Apple Silicon / Intel",
    "build.title": "Homebrew & building from source",
    "build.desc": "Homebrew installation instructions will arrive with the public release. For now, run these commands from the source checkout to build an app bundle.",
    "build.readme": "Source availability on GitHub →",
    "sponsor.title": "Help make room for what’s next.",
    "sponsor.desc": "Tidemark is free and open source. If it helps you, consider supporting its development.",
    "sponsor.button": "Support on GitHub Sponsors",
    "ai.agents.label": "Supported AI agents"
  },
  "ja": {
    "title": "Tidemark — 開発者のMacをすっきり整理",
    "meta": "開発キャッシュからAIモデルまで。容量の内訳を確認し、自分で選んだ項目を整理できる無料・オープンソースのMacアプリ、Tidemark。",
    "skip": "本文へ移動",
    "nav.label": "メインナビゲーション",
    "nav.features": "機能",
    "nav.safety": "安全性",
    "nav.ai": "AI",
    "nav.download": "ダウンロード",
    "nav.sponsor": "支援",
    "nav.language": "言語",
    "nav.github": "GitHubで開発者を見る",
    "hero.eyebrow": "開発者のためのディスク整理",
    "hero.line1": "開発で積もった数十GB。",
    "hero.line2": "安全に、空きを取り戻そう。",
    "hero.desc": "キャッシュ、ビルド成果物、AIモデルまで。容量を使う理由を確かめて、選んだ項目だけを整理。",
    "hero.guide": "使い方ガイド",
    "hero.trust": "無料 · オープンソース · macOS 11以降 · Apple Silicon / Intel",
    "hero.caption": "実際のアプリ画面 · 確保できる容量はMacによって異なります。",
    "alt.cleanup": "Tidemarkの整理候補画面：カテゴリ、リスク、確保できる容量の目安",
    "alt.map": "Tidemarkの容量マップ：フォルダサイズを比較するツリーマップ",
    "alt.ai": "TidemarkのAIツール画面：ディスク、CPU、メモリの使用量",
    "alt.servers": "Tidemarkのサーバー画面：プロセスごとのポートとネットワーク公開状態",
    "features.eyebrow": "容量の内訳を知る",
    "features.title": "開発の「置き土産」を見つける。",
    "features.desc": "開発ツールのデータも、忘れていたファイルも。種類別にまとめて確認できます。",
    "f.cache.title": "キャッシュ・ビルド・依存関係",
    "f.cache.desc": "npm・uv・cargoのキャッシュ、node_modules、target。再生成できるデータから確認。",
    "f.dev.title": "IDE・シミュレータ・Docker",
    "f.dev.desc": "Xcodeのデータ、利用できないiOSシミュレータ、未使用のDockerデータを確認。",
    "f.ai.title": "AIモデル・ツールのデータ",
    "f.ai.desc": "Hugging Face・Ollama・LM Studioのモデルを探し、キャッシュとユーザーデータを区別。",
    "f.apps.title": "インストール済みアプリと残存データ",
    "f.apps.desc": "使っていないアプリと関連データ、削除済みアプリの残存データを確認。",
    "f.files.title": "大きなファイル・ダウンロード",
    "f.files.desc": "容量マップで大きなフォルダを探し、古いダウンロードや重複ファイルを確認。",
    "f.packages.title": "グローバルパッケージの更新",
    "f.packages.desc": "Homebrew・npm・pnpmの更新を確認し、公式コマンドでアップグレード。",
    "tour.eyebrow": "画面を見てみる",
    "tour.title": "4つの視点で、Macを知る。",
    "tour.label": "アプリ画面を選択",
    "tour.cleanup": "整理候補",
    "tour.map": "容量マップ",
    "tour.ai": "AIツール",
    "tour.servers": "サーバー",
    "tour.cleanup.desc": "安全・注意・危険を確認してから選択。復元方法、gitの状態、公式コマンドで確保できる容量の目安を表示します。",
    "tour.map.desc": "大きさに比例したマップでフォルダをたどれます。大きなファイルや古い・重複ダウンロードもここで確認。",
    "tour.ai.desc": "AIツールのディスク・CPU・メモリ使用量を読み取り専用で確認。キャッシュとユーザーデータを分けて表示します。",
    "tour.servers.desc": "プロセスごとのポートとネットワーク公開状態を確認。終了前には対象を再確認し、確認ダイアログを表示します。",
    "tour.note": "スクリーンショットはダークテーマの例です。アプリはライト・ダークの両方に対応。",
    "safety.eyebrow": "安全のための仕組み",
    "safety.title": "消す前に、もう一度。",
    "safety.desc": "削除する内容を表示し、リスクのある項目は追加で確認します。",
    "s.scan.title": "スキャンは読み取り専用",
    "s.scan.desc": "項目を探してサイズを測るだけ。スキャンで何かを消すことはありません。",
    "s.trash.title": "基本はゴミ箱へ",
    "s.trash.desc": "基本は元に戻せるゴミ箱移動。コマンド実行や古いファイルの整理は直接削除される場合があります。",
    "s.git.title": "gitの変更を確認",
    "s.git.desc": "プロジェクトの未コミット変更や未プッシュのコミットを表示。",
    "s.process.title": "実行中のプロセスを検出",
    "s.process.desc": "関連するプログラムが動いている場合は、整理前に警告します。",
    "s.official.title": "公式コマンドを優先",
    "s.official.desc": "npm・uv・Dockerが提供する整理方法を優先します。",
    "s.preflight.title": "確保できる容量を事前確認",
    "s.preflight.desc": "対応する公式コマンドでは、総サイズと確保できる容量の目安を分けて表示。",
    "s.personal.title": "個人ファイルは自分で選択",
    "s.personal.desc": "個人ファイルは初期選択しません。重複コピーの一括選択でも元ファイル候補は残します。",
    "s.access.title": "許可ダイアログなしで確認",
    "s.access.desc": "フルディスクアクセスの状態を確認し、読めない場所はスキップします。",
    "ai.eyebrow": "いつものAIと一緒に",
    "ai.title": "「このフォルダ、消していい？」",
    "ai.desc": "MCPで表示中の項目をエージェントに共有。判断の根拠や復元方法を確認し、整理するかは自分で決めます。",
    "ai.note": "エージェントは別途インストールが必要です。ログインや料金は各CLIの設定に従います。",
    "cli.title": "いつものターミナル、同じエンジン。",
    "cli.desc": "内蔵ターミナルで確認しても、CLIで直接スキャンしても。",
    "cli.comment": "# スキャンのみ。何も削除しません。",
    "privacy.title": "Macのデータは、このMacに。",
    "privacy.desc": "スキャン結果と整理履歴はこのMacだけに保存。通信は無効にできる更新確認と、自分で実行したコマンド・AIエージェントが使います。",
    "download.eyebrow": "まもなく公開",
    "download.title": "新しい空きを、準備中。",
    "download.desc": "初の一般公開版を準備しています。署名・公証済みの.dmgで配布予定です。",
    "download.follow": "GitHubで最新情報を見る",
    "download.requirements": "動作環境：macOS 11以降 · Apple Silicon / Intel",
    "build.title": "Homebrew・ソースからビルド",
    "build.desc": "Homebrewでのインストール方法は一般公開時に案内します。今はソースのチェックアウト先で以下を実行するとアプリをビルドできます。",
    "build.readme": "GitHubでソース公開の情報を見る →",
    "sponsor.title": "次の整理を、一緒に。",
    "sponsor.desc": "Tidemarkは無料のオープンソースです。役に立ったら、開発を応援してください。",
    "sponsor.button": "GitHub Sponsorsで支援",
    "ai.agents.label": "対応AIエージェント"
  },
  "zh": {
    "title": "Tidemark — 为开发者的 Mac 清理磁盘",
    "meta": "从开发缓存到 AI 模型，查看空间占用，只清理自己确认的项目。Tidemark 是一款免费、开源的 Mac 应用。",
    "skip": "跳转到正文",
    "nav.label": "主导航",
    "nav.features": "功能",
    "nav.safety": "安全",
    "nav.ai": "AI",
    "nav.download": "下载",
    "nav.sponsor": "赞助",
    "nav.language": "语言",
    "nav.github": "在 GitHub 上查看开发者",
    "hero.eyebrow": "为开发者而生的磁盘清理",
    "hero.line1": "开发积累的数十 GB，",
    "hero.line2": "安心腾出空间。",
    "hero.desc": "从缓存、构建产物到 AI 模型，先弄清空间花在哪里，再清理自己选定的项目。",
    "hero.guide": "使用指南",
    "hero.trust": "免费 · 开源 · macOS 11+ · Apple Silicon / Intel",
    "hero.caption": "实际应用截图 · 可释放空间因 Mac 而异。",
    "alt.cleanup": "Tidemark 清理页面：分类项目、风险等级和预计可释放空间",
    "alt.map": "Tidemark 磁盘地图：用矩形树图比较文件夹大小",
    "alt.ai": "Tidemark AI 工具页面：磁盘、CPU 和内存使用情况",
    "alt.servers": "Tidemark 服务器页面：各进程的开放端口和网络暴露状态",
    "features.eyebrow": "空间都去哪了",
    "features.title": "找到开发留下的大小杂物。",
    "features.desc": "开发工具的数据与遗忘的文件，按类别整理，让你看明白再决定。",
    "f.cache.title": "缓存、构建与依赖",
    "f.cache.desc": "npm、uv、cargo 缓存，以及 node_modules、target，先找出可重新生成的数据。",
    "f.dev.title": "IDE、模拟器与 Docker",
    "f.dev.desc": "查看 Xcode 数据、不可用的 iOS 模拟器和未使用的 Docker 数据。",
    "f.ai.title": "AI 模型与工具数据",
    "f.ai.desc": "查找 Hugging Face、Ollama、LM Studio 模型，区分缓存和用户数据。",
    "f.apps.title": "已安装应用与残留数据",
    "f.apps.desc": "查看闲置应用及其数据，也能找到已卸载应用留下的痕迹。",
    "f.files.title": "大文件与下载文件",
    "f.files.desc": "通过磁盘地图找到大文件夹，手动检查陈旧或重复的下载文件。",
    "f.packages.title": "全局软件包更新",
    "f.packages.desc": "检查 Homebrew、npm、pnpm 软件包更新，并使用官方命令升级。",
    "tour.eyebrow": "看看应用界面",
    "tour.title": "用四种视角了解你的 Mac。",
    "tour.label": "选择应用界面",
    "tour.cleanup": "清理",
    "tour.map": "磁盘地图",
    "tour.ai": "AI 工具",
    "tour.servers": "服务器",
    "tour.cleanup.desc": "先查看安全、注意与危险等级，再做选择。恢复方法、git 状态和清理命令的预计释放空间一目了然。",
    "tour.map.desc": "沿着按大小绘制的地图逐层查看文件夹，也能检查大文件与陈旧、重复的下载文件。",
    "tour.ai.desc": "以只读方式查看 AI 工具的磁盘、CPU 和内存占用，明确区分缓存与用户数据。",
    "tour.servers.desc": "查看各进程的开放端口和网络暴露状态，停止进程前会重新核验目标并请你确认。",
    "tour.note": "截图展示深色主题，应用同时支持浅色和深色主题。",
    "safety.eyebrow": "为安全多想一步",
    "safety.title": "删除之前，再确认一次。",
    "safety.desc": "先展示将要删除的内容，有风险的选择需要再次确认。",
    "s.scan.title": "扫描只读不改",
    "s.scan.desc": "只查找项目、计算大小，扫描不会删除任何内容。",
    "s.trash.title": "优先移入废纸篓",
    "s.trash.desc": "默认移入废纸篓，方便恢复。命令清理和旧文件清理可能会直接删除。",
    "s.git.title": "检查 git 变更",
    "s.git.desc": "标出项目中尚未提交的修改与尚未推送的提交。",
    "s.process.title": "识别正在运行的进程",
    "s.process.desc": "如果相关程序仍在运行，会在清理前提醒你。",
    "s.official.title": "优先使用官方命令",
    "s.official.desc": "优先采用 npm、uv、Docker 自身提供的清理方式。",
    "s.preflight.title": "预检可释放空间",
    "s.preflight.desc": "对支持的官方命令，分别展示总大小和预计实际可释放空间。",
    "s.personal.title": "个人文件由你选择",
    "s.personal.desc": "默认不勾选个人文件。批量选择重复副本时，会保留原始文件候选。",
    "s.access.title": "检查权限，不弹窗打扰",
    "s.access.desc": "静默检查完全磁盘访问权限，跳过无法读取的位置。",
    "ai.eyebrow": "与你的 AI 一起",
    "ai.title": "“这个文件夹能删吗？”",
    "ai.desc": "通过 MCP 将当前项目展示给智能体，听取判断依据与恢复建议，再由你决定是否清理。",
    "ai.note": "智能体需要单独安装，登录与费用遵循各 CLI 的设置。",
    "cli.title": "熟悉的终端，相同的引擎。",
    "cli.desc": "在内置终端中查看，或直接通过 CLI 扫描。",
    "cli.comment": "# 仅扫描，不会删除任何内容。",
    "privacy.title": "Mac 上的数据，留在这台 Mac。",
    "privacy.desc": "扫描结果与清理记录仅保存在本机。网络用于可关闭的更新检查，以及你主动运行的命令和 AI 智能体。",
    "download.eyebrow": "即将发布",
    "download.title": "为你的 Mac 准备更多空间。",
    "download.desc": "首个公开版本正在准备中，将以经过签名和公证的 .dmg 发布。",
    "download.follow": "在 GitHub 关注进展",
    "download.requirements": "系统要求：macOS 11 或更高版本 · Apple Silicon / Intel",
    "build.title": "Homebrew 与源码构建",
    "build.desc": "Homebrew 安装说明将在公开发布时提供。现在可以在源码目录中运行以下命令构建应用。",
    "build.readme": "在 GitHub 关注源码公开进展 →",
    "sponsor.title": "一起让清理更好用。",
    "sponsor.desc": "Tidemark 免费且开源。如果它帮到了你，欢迎支持后续开发。",
    "sponsor.button": "通过 GitHub Sponsors 赞助",
    "ai.agents.label": "支持的 AI 智能体"
  }
};

(() => {
  const languageSelect = document.querySelector("#language");
  const supported = ["ko", "en", "ja", "zh"];
  const normalize = (value) => {
    const code = typeof value === "string" ? value.toLowerCase().split(/[-_]/)[0] : "";
    return supported.includes(code) ? code : null;
  };
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem("tidemark-language"); } catch { /* Storage may be disabled. */ }
  const queryLanguage = new URLSearchParams(location.search).get("lang");
  const initialLanguage = normalize(queryLanguage) || normalize(savedLanguage) || normalize(navigator.language) || "ko";

  function applyLanguage(language) {
    const copy = translations[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = copy[element.dataset.i18n];
    });
    for (const [attribute, dataKey] of [["alt", "i18nAlt"], ["aria-label", "i18nAria"]]) {
      document.querySelectorAll(attribute === "alt" ? "[data-i18n-alt]" : "[data-i18n-aria]").forEach((element) => {
        element.setAttribute(attribute, copy[element.dataset[dataKey]]);
      });
    }
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.meta;
    document.querySelector('meta[property="og:title"]').content = copy.title;
    document.querySelector('meta[property="og:description"]').content = copy.meta;
    document.querySelector('meta[property="og:locale"]').content = {ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN"}[language];
    document.querySelectorAll("[data-guide]").forEach((link) => {
      link.href = `guide/${language}.html`;
    });
    languageSelect.value = language;
  }
  applyLanguage(initialLanguage);
  languageSelect.hidden = false;
  languageSelect.addEventListener("change", () => {
    const language = languageSelect.value;
    applyLanguage(language);
    try { localStorage.setItem("tidemark-language", language); } catch { /* Language still changes without storage. */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    try { history.replaceState(null, "", url); } catch { /* Also works in restricted previews. */ }
  });

  // ARIA tabs are added only when the controls are functional.
  const tablist = document.querySelector("[data-tabs]");
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));
  tablist.setAttribute("role", "tablist");
  tablist.dataset.i18nAria = "tour.label";
  tablist.setAttribute("aria-label", translations[initialLanguage]["tour.label"]);
  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `panel-${tab.dataset.tab}`);
    tab.setAttribute("aria-selected", String(index === 0));
    tab.tabIndex = index === 0 ? 0 : -1;
    const panel = document.querySelector(`#panel-${tab.dataset.tab}`);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.tabIndex = 0;
  });
  function activateTab(next, focus) {
    tabs.forEach((tab, index) => {
      const selected = index === next;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.querySelector(`#panel-${tab.dataset.tab}`).hidden = !selected;
    });
    if (focus) tabs[next].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(index, false));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activateTab(next, true);
      }
    });
  });
  tablist.hidden = false;
})();
