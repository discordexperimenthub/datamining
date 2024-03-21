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
        s = n("482391"),
        l = n("611183"),
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
                await s.updateApplicationCommandPermissions({
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
                await l.default.update(e, t.id, t),
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
        s = n("872717"),
        l = n("913144"),
        r = n("49111");
      let d = ["Spidey Bot", "Captain Hook"];
      var u = {
        fetchForGuild(e) {
          l.default.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            s.HTTP.get({
              url: r.Endpoints.GUILD_WEBHOOKS(e),
              oldFormErrors: !0,
            })
              .then(t => {
                let { body: n } = t;
                return l.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch(t => {
                let { body: n } = t;
                l.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          l.default.dispatch({
            type: "WEBHOOKS_FETCHING",
            guildId: e,
            channelId: t,
          }),
            s.HTTP.get({
              url: r.Endpoints.CHANNEL_WEBHOOKS(t),
              oldFormErrors: !0,
            }).then(n => {
              let { body: i } = n;
              return l.default.dispatch({
                type: "WEBHOOKS_UPDATE",
                guildId: e,
                channelId: t,
                webhooks: i,
              });
            });
        },
        create: (e, t, n) => (
          null == n && (n = d[a.random(0, d.length - 1)]),
          s.HTTP.post({
            url: r.Endpoints.CHANNEL_WEBHOOKS(t),
            body: { name: n },
            oldFormErrors: !0,
          }).then(t => {
            let { body: n } = t;
            return (
              l.default.dispatch({
                type: "WEBHOOK_CREATE",
                guildId: e,
                webhook: n,
              }),
              n
            );
          })
        ),
        delete: (e, t) =>
          s.HTTP.del({ url: r.Endpoints.WEBHOOK(t), oldFormErrors: !0 }).then(
            () => {
              l.default.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }
          ),
        update: (e, t, n) =>
          s.HTTP.patch({
            url: r.Endpoints.WEBHOOK(t),
            body: n,
            oldFormErrors: !0,
          }).then(t => {
            let { body: n } = t;
            return (
              l.default.dispatch({
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
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("175339"),
        l = () =>
          (0, i.jsx)("div", {
            className: s.loadingWrapper,
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
        s = n.n(a),
        l = n("77078"),
        r = n("845579"),
        d = n("662255"),
        u = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: a, shiftId: o, showIconFirst: c } = e,
          I = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !I || !u.SUPPORTS_COPY || null == t) return null;
        let T = "devmode-copy-id-".concat(t);
        return (0, i.jsx)(
          l.MenuItem,
          {
            id: T,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              s(null != n, "cannot copy null text"),
                (0, u.copy)(n),
                null == a || a();
            },
            icon: d.default,
            showIconFirst: c,
          },
          T
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
        s = n("446674"),
        l = n("77078"),
        r = n("713841"),
        d = n("79112"),
        u = n("988721"),
        o = n("592407"),
        c = n("305961"),
        I = n("957255"),
        T = n("49111"),
        p = n("782340");
      function E(e) {
        let { user: t, guildId: n, channel: E, context: N } = e,
          f = c.default.getGuild(n),
          S = (0, s.useStateFromStores)([I.default], () =>
            null != f ? I.default.can(T.Permissions.MANAGE_GUILD, f) : null
          ),
          _ = (0, u.useContextIndexState)(E, !0, !0),
          h = (0, u.useUserIndexState)(!0, !0),
          { isUserApp: m, isGuildApp: O } = a.useMemo(() => {
            var e, n, i, a;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let s = Object.values(
                null !==
                  (i =
                    null === (e = _.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {}
              ),
              l = Object.values(
                null !==
                  (a =
                    null === (n = h.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== a
                  ? a
                  : {}
              );
            return {
              isGuildApp: s.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: l.some(e => {
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
              (o.default.open(f.id, T.GuildSettingsSections.INTEGRATIONS),
              r.default.setSection(
                T.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == f ? void 0 : f.id]),
          G = a.useCallback(() => {
            d.default.open(T.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          v = N === T.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !S || v || (!O && !m)) return null;
        let C = [];
        return (
          O &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-integration",
                  label: p.default.Messages.MANAGE_INTEGRATION,
                  action: A,
                },
                "manage-integration"
              )
            ),
          m &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.default.Messages.MANAGE_AUTHORIZED_APP,
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
            return T;
          },
          updateApplicationCommandPermissions: function () {
            return p;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        s = n("507217"),
        l = n("389153"),
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
        i.HTTP.get(r.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
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
        let s = [];
        try {
          let a = await i.HTTP.get(
            r.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
          );
          a.ok && (s = a.body.permissions);
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
          permissions: s,
        });
      }
      function I(e) {
        a.default.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function T(e) {
        a.default.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function p(e) {
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
                  let a = { [e]: n, [(0, l.allChannelsSentinel)(e)]: i };
                  return t.filter(e => {
                    let t = a[e.id];
                    return null == t || e.permission !== t;
                  });
                })(d, u, i, r)
              : u,
          c = await s.updateApplicationGuildCommandPermissions(t, d, n, o);
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
        s = n("77078"),
        l = n("272030"),
        r = n("798609"),
        d = n("861370"),
        u = n("152298"),
        o = n("26051"),
        c = n("667358"),
        I = n("563816"),
        T = n("518155"),
        p = n("718381"),
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
          P = (0, T.default)(h, _),
          x = (0, p.default)(h, _),
          H = (0, o.default)(null != n ? n : f, S),
          b = (0, d.default)({
            id: h.id,
            label: N.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(h.channel_id, "-").concat(h.id),
          });
        return (0, i.jsxs)(s.Menu, {
          navId: "message",
          onClose: l.closeContextMenu,
          "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: A,
          children: [
            (0, i.jsx)(s.MenuGroup, { children: M }),
            (0, i.jsx)(s.MenuGroup, { children: R }),
            (0, i.jsxs)(s.MenuGroup, { children: [y, g, P, x] }),
            (0, i.jsx)(s.MenuGroup, { children: H }),
            (0, i.jsx)(s.MenuGroup, { children: b }),
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
        s = n("627445"),
        l = n.n(s),
        r = n("446674"),
        d = n("77078"),
        u = n("240249"),
        o = n("916565"),
        c = n("355263"),
        I = n("633043"),
        T = n("823026"),
        p = n("305961"),
        E = n("697218"),
        N = n("317041"),
        f = n("782340"),
        S = n("466063"),
        _ = e => {
          let t,
            {
              commandType: n,
              commandTargetId: s,
              channel: _,
              guildId: h,
              onHeightUpdate: m,
              context: O,
            } = e,
            A = (0, r.useStateFromStores)([p.default], () =>
              p.default.getGuild(null != h ? h : _.guild_id)
            ),
            G = (0, r.useStateFromStores)([E.default], () =>
              E.default.getUser(s)
            ),
            v = (0, T.default)({
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
              l(null != _, "menu item should not show if channel is null");
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
                      commandTargetId: s,
                    });
                  },
                },
                e.id
              );
            },
            [_, A, s, y]
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
            return p;
          },
        });
      var i,
        a,
        s = n("37983");
      n("884691");
      var l = n("414456"),
        r = n.n(l),
        d = n("77078"),
        u = n("36694"),
        o = n("381546"),
        c = n("68238"),
        I = n("423487"),
        T = n("950038");
      ((i = a || (a = {}))[(i.WARNING = 0)] = "WARNING"),
        (i[(i.INFO = 1)] = "INFO"),
        (i[(i.ERROR = 2)] = "ERROR"),
        (i[(i.POSITIVE = 3)] = "POSITIVE");
      var p = function (e) {
        let {
            children: t,
            messageType: n,
            className: i,
            textColor: a = "text-normal",
            textVariant: l = "text-sm/medium",
          } = e,
          p = (function (e) {
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
                return T.warning;
              case 1:
                return T.info;
              case 2:
                return T.error;
              case 3:
                return T.positive;
            }
          })(n);
        return (0, s.jsxs)("div", {
          className: r(T.container, E, i),
          children: [
            (0, s.jsx)("div", {
              className: T.iconDiv,
              children: (0, s.jsx)(p, { className: T.icon }),
            }),
            (0, s.jsx)(d.Text, {
              className: T.text,
              color: a,
              variant: l,
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
        s = n("414456"),
        l = n.n(s),
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
            style: s,
          } = this.props;
          return (0, i.jsxs)("div", {
            className: l(t, a),
            style: s,
            children: [
              (0, i.jsxs)(r.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: u.pro,
                children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"],
              }),
              (0, i.jsx)(r.Text, {
                className: l(u.tip, n),
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
        s = n("35647"),
        l = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          s.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
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
//# sourceMappingURL=32ea28df67ae7ea6d4a4.js.map
