(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83032"],
  {
    940374: function (e, a, i) {
      "use strict";
      e.exports = i.p + "0899245413a3d10c32c6.svg";
    },
    64567: function (e, a, i) {
      "use strict";
      i.r(a),
        i.d(a, {
          default: function () {
            return L;
          },
        }),
        i("222007");
      var l,
        t,
        o = i("37983"),
        n = i("884691"),
        s = i("414456"),
        r = i.n(s),
        d = i("775560"),
        c = i("77078"),
        u = i("86678"),
        p = i("858619"),
        f = i("694187"),
        m = i("923959"),
        v = i("476765"),
        j = i("818643"),
        I = i("315102"),
        N = i("103603"),
        _ = i("958706"),
        b = i("782340"),
        h = i("325790"),
        x = i("940374");
      ((t = l || (l = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload"),
        (t.TAB_ID_EMOJI = "tab-id-role-icon-emoji");
      function E() {
        return [
          {
            name: b.default.Messages.IMAGES,
            extensions: ["jpg", "jpeg", "png"],
          },
        ];
      }
      async function O(e) {
        let a = (0, I.getEmojiURL)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0,
          }),
          i = await fetch(a),
          l = await i.blob(),
          t = await (0, N.readFileAsBase64)(l);
        return t;
      }
      var L = function (e) {
        let {
            guildId: a,
            onUploadIcon: i,
            onSelectUnicodeEmoji: l,
            onClose: t,
            transitionState: s,
          } = e,
          I = (0, v.useUID)(),
          N = m.default.getDefaultChannel(a),
          [L, B] = n.useState("tab-id-role-icon-file-upload"),
          [g, C] = n.useState(!1),
          M = (0, d.useLazyValue)(E);
        return (
          n.useEffect(() => {
            C(!1);
          }, [L]),
          (0, o.jsx)(c.ModalRoot, {
            transitionState: s,
            "aria-labelledby": I,
            size: c.ModalSize.MEDIUM,
            className: h.modalRoot,
            children: (0, o.jsxs)("div", {
              className: h.contentWrapper,
              children: [
                (0, o.jsx)("nav", {
                  className: r(h.nav, {
                    [h.navUploadSelected]: "tab-id-role-icon-file-upload" === L,
                  }),
                  children: (0, o.jsxs)("div", {
                    className: h.navList,
                    role: "tablist",
                    "aria-label": "Expression Picker",
                    children: [
                      (0, o.jsx)("div", {
                        className: h.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-file-upload",
                        "aria-selected": "tab-id-role-icon-file-upload" === L,
                        children: (0, o.jsx)(c.Button, {
                          onClick: () => {
                            B("tab-id-role-icon-file-upload");
                          },
                          "aria-current": "page",
                          className: r(h.navButton, {
                            [h.navButtonActive]:
                              "tab-id-role-icon-file-upload" === L,
                          }),
                          look: c.Button.Looks.BLANK,
                          size: c.Button.Sizes.NONE,
                          children:
                            b.default.Messages.ROLE_ICON_TAB_UPLOAD_IMAGE,
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: h.navItem,
                        role: "tab",
                        "aria-controls": "tab-id-role-icon-emoji",
                        "aria-selected": "tab-id-role-icon-emoji" === L,
                        children: (0, o.jsx)(c.Button, {
                          onClick: () => {
                            B("tab-id-role-icon-emoji");
                          },
                          "aria-current": "page",
                          className: r(h.navButton, {
                            [h.navButtonActive]: "tab-id-role-icon-emoji" === L,
                          }),
                          look: c.Button.Looks.BLANK,
                          size: c.Button.Sizes.NONE,
                          children: b.default.Messages.ROLE_ICON_TAB_EMOJI,
                        }),
                      }),
                    ],
                  }),
                }),
                "tab-id-role-icon-file-upload" === L
                  ? (0, o.jsx)(c.ModalContent, {
                      children: (0, o.jsxs)("div", {
                        className: h.uploadContainer,
                        children: [
                          (0, o.jsxs)("div", {
                            className: h.uploadIconOuterContainer,
                            children: [
                              (0, o.jsx)("img", { src: x, alt: "sparkles" }),
                              (0, o.jsx)("div", {
                                className: h.uploadIconInnerContainer,
                                children: (0, o.jsx)(j.default, {
                                  className: h.uploadIcon,
                                }),
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: h.uploadInfo,
                            children:
                              b.default.Messages.ROLE_ICON_UPLOAD_FILES_INFO,
                          }),
                          (0, o.jsxs)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            children: [
                              b.default.Messages.ROLE_ICON_UPLOAD_BROWSE_FILES,
                              (0, o.jsx)(f.default, {
                                onChange: e => {
                                  C(!1), i(e), t();
                                },
                                onFileSizeError: () => {
                                  C(!0);
                                },
                                maxFileSizeBytes: 256e3,
                                multiple: !1,
                                filters: M,
                              }),
                            ],
                          }),
                          g
                            ? (0, o.jsx)(c.Text, {
                                className: h.uploadError,
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children:
                                  b.default.Messages
                                    .ROLE_ICON_UPLOAD_FILE_TOO_BIG,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null,
                "tab-id-role-icon-emoji" === L
                  ? (0, o.jsx)(u.default, {
                      hasTabWrapper: !0,
                      closePopout: () => t(),
                      onSelectEmoji: async e => {
                        if ((null == e ? void 0 : e.id) != null) {
                          if (
                            (null == e ? void 0 : e.type) === p.EmojiTypes.GUILD
                          ) {
                            let a = await O(e);
                            i(a);
                          }
                        } else if (
                          (null == e ? void 0 : e.surrogates) != null
                        ) {
                          var a, o;
                          let i =
                            null !==
                              (o =
                                null === (a = e.defaultDiversityChild) ||
                                void 0 === a
                                  ? void 0
                                  : a.surrogates) && void 0 !== o
                              ? o
                              : e.surrogates;
                          l(i);
                        }
                        t();
                      },
                      pickerIntention: _.EmojiIntention.COMMUNITY_CONTENT,
                      channel: N,
                    })
                  : null,
              ],
            }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=4cd77bb8ace82fc558cd.js.map
