(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68679"],
  {
    16873: function (e, t, n) {
      "use strict";
      e.exports = n.p + "86c8b17e10af5906ce4b.svg";
    },
    56676: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("808653");
      var l = n("446674"),
        s = n("913144");
      let r = {},
        a = null,
        u = null;
      function i(e, t) {
        null == t ? e in r && delete r[e] : null != e && (r[e] = t);
      }
      function o(e) {
        let { user: t } = e;
        u = t.id;
      }
      class c extends l.default.PersistedStore {
        initialize(e) {
          null != e && (r = e);
        }
        requiredActions(e) {
          var t;
          return null !== (t = r[e]) && void 0 !== t ? t : null;
        }
        requiredActionsIncludes(e, t) {
          let n = this.requiredActions(e);
          return null != n && t.reduce((e, t) => e || n.includes(t), !1);
        }
        wasLoginAttemptedInSession(e) {
          return a === e;
        }
        getState() {
          return r;
        }
      }
      (c.displayName = "LoginRequiredActionStore"),
        (c.persistKey = "LoginRequiredActionStore");
      var d = new c(s.default, {
        LOGIN_ATTEMPTED: function (e) {
          let { required_actions: t, user_id: n } = e;
          i((a = n), t);
        },
        CONNECTION_OPEN: o,
        CURRENT_USER_UPDATE: o,
        LOGOUT: function (e) {
          let { isSwitchingAccount: t } = e;
          !t && null != u && i(u, null);
        },
        PASSWORD_UPDATED: function (e) {
          let { userId: t } = e;
          i(t, null);
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          let { userId: t } = e;
          i(t, null);
        },
      });
    },
    466857: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var l = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        u = n("77078"),
        i = n("381546"),
        o = n("229915"),
        c = n("782340"),
        d = n("717386");
      class f extends s.Component {
        render() {
          let {
              autoFocus: e,
              label: t,
              placeholder: n,
              searchTerm: s,
              inputClassName: r,
              className: f,
              onChange: p,
              onFocus: h,
              onBlur: x,
              onKeyPress: R,
              autoComplete: C,
              forwardedRef: _,
              closeIconClassName: m,
              searchIconClassName: N,
              cta: A,
            } = this.props,
            T = null != s && s.length > 0,
            g = null != _ ? _ : this._textInputRef;
          return (0, l.jsx)(u.FocusRing, {
            focusTarget: g,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)("div", {
              className: a(d.searchBox, f),
              ref: this._containerRef,
              children: [
                (0, l.jsx)(u.TextInput, {
                  inputRef: g,
                  focusProps: { enabled: !1 },
                  name: "search",
                  maxLength: 100,
                  className: d.searchBoxInputWrapper,
                  inputClassName: a(d.searchBoxInput, r),
                  onChange: p,
                  onFocus: h,
                  onBlur: x,
                  onKeyPress: R,
                  value: T ? s : "",
                  placeholder: n,
                  autoFocus: e,
                  "aria-label": t,
                  autoComplete: C ? "on" : "off",
                }),
                null != A
                  ? (0, l.jsx)(u.Text, {
                      color: "text-muted",
                      variant: "text-xs/normal",
                      className: d.cta,
                      children: A,
                    })
                  : null,
                T
                  ? (0, l.jsx)(u.Clickable, {
                      onClick: this.handleClear,
                      className: d.clear,
                      "aria-label": c.default.Messages.SEARCH_CLEAR,
                      children: (0, l.jsx)(i.default, {
                        className: a(d.clearIcon, m),
                      }),
                    })
                  : (0, l.jsx)(o.default, {
                      className: a(d.searchIcon, N),
                      "aria-label": c.default.Messages.SEARCH,
                    }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._textInputRef = s.createRef()),
            (this._containerRef = s.createRef()),
            (this.handleClear = () => {
              let { onClear: e, forwardedRef: t } = this.props,
                { current: n } = null != t ? t : this._textInputRef;
              null != n && n.focus(), null != e && e();
            });
        }
      }
      f.defaultProps = { autoComplete: !1 };
      var p = s.forwardRef((e, t) => (0, l.jsx)(f, { forwardedRef: t, ...e }));
    },
  },
]);
//# sourceMappingURL=bf0e3a21716fde20b7bb.js.map
