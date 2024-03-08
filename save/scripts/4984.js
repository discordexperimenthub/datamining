(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4984"],
  {
    228034: function (e, s, t) {
      "use strict";
      e.exports = t.p + "22619614f367d1690eb4.png";
    },
    718023: function (e, s, t) {
      "use strict";
      e.exports = t.p + "92b16490a73f8d117452.png";
    },
    729558: function (e, s, t) {
      "use strict";
      e.exports = t.p + "69cf7cbe2f7f0c5726fc.png";
    },
    704426: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("733527");
      t.es(a, s);
    },
    524173: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("589723");
      t.es(a, s);
    },
    47115: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("7865");
      t.es(a, s);
    },
    969553: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("927944");
      t.es(a, s);
    },
    907572: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("437816");
      t.es(a, s);
    },
    203657: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return C;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("414456"),
        n = t.n(i),
        d = t("917351"),
        r = t.n(d),
        c = t("446674"),
        o = t("77078"),
        u = t("716241"),
        h = t("305961"),
        x = t("677099"),
        N = t("282109"),
        I = t("476263"),
        T = t("660279"),
        m = t("109264"),
        f = t("578706"),
        v = t("564875"),
        _ = t("599110"),
        j = t("380353"),
        g = t("49111"),
        M = t("782340"),
        O = t("462294");
      function C(e) {
        let { guildPlans: s, overrideGuild: t } = e,
          i = (0, c.useStateFromStores)([x.default], () =>
            x.default.getFlattenedGuildIds()
          ),
          [n, d] = l.useMemo(
            () =>
              r(s)
                .values()
                .sortBy(e => {
                  let s = i.indexOf(e.guildId);
                  return -1 === s ? i.length : s;
                })
                .partition(e => {
                  var s;
                  return (
                    (null !== (s = e.overrideMode) && void 0 !== s
                      ? s
                      : e.mode) === j.Mode.UseGreyDot
                  );
                })
                .value(),
            [s, i]
          ),
          o = l.useCallback(
            e => {
              var a;
              return t(
                e,
                (null !== (a = s[e].overrideMode) && void 0 !== a
                  ? a
                  : s[e].mode) === j.Mode.UseGreyDot
                  ? j.Mode.KeepAsIs
                  : j.Mode.UseGreyDot
              );
            },
            [t, s]
          );
        return (0, a.jsxs)("div", {
          className: O.container,
          children: [
            (0, a.jsx)(A, {
              header:
                M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
              subheader:
                M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
              guildPlans: d,
              onClick: o,
            }),
            (0, a.jsx)(A, {
              header:
                M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
              subheader:
                M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
              guildPlans: n,
              onClick: o,
            }),
          ],
        });
      }
      function A(e) {
        let { header: s, subheader: t, guildPlans: l, onClick: i } = e;
        return (0, a.jsxs)("div", {
          className: O.column,
          children: [
            (0, a.jsxs)("div", {
              className: O.header,
              children: [
                (0, a.jsxs)(o.Text, {
                  className: O.sectionTitle,
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: [s, " (", l.length, ")"],
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: t,
                }),
              ],
            }),
            (0, a.jsx)(o.Scroller, {
              className: O.scroller,
              children: (0, a.jsx)("div", {
                className: O.guilds,
                children: l.map(e =>
                  (0, a.jsx)(R, { plan: e, onClick: i }, e.guildId)
                ),
              }),
            }),
          ],
        });
      }
      function R(e) {
        var s;
        let { plan: t, onClick: l } = e,
          i = (0, c.useStateFromStores)([h.default], () =>
            h.default.getGuild(t.guildId)
          );
        if (null == i) return null;
        let d =
          (null !== (s = t.overrideMode) && void 0 !== s ? s : t.mode) ===
          j.Mode.UseGreyDot;
        function r() {
          _.default.track(
            g.AnalyticEvents.NOTIFICATION_MIGRATION_GUILD_CHANGED,
            {
              ...(0, u.collectGuildAnalyticsMetadata)(t.guildId),
              is_selected: !d,
              is_muted: N.default.isMuted(t.guildId),
              notification_setting: N.default.getMessageNotifications(
                t.guildId
              ),
            }
          ),
            l(t.guildId);
        }
        return (0, a.jsx)(o.Tooltip, {
          text: (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: i.name,
              }),
              (0, a.jsxs)("div", {
                className: O.tooltipRow,
                children: [
                  (0, a.jsx)(m.default, { width: 12, height: 12 }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: t.messagePain
                      ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY
                      : M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: O.tooltipRow,
                children: [
                  (0, a.jsx)(v.default, { width: 12, height: 12 }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: t.visitsALot
                      ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT
                      : M.default.Messages
                          .NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: O.tooltipRow,
                children: [
                  (0, a.jsx)(T.default, { width: 12, height: 12 }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: t.muted
                      ? M.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED
                      : M.default.Messages
                          .NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED,
                  }),
                ],
              }),
            ],
          }),
          "aria-label": t.debugReason,
          tooltipClassName: O.tooltip,
          children: e =>
            (0, a.jsxs)(o.Clickable, {
              ...e,
              className: n(O.guild, d ? O.selected : void 0),
              onClick: r,
              children: [
                (0, a.jsx)(f.default, {
                  className: O.checkmark,
                  width: 16,
                  height: 16,
                  backgroundColor: "white",
                }),
                (0, a.jsx)(I.default, {
                  "aria-hidden": !0,
                  className: O.guildIcon,
                  guild: i,
                  size: I.default.Sizes.MEDIUM,
                  active: !0,
                  tabIndex: -1,
                }),
              ],
            }),
        });
      }
    },
    397516: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return I;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("414456"),
        n = t.n(i),
        d = t("817736"),
        r = t.n(d),
        c = t("77078"),
        o = t("660279"),
        u = t("593195"),
        h = t("782340"),
        x = t("349072"),
        N = t("406617"),
        I = l.forwardRef(function (e, s) {
          let {} = e,
            [i, n] = l.useState("before"),
            [d, u] = l.useState(!1),
            [I, f] = l.useState(!1);
          l.useImperativeHandle(s, () => ({
            maybeChangeToAfterTab: () => (!I && v("after"), I),
          }));
          let v = l.useCallback(e => {
            u(!0),
              setTimeout(() => {
                r.unstable_batchedUpdates(() => {
                  "after" === e && f(!0), u(!1), n(e);
                });
              }, 400);
          }, []);
          return (0, a.jsxs)(c.Scroller, {
            className: N.content,
            children: [
              (0, a.jsxs)("div", {
                className: N.header,
                children: [
                  (0, a.jsx)(o.default, { width: 40, height: 40 }),
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: h.default.Messages.NOTIF_MIGRATION_INTRO_TITLE,
                  }),
                  (0, a.jsx)(c.Text, {
                    className: N.subtitle,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      h.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: x.container,
                children: [
                  (0, a.jsxs)("div", {
                    className: x.tabs,
                    children: [
                      (0, a.jsx)("div", {
                        className: x.tabBackground,
                        style: { left: "before" === i ? 0 : "50%" },
                      }),
                      (0, a.jsx)(c.Clickable, {
                        className: x.tab,
                        onClick: () => v("before"),
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color:
                            "before" === i ? "header-primary" : "text-muted",
                          children:
                            h.default.Messages.NOTIF_MIGRATION_INTRO_BEFORE,
                        }),
                      }),
                      (0, a.jsx)(c.Clickable, {
                        className: x.tab,
                        onClick: () => v("after"),
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color:
                            "after" === i ? "header-primary" : "text-muted",
                          children:
                            h.default.Messages.NOTIF_MIGRATION_INTRO_AFTER,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: x.previewContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: x.guilds,
                        children: [
                          (0, a.jsx)("div", {
                            className: x.unreadGuild,
                            children: (0, a.jsx)("img", {
                              src: t("228034"),
                              width: 36,
                              height: 36,
                              alt: "Example Guild Icon",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "after" === i ? x.guild : x.unreadGuild,
                            children: (0, a.jsx)("img", {
                              src: t("718023"),
                              width: 36,
                              height: 36,
                              alt: "Example Guild Icon",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "after" === i ? x.guild : x.unreadGuild,
                            children: (0, a.jsx)("img", {
                              src: t("729558"),
                              width: 36,
                              height: 36,
                              alt: "Example Guild Icon",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: x.channels,
                        children: [
                          (0, a.jsx)(m, {
                            mention: !0,
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_1,
                          }),
                          (0, a.jsx)(m, {
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_2,
                          }),
                          (0, a.jsx)(m, {
                            grey: "after" === i,
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_3,
                          }),
                          (0, a.jsx)(m, {
                            grey: "after" === i,
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_4,
                          }),
                          (0, a.jsx)(m, {
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_5,
                          }),
                          (0, a.jsx)(m, {
                            grey: "after" === i,
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_6,
                          }),
                          (0, a.jsx)(m, {
                            grey: "after" === i,
                            name: h.default.Messages
                              .NOTIF_MIGRATION_INTRO_CHANNEL_7,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(T, {
                    hidden: d || "after" === i,
                    className: x.tipBefore1,
                    text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1,
                  }),
                  (0, a.jsx)(T, {
                    hidden: d || "after" === i,
                    className: x.tipBefore2,
                    text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2,
                  }),
                  (0, a.jsx)(T, {
                    hidden: d || "before" === i,
                    className: x.tipAfter1,
                    text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1,
                  }),
                  (0, a.jsx)(T, {
                    hidden: d || "before" === i,
                    className: x.tipAfter2,
                    text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2,
                  }),
                ],
              }),
            ],
          });
        });
      function T(e) {
        let { text: s, className: t, hidden: l } = e;
        return (0, a.jsxs)("div", {
          className: n(t, x.tip, { [x.hidden]: l }),
          children: [
            (0, a.jsx)(c.Text, {
              className: x.tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: s,
            }),
            (0, a.jsx)("div", { className: x.tipLine }),
          ],
        });
      }
      function m(e) {
        let { grey: s, mention: t, name: l } = e;
        return (0, a.jsxs)("div", {
          className: n(x.channel, { [x.grey]: s, [x.mention]: t }),
          children: [
            (0, a.jsx)(u.default, {
              className: x.channelIcon,
              width: 16,
              height: 16,
            }),
            (0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: x.channelName,
              children: l,
            }),
          ],
        });
      }
    },
    923660: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return v;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("77078"),
        n = t("531470"),
        d = t("538137"),
        r = t("36694"),
        c = t("599110"),
        o = t("699668"),
        u = t("203657"),
        h = t("397516"),
        x = t("71941"),
        N = t("276345"),
        I = t("380353"),
        T = t("49111"),
        m = t("782340"),
        f = t("406617");
      function v(e) {
        let {
            onClose: s,
            transitionState: t,
            dismissable: u,
            guildPain: v,
            myUsage: j,
          } = e,
          [g, M] = l.useState(x.Tab.Intro),
          {
            submitted: O,
            submitting: C,
            saveSettings: A,
          } = (0, o.useSaveSettings)(s),
          {
            guildPlans: R,
            overrideGuild: p,
            getDebug: E,
          } = (0, o.useGuildMigrationSteps)(v, j),
          b = l.useRef(null);
        return (
          l.useEffect(() => {
            c.default.track(T.AnalyticEvents.OPEN_MODAL, {
              type: "notification_migration_modal",
            });
          }, []),
          (0, a.jsxs)(i.ModalRoot, {
            className: f.modal,
            transitionState: t,
            "aria-label": m.default.Messages.NOTIFICATIONS,
            size: i.ModalSize.DYNAMIC,
            children: [
              (0, a.jsx)(x.default, {
                selectedTab: g,
                onClick: M,
                submitted: O,
              }),
              g === x.Tab.Intro
                ? (0, a.jsx)(h.default, { ref: b })
                : g === x.Tab.Customize
                  ? (0, a.jsx)(_, {
                      guildPlans: R,
                      overrideGuild: p,
                      getDebug: E,
                    })
                  : (0, a.jsx)(N.default, {
                      count: Object.values(R).filter(e => {
                        var s;
                        return (
                          (null !== (s = e.overrideMode) && void 0 !== s
                            ? s
                            : e.mode) === I.Mode.UseGreyDot
                        );
                      }).length,
                    }),
              (0, a.jsxs)(i.ModalFooter, {
                className: f.buttons,
                children: [
                  (0, a.jsxs)("div", {
                    className: f.left,
                    children: [
                      u || (g !== x.Tab.Tips && g !== x.Tab.Customize)
                        ? null
                        : (0, a.jsx)(i.Anchor, {
                            className: f.dismiss,
                            href: "https://dis.gd/better-muting",
                            children: (0, a.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: m.default.Messages.LEARN_MORE,
                            }),
                          }),
                      u && g === x.Tab.Intro
                        ? (0, a.jsx)(i.Clickable, {
                            className: f.dismiss,
                            onClick: s,
                            children: (0, a.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: m.default.Messages.DISMISS,
                            }),
                          })
                        : null,
                      u && g === x.Tab.Customize
                        ? (0, a.jsx)(i.Clickable, {
                            className: f.dismiss,
                            onClick: s,
                            children: (0, a.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: m.default.Messages.CANCEL,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: f.right,
                    children: [
                      g === x.Tab.Customize
                        ? (0, a.jsx)(i.Text, {
                            className: f.warning,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: m.default.Messages.NOTIF_MIGRATION_BACKUP,
                          })
                        : null,
                      g !== x.Tab.Customize || O
                        ? null
                        : (0, a.jsxs)(i.Button, {
                            onClick: () => M(x.Tab.Intro),
                            color: i.Button.Colors.TRANSPARENT,
                            children: [
                              (0, a.jsx)(n.default, { width: 16, height: 16 }),
                              " ",
                              m.default.Messages.BACK,
                            ],
                          }),
                      g === x.Tab.Intro
                        ? (0, a.jsxs)(i.Button, {
                            onClick: () => {
                              var e;
                              (null === (e = b.current) || void 0 === e
                                ? void 0
                                : e.maybeChangeToAfterTab()) &&
                                M(x.Tab.Customize);
                            },
                            children: [
                              m.default.Messages.TRY_IT_OUT,
                              " ",
                              (0, a.jsx)(d.default, { width: 16, height: 16 }),
                            ],
                          })
                        : g === x.Tab.Customize
                          ? (0, a.jsxs)(i.Button, {
                              onClick: () => {
                                M(x.Tab.Tips), A(R);
                              },
                              children: [
                                m.default.Messages.APPLY,
                                " ",
                                (0, a.jsx)(r.default, {
                                  width: 16,
                                  height: 16,
                                }),
                              ],
                            })
                          : (0, a.jsx)(i.Button, {
                              submitting: C,
                              onClick: s,
                              children: m.default.Messages.CLOSE,
                            }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function _(e) {
        let { guildPlans: s, overrideGuild: t } = e;
        return (0, a.jsxs)(i.Scroller, {
          className: f.content,
          children: [
            (0, a.jsxs)("div", {
              className: f.header,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE,
                }),
                (0, a.jsx)(i.Text, {
                  className: f.subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE,
                }),
              ],
            }),
            (0, a.jsx)(u.default, { guildPlans: s, overrideGuild: t }),
          ],
        });
      }
    },
    71941: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          Tab: function () {
            return l;
          },
          default: function () {
            return u;
          },
        });
      var a,
        l,
        i = t("37983");
      t("884691");
      var n = t("414456"),
        d = t.n(n),
        r = t("77078"),
        c = t("782340"),
        o = t("404020");
      function u(e) {
        let { selectedTab: s, onClick: t, submitted: a } = e;
        return (0, i.jsxs)("div", {
          className: o.tabs,
          children: [
            (0, i.jsx)(h, {
              tab: 0,
              selectedTab: s,
              label: c.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
              disabled: a,
              onClick: t,
            }),
            (0, i.jsx)(h, {
              tab: 1,
              selectedTab: s,
              label: c.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
              disabled: a,
              onClick: t,
            }),
            (0, i.jsx)(h, {
              tab: 2,
              selectedTab: s,
              label: c.default.Messages.NOTIF_MIGRATION_TIPS_TAB,
              disabled: !a,
              onClick: t,
            }),
          ],
        });
      }
      function h(e) {
        let { tab: s, selectedTab: t, label: a, disabled: l, onClick: n } = e;
        return l
          ? (0, i.jsxs)("div", {
              className: d(o.tab, { [o.current]: t === s }),
              children: [
                (0, i.jsx)("div", { className: o.progressBar }),
                (0, i.jsx)(r.Text, {
                  variant: "text-xs/medium",
                  color: t === s ? "text-brand" : "text-muted",
                  children: a,
                }),
              ],
            })
          : (0, i.jsxs)(r.Clickable, {
              onClick: () => n(s),
              className: d(o.tab, { [o.current]: t === s }),
              children: [
                (0, i.jsx)("div", { className: o.progressBar }),
                (0, i.jsx)(r.Text, {
                  variant: "text-xs/medium",
                  color: t === s ? "text-brand" : "text-muted",
                  children: a,
                }),
              ],
            });
      }
      ((a = l || (l = {}))[(a.Intro = 0)] = "Intro"),
        (a[(a.Customize = 1)] = "Customize"),
        (a[(a.Tips = 2)] = "Tips");
    },
    276345: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return R;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("414456"),
        n = t.n(i),
        d = t("446674"),
        r = t("77078"),
        c = t("305961"),
        o = t("677099"),
        u = t("116320"),
        h = t("660279"),
        x = t("998650"),
        N = t("70025"),
        I = t("461380"),
        T = t("593195"),
        m = t("578706"),
        f = t("945330"),
        v = t("474571"),
        _ = t("76539"),
        j = t("975743"),
        g = t("904276"),
        M = t("875436"),
        O = t("782340"),
        C = t("406617"),
        A = t("662421");
      function R(e) {
        let { count: s } = e,
          [t, i] = l.useState("server");
        return (0, a.jsxs)(r.Scroller, {
          className: C.content,
          children: [
            (0, a.jsxs)("div", {
              className: n(C.header, A.header),
              children: [
                (0, a.jsx)(m.default, { width: 40, height: 40 }),
                (0, a.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children:
                    O.default.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
                      count: s,
                    }),
                }),
                (0, a.jsx)(r.Text, {
                  className: C.subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: O.default.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: A.tabs,
              children: [
                (0, a.jsx)("div", {
                  className: A.tabBackground,
                  style: { left: "server" === t ? 0 : "50%" },
                }),
                (0, a.jsx)(r.Clickable, {
                  className: A.tab,
                  onClick: () => i("server"),
                  children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "server" === t ? "header-primary" : "text-muted",
                    children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1,
                  }),
                }),
                (0, a.jsx)(r.Clickable, {
                  className: A.tab,
                  onClick: () => i("channel"),
                  children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "channel" === t ? "header-primary" : "text-muted",
                    children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2,
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: A.container,
              children: [
                (0, a.jsx)(p, { hidden: "channel" === t }),
                (0, a.jsx)(E, { hidden: "server" === t }),
              ],
            }),
          ],
        });
      }
      function p(e) {
        let { hidden: s } = e,
          t = (0, d.useStateFromStores)([c.default, o.default], () => {
            var e;
            return null ===
              (e = c.default.getGuild(o.default.getFlattenedGuildIds()[0])) ||
              void 0 === e
              ? void 0
              : e.name;
          }),
          [i, T] = l.useState(0);
        return (
          l.useEffect(() => {
            if (s) return;
            let e = 0,
              t = [1500, 1e3, 1e3, 500].map((s, t) =>
                setTimeout(() => T(t + 1), (e += s))
              );
            return () => {
              t.forEach(e => clearTimeout(e)), setTimeout(() => T(0), 150);
            };
          }, [s]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: A.containerInner,
                children: (0, a.jsxs)("div", {
                  className: n(A.serversSection, {
                    [A.hidden]: s,
                    [A.showBigMenu]: i >= 1,
                    [A.fadeChannels]: i >= 1,
                    [A.showModal]: i >= 3,
                  }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: A.channels,
                      children: [
                        (0, a.jsxs)("div", {
                          className: A.guildName,
                          children: [
                            (0, a.jsx)(r.Text, {
                              variant: "text-md/medium",
                              color: "interactive-active",
                              lineClamp: 1,
                              children: null != t ? t : "Keyboard Nerds",
                            }),
                            i >= 1
                              ? (0, a.jsx)(f.default, {
                                  className: A.icon,
                                  width: 24,
                                  height: 24,
                                })
                              : (0, a.jsx)(I.default, {
                                  className: n(A.downCaret, A.icon),
                                  width: 24,
                                  height: 24,
                                }),
                          ],
                        }),
                        (0, a.jsx)(w, {
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_2,
                        }),
                        (0, a.jsx)(w, {
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_1,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_3,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_4,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_5,
                        }),
                        (0, a.jsx)(w, {
                          nodot: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_6,
                        }),
                        (0, a.jsx)(w, {
                          nodot: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_7,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: A.bigMenu,
                      children: [
                        (0, a.jsx)(L, {
                          text: O.default.Messages.INVITE_PEOPLE,
                          icon: (0, a.jsx)(_.default, {
                            className: A.icon,
                            width: 18,
                            height: 18,
                          }),
                        }),
                        (0, a.jsx)("div", { className: A.divider }),
                        (0, a.jsx)(L, {
                          active: i >= 2,
                          text: O.default.Messages.NOTIFICATION_SETTINGS,
                          icon: (0, a.jsx)(h.default, {
                            className: A.icon,
                            width: 18,
                            height: 18,
                          }),
                        }),
                        (0, a.jsx)(L, {
                          text: O.default.Messages.PRIVACY_SETTINGS,
                          icon: (0, a.jsx)(j.default, {
                            className: A.icon,
                            width: 18,
                            height: 18,
                          }),
                        }),
                        (0, a.jsx)(L, {
                          text: O.default.Messages.SERVER_SETTINGS,
                          icon: (0, a.jsx)(v.default, {
                            className: A.icon,
                            width: 18,
                            height: 18,
                          }),
                        }),
                        (0, a.jsx)(L, {
                          text: O.default.Messages.CREATE_EVENTS,
                          icon: (0, a.jsx)(N.default, {
                            className: A.icon,
                            width: 18,
                            height: 18,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: A.notifModal,
                      children: [
                        (0, a.jsx)(r.Text, {
                          className: A.modalHeader,
                          variant: "text-md/medium",
                          color: "interactive-active",
                          children: O.default.Messages.NOTIFICATION_SETTINGS,
                        }),
                        (0, a.jsxs)("div", {
                          className: A.notifTabs,
                          children: [
                            (0, a.jsxs)("div", {
                              className: A.notifTab,
                              children: [
                                (0, a.jsx)(m.default, {
                                  width: 24,
                                  height: 24,
                                }),
                                (0, a.jsx)(r.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children:
                                    O.default.Messages.NOTIFICATION_PRESET_1,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: A.activeNotifTab,
                              children: [
                                (0, a.jsx)(u.default, {
                                  width: 24,
                                  height: 24,
                                }),
                                (0, a.jsx)(r.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-active",
                                  lineClamp: 1,
                                  children:
                                    O.default.Messages.NOTIFICATION_PRESET_2,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: A.notifTab,
                              children: [
                                (0, a.jsx)(x.default, {
                                  width: 24,
                                  height: 24,
                                }),
                                (0, a.jsx)(r.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children:
                                    O.default.Messages.NOTIFICATION_PRESET_3,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: A.controls,
                          children: [
                            (0, a.jsxs)("div", {
                              className: A.control,
                              children: [
                                (0, a.jsx)("div", {
                                  className: A.controlPlaceholder,
                                }),
                                (0, a.jsx)("div", { className: A.switchOn }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: A.control,
                              children: [
                                (0, a.jsx)("div", {
                                  className: A.controlPlaceholder,
                                }),
                                (0, a.jsx)("div", { className: A.switchOff }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(b, {
                text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
                className: A.tipServers2,
                hidden: s || i < 4,
              }),
            ],
          })
        );
      }
      function E(e) {
        let { hidden: s } = e,
          [t, i] = l.useState(0);
        return (
          l.useEffect(() => {
            if (s) return;
            let e = 0,
              t = [1e3, 1e3, 1e3, 800, 800].map((s, t) =>
                setTimeout(() => i(t + 1), (e += s))
              );
            return () => {
              t.forEach(e => clearTimeout(e)), setTimeout(() => i(0), 150);
            };
          }, [s]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: A.containerInner,
                children: (0, a.jsxs)("div", {
                  className: n(A.channelsSection, {
                    [A.hidden]: s,
                    [A.fadeOtherChannels]: t >= 2,
                    [A.showLeftMenu]: t >= 2,
                    [A.showRightMenu]: t >= 3,
                  }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: A.channels,
                      children: [
                        (0, a.jsx)(w, {
                          selected: t >= 1,
                          grey: t >= 5,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_2,
                        }),
                        (0, a.jsx)(w, {
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_1,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_3,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_4,
                        }),
                        (0, a.jsx)(w, {
                          grey: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_5,
                        }),
                        (0, a.jsx)(w, {
                          nodot: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_6,
                        }),
                        (0, a.jsx)(w, {
                          nodot: !0,
                          name: O.default.Messages
                            .NOTIF_MIGRATION_INTRO_CHANNEL_7,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: n(A.menu, A.leftMenu),
                      children: [
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.MUTE,
                          icon: (0, a.jsx)(I.default, {
                            className: A.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.NOTIFICATIONS,
                          active: t >= 3,
                          icon: (0, a.jsx)(I.default, {
                            className: A.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: n(A.menu, A.rightMenu),
                      children: [
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.NOTIFICATION_PRESET_1,
                          icon:
                            t <= 4
                              ? (0, a.jsx)(M.default, {
                                  className: A.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, a.jsx)(g.default, {
                                  className: A.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: t <= 4,
                        }),
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.NOTIFICATION_PRESET_2,
                          icon:
                            t >= 5
                              ? (0, a.jsx)(M.default, {
                                  className: A.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, a.jsx)(g.default, {
                                  className: A.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: t >= 5,
                        }),
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.NOTIFICATION_PRESET_3,
                          icon: (0, a.jsx)(g.default, {
                            className: A.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, a.jsx)(L, {
                          small: !0,
                          text: O.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                          icon: (0, a.jsx)(g.default, {
                            className: A.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(b, {
                text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
                className: A.tipChannels1,
                hidden: s || t < 4,
              }),
              (0, a.jsx)(b, {
                text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
                className: A.tipChannels2,
                hidden: s || t < 4,
              }),
            ],
          })
        );
      }
      function b(e) {
        let { text: s, className: t, hidden: l } = e;
        return (0, a.jsxs)("div", {
          className: n(t, A.tip, { [A.hidden]: l }),
          children: [
            (0, a.jsx)(r.Text, {
              className: A.tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: s,
            }),
            (0, a.jsx)("div", { className: A.tipLine }),
          ],
        });
      }
      function w(e) {
        let { grey: s, nodot: t, selected: l, name: i } = e;
        return (0, a.jsxs)("div", {
          className: n(A.channel, {
            [A.grey]: s || t,
            [A.nodot]: t,
            [A.selected]: l,
          }),
          children: [
            (0, a.jsx)(T.default, {
              className: A.channelIcon,
              width: 16,
              height: 16,
            }),
            (0, a.jsx)(r.Text, {
              variant: "text-md/medium",
              className: A.channelName,
              children: i,
            }),
          ],
        });
      }
      function L(e) {
        let { text: s, active: t, small: l, icon: i } = e;
        return (0, a.jsxs)("div", {
          className: n(A.menuItem, { [A.active]: t }),
          children: [
            (0, a.jsx)(r.Text, {
              variant: l ? "text-xs/normal" : "text-sm/normal",
              color: t ? "always-white" : "interactive-normal",
              children: s,
            }),
            i,
          ],
        });
      }
    },
    538137: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("704426"),
        n = t("246053"),
        d = (0, l.replaceIcon)(function (e) {
          return (0, a.jsx)(n.default, {
            ...e,
            direction: n.default.Directions.RIGHT,
          });
        }, i.ArrowSmallRightIcon);
    },
    660279: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("524173"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: t = 24,
              color: l = "currentColor",
              foreground: i,
              ...d
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, n.default)(d),
              width: s,
              height: t,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, a.jsx)("path", {
                className: i,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z",
              }),
            });
          },
          i.BellIcon,
          void 0,
          { size: 24 }
        );
    },
    998650: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("47115"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: t = 24,
              color: l = "currentColor",
              foreground: i,
              background: d,
              ...r
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, n.default)(r),
              width: s,
              height: t,
              viewBox: "0 0 24 24",
              children: [
                (0, a.jsx)("path", {
                  className: i,
                  fill: l,
                  d: "M21.178 1.70703L22.592 3.12103L4.12103 21.593L2.70703 20.178L21.178 1.70703Z",
                }),
                (0, a.jsx)("path", {
                  className: d,
                  fill: l,
                  d: "M18 10.5283L10.5287 18H21V17C19.344 17 18 15.657 18 14V10.5283Z",
                }),
                (0, a.jsx)("path", {
                  className: d,
                  fill: l,
                  d: "M8.957 19.5718L9.52877 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21C10.7748 21 9.68752 20.442 8.957 19.5718Z",
                }),
                (0, a.jsx)("path", {
                  className: d,
                  fill: l,
                  d: "M12 3C13.417 3 14.71 3.5 15.734 4.321L5.99805 14.058C5.99805 14.0479 5.99856 14.038 5.99907 14.0283C5.99956 14.0188 6.00005 14.0094 6.00005 14V9C6.00005 5.686 8.68605 3 12 3Z",
                }),
              ],
            });
          },
          i.BellSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    70025: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("969553"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: t = 24,
              color: l = "currentColor",
              ...i
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, n.default)(i),
              width: s,
              height: t,
              viewBox: "0 0 24 24",
              children: [
                (0, a.jsx)("path", {
                  d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                  fill: l,
                }),
                (0, a.jsx)("path", {
                  d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                  fill: l,
                }),
                (0, a.jsx)("path", { d: "M7 11H12V16H7V11Z", fill: l }),
              ],
            });
          },
          i.CalendarPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    76539: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("715072"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: t = 24,
              color: l = "currentColor",
              foreground: i,
              ...d
            } = e;
            return 16 === s || 16 === t
              ? (0, a.jsxs)("svg", {
                  ...(0, n.default)(d),
                  width: s,
                  height: t,
                  viewBox: "0 0 16 16",
                  children: [
                    (0, a.jsx)("path", {
                      className: i,
                      fill: l,
                      d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z",
                    }),
                    (0, a.jsx)("path", {
                      className: i,
                      fill: l,
                      d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z",
                    }),
                    (0, a.jsx)("path", {
                      className: i,
                      fill: l,
                      d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z",
                    }),
                  ],
                })
              : (0, a.jsx)("svg", {
                  ...(0, n.default)(d),
                  width: s,
                  height: t,
                  viewBox: "0 0 24 24",
                  children: (0, a.jsx)("path", {
                    className: i,
                    fill: l,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z",
                  }),
                });
          },
          i.UserPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    564875: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("907572"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 16,
              height: t = 16,
              color: l = "currentColor",
              foreground: i,
              ...d
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, n.default)(d),
              width: s,
              height: t,
              viewBox: "0 0 24 24",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    fill: l,
                    className: i,
                    fillRule: "nonzero",
                    d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                    transform: "translate(2 4)",
                  }),
                  (0, a.jsx)("path", {
                    d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z",
                  }),
                ],
              }),
            });
          },
          i.FriendsIcon,
          void 0,
          { size: 16 }
        );
    },
    975743: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        i = t("877585"),
        n = t("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: t = 24,
              color: l = "currentColor",
              foreground: i,
              ...d
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, n.default)(d),
              width: s,
              height: t,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: i,
                fill: l,
                d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z",
              }),
            });
          },
          i.ShieldIcon,
          void 0,
          { size: 24 }
        );
    },
    733527: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          ArrowSmallRightIcon: function () {
            return n;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        i = t("82169");
      let n = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: n = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
            className: d,
          }),
        });
      };
    },
    589723: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          BellIcon: function () {
            return n;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        i = t("82169");
      let n = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: n = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
            className: d,
          }),
        });
      };
    },
    7865: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          BellSlashIcon: function () {
            return n;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        i = t("82169");
      let n = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: n = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.13 16.13c.11.27.46.28.66.08L15.73 4.27a.47.47 0 0 0-.07-.74 6.97 6.97 0 0 0-1.35-.64.62.62 0 0 1-.38-.43 2 2 0 0 0-3.86 0 .62.62 0 0 1-.38.43A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .24.04.48.13.7ZM18.64 9.36c.13-.13.36-.05.36.14v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-.46 0-.9-.01-1.33-.03a.48.48 0 0 1-.3-.83l8.27-8.28ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z",
            className: d,
          }),
        });
      };
    },
    927944: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          CalendarPlusIcon: function () {
            return n;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        i = t("82169");
      let n = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: n = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              fill: "string" == typeof n ? n : n.css,
              className: d,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M22 13.67c0 .12-.33.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.67ZM5.5 12a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
              clipRule: "evenodd",
              fill: "string" == typeof n ? n : n.css,
              className: d,
            }),
            (0, a.jsx)("path", {
              d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
              fill: "string" == typeof n ? n : n.css,
              className: d,
            }),
          ],
        });
      };
    },
    437816: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          FriendsIcon: function () {
            return n;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        i = t("82169");
      let n = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: n = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              className: d,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=821357abfda00cb7d3b8.js.map
