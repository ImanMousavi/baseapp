import { useMemo, ComponentProps, FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Header as SharedHeader,
  USER_STATUS_NOT_AUTHORIZED,
  USER_STATUS_AUTHORIZATION_REQUIRED,
  USER_STATUS_AUTHORIZED,
} from 'web/src/components/shared/Header/Header';
import {
  changeColorTheme,
  selectCurrentColorTheme,
  selectCurrentLanguage,
  selectUserInfo,
  selectUserLoggedIn,
  changeUserDataFetch,
  changeLanguage,
  selectUserFetching,
  logoutFetch,
  selectMobileDeviceState,
} from 'src/modules';
import { MarketSelector } from 'src/containers/MarketSelector/MarketSelector';
import { HeaderToolbar } from 'src/containers/HeaderToolbar/HeaderToolbar';
import { useT } from 'src/hooks/useT';
import { getLinkToP2P } from 'web/src/components/Header/getLinkToP2P';
import { Navigation } from 'web/src/components/shared/Header/Navigation';
import { RenderLinkComponent, RenderNavLinkComponent } from 'web/src/components/shared/sharedTypes';
import { Box } from 'web/src/components/ui/Box';
import { isToday, isYesterday, localeDate } from 'web/src/helpers';
import { useMarkNotificationAsRead } from 'web/src/hooks/mutations/useMarkNotificationAsRead';
import { Notification } from 'web/src/lib/socket/types';
import { NotificationModalNotification } from 'web/src/containers/NotificationModal/types';
import { useFetchP2PNotifications } from 'web/src/hooks/data/useFetchP2PNotifications';
import { NotificationModal } from 'web/src/containers/NotificationModal/NotificationModal';
import { Header as MobileHeader } from 'src/mobile/components/Header';
import { notificationInfo } from './notificationInfo';

type Links = ComponentProps<typeof SharedHeader>['navLinks'];

const languages = {
  en: 'English',
  ru: 'Русский',
};

const strIncludesStrings = (str: string, substr: string[]): boolean => {
  return substr.some((s) => str.includes(s));
};

const Header: FC = () => {
  const [nofiticationModalProps, setNofiticationModalProps] = useState<
    NotificationModalNotification | undefined
  >();
  const isMobileDevice = useSelector(selectMobileDeviceState);
  const t = useT();
  const dispatch = useDispatch();
  const currentCode = useSelector(selectCurrentLanguage);
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const user = useSelector(selectUserInfo);
  const colorTheme = useSelector(selectCurrentColorTheme);
  const isUserFetching = useSelector(selectUserFetching);
  const { pathname } = useLocation();
  const history = useHistory();
  const isTradingPage = pathname.includes('/trading');

  const translate = useCallback(
    (key: string) => {
      switch (key) {
        case 'signIn':
          return t('page.header.navbar.signIn');

        case 'signUp':
          return t('page.header.signUp');

        case 'profile':
          return t('page.header.navbar.profile');

        case 'all_read':
          return t('notifications.readall');

        case 'notifications_empty':
          return t('notifications.empty');

        case 'logout':
          return t('page.body.profile.content.action.logout');

        case 'theme':
          return t('page.mobile.profileLinks.settings.theme');

        case 'notificationsTitle':
          return t('notifications.title');

        case 'today':
          return t('today');

        case 'yesterday':
          return t('yesterday');

        case 'notificationUnread':
          return t('notifications.unread');

        case 'notificationRead':
          return t('notifications.read');

        default:
          throw new Error(`translate: Key '${key}' not found`);
      }
    },
    [t],
  );

  const fetchNotificationRes = useFetchP2PNotifications();
  const notifications: Notification[] = fetchNotificationRes.data || [];

  const [markNotificationAsReadP2P] = useMarkNotificationAsRead();

  const handleMarkAllNotificationAsRead = () =>
    notifications.forEach((n) => {
      if (!n.read) {
        markNotificationAsReadP2P(n.id);
      }
    });

  const handleMarkNotificationAsRead = (notificationId: number) =>
    markNotificationAsReadP2P(notificationId);

  const handleLanguageChange = (code: string) => {
    if (isLoggedIn) {
      const data = user.data && JSON.parse(user.data);

      if (data && data.language && data.language !== code) {
        dispatch(
          changeUserDataFetch({
            user: {
              ...user,
              data: JSON.stringify({
                ...data,
                language: code,
              }),
            },
          }),
        );
      }
    }

    dispatch(changeLanguage(code));
  };
  const handleThemeChange = () =>
    dispatch(changeColorTheme(colorTheme === 'light' ? 'dark' : 'light'));

  const closeNotificationModal = () => setNofiticationModalProps(undefined);

  let userProps;
  if (isUserFetching) {
    userProps = { status: USER_STATUS_NOT_AUTHORIZED };
  } else if (!isLoggedIn) {
    userProps = {
      status: USER_STATUS_AUTHORIZATION_REQUIRED,
      onSignInClick: () => history.push('/signin'),
      onSignUpClick: () => history.push('/signup'),
    };
  } else {
    userProps = {
      status: USER_STATUS_AUTHORIZED,
      onLogoutClick: () => dispatch(logoutFetch()),
      notifications: notifications.map((notification) => {
        const notify: NotificationModalNotification = notificationInfo(notification, {
          translate: t,
          lang: currentCode,
        }) as NotificationModalNotification;
        const handleNotifyClick = () => {
          handleMarkNotificationAsRead(notification.id);

          if (notify.alert) {
            setNofiticationModalProps(notify);
          }

          if (notify.link) {
            if (strIncludesStrings(notify.link, ['/p2p', '/merch'])) {
              window.location.assign(notify.link);
            } else {
              history.push(notify.link);
            }
          }
        };

        const calculateDate = () => {
          if (isToday(notify.createdAt!)) {
            return translate('today');
          }

          if (isYesterday(notify.createdAt!)) {
            return translate('yesterday');
          }

          return localeDate(notify.createdAt, 'veryShortDate', currentCode);
        };

        return {
          id: notification.id.toString(),
          message: notify.text,
          time: localeDate(notify.createdAt, 'time'),
          date: calculateDate(),
          read: notification.read,
          onClick: handleNotifyClick,
        };
      }),
      onAllRead: handleMarkAllNotificationAsRead,
    };
  }

  const p2pURL = getLinkToP2P(currentCode);
  const p2p: Links = useMemo(
    () => [
      {
        key: 'p2p',
        type: 'external',
        to: p2pURL,
        children: t('page.header.navbar.toP2P'),
      },
    ],
    [p2pURL, t],
  );
  const navLinks = [
    {
      key: 'quick-exchange',
      type: 'internal',
      to: '/quick-exchange',
      children: t('page.header.navbar.quick-exchange'),
    },
    {
      key: 'trading',
      type: 'internal',
      to: '/trading',
      children: t('page.header.navbar.trade'),
    },
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'wallets',
          type: 'internal',
          to: '/wallets',
          children: t('page.header.navbar.wallets'),
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'orders',
          type: 'internal',
          to: '/orders',
          children: t('page.header.navbar.openOrders'),
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'history',
          type: 'internal',
          to: '/history',
          children: t('page.header.navbar.history'),
        }
      : undefined,
    ...p2p,
  ].filter(Boolean) as Links;

  const hamburgerLinks = [
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'profile',
          type: 'internal',
          icon: 'profile',
          to: '/profile',
          children: t('page.header.navbar.profile'),
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZATION_REQUIRED
      ? {
          key: 'signin',
          icon: 'profile',
          children: t('page.header.navbar.signIn'),
          onClick: userProps.onSignInClick,
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZATION_REQUIRED
      ? {
          key: 'signup',
          icon: 'signup',
          children: t('page.header.signUp'),
          onClick: userProps.onSignUpClick,
        }
      : undefined,
    {
      key: 'quickExchange',
      type: 'internal',
      icon: 'quickExchange',
      to: '/quick-exchange',
      children: t('page.header.navbar.quick-exchange'),
    },
    {
      key: 'trading',
      type: 'internal',
      icon: 'trading',
      to: '/trading',
      children: t('page.header.navbar.trade'),
    },
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'wallets',
          type: 'internal',
          icon: 'wallets',
          to: '/wallets',
          children: t('page.header.navbar.wallets'),
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'orders',
          type: 'internal',
          icon: 'orders',
          to: '/orders',
          children: t('page.header.navbar.openOrders'),
        }
      : undefined,
    userProps.status === USER_STATUS_AUTHORIZED
      ? {
          key: 'history',
          type: 'internal',
          icon: 'history',
          to: '/history',
          children: t('page.header.navbar.history'),
        }
      : undefined,
    {
      key: 'p2p',
      type: 'external',
      icon: 'p2p',
      to: p2pURL,
      children: t('page.header.navbar.toP2P'),
    },
    {
      key: 'docs',
      type: 'internal',
      icon: 'api',
      to: '/docs',
      children: t('page.header.navbar.api'),
    },
    {
      key: 'logout',
      icon: 'logout',
      children: t('page.body.profile.content.action.logout'),
      onClick: userProps.onLogoutClick,
    },
  ].filter(Boolean) as Links;

  const renderLinkComponent: RenderLinkComponent = (props) => <Link {...props} />;
  const renderNavLinkComponent: RenderNavLinkComponent = (props) => <NavLink {...props} />;

  const HeaderWrapper = useCallback(
    ({ chilren, ...props }) =>
      isMobileDevice ? (
        <MobileHeader {...props} />
      ) : (
        <SharedHeader {...props}>
          {isTradingPage && (
            <>
              <Box mr="6x">
                <Navigation navLinks={p2p} renderNavLinkComponent={renderNavLinkComponent} />
              </Box>
              <MarketSelector />
              <HeaderToolbar />
            </>
          )}
        </SharedHeader>
      ),
    [isMobileDevice, isTradingPage, p2p],
  );

  return (
    <>
      {nofiticationModalProps && (
        <NotificationModal
          notification={nofiticationModalProps}
          handleClose={closeNotificationModal}
        />
      )}
      <HeaderWrapper
        logoLightURL={window.env.logoUrl}
        logoDarkURL={window.env.logoDarkUrl}
        toMainPage={p2pURL}
        theme={colorTheme}
        language={currentCode}
        languages={languages}
        navLinks={navLinks}
        hamburgerLinks={hamburgerLinks}
        t={translate}
        renderLinkComponent={renderLinkComponent}
        renderNavLinkComponent={renderNavLinkComponent}
        {...userProps}
        onThemeChange={handleThemeChange}
        onLanguageChange={handleLanguageChange}
      >
        {isTradingPage && (
          <>
            <Box mr="6x">
              <Navigation navLinks={p2p} renderNavLinkComponent={renderNavLinkComponent} />
            </Box>
            <MarketSelector />
            <HeaderToolbar />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;
