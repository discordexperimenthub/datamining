(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96796"],
  {
    576790: function (a, t, e) {
      "use strict";
      function i(a) {
        return a.replace(/sekuntia?/, "sekunnin");
      }
      function u(a) {
        return a.replace(/minuuttia?/, "minuutin");
      }
      function n(a) {
        return a.replace(/tuntia?/, "tunnin");
      }
      e.r(t),
        e.d(t, {
          default: function () {
            return k;
          },
        }),
        e("781738");
      function r(a) {
        return a.replace(/(viikko|viikkoa)/, "viikon");
      }
      function o(a) {
        return a.replace(/(kuukausi|kuukautta)/, "kuukauden");
      }
      function l(a) {
        return a.replace(/(vuosi|vuotta)/, "vuoden");
      }
      var s = {
          lessThanXSeconds: {
            one: "alle sekunti",
            other: "alle {{count}} sekuntia",
            futureTense: i,
          },
          xSeconds: {
            one: "sekunti",
            other: "{{count}} sekuntia",
            futureTense: i,
          },
          halfAMinute: {
            one: "puoli minuuttia",
            other: "puoli minuuttia",
            futureTense: function (a) {
              return "puolen minuutin";
            },
          },
          lessThanXMinutes: {
            one: "alle minuutti",
            other: "alle {{count}} minuuttia",
            futureTense: u,
          },
          xMinutes: {
            one: "minuutti",
            other: "{{count}} minuuttia",
            futureTense: u,
          },
          aboutXHours: {
            one: "noin tunti",
            other: "noin {{count}} tuntia",
            futureTense: n,
          },
          xHours: { one: "tunti", other: "{{count}} tuntia", futureTense: n },
          xDays: {
            one: "p\xe4iv\xe4",
            other: "{{count}} p\xe4iv\xe4\xe4",
            futureTense: function (a) {
              return a.replace(/päivää?/, "p\xe4iv\xe4n");
            },
          },
          aboutXWeeks: {
            one: "noin viikko",
            other: "noin {{count}} viikkoa",
            futureTense: r,
          },
          xWeeks: { one: "viikko", other: "{{count}} viikkoa", futureTense: r },
          aboutXMonths: {
            one: "noin kuukausi",
            other: "noin {{count}} kuukautta",
            futureTense: o,
          },
          xMonths: {
            one: "kuukausi",
            other: "{{count}} kuukautta",
            futureTense: o,
          },
          aboutXYears: {
            one: "noin vuosi",
            other: "noin {{count}} vuotta",
            futureTense: l,
          },
          xYears: { one: "vuosi", other: "{{count}} vuotta", futureTense: l },
          overXYears: {
            one: "yli vuosi",
            other: "yli {{count}} vuotta",
            futureTense: l,
          },
          almostXYears: {
            one: "l\xe4hes vuosi",
            other: "l\xe4hes {{count}} vuotta",
            futureTense: l,
          },
        },
        k = function (a, t, e) {
          var i = s[a],
            u = 1 === t ? i.one : i.other.replace("{{count}}", String(t));
          if (null != e && e.addSuffix)
            return e.comparison && e.comparison > 0
              ? i.futureTense(u) + " kuluttua"
              : u + " sitten";
          return u;
        };
    },
    911155: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return u;
          },
        });
      var i = e("818985"),
        u = {
          date: (0, i.default)({
            formats: {
              full: "eeee d. MMMM y",
              long: "d. MMMM y",
              medium: "d. MMM y",
              short: "d.M.y",
            },
            defaultWidth: "full",
          }),
          time: (0, i.default)({
            formats: {
              full: "HH.mm.ss zzzz",
              long: "HH.mm.ss z",
              medium: "HH.mm.ss",
              short: "HH.mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, i.default)({
            formats: {
              full: "{{date}} 'klo' {{time}}",
              long: "{{date}} 'klo' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    842681: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return u;
          },
        });
      var i = {
          lastWeek: "'viime' eeee 'klo' p",
          yesterday: "'eilen klo' p",
          today: "'t\xe4n\xe4\xe4n klo' p",
          tomorrow: "'huomenna klo' p",
          nextWeek: "'ensi' eeee 'klo' p",
          other: "P",
        },
        u = function (a, t, e, u) {
          return i[a];
        };
    },
    105992: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return l;
          },
        });
      var i = e("64273"),
        u = {
          narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
          abbreviated: [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kes\xe4",
            "hein\xe4",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu",
          ],
          wide: [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kes\xe4kuu",
            "hein\xe4kuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
          ],
        },
        n = {
          narrow: u.narrow,
          abbreviated: u.abbreviated,
          wide: [
            "tammikuuta",
            "helmikuuta",
            "maaliskuuta",
            "huhtikuuta",
            "toukokuuta",
            "kes\xe4kuuta",
            "hein\xe4kuuta",
            "elokuuta",
            "syyskuuta",
            "lokakuuta",
            "marraskuuta",
            "joulukuuta",
          ],
        },
        r = {
          narrow: ["S", "M", "T", "K", "T", "P", "L"],
          short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
          abbreviated: [
            "sunn.",
            "maan.",
            "tiis.",
            "kesk.",
            "torst.",
            "perj.",
            "la",
          ],
          wide: [
            "sunnuntai",
            "maanantai",
            "tiistai",
            "keskiviikko",
            "torstai",
            "perjantai",
            "lauantai",
          ],
        },
        o = {
          narrow: r.narrow,
          short: r.short,
          abbreviated: r.abbreviated,
          wide: [
            "sunnuntaina",
            "maanantaina",
            "tiistaina",
            "keskiviikkona",
            "torstaina",
            "perjantaina",
            "lauantaina",
          ],
        },
        l = {
          ordinalNumber: function (a, t) {
            return Number(a) + ".";
          },
          era: (0, i.default)({
            values: {
              narrow: ["eaa.", "jaa."],
              abbreviated: ["eaa.", "jaa."],
              wide: ["ennen ajanlaskun alkua", "j\xe4lkeen ajanlaskun alun"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, i.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1. kvartaali",
                "2. kvartaali",
                "3. kvartaali",
                "4. kvartaali",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (a) {
              return a - 1;
            },
          }),
          month: (0, i.default)({
            values: u,
            defaultWidth: "wide",
            formattingValues: n,
            defaultFormattingWidth: "wide",
          }),
          day: (0, i.default)({
            values: r,
            defaultWidth: "wide",
            formattingValues: o,
            defaultFormattingWidth: "wide",
          }),
          dayPeriod: (0, i.default)({
            values: {
              narrow: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
              abbreviated: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
              wide: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6ll\xe4",
                noon: "keskip\xe4iv\xe4ll\xe4",
                morning: "aamup\xe4iv\xe4ll\xe4",
                afternoon: "iltap\xe4iv\xe4ll\xe4",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
            },
            defaultWidth: "wide",
          }),
        };
    },
    60548: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return n;
          },
        });
      var i = e("713289"),
        u = e("504435"),
        n = {
          ordinalNumber: (0, u.default)({
            matchPattern: /^(\d+)(\.)/i,
            parsePattern: /\d+/i,
            valueCallback: function (a) {
              return parseInt(a, 10);
            },
          }),
          era: (0, i.default)({
            matchPatterns: {
              narrow: /^(e|j)/i,
              abbreviated: /^(eaa.|jaa.)/i,
              wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^e/i, /^j/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, i.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234]\.? kvartaali/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (a) {
              return a + 1;
            },
          }),
          month: (0, i.default)({
            matchPatterns: {
              narrow: /^[thmkeslj]/i,
              abbreviated:
                /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
              wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^t/i,
                /^h/i,
                /^m/i,
                /^h/i,
                /^t/i,
                /^k/i,
                /^h/i,
                /^e/i,
                /^s/i,
                /^l/i,
                /^m/i,
                /^j/i,
              ],
              any: [
                /^ta/i,
                /^hel/i,
                /^maa/i,
                /^hu/i,
                /^to/i,
                /^k/i,
                /^hei/i,
                /^e/i,
                /^s/i,
                /^l/i,
                /^mar/i,
                /^j/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, i.default)({
            matchPatterns: {
              narrow: /^[smtkpl]/i,
              short: /^(su|ma|ti|ke|to|pe|la)/i,
              abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
              wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
              any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, i.default)({
            matchPatterns: {
              narrow:
                /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
              any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ap/i,
                pm: /^ip/i,
                midnight: /^keskiyö/i,
                noon: /^keskipäivä/i,
                morning: /aamupäivällä/i,
                afternoon: /iltapäivällä/i,
                evening: /illalla/i,
                night: /yöllä/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    465431: function (a, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return l;
          },
        });
      var i = e("576790"),
        u = e("911155"),
        n = e("842681"),
        r = e("105992"),
        o = e("60548"),
        l = {
          code: "fi",
          formatDistance: i.default,
          formatLong: u.default,
          formatRelative: n.default,
          localize: r.default,
          match: o.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=1deb95b613c9391afa54.js.map
