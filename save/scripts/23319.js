(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23319"],
  {
    127407: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return T;
          },
        });
      var r = s("37983");
      s("884691");
      var l = s("907002"),
        t = s("669491"),
        n = s("77078"),
        i = s("476765"),
        d = s("258078"),
        I = s("447621"),
        c = s("782340"),
        _ = s("767572");
      let o = e => {
        let {
            currentNumber: a,
            thresholdNumber: s,
            currentLabel: i,
            isPercent: I = !1,
          } = e,
          o = null != s ? Math.floor((a / s) * 100) : 0,
          T = c.default.Messages.NUMBERS_ONLY.format({ count: a }),
          E =
            null != s
              ? c.default.Messages.NUMBERS_ONLY.format({ count: s })
              : "--",
          S = (0, n.useToken)(t.default.unsafe_rawColors.RED_400).hex(),
          N = (0, n.useToken)(t.default.unsafe_rawColors.YELLOW_300).hex();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: _.progressWrapper,
              children: [
                (0, r.jsx)("div", { className: _.progressBackground }),
                (0, r.jsx)(l.Spring, {
                  from: { width: 0 },
                  to: { width: o },
                  config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                  children: e => {
                    let { width: a } = e;
                    return (0, r.jsx)(l.animated.div, {
                      className: _.progressBar,
                      style: {
                        width: a.interpolate(e => "".concat(e, "%")),
                        backgroundColor: a.interpolate(e => (e < 33 ? S : N)),
                      },
                    });
                  },
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: _.labelWrapper,
              children: [
                (0, r.jsxs)("div", {
                  className: _.current,
                  children: [
                    (0, r.jsx)(d.default, {
                      color:
                        o < 33
                          ? d.default.Colors.ERROR
                          : d.default.Colors.STATUS_YELLOW,
                      className: _.bold,
                      children: I ? "".concat(T, "%") : T,
                    }),
                    (0, r.jsxs)(n.Text, {
                      "aria-describedby": "health-score-details-score-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        i,
                        (0, r.jsx)("sup", { "aria-hidden": !0, children: "1" }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: _.requirement,
                  children: [
                    (0, r.jsx)(n.Text, {
                      className: _.bold,
                      variant: "text-sm/semibold",
                      children: I ? "".concat(E, "%") : E,
                    }),
                    (0, r.jsx)(n.Text, {
                      "aria-describedby":
                        "health-score-details-requirement-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children:
                        c.default.Messages
                          .GUILD_SETTINGS_DISCOVERY_CHECKLIST_PROGRESS_REQUIREMENT_LABEL,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var T = e => {
        let a,
          s,
          l,
          { guildChecklist: t, transitionState: d, onClose: T } = e,
          E = (0, i.useUID)(),
          { retentionHealthy: S, engagementHealthy: N, healthScore: m } = t,
          {
            avg_nonnew_participators: C,
            avg_nonnew_communicators: u,
            perc_ret_w1_intentful: h,
          } = m;
        return (
          !N &&
            null != C &&
            C < I.DISCOVERY_PARTICIPATOR_REQUIREMENT &&
            (s = (0, r.jsxs)("div", {
              className: _.failingBlock,
              children: [
                (0, r.jsx)(n.Heading, {
                  className: _.marginAfter,
                  variant: "heading-md/semibold",
                  children:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION,
                }),
                (0, r.jsx)(n.Text, {
                  variant: "text-sm/normal",
                  children:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION_DETAILS,
                }),
                (0, r.jsx)(o, {
                  currentNumber: C,
                  thresholdNumber: 40,
                  currentLabel:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_PROGRESS_LABEL,
                }),
              ],
            })),
          !N &&
            null != u &&
            u < I.DISCOVERY_COMMUNICATOR_REQUIREMENT &&
            (l = (0, r.jsxs)("div", {
              className: _.failingBlock,
              children: [
                (0, r.jsx)(n.Heading, {
                  className: _.marginAfter,
                  variant: "heading-md/semibold",
                  children:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION,
                }),
                (0, r.jsx)(n.Text, {
                  variant: "text-sm/normal",
                  children:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION_DETAILS,
                }),
                (0, r.jsx)(o, {
                  currentNumber: u,
                  thresholdNumber: 20,
                  currentLabel:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_PROGRESS_LABEL,
                }),
              ],
            })),
          !S &&
            null != h &&
            (a = (0, r.jsxs)("div", {
              className: _.failingBlock,
              children: [
                (0, r.jsx)(n.Heading, {
                  className: _.marginAfter,
                  variant: "heading-md/semibold",
                  children:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION,
                }),
                (0, r.jsx)(n.Text, {
                  variant: "text-sm/normal",
                  children:
                    c.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION_DETAILS_UPDATED.format(),
                }),
                (0, r.jsx)(o, {
                  currentNumber: Math.floor(100 * h),
                  thresholdNumber: 10,
                  currentLabel:
                    c.default.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_PROGRESS_LABEL,
                  isPercent: !0,
                }),
              ],
            })),
          (0, r.jsxs)(n.ModalRoot, {
            transitionState: d,
            size: n.ModalSize.MEDIUM,
            className: _.modal,
            "aria-labelledby": E,
            children: [
              (0, r.jsxs)(n.ModalContent, {
                className: _.content,
                children: [
                  (0, r.jsx)(n.Heading, {
                    variant: "heading-xl/semibold",
                    className: _.modalHeader,
                    id: E,
                    children:
                      c.default.Messages
                        .GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
                  }),
                  (0, r.jsx)(n.Text, {
                    className: _.marginAfter,
                    variant: "text-sm/normal",
                    children:
                      c.default.Messages
                        .GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_DEFINITIONS_INTRO,
                  }),
                  (0, r.jsx)("div", { className: _.separator }),
                  s,
                  l,
                  a,
                  (0, r.jsx)("div", { className: _.separator }),
                  (0, r.jsxs)(n.Text, {
                    className: _.marginAfter,
                    color: "header-secondary",
                    id: "health-score-details-score-explain",
                    variant: "text-sm/normal",
                    children: [
                      (0, r.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                      c.default.Messages
                        .GUILD_SETTINGS_DISCOVERY_CHECKLIST_SCORE_EXPLAIN,
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(n.ModalCloseButton, {
                onClick: T,
                className: _.closeButton,
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=815a59756e4eea548523.js.map
