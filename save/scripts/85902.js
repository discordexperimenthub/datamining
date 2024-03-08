(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85902"],
  {
    86319: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return u;
          },
        });
      var e = n("559610"),
        a = n("63173");
      function u(t, i, n) {
        (0, e.default)(2, arguments);
        var u = (0, a.default)(t, n),
          r = (0, a.default)(i, n);
        return u.getTime() === r.getTime();
      }
    },
    320982: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          toDate: function () {
            return e.default;
          },
        });
      var e = n("386242"),
        a = n("987482");
      n.es(a, i);
    },
    780179: function (t, i, n) {
      "use strict";
      function e(t, i) {
        if (void 0 !== t.one && 1 === i) return t.one;
        var n = i % 10,
          e = i % 100;
        return 1 === n && 11 !== e
          ? t.singularNominative.replace("{{count}}", String(i))
          : n >= 2 && n <= 4 && (e < 10 || e > 20)
            ? t.singularGenitive.replace("{{count}}", String(i))
            : t.pluralGenitive.replace("{{count}}", String(i));
      }
      function a(t) {
        return function (i, n) {
          if (!n || !n.addSuffix) return e(t.regular, i);
          if (n.comparison && n.comparison > 0)
            return t.future ? e(t.future, i) : "за " + e(t.regular, i);
          return t.past ? e(t.past, i) : e(t.regular, i) + " тому";
        };
      }
      n.r(i),
        n.d(i, {
          default: function () {
            return r;
          },
        }),
        n("781738");
      var u = {
          lessThanXSeconds: a({
            regular: {
              one: "менше секунди",
              singularNominative: "менше {{count}} секунди",
              singularGenitive: "менше {{count}} секунд",
              pluralGenitive: "менше {{count}} секунд",
            },
            future: {
              one: "менше, ніж за секунду",
              singularNominative: "менше, ніж за {{count}} секунду",
              singularGenitive: "менше, ніж за {{count}} секунди",
              pluralGenitive: "менше, ніж за {{count}} секунд",
            },
          }),
          xSeconds: a({
            regular: {
              singularNominative: "{{count}} секунда",
              singularGenitive: "{{count}} секунди",
              pluralGenitive: "{{count}} секунд",
            },
            past: {
              singularNominative: "{{count}} секунду тому",
              singularGenitive: "{{count}} секунди тому",
              pluralGenitive: "{{count}} секунд тому",
            },
            future: {
              singularNominative: "за {{count}} секунду",
              singularGenitive: "за {{count}} секунди",
              pluralGenitive: "за {{count}} секунд",
            },
          }),
          halfAMinute: function (t, i) {
            if (i && i.addSuffix)
              return i.comparison && i.comparison > 0
                ? "за півхвилини"
                : "півхвилини тому";
            return "півхвилини";
          },
          lessThanXMinutes: a({
            regular: {
              one: "менше хвилини",
              singularNominative: "менше {{count}} хвилини",
              singularGenitive: "менше {{count}} хвилин",
              pluralGenitive: "менше {{count}} хвилин",
            },
            future: {
              one: "менше, ніж за хвилину",
              singularNominative: "менше, ніж за {{count}} хвилину",
              singularGenitive: "менше, ніж за {{count}} хвилини",
              pluralGenitive: "менше, ніж за {{count}} хвилин",
            },
          }),
          xMinutes: a({
            regular: {
              singularNominative: "{{count}} хвилина",
              singularGenitive: "{{count}} хвилини",
              pluralGenitive: "{{count}} хвилин",
            },
            past: {
              singularNominative: "{{count}} хвилину тому",
              singularGenitive: "{{count}} хвилини тому",
              pluralGenitive: "{{count}} хвилин тому",
            },
            future: {
              singularNominative: "за {{count}} хвилину",
              singularGenitive: "за {{count}} хвилини",
              pluralGenitive: "за {{count}} хвилин",
            },
          }),
          aboutXHours: a({
            regular: {
              singularNominative: "близько {{count}} години",
              singularGenitive: "близько {{count}} годин",
              pluralGenitive: "близько {{count}} годин",
            },
            future: {
              singularNominative: "приблизно за {{count}} годину",
              singularGenitive: "приблизно за {{count}} години",
              pluralGenitive: "приблизно за {{count}} годин",
            },
          }),
          xHours: a({
            regular: {
              singularNominative: "{{count}} годину",
              singularGenitive: "{{count}} години",
              pluralGenitive: "{{count}} годин",
            },
          }),
          xDays: a({
            regular: {
              singularNominative: "{{count}} день",
              singularGenitive: "{{count}} днi",
              pluralGenitive: "{{count}} днів",
            },
          }),
          aboutXWeeks: a({
            regular: {
              singularNominative: "близько {{count}} тижня",
              singularGenitive: "близько {{count}} тижнів",
              pluralGenitive: "близько {{count}} тижнів",
            },
            future: {
              singularNominative: "приблизно за {{count}} тиждень",
              singularGenitive: "приблизно за {{count}} тижні",
              pluralGenitive: "приблизно за {{count}} тижнів",
            },
          }),
          xWeeks: a({
            regular: {
              singularNominative: "{{count}} тиждень",
              singularGenitive: "{{count}} тижні",
              pluralGenitive: "{{count}} тижнів",
            },
          }),
          aboutXMonths: a({
            regular: {
              singularNominative: "близько {{count}} місяця",
              singularGenitive: "близько {{count}} місяців",
              pluralGenitive: "близько {{count}} місяців",
            },
            future: {
              singularNominative: "приблизно за {{count}} місяць",
              singularGenitive: "приблизно за {{count}} місяці",
              pluralGenitive: "приблизно за {{count}} місяців",
            },
          }),
          xMonths: a({
            regular: {
              singularNominative: "{{count}} місяць",
              singularGenitive: "{{count}} місяці",
              pluralGenitive: "{{count}} місяців",
            },
          }),
          aboutXYears: a({
            regular: {
              singularNominative: "близько {{count}} року",
              singularGenitive: "близько {{count}} років",
              pluralGenitive: "близько {{count}} років",
            },
            future: {
              singularNominative: "приблизно за {{count}} рік",
              singularGenitive: "приблизно за {{count}} роки",
              pluralGenitive: "приблизно за {{count}} років",
            },
          }),
          xYears: a({
            regular: {
              singularNominative: "{{count}} рік",
              singularGenitive: "{{count}} роки",
              pluralGenitive: "{{count}} років",
            },
          }),
          overXYears: a({
            regular: {
              singularNominative: "більше {{count}} року",
              singularGenitive: "більше {{count}} років",
              pluralGenitive: "більше {{count}} років",
            },
            future: {
              singularNominative: "більше, ніж за {{count}} рік",
              singularGenitive: "більше, ніж за {{count}} роки",
              pluralGenitive: "більше, ніж за {{count}} років",
            },
          }),
          almostXYears: a({
            regular: {
              singularNominative: "майже {{count}} рік",
              singularGenitive: "майже {{count}} роки",
              pluralGenitive: "майже {{count}} років",
            },
            future: {
              singularNominative: "майже за {{count}} рік",
              singularGenitive: "майже за {{count}} роки",
              pluralGenitive: "майже за {{count}} років",
            },
          }),
        },
        r = function (t, i, n) {
          return (n = n || {}), u[t](i, n);
        };
    },
    408484: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return a;
          },
        });
      var e = n("818985"),
        a = {
          date: (0, e.default)({
            formats: {
              full: "EEEE, do MMMM y 'р.'",
              long: "do MMMM y 'р.'",
              medium: "d MMM y 'р.'",
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
            formats: {
              full: "{{date}} 'о' {{time}}",
              long: "{{date}} 'о' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    602543: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return l;
          },
        });
      var e = n("320982"),
        a = n("86319"),
        u = [
          "неділю",
          "понеділок",
          "вівторок",
          "середу",
          "четвер",
          "п’ятницю",
          "суботу",
        ];
      function r(t) {
        return "'у " + u[t] + " о' p";
      }
      var o = {
          lastWeek: function (t, i, n) {
            var o = (0, e.toDate)(t),
              l = o.getUTCDay();
            return (0, a.default)(o, i, n)
              ? r(l)
              : (function (t) {
                  var i = u[t];
                  switch (t) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                      return "'у минулу " + i + " о' p";
                    case 1:
                    case 2:
                    case 4:
                      return "'у минулий " + i + " о' p";
                  }
                })(l);
          },
          yesterday: "'вчора о' p",
          today: "'сьогодні о' p",
          tomorrow: "'завтра о' p",
          nextWeek: function (t, i, n) {
            var o = (0, e.toDate)(t),
              l = o.getUTCDay();
            return (0, a.default)(o, i, n)
              ? r(l)
              : (function (t) {
                  var i = u[t];
                  switch (t) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                      return "'у наступну " + i + " о' p";
                    case 1:
                    case 2:
                    case 4:
                      return "'у наступний " + i + " о' p";
                  }
                })(l);
          },
          other: "P",
        },
        l = function (t, i, n, e) {
          var a = o[t];
          return "function" == typeof a ? a(i, n, e) : a;
        };
    },
    655010: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return a;
          },
        });
      var e = n("64273"),
        a = {
          ordinalNumber: function (t, i) {
            var n,
              e = String(null == i ? void 0 : i.unit),
              a = Number(t);
            return (
              (n =
                "date" === e
                  ? 3 === a || 23 === a
                    ? "-є"
                    : "-е"
                  : "minute" === e || "second" === e || "hour" === e
                    ? "-а"
                    : "-й"),
              a + n
            );
          },
          era: (0, e.default)({
            values: {
              narrow: ["до н.е.", "н.е."],
              abbreviated: ["до н. е.", "н. е."],
              wide: ["до нашої ери", "нашої ери"],
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
            argumentCallback: function (t) {
              return t - 1;
            },
          }),
          month: (0, e.default)({
            values: {
              narrow: [
                "С",
                "Л",
                "Б",
                "К",
                "Т",
                "Ч",
                "Л",
                "С",
                "В",
                "Ж",
                "Л",
                "Г",
              ],
              abbreviated: [
                "січ.",
                "лют.",
                "берез.",
                "квіт.",
                "трав.",
                "черв.",
                "лип.",
                "серп.",
                "верес.",
                "жовт.",
                "листоп.",
                "груд.",
              ],
              wide: [
                "січень",
                "лютий",
                "березень",
                "квітень",
                "травень",
                "червень",
                "липень",
                "серпень",
                "вересень",
                "жовтень",
                "листопад",
                "грудень",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "С",
                "Л",
                "Б",
                "К",
                "Т",
                "Ч",
                "Л",
                "С",
                "В",
                "Ж",
                "Л",
                "Г",
              ],
              abbreviated: [
                "січ.",
                "лют.",
                "берез.",
                "квіт.",
                "трав.",
                "черв.",
                "лип.",
                "серп.",
                "верес.",
                "жовт.",
                "листоп.",
                "груд.",
              ],
              wide: [
                "січня",
                "лютого",
                "березня",
                "квітня",
                "травня",
                "червня",
                "липня",
                "серпня",
                "вересня",
                "жовтня",
                "листопада",
                "грудня",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, e.default)({
            values: {
              narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
              short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
              abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
              wide: [
                "неділя",
                "понеділок",
                "вівторок",
                "середа",
                "четвер",
                "п’ятниця",
                "субота",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, e.default)({
            values: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранок",
                afternoon: "день",
                evening: "веч.",
                night: "ніч",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранок",
                afternoon: "день",
                evening: "веч.",
                night: "ніч",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "північ",
                noon: "полудень",
                morning: "ранок",
                afternoon: "день",
                evening: "вечір",
                night: "ніч",
              },
            },
            defaultWidth: "any",
            formattingValues: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "північ",
                noon: "полудень",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    11469: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return u;
          },
        });
      var e = n("713289"),
        a = n("504435"),
        u = {
          ordinalNumber: (0, a.default)({
            matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, e.default)({
            matchPatterns: {
              narrow: /^((до )?н\.?\s?е\.?)/i,
              abbreviated: /^((до )?н\.?\s?е\.?)/i,
              wide: /^(до нашої ери|нашої ери|наша ера)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^д/i, /^н/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, e.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
              wide: /^[1234](-?[иі]?й?)? квартал/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, e.default)({
            matchPatterns: {
              narrow: /^[слбктчвжг]/i,
              abbreviated:
                /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
              wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^с/i,
                /^л/i,
                /^б/i,
                /^к/i,
                /^т/i,
                /^ч/i,
                /^л/i,
                /^с/i,
                /^в/i,
                /^ж/i,
                /^л/i,
                /^г/i,
              ],
              any: [
                /^сі/i,
                /^лю/i,
                /^б/i,
                /^к/i,
                /^т/i,
                /^ч/i,
                /^лип/i,
                /^се/i,
                /^в/i,
                /^ж/i,
                /^лис/i,
                /^г/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, e.default)({
            matchPatterns: {
              narrow: /^[нпвсч]/i,
              short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
              abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
              wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [
                /^н/i,
                /^п[он]/i,
                /^в/i,
                /^с[ер]/i,
                /^ч/i,
                /^п\W*?[ят]/i,
                /^с[уб]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, e.default)({
            matchPatterns: {
              narrow:
                /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
              abbreviated:
                /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
              wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^дп/i,
                pm: /^пп/i,
                midnight: /^півн/i,
                noon: /^пол/i,
                morning: /^р/i,
                afternoon: /^д[ен]/i,
                evening: /^в/i,
                night: /^н/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    25262: function (t, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return l;
          },
        });
      var e = n("780179"),
        a = n("408484"),
        u = n("602543"),
        r = n("655010"),
        o = n("11469"),
        l = {
          code: "uk",
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
//# sourceMappingURL=27efbc80a053593fc493.js.map
