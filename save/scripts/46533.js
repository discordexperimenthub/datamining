(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46533"],
  {
    343495: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
        }),
        l("222007");
      var o = l("37983"),
        s = l("884691"),
        n = l("750485"),
        a = l("77078"),
        r = l("913144"),
        d = l("376152"),
        u = l("579565"),
        i = l("778695"),
        c = l("782340"),
        C = l("592257"),
        M = function (e) {
          let {
              transitionState: t,
              closeParentModal: l,
              onClose: M,
              dropsQuestId: f,
              platform: h,
              code: p,
              singlePlatformClaim: x,
            } = e,
            [m, j] = s.useState(null),
            [I, N] = s.useState(null != p ? p : null),
            E = (0, u.getDropByQuestId)(f);
          if (
            (s.useEffect(() => {
              null == I && x && O(f, h);
            }, [I, x, f, h]),
            null == E)
          )
            return null;
          let O = (e, t) => {
              (0, d.claimDropsRewardCode)(e, t)
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
                  r.default.wait(async () => {
                    await (0, d.fetchDropsUserStatus)();
                  });
                });
            },
            R = () => {
              l(), (0, a.closeAllModals)();
            };
          return (0, o.jsx)(a.ModalRoot, {
            transitionState: t,
            children:
              null != m
                ? (0, o.jsx)(i.DropsModalClaimErrorBody, {
                    onClose: () => {
                      R();
                    },
                    errorCode: m,
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
                        (0, o.jsxs)(a.ModalHeader, {
                          separator: !1,
                          justify: n.Flex.Justify.BETWEEN,
                          children: [
                            (0, o.jsx)(a.Heading, {
                              variant: "heading-md/medium",
                              children:
                                c.default.Messages.DROPS_MODAL_PLATFORM_CONFIRMATION_TITLE.format(
                                  { platform: (0, u.getPlatformLabel)(h) }
                                ),
                            }),
                            (0, o.jsx)(a.ModalCloseButton, { onClick: R }),
                          ],
                        }),
                        (0, o.jsx)(a.ModalContent, {
                          className: C.modalContent,
                          children: (0, o.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children:
                              c.default.Messages
                                .DROPS_MODAL_CONFIRMATION_WARNING,
                          }),
                        }),
                        (0, o.jsxs)(a.ModalFooter, {
                          justify: n.Flex.Justify.BETWEEN,
                          children: [
                            (0, o.jsx)(a.Button, {
                              onClick: () => {
                                O(f, h);
                              },
                              children: c.default.Messages.CONFIRM,
                            }),
                            (0, o.jsx)(a.Button, {
                              look: a.Button.Looks.LINK,
                              size: a.Button.Sizes.MIN,
                              color: a.Button.Colors.PRIMARY,
                              onClick: M,
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
//# sourceMappingURL=5d17a569d7137da28524.js.map
