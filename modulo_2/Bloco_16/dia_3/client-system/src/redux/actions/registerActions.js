import { NAME, AGE, EMAIL, USER } from './actionsTypes';

export const nameRegister = (name) => ({
  type: NAME,
  name,
})

export const ageRegister = (age) => ({
  type: AGE,
  age,
});

export const emailRegister = (email) => ({
  type: EMAIL,
  email,
})

export const userRegister = (user) => ({
  type: USER,
  user,
})
