import classnames from 'classnames';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Language } from 'src/types';
import { BackButtonMobile } from 'web/src/components/shared/Header/BackButtonMobile';
import { useChangeLang } from 'web/src/hooks/useChangeLang';
import { useT } from 'web/src/hooks/useT';
import { languages } from '../../../api/config';
import { getLanguageName } from '../../../helpers';
import {
  changeUserDataFetch,
  selectCurrentLanguage,
  selectUserInfo,
  selectUserLoggedIn,
} from '../../../modules';
import { CheckIcon } from '../../assets/images/CheckIcon';

const ProfileLanguageMobileScreenComponent: React.FC = () => {
  const t = useT();
  const changeLanguage = useChangeLang();
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const currentLanguage = useSelector(selectCurrentLanguage);

  const handleChangeLanguage = (language: Language) => {
    if (isLoggedIn) {
      const data = user.data && JSON.parse(user.data);

      if (data && data.language && data.language !== language) {
        const payload = {
          ...user,
          data: JSON.stringify({
            ...data,
            language,
          }),
        };

        dispatch(changeUserDataFetch({ user: payload }));
      }
    }

    changeLanguage(language);
  };

  const renderLanguageListItem = (language: Language, index: number) => {
    const listItemClassName = classnames('pg-mobile-profile-language-screen__list__item', {
      'pg-mobile-profile-language-screen__list__item--active': language === currentLanguage,
    });

    return (
      <div key={index} className={listItemClassName} onClick={() => handleChangeLanguage(language)}>
        <span>{getLanguageName(language)}</span>
        <CheckIcon />
      </div>
    );
  };

  return (
    <>
      <BackButtonMobile to="/profile">{t('page.body.profile.header.account')}</BackButtonMobile>
      <div className="pg-mobile-profile-language-screen">
        <div className="pg-mobile-profile-language-screen__list">
          {languages.map(renderLanguageListItem)}
        </div>
      </div>
    </>
  );
};

export const ProfileLanguageMobileScreen = React.memo(ProfileLanguageMobileScreenComponent);
