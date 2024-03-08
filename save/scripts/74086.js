(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74086"],
  {
    550779: function (e, a, s) {
      "use strict";
      e.exports = s.p + "a4fefcf6c1ebb8ae9d33.svg";
    },
    10035: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return _;
          },
        }),
        s("222007");
      var l = s("37983"),
        t = s("884691"),
        n = s("917351"),
        i = s.n(n),
        r = s("446674"),
        d = s("77078"),
        o = s("318738"),
        c = s("430568"),
        m = s("656038"),
        x = s("419830"),
        u = s("454273"),
        h = s("867805"),
        E = s("923959"),
        N = s("476765"),
        T = s("593195"),
        j = s("782340"),
        I = s("81183");
      function C(e) {
        var a, t, n;
        let { onClose: i, handleReviewPermissions: r } = e,
          o = e =>
            (0, l.jsx)(d.Text, {
              tag: "span",
              variant: "text-md/medium",
              color: "header-primary",
              children: e,
            });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(d.ModalContent, {
              className: I.infoContent,
              children: [
                (0, l.jsxs)("div", {
                  className: I.modalHeader,
                  children: [
                    (0, l.jsx)("img", {
                      className: I.modalImage,
                      "data-accessibility": "desaturate",
                      alt: "",
                      src: s("550779"),
                    }),
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children:
                        j.default.Messages
                          .GUILD_SETTINGS_DEPRIVATE_MODAL_HEADER,
                    }),
                  ],
                }),
                (0, l.jsxs)("ul", {
                  children: [
                    (0, l.jsxs)("li", {
                      className: I.infoListItem,
                      children: [
                        (0, l.jsx)("div", {
                          className: I.iconWrapper,
                          children: (0, l.jsx)(c.default, {
                            emojiName:
                              null === (a = h.default.getByName("eyes")) ||
                              void 0 === a
                                ? void 0
                                : a.surrogates,
                          }),
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            j.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_1.format(
                              { emphasisHook: o }
                            ),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("li", {
                      className: I.infoListItem,
                      children: [
                        (0, l.jsx)("div", {
                          className: I.iconWrapper,
                          children: (0, l.jsx)(c.default, {
                            emojiName:
                              null ===
                                (t = h.default.getByName("star_struck")) ||
                              void 0 === t
                                ? void 0
                                : t.surrogates,
                          }),
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            j.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_2.format(
                              { emphasisHook: o }
                            ),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("li", {
                      className: I.infoListItem,
                      children: [
                        (0, l.jsx)("div", {
                          className: I.iconWrapper,
                          children: (0, l.jsx)(c.default, {
                            emojiName:
                              null === (n = h.default.getByName("books")) ||
                              void 0 === n
                                ? void 0
                                : n.surrogates,
                          }),
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            j.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_3.format(
                              { emphasisHook: o }
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(d.ModalFooter, {
              children: [
                (0, l.jsx)(d.Button, {
                  onClick: r,
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "always-white",
                    children:
                      j.default.Messages.GUILD_SETTINGS_REVIEW_PERMISSIONS,
                  }),
                }),
                (0, l.jsx)(d.Button, {
                  className: I.modalCancel,
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.PRIMARY,
                  onClick: i,
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: j.default.Messages.CANCEL,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        var a;
        let { channel: s, selected: n, onChange: i } = e,
          r =
            null !== (a = (0, x.getChannelIconComponent)(s)) && void 0 !== a
              ? a
              : T.default,
          o = t.useCallback(() => {
            i(s);
          }, [s, i]);
        return (0, l.jsxs)(d.Clickable, {
          "aria-label": s.name,
          "aria-checked": n,
          className: I.selectableChannelRow,
          onClick: o,
          children: [
            (0, l.jsxs)("div", {
              className: I.selectableChannelCellFirst,
              children: [
                (0, l.jsx)(r, {
                  className: I.channelIcon,
                  width: 16,
                  height: 16,
                }),
                (0, l.jsx)(d.Text, {
                  className: I.channelName,
                  variant: "text-md/medium",
                  color: "text-normal",
                  lineClamp: 1,
                  children: s.name,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: I.selectableChannelCellSecond,
              children: (0, l.jsx)(d.Checkbox, {
                type: d.Checkbox.Types.INVERTED,
                value: n,
                displayOnly: !0,
              }),
            }),
          ],
        });
      }
      function _(e) {
        let {
            transitionState: a,
            onClose: s,
            guildId: n,
            startingChannelId: c,
          } = e,
          x = (0, r.useStateFromStoresArray)([E.default], () => {
            var e, a;
            let s = E.default.getChannels(n),
              l = (
                null !== (e = s[(0, E.GUILD_SELECTABLE_CHANNELS_KEY)]) &&
                void 0 !== e
                  ? e
                  : []
              ).concat(
                null !== (a = s[E.GUILD_VOCAL_CHANNELS_KEY]) && void 0 !== a
                  ? a
                  : []
              );
            return l.filter(e => (0, m.default)(e.channel)).map(e => e.channel);
          }),
          [h, T] = t.useState(0),
          _ = x.find(e => e.id === c),
          [f, L] = t.useState(null != _ ? [_] : []),
          S = (0, N.useUID)(),
          g = f.length === x.length,
          p = t.useCallback(() => {
            T(1);
          }, [T]),
          b = t.useCallback(
            e => {
              L(a => (a.includes(e) ? [...i.pull(a, e)] : [...a, e]));
            },
            [L]
          ),
          A = t.useCallback(() => {
            g ? L([]) : L(x);
          }, [g, x, L]),
          k = t.useCallback(() => {
            f.forEach(e => {
              let a = (0, u.flipEveryonePermission)(e, e.accessPermissions, !0);
              (0, o.savePermissionUpdates)(e.id, [a]), s();
            });
          }, [f, s]);
        return 0 === h
          ? (0, l.jsx)(d.ModalRoot, {
              transitionState: a,
              "aria-labelledby": S,
              size: d.ModalSize.SMALL,
              children: (0, l.jsx)(C, {
                handleReviewPermissions: p,
                onClose: s,
              }),
            })
          : (0, l.jsxs)(d.ModalRoot, {
              transitionState: a,
              "aria-labelledby": S,
              size: d.ModalSize.SMALL,
              children: [
                (0, l.jsxs)(d.ModalContent, {
                  className: I.updateContent,
                  children: [
                    (0, l.jsxs)("div", {
                      className: I.modalHeader,
                      children: [
                        (0, l.jsx)(d.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          children:
                            j.default.Messages.GUILD_SETTINGS_DEPRIVATE_TITLE,
                        }),
                        (0, l.jsx)(d.Text, {
                          className: I.modalSubheader,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            j.default.Messages
                              .GUILD_SETTINGS_DEPRIVATE_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: I.selectAllContainer,
                      children: [
                        (0, l.jsx)(d.Text, {
                          className: I.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children:
                            j.default.Messages.GUILD_SETTINGS_DEPRIVATE_CHANNEL_COUNT.format(
                              { count: x.length }
                            ),
                        }),
                        (0, l.jsxs)(d.Clickable, {
                          "aria-label": j.default.Messages.SELECT_ALL,
                          className: I.selectAllButton,
                          onClick: A,
                          children: [
                            (0, l.jsx)(d.Text, {
                              variant: "text-xs/normal",
                              children: j.default.Messages.SELECT_ALL,
                            }),
                            (0, l.jsx)(d.Checkbox, {
                              size: 16,
                              type: d.Checkbox.Types.INVERTED,
                              value: g,
                              displayOnly: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: I.deprivateTableBody,
                      children: x.map(e =>
                        (0, l.jsx)(
                          v,
                          { channel: e, selected: f.includes(e), onChange: b },
                          e.id
                        )
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: I.deprivateExplainer,
                      children: (0, l.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                          j.default.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_4.format(
                            {
                              emphasisHook: e =>
                                (0, l.jsx)(d.Text, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "interactive-active",
                                  children: e,
                                }),
                              brandHook: e =>
                                (0, l.jsx)(d.Text, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: "text-brand",
                                  children: e,
                                }),
                            }
                          ),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(d.ModalFooter, {
                  className: I.modalFooter,
                  children: [
                    (0, l.jsx)(d.Button, {
                      disabled: 0 === f.length,
                      onClick: k,
                      children: (0, l.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children:
                          j.default.Messages.GUILD_SETTINGS_UPDATE_PERMISSIONS,
                      }),
                    }),
                    (0, l.jsx)(d.Button, {
                      className: I.modalCancel,
                      look: d.Button.Looks.LINK,
                      borderColor: d.Button.Colors.PRIMARY,
                      onClick: s,
                      children: (0, l.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: j.default.Messages.CANCEL,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=ff26c14df186737f00df.js.map
