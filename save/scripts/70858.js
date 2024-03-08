(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70858"],
  {
    353228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var o = n("37983"),
        l = n("884691"),
        s = n("446674"),
        a = n("77078"),
        i = n("679653"),
        r = n("42203"),
        u = n("145131"),
        d = n("476765"),
        c = n("379881"),
        h = n("200008"),
        f = n("782340"),
        C = n("538103");
      function N(e) {
        let {
            channelId: t,
            onClose: n,
            transitionState: N,
            heading: m,
            formTitle: x,
            allowReset: j = !1,
          } = e,
          k = (0, d.useUID)(),
          p = (0, s.useStateFromStores)([r.default], () =>
            r.default.getChannel(t)
          ),
          E = (0, i.default)(p),
          I = c.default.getNickname(t),
          [M, g] = l.useState(null != I ? I : "");
        return (0, o.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), (0, h.setFavoriteChannelNickname)(t, M), n();
          },
          children: (0, o.jsxs)(a.ModalRoot, {
            transitionState: N,
            "aria-labelledby": k,
            children: [
              (0, o.jsxs)(a.ModalHeader, {
                separator: !0,
                justify: u.default.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(a.Heading, {
                    id: k,
                    variant: "heading-lg/semibold",
                    children: m,
                  }),
                  (0, o.jsx)(a.ModalCloseButton, { onClick: n }),
                ],
              }),
              (0, o.jsxs)(a.ModalContent, {
                children: [
                  (0, o.jsx)(a.FormItem, {
                    className: C.name,
                    title: x,
                    children: (0, o.jsx)(a.TextInput, {
                      value: M,
                      onChange: g,
                      placeholder: null != E ? E : void 0,
                      maxLength: 100,
                      autoFocus: !0,
                    }),
                  }),
                  j && null != I
                    ? (0, o.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        size: a.Button.Sizes.NONE,
                        onClick: function () {
                          (0, h.setFavoriteChannelNickname)(t, null), n();
                        },
                        className: C.reset,
                        children: f.default.Messages.RESET_NICKNAME,
                      })
                    : null,
                  (0, o.jsx)(a.Text, {
                    className: C.description,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      f.default.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION,
                  }),
                ],
              }),
              (0, o.jsxs)(a.ModalFooter, {
                children: [
                  (0, o.jsx)(a.Button, { type: "submit", children: m }),
                  (0, o.jsx)(a.Button, {
                    onClick: n,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: f.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=2eb2fe593c9294dfce32.js.map
