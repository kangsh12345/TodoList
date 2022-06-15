import { useIndexContainer } from './useIndexContainer';

export const IndexContainer = () => {
  const { world } = useIndexContainer();
  return <>Hello {world}!</>;
};
