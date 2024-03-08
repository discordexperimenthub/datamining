(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33938"],
  {
    187317: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return r;
          },
        }),
        t("222007");
      var n = t("37983"),
        d = t("884691"),
        o = t("414456"),
        s = t.n(o),
        _ = t("171210"),
        i = t("77078"),
        E = t("716241"),
        I = t("85448"),
        c = t("945330"),
        l = t("45029"),
        T = t("49111"),
        A = t("782340"),
        N = t("354651");
      function r(e) {
        let { guildId: a, transitionState: t, onClose: o } = e,
          [r, M] = d.useState([]),
          [u, D] = d.useState(),
          R = [
            {
              text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: I.RaidLockdownFeedbackType.DM_SPAM,
            },
            {
              text: A.default.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: I.RaidLockdownFeedbackType.MENTION_SPAM,
            },
            {
              text: A.default.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: I.RaidLockdownFeedbackType.CHANNEL_SPAM,
            },
            {
              text: A.default.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: I.RaidLockdownFeedbackType.SUS_NEW_MEMBERS,
            },
            {
              text: A.default.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: I.RaidLockdownFeedbackType.CHANGING_SETTINGS,
            },
            {
              text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: I.RaidLockdownFeedbackType.OTHER,
            },
          ];
        function O(e) {
          let a = r.includes(e);
          a ? M(a => a.filter(a => a !== e)) : M(a => [...a, e]);
        }
        return null == a
          ? (o(), null)
          : (0, n.jsxs)(i.ModalRoot, {
              transitionState: t,
              size: i.ModalSize.MEDIUM,
              children: [
                (0, n.jsx)(i.ModalHeader, {
                  separator: !0,
                  children: (0, n.jsxs)("div", {
                    className: N.headerContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: N.headerText,
                        children: [
                          (0, n.jsx)(l.default, {
                            color: _.default.INTERACTIVE_NORMAL,
                            width: 16,
                            height: 16,
                          }),
                          (0, n.jsx)(i.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              A.default.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, n.jsx)(i.Clickable, {
                        onClick: o,
                        children: (0, n.jsx)(c.default, {
                          className: N.closeIcon,
                          width: 16,
                          height: 16,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(i.ModalContent, {
                  children: (0, n.jsx)("div", {
                    className: N.options,
                    children: R.map(e => {
                      let { text: a, value: t } = e;
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: s(N.optionContainer, {
                            [N.optionContainerOther]:
                              t === I.RaidLockdownFeedbackType.OTHER,
                          }),
                          children: [
                            (0, n.jsxs)(i.Clickable, {
                              className: N.optionText,
                              onClick: () => O(t),
                              children: [
                                (0, n.jsx)("div", {
                                  children: (0, n.jsx)(i.Checkbox, {
                                    type: i.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: r.includes(t),
                                    onChange: () => O(t),
                                  }),
                                }),
                                (0, n.jsx)(i.Text, {
                                  variant: "text-md/medium",
                                  color: r.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: a,
                                }),
                              ],
                            }),
                            t === I.RaidLockdownFeedbackType.OTHER &&
                              r.includes(I.RaidLockdownFeedbackType.OTHER) &&
                              (0, n.jsx)("div", {
                                className: N.textboxContainer,
                                children: (0, n.jsx)(i.TextArea, {
                                  className: N.serverLockdownReasonText,
                                  placeholder:
                                    A.default.Messages
                                      .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                  onChange: e => D(e),
                                  value: u,
                                  rows: 2,
                                  autoFocus: !0,
                                  flex: !0,
                                }),
                              }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                }),
                (0, n.jsx)(i.ModalFooter, {
                  children: (0, n.jsx)(i.Button, {
                    onClick: function () {
                      (0, E.trackWithMetadata)(
                        T.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK,
                        {
                          raid_lockdown_feedback_type: r,
                          raid_lockdown_feedback_other_reason: u,
                          guild_id: a,
                        }
                      ),
                        o();
                    },
                    color: i.Button.Colors.BRAND_NEW,
                    look: i.Button.Looks.FILLED,
                    submitting: !1,
                    children:
                      A.default.Messages
                        .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT,
                  }),
                }),
              ],
            });
      }
    },
    85448: function (e, a, t) {
      "use strict";
      var n, d, o, s, _, i, E, I;
      function c(e) {
        return e.includes("LEGITIMATE_ACTIVITY")
          ? "LEGITIMATE_ACTIVITY"
          : e.includes("DM_SPAM")
            ? "DM_SPAM"
            : e.includes("JOIN_RAID")
              ? "JOIN_RAID"
              : "OTHER";
      }
      t.r(a),
        t.d(a, {
          Feedback: function () {
            return n;
          },
          RaidAlertType: function () {
            return d;
          },
          RaidResolutionType: function () {
            return o;
          },
          getMostImportantRaidResolutionType: function () {
            return c;
          },
          RaidLockdownFeedbackType: function () {
            return s;
          },
        }),
        t("782340"),
        ((_ = n || (n = {})).BUG = "BUG"),
        (_.ALLOWED = "ALLOWED"),
        (_.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
        ((i = d || (d = {})).JOIN_RAID = "JOIN_RAID"),
        (i.MENTION_RAID = "MENTION_RAID"),
        ((E = o || (o = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
        (E.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
        (E.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
        (E.DM_SPAM = "DM_SPAM"),
        (E.JOIN_RAID = "JOIN_RAID"),
        (E.OTHER = "OTHER"),
        ((I = s || (s = {})).DM_SPAM = "DM_SPAM"),
        (I.MENTION_SPAM = "MENTION_SPAM"),
        (I.CHANNEL_SPAM = "CHANNEL_SPAM"),
        (I.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
        (I.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
        (I.OTHER = "OTHER");
    },
  },
]);
//# sourceMappingURL=2b1e5d358569fa038ef0.js.map
