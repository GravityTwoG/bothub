import { Middleware } from 'stylis';

export const BothubStyleSheetPlugin: Middleware = (element) => {
  if (
    element.type === 'decl'
    && element.props !== 'background'
    && element.props !== 'background-image'
  ) {
    element.value = element.value.replace(/([-0-9.]+)px/g, (_, value) => {
      const pxValue = +value;
      if (Math.abs(pxValue) <= 1) {
        return `${pxValue}px`;
      } 
      if (element.props === 'font-size') {
        return `max(calc(var(--bothub-scale, 1) * ${pxValue}px), 12px)`;
      }
      if (element.props === 'line-height') {
        return `max(calc(var(--bothub-scale, 1) * ${pxValue}px), 16px)`;
      }
      return `calc(var(--bothub-scale, 1) * ${pxValue}px)`;
    });

    element.value = element.value.replace(/([-0-9.]+)vh/g, (_, value) => {
      const vhValue = +value;

      return `calc(var(--bothub-vh, 1vh) * ${vhValue})`;
    });
  }
};