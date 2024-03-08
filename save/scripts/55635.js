(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55635"],
  {
    86319: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a("559610"),
        i = a("63173");
      function o(e, t, a) {
        (0, n.default)(2, arguments);
        var o = (0, i.default)(e, a),
          r = (0, i.default)(t, a);
        return o.getTime() === r.getTime();
      }
    },
    682901: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        }),
        a("781738");
      var n = {
          lessThanXSeconds: {
            one: "meno di un secondo",
            other: "meno di {{count}} secondi",
          },
          xSeconds: { one: "un secondo", other: "{{count}} secondi" },
          halfAMinute: "alcuni secondi",
          lessThanXMinutes: {
            one: "meno di un minuto",
            other: "meno di {{count}} minuti",
          },
          xMinutes: { one: "un minuto", other: "{{count}} minuti" },
          aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" },
          xHours: { one: "un'ora", other: "{{count}} ore" },
          xDays: { one: "un giorno", other: "{{count}} giorni" },
          aboutXWeeks: {
            one: "circa una settimana",
            other: "circa {{count}} settimane",
          },
          xWeeks: { one: "una settimana", other: "{{count}} settimane" },
          aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" },
          xMonths: { one: "un mese", other: "{{count}} mesi" },
          aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" },
          xYears: { one: "un anno", other: "{{count}} anni" },
          overXYears: {
            one: "pi\xf9 di un anno",
            other: "pi\xf9 di {{count}} anni",
          },
          almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" },
        },
        i = function (e, t, a) {
          var i,
            o = n[e];
          if (
            ((i =
              "string" == typeof o
                ? o
                : 1 === t
                  ? o.one
                  : o.other.replace("{{count}}", t.toString())),
            null != a && a.addSuffix)
          )
            return a.comparison && a.comparison > 0 ? "tra " + i : i + " fa";
          return i;
        };
    },
    154198: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("818985"),
        i = {
          date: (0, n.default)({
            formats: {
              full: "EEEE d MMMM y",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "dd/MM/y",
            },
            defaultWidth: "full",
          }),
          time: (0, n.default)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, n.default)({
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
    836479: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("86319"),
        i = [
          "domenica",
          "luned\xec",
          "marted\xec",
          "mercoled\xec",
          "gioved\xec",
          "venerd\xec",
          "sabato",
        ];
      function o(e) {
        return "'" + i[e] + " alle' p";
      }
      var r = {
          lastWeek: function (e, t, a) {
            var r = e.getUTCDay();
            return (0, n.default)(e, t, a)
              ? o(r)
              : (function (e) {
                  if (0 === e) return "'domenica scorsa alle' p";
                  return "'" + i[e] + " scorso alle' p";
                })(r);
          },
          yesterday: "'ieri alle' p",
          today: "'oggi alle' p",
          tomorrow: "'domani alle' p",
          nextWeek: function (e, t, a) {
            var r = e.getUTCDay();
            return (0, n.default)(e, t, a)
              ? o(r)
              : (function (e) {
                  if (0 === e) return "'domenica prossima alle' p";
                  return "'" + i[e] + " prossimo alle' p";
                })(r);
          },
          other: "P",
        },
        d = function (e, t, a, n) {
          var i = r[e];
          return "function" == typeof i ? i(t, a, n) : i;
        };
    },
    545431: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("64273"),
        i = {
          ordinalNumber: function (e, t) {
            return String(Number(e));
          },
          era: (0, n.default)({
            values: {
              narrow: ["aC", "dC"],
              abbreviated: ["a.C.", "d.C."],
              wide: ["avanti Cristo", "dopo Cristo"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, n.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["T1", "T2", "T3", "T4"],
              wide: [
                "1\xba trimestre",
                "2\xba trimestre",
                "3\xba trimestre",
                "4\xba trimestre",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, n.default)({
            values: {
              narrow: [
                "G",
                "F",
                "M",
                "A",
                "M",
                "G",
                "L",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "gen",
                "feb",
                "mar",
                "apr",
                "mag",
                "giu",
                "lug",
                "ago",
                "set",
                "ott",
                "nov",
                "dic",
              ],
              wide: [
                "gennaio",
                "febbraio",
                "marzo",
                "aprile",
                "maggio",
                "giugno",
                "luglio",
                "agosto",
                "settembre",
                "ottobre",
                "novembre",
                "dicembre",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, n.default)({
            values: {
              narrow: ["D", "L", "M", "M", "G", "V", "S"],
              short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
              abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
              wide: [
                "domenica",
                "luned\xec",
                "marted\xec",
                "mercoled\xec",
                "gioved\xec",
                "venerd\xec",
                "sabato",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, n.default)({
            values: {
              narrow: {
                am: "m.",
                pm: "p.",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "m.",
                pm: "p.",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    337562: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a("713289"),
        i = a("504435"),
        o = {
          ordinalNumber: (0, i.default)({
            matchPattern: /^(\d+)(º)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, n.default)({
            matchPatterns: {
              narrow: /^(aC|dC)/i,
              abbreviated:
                /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
              wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^a/i, /^(d|e)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, n.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^t[1234]/i,
              wide: /^[1234](º)? trimestre/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, n.default)({
            matchPatterns: {
              narrow: /^[gfmalsond]/i,
              abbreviated:
                /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
              wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^g/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^g/i,
                /^l/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ge/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^mag/i,
                /^gi/i,
                /^l/i,
                /^ag/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, n.default)({
            matchPatterns: {
              narrow: /^[dlmgvs]/i,
              short: /^(do|lu|ma|me|gi|ve|sa)/i,
              abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
              wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
              any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, n.default)({
            matchPatterns: {
              narrow:
                /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
              any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mezza/i,
                noon: /^mezzo/i,
                morning: /mattina/i,
                afternoon: /pomeriggio/i,
                evening: /sera/i,
                night: /notte/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    387601: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a("682901"),
        i = a("154198"),
        o = a("836479"),
        r = a("545431"),
        d = a("337562"),
        u = {
          code: "it",
          formatDistance: n.default,
          formatLong: i.default,
          formatRelative: o.default,
          localize: r.default,
          match: d.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=d16d55d36f04984e5bfd.js.map
