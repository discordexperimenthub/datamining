(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91294"],
  {
    544556: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          updateLinkForUserId: function () {
            return a;
          },
          removeLinkForUserId: function () {
            return A;
          },
          getLinkCodeForCurrentUser: function () {
            return i;
          },
          default: function () {
            return r;
          },
        });
      var _ = E("872717"),
        T = E("913144"),
        n = E("599110"),
        I = E("922832"),
        s = E("49111");
      async function a(e, t) {
        await _.HTTP.patch({
          url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
          body: { linked_user_id: e, link_status: t },
        }).then(e => {
          let { body: t } = e;
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
              linkedUsers: t,
            }),
            t
          );
        });
      }
      async function A(e) {
        await _.HTTP.del({
          url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
          body: { linked_user_id: e },
        }).then(t => {
          let { body: E } = t;
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
              linkedUsers: E,
              deletedUserId: e,
            }),
            E
          );
        });
      }
      async function i() {
        await _.HTTP.get({ url: s.Endpoints.FAMILY_CENTER_LINK_CODE }).then(
          e => {
            let { body: t } = e,
              E = t.link_code;
            return (
              T.default.dispatch({
                type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                linkCode: E,
              }),
              E
            );
          }
        );
      }
      var r = {
        async initialPageLoad() {
          var e, t, E, n;
          T.default.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let { body: I } = await _.HTTP.get({
              url: s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_ME,
            }),
            { teen_audit_log: a, linked_users: A, users: i } = I,
            r = {
              teenId: null == a ? void 0 : a.teen_user_id,
              rangeStartId: null == a ? void 0 : a.range_start_id,
              totals:
                null !== (e = null == a ? void 0 : a.totals) && void 0 !== e
                  ? e
                  : {},
              actions:
                null !== (t = null == a ? void 0 : a.actions) && void 0 !== t
                  ? t
                  : [],
              users:
                null !== (E = null == a ? void 0 : a.users) && void 0 !== E
                  ? E
                  : [],
              guilds:
                null !== (n = null == a ? void 0 : a.guilds) && void 0 !== n
                  ? n
                  : [],
            };
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_INITIAL_LOAD",
              familyCenterTeenActivity: r,
              linkedUsers: A,
              users: i,
            }),
            r
          );
        },
        async fetchLinkedUsers() {
          let { body: e } = await _.HTTP.get({
              url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
            }),
            t = { linkedUsers: e.linked_users, users: e.users };
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
              ...t,
            }),
            t
          );
        },
        async requestLink(e, t) {
          let { body: E } = await _.HTTP.post({
              url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
              body: { recipient_id: e, code: t },
            }),
            n = { linkedUsers: E.linked_users, users: E.users };
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS",
              ...n,
            }),
            n
          );
        },
        async fetchTeenActivity(e) {
          T.default.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let t = s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: E } = await _.HTTP.get({ url: t }),
            n = E.teen_audit_log,
            I = {
              teenId: n.teen_user_id,
              rangeStartId: n.range_start_id,
              totals: n.totals,
              actions: n.actions,
              users: n.users,
              guilds: n.guilds,
            };
          return (
            T.default.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
              familyCenterTeenActivity: I,
            }),
            I
          );
        },
        async fetchMoreTeenActivity(e, t, E, a) {
          let { body: A } = await _.HTTP.get({
              url: s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, E, a),
            }),
            { teen_audit_log: i } = A,
            r = {
              teenId: i.teen_user_id,
              rangeStartId: i.range_start_id,
              actions: i.actions,
              users: i.users,
              guilds: i.guilds,
            };
          return (
            n.default.track(s.AnalyticEvents.FAMILY_CENTER_ACTION, {
              action: I.FamilyCenterAction.LoadMore,
              selected_teen_id: e,
              action_display_type: t,
            }),
            T.default.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
              familyCenterTeenActivity: r,
            }),
            i
          );
        },
        selectTab(e) {
          T.default.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: e,
          });
        },
      };
    },
    922832: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          FAMILY_CENTER_REFETCH_COOLDOWN: function () {
            return F;
          },
          MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: function () {
            return p;
          },
          MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: function () {
            return U;
          },
          FAMILY_CENTER_REQUEST_SECTION_HEIGHT: function () {
            return g;
          },
          FAMILY_CENTER_REQUEST_ROW_HEIGHT: function () {
            return P;
          },
          FAMILY_CENTER_REQUEST_QR_CODE_URL: function () {
            return V;
          },
          FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: function () {
            return m;
          },
          QR_CODE_AUTO_HIDE_TIMEOUT: function () {
            return G;
          },
          PLACEHOLDER_QR_CODE_URL: function () {
            return v;
          },
          FAMILY_CENTER_SUB_ROUTES: function () {
            return H;
          },
          UserLinkStatus: function () {
            return n;
          },
          TeenActionDisplayType: function () {
            return I;
          },
          FamilyCenterSubPages: function () {
            return s;
          },
          FamilyCenterSubPageAnalyticsIds: function () {
            return a;
          },
          FamilyCenterPageLocation: function () {
            return A;
          },
          FamilyCenterPageLocationAnalyticsIds: function () {
            return i;
          },
          FamilyCenterAction: function () {
            return r;
          },
          ACTION_TO_TEXT: function () {
            return h;
          },
          PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: function () {
            return w;
          },
          ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: function () {
            return Q;
          },
        }),
        E("222007");
      var _,
        T,
        n,
        I,
        s,
        a,
        A,
        i,
        r,
        u,
        C,
        l,
        d,
        o,
        N,
        S,
        R,
        M,
        L,
        D,
        c,
        f,
        Y = E("447669"),
        O = E("718517"),
        y = E("782340");
      let F = 30 * O.default.Millis.SECOND,
        p = 8,
        U = 3,
        g = 26,
        P = 64,
        V = (e, t) =>
          "https://discord.com/feature/family-center/my-family/"
            .concat(e, "/")
            .concat(t),
        m = 4,
        G = 5 * O.default.Millis.MINUTE,
        v = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        H = (0, Y.wrapPaths)(
          Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
          }),
          [":", "?", "@"]
        );
      ((l = _ || (_ = {}))[(l.DM_MESSAGE_SEND = 1)] = "DM_MESSAGE_SEND"),
        (l[(l.GDM_MESSAGE_SEND = 2)] = "GDM_MESSAGE_SEND"),
        (l[(l.MESSAGE_REACT = 3)] = "MESSAGE_REACT"),
        (l[(l.ADD_FRIEND = 4)] = "ADD_FRIEND"),
        (l[(l.SEND_CALL = 5)] = "SEND_CALL"),
        (l[(l.CALL_JOIN = 6)] = "CALL_JOIN"),
        (l[(l.GUILD_JOIN = 7)] = "GUILD_JOIN"),
        (l[(l.GUILD_MESSAGE_SEND = 8)] = "GUILD_MESSAGE_SEND"),
        (l[(l.GUILD_VC_JOIN = 9)] = "GUILD_VC_JOIN"),
        ((d = T || (T = {}))[(d.PARENT = 1)] = "PARENT"),
        (d[(d.CHILD = 2)] = "CHILD"),
        ((o = n || (n = {}))[(o.PENDING = 1)] = "PENDING"),
        (o[(o.ACTIVE = 2)] = "ACTIVE"),
        (o[(o.INACTIVE = 3)] = "INACTIVE"),
        (o[(o.DECLINED = 4)] = "DECLINED"),
        (o[(o.EXPIRED = 5)] = "EXPIRED"),
        ((N = I || (I = {}))[(N.USER_ADD = 1)] = "USER_ADD"),
        (N[(N.GUILD_ADD = 2)] = "GUILD_ADD"),
        (N[(N.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (N[(N.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (N[(N.USER_CALLED = 5)] = "USER_CALLED"),
        ((S = s || (s = {})).ACTIVITY = "ACTIVITY"),
        (S.REQUESTS = "REQUESTS"),
        (S.SETTINGS = "SETTINGS"),
        ((R = a || (a = {}))[(R.ACTIVITY = 0)] = "ACTIVITY"),
        (R[(R.REQUESTS = 1)] = "REQUESTS"),
        (R[(R.SETTINGS = 2)] = "SETTINGS"),
        ((M = A || (A = {})).SIDENAV = "SIDENAV"),
        (M.SETTINGS = "SETTINGS"),
        ((L = i || (i = {}))[(L.SIDENAV = 0)] = "SIDENAV"),
        (L[(L.SETTINGS = 1)] = "SETTINGS"),
        ((D = r || (r = {}))[(D.TabChange = 0)] = "TabChange"),
        (D[(D.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (D[(D.RevealQRCode = 2)] = "RevealQRCode"),
        (D[(D.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (D[(D.ScanQRCode = 4)] = "ScanQRCode"),
        (D[(D.LoadMore = 5)] = "LoadMore"),
        (D[(D.SelectTeen = 6)] = "SelectTeen"),
        (D[(D.HideQRCode = 7)] = "HideQRCode");
      let h = new Map([
        [
          3,
          {
            tooltipHeader: () =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
            tooltipDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
            sectionHeader: e =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format(
                { count: e }
              ),
            sectionDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
              yesterday:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
              days: y.default.Messages
                .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          5,
          {
            tooltipHeader: () =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
            tooltipDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
            sectionHeader: e =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format(
                { count: e }
              ),
            sectionDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
              yesterday:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
              days: y.default.Messages
                .FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          1,
          {
            tooltipHeader: () =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
            tooltipDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
            sectionHeader: e =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format(
                { count: e }
              ),
            sectionDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
              yesterday:
                y.default.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
              days: y.default.Messages
                .FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          2,
          {
            tooltipHeader: () =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
            tooltipDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
            sectionHeader: e =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format(
                { count: e }
              ),
            sectionDescription: e =>
              e
                ? y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT
                : y.default.Messages
                    .FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
          },
        ],
        [
          4,
          {
            tooltipHeader: () =>
              y.default.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
            tooltipDescription: k,
            sectionHeader: e =>
              y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format(
                { count: e }
              ),
            sectionDescription: k,
          },
        ],
      ]);
      function k(e, t) {
        return e
          ? t
            ? y.default.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT_WITH_VC
            : y.default.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT
          : t
            ? y.default.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN_WITH_VC
            : y.default.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN;
      }
      ((c = u || (u = {}))[(c.CHECK = 0)] = "CHECK"),
        (c[(c.X = 1)] = "X"),
        ((f = C || (C = {}))[(f.GENERIC_ERROR = 0)] = "GENERIC_ERROR"),
        (f[(f.INELIGIBLE_FOR_FAMILY_CENTER = 1)] =
          "INELIGIBLE_FOR_FAMILY_CENTER"),
        (f[(f.PENDING_REQUEST_EXISTS = 2)] = "PENDING_REQUEST_EXISTS"),
        (f[(f.MAX_CONNECTIONS_REACHED = 3)] = "MAX_CONNECTIONS_REACHED");
      let w = () => ({
          seconds: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
          minutes: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
          hours: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
          yesterday:
            y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
          days: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
          date: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE,
        }),
        Q = () => ({
          seconds: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
          minutes: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
          hours: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
          yesterday:
            y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
          days: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
          date: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE,
        });
    },
    138505: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          FamilyCenterGuild: function () {
            return T;
          },
        });
      var _ = E("813006");
      class T extends _.default {
        constructor(e) {
          super(e), (this.approximateMemberCount = e.approximate_member_count);
        }
      }
    },
    822825: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          default: function () {
            return K;
          },
        }),
        E("808653"),
        E("222007"),
        E("424973");
      var _ = E("988415"),
        T = E("455079"),
        n = E("697218"),
        I = E("299039"),
        s = E("544556"),
        a = E("138505"),
        A = E("117933"),
        i = E("922832");
      let r = null,
        u = null,
        C = {},
        l = c(),
        d = f(),
        o = null,
        N = (function () {
          var e, t, E, _;
          return (null === (t = window) || void 0 === t
            ? void 0
            : null === (e = t.location) || void 0 === e
              ? void 0
              : e.pathname) ===
            i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY
            ? i.FamilyCenterSubPages.REQUESTS
            : (null === (_ = window) || void 0 === _
                  ? void 0
                  : null === (E = _.location) || void 0 === E
                    ? void 0
                    : E.pathname) ===
                i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS
              ? i.FamilyCenterSubPages.SETTINGS
              : i.FamilyCenterSubPages.ACTIVITY;
        })(),
        S = !1,
        R = !1,
        M = null,
        L = null,
        D = {};
      function c() {
        return {
          [i.TeenActionDisplayType.USER_ADD]: {},
          [i.TeenActionDisplayType.GUILD_ADD]: {},
          [i.TeenActionDisplayType.USER_INTERACTION]: {},
          [i.TeenActionDisplayType.GUILD_INTERACTION]: {},
          [i.TeenActionDisplayType.USER_CALLED]: {},
        };
      }
      function f() {
        return {
          [i.TeenActionDisplayType.USER_ADD]: 0,
          [i.TeenActionDisplayType.GUILD_ADD]: 0,
          [i.TeenActionDisplayType.USER_INTERACTION]: 0,
          [i.TeenActionDisplayType.GUILD_INTERACTION]: 0,
          [i.TeenActionDisplayType.USER_CALLED]: 0,
        };
      }
      function Y() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (C =
          e.length > 0
            ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {})
            : {});
      }
      function O(e) {
        void 0 !== e && (d = e);
      }
      function y(e, t) {
        let E = t ? l : c();
        return (l = e.reduce((e, t) => {
          let _ = t.display_type;
          return (
            void 0 !== E[_] &&
              void 0 === E[_][t.event_id] &&
              (e[_][t.event_id] = t),
            e
          );
        }, E));
      }
      function F(e) {
        D = e.reduce(
          (e, t) => ({ ...e, [t.id]: new a.FamilyCenterGuild(t) }),
          D
        );
      }
      function p() {
        R = !0;
      }
      function U(e) {
        let { linkedUsers: t, familyCenterTeenActivity: E } = e,
          { actions: _, guilds: T, totals: n, teenId: s, rangeStartId: a } = E;
        (r = s),
          (u = a),
          y(_),
          O(n),
          F(T),
          Y(t),
          (R = !1),
          (M = I.default.fromTimestamp(Date.now())),
          (S = !0);
      }
      function g(e) {
        let { linkedUsers: t } = e;
        Y(t);
      }
      function P(e) {
        let { linkedUsers: t } = e;
        Y(t);
      }
      function V(e) {
        let { familyCenterTeenActivity: t } = e;
        if (void 0 === t) return;
        let {
          actions: E,
          totals: _,
          guilds: T,
          teenId: n,
          rangeStartId: s,
        } = t;
        (r = n),
          (u = s),
          y(E),
          O(_),
          F(T),
          (R = !1),
          (M = I.default.fromTimestamp(Date.now()));
      }
      function m(e) {
        let { familyCenterTeenActivity: t } = e,
          { actions: E, guilds: _ } = t;
        y(E, !0), F(_);
      }
      function G(e) {
        let { linkedUsers: t } = e;
        Y(t);
      }
      function v(e) {
        let { linkedUsers: t } = e;
        Y(t, !0);
      }
      function H(e) {
        let { linkCode: t } = e;
        o = t;
      }
      function h(e) {
        let { tab: t } = e;
        N = t;
      }
      function k(e) {
        let { user: t } = e;
        if (void 0 === t.linked_users) return;
        let E = n.default.getUsers(),
          _ = t.linked_users.some(e => {
            let { user_id: t } = e;
            return void 0 === E[t];
          });
        _ && t.linked_users.length > Object.keys(C).length
          ? s.default.fetchLinkedUsers()
          : Y(t.linked_users);
      }
      function w(e) {
        var t;
        let { countryCode: E } = e;
        null != E &&
          (L =
            null !== (t = (0, _.getCountryCodeByAlpha2)(E)) && void 0 !== t
              ? t
              : null);
      }
      function Q() {
        (r = null),
          (u = null),
          (C = {}),
          (l = c()),
          (d = f()),
          (D = {}),
          (R = !1),
          (M = null);
      }
      class b extends T.default {
        initialize() {
          this.waitFor(n.default);
        }
        loadCache() {
          let e = this.readSnapshot(b.LATEST_SNAPSHOT_VERSION);
          if (null != e)
            Y(e.linkedUsers),
              F(e.guilds),
              y(e.teenActivity),
              (d = e.teenActivityTotals.reduce((e, t) => {
                let [E, _] = t.split(":"),
                  T = (0, A.displayTypeFromString)(E);
                return void 0 === T ? e : { ...e, [T]: parseInt(_, 10) };
              }, f()));
        }
        takeSnapshot() {
          return {
            version: b.LATEST_SNAPSHOT_VERSION,
            data: {
              linkedUsers: Object.values(C),
              teenActivityTotals: Object.entries(d).map(e => {
                let [t, E] = e;
                return "".concat(t, ":").concat(E);
              }),
              teenActivity: (function () {
                let e = [];
                return (
                  Object.entries(l).forEach(t => {
                    let [E, _] = t;
                    e.push(...Object.values(_));
                  }),
                  e
                );
              })(),
              guilds: Object.values(D),
            },
          };
        }
        getSelectedTeenId() {
          return r;
        }
        getLinkedUsers() {
          return C;
        }
        getLinkTimestamp(e) {
          var t;
          let E = C[e];
          return null == E
            ? null
            : null !== (t = E.updated_at) && void 0 !== t
              ? t
              : E.created_at;
        }
        getRangeStartTimestamp() {
          return null == u ? null : I.default.extractTimestamp(u);
        }
        getActionsForDisplayType(e) {
          return Object.values(l[e]);
        }
        getTotalForDisplayType(e) {
          return d[e];
        }
        getLinkCode() {
          return o;
        }
        getGuild(e) {
          return D[e];
        }
        getSelectedTab() {
          return N;
        }
        getStartId() {
          return u;
        }
        getIsInitialized() {
          return S;
        }
        getUserCountry() {
          return L;
        }
        isLoading() {
          return R;
        }
        canRefetch() {
          return (
            null === M || I.default.age(M) > i.FAMILY_CENTER_REFETCH_COOLDOWN
          );
        }
        constructor() {
          super({
            CURRENT_USER_UPDATE: k,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: U,
            FAMILY_CENTER_FETCH_START: p,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: g,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: V,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: m,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: P,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: v,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: H,
            FAMILY_CENTER_HANDLE_TAB_SELECT: h,
            SET_LOCATION_METADATA: w,
            LOGOUT: Q,
          });
        }
      }
      (b.displayName = "FamilyCenterStore"), (b.LATEST_SNAPSHOT_VERSION = 3);
      var K = new b();
    },
    117933: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          getEmptyActivityFormatter: function () {
            return r;
          },
          getActivityWindowTimestampFormatter: function () {
            return u;
          },
          formatUserActivityTimestamp: function () {
            return C;
          },
          formatLinkTimestamp: function () {
            return l;
          },
          isUserAction: function () {
            return d;
          },
          isGuildAction: function () {
            return o;
          },
          displayTypeFromString: function () {
            return N;
          },
        }),
        E("222007");
      var _ = E("866227"),
        T = E.n(_),
        n = E("922832"),
        I = E("782340");
      let s = 3600,
        a = 24 * s,
        A = 2 * a,
        i = 7 * a,
        r = () => ({
          today: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
          yesterday: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
          days: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS,
        }),
        u = e =>
          e
            ? {
                today:
                  I.default.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
                yesterday:
                  I.default.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
                days: I.default.Messages
                  .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS,
              }
            : {
                today:
                  I.default.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
                yesterday:
                  I.default.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
                days: I.default.Messages
                  .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS,
              },
        C = (e, t, E) => {
          let _ = T().diff(T(e), "s"),
            n = t(),
            I = T(e).format("LL");
          return (I =
            _ < a
              ? n.today
              : _ < A
                ? n.yesterday
                : n.days.format({
                    days: Math.min(Math.floor(_ / a), null != E ? E : 999),
                  }));
        },
        l = (e, t) => {
          let E = T().diff(T(e), "s"),
            _ = t(),
            n = T(e).format("LL");
          return (n =
            E < 60
              ? _.seconds
              : E < s
                ? _.minutes.format({ count: Math.floor(E / 60) })
                : E < a
                  ? _.hours.format({ count: Math.floor(E / s) })
                  : E < A
                    ? _.yesterday
                    : E < i
                      ? _.days.format({ count: Math.floor(E / a) })
                      : _.date.format({ date: n }));
        },
        d = e =>
          e.display_type === n.TeenActionDisplayType.USER_ADD ||
          e.display_type === n.TeenActionDisplayType.USER_INTERACTION ||
          e.display_type === n.TeenActionDisplayType.USER_CALLED,
        o = e =>
          e.display_type === n.TeenActionDisplayType.GUILD_ADD ||
          e.display_type === n.TeenActionDisplayType.GUILD_INTERACTION,
        N = e => {
          let t = Object.values(n.TeenActionDisplayType);
          for (let E of t) if (E.toString() === e) return E;
        };
    },
    652126: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          useShouldShowHelplineLink: function () {
            return r;
          },
        }),
        E("222007");
      var _ = E("884691"),
        T = E("65597"),
        n = E("16108"),
        I = E("915639"),
        s = E("822825"),
        a = E("775032");
      let A = new Set(["US"]),
        i = new Set(["en-US", "es-ES"]),
        r = () => {
          let e = (0, a.default)(),
            t = (0, T.default)([s.default], () => s.default.getUserCountry()),
            E = (0, T.default)([I.default], () => I.default.locale);
          return (
            _.useEffect(() => {
              null == t && (0, n.fetchUserCountryCode)();
            }, [t]),
            !e && null != t && A.has(t.alpha2) && i.has(E)
          );
        };
    },
    775032: function (e, t, E) {
      "use strict";
      E.r(t),
        E.d(t, {
          default: function () {
            return n;
          },
        });
      var _ = E("446674"),
        T = E("697218");
      function n() {
        let e = (0, _.useStateFromStores)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
        return e;
      }
    },
  },
]);
//# sourceMappingURL=f99cd294f39300902ebd.js.map
