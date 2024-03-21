(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66473"],
  {
    648529: function (e, t, n) {
      "use strict";
      e.exports = n.p + "575be5cb28925216b2fb.svg";
    },
    522874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          shouldShowFraudMenuVariant: function () {
            return r;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_iar_fraud_impersonation",
        label: "In App Reports Fruad & Impersonation",
        defaultConfig: { showFraudMenuVariant: !1 },
        treatments: [
          { id: 1, label: "Enabled", config: { showFraudMenuVariant: !0 } },
        ],
      });
      function r() {
        let { showFraudMenuVariant: e } = l.getCurrentConfig(
          { location: "159afe_2" },
          { autoTrackExposure: !0 }
        );
        return e;
      }
    },
    821003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          REMEDIATION_ELEMENT_TYPES: function () {
            return a;
          },
        });
      let a = ["block_users", "leave_guild", "delete_message"];
    },
    143618: function (e, t, n) {
      "use strict";
      var a, l, r, s;
      n.r(t),
        n.d(t, {
          ReportNames: function () {
            return a;
          },
          UnauthenticatedReportNames: function () {
            return l;
          },
        }),
        ((r = a || (a = {})).GUILD = "guild"),
        (r.GUILD_DISCOVERY = "guild_discovery"),
        (r.GUILD_DIRECTORY_ENTRY = "guild_directory_entry"),
        (r.MESSAGE = "message"),
        (r.STAGE_CHANNEL = "stage_channel"),
        (r.GUILD_SCHEDULED_EVENT = "guild_scheduled_event"),
        (r.FIRST_DM = "first_dm"),
        (r.USER = "user"),
        ((s = l || (l = {})).MESSAGE = "message_urf"),
        (s.USER = "user_urf");
    },
    377114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showReportModalForDiscoverableGuild: function () {
            return m;
          },
          showReportModalForGuildDirectoryEntry: function () {
            return _;
          },
          showReportModalForMessage: function () {
            return f;
          },
          showReportModalForStageChannel: function () {
            return E;
          },
          showReportModalForGuildScheduledEvent: function () {
            return h;
          },
          showReportModalForFirstDM: function () {
            return v;
          },
          submitHamReportForFirstDM: function () {
            return R;
          },
          showReportModalForUser: function () {
            return x;
          },
          showUnauthenticatedReportModalForUser: function () {
            return p;
          },
          showUnauthenticatedReportModalForMessage: function () {
            return N;
          },
          submitReportForInappropriateConversationSafetyAlert: function () {
            return g;
          },
          showReportModalForInappropriateConversationSafetyAlert: function () {
            return T;
          },
        });
      var a = n("716241"),
        l = n("834052"),
        r = n("719926"),
        s = n("766274"),
        i = n("522874"),
        d = n("143618"),
        o = n("965153"),
        u = n("816090"),
        c = n("49111");
      function m(e, t) {
        S(d.ReportNames.GUILD_DISCOVERY, { guild_id: e.id }),
          (0, u.showReportModal)(
            { name: d.ReportNames.GUILD_DISCOVERY, record: e },
            {},
            t
          );
      }
      function _(e, t) {
        S(d.ReportNames.GUILD_DIRECTORY_ENTRY, {
          channel_id: e.channelId,
          guild_id: e.guildId,
        }),
          (0, u.showReportModal)(
            { name: d.ReportNames.GUILD_DIRECTORY_ENTRY, record: e },
            {},
            t
          );
      }
      function f(e, t) {
        S(d.ReportNames.MESSAGE, {
          message_id: e.id,
          channel_id: e.channel_id,
        });
        let n = (0, i.shouldShowFraudMenuVariant)();
        (0, u.showReportModal)(
          { name: d.ReportNames.MESSAGE, record: e },
          { variant: n ? "4" : void 0 },
          t
        );
      }
      function E(e, t) {
        let n = l.default.getStageInstanceByChannel(e.id);
        null != n &&
          (S(d.ReportNames.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id,
          }),
          (0, u.showReportModal)(
            { name: d.ReportNames.STAGE_CHANNEL, record: n },
            {},
            t
          ));
      }
      function h(e, t) {
        var n;
        S(d.ReportNames.GUILD_SCHEDULED_EVENT, {
          guild_scheduled_event_id: e.id,
          guild_id: e.guild_id,
          channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0,
        }),
          (0, u.showReportModal)(
            { name: d.ReportNames.GUILD_SCHEDULED_EVENT, record: e },
            {},
            t
          );
      }
      function v(e, t) {
        S(d.ReportNames.FIRST_DM, {
          message_id: e.id,
          channel_id: e.channel_id,
        }),
          (0, u.showReportModal)(
            { name: d.ReportNames.FIRST_DM, record: e },
            {},
            t,
            void 0,
            !1
          );
      }
      async function R(e, t) {
        try {
          await (0, o.submitHeadlessReport)(
            { name: d.ReportNames.FIRST_DM, record: e },
            { variant: "_first_dm_ham_v1" }
          ),
            null == t || t();
        } catch {}
      }
      function x(e, t, n) {
        S(d.ReportNames.USER, { reported_user_id: e.id }),
          (0, u.showReportModal)(
            { name: d.ReportNames.USER, record: e, contextualGuildId: t },
            {},
            n,
            void 0,
            !1
          );
      }
      function p(e, t) {
        let n = new s.default({});
        S(d.UnauthenticatedReportNames.USER, { reported_user_id: n.id }),
          (0, u.showReportModal)(
            { name: d.UnauthenticatedReportNames.USER, record: n },
            {},
            t,
            void 0,
            !1,
            !1,
            e
          );
      }
      function N(e, t) {
        let n = new r.default({});
        S(d.UnauthenticatedReportNames.MESSAGE, {
          message_id: void 0,
          channel_id: void 0,
        }),
          (0, u.showReportModal)(
            { name: d.UnauthenticatedReportNames.MESSAGE, record: n },
            {},
            t,
            void 0,
            !1,
            !1,
            e
          );
      }
      async function g(e, t, n) {
        try {
          await (0, o.submitHeadlessReport)(
            { name: d.ReportNames.MESSAGE, record: e },
            { variant: "safety_alerts_headless_v1" }
          ),
            null == t || t();
        } catch {
          null == n || n();
        }
      }
      function T(e, t) {
        S(d.ReportNames.MESSAGE, {
          message_id: e.id,
          channel_id: e.channel_id,
        }),
          (0, u.showReportModal)(
            { name: d.ReportNames.MESSAGE, record: e },
            { variant: "safety_alerts_v1" },
            t
          );
      }
      function S(e, t) {
        a.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
          report_type: e,
          ...t,
        });
      }
    },
    965153: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getReportMenu: function () {
            return d;
          },
          getUnauthenticatedReportMenu: function () {
            return o;
          },
          submitHeadlessReport: function () {
            return u;
          },
          submitReport: function () {
            return c;
          },
          submitUnauthenticatedReport: function () {
            return m;
          },
          sendUnauthenticatedReportPincode: function () {
            return _;
          },
          verifyUnauthenticatedReport: function () {
            return f;
          },
          submitReportSecondLook: function () {
            return E;
          },
          trackCloseReportModalAnalytics: function () {
            return x;
          },
          showInAppReportsFeedbackModal: function () {
            return p;
          },
          areRequiredElementsUnfilled: function () {
            return N;
          },
        }),
        n("70102"),
        n("808653"),
        n("222007");
      var a = n("872717"),
        l = n("913144"),
        r = n("716241"),
        s = n("143618"),
        i = n("49111");
      async function d(e, t) {
        var n;
        let l = v(e),
          r = await a.HTTP.get({
            url: i.Endpoints.GET_REPORT_MENU(l),
            query:
              (null == t ? void 0 : t.variant) != null
                ? { variant: t.variant }
                : void 0,
          }),
          s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
        return s;
      }
      async function o(e, t) {
        var n;
        let l = h(e),
          r = await a.HTTP.get({
            url: i.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(l),
            query:
              (null == t ? void 0 : t.variant) != null
                ? { variant: t.variant }
                : void 0,
          }),
          s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
        return s;
      }
      async function u(e, t) {
        let n = v(e),
          l = await d(e, t);
        await a.HTTP.post({
          url: i.Endpoints.SUBMIT_REPORT_MENU(n),
          body: R(l, e, [
            { nodeRef: l.root_node_id, destination: ["", l.success_node_id] },
          ]),
        });
      }
      function c(e, t, n) {
        return a.HTTP.post({
          url: i.Endpoints.SUBMIT_REPORT_MENU(v(t)),
          body: R(e, t, n),
        });
      }
      function m(e, t, n, l) {
        let r = h(t);
        return a.HTTP.post({
          url: i.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(r),
          body: R(e, t, n, l),
        });
      }
      function _(e, t) {
        return a.HTTP.post({
          url: i.Endpoints.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
          body: { name: e, email: t },
        });
      }
      async function f(e, t, n) {
        let l = await a.HTTP.post({
          url: i.Endpoints.VERIFY_UNAUTHENTICATED_REPORT(e),
          body: { name: e, email: t, code: n },
        });
        return l.body;
      }
      async function E(e) {
        let t = await a.HTTP.post({
          url: i.Endpoints.SUBMIT_REPORT_SECOND_LOOK,
          body: { token: e },
        });
        return t.body;
      }
      function h(e) {
        let t = e.name;
        if (!Object.values(s.UnauthenticatedReportNames).includes(t))
          throw Error("Invalid report type ".concat(e.name));
        return t;
      }
      function v(e) {
        let t = e.name;
        if (!Object.values(s.ReportNames).includes(t))
          throw Error("Invalid report type ".concat(e.name));
        return t;
      }
      let R = (e, t, n, a) => {
        let { version: l, variant: r, language: i } = e,
          d = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0,
          },
          o = {
            version: l,
            variant: r,
            language: null != i ? i : "en",
            breadcrumbs: n.map(e => e.nodeRef),
            elements: n.reduce((e, t) => {
              let { multiSelect: n, textInput: a } = t;
              return {
                ...e,
                ...(null != n && { [n.name]: Object.keys(n.state) }),
                ...Object.fromEntries(
                  Object.entries(null != a ? a : {}).map(e => {
                    let [t, { value: n }] = e;
                    return [t, n];
                  })
                ),
              };
            }, {}),
          };
        if (
          t.name === s.ReportNames.MESSAGE ||
          t.name === s.ReportNames.FIRST_DM
        ) {
          let { channel_id: e, id: n } = t.record;
          return { ...o, ...d, name: t.name, channel_id: e, message_id: n };
        }
        if (
          t.name === s.ReportNames.GUILD ||
          t.name === s.ReportNames.GUILD_DISCOVERY
        ) {
          let { id: e } = t.record;
          return { ...o, ...d, name: t.name, guild_id: e };
        }
        if (t.name === s.ReportNames.GUILD_DIRECTORY_ENTRY) {
          let { guildId: e, channelId: n } = t.record;
          return { ...o, ...d, name: t.name, channel_id: n, guild_id: e };
        } else if (t.name === s.ReportNames.STAGE_CHANNEL) {
          let { id: e, guild_id: n, channel_id: a } = t.record;
          return {
            ...o,
            ...d,
            name: t.name,
            channel_id: a,
            guild_id: n,
            stage_instance_id: e,
          };
        } else if (t.name === s.ReportNames.GUILD_SCHEDULED_EVENT) {
          let { id: e, guild_id: n } = t.record;
          return {
            ...o,
            ...d,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e,
          };
        } else if (t.name === s.ReportNames.USER)
          return {
            ...o,
            ...d,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
          };
        else if (t.name === s.UnauthenticatedReportNames.USER)
          return {
            ...o,
            ...d,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: a,
          };
        else if (t.name === s.UnauthenticatedReportNames.MESSAGE)
          return {
            ...o,
            ...d,
            name: t.name,
            message_id: t.record.id,
            email_token: a,
          };
        return null;
      };
      function x(e, t, n) {
        r.default.trackWithMetadata(i.AnalyticEvents.IAR_MODAL_CLOSE, {
          report_type: e.name,
          report_id: n,
          navigation_history: t,
          message_id:
            e.name === s.ReportNames.MESSAGE ||
            e.name === s.ReportNames.FIRST_DM
              ? e.record.id
              : void 0,
          stage_instance_id:
            e.name === s.ReportNames.STAGE_CHANNEL ? e.record.id : void 0,
          guild_scheduled_event_id:
            e.name === s.ReportNames.GUILD_SCHEDULED_EVENT
              ? e.record.id
              : void 0,
          guild_id:
            e.name === s.ReportNames.GUILD ||
            e.name === s.ReportNames.GUILD_DISCOVERY
              ? e.record.id
              : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY
                ? e.record.guildId
                : e.name === s.ReportNames.GUILD_SCHEDULED_EVENT
                  ? e.record.guild_id
                  : void 0,
          channel_id:
            e.name === s.ReportNames.GUILD_SCHEDULED_EVENT
              ? e.record.channel_id
              : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY
                ? e.record.channelId
                : void 0,
        });
      }
      function p(e, t) {
        l.default.dispatch({
          type: "IN_APP_REPORTS_SHOW_FEEDBACK",
          reportId: t,
          reportType: e.name,
        });
      }
      function N(e, t, n, a, l) {
        return (
          e.some(e => {
            var t;
            return (
              !0 === e.should_submit_data &&
              ((null == a ? void 0 : a[e.name]) == null ||
                (null == a ? void 0 : a[e.name].value) === "" ||
                !(null == a
                  ? void 0
                  : null === (t = a[e.name]) || void 0 === t
                    ? void 0
                    : t.isValid))
            );
          }) ||
          t.some(
            e =>
              !0 === e.should_submit_data &&
              ((null == a ? void 0 : a[e.name]) == null ||
                (null == a ? void 0 : a[e.name].value) === "")
          ) ||
          ((null == n ? void 0 : n.should_submit_data) === !0 &&
            (null == l || 0 === Object.keys(l).length))
        );
      }
    },
    816090: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showReportModal: function () {
            return i;
          },
        }),
        n("424973");
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("965153"),
        s = n("399515");
      async function i(e, t, n, i) {
        let d =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          o =
            !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
          u = arguments.length > 6 ? arguments[6] : void 0,
          c = (0, l.getInteractingModalContext)();
        try {
          let m,
            _ = o
              ? await (0, r.getReportMenu)(e, t)
              : await (0, r.getUnauthenticatedReportMenu)(e, t),
            f = [];
          let E = e => {
              f.push(e);
            },
            h = e => {
              (m = e), null == n || n();
            };
          (0, l.openModal)(
            t =>
              (0, a.jsx)(s.default, {
                menu: _,
                reportType: e,
                modalProps: t,
                onNavigate: E,
                onSubmit: h,
                isAuthenticated: o,
                emailToken: u,
              }),
            {
              onCloseCallback: () => {
                (0, r.trackCloseReportModalAnalytics)(e, f, m),
                  null == i || i(),
                  d &&
                    (0, r.showInAppReportsFeedbackModal)(
                      e,
                      null != m ? m : null
                    );
              },
            },
            c
          );
        } catch {}
      }
    },
    399515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("716241"),
        i = n("476765"),
        d = n("143618"),
        o = n("965153"),
        u = n("463138"),
        c = n("49111"),
        m = n("37012"),
        _ = e => {
          let {
              reportType: t,
              menu: n,
              modalProps: _,
              onSubmit: f,
              onNavigate: E,
              emailToken: h,
              isAuthenticated: v = !0,
            } = e,
            R = (0, i.useUID)(),
            {
              nodes: x,
              root_node_id: p,
              success_node_id: N,
              fail_node_id: g,
            } = n,
            [T, S] = l.useState(p),
            [I, M] = l.useState(void 0),
            [j, C] = l.useState(void 0),
            [b, y] = l.useState([]),
            [L, A] = l.useState(void 0),
            D = e => {
              var n;
              let { destination: a } = e,
                [, l] = a,
                r = x[l];
              if (
                r.elements.some(e => "skip" === e.type) &&
                (null === (n = r.button) || void 0 === n ? void 0 : n.type) ===
                  "next"
              )
                return D({ ...e, destination: ["", r.button.target] });
              if (
                (y([...b, e]),
                null != r.key && (null == E || E(r.key)),
                M(void 0),
                C(void 0),
                t.name === d.ReportNames.MESSAGE ||
                  t.name === d.ReportNames.FIRST_DM)
              ) {
                let e = t.record.id;
                s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                  message_id: e,
                  content_type: t.name,
                  report_sub_type: r.report_type,
                  current_node: x[T].id,
                  next_node: r.id,
                });
              }
              S(l);
            },
            O = async e => {
              var a;
              let l = v
                  ? await (0, o.submitReport)(n, t, [...b, e])
                  : await (0, o.submitUnauthenticatedReport)(
                      n,
                      t,
                      [...b, e],
                      h
                    ),
                r =
                  null == l
                    ? void 0
                    : null === (a = l.body) || void 0 === a
                      ? void 0
                      : a.report_id;
              null != r && A(r), null == f || f(r);
            },
            U = () => {
              var e, n;
              if (b.length < 1) return;
              let a = [...b],
                l = a.pop(),
                r =
                  null !== (n = null == l ? void 0 : l.nodeRef) && void 0 !== n
                    ? n
                    : p;
              if (
                t.name === d.ReportNames.MESSAGE ||
                t.name === d.ReportNames.FIRST_DM
              ) {
                let e = t.record.id;
                s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                  message_id: e,
                  content_type: t.name,
                  report_sub_type: x[r].report_type,
                  current_node: x[T].id,
                  next_node: x[r].id,
                });
              }
              M(
                null == l
                  ? void 0
                  : null === (e = l.multiSelect) || void 0 === e
                    ? void 0
                    : e.state
              ),
                C(null == l ? void 0 : l.textInput),
                S(r),
                y(a),
                null == E || E("..");
            },
            k = [],
            B = [];
          for (let e in x) {
            var P, G;
            let t = x[e];
            if (t.id !== N && t.id !== g && t.id !== p) {
              if (t.key.endsWith("_SUBMIT")) {
                B.push(t);
                continue;
              }
              if (
                (k.push(t),
                (null === (P = t.button) || void 0 === P ? void 0 : P.type) ===
                  "next")
              ) {
                let e =
                    null === (G = t.button) || void 0 === G ? void 0 : G.target,
                  n = k.indexOf(x[e]);
                -1 !== n && (k.splice(n, 1), k.push(x[e]));
              }
            }
          }
          let w = [x[p], ...k, ...B, x[N], x[g]];
          return (0, a.jsx)(r.ModalRoot, {
            transitionState: _.transitionState,
            "aria-labelledby": R,
            children: (0, a.jsx)(r.Slides, {
              width: 440,
              activeSlide: T,
              centered: !1,
              children: w.map(e =>
                (0, a.jsx)(
                  r.Slide,
                  {
                    id: e.id,
                    children: (0, a.jsx)("div", {
                      className: m.slideContainer,
                      children: (0, a.jsx)(u.default, {
                        node: e,
                        reportType: t,
                        history: b,
                        onModalClose: _.onClose,
                        onSelectChild: D,
                        onNavigateBack: U,
                        multiSelect: I,
                        textInput: j,
                        successNodeId: N,
                        failNodeId: g,
                        onSubmit: O,
                        reportId: L,
                      }),
                    }),
                  },
                  e.id
                )
              ),
            }),
          });
        };
    },
    64573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("145131"),
        i = n("782340"),
        d = n("901704"),
        o = e => {
          let t,
            {
              button: n,
              submitting: o,
              disableNext: u,
              onClick: c,
              canNavigateBack: m,
              onBackClicked: _,
            } = e,
            f = l.useRef(null),
            E = null != n && "cancel" !== n.type,
            h = m && (null == n ? void 0 : n.type) !== "done",
            v = E || h;
          if (
            (l.useEffect(() => {
              if (
                (null == n ? void 0 : n.type) === "submit" ||
                (null == n ? void 0 : n.type) === "done"
              ) {
                var e;
                null === (e = f.current) || void 0 === e || e.focus();
              }
            }, [null == n ? void 0 : n.type]),
            !v)
          )
            return null;
          let R = i.default.Messages.DONE;
          return (
            (null == n ? void 0 : n.type) === "submit"
              ? ((R = i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT),
                (t = r.Button.Colors.RED))
              : (null == n ? void 0 : n.type) === "next"
                ? (R = i.default.Messages.NEXT)
                : (null == n ? void 0 : n.type) === "cancel" &&
                  ((R = i.default.Messages.CANCEL),
                  (t = r.Button.Colors.TRANSPARENT)),
            (0, a.jsxs)(r.ModalFooter, {
              direction: s.default.Direction.HORIZONTAL,
              children: [
                h &&
                  (0, a.jsx)(r.Button, {
                    onClick: _,
                    color: r.Button.Colors.TRANSPARENT,
                    disabled: o,
                    children: i.default.Messages.BACK,
                  }),
                E &&
                  (0, a.jsx)(r.Button, {
                    onClick: () => {
                      null != n && c(n);
                    },
                    color: t,
                    className: d.actionButton,
                    disabled: o || u,
                    buttonRef: f,
                    children: R,
                  }),
              ],
            })
          );
        };
    },
    463138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("222007"),
        n("506083");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("145131"),
        i = n("965153"),
        d = n("64573"),
        o = n("191732"),
        u = n("284787"),
        c = n("859043"),
        m = n("540227"),
        _ = n("755575"),
        f = n("552190"),
        E = n("798016"),
        h = n("918418"),
        v = n("947319"),
        R = n("420938"),
        x = n("111181"),
        p = n("677734"),
        N = n("538418"),
        g = n("584866"),
        T = n("41877"),
        S = n("71514"),
        I = n("265104"),
        M = n("345516"),
        j = n("244599"),
        C = n("291028"),
        b = n("821003"),
        y = n("49111"),
        L = n("782340"),
        A = n("260839");
      function D(e, t) {
        let { elements: n } = e;
        return n.find(e => {
          let { type: n } = e;
          return n === t;
        });
      }
      function O(e, t) {
        let { elements: n } = e;
        return n.filter(e => {
          let { type: n } = e;
          return n === t;
        });
      }
      var U = e => {
        let {
            node: t,
            reportType: n,
            history: U,
            onSelectChild: k,
            onModalClose: B,
            multiSelect: P,
            reportId: G,
            textInput: w,
          } = e,
          H = D(t, "checkbox"),
          F = D(t, "text_line_resource"),
          V = O(t, "external_link"),
          z = O(t, "free_text"),
          Y = O(t, "dropdown"),
          [W, K] = l.useState(!1),
          [q, Z] = l.useState(""),
          [X, J] = l.useState(() => ({})),
          [Q, $] = l.useState(() => ({})),
          [ee, et] = l.useState(
            (0, i.areRequiredElementsUnfilled)(z, Y, H, w, P)
          ),
          en = function (e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              a = { ...Q };
            (a[e] = { value: t, isValid: n }),
              $(a),
              et((0, i.areRequiredElementsUnfilled)(z, Y, H, a, X));
          },
          ea = l.useMemo(
            () => e => {
              k({
                nodeRef: t.id,
                destination: e,
                textInput: null != z || null != Y ? Q : void 0,
                multiSelect: null != H ? { name: H.name, state: X } : void 0,
              });
            },
            [t, k, H, X, Q, z, Y]
          );
        l.useEffect(() => {
          null != P && J(P), null != w && $(w);
        }, [P, w]);
        let el = e => {
            if (e === y.AbortCodes.INVALID_FORM_BODY)
              Z(L.default.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
            else Z(L.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
          },
          er = () =>
            e
              .onSubmit({ nodeRef: t.id, destination: ["", e.successNodeId] })
              .then(() => {
                Z(""), ea(["", e.successNodeId]);
              })
              .catch(e => {
                var t;
                el(null === (t = e.body) || void 0 === t ? void 0 : t.code);
              })
              .finally(() => {
                K(!1);
              });
        return (0, a.jsxs)("div", {
          className: A.container,
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              separator: !1,
              direction: s.default.Direction.VERTICAL,
              className: A.header,
              children: [
                (0, a.jsx)(M.default, { element: D(t, "success") }),
                (0, a.jsx)(p.default, { node: t }),
                (0, a.jsx)(N.default, { node: t }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: A.body,
              children: [
                null != F ? (0, a.jsx)(j.default, { element: F }) : null,
                null != D(t, "breadcrumbs") &&
                  (0, a.jsx)(u.default, { history: U }),
                null != D(t, "message_preview") &&
                  ("message" === n.name || "first_dm" === n.name) &&
                  (0, a.jsx)(T.default, { message: n.record }),
                null != D(t, "user_preview") && "user" === n.name
                  ? (0, a.jsx)(C.default, { user: n.record })
                  : null,
                (function (e) {
                  let { elements: t } = e;
                  return t.some(e => {
                    let { type: t } = e;
                    return b.REMEDIATION_ELEMENT_TYPES.includes(t);
                  });
                })(t) &&
                  (0, a.jsx)(r.Heading, {
                    className: A.remediationElementsHeader,
                    variant: "heading-sm/semibold",
                    children:
                      L.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER,
                  }),
                null != D(t, "block_users") &&
                  ("message" === n.name ||
                    "first_dm" === n.name ||
                    "user" === n.name) &&
                  (0, a.jsx)(o.default, {
                    userId:
                      "user" === n.name ? n.record.id : n.record.author.id,
                    reportId: G,
                    reportName: n.name,
                  }),
                null != D(t, "delete_message") &&
                  "message" === n.name &&
                  (0, a.jsx)(m.default, { message: n.record, reportId: G }),
                null != D(t, "leave_guild") &&
                  "guild" === n.name &&
                  (0, a.jsx)(g.default, { guildId: n.record.id, reportId: G }),
                null != D(t, "channel_preview") &&
                  "stage_channel" === n.name &&
                  (0, a.jsx)(I.default, { stageInstance: n.record }),
                null != D(t, "guild_scheduled_event_preview") &&
                  "guild_scheduled_event" === n.name &&
                  (0, a.jsx)(x.default, { event: n.record }),
                null != D(t, "guild_directory_entry_preview") &&
                  "guild_directory_entry" === n.name &&
                  (0, a.jsx)(v.default, { entry: n.record }),
                null != D(t, "guild_discovery_preview") &&
                  "guild_discovery" === n.name &&
                  (0, a.jsx)(R.default, { entry: n.record }),
                null != H &&
                  (0, a.jsx)(S.default, {
                    element: H,
                    onChange: (e, t) => {
                      let n = { ...X };
                      e in X ? delete n[e] : (n[e] = t),
                        J(n),
                        et((0, i.areRequiredElementsUnfilled)(z, Y, H, Q, n));
                    },
                    state: X,
                  }),
                ("user_urf" === n.name || "message_urf" === n.name) &&
                  null != Y &&
                  Y.length > 0 &&
                  (0, a.jsx)(_.default, {
                    elements: Y,
                    onChange: en,
                    state: Q,
                  }),
                ("user_urf" === n.name || "message_urf" === n.name) &&
                  null != z &&
                  z.length > 0 &&
                  (0, a.jsx)(h.default, {
                    elements: z,
                    onChange: en,
                    state: Q,
                  }),
                (0, a.jsx)(c.default, { node: t, onSelectChild: ea }),
                null != V && V.length > 0
                  ? (0, a.jsx)(E.default, { elements: V })
                  : null,
                (0, a.jsx)(f.default, {
                  errorMessage: q,
                  onClose: () => {
                    Z("");
                  },
                }),
              ],
            }),
            (0, a.jsx)(d.default, {
              button: t.button,
              submitting: W,
              disableNext: ee,
              onClick: e => {
                switch (e.type) {
                  case "done":
                  case "cancel":
                    B();
                    break;
                  case "next":
                    ea(["", e.target]);
                    break;
                  case "submit":
                    K(!0), er();
                }
              },
              onBackClicked: e.onNavigateBack,
              canNavigateBack: U.length > 0,
            }),
            (0, a.jsx)(r.ModalCloseButton, {
              className: A.closeButton,
              onClick: B,
            }),
          ],
        });
      };
    },
    191732: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("77078"),
        i = n("736964"),
        d = n("716241"),
        o = n("27618"),
        u = n("697218"),
        c = n("143618"),
        m = n("49111"),
        _ = n("782340"),
        f = n("217486"),
        E = e => {
          let { userId: t, reportId: n, reportName: E } = e,
            [h, v] = l.useState(!1),
            R = (0, r.useStateFromStores)(
              [u.default],
              () => u.default.getUser(t),
              [t]
            ),
            x =
              (0, r.useStateFromStores)(
                [o.default],
                () => o.default.getRelationshipType(t),
                [t]
              ) === m.RelationshipTypes.BLOCKED;
          l.useEffect(() => {
            v(x);
          }, [x]);
          let p = l.useCallback(() => {
            v(!0),
              d.default.trackWithMetadata(
                m.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED,
                { other_user_id: t, report_id: n }
              ),
              i.default.addRelationship({
                userId: t,
                context: { location: "ReportMenuBlockUser-iOS" },
                type: m.RelationshipTypes.BLOCKED,
              });
          }, [t, n]);
          return null == R
            ? null
            : (0, a.jsxs)("div", {
                className: f.container,
                children: [
                  (0, a.jsx)(s.Text, {
                    className: f.description,
                    variant: "text-sm/normal",
                    children:
                      E === c.ReportNames.USER
                        ? _.default.Messages
                            .REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION
                        : _.default.Messages
                            .MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION,
                  }),
                  (0, a.jsxs)("div", {
                    className: f.userContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: f.userInfo,
                        children: [
                          (0, a.jsx)(s.Avatar, {
                            size: s.AvatarSizes.SIZE_32,
                            src: R.getAvatarURL(void 0, 32),
                            className: f.avatar,
                            "aria-label": R.username,
                          }),
                          (0, a.jsx)(s.Text, {
                            className: f.userName,
                            variant: "text-sm/semibold",
                            children: R.username,
                          }),
                          !R.isPomelo() &&
                            (0, a.jsxs)(s.Text, {
                              variant: "text-sm/normal",
                              children: ["#", R.discriminator],
                            }),
                        ],
                      }),
                      (0, a.jsx)(s.Button, {
                        onClick: () => p(),
                        disabled: h,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.RED,
                        children: h
                          ? _.default.Messages.BLOCKED
                          : _.default.Messages.BLOCK,
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    284787: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("917351"),
        r = n("77078"),
        s = n("782340"),
        i = n("867968"),
        d = e => {
          let t = (0, l.flatMap)(e.history, e => {
            var t;
            let {
                destination: [n],
                multiSelect: a,
              } = e,
              l = [null, null],
              r = Object.values(
                null !== (t = null == a ? void 0 : a.state) && void 0 !== t
                  ? t
                  : {}
              );
            return (
              r.length > 0 && (l[0] = r.join(", ")), "" !== n && (l[1] = n), l
            );
          }).filter(e => null != e);
          return 0 === t.length
            ? null
            : (0, a.jsxs)("div", {
                className: i.container,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: i.breadcrumbsHeader,
                    color: "header-secondary",
                    variant: "heading-sm/semibold",
                    children:
                      s.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE,
                  }),
                  t.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: i.breadcrumbContainer,
                        children: [
                          (0, a.jsx)("div", { className: i.breadcrumbDot }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: i.breadcrumbText,
                            children: e,
                          }),
                        ],
                      },
                      "".concat(e, "+").concat(t)
                    )
                  ),
                ],
              });
        };
    },
    859043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("461380"),
        s = n("165296");
      let i = e => {
        let { child: t, onClick: n } = e,
          [i] = t;
        return (0, a.jsxs)(l.Clickable, {
          className: s.childButton,
          onClick: () => n(t),
          children: [
            (0, a.jsx)(l.Text, {
              className: s.childText,
              variant: "text-md/semibold",
              children: i,
            }),
            (0, a.jsx)(r.default, {
              className: s.childIcon,
              direction: r.default.Directions.RIGHT,
            }),
          ],
        });
      };
      var d = e => {
        let {
          node: { children: t },
          onSelectChild: n,
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = t.map(e => {
          let [t, l] = e;
          return (0, a.jsx)(
            i,
            { child: e, onClick: n },
            "".concat(t, "+").concat(l)
          );
        });
        return (0, a.jsx)("div", {
          className: s.childrenContainer,
          children: l,
        });
      };
    },
    540227: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("819689"),
        i = n("716241"),
        d = n("42203"),
        o = n("957255"),
        u = n("49111"),
        c = n("782340"),
        m = n("766541"),
        _ = e => {
          let { message: t, reportId: n } = e,
            [_, f] = l.useState(!1),
            E = l.useCallback(() => {
              f(!0),
                i.default.trackWithMetadata(
                  u.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED,
                  { report_id: n }
                ),
                s.default.deleteMessage(t.getChannelId(), t.id);
            }, [t, n]),
            h = l.useMemo(() => {
              let e = d.default.getChannel(t.getChannelId());
              return (
                null != e &&
                e.type !== u.ChannelTypes.DM &&
                e.type !== u.ChannelTypes.GROUP_DM &&
                o.default.canWithPartialContext(u.Permissions.MANAGE_MESSAGES, {
                  channelId: e.id,
                })
              );
            }, [t]);
          return null != t && h
            ? (0, a.jsx)("div", {
                className: m.container,
                children: (0, a.jsxs)("div", {
                  className: m.messageContainer,
                  children: [
                    (0, a.jsx)("div", {
                      className: m.description,
                      children: (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children:
                          c.default.Messages
                            .MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION,
                      }),
                    }),
                    (0, a.jsx)(r.Button, {
                      onClick: () => E(),
                      disabled: _,
                      size: r.Button.Sizes.SMALL,
                      color: r.Button.Colors.RED,
                      children: _
                        ? c.default.Messages.DELETED
                        : c.default.Messages.DELETE,
                    }),
                  ],
                }),
              })
            : null;
        };
    },
    755575: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("715708"),
        i = n("890957");
      let d = e => {
        let { element: t, onChange: n, initialOption: d } = e,
          [o, u] = l.useState("");
        l.useEffect(() => {
          u(null != d ? d : "");
        }, [d]);
        let c = t.name,
          { title: m, options: _ } = t.data,
          f = l.useCallback(
            e => {
              null != e && (u(e), n(e));
            },
            [n]
          );
        return (0, a.jsxs)(
          "div",
          {
            className: i.marginBottom8,
            children: [
              null != m &&
                (0, a.jsx)("div", {
                  className: i.marginBottom8,
                  children: (0, a.jsxs)(r.Text, {
                    variant: "text-sm/bold",
                    children: [
                      m,
                      t.should_submit_data &&
                        (0, a.jsx)("span", {
                          className: s.required,
                          children: "*",
                        }),
                    ],
                  }),
                }),
              (0, a.jsx)(r.SingleSelect, { value: o, onChange: f, options: _ }),
            ],
          },
          c
        );
      };
      var o = e => {
        let { elements: t, onChange: n, state: l } = e,
          r = t.map(e => {
            var t, r;
            let s = e.name;
            return (0, a.jsx)(
              d,
              {
                element: e,
                initialOption:
                  null !==
                    (r =
                      null == l
                        ? void 0
                        : null === (t = l[s]) || void 0 === t
                          ? void 0
                          : t.value) && void 0 !== r
                    ? r
                    : void 0,
                onChange: e => n(s, e),
              },
              s
            );
          });
        return (0, a.jsx)("div", { children: r });
      };
    },
    552190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("423487"),
        s = n("782340"),
        i = n("582253"),
        d = e => {
          let { errorMessage: t, onClose: n } = e;
          return null == t || "" === t
            ? null
            : (0, a.jsxs)("div", {
                className: i.errorContainer,
                children: [
                  (0, a.jsx)(r.default, {
                    width: 20,
                    height: 20,
                    className: i.errorIcon,
                  }),
                  (0, a.jsx)(l.Text, {
                    className: i.errorText,
                    variant: "text-sm/normal",
                    children: t,
                  }),
                  (0, a.jsx)(l.Clickable, {
                    onClick: () => {
                      n();
                    },
                    "aria-label": s.default.Messages.DISMISS,
                    className: i.closeIcon,
                  }),
                ],
              });
        };
    },
    798016: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("545158"),
        s = n("758710"),
        i = n("782340"),
        d = n("446204");
      let o = e => {
        let {
          data: { url: t, link_text: n, link_description: i, is_localized: o },
        } = e;
        return o
          ? (0, a.jsxs)(l.Clickable, {
              role: "link",
              className: d.linkButton,
              onClick: () => {
                (0, r.default)(t);
              },
              children: [
                (0, a.jsxs)("div", {
                  className: d.linkTextContainer,
                  children: [
                    (0, a.jsx)(l.Text, {
                      className: d.linkText,
                      variant: "text-md/semibold",
                      children: n,
                    }),
                    null != i &&
                      "" !== i &&
                      (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: i,
                      }),
                  ],
                }),
                (0, a.jsx)(s.default, { className: d.linkIcon }),
              ],
            })
          : null;
      };
      function u(e) {
        let { elements: t } = e;
        if (
          null == t ||
          0 === t.length ||
          null ==
            t.find(e => {
              let { data: t } = e;
              return t.is_localized;
            })
        )
          return null;
        let n = t.map((e, t) => {
            let { data: n } = e;
            return (0, a.jsx)(o, { data: n }, "external-link+".concat(t));
          }),
          r = t.some(e => {
            let { data: t } = e;
            return t.is_header_hidden;
          });
        return (0, a.jsxs)("div", {
          className: d.linksContainer,
          children: [
            !r &&
              (0, a.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                color: "header-secondary",
                className: d.header,
                children: i.default.Messages.LEARN_MORE,
              }),
            n,
          ],
        });
      }
    },
    918418: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("367376"),
        i = n("442791"),
        d = n("782340"),
        o = n("231074"),
        u = n("890957");
      let c = e => {
        let {
            data: {
              title: t,
              subtitle: n,
              placeholder: c,
              rows: m,
              character_limit: _,
              pattern: f,
            },
            onChange: E,
            initialText: h,
            isRequired: v,
          } = e,
          R = l.useRef(
            s.default.reactParserFor({
              ...s.default.defaultRules,
              link: i.LinkMarkupRule,
            })
          ),
          [x, p] = l.useState(""),
          [N, g] = l.useState("");
        l.useEffect(() => {
          var e;
          p(
            null !== (e = null == h ? void 0 : h.value) && void 0 !== e ? e : ""
          );
        }, [h]);
        let T = l.useCallback(
          e => {
            let t = null != f ? new RegExp(f) : null;
            null != t && null == t.exec(e)
              ? (g(d.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR),
                E({ value: e, isValid: !1 }))
              : null != e && (g(""), p(e), E({ value: e, isValid: !0 }));
          },
          [E, f]
        );
        return (0, a.jsxs)("div", {
          className: u.marginBottom8,
          children: [
            null != t &&
              (0, a.jsx)("div", {
                className: u.marginBottom8,
                children: (0, a.jsxs)(r.Text, {
                  variant: "text-sm/bold",
                  children: [
                    t,
                    v &&
                      (0, a.jsx)("span", {
                        className: o.required,
                        children: "*",
                      }),
                  ],
                }),
              }),
            (0, a.jsx)(r.TextArea, {
              maxLength: _,
              onChange: T,
              value: x,
              error: N,
              rows: m,
              placeholder: c,
              autoFocus: !0,
            }),
            null != n &&
              (0, a.jsx)("div", {
                children: (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  children: R.current(n),
                }),
              }),
          ],
        });
      };
      var m = e => {
        let { elements: t, onChange: n, state: l } = e,
          r = t.map(e => {
            var t;
            let r = e.name;
            return (0, a.jsx)(
              c,
              {
                data: e.data,
                onChange: e => n(r, e.value, e.isValid),
                initialText:
                  null !== (t = null == l ? void 0 : l[r]) && void 0 !== t
                    ? t
                    : void 0,
                isRequired: e.should_submit_data,
              },
              r
            );
          });
        return (0, a.jsx)("div", { children: r });
      };
    },
    947319: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("42203"),
        s = n("305961"),
        i = n("476263"),
        d = n("782340"),
        o = n("946565"),
        u = e => {
          let { entry: t } = e,
            n = r.default.getChannel(t.channelId);
          if (null == n) return null;
          let u = s.default.getGuild(n.guild_id);
          return null == u
            ? null
            : (0, a.jsxs)("div", {
                className: o.container,
                children: [
                  (0, a.jsx)(l.Heading, {
                    className: o.header,
                    variant: "heading-sm/semibold",
                    children:
                      d.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER,
                  }),
                  (0, a.jsxs)("div", {
                    className: o.guildContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: o.hubInfo,
                        children: [
                          (0, a.jsx)(i.default, {
                            guild: u,
                            size: i.default.Sizes.MINI,
                            className: o.hubIcon,
                          }),
                          (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: u.name,
                          }),
                        ],
                      }),
                      (0, a.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t.name,
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    420938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("587974"),
        s = n("315102"),
        i = n("782340"),
        d = n("270489"),
        o = e => {
          var t;
          let { entry: n } = e,
            { id: o, icon: u, name: c } = n,
            m =
              null !==
                (t = s.default.getGuildIconURL({ id: o, icon: u, size: 32 })) &&
              void 0 !== t
                ? t
                : void 0;
          return (0, a.jsxs)("div", {
            className: d.container,
            children: [
              (0, a.jsx)(l.Heading, {
                className: d.header,
                variant: "heading-sm/semibold",
                children: i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER,
              }),
              (0, a.jsx)("div", {
                className: d.guildContainer,
                children: (0, a.jsxs)("div", {
                  className: d.guildInfo,
                  children: [
                    (0, a.jsx)(r.default, {
                      mask: r.default.Masks.SQUIRCLE,
                      width: 32,
                      height: 32,
                      className: d.guildIconMask,
                      children: (0, a.jsx)("img", {
                        src: m,
                        alt: "",
                        className: d.guildIcon,
                      }),
                    }),
                    (0, a.jsx)(l.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: c,
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    111181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        s = n("305961"),
        i = n("476263"),
        d = n("782340"),
        o = n("705923"),
        u = e => {
          let { event: t } = e,
            n = (0, l.useStateFromStores)([s.default], () =>
              s.default.getGuild(t.guild_id)
            );
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: o.container,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: o.header,
                    variant: "heading-sm/semibold",
                    children:
                      d.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE,
                  }),
                  (0, a.jsxs)("div", {
                    className: o.guildContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: o.guildInfo,
                        children: [
                          (0, a.jsx)(i.default, {
                            guild: n,
                            size: i.default.Sizes.MINI,
                            className: o.guildIcon,
                          }),
                          (0, a.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: n.name,
                          }),
                        ],
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t.name,
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    677734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("367376"),
        i = n("442791"),
        d = n("782340"),
        o = n("595427"),
        u = e => {
          let {
              node: { header: t, subheader: n, button: u },
            } = e,
            c = (null == u ? void 0 : u.type) === "submit",
            m = l.useRef(
              s.default.reactParserFor({
                ...s.default.defaultRules,
                link: i.LinkMarkupRule,
              })
            );
          return (0, a.jsxs)("div", {
            className: o.headerContainer,
            children: [
              null != t && "" !== t
                ? (0, a.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: t,
                  })
                : null,
              null != n && "" !== t
                ? (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: m.current(n),
                  })
                : null,
              c &&
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  children:
                    d.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format(),
                }),
            ],
          });
        };
    },
    538418: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        r = n("367376"),
        s = n("555158"),
        i = n("442791"),
        d = n("512048"),
        o = e => {
          let {
              node: { info: t },
            } = e,
            n = l.useRef(
              r.default.reactParserFor({
                ...r.default.defaultRules,
                link: i.LinkMarkupRule,
              })
            );
          return null == t
            ? null
            : (0, a.jsx)(s.default, {
                className: d.infoBox,
                messageType: s.HelpMessageTypes.INFO,
                children: n.current(t),
              });
        };
    },
    584866: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("716241"),
        i = n("592407"),
        d = n("305961"),
        o = n("476263"),
        u = n("49111"),
        c = n("782340"),
        m = n("433969"),
        _ = e => {
          let { guildId: t, reportId: n } = e,
            [_, f] = l.useState(!1),
            E = d.default.getGuild(t),
            h = null != E;
          l.useEffect(() => {
            f(!h);
          }, [h]);
          let v = l.useCallback(() => {
            f(!0),
              s.default.trackWithMetadata(
                u.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED,
                { guild_id: t, report_id: n }
              ),
              i.default.leaveGuild(t);
          }, [t, n]);
          if (null == E) return null;
          let R = () => {
            (0, r.openModal)(e =>
              (0, a.jsx)(r.ConfirmModal, {
                header: c.default.Messages.LEAVE_SERVER_TITLE.format({
                  name: E.name,
                }),
                confirmText: c.default.Messages.LEAVE_SERVER,
                cancelText: c.default.Messages.CANCEL,
                onConfirm: v,
                ...e,
                children: (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: c.default.Messages.LEAVE_SERVER_BODY.format({
                    name: E.name,
                  }),
                }),
              })
            );
          };
          return (0, a.jsxs)("div", {
            className: m.container,
            children: [
              (0, a.jsx)(r.Text, {
                className: m.description,
                variant: "text-sm/normal",
                children:
                  c.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION,
              }),
              (0, a.jsxs)("div", {
                className: m.guildContainer,
                children: [
                  (0, a.jsxs)("div", {
                    className: m.guildInfo,
                    children: [
                      (0, a.jsx)(o.default, {
                        guild: E,
                        showBadge: !1,
                        animate: !1,
                        size: o.default.Sizes.SMALL,
                        "aria-label": E.name,
                        className: m.icon,
                        active: !0,
                      }),
                      (0, a.jsx)(r.Text, {
                        className: m.guildName,
                        variant: "text-sm/semibold",
                        children: E.name,
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.Button, {
                    onClick: () => R(),
                    disabled: _,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.RED,
                    children: _
                      ? c.default.Messages.MOBILE_REPORTS_LEFT_SERVER
                      : c.default.Messages.LEAVE_SERVER,
                  }),
                ],
              }),
            ],
          });
        };
    },
    442791: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LinkMarkupRule: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("404828"),
        r = n.n(l),
        s = n("77078");
      let i = {
        ...r.defaultRules.link,
        react: function (e, t, n) {
          return (0, a.jsx)(s.Anchor, {
            href: e.target,
            target: "_blank",
            children: t(e.content, n),
          });
        },
      };
    },
    41877: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        s = n("574073"),
        i = n("39331"),
        d = n("42203"),
        o = n("780571"),
        u = n("497880"),
        c = n("93332"),
        m = n("93427"),
        _ = n("719347"),
        f = n("782340"),
        E = n("767162"),
        h = e => {
          let { message: t } = e,
            n = (0, s.default)(t),
            h = (0, l.useStateFromStores)([d.default], () =>
              d.default.getChannel(t.channel_id)
            ),
            { content: v } = (0, i.default)(t, { hideSimpleEmbedContent: !1 });
          return null == h
            ? null
            : (0, a.jsxs)("div", {
                className: E.container,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: E.header,
                    variant: "heading-sm/semibold",
                    children:
                      f.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE,
                  }),
                  (0, a.jsx)(r.Scroller, {
                    className: E.messagePreviewContainer,
                    children: (0, a.jsx)(o.default, {
                      childrenMessageContent: (() => {
                        let e =
                          null == v ||
                          "" === v ||
                          (Array.isArray(v) && 0 === v.length);
                        if (e) {
                          let { icon: e } = (0, m.renderSingleLineMessage)(
                            t,
                            v,
                            !1,
                            "",
                            {
                              iconClass: E.attachmentIcon,
                              iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
                            }
                          );
                          return e;
                        }
                        return (0, a.jsx)(u.default, {
                          message: t,
                          content: v,
                        });
                      })(),
                      childrenHeader: (0, a.jsx)(c.default, {
                        message: t,
                        channel: h,
                        author: n,
                        guildId: h.guild_id,
                      }),
                      disableInteraction: !0,
                    }),
                  }),
                ],
              });
        };
    },
    71514: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("608541");
      let s = e => {
        let { onChange: t, label: n, subtitle: s, selected: i } = e;
        return (0, a.jsx)("div", {
          className: r.checkboxRow,
          children: (0, a.jsxs)(l.Checkbox, {
            type: l.Checkbox.Types.INVERTED,
            onChange: () => t(),
            value: i,
            children: [
              (0, a.jsx)(l.Text, {
                color: "interactive-active",
                variant: "text-md/semibold",
                children: n,
              }),
              null != s
                ? (0, a.jsx)(l.Text, {
                    color: "interactive-active",
                    variant: "text-sm/normal",
                    children: s,
                  })
                : null,
            ],
          }),
        });
      };
      var i = e => {
        let { element: t, state: n, onChange: l } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: r } = t;
        return (0, a.jsx)("div", {
          children: r.map((e, t) => {
            let [r, i, d] = e;
            return (0, a.jsx)(
              s,
              {
                onChange: () => l(r, i),
                selected: r in n,
                label: i,
                subtitle: d,
              },
              "".concat(t, "+button")
            );
          }),
        });
      };
    },
    265104: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("305961"),
        s = n("476263"),
        i = n("782340"),
        d = n("845673"),
        o = e => {
          let { stageInstance: t } = e,
            n = r.default.getGuild(t.guild_id);
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: d.container,
                children: [
                  (0, a.jsx)(l.Heading, {
                    className: d.header,
                    variant: "heading-sm/semibold",
                    children:
                      i.default.Messages
                        .MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE,
                  }),
                  (0, a.jsxs)("div", {
                    className: d.guildContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: d.guildInfo,
                        children: [
                          (0, a.jsx)(s.default, {
                            guild: n,
                            size: s.default.Sizes.MINI,
                            className: d.guildIcon,
                          }),
                          (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: n.name,
                          }),
                        ],
                      }),
                      (0, a.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t.topic,
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    345516: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("211980");
      let r = n("648529");
      var s = e => {
        let { element: t } = e;
        return (null == t ? void 0 : t.type) !== "success"
          ? null
          : (0, a.jsx)("img", { alt: "", src: r, className: l.successImg });
      };
    },
    244599: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        i = n("77078"),
        d = n("367376"),
        o = n("306160"),
        u = n("782340"),
        c = n("12961");
      function m(e) {
        let {
            element: {
              data: { title: t, body: n, sms: r, is_localized: m },
            },
          } = e,
          [_, f] = l.useState(!1),
          E = l.useRef(d.default.reactParserFor(d.default.defaultRules));
        return m
          ? (0, a.jsxs)("div", {
              className: c.container,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-secondary",
                  className: c.header,
                  children: t,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  className: c.bodyText,
                  children: E.current(n),
                }),
                (0, a.jsx)("div", {
                  className: c.smsInfoContainer,
                  children: (0, a.jsxs)("div", {
                    className: s(c.smsNumberContainer, { [c.copied]: _ }),
                    children: [
                      (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        selectable: !0,
                        className: c.smsNumberText,
                        children: r,
                      }),
                      (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.SMALL,
                        className: c.trailingButton,
                        onClick: () => {
                          (0, o.copy)(r) && f(!0);
                        },
                        color: i.Button.Colors.PRIMARY,
                        children: _
                          ? u.default.Messages.COPIED
                          : u.default.Messages.COPY,
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
    },
    291028: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("308289"),
        s = n("782340"),
        i = n("173868"),
        d = e => {
          let { user: t } = e;
          return (0, a.jsxs)("div", {
            className: i.container,
            children: [
              (0, a.jsx)(l.Heading, {
                className: i.header,
                variant: "heading-sm/semibold",
                children: s.default.Messages.REPORTS_USER_PREVIEW_TITLE,
              }),
              (0, a.jsx)("div", {
                className: i.userContainer,
                children: (0, a.jsxs)("div", {
                  className: i.userInfo,
                  children: [
                    (0, a.jsx)(r.default, {
                      className: i.userIcon,
                      user: t,
                      size: l.AvatarSizes.SIZE_40,
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        null != t.globalName &&
                          (0, a.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.globalName,
                          }),
                        (0, a.jsx)(l.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: t.username,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=537e08f9b7a7211a1985.js.map
