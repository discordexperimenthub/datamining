(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93074"],
  {
    861370: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var u = t("37983");
      t("884691");
      var a = t("627445"),
        l = t.n(a),
        r = t("77078"),
        s = t("845579"),
        i = t("662255"),
        c = t("306160");
      function d(e) {
        let { id: n, label: t, onSuccess: a, shiftId: d, showIconFirst: o } = e,
          f = s.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !c.SUPPORTS_COPY || null == n) return null;
        let h = "devmode-copy-id-".concat(n);
        return (0, u.jsx)(
          r.MenuItem,
          {
            id: h,
            label: t,
            action: function (e) {
              let t = null != d && e.shiftKey ? d : n;
              l(null != t, "cannot copy null text"),
                (0, c.copy)(t),
                null == a || a();
            },
            icon: i.default,
            showIconFirst: o,
          },
          h
        );
      }
    },
    327054: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
      var u = t("300322"),
        a = t("913491"),
        l = t("49111");
      function r(e, n, t) {
        let r = n.isSystemDM(),
          s = !r && !(0, a.default)(e);
        return (
          s &&
          (t || n.isPrivate()) &&
          (0, u.getIsActiveChannelOrUnarchivableThread)(n) &&
          n.type !== l.ChannelTypes.GUILD_VOICE &&
          n.type !== l.ChannelTypes.GUILD_STAGE_VOICE
        );
      }
    },
    13406: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        });
      var u = t("37983");
      t("884691");
      var a = t("118810"),
        l = t("77078"),
        r = t("272030"),
        s = t("861370"),
        i = t("152298"),
        c = t("26051"),
        d = t("667358"),
        o = t("518155"),
        f = t("718381"),
        h = t("875834"),
        p = t("780657"),
        M = t("782340");
      function E(e) {
        var n;
        let t,
          E,
          I,
          { channel: S, message: m, target: v, attachment: _, onSelect: x } = e,
          N = v;
        if (null != _) E = t = _.url;
        else
          for (; (0, a.isElement)(N); )
            (0, a.isElement)(N, HTMLImageElement) &&
              null != N.src &&
              (E = N.src),
              (0, a.isElement)(N, HTMLAnchorElement) &&
                null != N.href &&
                ((t = N.href), (I = N.textContent)),
              (N = N.parentNode);
        let A =
            null === (n = document.getSelection()) || void 0 === n
              ? void 0
              : n.toString(),
          g = (0, i.default)(A),
          G = (0, d.default)(A),
          O = (0, p.default)(m, S),
          C = (0, h.default)(m, S),
          j = (0, o.default)(m, S),
          T = (0, f.default)(m, S),
          y = (0, c.default)(null != t ? t : E, I),
          P = (0, s.default)({
            id: m.id,
            label: M.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(m.channel_id, "-").concat(m.id),
          }),
          R = (0, s.default)({
            id: m.author.id,
            label: M.default.Messages.COPY_ID_AUTHOR,
          });
        return (0, u.jsxs)(l.Menu, {
          navId: "message",
          onClose: r.closeContextMenu,
          "aria-label": M.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: x,
          children: [
            (0, u.jsx)(l.MenuGroup, { children: g }),
            (0, u.jsx)(l.MenuGroup, { children: G }),
            (0, u.jsxs)(l.MenuGroup, { children: [O, C, j, T] }),
            (0, u.jsx)(l.MenuGroup, { children: y }),
            (0, u.jsxs)(l.MenuGroup, { children: [P, R] }),
          ],
        });
      }
    },
    780657: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var u = t("37983");
      t("884691");
      var a = t("446674"),
        l = t("77078"),
        r = t("828986"),
        s = t("249561"),
        i = t("957255"),
        c = t("566998"),
        d = t("327054"),
        o = t("49111"),
        f = t("782340");
      function h(e, n) {
        let t = (0, a.useStateFromStores)(
          [i.default],
          () => i.default.can(o.Permissions.MANAGE_MESSAGES, n),
          [n]
        );
        return e.state !== o.MessageStates.SEND_FAILED &&
          (0, d.default)(e, n, t)
          ? !1 === e.pinned
            ? (0, u.jsx)(l.MenuItem, {
                id: "pin",
                action: function (t) {
                  t.shiftKey
                    ? r.default.pinMessage(n, e.id)
                    : s.default.confirmPin(n, e);
                },
                label: f.default.Messages.PIN_MESSAGE,
                icon: c.default,
              })
            : (0, u.jsx)(l.MenuItem, {
                id: "unpin",
                action: function (t) {
                  t.shiftKey
                    ? r.default.unpinMessage(n, e.id)
                    : s.default.confirmUnpin(n, e);
                },
                label: f.default.Messages.UNPIN_MESSAGE,
                icon: c.default,
              })
          : null;
      }
    },
    555158: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return p;
          },
        });
      var u,
        a,
        l = t("37983");
      t("884691");
      var r = t("414456"),
        s = t.n(r),
        i = t("77078"),
        c = t("36694"),
        d = t("381546"),
        o = t("68238"),
        f = t("423487"),
        h = t("950038");
      ((u = a || (a = {}))[(u.WARNING = 0)] = "WARNING"),
        (u[(u.INFO = 1)] = "INFO"),
        (u[(u.ERROR = 2)] = "ERROR"),
        (u[(u.POSITIVE = 3)] = "POSITIVE");
      var p = function (e) {
        let {
            children: n,
            messageType: t,
            className: u,
            textColor: a = "text-normal",
            textVariant: r = "text-sm/medium",
          } = e,
          p = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return o.default;
              case 2:
                return d.default;
              case 3:
                return c.default;
            }
          })(t),
          M = (function (e) {
            switch (e) {
              case 0:
                return h.warning;
              case 1:
                return h.info;
              case 2:
                return h.error;
              case 3:
                return h.positive;
            }
          })(t);
        return (0, l.jsxs)("div", {
          className: s(h.container, M, u),
          children: [
            (0, l.jsx)("div", {
              className: h.iconDiv,
              children: (0, l.jsx)(p, { className: h.icon }),
            }),
            (0, l.jsx)(i.Text, {
              className: h.text,
              color: a,
              variant: r,
              children: n,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=3c485bfb73706ee3a0f9.js.map
