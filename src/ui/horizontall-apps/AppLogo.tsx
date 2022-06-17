import { Avatar, HorizontalCell } from '@vkontakte/vkui';
import { appImg } from './styles.css';
import { AppName } from './types';

type Props = {
  svgPath: string;
  appName: AppName;
};

export const AppLogo = ({ appName, svgPath }: Props) => {
  return (
    <HorizontalCell size="m" className={appImg}>
      <Avatar size={80} mode="app" src={svgPath} alt={appName} />
    </HorizontalCell>
  );
};
