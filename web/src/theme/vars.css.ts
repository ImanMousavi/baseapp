import { createGlobalTheme, createTheme } from '@vanilla-extract/css';
import * as colors from './colors';

export const fontFamilyVars = createGlobalTheme(':root', {
  brand: "'Montserrat', helvetica, sans-serif" as const,
});

export const fontSizeVars = createGlobalTheme(':root', {
  caption: '12px' as const,
  small: '14px' as const,
  medium: '15px' as const,
  large: '18px' as const,
  lead: '20px' as const,
  lead24: '24px' as const,
  lead30: '30px' as const,
});

export const headerFontSizes = createGlobalTheme(':root', {
  tabTitle: '17px' as const,
  tab: '16px' as const,
});

export const zIndexVars = createGlobalTheme(':root', {
  drawer: '10000',
  chat: '10020',
  modal: '10001',
  modalInner: '10002',
  tooltip: '10010',
  bottomTabs: '10000',
  dropdown: '99990',
  shadeRows: '9990',
});

export const sizeVars = createGlobalTheme(':root', {
  auto: 'auto' as const,
  full: '100%' as const,
  '70%': '70%' as const,
  '0': '0px' as const,
  '0.25x': '1px' as const,
  '0.5x': '2px' as const,
  '1x': '4px' as const,
  '1.5x': '6px' as const,
  '2x': '8px' as const,
  '3x': '12px' as const,
  '4x': '16px' as const,
  '5x': '20px' as const,
  '6x': '24px' as const,
  '7x': '28px' as const,
  '8x': '32px' as const,
  '9x': '36px' as const,
  '10x': '40px' as const,
  '11x': '44px' as const,
  '12x': '48px' as const,
  '13x': '52px' as const,
  '14x': '56px' as const,
  '15x': '60px' as const,
  '16x': '64px' as const,
  // '17x': '68px' as const,
  '18x': '72px' as const,
  '19x': '76px' as const,
  '20x': '80px' as const,
  '25x': '100px' as const,
});

export const radiiVars = createGlobalTheme(':root', {
  '0': '0px' as const,
  '1x': '4px' as const,
  '1.5x': '6px' as const,
  '2x': '8px' as const,
  circle: '9999px' as const,
});

export const transitionDurationVars = createGlobalTheme(':root', {
  base: '0.3s',
});

export const [themeLight, vars] = createTheme({
  boxShadows: {
    dropdown: `5px 4px 13px ${colors.black15}`,
    modal: `8px 4px 14px ${colors.black10}`,
    control: `0px 0px 0px 3px ${colors.mystic90}`,
    btnPrimaryFocus: `0px 0px 0px 3px ${colors.mystic90}`,
    btnSecondaryFocus: `0px 0px 0px 3px ${colors.shark19}`,
  },
  colors: {
    transparent: colors.transparent,

    beta: colors.goldTips,
    primary: colors.hawkesBlue,
    danger: colors.burntSienna,
    warning: colors.bamboo,
    success: colors.oceanGreen,
    secondary: colors.grayBlue,
    text: colors.mineShaft,
    textHighlighted: colors.goldTips,
    textMuted: colors.mineShaft50,
    interactive: colors.luckyPoint,
    interactiveHighlighted: colors.luckyPointLighter,
    alert: colors.flamingo,
    mainBackground: colors.whiteLilac,
    block: colors.white,

    drawer: colors.white,
    drawerItem: colors.whiteLilac,
    drawerItemHover: colors.hawkesBlue,
    drawerItemDivider: colors.white,

    dropdown: colors.white,
    dropdownItem: colors.transparent,
    dropdownItemHover: colors.whiteLilac,
    dropdownItemBorderBottom: colors.ebonyClay15,
    dropdownItemActiveBefore: colors.cornflowerBlue,
    dropdownItemText: colors.ebonyClay,
    dropdownItemHoverText: colors.black,
    dropdownItemActiveText: colors.indigo,
    dropdownItemIcon: colors.ebonyClay,
    dropdownItemHoverIcon: colors.ebonyClay,
    dropdownItemActiveIcon: colors.indigo,

    btnPrimaryBg: colors.goldTips,
    btnPrimaryBg10: colors.goldTips10,
    btnPrimaryBg20: colors.goldTips20,
    btnPrimaryBgHover: colors.lightningYellow,
    btnPrimaryBgActive: colors.galliano,
    btnPrimaryBgDisabled: colors.mystic,
    btnPrimaryText: colors.catskillWhite,
    btnPrimaryTextDisabled: colors.manatee,

    btnSecondaryBg: colors.indigo,
    btnSecondaryBg10: colors.indigo10,
    btnSecondaryBg20: colors.indigo20,
    btnSecondaryBgHover: colors.indigoLight,
    btnSecondaryBgActive: colors.governorBay,
    btnSecondaryBgDisabled: colors.mystic,
    btnSecondaryText: colors.catskillWhite,
    btnSecondaryTextDisabled: colors.manatee,

    btnDangerBg: colors.burntSienna,
    btnDangerBg10: colors.burntSienna10,
    btnDangerBg20: colors.burntSienna20,
    btnDangerBgHover: colors.salmon,
    btnDangerBgActive: colors.flamingo,
    btnDangerBgDisabled: colors.mystic,
    btnDangerText: colors.catskillWhite,
    btnDangerTextDisabled: colors.manatee,

    btnClarifiedBg: colors.hawkesBlue,
    btnClarifiedBgHover: colors.spindle,
    btnClarifiedBgActive: colors.indigo,
    btnClarifiedBgDisabled: colors.mystic,
    btnClarifiedText: colors.indigo,
    btnClarifiedTextActive: colors.white,
    btnClarifiedTextDisabled: colors.manatee,

    themeSwitcherBorder: colors.selago,
    themeSwitcherBorderHover: colors.luckyPoint,
    themeSwitcherSun: colors.white,
    themeSwitcherSunHover: colors.white,
    themeSwitcherMoon: colors.luckyPoint,
    spinner01: colors.black20,
    spinner02: colors.black,
    backdrop: colors.black30,

    traderBg: colors.white,
    traderFadeBg: colors.white,
    traderBgHover: colors.waikawaGray24,
    traderBorder: colors.waikawaGray24,
    traderBlocked: colors.mandy,
    traderFavorited: colors.oceanGreen,
    traderSuspicious: colors.mineShaft,
    traderBlockedBgHover: colors.mandy90,
    traderFavoritedBgHover: colors.oceanGreen90,
    traderIconActive: colors.white,
    traderCurrencyCode: colors.ebonyClay70,
    traderStatRowMobileBorder: colors.whiteLilac,

    notesBg: colors.waikawaGray10,
    chatToMsgBg: colors.waikawaGray10,
    chatToMsgText: colors.mineShaft,
    chatFromMsgBg: colors.indigo,
    chatFromMsgText: colors.white,
    chatErrorBackdrop: colors.black50,
    chatErrorModal: colors.white,

    footerBg: colors.luckyPoint,
    footerTitle: colors.white85,
    footerBorder: colors.white24,
    footerColor: colors.white,
    footerLinkColor: colors.white40,
    footerLinkColorHover: colors.white60,
    footerSocialIcon: colors.white,
    footerSocialIconHover: colors.white70,
    footerEmail: colors.white70,
    footerEmailHover: colors.white,
    footerEmailCaption: colors.white40,
    footerSectionBgMobile: colors.white10,
    footerSectionDividerMobile: colors.white10,

    infoBg: colors.whiteLilac,
    statBg: colors.whiteLilac,
    statIcon: colors.ebonyClay30,

    modal: colors.white,
    modalHeaderBorderBottom: colors.mako10,

    skeleton: colors.black10,
    skeletonHighlighted: colors.silver,

    switcherTrack: colors.mako10,
    switcherTrackShadow: colors.mako10,
    switcherTrackChecked: colors.goldTips25,
    switcherTrackShadowChecked: colors.goldTips10,
    switcherThumb: colors.mako80,
    switcherThumbChecked: colors.goldTips,

    radio: colors.mako,
    radioShadow: colors.mako10,
    radioChecked: colors.goldTips,
    radioShadowChecked: colors.goldTips10,

    tooltip: colors.milanoRed,
    tooltipText: colors.white,

    cardHeaderBorderBottom: colors.ebonyClay15,

    reportBgHover: colors.whiteLilac,

    adBg: colors.whiteLilac,
    adTableHeader: colors.ebonyClay50,
    adTrader: colors.indigo,
    adRowLabelMobile: colors.ebonyClay70,
    adTrade: colors.indigo,

    adTradeMobileBackground: colors.white,

    tradeFinishedStatusLineBg: colors.ebonyClay05,
    tradeLink: colors.ebonyClay30,
    tradeLinkHover: colors.ebonyClay40,
    tradeButtonLinkText: colors.indigo,
    tradeButtonLinkTextHover: colors.indigoLight,

    onlineStatusWaiting: colors.sweetCorn,
    onlineStatusInactive: colors.botticelli,

    variantSwitcherBorder: colors.ebonyClay15,
    variantSwitcherItemBgActive: colors.goldTips,
    variantSwitcherItemTextActive: colors.ebonyClay,

    paginationItemBgHover: colors.whiteLilac50,
    paginationItemBgActive: colors.whiteLilac,
    paginationItemTextDisabled: colors.ebonyClay15,

    bids: colors.green,
    asks: colors.carnation,

    notificationUnread: colors.burntSienna,
    notificationRead: colors.ebonyClay70,
    notificationTime: colors.ebonyClay70,

    btnDrawer: colors.ebonyClay,
    btnDrawerHover: colors.ebonyClay15,

    adStatLabel: colors.ebonyClay,

    inputBorder: colors.ebonyClay15,
    inputPlaceholder: colors.ebonyClay70,

    selectButtonBg: colors.ebonyClay10,
    selectButtonText: colors.ebonyClay,
    selectSearchInputPlaceholder: colors.ebonyClay30,
    selectDropdownBg: colors.white,
    selectDropdownDelimeter: colors.ebonyClay15,
    selectDropdownItemHoverBg: colors.whiteLilac,
    selectDropdownItemSelectedBg: colors.goldTips25,
    selectColor: colors.grayBlue36,

    addressDropdownAddText: colors.indigo,
    addressDropdownAddHoverBg: colors.goldTips25,
    addressDropdownBg: colors.white,
    addressDropdownHoverBg: colors.goldTips25,
    addressDropdownSelectedBg: colors.goldTips,
    addressDropdownDelimeter: colors.ebonyClay15,
    addressHintIcon: colors.ebonyClay30,
    addressHintText: colors.whiteLilac,

    headerBg: colors.whiteLilac,
    headerBorderBottom: colors.black10,
    headerIcon: colors.ebonyClay70,
    headerIconHover: colors.ebonyClay,
    headerLinkText: colors.ebonyClay70,
    headerLinkTextHover: colors.ebonyClay,
    headerLinkTextActive: colors.indigo,
    headerSubmenuBg: colors.white,
    headerSubmenuHoverText: colors.indigo,
    headerSubmenuActiveBorder: colors.indigo,
    headerLanguageSwitcherBorder: colors.ebonyClay15,
    headerLanguageSwitcherHoverBorder: colors.ebonyClay30,
    headerLanguageSwitcherHoverBg: colors.ebonyClay15,

    bottomTabsBg: colors.white,
    bottomTabsTopBorder: colors.black10,
    bottomTabsIcon: colors.indigo,
    bottomTabsIconActive: colors.goldTips,
    bottomTabsText: colors.ebonyClay70,
    bottomTabsTextActive: colors.goldTips,

    breadcrumbsColor: colors.ebonyClay70,

    collapsibleBoxExpandControls: colors.indigo,
    collapsibleTextExpandControls: colors.white,
    collapsibleTextExpandControlsColorInverse: colors.black,
    collapsibleTextTitleColor: colors.indigo,

    calendarItemActiveBg: colors.indigo,
    calendarItemActiveText: colors.white,
    calendarItemHoverBg: colors.indigo20,
    tradeMainComponent: colors.indigo,
    tradeMainComponentTitle: colors.white,
    tradeMainComponentCircleFilled: colors.white,
    tradeMainComponentCircleEmpty: colors.white10,

    tradeMainComponentTradeLabel: colors.white10,
    tradeMainComponentTradeCounterDetailsBackground: colors.white10,
    tradeMainComponentTradeCounterDetailsColor: colors.white,

    tradeMainComponentAdded10Minutes: colors.white,

    tradeCurrenciesBackground: colors.white,
    tradeCurrenciesTitleColor: colors.ebonyClay70,
    tradeCurrenciesValueColor: colors.ebonyClay,
    tradeCurrenciesCodeBackground: colors.whiteLilac,

    tradePartnerTitleColor: colors.ebonyClay70,
    tradePartnerColor: colors.ebonyClay,

    tradeTermsBackground: colors.white,
    tradeHistoryBackground: colors.white,
    tradeHistoryItemFilled: colors.whiteLilac,
    tradeHistoryItemUnFilled: colors.transparent,

    tradeHistoryCircleFilled: colors.ebonyClay,
    tradeHistoryCircleEmpty: colors.white10,
    tradeHistoryCircleBorder: colors.ebonyClay,
    tradeHistoryCircleContentColor: colors.white,
    tradeHistoryCircleContentColorActive: colors.ebonyClay,

    tradeInfoBackground: colors.white,
    tradeInfoBox: colors.whiteLilac,
    tradeInfoBoxTitle: colors.ebonyClay,
    tradeInfoBoxKey: colors.ebonyClay70,
    tradeInfoBoxValue: colors.ebonyClay,

    tradeTipsModalTitle: colors.ebonyClay70,
    tradeTipsModalDescription: colors.ebonyClay,
    tradeTipsModalBalanceBorderColor: colors.whiteLilac,
    tradeTipsModalBalanceBackground: colors.whiteLilac,

    tradeInputDetailsBorder: colors.ebonyClay15,
    tradeDetailsItemHover: colors.white,
    tradeDetailsItem: colors.whiteLilac,

    tradeDisputeDivider: colors.burntSienna,
    tradeDisputeLabelBackground: colors.burntSienna,
    tradeDisputeLabelColor: colors.white,

    tradeMobileTradeId: colors.white50,
    tradeMobileInfoBackgroundPrimary: colors.whiteLilac,
    tradeMobilePartnerTitleColor: colors.ebonyClay,
    tradeMobileInfoBoxKey: colors.ebonyClay,
    tradeMobileInfoBoxValue: colors.ebonyClay,
    tradeMobileHistoryContentColor: colors.white,
    tradeMobileHistoryItemFilled: colors.white70,
    tradeMobileHistoryItemUnFilled: colors.transparent,
    tradeMobileHistoryItemUnFilledBorder: colors.gray,
    tradeMobileChatTitle: colors.ebonyClay,
    adExchangeViewError: colors.ebonyClay,

    divider: colors.ebonyClay15,

    textInputControl: colors.whiteLilac,

    withdrawBlockchainFeeBackground: colors.whiteLilac50,
    withdrawBlockchainFeeBackgroundHover: colors.whiteLilac,
    withdrawBlockchainFeeBackgroundActive: colors.whiteLilac,
    withdrawBlockchainFeeFiatBackground: colors.ebonyClay15,

    advertsRateActive: colors.indigo,
    advertsPercentBadge: colors.ebonyClay05,
    advertsSelectedRate: colors.whiteLilac,
    advertsSelectedRateInputBorder: colors.white30,
    advertsSelectedRateSpinner01: colors.white20,
    advertsSelectedRateSpinner02: colors.white,
    advertsAlertWarningBg: colors.solitaire,
    advertsAlertInfoDot: colors.indigo,
    advertsAlertInfoBg: colors.whiteLilac,
    advertsAlertErrorBg: colors.white,
    advertsAlertInfoLink: colors.indigo,
    advertsAlertInfoLinkHover: colors.indigoLight,
    advertsCryptoButtonBorder: colors.white10,
    advertsCryptoButtonActiveBorder: colors.indigo,
    advertsCryptoButtonBg: colors.transparent,
    advertsCryptoButtonBgHover: colors.indigoLight,
    advertsCryptoButtonActiveBg: colors.indigo,
    advertsCryptoButtonActiveBgHover: colors.indigoLight,

    createAdLine: colors.ebonyClay30,
    createAdInactiveText: colors.ebonyClay70,
    createAdActiveValue: colors.indigo,
    createAdStepActiveBg: colors.whiteLilac,
    giftsInstructionsBg: colors.whiteLilac,
    giftsInstructionsBorder: colors.mischka,
    giftsTableHeaderBorder: colors.black50,
    giftsTableRowBorder: colors.mineShaft10,
    giftsNotice: colors.ebonyClay70,
    giftsQuestion: colors.ebonyClay30,
    giftsQuestionActive: colors.goldTips,
    giftsSubtableBg: colors.whiteLilac,
    giftsMultiTableBadgeBg: colors.white,

    badgeDangerColor: colors.white,

    userAdButtonLinkBg: colors.whiteLilac,
    userAdButtonLinkHoverBg: colors.indigo,
    userAdButtonLinkHoverText: colors.white,
    userAdButtonLinkBzLogoIcon: colors.luckyPoint,
    userAdButtonLinkTelegramLogoIcon: colors.curiousBlue,
    userAdButtonEdit: colors.manatee,
    userAdButtonEditActive: colors.indigo,
    userAdButtonEditActiveHover: colors.indigoLight,
    userAdEditInputBg: colors.whiteLilac,
  },
});

export const themeDark = createTheme(vars, {
  boxShadows: {
    dropdown: `5px 4px 13px ${colors.black15}`,
    modal: `8px 4px 14px ${colors.black10}`,
    control: `0px 0px 0px 3px ${colors.mystic15}`,
    btnPrimaryFocus: `0px 0px 0px 3px ${colors.mystic15}`,
    btnSecondaryFocus: `0px 0px 0px 3px ${colors.mystic15}`,
  },
  colors: {
    transparent: colors.transparent,

    beta: colors.goldTips,
    primary: colors.mako,
    danger: colors.burntSienna,
    warning: colors.bamboo,
    success: colors.oceanGreen,
    secondary: colors.silverChalice,
    text: colors.whiteLilac,
    textHighlighted: colors.goldTips,
    textMuted: colors.whiteLilac50,
    interactive: colors.silverChalice,
    interactiveHighlighted: colors.gray,
    alert: colors.flamingo,
    mainBackground: colors.mirage,
    block: colors.ebonyClay,

    drawer: colors.ebonyClay,
    drawerItem: colors.white05,
    drawerItemHover: colors.mako,
    drawerItemDivider: colors.white10,

    dropdown: colors.milanoRed,
    dropdownItem: colors.transparent,
    dropdownItemHover: colors.white10,
    dropdownItemBorderBottom: colors.bunker,
    dropdownItemActiveBefore: colors.indigo,
    dropdownItemText: colors.white,
    dropdownItemHoverText: colors.white,
    dropdownItemActiveText: colors.goldTips,
    dropdownItemIcon: colors.white,
    dropdownItemHoverIcon: colors.white,
    dropdownItemActiveIcon: colors.spindle,

    btnPrimaryBg: colors.goldTips,
    btnPrimaryBg10: colors.goldTips10,
    btnPrimaryBg20: colors.goldTips20,
    btnPrimaryBgHover: colors.saffron,
    btnPrimaryBgActive: colors.goldenGrass,
    btnPrimaryBgDisabled: colors.mystic,
    btnPrimaryText: colors.catskillWhite,
    btnPrimaryTextDisabled: colors.manatee,

    btnSecondaryBg: colors.cornflowerBlueLighter,
    btnSecondaryBg10: colors.cornflowerBlueLighter10,
    btnSecondaryBg20: colors.cornflowerBlueLighter20,
    btnSecondaryBgHover: colors.anakiwa,
    btnSecondaryBgActive: colors.cornflowerBlueDarken,
    btnSecondaryBgDisabled: colors.mystic,
    btnSecondaryText: colors.catskillWhite,
    btnSecondaryTextDisabled: colors.manatee,

    btnDangerBg: colors.burntSienna,
    btnDangerBg10: colors.burntSienna10,
    btnDangerBg20: colors.burntSienna20,
    btnDangerBgHover: colors.salmon,
    btnDangerBgActive: colors.flamingo,
    btnDangerBgDisabled: colors.mystic,
    btnDangerText: colors.catskillWhite,
    btnDangerTextDisabled: colors.manatee,

    btnClarifiedBg: colors.white10,
    btnClarifiedBgHover: colors.white20,
    btnClarifiedBgActive: colors.indigo,
    btnClarifiedBgDisabled: colors.mystic,
    btnClarifiedText: colors.white,
    btnClarifiedTextActive: colors.white,
    btnClarifiedTextDisabled: colors.manatee,

    themeSwitcherBorder: colors.abbey,
    themeSwitcherBorderHover: colors.silverChalice,
    themeSwitcherSun: colors.silver,
    themeSwitcherSunHover: colors.mercury,
    themeSwitcherMoon: colors.abbey,
    spinner01: colors.white20,
    spinner02: colors.white,
    backdrop: colors.black30,

    traderBg: colors.white05,
    traderFadeBg: colors.shark,
    traderBgHover: colors.white10,
    traderBorder: colors.white05,
    traderBlocked: colors.mandy,
    traderFavorited: colors.oceanGreen,
    traderSuspicious: colors.whiteLilac,
    traderBlockedBgHover: colors.mandy90,
    traderFavoritedBgHover: colors.oceanGreen90,
    traderIconActive: colors.white,
    traderCurrencyCode: colors.white50,
    traderStatRowMobileBorder: colors.white10,

    notesBg: colors.white05,
    chatToMsgBg: colors.white05,
    chatToMsgText: colors.white,
    chatFromMsgBg: colors.indigo,
    chatFromMsgText: colors.white,
    chatErrorBackdrop: colors.black50,
    chatErrorModal: colors.brightGray,

    footerBg: colors.ebonyClay,
    footerTitle: colors.white85,
    footerBorder: colors.white24,
    footerColor: colors.white,
    footerLinkColor: colors.white40,
    footerLinkColorHover: colors.white60,
    footerSocialIcon: colors.white,
    footerSocialIconHover: colors.white70,
    footerEmail: colors.white70,
    footerEmailHover: colors.white,
    footerEmailCaption: colors.white40,
    footerSectionBgMobile: colors.nevada,
    footerSectionDividerMobile: colors.white10,

    infoBg: colors.mako,
    statBg: colors.white05,
    statIcon: colors.white30,

    modal: colors.charade,
    modalHeaderBorderBottom: colors.white10,

    skeleton: colors.black10,
    skeletonHighlighted: colors.white30,

    switcherTrack: colors.white10,
    switcherTrackShadow: colors.white10,
    switcherTrackChecked: colors.goldTips25,
    switcherTrackShadowChecked: colors.goldTips10,
    switcherThumb: colors.white80,
    switcherThumbChecked: colors.goldTips,

    radio: colors.white,
    radioShadow: colors.white10,
    radioChecked: colors.goldTips,
    radioShadowChecked: colors.goldTips10,

    tooltip: colors.milanoRed,
    tooltipText: colors.white,

    cardHeaderBorderBottom: colors.white10,

    reportBgHover: colors.white10,

    adBg: colors.white05,
    adTableHeader: colors.white50,
    adTrader: colors.malibu,
    adRowLabelMobile: colors.white50,
    adTrade: colors.indigo,

    adTradeMobileBackground: colors.ebonyClay,

    tradeFinishedStatusLineBg: colors.white10,
    tradeLink: colors.white30,
    tradeLinkHover: colors.white30,
    tradeButtonLinkText: colors.goldTips,
    tradeButtonLinkTextHover: colors.lightningYellow,

    onlineStatusWaiting: colors.sweetCorn,
    onlineStatusInactive: colors.botticelli,

    variantSwitcherBorder: colors.white10,
    variantSwitcherItemBgActive: colors.goldTips,
    variantSwitcherItemTextActive: colors.ebonyClay,

    paginationItemBgHover: colors.white05,
    paginationItemBgActive: colors.white10,
    paginationItemTextDisabled: colors.white30,

    bids: colors.milanoGreen,
    asks: colors.carnation,

    notificationUnread: colors.burntSienna,
    notificationRead: colors.white50,
    notificationTime: colors.white50,

    btnDrawer: colors.white,
    btnDrawerHover: colors.white50,

    adStatLabel: colors.white50,

    inputBorder: colors.white10,
    inputPlaceholder: colors.white50,

    selectButtonBg: colors.white10,
    selectButtonText: colors.white,
    selectSearchInputPlaceholder: colors.white50,
    selectDropdownBg: colors.milanoRed,
    selectDropdownDelimeter: colors.white10,
    selectDropdownItemHoverBg: colors.white05,
    selectDropdownItemSelectedBg: colors.indigo,
    selectColor: colors.silverChalice36,

    addressDropdownAddText: colors.goldTips,
    addressDropdownAddHoverBg: colors.white05,
    addressDropdownBg: colors.milanoRed,
    addressDropdownHoverBg: colors.white05,
    addressDropdownSelectedBg: colors.indigo,
    addressDropdownDelimeter: colors.white10,
    addressHintIcon: colors.white50,
    addressHintText: colors.whiteLilac,

    headerBg: colors.bunker,
    headerBorderBottom: colors.transparent,
    headerIcon: colors.white50,
    headerIconHover: colors.white,
    headerLinkText: colors.white70,
    headerLinkTextHover: colors.white,
    headerLinkTextActive: colors.goldTips,
    headerSubmenuBg: colors.ebonyClay,
    headerSubmenuHoverText: colors.goldTips,
    headerSubmenuActiveBorder: colors.goldTips,
    headerLanguageSwitcherBorder: colors.white30,
    headerLanguageSwitcherHoverBorder: colors.white60,
    headerLanguageSwitcherHoverBg: colors.white30,

    bottomTabsBg: colors.ebonyClay,
    bottomTabsTopBorder: colors.ebonyClay,
    bottomTabsIcon: colors.white50,
    bottomTabsIconActive: colors.goldTips,
    bottomTabsText: colors.white50,
    bottomTabsTextActive: colors.goldTips,

    breadcrumbsColor: colors.white50,

    collapsibleBoxExpandControls: colors.goldTips,
    collapsibleTextExpandControls: colors.white,
    collapsibleTextExpandControlsColorInverse: colors.white,
    collapsibleTextTitleColor: colors.goldTips,

    calendarItemActiveBg: colors.goldTips,
    calendarItemActiveText: colors.ebonyClay,
    calendarItemHoverBg: colors.goldTips20,
    tradeMainComponent: colors.indigo,
    tradeMainComponentTitle: colors.white,
    tradeMainComponentCircleFilled: colors.white,
    tradeMainComponentCircleEmpty: colors.white10,

    tradeMainComponentTradeLabel: colors.white10,
    tradeMainComponentTradeCounterDetailsBackground: colors.white10,
    tradeMainComponentTradeCounterDetailsColor: colors.white,

    tradeMainComponentAdded10Minutes: colors.white,

    tradeCurrenciesBackground: colors.ebonyClay,
    tradeCurrenciesTitleColor: colors.white50,
    tradeCurrenciesValueColor: colors.white,
    tradeCurrenciesCodeBackground: colors.white10,

    tradePartnerTitleColor: colors.white50,
    tradePartnerColor: colors.white,

    tradeTermsBackground: colors.ebonyClay,
    tradeHistoryBackground: colors.ebonyClay,
    tradeHistoryItemFilled: colors.white05,
    tradeHistoryItemUnFilled: colors.transparent,

    tradeHistoryCircleFilled: colors.white,
    tradeHistoryCircleEmpty: colors.white10,
    tradeHistoryCircleBorder: colors.white,
    tradeHistoryCircleContentColor: colors.white,
    tradeHistoryCircleContentColorActive: colors.ebonyClay,

    tradeInfoBackground: colors.ebonyClay,
    tradeInfoBox: colors.white05,
    tradeInfoBoxTitle: colors.white,
    tradeInfoBoxKey: colors.white50,
    tradeInfoBoxValue: colors.white,

    tradeTipsModalTitle: colors.white50,
    tradeTipsModalDescription: colors.white,
    tradeTipsModalBalanceBorderColor: colors.indigo,
    tradeTipsModalBalanceBackground: colors.white10,

    tradeInputDetailsBorder: colors.white20,
    tradeDetailsItemHover: colors.ebonyClay,
    tradeDetailsItem: colors.milanoRed,

    tradeDisputeDivider: colors.burntSienna,
    tradeDisputeLabelBackground: colors.burntSienna,
    tradeDisputeLabelColor: colors.white,

    tradeMobileTradeId: colors.white50,
    tradeMobileInfoBackgroundPrimary: colors.white05,
    tradeMobilePartnerTitleColor: colors.white50,
    tradeMobileInfoBoxKey: colors.white,
    tradeMobileInfoBoxValue: colors.white,
    tradeMobileHistoryContentColor: colors.white,
    tradeMobileHistoryItemFilled: colors.white05,
    tradeMobileHistoryItemUnFilled: colors.transparent,
    tradeMobileHistoryItemUnFilledBorder: colors.white70,
    tradeMobileChatTitle: colors.white,
    adExchangeViewError: colors.ebonyClay,

    divider: colors.white10,

    textInputControl: colors.outerSpace,

    withdrawBlockchainFeeBackground: colors.white05,
    withdrawBlockchainFeeBackgroundHover: colors.white10,
    withdrawBlockchainFeeBackgroundActive: colors.white20,
    withdrawBlockchainFeeFiatBackground: colors.ebonyClay15,

    advertsRateActive: colors.indigo,
    advertsPercentBadge: colors.white10,
    advertsSelectedRate: colors.whiteLilac,
    advertsSelectedRateInputBorder: colors.white30,
    advertsSelectedRateSpinner01: colors.white20,
    advertsSelectedRateSpinner02: colors.white,
    advertsAlertWarningBg: colors.outerSpace,
    advertsAlertInfoDot: colors.goldTips,
    advertsAlertInfoBg: colors.outerSpace,
    advertsAlertErrorBg: colors.outerSpace,
    advertsAlertInfoLink: colors.goldTips,
    advertsAlertInfoLinkHover: colors.lightningYellow,
    advertsCryptoButtonBorder: colors.white10,
    advertsCryptoButtonActiveBorder: colors.indigo,
    advertsCryptoButtonBg: colors.transparent,
    advertsCryptoButtonBgHover: colors.indigoLight,
    advertsCryptoButtonActiveBg: colors.indigo,
    advertsCryptoButtonActiveBgHover: colors.indigoLight,

    createAdLine: colors.white30,
    createAdInactiveText: colors.white50,
    createAdActiveValue: colors.goldTips,
    createAdStepActiveBg: colors.white05,
    giftsInstructionsBg: colors.mirage,
    giftsInstructionsBorder: colors.outerSpace,
    giftsTableHeaderBorder: colors.whiteLilac50,
    giftsTableRowBorder: colors.white10,
    giftsNotice: colors.white70,
    giftsQuestion: colors.white70,
    giftsQuestionActive: colors.goldTips,
    giftsSubtableBg: colors.mirage,
    giftsMultiTableBadgeBg: colors.outerSpace,

    badgeDangerColor: colors.white,

    userAdButtonLinkBg: colors.white05,
    userAdButtonLinkHoverBg: colors.indigo,
    userAdButtonLinkHoverText: colors.white,
    userAdButtonLinkBzLogoIcon: colors.white,
    userAdButtonLinkTelegramLogoIcon: colors.curiousBlue,
    userAdButtonEdit: colors.manatee,
    userAdButtonEditActive: colors.goldTips,
    userAdButtonEditActiveHover: colors.lightningYellow,
    userAdEditInputBg: colors.black30,
  },
});
