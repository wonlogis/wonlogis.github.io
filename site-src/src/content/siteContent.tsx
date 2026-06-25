import featureCustomerSupportIcon from "../assets/icons/feature-customer-support.png";
import featureFastServiceIcon from "../assets/icons/feature-fast-service.png";
import featureGlobalNetworkIcon from "../assets/icons/feature-global-network.png";
import featureSafeTransportIcon from "../assets/icons/feature-safe-transport.png";
import serviceAirIcon from "../assets/icons/service-air.png";
import serviceLandIcon from "../assets/icons/service-land.png";
import serviceSeaIcon from "../assets/icons/service-sea.png";
import serviceTradingIcon from "../assets/icons/service-trading.png";
import serviceWarehouseIcon from "../assets/icons/service-warehouse.png";
import aboutImage from "../assets/photos/about-headquarters.webp";
import heroImage from "../assets/photos/hero-global-network.webp";
import serviceAirImage from "../assets/photos/service-air.webp";
import serviceLandImage from "../assets/photos/service-land.webp";
import serviceSeaImage from "../assets/photos/service-sea.webp";
import serviceTradingImage from "../assets/photos/service-trading.webp";
import serviceWarehouseImage from "../assets/photos/service-warehouse.webp";

type NavItem = {
  id: string;
  label: string;
  href: string;
  sectionId: string;
};

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: string;
};

export const brandContent = {
  name: "원로지",
  logoAlt: "원로지 로고",
  homeAriaLabel: "원로지 홈으로 이동"
};

export const siteMeta = {
  kicker: "Global Integrated Logistics Partner",
  copyright: "© 2026 WON LOGIS. All Rights Reserved."
};

export const navigationItems: NavItem[] = [
  { id: "nav-company", label: "회사소개", href: "#company", sectionId: "company" },
  { id: "nav-services", label: "사업안내", href: "#services", sectionId: "services" },
  { id: "nav-transport", label: "운송서비스", href: "#about", sectionId: "about" },
  { id: "nav-support", label: "고객지원", href: "#contact", sectionId: "contact" },
  { id: "nav-partners", label: "파트너십", href: "#partners", sectionId: "partners" },
  { id: "nav-recruit", label: "채용안내", href: "#contact", sectionId: "contact" }
];

export const ctaLink = {
  label: "견적 문의",
  heroLabel: "견적 문의하기",
  href: "#contact"
};

export const sections = {
  heroStats: [
    { value: "500+", label: "기업 고객" },
    { value: "50+", label: "국가 네트워크" },
    { value: "99.5%", label: "정시 운송률" }
  ],
  heroImage,
  aboutImage
};

export const commonLabels = {
  mobileMenuAriaLabel: "모바일 메뉴 토글",
  serviceDetailLabel: "자세히 보기",
  backToTopLabel: "TOP"
};

export const heroSectionContent = {
  srTitle: "원로지",
  title: "신뢰로 연결하고, 가치로 운송합니다",
  description: "원로지는 고객의 소중한 화물을 신속하고 안전하게 연결하는 종합 물류 파트너입니다.",
  imageAlt: "원로지 트럭이 글로벌 네트워크 배경 앞을 달리는 모습"
};

export const servicesSectionContent = {
  eyebrow: "Our Services",
  title: "원로지의 서비스",
  description: "다양한 운송 솔루션으로 고객의 비즈니스를 성공으로 이끕니다."
};

export const aboutSectionContent = {
  eyebrow: "About Won Logis",
  title: "신뢰받는 종합 물류 파트너, 원로지",
  description: "원로지는 풍부한 경험과 전문성을 바탕으로 고객의 비즈니스 성장에 함께하는 최고의 물류 파트너가 되겠습니다.",
  imageAlt: "원로지 사옥 간판"
};

export const partnersSectionContent = {
  eyebrow: "Partners",
  title: "함께하는 글로벌 파트너",
  description: "",
  previousAriaLabel: "이전 파트너",
  nextAriaLabel: "다음 파트너"
};

export const featureHighlights: FeatureItem[] = [
  {
    title: "글로벌 네트워크",
    description: "전 세계 파트너와 함께하는 통합 물류 네트워크",
    icon: featureGlobalNetworkIcon
  },
  {
    title: "안전한 운송",
    description: "체계적인 관리 시스템으로 안전하고 정확한 운송",
    icon: featureSafeTransportIcon
  },
  {
    title: "신속한 서비스",
    description: "최적의 운송 계획으로 신속하고 효율적인 서비스",
    icon: featureFastServiceIcon
  },
  {
    title: "고객 중심 지원",
    description: "전담 담당자의 1:1 맞춤 관리로 높은 고객 만족 제공",
    icon: featureCustomerSupportIcon
  }
];

export const serviceCards: ServiceCard[] = [
  {
    title: "해상 운송",
    description: "전 세계 해상 네트워크를 통한 안정적이고 효율적인 운송 서비스",
    href: "#contact",
    image: serviceSeaImage,
    icon: serviceSeaIcon
  },
  {
    title: "항공 운송",
    description: "신속하고 정밀한 항공 운송으로 고객의 시간을 가치로 연결합니다",
    href: "#contact",
    image: serviceAirImage,
    icon: serviceAirIcon
  },
  {
    title: "육상 운송",
    description: "전국 네트워크를 통한 안전하고 신속한 육상 운송",
    href: "#contact",
    image: serviceLandImage,
    icon: serviceLandIcon
  },
  {
    title: "물류 보관",
    description: "최신 설비와 운영 기준으로 체계적인 보관과 재고 관리를 지원합니다",
    href: "#contact",
    image: serviceWarehouseImage,
    icon: serviceWarehouseIcon
  },
  {
    title: "통관 / Trading",
    description: "통관, 서류, 무역 실무를 한 번에 연결해 해외 거래를 매끄럽게 돕습니다",
    href: "#contact",
    image: serviceTradingImage,
    icon: serviceTradingIcon
  }
];

export const aboutMetrics = [
  {
    value: "2015",
    label: "설립연도",
    description: "현장 중심의 통합 물류 경험을 쌓아온 시작점"
  },
  {
    value: "500+",
    label: "고객사",
    description: "다양한 산업군과 함께 성장한 실무형 파트너십"
  },
  {
    value: "50+",
    label: "국가 네트워크",
    description: "글로벌 허브를 연결하는 유연한 협업 체계"
  },
  {
    value: "99.5%",
    label: "정시 운송률",
    description: "일정과 품질을 함께 지키는 운영 신뢰도"
  }
];

export const partnerNames = ["MAERSK", "MSC", "CMA CGM", "HMM", "ONE", "DP WORLD"];

export const contactDetails = [
  "(우) 10000 인천광역시 연수구 아트센터대로 123, 456호 (송도동)",
  "TEL. 032-123-4567  |  FAX. 032-123-4568",
  "E-MAIL. info@wonlogis.com"
];

export const socialLinks = [
  { label: "개인정보처리방침", href: "#contact" },
  { label: "이용약관", href: "#contact" },
  { label: "사이트맵", href: "#company" }
];
