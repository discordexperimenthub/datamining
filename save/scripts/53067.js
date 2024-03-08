(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53067"],
  {
    158574: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("866227"),
        l = s.n(a),
        n = s("851387"),
        u = {
          async setCommunicationDisabledDuration(e, t, s, a, u) {
            let i = null != s ? l().add(s, "s").toISOString() : null;
            await n.default.setCommunicationDisabledUntil({
              guildId: e,
              userId: t,
              communicationDisabledUntilTimestamp: i,
              duration: s,
              reason: a,
              location: u,
            });
          },
        };
    },
    750331: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("446674"),
        u = s("77078"),
        i = s("158574"),
        o = s("685665"),
        r = s("697218"),
        d = s("91551"),
        c = s("476765"),
        f = s("945330"),
        N = s("599110"),
        _ = s("406043"),
        h = s("903639"),
        I = s("49111"),
        C = s("782340"),
        E = s("297498");
      function M(e) {
        var t, s;
        let {
            guildId: M,
            userId: U,
            anaylticsLocations: O,
            transitionState: m,
            onClose: T,
          } = e,
          D = (0, c.useUID)(),
          { analyticsLocations: A } = (0, o.default)(),
          S =
            null !==
              (s =
                null !== (t = null == O ? void 0 : O[0]) && void 0 !== t
                  ? t
                  : null == A
                    ? void 0
                    : A[0]) && void 0 !== s
              ? s
              : null,
          p = (0, n.useStateFromStores)(
            [r.default],
            () => r.default.getUser(U),
            [U]
          ),
          [v, g] = (0, _.default)(U, M),
          [L, R] = l.useState(!1),
          x = l.useCallback(async () => {
            if (null != p) {
              R(!0);
              try {
                await i.default.setCommunicationDisabledDuration(
                  M,
                  U,
                  null,
                  null,
                  S
                ),
                  (0, u.showToast)(
                    (0, u.createToast)(
                      C.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS,
                      u.ToastType.SUCCESS
                    )
                  ),
                  T();
              } catch (e) {
                (0, u.showToast)(
                  (0, u.createToast)(
                    C.default.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    u.ToastType.FAILURE
                  )
                );
              } finally {
                R(!1);
              }
            }
          }, [M, p, U, T, S]),
          b = l.useCallback(() => {
            !g && T();
          }, [g, T]);
        return (l.useEffect(() => {
          null != p &&
            N.default.track(I.AnalyticEvents.OPEN_MODAL, {
              type: h.SET_COMMUNICATION_DISABLED_MODAL_NAME,
              guild_id: M,
              other_user_id: p.id,
            });
        }, []),
        l.useEffect(() => {
          (null == p || null == M) && T();
        }),
        null == p || null == M)
          ? null
          : (0, a.jsxs)(u.ModalRoot, {
              transitionState: m,
              "aria-labelledby": D,
              children: [
                (0, a.jsxs)(u.ModalHeader, {
                  className: E.header,
                  separator: !1,
                  children: [
                    (0, a.jsx)(u.Heading, {
                      variant: "heading-lg/semibold",
                      children:
                        C.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER,
                    }),
                    (0, a.jsx)(u.Clickable, {
                      onClick: T,
                      className: E.closeButton,
                      "aria-label": C.default.Messages.CLOSE,
                      children: (0, a.jsx)(f.default, {
                        className: E.closeIcon,
                        width: 16,
                        height: 16,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(u.ModalContent, {
                  children: [
                    (0, a.jsx)(u.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children:
                        C.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format(
                          {
                            username: p.username,
                            countdown: e =>
                              null == v
                                ? null
                                : (0, a.jsx)(d.default, {
                                    className: E.countdown,
                                    deadline: new Date(v),
                                    onInterval: b,
                                    showUnits: !0,
                                    stopAtOneSec: !0,
                                  }),
                          }
                        ),
                    }),
                    (0, a.jsx)(u.Text, {
                      className: E.cta,
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children:
                        C.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format(
                          { link: h.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK }
                        ),
                    }),
                  ],
                }),
                (0, a.jsxs)(u.ModalFooter, {
                  children: [
                    (0, a.jsx)(u.Button, {
                      color: u.Button.Colors.RED,
                      onClick: x,
                      submitting: L,
                      children: C.default.Messages.REMOVE_TIME_OUT,
                    }),
                    (0, a.jsx)(u.Button, {
                      type: "button",
                      look: u.Button.Looks.LINK,
                      color: u.Button.Colors.PRIMARY,
                      onClick: T,
                      children: C.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    91551: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        n = s("917351"),
        u = s.n(n),
        i = s("888400"),
        o = s("782340");
      let r = () => [
        o.default.Messages.COUNTDOWN_UNITS_SECONDS,
        o.default.Messages.COUNTDOWN_UNITS_MINUTES,
        o.default.Messages.COUNTDOWN_UNITS_HOURS,
        o.default.Messages.COUNTDOWN_UNITS_DAYS,
      ];
      class d extends l.PureComponent {
        componentDidMount() {
          let { intervalDuration: e, onInterval: t } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
          }, e);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(e) {
          let { showDays: t, showUnits: s, className: l } = this.props,
            n = [e.days, e.hours, e.minutes, e.seconds],
            i = r();
          if (0 === e.days) n.shift();
          else if (!t) {
            let e = n.shift();
            n[0] += 24 * e;
          }
          let o = u(n)
            .map(e => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
              t > 0 && !s ? ":" : " ",
              (0, a.jsxs)(
                "span",
                { children: [e, s ? i[n.length - t - 1] : null] },
                t
              ),
            ])
            .flatten()
            .value();
          return (0, a.jsx)("span", { className: l, children: o });
        }
        render() {
          let {
            deadline: e,
            children: t,
            className: s,
            stopAtOneSec: l,
          } = this.props;
          if (e === 1 / 0)
            return (0, a.jsx)("span", {
              className: s,
              "aria-label": o.default.Messages.MAX_AGE_NEVER,
              children: "∞",
            });
          let n = (0, i.diffAsUnits)(Date.now(), e, l);
          return null != t
            ? t(n, this.defaultRender.bind(this, n))
            : this.defaultRender(n);
        }
      }
      d.defaultProps = {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      };
      var c = d;
    },
    476765: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          uid: function () {
            return u;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return o;
          },
        });
      var a = s("995008"),
        l = s.n(a),
        n = s("775560");
      let u = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        i = () => (0, n.useLazyValue)(() => u()),
        o = e => {
          let { children: t } = e;
          return t(i());
        };
    },
  },
]);
//# sourceMappingURL=9154e4d3416555d5b70d.js.map
