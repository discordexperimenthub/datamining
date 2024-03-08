(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51077"],
  {
    524173: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("589723");
      n.es(l, t);
    },
    576044: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("126676");
      n.es(l, t);
    },
    1339: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          guildEventDetailsParser: function () {
            return i;
          },
        });
      var l = n("367376"),
        a = n("180161"),
        s = n("47677");
      let r = {
          ...l.default.guildEventRules.link,
          react: (0, s.default)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
          }).react,
        },
        u = {
          ...l.default.guildEventRules.channelMention,
          react: (0, a.default)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0,
          }).react,
        },
        i = l.default.reactParserFor({
          ...l.default.guildEventRules,
          link: r,
          channelMention: u,
        });
    },
    18284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        s = n("933326"),
        r = n("398604");
      function u(e, t, n) {
        let u = (0, a.useStateFromStores)([r.default], () =>
          r.default.getUserCount(t, n)
        );
        return (
          (0, l.useEffect)(() => {
            null != e &&
              null != t &&
              s.default.getGuildEventUserCounts(e, t, null != n ? [n] : []);
          }, [t, e, n]),
          u
        );
      }
    },
    93550: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("407063"),
        a = n("49111");
      function s(e, t) {
        let n;
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, l.getDevicePixelRatio)()),
          (t = (0, l.getBestMediaProxySize)(t));
        let s = window.GLOBAL_ENV.CDN_HOST;
        if (null != s) {
          var r;
          n = ""
            .concat(((r = "https:"), "https:"), "//")
            .concat(s, "/guild-events/")
            .concat(e.id, "/")
            .concat(e.image);
        } else
          n =
            location.protocol +
            window.GLOBAL_ENV.API_ENDPOINT +
            a.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return (n += "?size=".concat(t));
      }
    },
    909151: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        u = n("1339"),
        i = n("534242"),
        c = n("919163");
      function d(e) {
        let { description: t, className: n, guildId: s, truncate: d = !0 } = e,
          o = a.useMemo(
            () =>
              (0, u.guildEventDetailsParser)(t, !0, {
                guildId: s,
                allowLinks: !0,
                allowHeading: !0,
                allowList: !0,
              }),
            [t, s]
          );
        return (0, l.jsx)("div", {
          className: r(i.descriptionText, n, c.markup, { [i.truncate]: d }),
          children: o,
        });
      }
    },
    255050: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        r = n("941971");
      function u(e) {
        let { source: t, className: n } = e;
        return null == t
          ? null
          : (0, l.jsx)("div", {
              className: s(r.container, n),
              style: { backgroundImage: "url(".concat(t, ")") },
            });
      }
    },
    400271: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventStatus: function () {
            return _;
          },
          GuildEventDetails: function () {
            return D;
          },
          default: function () {
            return L;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        u = n("77078"),
        i = n("26989"),
        c = n("155207"),
        d = n("158998"),
        o = n("398604"),
        E = n("397680"),
        f = n("466148"),
        v = n("18284"),
        h = n("189443"),
        T = n("822516"),
        N = n("909151"),
        m = n("255050"),
        g = n("393745"),
        x = n("745049"),
        C = n("782340"),
        S = n("502249");
      function _(e) {
        let {
            className: t,
            creator: n,
            guildId: a,
            isNew: N,
            isHub: m = !1,
            guildEventId: _,
            eventPreview: D,
            recurrenceId: L,
          } = e,
          R = (0, r.useStateFromStores)([o.default], () =>
            o.default.getGuildScheduledEvent(_)
          ),
          I = (0, v.default)(a, _, L),
          p = null != R ? R : D,
          A = (0, r.useStateFromStores)(
            [i.default],
            () => i.default.getNick(a, null == n ? void 0 : n.id),
            [a, n]
          );
        L = null == p || null != L ? L : (0, T.getNextRecurrenceIdInEvent)(p);
        let { startTime: w } = (0, f.default)(_, L, D),
          j = (0, E.default)(L, _),
          M =
            null != j
              ? j.is_canceled
                ? x.GuildScheduledEventStatus.CANCELED
                : x.GuildScheduledEventStatus.SCHEDULED
              : null;
        if (null == p) return null;
        let { entity_type: G, status: O, recurrence_rule: V } = p;
        return (0, l.jsxs)("div", {
          className: s(S.statusContainer, t),
          children: [
            (0, l.jsx)(g.GuildEventTimeStatus, {
              startTime: w.toISOString(),
              status: null != M ? M : O,
              eventType: G,
              isNew: N,
              recurrenceRule: (0, h.recurrenceRuleFromServer)(V),
              guildEventId: _,
              recurrenceId: L,
            }),
            (0, l.jsx)("div", { className: S.spacer }),
            !m &&
              null != n &&
              (0, l.jsx)(u.Tooltip, {
                text: C.default.Messages.GUILD_EVENT_CREATED_BY.format({
                  username: null != A ? A : d.default.getName(n),
                }),
                children: e =>
                  (0, l.jsx)(u.Avatar, {
                    ...e,
                    src: n.getAvatarURL(a, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != A ? A : n.username,
                    className: S.creator,
                  }),
              }),
            (0, l.jsx)(u.Tooltip, {
              text: C.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                count: I,
              }),
              children: e =>
                (0, l.jsxs)("div", {
                  className: S.rsvpCount,
                  ...e,
                  children: [
                    (0, l.jsx)(c.default, {
                      width: 12,
                      height: 12,
                      className: S.rsvpIcon,
                    }),
                    (0, l.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: I,
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      function D(e) {
        let {
          headerVariant: t = "heading-lg/medium",
          descriptionClassName: n,
          name: a,
          description: r,
          truncate: i,
          guildId: c,
          imageSource: d,
        } = e;
        return (0, l.jsxs)("div", {
          className: s({ [S.withThumbnail]: null != d }),
          children: [
            (0, l.jsxs)("div", {
              className: s({ [S.descriptionWithThumbnail]: null != d }),
              children: [
                (0, l.jsx)(u.Heading, {
                  variant: t,
                  selectable: !0,
                  className: S.eventName,
                  children: a,
                }),
                null != r &&
                  (0, l.jsx)(N.default, {
                    description: r,
                    className: s(n, S.description),
                    truncate: i,
                    guildId: c,
                  }),
              ],
            }),
            null != d &&
              (0, l.jsx)("div", {
                className: S.thumbnailContainer,
                children: (0, l.jsx)(m.default, {
                  source: d,
                  className: S.thumbnail,
                }),
              }),
          ],
        });
      }
      function L(e) {
        let {
          headerVariant: t,
          descriptionClassName: n,
          creator: a,
          name: s,
          description: r,
          imageSource: u,
          isHub: i = !1,
          truncate: c,
          guildId: d,
          isNew: o,
          guildEventId: E,
          eventPreview: f,
          recurrenceId: v,
        } = e;
        return (0, l.jsxs)("div", {
          className: S.container,
          children: [
            (0, l.jsx)(_, {
              className: S.eventInfoStatusContainer,
              creator: a,
              guildId: d,
              isHub: i,
              isNew: o,
              guildEventId: E,
              eventPreview: f,
              recurrenceId: v,
            }),
            (0, l.jsx)(D, {
              name: s,
              description: r,
              headerVariant: t,
              descriptionClassName: n,
              truncate: c,
              guildId: d,
              imageSource: u,
            }),
          ],
        });
      }
    },
    393745: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventTimeStatus: function () {
            return R;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        r = n("884691"),
        u = n("414456"),
        i = n.n(u),
        c = n("866227"),
        d = n.n(c),
        o = n("669491"),
        E = n("77078"),
        f = n("449918"),
        v = n("943232"),
        h = n("93393"),
        T = n("956089"),
        N = n("397680"),
        m = n("822516"),
        g = n("757767"),
        x = n("745049"),
        C = n("843455"),
        S = n("782340"),
        _ = n("966631");
      ((a = l || (l = {}))[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.STARTING_SOON = 1)] = "STARTING_SOON"),
        (a[(a.READY = 2)] = "READY"),
        (a[(a.STARTED = 3)] = "STARTED"),
        (a[(a.ENDED = 4)] = "ENDED"),
        (a[(a.CANCELED = 5)] = "CANCELED");
      function D() {
        return (0, s.jsx)(T.TextBadge, {
          className: _.newBadge,
          color: o.default.unsafe_rawColors.BRAND_260.css,
          text: (0, s.jsx)(E.Text, {
            className: _.newBadgeText,
            variant: "text-xs/bold",
            children: S.default.Messages.NEW,
          }),
        });
      }
      function L(e) {
        let { children: t, className: n, tooltipText: l } = e;
        return (0, s.jsx)("div", {
          className: i(_.eventStatusContainer, n),
          children: (0, s.jsx)(E.Tooltip, {
            position: "right",
            text: l,
            shouldShow: null != l,
            children: e =>
              (0, s.jsx)("div", {
                ...e,
                className: i(_.eventStatusContainer, n),
                children: t,
              }),
          }),
        });
      }
      function R(e) {
        let {
            startTime: t,
            status: n,
            eventType: l,
            className: a,
            endTime: u,
            liveText: c,
            textVariant: o = "text-sm/semibold",
            isNew: T,
            recurrenceRule: R,
            guildEventId: I,
            recurrenceId: p,
          } = e,
          A = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_BRAND),
          w = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_POSITIVE),
          j = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_DANGER);
        null == c &&
          (c =
            l === x.GuildScheduledEventEntityTypes.EXTERNAL
              ? S.default.Messages.STAGE_CHANNEL_HAPPENING_NOW
              : S.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let M = (0, N.default)(p, I),
          [
            {
              startDateTimeString: G,
              endDateTimeString: O,
              currentOrPastEvent: V,
              upcomingEvent: U,
              diffMinutes: H,
            },
            b,
          ] = r.useState((0, m.getEventTimeData)(t, u));
        r.useEffect(() => {
          b((0, m.getEventTimeData)(t, u));
          let e = setInterval(() => b((0, m.getEventTimeData)(t, u)), 1e3);
          return () => {
            clearInterval(e);
          };
        }, [t, u]);
        let B = G;
        null != O &&
          "" !== O &&
          (B = S.default.Messages.START_DATE_TO_END_DATE.format({
            start: G,
            end: O,
          }));
        let P = r.useMemo(
            () =>
              n === x.GuildScheduledEventStatus.CANCELED ||
              (null == M ? void 0 : M.is_canceled)
                ? 5
                : n === x.GuildScheduledEventStatus.ACTIVE
                  ? 3
                  : x.GuildScheduledEventStatusDone.has(n)
                    ? 4
                    : V
                      ? 2
                      : U
                        ? 1
                        : 0,
            [n, null == M ? void 0 : M.is_canceled, V, U]
          ),
          Y = (function (e, t, n, l, a) {
            switch (e) {
              case 1:
                return a > 0
                  ? S.default.Messages.STARTING_IN_MINUTES.format({
                      minutes: a,
                    })
                  : S.default.Messages.STARTING_SOON;
              case 2:
                return S.default.Messages.STARTING_SOON;
              case 3:
                return null != l && "" !== l
                  ? S.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format(
                      {
                        start: n,
                        startHook: e =>
                          (0, s.jsx)(E.Text, {
                            color: "text-positive",
                            variant: "text-sm/semibold",
                            className: _.liveEventEndTime,
                            children: e,
                          }),
                        end: l,
                      }
                    )
                  : null != n
                    ? n
                    : "";
              default:
                return t;
            }
          })(P, B, c, O, H),
          {
            Icon: k,
            iconColor: y,
            textColor: W,
            tooltipText: Z,
          } = r.useMemo(
            () =>
              (function (e) {
                let t,
                  {
                    timeStatus: n,
                    textBrand: l,
                    textPositive: a,
                    textDanger: s,
                    endDateTimeString: r,
                    startDateTimeString: u,
                  } = e,
                  i = v.default,
                  c = l,
                  d = "header-secondary";
                switch (n) {
                  case 3:
                    (c = a), (d = null != r ? void 0 : "text-positive");
                    break;
                  case 4:
                    i = h.default;
                    break;
                  case 2:
                  case 1:
                    (d = "text-brand"), (t = u);
                    break;
                  case 5:
                    c = s;
                }
                return {
                  Icon: i,
                  iconColor: c.hex,
                  textColor: d,
                  tooltipText: t,
                };
              })({
                timeStatus: P,
                textBrand: A,
                textPositive: w,
                textDanger: j,
                endDateTimeString: O,
                startDateTimeString: G,
              }),
            [P, A, w, j, O, G]
          ),
          z = null;
        if (null != R) {
          let e = (0, m.getRRule)(R);
          z = S.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
            recurrenceRule: e.toText(),
          });
          let n = d(t),
            l = (0, m.recurrenceRuleToOption)(n, R);
          z = (function (e, t) {
            let n = t.toDate(),
              l = n.toLocaleString(S.default.getLocale(), { weekday: "long" });
            switch (e) {
              case g.RecurrenceOptions.WEEKLY:
                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format(
                  { weekday: l }
                );
              case g.RecurrenceOptions.BIWEEKLY:
                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format(
                  { weekday: l }
                );
              case g.RecurrenceOptions.MONTHLY:
                let a = Math.ceil(n.getDate() / 7);
                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format(
                  { weekday: l, nth: a }
                );
              case g.RecurrenceOptions.YEARLY:
                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format(
                  {
                    date: n.toLocaleString(S.default.getLocale(), {
                      month: "short",
                      day: "2-digit",
                    }),
                  }
                );
              case g.RecurrenceOptions.WEEKDAY_ONLY:
                return S.default.Messages
                  .GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
              default:
                return null;
            }
          })(l, n);
        }
        return (0, s.jsxs)(L, {
          className: i(a, { [_.isRecurring]: null != z }),
          tooltipText: Z,
          children: [
            T && n === x.GuildScheduledEventStatus.SCHEDULED
              ? (0, s.jsx)(D, {})
              : (0, s.jsx)(k, { color: y, width: 20, height: 20 }),
            (0, s.jsxs)("div", {
              className: _.eventStatusLabel,
              children: [
                (0, s.jsx)(E.Text, { color: W, variant: o, children: Y }),
                null != z &&
                  (0, s.jsx)(E.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: z,
                  }),
              ],
            }),
          ],
        });
      }
    },
    660279: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("524173"),
        r = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...u
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z",
              }),
            });
          },
          s.BellIcon,
          void 0,
          { size: 24 }
        );
    },
    718550: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("576044"),
        r = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, r.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                  fill: a,
                }),
                (0, l.jsx)("path", {
                  d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                  fill: a,
                }),
              ],
            });
          },
          s.LocationIcon,
          void 0,
          { size: 24 }
        );
    },
    589723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BellIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
            className: u,
          }),
        });
      };
    },
    126676: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LocationIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=7a3aa330654099684dfb.js.map
