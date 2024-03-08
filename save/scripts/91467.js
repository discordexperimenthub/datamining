(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91467"],
  {
    800023: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        }),
        n("781738");
      var a = {
          lessThanXSeconds: {
            one: "น้อยกว่า 1 วินาที",
            other: "น้อยกว่า {{count}} วินาที",
          },
          xSeconds: { one: "1 วินาที", other: "{{count}} วินาที" },
          halfAMinute: "ครึ่งนาที",
          lessThanXMinutes: {
            one: "น้อยกว่า 1 นาที",
            other: "น้อยกว่า {{count}} นาที",
          },
          xMinutes: { one: "1 นาที", other: "{{count}} นาที" },
          aboutXHours: {
            one: "ประมาณ 1 ชั่วโมง",
            other: "ประมาณ {{count}} ชั่วโมง",
          },
          xHours: { one: "1 ชั่วโมง", other: "{{count}} ชั่วโมง" },
          xDays: { one: "1 วัน", other: "{{count}} วัน" },
          aboutXWeeks: {
            one: "ประมาณ 1 สัปดาห์",
            other: "ประมาณ {{count}} สัปดาห์",
          },
          xWeeks: { one: "1 สัปดาห์", other: "{{count}} สัปดาห์" },
          aboutXMonths: {
            one: "ประมาณ 1 เดือน",
            other: "ประมาณ {{count}} เดือน",
          },
          xMonths: { one: "1 เดือน", other: "{{count}} เดือน" },
          aboutXYears: { one: "ประมาณ 1 ปี", other: "ประมาณ {{count}} ปี" },
          xYears: { one: "1 ปี", other: "{{count}} ปี" },
          overXYears: { one: "มากกว่า 1 ปี", other: "มากกว่า {{count}} ปี" },
          almostXYears: { one: "เกือบ 1 ปี", other: "เกือบ {{count}} ปี" },
        },
        i = function (t, e, n) {
          var i,
            r = a[t];
          if (
            ((i =
              "string" == typeof r
                ? r
                : 1 === e
                  ? r.one
                  : r.other.replace("{{count}}", String(e))),
            null != n && n.addSuffix)
          )
            return n.comparison && n.comparison > 0
              ? "halfAMinute" === t
                ? "ใน" + i
                : "ใน " + i
              : i + "ที่ผ่านมา";
          return i;
        };
    },
    464920: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var a = n("818985"),
        i = {
          date: (0, a.default)({
            formats: {
              full: "วันEEEEที่ do MMMM y",
              long: "do MMMM y",
              medium: "d MMM y",
              short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, a.default)({
            formats: {
              full: "H:mm:ss น. zzzz",
              long: "H:mm:ss น. z",
              medium: "H:mm:ss น.",
              short: "H:mm น.",
            },
            defaultWidth: "medium",
          }),
          dateTime: (0, a.default)({
            formats: {
              full: "{{date}} 'เวลา' {{time}}",
              long: "{{date}} 'เวลา' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    661964: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var a = {
          lastWeek: "eeee'ที่แล้วเวลา' p",
          yesterday: "'เมื่อวานนี้เวลา' p",
          today: "'วันนี้เวลา' p",
          tomorrow: "'พรุ่งนี้เวลา' p",
          nextWeek: "eeee 'เวลา' p",
          other: "P",
        },
        i = function (t, e, n, i) {
          return a[t];
        };
    },
    957452: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var a = n("64273"),
        i = {
          ordinalNumber: function (t, e) {
            return String(t);
          },
          era: (0, a.default)({
            values: {
              narrow: ["B", "คศ"],
              abbreviated: ["BC", "ค.ศ."],
              wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "ไตรมาสแรก",
                "ไตรมาสที่สอง",
                "ไตรมาสที่สาม",
                "ไตรมาสที่สี่",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (t) {
              return t - 1;
            },
          }),
          month: (0, a.default)({
            values: {
              narrow: [
                "ม.ค.",
                "ก.พ.",
                "มี.ค.",
                "เม.ย.",
                "พ.ค.",
                "มิ.ย.",
                "ก.ค.",
                "ส.ค.",
                "ก.ย.",
                "ต.ค.",
                "พ.ย.",
                "ธ.ค.",
              ],
              abbreviated: [
                "ม.ค.",
                "ก.พ.",
                "มี.ค.",
                "เม.ย.",
                "พ.ค.",
                "มิ.ย.",
                "ก.ค.",
                "ส.ค.",
                "ก.ย.",
                "ต.ค.",
                "พ.ย.",
                "ธ.ค.",
              ],
              wide: [
                "มกราคม",
                "กุมภาพันธ์",
                "มีนาคม",
                "เมษายน",
                "พฤษภาคม",
                "มิถุนายน",
                "กรกฎาคม",
                "สิงหาคม",
                "กันยายน",
                "ตุลาคม",
                "พฤศจิกายน",
                "ธันวาคม",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
              short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
              abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
              wide: [
                "อาทิตย์",
                "จันทร์",
                "อังคาร",
                "พุธ",
                "พฤหัสบดี",
                "ศุกร์",
                "เสาร์",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.default)({
            values: {
              narrow: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "เช้า",
                afternoon: "บ่าย",
                evening: "เย็น",
                night: "กลางคืน",
              },
              abbreviated: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "เช้า",
                afternoon: "บ่าย",
                evening: "เย็น",
                night: "กลางคืน",
              },
              wide: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "เช้า",
                afternoon: "บ่าย",
                evening: "เย็น",
                night: "กลางคืน",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "ตอนเช้า",
                afternoon: "ตอนกลางวัน",
                evening: "ตอนเย็น",
                night: "ตอนกลางคืน",
              },
              abbreviated: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "ตอนเช้า",
                afternoon: "ตอนกลางวัน",
                evening: "ตอนเย็น",
                night: "ตอนกลางคืน",
              },
              wide: {
                am: "ก่อนเที่ยง",
                pm: "หลังเที่ยง",
                midnight: "เที่ยงคืน",
                noon: "เที่ยง",
                morning: "ตอนเช้า",
                afternoon: "ตอนกลางวัน",
                evening: "ตอนเย็น",
                night: "ตอนกลางคืน",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    40298: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = n("713289"),
        i = n("504435"),
        r = {
          ordinalNumber: (0, i.default)({
            matchPattern: /^\d+/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow: /^([bB]|[aA]|คศ)/i,
              abbreviated:
                /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
              wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i],
            },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^ไตรมาส(ที่)? ?[1234]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, a.default)({
            matchPatterns: {
              narrow:
                /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
              abbreviated:
                /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
              wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              wide: [
                /^มก/i,
                /^กุม/i,
                /^มี/i,
                /^เม/i,
                /^พฤษ/i,
                /^มิ/i,
                /^กรก/i,
                /^ส/i,
                /^กัน/i,
                /^ต/i,
                /^พฤศ/i,
                /^ธ/i,
              ],
              any: [
                /^ม\.?ค\.?/i,
                /^ก\.?พ\.?/i,
                /^มี\.?ค\.?/i,
                /^เม\.?ย\.?/i,
                /^พ\.?ค\.?/i,
                /^มิ\.?ย\.?/i,
                /^ก\.?ค\.?/i,
                /^ส\.?ค\.?/i,
                /^ก\.?ย\.?/i,
                /^ต\.?ค\.?/i,
                /^พ\.?ย\.?/i,
                /^ธ\.?ค\.?/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.default)({
            matchPatterns: {
              narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
              short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
              abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
              wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
              any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ก่อนเที่ยง/i,
                pm: /^หลังเที่ยง/i,
                midnight: /^เที่ยงคืน/i,
                noon: /^เที่ยง/i,
                morning: /เช้า/i,
                afternoon: /บ่าย/i,
                evening: /เย็น/i,
                night: /กลางคืน/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    859771: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var a = n("800023"),
        i = n("464920"),
        r = n("661964"),
        o = n("957452"),
        d = n("40298"),
        u = {
          code: "th",
          formatDistance: a.default,
          formatLong: i.default,
          formatRelative: r.default,
          localize: o.default,
          match: d.default,
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
    },
  },
]);
//# sourceMappingURL=5236e4b3e37e7b7d9816.js.map
