(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1178"],
  {
    730153: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return D;
          },
        }),
        u("222007");
      var l = u("37983"),
        a = u("884691"),
        s = u("446674"),
        d = u("77078"),
        n = u("272030"),
        o = u("901582"),
        i = u("448993"),
        r = u("861370"),
        _ = u("305961"),
        c = u("454686"),
        M = u("353575"),
        E = u("702873"),
        R = u("151866"),
        O = u("155158"),
        f = u("143460"),
        T = u("49111"),
        A = u("782340");
      function D(e) {
        let { rule: t, analyticsContext: u, onSelect: D } = e,
          U = (0, c.isBackendPersistedRule)(t),
          g = (function (e) {
            let { editingRule: t, setEditingRule: u } = (0,
            R.useAutomodEditingRuleState)();
            return (0, l.jsx)(d.MenuItem, {
              id: "edit-automod-rule",
              label: A.default.Messages.GUILD_AUTOMOD_EDIT_RULE,
              action: () => {
                u(e);
              },
              disabled: null != t,
            });
          })(t),
          I = (function (e) {
            let { setEditingRule: t } = (0, R.useAutomodEditingRuleState)(),
              [u, n] = a.useState(!1),
              { removeRule: o } = (0, M.useAutomodRulesList)(e.guildId),
              r = (0, s.useStateFromStores)([_.default], () =>
                _.default.getGuild(e.guildId)
              ),
              c = async () => {
                if (u) return;
                let l = await (0, O.confirmRuleDelete)(e.name);
                if (l) {
                  n(!0);
                  try {
                    await (0, E.deleteAutomodRule)(e.id, e.guildId),
                      t(null),
                      o(e.id, e.guildId);
                  } catch (t) {
                    var a;
                    let e = new i.APIError(t);
                    (0, d.showToast)(
                      (0, d.createToast)(
                        null !== (a = e.getAnyErrorMessage()) && void 0 !== a
                          ? a
                          : A.default.Messages.ERROR_OCCURRED_TRY_AGAIN,
                        d.ToastType.FAILURE
                      )
                    );
                  } finally {
                    n(!1);
                  }
                }
              },
              D =
                e.triggerType === f.AutomodTriggerType.MENTION_SPAM &&
                (null == r ? void 0 : r.features) != null &&
                r.features.has(T.GuildFeatures.COMMUNITY);
            return (0, l.jsx)(d.MenuItem, {
              id: "delete-automod-rule",
              label: A.default.Messages.GUILD_AUTOMOD_DELETE_RULE,
              action: D
                ? () => {
                    (0, d.openModal)(e =>
                      (0, l.jsx)(d.ConfirmModal, {
                        header:
                          A.default.Messages
                            .GUILD_AUTOMOD_RULE_DELETE_ERROR_CONFIRM_MODAL_HEADER,
                        confirmText: A.default.Messages.OKAY,
                        confirmButtonColor: d.Button.Colors.BRAND,
                        ...e,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children:
                            A.default.Messages
                              .GUILD_AUTOMOD_RULE_DELETE_ERROR_CONFIRM_MODAL_BODY,
                        }),
                      })
                    );
                  }
                : c,
            });
          })(t),
          m = (0, r.default)({
            id: t.id,
            label: A.default.Messages.COPY_ID_AUTOMOD_RULE,
          });
        return (0, l.jsx)(o.default, {
          context: u,
          object: T.AnalyticsObjects.CONTEXT_MENU,
          children: (0, l.jsxs)(d.Menu, {
            navId: "automod-rule-context",
            onClose: n.closeContextMenu,
            "aria-label": A.default.Messages.GUILD_AUTOMOD_RULE_CONTEXT_MENU,
            onSelect: D,
            children: [
              (0, l.jsxs)(d.MenuGroup, { children: [g, U && I] }),
              U && (0, l.jsx)(d.MenuGroup, { children: m }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=ab4ca019d3016ca33831.js.map
