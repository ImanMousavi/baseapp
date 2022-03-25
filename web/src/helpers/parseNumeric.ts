const NOT_NUMBERS_REGEXP = /[^\d.]/g;

export type Options = {
  allowNegativeNumeric?: boolean | undefined;
  onlyInteger?: boolean | undefined;
  trimRightDot?: boolean | undefined;
  maxFractionDigits?: number | undefined;
};

const parsePositiveNumeric = (value: string, options: Options = {}): string => {
  const { onlyInteger = false, maxFractionDigits } = options;
  const numeric = value.replace(/,/g, '.').replace(NOT_NUMBERS_REGEXP, '');
  if (numeric === '') {
    return '';
  }

  if (onlyInteger || maxFractionDigits === 0) {
    const arr = numeric.split('.') as [string, ...string[]];
    return arr.length > 1 ? arr.slice(0, -1).join('') : arr[0];
  }

  if (numeric === '.') {
    return '0.';
  }

  let [integer, ...other] = numeric.split('.');
  let fractional = other[0];
  if (other.length > 1) {
    fractional = other[other.length - 1];
    integer = `${integer}${other.slice(0, -1).join('')}`;
  }

  if (maxFractionDigits) {
    if (typeof integer === 'string' && maxFractionDigits === 0) {
      return integer;
    }

    if (typeof fractional === 'string' && fractional.length > maxFractionDigits) {
      fractional = fractional.slice(0, maxFractionDigits);
    }
  }

  return `${integer === '' ? '0' : integer}${
    typeof fractional === 'string' ? `.${fractional}` : ''
  }`;
};

export const parseNumeric = (value: string, options: Partial<Options> = {}): string => {
  const { allowNegativeNumeric = false, trimRightDot = false } = options;

  if (value === '') {
    return '';
  }

  if (value === '-' && allowNegativeNumeric) {
    return '-';
  }

  let isNegative = false;
  if (value[0] === '-' && allowNegativeNumeric) {
    isNegative = true;
  }

  const positiveNumber = parsePositiveNumeric(value, options);

  return `${isNegative ? '-' : ''}${
    trimRightDot && positiveNumber[positiveNumber.length - 1] === '.'
      ? positiveNumber.slice(0, -1)
      : positiveNumber
  }`;
};

export const parseInteger = (value: string, allowNegativeNumeric: boolean = false) => {
  return parseNumeric(value, { allowNegativeNumeric, onlyInteger: true });
};
