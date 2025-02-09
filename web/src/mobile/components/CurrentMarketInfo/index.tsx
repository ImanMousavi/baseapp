import classnames from 'classnames';
import * as React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { MarketName } from 'src/components/MarketName/MarketName';
import { createMoneyWithoutCcy } from 'src/helpers/money';
import { CloseIcon } from '../../../assets/images/CloseIcon';
import { FilterInput } from '../../../components';
import { DEFAULT_CCY_PRECISION } from '../../../constants';
import { MarketsTable } from '../../../containers';
import {
  Market,
  selectCurrentMarket,
  selectLastPrice,
  selectMarkets,
  selectMarketTickers,
} from '../../../modules';
import { ChevronIcon } from '../../assets/images/ChevronIcon';
import { MobileModal } from '..';

const defaultTicker = {
  amount: '0.0',
  last: '0.0',
  high: '0.0',
  open: '0.0',
  low: '0.0',
  price_change_percent: '+0.00%',
  volume: '0.0',
};

const CurrentMarketInfoComponent: React.FC = () => {
  const intl = useIntl();
  const currentMarket = useSelector(selectCurrentMarket);
  const markets = useSelector(selectMarkets);
  const tickers = useSelector(selectMarketTickers);
  const lastPrice = useSelector(selectLastPrice);
  const [isOpenMarketSelector, setOpenMarketSelector] = React.useState(false);
  const [filteredMarkets, setFilteredMarkets] = React.useState(markets);
  const [marketsSearchKey, setMarketsSearchKey] = React.useState('');

  const searchFilter = (row: Market, searchKey: string) => {
    setMarketsSearchKey(searchKey);

    return row ? (row.name as string).toLowerCase().includes(searchKey.toLowerCase()) : false;
  };

  const handleFilter = (result: object[]) => {
    setFilteredMarkets(result as Market[]);
  };

  const renderModalHeader = (
    <div className="cr-mobile-modal__header">
      <div className="cr-mobile-modal__header-search">
        <FilterInput
          data={markets}
          onFilter={handleFilter}
          filter={searchFilter}
          placeholder={intl.formatMessage({
            id: 'page.mobile.currentMarketInfo.search.placeholder',
          })}
        />
      </div>
      <div className="cr-mobile-modal__header-close" onClick={() => setOpenMarketSelector(false)}>
        <CloseIcon />
      </div>
    </div>
  );

  const currentMarketPricePrecision = currentMarket
    ? currentMarket.price_precision
    : DEFAULT_CCY_PRECISION;
  const currentMarketTicker = (currentMarket && tickers[currentMarket.id]) || defaultTicker;
  const currentMarketTickerChange = +(
    +currentMarketTicker.last - +currentMarketTicker.open
  ).toFixed(currentMarketPricePrecision);
  const currentMarketChangeClass = classnames('', {
    'change-positive': (+currentMarketTickerChange || 0) >= 0,
    'change-negative': (+currentMarketTickerChange || 0) < 0,
  });
  const isOpenMarketSelectorClass = classnames(
    'pg-mobile-current-market-info__left__selector__chevron',
    {
      'pg-mobile-current-market-info__left__selector__chevron--open': isOpenMarketSelector,
    },
  );

  React.useEffect(() => {
    setOpenMarketSelector(false);
  }, [currentMarket]);

  React.useEffect(() => {
    document.body.style.overflow = isOpenMarketSelector ? 'hidden' : '';
  }, [isOpenMarketSelector]);

  return (
    <div className="pg-mobile-current-market-info">
      <div className="pg-mobile-current-market-info__left">
        <div
          className="pg-mobile-current-market-info__left__selector"
          onClick={() => setOpenMarketSelector(!isOpenMarketSelector)}
        >
          <span>{currentMarket ? <MarketName name={currentMarket.name} /> : ''}</span>
          <div className={isOpenMarketSelectorClass}>
            <ChevronIcon />
          </div>
        </div>
        <div className="pg-mobile-current-market-info__left__price-change">
          <span className={currentMarketChangeClass}>{lastPrice?.price.toFormat() ?? '0.00'}</span>
          <span className={currentMarketChangeClass}>
            {currentMarketTicker.price_change_percent}
          </span>
        </div>
      </div>
      <div className="pg-mobile-current-market-info__right">
        <div className="pg-mobile-current-market-info__right__col">
          <span>{intl.formatMessage({ id: 'page.mobile.currentMarketInfo.volume' })}</span>
          <span>{intl.formatMessage({ id: 'page.mobile.currentMarketInfo.high' })}</span>
          <span>{intl.formatMessage({ id: 'page.mobile.currentMarketInfo.low' })}</span>
        </div>
        <div className="pg-mobile-current-market-info__right__col">
          <span className={currentMarketChangeClass}>
            {createMoneyWithoutCcy(
              currentMarketTicker.volume,
              currentMarketPricePrecision,
            ).toFormat()}
          </span>
          <span className={currentMarketChangeClass}>
            {createMoneyWithoutCcy(
              currentMarketTicker.high,
              currentMarketPricePrecision,
            ).toFormat()}
          </span>
          <span className={currentMarketChangeClass}>
            {createMoneyWithoutCcy(currentMarketTicker.low, currentMarketPricePrecision).toFormat()}
          </span>
        </div>
      </div>
      <MobileModal
        header={renderModalHeader}
        isOpen={isOpenMarketSelector}
        onClose={() => setOpenMarketSelector(!isOpenMarketSelector)}
        title={intl.formatMessage({ id: 'page.header.signUp.modal.header' })}
      >
        <MarketsTable
          handleChangeCurrentMarket={() => setOpenMarketSelector(false)}
          markets={marketsSearchKey ? filteredMarkets : undefined}
        />
      </MobileModal>
    </div>
  );
};

export const CurrentMarketInfo = React.memo(CurrentMarketInfoComponent);
