import bridge from '@vkontakte/vk-bridge';

export const buySub = (app_id: number) =>
  bridge.send('VKWebAppOpenPayForm', {
    app_id,
    action: 'pay-to-group',
    params: {
      amount: 79,
      description: 'Avocado+ -> Одна подписка для 10+ приложений',
      data: 'subscription',
      group_id: 197416979,
    },
  });
