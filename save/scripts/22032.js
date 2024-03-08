(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22032"],
  {
    202998: function (e, t, i) {
      "use strict";
      i.r(t);
      var l = i("610913");
      i.es(l, t);
    },
    538969: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return _;
          },
        }),
        i("222007");
      var l = i("37983");
      i("884691");
      var s = i("750485"),
        a = i("77078"),
        n = i("887657"),
        r = i("549586"),
        o = i("564875"),
        d = i("404158"),
        c = i("671088"),
        u = i("368874"),
        h = i("775032"),
        C = i("821586"),
        f = i("922832"),
        T = i("782340"),
        p = i("782962"),
        x = i("392963");
      let A = {
          [f.TeenActionDisplayType.USER_INTERACTION]: (0, l.jsx)(C.default, {
            width: 18,
            height: 18,
          }),
          [f.TeenActionDisplayType.USER_CALLED]: (0, l.jsx)(n.default, {
            width: 22,
            height: 22,
          }),
          [f.TeenActionDisplayType.USER_ADD]: (0, l.jsx)(o.default, {
            className: p.personWavingIcon,
            width: 22,
            height: 22,
          }),
          [f.TeenActionDisplayType.GUILD_ADD]: (0, l.jsx)(r.default, {
            width: 22,
            height: 22,
          }),
          [f.TeenActionDisplayType.GUILD_INTERACTION]: (0, l.jsx)(d.default, {
            className: p.threadIcon,
            width: 22,
            height: 22,
          }),
        },
        g = e => {
          let { header: t, description: i, icon: n } = e;
          return (0, l.jsxs)(s.default, {
            className: p.row,
            grow: 0,
            children: [
              (0, l.jsx)("div", { className: p.iconContainer, children: n }),
              (0, l.jsxs)("div", {
                className: p.rowContent,
                children: [
                  (0, l.jsx)(a.Text, {
                    className: p.rowHeader,
                    variant: "text-sm/bold",
                    children: t,
                  }),
                  (0, l.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        };
      var _ = e => {
        let { transitionState: t, onClose: i } = e,
          n = (0, u.useAgeSpecificText)(
            T.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN,
            T.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT
          ),
          r = (0, h.default)(),
          o = Array.from(f.ACTION_TO_TEXT.entries()),
          d = (0, c.useIsEligibleForFamilyCenterVCJoin)({
            location: "family_center_tooltip_modal_web",
          });
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: t,
          children: [
            (0, l.jsx)("img", {
              className: p.art,
              src: x,
              alt: T.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT,
            }),
            (0, l.jsx)(a.ModalContent, {
              className: p.content,
              children: (0, l.jsxs)(s.default, {
                direction: s.default.Direction.VERTICAL,
                align: s.default.Align.CENTER,
                children: [
                  (0, l.jsx)(a.Heading, {
                    className: p.header,
                    color: "header-primary",
                    variant: "heading-lg/semibold",
                    children: (0, l.jsx)(a.HeadingLevel, { children: n }),
                  }),
                  o.map(e => {
                    let [t, i] = e;
                    return (0, l.jsx)(
                      g,
                      {
                        icon: A[t],
                        header: i.tooltipHeader(),
                        description: i.tooltipDescription(
                          null != r ? r : void 0,
                          d
                        ),
                      },
                      t
                    );
                  }),
                ],
              }),
            }),
            (0, l.jsx)(a.ModalFooter, {
              children: (0, l.jsx)(a.Button, {
                className: p.button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: i,
                children: T.default.Messages.GOT_IT,
              }),
            }),
          ],
        });
      };
    },
    821586: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var l = i("37983");
      i("884691");
      var s = i("75196");
      function a(e) {
        let {
          width: t = 24,
          height: i = 24,
          color: a = "currentColor",
          ...n
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(n),
          width: t,
          height: i,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, l.jsx)("path", {
              d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
              fill: a,
            }),
            (0, l.jsx)("path", {
              d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
              fill: a,
            }),
          ],
        });
      }
    },
    887657: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var l = i("37983");
      i("884691");
      var s = i("469563"),
        a = i("202998"),
        n = i("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: s = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, n.default)(r),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: a,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z",
              }),
            });
          },
          a.PhoneCallIcon,
          void 0,
          { size: 24 }
        );
    },
    610913: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PhoneCallIcon: function () {
            return n;
          },
        });
      var l = i("37983");
      i("884691");
      var s = i("669491"),
        a = i("82169");
      let n = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: n = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M2 7.4A5.4 5.4 0 0 1 7.4 2c.36 0 .7.22.83.55l1.93 4.64a1 1 0 0 1-.43 1.25L7 10a8.52 8.52 0 0 0 7 7l1.12-2.24a1 1 0 0 1 1.19-.51l5.06 1.56c.38.11.63.46.63.85C22 19.6 19.6 22 16.66 22h-.37C8.39 22 2 15.6 2 7.71V7.4ZM13 3a1 1 0 0 1 1-1 8 8 0 0 1 8 8 1 1 0 1 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1-1-1Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M13 7a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=a4aed8fe5a7a826d15a3.js.map
