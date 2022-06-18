1. используем pnpm, а не ебучий npm. 
Для установки:

```
npm install -g pnpm
```
2. pnpm install
3. пихаем svg иконку в `src/ui/horizontall-apps/apps-svg`
4. добавляем импорт иконки в `src/ui/horizontall-apps/index.tsx`
5. расширяем `export enum AppName` в `src/ui/horizontall-apps/types.ts` и `src/ui/horizontall-apps/constants.ts` 
6. создаем pull request
7. ???
8. profit

# Как добавить в приложение

```js
<iframe
  src={`https://avocadoteam.github.io/app-sub-modal/?appearance=${appearance}`}
  style={{ height: 'calc(100vh - 120px)', border: 0 }}
  width="100%"
/>
```

## Параметры прилы

1. `appearance` - `dark | light` - default -> `light`
2. `app` - `AppName` - default -> `friends`