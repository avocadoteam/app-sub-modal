import {
  Icon24BookmarkOutline,
  Icon24CrownOutline,
  Icon24LikeOutline,
  Icon24List,
  Icon24LogoGoogle,
  Icon24MoreHorizontal,
  Icon24Users3Outline,
  Icon24ViewOutline,
  Icon24BrushOutline,
  Icon24PenOutline,
  Icon24GameOutline,
  Icon24UserTagOutline,
  Icon24DeleteClockOutline
} from '@vkontakte/icons';
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
  stuff: [
    {
      Icon: Icon24LogoGoogle,
      title: 'Синхронизация с Google Tasks',
    },
    {
      Icon: Icon24List,
      title: 'Неограниченные списки',
    },
    {
      Icon: Icon24Users3Outline,
      title: 'Неограниченные пользователи',
    },
  ],
  dict: [
    {
      Icon: Icon24BookmarkOutline,
      title: 'Неограниченные закладки',
    },
    {
      Icon: Icon24MoreHorizontal,
      title: 'Бонусы в других приложениях',
    },
  ],
  draw: [
    {
      Icon: Icon24BrushOutline,
      title: 'Новые цвета',
      subTitle: 'Рисуйте градиентом прямо в игре',
    },
    {
      Icon: Icon24PenOutline,
      title: 'Изменение рисунка',
      subTitle: 'Вы сможете дорисовать свои картины в любое время',
    },
    {
      Icon: Icon24GameOutline,
      title: 'Настройки лобби',
      subTitle: 'Настраивайте свою игру так, как Вам удобно. Приглашайте всех своих друзей и рисуйте большой командой!',
    },
    {
      Icon: Icon24UserTagOutline,
      title: 'Свежая ава',
      subTitle: 'Выбирайте оформление своей аватарки',
    },
    {
      Icon: Icon24DeleteClockOutline,
      title: 'Искусство не вечно, или...',
      subTitle: 'Ваши картины будут храниться дольше, чем картины других игроков',
    },
    {
      Icon: Icon24MoreHorizontal,
      title: 'Бонусы в других приложениях',
    },
  ],
};
