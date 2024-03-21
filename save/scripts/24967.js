(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24967"],
  {
    527826: function (e, s, t) {
      "use strict";
      e.exports = t.p + "adf75861421c2a6a6269.png";
    },
    176488: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return f;
          },
        });
      var a = t("872717"),
        r = t("679653"),
        l = t("305961"),
        n = t("42887"),
        d = t("27618"),
        i = t("697218"),
        o = t("171644"),
        c = t("49111"),
        u = t("782340");
      function f(e, s) {
        var t;
        let { nonce: f, forQRCode: m } = s,
          x = e.getGuildId(),
          h = l.default.getGuild(x),
          N = (0, o.XBOX_HANDOFF_SEARCH_PARAMS)({
            guildId: null != x ? x : c.ZERO_STRING_GUILD_ID,
            channelId: e.id,
            channelName: (0, r.computeChannelName)(e, i.default, d.default),
            guildName:
              null !== (t = null == h ? void 0 : h.name) && void 0 !== t
                ? t
                : u.default.Messages.UNNAMED,
            muted: n.default.isSelfMute(),
            deafened: n.default.isSelfDeaf(),
            nonce: f,
          });
        return m
          ? ""
              .concat((0, a.getAPIBaseURL)())
              .concat(c.Endpoints.XBOX_HANDOFF, "?")
              .concat(N.toString())
          : "".concat(o.XBOX_URL_BASE, "?").concat(N.toString());
      }
    },
    613895: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return p;
          },
        });
      var a = t("37983"),
        r = t("884691"),
        l = t("446674"),
        n = t("77078"),
        d = t("671278"),
        i = t("420145"),
        o = t("701909"),
        c = t("76393"),
        u = t("176488"),
        f = t("780338"),
        m = t("171644"),
        x = t("49111"),
        h = t("782340"),
        N = t("38171");
      function _(e) {
        let { step: s, instructions: t } = e;
        return (0, a.jsxs)("div", {
          className: N.cardRow,
          children: [
            (0, a.jsx)("div", {
              className: N.stepNumberContainer,
              children: (0, a.jsx)(n.Text, {
                variant: "text-sm/semibold",
                className: N.stepNumber,
                children: s,
              }),
            }),
            (0, a.jsx)(n.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              className: N.instructions,
              children: t,
            }),
          ],
        });
      }
      function p(e) {
        let { channel: s, transitionState: t, onClose: p } = e,
          g = (0, l.useStateFromStores)(
            [c.default],
            () => null != c.default.getRemoteSessionId()
          ),
          C = (0, u.default)(s, { forQRCode: !0 });
        return (
          r.useEffect(() => {
            g && p();
          }, [g, p]),
          r.useEffect(() => {
            (0, f.default)(s.id, m.GameConsoleTypes.XBOX);
          }, [s.id]),
          (0, a.jsxs)(n.ModalRoot, {
            size: n.ModalSize.DYNAMIC,
            className: N.modalRoot,
            transitionState: t,
            children: [
              (0, a.jsxs)(n.ModalHeader, {
                separator: !1,
                className: N.modalHeaderContainer,
                children: [
                  (0, a.jsx)(n.Heading, {
                    className: N.modalHeader,
                    variant: "heading-xl/extrabold",
                    children: h.default.Messages.TRANSFER_VOICE_TO_XBOX,
                  }),
                  (0, a.jsx)(n.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: h.default.Messages.XBOX_APP_REQUIRED_SUBHEADER,
                  }),
                ],
              }),
              (0, a.jsx)(n.ModalContent, {
                className: N.content,
                children: (0, a.jsxs)("div", {
                  className: N.card,
                  children: [
                    (0, a.jsxs)("div", {
                      className: N.cardText,
                      children: [
                        (0, a.jsxs)(n.Text, {
                          variant: "text-lg/semibold",
                          color: "header-primary",
                          className: N.cardRow,
                          children: [
                            (0, a.jsx)(i.default, {
                              className: N.cardHeaderIcon,
                            }),
                            h.default.Messages.XBOX_APP_FOR_MOBILE,
                          ],
                        }),
                        (0, a.jsx)(_, {
                          step: 1,
                          instructions: h.default.Messages.XBOX_APP_STEP_ONE,
                        }),
                        (0, a.jsx)(_, {
                          step: 2,
                          instructions: h.default.Messages.XBOX_APP_STEP_TWO,
                        }),
                        (0, a.jsx)(n.Text, {
                          variant: "text-sm/medium",
                          children: (0, a.jsx)(n.Anchor, {
                            className: N.learnMore,
                            href: o.default.getArticleURL(
                              x.HelpdeskArticles.XBOX_CONNECTION
                            ),
                            children: h.default.Messages.LEARN_MORE,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.default, {
                      className: N.qrCode,
                      size: 120,
                      text: C,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(n.ModalCloseButton, {
                className: N.closeButton,
                onClick: p,
              }),
            ],
          })
        );
      }
    },
    671278: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          QRCodeOverlaySizes: function () {
            return r;
          },
          QRCodeWithOverlay: function () {
            return f;
          },
          default: function () {
            return m;
          },
        });
      var a,
        r,
        l = t("37983"),
        n = t("884691"),
        d = t("82697"),
        i = t("679001");
      ((a = r || (r = {})).SIZE_40 = "SIZE_40"), (a.SIZE_60 = "SIZE_60");
      let o = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        c = t("527826");
      class u extends n.PureComponent {
        render() {
          let { className: e, text: s, ...t } = this.props;
          return (0, l.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: t.size,
              height: t.size,
              backgroundColor: t.bgColor,
            },
            className: e,
            children: (0, l.jsx)(d.default, { value: s, level: "M", ...t }),
          });
        }
      }
      u.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class f extends n.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            s = o[null != e ? e : "SIZE_40"];
          return (0, l.jsxs)("div", {
            className: i.qrCodeContainer,
            children: [
              (0, l.jsx)(u, { ...this.props }),
              (0, l.jsx)("div", {
                className: i.qrCodeOverlay,
                children: (0, l.jsx)("img", {
                  className: i[s],
                  src: c,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var m = u;
    },
  },
]);
//# sourceMappingURL=e2778b49f593f51d7972.js.map
