import type { Project } from "../types/project";

const TO_IN_AND_B: Project = {
  title: "ToInAndB",
  description:
    "Arcade shoot 'em up game built with object oriented programming",
  link: "https://toinandb.minsug.dev/",
  isDeployed: true,
} as const;

const LANGUAGE_SYSTEM: Project = {
  title: "language system",
  description: "Integrated system for managing multiple languages efficiently",
  link: "https://github.com/sht02048/language-system",
  isDeployed: false,
} as const;

const KROSS_CUTTING: Project = {
  title: "KrossCutting",
  description: "아이돌 교차편집 영상 자동 생성 툴",
  link: "https://github.com/KrossCutting/KrossCutting-client",
  isDeployed: false,
} as const;

export { TO_IN_AND_B, LANGUAGE_SYSTEM, KROSS_CUTTING };
