(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32656"],
  {
    292381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      class l extends Map {
        set(e, t) {
          return (
            this.size >= this.maxSize && this.delete(this.keys().next().value),
            super.set(e, t)
          );
        }
        constructor(e) {
          super(), (this.maxSize = e);
        }
      }
      var a = l;
    },
    307311: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ComponentStateContextProvider: function () {
            return R;
          },
          useComponentState: function () {
            return b;
          },
          useComponentStateContext: function () {
            return U;
          },
        }),
        n("222007"),
        n("702976");
      var l = n("37983"),
        a = n("884691"),
        s = n("627445"),
        u = n.n(s),
        o = n("917351"),
        i = n.n(o),
        r = n("446674"),
        d = n("913144"),
        c = n("798609"),
        m = n("406043"),
        p = n("809810"),
        f = n("3765"),
        E = n("752598"),
        C = n("267567"),
        S = n("300322"),
        T = n("42203"),
        N = n("26989"),
        v = n("88093"),
        h = n("697218"),
        _ = n("192112"),
        I = n("524094"),
        g = n("9884");
      let O = e => {
          switch (e.type) {
            case c.ComponentType.BUTTON:
              return e.style !== c.ButtonStyle.LINK;
            case c.ComponentType.STRING_SELECT:
            case c.ComponentType.USER_SELECT:
            case c.ComponentType.ROLE_SELECT:
            case c.ComponentType.MENTIONABLE_SELECT:
            case c.ComponentType.CHANNEL_SELECT:
              return !0;
            case c.ComponentType.ACTION_ROW:
            case c.ComponentType.INPUT_TEXT:
              return !1;
          }
        },
        x = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = _.ActionComponentState.NORMAL;
          return (
            null != e &&
              e.state !== f.InteractionState.FAILED &&
              (e.data.interactionType ===
                c.InteractionTypes.MESSAGE_COMPONENT &&
              i.isEqual(e.data.indices, t.indices)
                ? (l = _.ActionComponentState.LOADING)
                : O(t) && (l = _.ActionComponentState.DISABLED)),
            n && (l = _.ActionComponentState.DISABLED),
            l
          );
        },
        L = e => {
          let t = T.default.getChannel(e),
            n = (0, r.useStateFromStores)(
              [v.default],
              () =>
                (null == t ? void 0 : t.guild_id) == null ||
                v.default.canChatInGuild(t.guild_id),
              [t]
            ),
            l = (0, r.useStateFromStores)(
              [C.default],
              () =>
                (null == t ? void 0 : t.guild_id) != null &&
                C.default.isLurking(t.guild_id),
              [t]
            ),
            a = (0, r.useStateFromStores)([N.default, h.default], () => {
              var e, n;
              let l = h.default.getCurrentUser();
              return (
                null !==
                  (n =
                    (null == t ? void 0 : t.guild_id) != null && null != l
                      ? null ===
                          (e = N.default.getMember(
                            null == t ? void 0 : t.guild_id,
                            l.id
                          )) || void 0 === e
                        ? void 0
                        : e.isPending
                      : null) &&
                void 0 !== n &&
                n
              );
            }),
            [, s] = (0, m.useCurrentUserCommunicationDisabled)(
              null == t ? void 0 : t.guild_id
            ),
            u = (0, S.useCanUnarchiveThread)(t);
          return (
            !!(
              !n ||
              l ||
              a ||
              (null == t ? void 0 : t.isLockedThread()) ||
              ((null == t ? void 0 : t.isArchivedThread()) && !u)
            ) ||
            !!s ||
            !1
          );
        };
      function y(e, t) {
        let n = a.useContext(M),
          [l, s] = a.useState(null),
          u = a.useCallback(
            t => {
              let n = (0, g.default)(e, t);
              return s(n), null == n;
            },
            [e]
          );
        return (
          a.useEffect(() => {
            var e;
            let l = () => u(t);
            return (
              null === (e = n.validators) || void 0 === e || e.add(l),
              () => {
                var e;
                null === (e = n.validators) || void 0 === e || e.delete(l);
              }
            );
          }, [n.validators, u, t]),
          { error: l, validate: u }
        );
      }
      function j(e, t, n) {
        u(
          t.type !== c.ComponentType.ACTION_ROW,
          "action row components do not have state"
        );
        let l = (0, r.useStateFromStores)([I.default], () =>
            I.default.getInteractionComponentState(e.id, t.indices)
          ),
          s = (0, r.useStateFromStores)(
            [p.default],
            () => p.default.getInteraction(e),
            [e]
          ),
          o = L(e.channel_id),
          { error: i, validate: d } = y(t, l),
          m = a.useCallback(
            n => {
              if (!d(n)) return !1;
              let l = T.default.getChannel(e.channel_id);
              return (
                null != l &&
                  null != t.customId &&
                  (0, E.executeMessageComponentInteraction)({
                    componentType: t.type,
                    messageId: e.id,
                    messageFlags: e.flags,
                    customId: t.customId,
                    indices: t.indices,
                    applicationId: t.applicationId,
                    channelId: l.id,
                    guildId: l.guild_id,
                    localState: n,
                  }),
                !0
              );
            },
            [
              e.channel_id,
              e.flags,
              e.id,
              t.customId,
              t.type,
              t.indices,
              t.applicationId,
              d,
            ]
          );
        return {
          state: l,
          executeStateUpdate: m,
          isDisabled: o,
          visualState: x(s, t),
          error: i,
        };
      }
      function A(e, t, n) {
        let l = (0, r.useStateFromStores)([I.default], () =>
            I.default.getInteractionComponentState(e.customId, t.indices)
          ),
          { error: s, validate: u } = y(t, l),
          o = a.useCallback(
            n =>
              null == n ||
              (d.default.dispatch({
                type: "SET_INTERACTION_COMPONENT_STATE",
                id: e.customId,
                indices: t.indices,
                state: n,
              }),
              !!u(n) || !1),
            [e.customId, t.indices, u]
          );
        return (
          a.useEffect(() => {
            o(n);
          }, []),
          {
            state: l,
            executeStateUpdate: o,
            isDisabled: !1,
            visualState: _.ActionComponentState.NORMAL,
            error: s,
          }
        );
      }
      let M = a.createContext(null);
      function R(e) {
        let { children: t, message: n, modal: s, validators: o } = e,
          i = a.useMemo(
            () =>
              null != n
                ? {
                    useComponentState: j.bind(null, n),
                    message: n,
                    validators: o,
                  }
                : (u(null != s, "modal is present if message is not"),
                  {
                    useComponentState: A.bind(null, s),
                    message: n,
                    validators: o,
                  }),
            [n, s, o]
          );
        return (0, l.jsx)(M.Provider, { value: i, children: t });
      }
      function b(e, t) {
        let n = a.useContext(M);
        return n.useComponentState(e, t);
      }
      function U() {
        return a.useContext(M);
      }
    },
    524094: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("446674"),
        a = n("913144"),
        s = n("292381");
      let u = new s.default(196606),
        o = 0,
        i = new s.default(196606),
        r = new s.default(196606);
      function d(e) {
        return e.join("-");
      }
      function c(e, t, n) {
        var l;
        let a = d(t),
          s = null !== (l = u.get(e)) && void 0 !== l ? l : new Map();
        s.set(a, n), u.set(e, s), o++;
      }
      function m(e) {
        let t = i.get(e);
        null != t && r.delete(t), i.delete(e), u.delete(e), o++;
      }
      class p extends l.default.Store {
        getInteractionComponentStates() {
          return u;
        }
        getInteractionComponentStateVersion() {
          return o;
        }
        getInteractionComponentState(e, t) {
          var n;
          let l = u.get(e);
          if (null == l) return null;
          let a = d(t);
          return null !== (n = l.get(a)) && void 0 !== n ? n : null;
        }
      }
      p.displayName = "LocalInteractionComponentStateStore";
      var f = new p(a.default, {
        LOGOUT: function () {
          u.clear(), i.clear(), r.clear(), o++;
        },
        QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
          let { messageId: t, nonce: n, indices: l, state: a } = e;
          i.set(t, n), r.set(n, { messageId: t, indices: l }), c(t, l, a);
        },
        SET_INTERACTION_COMPONENT_STATE: function (e) {
          let { id: t, indices: n, state: l } = e;
          c(t, n, l);
        },
        MESSAGE_DELETE: function (e) {
          let { id: t } = e;
          if (!u.has(t)) return !1;
          m(t);
        },
        MESSAGE_UPDATE: function (e) {
          let { message: t } = e;
          if (null == t.id || !u.has(t.id)) return !1;
          m(t.id);
        },
        INTERACTION_SUCCESS: function (e) {
          let { nonce: t } = e;
          if (null == t) return !1;
          let n = r.get(t);
          if (null == n) return !1;
          i.delete(n.messageId), r.delete(t), o++;
        },
        INTERACTION_FAILURE: function (e) {
          let { nonce: t } = e;
          if (null == t) return !1;
          let n = r.get(t);
          if (null == n) return !1;
          !(function (e) {
            let { indices: t, messageId: n } = e,
              l = d(t),
              a = u.get(n);
            if (null == a || !a.has(l)) return;
            a.delete(l), 0 === a.size && u.delete(n), o++;
          })(n);
        },
        CLEAR_INTERACTION_MODAL_STATE: function (e) {
          let { id: t } = e;
          u.delete(t), o++;
        },
      });
    },
    9884: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var l = n("627445"),
        a = n.n(l),
        s = n("798609"),
        u = n("782340");
      let o = (e, t) => {
          let { minValues: n, maxValues: l } = e;
          if (null == t)
            return 0 === n
              ? null
              : u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                  { count: n }
                );
          if (t.type === s.ComponentType.STRING_SELECT) {
            if (t.values.length < n)
              return u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                { count: n }
              );
            if (t.values.length > l)
              return u.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format(
                { count: l }
              );
          } else {
            if (t.selectedOptions.length < n)
              return u.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                { count: n }
              );
            if (t.selectedOptions.length > l)
              return u.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format(
                { count: l }
              );
          }
          return null;
        },
        i = (e, t) => {
          let { minLength: n, maxLength: l, required: a } = e;
          if (null == t || 0 === t.value.length)
            return a
              ? u.default.Messages.FORM_LENGTH_ERROR.format({ min: n, max: l })
              : null;
          return t.value.length < n || t.value.length > l
            ? u.default.Messages.FORM_LENGTH_ERROR.format({ min: n, max: l })
            : null;
        };
      function r(e, t) {
        switch (
          (null != t && a(t.type === e.type, "component type matches state"),
          e.type)
        ) {
          case s.ComponentType.ACTION_ROW:
          case s.ComponentType.BUTTON:
            return null;
          case s.ComponentType.STRING_SELECT:
          case s.ComponentType.USER_SELECT:
          case s.ComponentType.ROLE_SELECT:
          case s.ComponentType.MENTIONABLE_SELECT:
          case s.ComponentType.CHANNEL_SELECT:
            return o(e, t);
          case s.ComponentType.INPUT_TEXT:
            return i(e, t);
          default:
            a(!1, "missing validator for this component");
        }
      }
    },
    383247: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderComponents: function () {
            return C;
          },
          default: function () {
            return S;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("798609"),
        u = n("42203"),
        o = n("307311"),
        i = n("812684"),
        r = n("802904"),
        d = n("682595"),
        c = n("433155"),
        m = n("73829"),
        p = n("263130"),
        f = n("284360"),
        E = n("408486");
      function C(e) {
        return e.map((e, t) =>
          (function (e, t) {
            switch (e.type) {
              case s.ComponentType.ACTION_ROW:
                return (0, l.jsx)(f.default, { ...e, renderComponents: C }, t);
              case s.ComponentType.BUTTON:
                return (0, l.jsx)(r.default, { ...e }, t);
              case s.ComponentType.STRING_SELECT:
                return (0, l.jsx)(m.default, { ...e }, t);
              case s.ComponentType.CHANNEL_SELECT:
                return (0, l.jsx)(d.default, { ...e }, t);
              case s.ComponentType.USER_SELECT:
              case s.ComponentType.ROLE_SELECT:
              case s.ComponentType.MENTIONABLE_SELECT:
                return (0, l.jsx)(c.default, { ...e }, t);
              case s.ComponentType.INPUT_TEXT:
                return (0, l.jsx)(p.default, { ...e }, t);
            }
          })(e, t.toString())
        );
      }
      function S(e) {
        let { message: t } = e,
          n = a.useMemo(() => {
            var e, n;
            let l = u.default.getChannel(t.channel_id),
              a = null == l ? void 0 : l.guild_id;
            return (0, i.createComponents)(
              null !== (e = t.components) && void 0 !== e ? e : [],
              null !== (n = t.applicationId) && void 0 !== n ? n : t.author.id,
              a
            );
          }, [t]);
        return 0 === n.length
          ? null
          : (0, l.jsx)("div", {
              className: E.container,
              children: (0, l.jsx)(o.ComponentStateContextProvider, {
                message: t,
                children: C(n),
              }),
            });
      }
    },
    802904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        u = n("77078"),
        o = n("272030"),
        i = n("430568"),
        r = n("798609"),
        d = n("758710"),
        c = n("306160"),
        m = n("128259"),
        p = n("307311"),
        f = n("192112"),
        E = n("782340"),
        C = n("553609"),
        S = n("700901");
      function T(e) {
        let { url: t, onSelect: n } = e;
        return c.SUPPORTS_COPY && null != t
          ? (0, l.jsx)(u.Menu, {
              navId: "component-button",
              onClose: o.closeContextMenu,
              "aria-label":
                E.default.Messages
                  .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: n,
              children: (0, l.jsx)(u.MenuGroup, {
                children: (0, l.jsx)(u.MenuItem, {
                  id: "copy",
                  label:
                    E.default.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, c.copy)(t),
                }),
              }),
            })
          : null;
      }
      function N(e) {
        let t;
        let { label: n, style: a, disabled: c, emoji: E, url: N } = e,
          {
            executeStateUpdate: v,
            visualState: h,
            isDisabled: _,
          } = (0, p.useComponentState)(e),
          I = null != n && n.length > 0,
          g = a === r.ButtonStyle.LINK && null != N && N.length > 0,
          O = h === f.ActionComponentState.LOADING;
        return (
          (t = g
            ? () => {
                (0, m.handleClick)({
                  href: null != N ? N : "",
                  shouldConfirm: !0,
                });
              }
            : () => v()),
          (0, l.jsxs)(u.Button, {
            className: C.component,
            color: (function (e) {
              switch (e) {
                case r.ButtonStyle.PRIMARY:
                  return u.Button.Colors.BRAND;
                case r.ButtonStyle.SUCCESS:
                  return u.Button.Colors.GREEN;
                case r.ButtonStyle.DESTRUCTIVE:
                  return u.Button.Colors.RED;
                default:
                  return u.Button.Colors.PRIMARY;
              }
            })(a),
            size: u.Button.Sizes.SMALL,
            disabled: c || h === f.ActionComponentState.DISABLED || _,
            onClick: t,
            onContextMenu: e => {
              g &&
                (0, o.openContextMenu)(e, e => (0, l.jsx)(T, { ...e, url: N }));
            },
            role: g ? "link" : "button",
            children: [
              (0, l.jsxs)("div", {
                className: s(S.content, { [S.hidden]: O }),
                "aria-hidden": O,
                children: [
                  null != E
                    ? (0, l.jsx)(i.default, {
                        className: s({ [S.textEmoji]: I }),
                        src: E.src,
                        emojiId: E.id,
                        emojiName: E.name,
                        animated: E.animated,
                      })
                    : null,
                  I
                    ? (0, l.jsx)("div", { className: S.label, children: n })
                    : null,
                  g
                    ? (0, l.jsx)(d.default, {
                        className: S.launchIcon,
                        width: 16,
                        height: 16,
                      })
                    : null,
                ],
              }),
              O
                ? (0, l.jsx)("div", {
                    className: S.loading,
                    children: (0, l.jsx)(u.Dots, {
                      dotRadius: 3.5,
                      themed: !0,
                    }),
                  })
                : null,
            ],
          })
        );
      }
    },
    682595: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("419830"),
        u = n("42203"),
        o = n("305961"),
        i = n("346955"),
        r = n("307311"),
        d = n("704257"),
        c = n("184406"),
        m = n("49111"),
        p = n("356086");
      function f(e) {
        var t;
        let { channelTypes: n } = e,
          f = (0, r.useComponentStateContext)(),
          E =
            null == f
              ? void 0
              : null === (t = f.message) || void 0 === t
                ? void 0
                : t.getChannelId(),
          C = u.default.getChannel(E),
          S = o.default.getGuild(null == C ? void 0 : C.getGuildId()),
          T = a.useMemo(
            () =>
              (0, d.getSnowflakeSelectDefaultValues)(
                e.defaultValues,
                null == S ? void 0 : S.id,
                n
              ),
            [e.defaultValues, S, n]
          );
        return (0, l.jsx)(c.default, {
          selectActionComponent: e,
          queryOptions: e => (0, d.queryChannels)(e, E, n),
          renderIcon: (e, t) => {
            let n = u.default.getChannel(null == e ? void 0 : e.value);
            if (null == n) return null;
            let a =
              n.type === m.ChannelTypes.GUILD_CATEGORY
                ? i.default
                : (0, s.getChannelIconComponent)(n);
            return null != a ? (0, l.jsx)(a, { width: t, height: t }) : null;
          },
          renderOptionLabel: e =>
            (0, l.jsx)("span", { className: p.label, children: e.label }),
          defaultValues: T,
        });
      }
    },
    433155: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("509043"),
        u = n("77078"),
        o = n("145079"),
        i = n("689226"),
        r = n("405645"),
        d = n("795228"),
        c = n("42203"),
        m = n("305961"),
        p = n("824563"),
        f = n("697218"),
        E = n("781896"),
        C = n("682344"),
        S = n("483093"),
        T = n("307311"),
        N = n("192112"),
        v = n("704257"),
        h = n("184406"),
        _ = n("49111"),
        I = n("356086");
      function g(e) {
        var t;
        let n = (0, T.useComponentStateContext)(),
          g =
            null == n
              ? void 0
              : null === (t = n.message) || void 0 === t
                ? void 0
                : t.getChannelId(),
          O = c.default.getChannel(g),
          x = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
          L = (0, d.default)(null == x ? void 0 : x.id, v.MIN_REREQUEST_TIME),
          y = a.useMemo(
            () =>
              (0, v.getSnowflakeSelectDefaultValues)(
                e.defaultValues,
                null == x ? void 0 : x.id
              ),
            [e.defaultValues, x]
          );
        return (0, l.jsx)(h.default, {
          selectActionComponent: e,
          queryOptions: t => (0, v.queryMentionables)(e.type, t, g),
          renderIcon: (e, t) => {
            let n = t === h.SelectIconSize.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === N.SelectOptionType.USER) {
              let a = f.default.getUser(e.value);
              if (null == a) return;
              return (0, l.jsx)(u.Avatar, {
                size: n ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
                src: a.getAvatarURL(null == x ? void 0 : x.id, t),
                status: n ? null : p.default.getStatus(a.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === N.SelectOptionType.ROLE) {
              var a;
              let n = null != x ? m.default.getRole(x.id, e.value) : void 0;
              if (null == n || null == x) return;
              let u = (0, i.canGuildUseRoleIcons)(x, n)
                ? (0, r.getRoleIconProps)(n, t)
                : null;
              return null != u
                ? (0, l.jsx)(S.default, { ...u })
                : (0, l.jsx)(C.default, {
                    color:
                      null !== (a = n.colorString) && void 0 !== a
                        ? a
                        : (0, s.int2hex)(_.DEFAULT_ROLE_COLOR),
                    height: t,
                    width: t,
                  });
            }
          },
          renderOptionLabel: e => {
            let t = null;
            if (e.type === N.SelectOptionType.USER) {
              let n = f.default.getUser(e.value);
              null != n &&
                (t = (0, l.jsx)(o.default, {
                  className: I.tag,
                  usernameClass: I.username,
                  discriminatorClass: I.discriminator,
                  botClass: I.bot,
                  user: n,
                  forceUsername: !0,
                }));
            } else if (e.type === N.SelectOptionType.ROLE) {
              let n = null != x ? m.default.getRole(x.id, e.value) : void 0,
                a = null == n ? null : null == L ? void 0 : L[n.id];
              null != a &&
                (t = (0, l.jsxs)("div", {
                  className: I.roleCountContainer,
                  children: [
                    (0, l.jsx)(E.default, {
                      className: I.roleCountIcon,
                      height: 18,
                      width: 18,
                    }),
                    (0, l.jsx)("span", {
                      className: I.roleCountText,
                      children: a,
                    }),
                  ],
                }));
            }
            return (0, l.jsxs)("span", {
              className: I.label,
              children: [
                (0, l.jsx)("span", {
                  className: I.labelText,
                  children: e.label,
                }),
                t,
              ],
            });
          },
          defaultValues: y,
        });
      }
    },
    184406: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SelectIconSize: function () {
            return l;
          },
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        u = n("884691"),
        o = n("414456"),
        i = n.n(o),
        r = n("77078"),
        d = n("798609"),
        c = n("602428"),
        m = n("307311"),
        p = n("192112"),
        f = n("782340"),
        E = n("971002"),
        C = n("554066");
      function S(e) {
        let { icon: t, iconSize: n } = e;
        return (0, s.jsx)("div", {
          className: E.iconContainer,
          style: { height: n, width: n },
          children: t,
        });
      }
      function T(e) {
        let {
            selectActionComponent: t,
            queryOptions: n,
            renderIcon: l,
            renderOptionLabel: a,
            defaultValues: o,
          } = e,
          { type: T, placeholder: N, maxValues: v, disabled: h } = t,
          [_, I] = u.useState(!1),
          [g, O] = u.useState(!1),
          [x, L] = u.useState(
            new Map(null == o ? void 0 : o.map(e => [e.value, e]))
          ),
          [y, j] = u.useState(new Set(x.keys())),
          [A, M] = u.useState(() => (null != o ? o : []).map(e => e.value)),
          [R, b] = u.useState(0);
        u.useEffect(() => {
          let e = (null != o ? o : []).map(e => e.value);
          if (e.every(e => A.includes(e)) && A.every(t => e.includes(t)))
            return;
          M(e);
          let t = new Map(null == o ? void 0 : o.map(e => [e.value, e]));
          L(t), j(new Set(t.keys())), b(e => e + 1);
        }, [o, A]);
        let {
            state: U,
            executeStateUpdate: P,
            visualState: G,
            isDisabled: w,
            error: D,
          } = (0, m.useComponentState)(t, {
            type: T,
            selectedOptions: Array.from(x.values()),
          }),
          B = G === p.ActionComponentState.LOADING;
        u.useEffect(() => {
          if (
            (null == U ? void 0 : U.type) === d.ComponentType.USER_SELECT ||
            (null == U ? void 0 : U.type) === d.ComponentType.ROLE_SELECT ||
            (null == U ? void 0 : U.type) ===
              d.ComponentType.MENTIONABLE_SELECT ||
            (null == U ? void 0 : U.type) === d.ComponentType.CHANNEL_SELECT
          ) {
            let e = new Map(U.selectedOptions.map(e => [e.value, e]));
            L(e), j(new Set(e.keys()));
          }
        }, [U]);
        let k = u.useCallback(() => {
          P({ type: T, selectedOptions: Array.from(x.values()) }) &&
            j(new Set(x.keys()));
        }, [P, T, x]);
        u.useEffect(() => {
          if (!_ && !g)
            !(x.size === y.size && Array.from(x.keys()).every(e => y.has(e))) &&
              k();
        }, [_, g, y, x, k]);
        let z = 0 === x.size || _,
          F = {
            isDisabled: h || w,
            wrapperClassName: E.select,
            options: e =>
              new Promise(t => {
                let l = n(e);
                t(l);
              }),
            placeholder: z
              ? null != N
                ? N
                : f.default.Messages
                    .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => O(!1),
            maxVisibleItems: 5,
            optionClassName: E.selectOption,
            renderOptionPrefix: (e, t) => {
              let { inPill: n } = t,
                a = n ? 16 : 24,
                u = l(e, a);
              return null != u ? (0, s.jsx)(S, { icon: u, iconSize: a }) : null;
            },
            renderOptionLabel: a,
          };
        return (0, s.jsxs)(u.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: E.container,
              children: [
                v > 1
                  ? (0, s.jsx)(
                      r.SearchableSelect,
                      {
                        className: E.badges,
                        value: Array.from(x.values()),
                        onChange: e => {
                          !_ && O(!0), L(new Map(e.map(e => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: i({
                          [E.soloInput]: 0 === x.size,
                          [E.inlineInput]: x.size > 0,
                          [E.hidden]: !z,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...F,
                      },
                      R
                    )
                  : (0, s.jsx)(
                      r.SearchableSelect,
                      {
                        className: (E.badges, E.singleSelect),
                        value: [...x.values()][0],
                        onChange: e =>
                          L(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...F,
                      },
                      R
                    ),
                B
                  ? (0, s.jsx)("div", {
                      className: E.loading,
                      children: (0, s.jsx)(r.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != D
              ? (0, s.jsx)(c.InteractionStatusMessage, {
                  ...(0, c.getFailedContent)(D),
                  className: C.error,
                })
              : null,
          ],
        });
      }
      ((a = l || (l = {}))[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"),
        (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE");
    },
    73829: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        u = n.n(s),
        o = n("77078"),
        i = n("430568"),
        r = n("798609"),
        d = n("602428"),
        c = n("307311"),
        m = n("192112"),
        p = n("782340"),
        f = n("554066");
      function E(e) {
        let {
            emoji: t,
            label: n,
            description: a,
            isDisabled: s,
            isOffset: o,
          } = e,
          r = u(f.labelContainer, {
            [f.disabled]: s,
            [f.offset]: null == t && o,
          });
        return (0, l.jsxs)("div", {
          className: f.option,
          children: [
            null != t
              ? (0, l.jsx)(i.default, {
                  className: f.emoji,
                  emojiId: t.id,
                  emojiName: t.name,
                  animated: t.animated,
                })
              : null,
            (0, l.jsxs)("div", {
              className: r,
              children: [
                (0, l.jsx)("strong", { className: f.label, children: n }),
                null != a
                  ? (0, l.jsx)("span", {
                      className: f.description,
                      children: a,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function C(e) {
        let { emoji: t, label: n } = e;
        return (0, l.jsx)("div", {
          className: f.option,
          children: (0, l.jsxs)("div", {
            className: u(f.value, f.singleValue),
            children: [
              null != t
                ? (0, l.jsx)(i.default, {
                    className: f.emoji,
                    src: t.src,
                    emojiId: t.id,
                    emojiName: t.name,
                    animated: t.animated,
                  })
                : null,
              (0, l.jsx)("span", {
                className: f.singleValueLabel,
                children: n,
              }),
            ],
          }),
        });
      }
      function S(e) {
        let { options: t } = e;
        return (0, l.jsx)("div", {
          className: f.option,
          children: (0, l.jsx)("div", {
            className: f.value,
            children: t.map((e, t) =>
              (0, l.jsxs)(
                "div",
                {
                  className: f.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, l.jsx)(i.default, {
                          className: f.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, l.jsx)(
                      "span",
                      { className: f.tag, children: e.label },
                      e.value
                    ),
                  ],
                },
                t
              )
            ),
          }),
        });
      }
      function T(e) {
        let {
            type: t,
            options: n,
            indices: s,
            placeholder: u,
            maxValues: i,
            minValues: T,
            disabled: N,
          } = e,
          v = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]),
          {
            state: h,
            executeStateUpdate: _,
            visualState: I,
            isDisabled: g,
            error: O,
          } = (0, c.useComponentState)(e, { type: t, values: v }),
          x = i > 1,
          L = I === m.ActionComponentState.LOADING,
          [y, j] = a.useState(!1),
          [A, M] = a.useState(
            () => new Set(n.filter(e => e.default).map(e => e.value))
          ),
          [R, b] = a.useState(A),
          U = a.useMemo(() => n.some(e => null != e.emoji), [n]);
        a.useEffect(() => {
          if ((null == h ? void 0 : h.type) === r.ComponentType.STRING_SELECT) {
            let e = new Set(h.values);
            M(e), b(e);
          } else {
            let e = new Set(v);
            M(e), b(e);
          }
        }, [s, v, h]);
        let P = a.useCallback(() => {
          R !== A &&
            _({ type: r.ComponentType.STRING_SELECT, values: Array.from(A) }) &&
            b(A);
        }, [A, R, b, _]);
        a.useEffect(() => {
          if (!y)
            !(A.size === R.size && Array.from(R).every(e => A.has(e))) && P();
        }, [y, A, R, P]);
        let G = o.singleSelect;
        x ? (G = o.multiSelect) : 0 === T && (G = o.toggleSelect);
        let w = (0, o.useVariableSelect)({
          value: A,
          onChange: e => M(e),
          onSelectInteraction: G,
        });
        return (0, l.jsxs)(a.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: f.container,
              children: [
                (0, l.jsx)(o.Select, {
                  isDisabled: N || g,
                  className: f.select,
                  options: n.map(e => ({
                    ...e,
                    disabled: x && !A.has(e.value) && A.size === i,
                  })),
                  placeholder:
                    null != u
                      ? u
                      : p.default.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => j(!1),
                  onOpen: () => j(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !x,
                  optionClassName: f.selectOption,
                  renderOptionLabel: e =>
                    (0, l.jsx)(E, {
                      ...e,
                      isDisabled: x && !A.has(e.value) && A.size === i,
                      isOffset: U,
                    }),
                  renderOptionValue: e =>
                    x
                      ? (0, l.jsx)(S, { options: e })
                      : (0, l.jsx)(C, { ...e[0] }),
                  ...w,
                }),
                L
                  ? (0, l.jsx)("div", {
                      className: f.loading,
                      children: (0, l.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != O
              ? (0, l.jsx)(d.InteractionStatusMessage, {
                  ...(0, d.getFailedContent)(O),
                  className: f.error,
                })
              : null,
          ],
        });
      }
    },
    263130: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        u = n("798609"),
        o = n("307311"),
        i = n("890954");
      function r(e) {
        let t;
        let {
            type: n,
            style: r,
            label: d,
            placeholder: c,
            minLength: m,
            maxLength: p,
            required: f,
            value: E,
            indices: C,
          } = e,
          [S, T] = a.useState(null != E ? E : ""),
          {
            state: N,
            executeStateUpdate: v,
            error: h,
          } = (0, o.useComponentState)(
            e,
            null != E ? { type: n, value: E } : void 0
          );
        a.useEffect(() => {
          (null == N ? void 0 : N.type) === n && T(N.value);
        }, [n, N]);
        let _ = {
          name: d,
          value: S,
          placeholder: c,
          minLength: m,
          maxLength: p,
          required: f,
          onChange: e => {
            T(e), v({ type: n, value: e });
          },
          autoFocus: 0 === C[0],
        };
        switch (r) {
          case u.TextComponentStyle.SMALL:
            t = (0, l.jsx)(s.TextInput, { ..._ });
            break;
          case u.TextComponentStyle.PARAGRAPH:
            t = (0, l.jsx)(s.TextArea, { ..._ });
        }
        return (0, l.jsx)(s.FormItem, {
          title: d,
          required: f,
          className: i.formItem,
          error: h,
          children: t,
        });
      }
    },
    284360: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("602428"),
        s = n("307311"),
        u = n("83214");
      function o(e) {
        let { components: t, renderComponents: n, ...o } = e,
          { message: i } = (0, s.useComponentStateContext)();
        return null == t || 0 === t.length
          ? null
          : (0, l.jsxs)("div", {
              className: u.container,
              children: [
                (0, l.jsx)("div", { className: u.children, children: n(t) }),
                null != i
                  ? (0, l.jsx)(a.default, {
                      className: u.error,
                      message: i,
                      component: o,
                    })
                  : null,
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=df31a19b487eae9da070.js.map
