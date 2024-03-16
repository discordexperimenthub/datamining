(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90156"],
  {
    64847: function (e, t, l) {
      "use strict";
      e.exports = l.p + "c038718481fa8dc048db.svg";
    },
    587864: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("53531");
      l.es(s, t);
    },
    619335: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return j;
          },
        });
      var s = l("274870"),
        n = l("116320"),
        a = l("617559"),
        r = l("213523"),
        i = l("593195"),
        u = l("361777"),
        o = l("497757"),
        c = l("774223"),
        d = l("991497"),
        f = l("393621"),
        C = l("905999"),
        h = l("660074"),
        N = l("990745"),
        p = l("190986"),
        L = l("721618"),
        T = l("733160"),
        I = l("990864"),
        v = l("274652"),
        m = l("922744"),
        E = l("155207"),
        H = l("745183"),
        x = l("368121"),
        A = l("944633"),
        M = l("228427"),
        R = l("959097"),
        D = l("656038"),
        _ = l("49111");
      function j(e, t) {
        switch (e.type) {
          case _.ChannelTypes.DM:
            return n.default;
          case _.ChannelTypes.GROUP_DM:
            let l = (0, s.getIsBroadcastingGDM)(e.id);
            return l ? c.default : E.default;
          case _.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return v.default;
            if ((0, D.default)(e)) return I.default;
            else return T.default;
          case _.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return r.default;
            if (e.isNSFW()) return o.default;
            else if ((0, D.default)(e)) return u.default;
            else return i.default;
          case _.ChannelTypes.GUILD_FORUM:
            let j = e.isMediaChannel();
            if (e.isNSFW()) return j ? L.default : C.default;
            if ((0, D.default)(e)) return j ? p.default : f.default;
            else return j ? N.default : d.default;
          case _.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return L.default;
            if ((0, D.default)(e)) return p.default;
            else return N.default;
          case _.ChannelTypes.GUILD_STAGE_VOICE:
            return M.default;
          case _.ChannelTypes.GUILD_VOICE:
            if ((0, D.default)(e)) return A.default;
            return x.default;
          case _.ChannelTypes.ANNOUNCEMENT_THREAD:
          case _.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return m.default;
            if (e.isForumPost()) return h.default;
            else return R.default;
          case _.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return m.default;
            return H.default;
          case _.ChannelTypes.GUILD_DIRECTORY:
            return a.default;
          default:
            return null;
        }
      }
    },
    369964: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("414456"),
        r = l.n(a),
        i = l("77078"),
        u = l("731898"),
        o = l("10641"),
        c = l("275623"),
        d = l("216422"),
        f = l("994428"),
        C = l("782340"),
        h = l("175787"),
        N = n.forwardRef(function (e, t) {
          let {
              body: l,
              header: a,
              artClassName: N,
              headerClassName: p,
              contentClassName: L,
              tryItText: T,
              dismissText: I,
              onTryFeature: v,
              onClose: m,
              className: E,
              inlineArt: H = !1,
              isPremiumFeature: x = !1,
              shouldUseHorizontalButtons: A = !1,
              showGIFTag: M = !1,
              dismissibleContent: R,
              position: D = "top",
              align: _ = "center",
              art: j,
              isPremiumEarlyAccess: y = !1,
              maxWidth: g = 280,
            } = e,
            w = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX,
            [B, V] = n.useState(!1),
            { ref: S, width: U } = (0, u.default)();
          function k(e) {
            (0, o.markDismissibleContentAsDismissed)(R, { dismissAction: e });
          }
          return (
            n.useEffect(() => {
              var e, t;
              let l =
                (null !==
                  (t =
                    null === (e = S.current) || void 0 === e
                      ? void 0
                      : e.scrollWidth) && void 0 !== t
                  ? t
                  : 0) + 64;
              !B && l > g && V(!0);
            }, [B, U, S, g]),
            n.useEffect(() => {
              (0, o.requestMarkDismissibleContentAsShown)(R);
            }, [R]),
            (0, s.jsx)("div", {
              className: E,
              ref: t,
              children: (0, s.jsxs)("div", {
                className: r(h.content, L, {
                  [h.contentNoArt]: null == N || H,
                  [h.contentPremium]: x || y,
                }),
                children: [
                  (0, s.jsxs)("div", {
                    className: r(N, H ? h.artInline : h.artAbsolute),
                    children: [
                      M && (0, s.jsx)(c.default, { className: h.gifTag }),
                      j,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: h.body,
                    children: [
                      (0, s.jsxs)(i.Heading, {
                        className: r(x ? h.headerWithPremiumIcon : h.header, p),
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: [
                          x && !y
                            ? (0, s.jsx)(d.default, {
                                className: h.premiumIcon,
                              })
                            : null,
                          y
                            ? (0, s.jsxs)(i.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: h.earlyAccessBadgeContainer,
                                children: [
                                  (0, s.jsx)(d.default, {
                                    className: h.earlyAccessIcon,
                                  }),
                                  (0, s.jsx)("span", {
                                    className: h.earlyAccessText,
                                    children:
                                      C.default.Messages
                                        .REMIXING_TOOLTIP_NITRO_EARLY_ACCESS,
                                  }),
                                ],
                              })
                            : null,
                          a,
                        ],
                      }),
                      null == l
                        ? null
                        : "string" == typeof l
                          ? (0, s.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              color: "always-white",
                              children: l,
                            })
                          : l,
                    ],
                  }),
                  (0, s.jsx)("div", {
                    ref: S,
                    className:
                      B || !A
                        ? h.buttonContainerVertical
                        : h.buttonContainerHorizontal,
                    children:
                      null != v
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(i.Button, {
                                className: h.button,
                                size: w,
                                onClick: e => {
                                  null == m || m(e),
                                    v(e),
                                    k(f.ContentDismissActionType.PRIMARY);
                                },
                                color:
                                  x || y
                                    ? i.Button.Colors.BRAND
                                    : i.Button.Colors.WHITE,
                                look:
                                  x || y
                                    ? i.Button.Looks.INVERTED
                                    : i.Button.Looks.FILLED,
                                children:
                                  null != T
                                    ? T
                                    : C.default.Messages
                                        .EDUCATION_NEW_FEATURE_TRY_IT,
                              }),
                              (0, s.jsx)(i.Button, {
                                className: h.button,
                                size: w,
                                onClick: e => {
                                  null == m || m(e),
                                    k(f.ContentDismissActionType.DISMISS);
                                },
                                color:
                                  x || y
                                    ? i.Button.Colors.WHITE
                                    : i.Button.Colors.BRAND,
                                look:
                                  x || y
                                    ? i.Button.Looks.LINK
                                    : i.Button.Looks.FILLED,
                                children:
                                  null != I
                                    ? I
                                    : C.default.Messages
                                        .EDUCATION_NEW_FEATURE_DISMISS,
                              }),
                            ],
                          })
                        : (0, s.jsx)(i.Button, {
                            className: h.button,
                            size: i.Button.Sizes.MAX,
                            onClick: e => {
                              null == m || m(e),
                                k(f.ContentDismissActionType.PRIMARY);
                            },
                            color: i.Button.Colors.WHITE,
                            children:
                              C.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM,
                          }),
                  }),
                  (0, s.jsx)("div", {
                    className: r(h.pointer, {
                      [h.bottomPointer]: "top" === D,
                      [h.centerLeftPointer]: "right" === D && "center" === _,
                      [h.topLeftPointer]: "right" === D && "top" === _,
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    922744: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("469563"),
        a = l("782926"),
        r = l("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          a.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("469563"),
        a = l("587864"),
        r = l("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, s.jsx)("path", {
                  className: a,
                  fill: n,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          a.ThreadLockIcon,
          void 0,
          { size: 24 }
        );
    },
    53531: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ThreadLockIcon: function () {
            return r;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("669491"),
        a = l("82169");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof r ? r : r.css,
              className: i,
            }),
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof r ? r : r.css,
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=4358f792fcc9485203b0.js.map
