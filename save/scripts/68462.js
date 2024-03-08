(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68462"],
  {
    527826: function (e, s, t) {
      "use strict";
      e.exports = t.p + "adf75861421c2a6a6269.png";
    },
    668170: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return g;
          },
        }),
        t("222007");
      var r = t("37983"),
        o = t("884691"),
        a = t("414456"),
        l = t.n(a),
        n = t("627445"),
        i = t.n(n),
        d = t("77078"),
        c = t("671278"),
        u = t("266926"),
        C = t("489622"),
        _ = t("599110"),
        f = t("648750"),
        E = t("775032"),
        m = t("25132"),
        R = t("922832"),
        h = t("49111"),
        N = t("782340"),
        O = t("954285"),
        x = t("890957"),
        g = e => {
          let { transitionState: s, onClose: t } = e,
            a = (0, E.default)(),
            [n, g] = o.useState(!1),
            { getLinkCode: M, isGetLinkCodeLoading: p } = (0,
            f.useFamilyCenterActions)({}),
            I = (0, m.useUserQRLinkUrl)(),
            A = (0, m.usePendingRequestCount)(),
            v = o.useRef(A);
          i(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
          let T = () => {
            g(
              e => (
                _.default.track(h.AnalyticEvents.FAMILY_CENTER_ACTION, {
                  action: n
                    ? R.FamilyCenterAction.HideQRCode
                    : R.FamilyCenterAction.RevealQRCode,
                }),
                !e
              )
            ),
              !n &&
                setTimeout(() => {
                  t();
                }, R.QR_CODE_AUTO_HIDE_TIMEOUT);
          };
          o.useEffect(() => {
            M();
          }, []),
            o.useEffect(() => {
              A > v.current && t();
            }, [v, A, t]);
          let j = n && !p && null != I;
          return (0, r.jsxs)(d.ModalRoot, {
            className: O.modalRoot,
            transitionState: s,
            children: [
              (0, r.jsxs)(C.default, {
                className: O.notice,
                color: C.NoticeColors.WARNING,
                children: [
                  (0, r.jsx)(u.default, {
                    className: O.infoIcon,
                    width: 18,
                    height: 18,
                  }),
                  N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE,
                ],
              }),
              (0, r.jsxs)(d.ModalContent, {
                className: O.content,
                children: [
                  (0, r.jsx)(d.Text, {
                    className: x.marginBottom8,
                    variant: "text-lg/bold",
                    color: "header-primary",
                    children:
                      N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER,
                  }),
                  (0, r.jsx)(d.Text, {
                    className: x.marginBottom20,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format(
                        {
                          link: "https://support.discord.com/hc/articles/14155060633623",
                        }
                      ),
                  }),
                  (0, r.jsx)("div", {
                    className: O.qrCode,
                    children: (0, r.jsx)(d.Clickable, {
                      className: l(O.qrCodeObscure, { [O.visible]: j }),
                      onClick: T,
                      children: (0, r.jsx)(c.QRCodeWithOverlay, {
                        size: 272,
                        text: j ? I : R.PLACEHOLDER_QR_CODE_URL,
                        overlaySize: c.QRCodeOverlaySizes.SIZE_60,
                      }),
                    }),
                  }),
                  (0, r.jsx)(d.Text, {
                    className: O.reminder,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children:
                      N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER,
                  }),
                  (0, r.jsxs)("div", {
                    className: l(O.buttonContainer, x.marginTop20),
                    children: [
                      (0, r.jsx)(d.Button, {
                        className: x.marginBottom8,
                        grow: !0,
                        size: d.Button.Sizes.LARGE,
                        onClick: T,
                        submitting: n && p,
                        children: n
                          ? N.default.Messages
                              .FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE
                          : N.default.Messages
                              .FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW,
                      }),
                      (0, r.jsx)(d.Button, {
                        grow: !0,
                        color: d.Button.Colors.PRIMARY,
                        onClick: t,
                        children: N.default.Messages.CLOSE,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    671278: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          QRCodeOverlaySizes: function () {
            return o;
          },
          QRCodeWithOverlay: function () {
            return C;
          },
          default: function () {
            return _;
          },
        });
      var r,
        o,
        a = t("37983"),
        l = t("884691"),
        n = t("82697"),
        i = t("679001");
      ((r = o || (o = {})).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60");
      let d = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        c = t("527826");
      class u extends l.PureComponent {
        render() {
          let { className: e, text: s, ...t } = this.props;
          return (0, a.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: t.size,
              height: t.size,
              backgroundColor: t.bgColor,
            },
            className: e,
            children: (0, a.jsx)(n.default, { value: s, level: "M", ...t }),
          });
        }
      }
      u.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class C extends l.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            s = d[null != e ? e : "SIZE_40"];
          return (0, a.jsxs)("div", {
            className: i.qrCodeContainer,
            children: [
              (0, a.jsx)(u, { ...this.props }),
              (0, a.jsx)("div", {
                className: i.qrCodeOverlay,
                children: (0, a.jsx)("img", {
                  className: i[s],
                  src: c,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      C.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var _ = u;
    },
  },
]);
//# sourceMappingURL=d203565d96a9dd6557ba.js.map
