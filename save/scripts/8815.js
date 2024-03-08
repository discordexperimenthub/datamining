(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8815"],
  {
    228944: function (e, t, n) {
      "use strict";
      var o, r;
      n.r(t),
        n.d(t, {
          AutomodAlertActionType: function () {
            return o;
          },
          parseAlertActionsExecution: function () {
            return s;
          },
        }),
        ((r = o || (o = {}))[(r.SET_COMPLETED = 1)] = "SET_COMPLETED"),
        (r[(r.UNSET_COMPLETED = 2)] = "UNSET_COMPLETED"),
        (r[(r.DELETE_USER_MESSAGE = 3)] = "DELETE_USER_MESSAGE"),
        (r[(r.SUBMIT_FEEDBACK = 4)] = "SUBMIT_FEEDBACK");
      function s(e) {
        if (null == e) return null;
        let t = (function (e) {
          if (null == e) return null;
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        })(e);
        return null == t || null == t.actions
          ? null
          : (Object.keys(t.actions).forEach(e => {
              t.actions[e].actionType = e;
            }),
            t);
      }
    },
    593486: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var o = n("37983"),
        r = n("884691"),
        s = n("77078"),
        a = n("716241"),
        l = n("228944"),
        i = n("85448"),
        c = n("702873"),
        E = n("49111"),
        u = n("782340"),
        d = n("349031");
      function _(e) {
        let { automodDecision: t, transitionState: n, onClose: _ } = e,
          A = r.useCallback(() => {
            (0, a.trackWithMetadata)(E.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: i.Feedback.BUG,
              decision_id: t.decisionId,
              message_id: t.messageId,
              content: t.messageContent,
            }),
              (0, c.executeAlertAction)(
                t.messageId,
                t.channel,
                l.AutomodAlertActionType.SUBMIT_FEEDBACK
              ),
              _();
          }, [t, _]);
        return (0, o.jsxs)(s.ModalRoot, {
          transitionState: n,
          size: s.ModalSize.SMALL,
          children: [
            (0, o.jsx)(s.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(s.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children:
                  u.default.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_TITLE,
              }),
            }),
            (0, o.jsx)(s.ModalContent, {
              children: (0, o.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  u.default.Messages
                    .GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_SUBTITLE,
              }),
            }),
            (0, o.jsxs)(s.ModalFooter, {
              children: [
                (0, o.jsx)("div", {
                  className: d.button,
                  children: (0, o.jsx)(s.Button, {
                    onClick: A,
                    color: s.Button.Colors.BRAND_NEW,
                    look: s.Button.Looks.FILLED,
                    children: u.default.Messages.YES_TEXT,
                  }),
                }),
                (0, o.jsx)(s.Button, {
                  onClick: _,
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  children: u.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=378b7c3ba1c46651e01b.js.map
