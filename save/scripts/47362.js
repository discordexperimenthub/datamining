(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47362"],
  {
    658628: function (e, s, t) {
      "use strict";
      e.exports = t.p + "d155473efedb303a658c.svg";
    },
    924622: function (e, s, t) {
      "use strict";
      e.exports = t.p + "85656bb13a0de5732d14.svg";
    },
    476141: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return E;
          },
        }),
        t("222007");
      var a = t("37983");
      t("884691");
      var r = t("77078"),
        l = t("162426"),
        i = t("191814"),
        d = t("197509"),
        n = t("782340"),
        o = t("287606"),
        T = t("658628"),
        c = t("924622");
      function _(e) {
        let { header: s, body: t } = e;
        return (0, a.jsxs)("div", {
          className: o.bulletItem,
          children: [
            (0, a.jsx)("img", { alt: "", className: o.bulletImage, src: T }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/semibold",
                  color: "text-normal",
                  children: s,
                }),
                (0, a.jsx)(i.default, { size: 4 }),
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t,
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { guildId: s, demonetized: t, transitionState: T, onClose: E } = e,
          [u, { loading: x, error: C }] = (0, l.default)(
            t ? d.acceptNewTermsDemonetized : d.acceptNewTerms
          ),
          N = async () => {
            try {
              let e = await u(s);
              null != e && (null == E || E());
            } catch (e) {}
          };
        return (0, a.jsxs)(r.ModalRoot, {
          className: o.container,
          size: r.ModalSize.SMALL,
          transitionState: T,
          "aria-label":
            n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
          children: [
            (0, a.jsx)(r.ModalHeader, {
              separator: !1,
              className: o.header,
              children: (0, a.jsx)("div", {
                className: o.imageContainer,
                children: (0, a.jsx)("img", {
                  alt: "",
                  className: o.image,
                  src: c,
                }),
              }),
            }),
            (0, a.jsx)(r.ModalContent, {
              children: (0, a.jsxs)("div", {
                className: o.content,
                children: [
                  (0, a.jsx)(r.Heading, {
                    variant: "heading-xl/medium",
                    color: "header-primary",
                    children:
                      n.default.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
                  }),
                  (0, a.jsx)(i.default, { size: 12 }),
                  (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY.format(
                        {
                          termsURL:
                            "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                        }
                      ),
                  }),
                  (0, a.jsx)(i.default, { size: 24 }),
                  (0, a.jsx)(_, {
                    header:
                      n.default.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_HEADER,
                    body: n.default.Messages
                      .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_BODY,
                  }),
                  (0, a.jsx)(i.default, { size: 16 }),
                  (0, a.jsx)(_, {
                    header:
                      n.default.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_HEADER,
                    body: n.default.Messages
                      .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_BODY,
                  }),
                ],
              }),
            }),
            (0, a.jsx)(r.ModalFooter, {
              children: (0, a.jsxs)("div", {
                className: o.footer,
                children: [
                  (0, a.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: N,
                    submitting: x,
                    children:
                      n.default.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_CTA,
                  }),
                  (0, a.jsx)(i.default, { size: 4 }),
                  (0, a.jsx)(r.Button, {
                    color: r.Button.Colors.CUSTOM,
                    innerClassName: o.remindMeLater,
                    look: r.Button.Looks.LINK,
                    fullWidth: !0,
                    onClick: E,
                    children:
                      n.default.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_REMIND_ME_LATER,
                  }),
                  null == C
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(i.default, { size: 8 }),
                          (0, a.jsxs)(r.Text, {
                            variant: "text-xs/normal",
                            color: "status-danger",
                            children: ["Error: ", C.message],
                          }),
                        ],
                      }),
                  (0, a.jsx)(i.default, { size: 10 }),
                  (0, a.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_DISCLAIMER.format(
                        {
                          termsURL:
                            "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                        }
                      ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=ae2595482d7e16dac490.js.map
