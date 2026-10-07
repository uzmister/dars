import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CreditCard,
  Headphones,
  Heart,
  Laptop,
  Languages,
  Menu,
  Minus,
  Moon,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Sun,
  Truck,
  X,
  Zap,
} from 'lucide-react';

const translations = {
  uz: {
    topMessage: 'Toshkent bo‘ylab bepul yetkazib berish',
    navHome: 'Bosh sahifa',
    navCatalog: 'Katalog',
    navBenefits: 'Nega NOVA?',
    searchPlaceholder: 'Noutbukni qidiring...',
    languageLabel: 'Tilni tanlang',
    themeToDark: 'Tungi rejimga o‘tish',
    themeToLight: 'Kunduzgi rejimga o‘tish',
    cartLabel: 'Savatcha',
    heroKicker: 'YANGI AVLOD TEXNIKASI',
    heroLineOne: 'Katta rejalar uchun',
    heroLineTwo: 'to‘g‘ri noutbuk.',
    heroDescription: 'Ish, ijod va o‘yin uchun o‘ylangan noutbuklar. O‘zingizga mosini tanlang — qolganini biz hal qilamiz.',
    heroPrimary: 'Katalogni ko‘rish',
    heroSecondary: 'Biz haqimizda',
    heroMicrocopy: 'Barcha qurilmalarga 12 oylik rasmiy kafolat',
    heroFeatureTitle: 'NOVA Air 14',
    heroFeatureCopy: 'Yengil. Tez. Sizniki.',
    heroFeatureBadge: 'HAFTA TANLOVI',
    heroRating: 'Mijozlar bahosi',
    metricYears: 'yillik tajriba',
    metricModels: 'tanlangan model',
    metricRating: 'mijozlar bahosi',
    trustOriginalTitle: 'Faqat original',
    trustOriginalText: 'Rasmiy kafolat bilan',
    trustDeliveryTitle: 'Tez yetkazib berish',
    trustDeliveryText: 'Toshkentda 24 soat ichida',
    trustPaymentTitle: 'Qulay to‘lov',
    trustPaymentText: '12 oygacha bo‘lib to‘lash',
    trustSupportTitle: 'Doim yoningizdamiz',
    trustSupportText: 'Har kuni 09:00–21:00',
    catalogKicker: 'SIZ UCHUN TANLANDI',
    catalogTitle: 'Yaxshi texnika. Yaxshi tanlov.',
    catalogDescription: 'Har bir vazifaga mos quvvat — barchasi bir joyda.',
    filterAll: 'Barchasi',
    filterOffice: 'Ish va o‘qish',
    filterGaming: 'Gaming',
    filterCreative: 'Ijod uchun',
    sortLabel: 'Tavsiya etilgan',
    resultOne: 'model',
    resultMany: 'model',
    bestseller: 'TOP TANLOV',
    newBadge: 'YANGI',
    categoryOffice: 'Ish va o‘qish',
    categoryGaming: 'Gaming',
    categoryCreative: 'Ijod uchun',
    reviewsLabel: 'sharh',
    addToCart: 'Savatchaga',
    addedToast: 'savatchaga qo‘shildi',
    noResults: 'Hech narsa topilmadi',
    noResultsHelp: 'Boshqa so‘z bilan qidirib ko‘ring yoki filtrni o‘zgartiring.',
    clearFilters: 'Filtrlarni tozalash',
    promoKicker: 'SIZ UCHUN QULAY',
    promoTitle: 'Yangi imkoniyatlarga bir qadam yaqinroq.',
    promoText: 'Noutbukni hozir tanlang, qulay bo‘lib to‘lash rejasini esa mutaxassisimiz bilan birga toping.',
    promoButton: 'Maslahat olish',
    promoNote: 'Shartlar haqida batafsil — do‘konimizda',
    footerText: 'Texnologiya tanlashni osonlashtiramiz. Siz esa katta rejalaringizga vaqt ajrating.',
    footerExplore: 'Kashf eting',
    footerHelp: 'Yordam',
    footerContact: 'Aloqa',
    footerDelivery: 'Yetkazib berish',
    footerWarranty: 'Kafolat va servis',
    footerPayment: 'To‘lov usullari',
    footerRights: 'Barcha huquqlar himoyalangan.',
    footerAddress: 'Toshkent shahri, Amir Temur ko‘chasi 18',
    cartTitle: 'Savatchangiz',
    cartEmpty: 'Savatcha hozircha bo‘sh',
    cartEmptyHint: 'Sizga mos noutbukni tanlash vaqti keldi.',
    cartContinue: 'Katalogga qaytish',
    cartCountOne: 'ta mahsulot',
    cartCountMany: 'ta mahsulot',
    cartSubtotal: 'Jami',
    cartDelivery: 'Yetkazib berish',
    cartFree: 'Bepul',
    checkout: 'Buyurtmani rasmiylashtirish',
    remove: 'O‘chirish',
    checkoutTitle: 'Buyurtmani rasmiylashtirish',
    checkoutHint: 'Mutaxassisimiz buyurtmangizni tasdiqlash uchun siz bilan bog‘lanadi.',
    nameLabel: 'Ismingiz',
    namePlaceholder: 'Masalan, Azizbek',
    phoneLabel: 'Telefon raqamingiz',
    phonePlaceholder: '+998 90 123 45 67',
    confirmOrder: 'Buyurtmani yuborish',
    orderSuccess: 'Rahmat! Mutaxassisimiz tez orada siz bilan bog‘lanadi.',
    close: 'Yopish',
    productAirAlt: 'Kumush rangli yupqa noutbuk',
    productGamingAlt: 'Qizil yoritgichli gaming noutbuk',
    productBusinessAlt: 'Grafit rangli biznes noutbuk',
    productStudioAlt: 'Ijodkorlar uchun kumush rangli noutbuk',
  },
  ru: {
    topMessage: 'Бесплатная доставка по Ташкенту',
    navHome: 'Главная',
    navCatalog: 'Каталог',
    navBenefits: 'Почему NOVA?',
    searchPlaceholder: 'Найти ноутбук...',
    languageLabel: 'Выбрать язык',
    themeToDark: 'Включить ночную тему',
    themeToLight: 'Включить дневную тему',
    cartLabel: 'Корзина',
    heroKicker: 'ТЕХНИКА НОВОГО ПОКОЛЕНИЯ',
    heroLineOne: 'Для больших планов —',
    heroLineTwo: 'правильный ноутбук.',
    heroDescription: 'Ноутбуки для работы, творчества и игр. Выберите свой — обо всём остальном позаботимся мы.',
    heroPrimary: 'Смотреть каталог',
    heroSecondary: 'О нас',
    heroMicrocopy: 'Официальная гарантия 12 месяцев на все устройства',
    heroFeatureTitle: 'NOVA Air 14',
    heroFeatureCopy: 'Лёгкий. Быстрый. Ваш.',
    heroFeatureBadge: 'ВЫБОР НЕДЕЛИ',
    heroRating: 'Оценка покупателей',
    metricYears: 'лет опыта',
    metricModels: 'моделей в подборке',
    metricRating: 'оценка покупателей',
    trustOriginalTitle: 'Только оригинал',
    trustOriginalText: 'С официальной гарантией',
    trustDeliveryTitle: 'Быстрая доставка',
    trustDeliveryText: 'По Ташкенту за 24 часа',
    trustPaymentTitle: 'Удобная оплата',
    trustPaymentText: 'Рассрочка до 12 месяцев',
    trustSupportTitle: 'Всегда на связи',
    trustSupportText: 'Ежедневно с 09:00 до 21:00',
    catalogKicker: 'ПОДОБРАЛИ ДЛЯ ВАС',
    catalogTitle: 'Хорошая техника. Верный выбор.',
    catalogDescription: 'Нужная мощность для каждой задачи — в одном месте.',
    filterAll: 'Все модели',
    filterOffice: 'Работа и учёба',
    filterGaming: 'Игры',
    filterCreative: 'Творчество',
    sortLabel: 'Рекомендуем',
    resultOne: 'модель',
    resultMany: 'моделей',
    bestseller: 'ХИТ ПРОДАЖ',
    newBadge: 'НОВИНКА',
    categoryOffice: 'Работа и учёба',
    categoryGaming: 'Игры',
    categoryCreative: 'Творчество',
    reviewsLabel: 'отзывов',
    addToCart: 'В корзину',
    addedToast: 'добавлен в корзину',
    noResults: 'Ничего не найдено',
    noResultsHelp: 'Попробуйте изменить запрос или выбрать другой фильтр.',
    clearFilters: 'Сбросить фильтры',
    promoKicker: 'УДОБНО ДЛЯ ВАС',
    promoTitle: 'На шаг ближе к новым возможностям.',
    promoText: 'Выберите ноутбук сейчас, а подходящий план рассрочки подберём вместе с нашим специалистом.',
    promoButton: 'Получить консультацию',
    promoNote: 'Подробности условий — в нашем магазине',
    footerText: 'Мы упрощаем выбор техники. А вы посвящаете время своим большим планам.',
    footerExplore: 'Откройте',
    footerHelp: 'Помощь',
    footerContact: 'Контакты',
    footerDelivery: 'Доставка',
    footerWarranty: 'Гарантия и сервис',
    footerPayment: 'Способы оплаты',
    footerRights: 'Все права защищены.',
    footerAddress: 'Ташкент, улица Амира Темура, 18',
    cartTitle: 'Ваша корзина',
    cartEmpty: 'В корзине пока пусто',
    cartEmptyHint: 'Самое время подобрать ноутбук для себя.',
    cartContinue: 'Вернуться в каталог',
    cartCountOne: 'товар',
    cartCountMany: 'товаров',
    cartSubtotal: 'Итого',
    cartDelivery: 'Доставка',
    cartFree: 'Бесплатно',
    checkout: 'Оформить заказ',
    remove: 'Удалить',
    checkoutTitle: 'Оформление заказа',
    checkoutHint: 'Наш специалист свяжется с вами, чтобы подтвердить заказ.',
    nameLabel: 'Ваше имя',
    namePlaceholder: 'Например, Азизбек',
    phoneLabel: 'Номер телефона',
    phonePlaceholder: '+998 90 123 45 67',
    confirmOrder: 'Отправить заказ',
    orderSuccess: 'Спасибо! Наш специалист скоро свяжется с вами.',
    close: 'Закрыть',
    productAirAlt: 'Тонкий серебристый ноутбук',
    productGamingAlt: 'Игровой ноутбук с красной подсветкой',
    productBusinessAlt: 'Графитовый ноутбук для бизнеса',
    productStudioAlt: 'Серебристый ноутбук для творчества',
  },
  en: {
    topMessage: 'Free delivery across Tashkent',
    navHome: 'Home',
    navCatalog: 'Catalog',
    navBenefits: 'Why NOVA?',
    searchPlaceholder: 'Search laptops...',
    languageLabel: 'Choose language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    cartLabel: 'Cart',
    heroKicker: 'NEXT-GENERATION TECH',
    heroLineOne: 'Big ideas deserve',
    heroLineTwo: 'better laptops.',
    heroDescription: 'Thoughtful laptops for work, creativity and play. Find the one for you — we’ll take care of the rest.',
    heroPrimary: 'Explore the catalog',
    heroSecondary: 'About us',
    heroMicrocopy: '12-month official warranty on every device',
    heroFeatureTitle: 'NOVA Air 14',
    heroFeatureCopy: 'Light. Fast. Yours.',
    heroFeatureBadge: 'PICK OF THE WEEK',
    heroRating: 'Customer rating',
    metricYears: 'years of experience',
    metricModels: 'curated models',
    metricRating: 'customer rating',
    trustOriginalTitle: 'Genuine devices',
    trustOriginalText: 'With official warranty',
    trustDeliveryTitle: 'Fast delivery',
    trustDeliveryText: 'Within 24 hours in Tashkent',
    trustPaymentTitle: 'Flexible payment',
    trustPaymentText: 'Installments up to 12 months',
    trustSupportTitle: 'Here when you need us',
    trustSupportText: 'Every day, 09:00–21:00',
    catalogKicker: 'CURATED FOR YOU',
    catalogTitle: 'Great tech. A great choice.',
    catalogDescription: 'The right performance for every task — all in one place.',
    filterAll: 'All laptops',
    filterOffice: 'Work & study',
    filterGaming: 'Gaming',
    filterCreative: 'Creative',
    sortLabel: 'Recommended',
    resultOne: 'model',
    resultMany: 'models',
    bestseller: 'BESTSELLER',
    newBadge: 'NEW',
    categoryOffice: 'Work & study',
    categoryGaming: 'Gaming',
    categoryCreative: 'Creative',
    reviewsLabel: 'reviews',
    addToCart: 'Add to cart',
    addedToast: 'added to your cart',
    noResults: 'No matches found',
    noResultsHelp: 'Try another search or change your filter.',
    clearFilters: 'Clear filters',
    promoKicker: 'MADE EASY FOR YOU',
    promoTitle: 'One step closer to what’s next.',
    promoText: 'Choose your laptop today and let our specialist help find a payment plan that works for you.',
    promoButton: 'Talk to an expert',
    promoNote: 'Ask us in store for full terms',
    footerText: 'We make choosing tech simple, so you can focus on your big ideas.',
    footerExplore: 'Explore',
    footerHelp: 'Help',
    footerContact: 'Contact',
    footerDelivery: 'Delivery',
    footerWarranty: 'Warranty & service',
    footerPayment: 'Payment methods',
    footerRights: 'All rights reserved.',
    footerAddress: '18 Amir Temur Street, Tashkent',
    cartTitle: 'Your cart',
    cartEmpty: 'Your cart is empty for now',
    cartEmptyHint: 'Looks like it’s time to find your next laptop.',
    cartContinue: 'Back to the catalog',
    cartCountOne: 'item',
    cartCountMany: 'items',
    cartSubtotal: 'Subtotal',
    cartDelivery: 'Delivery',
    cartFree: 'Free',
    checkout: 'Continue to checkout',
    remove: 'Remove',
    checkoutTitle: 'Checkout',
    checkoutHint: 'A NOVA specialist will contact you to confirm your order.',
    nameLabel: 'Your name',
    namePlaceholder: 'For example, Alex',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+998 90 123 45 67',
    confirmOrder: 'Send order',
    orderSuccess: 'Thank you! A specialist will be in touch shortly.',
    close: 'Close',
    productAirAlt: 'Slim silver laptop',
    productGamingAlt: 'Gaming laptop with red lighting',
    productBusinessAlt: 'Graphite business laptop',
    productStudioAlt: 'Silver creative laptop',
  },
};

const products = [
  {
    id: 'air-14',
    image: '/images/ultrabook-air.png',
    title: { uz: 'Aster Air 14', ru: 'Aster Air 14', en: 'Aster Air 14' },
    subtitle: {
      uz: 'Yupqa, yengil va kun bo‘yi siz bilan',
      ru: 'Тонкий, лёгкий и готов быть рядом весь день',
      en: 'Slim, light and ready to go all day',
    },
    series: 'AIR SERIES',
    category: 'office',
    specs: ['Core Ultra 5', '16 GB RAM', '512 GB SSD'],
    price: 11_990_000,
    oldPrice: 13_490_000,
    rating: '4.9',
    reviews: 126,
    tag: { uz: 'TOP TANLOV', ru: 'ХИТ ПРОДАЖ', en: 'BESTSELLER' },
    altKey: 'productAirAlt',
  },
  {
    id: 'volt-g15',
    image: '/images/gaming-pro.png',
    title: { uz: 'Volt G15', ru: 'Volt G15', en: 'Volt G15' },
    subtitle: {
      uz: 'O‘yin uchun yaratilgan. Chegarasiz quvvat.',
      ru: 'Создан для игры. Мощность без границ.',
      en: 'Built to play. Performance without limits.',
    },
    series: 'VOLT GAMING',
    category: 'gaming',
    specs: ['Ryzen 7', 'RTX 4060', '16 GB RAM'],
    price: 16_990_000,
    oldPrice: 18_490_000,
    rating: '4.8',
    reviews: 84,
    tag: { uz: 'GAMING', ru: 'ДЛЯ ИГР', en: 'GAMING' },
    altKey: 'productGamingAlt',
  },
  {
    id: 'orbit-pro-14',
    image: '/images/business-elite.png',
    title: { uz: 'Orbit Pro 14', ru: 'Orbit Pro 14', en: 'Orbit Pro 14' },
    subtitle: {
      uz: 'Ish kuni uchun aqlli va ishonchli hamroh',
      ru: 'Умный и надёжный спутник рабочего дня',
      en: 'A smart, reliable companion for your workday',
    },
    series: 'ORBIT BUSINESS',
    category: 'office',
    specs: ['Core Ultra 7', '32 GB RAM', '1 TB SSD'],
    price: 17_990_000,
    oldPrice: 19_990_000,
    rating: '5.0',
    reviews: 57,
    tag: { uz: 'YANGI', ru: 'НОВИНКА', en: 'NEW' },
    altKey: 'productBusinessAlt',
  },
  {
    id: 'studio-x16',
    image: '/images/studio-creator.png',
    title: { uz: 'Studio X16', ru: 'Studio X16', en: 'Studio X16' },
    subtitle: {
      uz: 'G‘oyalaringiz uchun katta ekran va kuch',
      ru: 'Большой экран и мощность для ваших идей',
      en: 'A bigger canvas and power for your ideas',
    },
    series: 'STUDIO CREATOR',
    category: 'creative',
    specs: ['Ryzen 9', 'RTX 4050', '32 GB RAM'],
    price: 21_490_000,
    oldPrice: 23_990_000,
    rating: '4.9',
    reviews: 42,
    tag: { uz: 'IJOD UCHUN', ru: 'ДЛЯ ТВОРЧЕСТВА', en: 'CREATOR PICK' },
    altKey: 'productStudioAlt',
  },
];

const categoryLabels = {
  office: 'categoryOffice',
  gaming: 'categoryGaming',
  creative: 'categoryCreative',
};

const localeFormats = { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-US' };
const currencySuffix = { uz: 'so‘m', ru: 'сум', en: 'UZS' };

function formatPrice(amount, language) {
  const number = new Intl.NumberFormat(localeFormats[language], { maximumFractionDigits: 0 }).format(amount);
  return `${number} ${currencySuffix[language]}`;
}

function readSaved(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const saved = readSaved('nova-language', 'uz');
    return ['uz', 'ru', 'en'].includes(saved) ? saved : 'uz';
  });
  const [theme, setTheme] = useState(() => {
    const saved = readSaved('nova-theme', null);
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });
  const [cart, setCart] = useState(() => {
    const saved = readSaved('nova-cart', {});
    return saved && typeof saved === 'object' ? saved : {};
  });
  const [favorites, setFavorites] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
    localStorage.setItem('nova-theme', JSON.stringify(theme));
    localStorage.setItem('nova-language', JSON.stringify(language));
  }, [theme, language]);

  useEffect(() => {
    localStorage.setItem('nova-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.body.style.overflow = cartOpen || checkoutOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [cartOpen, checkoutOpen]);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const cartItems = products
    .filter((product) => cart[product.id] > 0)
    .map((product) => ({ ...product, quantity: cart[product.id] }));
  const cartTotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLocaleLowerCase(localeFormats[language]);
    return products.filter((product) => {
      const categoryMatches = activeFilter === 'all' || product.category === activeFilter;
      const searchableText = [
        product.title.uz,
        product.title.ru,
        product.title.en,
        product.subtitle.uz,
        product.subtitle.ru,
        product.subtitle.en,
        product.series,
        ...product.specs,
      ].join(' ').toLocaleLowerCase(localeFormats[language]);
      return categoryMatches && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeFilter, language, searchTerm]);

  function notify(message) {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 3000);
  }

  function addToCart(product) {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }));
    notify(`${product.title[language]} ${t.addedToast}`);
  }

  function changeQuantity(productId, delta) {
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[productId] || 0) + delta;
      if (quantity <= 0) delete next[productId];
      else next[productId] = quantity;
      return next;
    });
  }

  function removeFromCart(productId) {
    setCart((current) => {
      const next = { ...current };
      delete next[productId];
      return next;
    });
  }

  function toggleFavorite(productId) {
    setFavorites((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId]);
  }

  function submitOrder(event) {
    event.preventDefault();
    setCheckoutOpen(false);
    setCartOpen(false);
    setCart({});
    notify(t.orderSuccess);
  }

  const filters = [
    { id: 'all', label: t.filterAll },
    { id: 'office', label: t.filterOffice },
    { id: 'gaming', label: t.filterGaming },
    { id: 'creative', label: t.filterCreative },
  ];

  const trustItems = [
    { icon: BadgeCheck, title: t.trustOriginalTitle, text: t.trustOriginalText },
    { icon: Truck, title: t.trustDeliveryTitle, text: t.trustDeliveryText },
    { icon: CreditCard, title: t.trustPaymentTitle, text: t.trustPaymentText },
    { icon: Headphones, title: t.trustSupportTitle, text: t.trustSupportText },
  ];

  const heroProduct = products[0];

  return (
    <div className="app-shell">
      <div className="announcement-bar">
        <div className="announcement-inner page-width">
          <span className="announcement-left"><span className="live-dot" />{t.topMessage}</span>
          <span className="announcement-right">+998 71 200 40 40 <span className="announcement-divider">·</span> 09:00–21:00</span>
        </div>
      </div>

      <header className="site-header">
        <div className="nav-inner page-width">
          <a className="brand-lockup" href="#top" aria-label="NOVA home" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark"><i /><i /><i /></span>
            <span className="brand-name-wrap"><strong>nova</strong><small>TECH STORE</small></span>
          </a>

          <nav className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#top" onClick={() => setMobileMenuOpen(false)}>{t.navHome}</a>
            <a href="#catalog" onClick={() => setMobileMenuOpen(false)}>{t.navCatalog}</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>{t.navBenefits}</a>
          </nav>

          <label className="header-search">
            <Search size={17} strokeWidth={1.8} aria-hidden="true" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onFocus={() => { if (searchTerm) setActiveFilter('all'); }}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
            />
            <kbd>⌘ K</kbd>
          </label>

          <div className="header-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              aria-label={theme === 'light' ? t.themeToDark : t.themeToLight}
              title={theme === 'light' ? t.themeToDark : t.themeToLight}
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <label className="language-picker" aria-label={t.languageLabel}>
              <Languages size={16} aria-hidden="true" />
              <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t.languageLabel}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <ChevronDown size={13} aria-hidden="true" />
            </label>
            <button className="cart-button" type="button" onClick={() => setCartOpen(true)} aria-label={`${t.cartLabel}, ${cartCount}`}>
              <ShoppingBag size={18} strokeWidth={1.9} />
              <span className="cart-button-label">{t.cartLabel}</span>
              <span className="cart-count">{cartCount}</span>
            </button>
            <button
              className={`mobile-menu-button ${mobileMenuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={mobileMenuOpen ? t.close : 'Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-spark"><Sparkles size={13} /></span>{t.heroKicker}</div>
            <h1 id="hero-title">{t.heroLineOne}<br /><span>{t.heroLineTwo}</span></h1>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#catalog">{t.heroPrimary}<ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#benefits">{t.heroSecondary}<ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-note"><ShieldCheck size={16} /><span>{t.heroMicrocopy}</span></div>
            <div className="hero-stats">
              <div><strong>12<span>+</span></strong><small>{t.metricYears}</small></div>
              <div><strong>40<span>+</span></strong><small>{t.metricModels}</small></div>
              <div><strong>4.9<span className="stat-star">★</span></strong><small>{t.metricRating}</small></div>
            </div>
          </div>

          <div className="hero-art" aria-label={t.productAirAlt}>
            <div className="hero-art-wash" />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <span className="hero-spark hero-spark-one">✳</span>
            <span className="hero-spark hero-spark-two">✦</span>
            <div className="hero-image-frame">
              <img src={heroProduct.image} alt={t.productAirAlt} />
            </div>
            <div className="hero-feature-card glass-card">
              <span className="feature-card-label"><span className="live-dot" />{t.heroFeatureBadge}</span>
              <div className="feature-card-main">
                <div><strong>{t.heroFeatureTitle}</strong><small>{t.heroFeatureCopy}</small></div>
                <span className="feature-arrow"><ArrowUpRight size={17} /></span>
              </div>
            </div>
            <div className="hero-rating-card glass-card">
              <span className="rating-icon"><Star size={15} fill="currentColor" /></span>
              <div><strong>4.9 / 5</strong><small>{t.heroRating}</small></div>
            </div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
        </section>

        <section className="trust-section page-width" id="benefits" aria-label={t.navBenefits}>
          <div className="trust-grid">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div className="trust-item" key={title}>
                <span className="trust-icon"><Icon size={20} strokeWidth={1.8} /></span>
                <span className="trust-copy"><strong>{title}</strong><small>{text}</small></span>
                <span className="trust-arrow"><ArrowUpRight size={15} /></span>
              </div>
            ))}
          </div>
        </section>

        <section className="catalog-section page-width" id="catalog" aria-labelledby="catalog-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span />{t.catalogKicker}</div>
              <h2 id="catalog-title">{t.catalogTitle}</h2>
              <p>{t.catalogDescription}</p>
            </div>
            <div className="catalog-side-note"><span className="catalog-count">0{filteredProducts.length}</span><span>{filteredProducts.length === 1 ? t.resultOne : t.resultMany}<br />NOVA tanlovi</span></div>
          </div>

          <div className="catalog-toolbar">
            <div className="filter-list" role="tablist" aria-label={t.catalogTitle}>
              {filters.map((filter) => (
                <button
                  className={`filter-pill ${activeFilter === filter.id ? 'is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter.id}
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >{filter.label}</button>
              ))}
            </div>
            <button className="sort-control" type="button" onClick={() => setActiveFilter('all')}>
              <SlidersHorizontal size={15} /> <span>{t.sortLabel}</span><ChevronDown size={14} />
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => {
                const discount = Math.round((1 - product.price / product.oldPrice) * 100);
                const categoryKey = categoryLabels[product.category];
                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img src={product.image} alt={t[product.altKey]} loading="lazy" />
                      <span className={`product-tag ${product.category === 'gaming' ? 'tag-dark' : ''}`}>{product.tag[language]}</span>
                      <span className="discount-tag">−{discount}%</span>
                      <button
                        className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`}
                        type="button"
                        aria-label={favorites.includes(product.id) ? t.remove : 'Add to favorites'}
                        aria-pressed={favorites.includes(product.id)}
                        onClick={() => toggleFavorite(product.id)}
                      ><Heart size={17} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} /></button>
                      <span className="image-index">N° 0{products.findIndex((item) => item.id === product.id) + 1}</span>
                    </div>
                    <div className="product-details">
                      <div className="product-overline"><span>{product.series}</span><span className="product-category">{t[categoryKey]}</span></div>
                      <h3>{product.title[language]}</h3>
                      <p className="product-subtitle">{product.subtitle[language]}</p>
                      <div className="spec-list">
                        {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
                      </div>
                      <div className="product-rating">
                        <span className="stars" aria-label={`${product.rating} out of 5`}>
                          {[0, 1, 2, 3, 4].map((star) => <Star size={12} key={star} fill="currentColor" strokeWidth={1.4} />)}
                        </span>
                        <strong>{product.rating}</strong><span className="review-count">({product.reviews} {t.reviewsLabel})</span>
                      </div>
                      <div className="product-buy-row">
                        <div className="price-stack"><del>{formatPrice(product.oldPrice, language)}</del><strong>{formatPrice(product.price, language)}</strong></div>
                        <button className="add-cart-button" type="button" onClick={() => addToCart(product)} aria-label={`${t.addToCart}: ${product.title[language]}`}>
                          <ShoppingBag size={16} /><span>{t.addToCart}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-results">
              <span className="empty-results-icon"><Search size={22} /></span>
              <h3>{t.noResults}</h3>
              <p>{t.noResultsHelp}</p>
              <button className="button button-soft" type="button" onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}>{t.clearFilters}</button>
            </div>
          )}
        </section>

        <section className="promo-section page-width" aria-labelledby="promo-title">
          <div className="promo-card">
            <div className="promo-content">
              <div className="promo-kicker"><span className="promo-kicker-dot" />{t.promoKicker}</div>
              <h2 id="promo-title">{t.promoTitle}</h2>
              <p>{t.promoText}</p>
              <a className="promo-button" href="tel:+998712004040">{t.promoButton}<ArrowUpRight size={17} /></a>
              <small className="promo-note"><ShieldCheck size={14} />{t.promoNote}</small>
            </div>
            <div className="promo-visual" aria-hidden="true">
              <div className="promo-ring promo-ring-one" />
              <div className="promo-ring promo-ring-two" />
              <div className="promo-glass-tile"><Laptop size={34} strokeWidth={1.25} /><span>NOVA<br />CARE</span></div>
              <div className="promo-mini-card"><Zap size={16} fill="currentColor" /><span>12 <small>MO.</small></span></div>
              <span className="promo-star promo-star-a">✳</span><span className="promo-star promo-star-b">✦</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-main page-width">
          <div className="footer-brand-column">
            <a className="brand-lockup" href="#top" aria-label="NOVA home">
              <span className="brand-mark"><i /><i /><i /></span>
              <span className="brand-name-wrap"><strong>nova</strong><small>TECH STORE</small></span>
            </a>
            <p>{t.footerText}</p>
            <a className="footer-phone" href="tel:+998712004040">+998 71 200 40 40 <ArrowUpRight size={15} /></a>
          </div>
          <div className="footer-links-column">
            <strong>{t.footerExplore}</strong>
            <a href="#catalog">{t.navCatalog}</a>
            <a href="#benefits">{t.navBenefits}</a>
            <a href="#top">{t.navHome}</a>
          </div>
          <div className="footer-links-column">
            <strong>{t.footerHelp}</strong>
            <a href="tel:+998712004040">{t.footerDelivery}</a>
            <a href="tel:+998712004040">{t.footerWarranty}</a>
            <a href="tel:+998712004040">{t.footerPayment}</a>
          </div>
          <div className="footer-contact-column">
            <strong>{t.footerContact}</strong>
            <span>{t.footerAddress}</span>
            <span>09:00–21:00 · {language === 'uz' ? 'har kuni' : language === 'ru' ? 'ежедневно' : 'every day'}</span>
            <div className="footer-socials">
              <a href="https://instagram.com" aria-label="Instagram">ig</a>
              <a href="https://t.me" aria-label="Telegram">tg</a>
              <a href="https://facebook.com" aria-label="Facebook">fb</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom page-width"><span>© 2025 NOVA Tech Store. {t.footerRights}</span><span className="footer-made"><span />{language === 'uz' ? 'O‘zbekistonda mehr bilan' : language === 'ru' ? 'С заботой из Узбекистана' : 'Made with care in Uzbekistan'}</span></div>
      </footer>

      {cartOpen && (
        <div className="overlay-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
          <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-heading">
            <div className="drawer-header">
              <div><span className="drawer-kicker">NOVA SHOPPING</span><h2 id="cart-heading">{t.cartTitle}<span className="drawer-count">{cartCount}</span></h2></div>
              <button className="icon-button drawer-close" type="button" aria-label={t.close} onClick={() => setCartOpen(false)}><X size={19} /></button>
            </div>
            {cartItems.length ? (
              <>
                <div className="cart-item-list">
                  {cartItems.map((item) => (
                    <div className="cart-line-item" key={item.id}>
                      <div className="cart-line-image"><img src={item.image} alt={t[item.altKey]} /></div>
                      <div className="cart-line-info">
                        <div className="cart-line-heading"><div><small>{item.series}</small><strong>{item.title[language]}</strong></div><button type="button" className="remove-item" aria-label={t.remove} onClick={() => removeFromCart(item.id)}><X size={15} /></button></div>
                        <span className="cart-line-price">{formatPrice(item.price, language)}</span>
                        <div className="quantity-stepper" aria-label={item.quantity}>
                          <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)}><Minus size={13} /></button>
                          <span>{item.quantity}</span>
                          <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)}><Plus size={13} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div className="summary-row"><span>{t.cartDelivery}</span><strong className="free-delivery-label"><PackageCheck size={14} />{t.cartFree}</strong></div>
                  <div className="summary-row summary-total"><span>{t.cartSubtotal}</span><strong>{formatPrice(cartTotal, language)}</strong></div>
                  <button className="button button-primary checkout-button" type="button" onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}>{t.checkout}<ArrowRight size={17} /></button>
                  <p className="drawer-security"><ShieldCheck size={14} />{t.heroMicrocopy}</p>
                </div>
              </>
            ) : (
              <div className="cart-empty-state">
                <span className="empty-bag"><ShoppingBag size={28} /></span>
                <h3>{t.cartEmpty}</h3><p>{t.cartEmptyHint}</p>
                <button className="button button-primary" type="button" onClick={() => { setCartOpen(false); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.cartContinue}<ArrowRight size={17} /></button>
              </div>
            )}
          </aside>
        </div>
      )}

      {checkoutOpen && (
        <div className="overlay-layer modal-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCheckoutOpen(false); }}>
          <section className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-heading">
            <button className="icon-button modal-close" type="button" aria-label={t.close} onClick={() => setCheckoutOpen(false)}><X size={19} /></button>
            <div className="checkout-icon"><ShoppingBag size={22} /></div>
            <div className="section-kicker"><span />NOVA CHECKOUT</div>
            <h2 id="checkout-heading">{t.checkoutTitle}</h2>
            <p className="checkout-intro">{t.checkoutHint}</p>
            <form className="checkout-form" onSubmit={submitOrder}>
              <label>{t.nameLabel}<input name="name" placeholder={t.namePlaceholder} autoComplete="name" required /></label>
              <label>{t.phoneLabel}<input name="phone" type="tel" placeholder={t.phonePlaceholder} autoComplete="tel" required /></label>
              <div className="checkout-total"><span>{t.cartSubtotal}</span><strong>{formatPrice(cartTotal, language)}</strong></div>
              <button className="button button-primary checkout-submit" type="submit">{t.confirmOrder}<ArrowRight size={17} /></button>
            </form>
          </section>
        </div>
      )}

      {toast && <div className="toast-message" role="status"><span><Check size={15} /></span>{toast}</div>}
    </div>
  );
}
