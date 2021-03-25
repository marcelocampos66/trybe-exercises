import { DISABLE } from '../types';

const disableAction = (bool) => ({
  type: DISABLE,
  disable: bool,
});

export default disableAction;
