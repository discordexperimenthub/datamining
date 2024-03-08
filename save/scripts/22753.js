(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22753"],
  {
    549825: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("414456"),
        l = a.n(i),
        r = a("77078"),
        t = a("978970"),
        d = a("36694"),
        o = a("945330"),
        c = a("434106");
      function u(e) {
        let {
          grantedPermissions: s,
          disabledPermissions: a,
          grantedPermissionsHeader: i,
          disabledPermissionsHeader: u,
          className: h,
        } = e;
        return (0, n.jsxs)("div", {
          className: l(c.list, h),
          children: [
            null != s && s.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != i
                      ? (0, n.jsx)(r.FormTitle, {
                          className: c.permissionHeader,
                          children: i,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: c.container,
                      children: s.map(e =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, n.jsx)(d.default, {
                                width: 16,
                                height: 16,
                                className: c.check,
                              }),
                              (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: (0, t.getPermissionName)(e),
                              }),
                            ],
                          },
                          e.toString()
                        )
                      ),
                    }),
                  ],
                })
              : null,
            null != a && a.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != u
                      ? (0, n.jsx)(r.FormTitle, {
                          className: c.permissionHeader,
                          children: u,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: c.container,
                      children: a.map(e =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, n.jsx)(o.default, {
                                width: 16,
                                height: 16,
                                className: c.cross,
                              }),
                              (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: (0, t.getPermissionName)(e),
                              }),
                            ],
                          },
                          e.toString()
                        )
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    317671: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return c;
          },
        }),
        a("424973"),
        a("222007");
      var n = a("37983");
      a("884691");
      var i = a("316693"),
        l = a("77078"),
        r = a("549825"),
        t = a("978970"),
        d = a("782340"),
        o = a("703459");
      function c(e) {
        let { defaultMemberPermissions: s, onClose: a, transitionState: c } = e,
          u = [];
        for (let e of t.OrderedPermissions) i.default.has(s, e) && u.push(e);
        return (0, n.jsxs)(l.ModalRoot, {
          size: l.ModalSize.DYNAMIC,
          "aria-label":
            d.default.Messages
              .INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
          transitionState: c,
          children: [
            (0, n.jsx)(l.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(l.Heading, {
                className: o.header,
                variant: "heading-xl/semibold",
                children:
                  d.default.Messages
                    .INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER,
              }),
            }),
            (0, n.jsx)(l.ModalContent, {
              children: (0, n.jsx)(r.default, {
                className: o.permissionList,
                grantedPermissions: u,
              }),
            }),
            (0, n.jsx)(l.ModalFooter, {
              className: o.footer,
              children: (0, n.jsx)(l.Button, {
                size: l.ButtonSizes.MEDIUM,
                onClick: a,
                color: l.ButtonColors.BRAND,
                children: d.default.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=ff05b00c1981c069a216.js.map
