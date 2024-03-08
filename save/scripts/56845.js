(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56845"],
  {
    713841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("913144"),
        a = n("592407"),
        l = n("482391"),
        s = n("611183"),
        r = {
          init() {
            i.default.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
          },
          setSection(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_SET_SECTION",
              section: e,
              sectionId: t,
            });
          },
          startEditingCommandPermissions(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
              commandId: e,
            });
          },
          stopEditingCommandPermissions(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
              commandId: e,
            });
          },
          startEditingIntegration(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
              integrationId: e,
            });
          },
          stopEditingIntegration() {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
            });
          },
          updateIntegration(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
              settings: e,
            });
          },
          startEditingWebhook(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
              webhookId: e,
            });
          },
          stopEditingWebhook() {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK",
            });
          },
          updateWebhook(e) {
            i.default.dispatch({
              type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
              settings: e,
            });
          },
          async saveApplicationPermissions(e, t, n) {
            try {
              i.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await l.updateApplicationCommandPermissions({
                  applicationId: e,
                  commandId: e,
                  defaultEveryoneValue: !0,
                  defaultEverywhereValue: !0,
                  guildId: t,
                  permissions: n,
                }),
                i.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              i.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
          async saveIntegration(e, t) {
            try {
              i.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await a.default.updateIntegration(
                  e,
                  t.id,
                  t.expire_behavior,
                  t.expire_grace_period,
                  t.enable_emoticons
                ),
                i.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              i.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
          async saveWebhook(e, t) {
            try {
              i.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await s.default.update(e, t.id, t),
                i.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              i.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
        };
    },
    611183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("917351"),
        a = n.n(i),
        l = n("872717"),
        s = n("913144"),
        r = n("49111");
      let d = ["Spidey Bot", "Captain Hook"];
      var u = {
        fetchForGuild(e) {
          s.default.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            l.default
              .get({ url: r.Endpoints.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then(t => {
                let { body: n } = t;
                return s.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch(t => {
                let { body: n } = t;
                s.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          s.default.dispatch({
            type: "WEBHOOKS_FETCHING",
            guildId: e,
            channelId: t,
          }),
            l.default
              .get({ url: r.Endpoints.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then(n => {
                let { body: i } = n;
                return s.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = d[a.random(0, d.length - 1)]),
          l.default
            .post({
              url: r.Endpoints.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then(t => {
              let { body: n } = t;
              return (
                s.default.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          l.default
            .delete({ url: r.Endpoints.WEBHOOK(t), oldFormErrors: !0 })
            .then(() => {
              s.default.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }),
        update: (e, t, n) =>
          l.default
            .patch({ url: r.Endpoints.WEBHOOK(t), body: n, oldFormErrors: !0 })
            .then(t => {
              let { body: n } = t;
              return (
                s.default.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("35466");
      n.es(i, t);
    },
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("175339"),
        s = () =>
          (0, i.jsx)("div", {
            className: l.loadingWrapper,
            children: (0, i.jsx)(a.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("627445"),
        l = n.n(a),
        s = n("77078"),
        r = n("845579"),
        d = n("662255"),
        u = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: a, shiftId: o, showIconFirst: c } = e,
          I = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !I || !u.SUPPORTS_COPY || null == t) return null;
        let p = "devmode-copy-id-".concat(t);
        return (0, i.jsx)(
          s.MenuItem,
          {
            id: p,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              l(null != n, "cannot copy null text"),
                (0, u.copy)(n),
                null == a || a();
            },
            icon: d.default,
            showIconFirst: c,
          },
          p
        );
      }
    },
    823026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("424973");
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("77078"),
        r = n("713841"),
        d = n("79112"),
        u = n("988721"),
        o = n("592407"),
        c = n("305961"),
        I = n("957255"),
        p = n("49111"),
        T = n("782340");
      function E(e) {
        let { user: t, guildId: n, channel: E, context: N } = e,
          f = c.default.getGuild(n),
          S = (0, l.useStateFromStores)([I.default], () =>
            null != f ? I.default.can(p.Permissions.MANAGE_GUILD, f) : null
          ),
          _ = (0, u.useContextIndexState)(E, !0, !0),
          h = (0, u.useUserIndexState)(!0, !0),
          { isUserApp: m, isGuildApp: O } = a.useMemo(() => {
            var e, n, i, a;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (i =
                    null === (e = _.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {}
              ),
              s = Object.values(
                null !==
                  (a =
                    null === (n = h.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== a
                  ? a
                  : {}
              );
            return {
              isGuildApp: l.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: s.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [_, h, null == t ? void 0 : t.id]),
          A = a.useCallback(() => {
            (null == f ? void 0 : f.id) != null &&
              (o.default.open(f.id, p.GuildSettingsSections.INTEGRATIONS),
              r.default.setSection(
                p.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == f ? void 0 : f.id]),
          G = a.useCallback(() => {
            d.default.open(p.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          v = N === p.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !S || v || (!O && !m)) return null;
        let C = [];
        return (
          O &&
            C.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-integration",
                  label: T.default.Messages.MANAGE_INTEGRATION,
                  action: A,
                },
                "manage-integration"
              )
            ),
          m &&
            C.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: T.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: G,
                },
                "manage-authorized-app"
              )
            ),
          C
        );
      }
    },
    482391: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearIntegrationPermissions: function () {
            return d;
          },
          editPermissions: function () {
            return u;
          },
          getApplicationCommands: function () {
            return o;
          },
          getApplicationCommandPermissions: function () {
            return c;
          },
          initIntegrationPermissions: function () {
            return I;
          },
          resetPermissions: function () {
            return p;
          },
          updateApplicationCommandPermissions: function () {
            return T;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        l = n("507217"),
        s = n("389153"),
        r = n("49111");
      function d() {
        a.default.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function u(e, t, n) {
        a.default.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function o(e, t) {
        i.default.get(r.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          n => {
            a.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
            });
          },
          () => {
            a.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          }
        );
      }
      async function c(e, t, n) {
        let l = [];
        try {
          let a = await i.default.get(
            r.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
          );
          a.ok && (l = a.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            a.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        a.default.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
          permissions: l,
        });
      }
      function I(e) {
        a.default.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function p(e) {
        a.default.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function T(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: r,
            guildId: d,
            permissions: u,
          } = e,
          o =
            n === t
              ? (function (e, t, n, i) {
                  if (!n || !i) return t;
                  let a = { [e]: n, [(0, s.allChannelsSentinel)(e)]: i };
                  return t.filter(e => {
                    let t = a[e.id];
                    return null == t || e.permission !== t;
                  });
                })(d, u, i, r)
              : u,
          c = await l.updateApplicationGuildCommandPermissions(t, d, n, o);
        c.ok &&
          a.default.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: d,
            permissions: c.body.permissions,
          });
      }
    },
    385065: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("118810"),
        l = n("77078"),
        s = n("272030"),
        r = n("798609"),
        d = n("861370"),
        u = n("152298"),
        o = n("26051"),
        c = n("667358"),
        I = n("563816"),
        p = n("518155"),
        T = n("718381"),
        E = n("875834"),
        N = n("782340");
      function f(e) {
        var t;
        let n,
          f,
          S,
          {
            channel: _,
            message: h,
            target: m,
            attachment: O,
            onSelect: A,
            onHeightUpdate: G,
          } = e,
          v = m;
        if (null != O) f = n = O.url;
        else
          for (; (0, a.isElement)(v); )
            (0, a.isElement)(v, HTMLImageElement) &&
              null != v.src &&
              (f = v.src),
              (0, a.isElement)(v, HTMLAnchorElement) &&
                null != v.href &&
                ((n = v.href), (S = v.textContent)),
              (v = v.parentNode);
        let C =
            null === (t = document.getSelection()) || void 0 === t
              ? void 0
              : t.toString(),
          M = (0, u.default)(C),
          R = (0, c.default)(C),
          y = (0, I.default)({
            commandType: r.ApplicationCommandType.MESSAGE,
            commandTargetId: h.id,
            channel: _,
            guildId: void 0,
            onHeightUpdate: G,
          }),
          g = (0, E.default)(h, _),
          P = (0, p.default)(h, _),
          x = (0, T.default)(h, _),
          H = (0, o.default)(null != n ? n : f, S),
          b = (0, d.default)({
            id: h.id,
            label: N.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(h.channel_id, "-").concat(h.id),
          });
        return (0, i.jsxs)(l.Menu, {
          navId: "message",
          onClose: s.closeContextMenu,
          "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: A,
          children: [
            (0, i.jsx)(l.MenuGroup, { children: M }),
            (0, i.jsx)(l.MenuGroup, { children: R }),
            (0, i.jsxs)(l.MenuGroup, { children: [y, g, P, x] }),
            (0, i.jsx)(l.MenuGroup, { children: H }),
            (0, i.jsx)(l.MenuGroup, { children: b }),
          ],
        });
      }
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("627445"),
        s = n.n(l),
        r = n("446674"),
        d = n("77078"),
        u = n("240249"),
        o = n("916565"),
        c = n("355263"),
        I = n("633043"),
        p = n("823026"),
        T = n("305961"),
        E = n("697218"),
        N = n("317041"),
        f = n("782340"),
        S = n("466063"),
        _ = e => {
          let t,
            {
              commandType: n,
              commandTargetId: l,
              channel: _,
              guildId: h,
              onHeightUpdate: m,
              context: O,
            } = e,
            A = (0, r.useStateFromStores)([T.default], () =>
              T.default.getGuild(null != h ? h : _.guild_id)
            ),
            G = (0, r.useStateFromStores)([E.default], () =>
              E.default.getUser(l)
            ),
            v = (0, p.default)({
              user: G,
              guildId: null == A ? void 0 : A.id,
              channel: _,
              context: O,
            }),
            {
              commands: C,
              sectionDescriptors: M,
              loading: R,
            } = u.useDiscovery(
              _,
              { commandType: n },
              { limit: N.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: y } = a.useMemo(() => {
              let e = {};
              return (
                M.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [M]),
            g = a.useRef(R.current);
          a.useEffect(() => {
            R.current !== g.current &&
              ((g.current = R.current), null == m || m());
          }, [R, m]);
          let P = a.useCallback(
            e => {
              s(null != _, "menu item should not show if channel is null");
              let t = y[e.applicationId],
                n = null != t ? (0, c.getIconComponent)(t) : void 0;
              return (0, i.jsx)(
                d.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, i.jsx)(n, {
                          channel: _,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, o.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: _, guild: A },
                      commandTargetId: l,
                    });
                  },
                },
                e.id
              );
            },
            [_, A, l, y]
          );
          return (
            R.current
              ? (t = (0, i.jsx)(
                  d.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, i.jsx)(I.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === C.length
                    ? (0, i.jsx)(
                        d.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            f.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : C.map(P)),
                null != v &&
                  (t = (0, i.jsxs)(i.Fragment, {
                    children: [
                      t,
                      (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                      v,
                    ],
                  }))),
            (0, i.jsx)(d.MenuItem, {
              id: "apps",
              label: f.default.Messages.APPS,
              listClassName: S.list,
              children: t,
            })
          );
        };
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return T;
          },
        });
      var i,
        a,
        l = n("37983");
      n("884691");
      var s = n("414456"),
        r = n.n(s),
        d = n("77078"),
        u = n("36694"),
        o = n("381546"),
        c = n("68238"),
        I = n("423487"),
        p = n("950038");
      ((i = a || (a = {}))[(i.WARNING = 0)] = "WARNING"),
        (i[(i.INFO = 1)] = "INFO"),
        (i[(i.ERROR = 2)] = "ERROR"),
        (i[(i.POSITIVE = 3)] = "POSITIVE");
      var T = function (e) {
        let {
            children: t,
            messageType: n,
            className: i,
            textColor: a = "text-normal",
            textVariant: s = "text-sm/medium",
          } = e,
          T = (function (e) {
            switch (e) {
              case 0:
                return I.default;
              case 1:
                return c.default;
              case 2:
                return o.default;
              case 3:
                return u.default;
            }
          })(n),
          E = (function (e) {
            switch (e) {
              case 0:
                return p.warning;
              case 1:
                return p.info;
              case 2:
                return p.error;
              case 3:
                return p.positive;
            }
          })(n);
        return (0, l.jsxs)("div", {
          className: r(p.container, E, i),
          children: [
            (0, l.jsx)("div", {
              className: p.iconDiv,
              children: (0, l.jsx)(T, { className: p.icon }),
            }),
            (0, l.jsx)(d.Text, {
              className: p.text,
              color: a,
              variant: s,
              children: t,
            }),
          ],
        });
      };
    },
    822332: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        r = n("77078"),
        d = n("782340"),
        u = n("1700");
      let o = { BLOCK: u.block, INLINE: u.inline };
      class c extends a.PureComponent {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: a = o.BLOCK,
            style: l,
          } = this.props;
          return (0, i.jsxs)("div", {
            className: s(t, a),
            style: l,
            children: [
              (0, i.jsxs)(r.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: u.pro,
                children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"],
              }),
              (0, i.jsx)(r.Text, {
                className: s(u.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      c.Types = o;
      var I = c;
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("35647"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: l,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          l.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=c01941a257f62eef02e5.js.map
