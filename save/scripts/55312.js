(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55312"],
  {
    741161: function (e, s, t) {
      "use strict";
      e.exports = t.p + "58bf98682d30fb823326.svg";
    },
    687444: function (e, s, t) {
      "use strict";
      e.exports = t.p + "090a89c5314322102655.svg";
    },
    492094: function (e, s, t) {
      "use strict";
      e.exports = t.p + "a5049a603d8eebb8d728.svg";
    },
    300933: function (e, s, t) {
      "use strict";
      e.exports = t.p + "15253e2e8b246b57f156.svg";
    },
    499474: function (e, s, t) {
      "use strict";
      e.exports = t.p + "e30b03b1854a7d11fb6d.svg";
    },
    576285: function (e, s, t) {
      "use strict";
      e.exports = t.p + "e8c9df78765487a284b7.svg";
    },
    402309: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          useIsMassMentionsDefaultDisabledExperiment: function () {
            return o;
          },
          useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function () {
            return d;
          },
        });
      var a = t("446674"),
        l = t("862205"),
        i = t("957255"),
        n = t("49111");
      let r = (0, l.createExperiment)({
        kind: "guild",
        id: "2022-11_default_disable_mass_mention",
        label: "Disable mass mentions for communities by default",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
        return r.useExperiment(
          { guildId: e, location: "dd4beb_1" },
          { autoTrackExposure: !0 }
        );
      }
      function d(e) {
        var s;
        let t = (0, a.useStateFromStores)([i.default], () =>
            i.default.can(n.Permissions.MANAGE_GUILD, e)
          ),
          { enabled: l } = r.useExperiment(
            {
              guildId:
                null !== (s = null == e ? void 0 : e.id) && void 0 !== s
                  ? s
                  : n.EMPTY_STRING_SNOWFLAKE_ID,
              location: "dd4beb_3",
            },
            { autoTrackExposure: !0 }
          );
        if (null == e) return !1;
        let o = e.hasFeature(n.GuildFeatures.COMMUNITY);
        return t && o && l;
      }
    },
    610903: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return u;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("414456"),
        n = t.n(i),
        r = t("77078"),
        o = t("476765"),
        d = t("782340"),
        c = t("888946");
      let E = e => {
        let { index: s, title: t, selected: l } = e;
        return (0, a.jsxs)("div", {
          className: n(c.overviewStep, { [c.selected]: l }),
          children: [
            (0, a.jsx)(r.Text, {
              className: c.stepIndex,
              variant: "text-sm/normal",
              children: s + 1,
            }),
            (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              className: c.stepTitle,
              children: t,
            }),
          ],
        });
      };
      var u = e => {
        let {
            className: s,
            title: t,
            stepData: i,
            transitionState: u,
            onClose: _,
            completeButtonText: N,
            overviewFooter: M,
            onNextPressed: T,
            onPrevPressed: I,
            onComplete: m,
            sequencerClassName: L,
            initialStep: f = 0,
            forceStep: x,
            submitting: O = !1,
            autoCloseOnComplete: C = !0,
          } = e,
          [S, A] = l.useState([]),
          [p, h] = l.useState(f),
          v = (0, o.useUID)();
        l.useEffect(() => {
          A([...Array(i.length).keys()]);
        }, [i.length]);
        let g = null != x ? x : p,
          D = i[g],
          R = 0 === g,
          j = g === i.length - 1,
          U = null != N ? N : d.default.Messages.DONE,
          b = l.useCallback(() => {
            null == I || I(), h(g - 1);
          }, [I, g, h]);
        return (0, a.jsxs)(r.ModalRoot, {
          size: r.ModalSize.MEDIUM,
          className: n(c.container, s),
          transitionState: u,
          "aria-labelledby": v,
          children: [
            (0, a.jsxs)("div", {
              className: c.overviewSidebar,
              children: [
                (0, a.jsx)(r.Heading, {
                  id: v,
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: t,
                }),
                (0, a.jsx)("div", {
                  className: c.overviewSteps,
                  children: i.map((e, s) =>
                    (0, a.jsx)(
                      E,
                      { index: s, title: e.overviewTitle, selected: s === g },
                      s
                    )
                  ),
                }),
                M,
              ],
            }),
            (0, a.jsxs)("div", {
              className: c.modal,
              children: [
                (0, a.jsxs)(r.ModalContent, {
                  children: [
                    (0, a.jsx)(r.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: _,
                      className: c.closeButton,
                    }),
                    (0, a.jsx)(r.Sequencer, {
                      step: g,
                      steps: S,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: n(c.sequencer, L),
                      innerClassName: c.innerSequencer,
                      children: D.modalContent,
                    }),
                  ],
                }),
                (0, a.jsxs)(r.ModalFooter, {
                  className: c.footer,
                  children: [
                    (0, a.jsx)(r.Button, {
                      type: "submit",
                      submitting: O,
                      onClick: () => {
                        j ? (m(), C && _()) : (null == T || T(), h(g + 1));
                      },
                      color: r.Button.Colors.GREEN,
                      disabled: D.disableNextStep,
                      children: j ? U : d.default.Messages.NEXT,
                    }),
                    R
                      ? null
                      : (0, a.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          size: r.Button.Sizes.MIN,
                          onClick: b,
                          children: d.default.Messages.BACK,
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    79536: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return Q;
          },
        }),
        t("424973"),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        i = t("414456"),
        n = t.n(i),
        r = t("316693"),
        o = t("446674"),
        d = t("669491"),
        c = t("819855"),
        E = t("77078"),
        u = t("402309"),
        _ = t("679653"),
        N = t("592407"),
        M = t("766419"),
        T = t("900938"),
        I = t("610903"),
        m = t("978970"),
        L = t("161778"),
        f = t("923959"),
        x = t("305961"),
        O = t("27618"),
        C = t("697218"),
        S = t("476765"),
        A = t("578706"),
        p = t("68238"),
        h = t("599110"),
        v = t("701909"),
        g = t("991170"),
        D = t("730541"),
        R = t("69741"),
        j = t("49111"),
        U = t("782340"),
        b = t("234327"),
        P = t("741161"),
        F = t("687444"),
        B = t("492094"),
        Y = t("300933"),
        y = t("499474"),
        G = t("576285"),
        k = t("175717");
      let H = e => {
          let {
              guild: s,
              onAcceptVerificationLevel: t,
              onAcceptContentFilter: l,
              disableContentFilter: i,
              disableVerificationLevel: n,
              headerId: r,
              theme: d,
            } = e,
            u = (0, o.useStateFromStores)(
              [x.default],
              () => x.default.getGuild(s.id),
              [s.id]
            ),
            _ = null != u && u.verificationLevel > j.VerificationLevels.NONE,
            N =
              (null == u ? void 0 : u.explicitContentFilter) ===
              j.GuildExplicitContentFilterTypes.ALL_MEMBERS,
            M = (0, c.isThemeDark)(d) ? y : G;
          return (0, a.jsxs)("div", {
            className: b.container,
            children: [
              (0, a.jsxs)("div", {
                className: b.content,
                children: [
                  (0, a.jsx)("img", { alt: "", src: M, width: 80 }),
                  (0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: b.header,
                    id: r,
                    children:
                      U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER,
                  }),
                  (0, a.jsx)(E.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: b.headerCaption,
                    children:
                      U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: b.form,
                children: [
                  (0, a.jsx)(E.FormTitle, {
                    children: U.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
                  }),
                  (0, a.jsx)(E.FormText, {
                    type: E.FormTextTypes.DESCRIPTION,
                    className: b.description,
                    children: _
                      ? U.default.Messages
                          .ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET
                      : U.default.Messages
                          .ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP,
                  }),
                  (0, a.jsx)(E.Checkbox, {
                    type: E.Checkbox.Types.ROW,
                    disabled: n,
                    value: s.verificationLevel > j.VerificationLevels.NONE,
                    onChange: t,
                    children: (0, a.jsx)(E.Text, {
                      variant: "text-sm/normal",
                      children:
                        U.default.Messages
                          .ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: b.form,
                children: [
                  (0, a.jsx)(E.FormTitle, {
                    children:
                      U.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER,
                  }),
                  (0, a.jsx)(E.FormText, {
                    type: E.FormTextTypes.DESCRIPTION,
                    className: b.description,
                    children: N
                      ? U.default.Messages
                          .ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET
                      : U.default.Messages
                          .ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP,
                  }),
                  (0, a.jsx)(E.Checkbox, {
                    type: E.Checkbox.Types.ROW,
                    disabled: i,
                    value:
                      s.explicitContentFilter ===
                      j.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    onChange: l,
                    children: (0, a.jsx)(E.Text, {
                      variant: "text-sm/normal",
                      children: U.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        w = e => {
          let {
            selectableChannels: s,
            onRuleChannelChange: t,
            ruleChannel: i,
            onPublicUpdatesChannelChange: n,
            publicUpdatesChannel: r,
            headerId: o,
            theme: d,
            guildId: u,
          } = e;
          l.useEffect(() => {
            (0, D.trackEnableCommunityFlow)({
              fromStep: R.EnableCommunityModalSteps.SAFETY_CHECK,
              toStep: R.EnableCommunityModalSteps.BASICS,
              guildId: u,
            });
          }, [u]);
          let _ = (0, c.isThemeDark)(d) ? P : F;
          return (0, a.jsxs)("div", {
            className: b.container,
            children: [
              (0, a.jsxs)("div", {
                className: b.content,
                children: [
                  (0, a.jsx)("img", { alt: "", src: _, width: 80 }),
                  (0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: b.header,
                    id: o,
                    children:
                      U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER,
                  }),
                  (0, a.jsx)(E.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: b.headerCaption,
                    children:
                      U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: b.form,
                children: [
                  (0, a.jsx)(E.FormTitle, {
                    children:
                      U.default.Messages
                        .ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE,
                  }),
                  (0, a.jsx)(E.FormText, {
                    type: E.FormTextTypes.DESCRIPTION,
                    className: b.description,
                    children:
                      U.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP,
                  }),
                  (0, a.jsx)(E.SearchableSelect, {
                    options: s,
                    onChange: t,
                    value: i,
                    maxVisibleItems: 4,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: b.form,
                children: [
                  (0, a.jsx)(E.FormTitle, {
                    children:
                      U.default.Messages
                        .GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE,
                  }),
                  (0, a.jsx)(E.FormText, {
                    type: E.FormTextTypes.DESCRIPTION,
                    className: b.description,
                    children:
                      U.default.Messages
                        .GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP,
                  }),
                  (0, a.jsx)(E.SearchableSelect, {
                    options: s,
                    onChange: n,
                    value: r,
                    popoutPosition: "top",
                    maxVisibleItems: 4,
                  }),
                ],
              }),
            ],
          });
        },
        V = e => {
          let {
              guild: s,
              policyAccepted: t,
              everyoneRolePermissionsAccepted: i,
              onAcceptPolicy: r,
              onAcceptDefaultNotifications: o,
              onAcceptEveryoneRolePermissions: d,
              disableDefaultNotifications: u,
              disableEveryoneRolePermissions: _,
              headerId: N,
              theme: M,
            } = e,
            T = (0, c.isThemeDark)(M) ? B : Y;
          return (
            l.useEffect(() => {
              (0, D.trackEnableCommunityFlow)({
                fromStep: R.EnableCommunityModalSteps.BASICS,
                toStep: R.EnableCommunityModalSteps.FINISH,
                guildId: s.id,
              });
            }, [s.id]),
            (0, a.jsxs)("div", {
              className: b.container,
              children: [
                (0, a.jsxs)("div", {
                  className: b.content,
                  children: [
                    (0, a.jsx)("img", { alt: "", src: T, width: 80 }),
                    (0, a.jsx)(E.Heading, {
                      variant: "heading-xl/semibold",
                      className: b.header,
                      id: N,
                      children:
                        U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER,
                    }),
                    (0, a.jsx)(E.Text, {
                      color: "none",
                      variant: "text-md/normal",
                      className: b.headerCaption,
                      children:
                        U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: b.form,
                  children: (0, a.jsx)(E.Tooltip, {
                    text: u
                      ? U.default.Messages
                          .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP
                      : null,
                    "aria-label":
                      !!u &&
                      U.default.Messages
                        .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                    children: e =>
                      (0, a.jsx)("div", {
                        ...e,
                        children: (0, a.jsx)(E.Checkbox, {
                          type: E.Checkbox.Types.ROW,
                          disabled: u,
                          value:
                            s.defaultMessageNotifications ===
                            j.UserNotificationSettings.ONLY_MENTIONS,
                          onChange: o,
                          className: n({ [b.disabled]: u }),
                          children: (0, a.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            children:
                              U.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format(
                                {
                                  infoHook: () =>
                                    (0, a.jsx)(E.Tooltip, {
                                      text: U.default.Messages
                                        .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                      "aria-label":
                                        U.default.Messages
                                          .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                      children: e =>
                                        (0, a.jsx)(p.default, {
                                          className: b.icon,
                                          ...e,
                                        }),
                                    }),
                                }
                              ),
                          }),
                        }),
                      }),
                  }),
                }),
                (0, a.jsx)(E.Tooltip, {
                  text: _
                    ? U.default.Messages
                        .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP
                    : null,
                  "aria-label":
                    !!_ &&
                    U.default.Messages
                      .ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                  children: e =>
                    (0, a.jsx)("div", {
                      ...e,
                      className: b.checkboxOption,
                      children: (0, a.jsx)(E.Checkbox, {
                        type: E.Checkbox.Types.ROW,
                        disabled: _,
                        value: i,
                        onChange: d,
                        className: n({ [b.disabled]: _ }),
                        children: (0, a.jsx)(E.Text, {
                          variant: "text-sm/normal",
                          children:
                            U.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format(
                              {
                                infoHook: () =>
                                  (0, a.jsx)(E.Tooltip, {
                                    text: U.default.Messages
                                      .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                    "aria-label":
                                      U.default.Messages
                                        .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                    children: e =>
                                      (0, a.jsx)(p.default, {
                                        className: b.icon,
                                        ...e,
                                      }),
                                  }),
                              }
                            ),
                        }),
                      }),
                    }),
                }),
                (0, a.jsxs)("div", {
                  className: b.form,
                  children: [
                    (0, a.jsx)(E.FormTitle, {
                      children: U.default.Messages.PUBLIC_GUILD_POLICY_TITLE,
                    }),
                    (0, a.jsx)(E.FormText, {
                      type: E.FormTextTypes.DESCRIPTION,
                      className: b.description,
                      children:
                        U.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format(
                          {
                            communityGuidelines: v.default.getArticleURL(
                              j.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES
                            ),
                            typesOfGuilds: v.default.getArticleURL(
                              j.HelpdeskArticles
                                .FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES
                            ),
                          }
                        ),
                    }),
                    (0, a.jsx)(E.Checkbox, {
                      type: E.Checkbox.Types.ROW,
                      value: t,
                      onChange: r,
                      children: (0, a.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        children: U.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function W(e) {
        let { guild: s } = e,
          t = (0, o.useStateFromStores)([x.default], () =>
            x.default.getRole(s.id, s.getEveryoneRoleId())
          );
        if (null == t) return null;
        let { name: l, color: i } = t;
        return (0, a.jsx)("div", {
          className: b.role,
          children: (0, a.jsxs)("span", {
            className: b.roleRow,
            children: [
              (0, a.jsx)(E.RoleDot, {
                className: b.roleDot,
                color: i.toString(),
                background: !1,
                tooltip: !1,
              }),
              (0, a.jsx)(E.Text, {
                className: b.roleName,
                variant: "text-sm/medium",
                color: "interactive-active",
                children: l,
              }),
            ],
          }),
        });
      }
      function K(e) {
        let { enabledPermissions: s, onGetPermisisonName: t } = e;
        return (0, a.jsxs)("div", {
          className: b.tableContainer,
          children: [
            (0, a.jsx)(E.Text, {
              className: b.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                U.default.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS,
            }),
            (0, a.jsx)("div", {
              className: b.permissionsTable,
              children: s.map((e, s) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: b.permissionRow,
                    children: [
                      (0, a.jsx)("div", { className: b.bulletWarning }),
                      (0, a.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: t(e),
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          ],
        });
      }
      function X(e) {
        let { disabledPermissions: s, onGetPermisisonName: t } = e,
          l =
            U.default.Messages
              .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
        return (
          s.length === R.MODERATOR_PERMISSIONS.length &&
            (l =
              U.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED),
          (0, a.jsxs)("div", {
            className: b.tableContainer,
            children: [
              (0, a.jsx)(E.Text, {
                className: b.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: l,
              }),
              (0, a.jsx)("div", {
                className: b.permissionsTable,
                children: s.map((e, s) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: b.permissionRow,
                      children: [
                        (0, a.jsx)("div", { className: b.bullet }),
                        (0, a.jsx)(E.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: t(e),
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          })
        );
      }
      function q(e) {
        let { permissions: s } = e,
          t = e => {
            switch (e.toString()) {
              case j.Permissions.MENTION_EVERYONE.toString():
                return U.default.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
              case j.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
                return U.default.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
              case j.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
                return U.default.Messages
                  .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
              default:
                return (0, m.getPermissionName)(e);
            }
          },
          { enabledPermissions: l, disabledPermissions: i } = s;
        return (0, a.jsxs)("div", {
          className: b.table,
          children: [
            0 !== l.length
              ? (0, a.jsx)(K, { enabledPermissions: l, onGetPermisisonName: t })
              : null,
            (0, a.jsx)(X, { disabledPermissions: i, onGetPermisisonName: t }),
          ],
        });
      }
      let z = e => {
        let {
            guild: s,
            policyAccepted: t,
            onAcceptPolicy: i,
            headerId: n,
            theme: r,
          } = e,
          o = (0, c.isThemeDark)(r) ? B : Y;
        l.useEffect(() => {
          (0, D.trackEnableCommunityFlow)({
            fromStep: R.EnableCommunityModalSteps.BASICS,
            toStep: R.EnableCommunityModalSteps.FINISH,
            guildId: s.id,
          });
        }, [s.id]);
        let u = l.useMemo(() => {
          let e = [],
            t = [];
          return (
            R.MODERATOR_PERMISSIONS.map(a => {
              let l = g.default.canEveryone(a, s);
              l ? e.push(a) : t.push(a);
            }),
            { enabledPermissions: e, disabledPermissions: t }
          );
        }, [s]);
        return (0, a.jsxs)("div", {
          className: b.container,
          children: [
            (0, a.jsxs)("div", {
              className: b.content,
              children: [
                (0, a.jsx)("img", { alt: "", src: o, width: 80 }),
                (0, a.jsx)(E.Heading, {
                  variant: "heading-xl/semibold",
                  className: b.updatedHeader,
                  id: n,
                  children:
                    U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: b.updatedForm,
              children: [
                (0, a.jsx)(E.FormTitle, {
                  className: b.formTitle,
                  children:
                    U.default.Messages
                      .ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL,
                }),
                (0, a.jsxs)("div", {
                  className: b.checklistRow,
                  children: [
                    (0, a.jsx)(A.default, {
                      className: b.checklistIcon,
                      color: d.default.unsafe_rawColors.GREEN_360.css,
                      backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
                    }),
                    (0, a.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children:
                        U.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format(
                          {
                            infoHook: () =>
                              (0, a.jsx)(E.Tooltip, {
                                text: U.default.Messages
                                  .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                "aria-label":
                                  U.default.Messages
                                    .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                children: e =>
                                  (0, a.jsx)(p.default, {
                                    className: b.icon,
                                    ...e,
                                  }),
                              }),
                          }
                        ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: b.checklistRow,
                  children: [
                    (0, a.jsx)(A.default, {
                      className: b.checklistIcon,
                      color: d.default.unsafe_rawColors.GREEN_360.css,
                      backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
                    }),
                    (0, a.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children:
                        U.default.Messages
                          .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED,
                    }),
                    (0, a.jsx)(W, { guild: s }),
                  ],
                }),
                (0, a.jsx)(q, { permissions: u }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: b.updatedForm,
              children: [
                (0, a.jsx)(E.FormTitle, {
                  className: b.formTitle,
                  children: U.default.Messages.PUBLIC_GUILD_POLICY_TITLE,
                }),
                (0, a.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: b.description,
                  children:
                    U.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format(
                      {
                        communityGuidelines: v.default.getArticleURL(
                          j.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES
                        ),
                        typesOfGuilds: v.default.getArticleURL(
                          j.HelpdeskArticles
                            .FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES
                        ),
                      }
                    ),
                }),
                (0, a.jsx)(E.Checkbox, {
                  type: E.Checkbox.Types.ROW,
                  value: t,
                  onChange: i,
                  children: (0, a.jsx)(E.Text, {
                    className: b.acceptText,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: U.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT,
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Q = e => {
        var s;
        let { transitionState: t, onClose: i } = e;
        l.useEffect(() => {
          h.default.track(j.AnalyticEvents.OPEN_MODAL, {
            type: R.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
          });
        }, []);
        let { guild: n } = (0, o.useStateFromStoresObject)([T.default], () =>
            T.default.getProps()
          ),
          d = (0, o.useStateFromStores)([L.default], () => L.default.theme),
          [c, E] = l.useState(!1),
          [m, A] = l.useState(
            !R.MODERATOR_PERMISSIONS.some(e => g.default.canEveryone(e, n))
          ),
          [p, v] = l.useState(R.CREATE_NEW_CHANNEL_VALUE),
          [D, P] = l.useState(R.CREATE_NEW_CHANNEL_VALUE),
          [F] = l.useState(null == n ? void 0 : n.defaultMessageNotifications),
          [B] = l.useState(null == n ? void 0 : n.verificationLevel),
          [Y] = l.useState(null == n ? void 0 : n.explicitContentFilter),
          [y] = l.useState(m),
          G = (0, o.useStateFromStores)([x.default], () =>
            null != n ? x.default.getRole(n.id, n.getEveryoneRoleId()) : void 0
          ),
          W = (0, o.useStateFromStores)([f.default], () =>
            null != n ? f.default.getChannels(n.id) : null
          ),
          K = (0, S.useUID)(),
          { enabled: X } = (0, u.useIsMassMentionsDefaultDisabledExperiment)(
            null !== (s = null == n ? void 0 : n.id) && void 0 !== s
              ? s
              : j.EMPTY_STRING_SNOWFLAKE_ID
          );
        if (null == n) return null;
        let q = [
          {
            value: R.CREATE_NEW_CHANNEL_VALUE,
            label: U.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL,
          },
        ];
        W[(0, f.GUILD_SELECTABLE_CHANNELS_KEY)].forEach(e => {
          let { channel: s } = e;
          s.type === j.ChannelTypes.GUILD_TEXT &&
            q.push({
              value: s.id,
              label: (0, _.computeChannelName)(s, C.default, O.default, !0),
            });
        });
        let Q = B !== j.VerificationLevels.NONE,
          J = Y === j.GuildExplicitContentFilterTypes.ALL_MEMBERS,
          Z = F === j.UserNotificationSettings.ONLY_MENTIONS,
          $ = async () => {
            if (null == G || !c) return;
            let e = new Set(n.features);
            e.add(j.GuildFeatures.COMMUNITY);
            let s = m
                ? r.default.remove(G.permissions, R.MODERATOR_PERMISSIONS_FLAG)
                : G.permissions,
              t = { ...G, permissions: s };
            s !== G.permissions && (await (0, M.saveRoleSettings)(n.id, [t])),
              N.default.updateGuild({
                features: e,
                rulesChannelId: p,
                publicUpdatesChannelId: D,
              }),
              await N.default.saveGuild(n.id, {
                features: e,
                rulesChannelId: p,
                verificationLevel: n.verificationLevel,
                explicitContentFilter: n.explicitContentFilter,
                publicUpdatesChannelId: D,
                defaultMessageNotifications: n.defaultMessageNotifications,
              }),
              setTimeout(() => {
                i();
              }, 0);
          },
          ee = (0, a.jsx)(H, {
            guild: n,
            disableVerificationLevel: Q,
            disableContentFilter: J,
            onAcceptVerificationLevel: (e, s) => {
              if (!s) {
                N.default.updateGuild({ verificationLevel: B });
                return;
              }
              s &&
                N.default.updateGuild({
                  verificationLevel: j.VerificationLevels.LOW,
                });
            },
            onAcceptContentFilter: (e, s) => {
              if (!s) {
                N.default.updateGuild({ explicitContentFilter: Y });
                return;
              }
              N.default.updateGuild({
                explicitContentFilter:
                  j.GuildExplicitContentFilterTypes.ALL_MEMBERS,
              });
            },
            headerId: K,
            theme: d,
          }),
          es = (0, a.jsx)(w, {
            selectableChannels: q,
            onRuleChannelChange: e => {
              v(e);
            },
            onPublicUpdatesChannelChange: e => {
              P(e);
            },
            ruleChannel: p,
            publicUpdatesChannel: D,
            headerId: K,
            theme: d,
            guildId: n.id,
          }),
          et = X
            ? (0, a.jsx)(z, {
                guild: n,
                policyAccepted: c,
                onAcceptPolicy: (e, s) => {
                  if (s) {
                    E(!0),
                      !Z &&
                        N.default.updateGuild({
                          defaultMessageNotifications:
                            j.UserNotificationSettings.ONLY_MENTIONS,
                        }),
                      !m && null != G && A(!0);
                    return;
                  }
                  E(!1),
                    Z &&
                      N.default.updateGuild({ defaultMessageNotifications: F }),
                    m && null != G && A(!1);
                },
                headerId: K,
                theme: d,
              })
            : (0, a.jsx)(V, {
                guild: n,
                disableDefaultNotifications: Z,
                disableEveryoneRolePermissions: y,
                policyAccepted: c,
                everyoneRolePermissionsAccepted: m,
                onAcceptPolicy: (e, s) => {
                  if (s) {
                    E(!0);
                    return;
                  }
                  E(!1);
                },
                onAcceptDefaultNotifications: (e, s) => {
                  if (!s) {
                    N.default.updateGuild({ defaultMessageNotifications: F });
                    return;
                  }
                  N.default.updateGuild({
                    defaultMessageNotifications:
                      j.UserNotificationSettings.ONLY_MENTIONS,
                  });
                },
                onAcceptEveryoneRolePermissions: (e, s) => {
                  null != G && (s ? A(!0) : A(!1));
                },
                headerId: K,
                theme: d,
              }),
          ea = (0, a.jsx)("img", {
            alt: "",
            src: k,
            className: b.footerImage,
            width: 240,
          }),
          el = [
            {
              modalContent: ee,
              disableNextStep:
                n.explicitContentFilter !==
                  j.GuildExplicitContentFilterTypes.ALL_MEMBERS ||
                n.verificationLevel === j.VerificationLevels.NONE,
              overviewTitle:
                U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE,
            },
            {
              modalContent: es,
              disableNextStep: null == p || null == D,
              overviewTitle:
                U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE,
            },
            {
              modalContent: et,
              disableNextStep: !c,
              overviewTitle:
                U.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE,
            },
          ];
        return (0, a.jsx)(I.default, {
          stepData: el,
          title: U.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
          transitionState: t,
          onClose: () => {
            i(),
              h.default.track(j.AnalyticEvents.MODAL_DISMISSED, {
                type: R.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
              });
          },
          completeButtonText: U.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
          onComplete: $,
          overviewFooter: ea,
          sequencerClassName: b.container,
          autoCloseOnComplete: !1,
        });
      };
    },
  },
]);
//# sourceMappingURL=94f174f8128130baa560.js.map
