(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["222"],
  {
    553021: function (e, t, l) {
      "use strict";
      e.exports = l.p + "c7c4065874955761be3b.svg";
    },
    752499: function (e, t, l) {
      "use strict";
      e.exports = l.p + "a1b0a14d2f22c155a2b3.svg";
    },
    449638: function (e, t, l) {
      "use strict";
      e.exports = l.p + "a4bee30fe0b5a0f5b3c7.svg";
    },
    117809: function (e, t, l) {
      "use strict";
      e.exports = l.p + "35b075323bfac98abdee.svg";
    },
    277482: function (e, t, l) {
      "use strict";
      e.exports = l.p + "1bb2be01aece015602f7.svg";
    },
    57213: function (e, t, l) {
      "use strict";
      e.exports = l.p + "39e3f389716400ced39a.svg";
    },
    101017: function (e, t, l) {
      "use strict";
      e.exports = l.p + "76db37e93ca50f3fa98b.svg";
    },
    65757: function (e, t, l) {
      "use strict";
      e.exports = l.p + "829f8ef7dcf355fbe141.svg";
    },
    390494: function (e, t, l) {
      "use strict";
      e.exports = l.p + "3c565e38a11e3153dba0.svg";
    },
    900676: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        }),
        l("70102");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("316693"),
        o = l("200900"),
        d = l("77078"),
        u = l("822997"),
        c = l("350625"),
        f = l("468759"),
        m = l("176060"),
        I = l("890957");
      class T extends a.PureComponent {
        getOverwriteValue(e) {
          let { allow: t, deny: l } = this.props;
          if (null == t || null == l)
            throw Error(
              "PermissionsForm.getOverwriteValue: Invalid allow or deny props"
            );
          return r.has(t, e)
            ? u.PermissionOverrideType.ALLOW
            : r.has(l, e)
              ? u.PermissionOverrideType.DENY
              : u.PermissionOverrideType.PASSTHROUGH;
        }
        getPermissionValue(e, t) {
          return r.has(t, e);
        }
        handleChange(e, t) {
          let { onChange: l } = this.props;
          l(e, t);
        }
        renderDisabledIndicator(e) {
          return (0, n.jsx)(d.Tooltip, {
            text: e,
            position: "top",
            color: d.Tooltip.Colors.RED,
            children: e =>
              (0, n.jsx)("span", {
                ...e,
                children: (0, n.jsx)(f.default, {
                  className: m.icon,
                  width: 18,
                  height: 18,
                }),
              }),
          });
        }
        renderComponent(e) {
          let { title: t, description: l, helpdeskArticleId: a, flag: s } = e,
            { permissions: r, locked: u, permissionRender: f } = this.props,
            I = null == f ? void 0 : f(s),
            T = !!(u || I),
            N = "string" == typeof I ? this.renderDisabledIndicator(I) : null,
            E = i({ [m.title]: null != N });
          return null == r
            ? (0, n.jsxs)(
                c.default,
                {
                  disabled: T,
                  value: this.getOverwriteValue(s),
                  onChange: e => this.handleChange(s, e),
                  note: (0, o.renderDescription)(l),
                  helpdeskArticleId: a,
                  children: [
                    N,
                    (0, n.jsx)("span", { className: E, children: t }),
                  ],
                },
                String(s)
              )
            : (0, n.jsxs)(
                d.FormSwitch,
                {
                  disabled: T,
                  value: this.getPermissionValue(s, r),
                  onChange: e => this.handleChange(s, e),
                  note: (0, o.renderDescription)(l),
                  children: [
                    N,
                    (0, n.jsx)("span", { className: E, children: t }),
                  ],
                },
                String(s)
              );
        }
        render() {
          let { spec: e, className: t } = this.props;
          return (0, n.jsx)(d.FormSection, {
            className: t,
            children: (0, n.jsxs)(d.HeadingLevel, {
              component: (0, n.jsx)(d.FormTitle, {
                tag: d.FormTitleTags.H5,
                className:
                  null != e.description ? I.marginBottom8 : I.marginBottom20,
                children: e.title,
              }),
              children: [
                null != e.description &&
                  (0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: I.marginBottom20,
                    children: e.description,
                  }),
                e.permissions.map(this.renderComponent, this),
              ],
            }),
          });
        }
      }
      var N = T;
    },
    202084: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("575659");
      l.es(n, t);
    },
    605141: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("41688");
      l.es(n, t);
    },
    70919: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          fetchRoleConnectionsConfiguration: function () {
            return r;
          },
          putRoleConnectionsConfigurations: function () {
            return o;
          },
          fetchUserApplicationRoleConnections: function () {
            return d;
          },
        });
      var n = l("872717"),
        a = l("913144"),
        s = l("895026"),
        i = l("49111");
      function r(e, t) {
        n.HTTP.get({
          url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
        })
          .then(e => {
            let l = [];
            e.body.length > 0 &&
              (l = e.body.map(e =>
                e.map(e => ({
                  connectionType: e.connection_type,
                  connectionMetadataField: e.connection_metadata_field,
                  applicationId: e.application_id,
                  operator: e.operator,
                  value: e.value,
                }))
              )),
              a.default.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: t,
                roleConnectionConfigurations: l,
              });
          })
          .catch(() => {});
      }
      async function o(e, t, l) {
        let r = l.map(e =>
            e.map(e => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            }))
          ),
          o = await n.HTTP.put({
            url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
            body: 0 === r.length ? [] : r,
            oldFormErrors: !0,
          }).then(e => {
            let t = [];
            return (
              e.body.length > 0 &&
                (t = e.body.map(e =>
                  e.map(e => ({
                    connectionType: e.connection_type,
                    connectionMetadataField: e.connection_metadata_field,
                    applicationId: e.application_id,
                    operator: e.operator,
                    value: e.value,
                  }))
                )),
              t
            );
          }),
          d = await (0, s.requestMembersForRole)(e, t, !1);
        null != d &&
          a.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: t,
            count: d,
          }),
          a.default.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: o,
          });
      }
      async function d() {
        let e = await n.HTTP.get({
          url: i.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS,
        });
        return e.body;
      }
    },
    69678: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        }),
        l("222007");
      var n = l("884691"),
        a = l("476042");
      function s(e) {
        let {
            type: t,
            index: l,
            optionId: s,
            onDragStart: i,
            onDragComplete: r,
            onDragReset: o,
          } = e,
          [d, u] = n.useState(!1),
          [, c] = (0, a.useDrag)({
            type: t,
            item: () => (i(s), { id: s, position: l }),
            canDrag: () => d,
            collect: e => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
              let l = t.getDropResult();
              if (null == l) {
                o();
                return;
              }
              r(l.optionId);
            },
          }),
          [{ dragSourcePosition: f }, m] = (0, a.useDrop)({
            accept: t,
            canDrop: () => !0,
            collect: e => {
              let t = e.getItem();
              return null != t && e.isOver() && e.canDrop()
                ? { dragSourcePosition: t.position }
                : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: s }),
          });
        return { drag: c, dragSourcePosition: f, drop: m, setIsDraggable: u };
      }
    },
    372283: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        }),
        l("222007");
      var n = l("884691");
      function a(e, t) {
        let [l, a] = n.useState(null),
          s = n.useCallback(e => {
            a(e);
          }, []),
          i = n.useCallback(() => {
            a(null);
          }, []),
          r = n.useCallback(
            n => {
              i();
              let a = e.find(e => {
                  let { id: t } = e;
                  return l === t;
                }),
                s = e.find(e => {
                  let { id: t } = e;
                  return n === t;
                });
              if (null == a || null == s || a === s) return;
              let r = [...e],
                o = r.indexOf(a),
                d = r.indexOf(s),
                u = d - o > 0 ? 1 : 0;
              r.splice(o, 1), (d = r.indexOf(s)), r.splice(d + u, 0, a), t(r);
            },
            [e, l, i, t]
          );
        return {
          draggingId: l,
          handleDragStart: s,
          handleDragReset: i,
          handleDragComplete: r,
        };
      }
    },
    726527: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useHasGuildRoleItems: function () {
            return o;
          },
          default: function () {
            return d;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("77078"),
        s = l("272030"),
        i = l("694402"),
        r = l("782340");
      function o(e, t) {
        let l = (0, i.default)(e, t);
        return l.length > 0;
      }
      function d(e) {
        let { role: t, guild: l, onSelect: o } = e,
          d = (0, i.default)(l, t);
        return 0 === d.length
          ? null
          : (0, n.jsx)(a.Menu, {
              navId: "guild-settings-role-context",
              "aria-label": r.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: s.closeContextMenu,
              onSelect: o,
              children: d,
            });
      }
    },
    694402: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        }),
        l("424973");
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        s = l("77078"),
        i = l("851387"),
        r = l("477566"),
        o = l("454273"),
        d = l("70919"),
        u = l("861370"),
        c = l("957255"),
        f = l("228220"),
        m = l("893455"),
        I = l("782340");
      function T(e, t) {
        var l;
        let T = (0, a.useStateFromStores)([c.default], () => {
            let l = c.default.getHighestRole(e);
            return !c.default.isRoleHigher(e, l, t);
          }),
          N = [],
          E = (0, m.default)(e, t);
        null != E && N.push(E);
        let h = (0, u.default)({
          id: t.id,
          label: I.default.Messages.COPY_ID_ROLE,
        });
        null != h && N.push(h);
        let g =
            (null === (l = t.tags) || void 0 === l
              ? void 0
              : l.guild_connections) === null,
          p = t.managed && !g,
          S = null != t && (0, o.isEveryoneRoleId)(e.id, t.id);
        return (
          !T &&
            !p &&
            !S &&
            N.push(
              (0, n.jsx)(
                s.MenuGroup,
                {
                  children: (0, n.jsx)(s.MenuItem, {
                    id: "delete-role",
                    label: I.default.Messages.DELETE,
                    color: "danger",
                    icon: f.default,
                    action: () => {
                      r.default.show({
                        title: I.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
                        body: I.default.Messages.SETTINGS_ROLES_DELETE_BODY.format(
                          { name: t.name }
                        ),
                        cancelText: I.default.Messages.CANCEL,
                        onConfirm: async () => {
                          g &&
                            (await (0, d.putRoleConnectionsConfigurations)(
                              e.id,
                              t.id,
                              []
                            )),
                            i.default.deleteRole(e.id, t.id);
                        },
                      });
                    },
                  }),
                },
                "delete-role"
              )
            ),
          N
        );
      }
    },
    893455: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        s = l("77078"),
        i = l("592407"),
        r = l("479756"),
        o = l("507950"),
        d = l("957255"),
        u = l("538137"),
        c = l("49111"),
        f = l("782340");
      function m(e, t) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : c.GuildSettingsSections.ROLES,
          m = (0, a.useStateFromStores)([d.default], () =>
            d.default.canImpersonateRole(e, t)
          );
        return m
          ? (0, n.jsx)(
              s.MenuItem,
              {
                id: "view-as-role",
                label: f.default.Messages.VIEW_AS_ROLE,
                icon: u.default,
                action: () => {
                  i.default.close(),
                    (0, r.startImpersonating)(e.id, {
                      type: o.ImpersonateType.ROLES,
                      roles: { [t.id]: t },
                      returnToSection: l,
                    });
                },
              },
              "view-as-role"
            )
          : null;
      }
    },
    952943: function (e, t, l) {
      "use strict";
      let n, a;
      l.r(t),
        l.d(t, {
          default: function () {
            return b;
          },
        }),
        l("424973"),
        l("222007");
      var s = l("917351"),
        i = l.n(s),
        r = l("446674"),
        o = l("913144"),
        d = l("611183"),
        u = l("957255"),
        c = l("45894"),
        f = l("900938"),
        m = l("49111");
      let I = [],
        T = [],
        N = null,
        E = null,
        h = null,
        g = !1,
        p = !1,
        S = m.FormStates.CLOSED,
        O = {},
        _ = !1,
        A = null;
      function C(e) {
        let { section: t } = e;
        if (t !== m.GuildSettingsSections.INTEGRATIONS) return !1;
        if (((a = m.IntegrationSettingsSections.OVERVIEW), null == n)) {
          let e = f.default.getGuildId();
          null != e && d.default.fetchForGuild(e), x(!1);
        }
      }
      function x(e) {
        if (
          null != (n = f.default.getProps().guild) &&
          u.default.can(m.Permissions.MANAGE_GUILD, n)
        ) {
          let e = f.default.getProps().integrations;
          null == e && (p = !0), (I = null != e ? e : []);
        } else I = [];
        if (
          ((T =
            null != n && u.default.can(m.Permissions.MANAGE_WEBHOOKS, n)
              ? c.default.getWebhooksForGuild(n.id)
              : []),
          !e && null != E)
        ) {
          let e = M(E.id);
          null != e && (E = e);
        }
        if (null != h) {
          let e = v(h.id);
          null != e && (h = e);
        }
        (N = null), (S = m.FormStates.OPEN), (O = {}), (_ = !1);
      }
      let R = i.debounce(() => {
        _ &&
          (null != E
            ? i.isEqual(E, M(E.id)) && (_ = !1)
            : null != h && i.isEqual(h, v(h.id)) && (_ = !1),
          !_ && j.emitChange());
      }, 500);
      function M(e) {
        return I.find(t => {
          let { id: l } = t;
          return l === e;
        });
      }
      function v(e) {
        return T.find(t => {
          let { id: l } = t;
          return l === e;
        });
      }
      class L extends r.default.Store {
        initialize() {
          this.waitFor(f.default, c.default, u.default);
        }
        hasChanges() {
          return _;
        }
        get guild() {
          return n;
        }
        get integrations() {
          return I;
        }
        get webhooks() {
          return T;
        }
        get editedCommandId() {
          return N;
        }
        get editedIntegration() {
          return E;
        }
        get editedWebhook() {
          return h;
        }
        get formState() {
          return S;
        }
        getErrors() {
          return O;
        }
        getSection() {
          return a;
        }
        getSectionId() {
          return A;
        }
        getIntegration(e) {
          return M(e);
        }
        getWebhook(e) {
          return v(e);
        }
        isFetching() {
          return p || g;
        }
        showNotice() {
          return this.hasChanges();
        }
        getApplication(e) {
          var t;
          return null ===
            (t = I.find(t => {
              var l;
              return (
                (null === (l = t.application) || void 0 === l
                  ? void 0
                  : l.id) === e
              );
            })) || void 0 === t
            ? void 0
            : t.application;
        }
      }
      L.displayName = "GuildSettingsIntegrationsStore";
      let j = new L(
        o.default,
        __OVERLAY__
          ? {}
          : {
              INTEGRATION_SETTINGS_INIT: function () {
                return x(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                return x(!0);
              },
              GUILD_SETTINGS_INIT: C,
              GUILD_SETTINGS_SET_SECTION: C,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                let { section: t, sectionId: l } = e;
                (a = t), (A = l);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                let { commandId: t } = e;
                (N = t), (E = null), (h = null), (O = {}), (_ = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                let { commandId: t } = e;
                if (null == N || N !== t) return !1;
                (N = null), (O = {}), (_ = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                let { integrationId: t } = e,
                  l = M(t);
                if (null == l) return !1;
                (E = l), (N = null), (h = null), (O = {}), (_ = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                (E = null), (O = {}), (_ = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                let { settings: t } = e;
                if (null == E) return !1;
                (E = { ...E }),
                  null != t.enableEmoticons &&
                    E.enable_emoticons !== t.enableEmoticons &&
                    ((E.enable_emoticons = t.enableEmoticons), (_ = !0)),
                  null != t.expireBehavior &&
                    E.expire_behavior !== t.expireBehavior &&
                    ((E.expire_behavior = t.expireBehavior), (_ = !0)),
                  null != t.expireGracePeriod &&
                    E.expire_grace_period !== t.expireGracePeriod &&
                    ((E.expire_grace_period = t.expireGracePeriod), (_ = !0)),
                  _ && R();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                let { settings: t } = e;
                if (null == h) return !1;
                (h = { ...h }),
                  null != t.name &&
                    h.name !== t.name &&
                    ((h.name = t.name), (_ = !0)),
                  void 0 !== t.avatar &&
                    h.avatar !== t.avatar &&
                    ((h.avatar = t.avatar), (_ = !0)),
                  null != t.channelId &&
                    h.channel_id !== t.channelId &&
                    ((h.channel_id = t.channelId), (_ = !0)),
                  _ && R();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                let { webhookId: t } = e,
                  l = v(t);
                if (null == l) return !1;
                (h = l), (N = null), (E = null), (O = {}), (_ = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                (h = null), (O = {}), (_ = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                (n = null),
                  (I = []),
                  (T = []),
                  (N = null),
                  (E = null),
                  (h = null),
                  (S = m.FormStates.CLOSED),
                  (_ = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                let { guildId: t, integrations: l } = e;
                if (null == n || t !== n.id || S === m.FormStates.SUBMITTING)
                  return !1;
                for (let e of ((p = !1), l)) {
                  let t = I.find(t => {
                    let { id: l } = t;
                    if (l === e.id) return !0;
                  });
                  if (null == t) {
                    var a, s;
                    I.push(e),
                      e.type === (null == E ? void 0 : E.type) &&
                        (null === (a = e.account) || void 0 === a
                          ? void 0
                          : a.id) ===
                          (null === (s = E.account) || void 0 === s
                            ? void 0
                            : s.id) &&
                        (E = e);
                  }
                }
                for (let e = I.length - 1; e >= 0; e--) {
                  let t = I[e],
                    n = l.find(e => {
                      let { id: l } = e;
                      if (l === t.id) return !0;
                    });
                  if (null != n) {
                    let l = { ...t, ...n };
                    (null == E ? void 0 : E.id) === l.id &&
                      (!1 === l.enabled ? (E = null) : !_ && (E = l)),
                      (I[e] = l);
                  } else
                    (null == E ? void 0 : E.id) === t.id && (E = null),
                      I.splice(e, 1);
                }
                (I = [...I]), R();
              },
              WEBHOOKS_UPDATE: function (e) {
                let { guildId: t, channelId: l, webhooks: a } = e;
                if (
                  null == n ||
                  t !== n.id ||
                  null == a ||
                  S === m.FormStates.SUBMITTING
                )
                  return !1;
                g = !1;
                for (let e = T.length - 1; e >= 0; e--) {
                  let t = T[e];
                  if (null != l && (null == t ? void 0 : t.channel_id) !== l)
                    continue;
                  let n = a.find(e => {
                    let { id: l } = e;
                    if (l === t.id) return !0;
                  });
                  if (null != n) {
                    let l = { ...t, ...n };
                    (T[e] = l),
                      !_ && (null == h ? void 0 : h.id) === l.id && (h = l);
                  } else
                    (null == h ? void 0 : h.id) === t.id && (h = null),
                      T.splice(e, 1);
                }
                for (let e of a) {
                  let t = T.find(t => {
                    let { id: l } = t;
                    if (l === e.id) return !0;
                  });
                  null == t && T.push(e);
                }
                (T = [...T]), R();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                (S = m.FormStates.SUBMITTING), (O = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                var t;
                if (S !== m.FormStates.SUBMITTING) return !1;
                (S = m.FormStates.OPEN),
                  (O = null !== (t = e.errors) && void 0 !== t ? t : {});
              },
            }
      );
      var b = j;
    },
    978900: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          filterPermissionSearchItems: function () {
            return s;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("448105"),
        a = l.n(n);
      function s(e, t, l) {
        if ("" === l) return e;
        let n = l.toLowerCase(),
          s = [];
        for (let i of e) {
          let { id: e, names: r } = t(i);
          if (e === l) return [i];
          r.some(e => a(n, e.toLowerCase())) && s.push(i);
        }
        return s;
      }
    },
    683830: function (e, t, l) {
      "use strict";
      let n, a, s;
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        }),
        l("222007");
      var i = l("446674"),
        r = l("913144"),
        o = l("389153"),
        d = l("892692");
      let u = {},
        c = {},
        f = !1;
      function m() {
        (n = void 0), (u = {}), (c = {}), (a = void 0), (s = void 0), (f = !1);
      }
      class I extends i.default.Store {
        getApplicationPermissions() {
          return u;
        }
        getCommands() {
          return c;
        }
        getCommand(e) {
          return null == c ? void 0 : c[e];
        }
        getEditedApplication() {
          return a;
        }
        getEditedCommand() {
          return s;
        }
        isUnavailable() {
          return f;
        }
        getApplicationId() {
          return n;
        }
      }
      I.displayName = "IntegrationPermissionStore";
      var T = new I(r.default, {
        LOGOUT: m,
        INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE:
          function (e) {
            let { applicationId: t } = e;
            if (t !== n) return !1;
            f = !0;
          },
        INTEGRATION_PERMISSION_SETTINGS_CLEAR: m,
        INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
          let { applicationId: t } = e;
          m(), (n = t);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
          let { applicationId: t, commandId: l, permissions: a } = e;
          if (t !== n) return !1;
          if (l === n) {
            u = (0, d.keyPermissions)(a);
            return;
          }
          let s = c[l];
          if (null == s) return !1;
          c[l] = { ...s, permissions: (0, d.keyPermissions)(a) };
        },
        INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
          let { applicationId: t, commandId: l, permissions: i } = e;
          if (t !== n) return !1;
          l === n ? (a = i) : (s = { commandId: l, permissions: i });
        },
        INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
          let { commandId: t } = e;
          null == t ? (a = void 0) : (s = void 0);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
          let { applicationId: t } = e;
          if (t !== n) return !1;
          f = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
          let { applicationId: t, commands: l, permissions: a } = e;
          if (t !== n) return !1;
          let s = Object.fromEntries(a.map(e => [e.id, e.permissions])),
            i = {};
          for (let e of l)
            if (e.application_id === n) {
              let t = (0, o.buildCommand)({
                  rootCommand: e,
                  command: e,
                  applicationId: e.application_id,
                }),
                l = s[e.id];
              null != l && (t.permissions = (0, d.keyPermissions)(l)),
                (i[e.id] = t);
            }
          c = i;
        },
      });
    },
    464782: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useIntegrationPermissionChannelSearch: function () {
            return u;
          },
        }),
        l("222007"),
        l("424973"),
        l("843762");
      var n = l("884691"),
        a = l("389153"),
        s = l("923959"),
        i = l("957255"),
        r = l("978900"),
        o = l("49111"),
        d = l("782340");
      function u(e) {
        let t = n.useMemo(() => {
            let t = s.default.getChannels(e),
              l = [...t[s.GUILD_SELECTABLE_CHANNELS_KEY]];
            l.push(
              ...t[(0, s.GUILD_VOCAL_CHANNELS_KEY)].filter(e =>
                e.channel.isGuildVocal()
              )
            );
            let n = l.map(e => ({
              id: e.channel.id,
              name: e.channel.name,
              canManage: i.default.can(o.Permissions.MANAGE_ROLES, e.channel),
            }));
            return (
              n.unshift({
                id: (0, a.allChannelsSentinel)(e),
                name: d.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                canManage: !0,
              }),
              n
            );
          }, [e]),
          [l, u] = n.useState(""),
          f = n.useMemo(() => {
            let e = (function (e) {
              return e.startsWith("#") ? e.substr(1) : e;
            })(l);
            return (0, r.filterPermissionSearchItems)(t, c, e);
          }, [t, l]);
        return { query: l, results: f, setQuery: u, unfilteredCount: t.length };
      }
      function c(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    106490: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useIntegrationPermissionCommandSearch: function () {
            return o;
          },
        }),
        l("222007");
      var n = l("884691"),
        a = l("446674"),
        s = l("798609"),
        i = l("978900"),
        r = l("683830");
      function o() {
        let e = (0, a.useStateFromStoresObject)([r.default], () => {
            var e;
            return Object.values(
              null !== (e = r.default.getCommands()) && void 0 !== e ? e : {}
            );
          }),
          [t, l] = n.useState(""),
          o = n.useMemo(
            () =>
              [...e].sort((e, t) => {
                let l = s.ApplicationCommandType.CHAT + 1,
                  n = t.type > l ? l : t.type,
                  a = e.type > l ? l : e.type,
                  i = n - a;
                return 0 !== i ? i : e.name.localeCompare(t.name);
              }),
            [e]
          ),
          u = n.useMemo(
            () =>
              t.startsWith("/")
                ? o.filter(e => e.type === s.ApplicationCommandType.CHAT)
                : o,
            [t, o]
          ),
          c = n.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]),
          f = n.useMemo(
            () => (0, i.filterPermissionSearchItems)(u, d, c),
            [u, c]
          );
        return { query: t, results: f, setQuery: l, unfilteredCount: e.length };
      }
      function d(e) {
        return { id: e.id, names: [e.displayName] };
      }
    },
    636024: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useIntegrationPermissionMemberSearch: function () {
            return T;
          },
        }),
        l("424973"),
        l("222007"),
        l("843762");
      var n = l("884691"),
        a = l("627445"),
        s = l.n(a),
        i = l("316693"),
        r = l("446674"),
        o = l("26989"),
        d = l("305961"),
        u = l("957255"),
        c = l("697218"),
        f = l("991170"),
        m = l("978900"),
        I = l("49111");
      function T(e) {
        let t = (0, r.useStateFromStores)([d.default], () =>
          d.default.getGuild(e)
        );
        s(
          null != t,
          "guild must be present to be editing its integration settings"
        );
        let l = (0, r.useStateFromStores)([u.default], () =>
            u.default.getHighestRole(t)
          ),
          a = (0, r.useStateFromStoresArray)(
            [o.default],
            () => o.default.getMembers(e),
            [e]
          ),
          T = (0, r.useStateFromStoresObject)([c.default], () =>
            c.default.getUsers()
          ),
          h = (0, r.useStateFromStoresArray)(
            [d.default],
            () => Object.values(d.default.getRoles(e)),
            [e]
          ),
          g = n.useMemo(() => {
            let e = [];
            for (let l of a) {
              let n = T[l.userId];
              if (null == n || n.bot) continue;
              let a =
                n.id !== t.ownerId &&
                !f.can({
                  permission: I.Permissions.ADMINISTRATOR,
                  user: n,
                  context: t,
                }) &&
                u.default.canManageUser(
                  I.Permissions.USE_APPLICATION_COMMANDS,
                  n,
                  t
                );
              e.push({
                id: n.id,
                canManage: a,
                nick: l.nick,
                username: n.username,
              });
            }
            return e;
          }, [t, a, T]),
          p = e => {
            var t;
            return (
              e.managed &&
              (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) !=
                null
            );
          },
          S = n.useMemo(() => {
            let n = [];
            for (let a of h) {
              if (p(a)) continue;
              let s =
                  !i.has(a.permissions, I.Permissions.ADMINISTRATOR) &&
                  u.default.isRoleHigher(t, l, a),
                r = { id: a.id, name: a.name, canManage: s };
              a.id === e ? n.unshift(r) : n.push(r);
            }
            return n;
          }, [h, e, t, l]),
          [O, _] = n.useState(""),
          A = n.useMemo(() => {
            let t = (function (e) {
                return e.startsWith("@") ? e.substr(1) : e;
              })(O),
              l = O.startsWith("@") ? S.filter(t => t.id === e) : S,
              n = (0, m.filterPermissionSearchItems)(g, N, t),
              a = (0, m.filterPermissionSearchItems)(l, E, t);
            return { members: n, roles: a };
          }, [e, g, O, S]);
        return {
          query: O,
          results: A,
          setQuery: _,
          unfilteredCount: A.members.length + A.roles.length,
        };
      }
      function N(e) {
        let t = [e.username];
        return (
          (null == e ? void 0 : e.nick) != null && t.push(e.nick),
          { id: e.id, names: t }
        );
      }
      function E(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    859728: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return p;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("884691"),
        a = l("627445"),
        s = l.n(a),
        i = l("917351"),
        r = l.n(i),
        o = l("446674"),
        d = l("713841"),
        u = l("524768"),
        c = l("389153"),
        f = l("42203"),
        m = l("305961"),
        I = l("957255"),
        T = l("697218"),
        N = l("449008"),
        E = l("683830"),
        h = l("892692"),
        g = l("49111");
      function p(e, t, l) {
        let a = (0, o.useStateFromStores)([E.default], () =>
            E.default.getApplicationPermissions()
          ),
          i = n.useMemo(
            () =>
              (function (e, t) {
                let l = { ...t },
                  n = (0, c.allChannelsSentinel)(e),
                  a = (0, h.toPermissionKey)(
                    n,
                    u.ApplicationCommandPermissionType.CHANNEL
                  ),
                  s = (0, h.toPermissionKey)(
                    e,
                    u.ApplicationCommandPermissionType.ROLE
                  );
                return (
                  !(s in l) &&
                    (l[s] = {
                      id: e,
                      permission: !0,
                      type: u.ApplicationCommandPermissionType.ROLE,
                    }),
                  !(a in l) &&
                    (l[a] = {
                      id: n,
                      permission: !0,
                      type: u.ApplicationCommandPermissionType.CHANNEL,
                    }),
                  l
                );
              })(e, null != a ? a : {}),
            [a, e]
          ),
          p = (0, o.useStateFromStores)(
            [E.default],
            () => {
              var e;
              if (null == l) return;
              let t = E.default.getCommand(l);
              return null !== (e = null == t ? void 0 : t.permissions) &&
                void 0 !== e
                ? e
                : {};
            },
            [l]
          ),
          S = (0, o.useStateFromStores)(
            [E.default],
            () => {
              var e;
              return null == l
                ? E.default.getEditedApplication()
                : null === (e = E.default.getEditedCommand()) || void 0 === e
                  ? void 0
                  : e.permissions;
            },
            [l]
          ),
          O = null != l ? l : t,
          _ = null != l ? p : i,
          A = n.useMemo(
            () => (null != S ? S : { ...(null != _ ? _ : {}) }),
            [S, _]
          ),
          C = n.useMemo(() => Object.keys(A).length, [A]),
          x = n.useMemo(
            () => (null == _ || null == A ? null : !r.isEqual(_, A)),
            [_, A]
          );
        return (
          n.useEffect(() => {
            O === t &&
              (x
                ? d.default.startEditingCommandPermissions(O)
                : d.default.stopEditingCommandPermissions(O));
          }, [t, x, O]),
          {
            originalApplicationPermissions: i,
            originalCommandPermissions: p,
            editedTargetPermissions: (function (e, t) {
              let l = (0, o.useStateFromStores)(
                [m.default],
                () => m.default.getGuild(e),
                [e]
              );
              s(
                null != l,
                "guild must be present to be editing its integration settings"
              );
              let a = (0, o.useStateFromStores)(
                  [I.default],
                  () => I.default.getHighestRole(l),
                  [l]
                ),
                i = (0, o.useStateFromStores)([T.default], () => {
                  var e;
                  return null === (e = T.default.getCurrentUser()) ||
                    void 0 === e
                    ? void 0
                    : e.id;
                });
              s(
                null != i,
                "useComputePermissions: currentUserId must not be null"
              );
              let r = i === l.ownerId,
                {
                  channelIds: d,
                  roleIds: E,
                  userIds: h,
                } = n.useMemo(() => {
                  let e = [],
                    l = [],
                    n = [];
                  for (let a of Object.values(t))
                    a.type === u.ApplicationCommandPermissionType.CHANNEL
                      ? e.push(a.id)
                      : a.type === u.ApplicationCommandPermissionType.ROLE
                        ? l.push(a.id)
                        : a.type === u.ApplicationCommandPermissionType.USER &&
                          n.push(a.id);
                  return { channelIds: e, roleIds: l, userIds: n };
                }, [t]),
                p = (0, o.useStateFromStoresObject)(
                  [f.default],
                  () =>
                    Object.fromEntries(
                      d
                        .map(f.default.getChannel)
                        .filter(N.isNotNullish)
                        .map(e => [e.id, e])
                    ),
                  [d]
                ),
                S = (0, o.useStateFromStoresObject)(
                  [m.default],
                  () =>
                    Object.fromEntries(
                      E.map(t => m.default.getRole(e, t))
                        .filter(N.isNotNullish)
                        .map(e => [e.id, e])
                    ),
                  [E, e]
                ),
                O = (0, o.useStateFromStoresObject)(
                  [T.default],
                  () =>
                    Object.fromEntries(
                      h
                        .map(T.default.getUser)
                        .filter(N.isNotNullish)
                        .map(e => [e.id, e])
                    ),
                  [h]
                );
              return n.useMemo(() => {
                let e = l.id,
                  n = (0, c.allChannelsSentinel)(l.id),
                  s = {};
                for (let [i, o] of Object.entries(t)) {
                  let t = !1,
                    d = !1;
                  if (o.type === u.ApplicationCommandPermissionType.CHANNEL) {
                    let e = o.id === n,
                      l = p[o.id];
                    (t = e || I.default.can(g.Permissions.VIEW_CHANNEL, l)),
                      (d = !0);
                  } else if (
                    o.type === u.ApplicationCommandPermissionType.ROLE
                  ) {
                    let n = o.id === e,
                      s = S[o.id];
                    (t = n || null != s),
                      (d = r || n || I.default.isRoleHigher(l, a, s));
                  } else if (
                    o.type === u.ApplicationCommandPermissionType.USER
                  ) {
                    let e = O[o.id];
                    (t = null != e),
                      (d =
                        null != e &&
                        (r ||
                          I.default.canManageUser(
                            g.Permissions.USE_APPLICATION_COMMANDS,
                            e,
                            l
                          )));
                  }
                  s[i] = { ...o, canRead: t, canWrite: d };
                }
                return s;
              }, [p, l, a, r, t, S, O]);
            })(e, A),
            hasChanges: x,
            selectedPermissionCount: C,
          }
        );
      }
    },
    809843: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return I;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        i = l("272030"),
        r = l("798609"),
        o = l("83910"),
        d = l("17837"),
        u = l("266926"),
        c = l("892692"),
        f = l("782340"),
        m = l("262083");
      function I(e) {
        let {
            applicationIcon: t,
            applicationName: I,
            canNavigate: T,
            command: N,
            guildId: E,
          } = e,
          h = a.useMemo(() => {
            var e;
            return (
              0 !==
              Object.keys(null !== (e = N.permissions) && void 0 !== e ? e : {})
                .length
            );
          }, [N.permissions]),
          g = a.useCallback(() => {
            null != N &&
              T() &&
              (0, s.openModalLazy)(async () => {
                let { default: e } = await l
                  .el("555022")
                  .then(l.bind(l, "555022"));
                return l =>
                  (0, n.jsx)(e, {
                    applicationIcon: t,
                    applicationId: N.applicationId,
                    applicationName: I,
                    command: N,
                    guildId: E,
                    ...l,
                  });
              });
          }, [t, I, T, N, E]),
          p = a.useCallback(
            e => {
              (0, i.openContextMenuLazy)(e, async () => {
                let { default: e } = await l
                  .el("443070")
                  .then(l.bind(l, "443070"));
                return t =>
                  (0, n.jsx)(e, {
                    ...t,
                    id: N.id,
                    label: f.default.Messages.COPY_ID_COMMAND,
                  });
              });
            },
            [N]
          ),
          S = N.type === r.ApplicationCommandType.CHAT ? o.default : d.default,
          O = (0, c.commandName)(N.type, N.displayName);
        return (0, n.jsxs)(s.Clickable, {
          onClick: g,
          className: m.item,
          onContextMenu: p,
          children: [
            (0, n.jsxs)("div", {
              className: m.identifier,
              children: [
                (0, n.jsx)(S, { className: m.icon, width: 24, height: 24 }),
                (0, n.jsx)(s.Text, { variant: "text-md/normal", children: O }),
              ],
            }),
            (0, n.jsx)("div", {
              className: m.statusContainer,
              children: h
                ? (0, n.jsxs)("div", {
                    className: m.statusLine,
                    children: [
                      (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children:
                          f.default.Messages
                            .INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES,
                      }),
                      (0, n.jsx)(u.default, {
                        height: 18,
                        width: 18,
                        className: m.statusIcon,
                      }),
                    ],
                  })
                : null,
            }),
          ],
        });
      }
    },
    167356: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        i = l("810567"),
        r = l("106490"),
        o = l("809843"),
        d = l("157453"),
        u = l("782340"),
        c = l("651010");
      function f(e) {
        let {
            applicationIcon: t,
            applicationName: l,
            canNavigate: f,
            guildId: m,
          } = e,
          {
            results: I,
            query: T,
            setQuery: N,
            unfilteredCount: E,
          } = (0, r.useIntegrationPermissionCommandSearch)();
        return (0, n.jsx)(a.Fragment, {
          children:
            null != I && E > 0
              ? (0, n.jsx)(d.default, {
                  bar: (0, n.jsx)(i.default, {
                    query: T,
                    onChange: N,
                    onClear: () => N(""),
                  }),
                  inModal: !1,
                  title: u.default.Messages.COMMANDS,
                  children: I.map((e, i) =>
                    (0, n.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, n.jsx)(o.default, {
                            applicationIcon: t,
                            applicationName: l,
                            canNavigate: f,
                            command: e,
                            guildId: m,
                          }),
                          i < I.length - 1
                            ? (0, n.jsx)(s.FormDivider, {})
                            : null,
                        ],
                      },
                      e.id
                    )
                  ),
                })
              : (0, n.jsx)(s.Card, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, n.jsx)(s.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children:
                      u.default.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS,
                  }),
                }),
        });
      }
    },
    581511: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return L;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("627445"),
        o = l.n(r),
        d = l("509043"),
        u = l("446674"),
        c = l("77078"),
        f = l("272030"),
        m = l("524768"),
        I = l("389153"),
        T = l("419830"),
        N = l("405645"),
        E = l("42203"),
        h = l("26989"),
        g = l("305961"),
        p = l("102985"),
        S = l("697218"),
        O = l("593195"),
        _ = l("45029"),
        A = l("682344"),
        C = l("483093"),
        x = l("158998"),
        R = l("49111"),
        M = l("782340"),
        v = l("164886");
      function L(e) {
        let { guild: t, id: s, type: i, isLocked: r, lockTooltipText: d } = e,
          u = !r || null != d;
        o(u, "No lockTooltipText provided while isLocked=true");
        let c = a.useCallback(
          e => {
            (0, f.openContextMenuLazy)(e, async () => {
              let { default: e } = await l
                .el("443070")
                .then(l.bind(l, "443070"));
              return t =>
                (0, n.jsx)(e, {
                  ...t,
                  id: s,
                  label: M.default.Messages.COPY_ID_COMMAND,
                });
            });
          },
          [s]
        );
        switch (i) {
          case m.ApplicationCommandPermissionType.CHANNEL:
            return (0, n.jsx)(j, {
              guild: t,
              id: s,
              isLocked: r,
              lockTooltipText: d,
              openEntryContextMenu: c,
            });
          case m.ApplicationCommandPermissionType.ROLE:
            return (0, n.jsx)(b, {
              guild: t,
              id: s,
              isLocked: r,
              lockTooltipText: d,
              openEntryContextMenu: c,
            });
          case m.ApplicationCommandPermissionType.USER:
            return (0, n.jsx)(P, {
              guild: t,
              id: s,
              isLocked: r,
              lockTooltipText: d,
              openEntryContextMenu: c,
            });
        }
      }
      function j(e) {
        let {
            guild: t,
            id: l,
            isLocked: s,
            lockTooltipText: r,
            openEntryContextMenu: o,
          } = e,
          d = (0, I.allChannelsSentinel)(t.id),
          {
            icon: f,
            name: m,
            categoryName: N,
          } = (0, u.useStateFromStoresObject)(
            [E.default],
            () => {
              if (d === l)
                return {
                  name: M.default.Messages
                    .INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                  icon: O.default,
                };
              let e = E.default.getChannel(l),
                n =
                  (null == e ? void 0 : e.parent_id) != null
                    ? E.default.getChannel(e.parent_id)
                    : null,
                a = null != e ? (0, T.getChannelIconComponent)(e, t) : null;
              return {
                icon: a,
                name: null == e ? void 0 : e.name,
                categoryName: null == n ? void 0 : n.name,
              };
            },
            [d, t, l]
          ),
          h = a.useCallback(
            e => {
              l !== d && o(e);
            },
            [d, l, o]
          );
        return null == f || null == m
          ? null
          : (0, n.jsxs)("div", {
              onContextMenu: h,
              className: v.identifier,
              children: [
                (0, n.jsx)(f, {
                  width: 20,
                  height: 20,
                  className: i(v.channelIcon, v.image),
                }),
                (0, n.jsx)(c.Text, {
                  className: v.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: m,
                }),
                null != N
                  ? (0, n.jsxs)(c.Text, {
                      className: v.tag,
                      variant: "text-sm/normal",
                      children: ["(", N, ")"],
                    })
                  : null,
                s ? (0, n.jsx)(D, { tooltipText: r }) : null,
              ],
            });
      }
      function b(e) {
        var t;
        let { guild: s, id: r, isLocked: o, lockTooltipText: m } = e,
          I = (0, u.useStateFromStores)([g.default], () =>
            g.default.getRole(s.id, r)
          ),
          T = (0, N.useRoleIcon)({ guildId: s.id, roleId: r, size: 24 }),
          E = a.useCallback(
            e => {
              null != s &&
                null != I &&
                (0, f.openContextMenuLazy)(e, async () => {
                  let { default: e } = await l
                    .el("178521")
                    .then(l.bind(l, "178521"));
                  return t => (0, n.jsx)(e, { ...t, guild: s, role: I });
                });
            },
            [s, I]
          );
        return (null == I ? void 0 : I.name) == null
          ? null
          : (0, n.jsxs)("div", {
              onContextMenu: E,
              className: v.identifier,
              children: [
                null != T
                  ? (0, n.jsx)(C.default, {
                      className: i(v.icon, v.image),
                      ...T,
                    })
                  : (0, n.jsx)(A.default, {
                      className: i(v.shield, v.image),
                      color:
                        null !== (t = I.colorString) && void 0 !== t
                          ? t
                          : (0, d.int2hex)(R.DEFAULT_ROLE_COLOR),
                    }),
                (0, n.jsx)(c.Text, {
                  className: v.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: I.name,
                }),
                o ? (0, n.jsx)(D, { tooltipText: m }) : null,
              ],
            });
      }
      function P(e) {
        let {
            guild: t,
            id: l,
            isLocked: a,
            lockTooltipText: s,
            openEntryContextMenu: i,
          } = e,
          r = (0, u.useStateFromStores)([S.default], () =>
            S.default.getUser(l)
          ),
          o = (0, u.useStateFromStores)(
            [h.default],
            () => {
              var e;
              return null === (e = h.default.getMember(t.id, l)) || void 0 === e
                ? void 0
                : e.nick;
            },
            [t.id, l]
          ),
          d = (0, u.useStateFromStores)(
            [p.default],
            () => p.default.hidePersonalInformation
          );
        return null == r
          ? null
          : (0, n.jsxs)("div", {
              onContextMenu: i,
              className: v.identifier,
              children: [
                (0, n.jsx)(c.Avatar, {
                  className: v.image,
                  src: r.getAvatarURL(t.id, 24),
                  "aria-label": r.username,
                  size: c.AvatarSizes.SIZE_24,
                }),
                (0, n.jsx)(c.Text, {
                  className: v.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: null != o ? o : r.username,
                }),
                d
                  ? null
                  : (0, n.jsx)(c.Text, {
                      className: v.tag,
                      variant: "text-sm/normal",
                      children: x.default.getUserTag(r),
                    }),
                a ? (0, n.jsx)(D, { tooltipText: s }) : null,
              ],
            });
      }
      function D(e) {
        let { tooltipText: t } = e;
        return (0, n.jsx)(c.Tooltip, {
          text: t,
          children: e =>
            (0, n.jsx)("div", {
              className: v.lockIcon,
              ...e,
              children: (0, n.jsx)(_.default, { width: 16, height: 16 }),
            }),
        });
      }
    },
    829319: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return P;
          },
        }),
        l("808653"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("627445"),
        i = l.n(s),
        r = l("917351"),
        o = l.n(r),
        d = l("446674"),
        u = l("77078"),
        c = l("851387"),
        f = l("716241"),
        m = l("524768"),
        I = l("389153"),
        T = l("702411"),
        N = l("15639"),
        E = l("5667"),
        h = l("271938"),
        g = l("305961"),
        p = l("697218"),
        S = l("228220"),
        O = l("599110"),
        _ = l("387111"),
        A = l("299039"),
        C = l("952943"),
        x = l("683830"),
        R = l("892692"),
        M = l("581511"),
        v = l("429310"),
        L = l("49111"),
        j = l("782340"),
        b = l("133023");
      function P(e) {
        let {
            commandId: t,
            editPermissions: l,
            guildId: s,
            noneSelectedText: r,
            overwrites: f,
            hasAccessToMutatePermissions: T,
          } = e,
          E = (0, d.useStateFromStores)([g.default], () =>
            g.default.getGuild(s)
          );
        i(null != E, "");
        let h = (0, d.useStateFromStores)([g.default], () =>
            g.default.getRoles(s)
          ),
          [S, O] = a.useState(new Set()),
          M = a.useMemo(() => {
            let e = (0, I.allChannelsSentinel)(s),
              t = o(h)
                .sortBy(e => e.position)
                .reduce((e, t, l) => ((e[t.id] = l), e), {});
            return Object.values(f)
              .filter(e => e.canRead)
              .sort((l, n) => {
                let a = l.type - n.type;
                if (0 !== a) return a;
                switch (l.type) {
                  case m.ApplicationCommandPermissionType.USER:
                    return (function (e, t, l) {
                      let n = Number(e.canWrite) - Number(t.canWrite);
                      if (0 !== n) return n;
                      let a = p.default.getUser(e.id),
                        s = p.default.getUser(t.id);
                      if (null != a && null != s) {
                        let e = _.default.getName(l, void 0, a),
                          t = _.default.getName(l, void 0, s);
                        return null == e ? void 0 : e.localeCompare(t);
                      }
                      return A.default.compare(e.id, t.id);
                    })(l, n, s);
                  case m.ApplicationCommandPermissionType.ROLE:
                    return (function (e, t, l, n) {
                      if (e.id === l) return -1;
                      if (t.id === l) return 1;
                      let a = n[e.id],
                        s = n[t.id];
                      return a > s ? -1 : 1;
                    })(l, n, s, t);
                  case m.ApplicationCommandPermissionType.CHANNEL:
                    return (function (e, t, l) {
                      if (e.id === l) return -1;
                      if (t.id === l) return 1;
                      let n = Number(e.canWrite) - Number(t.canWrite);
                      return 0 !== n ? n : A.default.compare(e.id, t.id);
                    })(l, n, e);
                }
              });
          }, [s, f, h]),
          v = a.useCallback(
            (e, t) => {
              let n = (0, R.toPermissionKey)(e, t);
              l({}, [n]);
            },
            [l]
          ),
          L = a.useCallback(
            (e, t, n) => {
              let a = (0, R.toPermissionKey)(e, t),
                s = f[a];
              null != s && l({ [a]: { id: e, permission: n, type: t } }, []);
            },
            [l, f]
          );
        a.useEffect(() => {
          let e = Object.values(f)
            .filter(
              e =>
                e.type === m.ApplicationCommandPermissionType.USER &&
                !e.canRead &&
                !S.has(e.id)
            )
            .map(e => e.id);
          0 !== e.length &&
            (c.default.requestMembersById(s, e, !1),
            O(t => new Set([...t, ...e])));
        }, [s, f, S, O]);
        let j = (0, d.useStateFromStores)([x.default], () =>
            x.default.getApplicationId()
          ),
          P = (0, d.useStateFromStores)([C.default], () =>
            null == j
              ? void 0
              : C.default.integrations.find(e => {
                  var t;
                  return (
                    (null === (t = e.application) || void 0 === t
                      ? void 0
                      : t.id) === j
                  );
                })
          ),
          y = (0, d.useStateFromStores)(
            [N.default],
            () => void 0 !== P && N.default.canShowToggleTooltip(P.id)
          );
        return (0, n.jsx)(a.Fragment, {
          children:
            M.length > 0
              ? M.map(e =>
                  (0, n.jsx)(
                    D,
                    {
                      guild: E,
                      commandId: t,
                      onChange: t => L(e.id, e.type, t),
                      onRemove: () => v(e.id, e.type),
                      overwrite: e,
                      integration: P,
                      canShowMigrationTooltip: y,
                      hasAccessToMutatePermissions: T,
                    },
                    e.id
                  )
                )
              : (0, n.jsx)("div", {
                  className: b.noItemsSelected,
                  children: (0, n.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: r,
                  }),
                }),
        });
      }
      function D(e) {
        var t, l, s;
        let i,
          {
            guild: r,
            commandId: o,
            onChange: d,
            onRemove: c,
            overwrite: N,
            integration: g,
            canShowMigrationTooltip: p,
            hasAccessToMutatePermissions: S,
          } = e,
          _ = N.id === r.id || N.id === (0, I.allChannelsSentinel)(r.id),
          A =
            null == g
              ? void 0
              : null === (l = g.application) || void 0 === l
                ? void 0
                : null === (t = l.bot) || void 0 === t
                  ? void 0
                  : t.username,
          C = !N.canWrite || !S,
          x = h.default.getId();
        S
          ? !N.canWrite &&
            (N.type === m.ApplicationCommandPermissionType.USER
              ? (i =
                  N.id === x
                    ? j.default.Messages
                        .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF
                    : j.default.Messages
                        .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER)
              : N.type === m.ApplicationCommandPermissionType.ROLE &&
                (i =
                  j.default.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE))
          : (i =
              null != o
                ? j.default.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND
                : j.default.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION);
        let R =
          p && null != g && N.id === r.id && void 0 !== A && !N.permission;
        a.useEffect(() => {
          if (R) {
            var e;
            O.default.track(
              L.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
              {
                ...(0, f.collectGuildAnalyticsMetadata)(r.id),
                application_id:
                  null == g
                    ? void 0
                    : null === (e = g.application) || void 0 === e
                      ? void 0
                      : e.id,
                location: "toggle",
              }
            );
          }
        }, [
          r.id,
          null == g
            ? void 0
            : null === (s = g.application) || void 0 === s
              ? void 0
              : s.id,
          R,
        ]);
        let P = (0, n.jsx)(u.Tooltip, {
            tooltipClassName: b.tooltip,
            text: i,
            shouldShow: C,
            position: "left",
            hideOnClick: !1,
            children: e =>
              (0, n.jsx)("div", {
                ...e,
                children: (0, n.jsx)(v.default, {
                  isDisabled: C,
                  currentValue: N.permission,
                  onChange: R
                    ? e => {
                        T.default.dismissToggleTooltip(r.id, g), d(e);
                      }
                    : d,
                }),
              }),
          }),
          D = (0, n.jsx)(u.Popout, {
            renderPopout: () =>
              (0, n.jsx)(u.Clickable, {
                onClick: e => {
                  e.stopPropagation(), T.default.dismissToggleTooltip(r.id, g);
                },
                children: (0, n.jsx)(E.default, {
                  className: b.tooltip,
                  content:
                    j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format(
                      {
                        botName: A,
                        link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                      }
                    ),
                  onClick: () => {},
                }),
              }),
            position: "bottom",
            align: "center",
            animation: u.Popout.Animation.TRANSLATE,
            onRequestClose: () => T.default.dismissToggleTooltip(r.id, g),
            shouldShow: R,
            closeOnScroll: !0,
            children: () => P,
          });
        return (0, n.jsxs)(
          "div",
          {
            className: b.entryItem,
            children: [
              (0, n.jsx)("div", {
                className: b.entryName,
                children: (0, n.jsx)(M.default, {
                  guild: r,
                  id: N.id,
                  type: N.type,
                  isLocked: C,
                  lockTooltipText: i,
                }),
              }),
              (0, n.jsxs)("div", {
                className: b.entryActions,
                children: [
                  (0, n.jsx)(y, {
                    commandId: o,
                    isSentinel: _,
                    isDisabled: !S,
                    onRemove: c,
                  }),
                  D,
                ],
              }),
            ],
          },
          N.id
        );
      }
      function y(e) {
        let { commandId: t, isSentinel: l, isDisabled: a, onRemove: s } = e;
        return a
          ? null
          : null != t || !l
            ? (0, n.jsx)("div", {
                className: b.removeActions,
                children: (0, n.jsx)(u.Clickable, {
                  className: b.removeContainer,
                  "aria-label":
                    j.default.Messages
                      .INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                  onClick: s,
                  children: (0, n.jsx)(S.default, {
                    width: 24,
                    height: 24,
                    className: b.removeIcon,
                  }),
                }),
              })
            : null;
      }
    },
    29106: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("917351"),
        i = l.n(s),
        r = l("316693"),
        o = l("446674"),
        d = l("77078"),
        u = l("524768"),
        c = l("389153"),
        f = l("454273"),
        m = l("26989"),
        I = l("305961"),
        T = l("957255"),
        N = l("555158"),
        E = l("68238"),
        h = l("482391"),
        g = l("683830"),
        p = l("464782"),
        S = l("636024"),
        O = l("829319"),
        _ = l("409645"),
        A = l("157453"),
        C = l("49111"),
        x = l("317041"),
        R = l("782340"),
        M = l("258934");
      function v(e) {
        let {
            applicationId: t,
            commandId: s,
            guildId: p,
            inModal: S,
            editedTargetPermissions: v,
            originalApplicationPermissions: b,
            originalCommandPermissions: P,
            selectedPermissionCount: D,
          } = e,
          y = (0, o.useStateFromStores)(
            [g.default],
            () => (null == s ? null : g.default.getCommand(s)),
            [s]
          ),
          G = (null == y ? void 0 : y.defaultMemberPermissions) != null,
          B = (0, o.useStateFromStores)(
            [I.default, m.default, T.default],
            () => {
              let e = I.default.getGuild(p),
                t = m.default.getSelfMember(p);
              return (
                null != e &&
                null != t &&
                (0, c.hasAccess)({
                  PermissionStore: T.default,
                  guild: e,
                  selfMember: t,
                  applicationLevelPermissions: b,
                  commandLevelPermissions: P,
                  defaultMemberPermissions:
                    null == y ? void 0 : y.defaultMemberPermissions,
                })
              );
            },
            [p, y, b, P]
          ),
          H = null != s ? s : t,
          [k, U] = a.useMemo(() => {
            let e = {},
              t = {};
            for (let [l, n] of Object.entries(v))
              n.type === u.ApplicationCommandPermissionType.CHANNEL
                ? (e[l] = n)
                : (t[l] = n);
            return [e, t];
          }, [v]),
          F = a.useCallback(
            e => {
              let t = I.default.getGuild(p),
                l = m.default.getSelfMember(p);
              return (
                null != t &&
                null != l &&
                (null != s
                  ? (0, c.hasAccess)({
                      PermissionStore: T.default,
                      guild: t,
                      selfMember: l,
                      applicationLevelPermissions: b,
                      commandLevelPermissions: e,
                      defaultMemberPermissions:
                        null == y ? void 0 : y.defaultMemberPermissions,
                    })
                  : (0, c.hasAccess)({
                      PermissionStore: T.default,
                      guild: t,
                      selfMember: l,
                      applicationLevelPermissions: e,
                    }))
              );
            },
            [p, y, s, b]
          ),
          w = a.useCallback(
            (e, t) => {
              let l;
              let n = null;
              if (0 !== t.length) {
                let e = t[0],
                  a = v[e];
                if (a.type === u.ApplicationCommandPermissionType.USER)
                  l = _.InvalidAction.REMOVE_SELF;
                else {
                  let e = a.id;
                  if (
                    ((l = _.InvalidAction.REMOVE_ROLE),
                    (0, f.isEveryoneRoleId)(p, e))
                  )
                    n = "@everyone";
                  else {
                    let t = I.default.getRole(p, e);
                    n = null != t ? t.name : "role";
                  }
                }
              } else {
                let t = Object.values(e)[0],
                  a = t.id;
                if (
                  ((l = _.InvalidAction.DENY_ROLE),
                  (0, f.isEveryoneRoleId)(p, a))
                )
                  n = "@everyone";
                else {
                  let e = I.default.getRole(p, a);
                  n = null != e ? e.name : "role";
                }
              }
              (0, _.showApplicationCommandPermissionLockoutModal)(l, n);
            },
            [p, v]
          ),
          W = a.useCallback(
            (e, l) => {
              let n = {};
              for (let [e, t] of Object.entries(v))
                n[e] = { id: t.id, permission: t.permission, type: t.type };
              (n = Object.assign(n, e)), l.length > 0 && (n = i.omit(n, l));
              let a = F(n);
              if (!a) {
                w(e, l);
                return;
              }
              h.editPermissions(t, H, n);
            },
            [t, v, H, F, w]
          ),
          V = a.useCallback(() => {
            let e = Object.keys(k);
            return (0, d.openModalLazy)(async () => {
              let { default: t } = await l
                .el("609789")
                .then(l.bind(l, "609789"));
              return l =>
                (0, n.jsx)(t, {
                  editPermissions: W,
                  guildId: p,
                  headerText:
                    R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                  hasMemberSearch: !1,
                  overwrittenKeys: e,
                  search: L,
                  searchPlaceholderText:
                    R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
                  selectedPermissionCount: D,
                  ...l,
                });
            });
          }, [W, k, p, D]),
          Y = a.useCallback(() => {
            let e = Object.keys(U);
            return (0, d.openModalLazy)(async () => {
              let { default: t } = await l
                .el("609789")
                .then(l.bind(l, "609789"));
              return l =>
                (0, n.jsx)(t, {
                  editPermissions: W,
                  guildId: p,
                  hasMemberSearch: !0,
                  headerText:
                    R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                  overwrittenKeys: e,
                  search: j,
                  searchPlaceholderText:
                    R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
                  selectedPermissionCount: D,
                  ...l,
                });
            });
          }, [W, p, U, D]),
          K = a.useCallback(
            () =>
              (0, d.openModalLazy)(async () => {
                let { default: e } = await l
                    .el("317671")
                    .then(l.bind(l, "317671")),
                  t = y.defaultMemberPermissions;
                return (
                  r.equals(t, c.DISABLED_BY_DEFAULT_PERMISSION_FLAG) &&
                    (t = C.Permissions.ADMINISTRATOR),
                  l => (0, n.jsx)(e, { ...l, defaultMemberPermissions: t })
                );
              }),
            [y]
          ),
          z = D - x.APPLICATION_COMMAND_PERMISSIONS_LIMIT,
          Z = z >= 0,
          q = [
            {
              buttonClick: Y,
              buttonText:
                R.default.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
              noneSelectedText:
                R.default.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
              overwrites: U,
              title:
                null == s
                  ? R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD
                  : R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER,
            },
            {
              buttonClick: V,
              buttonText:
                R.default.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
              noneSelectedText:
                R.default.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
              overwrites: k,
              title:
                null == s
                  ? R.default.Messages.CHANNELS
                  : R.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER,
            },
          ];
        return (0, n.jsxs)(a.Fragment, {
          children: [
            z > 0
              ? (0, n.jsx)(N.default, {
                  messageType: N.HelpMessageTypes.WARNING,
                  children:
                    R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format(
                      { removeCount: z }
                    ),
                })
              : null,
            G
              ? (0, n.jsxs)("div", {
                  className: M.requiredPermissionsBanner,
                  children: [
                    (0, n.jsx)(E.default, {
                      className: M.icon,
                      height: 18,
                      width: 18,
                    }),
                    (0, n.jsx)("span", {
                      className: M.message,
                      children:
                        R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format(),
                    }),
                    (0, n.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      onClick: K,
                      size: d.Button.Sizes.SMALL,
                      className: M.addButton,
                      children: R.default.Messages.VIEW,
                    }),
                  ],
                })
              : null,
            q.map((e, t) => {
              let l = t =>
                  (0, n.jsx)(d.Button, {
                    ...t,
                    color: d.Button.Colors.PRIMARY,
                    disabled: Z || !B,
                    onClick: e.buttonClick,
                    size: d.Button.Sizes.TINY,
                    className: M.addButton,
                    children: e.buttonText,
                  }),
                a = null;
              return (
                B
                  ? Z &&
                    (a =
                      R.default.Messages
                        .INTEGRATIONS_APPLICATION_PERMISSIONS_MAX)
                  : (a =
                      null != s
                        ? R.default.Messages
                            .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND
                        : R.default.Messages
                            .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION),
                (0, n.jsx)(
                  A.default,
                  {
                    bar: (0, n.jsx)(d.Tooltip, {
                      tooltipClassName: M.tooltip,
                      text: a,
                      shouldShow: null != a,
                      children: e => l(e),
                    }),
                    inModal: S,
                    title: e.title,
                    children: (0, n.jsx)("div", {
                      className: S ? void 0 : M.listContainer,
                      children: (0, n.jsx)(O.default, {
                        guildId: p,
                        commandId: s,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: W,
                        hasAccessToMutatePermissions: B,
                      }),
                    }),
                  },
                  t
                )
              );
            }),
          ],
        });
      }
      function L(e) {
        let t = (0, p.useIntegrationPermissionChannelSearch)(e);
        return {
          ...t,
          results: t.results.map(e => ({
            ...e,
            type: u.ApplicationCommandPermissionType.CHANNEL,
          })),
        };
      }
      function j(e) {
        let t = (0, S.useIntegrationPermissionMemberSearch)(e);
        return {
          ...t,
          results: t.results.roles
            .map(e => ({ ...e, type: u.ApplicationCommandPermissionType.ROLE }))
            .concat(
              t.results.members.map(e => ({
                ...e,
                type: u.ApplicationCommandPermissionType.USER,
              }))
            ),
        };
      }
    },
    429310: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("77078"),
        o = l("36694"),
        d = l("945330"),
        u = l("782340"),
        c = l("412150");
      let f = [!1, !0];
      function m(e) {
        let { isDisabled: t, currentValue: l, onChange: s } = e,
          o = (0, r.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: t,
          }),
          d = a.useCallback(
            e => {
              !t && e !== l && s(e);
            },
            [t, l, s]
          );
        return (0, n.jsx)("div", {
          className: i(c.group, { [c.disabled]: t }),
          ...o,
          children: f.map(e =>
            (0, n.jsx)(
              I,
              { isSelected: l === e, itemValue: e, onClick: () => d(e) },
              e.toString()
            )
          ),
        });
      }
      function I(e) {
        let { isSelected: t, itemValue: l, onClick: a } = e,
          s = l ? c.allow : c.deny,
          f = l ? o.default : d.default,
          m = l
            ? u.default.Messages.PERMISSION_OVERRIDE_ALLOW
            : u.default.Messages.PERMISSION_OVERRIDE_DENY,
          I = (0, r.useRadioItem)({ isSelected: t, label: m });
        return (0, n.jsx)(r.Clickable, {
          className: i(c.item, s, { [c.selected]: t }),
          onClick: a,
          ...I,
          children: (0, n.jsx)(f, { width: 16, height: 16 }),
        });
      }
    },
    409645: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          InvalidAction: function () {
            return a;
          },
          showApplicationCommandPermissionLockoutModal: function () {
            return d;
          },
        });
      var n,
        a,
        s = l("404118"),
        i = l("701909"),
        r = l("49111"),
        o = l("782340");
      function d(e, t) {
        let l;
        0 === e
          ? (l =
              o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format())
          : 1 === e
            ? (l =
                o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format(
                  { name: t }
                ))
            : 2 === e &&
              (l =
                o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format(
                  { name: t }
                )),
          s.default.show({
            title: o.default.Messages.SELF_DENY_PERMISSION_TITLE,
            body: l,
            cancelText: o.default.Messages.HELP_DESK,
            onCancel() {
              window.open(
                i.default.getArticleURL(
                  r.HelpdeskArticles.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT
                )
              );
            },
          });
      }
      ((n = a || (a = {}))[(n.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (n[(n.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (n[(n.DENY_ROLE = 2)] = "DENY_ROLE");
    },
    157453: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        i = l("77078"),
        r = l("882487");
      function o(e) {
        let { bar: t, children: l, className: a, inModal: o, title: d } = e;
        return (0, n.jsxs)(i.Card, {
          editable: !0,
          className: s(r.card, a, { [r.inModal]: o }),
          children: [
            (0, n.jsxs)("div", {
              className: s(r.cardHeader, { [r.inModal]: o }),
              children: [
                (0, n.jsx)(i.Text, {
                  variant: "text-xs/semibold",
                  className: r.title,
                  children: d,
                }),
                (0, n.jsx)("div", { children: t }),
              ],
            }),
            o ? (0, n.jsx)(i.FormDivider, {}) : null,
            l,
          ],
        });
      }
    },
    990241: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("446674"),
        i = l("77078"),
        r = l("333231"),
        o = l("83910"),
        d = l("482391"),
        u = l("683830"),
        c = l("859728"),
        f = l("167356"),
        m = l("29106"),
        I = l("782340"),
        T = l("162052");
      function N(e) {
        let { application: t, canNavigate: l, guildId: c } = e,
          m = (0, s.useStateFromStores)([u.default], () =>
            u.default.isUnavailable()
          );
        return (a.useEffect(
          () => (
            d.initIntegrationPermissions(t.id), d.clearIntegrationPermissions
          ),
          [t.id]
        ),
        a.useEffect(() => {
          d.getApplicationCommandPermissions(t.id, c, t.id),
            d.getApplicationCommands(c, t.id);
        }, [t.id, c]),
        m)
          ? null
          : (0, n.jsxs)(a.Fragment, {
              children: [
                (0, n.jsx)(r.default, {
                  icon: (0, n.jsx)(o.default, {}),
                  title:
                    I.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS,
                }),
                (0, n.jsx)(i.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children:
                    I.default.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION,
                }),
                (0, n.jsx)(E, { guildId: c, applicationId: t.id }),
                (0, n.jsx)(f.default, {
                  applicationIcon: t.icon,
                  applicationName: t.name,
                  canNavigate: l,
                  guildId: c,
                }),
              ],
            });
      }
      function E(e) {
        let { applicationId: t, guildId: l } = e,
          {
            originalApplicationPermissions: a,
            editedTargetPermissions: s,
            selectedPermissionCount: i,
          } = (0, c.default)(l, t);
        return (0, n.jsx)("div", {
          className: T.applicationPermissions,
          children: (0, n.jsx)(m.default, {
            applicationId: t,
            guildId: l,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: a,
            selectedPermissionCount: i,
          }),
        });
      }
    },
    758085: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return H;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("627445"),
        o = l.n(r),
        d = l("917351"),
        u = l.n(d),
        c = l("65597"),
        f = l("669491"),
        m = l("77078"),
        I = l("970728"),
        T = l("133403"),
        N = l("145079"),
        E = l("534291"),
        h = l("87657"),
        g = l("841098"),
        p = l("679653"),
        S = l("610174"),
        O = l("712125"),
        _ = l("54346"),
        A = l("27618"),
        C = l("697218"),
        x = l("91551"),
        R = l("941886"),
        M = l("145131"),
        v = l("423487"),
        L = l("100835"),
        j = l("49111"),
        b = l("782340"),
        P = l("857143"),
        D = l("685691"),
        y = l("890957");
      let G = { INVITER: 3, INVITE_CODE: 3, USES: 1, EXPIRES: 2 };
      function B(e) {
        var t, l;
        let {
            invite: a,
            showChannel: s = !1,
            inviteDisabled: r = !1,
            hide: o = !1,
          } = e,
          d = a.uses;
        return (
          a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)),
          (0, n.jsxs)(M.default, {
            className: i(P.inviteSettingsInviteRow, D.card, {
              [P.inviteDisabledRow]: r,
            }),
            children: [
              (0, n.jsx)(M.default, {
                grow: G.INVITER,
                basis: 0,
                align: M.default.Align.CENTER,
                className: i(P.text),
                children: (0, n.jsxs)(M.default.Child, {
                  children: [
                    null == (t = a.inviter)
                      ? null
                      : (0, n.jsxs)("div", {
                          className: P.user,
                          children: [
                            (0, n.jsx)(h.default, {
                              user: t,
                              size: m.AvatarSizes.SIZE_20,
                              className: P.avatar,
                            }),
                            (0, n.jsx)(N.default, {
                              className: P.username,
                              discriminatorClass: P.discriminator,
                              user: t,
                            }),
                          ],
                        }),
                    ((l = a.channel),
                    s
                      ? (0, n.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: (0, p.computeChannelName)(
                            l,
                            C.default,
                            A.default,
                            !0
                          ),
                        })
                      : null),
                  ],
                }),
              }),
              (0, n.jsx)(M.default, {
                grow: G.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: M.default.Align.CENTER,
                className: P.text,
                children: (0, n.jsx)(m.Text, {
                  className: P.inviteCode,
                  variant: "text-sm/normal",
                  children: o ? "..." : a.code,
                }),
              }),
              (0, n.jsx)(M.default, {
                grow: G.USES,
                basis: 0,
                justify: M.default.Justify.END,
                align: M.default.Align.CENTER,
                className: i(P.text),
                children: (0, n.jsx)(m.Text, {
                  className: P.uses,
                  variant: "text-sm/normal",
                  children: d,
                }),
              }),
              (0, n.jsx)(M.default, {
                grow: G.EXPIRES,
                basis: 0,
                align: M.default.Align.CENTER,
                justify: M.default.Justify.END,
                className: i(P.text, P.countdownColumn),
                children: (0, n.jsx)(m.Text, {
                  className: P.countdown,
                  variant: "text-sm/normal",
                  children: (0, n.jsx)(x.default, {
                    deadline: a.getExpiresAt(),
                  }),
                }),
              }),
              (0, n.jsx)(T.default, {
                className: P.revokeInvite,
                onClick: () => {
                  I.default.revokeInvite(a);
                },
              }),
            ],
          })
        );
      }
      function H(e) {
        let {
          invites: t,
          guild: s,
          hide: i,
          channel: r = null,
          showChannel: d = !1,
          loading: I = !1,
          canCreateInvites: T = !1,
        } = e;
        o(null != s, "guild is required");
        let N = (0, L.useInvitesDisabledPermission)(s),
          { enableInvitesDisabled: h } = (0, L.useInvitesDisabledExperiment)(s),
          { showAlertMode: p } = (0, S.useGuildAlertModeEnabled)(s.id),
          A = (0, c.default)([_.default], () =>
            _.default.getGuildIncident(s.id)
          ),
          C =
            s.hasFeature(j.GuildFeatures.INVITES_DISABLED) ||
            (p &&
              (null == A ? void 0 : A.invitesDisabledUntil) != null &&
              new Date(A.invitesDisabledUntil) > new Date()),
          [x, D] = a.useState(!1);
        a.useEffect(() => {
          N &&
            L.InvitesDisabledExperiment.trackExposure({
              guildId: s.id,
              location: "5c23b0_1",
            });
        }, [N, h, s.id]);
        let H = (0, g.default)(),
          k = a.useMemo(
            () =>
              null == t || I
                ? []
                : u(t)
                    .sortBy(e => {
                      var t, l;
                      return (
                        null !==
                          (l =
                            null === (t = e.inviter) || void 0 === t
                              ? void 0
                              : t.username) && void 0 !== l
                          ? l
                          : ""
                      ).toLowerCase();
                    })
                    .value(),
            [t, I]
          ),
          U = () => {
            (0, m.openModalLazy)(async () => {
              let { default: e } = await l
                .el("310688")
                .then(l.bind(l, "310688"));
              return t =>
                (0, n.jsx)(e, {
                  ...t,
                  channel: r,
                  guild: s,
                  source: j.InstantInviteSources.SETTINGS_INVITE,
                });
            });
          },
          F = async e => {
            if (!x) {
              D(!0);
              try {
                await (0, L.setInvitesDisabled)(s, e);
              } catch (e) {
              } finally {
                D(!1);
              }
            }
          },
          w = () => {
            if (p) {
              let e = { source: O.GuildIncidentActionSources.GUILD_SETTINGS };
              (0, m.openModalLazy)(async () => {
                let { default: t } = await l
                  .el("186638")
                  .then(l.bind(l, "186638"));
                return l =>
                  (0, n.jsx)(t, { ...l, guildId: s.id, analyticsData: e });
              });
            } else
              C
                ? F(!1)
                : (0, m.openModalLazy)(async () => {
                    let { default: e } = await l
                      .el("581517")
                      .then(l.bind(l, "581517"));
                    return function (t) {
                      return (0, n.jsx)(e, { ...t, onConfirm: () => F(!0) });
                    };
                  });
          };
        return (0, n.jsx)(E.ListContentScroller, {
          sections: [Math.max(1, k.length)],
          renderSection: () => {
            let e;
            return (
              (e =
                0 !== k.length || I
                  ? (0, n.jsxs)(M.default, {
                      children: [
                        (0, n.jsx)(M.default.Child, {
                          grow: G.INVITER,
                          basis: 0,
                          className: y.marginReset,
                          children: (0, n.jsx)(m.FormTitle, {
                            children: b.default.Messages.INSTANT_INVITE_INVITER,
                          }),
                        }),
                        (0, n.jsx)(M.default.Child, {
                          basis: 0,
                          grow: G.INVITE_CODE,
                          className: y.marginReset,
                          children: (0, n.jsx)(m.FormTitle, {
                            children:
                              b.default.Messages.INSTANT_INVITE_INVITE_CODE,
                          }),
                        }),
                        (0, n.jsx)(M.default.Child, {
                          grow: G.USES,
                          basis: 0,
                          className: P.textAlignRight,
                          children: (0, n.jsx)(m.FormTitle, {
                            children: b.default.Messages.INSTANT_INVITE_USES,
                          }),
                        }),
                        (0, n.jsx)(M.default.Child, {
                          grow: G.EXPIRES,
                          basis: 0,
                          className: P.textAlignRight,
                          children: (0, n.jsx)(m.FormTitle, {
                            children: b.default.Messages.INSTANT_INVITE_EXPIRES,
                          }),
                        }),
                      ],
                    })
                  : (0, n.jsxs)(R.default, {
                      theme: H,
                      children: [
                        (0, n.jsx)(R.EmptyStateImage, {
                          darkSrc: l("553021"),
                          lightSrc: l("752499"),
                          width: 256,
                          height: 130,
                        }),
                        (0, n.jsx)(R.EmptyStateText, {
                          note: b.default.Messages.NO_INVITES_BODY,
                          children: b.default.Messages.NO_INVITES_LABEL,
                        }),
                      ],
                    })),
              (0, n.jsx)(
                m.FormSection,
                {
                  className: P.headerSection,
                  children: (0, n.jsxs)(m.HeadingLevel, {
                    component: (0, n.jsx)(m.FormTitle, {
                      tag: m.FormTitleTags.H1,
                      children: b.default.Messages.INVITES,
                    }),
                    children: [
                      (0, n.jsx)(m.FormText, {
                        className: y.marginBottom20,
                        type: m.FormTextTypes.DESCRIPTION,
                        children: T
                          ? b.default.Messages.SETTINGS_INVITE_TIP.format({
                              onCreateInvite: U,
                            })
                          : b.default.Messages
                              .SETTINGS_INVITE_TIP_WITHOUT_CREATE,
                      }),
                      (h || p || C) &&
                        (0, n.jsxs)("div", {
                          className: P.inviteDisabledContainer,
                          children: [
                            (0, n.jsx)(m.Button, {
                              size: m.Button.Sizes.SMALL,
                              color: C
                                ? m.Button.Colors.BRAND
                                : m.Button.Colors.RED,
                              disabled: !N,
                              submitting: x,
                              onClick: w,
                              children: C
                                ? b.default.Messages.ENABLE_INVITES
                                : b.default.Messages.DISABLE_INVITES,
                            }),
                            C &&
                              (0, n.jsxs)("div", {
                                className: P.inviteDisabledTip,
                                children: [
                                  (0, n.jsx)(v.default, {
                                    color:
                                      f.default.unsafe_rawColors.YELLOW_300.css,
                                  }),
                                  (0, n.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children:
                                      b.default.Messages.INVITES_DISABLED_TIP,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      (0, n.jsx)(m.FormDivider, { className: P.headerDivider }),
                      e,
                    ],
                  }),
                },
                "header"
              )
            );
          },
          renderRow: e => {
            let { section: t, row: l } = e;
            if (0 === k.length && 0 === l && I)
              return (0, n.jsx)(
                m.Spinner,
                {
                  className: y.marginTop20,
                  type: m.Spinner.Type.SPINNING_CIRCLE,
                },
                "spinner"
              );
            if (t > 0) return null;
            let a = k[l];
            return null == a
              ? null
              : (0, n.jsx)(
                  B,
                  { hide: i, invite: a, showChannel: d, inviteDisabled: C },
                  a.code
                );
          },
          rowHeight: (e, t) =>
            e > 0
              ? 0
              : 0 === k.length && 0 === t && I
                ? 62
                : null != k[t]
                  ? 62
                  : 0,
          sectionHeight: () => (0 !== k.length || I ? 120 : 344),
        });
      }
    },
    608684: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ImageUploaderIcon: function () {
            return T;
          },
          default: function () {
            return E;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("627445"),
        o = l.n(r),
        d = l("77078"),
        u = l("159885"),
        c = l("694187"),
        f = l("49111"),
        m = l("782340"),
        I = l("574448");
      function T(e) {
        let { className: t, icon: l = null } = e;
        return (0, n.jsx)("div", {
          className: i(I.imageUploaderIcon, t),
          children: l,
        });
      }
      class N extends a.PureComponent {
        handleExternalFileChange(e) {
          o(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted"
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let t, l, a, s;
          let {
            image: r,
            hint: o,
            name: N,
            makeURL: E,
            disabled: h,
            onChange: g,
            showIcon: p,
            showIconDisabled: S,
            className: O,
            imageClassName: _,
            iconClassName: A,
            iconWrapperClassName: C,
            icon: x,
            hideSize: R,
            imageStyle: M,
            showRemoveButton: v,
            maxFileSizeBytes: L,
            onFileSizeError: j,
            onOpenImageSelectModal: b,
            "aria-label": P,
          } = this.props;
          if (
            (null != (t = null != r && /^data:/.test(r) ? r : E(r))
              ? (l = 'url("'.concat(t, '")'))
              : null != N &&
                (a = (0, n.jsx)("div", {
                  className: I.imageUploaderAcronym,
                  children: (0, u.getAcronym)(N),
                })),
            h)
          )
            return (0, n.jsx)("div", {
              className: i(I.imageUploader, I.disabled, O),
              children: (0, n.jsxs)("div", {
                className: i(I.imageUploaderInner, _),
                style: { ...M, backgroundImage: l },
                children: [
                  a,
                  S &&
                    (0, n.jsx)("div", {
                      className: i(
                        I.imageUploaderIcon,
                        I.imageUploaderIconDisabled,
                        A
                      ),
                      children: x,
                    }),
                ],
              }),
            });
          null != r
            ? (s = (0, n.jsx)(d.Anchor, {
                className: I.removeButton,
                onClick: this.handleRemove,
                children: m.default.Messages.REMOVE,
              }))
            : !R &&
              (s = (0, n.jsx)("small", {
                className: I.sizeInfo,
                children: m.default.Messages.MINIMUM_SIZE.format({
                  size: f.AVATAR_SIZE,
                }),
              }));
          let D =
            null !== (e = null != P ? P : o) && void 0 !== e
              ? e
              : m.default.Messages.CHANGE_AVATAR;
          return (0, n.jsxs)("div", {
            className: i(I.imageUploader, O),
            children: [
              (0, n.jsx)(d.FocusRing, {
                within: !0,
                children: (0, n.jsxs)("div", {
                  className: p ? i(I.imageUploaderIconWrapper, C) : void 0,
                  children: [
                    (0, n.jsxs)("div", {
                      className: i(I.imageUploaderInner, _),
                      style: { ...M, backgroundImage: l },
                      children: [
                        (0, n.jsx)("span", { "aria-hidden": !0, children: a }),
                        null != b
                          ? (0, n.jsx)(d.Clickable, {
                              className: I.imageUploaderFileInput,
                              "aria-label": D,
                              onClick: b,
                            })
                          : (0, n.jsx)(c.default, {
                              ref: this.inputRef,
                              onChange: g,
                              className: I.imageUploaderFileInput,
                              "aria-label": D,
                              tabIndex: 0,
                              maxFileSizeBytes: L,
                              onFileSizeError: j,
                            }),
                      ],
                    }),
                    null != o &&
                      (0, n.jsx)("div", {
                        className: I.imageUploaderHint,
                        "aria-hidden": "true",
                        children: o,
                      }),
                    p && (0, n.jsx)(T, { className: A, icon: x }),
                  ],
                }),
              }),
              v ? s : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = a.createRef()),
            (this.handleRemove = () => {
              this.props.onChange(null);
            });
        }
      }
      N.defaultProps = {
        name: "",
        makeURL: e => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      };
      var E = N;
    },
    674916: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        i = l("77078"),
        r = l("145131"),
        o = l("8161"),
        d = l("713573"),
        u = l("782340"),
        c = l("34849");
      function f(e) {
        let {
          name: t,
          description: l,
          icon: a,
          imageSrc: f,
          iconBackgroundColor: m,
          iconClassName: I,
          details: T,
          detailsClassName: N,
          isHeader: E,
          isPremium: h,
        } = e;
        return (0, n.jsxs)(r.default, {
          justify: r.default.Justify.CENTER,
          className: c.wrapper,
          children: [
            null != a || null != f
              ? (0, n.jsx)(r.default.Child, {
                  shrink: 0,
                  grow: 0,
                  children: (function (e, t, l, a) {
                    if (null != t)
                      return (0, n.jsx)("img", {
                        alt: "",
                        src: t,
                        className: s(c.iconWrapper, a),
                      });
                    let i = null;
                    return (
                      null != e &&
                        (i =
                          "string" == typeof e
                            ? (0, n.jsx)("img", {
                                alt: "",
                                src: e,
                                className: s(c.icon, a),
                              })
                            : (0, n.jsx)(e, { className: s(c.icon, a) })),
                      (0, n.jsx)(r.default, {
                        align: r.default.Align.CENTER,
                        justify: r.default.Justify.CENTER,
                        style: { backgroundColor: l },
                        className: c.iconWrapper,
                        children: i,
                      })
                    );
                  })(a, f, m, I),
                })
              : null,
            (function (e) {
              let {
                  name: t,
                  description: l,
                  details: a,
                  detailsClassName: f,
                  isHeader: m,
                  isPremium: I,
                } = e,
                T =
                  null == a
                    ? void 0
                    : a.map((e, t) => {
                        let { icon: l, text: a } = e;
                        return (0, n.jsxs)(
                          "div",
                          {
                            className: s(
                              c.detailsWrapper,
                              m ? c.headerDetailsWrapper : null
                            ),
                            children: [
                              null != l
                                ? (0, n.jsx)(l, {
                                    width: 16,
                                    height: 16,
                                    className: c.detailsIcon,
                                  })
                                : null,
                              (0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: f,
                                children: a,
                              }),
                            ],
                          },
                          t
                        );
                      });
              return (0, n.jsxs)(r.default, {
                direction: r.default.Direction.VERTICAL,
                children: [
                  (0, n.jsxs)(d.default, {
                    size: m ? d.default.Sizes.SIZE_24 : d.default.Sizes.SIZE_16,
                    className: m ? c.header : c.secondaryHeader,
                    children: [
                      t,
                      I &&
                        (0, n.jsx)(i.Tooltip, {
                          text: u.default.Messages
                            .APPLICATION_SUBSCRIPTION_PREMIUM,
                          children: e =>
                            (0, n.jsx)(o.default, {
                              ...e,
                              width: 16,
                              height: 16,
                              className: c.premiumIcon,
                            }),
                        }),
                    ],
                  }),
                  null != l
                    ? (0, n.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: l,
                      })
                    : null,
                  (0, n.jsx)(r.default, {
                    direction: r.default.Direction.HORIZONTAL,
                    align: r.default.Align.CENTER,
                    wrap: r.default.Wrap.WRAP,
                    children: T,
                  }),
                ],
              });
            })({
              name: t,
              description: l,
              details: T,
              detailsClassName: N,
              isHeader: E,
              isPremium: h,
            }),
          ],
        });
      }
    },
    333231: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("77078"),
        o = l("119741");
      function d(e) {
        let { children: t, icon: l, title: s } = e;
        return (0, n.jsxs)("header", {
          className: o.header,
          children: [
            (0, n.jsxs)("div", {
              className: o.name,
              children: [
                a.cloneElement(l, {
                  className: i(l.props.className, o.icon),
                  height: 24,
                  width: 24,
                }),
                (0, n.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  className: o.title,
                  children: s,
                }),
              ],
            }),
            t,
          ],
        });
      }
    },
    658072: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return j;
          },
        }),
        l("222007"),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("446674"),
        i = l("77078"),
        r = l("404118"),
        o = l("592407"),
        d = l("990241"),
        u = l("991254"),
        c = l("182935"),
        f = l("485422"),
        m = l("957255"),
        I = l("145131"),
        T = l("841811"),
        N = l("781896"),
        E = l("71216"),
        h = l("8161"),
        g = l("741919"),
        p = l("315102"),
        S = l("299039"),
        O = l("158998"),
        _ = l("674916"),
        A = l("333231"),
        C = l("551527"),
        x = l("421475"),
        R = l("49111"),
        M = l("782340"),
        v = l("796308");
      function L(e) {
        let { application: t, guild: l, integration: a, ...s } = e;
        return (0, n.jsx)(i.ConfirmModal, {
          ...s,
          header:
            M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
              applicationName: t.name,
            }),
          confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
          cancelText: M.default.Messages.CANCEL,
          onConfirm: () => {
            o.default.disableIntegration(l.id, a.id).catch(() => {
              r.default.show({
                title:
                  M.default.Messages
                    .INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR,
              });
            });
          },
          children: (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            children:
              M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
                applicationName: t.name,
              }),
          }),
        });
      }
      function j(e) {
        var t;
        let {
            guild: l,
            applicationIntegration: r,
            selectableWebhookChannels: o,
            editedWebhook: j,
            errors: b,
            canNavigate: P,
          } = e,
          { application: D, integration: y, webhooks: G } = r,
          [B, H] = (0, s.useStateFromStoresArray)(
            [m.default],
            () => [
              m.default.can(R.Permissions.MANAGE_ROLES, l),
              null == D.bot ||
                m.default.canManageUser(
                  R.Permissions.MANAGE_GUILD,
                  D.bot.id,
                  l
                ),
            ],
            [D.bot, l]
          ),
          k = (0, s.useStateFromStores)(
            [m.default],
            () => m.default.can(R.Permissions.MANAGE_WEBHOOKS, l),
            [l]
          ),
          U = a.useCallback(() => {
            P() &&
              (0, i.openModal)(e =>
                (0, n.jsx)(L, {
                  guild: l,
                  application: D,
                  integration: y,
                  ...e,
                })
              );
          }, [D, P, l, y]),
          F = a.useMemo(() => {
            let e = [
              {
                icon: T.default,
                text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
                  timestamp: S.default.extractTimestamp(y.id),
                }),
              },
            ];
            return (
              null != y.user &&
                e.push({
                  icon: N.default,
                  text: M.default.Messages.INTEGRATION_ADDED_USER.format({
                    user: O.default.getUserTag(y.user),
                  }),
                }),
              e
            );
          }, [y.id, y.user]),
          w = a.useMemo(
            () =>
              null != D.bot
                ? (0, n.jsx)(C.default, { guild: l, applicationIntegration: r })
                : (0, n.jsx)(i.Card, {
                    className: v.emptyCard,
                    editable: !0,
                    children: (0, n.jsx)(i.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children:
                        M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT,
                    }),
                  }),
            [D.bot, r, l]
          ),
          { applicationSubscriptionListingsShown: W } = (0, u.default)({
            applicationId: D.id,
            groupListingId: D.primarySkuId,
            guildId: l.id,
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(_.default, {
              name: D.name,
              imageSrc:
                null !== (t = D.getIconURL(32)) && void 0 !== t
                  ? t
                  : p.DEFAULT_AVATARS[0],
              details: F,
              isHeader: !0,
            }),
            (null == D ? void 0 : D.description) != null
              ? (0, n.jsx)(f.default, {
                  userBio: D.description,
                  className: v.headerDescription,
                })
              : null,
            B
              ? (0, n.jsx)(d.default, {
                  application: D,
                  canNavigate: P,
                  guildId: l.id,
                })
              : null,
            (0, n.jsx)(i.FormDivider, { className: v.headerDivider }),
            null != D.bot
              ? (0, n.jsxs)("div", {
                  className: v.section,
                  children: [
                    (0, n.jsx)(A.default, {
                      icon: (0, n.jsx)(E.default, {}),
                      title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT,
                    }),
                    w,
                  ],
                })
              : null,
            W &&
              null != D.primarySkuId &&
              (0, n.jsxs)("div", {
                className: v.section,
                children: [
                  (0, n.jsx)(A.default, {
                    icon: (0, n.jsx)(h.default, {}),
                    title:
                      M.default.Messages
                        .INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS,
                  }),
                  (0, n.jsx)(c.default, {
                    applicationId: D.id,
                    applicationPrimarySkuId: D.primarySkuId,
                    guildId: l.id,
                  }),
                ],
              }),
            (0, n.jsxs)("div", {
              className: v.section,
              children: [
                (0, n.jsx)(A.default, {
                  icon: (0, n.jsx)(g.default, {}),
                  title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS,
                }),
                G.length > 0
                  ? (0, n.jsx)(x.default, {
                      webhooks: G,
                      editedWebhook: j,
                      selectableWebhookChannels: o,
                      errors: b,
                      canNavigate: P,
                    })
                  : (0, n.jsx)(i.Card, {
                      className: v.emptyCard,
                      editable: !0,
                      children: (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: k
                          ? M.default.Messages
                              .INTEGRATIONS_APPLICATION_NO_WEBHOOKS
                          : M.default.Messages
                              .INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS,
                      }),
                    }),
              ],
            }),
            (0, n.jsx)(i.FormDivider, { className: v.headerDivider }),
            (0, n.jsxs)(I.default, {
              className: v.section,
              justify: I.default.Justify.BETWEEN,
              align: I.default.Align.CENTER,
              children: [
                (0, n.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: H
                    ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY
                    : M.default.Messages
                        .INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS,
                }),
                (0, n.jsx)(I.default.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, n.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    color: i.Button.Colors.RED,
                    look: i.Button.Looks.FILLED,
                    disabled: !H,
                    onClick: U,
                    children:
                      M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    827691: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        i = l("713841"),
        r = l("376556"),
        o = l("592407"),
        d = l("674916"),
        u = l("226397"),
        c = l("772251");
      function f(e) {
        let {
            integrations: t,
            editedIntegration: l,
            guild: f,
            platformType: m,
            labelText: I,
            descriptionText: T,
            helpText: N,
            canNavigate: E,
          } = e,
          h = r.default.get(m),
          g = a.useCallback(
            async e => {
              E() &&
                (await o.default.enableIntegration(f.id, e.type, e.id),
                i.default.startEditingIntegration(e.id));
            },
            [E, f.id]
          ),
          p = a.useCallback(
            e => {
              E() &&
                (e.id === (null == l ? void 0 : l.id) &&
                  i.default.stopEditingIntegration(),
                o.default.disableIntegration(f.id, e.id));
            },
            [E, l, f.id]
          ),
          S = a.useCallback(
            e => {
              E() &&
                (e === (null == l ? void 0 : l.id)
                  ? i.default.stopEditingIntegration()
                  : i.default.startEditingIntegration(e));
            },
            [E, l]
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.default, {
              name: I,
              icon: null == h ? void 0 : h.icon.whiteSVG,
              iconBackgroundColor: null == h ? void 0 : h.color,
              iconClassName: c.platformIcon,
              description: T,
              isHeader: !0,
            }),
            (0, n.jsx)(s.FormDivider, { className: c.headerDivider }),
            t.map(e =>
              (0, n.jsx)(
                u.default,
                {
                  integration: e,
                  editedIntegration: l,
                  guild: f,
                  isExpanded: (null == l ? void 0 : l.id) === e.id,
                  onEnable: g,
                  onDisable: p,
                  onToggleExpand: () => S(e.id),
                },
                e.id
              )
            ),
            (0, n.jsx)(s.Text, {
              className: c.helpText,
              color: "text-muted",
              variant: "text-sm/normal",
              children: N,
            }),
          ],
        });
      }
    },
    943374: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("819855"),
        s = l("77078"),
        i = l("841098"),
        r = l("145131"),
        o = l("701909"),
        d = l("421475"),
        u = l("49111"),
        c = l("782340"),
        f = l("866123"),
        m = l("277482"),
        I = l("57213");
      function T(e) {
        let {
            followedChannelWebhooks: t,
            editedWebhook: l,
            selectableWebhookChannels: T,
            errors: N,
            canNavigate: E,
          } = e,
          h = (0, i.default)();
        return (0, n.jsxs)(s.FormSection, {
          children: [
            (0, n.jsx)(s.FormText, {
              type: s.FormTextTypes.DESCRIPTION,
              children:
                c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format(
                  {
                    helpdeskArticle: o.default.getArticleURL(
                      u.HelpdeskArticles.CHANNEL_FOLLOWING
                    ),
                  }
                ),
            }),
            (0, n.jsx)(s.FormDivider, { className: f.headerDivider }),
            t.length > 0
              ? (0, n.jsx)(d.default, {
                  webhooks: t,
                  editedWebhook: l,
                  selectableWebhookChannels: T,
                  errors: N,
                  canNavigate: E,
                })
              : (function (e, t) {
                  let l = (0, a.isThemeDark)(e) ? m : I;
                  return (0, n.jsxs)(r.default, {
                    direction: r.default.Direction.VERTICAL,
                    align: r.default.Align.CENTER,
                    children: [
                      (0, n.jsx)("img", {
                        alt: "",
                        src: l,
                        className: f.emptyStateImage,
                      }),
                      (0, n.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        children:
                          c.default.Messages
                            .INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY,
                      }),
                      (0, n.jsx)(s.Button, {
                        className: f.emptyStateButton,
                        onClick: t,
                        children:
                          c.default.Messages
                            .INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON,
                      }),
                    ],
                  });
                })(h, () =>
                  open(
                    o.default.getArticleURL(
                      u.HelpdeskArticles.CHANNEL_FOLLOWING
                    )
                  )
                ),
          ],
        });
      }
    },
    310005: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return U;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("448105"),
        o = l.n(r),
        d = l("446674"),
        u = l("819855"),
        c = l("77078"),
        f = l("54239"),
        m = l("841098"),
        I = l("376556"),
        T = l("412707"),
        N = l("646186"),
        E = l("926994"),
        h = l("47319"),
        g = l("957255"),
        p = l("145131"),
        S = l("810567"),
        O = l("841811"),
        _ = l("295810"),
        A = l("741919"),
        C = l("599110"),
        x = l("315102"),
        R = l("701909"),
        M = l("299039"),
        v = l("158998"),
        L = l("700104"),
        j = l("15639"),
        b = l("49111"),
        P = l("782340"),
        D = l("201093"),
        y = l("390494"),
        G = l("449638"),
        B = l("117809");
      function H(e, t) {
        return t.includes(e);
      }
      function k(e) {
        let { query: t, setQuery: l } = e,
          s = a.useCallback(
            e => {
              l(e);
            },
            [l]
          );
        return (0, n.jsx)("div", {
          className: D.searchContainer,
          children: (0, n.jsx)(S.default, {
            size: S.default.Sizes.MEDIUM,
            query: t,
            onChange: s,
            onClear: () => l(""),
            placeholder: P.default.Messages.INTEGRATIONS_SEARCH,
            "aria-label": P.default.Messages.INTEGRATIONS_SEARCH,
          }),
        });
      }
      function U(e) {
        let {
            guild: t,
            channel: l,
            applicationIntegrations: s,
            builtInIntegrations: r,
            customWebhooks: S,
            followedChannelWebhooks: U,
            isLoading: F,
            canCreateWebhook: w,
            onManageBuiltIn: W,
            onManageCustomWebhooks: V,
            onManageFollowedChannels: Y,
            onManageApplication: K,
          } = e,
          z = (0, m.default)(),
          [Z, q] = a.useState(""),
          { isFetchingConnections: J, accounts: X } = (0,
          d.useStateFromStoresObject)(
            [h.default],
            () => ({
              isFetchingConnections: h.default.isFetching(),
              accounts: h.default.getAccounts(),
            }),
            []
          ),
          { canManageWebhooks: Q, canManageGuild: $ } = (0,
          d.useStateFromStoresObject)(
            [g.default],
            () => ({
              canManageWebhooks:
                (null != t &&
                  g.default.can(b.Permissions.MANAGE_WEBHOOKS, t)) ||
                (null != l && g.default.can(b.Permissions.MANAGE_WEBHOOKS, l)),
              canManageGuild:
                null != t &&
                null == l &&
                g.default.can(b.Permissions.MANAGE_GUILD, t),
            }),
            [t, l]
          ),
          {
            availableTwitchIntegrations: ee,
            availableYoutubeIntegrations: et,
            guildTwitchIntegrations: el,
            guildYoutubeIntegrations: en,
          } = a.useMemo(() => {
            var e, t, l, n, a, s, i, o;
            return {
              availableTwitchIntegrations:
                null !==
                  (a =
                    null === (e = r.twitch) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== a
                  ? a
                  : 0,
              availableYoutubeIntegrations:
                null !==
                  (s =
                    null === (t = r.youtube) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== s
                  ? s
                  : 0,
              guildTwitchIntegrations:
                null !==
                  (i =
                    null === (l = r.twitch) || void 0 === l
                      ? void 0
                      : l.filter(e => e.enabled).length) && void 0 !== i
                  ? i
                  : 0,
              guildYoutubeIntegrations:
                null !==
                  (o =
                    null === (n = r.youtube) || void 0 === n
                      ? void 0
                      : n.filter(e => e.enabled).length) && void 0 !== o
                  ? o
                  : 0,
            };
          }, [r.twitch, r.youtube]),
          { showTwitchCard: ea, showYoutubeCard: es } = a.useMemo(() => {
            if (J || !$) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e =
                null == t ? void 0 : t.hasFeature(b.GuildFeatures.COMMUNITY),
              l = X.filter(e => e.type === b.PlatformTypes.TWITCH).length > 0,
              n = X.filter(e => e.type === b.PlatformTypes.YOUTUBE).length > 0;
            return {
              showTwitchCard: ee > 0 || (!l && e),
              showYoutubeCard: et > 0 || (!n && e),
            };
          }, [J, $, t, X, ee, et]),
          ei = Object.values(s).length,
          er = a.useMemo(() => {
            let e = ei > 100 ? H : o;
            return Object.values(s).filter(t => {
              var l, n, a;
              let { application: s } = t;
              return (
                (l = s),
                (n = Z),
                (a = e),
                !!(
                  "" === (n = n.trim().toLowerCase()) ||
                  l.id === n ||
                  a(n, l.name.toLowerCase()) ||
                  (null != l.bot && a(n, l.bot.username.toLowerCase()))
                ) || !1
              );
            });
          }, [s, ei, Z]),
          eo = (0, d.useStateFromStores)(
            [j.default],
            () => {
              if (null != t)
                return er.find(e =>
                  j.default.canShowOverviewTooltip(t.id, e.integration.id)
                );
            },
            [er, t]
          ),
          ed = a.useMemo(
            () =>
              void 0 !== eo
                ? [
                    eo,
                    ...er.filter(e => e.integration.id !== eo.integration.id),
                  ]
                : er,
            [er, eo]
          ),
          eu = (0, c.useModalsStore)(c.hasAnyModalOpenSelector),
          [ec, ef] = a.useState(!1),
          em = a.useRef(0),
          eI = () => {
            ef(!0),
              clearTimeout(em.current),
              (em.current = setTimeout(() => {
                ef(!1);
              }, 200));
          };
        a.useEffect(
          () => (
            window.addEventListener("scroll", eI, !0),
            () => window.removeEventListener("scroll", eI)
          )
        );
        let eT = ed.map(e => {
            let l =
              !eu &&
              e.integration.id === (null == eo ? void 0 : eo.integration.id);
            return (function (e, t, l, a, s) {
              var i;
              let { application: r, integration: o } = t,
                d = [];
              return (
                null != o.user
                  ? d.push({
                      icon: O.default,
                      text: P.default.Messages.INTEGRATION_ADDED_USER_DATE.format(
                        {
                          timestamp: M.default.extractTimestamp(o.id),
                          user: v.default.getUserTag(o.user),
                        }
                      ),
                    })
                  : d.push({
                      icon: O.default,
                      text: P.default.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: M.default.extractTimestamp(o.id),
                      }),
                    }),
                (0, n.jsx)(
                  L.default,
                  {
                    name: r.name,
                    imageSrc:
                      null !== (i = r.getIconURL(48)) && void 0 !== i
                        ? i
                        : x.DEFAULT_AVATARS[0],
                    integration: t,
                    buttonText:
                      P.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                    hasNextSection: !0,
                    onButtonClick: () => {
                      l(r.id),
                        C.default.track(
                          b.AnalyticEvents.APP_MANAGE_CTA_CLICKED,
                          {
                            application_id: r.id,
                            guild_id: null == e ? void 0 : e.id,
                            is_admin:
                              null != e
                                ? g.default.can(b.Permissions.ADMINISTRATOR, e)
                                : void 0,
                          }
                        );
                    },
                    details: d,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: a,
                    canShowMigrationTooltip: s,
                  },
                  "integration-".concat(o.id)
                )
              );
            })(t, e, K, ec, l);
          }),
          eN = (0, n.jsx)("div", { className: D.footerImage });
        0 === eT.length &&
          $ &&
          ((eT = (function (e, t, l) {
            let a = (0, u.isThemeDark)(e) ? G : B,
              s = (0, n.jsxs)(p.default, {
                direction: p.default.Direction.VERTICAL,
                align: p.default.Align.CENTER,
                className: D.emptyStateWrapper,
                children: [
                  (0, n.jsx)("img", {
                    alt: "",
                    src: a,
                    className: D.emptyStateSearchImage,
                  }),
                  (0, n.jsx)(c.Card, {
                    editable: !0,
                    className: D.emptyStateCard,
                    children: (0, n.jsx)(c.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: P.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH,
                    }),
                  }),
                ],
              }),
              i = (0, n.jsx)(c.Card, {
                editable: !0,
                className: D.emptyStateCard,
                children: (0, n.jsxs)("div", {
                  className: D.emptyStateText,
                  children: [
                    (0, n.jsx)("img", {
                      alt: "",
                      src: y,
                      className: D.emptyStateImage,
                    }),
                    (0, n.jsx)(c.Heading, {
                      color: "header-secondary",
                      variant: "heading-xl/bold",
                      children:
                        P.default.Messages
                          .INTEGRATIONS_OVERVIEW_NO_APPLICATIONS,
                    }),
                    (0, n.jsx)(c.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children:
                        P.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format(
                          {
                            handleGoToAppDirectory: () => {
                              (0, N.goToAppDirectory)({
                                guildId: l,
                                entrypoint: {
                                  name: T.ApplicationDirectoryEntrypointNames
                                    .GUILD_INTEGRATION_SETTINGS,
                                },
                              }),
                                (0, f.popLayer)();
                            },
                          }
                        ),
                    }),
                  ],
                }),
              });
            return t > 0 ? s : i;
          })(z, ei, null == t ? void 0 : t.id)),
          (eN = null));
        let eE = R.default.getArticleURL(b.HelpdeskArticles.INTEGRATIONS),
          eh =
            null != l
              ? P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL
              : P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
          eg = [];
        if (Q) {
          var ep, eS, eO, e_, eA;
          let e;
          if (
            (eg.push(
              ((ep = S.length),
              (eS = w),
              (eO = V),
              (e =
                ep > 0
                  ? P.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON
                  : P.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON),
              (0, n.jsx)(
                L.default,
                {
                  name: P.default.Messages.INTEGRATIONS_WEBHOOKS,
                  icon: A.default,
                  buttonText: e,
                  buttonDisabled: !eS,
                  onButtonClick: eO,
                  hasNextSection: ep > 0,
                  details: [
                    {
                      text: P.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format(
                        { count: ep }
                      ),
                    },
                  ],
                },
                "webhooks"
              ))
            ),
            (null == l ? void 0 : l.type) !== b.ChannelTypes.GUILD_VOICE &&
              ((null == l ? void 0 : l.type) == null ||
                !b.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type)))
          ) {
            let e, t;
            eg.push(
              ((e_ = U.length),
              (eA = Y),
              e_ > 0
                ? ((e =
                    P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON),
                  (t = eA))
                : ((e =
                    P.default.Messages
                      .INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON),
                  (t = () =>
                    open(
                      R.default.getArticleURL(
                        b.HelpdeskArticles.CHANNEL_FOLLOWING
                      )
                    ))),
              (0, n.jsx)(
                L.default,
                {
                  name: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                  icon: _.default,
                  buttonText: e,
                  onButtonClick: t,
                  hasNextSection: e_ > 0,
                  details: [
                    {
                      text: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format(
                        { count: e_ }
                      ),
                    },
                  ],
                },
                "channels-followed"
              ))
            );
          }
        }
        return (
          ea &&
            eg.push(
              (function (e, t, l) {
                let a, s, i;
                let r = I.default.get(b.PlatformTypes.TWITCH);
                return (
                  e > 0
                    ? ((a = P.default.Messages.INTEGRATIONS_TWITCH_BUTTON),
                      (s =
                        P.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                          count: t,
                        })),
                      (i = () => l(b.PlatformTypes.TWITCH)))
                    : ((a =
                        P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON),
                      (s =
                        P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY),
                      (i = () =>
                        (0, E.default)(
                          b.PlatformTypes.TWITCH,
                          "Integration Settings"
                        ))),
                  (0, n.jsx)(
                    L.default,
                    {
                      name: P.default.Messages.INTEGRATIONS_TWITCH,
                      icon: r.icon.whiteSVG,
                      iconBackgroundColor: r.color,
                      iconClassName: D.platformIcon,
                      buttonText: a,
                      onButtonClick: i,
                      hasNextSection: e > 0,
                      details: [{ text: s }],
                    },
                    "integrations-twitch"
                  )
                );
              })(ee, el, W)
            ),
          es &&
            eg.push(
              (function (e, t, l) {
                let a, s, i;
                let r = I.default.get(b.PlatformTypes.YOUTUBE);
                return (
                  e > 0
                    ? ((a = P.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON),
                      (s =
                        P.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                          count: t,
                        })),
                      (i = () => l(b.PlatformTypes.YOUTUBE)))
                    : ((a =
                        P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON),
                      (s =
                        P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY),
                      (i = () =>
                        (0, E.default)(
                          b.PlatformTypes.YOUTUBE,
                          "Integration Settings"
                        ))),
                  (0, n.jsx)(
                    L.default,
                    {
                      name: P.default.Messages.INTEGRATIONS_YOUTUBE,
                      icon: r.icon.whiteSVG,
                      iconBackgroundColor: r.color,
                      iconClassName: D.platformIcon,
                      buttonText: a,
                      onButtonClick: i,
                      hasNextSection: e > 0,
                      details: [{ text: s }],
                    },
                    "integrations-youtube"
                  )
                );
              })(et, en, W)
            ),
          (0, n.jsxs)(c.FormSection, {
            className: i(null != eN ? D.footerPlaceholder : null),
            children: [
              (0, n.jsx)(c.FormText, {
                type: c.FormTextTypes.DESCRIPTION,
                children: eh.format({ helpdeskArticle: eE }),
              }),
              (0, n.jsx)(c.FormDivider, { className: D.divider }),
              F || J || null == t
                ? (0, n.jsx)(c.Spinner, {
                    className: D.spinner,
                    type: c.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      eg,
                      $
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              eg.length > 0
                                ? (0, n.jsx)(c.FormDivider, {
                                    className: D.divider,
                                  })
                                : null,
                              (0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                className: D.sectionHeader,
                                children:
                                  P.default.Messages
                                    .INTEGRATIONS_APPLICATION_SECTION,
                              }),
                              ei > 4
                                ? (0, n.jsx)(k, { query: Z, setQuery: q })
                                : null,
                              eT,
                            ],
                          })
                        : null,
                      eN,
                    ],
                  }),
            ],
          })
        );
      }
    },
    810201: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("819855"),
        i = l("77078"),
        r = l("404118"),
        o = l("611183"),
        d = l("841098"),
        u = l("145131"),
        c = l("701909"),
        f = l("421475"),
        m = l("49111"),
        I = l("782340"),
        T = l("464656"),
        N = l("277482"),
        E = l("57213");
      function h(e) {
        let t,
          {
            guild: l,
            channel: h,
            customWebhooks: g,
            editedWebhook: p,
            selectableWebhookChannels: S,
            refToScroller: O,
            errors: _,
            canNavigate: A,
          } = e,
          C = (0, d.default)(),
          [x, R] = a.useState(null),
          [M, v] = a.useState(null);
        if (null != h) t = h;
        else {
          let e = Object.values(S);
          t = e.length > 0 ? e[0] : null;
        }
        let L = a.useCallback(async () => {
          if (A() && null !== t) {
            let e = await o.default.create(l.id, t.id).catch(e => {
              let { body: t, status: l } = e;
              return (
                t && t.code === m.AbortCodes.TOO_MANY_WEBHOOKS
                  ? r.default.show({
                      title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                      body: I.default.Messages
                        .WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED,
                    })
                  : 429 === l
                    ? r.default.show({
                        title:
                          I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: I.default.Messages
                          .WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT,
                      })
                    : r.default.show({
                        title:
                          I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: I.default.Messages
                          .WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                      }),
                null
              );
            });
            null != e && (v(e.id), R(e));
          }
        }, [A, t, l]);
        a.useEffect(() => {
          0 === g.length && L();
        }, []);
        let j = null !== t;
        return (0, n.jsxs)(i.FormSection, {
          children: [
            (0, n.jsx)(i.FormText, {
              type: i.FormTextTypes.DESCRIPTION,
              children:
                I.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                  helpdeskArticle: c.default.getArticleURL(
                    m.HelpdeskArticles.WEBHOOKS
                  ),
                  developersArticle: m.MarketingURLs.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, n.jsx)(i.FormDivider, { className: T.headerDivider }),
            g.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i.Button, {
                      className: T.createButton,
                      size: i.Button.Sizes.SMALL,
                      disabled: !j,
                      onClick: L,
                      children: I.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE,
                    }),
                    (0, n.jsx)(f.default, {
                      webhooks: g,
                      editedWebhook: p,
                      selectableWebhookChannels: S,
                      lastCreatedWebhookId: null == x ? void 0 : x.id,
                      errors: _,
                      canNavigate: A,
                    }),
                  ],
                })
              : (function (e, t, l) {
                  let a = (0, s.isThemeDark)(e) ? N : E;
                  return (0, n.jsxs)(u.default, {
                    direction: u.default.Direction.VERTICAL,
                    align: u.default.Align.CENTER,
                    children: [
                      (0, n.jsx)("img", {
                        alt: "",
                        src: a,
                        className: T.emptyStateImage,
                      }),
                      (0, n.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        children:
                          I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY,
                      }),
                      (0, n.jsx)(i.Button, {
                        className: T.emptyStateButton,
                        disabled: !t,
                        onClick: l,
                        children:
                          I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON,
                      }),
                    ],
                  });
                })(C, j, L),
          ],
        });
      }
    },
    467733: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        }),
        l("222007"),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("917351"),
        i = l.n(s),
        r = l("446674"),
        o = l("77078"),
        d = l("713841"),
        u = l("800751"),
        c = l("926994"),
        f = l("927078"),
        m = l("248933"),
        I = l("923959"),
        T = l("957255"),
        N = l("454589"),
        E = l("145131"),
        h = l("659500"),
        g = l("701909"),
        p = l("658072"),
        S = l("827691"),
        O = l("943374"),
        _ = l("310005"),
        A = l("810201"),
        C = l("49111"),
        x = l("782340"),
        R = l("971828");
      function M(e, t) {
        switch (e) {
          case C.IntegrationSettingsSections.APPLICATION:
            var l;
            return null !== (l = null == t ? void 0 : t.application.name) &&
              void 0 !== l
              ? l
              : "";
          case C.IntegrationSettingsSections.OVERVIEW:
            return x.default.Messages.INTEGRATIONS_OVERVIEW;
          case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
            return x.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
          case C.IntegrationSettingsSections.TWITCH:
            return x.default.Messages.INTEGRATIONS_TWITCH;
          case C.IntegrationSettingsSections.WEBHOOKS:
            return x.default.Messages.INTEGRATIONS_WEBHOOKS;
          case C.IntegrationSettingsSections.YOUTUBE:
            return x.default.Messages.INTEGRATIONS_YOUTUBE;
          default:
            return "";
        }
      }
      var v = a.memo(function (e) {
        let {
            section: t,
            sectionId: l,
            guild: s,
            channel: v,
            integrations: L,
            editedIntegration: j,
            webhooks: b,
            editedWebhook: P,
            isFetching: D,
            refToScroller: y,
            errors: G,
            hasChanges: B,
          } = e,
          H = (0, r.useStateFromStores)([I.default], () =>
            null != s ? I.default.getDefaultChannel(s.id) : null
          ),
          k = (0, r.useStateFromStoresObject)([I.default], () =>
            I.default.getChannels(null == s ? void 0 : s.id)
          ),
          U = (0, r.useStateFromStoresObject)([T.default], () =>
            i.keyBy(
              k.SELECTABLE.map(e => e.channel).filter(e =>
                T.default.can(C.Permissions.MANAGE_WEBHOOKS, e)
              ),
              "id"
            )
          ),
          F = (0, r.useStateFromStoresObject)([T.default], () =>
            i.keyBy(
              k.VOCAL.map(e => e.channel).filter(
                e =>
                  e.isGuildVocal() &&
                  T.default.can(C.Permissions.MANAGE_WEBHOOKS, e)
              ),
              "id"
            )
          ),
          w = null != v ? v : H,
          W = t === C.IntegrationSettingsSections.APPLICATION ? l : null,
          [V, Y] = a.useState(u.SHAKE_INTENSITY_DEFAULT),
          K = a.useCallback(
            () =>
              B()
                ? (h.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
                    duration: 300,
                    intensity: V,
                  }),
                  Y(
                    Math.min(
                      V + u.SHAKE_INTENSITY_INCREMENT,
                      u.SHAKE_INTENSITY_MAX
                    )
                  ),
                  h.ComponentDispatch.dispatch(
                    C.ComponentActions.EMPHASIZE_NOTICE
                  ),
                  !1)
                : (Y(u.SHAKE_INTENSITY_DEFAULT), !0),
            [B, V]
          ),
          z = a.useCallback(e => !!K() && (d.default.setSection(e), !0), [K]),
          {
            applicationIntegrations: Z,
            applicationBotIds: q,
            builtInIntegrations: J,
            customWebhooks: X,
            followedChannelWebhooks: Q,
          } = a.useMemo(() => {
            let e = {},
              t = {},
              l = {},
              n = [],
              a = [];
            if (null != L)
              for (let n of L)
                if ("discord" === n.type) {
                  if (null != n.application) {
                    var s;
                    let l = n.application.id;
                    (e[l] = {
                      application: n.application,
                      integration: n,
                      webhooks: [],
                    }),
                      (null === (s = n.application.bot) || void 0 === s
                        ? void 0
                        : s.id) !== void 0 &&
                        (t[n.application.bot.id] = n.application.id);
                  }
                } else !(n.type in l) && (l[n.type] = []), l[n.type].push(n);
            for (let t of b)
              (t.channel_id in U || t.channel_id in F) &&
                (null != t.application_id && t.application_id in e
                  ? e[t.application_id].webhooks.push(t)
                  : t.type === C.WebhookTypes.CHANNEL_FOLLOWER
                    ? a.push(t)
                    : n.push(t));
            return {
              applicationIntegrations: e,
              applicationBotIds: t,
              builtInIntegrations: l,
              customWebhooks: n,
              followedChannelWebhooks: a,
            };
          }, [L, U, F, b]);
        a.useEffect(() => {
          if (!D)
            switch (t) {
              case C.IntegrationSettingsSections.TWITCH:
                null == J[C.PlatformTypes.TWITCH] &&
                  d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                break;
              case C.IntegrationSettingsSections.YOUTUBE:
                null == J[C.PlatformTypes.YOUTUBE] &&
                  d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                break;
              case C.IntegrationSettingsSections.APPLICATION:
                (null == W || !(W in q || W in Z)) &&
                  d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
            }
        }, [Z, q, J, W, t, D]),
          a.useEffect(() => {
            if ((null == s ? void 0 : s.id) == null) return;
            let e = m.default.getEntitlementsForGuildFetchState(s.id);
            e === m.FetchState.NOT_FETCHED && f.fetchEntitlementsForGuild(s.id);
          }, [null == s ? void 0 : s.id]);
        let $ = null;
        switch (t) {
          case C.IntegrationSettingsSections.TWITCH:
            let ee = J[C.PlatformTypes.TWITCH];
            null != ee &&
              ($ = (0, n.jsx)(S.default, {
                guild: s,
                integrations: J[C.PlatformTypes.TWITCH],
                editedIntegration: j,
                labelText: x.default.Messages.INTEGRATIONS_TWITCH,
                platformType: C.PlatformTypes.TWITCH,
                descriptionText:
                  x.default.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                helpText: x.default.Messages.INTEGRATIONS_TWITCH_HELP.format({
                  connectAction: () =>
                    (0, c.default)(
                      C.PlatformTypes.TWITCH,
                      "Integration Settings"
                    ),
                  helpdeskArticle: g.default.getArticleURL(
                    C.HelpdeskArticles.TWITCH_INTEGRATION
                  ),
                }),
                canNavigate: K,
              }));
            break;
          case C.IntegrationSettingsSections.YOUTUBE:
            let et = J[C.PlatformTypes.YOUTUBE];
            null != et &&
              ($ = (0, n.jsx)(S.default, {
                guild: s,
                integrations: J[C.PlatformTypes.YOUTUBE],
                editedIntegration: j,
                labelText: x.default.Messages.INTEGRATIONS_YOUTUBE,
                platformType: C.PlatformTypes.YOUTUBE,
                descriptionText:
                  x.default.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                helpText: x.default.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                  connectAction: () => (0, c.default)(C.PlatformTypes.YOUTUBE),
                  helpdeskArticle: g.default.getArticleURL(
                    C.HelpdeskArticles.YOUTUBE_INTEGRATION
                  ),
                }),
                canNavigate: K,
              }));
            break;
          case C.IntegrationSettingsSections.APPLICATION:
            var el;
            let en =
              null != W
                ? null !== (el = Z[q[W]]) && void 0 !== el
                  ? el
                  : Z[W]
                : null;
            null != en &&
              ($ = (0, n.jsx)(p.default, {
                guild: s,
                applicationIntegration: en,
                editedWebhook: P,
                selectableWebhookChannels: U,
                errors: G,
                canNavigate: K,
              }));
            break;
          case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
            $ = (0, n.jsx)(O.default, {
              followedChannelWebhooks: Q,
              editedWebhook: P,
              selectableWebhookChannels: U,
              canNavigate: K,
              errors: G,
            });
            break;
          case C.IntegrationSettingsSections.WEBHOOKS:
            $ = (0, n.jsx)(A.default, {
              guild: s,
              channel: v,
              customWebhooks: X,
              editedWebhook: P,
              selectableWebhookChannels: { ...U, ...F },
              canNavigate: K,
              refToScroller: y,
              errors: G,
            });
            break;
          default:
            $ = (0, n.jsx)(_.default, {
              guild: s,
              channel: v,
              applicationIntegrations: Z,
              builtInIntegrations: J,
              customWebhooks: X,
              followedChannelWebhooks: Q,
              isLoading: D || null == s,
              canCreateWebhook: null != w,
              onManageCustomWebhooks: () => {
                d.default.setSection(C.IntegrationSettingsSections.WEBHOOKS);
              },
              onManageFollowedChannels: () => {
                d.default.setSection(
                  C.IntegrationSettingsSections.CHANNEL_FOLLOWING
                );
              },
              onManageApplication: e => {
                d.default.setSection(
                  C.IntegrationSettingsSections.APPLICATION,
                  e
                );
              },
              onManageBuiltIn: e => {
                switch (e) {
                  case C.PlatformTypes.TWITCH:
                    d.default.setSection(C.IntegrationSettingsSections.TWITCH);
                    break;
                  case C.PlatformTypes.YOUTUBE:
                    d.default.setSection(C.IntegrationSettingsSections.YOUTUBE);
                }
              },
            });
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(E.default, {
              align: E.default.Align.CENTER,
              className: R.breadcrumbs,
              children:
                t === C.IntegrationSettingsSections.OVERVIEW
                  ? (0, n.jsx)(o.FormTitle, {
                      tag: "h1",
                      children: M(C.IntegrationSettingsSections.OVERVIEW),
                    })
                  : (0, n.jsx)(N.default, {
                      activeId: t.toString(),
                      breadcrumbs: [
                        C.IntegrationSettingsSections.OVERVIEW,
                        t,
                      ].map(e => ({ id: e.toString(), label: M(e, Z[W]) })),
                      onBreadcrumbClick: e => {
                        t !== parseInt(e.id) && z(parseInt(e.id));
                      },
                      renderCustomBreadcrumb: (e, t) =>
                        (0, n.jsx)(o.FormTitle, {
                          tag: "h1",
                          className: t
                            ? R.breadcrumbActive
                            : R.breadcrumbInactive,
                          children: e.label,
                        }),
                    }),
            }),
            $,
          ],
        });
      });
    },
    551527: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("316693"),
        i = l("446674"),
        r = l("77078"),
        o = l("851387"),
        d = l("581583"),
        u = l("549825"),
        c = l("978970"),
        f = l("766274"),
        m = l("26989"),
        I = l("305961"),
        T = l("79798"),
        N = l("145131"),
        E = l("449008"),
        h = l("991170"),
        g = l("782340"),
        p = l("984860");
      function S(e) {
        var t;
        let { guild: l, applicationIntegration: S } = e,
          O = (0, i.useStateFromStores)([I.default], () =>
            I.default.getRoles(l.id)
          ),
          { application: _ } = S,
          A = null != _.bot ? new f.default(_.bot) : null,
          C = (0, i.useStateFromStores)(
            [m.default],
            () => (null != A ? m.default.getMember(l.id, A.id) : null),
            [A, l]
          ),
          x = null == A ? void 0 : A.id;
        a.useEffect(() => {
          null != x && o.default.requestMembersById(l.id, x);
        }, [l.id, x]);
        let R = a.useMemo(() => {
          var e, t, n;
          let a = O[l.getEveryoneRoleId()],
            i =
              null !==
                (t =
                  null == C
                    ? void 0
                    : null === (e = C.roles) || void 0 === e
                      ? void 0
                      : e.map(e => O[e]).filter(E.isNotNullish)) && void 0 !== t
                ? t
                : [],
            r =
              null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n
                ? n
                : h.NONE;
          for (let e of i) r = s.add(r, e.permissions);
          return r;
        }, [l, O, C]);
        return null == A
          ? null
          : (0, n.jsx)(r.Card, {
              editable: !0,
              className: p.card,
              children: (0, n.jsxs)(N.default, {
                direction: N.default.Direction.VERTICAL,
                children: [
                  (0, n.jsxs)(N.default, {
                    align: N.default.Align.CENTER,
                    children: [
                      (0, n.jsx)("img", {
                        alt: "",
                        src: A.getAvatarURL(l.id, 32),
                        className: p.iconWrapper,
                      }),
                      (0, n.jsx)(r.Text, {
                        color: "header-primary",
                        variant: "text-sm/normal",
                        children:
                          g.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format(
                            { user: A }
                          ),
                      }),
                      (0, n.jsx)(T.default, {
                        className: p.tag,
                        verified: A.isVerifiedBot(),
                      }),
                    ],
                  }),
                  (function (e, t, l, a) {
                    let i = [],
                      o = [];
                    for (let e of c.OrderedPermissions)
                      s.has(a, e) ? i.push(e) : o.push(e);
                    return (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(r.FormDivider, { className: p.divider }),
                        l.length > 0
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(r.FormTitle, {
                                  className: p.permissionHeader,
                                  children:
                                    g.default.Messages.ROLES_LIST.format({
                                      numRoles: l.length,
                                    }),
                                }),
                                (0, n.jsx)(d.default, {
                                  className: p.rolePills,
                                  user: e,
                                  guild: t,
                                  userRoles: l,
                                  wrap: !1,
                                  readOnly: !0,
                                }),
                              ],
                            })
                          : null,
                        i.length > 0 || o.length > 0
                          ? (0, n.jsx)(u.default, {
                              className: p.permissionList,
                              grantedPermissions: i,
                              grantedPermissionsHeader:
                                g.default.Messages
                                  .INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                              disabledPermissions: o,
                              disabledPermissionsHeader:
                                g.default.Messages
                                  .INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS,
                            })
                          : null,
                      ],
                    });
                  })(
                    A,
                    l,
                    null !== (t = null == C ? void 0 : C.roles) && void 0 !== t
                      ? t
                      : [],
                    R
                  ),
                ],
              }),
            });
      }
    },
    226397: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        }),
        l("222007"),
        l("511434"),
        l("313619"),
        l("654714"),
        l("287168"),
        l("956660");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("866227"),
        o = l.n(r),
        d = l("446674"),
        u = l("77078"),
        c = l("713841"),
        f = l("376556"),
        m = l("385976"),
        I = l("592407"),
        T = l("766274"),
        N = l("305961"),
        E = l("102985"),
        h = l("145131"),
        g = l("461380"),
        p = l("841811"),
        S = l("429893"),
        O = l("315102"),
        _ = l("299039"),
        A = l("674916"),
        C = l("49111"),
        x = l("782340"),
        R = l("515587"),
        M = l("890957");
      function v(e) {
        let t,
          {
            guild: l,
            integration: s,
            editedIntegration: r,
            isExpanded: v,
            onToggleExpand: L,
            onDisable: j,
            onEnable: b,
          } = e,
          P = (0, d.useStateFromStores)([N.default], () =>
            N.default.getRoles(l.id)
          ),
          [D, y] = a.useState(!1),
          G = (0, d.useStateFromStores)(
            [E.default],
            () => E.default.hidePersonalInformation
          ),
          B = a.useCallback(() => {
            y(!0), b(s);
          }, [s, b]),
          H = a.useCallback(() => {
            !s.syncing &&
              (0, u.openModal)(e => {
                let t =
                  0 === s.expire_behavior
                    ? x.default.Messages.REMOVE_SYNCED_ROLE
                    : x.default.Messages.KICK_FROM_SERVER;
                return (0, n.jsx)(u.ConfirmModal, {
                  ...e,
                  header: x.default.Messages.DISABLE_INTEGRATION_TITLE,
                  confirmText: t,
                  cancelText: x.default.Messages.CANCEL,
                  onConfirm: () => j(s),
                  children: (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      s.type === C.PlatformTypes.YOUTUBE
                        ? x.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY
                        : x.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY,
                  }),
                });
              });
          }, [s, j]),
          k = a.useCallback(() => {
            I.default.syncIntegration(l.id, s.id);
          }, [l.id, s.id]),
          U = a.useCallback(() => {
            null != s.role_id &&
              (I.default.setSection(C.GuildSettingsSections.ROLES),
              I.default.selectRole(s.role_id));
          }, [s.role_id]),
          {
            serviceName: F,
            channelURL: w,
            expireBehaviorLabel: W,
            syncLabel: V,
            subscribersText: Y,
          } = a.useMemo(() => {
            var e, t, l, n, a;
            let i =
              null !==
                (l =
                  null === (t = f.default.get(s.type)) || void 0 === t
                    ? void 0
                    : null === (e = t.getPlatformUserUrl) || void 0 === e
                      ? void 0
                      : e.call(t, s.account)) && void 0 !== l
                ? l
                : "";
            switch (s.type) {
              case C.PlatformTypes.YOUTUBE:
                return {
                  serviceName: x.default.Messages.INTEGRATIONS_YOUTUBE,
                  expireBehaviorLabel:
                    x.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR,
                  syncLabel: x.default.Messages.FORM_LABEL_SYNCED_MEMBERS,
                  subscribersText: x.default.Messages.NUM_MEMBERS.format({
                    subscribers:
                      null !== (n = s.subscriber_count) && void 0 !== n ? n : 0,
                  }),
                  channelURL: i,
                };
              case C.PlatformTypes.TWITCH:
              default:
                return {
                  serviceName: x.default.Messages.INTEGRATIONS_TWITCH,
                  expireBehaviorLabel:
                    x.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR,
                  syncLabel: x.default.Messages.FORM_LABEL_SYNCED_SUBS,
                  subscribersText: x.default.Messages.NUM_SUBSCRIBERS.format({
                    subscribers:
                      null !== (a = s.subscriber_count) && void 0 !== a ? a : 0,
                  }),
                  channelURL: i,
                };
            }
          }, [s.account, s.subscriber_count, s.type]),
          { roleLink: K, syncDescriptionText: z } = a.useMemo(() => {
            let e, t;
            let l = null != s.role_id ? P[s.role_id] : null;
            e =
              null != l
                ? (0, n.jsx)(u.Anchor, { onClick: U, children: l.name })
                : x.default.Messages.NONE;
            let a = f.default.get(s.type);
            return {
              roleLink: e,
              syncDescriptionText: (t =
                s.revoked && null != a
                  ? x.default.Messages.SYNC_REVOKED.format({
                      user: s.user,
                      platformName: a.name,
                    })
                  : x.default.Messages.INTEGRATIONS_LAST_SYNC.format({
                      datetime: o(s.synced_at).calendar(),
                    })),
            };
          }, [P, U, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
          Z = a.useMemo(() => {
            let e = m.default.getGuildEmoji(l.id),
              t = Object.values(P)
                .filter(e => null != e.tags && e.tags.integration_id === s.id)
                .map(e => e.id);
            return s.enable_emoticons
              ? e
                  .sort((e, t) => e.name.localeCompare(t.name))
                  .filter(
                    e =>
                      null != s.role_id &&
                      (null == e ? void 0 : e.roles.some(e => t.includes(e)))
                  )
              : [];
          }, [l.id, P, s.enable_emoticons, s.id, s.role_id]);
        if (
          (a.useEffect(() => {
            (null == r ? void 0 : r.id) === s.id &&
              (null == r ? void 0 : r.enabled) === !0 &&
              y(!1);
          }, [r, s.id]),
          s.enabled && null != s.user)
        )
          t = [
            {
              icon: p.default,
              text: G
                ? x.default.Messages.INTEGRATION_ADDED_DATE.format({
                    timestamp: _.default.extractTimestamp(s.id),
                  })
                : x.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                    user: null != s.user ? new T.default(s.user).tag : null,
                    timestamp: _.default.extractTimestamp(s.id),
                  }),
            },
          ];
        else {
          let e = new URL(w);
          t = [
            {
              text: x.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                serviceName: F,
                accountUrl: w,
                accountUrlText: e.hostname + e.pathname,
              }),
            },
          ];
        }
        let q = (0, n.jsxs)(h.default, {
            className: R.header,
            align: h.default.Align.CENTER,
            children: [
              (0, n.jsx)(A.default, {
                name: "".concat(s.name),
                detailsClassName: R.description,
                details: t,
              }),
              s.enabled
                ? (0, n.jsx)(h.default.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, n.jsx)(g.default, {
                      className: R.expandIcon,
                      expanded: v && !D,
                      "aria-hidden": !0,
                    }),
                  })
                : (0, n.jsx)(h.default.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, n.jsx)(u.Button, {
                      size: u.Button.Sizes.SMALL,
                      color: u.Button.Colors.PRIMARY,
                      onClick: B,
                      disabled: D,
                      children: D
                        ? (0, n.jsx)(S.default, { width: 24, height: 24 })
                        : (0, n.jsx)(n.Fragment, {
                            children: x.default.Messages.INTEGRATIONS_ENABLE,
                          }),
                    }),
                  }),
            ],
          }),
          J = null;
        return (
          v &&
            !D &&
            null != r &&
            (J = (0, n.jsxs)(h.default, {
              className: R.body,
              direction: h.default.Direction.VERTICAL,
              children: [
                (0, n.jsx)(u.FormDivider, { className: R.topDivider }),
                (function (e) {
                  let {
                    integration: t,
                    labelText: l,
                    subscribersText: a,
                    descriptionText: s,
                    roleLink: i,
                    onSync: r,
                  } = e;
                  return (0, n.jsxs)(h.default, {
                    children: [
                      (0, n.jsxs)(h.default.Child, {
                        basis: "50%",
                        children: [
                          (0, n.jsx)(u.FormTitle, {
                            className: M.marginBottom8,
                            children: x.default.Messages.FORM_LABEL_SYNCED_ROLE,
                          }),
                          (0, n.jsx)(u.Text, {
                            className: R.syncedRole,
                            color: "header-primary",
                            variant: "text-sm/normal",
                            children: i,
                          }),
                        ],
                      }),
                      (0, n.jsxs)(h.default.Child, {
                        basis: "50%",
                        children: [
                          (0, n.jsx)(u.FormTitle, {
                            className: M.marginBottom8,
                            children: l,
                          }),
                          (0, n.jsxs)(h.default, {
                            justify: h.default.Justify.BETWEEN,
                            children: [
                              (0, n.jsxs)(h.default, {
                                direction: h.default.Direction.VERTICAL,
                                children: [
                                  (0, n.jsx)(u.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: a,
                                  }),
                                  (0, n.jsx)(u.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: s,
                                  }),
                                ],
                              }),
                              (0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                look: u.Button.Looks.FILLED,
                                color: u.Button.Colors.PRIMARY,
                                disabled: t.syncing || t.revoked,
                                onClick: r,
                                children: t.syncing
                                  ? (0, n.jsx)(S.default, {
                                      width: 24,
                                      height: 24,
                                    })
                                  : (0, n.jsx)(n.Fragment, {
                                      children: x.default.Messages.SYNC,
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: r,
                  labelText: V,
                  subscribersText: Y,
                  descriptionText: z,
                  roleLink: K,
                  onSync: k,
                }),
                (0, n.jsx)(u.FormDivider, { className: R.midDivider }),
                (function (e) {
                  let {
                    integration: t,
                    labelText: l,
                    onBehaviorChange: a,
                    onGracePeriodChange: s,
                  } = e;
                  return (0, n.jsxs)(h.default, {
                    children: [
                      (0, n.jsxs)(h.default.Child, {
                        basis: "50%",
                        children: [
                          (0, n.jsx)(u.FormTitle, {
                            className: M.marginBottom8,
                            children: l,
                          }),
                          (0, n.jsx)(u.SingleSelect, {
                            placeholder: l,
                            value: "".concat(t.expire_behavior),
                            options: [
                              {
                                value: "0",
                                label: x.default.Messages.REMOVE_SYNCED_ROLE,
                              },
                              {
                                value: "1",
                                label: x.default.Messages.KICK_FROM_SERVER,
                              },
                            ],
                            isDisabled: t.syncing,
                            onChange: e => a(parseInt(e)),
                          }),
                        ],
                      }),
                      (0, n.jsxs)(h.default.Child, {
                        basis: "50%",
                        children: [
                          (0, n.jsx)(u.FormTitle, {
                            className: M.marginBottom8,
                            children:
                              x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                          }),
                          (0, n.jsx)(u.SingleSelect, {
                            placeholder:
                              x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                            maxVisibleItems: 5,
                            value: "".concat(t.expire_grace_period),
                            options: [1, 3, 7, 14, 30].map(e => ({
                              value: "".concat(e),
                              label: x.default.Messages.N_DAYS.format({
                                days: e,
                              }),
                            })),
                            onChange: e => s(parseInt(e)),
                            isDisabled: t.syncing,
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: r,
                  labelText: W,
                  onBehaviorChange: function (e) {
                    c.default.updateIntegration({ expireBehavior: e });
                  },
                  onGracePeriodChange: function (e) {
                    c.default.updateIntegration({ expireGracePeriod: e });
                  },
                }),
                s.type === C.PlatformTypes.TWITCH
                  ? (function (e) {
                      let { integration: t, emojis: l, onToggle: a } = e;
                      return (0, n.jsxs)(h.default, {
                        direction: h.default.Direction.VERTICAL,
                        children: [
                          (0, n.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            className: i(M.marginTop20, M.marginBottom8),
                            value: t.enable_emoticons,
                            disabled: t.syncing,
                            onChange: e => {
                              let { currentTarget: t } = e;
                              return a(t.checked);
                            },
                            children: (0, n.jsx)(u.FormText, {
                              children:
                                x.default.Messages.ENABLE_TWITCH_EMOJI_SYNC,
                            }),
                          }),
                          (0, n.jsx)(h.default, {
                            wrap: h.default.Wrap.WRAP,
                            className: R.twitchEmojis,
                            children: l.map((e, t) =>
                              (0, n.jsx)(
                                u.Tooltip,
                                {
                                  text: e.name,
                                  children: t =>
                                    (0, n.jsx)(
                                      "img",
                                      {
                                        alt: x.default.Messages.IMG_ALT_EMOJI.format(
                                          { name: e.name }
                                        ),
                                        draggable: !1,
                                        className: i(
                                          R.emoji,
                                          "emoji",
                                          "jumboable"
                                        ),
                                        src: O.default.getEmojiURL({
                                          id: e.id,
                                          animated: e.animated,
                                          size: 28,
                                        }),
                                        ...t,
                                      },
                                      e.name
                                    ),
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      });
                    })({
                      integration: r,
                      emojis: Z,
                      onToggle: function (e) {
                        c.default.updateIntegration({ enableEmoticons: e });
                      },
                    })
                  : null,
                (0, n.jsx)(u.FormDivider, { className: R.bottomDivider }),
                (0, n.jsx)(h.default, {
                  children: (0, n.jsx)(u.Button, {
                    className: R.disableButton,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.RED,
                    look: u.Button.Looks.LINK,
                    onClick: H,
                    children: x.default.Messages.INTEGRATIONS_DISABLE,
                  }),
                }),
              ],
            })),
          (0, n.jsx)(u.Card, {
            editable: !0,
            className: R.card,
            children: (0, n.jsxs)(h.default, {
              direction: h.default.Direction.VERTICAL,
              children: [
                s.enabled
                  ? (0, n.jsx)(u.Clickable, {
                      className: R.expandableHeader,
                      "aria-expanded": v && !D,
                      onClick: L,
                      children: q,
                    })
                  : q,
                J,
              ],
            }),
          })
        );
      }
    },
    280978: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        }),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        i = l("404118"),
        r = l("713841"),
        o = l("611183"),
        d = l("145131"),
        u = l("461380"),
        c = l("733160"),
        f = l("315102"),
        m = l("674916"),
        I = l("49111"),
        T = l("782340"),
        N = l("294894");
      function E(e) {
        let {
            webhook: t,
            editedWebhook: l,
            channelOptions: E,
            isExpanded: h,
            errors: g,
            onToggleExpand: p,
          } = e,
          S = a.useMemo(() => {
            var e, l;
            return (
              (e = t),
              null != (l = t.avatar) && /^data:/.test(l)
                ? l
                : (0, f.getUserAvatarURL)({
                    id: e.id,
                    avatar: l,
                    discriminator: I.NON_USER_BOT_DISCRIMINATOR,
                  })
            );
          }, [t]),
          O = a.useCallback(() => {
            (0, s.openModal)(e =>
              (0, n.jsx)(s.ConfirmModal, {
                ...e,
                header:
                  T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format(
                    { name: t.name }
                  ),
                confirmText:
                  T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                cancelText: T.default.Messages.CANCEL,
                onConfirm: () => {
                  o.default.delete(t.guild_id, t.id).catch(() => {
                    i.default.show({
                      title:
                        T.default.Messages
                          .INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                      body: T.default.Messages
                        .WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                    });
                  });
                },
                children: (0, n.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    T.default.Messages
                      .INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY,
                }),
              })
            );
          }, [t.guild_id, t.id, t.name]),
          _ = [];
        null != t.source_channel &&
          null != t.source_guild &&
          (_.push({ icon: c.default, text: t.source_channel.name }),
          _.push({
            text: (0, n.jsx)(
              "span",
              {
                className: N.guildSource,
                children:
                  T.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format(
                    {
                      guildHook: () =>
                        (0, n.jsx)(
                          "span",
                          {
                            className: N.sourceName,
                            children: t.source_guild.name,
                          },
                          t.id
                        ),
                    }
                  ),
              },
              "guild-source"
            ),
          }));
        let A = null;
        return (
          h &&
            null != l &&
            (A = (0, n.jsxs)("div", {
              className: N.body,
              children: [
                (0, n.jsx)(s.FormDivider, { className: N.topDivider }),
                (0, n.jsx)(d.default, {
                  children: (0, n.jsxs)(d.default, {
                    direction: d.default.Direction.VERTICAL,
                    children: [
                      (0, n.jsxs)(d.default, {
                        children: [
                          (0, n.jsx)(d.default.Child, {
                            basis: "50%",
                            children: (0, n.jsx)(s.FormItem, {
                              title:
                                T.default.Messages
                                  .INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                              children: (0, n.jsx)(s.TextInput, {
                                value: l.name,
                                onChange: e => {
                                  r.default.updateWebhook({ name: e });
                                },
                                maxLength: 80,
                                error: g.name,
                              }),
                            }),
                          }),
                          (0, n.jsx)(d.default.Child, {
                            basis: "50%",
                            children: (0, n.jsx)(s.FormItem, {
                              title:
                                T.default.Messages
                                  .INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                              children: (0, n.jsx)(s.SingleSelect, {
                                value: l.channel_id,
                                options: E,
                                onChange: e => {
                                  r.default.updateWebhook({ channelId: e });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(s.FormDivider, { className: N.bottomDivider }),
                      (0, n.jsx)(d.default, {
                        children: (0, n.jsx)(s.Button, {
                          onClick: O,
                          size: s.Button.Sizes.SMALL,
                          color: s.Button.Colors.RED,
                          look: s.Button.Looks.LINK,
                          className: N.removeButton,
                          children:
                            T.default.Messages
                              .INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })),
          (0, n.jsx)(s.Card, {
            editable: !0,
            className: N.card,
            children: (0, n.jsxs)(d.default, {
              direction: d.default.Direction.VERTICAL,
              children: [
                (0, n.jsx)(s.Clickable, {
                  className: N.header,
                  "aria-expanded": h,
                  onClick: p,
                  children: (0, n.jsxs)(d.default, {
                    align: d.default.Align.CENTER,
                    children: [
                      (0, n.jsx)(m.default, {
                        name: t.name,
                        imageSrc: S,
                        detailsClassName: N.description,
                        details: _,
                      }),
                      (0, n.jsx)(u.default, {
                        className: N.expandIcon,
                        expanded: h,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                A,
              ],
            }),
          })
        );
      }
    },
    700104: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("446674"),
        o = l("77078"),
        d = l("716241"),
        u = l("988721"),
        c = l("248933"),
        f = l("5667"),
        m = l("766274"),
        I = l("145131"),
        T = l("83910"),
        N = l("772280"),
        E = l("71216"),
        h = l("741919"),
        g = l("599110"),
        p = l("674916"),
        S = l("702411"),
        O = l("49111"),
        _ = l("843455"),
        A = l("782340"),
        C = l("794504");
      function x(e) {
        var t, l, s, x, R, M, v;
        let {
            name: L,
            icon: j,
            imageSrc: b,
            iconBackgroundColor: P,
            iconClassName: D,
            details: y,
            integration: G,
            buttonText: B,
            buttonDisabled: H,
            hasNextSection: k,
            onButtonClick: U,
            guildId: F,
            isScrolling: w,
            canShowMigrationTooltip: W,
          } = e,
          [V, Y] = a.useState(!1),
          [K, z] = a.useState(!1);
        let Z =
            ((x = B),
            (R = H),
            (M = k),
            (v = U),
            null == x || null == v
              ? null
              : M
                ? (0, n.jsxs)(I.default, {
                    align: I.default.Align.CENTER,
                    children: [
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: x,
                      }),
                      M
                        ? (0, n.jsx)(N.default, {
                            width: 10,
                            height: 10,
                            className: C.caret,
                          })
                        : null,
                    ],
                  })
                : (0, n.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    look: M ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                    color: M ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                    disabled: R,
                    onClick: v,
                    children: x,
                  })),
          q = W && !w && !K && void 0 !== F && null != G;
        a.useEffect(() => {
          q &&
            g.default.track(
              O.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
              {
                ...(0, d.collectGuildAnalyticsMetadata)(F),
                application_id: null == G ? void 0 : G.application.id,
                location: "overview",
              }
            );
        }, [F, null == G ? void 0 : G.application.id, q]);
        let J = q
            ? (0, n.jsx)(o.Popout, {
                renderPopout: () =>
                  (0, n.jsx)(o.Clickable, {
                    onClick: e => {
                      e.stopPropagation(),
                        z(!0),
                        S.default.dismissOverviewTooltip(F, G.integration);
                    },
                    children: (0, n.jsx)(f.default, {
                      content:
                        A.default.Messages
                          .COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                      onClick: () => {},
                    }),
                  }),
                position: "bottom",
                align: "center",
                animation: o.Popout.Animation.TRANSLATE,
                shouldShow: !0,
                children: () => Z,
              })
            : Z,
          X = (0, r.useStateFromStoresArray)([c.default], () => {
            var e;
            return null != G &&
              null != F &&
              null !==
                (e = c.default.getApplicationEntitlementsForGuild(
                  G.application.id,
                  F
                )) &&
              void 0 !== e
              ? e
              : [];
          }),
          Q = (0, u.useGuildIndexState)(F, !0),
          $ =
            (null == G ? void 0 : G.application) != null &&
            Object.keys(
              null !==
                (s =
                  null === (l = Q.result) || void 0 === l
                    ? void 0
                    : null === (t = l.sections[G.application.id]) ||
                        void 0 === t
                      ? void 0
                      : t.commands) && void 0 !== s
                ? s
                : {}
            ).length > 0,
          ee = (0, n.jsxs)(I.default, {
            children: [
              (0, n.jsx)(p.default, {
                name: L,
                icon: j,
                imageSrc: b,
                iconBackgroundColor: P,
                iconClassName: D,
                details: y,
                isPremium: X.length > 0,
              }),
              (0, n.jsx)(I.default.Child, {
                shrink: 0,
                grow: 0,
                children: (0, n.jsxs)(I.default, {
                  align: I.default.Align.CENTER,
                  justify: I.default.Justify.END,
                  children: [
                    (function (e, t, l) {
                      var a;
                      if (null == e) return null;
                      let s = [],
                        { application: i, integration: r, webhooks: d } = e;
                      return (
                        null != i.bot &&
                          s.push(
                            (0, n.jsx)(
                              o.TooltipContainer,
                              {
                                forceOpen: t,
                                text: new (0, m.default)(i.bot).isVerifiedBot()
                                  ? A.default.Messages
                                      .INTEGRATIONS_APPLICATION_VERIFIED_BOT
                                  : A.default.Messages
                                      .INTEGRATIONS_APPLICATION_BOT,
                                className: C.feature,
                                children: (0, n.jsx)(E.default, {
                                  width: 24,
                                  height: 24,
                                  className: C.featureIcon,
                                }),
                              },
                              "bot"
                            )
                          ),
                        d.length > 0 &&
                          s.push(
                            (0, n.jsx)(
                              o.TooltipContainer,
                              {
                                forceOpen: t,
                                text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format(
                                  { count: d.length }
                                ),
                                className: C.feature,
                                children: (0, n.jsx)(h.default, {
                                  width: 24,
                                  height: 24,
                                  className: C.featureIcon,
                                }),
                              },
                              "webhooks"
                            )
                          ),
                        (null == r
                          ? void 0
                          : null === (a = r.scopes) || void 0 === a
                            ? void 0
                            : a.includes(
                                _.OAuth2Scopes.APPLICATIONS_COMMANDS
                              )) === !0 &&
                          l &&
                          s.push(
                            (0, n.jsx)(
                              "div",
                              {
                                className: C.feature,
                                children: (0, n.jsx)(T.default, {
                                  width: 24,
                                  height: 24,
                                  className: C.featureIcon,
                                }),
                              },
                              "commands"
                            )
                          ),
                        s
                      );
                    })(G, V, $),
                    J,
                  ],
                }),
              }),
            ],
          });
        return k
          ? (0, n.jsx)(o.Clickable, {
              onClick: () => {
                W &&
                  null != F &&
                  null != G &&
                  S.default.dismissOverviewTooltip(F, G.integration),
                  null == U || U();
              },
              onFocus: () => Y(!0),
              onBlur: () => Y(!1),
              children: (0, n.jsx)(o.Card, {
                editable: !0,
                className: i(C.card, C.clickable),
                children: ee,
              }),
            })
          : (0, n.jsx)(o.Card, {
              editable: !0,
              className: C.card,
              children: ee,
            });
      }
    },
    87390: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
        }),
        l("222007"),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("872717"),
        o = l("862337"),
        d = l("77078"),
        u = l("404118"),
        c = l("713841"),
        f = l("611183"),
        m = l("608684"),
        I = l("766274"),
        T = l("145131"),
        N = l("461380"),
        E = l("841811"),
        h = l("315102"),
        g = l("306160"),
        p = l("299039"),
        S = l("158998"),
        O = l("674916"),
        _ = l("49111"),
        A = l("782340"),
        C = l("897577");
      let x = e => {
        if (null == e) return null;
        let t = new I.default(e);
        return S.default.getUserTag(t);
      };
      function R(e, t) {
        return null != t && /^data:/.test(t)
          ? t
          : (0, h.getUserAvatarURL)({
              id: e.id,
              avatar: t,
              discriminator: _.NON_USER_BOT_DISCRIMINATOR,
            });
      }
      function M(e) {
        let {
            id: t,
            webhook: l,
            editedWebhook: s,
            channelOptions: I,
            isExpanded: h,
            isNew: S,
            errors: M,
            onToggleExpand: v,
          } = e,
          [L, j] = a.useState(!1),
          [b] = a.useState(new o.Timeout());
        a.useEffect(() => () => b.stop(), [b]);
        let P = a.useMemo(() => R(l, l.avatar), [l]),
          D = a.useCallback(() => {
            let e = ""
              .concat((0, r.getAPIBaseURL)(!1))
              .concat(_.Endpoints.WEBHOOK_INTEGRATION(l.id, l.token));
            (0, g.copy)(e);
          }, [l]),
          y = a.useCallback(() => {
            (0, d.openModal)(e =>
              (0, n.jsx)(d.ConfirmModal, {
                ...e,
                header: A.default.Messages.WEBHOOK_DELETE_TITLE.format({
                  name: l.name,
                }),
                confirmText: A.default.Messages.WEBHOOK_DELETE,
                cancelText: A.default.Messages.WEBHOOK_CANCEL,
                onConfirm: () => {
                  f.default.delete(l.guild_id, l.id).catch(e => {
                    let { status: t } = e;
                    429 === t
                      ? u.default.show({
                          title:
                            A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: A.default.Messages
                            .WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT,
                        })
                      : u.default.show({
                          title:
                            A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: A.default.Messages
                            .WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                        });
                  });
                },
                children: (0, n.jsx)(d.Text, {
                  variant: "text-md/normal",
                  children: A.default.Messages.WEBHOOK_DELETE_BODY.format({
                    name: l.name,
                  }),
                }),
              })
            );
          }, [l.guild_id, l.id, l.name]),
          G = [];
        null != l.user
          ? G.push({
              icon: E.default,
              text: A.default.Messages.INTEGRATION_CREATED_USER_DATE.format({
                user: x(l.user),
                timestamp: p.default.extractTimestamp(l.id),
              }),
            })
          : G.push({
              icon: E.default,
              text: A.default.Messages.INTEGRATION_CREATED_DATE.format({
                timestamp: p.default.extractTimestamp(l.id),
              }),
            });
        let B = null;
        return (
          h &&
            null != s &&
            (B = (0, n.jsxs)("div", {
              className: C.body,
              children: [
                (0, n.jsx)(d.FormDivider, { className: C.topDivider }),
                (0, n.jsxs)(T.default, {
                  children: [
                    (0, n.jsx)(T.default.Child, {
                      shrink: 1,
                      grow: 0,
                      children: (0, n.jsxs)(T.default, {
                        className: C.avatarWrapper,
                        direction: T.default.Direction.VERTICAL,
                        children: [
                          (0, n.jsx)(m.default, {
                            image: s.avatar,
                            onChange: e => {
                              c.default.updateWebhook({ avatar: e });
                            },
                            makeURL: e => R(l, e),
                            imageClassName: C.avatarUploaderInner,
                            showIcon: !0,
                          }),
                          null != M.avatar && "" !== M.avatar
                            ? (0, n.jsx)(d.Text, {
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children: M.avatar,
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, n.jsxs)(T.default, {
                      direction: T.default.Direction.VERTICAL,
                      children: [
                        (0, n.jsxs)(T.default, {
                          children: [
                            (0, n.jsx)(T.default.Child, {
                              basis: "50%",
                              children: (0, n.jsx)(d.FormItem, {
                                title: A.default.Messages.WEBHOOK_FORM_NAME,
                                children: (0, n.jsx)(d.TextInput, {
                                  value: s.name,
                                  onChange: e => {
                                    c.default.updateWebhook({ name: e });
                                  },
                                  maxLength: 80,
                                  error: M.name,
                                }),
                              }),
                            }),
                            (0, n.jsx)(T.default.Child, {
                              basis: "50%",
                              children: (0, n.jsx)(d.FormItem, {
                                title: A.default.Messages.CHANNEL,
                                children: (0, n.jsx)(d.SearchableSelect, {
                                  value: s.channel_id,
                                  options: I,
                                  onChange: e => {
                                    c.default.updateWebhook({ channelId: e });
                                  },
                                  placeholder:
                                    A.default.Messages.CHANNEL_SELECT,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(d.FormDivider, {
                          className: C.bottomDivider,
                        }),
                        (0, n.jsxs)(T.default, {
                          children: [
                            (0, n.jsx)(d.Tooltip, {
                              text: A.default.Messages
                                .INTEGRATIONS_WEBHOOK_COPIED_URL,
                              forceOpen: L,
                              color: d.TooltipColors.GREEN,
                              disableTooltipPointerEvents: !0,
                              children: e => {
                                let {
                                  onClick: t,
                                  onMouseEnter: a,
                                  onMouseLeave: s,
                                  ...i
                                } = e;
                                return (0, n.jsx)(d.Button, {
                                  ...i,
                                  onClick: () => {
                                    null == t || t(),
                                      j(!0),
                                      b.start(1e3, () => j(!1)),
                                      D();
                                  },
                                  size: d.Button.Sizes.SMALL,
                                  color: d.Button.Colors.PRIMARY,
                                  look: d.Button.Looks.FILLED,
                                  className: C.copyButton,
                                  disabled: null == l.token || "" === l.token,
                                  children:
                                    A.default.Messages
                                      .INTEGRATIONS_WEBHOOK_COPY_URL,
                                });
                              },
                            }),
                            (0, n.jsx)(d.Button, {
                              onClick: y,
                              size: d.Button.Sizes.SMALL,
                              color: d.Button.Colors.RED,
                              look: d.Button.Looks.LINK,
                              children:
                                A.default.Messages.INTEGRATIONS_WEBHOOK_DELETE,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
          (0, n.jsx)(d.Card, {
            editable: !0,
            id: t,
            className: i(C.card, S ? C.pulse : null),
            children: (0, n.jsxs)(T.default, {
              direction: T.default.Direction.VERTICAL,
              children: [
                (0, n.jsx)(d.Clickable, {
                  className: C.header,
                  "aria-expanded": h,
                  onClick: v,
                  children: (0, n.jsxs)(T.default, {
                    align: T.default.Align.CENTER,
                    children: [
                      (0, n.jsx)(O.default, {
                        name: l.name,
                        imageSrc: P,
                        details: G,
                      }),
                      (0, n.jsx)(N.default, {
                        className: C.expandIcon,
                        expanded: h,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                B,
              ],
            }),
          })
        );
      }
    },
    421475: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        }),
        l("424973"),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        i = l("713841"),
        r = l("679653"),
        o = l("27618"),
        d = l("697218"),
        u = l("280978"),
        c = l("87390"),
        f = l("49111"),
        m = l("782340"),
        I = l("54254");
      function T(e) {
        let {
            webhooks: t,
            selectableWebhookChannels: l,
            lastCreatedWebhookId: T,
            editedWebhook: N,
            errors: E,
            canNavigate: h,
          } = e,
          g = a.useMemo(
            () =>
              Object.values(l).map(e => ({
                value: e.id,
                label: (0, r.computeChannelName)(e, d.default, o.default, !0),
              })),
            [l]
          ),
          p = a.useMemo(() => {
            let e = {};
            for (let n of t)
              if (n.channel_id in e) e[n.channel_id].webhooks.push(n);
              else {
                let t = l[n.channel_id];
                null != t && (e[n.channel_id] = { channel: t, webhooks: [n] });
              }
            return Object.values(e).sort((e, t) =>
              e.channel.name.localeCompare(t.channel.name)
            );
          }, [l, t]),
          S = a.useCallback(
            e => {
              h() &&
                (e === (null == N ? void 0 : N.id)
                  ? i.default.stopEditingWebhook()
                  : i.default.startEditingWebhook(e));
            },
            [h, N]
          );
        return (0, n.jsx)("div", {
          className: I.list,
          children: p.map(e => {
            let { channel: t, webhooks: l } = e;
            return (function (e) {
              let {
                channel: t,
                webhooks: l,
                channelOptions: a,
                lastCreatedWebhookId: i,
                editedWebhook: T,
                errors: N,
                toggleWebhookExpand: E,
              } = e;
              return (0, n.jsxs)(
                "div",
                {
                  children: [
                    (0, n.jsx)(s.FormTitle, {
                      className: I.groupHeader,
                      children:
                        m.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format(
                          {
                            channelHook: () =>
                              (0, n.jsx)(
                                "span",
                                {
                                  className: I.channelName,
                                  children: (0, r.computeChannelName)(
                                    t,
                                    d.default,
                                    o.default,
                                    !0
                                  ),
                                },
                                t.id
                              ),
                          }
                        ),
                    }),
                    l.map(e => {
                      var t;
                      if (e.type === f.WebhookTypes.CHANNEL_FOLLOWER)
                        return (0, n.jsx)(
                          u.default,
                          {
                            webhook: e,
                            editedWebhook: T,
                            channelOptions: a,
                            isExpanded: (null == T ? void 0 : T.id) === e.id,
                            onToggleExpand: () => E(e.id),
                            errors: N,
                          },
                          e.id
                        );
                      return (0, n.jsx)(
                        c.default,
                        {
                          id:
                            ((t = e.id),
                            "settings-integrations-webhook-".concat(t)),
                          webhook: e,
                          editedWebhook: T,
                          channelOptions: a,
                          isExpanded: (null == T ? void 0 : T.id) === e.id,
                          isNew: i === e.id,
                          onToggleExpand: () => E(e.id),
                          errors: N,
                        },
                        e.id
                      );
                    }),
                  ],
                },
                t.id
              );
            })({
              channel: t,
              webhooks: l,
              channelOptions: g,
              lastCreatedWebhookId: T,
              editedWebhook: N,
              errors: E,
              toggleWebhookExpand: S,
            });
          }),
        });
      }
    },
    182935: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("766366"),
        s = l("49111");
      function i(e) {
        let { guildId: t, applicationId: l, applicationPrimarySkuId: i } = e;
        return (0, n.jsx)(a.default, {
          guildId: t,
          applicationId: l,
          applicationPrimarySkuId: i,
          analyticsLocation: s.AnalyticsLocations.GUILD_INTEGRATION_SETTINGS,
        });
      }
    },
    730988: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("77078"),
        o = l("145131"),
        d = l("805851");
      class u extends a.PureComponent {
        render() {
          let { scrollable: e, ...t } = this.props;
          return e
            ? (0, n.jsx)("aside", {
                className: d.sidebarScrollable,
                children: (0, n.jsx)(r.Scroller, {
                  fade: !0,
                  className: d.scroller,
                  children: (0, n.jsx)(o.default.Child, { ...t, wrap: !0 }),
                }),
              })
            : (0, n.jsx)(o.default.Child, { ...t, wrap: !0 });
        }
      }
      u.defaultProps = { basis: 232, grow: 0, shrink: 0, className: d.sidebar };
      class c extends a.PureComponent {
        render() {
          let { className: e, ...t } = this.props;
          return (0, n.jsx)(o.default.Child, {
            className: i(d.content, e),
            wrap: !0,
            ...t,
          });
        }
      }
      class f extends a.PureComponent {
        render() {
          return (0, n.jsx)(o.default, { ...this.props });
        }
      }
      (f.defaultProps = {
        className: d.layout,
        direction: o.default.Direction.HORIZONTAL,
        justify: o.default.Justify.START,
        align: o.default.Align.START,
        wrap: o.default.Wrap.NO_WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
      }),
        (f.Direction = o.default.Direction),
        (f.Justify = o.default.Justify),
        (f.Align = o.default.Align),
        (f.Wrap = o.default.Wrap),
        (f.Sidebar = u),
        (f.Content = c);
      var m = f;
    },
    822997: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          PermissionOverrideType: function () {
            return a;
          },
          default: function () {
            return E;
          },
        });
      var n,
        a,
        s = l("37983");
      l("884691");
      var i = l("414456"),
        r = l.n(i),
        o = l("77078"),
        d = l("36694"),
        u = l("945330"),
        c = l("548775"),
        f = l("782340"),
        m = l("321878");
      ((n = a || (a = {})).DENY = "DENY"),
        (n.PASSTHROUGH = "PASSTHROUGH"),
        (n.ALLOW = "ALLOW");
      let I = Object.keys(a);
      function T(e) {
        let {
            value: t = "PASSTHROUGH",
            onChange: l,
            labelledBy: n,
            disabled: a = !1,
          } = e,
          i = (0, o.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: a,
            labelledBy: n,
          });
        return (0, s.jsx)("div", {
          className: r(m.group, { [m.disabled]: a }),
          ...i,
          children: I.map(e =>
            (0, s.jsx)(
              N,
              {
                type: e,
                isSelected: t === e,
                onSelect: e => {
                  t !== e && !a && l(e);
                },
              },
              e
            )
          ),
        });
      }
      function N(e) {
        let t,
          l,
          n,
          { type: a, onSelect: i, isSelected: I } = e;
        switch (a) {
          case "DENY":
            (n = f.default.Messages.PERMISSION_OVERRIDE_DENY),
              (t = u.default),
              (l = m.deny);
            break;
          case "ALLOW":
            (n = f.default.Messages.PERMISSION_OVERRIDE_ALLOW),
              (t = d.default),
              (l = m.allow);
            break;
          default:
            (n = f.default.Messages.PERMISSION_OVERRIDE_PASSTHROUGH),
              (t = c.default),
              (l = m.passthrough);
        }
        let T = (0, o.useRadioItem)({ isSelected: I, label: n });
        return (0, s.jsx)(o.Clickable, {
          className: r(m.item, l, { [m.selected]: I }),
          onClick: () => i(a),
          ...T,
          children: (0, s.jsx)(t, { width: 16, height: 16 }),
        });
      }
      T.Types = a;
      var E = T;
    },
    350625: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("77078"),
        s = l("701909"),
        i = l("145131"),
        r = l("822997"),
        o = l("476765"),
        d = l("782340"),
        u = l("890957");
      function c(e) {
        let {
            value: t,
            onChange: l,
            children: c,
            note: f,
            helpdeskArticleId: m,
            style: I,
            disabled: T = !1,
            hideBorder: N = !1,
            className: E = u.marginBottom20,
          } = e,
          h = (0, o.useUID)();
        return (0, n.jsxs)(i.default, {
          style: I,
          className: E,
          direction: i.default.Direction.VERTICAL,
          children: [
            (0, n.jsxs)(i.default, {
              children: [
                (0, n.jsx)(i.default.Child, {
                  children: (0, n.jsx)(a.FormTitle, {
                    id: h,
                    className: u.marginReset,
                    tag: a.FormTitleTags.H3,
                    disabled: T,
                    children: c,
                  }),
                }),
                (0, n.jsx)(i.default.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, n.jsx)(r.default, {
                    value: t,
                    onChange: l,
                    disabled: T,
                    labelledBy: h,
                  }),
                }),
              ],
            }),
            null != f &&
              (0, n.jsx)(i.default.Child, {
                className: u.marginTop4,
                children: (0, n.jsx)(a.FormText, {
                  type: a.FormTextTypes.DESCRIPTION,
                  children: f,
                }),
              }),
            null != m &&
              (0, n.jsx)(i.default.Child, {
                className: u.marginTop4,
                children: (0, n.jsx)(a.FormText, {
                  disabled: T,
                  type: a.FormTextTypes.DESCRIPTION,
                  children: (0, n.jsx)(a.Anchor, {
                    href: s.default.getArticleURL(m),
                    children: d.default.Messages.LEARN_MORE,
                  }),
                }),
              }),
            !N &&
              (0, n.jsx)(i.default.Child, {
                className: u.marginTop20,
                children: (0, n.jsx)(a.FormDivider, {}),
              }),
          ],
        });
      }
      r.default.Types, (c.Types = r.default.Types);
    },
    17837: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("605141"),
        i = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 16 17",
              children: (0, n.jsx)("path", {
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: s,
                d: "M5.33333 12.9713H3.33333C2.598 12.9713 2 12.3726 2 11.6379V2.97127C2 2.23661 2.598 1.63794 3.33333 1.63794H10.6667C11.402 1.63794 12 2.23661 12 2.97127V4.97127H6.66667C5.93133 4.97127 5.33333 5.56994 5.33333 6.30461V12.9713ZM8 6.30461H12.6667C13.402 6.30461 14 6.90327 14 7.63794V13.6379C14 14.3733 13.402 14.9713 12.6667 14.9713H8C7.26467 14.9713 6.66667 14.3733 6.66667 13.6379V7.63794C6.66667 6.90327 7.26467 6.30461 8 6.30461ZM10.6667 8.30461H8V8.97127H10.6667V8.30461ZM8 12.9713H12.6667V12.3046H8V12.9713ZM8 10.9713H12.6667V10.3046H8V10.9713Z",
              }),
            });
          },
          s.PaperIcon,
          void 0,
          { size: 24 }
        );
    },
    295810: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("202084"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              className: s,
              foreground: i,
            } = e;
            return (0, n.jsx)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: s,
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: a,
                className: i,
                d: "M20 1.707V4.293L16.707 1L15.293 2.414L18.586 5.707H16V7.707H22V1.707H20ZM5 14.707H8V8.70697C8 7.60497 8.897 6.70697 10 6.70697H14V3.70697C14 2.60497 13.103 1.70697 12 1.70697H5C3.897 1.70697 3 2.60497 3 3.70697V12.707C3 13.809 3.897 14.707 5 14.707ZM12 8.70697H19C20.103 8.70697 21 9.60497 21 10.707V19.707C21 20.81 20.103 21.707 19 21.707H12C10.897 21.707 10 20.81 10 19.707V10.707C10 9.60497 10.897 8.70697 12 8.70697ZM16 12.707V11.707H12V12.707H16ZM12 18.707H19V17.707H12V18.707ZM12 15.707H19V14.707H12V15.707Z",
              }),
            });
          },
          s.ChannelsFollowedIcon,
          void 0,
          { size: 24 }
        );
    },
    429893: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        i = l("75196"),
        r = l("109894");
      function o(e) {
        let {
          width: t = 16,
          height: l = 16,
          color: a = "currentColor",
          foreground: o,
          className: d,
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          className: s(r.updateAvailable, d),
          ...(0, i.default)(u),
          width: t,
          height: l,
          viewBox: "0 0 24 24",
          children: (0, n.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, n.jsx)("path", {
                fill: a,
                className: o,
                fillRule: "nonzero",
                d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z",
              }),
              (0, n.jsx)("polygon", { points: "24 0 0 0 0 24 24 24" }),
            ],
          }),
        });
      }
    },
    575659: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ChannelsFollowedIcon: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
            className: r,
          }),
        });
      };
    },
    41688: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          PaperIcon: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=b5ebb8b04247235d8e4f.js.map
