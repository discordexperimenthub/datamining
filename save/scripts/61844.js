(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61844"],
  {
    615992: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useLastChannelMessage: function () {
            return n;
          },
        });
      var a = s("446674"),
        o = s("377253");
      let n = e =>
        (0, a.useStateFromStores)([o.default], () => {
          var t;
          return null !== (t = o.default.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : o.default.getLastMessage(e);
        });
    },
    811578: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return R;
          },
        });
      var a = s("37983"),
        o = s("884691"),
        n = s("65597"),
        l = s("77078"),
        r = s("736964"),
        u = s("377114"),
        d = s("697218"),
        i = s("158998"),
        C = s("615992"),
        c = s("324252"),
        O = s("49111"),
        _ = s("782340"),
        N = s("274375");
      function R(e) {
        let {
            userId: t,
            channelId: s,
            transitionState: R,
            onBlock: T,
            onBlockAndReport: M,
            onClose: I,
            onCancel: A,
          } = e,
          B = (0, C.useLastChannelMessage)(s),
          h = o.useCallback(() => {
            r.default.addRelationship({
              userId: t,
              context: { location: c.LOCATION_CONTEXT_WEB },
              type: O.RelationshipTypes.BLOCKED,
            }),
              (0, l.showToast)(
                (0, l.createToast)(
                  _.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM,
                  l.ToastType.SUCCESS
                )
              );
          }, [t]),
          E = o.useCallback(() => {
            h(), T(), I();
          }, [h, T, I]),
          f = o.useCallback(() => {
            h(),
              (0, u.showReportModalForInappropriateConversationSafetyAlert)(B),
              M(),
              I();
          }, [B, h, M, I]),
          L = (0, n.useStateFromStores)([d.default], () =>
            d.default.getUser(t)
          ),
          S = i.default.useName(L);
        return (0, a.jsx)(l.ModalRoot, {
          transitionState: R,
          children: (0, a.jsx)(l.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, a.jsxs)(l.ModalContent, {
              className: N.modalContent,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: _.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                    name: S,
                  }),
                }),
                (0, a.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: N.modalDescription,
                  children:
                    _.default.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION,
                }),
                (0, a.jsx)(l.Button, {
                  onClick: E,
                  color: l.ButtonColors.BRAND,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    _.default.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON,
                }),
                (0, a.jsx)(l.Button, {
                  onClick: f,
                  color: l.ButtonColors.PRIMARY,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    _.default.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON,
                }),
                (0, a.jsx)(l.Button, {
                  onClick: A,
                  color: l.ButtonColors.PRIMARY,
                  look: l.ButtonLooks.OUTLINED,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    _.default.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON,
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=584043943bf02cc51e5c.js.map
