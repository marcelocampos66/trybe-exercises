import { ABSTRACT, OFFICE, DESCRIPTION } from '../types';

export const abstractAction = (abstract) => ({
  type: ABSTRACT,
  abstract,
});

export const officeAction = (office) => ({
  type: OFFICE,
  office,
});

export const descriptionAction = (description) => ({
  type: DESCRIPTION,
  description,
});
