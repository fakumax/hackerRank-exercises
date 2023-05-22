export function timeConversion(s) {
  let time = s.split(':');

  if (time[2].includes('AM')) {
    if (time[0] === '12') {
      time[0] = '00';
    }
    time[2] = time[2].replace('AM', '');
  }
  if (time[2].includes('PM')) {
    if (time[0] !== '12') {
      time[0] = (parseInt(time[0]) + 12).toString();
    }
    time[2] = time[2].replace('PM', '');
  }
  return time.join(':');
}
