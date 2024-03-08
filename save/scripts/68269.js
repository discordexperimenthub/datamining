(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68269"],
  {
    783165: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return _;
          },
        }),
        a("222007");
      var t = a("37983");
      a("884691");
      var n = a("627445"),
        i = a.n(n),
        l = a("77078"),
        r = a("837008"),
        o = a("132349"),
        c = a("3081"),
        d = a("782340"),
        u = a("290718");
      function _(e) {
        let { onClose: s, guildId: a, transitionState: n } = e,
          _ = (0, r.useSubscriptionsSettings)(a);
        i(null != _, "subscriptionsSettings cannot be null");
        let m = _.cover_image_asset,
          [h] = (0, o.default)(null != m ? m : void 0);
        return (0, t.jsxs)(l.ModalRoot, {
          className: u.modal,
          size: l.ModalSize.MEDIUM,
          transitionState: n,
          "aria-label":
            d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
          children: [
            (0, t.jsx)("div", {
              ref: h,
              className: u.coverImageContainer,
              children:
                null != m && (0, t.jsx)(c.HeroImage, { coverImageAsset: m }),
            }),
            (0, t.jsx)(l.Heading, {
              variant: "text-lg/medium",
              color: "header-primary",
              className: u.header,
              children:
                d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER,
            }),
            (0, t.jsx)(l.ModalContent, {
              className: u.content,
              children: (0, t.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: u.description,
                children: _.description,
              }),
            }),
            (0, t.jsx)(l.ModalFooter, {
              className: u.footer,
              children: (0, t.jsx)(l.Button, {
                onClick: s,
                children:
                  d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=11e329d23ac7859b8d44.js.map
