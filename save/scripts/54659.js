(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54659"],
  {
    557890: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("77078"),
        u = s("736964"),
        o = s("476765"),
        i = s("158998"),
        r = s("782340"),
        d = s("190876");
      function c(e) {
        let { user: t, nickname: s, transitionState: c, onClose: N } = e,
          f = (0, o.useUID)(),
          [h, I] = a.useState(!1),
          [M, p] = a.useState(s),
          C = a.useRef(null),
          E = async e => {
            e.preventDefault(), I(!0);
            try {
              await u.default.updateRelationship(t.id, M), N();
            } catch (e) {
            } finally {
              I(!1);
            }
          },
          x =
            null == s
              ? r.default.Messages.ADD_FRIEND_NICKNAME
              : r.default.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, n.jsx)(l.ModalRoot, {
          transitionState: c,
          size: l.ModalSize.SMALL,
          "aria-labelledby": f,
          children: (0, n.jsxs)("form", {
            onSubmit: E,
            children: [
              (0, n.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, n.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: x,
                }),
              }),
              (0, n.jsxs)(l.ModalContent, {
                children: [
                  (0, n.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: d.description,
                    children: r.default.Messages.FRIEND_NICKNAME_DESCRIPTION,
                  }),
                  (0, n.jsx)(l.FormItem, {
                    title: r.default.Messages.FRIEND_NICKNAME,
                    children: (0, n.jsx)(l.TextInput, {
                      inputRef: C,
                      value: null != M ? M : "",
                      placeholder: i.default.getName(t),
                      onChange: p,
                      className: d.input,
                      autoFocus: !0,
                    }),
                  }),
                  (0, n.jsx)(l.Button, {
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.LINK,
                    size: l.Button.Sizes.NONE,
                    onClick: () => {
                      var e;
                      p(null),
                        null === (e = C.current) || void 0 === e || e.focus();
                    },
                    className: d.reset,
                    children: r.default.Messages.RESET_FRIEND_NICKNAME,
                  }),
                ],
              }),
              (0, n.jsxs)(l.ModalFooter, {
                children: [
                  (0, n.jsx)(l.Button, {
                    type: "submit",
                    disabled: h,
                    children: r.default.Messages.SAVE,
                  }),
                  (0, n.jsx)(l.Button, {
                    onClick: N,
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.PRIMARY,
                    children: r.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    476765: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          uid: function () {
            return u;
          },
          useUID: function () {
            return o;
          },
          UID: function () {
            return i;
          },
        });
      var n = s("995008"),
        a = s.n(n),
        l = s("775560");
      let u = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        o = () => (0, l.useLazyValue)(() => u()),
        i = e => {
          let { children: t } = e;
          return t(o());
        };
    },
  },
]);
//# sourceMappingURL=0dd0ccbffde517acfc63.js.map
