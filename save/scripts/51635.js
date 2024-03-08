(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51635"],
  {
    545932: function (e, t, n) {
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
            one: "mindre end \xe9t sekund",
            other: "mindre end {{count}} sekunder",
          },
          xSeconds: { one: "1 sekund", other: "{{count}} sekunder" },
          halfAMinute: "\xe9t halvt minut",
          lessThanXMinutes: {
            one: "mindre end \xe9t minut",
            other: "mindre end {{count}} minutter",
          },
          xMinutes: { one: "1 minut", other: "{{count}} minutter" },
          aboutXHours: { one: "cirka 1 time", other: "cirka {{count}} timer" },
          xHours: { one: "1 time", other: "{{count}} timer" },
          xDays: { one: "1 dag", other: "{{count}} dage" },
          aboutXWeeks: { one: "cirka 1 uge", other: "cirka {{count}} uger" },
          xWeeks: { one: "1 uge", other: "{{count}} uger" },
          aboutXMonths: {
            one: "cirka 1 m\xe5ned",
            other: "cirka {{count}} m\xe5neder",
          },
          xMonths: { one: "1 m\xe5ned", other: "{{count}} m\xe5neder" },
          aboutXYears: { one: "cirka 1 \xe5r", other: "cirka {{count}} \xe5r" },
          xYears: { one: "1 \xe5r", other: "{{count}} \xe5r" },
          overXYears: { one: "over 1 \xe5r", other: "over {{count}} \xe5r" },
          almostXYears: {
            one: "n\xe6sten 1 \xe5r",
            other: "n\xe6sten {{count}} \xe5r",
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
    294541: function (e, t, n) {
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
              full: "EEEE 'den' d. MMMM y",
              long: "d. MMMM y",
              medium: "d. MMM y",
              short: "dd/MM/y",
            },
            defaultWidth: "full",
          }),
          time: (0, a.default)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.default)({
            formats: {
              full: "{{date}} 'kl'. {{time}}",
              long: "{{date}} 'kl'. {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    170552: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = {
          lastWeek: "'sidste' eeee 'kl.' p",
          yesterday: "'i g\xe5r kl.' p",
          today: "'i dag kl.' p",
          tomorrow: "'i morgen kl.' p",
          nextWeek: "'p\xe5' eeee 'kl.' p",
          other: "P",
        },
        r = function (e, t, n, r) {
          return a[e];
        };
    },
    21014: function (e, t, n) {
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
              narrow: ["fvt", "vt"],
              abbreviated: ["f.v.t.", "v.t."],
              wide: [
                "f\xf8r vesterlandsk tidsregning",
                "vesterlandsk tidsregning",
              ],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
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
                "mar.",
                "apr.",
                "maj",
                "jun.",
                "jul.",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "dec.",
              ],
              wide: [
                "januar",
                "februar",
                "marts",
                "april",
                "maj",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "december",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["S", "M", "T", "O", "T", "F", "L"],
              short: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
              abbreviated: [
                "s\xf8n.",
                "man.",
                "tir.",
                "ons.",
                "tor.",
                "fre.",
                "l\xf8r.",
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
                midnight: "midnat",
                noon: "middag",
                morning: "morgen",
                afternoon: "eftermiddag",
                evening: "aften",
                night: "nat",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnat",
                noon: "middag",
                morning: "morgen",
                afternoon: "eftermiddag",
                evening: "aften",
                night: "nat",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnat",
                noon: "middag",
                morning: "morgen",
                afternoon: "eftermiddag",
                evening: "aften",
                night: "nat",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "midnat",
                noon: "middag",
                morning: "om morgenen",
                afternoon: "om eftermiddagen",
                evening: "om aftenen",
                night: "om natten",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnat",
                noon: "middag",
                morning: "om morgenen",
                afternoon: "om eftermiddagen",
                evening: "om aftenen",
                night: "om natten",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnat",
                noon: "middag",
                morning: "om morgenen",
                afternoon: "om eftermiddagen",
                evening: "om aftenen",
                night: "om natten",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    720011: function (e, t, n) {
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
            matchPattern: /^(\d+)(\.)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow: /^(fKr|fvt|eKr|vt)/i,
              abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
              wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^f/i, /^(v|e)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234]. kvt\./i,
              wide: /^[1234]\.? kvartal/i,
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
                /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
              wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i,
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
                /^maj/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
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
              short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
              abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
              wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
              any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              narrow:
                /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
              any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /midnat/i,
                noon: /middag/i,
                morning: /morgen/i,
                afternoon: /eftermiddag/i,
                evening: /aften/i,
                night: /nat/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    242461: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("545932"),
        r = n("294541"),
        i = n("170552"),
        d = n("21014"),
        o = n("720011"),
        m = {
          code: "da",
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
//# sourceMappingURL=052047a12592f04f9ccb.js.map
