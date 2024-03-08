(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89567"],
  {
    895792: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return E;
          },
        }),
        t("222007");
      var s = t("37983"),
        l = t("884691"),
        r = t("77078"),
        n = t("599417"),
        i = t("145131"),
        d = t("71102"),
        o = t("730647"),
        c = t("782340"),
        u = t("674637");
      function E(e) {
        var a, t;
        let { transitionState: E, onClose: I, entry: g } = e,
          [h, D] = l.useState(
            null !== (a = g.description) && void 0 !== a ? a : ""
          ),
          [m, _] = l.useState(
            null !== (t = g.primaryCategoryId) && void 0 !== t
              ? t
              : o.DirectoryEntryCategories.UNCATEGORIZED
          ),
          [C, f] = l.useState(!1),
          [T, x] = l.useState(null),
          p = async () => {
            if ((x(null), h !== g.description || m !== g.primaryCategoryId)) {
              f(!0);
              try {
                await (0, d.updateDirectoryEntry)(g.channelId, g.guildId, h, m),
                  f(!1),
                  I();
              } catch (e) {
                f(!1), x(new n.default(e));
              }
            }
          };
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: E,
          "aria-label": c.default.Messages.PAYMENT_SOURCES_ADD,
          children: [
            (0, s.jsxs)(r.ModalHeader, {
              direction: i.default.Direction.VERTICAL,
              className: u.header,
              separator: !1,
              children: [
                (0, s.jsx)(r.Heading, {
                  className: u.title,
                  variant: "heading-xl/semibold",
                  children:
                    c.default.Messages.HUB_ENTRY_UPDATE_DESCRIPTION_TITLE.format(
                      { guildName: g.name }
                    ),
                }),
                (0, s.jsx)(r.Text, {
                  className: u.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: c.default.Messages.HUB_ADD_GUILD_DESCRIPTION_HELP,
                }),
                null != I &&
                  (0, s.jsx)(r.ModalCloseButton, {
                    className: u.closeButton,
                    onClick: I,
                  }),
              ],
            }),
            (0, s.jsxs)(r.ModalContent, {
              className: u.createGuild,
              paddingFix: !1,
              children: [
                (0, s.jsx)(r.FormItem, {
                  title: c.default.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
                  children: (0, s.jsx)(r.TextArea, {
                    value: h,
                    maxLength: 200,
                    placeholder:
                      c.default.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
                    onChange: D,
                    error: null == T ? void 0 : T.getAnyErrorMessage(),
                  }),
                }),
                (0, s.jsx)(r.FormItem, {
                  className: u.formItemSpaced,
                  title: c.default.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
                  children: (0, s.jsx)(r.SingleSelect, {
                    placeholder: c.default.Messages.SELECT,
                    options: (0, o.getHubCategories)(g.channelId),
                    clearable: !1,
                    value: m,
                    onChange: _,
                    maxVisibleItems: 4,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              justify: i.default.Justify.BETWEEN,
              children: (0, s.jsx)(r.Button, {
                color: r.Button.Colors.BRAND,
                onClick: p,
                submitting: C,
                children: c.default.Messages.SAVE,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=21a1a18d4b1c24d0efac.js.map
