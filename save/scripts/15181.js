(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15181"],
  {
    952956: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        }),
        t("781738");
      var n = {
          lessThanXSeconds: {
            one: "bir saniyeden az",
            other: "{{count}} saniyeden az",
          },
          xSeconds: { one: "1 saniye", other: "{{count}} saniye" },
          halfAMinute: "yarım dakika",
          lessThanXMinutes: {
            one: "bir dakikadan az",
            other: "{{count}} dakikadan az",
          },
          xMinutes: { one: "1 dakika", other: "{{count}} dakika" },
          aboutXHours: {
            one: "yaklaşık 1 saat",
            other: "yaklaşık {{count}} saat",
          },
          xHours: { one: "1 saat", other: "{{count}} saat" },
          xDays: { one: "1 g\xfcn", other: "{{count}} g\xfcn" },
          aboutXWeeks: {
            one: "yaklaşık 1 hafta",
            other: "yaklaşık {{count}} hafta",
          },
          xWeeks: { one: "1 hafta", other: "{{count}} hafta" },
          aboutXMonths: {
            one: "yaklaşık 1 ay",
            other: "yaklaşık {{count}} ay",
          },
          xMonths: { one: "1 ay", other: "{{count}} ay" },
          aboutXYears: {
            one: "yaklaşık 1 yıl",
            other: "yaklaşık {{count}} yıl",
          },
          xYears: { one: "1 yıl", other: "{{count}} yıl" },
          overXYears: {
            one: "1 yıldan fazla",
            other: "{{count}} yıldan fazla",
          },
          almostXYears: {
            one: "neredeyse 1 yıl",
            other: "neredeyse {{count}} yıl",
          },
        },
        i = function (a, e, t) {
          var i,
            r = n[a];
          if (
            ((i =
              "string" == typeof r
                ? r
                : 1 === e
                  ? r.one
                  : r.other.replace("{{count}}", e.toString())),
            null != t && t.addSuffix)
          )
            return t.comparison && t.comparison > 0
              ? i + " sonra"
              : i + " \xf6nce";
          return i;
        };
    },
    361387: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        });
      var n = t("818985"),
        i = {
          date: (0, n.default)({
            formats: {
              full: "d MMMM y EEEE",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "dd.MM.yyyy",
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
              full: "{{date}} 'saat' {{time}}",
              long: "{{date}} 'saat' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    700540: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        });
      var n = {
          lastWeek: "'ge\xe7en hafta' eeee 'saat' p",
          yesterday: "'d\xfcn saat' p",
          today: "'bug\xfcn saat' p",
          tomorrow: "'yarın saat' p",
          nextWeek: "eeee 'saat' p",
          other: "P",
        },
        i = function (a, e, t, i) {
          return n[a];
        };
    },
    614387: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        });
      var n = t("64273"),
        i = {
          ordinalNumber: function (a, e) {
            return Number(a) + ".";
          },
          era: (0, n.default)({
            values: {
              narrow: ["M\xd6", "MS"],
              abbreviated: ["M\xd6", "MS"],
              wide: ["Milattan \xd6nce", "Milattan Sonra"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, n.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["1\xc7", "2\xc7", "3\xc7", "4\xc7"],
              wide: [
                "İlk \xe7eyrek",
                "İkinci \xc7eyrek",
                "\xdc\xe7\xfcnc\xfc \xe7eyrek",
                "Son \xe7eyrek",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (a) {
              return Number(a) - 1;
            },
          }),
          month: (0, n.default)({
            values: {
              narrow: [
                "O",
                "Ş",
                "M",
                "N",
                "M",
                "H",
                "T",
                "A",
                "E",
                "E",
                "K",
                "A",
              ],
              abbreviated: [
                "Oca",
                "Şub",
                "Mar",
                "Nis",
                "May",
                "Haz",
                "Tem",
                "Ağu",
                "Eyl",
                "Eki",
                "Kas",
                "Ara",
              ],
              wide: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eyl\xfcl",
                "Ekim",
                "Kasım",
                "Aralık",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, n.default)({
            values: {
              narrow: ["P", "P", "S", "\xc7", "P", "C", "C"],
              short: ["Pz", "Pt", "Sa", "\xc7a", "Pe", "Cu", "Ct"],
              abbreviated: ["Paz", "Pzt", "Sal", "\xc7ar", "Per", "Cum", "Cts"],
              wide: [
                "Pazar",
                "Pazartesi",
                "Salı",
                "\xc7arşamba",
                "Perşembe",
                "Cuma",
                "Cumartesi",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, n.default)({
            values: {
              narrow: {
                am: "\xf6\xf6",
                pm: "\xf6s",
                midnight: "gy",
                noon: "\xf6",
                morning: "sa",
                afternoon: "\xf6s",
                evening: "ak",
                night: "ge",
              },
              abbreviated: {
                am: "\xd6\xd6",
                pm: "\xd6S",
                midnight: "gece yarısı",
                noon: "\xf6ğle",
                morning: "sabah",
                afternoon: "\xf6ğleden sonra",
                evening: "akşam",
                night: "gece",
              },
              wide: {
                am: "\xd6.\xd6.",
                pm: "\xd6.S.",
                midnight: "gece yarısı",
                noon: "\xf6ğle",
                morning: "sabah",
                afternoon: "\xf6ğleden sonra",
                evening: "akşam",
                night: "gece",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "\xf6\xf6",
                pm: "\xf6s",
                midnight: "gy",
                noon: "\xf6",
                morning: "sa",
                afternoon: "\xf6s",
                evening: "ak",
                night: "ge",
              },
              abbreviated: {
                am: "\xd6\xd6",
                pm: "\xd6S",
                midnight: "gece yarısı",
                noon: "\xf6ğlen",
                morning: "sabahleyin",
                afternoon: "\xf6ğleden sonra",
                evening: "akşamleyin",
                night: "geceleyin",
              },
              wide: {
                am: "\xf6.\xf6.",
                pm: "\xf6.s.",
                midnight: "gece yarısı",
                noon: "\xf6ğlen",
                morning: "sabahleyin",
                afternoon: "\xf6ğleden sonra",
                evening: "akşamleyin",
                night: "geceleyin",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    944562: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return r;
          },
        });
      var n = t("713289"),
        i = t("504435"),
        r = {
          ordinalNumber: (0, i.default)({
            matchPattern: /^(\d+)(\.)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (a) {
              return parseInt(a, 10);
            },
          }),
          era: (0, n.default)({
            matchPatterns: {
              narrow: /^(mö|ms)/i,
              abbreviated: /^(mö|ms)/i,
              wide: /^(milattan önce|milattan sonra)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i],
            },
            defaultParseWidth: "any",
          }),
          quarter: (0, n.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234]ç/i,
              wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i],
              abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
              wide: [
                /^(i|İ)lk çeyrek/i,
                /(i|İ)kinci çeyrek/i,
                /üçüncü çeyrek/i,
                /son çeyrek/i,
              ],
            },
            defaultParseWidth: "any",
            valueCallback: function (a) {
              return a + 1;
            },
          }),
          month: (0, n.default)({
            matchPatterns: {
              narrow: /^[oşmnhtaek]/i,
              abbreviated:
                /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
              wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^o/i,
                /^ş/i,
                /^m/i,
                /^n/i,
                /^m/i,
                /^h/i,
                /^t/i,
                /^a/i,
                /^e/i,
                /^e/i,
                /^k/i,
                /^a/i,
              ],
              any: [
                /^o/i,
                /^ş/i,
                /^mar/i,
                /^n/i,
                /^may/i,
                /^h/i,
                /^t/i,
                /^ağ/i,
                /^ey/i,
                /^ek/i,
                /^k/i,
                /^ar/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, n.default)({
            matchPatterns: {
              narrow: /^[psçc]/i,
              short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
              abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
              wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
              any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
              wide: [
                /^pazar(?!tesi)/i,
                /^pazartesi/i,
                /^salı/i,
                /^çarşamba/i,
                /^perşembe/i,
                /^cuma(?!rtesi)/i,
                /^cumartesi/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, n.default)({
            matchPatterns: {
              narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
              any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ö\.?ö\.?/i,
                pm: /^ö\.?s\.?/i,
                midnight: /^(gy|gece yarısı)/i,
                noon: /^öğ/i,
                morning: /^sa/i,
                afternoon: /^öğleden sonra/i,
                evening: /^ak/i,
                night: /^ge/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    534278: function (a, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        });
      var n = t("952956"),
        i = t("361387"),
        r = t("700540"),
        o = t("614387"),
        s = t("944562"),
        d = {
          code: "tr",
          formatDistance: n.default,
          formatLong: i.default,
          formatRelative: r.default,
          localize: o.default,
          match: s.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
    },
  },
]);
//# sourceMappingURL=6f9ca9da7fe714865d68.js.map
