import moment from 'moment';

export function momentDateTime(value) {
  return moment(new Date(value));
}
