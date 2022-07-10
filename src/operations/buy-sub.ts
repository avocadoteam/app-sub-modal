export const buySub = () =>
  window.parent.postMessage(
    JSON.stringify({
      message: 'avo-open-payment',
      payload: {
        app_id: 7511650,
        action: 'pay-to-group',
        params: {
          amount: 79,
          description: 'Avocado+ -> Одна подписка для 10+ приложений',
          data: 'subscription',
          group_id: 197416979,
        },
      },
    }),
    '*',
  );
