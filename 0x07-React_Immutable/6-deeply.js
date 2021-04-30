import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const numf = Map(page1);
  const nums = Map(page2);

  return (numf.mergeDeep(nums));
}
