(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35854"],
  {
    61739: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return u;
          },
        });
      var d = a("818985"),
        u = {
          date: (0, d.default)({
            formats: {
              full: "EEEE, d MMMM yyyy",
              long: "d MMMM yyyy",
              medium: "d MMM yyyy",
              short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, d.default)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, d.default)({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
    },
    796137: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return m;
          },
        });
      var d = a("770985"),
        u = a("481627"),
        l = a("664680"),
        f = a("592137"),
        i = a("61739"),
        m = {
          code: "en-GB",
          formatDistance: d.default,
          formatLong: i.default,
          formatRelative: u.default,
          localize: l.default,
          match: f.default,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
    },
  },
]);
//# sourceMappingURL=d964927eabd1c27990bf.js.map
