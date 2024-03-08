(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72579"],
  {
    959305: function (e, a, s) {
      "use strict";
      e.exports = s.p + "263404a6b744758eaeb6.svg";
    },
    927960: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return C;
          },
        });
      var t = s("37983"),
        n = s("884691"),
        c = s("77078"),
        r = s("476765"),
        l = s("599110"),
        i = s("49111"),
        o = s("782340"),
        d = s("136080"),
        u = s("959305");
      function C(e) {
        let { source: a, onClose: s, transitionState: C } = e;
        n.useEffect(() => {
          l.default.track(i.AnalyticEvents.OPEN_MODAL, {
            type: i.AnalyticsSections.CONTACT_SYNC_NC_MODAL,
            source: { location: a },
          });
        }, [a]);
        let N = (0, r.useUID)();
        return (0, t.jsxs)(c.ModalRoot, {
          className: d.contactSync,
          transitionState: C,
          "aria-labelledby": N,
          children: [
            (0, t.jsx)(c.ModalCloseButton, {
              onClick: s,
              className: d.modalCloseButton,
            }),
            (0, t.jsxs)("div", {
              className: d.inner,
              children: [
                (0, t.jsx)(c.Heading, {
                  variant: "heading-xl/extrabold",
                  color: "header-primary",
                  className: d.header,
                  children:
                    o.default.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_TITLE,
                }),
                (0, t.jsx)(c.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    o.default.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_BODY,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: d.container,
              children: (0, t.jsx)("img", { alt: "", src: u }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=104697dda5ca45c2ade3.js.map
