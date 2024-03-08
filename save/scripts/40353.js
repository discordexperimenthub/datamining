(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40353"],
  {
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    443070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        o = n("884691"),
        u = n("77078"),
        r = n("272030"),
        c = n("861370"),
        i = n("782340");
      function d(e) {
        var t;
        let n = (0, c.default)({
          id: e.id,
          label: e.label,
          shiftId: e.shiftId,
        });
        return (
          o.useEffect(() => {
            null == n && (0, r.closeContextMenu)();
          }, [n]),
          (0, l.jsx)(u.Menu, {
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (t = e["aria-label"]) && void 0 !== t
                ? t
                : i.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: r.closeContextMenu,
            children: n,
          })
        );
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var o = n("627445"),
        u = n.n(o),
        r = n("77078"),
        c = n("845579"),
        i = n("662255"),
        d = n("306160");
      function a(e) {
        let { id: t, label: n, onSuccess: o, shiftId: a, showIconFirst: s } = e,
          f = c.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !d.SUPPORTS_COPY || null == t) return null;
        let p = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          r.MenuItem,
          {
            id: p,
            label: n,
            action: function (e) {
              let n = null != a && e.shiftKey ? a : t;
              u(null != n, "cannot copy null text"),
                (0, d.copy)(n),
                null == o || o();
            },
            icon: i.default,
            showIconFirst: s,
          },
          p
        );
      }
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var o = n("469563"),
        u = n("35647"),
        r = n("75196"),
        c = (0, o.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: o = "currentColor",
              foreground: u,
              ...c
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: u,
                fill: o,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          u.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return r;
          },
          copy: function () {
            return c;
          },
        }),
        n("70102");
      var l = n("281071"),
        o = n("773336"),
        u = n("50885");
      let r = (() => {
        if (o.isPlatformEmbedded) return null != u.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function c(e) {
        return (
          !!r && (o.isPlatformEmbedded ? (u.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var o = n("669491"),
        u = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = o.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          o = document.createElement("textarea");
        (o.value = e),
          (o.contentEditable = "true"),
          (o.style.visibility = "none"),
          t.appendChild(o),
          n.selectNodeContents(o),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          o.focus(),
          o.setSelectionRange(0, e.length);
        let u = document.execCommand("copy");
        return t.removeChild(o), u;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=34feaef73af8c188015d.js.map
