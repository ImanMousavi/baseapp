export interface Blockchain {
  explorer_address: string;
  explorer_transaction: string;
  height: number;
  id: number;
  is_transaction_price_too_high: boolean;
  key: string;
  min_confirmations: number;
  name: string;
  status: 'disabled' | 'active';
}
