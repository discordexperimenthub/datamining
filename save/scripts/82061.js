(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82061"],
  {
    814831: function (e, t, a) {
      "use strict";
      e.exports = a.p + "a2e6c7df5d20d1aeaacb.svg";
    },
    903800: function (e, t, a) {
      "use strict";
      e.exports = a.p + "86e12f1a8f38a302c543.svg";
    },
    87657: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var s = a("37983"),
        r = a("884691"),
        n = a("77078"),
        i = a("390236"),
        l = r.memo(function (e) {
          var t, a, l, o;
          let {
              user: d,
              size: u = n.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...R
            } = e,
            E = r.useContext(i.default);
          return (0, s.jsx)(n.Avatar, {
            src:
              ((t = d),
              (a = (0, n.getAvatarSize)(u)),
              (l = c),
              (o = E),
              t.getAvatarURL(o, a, l)),
            size: u,
            "aria-label": f ? void 0 : d.username,
            "aria-hidden": f,
            ...R,
          });
        });
    },
    878551: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        }),
        a("222007");
      var s = a("37983"),
        r = a("884691"),
        n = a("759843"),
        i = a("77078"),
        l = a("54239"),
        o = a("87657"),
        d = a("428958"),
        u = a("592407"),
        c = a("915639"),
        f = a("145131"),
        R = a("956089"),
        E = a("315102"),
        _ = a("387111"),
        T = a("158998"),
        N = a("49111"),
        I = a("474695"),
        m = a("782340"),
        S = a("272916");
      let A = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : c.default.locale;
        return "https://"
          .concat(N.SUPPORT_DOMAIN, "/hc/")
          .concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
      };
      function p(e) {
        let {
            guild: t,
            toUser: c,
            fromUser: p,
            onClose: O,
            transitionState: h,
          } = e,
          [x, g] = r.useState(!1),
          v =
            t.hasFeature(N.GuildFeatures.VERIFIED) ||
            t.hasFeature(N.GuildFeatures.PARTNERED),
          F = v
            ? m.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED
            : null,
          C = v
            ? m.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format(
                { ticketUrl: A() }
              )
            : null,
          M =
            t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        async function L(e) {
          await u.default.transferOwnership(
            t.id,
            c.id,
            I.TransferOwnershipVerificationTypes.EMAIL,
            e
          );
        }
        async function P() {
          await u.default.sendTransferOwnershipPincode(t.id, !0);
        }
        async function D(e) {
          e.preventDefault(), O();
          try {
            p.mfaEnabled || null == p.email
              ? (await u.default.transferOwnership(
                  t.id,
                  c.id,
                  p.mfaEnabled ? I.TransferOwnershipVerificationTypes.MFA : null
                ),
                (0, l.popLayer)())
              : (await u.default.sendTransferOwnershipPincode(t.id),
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await a
                    .el("644512")
                    .then(a.bind(a, "644512"));
                  return t =>
                    (0, s.jsx)(e, {
                      ...t,
                      onFormSubmit: L,
                      onResend: P,
                      onSuccess: l.popLayer,
                      headerText: m.default.Messages.TRANSFER_OWNERSHIP,
                      confirmButtonText: m.default.Messages.TRANSFER_OWNERSHIP,
                      confirmButtonColor: i.Button.Colors.RED,
                      impressionName:
                        n.ImpressionNames
                          .GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                    });
                }));
          } catch (e) {
            e.body.code ===
              N.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
              (0, i.openModal)(e =>
                (0, s.jsx)(i.ConfirmModal, {
                  ...e,
                  header:
                    m.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
                  confirmText: m.default.Messages.GOT_IT,
                  confirmButtonColor: i.Button.Colors.BRAND,
                  children: (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children:
                      m.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format(
                        {
                          server_subscription_owner_transfer_article:
                            N.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL,
                        }
                      ),
                  }),
                })
              );
          }
        }
        (0, d.default)({
          type: n.ImpressionTypes.MODAL,
          name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
        });
        let y = _.default.getNickname(t.id, void 0, c),
          j = c.hasAvatarForGuild(t.id),
          b = () =>
            (0, s.jsxs)("span", {
              className: S.guildTransfer,
              children: [
                null != t.icon
                  ? (0, s.jsx)(i.Avatar, {
                      src: E.default.getGuildIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: 16,
                      }),
                      size: i.AvatarSizes.SIZE_16,
                      className: S.miniGuildIcon,
                      "aria-hidden": !0,
                    })
                  : null,
                (0, s.jsx)(i.Text, {
                  className: S.guildName,
                  variant: "text-sm/bold",
                  children: t.toString(),
                }),
              ],
            });
        return (0, s.jsx)(i.ModalRoot, {
          transitionState: h,
          children: (0, s.jsxs)("form", {
            onSubmit: D,
            children: [
              (0, s.jsx)(i.ModalHeader, {
                separator: !1,
                children: (0, s.jsx)(i.Heading, {
                  variant: "heading-lg/semibold",
                  className: S.header,
                  children: m.default.Messages.TRANSFER_OWNERSHIP,
                }),
              }),
              (0, s.jsxs)(i.ModalContent, {
                children: [
                  (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: S.subHeader,
                    children:
                      null != y || j
                        ? m.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format(
                            {
                              GuildHook: b,
                              user: (0, T.getUserTag)(c),
                              AKAHook: function () {
                                return (0, s.jsxs)("span", {
                                  className: S.akaTransfer,
                                  children: [
                                    (0, s.jsx)(R.TextBadge, {
                                      text: m.default.Messages.AKA,
                                      disableColor: !0,
                                      className: S.akaBadge,
                                    }),
                                    j
                                      ? (0, s.jsx)(i.Avatar, {
                                          src: c.getAvatarURL(t.id, 16, !0),
                                          size: i.AvatarSizes.SIZE_16,
                                          className: S.miniAvatar,
                                          "aria-hidden": !0,
                                        })
                                      : null,
                                    (0, s.jsx)(i.Text, {
                                      className: S.nickname,
                                      variant: "text-sm/normal",
                                      children:
                                        null != y ? y : T.default.getName(c),
                                    }),
                                  ],
                                });
                              },
                            }
                          )
                        : m.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format(
                            { GuildHook: b, user: (0, T.getUserTag)(c) }
                          ),
                  }),
                  (0, s.jsxs)(f.default, {
                    className: S.fromToWrapper,
                    justify: f.default.Justify.CENTER,
                    children: [
                      (0, s.jsx)("div", {
                        className: S.from,
                        children: (0, s.jsx)(o.default, {
                          user: p,
                          size: i.AvatarSizes.SIZE_80,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: S.to,
                        children: (0, s.jsx)(o.default, {
                          user: c,
                          size: i.AvatarSizes.SIZE_80,
                        }),
                      }),
                    ],
                  }),
                  M &&
                    (0, s.jsx)(i.FormText, {
                      type: i.FormText.Types.DESCRIPTION,
                      className: S.roleSubscriptionText,
                      children:
                        m.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format(
                          {
                            server_subscription_owner_transfer_article:
                              N.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL,
                          }
                        ),
                    }),
                  (0, s.jsx)(i.FormSwitch, {
                    disabled: v,
                    tooltipNote: F,
                    hideBorder: !0,
                    value: x,
                    onChange: function (e) {
                      g(e);
                    },
                    children: (0, s.jsx)(i.FormText, {
                      type: i.FormText.Types.DESCRIPTION,
                      children:
                        m.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format(
                          { username: (0, T.getUserTag)(c) }
                        ),
                    }),
                  }),
                  (0, s.jsx)(i.FormText, {
                    className: S.protectedText,
                    type: i.FormText.Types.DEFAULT,
                    children: C,
                  }),
                ],
              }),
              (0, s.jsxs)(i.ModalFooter, {
                children: [
                  (0, s.jsx)(i.Button, {
                    type: "submit",
                    disabled: !x,
                    color: i.Button.Colors.RED,
                    children: m.default.Messages.TRANSFER_OWNERSHIP,
                  }),
                  (0, s.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: O,
                    children: m.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    428958: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return N;
          },
        });
      var s = a("884691"),
        r = a("714617"),
        n = a.n(r),
        i = a("995008"),
        l = a.n(i),
        o = a("759843"),
        d = a("913144"),
        u = a("42203"),
        c = a("18494"),
        f = a("162771"),
        R = a("599110"),
        E = a("716241"),
        _ = a("939011");
      let T = (0, o.trackMaker)({
        analyticEventConfigs: R.AnalyticEventConfigs,
        dispatcher: d.default,
        TRACK_ACTION_NAME: "TRACK",
      });
      function N(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { disableTrack: !1, trackOnInitialLoad: !1 },
          a = arguments.length > 2 ? arguments[2] : void 0,
          r = s.useRef(),
          i = s.useRef();
        s.useEffect(
          () => {
            let s = !n(r.current, e);
            s && (r.current = e);
            let d = !n(i.current, a);
            if ((d && (i.current = a), !s && !d)) return;
            let N = { ...e, sequenceId: l("impression_") };
            return (
              !(function (e) {
                var t, a;
                let s =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  { name: r, type: n, properties: i } = e;
                if (
                  e.type === o.ImpressionTypes.MODAL &&
                  null == e.name &&
                  (0, _.getImpressionStack)().some(e => {
                    var t;
                    return null === (t = e._stackContext) || void 0 === t
                      ? void 0
                      : t.isSlide;
                  })
                )
                  return;
                (0, _.setCurrentImpression)(e);
                let l =
                    null !== (t = null == i ? void 0 : i.guild_id) &&
                    void 0 !== t
                      ? t
                      : f.default.getGuildId(),
                  d =
                    null !== (a = null == i ? void 0 : i.channel_id) &&
                    void 0 !== a
                      ? a
                      : c.default.getChannelId(l),
                  N = (0, R.expandEventProperties)({
                    impression_type: n,
                    location: (0, _.getLocation)(),
                    ...(0, E.collectGuildAnalyticsMetadata)(l),
                    ...(0, E.collectChannelAnalyticsMetadata)(
                      u.default.getChannel(d)
                    ),
                    ...i,
                  });
                if (s) {
                  (0, _.setDebugTrackedData)(null, null);
                  return;
                }
                null != r && null != n && ((0, R.debugLogEvent)(r, N), T(r, N)),
                  (0, _.setDebugTrackedData)(r, N);
              })(N, t.disableTrack),
              () => {
                null != N && (0, _.cleanupImpression)(N);
              }
            );
          },
          t.trackOnInitialLoad ? [] : void 0
        );
      }
    },
    390236: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var s = a("884691");
      let r = s.createContext(void 0);
      var n = r;
    },
    474695: function (e, t, a) {
      "use strict";
      var s, r, n, i;
      a.r(t),
        a.d(t, {
          TransferOwnershipVerificationTypes: function () {
            return r;
          },
        }),
        ((n = s || (s = {})).TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP"),
        (n.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE"),
        ((i = r || (r = {})).MFA = "mfa"),
        (i.SMS = "sms"),
        (i.EMAIL = "email");
    },
  },
]);
//# sourceMappingURL=96ab0ad8bcec753de2c2.js.map
