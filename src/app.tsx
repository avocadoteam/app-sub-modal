import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { themeClass } from './theme/theme.css';
import { HorizontalApps } from './ui/horizontall-apps';
import { useQParams } from './ui/useQParams';

export const App = () => {
  const { appearance } = useQParams();
  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot className={themeClass}>
          <HorizontalApps />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
