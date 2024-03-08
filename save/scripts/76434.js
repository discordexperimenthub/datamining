(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76434"],
  {
    475896: function (e, t, n) {
      "use strict";
      e.exports = n.p + "db61786f810a1fcf361d.jpg";
    },
    610688: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1c4db349e48b726c3936.jpg";
    },
    488838: function (e, t, n) {
      "use strict";
      e.exports = n.p + "35bc9adce60ea6ad64f8.jpg";
    },
    987713: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5a2b576fb0dad6c6f697.jpg";
    },
    522396: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7ef6479b21a070deeea4.jpg";
    },
    585890: function (e, t, n) {
      "use strict";
      e.exports = n.p + "cb327b61c6d78dd359de.jpg";
    },
    688072: function (e, t, n) {
      "use strict";
      e.exports = n.p + "350c22d9218aa19da699.jpg";
    },
    659864: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c256c9f9b854932a3ccd.jpg";
    },
    245195: function (e, t, n) {
      "use strict";
      e.exports = n.p + "881bc56245866f2a901b.jpg";
    },
    237069: function (e, t, n) {
      "use strict";
      e.exports = n.p + "966c5a1ca2a424ed3e69.jpg";
    },
    768178: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d4c4ee431828dbbc3d91.jpg";
    },
    492279: function (e, t, n) {
      "use strict";
      e.exports = n.p + "af42571a8453b9044aae.jpg";
    },
    67189: function (e, t, n) {
      "use strict";
      e.exports = n.p + "679e2e3abe712fec2732.jpg";
    },
    112553: function (e, t, n) {
      "use strict";
      e.exports = n.p + "2e2fc1b6db4460a1f9c5.jpg";
    },
    428221: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ceb7b802658ebf0780d0.png";
    },
    804246: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e7aed34a08cdf5b6af24.png";
    },
    729727: function (e, t, n) {
      "use strict";
      e.exports = n.p + "999bba1aa8b2a73cc267.png";
    },
    283958: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8387acdf35bbef8c823f.jpg";
    },
    55926: function (e, t, n) {
      "use strict";
      e.exports = n.p + "305bef44a56d86f81c8c.jpg";
    },
    349683: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a802092e4c2b239237ba.jpg";
    },
    870968: function (e, t, n) {
      "use strict";
      e.exports = n.p + "609cf233fa34371d453f.jpg";
    },
    705996: function (e, t, n) {
      "use strict";
      e.exports = n.p + "79f993383f5d66c89427.jpg";
    },
    850436: function (e, t, n) {
      "use strict";
      e.exports = n.p + "eeadd473339782578130.jpg";
    },
    135814: function (e, t, n) {
      "use strict";
      e.exports = n.p + "deee435b2602ef14296a.jpg";
    },
    548768: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3691928af577e8f6eb03.jpg";
    },
    13906: function (e, t, n) {
      "use strict";
      e.exports = n.p + "de7628b7185f1b5f5abc.jpg";
    },
    839358: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7dd03a624d9ea6c0b25a.jpg";
    },
    83373: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8769a4a0b7783d6dd697.jpg";
    },
    146588: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a3861001e61874a4c82e.jpg";
    },
    708917: function (e, t, n) {
      "use strict";
      e.exports = n.p + "cd160af6896b92de11f6.jpg";
    },
    466719: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3331a1d6df7173a0b069.jpg";
    },
    991943: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0ae50693e2dfbd2118f2.jpg";
    },
    428323: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8f7c1d74fbc99d7e325d.jpg";
    },
    219389: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("784793");
      n.es(s, t);
    },
    161918: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useActivityShelfItemData: function () {
            return a;
          },
        });
      var s = n("884691"),
        i = n("91761");
      function a(e, t) {
        let n = (0, i.default)({ guildId: e });
        return s.useMemo(() => {
          var e;
          return null !== (e = n.find(e => e.application.id === t)) &&
            void 0 !== e
            ? e
            : null;
        }, [n, t]);
      }
    },
    607384: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFetchDeveloperActivityShelfItems: function () {
            return c;
          },
        });
      var s = n("884691"),
        i = n("446674"),
        a = n("845579"),
        l = n("84460"),
        u = n("550766"),
        r = n("126939");
      function c() {
        let e = (0, r.useIsActivitiesEnabledForCurrentPlatform)(),
          t = a.DeveloperMode.getSetting(),
          n = (0, i.useStateFromStores)(
            [l.default],
            () => l.default.getFetchState(),
            []
          );
        return (
          s.useEffect(() => {
            e && t && null == n && (0, u.fetchDeveloperApplications)();
          }, [e, n, t]),
          null
        );
      }
    },
    744203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getActivityGuildSuggestion: function () {
            return c;
          },
          useSelectGuildOptions: function () {
            return o;
          },
        });
      var s = n("884691"),
        i = n("446674"),
        a = n("42203"),
        l = n("18494"),
        u = n("162771"),
        r = n("677099");
      function c() {
        var e;
        let { allowGdmActivityChannelSuggestion: t } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { allowGdmActivityChannelSuggestion: !1 },
          n = l.default.getVoiceChannelId(),
          s = a.default.getChannel(n);
        if (null != s && null != s.guild_id) return s.guild_id;
        if (null == s || !t)
          return null !== (e = u.default.getLastSelectedGuildId()) &&
            void 0 !== e
            ? e
            : r.default.getFlattenedGuildIds()[0];
      }
      function o() {
        let e = (0, i.useStateFromStores)([r.default], () =>
            r.default.getFlattenedGuildIds()
          ),
          t = s.useMemo(() => e.map(e => ({ label: e, value: e })), [e]);
        return t;
      }
    },
    248210: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getActivityVoiceChannelSuggestion: function () {
            return f;
          },
          useSelectVoiceChannelOptions: function () {
            return I;
          },
        }),
        n("424973"),
        n("222007");
      var s = n("446674"),
        i = n("42203"),
        a = n("245997"),
        l = n("305961"),
        u = n("957255"),
        r = n("18494"),
        c = n("316133"),
        o = n("449008"),
        g = n("943349"),
        d = n("49111");
      function p(e, t, n, s) {
        let i = (0, g.getEmbeddedActivityLaunchability)({
          channelId: e.id,
          ChannelStore: t,
          GuildStore: n,
          PermissionStore: s,
        });
        return (
          (e.type === d.ChannelTypes.GUILD_VOICE &&
            i === g.EmbeddedActivityLaunchability.CAN_LAUNCH) ||
          !1
        );
      }
      function f(e) {
        var t, n, s;
        let { guildId: g, allowGdmActivityChannelSuggestion: d = !1 } = e;
        if (null == g && !d) return null;
        let f = r.default.getVoiceChannelId(),
          m = i.default.getChannel(f);
        if (null != m && (null != m.guild_id || d)) return m.id;
        let I = [];
        for (let e of Object.values(a.default.getCategories(g)))
          for (let t of e)
            p(t.channel, i.default, l.default, u.default) &&
              I.push({
                channel: t.channel,
                users: c.default
                  .getVoiceStatesForChannel(t.channel)
                  .filter(o.isNotNullish),
              });
        return null !==
          (s =
            null ===
              (n = I.sort((e, t) =>
                e.users.length > t.users.length ? -1 : 1
              )[0]) || void 0 === n
              ? void 0
              : null === (t = n.channel) || void 0 === t
                ? void 0
                : t.id) && void 0 !== s
          ? s
          : null;
      }
      function m(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
        return !0;
      }
      function I(e) {
        return (0, s.useStateFromStores)(
          [a.default, c.default, i.default, l.default, u.default],
          () => {
            if (null == e) return [];
            let t = [];
            return (
              Object.values(a.default.getCategories(e)).forEach(e => {
                e.forEach(e => {
                  let { channel: n } = e;
                  p(n, i.default, l.default, u.default) && t.push(n);
                });
              }),
              t
                .map(e => {
                  let t = c.default
                    .getVoiceStatesForChannel(e)
                    .filter(o.isNotNullish);
                  return { value: { channel: e, users: t }, label: e.name };
                })
                .sort((e, t) =>
                  e.value.users.length > t.value.users.length ? -1 : 1
                )
            );
          },
          [e],
          m
        );
      }
    },
    905647: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ACTIVITIES_EXTRA_DETAILS: function () {
            return G;
          },
        });
      var s = n("954016"),
        i = n("475896"),
        a = n("610688"),
        l = n("488838"),
        u = n("987713"),
        r = n("522396"),
        c = n("585890"),
        o = n("688072"),
        g = n("659864"),
        d = n("245195"),
        p = n("237069"),
        f = n("768178"),
        m = n("492279"),
        I = n("67189"),
        S = n("112553"),
        x = n("428221"),
        h = n("804246"),
        v = n("729727"),
        _ = n("283958"),
        y = n("55926"),
        A = n("349683"),
        M = n("870968"),
        j = n("705996"),
        C = n("850436"),
        b = n("135814"),
        P = n("548768"),
        N = n("13906"),
        L = n("839358"),
        T = n("83373"),
        E = n("146588"),
        O = n("708917"),
        D = n("466719"),
        U = n("991943"),
        R = n("428323");
      let G = {
        [s.JAM_SPACE_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [I, S],
        },
        [s.GARTIC_PHONE_APPLICATION_ID]: {
          playersSuggestionMin: 4,
          playersSuggestionMax: 12,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [f, m],
        },
        [s.COLOR_TOGETHER_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [],
        },
        [s.SPELL_CAST_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [O, D],
        },
        [s.LAND_IO_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [A, M],
        },
        [s.WATCH_YOUTUBE_PROD_APP_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 2,
          gameplayImageUrls: [U, R],
        },
        [s.KWIM_APPLICATION_ID]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [_, y],
        },
        [s.BOBBLE_LEAGUE_APPLICATION_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [l, u],
        },
        [s.CHECKERS_IN_THE_PARK_APP_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [r, c],
        },
        [s.CHESS_IN_THE_PARK_APP_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [d, p],
        },
        [s.BLAZIN_8S_APPLICATION_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 5,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [i, a],
        },
        [s.POKER_NIGHT_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 7,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [b, P],
        },
        [s.BYS_LETTER_APP_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [j, C],
        },
        [s.BYS_TWOODLE_APP_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [T, E],
        },
        [s.CHEF_SHOWDOWN_APPLICATION_ID]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 4,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [o, g],
        },
        [s.PUTT_PARTY_APPLICATION_ID]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [N, L],
        },
        [s.KRUNKER_STRIKE_APPLICATION_ID]: { gameplayImageUrls: [x, h, v] },
      };
    },
    231457: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SelectChannelOption: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("656038"),
        a = n("360723"),
        l = n("533403"),
        u = n("368121"),
        r = n("944633"),
        c = n("449008"),
        o = n("575136"),
        g = n("663822");
      function d(e) {
        let { channel: t, users: n } = e,
          d = (0, o.default)(t);
        return (0, s.jsxs)("div", {
          className: g.channelInfo,
          children: [
            (0, i.default)(t)
              ? (0, s.jsx)(r.default, { className: g.speakerIcon })
              : (0, s.jsx)(u.default, { className: g.speakerIcon }),
            (0, s.jsx)("div", { className: g.channelName, children: t.name }),
            d.length > 0
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", { className: g.divider }),
                    (0, s.jsx)(a.default, {
                      embeddedApps: d,
                      className: g.channelItemActivities,
                    }),
                    (0, s.jsx)("div", {
                      className: g.channelActivitiesText,
                      children: d
                        .map(e => {
                          var t;
                          return null === (t = e.application) || void 0 === t
                            ? void 0
                            : t.name;
                        })
                        .filter(c.isNotNullish)
                        .join(", "),
                    }),
                  ],
                })
              : null,
            (0, s.jsx)("div", {
              className: g.voiceUserContainer,
              children: (0, s.jsx)(l.default, { users: n, max: 4 }),
            }),
          ],
        });
      }
    },
    707181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SelectGuildOption: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("617258"),
        a = n("65597"),
        l = n("77078"),
        u = n("305961"),
        r = n("315102"),
        c = n("114945");
      function o(e) {
        let { guildId: t } = e,
          n = (0, a.default)([u.default], () => u.default.getGuild(t));
        if (null == n) return null;
        let o = null;
        if (null != n.icon) {
          let e = r.default.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 40,
          });
          o = (0, s.jsx)(l.Avatar, {
            src: e,
            "aria-label": n.name,
            size: l.AvatarSizes.SIZE_24,
          });
        } else {
          let e = (0, i.getAcronym)(n.name).slice(0, 2);
          o = (0, s.jsx)(l.Text, {
            variant: "text-xs/semibold",
            className: c.acronym,
            "aria-hidden": !0,
            children: e,
          });
        }
        return (0, s.jsxs)("div", {
          className: c.container,
          children: [
            o,
            (0, s.jsx)(l.Text, {
              variant: "text-md/semibold",
              className: c.text,
              children: n.name,
            }),
          ],
        });
      }
    },
    507692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("219389"),
        l = n("75196"),
        u = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: i = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: [
                (0, s.jsx)("g", {
                  clipPath: "url(#clip0_562_101189)",
                  children: (0, s.jsx)("path", {
                    className: a,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.05732 1.33333L14.1953 8.47133L15.138 7.52867L7.80466 0.195333C7.67932 0.07 7.51066 -3.40665e-10 7.33332 -3.31836e-10L2.66666 0L2.66666 1.33333L7.05732 1.33333ZM6.47132 2.862L13.8047 10.1953C14.0653 10.456 14.0653 10.8773 13.8047 11.138L9.13799 15.8047C9.00799 15.9347 8.83732 16 8.66666 16C8.49599 16 8.32532 15.9347 8.19532 15.8047L0.86199 8.47133C0.736656 8.346 0.666656 8.17733 0.666656 8L0.666656 3.33333C0.666656 2.96467 0.964657 2.66667 1.33332 2.66667L5.99999 2.66667C6.17732 2.66667 6.34599 2.73733 6.47132 2.862ZM2.66666 6C2.66666 6.736 3.26266 7.33333 3.99999 7.33333C4.73599 7.33333 5.33332 6.736 5.33332 6C5.33332 5.26267 4.73599 4.66667 3.99999 4.66667C3.26266 4.66667 2.66666 5.26267 2.66666 6Z",
                    fill: i,
                  }),
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsx)("clipPath", {
                    id: "clip0_562_101189",
                    children: (0, s.jsx)("rect", {
                      width: "16",
                      height: "16",
                      fill: i,
                    }),
                  }),
                }),
              ],
            });
          },
          a.TagsIcon,
          void 0,
          { size: 16 }
        );
    },
    784793: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TagsIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...r
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M9.12 1.88A3 3 0 0 1 11.24 1H17a2 2 0 0 1 1.94 1.5c.07.27-.16.5-.44.5h-4.26a4 4 0 0 0-2.83 1.17l-7.25 7.25c-.5.51-.85 1.12-1.03 1.77-.12.45-.74.7-1.06.38l-.2-.2a3 3 0 0 1 0-4.24l7.25-7.25Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M13.12 5.88A3 3 0 0 1 15.24 5H21a2 2 0 0 1 2 2v5.76a3 3 0 0 1-.88 2.12l-7.25 7.25a3 3 0 0 1-4.24 0l-4.76-4.76a3 3 0 0 1 0-4.24l7.25-7.25ZM20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=a5e56ffe8cfcc23b57b1.js.map
