import { siApmterminals, siDhl, siFedex, siUps } from 'simple-icons';
import featureCustomerSupportIcon from '../assets/icons/feature-customer-support.png';
import featureFastServiceIcon from '../assets/icons/feature-fast-service.png';
import featureGlobalNetworkIcon from '../assets/icons/feature-global-network.png';
import featureSafeTransportIcon from '../assets/icons/feature-safe-transport.png';
import serviceAirIcon from '../assets/icons/service-air.png';
import serviceLandIcon from '../assets/icons/service-land.png';
import serviceSeaIcon from '../assets/icons/service-sea.png';
import serviceTradingIcon from '../assets/icons/service-trading.png';
import serviceWarehouseIcon from '../assets/icons/service-warehouse.png';
import aboutImage from '../assets/photos/about-headquarters.webp';
import heroImage from '../assets/photos/hero-global-network.webp';
import serviceAirImage from '../assets/photos/service-air.webp';
import serviceLandImage from '../assets/photos/service-land.webp';
import serviceSeaImage from '../assets/photos/service-sea.webp';
import serviceTradingImage from '../assets/photos/service-trading.webp';
import serviceWarehouseImage from '../assets/photos/service-warehouse.webp';

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
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: string;
  detailDescription: string;
  detailHighlights: string[];
  detailProcess: string[];
  detailSuitableFor: string[];
};

type FooterLink = {
  label: string;
  href: string;
};

type PartnerLogo = {
  id: string;
  name: string;
  brandColor: string;
  textClassName: string;
  icon?: {
    title: string;
    path: string;
    hex: string;
  };
  wordmarkLines?: string[];
  wordmarkClassName?: string;
};

export const brandContent = {
  name: '원로지스',
  logoAlt: '원로지스 로고',
  homeAriaLabel: '원로지스 홈으로 이동',
};

export const siteMeta = {
  kicker: 'Global Integrated Logistics Partner',
  copyright: '© 2026 WON LOGIS. All Rights Reserved.',
};

export const navigationItems: NavItem[] = [
  { id: 'nav-company', label: '회사소개', href: '#company', sectionId: 'company' },
  { id: 'nav-services', label: '사업안내', href: '#services', sectionId: 'services' },
  { id: 'nav-transport', label: '운송서비스', href: '#about', sectionId: 'about' },
  { id: 'nav-partners', label: '파트너십', href: '#partners', sectionId: 'partners' },
];

export const ctaLink = {
  label: '견적 문의',
  heroLabel: '견적 문의하기',
  href: 'https://naver.me/xaTmofhO',
  target: '_blank',
  rel: 'noreferrer',
};

export const sections = {
  heroStats: [
    { value: '500+', label: '기업 고객' },
    { value: '50+', label: '국가 네트워크' },
    { value: '99.5%', label: '정시 운송률' },
  ],
  heroImage,
  aboutImage,
};

export const commonLabels = {
  mobileMenuAriaLabel: '모바일 메뉴 토글',
  serviceDetailLabel: '자세히 보기',
  serviceModalCloseLabel: '사업안내 상세 닫기',
  serviceModalActionLabel: '견적 문의 바로가기',
  serviceHighlightsTitle: '서비스 포인트',
  serviceProcessTitle: '진행 방식',
  serviceSuitableForTitle: '추천 화물',
  backToTopLabel: 'TOP',
};

export const heroSectionContent = {
  srTitle: '원로지스',
  title: '신뢰로 연결하고, 가치로 운송합니다',
  description: '원로지스는 고객의 소중한 화물을 신속하고 안전하게 연결하는 종합 물류 파트너입니다.',
  imageAlt: '원로지스 트럭이 글로벌 네트워크 배경 앞을 달리는 모습',
};

export const servicesSectionContent = {
  eyebrow: 'Our Services',
  title: '원로지스의 서비스',
  description: '다양한 운송 솔루션으로 고객의 비즈니스를 성공으로 이끕니다.',
};

export const aboutSectionContent = {
  eyebrow: 'About Won Logis',
  title: '신뢰받는 종합 물류 파트너, 원로지',
  description:
    '원로지스는 풍부한 경험과 전문성을 바탕으로 고객의 비즈니스 성장에 함께하는 최고의 물류 파트너가 되겠습니다.',
  imageAlt: '원로지스 사옥 간판',
};

export const partnersSectionContent = {
  eyebrow: 'Partners',
  title: '함께하는 글로벌 파트너',
  description: '',
};

export const featureHighlights: FeatureItem[] = [
  {
    title: '글로벌 네트워크',
    description: '전 세계 파트너와 함께하는 통합 물류 네트워크',
    icon: featureGlobalNetworkIcon,
  },
  {
    title: '안전한 운송',
    description: '체계적인 관리 시스템으로 안전하고 정확한 운송',
    icon: featureSafeTransportIcon,
  },
  {
    title: '신속한 서비스',
    description: '최적의 운송 계획으로 신속하고 효율적인 서비스',
    icon: featureFastServiceIcon,
  },
  {
    title: '고객 중심 지원',
    description: '전담 담당자의 1:1 맞춤 관리로 높은 고객 만족 제공',
    icon: featureCustomerSupportIcon,
  },
];

export const serviceCards: ServiceCard[] = [
  {
    id: 'service-sea',
    title: '해상 운송',
    description: '전 세계 해상 네트워크를 통한 안정적이고 효율적인 운송 서비스',
    href: '#contact',
    image: serviceSeaImage,
    icon: serviceSeaIcon,
    detailDescription:
      '원로지스는 수출입 일정, 항차 선택, 선적 서류 대응까지 해상 운송 전 과정을 안정적으로 관리해 장거리 국제 물류의 예측 가능성을 높입니다.',
    detailHighlights: [
      'FCL / LCL 조건에 맞춘 유연한 선적 구성',
      '스케줄과 비용을 함께 고려한 항로 제안',
      '통관 및 현지 연계 일정까지 한 번에 조율',
    ],
    detailProcess: [
      '출발지와 도착지 조건 확인',
      '항차 및 선복 확보',
      '선적 서류와 통관 준비',
      '도착 후 내륙 운송 연계',
    ],
    detailSuitableFor: ['대량 수출입 화물', '정기 선적 물량', '원가 중심 국제 운송'],
  },
  {
    id: 'service-air',
    title: '항공 운송',
    description: '신속하고 정밀한 항공 운송으로 고객의 시간을 가치로 연결합니다',
    href: '#contact',
    image: serviceAirImage,
    icon: serviceAirIcon,
    detailDescription:
      '긴급 납기 대응이 필요한 화물에 맞춰 항공 스케줄 확보, 포장 기준 점검, 도착 후 인계까지 빠르고 정밀한 운영을 제공합니다.',
    detailHighlights: [
      '긴급 오더 대응 중심의 빠른 스케줄 제안',
      '고가 화물과 민감 화물의 세심한 취급 관리',
      '도착 공항 이후 내륙 이동까지 연속 대응',
    ],
    detailProcess: [
      '출고 가능 시간과 납기 확인',
      '항공 스페이스 확보 및 서류 준비',
      '공항 반입 및 출발 추적',
      '도착 후 수입 절차와 최종 인계',
    ],
    detailSuitableFor: ['긴급 납기 화물', '고부가가치 제품', '시간 민감형 샘플 및 부품'],
  },
  {
    id: 'service-land',
    title: '육상 운송',
    description: '전국 네트워크를 통한 안전하고 신속한 육상 운송',
    href: '#contact',
    image: serviceLandImage,
    icon: serviceLandIcon,
    detailDescription:
      '원로지스의 육상 운송은 상차부터 하차까지 차량 배차, 운행 스케줄, 현장 커뮤니케이션을 세밀하게 관리해 안정적인 국내 물류 흐름을 지원합니다.',
    detailHighlights: [
      '전국 단위 배차 네트워크 기반의 신속한 차량 수배',
      '화물 특성에 맞는 차량 조건과 운송 루트 제안',
      '상차/하차 현장과 실시간 소통으로 일정 리스크 최소화',
    ],
    detailProcess: [
      '출발지, 도착지, 화물 규격 확인',
      '차량 유형과 상차 시간 기준 배차 진행',
      '운행 중 일정 및 현장 이슈 실시간 공유',
      '도착 확인과 후속 물류 일정 연계',
    ],
    detailSuitableFor: ['기업 납품 물류', '전국 화물 운송', '정기 배차 및 긴급 배송'],
  },
  {
    id: 'service-warehouse',
    title: '물류 보관',
    description: '최신 설비와 운영 기준으로 체계적인 보관과 재고 관리를 지원합니다',
    href: '#contact',
    image: serviceWarehouseImage,
    icon: serviceWarehouseIcon,
    detailDescription:
      '입출고 스케줄, 재고 흐름, 보관 환경을 함께 관리해 단순 적치가 아닌 운영 효율 중심의 물류 보관 서비스를 제공합니다.',
    detailHighlights: [
      '입고부터 출고까지 기준화된 재고 관리',
      '화물 특성에 맞춘 보관 구역 운영',
      '운송 일정과 연동한 입출고 계획 수립',
    ],
    detailProcess: [
      '보관 물량과 회전율 분석',
      '입고 일정 및 검수 진행',
      '재고 보관과 출고 요청 관리',
      '운송 스케줄에 맞춘 출고 연계',
    ],
    detailSuitableFor: ['중간 보관 물량', '재고 분산 운영', '출고 일정이 잦은 기업 화물'],
  },
  {
    id: 'service-trading',
    title: '통관 / Trading',
    description: '통관, 서류, 무역 실무를 한 번에 연결해 해외 거래를 매끄럽게 돕습니다',
    href: '#contact',
    image: serviceTradingImage,
    icon: serviceTradingIcon,
    detailDescription:
      '복잡한 수출입 서류와 통관 절차를 실무 중심으로 연결해 해외 거래 과정에서 발생하는 행정 부담과 일정 지연을 줄여드립니다.',
    detailHighlights: [
      '수출입 문서 작성과 제출 절차 일괄 대응',
      '통관 이슈 사전 점검으로 지연 리스크 축소',
      '운송 일정과 연동되는 무역 실무 지원',
    ],
    detailProcess: [
      '거래 조건과 품목 확인',
      '필수 서류 준비 및 검토',
      '통관 진행과 보완 대응',
      '운송 완료 후 정산 및 후속 지원',
    ],
    detailSuitableFor: ['초기 수출입 기업', '복합 서류 대응이 필요한 거래', '통관 실무 지원이 필요한 화물'],
  },
];

export const aboutMetrics = [
  {
    value: '2026',
    label: '설립연도',
    description: '현장 중심의 통합 물류 경험을 쌓아온 시작점',
  },
  {
    value: '500+',
    label: '고객사',
    description: '다양한 산업군과 함께 성장한 실무형 파트너십',
  },
  {
    value: '50+',
    label: '국가 네트워크',
    description: '글로벌 허브를 연결하는 유연한 협업 체계',
  },
  {
    value: '99.5%',
    label: '정시 운송률',
    description: '일정과 품질을 함께 지키는 운영 신뢰도',
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    id: 'partner-maersk',
    name: 'Maersk',
    brandColor: '#42B0D5',
    textClassName: 'text-[#1787b2]',
    wordmarkLines: ['MAERSK'],
    wordmarkClassName: 'text-[1.45rem] font-semibold tracking-[0.18em]',
  },
  {
    id: 'partner-cmacgm',
    name: 'CMA CGM',
    brandColor: '#0B2E83',
    textClassName: 'text-[#0b2e83]',
    wordmarkLines: ['CMA', 'CGM'],
    wordmarkClassName: 'text-[1.12rem] font-semibold tracking-[0.2em] leading-tight',
  },
  {
    id: 'partner-hmm',
    name: 'HMM',
    brandColor: '#E62129',
    textClassName: 'text-[#d91f26]',
    wordmarkLines: ['HMM'],
    wordmarkClassName: 'text-[1.5rem] font-semibold tracking-[0.22em]',
  },
  {
    id: 'partner-one',
    name: 'ONE',
    brandColor: '#D71988',
    textClassName: 'text-[#c21879]',
    wordmarkLines: ['ONE'],
    wordmarkClassName: 'text-[1.55rem] font-semibold tracking-[0.26em]',
  },
  {
    id: 'partner-dhl',
    name: 'DHL',
    brandColor: '#D40511',
    textClassName: 'text-[#d40511]',
    icon: {
      title: siDhl.title,
      path: siDhl.path,
      hex: `#${siDhl.hex}`,
    },
  },
  {
    id: 'partner-fedex',
    name: 'FedEx',
    brandColor: '#4D148C',
    textClassName: 'text-[#4d148c]',
    icon: {
      title: siFedex.title,
      path: siFedex.path,
      hex: `#${siFedex.hex}`,
    },
  },
  {
    id: 'partner-ups',
    name: 'UPS',
    brandColor: '#150400',
    textClassName: 'text-[#150400]',
    icon: {
      title: siUps.title,
      path: siUps.path,
      hex: `#${siUps.hex}`,
    },
  },
  {
    id: 'partner-apmterminals',
    name: 'APM Terminals',
    brandColor: '#912338',
    textClassName: 'text-[#912338]',
    icon: {
      title: siApmterminals.title,
      path: siApmterminals.path,
      hex: `#${siApmterminals.hex}`,
    },
  },
];

export const contactDetails = [
  '대표이사: 이주호',
  '주소: 인천광역시 중구 신흥동3가 37',
  '전화번호: 010-3214-4139',
  '이메일: wngh4139@naver.com',
];

export const socialLinks: FooterLink[] = [];
