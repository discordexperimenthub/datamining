(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67288"],
  {
    818430: function (e, t, a) {
      "use strict";
      e.exports = a.p + "8d1c641db1d81daae0da.svg";
    },
    962512: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        }),
        a("222007");
      var n = a("37983"),
        s = a("884691"),
        l = a("627445"),
        i = a.n(l),
        r = a("759843"),
        d = a("446674"),
        o = a("77078"),
        c = a("404118"),
        u = a("216503"),
        f = a("157357"),
        C = a("700507"),
        m = a("76393"),
        h = a("782340"),
        v = a("818332"),
        x = a("818430");
      function N(e) {
        let { name: t, subText: a } = e;
        return (0, n.jsxs)("div", {
          className: v.deviceItemName,
          children: [
            (0, n.jsx)(f.default, { className: v.deviceItemIcon }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-active",
                  children: t,
                }),
                a,
              ],
            }),
          ],
        });
      }
      function g(e) {
        let {
            devices: t,
            onFinished: a,
            selectedDeviceId: s,
            onSelectDeviceId: l,
            transferring: i,
          } = e,
          r = t.map(e => {
            let { id: t, name: a, platform: s } = e;
            return { value: t, name: (0, n.jsx)(N, { name: a, platform: s }) };
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: v.modalHeaderContainer,
              children: [
                (0, n.jsx)(o.Heading, {
                  className: v.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children:
                    h.default.Messages
                      .CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER,
                }),
                (0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    h.default.Messages
                      .CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING,
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalContent, {
              className: v.content,
              children: [
                (0, n.jsx)(o.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: v.deviceItem,
                  size: o.RadioGroup.Sizes.NOT_SET,
                  value: s,
                  options: r,
                  onChange: e => {
                    let { value: t } = e;
                    return l(t);
                  },
                }),
                (0, n.jsx)(u.default, {
                  children: h.default.Messages.PLAYSTATION_DEVICES_INFOBOX,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalFooter, {
              children: (0, n.jsx)(o.Button, {
                disabled: null == s,
                submitting: i,
                onClick: a,
                children: h.default.Messages.CONSOLE_TRANSFER_VOICE,
              }),
            }),
          ],
        });
      }
      function S() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: v.modalHeaderContainer,
              children: [
                (0, n.jsx)(o.Heading, {
                  className: v.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND,
                }),
                (0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalContent, {
              className: v.emptyArt,
              children: (0, n.jsx)("img", {
                src: x,
                width: "189",
                height: "177",
                alt: "",
              }),
            }),
          ],
        });
      }
      function j(e) {
        let t,
          { channel: a, platform: l, transitionState: u, onClose: f } = e,
          x = (0, d.useStateFromStores)(
            [m.default],
            () => m.default.getDevicesForPlatform(l),
            [l]
          ),
          N = (0, d.useStateFromStores)([m.default], () =>
            m.default.getLastSelectedDeviceByPlatform(l)
          ),
          j = s.useMemo(() => Object.values(x), [x]),
          O = (0, d.useStateFromStores)([m.default], () =>
            m.default.getFetchingDevices(l)
          ),
          I = (0, d.useStateFromStores)([m.default], () => {
            var e;
            return null === (e = m.default.getAwaitingRemoteSessionInfo()) ||
              void 0 === e
              ? void 0
              : e.deviceId;
          }),
          [p, _] = s.useState(!1),
          [E, M] = s.useState(() => {
            var e, t;
            return null !==
              (t =
                null === (e = x[null != I ? I : ""]) || void 0 === e
                  ? void 0
                  : e.id) && void 0 !== t
              ? t
              : null;
          });
        s.useEffect(() => {
          C.fetchDevices(l);
        }, [l]),
          s.useEffect(() => {
            1 === j.length ? M(j[0].id) : null != N && M(N);
          }, [j, N]);
        let R = async () => {
          let e = x[null != E ? E : ""];
          i(null != e, "Cannot transfer without selected device");
          try {
            _(!0), await C.transferToPlayStation(l, e.id, a), f();
          } catch (t) {
            _(!1),
              c.default.show({
                title: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                body: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format(
                  { deviceName: e.name }
                ),
              });
          }
        };
        return (
          (t = O
            ? (0, n.jsx)("div", {
                className: v.spinnerContainer,
                children: (0, n.jsx)(o.Spinner, {}),
              })
            : 0 === j.length
              ? (0, n.jsx)(S, {})
              : (0, n.jsx)(g, {
                  devices: j,
                  onFinished: R,
                  selectedDeviceId: E,
                  transferring: p || null != I,
                  onSelectDeviceId: e => {
                    M(e), (0, C.persistSelectedDeviceId)(l, e);
                  },
                })),
          (0, n.jsxs)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            className: v.modalRoot,
            transitionState: u,
            impression: {
              impressionName: r.ImpressionNames.GAME_CONSOLE_DEVICE_LIST,
            },
            children: [
              t,
              (0, n.jsx)(o.ModalCloseButton, {
                className: v.closeButton,
                onClick: f,
              }),
            ],
          })
        );
      }
    },
    216503: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          InfoBoxLooks: function () {
            return s;
          },
          default: function () {
            return m;
          },
        });
      var n,
        s,
        l = a("37983");
      a("884691");
      var i = a("414456"),
        r = a.n(i),
        d = a("77078"),
        o = a("266926"),
        c = a("423487"),
        u = a("235464");
      ((n = s || (s = {})).INFO = "info"), (n.WARNING = "warning");
      let f = { info: u.info, warning: u.warning },
        C = { info: o.default, warning: c.default };
      function m(e) {
        let { children: t, className: a, look: n = "info" } = e,
          s = C[n];
        return (0, l.jsxs)("div", {
          className: r(u.root, a, f[n]),
          children: [
            (0, l.jsx)(s, { className: u.icon }),
            (0, l.jsx)(d.Text, {
              className: u.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    266926: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("469563"),
        l = a("225389"),
        i = a("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: s = "currentColor",
              backgroundColor: l,
              ...r
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                null != l
                  ? (0, n.jsx)("circle", { r: 8, cx: 12, cy: 12, fill: l })
                  : null,
                (0, n.jsx)("path", {
                  d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 6.751C12.69 6.751 13.25 7.311 13.25 8.001C13.25 8.692 12.69 9.251 12 9.251C11.31 9.251 10.75 8.691 10.75 8C10.75 7.31 11.31 6.751 12 6.751ZM15 17H9V15H11V12H10V10H12C12.553 10 13 10.448 13 11V15H15V17Z",
                  fill: s,
                }),
              ],
            });
          },
          l.CircleInformationIcon,
          void 0,
          { size: 24 }
        );
    },
    157357: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("75196");
      function l(e) {
        let {
          width: t = 24,
          height: a = 24,
          color: l = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.default)(r),
          width: t,
          height: a,
          viewBox: "0 0 24 25",
          children: [
            (0, n.jsx)("path", {
              className: i,
              fill: l,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, n.jsx)("path", {
              className: i,
              fill: l,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, n.jsx)("path", {
              className: i,
              fill: l,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=c263c9cafbc5e990f584.js.map
