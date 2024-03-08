(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97426"],
  {
    892262: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return p;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        o = t("77078"),
        r = t("452804"),
        i = t("269936"),
        n = t("677099"),
        d = t("49111"),
        h = t("782340"),
        u = t("313853");
      let c = (0, i.makeLazy)({
        createPromise: () => t.el("282585").then(t.bind(t, "282585")),
        webpackId: "282585",
      });
      class m extends l.PureComponent {
        render() {
          let { transitionState: e } = this.props,
            { name: s, color: t } = this.state;
          return (0, a.jsxs)(o.ModalRoot, {
            transitionState: e,
            "aria-label": h.default.Messages.SERVER_FOLDER_SETTINGS,
            size: o.ModalSize.DYNAMIC,
            children: [
              (0, a.jsxs)(o.ModalHeader, {
                className: u.header,
                separator: !1,
                children: [
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: h.default.Messages.SERVER_FOLDER_SETTINGS,
                  }),
                  (0, a.jsx)(o.ModalCloseButton, { onClick: this.close }),
                ],
              }),
              (0, a.jsx)(o.ModalContent, {
                children: (0, a.jsxs)("form", {
                  onSubmit: this.handleSubmit,
                  children: [
                    (0, a.jsx)(o.FormItem, {
                      title: h.default.Messages.GUILD_FOLDER_NAME,
                      className: u.formItem,
                      children: (0, a.jsx)(o.TextInput, {
                        maxLength: d.MAX_GUILD_FOLDER_NAME_LENGTH,
                        value: s,
                        onChange: this.handleNameChange,
                        placeholder:
                          h.default.Messages.SERVER_FOLDER_PLACEHOLDER,
                        autoFocus: !0,
                      }),
                    }),
                    (0, a.jsx)(o.FormItem, {
                      title: h.default.Messages.GUILD_FOLDER_COLOR,
                      className: u.formItem,
                      children: (0, a.jsx)(c, {
                        defaultColor: d.DEFAULT_FOLDER_COLOR,
                        colors: d.ROLE_COLORS,
                        value: null != t ? t : d.DEFAULT_FOLDER_COLOR,
                        onChange: this.handleColorChange,
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(o.ModalFooter, {
                children: (0, a.jsx)(o.Button, {
                  type: "submit",
                  onClick: this.handleSubmit,
                  children: h.default.Messages.DONE,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          var s;
          super(...e),
            (this.state = {
              name:
                null !== (s = this.props.folderName) && void 0 !== s ? s : "",
              color: this.props.folderColor,
            }),
            (this.close = () => {
              this.props.onClose();
            }),
            (this.handleNameChange = e => {
              this.setState({ name: e });
            }),
            (this.handleColorChange = e => {
              this.setState({ color: e });
            }),
            (this.handleSubmit = e => {
              e.preventDefault();
              let { folderId: s } = this.props,
                { name: t, color: a } = this.state,
                l = n.default
                  .getGuildFolders()
                  .map(e =>
                    e.folderId === s
                      ? { ...e, folderName: t, folderColor: a }
                      : e
                  );
              (0, r.saveGuildFolders)(l), this.close();
            });
        }
      }
      var p = m;
    },
  },
]);
//# sourceMappingURL=3cca45a9d1ac18c11143.js.map
