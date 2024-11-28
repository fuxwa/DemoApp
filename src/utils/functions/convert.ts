import _ from 'lodash';
export const formatCurrency = (num: string) => {
    const values = num?.toString().replace(/\D/g, '');
    let _parse = _.parseInt(values);
    _parse = _.isNaN(_parse) ? 0 : _parse;
    return _parse.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const formatCurrencyVND = (value: string | number) => {
    const val = Number(value)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.');
    return val;
}; 