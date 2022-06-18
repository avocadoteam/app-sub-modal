import { AppearanceType } from '@vkontakte/vk-bridge';
import { AppName } from './horizontall-apps/types';

export const useQParams = () => {
  return {
    appearance: getQueryVariable<AppearanceType>('appearance', 'light'),
    app: getQueryVariable<AppName>('app', AppName.Friends),
  };
};

const getQueryVariable = <T>(variable: string, ifEmpty: T) => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]) as unknown as T;
    }
  }
  console.log('Query variable %s not found', variable);
  return ifEmpty;
};
