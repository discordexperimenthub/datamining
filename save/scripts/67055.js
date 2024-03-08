(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67055"],
  {
    553415: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return m;
          },
        });
      var t = s("37983"),
        n = s("884691"),
        i = s("414456"),
        d = s.n(i),
        l = s("77078"),
        o = s("367376"),
        r = s("476765"),
        c = s("213523"),
        h = s("659500"),
        u = s("49111"),
        p = s("782340"),
        x = s("578098"),
        f = s("919163");
      function m(e) {
        let {
            channel: a,
            isFromComposer: s,
            transitionState: i,
            onClose: m,
          } = e,
          M = (0, r.useUID)();
        return (
          n.useEffect(
            () => () => {
              s &&
                h.ComponentDispatch.dispatch(
                  u.ComponentActions.FOCUS_COMPOSER_TITLE
                );
            },
            [s]
          ),
          (0, t.jsxs)(l.ModalRoot, {
            transitionState: i,
            "aria-labelledby": M,
            size: l.ModalSize.DYNAMIC,
            className: x.container,
            children: [
              (0, t.jsxs)(l.ModalHeader, {
                className: x.header,
                separator: !1,
                children: [
                  (0, t.jsx)(c.default, {
                    className: x.rulesIcon,
                    width: 24,
                    height: 24,
                  }),
                  (0, t.jsx)(l.Heading, {
                    variant: "heading-lg/extrabold",
                    children: p.default.Messages.FORUM_POST_GUIDELINES_TITLE,
                  }),
                ],
              }),
              (0, t.jsx)(l.ModalContent, {
                children: (0, t.jsx)(l.Text, {
                  className: d(x.content, f.markup),
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: (0, t.jsx)("div", {
                    children: o.default.parseForumPostGuidelines(a.topic, !0, {
                      channelId: a.id,
                      allowHeading: !0,
                      allowList: !0,
                    }),
                  }),
                }),
              }),
              (0, t.jsx)(l.ModalFooter, {
                children: (0, t.jsx)(l.Button, {
                  onClick: m,
                  children: p.default.Messages.GOT_IT,
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=356f168ac153e104430f.js.map
