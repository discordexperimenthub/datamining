(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11020"],
  {
    86319: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = n("559610"),
        i = n("63173");
      function r(t, e, n) {
        (0, a.default)(2, arguments);
        var r = (0, i.default)(t, n),
          o = (0, i.default)(e, n);
        return r.getTime() === o.getTime();
      }
    },
    818838: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        }),
        n("781738");
      var a = {
          lessThanXSeconds: { one: "不到 1 秒", other: "不到 {{count}} 秒" },
          xSeconds: { one: "1 秒", other: "{{count}} 秒" },
          halfAMinute: "半分钟",
          lessThanXMinutes: {
            one: "不到 1 分钟",
            other: "不到 {{count}} 分钟",
          },
          xMinutes: { one: "1 分钟", other: "{{count}} 分钟" },
          xHours: { one: "1 小时", other: "{{count}} 小时" },
          aboutXHours: { one: "大约 1 小时", other: "大约 {{count}} 小时" },
          xDays: { one: "1 天", other: "{{count}} 天" },
          aboutXWeeks: { one: "大约 1 个星期", other: "大约 {{count}} 个星期" },
          xWeeks: { one: "1 个星期", other: "{{count}} 个星期" },
          aboutXMonths: { one: "大约 1 个月", other: "大约 {{count}} 个月" },
          xMonths: { one: "1 个月", other: "{{count}} 个月" },
          aboutXYears: { one: "大约 1 年", other: "大约 {{count}} 年" },
          xYears: { one: "1 年", other: "{{count}} 年" },
          overXYears: { one: "超过 1 年", other: "超过 {{count}} 年" },
          almostXYears: { one: "将近 1 年", other: "将近 {{count}} 年" },
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
            return n.comparison && n.comparison > 0 ? i + "内" : i + "前";
          return i;
        };
    },
    195801: function (t, e, n) {
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
              full: "y'年'M'月'd'日' EEEE",
              long: "y'年'M'月'd'日'",
              medium: "yyyy-MM-dd",
              short: "yy-MM-dd",
            },
            defaultWidth: "full",
          }),
          time: (0, a.default)({
            formats: {
              full: "zzzz a h:mm:ss",
              long: "z a h:mm:ss",
              medium: "a h:mm:ss",
              short: "a h:mm",
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
    664415: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return o;
          },
        });
      var a = n("86319");
      function i(t, e, n) {
        var i = "eeee p";
        return (0, a.default)(t, e, n)
          ? i
          : t.getTime() > e.getTime()
            ? "'下个'" + i
            : "'上个'" + i;
      }
      var r = {
          lastWeek: i,
          yesterday: "'昨天' p",
          today: "'今天' p",
          tomorrow: "'明天' p",
          nextWeek: i,
          other: "PP p",
        },
        o = function (t, e, n, a) {
          var i = r[t];
          return "function" == typeof i ? i(e, n, a) : i;
        };
    },
    883093: function (t, e, n) {
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
            var n = Number(t);
            switch (null == e ? void 0 : e.unit) {
              case "date":
                return n.toString() + "日";
              case "hour":
                return n.toString() + "时";
              case "minute":
                return n.toString() + "分";
              case "second":
                return n.toString() + "秒";
              default:
                return "第 " + n.toString();
            }
          },
          era: (0, a.default)({
            values: {
              narrow: ["前", "公元"],
              abbreviated: ["前", "公元"],
              wide: ["公元前", "公元"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.default)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["第一季", "第二季", "第三季", "第四季"],
              wide: ["第一季度", "第二季度", "第三季度", "第四季度"],
            },
            defaultWidth: "wide",
            argumentCallback: function (t) {
              return t - 1;
            },
          }),
          month: (0, a.default)({
            values: {
              narrow: [
                "一",
                "二",
                "三",
                "四",
                "五",
                "六",
                "七",
                "八",
                "九",
                "十",
                "十一",
                "十二",
              ],
              abbreviated: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ],
              wide: [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.default)({
            values: {
              narrow: ["日", "一", "二", "三", "四", "五", "六"],
              short: ["日", "一", "二", "三", "四", "五", "六"],
              abbreviated: [
                "周日",
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
              ],
              wide: [
                "星期日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.default)({
            values: {
              narrow: {
                am: "上",
                pm: "下",
                midnight: "凌晨",
                noon: "午",
                morning: "早",
                afternoon: "下午",
                evening: "晚",
                night: "夜",
              },
              abbreviated: {
                am: "上午",
                pm: "下午",
                midnight: "凌晨",
                noon: "中午",
                morning: "早晨",
                afternoon: "中午",
                evening: "晚上",
                night: "夜间",
              },
              wide: {
                am: "上午",
                pm: "下午",
                midnight: "凌晨",
                noon: "中午",
                morning: "早晨",
                afternoon: "中午",
                evening: "晚上",
                night: "夜间",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "上",
                pm: "下",
                midnight: "凌晨",
                noon: "午",
                morning: "早",
                afternoon: "下午",
                evening: "晚",
                night: "夜",
              },
              abbreviated: {
                am: "上午",
                pm: "下午",
                midnight: "凌晨",
                noon: "中午",
                morning: "早晨",
                afternoon: "中午",
                evening: "晚上",
                night: "夜间",
              },
              wide: {
                am: "上午",
                pm: "下午",
                midnight: "凌晨",
                noon: "中午",
                morning: "早晨",
                afternoon: "中午",
                evening: "晚上",
                night: "夜间",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
    },
    723256: function (t, e, n) {
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
            matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, a.default)({
            matchPatterns: {
              narrow: /^(前)/i,
              abbreviated: /^(前)/i,
              wide: /^(公元前|公元)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.default)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^第[一二三四]刻/i,
              wide: /^第[一二三四]刻钟/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, a.default)({
            matchPatterns: {
              narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
              abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
              wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^一/i,
                /^二/i,
                /^三/i,
                /^四/i,
                /^五/i,
                /^六/i,
                /^七/i,
                /^八/i,
                /^九/i,
                /^十(?!(一|二))/i,
                /^十一/i,
                /^十二/i,
              ],
              any: [
                /^一|1/i,
                /^二|2/i,
                /^三|3/i,
                /^四|4/i,
                /^五|5/i,
                /^六|6/i,
                /^七|7/i,
                /^八|8/i,
                /^九|9/i,
                /^十(?!(一|二))|10/i,
                /^十一|11/i,
                /^十二|12/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.default)({
            matchPatterns: {
              narrow: /^[一二三四五六日]/i,
              short: /^[一二三四五六日]/i,
              abbreviated: /^周[一二三四五六日]/i,
              wide: /^星期[一二三四五六日]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.default)({
            matchPatterns: {
              any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^上午?/i,
                pm: /^下午?/i,
                midnight: /^午夜/i,
                noon: /^[中正]午/i,
                morning: /^早上/i,
                afternoon: /^下午/i,
                evening: /^晚上?/i,
                night: /^凌晨/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
    },
    900392: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var a = n("818838"),
        i = n("195801"),
        r = n("664415"),
        o = n("883093"),
        u = n("723256"),
        d = {
          code: "zh-CN",
          formatDistance: a.default,
          formatLong: i.default,
          formatRelative: r.default,
          localize: o.default,
          match: u.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=6f33e1e19f162cdad6a7.js.map
