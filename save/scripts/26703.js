(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26703"],
  {
    553021: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c7c4065874955761be3b.svg";
    },
    752499: function (e, t, s) {
      "use strict";
      e.exports = s.p + "a1b0a14d2f22c155a2b3.svg";
    },
    856670: function (e, t, s) {
      "use strict";
      e.exports = s.p + "018197f71e03e53562e7.svg";
    },
    693029: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7e5dd7f59f96cc264184.svg";
    },
    133403: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("414456"),
        r = s.n(n),
        i = s("77078"),
        l = s("782340"),
        d = s("518377");
      let o = Object.freeze({ DEFAULT: d.default, FILLED: d.filled });
      function u(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": n,
          look: u = o.DEFAULT,
        } = e;
        return (0, a.jsx)(i.Clickable, {
          "aria-label": null != n ? n : l.default.Messages.REMOVE,
          className: r(d.button, u, t),
          onClick: s,
        });
      }
      u.Looks = o;
    },
    87657: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s("37983"),
        n = s("884691"),
        r = s("77078"),
        i = s("390236"),
        l = n.memo(function (e) {
          var t, s, l, d;
          let {
              user: o,
              size: u = r.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": h = !1,
              ...f
            } = e,
            m = n.useContext(i.default);
          return (0, a.jsx)(r.Avatar, {
            src:
              ((t = o),
              (s = (0, r.getAvatarSize)(u)),
              (l = c),
              (d = m),
              t.getAvatarURL(d, s, l)),
            size: u,
            "aria-label": h ? void 0 : o.username,
            "aria-hidden": h,
            ...f,
          });
        });
    },
    84279: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return k;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        r = s("414456"),
        i = s.n(r),
        l = s("917351"),
        d = s.n(l),
        o = s("446674"),
        u = s("872717"),
        c = s("77078"),
        h = s("970728"),
        f = s("133403"),
        m = s("145079"),
        p = s("87657"),
        x = s("716241"),
        T = s("161778"),
        N = s("517763"),
        I = s("766274"),
        g = s("42203"),
        v = s("102985"),
        E = s("91551"),
        C = s("941886"),
        j = s("145131"),
        S = s("599110"),
        _ = s("49111"),
        A = s("782340"),
        D = s("55041"),
        M = s("685691"),
        y = s("890957");
      class R extends n.PureComponent {
        render() {
          let {
              invite: e,
              hideDiscriminator: t,
              hideInviteCode: s,
            } = this.props,
            n = new I.default(e.inviter);
          return (0, a.jsxs)(j.default, {
            className: i(D.row, M.card),
            children: [
              (0, a.jsxs)(j.default, {
                align: j.default.Align.CENTER,
                className: D.userColumn,
                children: [
                  (0, a.jsx)(p.default, {
                    user: n,
                    size: c.AvatarSizes.SIZE_24,
                    className: D.avatar,
                  }),
                  (0, a.jsx)(m.default, {
                    user: n,
                    hideDiscriminator: t,
                    usernameClass: D.username,
                    discriminatorClass: D.discrimClass,
                  }),
                ],
              }),
              (0, a.jsx)(j.default, {
                align: j.default.Align.CENTER,
                grow: 0,
                shrink: 0,
                basis: 100,
                className: D.boostZIndex,
                children: (0, a.jsx)(c.Text, {
                  className: D.code,
                  variant: "text-sm/normal",
                  children: s ? "..." : e.code,
                }),
              }),
              (0, a.jsxs)(j.default, {
                basis: 100,
                grow: 0,
                shrink: 0,
                align: j.default.Align.CENTER,
                justify: j.default.Justify.END,
                className: D.boostZIndex,
                children: [
                  (0, a.jsx)(c.Text, {
                    className: D.countdown,
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(E.default, {
                      deadline: e.getExpiresAt(),
                      showDays: !1,
                    }),
                  }),
                  (0, a.jsx)(f.default, {
                    className: D.revokeInvite,
                    onClick: this.handleRevokeInvite,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleRevokeInvite = () => {
              let { onRevoke: e, invite: t } = this.props;
              null != e && e(t);
            });
        }
      }
      class b extends n.PureComponent {
        componentDidMount() {
          let { channelId: e } = this.props;
          u.default
            .get({
              url: _.Endpoints.INSTANT_INVITES(e),
              retries: 3,
              oldFormErrors: !0,
            })
            .then(e => {
              let t = e.body.map(
                e =>
                  new N.default({
                    ...e,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: e.created_at,
                  })
              );
              this.setState({ loading: !1, invites: t });
            }),
            S.default.track(_.AnalyticEvents.OPEN_MODAL, {
              ...(0, x.collectChannelAnalyticsMetadata)(
                g.default.getChannel(e)
              ),
              type: "Group DM Invites",
              source: "Group DM Menu",
            });
        }
        renderContent() {
          let { loading: e, invites: t } = this.state;
          return e || null == t
            ? (0, a.jsx)(c.Spinner, {
                className: y.marginTop20,
                type: c.Spinner.Type.SPINNING_CIRCLE,
              })
            : d.isEmpty(t)
              ? this.renderEmpty()
              : (0, a.jsxs)("div", {
                  className: D.container,
                  children: [this.renderHeader(), this.renderInvites()],
                });
        }
        renderEmpty() {
          return (0, a.jsxs)(C.default, {
            theme: this.props.theme,
            children: [
              (0, a.jsx)(C.EmptyStateImage, {
                darkSrc: s("553021"),
                lightSrc: s("752499"),
                width: 256,
                height: 130,
                style: { marginBottom: 0 },
              }),
              (0, a.jsx)(C.EmptyStateText, {
                className: y.marginTop20,
                children: A.default.Messages.NO_INVITES_CAPTION,
              }),
            ],
          });
        }
        renderHeader() {
          return (0, a.jsxs)(j.default, {
            children: [
              (0, a.jsx)(j.default.Child, {
                wrap: !0,
                children: (0, a.jsx)(c.FormTitle, {
                  children: A.default.Messages.INSTANT_INVITE_INVITER,
                }),
              }),
              (0, a.jsx)(j.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                basis: 100,
                children: (0, a.jsx)(c.FormTitle, {
                  children: A.default.Messages.INSTANT_INVITE_INVITE_CODE,
                }),
              }),
              (0, a.jsx)(j.default.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                basis: 100,
                children: (0, a.jsx)(c.FormTitle, {
                  className: D.alignRight,
                  children: A.default.Messages.INSTANT_INVITE_EXPIRES,
                }),
              }),
            ],
          });
        }
        renderInvites() {
          let { hideDiscriminators: e, hideInviteCodes: t } = this.props;
          return d(this.state.invites)
            .sortBy(e => {
              var t;
              return (
                null !== (t = e.inviter.username) && void 0 !== t ? t : ""
              ).toLocaleLowerCase();
            })
            .map(s =>
              (0, a.jsx)(
                R,
                {
                  invite: s,
                  hideDiscriminator: e,
                  hideInviteCode: t,
                  onRevoke: this.handleRevoke,
                },
                s.code
              )
            )
            .value();
        }
        render() {
          return (0, a.jsxs)(c.ModalRoot, {
            transitionState: this.props.transitionState,
            "aria-label": A.default.Messages.INVITES,
            size: c.ModalSize.MEDIUM,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                direction: j.default.Direction.VERTICAL,
                align: j.default.Align.START,
                separator: !1,
                children: [
                  (0, a.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H1,
                    children: A.default.Messages.INVITES,
                  }),
                  (0, a.jsx)(c.FormText, {
                    type: c.FormTextTypes.DESCRIPTION,
                    children:
                      A.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE,
                  }),
                ],
              }),
              (0, a.jsx)(c.ModalContent, { children: this.renderContent() }),
              (0, a.jsx)(c.ModalFooter, {
                children: (0, a.jsx)(c.Button, {
                  onClick: this.handleClose,
                  children: A.default.Messages.DONE,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { loading: !0, invites: null }),
            (this.handleRevoke = e => {
              h.default.revokeInvite(e),
                this.setState({
                  invites: this.state.invites.filter(t => t !== e),
                });
            }),
            (this.handleClose = () => {
              let { onClose: e } = this.props;
              null == e || e();
            });
        }
      }
      var k = o.default.connectStores([v.default, T.default], () => ({
        hideDiscriminators: v.default.hidePersonalInformation,
        hideInviteCodes: v.default.hideInstantInvites,
        theme: T.default.theme,
      }))(b);
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
        n = s("884691"),
        r = s("917351"),
        i = s.n(r),
        l = s("888400"),
        d = s("782340");
      let o = () => [
        d.default.Messages.COUNTDOWN_UNITS_SECONDS,
        d.default.Messages.COUNTDOWN_UNITS_MINUTES,
        d.default.Messages.COUNTDOWN_UNITS_HOURS,
        d.default.Messages.COUNTDOWN_UNITS_DAYS,
      ];
      class u extends n.PureComponent {
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
          let { showDays: t, showUnits: s, className: n } = this.props,
            r = [e.days, e.hours, e.minutes, e.seconds],
            l = o();
          if (0 === e.days) r.shift();
          else if (!t) {
            let e = r.shift();
            r[0] += 24 * e;
          }
          let d = i(r)
            .map(e => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
              t > 0 && !s ? ":" : " ",
              (0, a.jsxs)(
                "span",
                { children: [e, s ? l[r.length - t - 1] : null] },
                t
              ),
            ])
            .flatten()
            .value();
          return (0, a.jsx)("span", { className: n, children: d });
        }
        render() {
          let {
            deadline: e,
            children: t,
            className: s,
            stopAtOneSec: n,
          } = this.props;
          if (e === 1 / 0)
            return (0, a.jsx)("span", {
              className: s,
              "aria-label": d.default.Messages.MAX_AGE_NEVER,
              children: "∞",
            });
          let r = (0, l.diffAsUnits)(Date.now(), e, n);
          return null != t
            ? t(r, this.defaultRender.bind(this, r))
            : this.defaultRender(r);
        }
      }
      u.defaultProps = {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      };
      var c = u;
    },
    941886: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          EmptyStateImage: function () {
            return T;
          },
          EmptyStateText: function () {
            return N;
          },
          default: function () {
            return n;
          },
        });
      var a,
        n,
        r = s("37983"),
        i = s("884691"),
        l = s("414456"),
        d = s.n(l),
        o = s("819855"),
        u = s("77078"),
        c = s("145131"),
        h = s("49111"),
        f = s("177914"),
        m = s("890957");
      let { Provider: p, Consumer: x } = i.createContext(h.ThemeTypes.DARK);
      class T extends i.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: t,
            width: s,
            height: a,
            offsetX: n,
            offsetY: i,
            style: l,
          } = this.props;
          return (0, r.jsx)(x, {
            children: u =>
              (0, r.jsx)(c.default.Child, {
                grow: 0,
                className: d(f.image, m.marginBottom40),
                style: {
                  ...l,
                  width: s,
                  height: a,
                  marginLeft: n,
                  marginTop: i,
                  backgroundImage: "url(".concat(
                    (0, o.isThemeDark)(u) ? t : e,
                    ")"
                  ),
                },
              }),
          });
        }
      }
      let N = e => {
        let {
          children: t,
          className: s,
          noteClassName: a,
          note: n,
          style: i,
        } = e;
        return (0, r.jsxs)(c.default.Child, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          style: i,
          children: [
            null != t &&
              (0, r.jsx)(u.H, { className: d(s, f.title), children: t }),
            null != n
              ? (0, r.jsx)("div", {
                  className: d(a, f.text, m.marginTop8),
                  children: n,
                })
              : null,
          ],
        });
      };
      ((a = class extends i.PureComponent {
        render() {
          let { children: e, theme: t, className: s, style: a } = this.props;
          return (0, r.jsx)(p, {
            value: t,
            children: (0, r.jsx)(c.default, {
              direction: c.default.Direction.VERTICAL,
              align: c.default.Align.CENTER,
              justify: c.default.Justify.CENTER,
              className: d(f.wrapper, s),
              style: a,
              children: e,
            }),
          });
        }
      }).Text = N),
        (a.Image = T),
        (n = a);
    },
  },
]);
//# sourceMappingURL=36572ad38511ce9889eb.js.map
