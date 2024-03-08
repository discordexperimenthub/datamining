(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66711"],
  {
    264044: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("414456"),
        i = t.n(l),
        s = t("819855"),
        o = t("77078"),
        r = t("841098"),
        c = t("376556"),
        u = t("572943"),
        d = t("926994"),
        p = t("599110"),
        m = t("49111"),
        N = t("721687"),
        f = e => {
          let {
              disabled: n = !1,
              type: t,
              className: l,
              innerClassName: f,
              onConnect: h,
            } = e,
            x = (0, r.default)(),
            C = c.default.get((0, u.useLegacyPlatformType)(t));
          return (0, a.jsx)(o.Tooltip, {
            text: C.name,
            children: e => {
              let { onMouseEnter: r, onMouseLeave: u } = e;
              return (0, a.jsx)("div", {
                className: i(N.wrapper, l),
                children: (0, a.jsx)(o.FocusRing, {
                  children: (0, a.jsx)("button", {
                    onMouseEnter: r,
                    onMouseLeave: u,
                    className: i(N.inner, f),
                    type: "button",
                    disabled: n,
                    style: {
                      backgroundImage: "url('".concat(
                        (0, s.isThemeDark)(x)
                          ? C.icon.darkSVG
                          : C.icon.lightSVG,
                        "')"
                      ),
                    },
                    onClick:
                      null != h
                        ? h
                        : () =>
                            (function (e) {
                              let n = c.default.get(e);
                              (0, d.default)(n.type, "Friends List"),
                                p.default.track(
                                  m.AnalyticEvents.ACCOUNT_LINK_STEP,
                                  {
                                    previous_step: "desktop connections",
                                    current_step: "desktop oauth",
                                    platform_type: n.type,
                                  }
                                );
                            })(t),
                    "aria-label": C.name,
                  }),
                }),
              });
            },
          });
        };
    },
    121942: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("414456"),
        i = t.n(l),
        s = t("627445"),
        o = t.n(s),
        r = t("77078"),
        c = t("308289"),
        u = t("264044"),
        d = t("572943"),
        p = t("782340"),
        m = t("193851");
      function N(e) {
        let { onComplete: n, excludedPlatformTypes: t } = e,
          l = (0, d.usePlatforms)();
        return (0, a.jsx)("div", {
          className: m.connectionsContainer,
          children: l
            .filter(e => !(null == t ? void 0 : t.has(e.type)))
            .map(e =>
              (0, a.jsx)(
                u.default,
                {
                  type: e.type,
                  className: m.accountBtn,
                  innerClassName: m.accountBtnInner,
                  onConnect: () => n(e.type),
                },
                e.type
              )
            ),
        });
      }
      function f(e) {
        let { integrations: n, onCompleteApplication: t } = e;
        if (null == n || null == t) return null;
        let l = n.filter(e => {
          var n;
          return (
            (null === (n = e.application) || void 0 === n
              ? void 0
              : n.roleConnectionsVerificationUrl) != null
          );
        });
        return 0 === l.length
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  className: m.applicationsHeader,
                  children: p.default.Messages.APPS,
                }),
                (0, a.jsx)("div", {
                  className: m.applicationsContainer,
                  children: l.map(e => {
                    let n = e.application;
                    o(null != n, "application is null");
                    let l = null == n ? void 0 : n.bot;
                    return (
                      o(null != l, "bot is null"),
                      (0, a.jsxs)(
                        r.Clickable,
                        {
                          onClick: () => t(n.id),
                          className: m.application,
                          children: [
                            (0, a.jsx)(c.default, {
                              user: l,
                              className: m.applicationIcon,
                            }),
                            (0, a.jsxs)("div", {
                              className: m.applicationNameContainer,
                              children: [
                                (0, a.jsx)(r.Heading, {
                                  variant: "heading-sm/semibold",
                                  className: m.applicationNameText,
                                  children: n.name,
                                }),
                                null != n.description &&
                                n.description.length > 0
                                  ? (0, a.jsx)(r.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      className: m.applicationNameText,
                                      children: n.description,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        },
                        e.id
                      )
                    );
                  }),
                }),
              ],
            });
      }
      function h(e) {
        let {
          transitionState: n,
          onComplete: t,
          onClose: l,
          excludedPlatformTypes: s,
          integrations: o,
          onCompleteApplication: c,
        } = e;
        return (0, a.jsx)(r.ModalRoot, {
          "aria-label": p.default.Messages.CONNECTIONS_ADD_CONNECTIONS,
          size: r.ModalSize.SMALL,
          transitionState: n,
          className: i(m.container),
          fullscreenOnMobile: !1,
          children: (0, a.jsxs)(r.ModalContent, {
            children: [
              (0, a.jsxs)("div", {
                className: m.header,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: m.title,
                    variant: "heading-md/bold",
                    children: p.default.Messages.CONNECTIONS_ADD_CONNECTIONS,
                  }),
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: l,
                  }),
                ],
              }),
              (0, a.jsx)(N, {
                onComplete: function (e) {
                  t(e), l();
                },
                excludedPlatformTypes: s,
              }),
              (0, a.jsx)(f, {
                integrations: o,
                onCompleteApplication:
                  null != c
                    ? function (e) {
                        null == c || c(e), l();
                      }
                    : void 0,
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7679a15b991e122f2a9f.js.map
