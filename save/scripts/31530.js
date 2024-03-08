(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31530"],
  {
    583789: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        E = s("414456"),
        n = s.n(E),
        i = s("77078"),
        _ = s("476765"),
        o = s("782340"),
        r = s("840921");
      function I(e) {
        let {
            errorText: t,
            title: s,
            description: E,
            transitionState: I,
            onCancel: u,
            onConfirm: d,
            children: c,
          } = e,
          N = (0, _.useUID)(),
          [L, R] = l.useState(!1),
          T = l.useCallback(async () => {
            R(!0);
            try {
              await d();
            } catch (e) {
              throw e;
            } finally {
              R(!1);
            }
          }, [d]);
        return (0, a.jsxs)(i.ModalRoot, {
          className: r.modal,
          transitionState: I,
          "aria-labelledby": N,
          size: i.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(i.ModalContent, {
              className: r.modalContent,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: N,
                  children: s,
                }),
                null != E && "" !== E
                  ? (0, a.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: r.description,
                      children: E,
                    })
                  : null,
                (0, a.jsx)("div", { className: r.body, children: c }),
                null != t && "" !== t
                  ? (0, a.jsx)(i.Text, {
                      className: r.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: t,
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)(i.ModalFooter, {
              children: [
                (0, a.jsx)(i.Button, {
                  submitting: L,
                  className: r.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: T,
                  children: o.default.Messages.SAVE,
                }),
                (0, a.jsx)(i.Button, {
                  className: n(r.cancelButton, r.button),
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.PRIMARY,
                  onClick: u,
                  children: o.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    161069: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        E = s("77078"),
        n = s("448993"),
        i = s("592407"),
        _ = s("62418"),
        o = s("583789"),
        r = s("49111"),
        I = s("782340"),
        u = s("890957");
      function d(e) {
        let { guild: t, onClose: s, hideColors: d } = e,
          [c, N] = l.useState(t.verificationLevel),
          [L, R] = l.useState(null),
          T = t.hasFeature(r.GuildFeatures.COMMUNITY),
          C = (0, _.generateVerificationLevelOptions)(T, d).filter(
            e => !e.disabled
          ),
          M = l.useCallback(async () => {
            null != L && R(null);
            try {
              await i.default.saveGuild(t.id, { verificationLevel: c }),
                i.default.updateGuild({ verificationLevel: c }),
                s();
            } catch (t) {
              let e = new n.APIError(t);
              R(e.getAnyErrorMessage());
            }
          }, [L, t.id, c, s]);
        return (0, a.jsx)(o.default, {
          ...e,
          title: I.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
          errorText: L,
          onConfirm: M,
          onCancel: s,
          children: (0, a.jsxs)(E.FormSection, {
            children: [
              (0, a.jsx)(E.FormText, {
                type: E.FormText.Types.DESCRIPTION,
                className: u.marginBottom20,
                children:
                  I.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format(),
              }),
              (0, a.jsx)(E.RadioGroup, {
                value: c,
                options: C,
                onChange: e => N(e.value),
              }),
            ],
          }),
        });
      }
    },
    797944: function (e, t, s) {
      "use strict";
      var a, l;
      s.r(t),
        s.d(t, {
          HighlightColors: function () {
            return a;
          },
        }),
        ((l = a || (a = {})).ACCENT = "accent"),
        (l.GREEN = "statusGreen"),
        (l.YELLOW = "statusYellow"),
        (l.ORANGE = "statusOrange"),
        (l.RED = "statusRed"),
        (l.NONE = "transparent");
    },
    62418: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          mapOptionToHighlightedRowOptions: function () {
            return o;
          },
          generateVerificationLevelOptions: function () {
            return r;
          },
          generateContentFilterHighlightedOptions: function () {
            return I;
          },
          generateDmSpamOptions: function () {
            return u;
          },
          generateExplicitImageOptions: function () {
            return d;
          },
        });
      var a = s("151426");
      s("854588");
      var l = s("669491"),
        E = s("797944"),
        n = s("49111"),
        i = s("568456"),
        _ = s("782340");
      function o(e) {
        return e.map(e => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case c("PRIMARY_400"):
                return E.HighlightColors.ACCENT;
              case c("GREEN_360"):
                return E.HighlightColors.GREEN;
              case c("YELLOW_360"):
                return E.HighlightColors.YELLOW;
              case c("ORANGE_345"):
                return E.HighlightColors.ORANGE;
              case c("RED_400"):
                return E.HighlightColors.RED;
              default:
                return E.HighlightColors.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: _.default.Messages.VERIFICATION_LEVEL_NONE,
            desc: _.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: n.VerificationLevels.NONE,
            disabled: e,
            tooltipText: e
              ? _.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: _.default.Messages.VERIFICATION_LEVEL_LOW,
            desc: _.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: n.VerificationLevels.LOW,
            color: t ? void 0 : c("GREEN_360"),
          },
          {
            name: _.default.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: _.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: n.VerificationCriteria.ACCOUNT_AGE,
            }),
            value: n.VerificationLevels.MEDIUM,
            color: t ? void 0 : c("YELLOW_360"),
          },
          {
            name: _.default.Messages.VERIFICATION_LEVEL_HIGH,
            desc: _.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: n.VerificationCriteria.MEMBER_AGE,
            }),
            value: n.VerificationLevels.HIGH,
            color: t ? void 0 : c("ORANGE_345"),
          },
          {
            name: _.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: _.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: n.VerificationLevels.VERY_HIGH,
            color: t ? void 0 : c("RED_400"),
          },
        ];
      }
      function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: _.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: _.default.Messages
              .EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: n.GuildExplicitContentFilterTypes.ALL_MEMBERS,
            color: c("RED_400"),
          },
          {
            name: _.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: _.default.Messages
              .EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: n.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? _.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: c("YELLOW_360"),
          },
          {
            name: _.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: _.default.Messages
              .EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: n.GuildExplicitContentFilterTypes.DISABLED,
            disabled: e,
            tooltipText: e
              ? _.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: c("PRIMARY_400"),
          },
        ];
      }
      function u() {
        return [
          {
            name: _.default.Messages
              .USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: _.default.Messages
              .USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: a.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
            color: c("GREEN_360"),
          },
          {
            name: _.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: _.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: a.DmSpamFilterV2.NON_FRIENDS,
            color: c("YELLOW_360"),
          },
          {
            name: _.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: _.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: a.DmSpamFilterV2.DISABLED,
            color: c("RED_400"),
          },
        ];
      }
      function d() {
        return [
          {
            name: _.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: _.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: i.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
            color: c("GREEN_360"),
          },
          {
            name: _.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: _.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: i.ExplicitContentFilterTypes.NON_FRIENDS,
            color: c("YELLOW_360"),
          },
          {
            name: _.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: _.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: i.ExplicitContentFilterTypes.DISABLED,
            color: c("RED_400"),
          },
        ];
      }
      function c(e) {
        return l.default.unsafe_rawColors[e].css;
      }
    },
  },
]);
//# sourceMappingURL=d2514cb3d90ca2ea5629.js.map
