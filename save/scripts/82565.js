(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82565"],
  {
    445356: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c8718df1382ba878f1fc.svg";
    },
    460287: function (e, t, r) {
      "use strict";
      e.exports = r.p + "08e581a604e6635d1424.svg";
    },
    507453: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var n = r("37983");
      r("884691");
      var a = r("414456"),
        s = r.n(a),
        i = r("41543");
      function l(e) {
        let { className: t } = e;
        return (0, n.jsx)("div", { className: s(i.image, t) });
      }
    },
    286470: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          createModeratorOverwrite: function () {
            return N;
          },
          default: function () {
            return A;
          },
        }),
        r("222007");
      var n = r("37983"),
        a = r("884691"),
        s = r("446674"),
        i = r("77078"),
        l = r("318738"),
        o = r("448993"),
        d = r("798609"),
        u = r("462430"),
        c = r("42203"),
        f = r("305961"),
        E = r("145131"),
        h = r("476765"),
        S = r("228427"),
        m = r("991170"),
        g = r("923510"),
        M = r("606762"),
        p = r("782340"),
        x = r("898165");
      function N(e, t) {
        return {
          id: e,
          type: t,
          deny: m.NONE,
          allow: g.MODERATE_STAGE_CHANNEL_PERMISSIONS,
        };
      }
      function A(e) {
        let { transitionState: t, onClose: r, channelId: m } = e,
          A = (0, h.useUID)(),
          R = (0, s.useStateFromStores)([c.default], () =>
            c.default.getChannel(m)
          ),
          v = (0, s.useStateFromStores)([f.default], () =>
            f.default.getGuild(null == R ? void 0 : R.getGuildId())
          ),
          [I, T] = a.useState({}),
          [C, j] = a.useState(!1),
          [L, O] = a.useState(null);
        if (null == R || null == v) return null;
        let _ = async () => {
          j(!0);
          try {
            await (function (e, t) {
              let r = Object.values(t)
                .filter(e => {
                  let { row: t } = e;
                  return null != t.id;
                })
                .map(e => {
                  let { row: t } = e;
                  return t.rowType === M.RowType.ROLE
                    ? N(t.id, d.PermissionOverwriteType.ROLE)
                    : N(t.id, d.PermissionOverwriteType.MEMBER);
                });
              return (0, l.savePermissionUpdates)(e.id, r, !0);
            })(R, I),
              r();
          } catch (t) {
            let e = new o.APIError(t);
            j(!1), O(e);
          }
        };
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": A,
          size: i.ModalSize.SMALL,
          className: x.modalRoot,
          children: [
            (0, n.jsxs)(i.ModalHeader, {
              separator: !1,
              direction: E.default.Direction.VERTICAL,
              align: E.default.Align.CENTER,
              className: x.header,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children:
                    p.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                }),
                (0, n.jsxs)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: x.headerSubtitle,
                  children: [
                    (0, n.jsx)(S.default, {
                      height: 16,
                      width: 16,
                      className: x.headerSubtitleIcon,
                    }),
                    R.name,
                  ],
                }),
              ],
            }),
            (0, n.jsx)(u.AddMembersBody, {
              guild: v,
              channel: R,
              permission: g.MODERATE_STAGE_CHANNEL_PERMISSIONS,
              pendingAdditions: I,
              setPendingAdditions: T,
            }),
            null != L
              ? (0, n.jsx)(i.Text, {
                  className: x.error,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: L.getAnyErrorMessage(),
                })
              : null,
            (0, n.jsxs)(i.ModalFooter, {
              children: [
                (0, n.jsx)(i.Button, {
                  onClick: _,
                  submitting: C,
                  children: p.default.Messages.ADD,
                }),
                (0, n.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: r,
                  children: p.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=eb63e6190dd467f3edca.js.map
