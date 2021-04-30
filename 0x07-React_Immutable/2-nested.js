import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const val = fromJS(object);

  return val.getIn(array, undefined);
}