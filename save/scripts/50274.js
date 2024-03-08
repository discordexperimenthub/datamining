(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50274"],
  {
    744057: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("781738");
      var a = {
          lessThanXSeconds: {
            one: "mindre enn ett sekund",
            other: "mindre enn {{count}} sekunder",
          },
          xSeconds: { one: "ett sekund", other: "{{count}} sekunder" },
          halfAMinute: "et halvt minutt",
          lessThanXMinutes: {
            one: "mindre enn ett minutt",
            other: "mindre enn {{count}} minutter",
          },
          xMinutes: { one: "ett minutt", other: "{{count}} minutter" },
          aboutXHours: {
            one: "omtrent en time",
            other: "omtrent {{count}} timer",
          },
          xHours: { one: "en time", other: "{{count}} timer" },
          xDays: { one: "en dag", other: "{{count}} dager" },
          aboutXWeeks: {
            one: "omtrent en uke",
            other: "omtrent {{count}} uker",
          },
          xWeeks: { one: "en uke", other: "{{count}} uker" },
          aboutXMonths: {
            one: "omtrent en m\xe5ned",
            other: "omtrent {{count}} m\xe5neder",
          },
          xMonths: { one: "en m\xe5ned", other: "{{count}} m\xe5neder" },
          aboutXYears: {
            one: "omtrent ett \xe5r",
            other: "omtrent {{count}} \xe5r",
          },
          xYears: { one: "ett \xe5r", other: "{{count}} \xe5r" },
          overXYears: { one: "over ett \xe5r", other: "over {{count}} \xe5r" },
          almostXYears: {
            one: "nesten ett \xe5r",
            other: "nesten {{count}} \xe5r",
          },
        },
        r = function (e, t, n) {
          var r,
            i = a[e];
          if (
            ((r =
              "string" == typeof i
                ? i
                : 1 === t
                  ? i.one
                  : i.other.replace("{{count}}", String(t))),
            null != n && n.addSuffix)
          )
            return n.comparison && n.comparison > 0 ? "om " + r : r + " siden";
          return r;
        };
    },
    784170: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("818985"),
        r = {
          date: (0, a.default)({
            formats: {
              full: "EEEE d. MMMM y",
              long: "d. MMMM y",
              medium: "d. MMM y",
              short: "dd.MM.y",
            },
            defaultWidth: "full",
          }),
          time: (0, a.default)({
            formats: {
              full: "'kl'. HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.default)({
            formats: {
              full: "{{date}} 'kl.' {{time}}",
              long: "{{date}} 'kl.' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    486543: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = {
          lastWeek: "'forrige' eeee 'kl.' p",
          yesterday: "'i g\xe5r kl.' p",
          today: "'i dag kl.' p",
          tomorrow: "'i morgen kl.' p",
          nextWeek: "EEEE 'kl.' p",
          other: "P",
        },
        r = function (e, t, n, r) {
          return a[e];
        };
    },
    39828: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("64273"),
        r = {
          ordinalNumber: function (e, t) {
            return Number(e) + ".";
          },
          era: (0, a.default)({
            values: {
              narrow: ["f.Kr.", "e.Kr."],
              abbreviated: ["f.Kr.", "e.Kr."],
              wide: ["f\xf8r Kristus", "etter Kristus"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, a.default)({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "jan.",
                "feb.",
                "mars",
                "apr.",
                "mai",
                "juni",
                "juli",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "des.",
              ],
              wide: [
                "januar",
                "februar",
                "mars",
                "april",
                "mai",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "desember",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["S", "M", "T", "O", "T", "F", "L"],
              short: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
              abbreviated: [
                "s\xf8n",
                "man",
                "tir",
                "ons",
                "tor",
                "fre",
                "l\xf8r",
              ],
              wide: [
                "s\xf8ndag",
                "mandag",
                "tirsdag",
                "onsdag",
                "torsdag",
                "fredag",
                "l\xf8rdag",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.default)({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 etterm.",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
              },
              abbreviated: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 etterm.",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morgenen",
                afternoon: "p\xe5 ettermiddagen",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
              },
            },
            defaultWidth: "wide",
          }),
        };
    },
    501704: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("713289"),
        r = n("504435"),
        i = {
          ordinalNumber: (0, r.default)({
            matchPattern: /^(\d+)\.?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
              abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
              wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^f/i, /^e/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](\.)? kvartal/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, a.default)({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
              wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^mai/i,
                /^jun/i,
                /^jul/i,
                /^aug/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.default)({
            matchPatterns: {
              narrow: /^[smtofl]/i,
              short: /^(sø|ma|ti|on|to|fr|lø)/i,
              abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
              wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              narrow:
                /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
              any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a(\.?\s?m\.?)?$/i,
                pm: /^p(\.?\s?m\.?)?$/i,
                midnight: /^midn/i,
                noon: /^midd/i,
                morning: /morgen/i,
                afternoon: /ettermiddag/i,
                evening: /kveld/i,
                night: /natt/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    103652: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("744057"),
        r = n("784170"),
        i = n("486543"),
        d = n("39828"),
        o = n("501704"),
        u = {
          code: "nb",
          formatDistance: a.default,
          formatLong: r.default,
          formatRelative: i.default,
          localize: d.default,
          match: o.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=da099a28f4ea842acdd8.js.map
