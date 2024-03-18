(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39545"],
  {
    23141: function (e, t, s) {
      "use strict";
      e.exports = s.p + "1964f50ca0220e98dc32.svg";
    },
    34705: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c1875fc8a42a61903ba1.svg";
    },
    182418: function (e, t, s) {
      "use strict";
      e.exports = s.p + "387a7c504c96b992872d.svg";
    },
    164370: function (e, t, s) {
      "use strict";
      e.exports = s.p + "73984240bd99493de947.svg";
    },
    972442: function (e, t, s) {
      "use strict";
      e.exports = s.p + "038a865e09c25dc13e30.svg";
    },
    473886: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7ad4feabe353360394cc.svg";
    },
    856670: function (e, t, s) {
      "use strict";
      e.exports = s.p + "018197f71e03e53562e7.svg";
    },
    693029: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7e5dd7f59f96cc264184.svg";
    },
    921880: function (e, t, s) {
      "use strict";
      e.exports = s.p + "581d6c7045a19cc9cfc0.svg";
    },
    555658: function (e, t, s) {
      "use strict";
      e.exports = s.p + "6f736adcfde4c65bd7bf.svg";
    },
    623264: function (e, t, s) {
      "use strict";
      e.exports = s.p + "25a7f5c53d497f5490af.svg";
    },
    706832: function (e, t, s) {
      "use strict";
      e.exports = s.p + "5e6ab17a7aff87ed5da1.svg";
    },
    133403: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("414456"),
        n = s.n(a),
        i = s("77078"),
        r = s("782340"),
        o = s("518377");
      let d = Object.freeze({ DEFAULT: o.default, FILLED: o.filled });
      function u(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": a,
          look: u = d.DEFAULT,
        } = e;
        return (0, l.jsx)(i.Clickable, {
          "aria-label": null != a ? a : r.default.Messages.REMOVE,
          className: n(o.button, u, t),
          onClick: s,
        });
      }
      u.Looks = d;
    },
    881888: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("819855"),
        o = s("77078"),
        d = s("272030"),
        u = s("726527"),
        c = s("142160"),
        h = s("433487"),
        E = s("782340"),
        f = s("414727");
      function m(e) {
        let { role: t, guild: n } = e,
          [r, c] = a.useState(!1),
          E = (0, u.useHasGuildRoleItems)(n, t);
        return E
          ? (0, l.jsx)(o.Clickable, {
              onClick: e => {
                c(!0),
                  (0, d.openContextMenuLazy)(
                    e,
                    async () => {
                      let { default: e } = await s
                        .el("726527")
                        .then(s.bind(s, "726527"));
                      return s => (0, l.jsx)(e, { ...s, role: t, guild: n });
                    },
                    { onClose: () => c(!1) }
                  );
              },
              className: i(f.roleOverflow, { [f.open]: r }),
              children: (0, l.jsx)(h.default, { width: 20, height: 20 }),
            })
          : null;
      }
      function g(e) {
        let {
            color: t,
            id: n,
            role: i,
            guild: u,
            children: h,
            isDragging: g,
            selectedItem: T,
            onItemSelect: S,
            itemType: N,
            locked: C,
            lockTooltip: _,
            showContextMenu: p,
            theme: M,
            roleStyle: x,
            "aria-label": R,
          } = e,
          I = a.useCallback(
            e => {
              (0, d.openContextMenuLazy)(e, async () => {
                let { default: e } = await s
                  .el("443070")
                  .then(s.bind(s, "443070"));
                return t =>
                  (0, l.jsx)(e, {
                    ...t,
                    id: n,
                    label: E.default.Messages.COPY_ID_ROLE,
                  });
              });
            },
            [n]
          );
        return g
          ? (0, l.jsx)("div", { className: f.dragged })
          : (0, l.jsx)(o.TabBar.Item, {
              className: f.role,
              id: n,
              selectedItem: T,
              onItemSelect: S,
              itemType: N,
              "aria-label": null != _ ? "".concat(R, ", ").concat(_) : R,
              children: (0, l.jsxs)("div", {
                className: f.roleContent,
                children: [
                  "dot" === x
                    ? (0, l.jsx)(o.RoleDot, {
                        color: null != t ? t : void 0,
                        className: f.roleDot,
                        background: !1,
                        tooltip: !1,
                      })
                    : (0, l.jsx)(o.RoleCircle, {
                        color: null != t ? t : void 0,
                        className: f.roleCircle,
                      }),
                  (function () {
                    if (!C) return null;
                    let e = (0, r.isThemeDark)(M) ? s("555658") : s("921880");
                    return (0, l.jsx)(o.Tooltip, {
                      text: _,
                      color: o.Tooltip.Colors.RED,
                      children: t =>
                        (0, l.jsx)(c.default, {
                          className: f.lock,
                          src: e,
                          ...t,
                        }),
                    });
                  })(),
                  (0, l.jsx)("div", {
                    className: f.roleInner,
                    onContextMenu: I,
                    children: h,
                  }),
                  p && null != i ? (0, l.jsx)(m, { guild: u, role: i }) : null,
                ],
              }),
            });
      }
    },
    45299: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        n = s("146606"),
        i = s("669491"),
        r = s("77078"),
        o = s("659500"),
        d = s("49111"),
        u = s("782340"),
        c = s("645780"),
        h = function (e) {
          var t;
          let {
              message: s,
              errorMessage: h,
              submitting: E,
              onReset: f,
              onSave: m,
              onSaveText: g,
              onResetText: T,
              onSaveButtonColor: S,
              disabled: N,
              saveButtonTooltip: C,
            } = e,
            _ = a.useRef(null),
            [{ spring: p }, M] = (0, n.useSpring)(() => ({ spring: 0 }));
          a.useEffect(() => {
            function e() {
              M({ spring: 1, config: n.config.gentle }),
                M({ spring: 0, config: n.config.gentle, delay: 1e3 });
            }
            return (
              o.ComponentDispatch.subscribe(
                d.ComponentActions.EMPHASIZE_NOTICE,
                e
              ),
              () => {
                o.ComponentDispatch.unsubscribe(
                  d.ComponentActions.EMPHASIZE_NOTICE,
                  e
                );
              }
            );
          }, [M]);
          let x = p.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(i.default.colors.TEXT_NORMAL).hex(),
                (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            }),
            R = p.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(),
                (0, r.useToken)(i.default.colors.STATUS_DANGER).hex(),
              ],
            }),
            I = p.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(i.default.colors.TEXT_DANGER).hex(),
                (0, r.useToken)(i.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            });
          return (0, l.jsx)(n.animated.div, {
            className: c.container,
            style: { backgroundColor: R },
            children: (0, l.jsx)("div", {
              className: c.flexContainer,
              ref: _,
              children: (0, l.jsxs)(r.FocusRingScope, {
                containerRef: _,
                children: [
                  (0, l.jsx)("div", {
                    className: c.shrinkingContainer,
                    children: (0, l.jsx)(n.animated.div, {
                      className: c.message,
                      style: { color: null != h ? I : x },
                      children:
                        null !== (t = null != h ? h : s) && void 0 !== t
                          ? t
                          : u.default.Messages.SETTINGS_NOTICE_MESSAGE,
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: c.actions,
                    children: [
                      null != f &&
                        (0, l.jsx)(r.Button, {
                          className: c.resetButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.PRIMARY,
                          look: r.Button.Looks.LINK,
                          onClick: f,
                          children: (0, l.jsx)(n.animated.span, {
                            style: { color: x },
                            children: null != T ? T : u.default.Messages.RESET,
                          }),
                        }),
                      null != m
                        ? (0, l.jsx)(r.Tooltip, {
                            text: C,
                            children: e =>
                              (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: null != S ? S : r.Button.Colors.GREEN,
                                submitting: E,
                                disabled: N,
                                onClick: m,
                                ...e,
                                children:
                                  null != g
                                    ? g
                                    : u.default.Messages.SAVE_CHANGES,
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    575351: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return _;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        n = s("446674"),
        i = s("77078"),
        r = s("679653"),
        o = s("929278"),
        d = s("347895"),
        u = s("848848"),
        c = s("735251"),
        h = s("534222"),
        E = s("592407"),
        f = s("610730"),
        m = s("271938"),
        g = s("305961"),
        T = s("957255"),
        S = s("49111"),
        N = s("782340"),
        C = s("221640"),
        _ = e => {
          let { channel: t, onClose: s, onConfirm: _, transitionState: p } = e,
            M = (0, r.default)(t, !0),
            x = t.id,
            R = t.isForumPost(),
            I = (0, n.useStateFromStores)([g.default], () =>
              g.default.getGuild(t.getGuildId())
            ),
            A = (0, h.useGuildChannelScheduledEvents)(x),
            { isSubscriptionGated: O } = (0, u.default)(t.id),
            L = (0, c.default)(I, t),
            [v, j] = a.useState(null),
            D = (0, n.useStateFromStores)(
              [m.default],
              () => t.isOwner(m.default.getId()),
              [t]
            ),
            y = (0, n.useStateFromStores)(
              [T.default],
              () =>
                T.default.can(
                  t.isThread()
                    ? S.Permissions.MANAGE_THREADS
                    : S.Permissions.MANAGE_CHANNELS,
                  t
                ),
              [t]
            ),
            F = (0, n.useStateFromStores)(
              [f.default],
              () => {
                var e;
                return null !== (e = f.default.getCount(t.id)) && void 0 !== e
                  ? e
                  : 0;
              },
              [t.id]
            ),
            b = R && (y || (D && F < 1)),
            P =
              A.length > 0 &&
              (t.type === S.ChannelTypes.GUILD_VOICE ||
                t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
          if (
            (a.useEffect(() => {
              (async () => {
                let e = await (0, o.isDefaultChannelThresholdMetAfterDelete)(
                  t.getGuildId(),
                  x
                );
                if (!e) {
                  j("default");
                  return;
                }
                let s = await (0, d.getBlockForChannelDeletion)(
                  t.getGuildId(),
                  x
                );
                if (!1 !== s) {
                  j(s);
                  return;
                }
              })();
            }, [t, x]),
            null != v)
          ) {
            let e;
            let t = N.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
            return (
              (e =
                "todo" === v
                  ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO
                  : "resource" === v
                    ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE
                    : N.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING),
              (0, l.jsxs)(i.ModalRoot, {
                transitionState: p,
                "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                children: [
                  (0, l.jsx)(i.ModalHeader, {
                    separator: !1,
                    children: (0, l.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children: N.default.Messages.CANNOT_DELETE_CHANNEL,
                    }),
                  }),
                  (0, l.jsxs)(i.ModalContent, {
                    className: C.modalContent,
                    children: [
                      (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: t,
                      }),
                      (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: e.format({
                          onClick: () => {
                            null != I &&
                              (E.default.open(
                                I.id,
                                S.GuildSettingsSections.ONBOARDING
                              ),
                              null == s || s());
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(i.ModalFooter, {
                    children: (0, l.jsx)(i.Button, {
                      onClick: s,
                      children: N.default.Messages.OKAY,
                    }),
                  }),
                ],
              })
            );
          }
          if (null == I) return null;
          if (
            I.hasFeature(S.GuildFeatures.COMMUNITY) &&
            (I.rulesChannelId === x || I.publicUpdatesChannelId === x)
          ) {
            let e = I.rulesChannelId === x,
              t = e
                ? N.default.Messages.DELETE_RULES_CHANNEL_BODY
                : N.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
            return (0, l.jsxs)(i.ModalRoot, {
              transitionState: p,
              "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
              children: [
                (0, l.jsx)(i.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: N.default.Messages.CANNOT_DELETE_CHANNEL,
                  }),
                }),
                (0, l.jsxs)(i.ModalContent, {
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      className: C.modalText,
                      children: t,
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      className: C.modalText,
                      children:
                        N.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                          onClick: () => {
                            E.default.open(
                              I.id,
                              S.GuildSettingsSections.COMMUNITY
                            ),
                              null == s || s();
                          },
                        }),
                    }),
                  ],
                }),
                (0, l.jsx)(i.ModalFooter, {
                  children: (0, l.jsx)(i.Button, {
                    onClick: s,
                    children: N.default.Messages.OKAY,
                  }),
                }),
              ],
            });
          }
          {
            let { deleteText: e, deleteBody: a } = (() => {
              if (t.type === S.ChannelTypes.GUILD_CATEGORY)
                return {
                  deleteText: N.default.Messages.DELETE_CATEGORY,
                  deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                    channelName: M,
                  }),
                };
              if (t.isForumPost())
                return {
                  deleteText: b
                    ? N.default.Messages.DELETE_FORUM_POST
                    : N.default.Messages.DELETE_MESSAGE,
                  deleteBody:
                    b && D && !y
                      ? N.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format(
                          { postName: M }
                        )
                      : b
                        ? N.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format(
                            { postName: M }
                          )
                        : N.default.Messages
                            .DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY,
                };
              if (t.isThread())
                return {
                  deleteText: N.default.Messages.DELETE_THREAD,
                  deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                    channelName: M,
                  }),
                };
              else if (O && L > 0)
                return {
                  deleteText: N.default.Messages.DELETE_CHANNEL,
                  deleteBody:
                    N.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format(
                      { channelName: M, numGuildRoleSubscriptionMembers: L }
                    ),
                };
              return {
                deleteText: N.default.Messages.DELETE_CHANNEL,
                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                  channelName: M,
                }),
              };
            })();
            return (0, l.jsxs)(i.ModalRoot, {
              transitionState: p,
              "aria-label": e,
              children: [
                (0, l.jsx)(i.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, l.jsxs)(i.ModalContent, {
                  className: C.modalContent,
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "header-primary",
                      children: a,
                    }),
                    P
                      ? (0, l.jsx)(i.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          className: C.warningText,
                          children:
                            N.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format(
                              { count: A.length }
                            ),
                        })
                      : null,
                  ],
                }),
                (0, l.jsxs)(i.ModalFooter, {
                  children: [
                    (0, l.jsx)(i.Button, {
                      onClick: _,
                      color: i.Button.Colors.RED,
                      children: e,
                    }),
                    (0, l.jsx)(i.Button, {
                      onClick: s,
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      children: N.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
          }
        };
    },
    443202: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        n = s("458960"),
        i = s("446674"),
        r = s("77078"),
        o = s("318738"),
        d = s("173446"),
        u = s("901998"),
        c = s("461380"),
        h = s("782340"),
        E = s("859066");
      function f() {
        let e = (0, i.useStateFromStores)(
            [u.default],
            () => u.default.advancedMode
          ),
          [t] = a.useState(new n.default.Value(e ? 1 : 0));
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.FormDivider, { className: E.advancedModeDivider }),
            (0, l.jsx)(r.HeadingLevel, {
              component: (0, l.jsx)(r.Button, {
                look: r.Button.Looks.BLANK,
                color: r.Button.Colors.TRANSPARENT,
                onClick: function () {
                  e
                    ? n.default
                        .timing(t, { toValue: 0, duration: 250 })
                        .start(() => {
                          (0, o.setAdvancedMode)(!1);
                        })
                    : ((0, o.setAdvancedMode)(!0),
                      n.default
                        .timing(t, { toValue: 1, duration: 250 })
                        .start());
                },
                children: (0, l.jsxs)(r.FormTitle, {
                  tag: "h1",
                  className: E.advancedTitle,
                  children: [
                    h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS,
                    (0, l.jsx)(c.default, {
                      expanded: e,
                      className: E.titleCaret,
                      width: 20,
                      height: 20,
                    }),
                  ],
                }),
              }),
              children:
                e &&
                (0, l.jsx)(n.default.div, {
                  style: { opacity: t },
                  children: (0, l.jsx)(d.default, {}),
                }),
            }),
          ],
        });
      }
    },
    817653: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return K;
          },
        }),
        s("222007"),
        s("808653");
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("446674"),
        o = s("77078"),
        d = s("404118"),
        u = s("450911"),
        c = s("18054"),
        h = s("318738"),
        E = s("798609"),
        f = s("339023"),
        m = s("929278"),
        g = s("619395"),
        T = s("923510"),
        S = s("230324"),
        N = s("901998"),
        C = s("26989"),
        _ = s("305961"),
        p = s("957255"),
        M = s("697218"),
        x = s("79798"),
        R = s("145131"),
        I = s("555158"),
        A = s("381546"),
        O = s("45029"),
        L = s("682344"),
        v = s("228427"),
        j = s("31225"),
        D = s("447089"),
        y = s("991170"),
        F = s("454273"),
        b = s("443202"),
        P = s("165161"),
        H = s("460812"),
        w = s("606762"),
        U = s("49111"),
        B = s("843455"),
        G = s("782340"),
        V = s("43500");
      function k(e) {
        let {
          channel: t,
          roles: s,
          members: a,
          disabledReason: n,
          getRemoveTooltipHint: r,
        } = e;
        return (0, l.jsx)(o.List, {
          className: V.roleMemberList,
          sections: [s.length, a.length],
          renderRow: function (e) {
            let c,
              m,
              T,
              { section: S, row: N } = e,
              C = !1;
            switch (S) {
              case w.AudienceSelectorSections.ROLES:
                var _;
                (T =
                  (m = s[N]).rowType === w.RowType.ROLE &&
                  (null === (_ = m.tags) || void 0 === _
                    ? void 0
                    : _.guild_connections) === null
                    ? (0, l.jsx)(f.default, {
                        className: V.shield,
                        color: m.colorString,
                        size: 20,
                      })
                    : (0, l.jsx)(L.default, {
                        className: V.shield,
                        color: m.colorString,
                        height: 20,
                      })),
                  (c = (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: V.rowHeight,
                        children: T,
                      }),
                      (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: V.rowLabel,
                        color: m.disabled ? "text-muted" : "text-normal",
                        children: m.name,
                      }),
                    ],
                  })),
                  (C = m.disabled);
                break;
              case w.AudienceSelectorSections.MEMBERS:
                (m = a[N]),
                  (c = (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(o.Avatar, {
                        src: m.avatarURL,
                        size: o.AvatarSizes.SIZE_24,
                        "aria-hidden": !0,
                      }),
                      (0, l.jsx)(o.Text, {
                        className: V.rowLabel,
                        variant: "text-sm/normal",
                        children: m.name,
                      }),
                      m.bot &&
                        (0, l.jsx)(x.default, {
                          verified: m.verifiedBot,
                          className: V.rowBotTag,
                        }),
                      null != m.nickname &&
                        (0, l.jsx)(o.Text, {
                          color: "text-muted",
                          className: V.rowLabelSubText,
                          variant: "text-sm/normal",
                          children: m.username,
                        }),
                    ],
                  })),
                  (C = m.disabled);
                break;
              default:
                m = null;
            }
            if (null == m) return null;
            let p = !C && null == n && null != m.id;
            return (0, l.jsxs)(
              R.default,
              {
                justify: R.default.Justify.BETWEEN,
                align: R.default.Align.CENTER,
                className: V.memberRow,
                children: [
                  (0, l.jsx)(R.default, {
                    justify: R.default.Justify.START,
                    align: R.default.Align.CENTER,
                    className: V.memberRowBody,
                    children: c,
                  }),
                  (0, l.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: F.getRowTypeLabel(m.rowType),
                  }),
                  m.rowType !== w.RowType.EMPTY_STATE &&
                    (0, l.jsx)(o.TooltipContainer, {
                      className: V.removeIconContainer,
                      text: null != n ? n : r(m.rowType, m.disabled),
                      children: (0, l.jsx)(o.Clickable, {
                        onClick: () => {
                          var e, s, l;
                          return (
                            p &&
                            null != m &&
                            ((e = m.id),
                            (s = m.name),
                            (l = m.rowType),
                            void d.default.show({
                              title:
                                G.default.Messages
                                  .SETTINGS_PERMISSIONS_DELETE_TITLE,
                              body: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format(
                                { name: s }
                              ),
                              cancelText: G.default.Messages.CANCEL,
                              onConfirm: () =>
                                (function (e, s) {
                                  if (t.isGuildStageVoice()) {
                                    let l = (0, g.removeModeratorOverwrite)(
                                      e,
                                      s === w.RowType.ROLE
                                        ? E.PermissionOverwriteType.ROLE
                                        : E.PermissionOverwriteType.MEMBER,
                                      t
                                    );
                                    (0, g.isEmptyOverwrite)(l)
                                      ? u.default.clearPermissionOverwrite(
                                          t.id,
                                          l.id
                                        )
                                      : (0, h.savePermissionUpdates)(t.id, [l]);
                                  } else
                                    u.default.clearPermissionOverwrite(t.id, e);
                                })(e, l),
                            }))
                          );
                        },
                        "aria-disabled": !p,
                        "aria-label": G.default.Messages.REMOVE,
                        children: (0, l.jsx)(A.default, {
                          className: i(V.removeIcon, {
                            [V.disabledRemoveIcon]: C || n,
                          }),
                        }),
                      }),
                    }),
                ],
              },
              m.id
            );
          },
          rowHeight: 40,
          renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
              case w.AudienceSelectorSections.ROLES:
                return (0, l.jsx)(
                  z,
                  { title: G.default.Messages.ROLES },
                  "roles-title"
                );
              case w.AudienceSelectorSections.MEMBERS:
                return (0, l.jsx)(
                  z,
                  { title: G.default.Messages.MEMBERS },
                  "members-title"
                );
            }
          },
          sectionHeight: 49,
        });
      }
      function W(e) {
        let { guild: t, channel: a, permissionUpdates: n } = e,
          d = (0, r.useStateFromStores)([_.default], () =>
            _.default.getRoles(t.id)
          ),
          u = F.getExistingRolesRowWithPermissionDisabled(
            t,
            d,
            a,
            T.MODERATE_STAGE_CHANNEL_PERMISSIONS,
            n
          ),
          c = (0, r.useStateFromStores)([C.default], () =>
            F.getExistingMembersRows(
              C.default.getMemberIds(t.id),
              a,
              t,
              T.MODERATE_STAGE_CHANNEL_PERMISSIONS,
              n
            )
          ),
          h = (0, g.useCanUpdateStageChannelModerators)(a.id);
        function E() {
          (0, o.openModalLazy)(async () => {
            let { default: e } = await s.el("286470").then(s.bind(s, "286470"));
            return t => (0, l.jsx)(e, { ...t, channelId: a.id });
          });
        }
        return (0, l.jsxs)("div", {
          className: i(V.settingCard, V.active),
          children: [
            (0, l.jsx)(P.default, {
              label: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
              description:
                G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
              icon: (0, l.jsx)(v.default, {
                className: V.cardIcon,
                height: 20,
                width: 20,
              }),
              id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
              className: V.cardFolder,
              children: [
                (0, l.jsxs)(R.default, {
                  justify: R.default.Justify.BETWEEN,
                  align: R.default.Align.CENTER,
                  className: V.folderHeader,
                  children: [
                    (0, l.jsx)(o.FormTitle, {
                      tag: "h5",
                      className: V.folderTitle,
                      children:
                        G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL,
                    }),
                    (0, l.jsx)(o.Tooltip, {
                      text: G.default.Messages
                        .CHANNEL_PERMISSIONS_NOT_MODERATOR,
                      shouldShow: !h,
                      children: e =>
                        (0, l.jsx)(o.Button, {
                          ...e,
                          size: o.Button.Sizes.SMALL,
                          color: o.Button.Colors.BRAND,
                          onClick: E,
                          disabled: !h,
                          children:
                            G.default.Messages
                              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                        }),
                    }),
                  ],
                }),
                (0, l.jsx)(k, {
                  channel: a,
                  roles: u,
                  members: c,
                  disabledReason: h
                    ? null
                    : G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                  getRemoveTooltipHint: S.getRemoveModeratorTooltipHint,
                }),
              ],
            }),
          ],
        });
      }
      function Y(e) {
        let {
            guild: t,
            channel: a,
            isPrivateGuildChannel: n,
            roles: d,
            members: u,
          } = e,
          c = (0, r.useStateFromStores)([p.default], () =>
            p.default.can(B.Permissions.ADMINISTRATOR, t)
          ),
          h = y.default.canEveryoneRole(B.Permissions.VIEW_CHANNEL, t),
          E = y.default.canEveryoneRole(B.Permissions.ADMINISTRATOR, t),
          f = {
            title: G.default.Messages.PRIVATE_CHANNEL,
            subtitle:
              G.default.Messages
                .CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
            formLabel: G.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS,
          };
        return (
          a.isCategory()
            ? ((f.title = G.default.Messages.PRIVATE_CATEGORY),
              (f.subtitle =
                G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION),
              (f.formLabel =
                G.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS))
            : a.type === U.ChannelTypes.GUILD_VOICE &&
              (f.subtitle =
                G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE),
          (0, l.jsxs)("div", {
            className: i(V.settingCard, { [V.active]: n }),
            children: [
              (0, l.jsx)(P.default, {
                description: f.subtitle,
                icon: (0, l.jsx)(O.default, {
                  className: V.cardIcon,
                  height: 20,
                  width: 20,
                }),
                id: "PrivateChannelSettingCard",
                label: f.title,
                onChange: function () {
                  let e = a.accessPermissions,
                    s = M.default.getCurrentUser();
                  F.toggleChannelEveryonePermission(a, e, n),
                    !n &&
                      null != s &&
                      !(null == t ? void 0 : t.isOwner(s)) &&
                      !c &&
                      F.grantUserChannelAccess(a, e);
                },
                value: n,
              }),
              (0, l.jsxs)("div", {
                className: V.cardFolder,
                children: [
                  E &&
                    (0, l.jsx)("div", {
                      className: V.adminWarning,
                      children: (0, l.jsx)(I.default, {
                        messageType: I.HelpMessageTypes.WARNING,
                        children:
                          G.default.Messages
                            .CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING,
                      }),
                    }),
                  !h &&
                    !E &&
                    !n &&
                    (0, l.jsx)("div", {
                      className: V.adminWarning,
                      children: (0, l.jsx)(I.default, {
                        messageType: I.HelpMessageTypes.WARNING,
                        children:
                          G.default.Messages
                            .CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING,
                      }),
                    }),
                  n &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(R.default, {
                          justify: R.default.Justify.BETWEEN,
                          align: R.default.Align.CENTER,
                          className: V.folderHeader,
                          children: [
                            (0, l.jsx)(o.FormTitle, {
                              tag: "h5",
                              className: V.folderTitle,
                              children: f.formLabel,
                            }),
                            (0, l.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              color: o.Button.Colors.BRAND,
                              onClick: function () {
                                (0, o.openModalLazy)(async () => {
                                  let { default: e } = await s
                                    .el("462430")
                                    .then(s.bind(s, "462430"));
                                  return t =>
                                    (0, l.jsx)(e, {
                                      ...t,
                                      channelId: a.id,
                                      inSettings: !0,
                                    });
                                });
                              },
                              children:
                                G.default.Messages
                                  .CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                            }),
                          ],
                        }),
                        (0, l.jsx)(k, {
                          channel: a,
                          roles: d,
                          members: u,
                          getRemoveTooltipHint: F.getRemoveTooltipHint,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function z(e) {
        let { title: t } = e;
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(o.FormDivider, { className: V.divider }),
            (0, l.jsx)(o.FormTitle, {
              className: i(V.folderTitle, V.sectionTitle),
              tag: "h5",
              children: t,
            }),
          ],
        });
      }
      var K = r.default.connectStores(
        [N.default, p.default, C.default, _.default],
        () => {
          let e;
          let t = N.default.channel,
            s = N.default.category,
            l = [],
            a = [],
            n = {},
            i = !1;
          if (null != t) {
            e = _.default.getGuild(t.getGuildId());
            let s = C.default.getMemberIds(null == e ? void 0 : e.id);
            if (null != e) {
              let r = _.default.getRoles(e.id);
              (n = N.default.editedPermissionIds.reduce((e, t) => {
                let s = N.default.getPermissionOverwrite(t);
                return null != s && (e[t] = s), e;
              }, {})),
                (l = F.getExistingRolesRows(e, r, t, t.accessPermissions, n)),
                (a = F.getExistingMembersRows(s, t, e, t.accessPermissions, n)),
                (i = F.isPrivateGuildChannel(t, n));
            }
          }
          return {
            canSyncChannel:
              null != s && p.default.can(B.Permissions.MANAGE_ROLES, s),
            category: s,
            channel: t,
            filteredMembers: a,
            filteredRoles: l,
            guild: e,
            isPrivateGuildChannel: i,
            locked: N.default.locked,
            permissionUpdates: n,
          };
        }
      )(function (e) {
        let {
            canSyncChannel: t,
            category: n,
            channel: i,
            filteredMembers: r,
            filteredRoles: d,
            guild: u,
            isPrivateGuildChannel: h,
            locked: E,
            permissionUpdates: f,
          } = e,
          [g, T] = a.useState(
            !y.default.canEveryoneRole(B.Permissions.SEND_MESSAGES, i)
          );
        if (null == i || null == u) return null;
        function S() {
          F.toggleChannelEveryonePermission(i, B.Permissions.SEND_MESSAGES, g),
            T(!g);
        }
        function N() {
          null != n &&
            (0, o.openModalLazy)(async () => {
              let { default: e } = await s.el("57005").then(s.bind(s, "57005"));
              return t =>
                (0, l.jsx)(e, {
                  ...t,
                  channel: i,
                  category: n,
                  onConfirm: async () => {
                    let { guild_id: e } = n,
                      t = { ...n.permissionOverwrites };
                    null != e &&
                      null == t[e] &&
                      (t[e] = y.default.makeEveryoneOverwrite(e));
                    let s = await (0,
                    m.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(
                      i,
                      t[e].deny,
                      t[e].allow
                    );
                    s &&
                      (0, c.saveChannel)(i.id, {
                        permissionOverwrites: Object.values(t),
                      });
                  },
                });
            });
        }
        let C = {
          title: G.default.Messages.CHANNEL_PERMISSIONS,
          subtitle: G.default.Messages.CHANNEL_PERMISSIONS_SUBTITLE,
        };
        return (
          i.isCategory() &&
            ((C.title = G.default.Messages.CATEGORY_SETTINGS),
            (C.subtitle = G.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE)),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(o.FormTitle, { tag: "h1", children: C.title }),
              (0, l.jsx)(o.FormText, { children: C.subtitle }),
              null != n && t
                ? E
                  ? (0, l.jsx)(H.default, {
                      canSync: !1,
                      icon: j.default,
                      noticeText:
                        G.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
                          categoryName: n.name,
                        }),
                    })
                  : (0, l.jsx)(H.default, {
                      buttonText: G.default.Messages.SYNC_NOW,
                      canSync: !0,
                      icon: D.default,
                      noticeText:
                        G.default.Messages.PERMISSIONS_UNSYNCED.format({
                          categoryName: n.name,
                        }),
                      onClick: N,
                    })
                : null,
              i.isGuildStageVoice()
                ? (0, l.jsx)(W, { guild: u, channel: i, permissionUpdates: f })
                : null,
              (0, l.jsx)(Y, {
                channel: i,
                guild: u,
                isPrivateGuildChannel: h,
                roles: d,
                members: r,
              }),
              !1,
              (0, l.jsx)(b.default, {}),
            ],
          })
        );
      });
    },
    165161: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("77078"),
        n = s("145131"),
        i = s("643343");
      function r(e) {
        let {
          description: t,
          icon: s,
          id: r,
          label: o,
          onChange: d,
          value: u,
        } = e;
        return (0, l.jsxs)("div", {
          className: i.cardContent,
          children: [
            (0, l.jsxs)(n.default, {
              justify: n.default.Justify.BETWEEN,
              align: n.default.Align.CENTER,
              children: [
                s,
                (0, l.jsx)(n.default.Child, {
                  grow: 1,
                  children: (0, l.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: o,
                  }),
                }),
                null != d && null != u
                  ? (0, l.jsx)(a.Switch, { id: r, checked: u, onChange: d })
                  : null,
              ],
            }),
            (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-normal",
              className: i.cardDescription,
              children: t,
            }),
          ],
        });
      }
    },
    460812: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("414456"),
        n = s.n(a),
        i = s("669491"),
        r = s("77078"),
        o = s("145131"),
        d = s("854326"),
        u = e => {
          let {
            className: t,
            icon: s,
            noticeText: a,
            buttonText: u,
            onClick: c,
            canSync: h,
          } = e;
          return (0, l.jsx)(r.Card, {
            className: n(t, d.card),
            children: (0, l.jsxs)(o.default, {
              justify: o.default.Justify.BETWEEN,
              align: o.default.Align.CENTER,
              children: [
                (0, l.jsx)(s, {
                  width: 20,
                  height: 20,
                  color: i.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, l.jsx)("div", {
                  className: d.label,
                  children: (0, l.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: a,
                  }),
                }),
                h &&
                  (0, l.jsx)(r.Button, {
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    onClick: c,
                    children: u,
                  }),
              ],
            }),
          });
        };
    },
    51944: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          showPermissionLockoutModal: function () {
            return r;
          },
        });
      var l = s("404118"),
        a = s("701909"),
        n = s("49111"),
        i = s("782340");
      function r(e) {
        l.default.show({
          title: i.default.Messages.SELF_DENY_PERMISSION_TITLE,
          body: i.default.Messages.SELF_DENY_PERMISSION_BODY.format({
            name: e,
          }),
          cancelText: i.default.Messages.HELP_DESK,
          onCancel() {
            window.open(
              a.default.getArticleURL(n.HelpdeskArticles.PERMISSIONS_LOCKOUT)
            );
          },
        });
      }
    },
    995865: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return w;
          },
        });
      var l = s("37983"),
        a = s("884691"),
        n = s("446674"),
        i = s("77078"),
        r = s("913144"),
        o = s("18054"),
        d = s("54239"),
        u = s("800751"),
        c = s("534291"),
        h = s("575351"),
        E = s("716241"),
        f = s("679653"),
        m = s("419830"),
        g = s("817653"),
        T = s("300322"),
        S = s("161778"),
        N = s("233069"),
        C = s("161810"),
        _ = s("901998"),
        p = s("492114"),
        M = s("42203"),
        x = s("957255"),
        R = s("27618"),
        I = s("697218"),
        A = s("228220"),
        O = s("659500"),
        L = s("291013"),
        v = s("995553"),
        j = s("823362"),
        D = s("173446"),
        y = s("49111"),
        F = s("782340"),
        b = s("381006");
      function P(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          s = arguments.length > 2 ? arguments[2] : void 0;
        E.default.trackWithMetadata(y.AnalyticEvents.SETTINGS_PANE_VIEWED, {
          settings_type: "channel",
          origin_pane: t,
          destination_pane: e,
          location: s,
        });
      }
      class H extends a.PureComponent {
        componentDidMount() {
          P(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          r.default.wait(() => (0, o.close)());
        }
        componentDidUpdate(e) {
          let { formState: t, section: s } = e,
            {
              formState: l,
              section: a,
              canManageRoles: n,
              canManageChannels: i,
              canManageWebhooks: r,
            } = this.props;
          (i || n || r) &&
          (l !== y.FormStates.CLOSED || l === t) &&
          (n || a !== y.ChannelSettingsSections.PERMISSIONS) &&
          (r || a !== y.ChannelSettingsSections.INTEGRATIONS)
            ? a !== s && P(a, s)
            : (0, d.popLayer)();
        }
        render() {
          let {
            theme: e,
            sidebarTheme: t,
            section: s,
            channel: a,
            category: n,
            canManageRoles: r,
            canManageChannels: E,
            canDeleteChannels: T,
            canManageWebhooks: S,
          } = this.props;
          return null == a
            ? null
            : (0, l.jsx)(u.default, {
                theme: e,
                sidebarTheme: t,
                section: null != s ? s : y.ChannelSettingsSections.OVERVIEW,
                onSetSection: o.setSection,
                onClose: d.popLayer,
                sections: (function (e) {
                  let {
                      channel: t,
                      category: s,
                      canManageRoles: a,
                      canManageChannels: n,
                      canDeleteChannels: r,
                      canManageWebhooks: u,
                    } = e,
                    E = (0, m.getChannelIconComponent)(t),
                    { GUILD_CATEGORY: T } = y.ChannelTypes,
                    S = N.THREAD_CHANNEL_TYPES.has(t.type),
                    M =
                      t.type === T
                        ? F.default.Messages.DELETE_CATEGORY
                        : S
                          ? t.isForumPost()
                            ? F.default.Messages.DELETE_FORUM_POST
                            : F.default.Messages.DELETE_THREAD
                          : F.default.Messages.DELETE_CHANNEL;
                  return [
                    {
                      section: c.SectionTypes.HEADER,
                      label:
                        null != t
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                null != E
                                  ? (0, l.jsx)(E, {
                                      width: 12,
                                      height: 12,
                                      className: b.channelIcon,
                                    })
                                  : null,
                                (0, f.computeChannelName)(
                                  t,
                                  I.default,
                                  R.default
                                ),
                                null != s
                                  ? (0, l.jsx)(i.Text, {
                                      tag: "span",
                                      variant: "text-xs/semibold",
                                      color: "header-secondary",
                                      lineClamp: 1,
                                      className: b.category,
                                      children: (0, f.computeChannelName)(
                                        s,
                                        I.default,
                                        R.default
                                      ),
                                    })
                                  : null,
                              ],
                            })
                          : F.default.Messages.CHANNEL_SETTINGS,
                    },
                    {
                      section: y.ChannelSettingsSections.OVERVIEW,
                      label: F.default.Messages.OVERVIEW,
                      ariaLabel: F.default.Messages.OVERVIEW,
                      element: j.default,
                      notice: {
                        element: j.ChannelSettingsOverviewNotice,
                        stores: [p.default],
                      },
                    },
                    {
                      section: y.ChannelSettingsSections.PERMISSIONS,
                      label: F.default.Messages.PERMISSIONS,
                      element: g.default,
                      notice: {
                        element: D.ChannelSettingsPermissionsNotice,
                        stores: [_.default],
                      },
                      predicate: () => a && !S,
                    },
                    {
                      section: y.ChannelSettingsSections.INSTANT_INVITES,
                      label: F.default.Messages.INVITES,
                      element: v.default,
                      type: c.ContentTypes.CUSTOM,
                      predicate: () => t.type !== T && n && !S,
                    },
                    {
                      section: y.ChannelSettingsSections.INTEGRATIONS,
                      label: F.default.Messages.INTEGRATIONS_OVERVIEW,
                      ariaLabel: F.default.Messages.INTEGRATIONS_OVERVIEW,
                      element: L.default,
                      notice: {
                        stores: [C.default],
                        element: L.ChannelSettingsIntegrationsNotice,
                      },
                      predicate: () =>
                        !!u && N.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type),
                    },
                    { section: c.SectionTypes.DIVIDER },
                    {
                      section: y.ChannelSettingsSections.DELETE,
                      onClick() {
                        (0, i.openModal)(e =>
                          (0, l.jsx)(h.default, {
                            ...e,
                            onConfirm: () => {
                              e.onClose(),
                                O.ComponentDispatch.subscribeOnce(
                                  y.ComponentActions.LAYER_POP_COMPLETE,
                                  () => {
                                    (0, o.deleteChannel)(t.id);
                                  }
                                ),
                                (0, d.popLayer)();
                            },
                            channel: t,
                          })
                        );
                      },
                      label: M,
                      ariaLabel: M,
                      icon: (0, l.jsx)(A.default, { width: 16, height: 16 }),
                      predicate: () => r,
                    },
                  ];
                })({
                  channel: a,
                  category: n,
                  canManageRoles: r,
                  canManageChannels: E,
                  canDeleteChannels: T,
                  canManageWebhooks: S,
                }),
              });
        }
      }
      function w() {
        let { channel: e, analyticsLocation: t } = (0,
          n.useStateFromStoresObject)([p.default], () => p.default.getProps()),
          s = (0, n.useStateFromStores)([p.default], () =>
            p.default.getFormState()
          ),
          a = (0, n.useStateFromStores)([p.default], () =>
            p.default.getSection()
          ),
          i = (0, n.useStateFromStores)([S.default], () => S.default.theme),
          r = (0, n.useStateFromStores)([S.default], () =>
            S.default.darkSidebar ? y.ThemeTypes.DARK : void 0
          ),
          o = (0, T.useCanManageThread)(e),
          d = (0, T.useIsThreadModerator)(e),
          {
            canManageChannels: u,
            canManageRoles: c,
            canManageWebhooks: h,
          } = (0, n.useStateFromStoresObject)([x.default], () => ({
            canManageChannels: x.default.can(y.Permissions.MANAGE_CHANNELS, e),
            canManageRoles:
              null != e && x.default.can(y.Permissions.MANAGE_ROLES, e),
            canManageWebhooks:
              null != e && x.default.can(y.Permissions.MANAGE_WEBHOOKS, e),
          })),
          E = (0, n.useStateFromStores)([M.default], () =>
            M.default.getChannel(null == e ? void 0 : e.parent_id)
          );
        return (0, l.jsx)(H, {
          channel: e,
          category: E,
          canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
          canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
          canManageRoles: c,
          canManageWebhooks: h,
          formState: s,
          theme: i,
          sidebarTheme: r,
          section: a,
          analyticsLocation: t,
        });
      }
    },
    291013: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
          ChannelSettingsIntegrationsNotice: function () {
            return h;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("446674"),
        n = s("713841"),
        i = s("45299"),
        r = s("467733"),
        o = s("161810"),
        d = s("492114"),
        u = s("305961");
      function c(e) {
        let { refToScroller: t } = e,
          { channel: s } = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getProps(),
            []
          ),
          n = (0, a.useStateFromStores)(
            [u.default],
            () => (null != s ? u.default.getGuild(s.getGuildId()) : null),
            [s]
          ),
          {
            section: i,
            sectionId: c,
            webhooks: h,
            editedWebhook: E,
            isFetching: f,
            errors: m,
          } = (0, a.useStateFromStores)(
            [o.default],
            () => o.default.getProps(),
            []
          );
        return null == n || null == s
          ? null
          : (0, l.jsx)(r.default, {
              guild: n,
              channel: s,
              section: i,
              sectionId: c,
              webhooks: h,
              editedWebhook: E,
              isFetching: f,
              hasChanges: o.default.hasChanges,
              errors: m,
              refToScroller: t,
            });
      }
      function h() {
        let { channel: e, submitting: t } = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getProps()
          ),
          s = (0, a.useStateFromStores)(
            [u.default],
            () => (null != e ? u.default.getGuild(e.getGuildId()) : null),
            [e]
          );
        return (0, l.jsx)(i.default, {
          submitting: t,
          onReset: () => {
            n.default.init();
          },
          onSave: () => {
            null != s &&
              null != o.default.editedWebhook &&
              n.default.saveWebhook(s.id, o.default.editedWebhook);
          },
        });
      }
    },
    995553: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("446674"),
        n = s("758085"),
        i = s("492114"),
        r = s("305961"),
        o = s("957255"),
        d = s("102985"),
        u = s("49111");
      function c() {
        let e = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.hideInstantInvites
          ),
          { channel: t, guild: s } = (0, a.useStateFromStoresObject)(
            [i.default, r.default],
            () => {
              let { channel: e } = i.default.getProps(),
                t = null != e ? r.default.getGuild(e.getGuildId()) : null;
              return { channel: e, guild: t };
            },
            []
          ),
          c = (0, a.useStateFromStores)(
            [o.default],
            () =>
              null != t &&
              o.default.can(u.Permissions.CREATE_INSTANT_INVITE, t),
            [t]
          ),
          { invites: h, loading: E } = (0, a.useStateFromStoresObject)(
            [i.default],
            () => i.default.getInvites(),
            []
          );
        return (0, l.jsx)(n.default, {
          invites: h,
          loading: E,
          guild: s,
          channel: t,
          canCreateInvites: c,
          hide: e,
        });
      }
    },
    823362: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ChannelSettingsOverviewNotice: function () {
            return eS;
          },
          default: function () {
            return eC;
          },
        }),
        s("702976"),
        s("843762");
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("482402"),
        o = s("335710"),
        d = s("446674"),
        u = s("669491"),
        c = s("819855"),
        h = s("77078"),
        E = s("18054"),
        f = s("363484"),
        m = s("901582"),
        g = s("45299"),
        T = s("734575"),
        S = s("679653"),
        N = s("850391"),
        C = s("149022"),
        _ = s("681060"),
        p = s("86678"),
        M = s("867805"),
        x = s("339792"),
        R = s("630473"),
        I = s("20105"),
        A = s("677315"),
        O = s("252862"),
        L = s("300322"),
        v = s("24337"),
        j = s("980480"),
        D = s("161778"),
        y = s("233069"),
        F = s("271938"),
        b = s("492114"),
        P = s("305961"),
        H = s("957255"),
        w = s("402904"),
        U = s("697218"),
        B = s("145131"),
        G = s("476765"),
        V = s("956089"),
        k = s("404008"),
        W = s("718517"),
        Y = s("568734"),
        z = s("701909"),
        K = s("686069"),
        Z = s("792861"),
        Q = s("370216"),
        X = s("49111"),
        J = s("724210"),
        q = s("958706"),
        $ = s("953371"),
        ee = s("515631"),
        et = s("648564"),
        es = s("782340"),
        el = s("612574"),
        ea = s("890957");
      let en = (0, G.uid)(),
        ei = (0, G.uid)(),
        er = (0, G.uid)(),
        eo = (0, G.uid)(),
        ed = (0, G.uid)(),
        eu = (0, G.uid)(),
        ec = (0, G.uid)(),
        eh = (0, G.uid)(),
        eE = (0, G.uid)(),
        ef = (0, G.uid)(),
        em = (0, G.uid)(),
        eg = (0, y.createChannelRecord)({ id: "1", type: X.ChannelTypes.DM }),
        eT = "AUTOMATIC_RTC_REGION",
        eS = d.default.connectStores([b.default], () => {
          let { channel: e, submitting: t } = b.default.getProps();
          return {
            channel: e,
            submitting: t,
            onReset() {
              null != e && (0, E.init)(e.id);
            },
            onSave() {
              if (null == e) return;
              let {
                name: t,
                type: s,
                topic: l,
                bitrate: a,
                userLimit: n,
                nsfw: i,
                flags: r,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: d,
                threadMetadata: u,
                defaultAutoArchiveDuration: c,
                template: h,
                rtcRegion: f,
                videoQualityMode: m,
                defaultReactionEmoji: g,
                availableTags: T,
                defaultSortOrder: S,
                defaultForumLayout: N,
              } = e;
              e.isThread() && (t = (0, v.default)(t, !0)),
                (0, E.saveChannel)(e.id, {
                  name: t,
                  type: s,
                  topic: l,
                  bitrate: a,
                  userLimit: n,
                  nsfw: i,
                  flags: r,
                  rateLimitPerUser: o,
                  defaultThreadRateLimitPerUser: d,
                  autoArchiveDuration:
                    null == u ? void 0 : u.autoArchiveDuration,
                  locked: null == u ? void 0 : u.locked,
                  invitable: null == u ? void 0 : u.invitable,
                  defaultAutoArchiveDuration: c,
                  template: h,
                  rtcRegion: f,
                  videoQualityMode: m,
                  defaultReactionEmoji: g,
                  availableTags: T,
                  defaultSortOrder: S,
                  defaultForumLayout: N,
                });
            },
          };
        })(g.default);
      class eN extends a.PureComponent {
        componentDidMount() {
          null == this.props.regions &&
            null != this.props.guild &&
            f.default.fetchRegions(this.props.guild.id);
        }
        componentDidUpdate(e) {
          var t, s, l, a;
          let n =
            null !==
              (l =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== l
              ? l
              : "";
          (null !==
            (a = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) &&
          void 0 !== a
            ? a
            : "") !== n &&
            n !== this.state.textTopicValue &&
            this.setState({
              textTopicValue: n,
              richTopicValue: (0, C.toRichValue)(n),
            });
        }
        getError(e) {
          let { errors: t } = this.props;
          return null == t ? void 0 : t[e];
        }
        getCooldownSliderMarker(e) {
          return (0, K.getSecondsSliderLabel)(e, !0);
        }
        getAutoArchiveDurationSliderMarker(e) {
          return (0, K.getSecondsSliderLabel)(e * W.default.Seconds.MINUTE, !0);
        }
        renderChannelInfo(e, t) {
          var s, a, n, d, c, E;
          let f, g;
          let {
              canManageChannels: T,
              canSendMessages: S,
              isThreadModerator: C,
              canManageThread: p,
              guild: x,
              isForumPost: A,
              isOwner: L,
            } = this.props,
            v = y.THREAD_CHANNEL_TYPES.has(e.type),
            D = e.isForumLikeChannel(),
            F =
              D &&
              (null === (s = e.availableTags) || void 0 === s
                ? void 0
                : s.every(e => e.moderated)),
            b =
              (null === (a = U.default.getCurrentUser()) || void 0 === a
                ? void 0
                : a.isStaff()) === !0,
            P = y.TOPIC_CHANNEL_TYPES.has(e.type)
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(h.FormItem, {
                      title: D
                        ? es.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES
                        : es.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                      className: ea.marginTop20,
                      children: D
                        ? (0, l.jsx)(_.default, {
                            innerClassName: el.forumGuidelines,
                            characterCountClassName:
                              el.forumGuidelinesCharacterCount,
                            maxCharacterCount: J.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
                            onChange: this.handleChangeRichTopic,
                            placeholder:
                              es.default.Messages.CHANNEL_TOPIC_EMPTY,
                            channel: eg,
                            textValue: this.state.textTopicValue,
                            richValue: this.state.richTopicValue,
                            type: N.ChatInputTypes.FORUM_CHANNEL_GUIDELINES,
                            onBlur: () => {
                              this.setState({ topicFocused: !1 });
                            },
                            onFocus: () => {
                              this.setState({ topicFocused: !0 });
                            },
                            focused: this.state.topicFocused,
                            onSubmit: this.handleSubmit,
                            disableThemedBackground: !0,
                          })
                        : (0, l.jsx)(h.TextArea, {
                            autoFocus:
                              this.props.subsection ===
                              X.ChannelSettingsSubsections.TOPIC,
                            placeholder:
                              es.default.Messages.CHANNEL_TOPIC_EMPTY,
                            value: M.default.translateSurrogatesToInlineEmoji(
                              e.topic
                            ),
                            onChange: this.handleChangeTopic,
                            error: this.getError("topic"),
                            maxLength: J.MAX_CHANNEL_TOPIC_LENGTH,
                            disabled: !T,
                            autosize: !0,
                          }),
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            H =
              D && b
                ? (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(h.FormItem, {
                        title: es.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
                        className: ea.marginTop20,
                        children: (0, l.jsx)(h.TextArea, {
                          placeholder:
                            es.default.Messages
                              .FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
                          value: M.default.translateSurrogatesToInlineEmoji(
                            null !== (n = e.template) && void 0 !== n ? n : ""
                          ),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: $.MAX_FORUM_TEMPLATE_LENGTH,
                          disabled: !T,
                          autosize: !0,
                        }),
                      }),
                      (0, l.jsx)(h.FormDivider, {
                        className: i(ea.marginTop40, ea.marginBottom40),
                      }),
                    ],
                  })
                : null,
            w = e.isForumLikeChannel()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)(h.FormItem, {
                      children: [
                        (0, l.jsx)(h.FormTitle, {
                          id: en,
                          className: el.formTitle,
                          children: es.default.Messages.FORUM_TAGS,
                        }),
                        (0, l.jsx)(h.FormText, {
                          id: ei,
                          type: h.FormText.Types.DESCRIPTION,
                          className: el.description,
                          children: es.default.Messages.FORM_HELP_FORUM_TAGS,
                        }),
                        (0, l.jsx)(R.default, { channel: e }),
                      ],
                    }),
                    (0, l.jsx)(h.Checkbox, {
                      disabled: !T || F,
                      value: e.hasFlag(J.ChannelFlags.REQUIRE_TAG),
                      type: h.Checkbox.Types.INVERTED,
                      onChange: (e, t) => this.handleRequireTagChanged(t),
                      children: (0, l.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: es.default.Messages.FORUM_REQUIRE_TAG_NOTE,
                      }),
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            B = e.isForumLikeChannel()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: el.twoColumnSettings,
                      children: [
                        (0, l.jsxs)(h.FormItem, {
                          className: i(
                            el.settingsLeft,
                            el.settingsDefaultReaction
                          ),
                          children: [
                            (0, l.jsx)(h.FormTitle, {
                              id: er,
                              className: el.formTitle,
                              children:
                                es.default.Messages.FORUM_DEFAULT_REACTION,
                            }),
                            (0, l.jsx)(h.FormText, {
                              id: ei,
                              type: h.FormText.Types.DESCRIPTION,
                              className: el.description,
                              children:
                                es.default.Messages
                                  .FORUM_DEFAULT_REACTION_DESCRIPTION,
                            }),
                            (0, l.jsxs)("div", {
                              className: el.buttonRow,
                              children: [
                                (0, l.jsx)(h.Popout, {
                                  renderPopout: this.renderEmojiPicker,
                                  position: "right",
                                  animation: h.Popout.Animation.NONE,
                                  align: "center",
                                  children: e =>
                                    (0, l.jsx)(h.Button, {
                                      ...e,
                                      disabled: !T,
                                      onClick: t => {
                                        var s;
                                        null === (s = e.onClick) ||
                                          void 0 === s ||
                                          s.call(e, t);
                                      },
                                      children:
                                        es.default.Messages.SELECT_EMOJI,
                                    }),
                                }),
                                null != e.defaultReactionEmoji
                                  ? (0, l.jsx)(h.Button, {
                                      className: el.removeButton,
                                      onClick: () =>
                                        this.handleChangeDefaultReactionEmoji(
                                          null
                                        ),
                                      size: h.Button.Sizes.MIN,
                                      look: h.Button.Looks.LINK,
                                      color: h.Button.Colors.RED,
                                      children: es.default.Messages.REMOVE,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)(I.default, {
                          reactionEmoji: e.defaultReactionEmoji,
                        }),
                      ],
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            G = e.isForumChannel()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: el.twoColumnSettings,
                      children: [
                        (0, l.jsxs)(h.FormItem, {
                          className: i(el.settingsLeft, el.settingsDefaultView),
                          children: [
                            (0, l.jsx)(h.FormSection, {
                              title:
                                es.default.Messages
                                  .FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
                              children: (0, l.jsx)(h.SingleSelect, {
                                options: [
                                  {
                                    label:
                                      es.default.Messages
                                        .FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                                    value: r.ForumLayout.LIST,
                                  },
                                  {
                                    label:
                                      es.default.Messages
                                        .FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                                    value: r.ForumLayout.GRID,
                                  },
                                ],
                                value:
                                  null !== (d = e.defaultForumLayout) &&
                                  void 0 !== d
                                    ? d
                                    : r.ForumLayout.LIST,
                                onChange: this.handleChangeDefaultForumLayout,
                              }),
                            }),
                            (0, l.jsx)(h.FormText, {
                              className: ea.marginTop8,
                              type: h.FormText.Types.DESCRIPTION,
                              children:
                                es.default.Messages
                                  .FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION,
                            }),
                          ],
                        }),
                        e.defaultForumLayout === r.ForumLayout.GRID
                          ? (0, l.jsx)(Z.default, {
                              className: el.defaultImageView,
                            })
                          : (0, l.jsx)(Q.default, {
                              className: el.defaultImageView,
                            }),
                      ],
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            k = e.isForumLikeChannel()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(h.FormItem, {
                      children: (0, l.jsx)(h.FormSection, {
                        title: es.default.Messages.FORUM_DEFAULT_SORT_ORDER,
                        children: (0, l.jsx)(h.SingleSelect, {
                          options: [
                            {
                              label: es.default.Messages.FORUM_SORT_ACTIVITY,
                              value: o.ThreadSortOrder.LATEST_ACTIVITY,
                            },
                            {
                              label: es.default.Messages.FORUM_SORT_CREATION,
                              value: o.ThreadSortOrder.CREATION_DATE,
                            },
                          ],
                          value: e.getDefaultSortOrder(),
                          onChange: this.handleChangeDefaultSortOrder,
                        }),
                      }),
                    }),
                    (0, l.jsx)(h.FormText, {
                      className: ea.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children:
                        es.default.Messages
                          .FORUM_DEFAULT_SORT_ORDER_DESCRIPTION,
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            W = v ? C : T,
            Y = y.SLOWMODE_CHANNEL_TYPES.has(e.type)
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)(h.FormItem, {
                      children: [
                        (0, l.jsx)(h.FormTitle, {
                          id: eo,
                          className: ea.marginBottom8,
                          children: es.default.Messages.FORM_LABEL_SLOWMODE,
                        }),
                        D
                          ? (0, l.jsx)(h.FormTitle, {
                              className: ea.marginTop20,
                              children:
                                es.default.Messages
                                  .FORUM_SETTING_SLOW_MODE_POSTS,
                            })
                          : null,
                        (0, l.jsx)(h.Slider, {
                          className: ea.marginTop20,
                          initialValue: e.rateLimitPerUser,
                          markers: X.SLOWMODE_VALUES,
                          stickToMarkers: !0,
                          onValueChange: this.handleChangeSlowmode,
                          onMarkerRender: this.getCooldownSliderMarker,
                          disabled: !W,
                          equidistant: !0,
                          "aria-labelledby": eo,
                          "aria-describedby": ed,
                        }),
                        (0, l.jsx)(h.FormText, {
                          id: ed,
                          type: h.FormText.Types.DESCRIPTION,
                          children: D
                            ? es.default.Messages.FORM_HELP_SLOWMODE_FORUM
                            : v
                              ? es.default.Messages.FORM_HELP_SLOWMODE_THREAD
                              : es.default.Messages.FORM_HELP_SLOWMODE,
                        }),
                        D
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(h.FormTitle, {
                                  className: ea.marginTop20,
                                  children:
                                    es.default.Messages
                                      .FORUM_SETTING_SLOW_MODE_MESSAGES,
                                }),
                                (0, l.jsx)(h.Slider, {
                                  className: ea.marginTop20,
                                  initialValue:
                                    null !==
                                      (c = e.defaultThreadRateLimitPerUser) &&
                                    void 0 !== c
                                      ? c
                                      : 0,
                                  markers: X.SLOWMODE_VALUES,
                                  stickToMarkers: !0,
                                  onValueChange:
                                    this.handleChangeThreadMessageSlowmode,
                                  onMarkerRender: this.getCooldownSliderMarker,
                                  disabled: !W,
                                  equidistant: !0,
                                  "aria-labelledby": eo,
                                  "aria-describedby": ed,
                                }),
                                (0, l.jsx)(h.FormText, {
                                  type: h.FormText.Types.DESCRIPTION,
                                  children:
                                    es.default.Messages
                                      .FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                  ],
                })
              : null,
            K =
              v && null != e.threadMetadata
                ? (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(h.FormItem, {
                        children: (0, l.jsx)(m.default, {
                          page: X.AnalyticsPages.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(j.default, {
                            autoArchiveDuration:
                              null !==
                                (E = e.threadMetadata.autoArchiveDuration) &&
                              void 0 !== E
                                ? E
                                : et.DEFAULT_AUTO_ARCHIVE_DURATION,
                            guild: x,
                            channel: e,
                            onChange: this.handleAutoArchiveDurationChanged,
                            isDisabled: !p,
                          }),
                        }),
                      }),
                      (0, l.jsx)(h.FormText, {
                        className: ea.marginTop8,
                        type: h.FormText.Types.DESCRIPTION,
                        children: A
                          ? es.default.Messages
                              .FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST
                          : es.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION,
                      }),
                    ],
                  })
                : null,
            q =
              e.type === X.ChannelTypes.PRIVATE_THREAD &&
              null != e.threadMetadata
                ? (0, l.jsx)("div", {
                    children: (0, l.jsx)(h.FormSwitch, {
                      note: es.default.Messages.FORM_HELP_THREAD_INVITABLE,
                      onChange: this.handleInvitableChanged,
                      value: e.threadMetadata.invitable,
                      hideBorder: !0,
                      disabled: !p,
                      children:
                        es.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    }),
                  })
                : null,
            ee = y.NSFW_CHANNEL_TYPES.has(e.type)
              ? (0, l.jsx)("div", {
                  children: (0, l.jsx)(h.FormSwitch, {
                    note: es.default.Messages.FORM_HELP_NSFW,
                    onChange: this.handleNSFWChange,
                    value: e.isNSFW(),
                    hideBorder: !0,
                    disabled: !T,
                    children: es.default.Messages.FORM_LABEL_NSFW_CHANNEL,
                  }),
                })
              : null,
            eu =
              y.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) &&
              null != x &&
              x.hasFeature(X.GuildFeatures.NEWS) &&
              e.id !== (null == x ? void 0 : x.rulesChannelId) &&
              e.id !== (null == x ? void 0 : x.publicUpdatesChannelId)
                ? (0, l.jsx)("div", {
                    children: (0, l.jsx)(h.FormSwitch, {
                      note: es.default.Messages.FORM_HELP_NEWS.format({
                        documentationLink: z.default.getArticleURL(
                          X.HelpdeskArticles.ANNOUNCEMENT_CHANNELS
                        ),
                      }),
                      onChange: this.handleNewsChange,
                      value: e.type === X.ChannelTypes.GUILD_ANNOUNCEMENT,
                      hideBorder: !0,
                      disabled: !T,
                      children: es.default.Messages.FORM_LABEL_NEWS_CHANNEL,
                    }),
                  })
                : null,
            ec = y.THREADED_CHANNEL_TYPES.has(e.type)
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                    (0, l.jsx)(m.default, {
                      page: X.AnalyticsPages.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(j.default, {
                        autoArchiveDuration: (0, O.getAutoArchiveDuration)(
                          e,
                          null
                        ),
                        guild: x,
                        channel: e,
                        onChange: this.handleChangeDefaultAutoArchiveDuration,
                        isDisabled: !T,
                      }),
                    }),
                    (0, l.jsx)(h.FormText, {
                      className: ea.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children: e.isForumLikeChannel()
                        ? es.default.Messages
                            .FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST
                        : es.default.Messages
                            .FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION,
                    }),
                  ],
                })
              : null,
            eh = this.props.showChannelSummariesSettings
              ? (0, l.jsx)(h.FormSwitch, {
                  note: es.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format(
                    {
                      helpdeskArticle: z.default.getArticleURL(
                        X.HelpdeskArticles.CONVERSATION_SUMMARIES
                      ),
                    }
                  ),
                  onChange: this.handleChannelSummariesToggled,
                  value:
                    !e.hasFlag(J.ChannelFlags.SUMMARIES_DISABLED) &&
                    (null == x
                      ? void 0
                      : x.hasFeature(
                          X.GuildFeatures.SUMMARIES_ENABLED_BY_USER
                        )),
                  hideBorder: !0,
                  disabled:
                    !T ||
                    !(null == x
                      ? void 0
                      : x.hasFeature(
                          X.GuildFeatures.SUMMARIES_ENABLED_BY_USER
                        )),
                  children: (0, l.jsxs)("div", {
                    className: el.badgedItem,
                    children: [
                      es.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE,
                      (0, l.jsx)(V.TextBadge, {
                        text: es.default.Messages.BETA,
                        color: u.default.unsafe_rawColors.BRAND_500.css,
                        className: el.betaTag,
                      }),
                    ],
                  }),
                })
              : null,
            eE = e.isMediaChannel()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(h.FormDivider, {
                      className: i(ea.marginTop40, ea.marginBottom40),
                    }),
                    (0, l.jsx)(h.FormSwitch, {
                      onChange: this.handleShowMediaOptionsToggled,
                      value: !e.hasFlag(
                        J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS
                      ),
                      note: es.default.Messages
                        .MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
                      hideBorder: !0,
                      disabled: !T,
                      children:
                        es.default.Messages
                          .MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL,
                    }),
                  ],
                })
              : null;
          return (
            e.type === X.ChannelTypes.GUILD_CATEGORY
              ? ((g = es.default.Messages.CATEGORY_NAME), (f = "category-name"))
              : e.isForumPost()
                ? ((g = es.default.Messages.FORUM_POST_TITLE),
                  (f = "post-title"))
                : v
                  ? ((g = es.default.Messages.THREAD_NAME), (f = "thread-name"))
                  : ((g = es.default.Messages.FORM_LABEL_CHANNEL_NAME),
                    (f = "channel-name")),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(h.FormItem, {
                  title: g,
                  children: (0, l.jsx)(h.TextInput, {
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: f,
                    autoFocus: !0,
                    disabled: L ? !S : !T,
                    maxLength: X.MAX_CHANNEL_NAME_LENGTH,
                  }),
                }),
                (0, l.jsx)(h.FormDivider, {
                  className: i(ea.marginTop40, ea.marginBottom40),
                }),
                P,
                H,
                w,
                B,
                Y,
                K,
                G,
                k,
                q,
                ee,
                eu,
                eh,
                ec,
                eE,
              ],
            })
          );
        }
        renderHomeFlags(e) {
          let { canManageChannels: t } = this.props;
          if (!(0, A.canSeeGuildHome)(e.guild_id)) return null;
          let s = X.ChannelTypesSets.GUILD_PARENTABLE.has(e.type)
              ? (0, l.jsx)("div", {
                  children: (0, l.jsx)(h.FormSwitch, {
                    note: es.default.Messages
                      .ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
                    onChange: this.handleActiveChannelsRemovedChange,
                    value: !e.hasFlag(J.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
                    hideBorder: !0,
                    disabled: !t,
                    children: (0, l.jsxs)("div", {
                      className: el.badgedItem,
                      children: [
                        es.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL,
                        (0, l.jsx)(V.TextBadge, {
                          text: es.default.Messages.BETA,
                          color: u.default.unsafe_rawColors.BRAND_500.css,
                          className: el.betaTag,
                        }),
                      ],
                    }),
                  }),
                })
              : null,
            a = ee.GUILD_FEED_CHANNEL_TYPES.has(e.type)
              ? (0, l.jsx)("div", {
                  children: (0, l.jsx)(h.FormSwitch, {
                    note: es.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format(
                      {
                        warningHook: (e, t) =>
                          (0, l.jsx)(
                            "span",
                            { className: el.warningText, children: e },
                            t
                          ),
                      }
                    ),
                    onChange: this.handleGuildFeedRemovedChange,
                    value: e.hasFlag(J.ChannelFlags.GUILD_FEED_REMOVED),
                    hideBorder: !0,
                    disabled: !t,
                    children: (0, l.jsxs)("div", {
                      className: el.badgedItem,
                      children: [
                        es.default.Messages.GUILD_FEED_DEMOTE_CHANNEL,
                        (0, l.jsx)(V.TextBadge, {
                          text: es.default.Messages.BETA,
                          color: u.default.unsafe_rawColors.BRAND_500.css,
                          className: el.betaTag,
                        }),
                      ],
                    }),
                  }),
                })
              : null;
          return null == s && null == a
            ? null
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(h.FormDivider, {
                    className: i(ea.marginTop40, ea.marginBottom40),
                  }),
                  (0, l.jsxs)(h.FormItem, {
                    title: es.default.Messages.GUILD_HOME,
                    children: [
                      (0, l.jsx)(h.Text, {
                        className: ea.marginBottom20,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children:
                          es.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format(
                            {
                              helpCenterLink: z.default.getArticleURL(
                                X.HelpdeskArticles.GUILD_HOME
                              ),
                            }
                          ),
                      }),
                      s,
                      a,
                    ],
                  }),
                ],
              });
        }
        renderBitrate(e) {
          return "".concat(Math.round(e / 1e3), "kbps");
        }
        renderVoiceBitrate(e, t) {
          let { canManageChannels: s } = this.props;
          if (!this.showVoiceSettings()) return null;
          let a = (0, k.getBitrateLimit)(t, e),
            n = this.getError("bitrate");
          return (0, l.jsxs)(B.default, {
            direction: B.default.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
              (0, l.jsx)(h.FormTitle, {
                id: eu,
                children: es.default.Messages.FORM_LABEL_BITRATE,
              }),
              "" !== n &&
                (0, l.jsx)(h.FormText, {
                  id: ec,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: u.default.unsafe_rawColors.RED_400.css },
                  className: ea.marginBottom8,
                  children: n,
                }),
              (0, l.jsx)(h.Slider, {
                initialValue: Math.min(e.bitrate, a),
                onValueChange: this.handleChangeBitrate,
                onValueRender: this.renderBitrate,
                onMarkerRender: this.renderBitrate,
                markers: [X.BITRATE_MIN, X.BITRATE_DEFAULT, a],
                minValue: X.BITRATE_MIN,
                maxValue: a,
                keyboardStep: X.BITRATE_STEP,
                disabled: !s,
                "aria-labelledby": eu,
                "aria-describedby": null != n && "" !== n ? ec : eh,
              }),
              a > X.BITRATE_DEFAULT
                ? (0, l.jsx)(h.FormText, {
                    id: eh,
                    type: h.FormTextTypes.DESCRIPTION,
                    children: es.default.Messages.FORM_HELP_BITRATE.format({
                      bitrate: X.BITRATE_DEFAULT / 1e3,
                    }),
                  })
                : null,
            ],
          });
        }
        showVoiceSettings() {
          let { channel: e } = this.props;
          return (
            null != e &&
            null != e.guild_id &&
            y.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) &&
            (e.isGuildVocal() ||
              L.VoiceInThreadsExperiment.getCurrentConfig({
                guildId: e.guild_id,
                location: "9b50bd_1",
              }).enabled)
          );
        }
        renderVideoQualityMode(e) {
          var t;
          let { canManageChannels: s } = this.props;
          if (!this.showVoiceSettings()) return null;
          let a = [
            {
              value: X.VideoQualityMode.AUTO,
              name: es.default.Messages.VIDEO_QUALITY_MODE_AUTO,
            },
            {
              value: X.VideoQualityMode.FULL,
              name: es.default.Messages.VIDEO_QUALITY_MODE_FULL,
            },
          ];
          return (0, l.jsxs)(B.default, {
            direction: B.default.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
              (0, l.jsx)(h.FormItem, {
                title: es.default.Messages.FORM_LABEL_VIDEO_QUALITY,
                children: (0, l.jsx)(h.RadioGroup, {
                  onChange: e => {
                    let { value: t } = e;
                    return this.handleVideoQualityModeChange(t);
                  },
                  options: a,
                  value:
                    null !== (t = e.videoQualityMode) && void 0 !== t
                      ? t
                      : X.VideoQualityMode.AUTO,
                  disabled: !s,
                }),
              }),
              (0, l.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children:
                  es.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format(),
              }),
            ],
          });
        }
        onRenderUserLimit(e) {
          return 0 === (e = Math.round(e))
            ? es.default.Messages.NO_USER_LIMIT
            : es.default.Messages.NUM_USERS.format({ num: e });
        }
        renderUserLimit(e) {
          let { canManageChannels: t } = this.props;
          if (!this.showVoiceSettings()) return null;
          let s = this.getError("user_limit"),
            a = e.isGuildStageVoice()
              ? X.MAX_STAGE_VOICE_USER_LIMIT
              : X.MAX_VOICE_USER_LIMIT;
          return (0, l.jsxs)(B.default, {
            direction: B.default.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
              (0, l.jsx)(h.FormTitle, {
                id: eE,
                children: es.default.Messages.FORM_LABEL_USER_LIMIT,
              }),
              "" !== s &&
                (0, l.jsx)(h.FormText, {
                  id: ef,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: u.default.unsafe_rawColors.RED_400.css },
                  className: ea.marginBottom8,
                  children: s,
                }),
              (0, l.jsx)(h.Slider, {
                initialValue: Math.min(e.userLimit, a),
                onValueChange: this.handleUserLimitChange,
                onValueRender: this.onRenderUserLimit,
                onMarkerRender: e => (0 === Math.round(e) ? "∞" : e),
                markers: [0, a],
                minValue: 0,
                maxValue: a,
                disabled: !t,
                "aria-labelledby": eE,
                "aria-describedby": null != s && "" !== s ? ef : em,
              }),
              (0, l.jsx)(h.FormText, {
                id: em,
                type: h.FormTextTypes.DESCRIPTION,
                children: (e.isGuildStageVoice()
                  ? es.default.Messages.FORM_HELP_USER_LIMIT_STAGE
                  : es.default.Messages.FORM_HELP_USER_LIMIT
                ).format(),
              }),
            ],
          });
        }
        renderRegionOverride(e) {
          var t;
          let { regions: s, canManageChannels: a, guild: n } = this.props;
          if (null == n || !this.showVoiceSettings() || e.isGuildStageVoice())
            return null;
          let i = [];
          if (null != s) {
            let e = s.filter(e => !e.deprecated && !e.hidden);
            (i = e.map(e => ({ label: e.name, value: e.id }))).unshift({
              label: es.default.Messages.AUTOMATIC_REGION,
              value: eT,
            });
          }
          let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eT;
          return (0, l.jsxs)(B.default, {
            direction: B.default.Direction.VERTICAL,
            children: [
              (0, l.jsx)(h.FormTitle, {
                children: es.default.Messages.FORM_LABEL_REGION_OVERRIDE,
              }),
              (0, l.jsx)(h.SingleSelect, {
                options: i,
                value: r,
                onChange: this.handleRegionChange,
                isDisabled: !a,
              }),
              (0, l.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children: es.default.Messages.FORM_HELP_REGION_OVERRIDE,
              }),
            ],
          });
        }
        renderJuiceImage(e) {
          let t;
          let { theme: a } = this.props;
          return (
            (t =
              e.type === X.ChannelTypes.GUILD_CATEGORY
                ? (0, c.isThemeDark)(a)
                  ? s("23141")
                  : s("182418")
                : (0, c.isThemeDark)(a)
                  ? s("34705")
                  : s("164370")),
            (0, l.jsx)(B.default, {
              justify: B.default.Justify.CENTER,
              className: ea.marginTop60,
              children: (0, l.jsx)("img", {
                alt: "",
                width: 280,
                height: 165,
                src: t,
              }),
            })
          );
        }
        render() {
          let { channel: e, channelName: t, guild: s } = this.props;
          return null == e || null == t || null == s
            ? null
            : (0, l.jsxs)(h.FormSection, {
                className: "channel-settings-overview",
                tag: h.FormTitleTags.H1,
                title: es.default.Messages.OVERVIEW,
                children: [
                  this.renderChannelInfo(e, t),
                  this.showVoiceSettings()
                    ? (0, l.jsx)(h.FormDivider, {
                        className: i(ea.marginTop40, ea.marginBottom40),
                      })
                    : null,
                  this.renderVoiceBitrate(e, s),
                  this.renderVideoQualityMode(e),
                  this.renderUserLimit(e),
                  this.renderRegionOverride(e),
                  this.renderHomeFlags(e),
                  this.renderJuiceImage(e),
                ],
              });
        }
        handleSubmit() {
          return new Promise(e => {
            e({ shouldClear: !1, shouldRefocus: !0 });
          });
        }
        constructor(e) {
          var t, a;
          super(e),
            (this.renderEmojiPicker = e => {
              let { closePopout: t } = e,
                { channel: s } = this.props;
              return (0, l.jsx)(p.default, {
                guildId: null == s ? void 0 : s.guild_id,
                closePopout: t,
                onSelectEmoji: (e, s) => {
                  this.handleChangeDefaultReactionEmoji(e), s && t();
                },
                pickerIntention: q.EmojiIntention.COMMUNITY_CONTENT,
                channel: s,
              });
            }),
            (this.handleRequireTagChanged = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, Y.setFlag)(t.flags, J.ChannelFlags.REQUIRE_TAG, e);
              (0, E.updateChannel)({ flags: s });
            }),
            (this.handleChangeName = e => {
              let { channel: t } = this.props;
              null != t &&
                (t.isThread()
                  ? (e = (0, v.default)(e, !1))
                  : X.ChannelTypesSets.LIMITED_CHANNEL_NAME.has(t.type) &&
                    (e = (0, k.sanitizeGuildTextChannelName)(e)),
                (0, E.updateChannel)({ name: e }));
            }),
            (this.handleBlurName = () => {
              let { channel: e, channelName: t } = this.props;
              if ((null == e ? void 0 : e.isThread()) && null != t) {
                let e = (0, v.default)(t, !0);
                e !== t && (0, E.updateChannel)({ name: e });
              }
            }),
            (this.handleChangeTopic = e => {
              (0, E.updateChannel)({
                topic: M.default.translateInlineEmojiToSurrogates(e),
              });
            }),
            (this.handleChangeRichTopic = (e, t, s) => {
              this.setState({ textTopicValue: t, richTopicValue: s }),
                this.handleChangeTopic(t);
            }),
            (this.handleChangeTemplate = e => {
              (0, E.updateChannel)({
                template: M.default.translateInlineEmojiToSurrogates(e),
              });
            }),
            (this.handleChangeDefaultReactionEmoji = e => {
              let t =
                null == e
                  ? null
                  : (null == e ? void 0 : e.id) != null
                    ? { emojiId: e.id, emojiName: void 0 }
                    : {
                        emojiId: void 0,
                        emojiName: e.optionallyDiverseSequence,
                      };
              (0, E.updateChannel)({ defaultReactionEmoji: t });
            }),
            (this.handleChangeDefaultForumLayout = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, E.updateChannel)({ defaultForumLayout: e }),
                this.props.handleSetDefaultLayout(e);
            }),
            (this.handleChangeDefaultSortOrder = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, E.updateChannel)({ defaultSortOrder: e });
            }),
            (this.handleChangeBitrate = e => {
              (0, E.updateChannel)({ bitrate: 1e3 * Math.round(e / 1e3) });
            }),
            (this.handleUserLimitChange = e => {
              (0, E.updateChannel)({ userLimit: Math.round(e) });
            }),
            (this.handleNSFWChange = e => {
              (0, E.updateChannel)({ nsfw: e });
            }),
            (this.handleGuildFeedRemovedChange = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              if (!e) {
                let e = (0, Y.setFlag)(
                  t.flags,
                  J.ChannelFlags.GUILD_FEED_REMOVED,
                  !1
                );
                (0, E.updateChannel)({ flags: e });
                return;
              }
              (0, h.openModalLazy)(async () => {
                let { default: e } = await s
                  .el("360476")
                  .then(s.bind(s, "360476"));
                return s =>
                  (0, l.jsx)(e, {
                    ...s,
                    channelId: t.id,
                    onSubmit: () => {
                      let e = (0, Y.setFlag)(
                        t.flags,
                        J.ChannelFlags.GUILD_FEED_REMOVED,
                        !0
                      );
                      (0, E.updateChannel)({ flags: e });
                    },
                  });
              });
            }),
            (this.handleActiveChannelsRemovedChange = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, Y.setFlag)(
                t.flags,
                J.ChannelFlags.ACTIVE_CHANNELS_REMOVED,
                !e
              );
              (0, E.updateChannel)({ flags: s });
            }),
            (this.handleNewsChange = e => {
              (0, E.updateChannel)({
                type: e
                  ? X.ChannelTypes.GUILD_ANNOUNCEMENT
                  : X.ChannelTypes.GUILD_TEXT,
              });
            }),
            (this.handleChangeSlowmode = e => {
              (0, E.updateChannel)({ rateLimitPerUser: e });
            }),
            (this.handleChangeThreadMessageSlowmode = e => {
              (0, E.updateChannel)({ defaultThreadRateLimitPerUser: e });
            }),
            (this.handleChangeDefaultAutoArchiveDuration = e => {
              (0, E.updateChannel)({ defaultAutoArchiveDuration: e });
            }),
            (this.handleRegionChange = e => {
              (0, E.updateChannel)({ rtcRegion: e === eT ? null : e });
            }),
            (this.handleVideoQualityModeChange = e => {
              (0, E.updateChannel)({ videoQualityMode: e });
            }),
            (this.handleAutoArchiveDurationChanged = e => {
              (0, E.updateChannel)({ autoArchiveDuration: e });
            }),
            (this.handleInvitableChanged = e => {
              (0, E.updateChannel)({ invitable: e });
            }),
            (this.handleChannelSummariesToggled = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, Y.setFlag)(
                t.flags,
                J.ChannelFlags.SUMMARIES_DISABLED,
                !e
              );
              (0, E.updateChannel)({ flags: s });
            }),
            (this.handleShowMediaOptionsToggled = e => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, Y.setFlag)(
                t.flags,
                J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS,
                !e
              );
              (0, E.updateChannel)({ flags: s });
            });
          let n =
            null !==
              (a =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== a
              ? a
              : "";
          this.state = {
            textTopicValue: n,
            richTopicValue: (0, C.toRichValue)(n),
            topicFocused: !1,
          };
        }
      }
      function eC() {
        let {
            errors: e,
            channel: t,
            submitting: s,
            subsection: n,
          } = (0, d.useStateFromStoresObject)([b.default], () =>
            b.default.getProps()
          ),
          i = (0, d.useStateFromStores)([w.default], () => {
            var e;
            return w.default.getRegions(
              null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e
                ? e
                : null
            );
          }),
          r = (0, d.useStateFromStores)([D.default], () => D.default.theme),
          o = (0, d.useStateFromStores)([P.default], () =>
            P.default.getGuild(null == t ? void 0 : t.getGuildId())
          ),
          u = (0, L.useCanManageThread)(t),
          c = (0, L.useIsThreadModerator)(t),
          { canManageChannels: h, canSendMessages: E } = (0,
          d.useStateFromStoresObject)([H.default], () => ({
            canManageChannels: H.default.can(X.Permissions.MANAGE_CHANNELS, t),
            canSendMessages: H.default.can(X.Permissions.SEND_MESSAGES, t),
          })),
          f = (0, S.default)(t),
          m = F.default.getId(),
          g = (0, x.useForumChannelStoreApi)(),
          N = null == t ? void 0 : t.id,
          C = (0, T.useChannelSummariesExperiment)(t, !1, !0),
          _ = a.useCallback(
            e => {
              null != N && g.getState().setLayoutType(N, e);
            },
            [N, g]
          );
        return (0, l.jsx)(eN, {
          errors: e,
          channel: t,
          channelName: f,
          submitting: s,
          regions: i,
          theme: r,
          guild: o,
          canManageChannels: (null == t ? void 0 : t.isThread()) ? u : h,
          canSendMessages: E,
          isThreadModerator: c,
          canManageThread: u,
          subsection: n,
          isForumPost: null != t && t.isForumPost(),
          isOwner: null == t ? void 0 : t.isOwner(m),
          handleSetDefaultLayout: _,
          showChannelSummariesSettings: C,
        });
      }
    },
    173446: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ChannelSettingsPermissionsNotice: function () {
            return G;
          },
          default: function () {
            return K;
          },
        }),
        s("808653"),
        s("424973"),
        s("70102");
      var l = s("37983"),
        a = s("884691"),
        n = s("917351"),
        i = s.n(n),
        r = s("316693"),
        o = s("446674"),
        d = s("819855"),
        u = s("77078"),
        c = s("404118"),
        h = s("450911"),
        E = s("318738"),
        f = s("881888"),
        m = s("900676"),
        g = s("45299"),
        T = s("798609"),
        S = s("841098"),
        N = s("206230"),
        C = s("923510"),
        _ = s("766274"),
        p = s("901998"),
        M = s("492114"),
        x = s("26989"),
        R = s("305961"),
        I = s("957255"),
        A = s("697218"),
        O = s("669021"),
        L = s("730988"),
        v = s("449008"),
        j = s("651879"),
        D = s("701909"),
        y = s("387111"),
        F = s("465305"),
        b = s("991170"),
        P = s("158998"),
        H = s("51944"),
        w = s("49111"),
        U = s("782340"),
        B = s("590135");
      let G = o.default.connectStores([p.default, M.default], () => {
        let e = M.default.getChannel(),
          t = p.default.formState;
        return {
          submitting: t === w.FormStates.SUBMITTING,
          onReset() {
            (0, E.init)();
          },
          onSave() {
            if (null == e) return;
            let t = p.default.editedPermissionIds.reduce((e, t) => {
              let s = p.default.getPermissionOverwrite(t);
              return null != s && e.push(s), e;
            }, []);
            (0, E.savePermissionUpdates)(e.id, t);
          },
        };
      })(g.default);
      function V(e) {
        let { overwrite: t } = e,
          s = (0, o.useStateFromStores)([p.default], () => p.default.channel),
          a = (0, o.useStateFromStores)([R.default], () =>
            null != s ? R.default.getGuild(s.getGuildId()) : null
          ),
          n = (0, o.useStateFromStores)([R.default], () =>
            null != a ? R.default.getRoles(a.id) : void 0
          );
        if (null == s || null == a || null == t) return null;
        let { guild_id: i, id: d } = s,
          { id: f } = t,
          g = () => {
            var e;
            let t = R.default.getGuild(i);
            if (null == t || null == n) return "";
            let s = n[f],
              l = A.default.getUser(f),
              a =
                null !== (e = null == l ? void 0 : l.username) && void 0 !== e
                  ? e
                  : "";
            return null != s ? s.name : a;
          },
          S = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: a, deny: n } = t;
            switch (
              ((n = r.default.remove(n, e)), (a = r.default.remove(a, e)), l)
            ) {
              case "ALLOW":
                a = r.default.add(a, e);
                break;
              case "DENY":
                n = r.default.add(n, e);
            }
            if (I.default.can(e, s, { [f]: { ...t, allow: a, deny: n } }))
              (0, E.updatePermission)(s, f, a, n);
            else {
              let e;
              if (t.type === T.PermissionOverwriteType.MEMBER) {
                let s = A.default.getUser(t.id);
                null != s && (e = P.default.getName(s));
              } else if (t.type === T.PermissionOverwriteType.ROLE) {
                let l = R.default.getGuild(s.getGuildId());
                if (null != l) {
                  let s = R.default.getRole(l.id, t.id);
                  null != s && (e = s.name);
                }
              }
              H.showPermissionLockoutModal(e);
            }
          },
          N = () => {
            let e = g();
            c.default.show({
              title: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
              body: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                name: e,
              }),
              cancelText: U.default.Messages.CANCEL,
              onConfirm: () => h.default.clearPermissionOverwrite(d, f),
            });
          },
          _ = e => {
            let t =
              I.default.can(w.Permissions.ADMINISTRATOR, a) ||
              I.default.can(w.Permissions.MANAGE_ROLES, s, void 0, void 0, !0);
            return s.isGuildStageVoice() &&
              C.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e)
              ? U.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION
              : !(
                  (!r.default.equals(e, w.Permissions.MANAGE_ROLES) || t) &&
                  (null == e || I.default.can(e, a) || t)
                ) && U.default.Messages.HELP_MISSING_PERMISSION;
          },
          M = f === i,
          x =
            s.isForumLikeChannel() &&
            r.default.has(t.deny, w.Permissions.SEND_MESSAGES),
          O = r.default.has(t.deny, w.Permissions.SEND_MESSAGES),
          v = r.default.has(t.deny, w.Permissions.READ_MESSAGE_HISTORY),
          j = F.default.generateChannelPermissionSpec(i, s, M, {
            createPostsDisabled: x,
            sendMessagesDisabled: O,
            readMessageHistoryDisabled: v,
          });
        return (0, l.jsxs)(L.default.Content, {
          className: B.layoutStyle,
          children: [
            j.map((e, s) =>
              (0, l.jsx)(
                m.default,
                {
                  spec: e,
                  allow: t.allow,
                  deny: t.deny,
                  onChange: S,
                  permissionRender: _,
                  className: B.permissionsForm,
                },
                s
              )
            ),
            i === f
              ? null
              : (0, l.jsx)(u.Button, {
                  look: u.Button.Looks.OUTLINED,
                  color: u.Button.Colors.RED,
                  onClick: N,
                  children: U.default.Messages.REMOVE_ROLE_OR_USER.format({
                    name: g(),
                  }),
                }),
          ],
        });
      }
      function k(e) {
        let { guildId: t, channelId: s, user: a } = e,
          n = a.getAvatarURL(t, 32),
          i = y.default.getNickname(t, s, a),
          r = P.default.useUserTag(a),
          o = null,
          d = null;
        return (
          (o = null != i ? i : a.hasAvatarForGuild(t) ? a.username : r),
          (null != i || a.hasAvatarForGuild(t)) &&
            (d = (0, l.jsxs)("div", {
              className: B.userRowSubText,
              children: [
                a.hasAvatarForGuild(t)
                  ? (0, l.jsx)(u.Avatar, {
                      className: B.userRowSubAvatar,
                      size: u.AvatarSizes.SIZE_16,
                      src: a.getAvatarURL(void 0, 16),
                      "aria-label": a.username,
                    })
                  : null,
                (0, l.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: r,
                }),
              ],
            })),
          (0, l.jsxs)("div", {
            className: B.inline,
            children: [
              (0, l.jsx)(u.Avatar, {
                size: u.AvatarSizes.SIZE_32,
                src: n,
                "aria-label": a.username,
                className: B.userRowAvatar,
              }),
              (0, l.jsxs)("div", {
                className: B.userRowText,
                children: [
                  (0, l.jsx)(u.Text, {
                    className: B.userRowText,
                    variant: "text-md/normal",
                    children: o,
                  }),
                  d,
                ],
              }),
            ],
          })
        );
      }
      function W(e) {
        return (
          "object" == typeof e && null != e && "colorString" in e && "name" in e
        );
      }
      function Y(e) {
        let {
            guild: t,
            channel: s,
            permissionOverwrites: a,
            onClose: n,
            onSelect: r,
            position: d,
          } = e,
          u = (0, o.useStateFromStores)([R.default], () =>
            R.default.getRoles(t.id)
          ),
          c = (0, o.useStateFromStores)([x.default], () =>
            x.default.getMemberIds(t.id)
          );
        return (0, l.jsx)(O.default, {
          label: U.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
          placeholder: U.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
          "aria-label": U.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
          sections: [U.default.Messages.ROLES, U.default.Messages.MEMBERS],
          onRenderResult: e => {
            if (W(e)) {
              let t;
              return (
                null != e.colorString && (t = { color: e.colorString }),
                (0, l.jsx)("span", { style: t, children: e.name })
              );
            }
            if (e instanceof _.default)
              return (0, l.jsx)(k, { guildId: t.id, channelId: s.id, user: e });
          },
          onFilterResults: (e, t) =>
            0 === t
              ? i(u)
                  .filter(t => null == a[t.id] && e(t.name))
                  .sortBy(e => -e.position)
                  .value()
              : i(c)
                  .map(A.default.getUser)
                  .filter(v.isNotNullish)
                  .filter(e => !e.isClyde())
                  .filter(t => null == a[t.id] && e(t.username.toLowerCase()))
                  .sortBy(e => e.username.toLowerCase())
                  .value(),
          onQueryChange: e => {
            j.default.requestMembers(t.id, e, 20);
          },
          onSelect: e => {
            null != e &&
              (W(e)
                ? r(e.id, T.PermissionOverwriteType.ROLE)
                : e instanceof _.default &&
                  r(e.id, T.PermissionOverwriteType.MEMBER));
          },
          onClose: n,
          position: d,
        });
      }
      function z() {
        let {
            channel: e,
            permissionOverwrites: t,
            selectedOverwriteId: n,
          } = (0, o.useStateFromStoresObject)([p.default], () => p.default),
          r = null == e ? void 0 : e.getGuildId(),
          { guild: c, guildRoles: m } = (0, o.useStateFromStoresObject)(
            [R.default],
            () => {
              let e = null != r ? R.default.getGuild(r) : void 0,
                t = null != e ? R.default.getRoles(e.id) : void 0;
              return { guild: e, guildRoles: t };
            },
            [r]
          ),
          g = (0, S.default)(),
          C = (0, o.useStateFromStores)([N.default], () => N.default.roleStyle);
        if (null == c || null == m || null == e || null == t) return null;
        let _ = s => {
            let { position: a, closePopout: n } = s;
            return (0, l.jsx)(Y, {
              guild: c,
              channel: e,
              permissionOverwrites: t,
              position: null != a ? a : "bottom",
              onSelect: M,
              onClose: n,
            });
          },
          M = (t, s) => {
            h.default
              .updatePermissionOverwrite(e.id, {
                id: t,
                type: s,
                allow: b.default.NONE,
                deny: b.default.NONE,
              })
              .then(() => (0, E.selectPermission)(t));
          };
        null != t &&
          null == t[c.id] &&
          (t[c.id] = b.default.makeEveryoneOverwrite(c.id));
        let x = i(t)
            .filter(e => e.type === T.PermissionOverwriteType.ROLE)
            .map(e => m[e.id])
            .filter(v.isNotNullish)
            .sortBy(e => -e.position)
            .map(e =>
              (0, l.jsx)(
                f.default,
                {
                  theme: g,
                  roleStyle: C,
                  id: e.id,
                  role: e,
                  guild: c,
                  color: e.colorString,
                  "aria-label": e.name,
                  children: e.name,
                },
                "".concat(n, "-").concat(e.id)
              )
            )
            .value(),
          I = i(t)
            .filter(e => e.type === T.PermissionOverwriteType.MEMBER)
            .map(e => A.default.getUser(e.id))
            .filter(v.isNotNullish)
            .sortBy(e => e.username.toLowerCase())
            .map(e => {
              let t = e.getAvatarURL(c.id, 24);
              return (0, l.jsx)(
                f.default,
                {
                  id: e.id,
                  guild: c,
                  theme: g,
                  roleStyle: C,
                  "aria-label": P.default.getUserTag(e, {
                    decoration: "never",
                  }),
                  children: (0, l.jsxs)("div", {
                    className: B.inline,
                    children: [
                      (0, l.jsx)(u.Avatar, {
                        size: u.AvatarSizes.SIZE_20,
                        src: t,
                        "aria-label": e.username,
                        className: B.xsmallAvatar,
                      }),
                      (0, l.jsx)("span", {
                        className: B.username,
                        children: P.default.getUserTag(e),
                      }),
                    ],
                  }),
                },
                "".concat(n, "-").concat(e.id)
              );
            })
            .value();
        return (0, l.jsx)(L.default.Sidebar, {
          className: B.layoutStyle,
          scrollable: !0,
          children: (0, l.jsxs)(u.TabBar, {
            onItemSelect: E.selectPermission,
            selectedItem: n,
            orientation: "vertical",
            children: [
              (() => {
                let e = (0, d.isThemeDark)(g) ? s("706832") : s("623264");
                return (0, l.jsx)(u.Popout, {
                  renderPopout: _,
                  position: "bottom",
                  autoInvert: !1,
                  children: t =>
                    (0, l.jsx)(u.TabBar.Header, {
                      ...t,
                      children: (0, l.jsxs)("div", {
                        className: B.sidebarHeaderDefault,
                        children: [
                          (0, l.jsxs)("span", {
                            children: [
                              U.default.Messages.ROLES,
                              "/",
                              U.default.Messages.MEMBERS,
                            ],
                          }),
                          (0, l.jsx)("img", {
                            alt: "",
                            className: B.sidebarHeader,
                            src: e,
                          }),
                        ],
                      }),
                    }),
                });
              })(),
              x,
              I,
              (0, l.jsxs)(a.Fragment, {
                children: [
                  (0, l.jsx)(u.TabBar.Separator, {
                    style: { marginTop: 20, marginBottom: 14 },
                  }),
                  (0, l.jsx)(u.FormText, {
                    type: u.FormTextTypes.DESCRIPTION,
                    children: (0, l.jsx)(u.Anchor, {
                      href: D.default.getArticleURL(
                        w.HelpdeskArticles.PERMISSIONS_TUTORIAL
                      ),
                      target: "_blank",
                      children: U.default.Messages.PERMISSION_HELPDESK,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function K() {
        let {
            channel: e,
            permissionOverwrites: t,
            selectedOverwriteId: s,
          } = (0, o.useStateFromStoresObject)([p.default], () => p.default),
          a = (0, o.useStateFromStores)([R.default], () =>
            null != e ? R.default.getGuild(e.getGuildId()) : null
          );
        if (null == a || null == e || null == t || null == s) return null;
        let n = t[s];
        return (0, l.jsxs)(L.default, {
          className: B.container,
          children: [(0, l.jsx)(z, {}), (0, l.jsx)(V, { overwrite: n })],
        });
      }
    },
    792861: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("75196");
      function n(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: n = "none",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(i),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsx)("rect", {
              className: s,
              width: "130",
              height: "143",
              rx: "12",
              fill: n,
            }),
            (0, l.jsx)("path", {
              className: s,
              opacity: "0.5",
              d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
              fill: t,
            }),
            (0, l.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "54",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "64",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              x: "0.5",
              y: "0.5",
              width: "129",
              height: "142",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
            (0, l.jsx)("rect", {
              className: s,
              x: "142",
              width: "130",
              height: "143",
              rx: "12",
              fill: n,
            }),
            (0, l.jsx)("path", {
              className: s,
              opacity: "0.5",
              d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
              fill: t,
            }),
            (0, l.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "154",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "154",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "196",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "206",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              x: "142.5",
              y: "0.5",
              width: "129",
              height: "142",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
          ],
        });
      }
    },
    370216: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("75196");
      function n(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: n = "none",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(i),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsx)("rect", {
              className: s,
              y: "15.5",
              width: "272",
              height: "112",
              rx: "12",
              fill: n,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "27.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "43.5",
              width: "96",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "67.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "83.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "196",
              y: "27.5",
              width: "64",
              height: "64",
              rx: "8",
              fill: t,
            }),
            (0, l.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
              fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "54",
              cy: "111.5",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "64",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, l.jsx)("rect", {
              className: s,
              x: "0.5",
              y: "16",
              width: "271",
              height: "111",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
          ],
        });
      }
    },
    630473: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        });
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("446674"),
        o = s("669491"),
        d = s("77078"),
        u = s("18054"),
        c = s("69678"),
        h = s("372283"),
        E = s("957255"),
        f = s("151185"),
        m = s("90625"),
        g = s("953371"),
        T = s("49111"),
        S = s("782340"),
        N = s("763619");
      function C(e) {
        let { channel: t } = e,
          n = (0, r.useStateFromStores)(
            [E.default],
            () => E.default.can(T.Permissions.MANAGE_CHANNELS, t),
            [t]
          ),
          c = t.availableTags.length >= g.MAX_FORUM_TAGS,
          m = t.availableTags.length > 0,
          C = a.useCallback(() => {
            let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
            n &&
              !e &&
              (0, d.openModalLazy)(async () => {
                let { default: e } = await s
                  .el("987034")
                  .then(s.bind(s, "987034"));
                return s =>
                  (0, l.jsx)(e, { ...s, channelId: t.id, guildId: t.guild_id });
              });
          }, [t, n]),
          p = a.useCallback(
            e => {
              n &&
                (0, d.openModalLazy)(async () => {
                  let { default: a } = await s
                    .el("987034")
                    .then(s.bind(s, "987034"));
                  return s =>
                    (0, l.jsx)(a, {
                      ...s,
                      channelId: t.id,
                      guildId: t.guild_id,
                      tag: e,
                    });
                });
            },
            [n, t]
          ),
          {
            handleDragStart: M,
            handleDragReset: x,
            handleDragComplete: R,
          } = (0, h.default)(t.availableTags, e => {
            (0, u.updateChannel)({ availableTags: e });
          });
        return (0, l.jsxs)("div", {
          className: N.tags,
          children: [
            m
              ? t.availableTags.map(e =>
                  (0, l.jsx)(
                    _,
                    {
                      tag: e,
                      availableTags: t.availableTags,
                      canManageChannels: n,
                      onTagClick: p,
                      onDragComplete: R,
                      onDragReset: x,
                      onDragStart: M,
                    },
                    e.id
                  )
                )
              : null,
            m
              ? (0, l.jsx)(d.Clickable, {
                  onClick: C,
                  className: i(N.addTags, { [N.disabled]: !n || c }),
                  children: (0, l.jsx)(f.default, {
                    "aria-label": S.default.Messages.FORUM_TAG_CREATE,
                    color: o.default.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                  }),
                })
              : (0, l.jsx)(d.Button, {
                  disabled: !n,
                  onClick: C,
                  children: S.default.Messages.FORUM_TAG_CREATE,
                }),
          ],
        });
      }
      function _(e) {
        let {
            tag: t,
            availableTags: s,
            canManageChannels: a,
            onTagClick: n,
            onDragComplete: r,
            onDragStart: o,
            onDragReset: d,
          } = e,
          u = s.findIndex(e => e.id === t.id),
          {
            drag: h,
            dragSourcePosition: E,
            drop: f,
            setIsDraggable: g,
          } = (0, c.default)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: u,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d,
          });
        return (0, l.jsx)("div", {
          className: i(N.container, {
            [N.dropIndicatorBefore]: null != E && u < E,
            [N.dropIndicatorAfter]: null != E && u > E,
          }),
          ref: e => h(f(e)),
          onMouseEnter: () => g(a),
          onMouseLeave: () => g(!1),
          children: (0, l.jsx)(m.default, {
            tag: t,
            disabled: !a,
            ariaLabel: S.default.Messages.FORUM_TAG_EDIT_LABEL.format({
              name: t.name,
            }),
            onClick: a ? () => n(t) : void 0,
          }),
        });
      }
    },
    20105: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var l = s("37983");
      s("884691");
      var a = s("446674"),
        n = s("77078"),
        i = s("430568"),
        r = s("385976"),
        o = s("79945"),
        d = s("826660");
      function u(e) {
        let { reactionEmoji: t } = e,
          s = (0, a.useStateFromStores)([r.default], () =>
            (null == t ? void 0 : t.emojiId) != null
              ? r.default.getUsableCustomEmojiById(t.emojiId)
              : null
          );
        return (0, l.jsxs)("div", {
          className: d.container,
          children: [
            (0, l.jsxs)("div", {
              className: d.body,
              children: [
                (0, l.jsxs)("div", {
                  className: d.placeholderLines,
                  children: [
                    (0, l.jsx)(c, { width: "100%", marginBottom: 8 }),
                    (0, l.jsx)(c, { width: "80%", marginBottom: 16 }),
                    (0, l.jsx)(c, { width: "50%", marginBottom: 8 }),
                    (0, l.jsx)(c, { width: "60%", marginBottom: 16 }),
                  ],
                }),
                (0, l.jsx)("div", { className: d.placeholderMedia }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: d.footer,
              children: [
                (0, l.jsxs)("div", {
                  className: d.reaction,
                  children: [
                    null != t
                      ? (0, l.jsx)(i.default, {
                          className: d.reactionEmote,
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: !!(null == s ? void 0 : s.animated),
                        })
                      : (0, l.jsx)(o.default, { className: d.reactionEmote }),
                    (0, l.jsx)(n.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, l.jsx)(c, { width: "24px", marginBottom: 0 }),
                (0, l.jsx)("div", { className: d.dot }),
                (0, l.jsx)(c, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { width: t, marginBottom: s } = e;
        return (0, l.jsx)("div", {
          className: d.placeholderLine,
          style: { width: t, marginBottom: s },
        });
      }
    },
    735251: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var l = s("884691"),
        a = s("316693"),
        n = s("446674"),
        i = s("305961"),
        r = s("828674"),
        o = s("866595"),
        d = s("795228"),
        u = s("49111");
      function c(e, t) {
        let s = (0, n.useStateFromStores)([i.default], () =>
            null != e ? i.default.getRoles(e.id) : void 0
          ),
          c = (0, d.default)(null == e ? void 0 : e.id);
        return l.useMemo(() => {
          let l =
              null != e && null != s
                ? (function (e, t, s) {
                    let l = new Set();
                    for (let e of Object.keys(s.permissionOverwrites)) {
                      let a = t[e],
                        n = s.permissionOverwrites[e];
                      (0, r.isSubscriptionRole)(a) &&
                        (0, o.isChannelAccessGrantedBy)(s, n) &&
                        l.add(a);
                    }
                    let n = t[e.getEveryoneRoleId()],
                      i =
                        null != n &&
                        !a.default.has(
                          n.permissions,
                          u.Permissions.VIEW_CHANNEL
                        ),
                      d = (0, o.isChannelAccessDeniedBy)(
                        s,
                        s.permissionOverwrites[e.id]
                      );
                    if (i && !d)
                      for (let e of Object.values(t))
                        (0, r.isSubscriptionRole)(e) &&
                          (0, o.isAllChannelsRole)(e) &&
                          l.add(e);
                    return [...l];
                  })(e, s, t)
                : [],
            n = 0;
          for (let e of l) {
            let t = e.id;
            if (null != t) {
              let e = null == c ? void 0 : c[t];
              null != e && (n += e);
            }
          }
          return n;
        }, [c, e, t, s]);
      }
    },
    980480: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        }),
        s("222007");
      var l = s("37983");
      s("884691");
      var a = s("414456"),
        n = s.n(a),
        i = s("77078"),
        r = s("252862"),
        o = s("782340"),
        d = s("366259"),
        u = e => {
          let { autoArchiveDuration: t, onChange: s, isDisabled: a } = e,
            u = (0, r.getAutoArchiveOptions)(),
            c = (e, t) =>
              (0, l.jsx)("span", {
                className: n(d.optionLabel, { [d.dropdownOption]: t }),
                children: e.label,
              });
          return (0, l.jsx)(i.FormSection, {
            title: o.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
            className: d.formSection,
            children: (0, l.jsx)(i.SingleSelect, {
              isDisabled: a,
              options: u,
              value: t,
              maxVisibleItems: u.length,
              onChange: s,
              optionClassName: d.dropdownOption,
              renderOptionLabel: e => c(e, !0),
              renderOptionValue: e => {
                let [t] = e;
                return c(t, !1);
              },
            }),
          });
        };
    },
    669021: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        }),
        s("424973"),
        s("222007"),
        s("808653");
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("446674"),
        o = s("77078"),
        d = s("206230"),
        u = s("117362"),
        c = s("655518"),
        h = s("49111"),
        E = s("782340"),
        f = s("436107");
      class m extends a.Component {
        getSelectedSection(e) {
          let { selectedSection: t } = this.state;
          if (null != t) return t;
          for (let t = 0; t < e.length; t++) if (e[t].length > 0) return t;
          return 0;
        }
        componentDidMount() {
          this.focus();
        }
        render() {
          let { position: e } = this.props,
            t = this.getRows(),
            s = [];
          if (this.isEmpty()) s.push(1);
          else for (let e of t) s.push(e.length);
          return (0, l.jsxs)(o.Dialog, {
            className: i(
              f.container,
              (function (e) {
                if ("bottom" === e) return f.positionBottom;
                return f.positionTop;
              })(e)
            ),
            "aria-label": this.props["aria-label"],
            children: [
              (0, l.jsx)("div", { className: f.autocompleteShadow }),
              (0, l.jsx)("div", {
                className: f.autocompleteArrowWrapper,
                children: (0, l.jsx)("div", { className: f.autocompleteArrow }),
              }),
              (0, l.jsxs)("header", {
                className: f.header,
                children: [
                  (0, l.jsx)("div", {
                    className: f.autocompleteHeaderBackground,
                  }),
                  (0, l.jsx)("div", {
                    className: f.headerText,
                    children: this.props.label,
                  }),
                  (0, l.jsx)("input", {
                    type: "text",
                    className: f.input,
                    placeholder: this.props.placeholder,
                    ref: this.inputRef,
                    onChange: this.handleChange,
                    onKeyDown: this.handleKeyDown,
                  }),
                ],
              }),
              (0, l.jsx)("section", {
                className: f.sectionTag,
                children: (0, l.jsx)(o.List, {
                  className: f.autocompleteScroller,
                  fade: !0,
                  sections: s,
                  sectionHeight: this.getSectionHeight,
                  rowHeight: 40,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                }),
              }),
            ],
          });
        }
        focus() {
          null != this.inputRef.current && this.inputRef.current.focus();
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = a.createRef()),
            (this.state = {
              query: null,
              selectedSection: null,
              selectedRow: 0,
            }),
            (this.memoizedGetRows = (0, u.cachedFunction)((e, t, s) => {
              let l = RegExp(
                  "^".concat(c.default.escape(null != e ? e.trim() : "")),
                  "i"
                ),
                a = e => l.test(e);
              return s.map((e, s) => t(a, s));
            })),
            (this.getRows = () => {
              let { onFilterResults: e, sections: t } = this.props,
                { query: s } = this.state;
              return this.memoizedGetRows(s, e, t);
            }),
            (this.handleChange = e => {
              var t, s;
              let l = e.target.value;
              null === (t = (s = this.props).onQueryChange) ||
                void 0 === t ||
                t.call(s, l),
                this.setState({
                  query: l,
                  selectedSection: null,
                  selectedRow: 0,
                });
            }),
            (this.handleMouseEnter = (e, t) => {
              this.setState({ selectedSection: e, selectedRow: t });
            }),
            (this.handleClick = (e, t) => {
              let s = this.getRows();
              this.props.onSelect(s[e][t], e), this.props.onClose();
            }),
            (this.handleKeyDown = e => {
              let { keyboardModeEnabled: t } = this.props,
                { selectedRow: s } = this.state,
                l = this.getRows(),
                a = this.getSelectedSection(l);
              switch (e.keyCode) {
                case h.KeyboardKeys.TAB:
                  if (t) break;
                case h.KeyboardKeys.ARROW_DOWN:
                  e.preventDefault(),
                    this.props.sections.length > a &&
                      ++s >= l[a].length &&
                      (++a >= this.props.sections.length && (a = 0), (s = 0)),
                    this.setState({ selectedSection: a, selectedRow: s });
                  break;
                case h.KeyboardKeys.ARROW_UP:
                  e.preventDefault(),
                    --s < 0 &&
                      (--a < 0 && (a = this.props.sections.length - 1),
                      (s = l[a].length - 1)),
                    this.setState({ selectedSection: a, selectedRow: s });
                  break;
                case h.KeyboardKeys.ENTER:
                  e.preventDefault(),
                    this.props.sections.length > a &&
                      l[a].length > s &&
                      (this.props.onSelect(l[a][s], a), this.props.onClose());
                  break;
                case h.KeyboardKeys.ESCAPE:
                  e.preventDefault(),
                    this.props.onSelect(null, null),
                    this.props.onClose();
              }
            }),
            (this.isEmpty = () =>
              0 === this.getRows().reduce((e, t) => e + t.length, 0)),
            (this.getSectionHeight = e => {
              let t = this.props.sections[e];
              return this.isEmpty() || null == t ? 0 : 44;
            }),
            (this.renderSection = e => {
              let { section: t } = e,
                s = this.props.sections[t];
              return this.isEmpty() || null == s
                ? null
                : (0, l.jsx)("div", { className: f.section, children: s }, t);
            }),
            (this.renderRow = e => {
              var t;
              let { section: s, row: a } = e,
                { selectedRow: n } = this.state;
              if (this.isEmpty())
                return (0, l.jsxs)(
                  "div",
                  {
                    className: f.empty,
                    children: [
                      (0, l.jsx)("p", {
                        className: f.noResultsHeader,
                        children:
                          E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER,
                      }),
                      (0, l.jsx)("p", {
                        children:
                          E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY,
                      }),
                    ],
                  },
                  "empty"
                );
              let r = this.getRows(),
                d = this.getSelectedSection(r),
                u = null === (t = r[s]) || void 0 === t ? void 0 : t[a];
              return (0, l.jsx)(
                o.Clickable,
                {
                  onClick: this.handleClick.bind(this, s, a),
                  onMouseEnter: this.handleMouseEnter.bind(this, s, a),
                  className: i(f.row, { [f.selected]: d === s && n === a }),
                  children: (0, l.jsx)("div", {
                    className: f.rowInner,
                    children: this.props.onRenderResult(u, s),
                  }),
                },
                "".concat(s, "-").concat(a)
              );
            });
        }
      }
      m.defaultProps = { sections: [null] };
      var g = r.default.connectStores([d.default], () => ({
        keyboardModeEnabled: d.default.keyboardModeEnabled,
      }))(m);
    },
    142160: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var l = s("37983"),
        a = s("884691"),
        n = s("414456"),
        i = s.n(n),
        r = s("474293"),
        o = s("733490");
      let d = {
          XSMALL: o.xsmall,
          SMALL: o.small,
          MEDIUM: o.medium,
          LARGE: o.large,
        },
        u = { DEFAULT: "default", STATIC: "static" };
      class c extends a.PureComponent {
        render() {
          let { size: e, src: t, srcHover: s, className: a, ...n } = this.props,
            { hovered: d } = this.state,
            u = this.getMode();
          return (0, l.jsx)("button", {
            className: i((0, r.getClass)(o, "iconButton", u), a, e),
            style: {
              backgroundImage: "url('".concat(d && null != s ? s : t, "')"),
            },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...n,
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { hovered: !1 }),
            (this.getMode = () =>
              null != this.props.srcHover ? u.STATIC : u.DEFAULT),
            (this.handleHover = e => {
              let { onMouseEnter: t } = this.props;
              null == t || t(e),
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            (this.handleBlur = e => {
              let { onMouseLeave: t } = this.props;
              null == t || t(e),
                this.state.hovered && this.setState({ hovered: !1 });
            });
        }
      }
      (c.Sizes = d), (c.defaultProps = { size: d.MEDIUM, disabled: !1 });
      var h = c;
    },
    447089: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var l = s("37983");
      function a(e) {
        let {
          width: t = 18,
          height: s = 18,
          color: a = "currentColor",
          foreground: n,
          background: i,
          className: r,
        } = e;
        return (0, l.jsx)("svg", {
          width: t,
          height: s,
          className: r,
          viewBox: "0 0 18 18",
          children: (0, l.jsxs)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, l.jsx)("polygon", { points: "0 0 18 0 18 18 0 18" }),
              (0, l.jsx)("path", {
                d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                fillOpacity: "0.3",
                fill: a,
                fillRule: "nonzero",
                className: i,
              }),
              (0, l.jsx)("path", {
                d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                fill: a,
                className: n,
              }),
            ],
          }),
        });
      }
      s("884691");
    },
    686069: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getSecondsSliderLabel: function () {
            return i;
          },
        });
      var l = s("866227"),
        a = s.n(l),
        n = s("782340");
      function i(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.default.Messages.FORM_LABEL_OFF,
          l = a.duration(e, "seconds");
        if (l.days() > 0)
          return (
            t
              ? n.default.Messages.DURATION_DAYS_SHORT
              : n.default.Messages.DURATION_DAYS
          ).format({ days: l.days() });
        if (l.hours() > 0)
          return (
            t
              ? n.default.Messages.DURATION_HOURS_SHORT
              : n.default.Messages.DURATION_HOURS
          ).format({ hours: l.hours() });
        if (l.minutes() > 0)
          return (
            t
              ? n.default.Messages.DURATION_MINUTES_SHORT
              : n.default.Messages.DURATION_MINUTES
          ).format({ minutes: l.minutes() });
        else if (e > 0)
          return (
            t
              ? n.default.Messages.DURATION_SECONDS_SHORT
              : n.default.Messages.DURATION_SECONDS
          ).format({ seconds: l.seconds() });
        else return t ? n.default.Messages.FORM_LABEL_OFF : s;
      }
    },
  },
]);
//# sourceMappingURL=bff6014e529e8f8b8e0d.js.map
