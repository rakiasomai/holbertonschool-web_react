import immutable from 'immutable';

const { fromJS } = immutable;

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;