import { Avatar } from '@vkontakte/vkui';
import { useContext } from 'react';
import { SelectedAppContext } from './context';
import { appImg } from './styles.css';
import { AppName } from './types';

type Props = {
  svgPath: string;
  appName: AppName;
};

export const AppLogo = ({ appName, svgPath }: Props) => {
  const { onSelect } = useContext(SelectedAppContext);
  return (
    <div className={appImg} onClick={() => onSelect(appName)}>
      <Avatar size={80} mode="app" src={svgPath} alt={appName} />
    </div>
  );
};
