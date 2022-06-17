import { Icon24CrownOutline, Icon24LikeOutline, Icon24MoreHorizontal, Icon24ViewOutline } from '@vkontakte/icons';
import { AppContent, AppName } from './types';

export const previewContent: Partial<Record<AppName, AppContent[]>> = {
  friends: [
    {
      Icon: Icon24CrownOutline,
      title: 'Корона возле аватарки',
      subTitle: 'Пусть всё увидят, кто тут главный',
    },
    {
      Icon: Icon24LikeOutline,
      title: 'Бесплатные перепрохождения',
      subTitle: 'Перепроходите чужие тесты бесплатно 15 раз в месяц',
    },
    {
      Icon: Icon24ViewOutline,
      title: 'Рассекречивайте друзей',
      subTitle: 'Анонимность не выстоит перед подпиской — вы сможете увидеть, кто скрывается за маской',
    },
    {
      Icon: Icon24MoreHorizontal,
      title: 'Бонусы в других приложениях',
    },
  ],
};
