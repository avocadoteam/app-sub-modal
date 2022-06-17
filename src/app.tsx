import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { themeClass } from './theme/theme.css';
import { HorizontalApps } from './ui/horizontall-apps';

export const App = () => {
  return (
    // @ts-ignore
    <ConfigProvider>
      {/* @ts-ignore */}
      <AdaptivityProvider>
        <AppRoot className={themeClass}>
          <HorizontalApps />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
