(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67204"],
  {
    665718: function (e, t, s) {
      "use strict";
      e.exports = s.p + "5420f8fd9d89897c6448.svg";
    },
    897327: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d8197d45ef3e7289594d.svg";
    },
    49214: function (e, t, s) {
      "use strict";
      e.exports = s.p + "8f974a9393ea1fa82fa7.svg";
    },
    413012: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ActivityAgeGateModal: function () {
            return r;
          },
        });
      var i = s("37983");
      s("884691");
      var n = s("77078"),
        a = s("440351"),
        l = s("782340"),
        o = s("523125");
      function r(e) {
        let { application: t, onAgree: s, onClose: r, onDisagree: u, ...d } = e;
        return (0, i.jsx)(n.ModalRoot, {
          ...d,
          children: (0, i.jsx)("div", {
            children: (0, i.jsx)(a.default, {
              onAgree: () => {
                s(), r();
              },
              onDisagree: () => {
                u(), r();
              },
              title: l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
              description:
                l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format(
                  { applicationName: t.name }
                ),
              agreement: l.default.Messages.NSFW_ACCEPT,
              disagreement: l.default.Messages.NSFW_DECLINE,
              imageClassName: o.image,
            }),
          }),
        });
      }
    },
    440351: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var i = s("37983"),
        n = s("884691"),
        a = s("414456"),
        l = s.n(a),
        o = s("77078"),
        r = s("145131"),
        u = s("750457"),
        d = s("890957");
      class c extends n.PureComponent {
        render() {
          let {
            title: e,
            description: t,
            agreement: s,
            disagreement: n,
            onAgree: a,
            onDisagree: c,
            imageClassName: f,
          } = this.props;
          return (0, i.jsxs)(r.default, {
            className: u.gatedContent,
            justify: r.default.Justify.CENTER,
            align: r.default.Align.CENTER,
            direction: r.default.Direction.VERTICAL,
            children: [
              (0, i.jsx)("div", { className: l(u.image, f) }),
              (0, i.jsx)("div", {
                className: l(u.title, d.marginBottom8),
                children: e,
              }),
              (0, i.jsx)("div", {
                className: l(u.description, d.marginBottom20),
                children: t,
              }),
              (0, i.jsxs)(r.default, {
                justify: r.default.Justify.CENTER,
                align: r.default.Align.CENTER,
                grow: 0,
                children: [
                  null != n
                    ? (0, i.jsx)(o.Button, {
                        className: u.action,
                        size: o.ButtonSizes.LARGE,
                        color: o.ButtonColors.PRIMARY,
                        onClick: c,
                        children: n,
                      })
                    : null,
                  null != s
                    ? (0, i.jsx)(o.Button, {
                        className: u.action,
                        color: o.Button.Colors.RED,
                        size: o.ButtonSizes.LARGE,
                        onClick: a,
                        children: s,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
      }
      var f = c;
    },
  },
]);
//# sourceMappingURL=de8ba4bf5362f65bc894.js.map
