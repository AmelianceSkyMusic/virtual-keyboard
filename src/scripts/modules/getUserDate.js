import addTimeForwardZero from './addTimeForwardZero';

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function getUserDate(d = new Date(), daysType = 'English') {
  let date = d;
  if (typeof date === 'number') date = new Date(d);

  let days = [];

  if (daysType === 'Eng') {
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  } else if (daysType === 'ENG') {
    days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  } else if (daysType === 'Ukraine') {
    days = ['Наділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
  } else if (daysType === 'Ua') {
    days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  } else if (daysType === 'UA') {
    days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  } else {
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  const YYYY = date.getFullYear().toString();
  const MM = addTimeForwardZero(date.getMonth() + 1).toString();
  const DD = addTimeForwardZero(date.getDate()).toString();

  const dd = days[date.getDay()].toString();

  const hhUTC = addTimeForwardZero(date.getUTCHours()).toString();

  const hh = addTimeForwardZero(date.getHours()).toString();
  const mm = addTimeForwardZero(date.getMinutes()).toString();
  const ss = addTimeForwardZero(date.getSeconds()).toString();
  const mls = addTimeForwardZero(date.getMilliseconds()).toString();

  return {
    fullDate: `${YYYY}.${MM}.${DD} ${hh}:${mm}:${ss} (${dd})`,
    hhmmss: `${hh}:${mm}:${ss}`,
    hhmm: `${hh}:${mm}`,

    fullDateUTC: `${YYYY}.${MM}.${DD} ${hhUTC}:${mm}:${ss} (${dd})`,
    hhmmssUTC: `${hhUTC}:${mm}:${ss}`,
    hhmmUTC: `${hhUTC}:${mm}`,

    YYYYMMDD: `${YYYY}.${MM}.${DD}`,
    DDdd: `${DD} ${dd}`,

    YYYY,
    MM,
    DD,
    hhUTC,
    hh,
    mm,
    ss,
    mls,
    dd,
  };
}

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export default getUserDate;
