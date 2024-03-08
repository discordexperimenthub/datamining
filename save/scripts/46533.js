(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46533"],
  {
    343495: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        }),
        l("222007");
      var o = l("37983"),
        s = l("884691"),
        a = l("750485"),
        n = l("77078"),
        d = l("913144"),
        r = l("376152"),
        u = l("579565"),
        i = l("778695"),
        c = l("782340"),
        f = l("592257"),
        C = function (e) {
          let {
              transitionState: t,
              closeParentModal: l,
              onClose: C,
              dropsQuestId: M,
              platform: h,
              code: p,
              singlePlatformClaim: m,
            } = e,
            [x, j] = s.useState(null),
            [I, N] = s.useState(null != p ? p : null),
            E = (0, u.getDropByQuestId)(M);
          if (
            (s.useEffect(() => {
              null == I && m && O(M, h);
            }, [I, m, M, h]),
            null == E)
          )
            return null;
          let O = (e, t) => {
              (0, r.claimDropsRewardCode)(e, t)
                .then(e => N(e))
                .catch(e => {
                  var t;
                  return j(
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.code
                  );
                })
                .then(() => {
                  d.default.wait(async () => {
                    await (0, r.fetchDropsUserStatus)();
                  });
                });
            },
            R = () => {
              l(), (0, n.closeAllModals)();
            };
          return (0, o.jsx)(n.ModalRoot, {
            transitionState: t,
            children:
              null != x
                ? (0, o.jsx)(i.DropsModalClaimErrorBody, {
                    onClose: () => {
                      R();
                    },
                    errorCode: x,
                  })
                : null !== I
                  ? (0, o.jsx)(i.DropsCopyCodeModalContent, {
                      bodyText: E.messages.claimTip(),
                      onClose: R,
                      copyInputTitle: c.default.Messages.REDEMPTION_CODE,
                      code: I,
                    })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsxs)(n.ModalHeader, {
                          separator: !1,
                          justify: a.default.Justify.BETWEEN,
                          children: [
                            (0, o.jsx)(n.Heading, {
                              variant: "heading-md/medium",
                              children:
                                c.default.Messages.DROPS_MODAL_PLATFORM_CONFIRMATION_TITLE.format(
                                  { platform: (0, u.getPlatformLabel)(h) }
                                ),
                            }),
                            (0, o.jsx)(n.ModalCloseButton, { onClick: R }),
                          ],
                        }),
                        (0, o.jsx)(n.ModalContent, {
                          className: f.modalContent,
                          children: (0, o.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children:
                              c.default.Messages
                                .DROPS_MODAL_CONFIRMATION_WARNING,
                          }),
                        }),
                        (0, o.jsxs)(n.ModalFooter, {
                          justify: a.default.Justify.BETWEEN,
                          children: [
                            (0, o.jsx)(n.Button, {
                              onClick: () => {
                                O(M, h);
                              },
                              children: c.default.Messages.CONFIRM,
                            }),
                            (0, o.jsx)(n.Button, {
                              look: n.Button.Looks.LINK,
                              size: n.Button.Sizes.MIN,
                              color: n.Button.Colors.PRIMARY,
                              onClick: C,
                              children: c.default.Messages.BACK,
                            }),
                          ],
                        }),
                      ],
                    }),
          });
        };
    },
  },
]);
//# sourceMappingURL=4fef881b4ff09b3542f6.js.map
