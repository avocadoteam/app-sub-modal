import { Group, HorizontalScroll } from '@vkontakte/vkui';
import { AppLogo } from './AppLogo';
import city from './apps-svg/city.svg';
import deliver from './apps-svg/deliver.svg';
import dict from './apps-svg/dict.svg';
import friends from './apps-svg/friends.svg';
import hinter from './apps-svg/hinter.svg';
import medic from './apps-svg/medic.svg';
import stuff from './apps-svg/stuff.svg';
import { hContainer } from './styles.css';
import { AppName } from './types';

export const HorizontalApps = () => {
  return (
    <Group>
      <HorizontalScroll showArrows>
        <div className={hContainer}>
          <AppLogo appName={AppName.City} svgPath={city} />
          <AppLogo appName={AppName.Dictionary} svgPath={dict} />
          <AppLogo appName={AppName.Friends} svgPath={friends} />
          <AppLogo appName={AppName.GdePosylka} svgPath={deliver} />
          <AppLogo appName={AppName.Hinter} svgPath={hinter} />
          <AppLogo appName={AppName.Medic} svgPath={medic} />
          <AppLogo appName={AppName.Stuff} svgPath={stuff} />
        </div>
      </HorizontalScroll>
    </Group>
  );
};
