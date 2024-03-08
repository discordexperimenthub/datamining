(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22629"],
  {
    86319: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return u;
          },
        });
      var e = t("559610"),
        a = t("63173");
      function u(n, i, t) {
        (0, e.default)(2, arguments);
        var u = (0, a.default)(n, t),
          r = (0, a.default)(i, t);
        return u.getTime() === r.getTime();
      }
    },
    209919: function (n, i, t) {
      "use strict";
      function e(n, i) {
        if (void 0 !== n.one && 1 === i) return n.one;
        var t = i % 10,
          e = i % 100;
        return 1 === t && 11 !== e
          ? n.singularNominative.replace("{{count}}", String(i))
          : t >= 2 && t <= 4 && (e < 10 || e > 20)
            ? n.singularGenitive.replace("{{count}}", String(i))
            : n.pluralGenitive.replace("{{count}}", String(i));
      }
      function a(n) {
        return function (i, t) {
          if (null == t || !t.addSuffix) return e(n.regular, i);
          if (t.comparison && t.comparison > 0)
            return n.future ? e(n.future, i) : "через " + e(n.regular, i);
          return n.past ? e(n.past, i) : e(n.regular, i) + " назад";
        };
      }
      t.r(i),
        t.d(i, {
          default: function () {
            return r;
          },
        }),
        t("781738");
      var u = {
          lessThanXSeconds: a({
            regular: {
              one: "меньше секунды",
              singularNominative: "меньше {{count}} секунды",
              singularGenitive: "меньше {{count}} секунд",
              pluralGenitive: "меньше {{count}} секунд",
            },
            future: {
              one: "меньше, чем через секунду",
              singularNominative: "меньше, чем через {{count}} секунду",
              singularGenitive: "меньше, чем через {{count}} секунды",
              pluralGenitive: "меньше, чем через {{count}} секунд",
            },
          }),
          xSeconds: a({
            regular: {
              singularNominative: "{{count}} секунда",
              singularGenitive: "{{count}} секунды",
              pluralGenitive: "{{count}} секунд",
            },
            past: {
              singularNominative: "{{count}} секунду назад",
              singularGenitive: "{{count}} секунды назад",
              pluralGenitive: "{{count}} секунд назад",
            },
            future: {
              singularNominative: "через {{count}} секунду",
              singularGenitive: "через {{count}} секунды",
              pluralGenitive: "через {{count}} секунд",
            },
          }),
          halfAMinute: function (n, i) {
            if (null != i && i.addSuffix)
              return i.comparison && i.comparison > 0
                ? "через полминуты"
                : "полминуты назад";
            return "полминуты";
          },
          lessThanXMinutes: a({
            regular: {
              one: "меньше минуты",
              singularNominative: "меньше {{count}} минуты",
              singularGenitive: "меньше {{count}} минут",
              pluralGenitive: "меньше {{count}} минут",
            },
            future: {
              one: "меньше, чем через минуту",
              singularNominative: "меньше, чем через {{count}} минуту",
              singularGenitive: "меньше, чем через {{count}} минуты",
              pluralGenitive: "меньше, чем через {{count}} минут",
            },
          }),
          xMinutes: a({
            regular: {
              singularNominative: "{{count}} минута",
              singularGenitive: "{{count}} минуты",
              pluralGenitive: "{{count}} минут",
            },
            past: {
              singularNominative: "{{count}} минуту назад",
              singularGenitive: "{{count}} минуты назад",
              pluralGenitive: "{{count}} минут назад",
            },
            future: {
              singularNominative: "через {{count}} минуту",
              singularGenitive: "через {{count}} минуты",
              pluralGenitive: "через {{count}} минут",
            },
          }),
          aboutXHours: a({
            regular: {
              singularNominative: "около {{count}} часа",
              singularGenitive: "около {{count}} часов",
              pluralGenitive: "около {{count}} часов",
            },
            future: {
              singularNominative: "приблизительно через {{count}} час",
              singularGenitive: "приблизительно через {{count}} часа",
              pluralGenitive: "приблизительно через {{count}} часов",
            },
          }),
          xHours: a({
            regular: {
              singularNominative: "{{count}} час",
              singularGenitive: "{{count}} часа",
              pluralGenitive: "{{count}} часов",
            },
          }),
          xDays: a({
            regular: {
              singularNominative: "{{count}} день",
              singularGenitive: "{{count}} дня",
              pluralGenitive: "{{count}} дней",
            },
          }),
          aboutXWeeks: a({
            regular: {
              singularNominative: "около {{count}} недели",
              singularGenitive: "около {{count}} недель",
              pluralGenitive: "около {{count}} недель",
            },
            future: {
              singularNominative: "приблизительно через {{count}} неделю",
              singularGenitive: "приблизительно через {{count}} недели",
              pluralGenitive: "приблизительно через {{count}} недель",
            },
          }),
          xWeeks: a({
            regular: {
              singularNominative: "{{count}} неделя",
              singularGenitive: "{{count}} недели",
              pluralGenitive: "{{count}} недель",
            },
          }),
          aboutXMonths: a({
            regular: {
              singularNominative: "около {{count}} месяца",
              singularGenitive: "около {{count}} месяцев",
              pluralGenitive: "около {{count}} месяцев",
            },
            future: {
              singularNominative: "приблизительно через {{count}} месяц",
              singularGenitive: "приблизительно через {{count}} месяца",
              pluralGenitive: "приблизительно через {{count}} месяцев",
            },
          }),
          xMonths: a({
            regular: {
              singularNominative: "{{count}} месяц",
              singularGenitive: "{{count}} месяца",
              pluralGenitive: "{{count}} месяцев",
            },
          }),
          aboutXYears: a({
            regular: {
              singularNominative: "около {{count}} года",
              singularGenitive: "около {{count}} лет",
              pluralGenitive: "около {{count}} лет",
            },
            future: {
              singularNominative: "приблизительно через {{count}} год",
              singularGenitive: "приблизительно через {{count}} года",
              pluralGenitive: "приблизительно через {{count}} лет",
            },
          }),
          xYears: a({
            regular: {
              singularNominative: "{{count}} год",
              singularGenitive: "{{count}} года",
              pluralGenitive: "{{count}} лет",
            },
          }),
          overXYears: a({
            regular: {
              singularNominative: "больше {{count}} года",
              singularGenitive: "больше {{count}} лет",
              pluralGenitive: "больше {{count}} лет",
            },
            future: {
              singularNominative: "больше, чем через {{count}} год",
              singularGenitive: "больше, чем через {{count}} года",
              pluralGenitive: "больше, чем через {{count}} лет",
            },
          }),
          almostXYears: a({
            regular: {
              singularNominative: "почти {{count}} год",
              singularGenitive: "почти {{count}} года",
              pluralGenitive: "почти {{count}} лет",
            },
            future: {
              singularNominative: "почти через {{count}} год",
              singularGenitive: "почти через {{count}} года",
              pluralGenitive: "почти через {{count}} лет",
            },
          }),
        },
        r = function (n, i, t) {
          return u[n](i, t);
        };
    },
    41228: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return a;
          },
        });
      var e = t("818985"),
        a = {
          date: (0, e.default)({
            formats: {
              full: "EEEE, d MMMM y 'г.'",
              long: "d MMMM y 'г.'",
              medium: "d MMM y 'г.'",
              short: "dd.MM.y",
            },
            defaultWidth: "full",
          }),
          time: (0, e.default)({
            formats: {
              full: "H:mm:ss zzzz",
              long: "H:mm:ss z",
              medium: "H:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, e.default)({
            formats: { any: "{{date}}, {{time}}" },
            defaultWidth: "any",
          }),
        };
    },
    421095: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return o;
          },
        });
      var e = t("86319"),
        a = [
          "воскресенье",
          "понедельник",
          "вторник",
          "среду",
          "четверг",
          "пятницу",
          "субботу",
        ];
      function u(n) {
        var i = a[n];
        return 2 === n ? "'во " + i + " в' p" : "'в " + i + " в' p";
      }
      var r = {
          lastWeek: function (n, i, t) {
            var r = n.getUTCDay();
            return (0, e.default)(n, i, t)
              ? u(r)
              : (function (n) {
                  var i = a[n];
                  switch (n) {
                    case 0:
                      return "'в прошлое " + i + " в' p";
                    case 1:
                    case 2:
                    case 4:
                      return "'в прошлый " + i + " в' p";
                    case 3:
                    case 5:
                    case 6:
                      return "'в прошлую " + i + " в' p";
                  }
                })(r);
          },
          yesterday: "'вчера в' p",
          today: "'сегодня в' p",
          tomorrow: "'завтра в' p",
          nextWeek: function (n, i, t) {
            var r = n.getUTCDay();
            return (0, e.default)(n, i, t)
              ? u(r)
              : (function (n) {
                  var i = a[n];
                  switch (n) {
                    case 0:
                      return "'в следующее " + i + " в' p";
                    case 1:
                    case 2:
                    case 4:
                      return "'в следующий " + i + " в' p";
                    case 3:
                    case 5:
                    case 6:
                      return "'в следующую " + i + " в' p";
                  }
                })(r);
          },
          other: "P",
        },
        o = function (n, i, t, e) {
          var a = r[n];
          return "function" == typeof a ? a(i, t, e) : a;
        };
    },
    226095: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return a;
          },
        });
      var e = t("64273"),
        a = {
          ordinalNumber: function (n, i) {
            var t,
              e = Number(n),
              a = null == i ? void 0 : i.unit;
            return (
              e +
              (t =
                "date" === a
                  ? "-е"
                  : "week" === a || "minute" === a || "second" === a
                    ? "-я"
                    : "-й")
            );
          },
          era: (0, e.default)({
            values: {
              narrow: ["до н.э.", "н.э."],
              abbreviated: ["до н. э.", "н. э."],
              wide: ["до нашей эры", "нашей эры"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, e.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
              wide: [
                "1-й квартал",
                "2-й квартал",
                "3-й квартал",
                "4-й квартал",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (n) {
              return n - 1;
            },
          }),
          month: (0, e.default)({
            values: {
              narrow: [
                "Я",
                "Ф",
                "М",
                "А",
                "М",
                "И",
                "И",
                "А",
                "С",
                "О",
                "Н",
                "Д",
              ],
              abbreviated: [
                "янв.",
                "фев.",
                "март",
                "апр.",
                "май",
                "июнь",
                "июль",
                "авг.",
                "сент.",
                "окт.",
                "нояб.",
                "дек.",
              ],
              wide: [
                "январь",
                "февраль",
                "март",
                "апрель",
                "май",
                "июнь",
                "июль",
                "август",
                "сентябрь",
                "октябрь",
                "ноябрь",
                "декабрь",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "Я",
                "Ф",
                "М",
                "А",
                "М",
                "И",
                "И",
                "А",
                "С",
                "О",
                "Н",
                "Д",
              ],
              abbreviated: [
                "янв.",
                "фев.",
                "мар.",
                "апр.",
                "мая",
                "июн.",
                "июл.",
                "авг.",
                "сент.",
                "окт.",
                "нояб.",
                "дек.",
              ],
              wide: [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, e.default)({
            values: {
              narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
              short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
              abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
              wide: [
                "воскресенье",
                "понедельник",
                "вторник",
                "среда",
                "четверг",
                "пятница",
                "суббота",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, e.default)({
            values: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "полн.",
                noon: "полд.",
                morning: "утро",
                afternoon: "день",
                evening: "веч.",
                night: "ночь",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "полн.",
                noon: "полд.",
                morning: "утро",
                afternoon: "день",
                evening: "веч.",
                night: "ночь",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "полночь",
                noon: "полдень",
                morning: "утро",
                afternoon: "день",
                evening: "вечер",
                night: "ночь",
              },
            },
            defaultWidth: "any",
            formattingValues: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "полн.",
                noon: "полд.",
                morning: "утра",
                afternoon: "дня",
                evening: "веч.",
                night: "ночи",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "полн.",
                noon: "полд.",
                morning: "утра",
                afternoon: "дня",
                evening: "веч.",
                night: "ночи",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "полночь",
                noon: "полдень",
                morning: "утра",
                afternoon: "дня",
                evening: "вечера",
                night: "ночи",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    837086: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return u;
          },
        });
      var e = t("713289"),
        a = t("504435"),
        u = {
          ordinalNumber: (0, a.default)({
            matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (n) {
              return parseInt(n, 10);
            },
          }),
          era: (0, e.default)({
            matchPatterns: {
              narrow: /^((до )?н\.?\s?э\.?)/i,
              abbreviated: /^((до )?н\.?\s?э\.?)/i,
              wide: /^(до нашей эры|нашей эры|наша эра)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^д/i, /^н/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, e.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
              wide: /^[1234](-?[ыои]?й?)? квартал/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (n) {
              return n + 1;
            },
          }),
          month: (0, e.default)({
            matchPatterns: {
              narrow: /^[яфмаисонд]/i,
              abbreviated:
                /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
              wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^я/i,
                /^ф/i,
                /^м/i,
                /^а/i,
                /^м/i,
                /^и/i,
                /^и/i,
                /^а/i,
                /^с/i,
                /^о/i,
                /^н/i,
                /^я/i,
              ],
              any: [
                /^я/i,
                /^ф/i,
                /^мар/i,
                /^ап/i,
                /^ма[йя]/i,
                /^июн/i,
                /^июл/i,
                /^ав/i,
                /^с/i,
                /^о/i,
                /^н/i,
                /^д/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, e.default)({
            matchPatterns: {
              narrow: /^[впсч]/i,
              short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
              abbreviated:
                /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
              wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [
                /^в[ос]/i,
                /^п[он]/i,
                /^в/i,
                /^ср/i,
                /^ч/i,
                /^п[ят]/i,
                /^с[уб]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, e.default)({
            matchPatterns: {
              narrow:
                /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
              abbreviated:
                /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
              wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^дп/i,
                pm: /^пп/i,
                midnight: /^полн/i,
                noon: /^полд/i,
                morning: /^у/i,
                afternoon: /^д[ен]/i,
                evening: /^в/i,
                night: /^н/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    510376: function (n, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return l;
          },
        });
      var e = t("209919"),
        a = t("41228"),
        u = t("421095"),
        r = t("226095"),
        o = t("837086"),
        l = {
          code: "ru",
          formatDistance: e.default,
          formatLong: a.default,
          formatRelative: u.default,
          localize: r.default,
          match: o.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
    },
  },
]);
//# sourceMappingURL=f0a61795c2a1704dc648.js.map
