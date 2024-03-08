(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89911"],
  {
    976977: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        }),
        n("781738");
      var a = {
          lessThanXSeconds: { one: "1초 미만", other: "{{count}}초 미만" },
          xSeconds: { one: "1초", other: "{{count}}초" },
          halfAMinute: "30초",
          lessThanXMinutes: { one: "1분 미만", other: "{{count}}분 미만" },
          xMinutes: { one: "1분", other: "{{count}}분" },
          aboutXHours: { one: "약 1시간", other: "약 {{count}}시간" },
          xHours: { one: "1시간", other: "{{count}}시간" },
          xDays: { one: "1일", other: "{{count}}일" },
          aboutXWeeks: { one: "약 1주", other: "약 {{count}}주" },
          xWeeks: { one: "1주", other: "{{count}}주" },
          aboutXMonths: { one: "약 1개월", other: "약 {{count}}개월" },
          xMonths: { one: "1개월", other: "{{count}}개월" },
          aboutXYears: { one: "약 1년", other: "약 {{count}}년" },
          xYears: { one: "1년", other: "{{count}}년" },
          overXYears: { one: "1년 이상", other: "{{count}}년 이상" },
          almostXYears: { one: "거의 1년", other: "거의 {{count}}년" },
        },
        r = function (t, e, n) {
          var r,
            i = a[t];
          if (
            ((r =
              "string" == typeof i
                ? i
                : 1 === e
                  ? i.one
                  : i.other.replace("{{count}}", e.toString())),
            null != n && n.addSuffix)
          )
            return n.comparison && n.comparison > 0 ? r + " 후" : r + " 전";
          return r;
        };
    },
    523904: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = n("818985"),
        r = {
          date: (0, a.default)({
            formats: {
              full: "y년 M월 d일 EEEE",
              long: "y년 M월 d일",
              medium: "y.MM.dd",
              short: "y.MM.dd",
            },
            defaultWidth: "full",
          }),
          time: (0, a.default)({
            formats: {
              full: "a H시 mm분 ss초 zzzz",
              long: "a H:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.default)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    489937: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = {
          lastWeek: "'지난' eeee p",
          yesterday: "'어제' p",
          today: "'오늘' p",
          tomorrow: "'내일' p",
          nextWeek: "'다음' eeee p",
          other: "P",
        },
        r = function (t, e, n, r) {
          return a[t];
        };
    },
    804692: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = n("64273"),
        r = {
          ordinalNumber: function (t, e) {
            var n = Number(t);
            switch (String(null == e ? void 0 : e.unit)) {
              case "minute":
              case "second":
                return String(n);
              case "date":
                return n + "일";
              default:
                return n + "번째";
            }
          },
          era: (0, a.default)({
            values: {
              narrow: ["BC", "AD"],
              abbreviated: ["BC", "AD"],
              wide: ["기원전", "서기"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1분기", "2분기", "3분기", "4분기"],
            },
            defaultWidth: "wide",
            argumentCallback: function (t) {
              return t - 1;
            },
          }),
          month: (0, a.default)({
            values: {
              narrow: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ],
              abbreviated: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
              wide: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["일", "월", "화", "수", "목", "금", "토"],
              short: ["일", "월", "화", "수", "목", "금", "토"],
              abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
              wide: [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.default)({
            values: {
              narrow: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              abbreviated: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              wide: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              abbreviated: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              wide: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    605089: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var a = n("713289"),
        r = n("504435"),
        i = {
          ordinalNumber: (0, r.default)({
            matchPattern: /^(\d+)(일|번째)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(기원전|서기)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(bc|기원전)/i, /^(ad|서기)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234]사?분기/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, a.default)({
            matchPatterns: {
              narrow: /^(1[012]|[123456789])/,
              abbreviated: /^(1[012]|[123456789])월/i,
              wide: /^(1[012]|[123456789])월/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [
                /^1월?$/,
                /^2/,
                /^3/,
                /^4/,
                /^5/,
                /^6/,
                /^7/,
                /^8/,
                /^9/,
                /^10/,
                /^11/,
                /^12/,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.default)({
            matchPatterns: {
              narrow: /^[일월화수목금토]/,
              short: /^[일월화수목금토]/,
              abbreviated: /^[일월화수목금토]/,
              wide: /^[일월화수목금토]요일/,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^(am|오전)/i,
                pm: /^(pm|오후)/i,
                midnight: /^자정/i,
                noon: /^정오/i,
                morning: /^아침/i,
                afternoon: /^오후/i,
                evening: /^저녁/i,
                night: /^밤/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    765821: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var a = n("976977"),
        r = n("523904"),
        i = n("489937"),
        o = n("804692"),
        d = n("605089"),
        u = {
          code: "ko",
          formatDistance: a.default,
          formatLong: r.default,
          formatRelative: i.default,
          localize: o.default,
          match: d.default,
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
    },
  },
]);
//# sourceMappingURL=a6779e540e1aa10e36c2.js.map
