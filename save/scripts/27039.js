(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27039"],
  {
    508416: function (e, t, a) {
      "use strict";
      e.exports = a.p + "c03b75e2157329374dd2.svg";
    },
    229929: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
          backToSchoolEnabled: function () {
            return l;
          },
        });
      var n = a("862205");
      let o = (0, n.createExperiment)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Back to School experience enabled",
            config: { enabled: !0 },
          },
        ],
      });
      var r = o;
      function l() {
        return o.getCurrentConfig(
          { location: "68acbb_1" },
          { autoTrackExposure: !1 }
        ).enabled;
      }
    },
    278999: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        }),
        a("222007");
      var n = a("37983"),
        o = a("884691"),
        r = a("446674"),
        l = a("77078"),
        s = a("448993"),
        i = a("206230"),
        d = a("526887"),
        u = a("412355"),
        c = a("305961"),
        f = a("145131"),
        m = a("229929"),
        E = a("49111"),
        _ = a("782340"),
        h = a("461318");
      function A(e) {
        let { guildId: t } = e,
          a = (0, r.useStateFromStores)([c.default], () =>
            c.default.getGuild(t)
          ),
          [A, M] = o.useState(null),
          [b, g] = o.useState(""),
          { createMultipleConfettiAt: x } = o.useContext(
            d.ConfettiCannonContext
          ),
          R = (0, r.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion,
            []
          ),
          p = async t => {
            let { onClose: a, guildId: n } = e;
            t.preventDefault(), M(null);
            try {
              await (0, u.updateGuildSelfMember)(n, { nick: b }),
                null == a || a();
            } catch (e) {
              M(new s.APIError(e));
            }
          },
          { transitionState: C } = e,
          H = Object.values(c.default.getGuilds()),
          L =
            H.filter(e => e.id !== t && e.hasFeature(E.GuildFeatures.HUB))
              .length > 0,
          N =
            !R &&
            !L &&
            (null == a ? void 0 : a.hasFeature(E.GuildFeatures.HUB)) &&
            (0, m.backToSchoolEnabled)();
        return (
          o.useEffect(() => {
            if (N) {
              let e = window.innerWidth / 2,
                t = window.innerHeight / 2;
              x(e, t);
            }
          }, [x, N]),
          (0, n.jsxs)(l.ModalRoot, {
            className: h.modalRoot,
            transitionState: C,
            "aria-label": _.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
              guildName: null == a ? void 0 : a.name,
            }),
            children: [
              (0, n.jsxs)(l.ModalHeader, {
                separator: !1,
                className: h.formHeaderContainer,
                direction: f.default.Direction.VERTICAL,
                children: [
                  (0, n.jsx)("div", { className: h.formImage }),
                  (0, n.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    className: h.formHeader,
                    children:
                      _.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
                        guildName: null == a ? void 0 : a.name,
                      }),
                  }),
                  (0, n.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: h.formSubHeader,
                    children: _.default.Messages.HUB_REAL_NAME_MODAL_SUBHEADER,
                  }),
                ],
              }),
              (0, n.jsxs)("form", {
                className: h.formContent,
                onSubmit: p,
                children: [
                  (0, n.jsx)(l.ModalContent, {
                    children: (0, n.jsx)(l.FormItem, {
                      title: _.default.Messages.HUB_REAL_NAME_MODAL_FORM_TITLE,
                      children: (0, n.jsx)(l.TextInput, {
                        placeholder:
                          _.default.Messages
                            .HUB_REAL_NAME_MODAL_FORM_PLACEHOLDER,
                        onChange: e => {
                          g(e);
                        },
                        error:
                          null == A
                            ? void 0
                            : A.getFirstFieldErrorMessage("name"),
                        value: b,
                      }),
                    }),
                  }),
                  (0, n.jsx)(l.ModalFooter, {
                    className: h.formFooter,
                    direction: f.default.Direction.VERTICAL,
                    children: (0, n.jsx)(l.Button, {
                      type: "submit",
                      size: l.Button.Sizes.LARGE,
                      color: l.Button.Colors.BRAND,
                      children: _.default.Messages.HUB_REAL_NAME_CTA,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=748726dc2dbbdf66b998.js.map
