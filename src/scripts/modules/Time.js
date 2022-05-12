// import {name} from './name.js';

//* *******************************************************************
//*
//*     const time = new Time();
//*
//*     SET:
//*         time.setDaysType = 'English';
//*             'English'   - [`Sunday`, `Monday`, `Tuesday`, `Wednesday`,
//*                            `Thursday`, `Friday`, `Saturday`]
//*             'Eng'       - [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]
//*             'ENG'       - [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`]
//*             'Ukrainian' - [`Наділя`, `Понеділок`, `Вівторок`, `Середа`,
//*                            `Четвер`, `П'ятниця`, `Субота`]
//*             'Ua'        - [`Нд`, `Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`]
//*             'UA'        - [`НД`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`]
//*         time.setDays = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`,
//*                          `Thursday`, `Friday`, `Saturday`];
//*
//*         time.setMonthsType = 'NUM';
//*             'NUM'       - [`01`, `02`, `03`, `04`, `05`, `06`, `07`,
//*                            `08`, `09`, `10`, `11`, `12`];
//*             'English'   - [`January`, `February`, `March`, `April`, `May`, `June`,
//*                            `July`, `August`, `September`, `October`, `November`, `December`]
//*             'Eng'       - [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `June`, `July`,
//*                            `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
//*             'ENG'       -
//*             'Ukrainian' - [`Січень`, `Лютий`, `Березень`, `Квітень`, `Травень`, `Червень`,
//*                            `Липень`, `Серпень`, `Вересень`, `Жовтень`, `Листопад`, `Грудень`]
//*             'Ua'        -
//*             'UA'        -
//*         time.setMonth = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,
//*                          `August`, `September`, `October`, `November`, `December`]
//*
//*         time.setDateSeparator = '.';
//*         time.setTimeSeparator = ':';
//*
//*         time.reset();
//*
//*     GET:
//*         time.YYYY   // Year
//*         time.MM     // Month
//*         time.DD     // Day
//*         time.hhUTC  // Hours GMT=0
//*         time.hh     // Hours
//*         time.mm     // Minutes
//*         time.ss     // Seconde
//*         time.mmm    // Millisecons
//*         time.dd     // Day of the week
//*
//*         time.fullDate       // 2022.03.24 16:21:49 (Thursday)
//*         time.hhmmss         // 16:21:49
//*         time.hhmm           // 16:21
//*         time.fullDateUTC    // 2022.03.24 16:21:49 (Thursday)
//*         time.hhmmssUTC      // 16:21:49
//*         time.hhmmUTC        // 16:21
//*         time.YYYYMMDD       // 2022.03.24
//*         time.DDdd           // 24 Thursday
//*
//* *******************************************************************/

// >----------------------------------------------------------------<
// >                             CLASS                              <
// >----------------------------------------------------------------<

class Time {
//   constructor() {

  //   }

  addTimeForwardZero(num) {
    this.num = num;
    return this.num < 10 ? `0${this.num}` : this.num;
  }

  addTimeForwardTwoZeros(num) {
    this.num = num;
    if (this.num < 100) {
      if (this.num < 10) {
        return `00${this.num}`;
      }
      return `0${this.num}`;
    }
    return +this.num;

    // return this.num < 100 ? (this.num < 10 ? `00${this.num}` : `0${this.num}`) : +this.num;
  }

  // ^------------------------ main function ------------------------
  getUserDate() {
    const date = new Date();
    let daysType = 'English';
    let monthsType = 'NUM';

    // if (typeof date === 'number') date = new Date(date);

    let days = [];

    if (this.days) {
      days = this.days;
    } else {
      daysType = this.daysType ?? daysType;

      if (daysType === 'Eng' || daysType === 'ENG') {
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      } else if (daysType === 'Ukrainian' || daysType === 'UKRAINIAN') {
        days = ['Наділя', 'Понеділок', 'Вівторок',
          'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
      } else if (daysType === 'Ua' || daysType === 'UA') {
        days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
      } else if (daysType === 'Num' || daysType === 'NUM') {
        days = ['01', '02', '03', '04', '05', '06', '07'];
      } else {
        days = ['Sunday', 'Monday', 'Tuesday',
          'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      }
    }

    let months = [];

    if (this.months) {
      months = this.months;
    } else {
      monthsType = this.monthsType ?? monthsType;

      if (monthsType === 'English' || monthsType === 'ENGLISH') {
        months = ['January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'];
      } else if (monthsType === 'Eng' || monthsType === 'ENG') {
        months = ['Jan', 'Feb', 'Mar', 'Apr',
          'May', 'June', 'July', 'Aug',
          'Sept', 'Oct', 'Nov', 'Dec'];
      } else if (monthsType === 'Ukrainian' || monthsType === 'UKRAINIAN') {
        months = ['Січень', 'Лютий', 'Березень', 'Квітень',
          'Травень', 'Червень', 'Липень', 'Серпень',
          'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
      } else if (monthsType === 'Ua' || monthsType === 'UA') {
        months = ['Січ', 'Лют', 'Бер', 'Квіт',
          'Трав', 'Черв', 'Лип', 'Серп',
          'Вер', 'Жовт', 'Лист', 'Груд'];
      } else {
        months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      }
    }

    const YYYY = date.getFullYear().toString();
    let MM = months[date.getMonth()].toString();
    const DD = this.addTimeForwardZero(date.getDate()).toString();

    let dd = days[date.getDay()].toString();

    const hhUTC = this.addTimeForwardZero(date.getUTCHours()).toString();

    const hh = this.addTimeForwardZero(date.getHours()).toString();
    const mm = this.addTimeForwardZero(date.getMinutes()).toString();
    const ss = this.addTimeForwardZero(date.getSeconds()).toString();
    const mmm = this.addTimeForwardTwoZeros(date.getMilliseconds()).toString();

    if (monthsType === 'ENGLISH' || monthsType === 'ENG'
            || monthsType === 'UKRAINIAN' || monthsType === 'UA') {
      MM = MM.toUpperCase();
    }

    if (daysType === 'ENGLISH' || daysType === 'ENG'
            || daysType === 'UKRAINIAN' || daysType === 'UA') {
      dd = dd.toUpperCase();
    }

    return {
      YYYY,
      MM,
      DD,
      hhUTC,
      hh,
      mm,
      ss,
      mmm,
      dd,
    };
  }

  // ^------------------------ others ------------------------

  reset() {
    this.days = undefined;
    this.months = undefined;
    this.daysType = undefined;
    this.monthsType = undefined;
    this.dataSeparator = undefined;
    this.timeSeparator = undefined;
  }

  // ^------------------------ setters ------------------------

  set setDays(days) { this.days = [...days]; }

  set setDaysType(daysType) { this.daysType = daysType; }

  set setMonths(months) { this.months = [...months]; }

  set setMonthsType(monthsType) { this.monthsType = monthsType; }

  set setDateSeparator(separator) { this.dataSeparator = separator; }

  set setTimeSeparator(separator) { this.timeSeparator = separator; }

  // ^------------------------ getters ------------------------

  get YYYY() { return this.getUserDate().YYYY; }

  get MM() { return this.getUserDate().MM; }

  get DD() { return this.getUserDate().DD; }

  get dd() { return this.getUserDate().dd; }

  get hhUTC() { return this.getUserDate().hhUTC; }

  get hh() { return this.getUserDate().hh; }

  get mm() { return this.getUserDate().mm; }

  get ss() { return this.getUserDate().ss; }

  get mmm() { return this.getUserDate().mmm; }

  get fullDate() {
    const date = this.getUserDate();
    const ds = this.dataSeparator ?? '.';
    const ts = this.timeSeparator ?? ':';
    return `${date.YYYY}${ds}${date.MM}${ds}${date.DD} ${date.hh}${ts}${date.mm}${ts}${date.ss} (${date.dd})`;
  }

  get hhmmss() {
    const date = this.getUserDate();
    const ts = this.timeSeparator ?? ':';
    return `${date.hh}${ts}${date.mm}${ts}${date.ss}`;
  }

  get hhmm() {
    const date = this.getUserDate();
    const ts = this.timeSeparator ?? ':';
    return `${date.hh}${ts}${date.mm}`;
  }

  get fullDateUTC() {
    const date = this.getUserDate();
    const ds = this.dataSeparator ?? '.';
    const ts = this.timeSeparator ?? ':';
    return `${date.YYYY}${ds}${date.MM}${ds}${date.DD} ${date.hhUTC}${ts}${date.mm}${ts}${date.ss} (${date.dd})`;
  }

  get hhmmssUTC() {
    const date = this.getUserDate();
    const ts = this.timeSeparator ?? ':';
    return `${date.hhUTC}${ts}${date.mm}${ts}${date.ss}`;
  }

  get hhmmUTC() {
    const date = this.getUserDate();
    const ts = this.timeSeparator ?? ':';
    return `${date.hhUTC}${ts}${date.mm}`;
  }

  get YYYYMMDD() {
    const date = this.getUserDate();
    const ds = this.dataSeparator ?? '.';
    return `${date.YYYY}${ds}${date.MM}${ds}${date.DD}`;
  }

  get DDdd() {
    const date = this.getUserDate();
    return `${date.DD} ${date.dd}`;
  }
}

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export default Time;
