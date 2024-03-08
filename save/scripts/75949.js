(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75949"],
  {
    25899: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return n;
          },
        }),
        t("781738");
      var a = {
          lessThanXSeconds: {
            one: "moins d’une seconde",
            other: "moins de {{count}} secondes",
          },
          xSeconds: { one: "1 seconde", other: "{{count}} secondes" },
          halfAMinute: "30 secondes",
          lessThanXMinutes: {
            one: "moins d’une minute",
            other: "moins de {{count}} minutes",
          },
          xMinutes: { one: "1 minute", other: "{{count}} minutes" },
          aboutXHours: {
            one: "environ 1 heure",
            other: "environ {{count}} heures",
          },
          xHours: { one: "1 heure", other: "{{count}} heures" },
          xDays: { one: "1 jour", other: "{{count}} jours" },
          aboutXWeeks: {
            one: "environ 1 semaine",
            other: "environ {{count}} semaines",
          },
          xWeeks: { one: "1 semaine", other: "{{count}} semaines" },
          aboutXMonths: {
            one: "environ 1 mois",
            other: "environ {{count}} mois",
          },
          xMonths: { one: "1 mois", other: "{{count}} mois" },
          aboutXYears: { one: "environ 1 an", other: "environ {{count}} ans" },
          xYears: { one: "1 an", other: "{{count}} ans" },
          overXYears: { one: "plus d’un an", other: "plus de {{count}} ans" },
          almostXYears: { one: "presqu’un an", other: "presque {{count}} ans" },
        },
        n = function (e, i, t) {
          var n,
            r = a[e];
          if (
            ((n =
              "string" == typeof r
                ? r
                : 1 === i
                  ? r.one
                  : r.other.replace("{{count}}", String(i))),
            null != t && t.addSuffix)
          )
            return t.comparison && t.comparison > 0
              ? "dans " + n
              : "il y a " + n;
          return n;
        };
    },
    929602: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return n;
          },
        });
      var a = t("818985"),
        n = {
          date: (0, a.default)({
            formats: {
              full: "EEEE d MMMM y",
              long: "d MMMM y",
              medium: "d MMM y",
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
              full: "{{date}} '\xe0' {{time}}",
              long: "{{date}} '\xe0' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    703177: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return n;
          },
        });
      var a = {
          lastWeek: "eeee 'dernier \xe0' p",
          yesterday: "'hier \xe0' p",
          today: "'aujourd’hui \xe0' p",
          tomorrow: "'demain \xe0' p'",
          nextWeek: "eeee 'prochain \xe0' p",
          other: "P",
        },
        n = function (e, i, t, n) {
          return a[e];
        };
    },
    314354: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return n;
          },
        });
      var a = t("64273"),
        n = {
          ordinalNumber: function (e, i) {
            var t,
              a = Number(e),
              n = null == i ? void 0 : i.unit;
            return 0 === a
              ? "0"
              : ((t =
                  1 === a
                    ? n &&
                      ["year", "week", "hour", "minute", "second"].includes(n)
                      ? "\xe8re"
                      : "er"
                    : "\xe8me"),
                a + t);
          },
          era: (0, a.default)({
            values: {
              narrow: ["av. J.-C", "ap. J.-C"],
              abbreviated: ["av. J.-C", "ap. J.-C"],
              wide: ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["T1", "T2", "T3", "T4"],
              abbreviated: [
                "1er trim.",
                "2\xe8me trim.",
                "3\xe8me trim.",
                "4\xe8me trim.",
              ],
              wide: [
                "1er trimestre",
                "2\xe8me trimestre",
                "3\xe8me trimestre",
                "4\xe8me trimestre",
              ],
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
                "janv.",
                "f\xe9vr.",
                "mars",
                "avr.",
                "mai",
                "juin",
                "juil.",
                "ao\xfbt",
                "sept.",
                "oct.",
                "nov.",
                "d\xe9c.",
              ],
              wide: [
                "janvier",
                "f\xe9vrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "ao\xfbt",
                "septembre",
                "octobre",
                "novembre",
                "d\xe9cembre",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["D", "L", "M", "M", "J", "V", "S"],
              short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
              abbreviated: [
                "dim.",
                "lun.",
                "mar.",
                "mer.",
                "jeu.",
                "ven.",
                "sam.",
              ],
              wide: [
                "dimanche",
                "lundi",
                "mardi",
                "mercredi",
                "jeudi",
                "vendredi",
                "samedi",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.default)({
            values: {
              narrow: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "mat.",
                afternoon: "ap.m.",
                evening: "soir",
                night: "mat.",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "matin",
                afternoon: "apr\xe8s-midi",
                evening: "soir",
                night: "matin",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "du matin",
                afternoon: "de l’apr\xe8s-midi",
                evening: "du soir",
                night: "du matin",
              },
            },
            defaultWidth: "wide",
          }),
        };
    },
    350992: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return r;
          },
        });
      var a = t("713289"),
        n = t("504435"),
        r = {
          ordinalNumber: (0, n.default)({
            matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
              abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
              wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^av/i, /^ap/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^T?[1234]/i,
              abbreviated: /^[1234](er|ème|e)? trim\.?/i,
              wide: /^[1234](er|ème|e)? trimestre/i,
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
                /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
              wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
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
                /^av/i,
                /^ma/i,
                /^juin/i,
                /^juil/i,
                /^ao/i,
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
              narrow: /^[lmjvsd]/i,
              short: /^(di|lu|ma|me|je|ve|sa)/i,
              abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
              wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
              any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
              any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^min/i,
                noon: /^mid/i,
                morning: /mat/i,
                afternoon: /ap/i,
                evening: /soir/i,
                night: /nuit/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    754192: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return u;
          },
        });
      var a = t("25899"),
        n = t("929602"),
        r = t("703177"),
        o = t("314354"),
        d = t("350992"),
        u = {
          code: "fr",
          formatDistance: a.default,
          formatLong: n.default,
          formatRelative: r.default,
          localize: o.default,
          match: d.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=68ec5713b311e3706778.js.map
