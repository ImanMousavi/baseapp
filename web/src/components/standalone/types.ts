import { User } from 'web/src/modules/user/profile/types';
import { Language, Theme } from 'web/src/types';

export interface StandaloneComponentProps {
  mainUrl: string;
  theme: Theme;
  language: Language;
  languages?: Language[] | undefined;
  onThemeChange?: ((theme: Theme) => void) | void;
  onLanguageChange?: ((language: Language) => void) | void;
  onLoggedIn?: ((user: User | undefined) => void) | undefined;
}
