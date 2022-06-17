import { AdaptivityProvider, AppRoot, ConfigProvider, useAppearance } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { themeClass } from './theme/theme.css';
import { HorizontalApps } from './ui/horizontall-apps';

export const App = () => {
  const appearance = useAppearance();
  return (
    // @ts-ignore
    <ConfigProvider appearance={appearance}>
      {/* @ts-ignore */}
      <AdaptivityProvider>
        <AppRoot className={themeClass}>
          <HorizontalApps />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
