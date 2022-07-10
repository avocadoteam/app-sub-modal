import bridge from '@vkontakte/vk-bridge';

export const buySub = () =>
  bridge.send('VKWebAppOpenPayForm', {
    app_id: 7511650,
    action: 'pay-to-group',
    params: {
      amount: 79,
      description: 'Avocado+ -> Одна подписка для 10+ приложений',
      data: 'subscription',
      group_id: 197416979,
    },
  });
