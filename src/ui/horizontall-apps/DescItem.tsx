import { Avatar, Cell, Text } from '@vkontakte/vkui';
import { dAva, dSubTitle, dTitle } from './styles.css';
import { AppContent } from './types';

type Props = AppContent;

export const DescItem = ({ Icon, subTitle, title }: Props) => {
  return (
    <Cell
      multiline
      hasActive={false}
      hasHover={false}
      before={
        <Avatar size={44} className={dAva}>
          <Icon />
        </Avatar>
      }
    >
      <Text weight="3" className={dTitle}>
        {title}
      </Text>
      <Text weight="3" className={dSubTitle}>
        {subTitle}
      </Text>
    </Cell>
  );
};
