window.env = {
  api: {
    authUrl: 'http://localhost:8080/api/v2/barong',
    tradeUrl: 'http://localhost:8080/api/v2/peatio',
    finexUrl: 'http://localhost:8080/api/v2/finex',
    applogicUrl: 'http://localhost:8080/api/v2/applogic',
    rangerUrl: 'ws://localhost:8080/api/v2/ranger',
    accountUrl: '/api/private/v1',
    accountPublicUrl: '/api/public/v1',
    p2pUrl: '/api/p2p',
    p2pAuthUrl: '/api/auth',
    notificatorUrl: 'ws://localhost:8080/wss'
  },
  auth0: {
    domain: window.AUTH0_DOMAIN ?? 'auth.lgk.one',
    client_id: window.AUTH0_CLIENT_ID ?? 'OL926gD0Zha6h80uJx4TVhJLMKrJemjb',
    // domain: 'auth.bitzlato.bz',
    // client_id: 'sW5Er9tgeD9T8XuklzCX_FcNX0ETttJK',
    redirect_uri: 'http://localhost:8080/wallets',
  },
  logoUrl: 'https://market.bitzlato.com/assets/bitzlato_logo--sm--blue--nav.svg',
  logoDarkUrl: 'https://market.bitzlato.com/assets/bitzlato_logo--sm--white--nav.svg',
  minutesUntilAutoLogout: '120',
  withCredentials: false,
  finex: false,
  gaTrackerKey: '',
  rangerReconnectPeriod: '1',
  msAlertDisplayTime: '10000',
  incrementalOrderBook: true,
  isResizable: false,
  isDraggable: false,
  languages: ['en', 'ru'],
  sessionCheckInterval: '15000',
  balancesFetchInterval: '3000',
  passwordEntropyStep: 14,
  kycSteps: [
    'email',
    // 'phone',
    // 'profile',
    // 'document',
    // 'address',
  ],
  captchaLogin: false,
  usernameEnabled: false,
  wsApi: false,
  valuationPrimaryCurrency: 'USDT-ERC20',
  valuationPrimaryCurrencyName: 'USD',
  valuationSecondaryCurrency: 'BTC',
  valuationSecondaryCurrencyName: 'BTC',
};
