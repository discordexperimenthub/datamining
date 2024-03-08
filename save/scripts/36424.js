(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36424"],
  {
    158574: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a("866227"),
        l = a.n(n),
        s = a("851387"),
        o = {
          async setCommunicationDisabledDuration(e, t, a, n, o) {
            let i = null != a ? l().add(a, "s").toISOString() : null;
            await s.default.setCommunicationDisabledUntil({
              guildId: e,
              userId: t,
              communicationDisabledUntilTimestamp: i,
              duration: a,
              reason: n,
              location: o,
            });
          },
        };
    },
    693120: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return O;
          },
        }),
        a("222007");
      var n = a("37983"),
        l = a("884691"),
        s = a("446674"),
        o = a("77078"),
        i = a("158574"),
        r = a("685665"),
        u = a("130037"),
        c = a("697218"),
        d = a("140848"),
        D = a("476765"),
        I = a("945330"),
        _ = a("599110"),
        C = a("387111"),
        N = a("903639"),
        m = a("49111"),
        A = a("782340"),
        f = a("509299");
      function E(e) {
        return {
          value: e,
          get label() {
            var t;
            return null === (t = (0, N.getFriendlyDurationString)(e)) ||
              void 0 === t
              ? void 0
              : t.toLocaleUpperCase();
          },
        };
      }
      let M = [
        E(N.DisableCommunicationDuration.DURATION_60_SEC),
        E(N.DisableCommunicationDuration.DURATION_5_MIN),
        E(N.DisableCommunicationDuration.DURATION_10_MIN),
        E(N.DisableCommunicationDuration.DURATION_1_HOUR),
        E(N.DisableCommunicationDuration.DURATION_1_DAY),
        E(N.DisableCommunicationDuration.DURATION_1_WEEK),
      ];
      function O(e) {
        var t, a;
        let {
            guildId: E,
            userId: O,
            anaylticsLocations: T,
            transitionState: U,
            onClose: S,
          } = e,
          h = (0, D.useUID)(),
          { analyticsLocations: x } = (0, r.default)(),
          L =
            null !==
              (a =
                null !== (t = null == T ? void 0 : T[0]) && void 0 !== t
                  ? t
                  : null == x
                    ? void 0
                    : x[0]) && void 0 !== a
              ? a
              : null,
          R = (0, s.useStateFromStores)(
            [c.default],
            () => c.default.getUser(O),
            [O]
          ),
          [g, b] = l.useState(N.DisableCommunicationDuration.DURATION_60_SEC),
          v = (0, u.useTrackModerationAction)(E, {
            location: L,
            targetUserId: O,
          }),
          [p, j] = l.useState(""),
          [B, k] = l.useState(!1),
          y = l.useCallback(async () => {
            if (null != R) {
              k(!0);
              try {
                await i.default.setCommunicationDisabledDuration(E, O, g, p, L),
                  v(u.ModerationActionType.TIMEOUT),
                  (0, o.showToast)(
                    (0, o.createToast)(
                      A.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format(
                        { user: C.default.getName(E, null, R) }
                      ),
                      o.ToastType.SUCCESS
                    )
                  ),
                  S();
              } catch (e) {
                (0, o.showToast)(
                  (0, o.createToast)(
                    A.default.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    o.ToastType.FAILURE
                  )
                );
              } finally {
                k(!1);
              }
            }
          }, [E, R, O, S, g, p, L, v]);
        return (l.useEffect(() => {
          null != R &&
            _.default.track(m.AnalyticEvents.OPEN_MODAL, {
              type: N.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
              guild_id: E,
              other_user_id: R.id,
            });
        }, []),
        l.useEffect(() => {
          (null == R || null == E) && S();
        }, [E, R, S]),
        null == R || null == E)
          ? null
          : (0, n.jsxs)(o.ModalRoot, {
              transitionState: U,
              "aria-labelledby": h,
              children: [
                (0, n.jsxs)(o.ModalHeader, {
                  className: f.header,
                  separator: !1,
                  children: [
                    (0, n.jsx)(o.Heading, {
                      id: h,
                      variant: "heading-lg/semibold",
                      children:
                        A.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format(
                          { user: C.default.getName(E, null, R) }
                        ),
                    }),
                    (0, n.jsx)(o.Clickable, {
                      onClick: S,
                      className: f.closeButton,
                      "aria-label": A.default.Messages.CLOSE,
                      children: (0, n.jsx)(I.default, {
                        className: f.closeIcon,
                        width: 16,
                        height: 16,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(o.ModalContent, {
                  className: f.contentContainer,
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children:
                        A.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format(
                          {
                            helpdeskArticle:
                              N.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK,
                          }
                        ),
                    }),
                    (0, n.jsx)(o.Text, {
                      className: f.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children:
                        A.default.Messages
                          .GUILD_COMMUNICATION_DISABLED_DURATION,
                    }),
                    (0, n.jsx)(d.default, {
                      buttons: M.map(e =>
                        (function (e, t, a) {
                          let { value: l, label: s } = e,
                            i = (0, n.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              className: t
                                ? f.selectorTextSelected
                                : f.selectorText,
                              children: s,
                            });
                          return {
                            content: i,
                            className: t
                              ? f.selectorButtonSelected
                              : f.selectorButton,
                            onClick: () => a(l),
                          };
                        })(e, e.value === g, b)
                      ),
                    }),
                    (0, n.jsx)(o.Text, {
                      className: f.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children:
                        A.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON,
                    }),
                    (0, n.jsx)(o.TextArea, {
                      value: p,
                      onChange: e => j(e),
                      placeholder:
                        A.default.Messages
                          .GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                      rows: 2,
                      maxLength: N.MAX_REASON_LENGTH,
                    }),
                  ],
                }),
                (0, n.jsxs)(o.ModalFooter, {
                  children: [
                    (0, n.jsx)(o.Button, {
                      onClick: y,
                      color: o.Button.Colors.BRAND_NEW,
                      submitting: B,
                      children: A.default.Messages.TIMEOUT_SUBMIT,
                    }),
                    (0, n.jsx)(o.Button, {
                      type: "button",
                      look: o.Button.Looks.LINK,
                      color: o.Button.Colors.PRIMARY,
                      onClick: S,
                      children: A.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    140848: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("414456"),
        s = a.n(l),
        o = a("77078"),
        i = a("755031");
      let r = e => {
        let { data: t, disabled: a } = e,
          { content: l, className: r, onClick: u, disabled: c } = t;
        return (0, n.jsx)(o.FocusRing, {
          children: (0, n.jsx)("button", {
            type: "button",
            className: s(i.item, r),
            onClick: u,
            disabled: a || c,
            children: l,
          }),
        });
      };
      var u = e => {
        let { buttons: t, disabled: a, className: l } = e;
        return (0, n.jsx)("div", {
          role: "group",
          className: s(i.group, l),
          children: t.map((e, t) => (0, n.jsx)(r, { data: e, disabled: a }, t)),
        });
      };
    },
    476765: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return r;
          },
        });
      var n = a("995008"),
        l = a.n(n),
        s = a("775560");
      let o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        i = () => (0, s.useLazyValue)(() => o()),
        r = e => {
          let { children: t } = e;
          return t(i());
        };
    },
  },
]);
//# sourceMappingURL=533c8d961954cf949ea2.js.map
