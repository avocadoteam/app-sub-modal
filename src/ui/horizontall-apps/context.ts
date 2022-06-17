import { createContext } from 'react';
import { AppName } from './types';

export const SelectedAppContext = createContext<{
  appName: AppName;
  onSelect: (n: AppName) => void;
}>({
  appName: AppName.Friends,
  onSelect: () => {},
});
