(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52401"],
  {
    86319: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return i;
          },
        });
      var n = a("559610"),
        r = a("63173");
      function i(t, e, a) {
        (0, n.default)(2, arguments);
        var i = (0, r.default)(t, a),
          u = (0, r.default)(e, a);
        return i.getTime() === u.getTime();
      }
    },
    234547: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return r;
          },
        }),
        a("781738");
      var n = {
          lessThanXSeconds: {
            one: "по-малко от секунда",
            other: "по-малко от {{count}} секунди",
          },
          xSeconds: { one: "1 секунда", other: "{{count}} секунди" },
          halfAMinute: "половин минута",
          lessThanXMinutes: {
            one: "по-малко от минута",
            other: "по-малко от {{count}} минути",
          },
          xMinutes: { one: "1 минута", other: "{{count}} минути" },
          aboutXHours: { one: "около час", other: "около {{count}} часа" },
          xHours: { one: "1 час", other: "{{count}} часа" },
          xDays: { one: "1 ден", other: "{{count}} дни" },
          aboutXWeeks: {
            one: "около седмица",
            other: "около {{count}} седмици",
          },
          xWeeks: { one: "1 седмица", other: "{{count}} седмици" },
          aboutXMonths: { one: "около месец", other: "около {{count}} месеца" },
          xMonths: { one: "1 месец", other: "{{count}} месеца" },
          aboutXYears: { one: "около година", other: "около {{count}} години" },
          xYears: { one: "1 година", other: "{{count}} години" },
          overXYears: { one: "над година", other: "над {{count}} години" },
          almostXYears: {
            one: "почти година",
            other: "почти {{count}} години",
          },
        },
        r = function (t, e, a) {
          var r,
            i = n[t];
          if (
            ((r =
              "string" == typeof i
                ? i
                : 1 === e
                  ? i.one
                  : i.other.replace("{{count}}", String(e))),
            null != a && a.addSuffix)
          )
            return a.comparison && a.comparison > 0
              ? "след " + r
              : "преди " + r;
          return r;
        };
    },
    105973: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return r;
          },
        });
      var n = a("818985"),
        r = {
          date: (0, n.default)({
            formats: {
              full: "EEEE, dd MMMM yyyy",
              long: "dd MMMM yyyy",
              medium: "dd MMM yyyy",
              short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, n.default)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, n.default)({
            formats: { any: "{{date}} {{time}}" },
            defaultWidth: "any",
          }),
        };
    },
    164563: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return d;
          },
        });
      var n = a("386242"),
        r = a("86319"),
        i = [
          "неделя",
          "понеделник",
          "вторник",
          "сряда",
          "четвъртък",
          "петък",
          "събота",
        ];
      function u(t) {
        var e = i[t];
        return 2 === t ? "'във " + e + " в' p" : "'в " + e + " в' p";
      }
      var o = {
          lastWeek: function (t, e, a) {
            var o = (0, n.default)(t),
              d = o.getUTCDay();
            return (0, r.default)(o, e, a)
              ? u(d)
              : (function (t) {
                  var e = i[t];
                  switch (t) {
                    case 0:
                    case 3:
                    case 6:
                      return "'миналата " + e + " в' p";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                      return "'миналия " + e + " в' p";
                  }
                })(d);
          },
          yesterday: "'вчера в' p",
          today: "'днес в' p",
          tomorrow: "'утре в' p",
          nextWeek: function (t, e, a) {
            var o = (0, n.default)(t),
              d = o.getUTCDay();
            return (0, r.default)(o, e, a)
              ? u(d)
              : (function (t) {
                  var e = i[t];
                  switch (t) {
                    case 0:
                    case 3:
                    case 6:
                      return "'следващата " + e + " в' p";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                      return "'следващия " + e + " в' p";
                  }
                })(d);
          },
          other: "P",
        },
        d = function (t, e, a, n) {
          var r = o[t];
          return "function" == typeof r ? r(e, a, n) : r;
        };
    },
    140614: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return i;
          },
        });
      var n = a("64273");
      function r(t, e, a, n, r) {
        var i;
        return (
          t +
          "-" +
          ("quarter" === e
            ? r
            : "year" === (i = e) ||
                "week" === i ||
                "minute" === i ||
                "second" === i
              ? n
              : a)
        );
      }
      var i = {
        ordinalNumber: function (t, e) {
          var a = Number(t),
            n = null == e ? void 0 : e.unit;
          if (0 === a) return r(0, n, "ев", "ева", "ево");
          if (a % 1e3 == 0) return r(a, n, "ен", "на", "но");
          if (a % 100 == 0) return r(a, n, "тен", "тна", "тно");
          var i = a % 100;
          if (i > 20 || i < 10)
            switch (i % 10) {
              case 1:
                return r(a, n, "ви", "ва", "во");
              case 2:
                return r(a, n, "ри", "ра", "ро");
              case 7:
              case 8:
                return r(a, n, "ми", "ма", "мо");
            }
          return r(a, n, "ти", "та", "то");
        },
        era: (0, n.default)({
          values: {
            narrow: ["пр.н.е.", "н.е."],
            abbreviated: ["преди н. е.", "н. е."],
            wide: ["преди новата ера", "новата ера"],
          },
          defaultWidth: "wide",
        }),
        quarter: (0, n.default)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: [
              "1-во тримес.",
              "2-ро тримес.",
              "3-то тримес.",
              "4-то тримес.",
            ],
            wide: [
              "1-во тримесечие",
              "2-ро тримесечие",
              "3-то тримесечие",
              "4-то тримесечие",
            ],
          },
          defaultWidth: "wide",
          argumentCallback: function (t) {
            return t - 1;
          },
        }),
        month: (0, n.default)({
          values: {
            abbreviated: [
              "яну",
              "фев",
              "мар",
              "апр",
              "май",
              "юни",
              "юли",
              "авг",
              "сеп",
              "окт",
              "ное",
              "дек",
            ],
            wide: [
              "януари",
              "февруари",
              "март",
              "април",
              "май",
              "юни",
              "юли",
              "август",
              "септември",
              "октомври",
              "ноември",
              "декември",
            ],
          },
          defaultWidth: "wide",
        }),
        day: (0, n.default)({
          values: {
            narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
            short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
            wide: [
              "неделя",
              "понеделник",
              "вторник",
              "сряда",
              "четвъртък",
              "петък",
              "събота",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: (0, n.default)({
          values: {
            wide: {
              am: "преди обяд",
              pm: "след обяд",
              midnight: "в полунощ",
              noon: "на обяд",
              morning: "сутринта",
              afternoon: "следобед",
              evening: "вечерта",
              night: "през нощта",
            },
          },
          defaultWidth: "wide",
        }),
      };
    },
    303219: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return i;
          },
        });
      var n = a("713289"),
        r = a("504435"),
        i = {
          ordinalNumber: (0, r.default)({
            matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, n.default)({
            matchPatterns: {
              narrow: /^((пр)?н\.?\s?е\.?)/i,
              abbreviated: /^((пр)?н\.?\s?е\.?)/i,
              wide: /^(преди новата ера|новата ера|нова ера)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^п/i, /^н/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, n.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
              wide: /^[1234](-?[врт]?о?)? тримесечие/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, n.default)({
            matchPatterns: {
              abbreviated:
                /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
              wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [
                /^я/i,
                /^ф/i,
                /^мар/i,
                /^ап/i,
                /^май/i,
                /^юн/i,
                /^юл/i,
                /^ав/i,
                /^се/i,
                /^окт/i,
                /^но/i,
                /^де/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, n.default)({
            matchPatterns: {
              narrow: /^[нпвсч]/i,
              short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
              abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
              wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [
                /^н[ед]/i,
                /^п[он]/i,
                /^вт/i,
                /^ср/i,
                /^ч[ет]/i,
                /^п[ет]/i,
                /^с[ъб]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, n.default)({
            matchPatterns: {
              any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^преди о/i,
                pm: /^след о/i,
                midnight: /^в пол/i,
                noon: /^на об/i,
                morning: /^сут/i,
                afternoon: /^следо/i,
                evening: /^веч/i,
                night: /^през н/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    193515: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return d;
          },
        });
      var n = a("234547"),
        r = a("105973"),
        i = a("164563"),
        u = a("140614"),
        o = a("303219"),
        d = {
          code: "bg",
          formatDistance: n.default,
          formatLong: r.default,
          formatRelative: i.default,
          localize: u.default,
          match: o.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
    },
  },
]);
//# sourceMappingURL=a58b9563d43481cf493d.js.map
