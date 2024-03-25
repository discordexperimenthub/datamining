(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69473"],
  {
    352674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("913144"),
        s = {
          startTyping(e) {
            a.default.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
          },
          stopTyping(e) {
            a.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
          },
        };
    },
    997289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnalyticsContext: function () {
            return r;
          },
        });
      var a = n("884691"),
        s = n("599110");
      let r = () => a.useContext(s.AnalyticsContext);
    },
    837707: function (e, t, n) {
      "use strict";
      function a(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
    },
    166452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        r = n("272030"),
        u = n("838446"),
        i = n("158534"),
        d = n("798609"),
        l = n("846883"),
        o = n("812204"),
        c = n("389153"),
        f = n("243288"),
        m = n("321135"),
        p = n("873254"),
        h = n("861370"),
        M = n("726750"),
        x = n("170990"),
        g = n("304582"),
        v = n("72057"),
        S = n("563816"),
        C = n("489836"),
        j = n("406703"),
        I = n("343856"),
        _ = n("502533"),
        E = n("314838"),
        T = n("383161"),
        N = n("421602"),
        O = n("432487"),
        R = n("151200"),
        A = n("692986"),
        U = n("806179"),
        y = n("816106"),
        G = n("623879"),
        P = n("49111"),
        b = n("782340"),
        w = (0, i.default)(
          (0, u.default)(
            function (e) {
              var t;
              let {
                  user: n,
                  channel: u,
                  context: i,
                  showChatItems: o = !0,
                  showMediaItems: P = !1,
                  showChannelCallItems: w = !1,
                  showModalItems: L = !0,
                  onSelect: F,
                  onHeightUpdate: k,
                } = e,
                D = (0, U.default)(n.id, null),
                z = (0, T.default)(n, null, i),
                W = (0, R.default)(n.id, u.id),
                B = (0, N.default)(n.id, i),
                H = (0, j.default)(n, i),
                Y = (0, v.default)({ user: n, context: i }),
                X = (0, g.default)(n),
                Z = (0, y.default)(n.id),
                V = (0, O.default)(n.id, u.id),
                q = (0, A.default)(n.id),
                J = (0, _.default)(n.id, u.id),
                K = (0, E.default)(n),
                Q = (0, l.default)(null, n),
                $ = (0, x.default)(n),
                ee = (0, C.default)(n),
                et = (0, h.default)({
                  id: n.id,
                  label: b.default.Messages.COPY_ID_USER,
                }),
                en = (0, G.default)(n.id),
                ea = (0, m.default)(n.id),
                es = (0, f.default)(u.id),
                er = (0, M.default)(n),
                eu = (0, p.default)(n.id),
                ei = (0, S.default)({
                  commandType: d.ApplicationCommandType.USER,
                  commandTargetId: n.id,
                  channel: u,
                  guildId: void 0,
                  onHeightUpdate: k,
                }),
                ed = (0, I.default)(n, u),
                el = (0, c.useIsUserInUserAppExperiment)({
                  location: "GroupDMUserContextMenu",
                }),
                eo = n.isNonUserBot(),
                ec = u.isManaged(),
                ef =
                  null === (t = u.recipients) || void 0 === t
                    ? void 0
                    : t.includes(n.id);
              return (0, a.jsxs)(s.Menu, {
                navId: "user-context",
                onClose: r.closeContextMenu,
                "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: F,
                children: [
                  !eo &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(s.MenuGroup, { children: er }),
                        (0, a.jsxs)(s.MenuGroup, {
                          children: [
                            L && D,
                            o && z,
                            B,
                            H,
                            !ec && W,
                            L && Y,
                            L && X,
                            en,
                          ],
                        }),
                        P && (0, a.jsx)(s.MenuGroup, { children: Z }),
                        ef &&
                          (0, a.jsxs)(s.MenuGroup, {
                            children: [!ec && V, ed],
                          }),
                        (0, a.jsx)(s.MenuGroup, { children: L && Q }),
                        (0, a.jsxs)(s.MenuGroup, {
                          children: [
                            P && q,
                            P && J,
                            el && ei,
                            L && K,
                            $,
                            L && ee,
                            P && eu,
                          ],
                        }),
                        w && (0, a.jsxs)(s.MenuGroup, { children: [es, ea] }),
                      ],
                    }),
                  (0, a.jsx)(s.MenuGroup, { children: et }),
                ],
              });
            },
            { object: P.AnalyticsObjects.CONTEXT_MENU }
          ),
          [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU]
        );
    },
    343856: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        r = n("669491"),
        u = n("77078"),
        i = n("450911"),
        d = n("145079"),
        l = n("87657"),
        o = n("697218"),
        c = n("782340"),
        f = n("766646");
      function m(e) {
        let { color: t, className: n } = e;
        return (0, a.jsx)("svg", {
          className: n,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, a.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, a.jsxs)("g", {
                stroke: t,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, a.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, a.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, a.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, a.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(e, t) {
        let n = (0, s.useStateFromStores)([o.default], () =>
          o.default.getCurrentUser()
        );
        return null == n ||
          t.ownerId !== n.id ||
          e.id === n.id ||
          (null == t ? void 0 : t.isBroadcastChannel())
          ? null
          : (0, a.jsx)(u.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.default.Messages.CHANGE_DM_OWNER,
              action: () => {
                var s;
                return (
                  (s = n),
                  void (0, u.openModal)(n =>
                    (0, a.jsxs)(u.ConfirmModal, {
                      bodyClassName: f.confirmModal,
                      header: c.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.default.Messages.CONFIRM,
                      cancelText: c.default.Messages.CANCEL,
                      onConfirm: () => i.default.setDMOwner(t.id, e.id),
                      ...n,
                      children: [
                        (0, a.jsx)(m, {
                          color: r.default.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, a.jsxs)("div", {
                          className: f.fromToWrapper,
                          children: [
                            (0, a.jsx)("div", {
                              className: f.from,
                              children: (0, a.jsx)(l.default, {
                                user: s,
                                size: u.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: f.to,
                              children: (0, a.jsx)(l.default, {
                                user: e,
                                size: u.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(u.Text, {
                          variant: "text-md/normal",
                          children:
                            c.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                              usernameHook: (t, n) =>
                                (0, a.jsx)(
                                  d.default,
                                  {
                                    usernameIcon: (0, a.jsx)(u.Avatar, {
                                      className: f.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: u.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: f.discordTag,
                                    usernameClass: f.username,
                                    discriminatorClass: f.discriminator,
                                    user: e,
                                  },
                                  n
                                ),
                            }),
                        }),
                      ],
                    })
                  )
                );
              },
            });
      }
    },
    383161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          mentionUser: function () {
            return p;
          },
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        r = n("77078"),
        u = n("352674"),
        i = n("42203"),
        d = n("957255"),
        l = n("18494"),
        o = n("659500"),
        c = n("158998"),
        f = n("49111"),
        m = n("782340");
      function p(e, t) {
        let { id: n } = e,
          a = "@".concat(c.default.getUserTag(e, { decoration: "never" }));
        o.ComponentDispatch.dispatchToLastSubscribed(
          f.ComponentActions.INSERT_TEXT,
          { plainText: a, rawText: "<@".concat(n, ">") }
        ),
          null != t && u.default.startTyping(t);
      }
      function h(e, t, n) {
        let [u, o] = (0, s.useStateFromStoresArray)(
            [l.default, i.default, d.default],
            () => {
              let e = l.default.getChannelId(t),
                n = i.default.getChannel(e),
                a =
                  null != n &&
                  (n.isMultiUserDM() ||
                    d.default.can(f.Permissions.SEND_MESSAGES, n));
              return [e, a];
            },
            [t]
          ),
          c = n === f.AppContext.POPOUT;
        return !o || c
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "mention",
              label: m.default.Messages.MENTION,
              action: function () {
                p(e, u);
              },
            });
      }
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        r = n("450911"),
        u = n("54239"),
        i = n("271938"),
        d = n("49111"),
        l = n("782340");
      function o(e, t) {
        let n = i.default.getId(),
          o = t === d.AppContext.POPOUT;
        return n === e || o
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "message-user",
              label: l.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                r.default.openPrivateChannel(e), (0, u.popLayer)();
              },
            });
      }
    },
    432487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        r = n("77078"),
        u = n("450911"),
        i = n("42203"),
        d = n("697218"),
        l = n("782340");
      function o(e, t) {
        let n = (0, s.useStateFromStores)(
            [d.default],
            () => d.default.getCurrentUser(),
            []
          ),
          o = (0, s.useStateFromStores)(
            [i.default],
            () => i.default.getChannel(t),
            [t]
          );
        return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id)
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "remove",
              label: l.default.Messages.REMOVE_FROM_GROUP,
              action: () => u.default.removeRecipient(t, e),
              color: "danger",
            });
      }
    },
    151200: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        r = n("77078"),
        u = n("561288"),
        i = n("191145"),
        d = n("271938"),
        l = n("99795"),
        o = n("782340");
      function c(e, t) {
        let n = (0, s.useStateFromStores)(
            [d.default],
            () => d.default.getId() === e,
            [e]
          ),
          [c, f] = (0, s.useStateFromStoresArray)(
            [i.default],
            () => [
              i.default.getParticipants(t),
              i.default.getParticipant(t, e),
            ],
            [t, e]
          );
        return n || 0 === c.length
          ? null
          : null == f
            ? (0, a.jsx)(r.MenuItem, {
                id: "ring",
                label: o.default.Messages.RING,
                action: () => u.default.ring(t, [e]),
              })
            : f.type === l.ParticipantTypes.USER && f.ringing
              ? (0, a.jsx)(r.MenuItem, {
                  id: "stop-ringing",
                  label: o.default.Messages.STOP_RINGING,
                  action: () => u.default.stopRinging(t, [e]),
                })
              : null;
      }
    },
  },
]);
//# sourceMappingURL=7161f20676ac6bfe84b9.js.map
