(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13834"],
  {
    689223: function (e, t, a) {
      "use strict";
      e.exports = a.p + "0678b217e47589207930.mp4";
    },
    429777: function (e, t, a) {
      "use strict";
      e.exports = a.p + "3d23b8d31086b7901261.png";
    },
    430857: function (e, t, a) {
      "use strict";
      e.exports = a.p + "d3456e390fa9fdbbc0c4.webm";
    },
    743506: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        }),
        a("222007");
      var n,
        l,
        s = a("37983"),
        u = a("884691"),
        o = a("77078"),
        r = a("851387"),
        i = a("130037"),
        c = a("772280"),
        d = a("58608"),
        _ = a("718517"),
        E = a("387111"),
        A = a("49111"),
        f = a("782340"),
        M = a("118585");
      ((l = n || (n = {}))[(l.INITIAL = 0)] = "INITIAL"),
        (l[(l.OTHER_REASON = 1)] = "OTHER_REASON");
      function S() {
        return [
          {
            value: 0,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
          },
          {
            value: 1 * _.default.Seconds.HOUR,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
          },
          {
            value: 6 * _.default.Seconds.HOUR,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
          },
          {
            value: 12 * _.default.Seconds.HOUR,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
          },
          {
            value: 1 * _.default.Seconds.DAY,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
          },
          {
            value: 3 * _.default.Seconds.DAY,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
          },
          {
            value: 7 * _.default.Seconds.DAY,
            label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
          },
        ];
      }
      let O = S()[1].value;
      function I(e) {
        let {
            guildId: t,
            user: n,
            location: l,
            userIds: _,
            onBanMultiple: I,
            transitionState: N,
            onClose: T,
            canBulkBan: R = !1,
          } = e,
          [m, C] = u.useState(O),
          [g, h] = u.useState(""),
          [L, v] = u.useState(0),
          [p, b] = u.useState(!1),
          B = (0, i.useTrackModerationAction)(t, {
            location: l,
            targetUserId: null == n ? void 0 : n.id,
            targets: _,
          }),
          D = u.useCallback(() => {
            if (null != I) {
              let e = null != _ && (null == _ ? void 0 : _.size) > 0 && R;
              if (!e || p) return;
              if ("" === g.trim() && !p) {
                b(!0);
                return;
              }
              I(t, [..._], m, g);
            } else {
              if (null == n) return;
              r.default.banUser(t, null == n ? void 0 : n.id, m, g);
            }
            B(i.ModerationActionType.BAN), T();
          }, [I, B, T, _, R, p, g, t, m, n]),
          y = u.useCallback(e => {
            C(e);
          }, []),
          x = u.useCallback(e => {
            let { value: t } = e;
            h(t), b(!1);
          }, []),
          k = u.useCallback(
            e => {
              h(e), p && b(!1);
            },
            [p]
          ),
          H = u.useCallback(() => {
            h(""), v(1);
          }, []),
          U = u.useCallback(() => {
            v(0);
          }, []),
          j = [
            {
              name: f.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
              value: f.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
            },
            {
              name: f.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
              value: f.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
            },
            {
              name: f.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
              value: f.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
            },
          ],
          P =
            null != I && null != _
              ? f.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                  count: null == _ ? void 0 : _.size,
                })
              : null == n
                ? ""
                : f.default.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(E.default.getName(t, null, n)),
                  });
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: N,
          children: [
            (0, s.jsx)(o.ModalHeader, {
              separator: !1,
              children: (0, s.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                children: P,
              }),
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: M.modalContent,
              children: [
                (0, s.jsxs)(d.default, {
                  autoPlay: !0,
                  loop: !0,
                  className: M.spacing,
                  width: 400,
                  children: [
                    (0, s.jsx)("source", {
                      src: a("430857"),
                      type: "video/webm",
                    }),
                    (0, s.jsx)("source", {
                      src: a("689223"),
                      type: "video/mp4",
                    }),
                    (0, s.jsx)("img", { alt: "", src: a("429777") }),
                  ],
                }),
                (0, s.jsxs)(o.FormItem, {
                  title: f.default.Messages.FORM_LABEL_REASON_BAN,
                  className: M.spacing,
                  children: [
                    p &&
                      (0, s.jsx)(o.FormErrorBlock, {
                        className: M.error,
                        children: f.default.Messages.BAN_REASON_REQUIRED_ERROR,
                      }),
                    (0, s.jsx)(o.Sequencer, {
                      steps: [0, 1],
                      step: L,
                      children: (e => {
                        switch (L) {
                          case 0:
                            return (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(o.RadioGroup, {
                                  value: g,
                                  options: e,
                                  onChange: x,
                                  radioItemClassName: M.radioItemStyles,
                                }),
                                (0, s.jsxs)(o.Clickable, {
                                  onClick: H,
                                  className: M.banReasonOtherClickable,
                                  children: [
                                    (0, s.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      color: "none",
                                      children: f.default.Messages.OTHER,
                                    }),
                                    (0, s.jsx)(c.default, {
                                      width: "16",
                                      height: "16",
                                    }),
                                  ],
                                }),
                              ],
                            });
                          case 1:
                            return (0, s.jsx)(o.TextArea, {
                              maxLength: A.MAX_REASON_LENGTH,
                              onChange: k,
                              value: g,
                              rows: 5,
                              autoFocus: !0,
                            });
                        }
                      })(j),
                    }),
                  ],
                }),
                (0, s.jsx)(o.FormItem, {
                  title: f.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                  className: M.spacing,
                  children: (0, s.jsx)(o.SingleSelect, {
                    options: S(),
                    value: m,
                    onChange: y,
                  }),
                }),
              ],
            }),
            (() => {
              switch (L) {
                case 0:
                  return (0, s.jsxs)(o.ModalFooter, {
                    className: M.footer,
                    children: [
                      (0, s.jsx)(o.Button, {
                        type: "button",
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: T,
                        children: f.default.Messages.CANCEL,
                      }),
                      (0, s.jsx)(o.Button, {
                        type: "submit",
                        color: o.Button.Colors.RED,
                        size: o.Button.Sizes.SMALL,
                        onClick: D,
                        children: f.default.Messages.BAN,
                      }),
                    ],
                  });
                case 1:
                  return (0, s.jsxs)(o.ModalFooter, {
                    className: M.footerStepped,
                    children: [
                      (0, s.jsx)(o.Button, {
                        className: M.cancel,
                        innerClassName: M.cancel,
                        type: "button",
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        onClick: U,
                        children: f.default.Messages.BACK,
                      }),
                      (0, s.jsx)(o.Button, {
                        type: "submit",
                        color: o.Button.Colors.RED,
                        size: o.Button.Sizes.SMALL,
                        onClick: D,
                        children: f.default.Messages.BAN,
                      }),
                    ],
                  });
              }
            })(),
          ],
        });
      }
    },
    130037: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useTrackMemberSearchUsed: function () {
            return A;
          },
          useTrackMemberFilterRolesUsed: function () {
            return f;
          },
          MemberSafetyFlagType: function () {
            return s;
          },
          useTrackMemberFilterSafetyFlagsUsed: function () {
            return M;
          },
          ModerationActionType: function () {
            return u;
          },
          useTrackModerationAction: function () {
            return S;
          },
          trackMembersPageViewed: function () {
            return O;
          },
        });
      var n,
        l,
        s,
        u,
        o = a("884691"),
        r = a("812204"),
        i = a("716241"),
        c = a("271938"),
        d = a("599110"),
        _ = a("49111");
      function E(e, t, a) {
        var n;
        let l = {
          ...t,
          ...(0, i.collectGuildAnalyticsMetadata)(
            null !== (n = t.guild_id) && void 0 !== n ? n : a
          ),
        };
        d.default.track(e, l);
      }
      function A(e) {
        let t = o.useCallback(
          t => {
            !(function (e) {
              let t = { guild_id: e, location: r.default.MEMBER_SAFETY_PAGE };
              E(_.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e]
        );
        return t;
      }
      function f(e) {
        let t = o.useCallback(
          t => {
            !(function (e, t) {
              let a = {
                selected_role_count: t.size,
                guild_id: e,
                location: r.default.MEMBER_SAFETY_PAGE,
              };
              E(_.AnalyticEvents.MOD_DASH_FILTER_ROLES, a);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      ((n = s || (s = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (n.COMMUNICATION_DISABLED = "communication_disabled"),
        (n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (n.USERNAME_QUARANTINED = "username_quarantined");
      function M(e) {
        let t = o.useCallback(
          t => {
            !(function (e, t) {
              let a = {
                flag_type: t,
                guild_id: e,
                location: r.default.MEMBER_SAFETY_PAGE,
              };
              E(_.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, a);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      function S(e, t) {
        let { location: a, targetUserId: n, targets: l, locations: s } = t,
          u = o.useCallback(
            t => {
              let u = {
                action_type: t,
                mod_user_id: c.default.getId(),
                guild_id: e,
                location: a,
                locations: s,
                target_user_id: null != n ? n : void 0,
                targets: null != l ? l : void 0,
              };
              E(_.AnalyticEvents.MODERATION_ACTION, u);
            },
            [e, a, n, l, s]
          );
        return u;
      }
      function O(e, t) {
        E(_.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((l = u || (u = {})).BAN = "ban"),
        (l.KICK = "kick"),
        (l.MUTE = "mute"),
        (l.TIMEOUT = "timeout"),
        (l.ADD_ROLE = "add_role"),
        (l.REMOVE_ROLE = "remove_role"),
        (l.COPY_ID = "copy_id"),
        (l.CHANGE_NICKNAME = "change_nickname");
    },
    719347: function (e, t, a) {
      "use strict";
      var n, l;
      a.r(t),
        a.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return s;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return u;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return o;
          },
          MediaLayoutType: function () {
            return n;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return r;
          },
        });
      let s = 550,
        u = 350,
        o = 40;
      ((l = n || (n = {})).STATIC = "STATIC"),
        (l.RESPONSIVE = "RESPONSIVE"),
        (l.MOSAIC = "MOSAIC");
      let r = 20;
    },
    58608: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a("37983"),
        l = a("884691"),
        s = a("118810"),
        u = a("446674"),
        o = a("206230"),
        r = a("719347");
      let i = e => {
        let {
            externalRef: t,
            autoPlay: a,
            playOnHover: i,
            responsive: c,
            mediaLayoutType: d,
            ..._
          } = e,
          E = (0, u.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          ),
          A = l.useRef(null);
        function f() {
          var e;
          i &&
            (null == A || null === (e = A.current) || void 0 === e || e.play());
        }
        function M() {
          var e;
          i &&
            (null == A ||
              null === (e = A.current) ||
              void 0 === e ||
              e.pause());
        }
        return (
          l.useLayoutEffect(
            () => () => {
              let { current: e } = A;
              null != e &&
                (function (e) {
                  e.removeAttribute("src"),
                    Array.from(e.children).forEach(e => {
                      (0, s.isElement)(e, HTMLSourceElement) &&
                        (e.removeAttribute("src"), e.removeAttribute("type")),
                        (0, s.isElement)(e, HTMLImageElement) &&
                          e.removeAttribute("src");
                    });
                  try {
                    e.load();
                  } catch (e) {}
                })(e);
            },
            []
          ),
          l.useLayoutEffect(
            () => (
              "function" == typeof t
                ? (t(null), t(A.current))
                : null != t && (t.current = A.current),
              () => {
                "function" == typeof t
                  ? t(null)
                  : null != t && (t.current = null);
              }
            ),
            [t, A]
          ),
          (0, n.jsx)("video", {
            ref: A,
            autoPlay: !E && !i && a,
            onMouseEnter: f,
            onMouseLeave: M,
            onFocus: f,
            onBlur: M,
            style:
              d === r.MediaLayoutType.MOSAIC
                ? {
                    width: "100%",
                    height: "100%",
                    maxHeight: "inherit",
                    objectFit: "cover",
                  }
                : c
                  ? (function () {
                      return {
                        maxWidth: _.width,
                        maxHeight: _.height,
                        width: "100%",
                        height: "100%",
                      };
                    })()
                  : {},
            ..._,
          })
        );
      };
      var c = l.forwardRef((e, t) => (0, n.jsx)(i, { ...e, externalRef: t }));
    },
  },
]);
//# sourceMappingURL=0bf5b1e20e5350c5134e.js.map
