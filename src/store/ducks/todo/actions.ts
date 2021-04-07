
import { action } from 'typesafe-actions';
import { TodoTypes } from './types';

export const addItem = (name: String): { type: TodoTypes.ADD_ITEM } =>
  action(TodoTypes.ADD_ITEM, { name });

export const delItem = (name: String): { type: TodoTypes.DEL_ITEM } =>
  action(TodoTypes.DEL_ITEM, { name });