import * as React from 'react';
import classnames from 'classnames';
import { SelectString } from '../Select/Select';

export enum HideMode {
  hide = 'hide',
  unmount = 'unmount',
}

export type OnTabChangeCallback = (index: number, label?: string) => void;

type OnCurrentTabChange = (index: number) => void;

export interface Tab {
  content: React.ReactNode;
  disabled?: boolean;
  hidden?: boolean;
  label: string;
}

export interface TabPanelProps {
  /**
   * List of tabs to be rendered
   */
  panels: Tab[];
  /**
   * Determines whether tabs should be full container width
   * @default false
   */
  fixed?: boolean | undefined;
  /**
   * Tab change mode:
   * `hide` mode will mount but hide inactive tabs changing `display` css
   * property of tab content to `none`.
   * `unmount` mode will not mount the tab content of inactive tabs.
   * @default hide
   */
  hideMode?: HideMode | undefined;
  /**
   * Callback which is called when currently active tab is changed
   */
  onTabChange?: OnTabChangeCallback | undefined;
  /**
   * Function which is called for changing currently active tab is changed
   */
  onCurrentTabChange?: OnCurrentTabChange | undefined;
  /**
   * Index of tab to switch on
   */
  /**
   * Current index of tab
   */
  currentTabIndex: number;
  /**
   * Optinal JSX element to head
   */
  optionalHead?: React.ReactNode | undefined;
  /**
   * Determines whether tab header should looks like dropdown or tab switcher
   */
  isDropdown?: boolean | undefined;
}

/**
 * Component for switching between different tabs on one page.
 */
export const TabPanel: React.FC<TabPanelProps> = ({
  fixed,
  hideMode = HideMode.hide,
  panels,
  optionalHead,
  currentTabIndex,
  isDropdown,
  onCurrentTabChange,
  onTabChange,
}) => {
  const dropdownLabels = React.useCallback(() => {
    if (!panels.length) {
      return [];
    }

    const tabNames = panels
      .map((panel) => panel.label)
      .filter((label) => label !== panels[currentTabIndex]!.label);
    tabNames.unshift(panels[currentTabIndex]!.label);

    return tabNames;
  }, [currentTabIndex, panels]);

  const createOnTabChangeHandler = React.useCallback(
    (index: number, tab: Tab) => () => {
      if (!tab.disabled) {
        if (onCurrentTabChange) {
          onCurrentTabChange(index);
        }
        if (onTabChange) {
          onTabChange(index, tab.label);
        }
      }
    },
    [onCurrentTabChange, onTabChange],
  );

  const handleOrderTypeChange = React.useCallback(
    (label: string | null) => {
      const activeIndex = panels.findIndex((tab) => tab.label === label);
      createOnTabChangeHandler(activeIndex, panels[activeIndex]!)();
    },
    [createOnTabChangeHandler, dropdownLabels, panels],
  );

  const renderTabPanel = React.useCallback(
    (tab: Tab, index: number) => {
      const { disabled, hidden, label } = tab;

      const active = currentTabIndex === index;
      const cn = classnames('cr-tab', {
        'cr-tab__active': active,
        'cr-tab__disabled': disabled,
        'cr-tab__hidden': hidden,
      });

      return (
        <div
          className={cn}
          key={index}
          onClick={createOnTabChangeHandler(index, tab)}
          role="tab"
          tabIndex={index}
        >
          {label}
          {active && <span className="cr-tab__pointer" />}
        </div>
      );
    },
    [createOnTabChangeHandler, currentTabIndex],
  );

  const tabPanelRender = React.useCallback(() => {
    if (isDropdown) {
      const options = dropdownLabels();
      return (
        <SelectString
          options={options}
          defaultValue={options[0]}
          size="small"
          onChange={handleOrderTypeChange}
        />
      );
    } else {
      return (
        <div className={'cr-tab-panel__navigation-container-navigation'} role="tablist">
          {panels.map(renderTabPanel)}
        </div>
      );
    }
  }, [dropdownLabels, handleOrderTypeChange, isDropdown, panels, renderTabPanel]);

  const renderTabContent = React.useCallback(
    (tab: Tab, index: number) => {
      const cn: string = classnames('cr-tab-content', {
        'cr-tab-content__active': hideMode === HideMode.hide ? currentTabIndex === index : false,
      });

      return (
        <div className={cn} key={`${tab.label}-${index}`}>
          {tab.content}
        </div>
      );
    },
    [currentTabIndex, hideMode],
  );

  const contents = React.useMemo(
    () =>
      hideMode === HideMode.hide
        ? panels.map(renderTabContent)
        : panels.filter((_, index) => index === currentTabIndex).map(renderTabContent),
    [currentTabIndex, hideMode, panels, renderTabContent],
  );

  return (
    <div
      className={classnames('cr-tab-panel', {
        'cr-tab-panel__fixed': fixed,
      })}
    >
      <div className="cr-tab-panel__navigation-container draggable-container">
        {tabPanelRender()}
        {optionalHead && <div className="cr-tab-panel__optinal-head">{optionalHead}</div>}
      </div>
      {contents}
    </div>
  );
};
