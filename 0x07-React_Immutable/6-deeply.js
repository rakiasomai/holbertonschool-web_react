import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const num_1 = Map(page1);
  const num_2 = Map(page2);

  return (num_1.mergeDeep(num_2));
}
