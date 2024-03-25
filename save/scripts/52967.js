(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52967"],
  {
    310013: function (e, t, n) {
      "use strict";
      var l = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          arguments: !0,
          arity: !0,
        },
        s = "function" == typeof Object.getOwnPropertySymbols;
      e.exports = function (e, t, n) {
        if ("string" != typeof t) {
          var a = Object.getOwnPropertyNames(t);
          s && (a = a.concat(Object.getOwnPropertySymbols(t)));
          for (var i = 0; i < a.length; ++i)
            if (!l[a[i]] && !r[a[i]] && (!n || !n[a[i]]))
              try {
                e[a[i]] = t[a[i]];
              } catch (e) {}
        }
        return e;
      };
    },
    529861: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ebd4163d89c2d849ec54.svg";
    },
    156465: function (e, t, n) {
      "use strict";
      e.exports = n.p + "42b086ee3d9863ea45bc.svg";
    },
    80300: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          backgroundImagePreloader: function () {
            return c;
          },
        }),
        n("424973");
      var l = n("37983"),
        r = n("884691"),
        s = n("310013"),
        a = n.n(s),
        i = n("407063");
      let o = /url\(['"](.*)['"]\)/,
        u = e => {
          if (null == e || "" === e || "none" === e) return null;
          let t = e.match(o);
          return null != t ? t[1] : e;
        };
      function c(e) {
        class t extends r.Component {
          componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: l } = this.state,
              { style: r } = this.props,
              s = null != r ? u(r.backgroundImage) : null;
            null == s && s !== n
              ? this.setState({ loaded: !0, cached: s })
              : this.cachedURLs.indexOf(s) >= 0
                ? this.setState({ loaded: !0, cached: s })
                : null != s &&
                  s !== n &&
                  !0 === l &&
                  this.setState({ loaded: !1 }, () => this.preloadURL(s));
          }
          preloadURL(e) {
            this.canceller && this.canceller(),
              (this.canceller = (0, i.loadImage)(e, t => {
                this.canceller && (this.canceller = null),
                  !t &&
                    (this.cachedURLs.push(e),
                    this.setState({ cached: e, loaded: !0 }));
                let { onBackgroundImageLoad: n } = this.props;
                n && n(t, e);
              }));
          }
          componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
          }
          render() {
            let { style: t, onBackgroundImageLoad: n, ...r } = this.props,
              { loaded: s, cached: a } = this.state;
            if (!s && null != t) {
              var i;
              t = {
                ...t,
                backgroundImage:
                  null == (i = a) || "" === i || "none" === i
                    ? "none"
                    : "url(".concat(i, ")"),
              };
            }
            return (0, l.jsx)(e, { style: t, ...r });
          }
          constructor(e) {
            super(e), (this.cachedURLs = []), (this.canceller = null);
            let { style: t } = e,
              n = null != t ? u(t.backgroundImage) : null;
            (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
          }
        }
        return a(t, e), t;
      }
    },
    297267: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openCreateGuildModal: function () {
            return I;
          },
          updateCreateGuildModal: function () {
            return p;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("77078"),
        s = n("42963"),
        a = n("599110"),
        i = n("169626"),
        o = n("243338"),
        u = n("49111"),
        c = n("149806");
      function d(e, t, n, r) {
        return (0, l.jsx)(i.default, {
          onSuccess: t => {
            s.default.flowStep(
              c.FlowType.CREATE_GUILD,
              c.CreateGuildSteps.SUCCESS
            ),
              e.onClose(),
              null == r || r(t);
          },
          onSlideChange: e =>
            (function (e, t) {
              switch (e) {
                case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
                  s.default.flowStepOrStart(
                    c.FlowType.CREATE_GUILD,
                    c.CreateGuildSteps.GUILD_TEMPLATES
                  ),
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                      type: "Create Guild Templates",
                      location: t,
                    });
                  break;
                case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
                  s.default.flowStep(
                    c.FlowType.CREATE_GUILD,
                    c.CreateGuildSteps.GUILD_CREATE
                  ),
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                      type: "Create Guild Step 2",
                      location: t,
                    });
                  break;
                case o.CreateGuildSlideTypes.CREATION_INTENT:
                  a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                    type: "Server Intent Discovery",
                    location: t,
                  });
                  break;
                case o.CreateGuildSlideTypes.JOIN_GUILD:
                  s.default.flowStep(
                    c.FlowType.CREATE_GUILD,
                    c.CreateGuildSteps.JOIN_GUILD
                  ),
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                      type: "Join Guild",
                      location: t,
                    });
              }
            })(e, n),
          initialSlide: t,
          hasJoinButton: !0,
          ...e,
        });
      }
      let I = e => {
          let { initialSlide: t, location: n, onSuccess: l } = e;
          (0, r.openModal)(e => d(e, t, n, l), {
            modalKey: o.CREATE_GUILD_MODAL_KEY,
          });
        },
        p = e => {
          let { slide: t, location: n } = e;
          (0, r.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => d(e, t, n));
        };
    },
    169626: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var l = n("37983"),
        r = n("884691"),
        s = n("627445"),
        a = n.n(s),
        i = n("759843"),
        o = n("77078"),
        u = n("84339"),
        c = n("599110"),
        d = n("818351"),
        I = n("21214"),
        p = n("622210"),
        E = n("72405"),
        _ = n("110337"),
        S = n("243338"),
        f = n("49111"),
        T = n("784505");
      function C(e) {
        let {
            transitionState: t,
            initialSlide: n = S.CreateGuildSlideTypes.GUILD_TEMPLATES,
            onSuccess: s,
            onClose: C,
            onSlideChange: N,
            hasJoinButton: L,
          } = e,
          [A, m] = r.useState(n),
          h = (0, u.default)(A),
          [g, D] = r.useState(null),
          [R, G] = r.useState(null),
          [U, M] = r.useState(null),
          [O, y] = r.useState(!1);
        r.useEffect(() => {
          m(n);
        }, [m, n]),
          r.useEffect(() => {
            A !== h && N(A);
          }, [N, A, h]);
        let v = r.useCallback(e => {
            m(S.CreateGuildSlideTypes.CREATION_INTENT),
              G(e),
              c.default.track(f.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code,
              });
          }, []),
          x = r.useCallback(e => {
            y(e === S.GuildCreationIntents.COMMUNITY),
              m(S.CreateGuildSlideTypes.CUSTOMIZE_GUILD);
          }, []),
          w = r.useCallback(() => m(S.CreateGuildSlideTypes.JOIN_GUILD), [m]),
          P = r.useCallback(() => {
            if (A === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
              m(S.CreateGuildSlideTypes.CREATION_INTENT);
              return;
            }
            m(S.CreateGuildSlideTypes.GUILD_TEMPLATES), G(null);
          }, [A]),
          b = r.useCallback(
            e => {
              M(e), s(e);
            },
            [s, M]
          ),
          j = r.useCallback(() => {
            a(null != U, "handleSuccess called before onGuildCreated"), s(U);
          }, [s, U]),
          k = { impression_group: i.ImpressionGroups.GUILD_ADD_FLOW };
        return (0, l.jsx)("div", {
          children: (0, l.jsx)(o.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, l.jsx)("div", {
              className: T.container,
              children: (0, l.jsxs)(o.Slides, {
                activeSlide: A,
                width: 440,
                onSlideReady: e => D(e),
                children: [
                  (0, l.jsx)(o.Slide, {
                    id: S.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: k,
                    children: (0, l.jsx)(E.default, {
                      isNewUser: !1,
                      onJoin: L ? w : void 0,
                      onChooseTemplate: v,
                      onClose: C,
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: S.CreateGuildSlideTypes.CREATION_INTENT,
                    impressionName:
                      i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: k,
                    children: (0, l.jsx)(I.default, {
                      onClose: C,
                      onBack: P,
                      onCreationIntentChosen: x,
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                    impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: k,
                    children: (0, l.jsx)(p.default, {
                      guildTemplate: R,
                      onGuildCreated: b,
                      onClose: C,
                      onBack: P,
                      isSlideReady:
                        g === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                      isCommunity: O,
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: S.CreateGuildSlideTypes.CHANNEL_PROMPT,
                    impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: k,
                    children: (0, l.jsx)(d.default, {
                      createdGuildId: U,
                      onClose: C,
                      onChannelPromptCompleted: j,
                      isSlideReady:
                        g === S.CreateGuildSlideTypes.CHANNEL_PROMPT,
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: S.CreateGuildSlideTypes.JOIN_GUILD,
                    impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: k,
                    children: (0, l.jsx)(_.default, {
                      onBack: P,
                      onClose: C,
                      isSlideReady: g === S.CreateGuildSlideTypes.JOIN_GUILD,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    243338: function (e, t, n) {
      "use strict";
      var l, r, s, a;
      n.r(t),
        n.d(t, {
          CreateGuildSlideTypes: function () {
            return l;
          },
          GuildCreationIntents: function () {
            return r;
          },
          CREATE_GUILD_MODAL_KEY: function () {
            return i;
          },
        }),
        ((s = l || (l = {})).GUILD_TEMPLATES = "guild-templates"),
        (s.CUSTOMIZE_GUILD = "customize-guild"),
        (s.CHANNEL_PROMPT = "channel-prompt"),
        (s.JOIN_GUILD = "join-guild"),
        (s.CREATION_INTENT = "creation-intent"),
        ((a = r || (r = {})).FRIENDS = "FRIENDS"),
        (a.COMMUNITY = "COMMUNITY"),
        (a.CLAN = "CLAN");
      let i = "create-guild";
    },
    110337: function (e, t, n) {
      "use strict";
      let l, r;
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        o = n.n(i),
        u = n("77078"),
        c = n("970728"),
        d = n("448993"),
        I = n("393414"),
        p = n("145131"),
        E = n("476765"),
        _ = n("883029"),
        S = n("49111"),
        f = n("782340"),
        T = n("274039"),
        C = n("529861"),
        N = n("156465");
      let L = "hTKzmak",
        A = (0, E.uid)();
      let m =
          ((l = window.GLOBAL_ENV.INVITE_HOST),
          (r = ""),
          null == l && ((l = location.host), (r = S.Routes.INVITE(""))),
          "".concat(location.protocol, "//").concat(l).concat(r, "/")),
        h = [L, "".concat(m).concat(L), "".concat(m).concat("cool-people")],
        g = e => {
          let { onClick: t } = e;
          return (0, s.jsxs)(u.Clickable, {
            className: T.rowContainer,
            onClick: () => {
              t(), (0, I.transitionTo)(S.Routes.GUILD_DISCOVERY);
            },
            children: [
              (0, s.jsx)("img", {
                width: 40,
                height: 40,
                className: T.rowIcon,
                alt: "",
                src: N,
              }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(u.Heading, {
                    className: T.rowText,
                    variant: "heading-md/semibold",
                    children: f.default.Messages.DISCOVERY_UPSELL_HEADER,
                  }),
                  (0, s.jsx)(u.Text, {
                    className: T.rowText,
                    variant: "text-xs/normal",
                    children: f.default.Messages.DISCOVERY_UPSELL_DESCRIPTION,
                  }),
                ],
              }),
              (0, s.jsx)("img", { className: T.rowArrow, alt: "", src: C }),
            ],
          });
        };
      function D(e) {
        let { onBack: t, onClose: n, isSlideReady: l } = e,
          [r, i] = a.useState(""),
          [I, E] = a.useState(!1),
          [S, C] = a.useState(null),
          N = a.useRef(null);
        a.useEffect(() => {
          var e;
          l && (null === (e = N.current) || void 0 === e || e.focus());
        }, [l]);
        let D = e => {
          e.preventDefault();
          let t = r.trim();
          if ("" === t) {
            C(f.default.Messages.INVALID_INVITE_LINK_ERROR);
            return;
          }
          C(null), E(!0);
          let l = t.split("/"),
            s = l[l.length - 1];
          c.default.resolveInvite(s, "Join Guild", { inputValue: t }).then(
            e => {
              let { invite: t } = e;
              if ((E(!1), null == t)) {
                C(f.default.Messages.INSTANT_INVITE_EXPIRED);
                return;
              }
              if (null != t.channel) {
                let e = c.default.getInviteContext("Join Guild", t);
                c.default
                  .acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                      n(), c.default.transitionToInvite(e);
                    },
                  })
                  .then(
                    () => {},
                    e => {
                      if (
                        e instanceof d.V6OrEarlierAPIError ||
                        e instanceof d.APIError
                      ) {
                        let t = (0, _.getInviteError)(e.code);
                        C(t);
                      } else C(f.default.Messages.INVITE_MODAL_ERROR_DEFAULT);
                    }
                  );
              }
            },
            e => {
              E(!1);
              let t = new d.V6OrEarlierAPIError(e),
                n = (0, _.getInviteError)(t.code);
              C(n);
            }
          );
        };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)(u.ModalHeader, {
              className: T.header,
              direction: p.default.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, s.jsx)(u.Heading, {
                  className: T.title,
                  variant: "heading-xl/semibold",
                  children: f.default.Messages.JOIN_SERVER_TITLE,
                }),
                (0, s.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: f.default.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                }),
                (0, s.jsx)(u.ModalCloseButton, {
                  className: T.closeButton,
                  onClick: n,
                }),
              ],
            }),
            (0, s.jsxs)(u.ModalContent, {
              className: T.content,
              children: [
                (0, s.jsx)("form", {
                  onSubmit: D,
                  className: T.inputForm,
                  children: (0, s.jsxs)(u.FormItem, {
                    children: [
                      (0, s.jsx)(u.FormTitle, {
                        id: A,
                        error: S,
                        className: o(T.formTitle, { [T.error]: null != S }),
                        required: !0,
                        children: f.default.Messages.FORM_LABEL_INVITE_LINK,
                      }),
                      (0, s.jsx)(u.TextInput, {
                        value: r,
                        onChange: i,
                        className: T.input,
                        inputClassName: T.inputInner,
                        placeholder: "".concat(m).concat(L),
                        inputRef: N,
                        required: !0,
                        "aria-labelledby": A,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(u.FormItem, {
                  title: f.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                  titleClassName: T.formTitle,
                  className: T.examplesForm,
                  children: h.map(e =>
                    (0, s.jsx)(
                      u.Clickable,
                      {
                        className: T.sampleLink,
                        onClick: () => i(e),
                        children: e,
                      },
                      e
                    )
                  ),
                }),
                (0, s.jsx)(g, { onClick: n }),
              ],
            }),
            (0, s.jsxs)(u.ModalFooter, {
              className: T.footer,
              children: [
                (0, s.jsx)(u.Button, {
                  color: u.Button.Colors.BRAND,
                  submitting: I,
                  onClick: D,
                  children: f.default.Messages.NUF_JOIN_SERVER_BUTTON,
                }),
                (0, s.jsx)(u.Button, {
                  color: u.Button.Colors.PRIMARY,
                  look: u.Button.Looks.LINK,
                  size: u.Button.Sizes.MIN,
                  onClick: t,
                  children: f.default.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    149806: function (e, t, n) {
      "use strict";
      var l, r, s, a, i, o, u, c, d, I;
      n.r(t),
        n.d(t, {
          FlowType: function () {
            return l;
          },
          AgeGateSteps: function () {
            return r;
          },
          ClaimAccountSteps: function () {
            return s;
          },
          CreateGuildSteps: function () {
            return a;
          },
          RegistrationSteps: function () {
            return i;
          },
        }),
        ((o = l || (l = {})).UNKNOWN = "unknown"),
        (o.ANY = "any"),
        (o.INVITE = "invite"),
        (o.ORGANIC = "organic_registration"),
        (o.ORGANIC_MARKETING = "organic_marketing"),
        (o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (o.CREATE_GUILD = "create_guild"),
        ((u = r || (r = {})).AGE_GATE = "age_gate"),
        (u.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = s || (s = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = a || (a = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((I = i || (i = {})).NUF_STARTED = "nuf_started"),
        (I.AGE_GATE = "age_gate"),
        (I.NUF_COMPLETE = "nuf_complete"),
        (I.HUB_CONNECTION = "hub_connection");
    },
    42963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var l = n("308503"),
        r = n("95410"),
        s = n("605250"),
        a = n("599110"),
        i = n("149806"),
        o = n("49111");
      let u = "UserFlowAnalyticsStore_current",
        c = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === i.FlowType.UNKNOWN) return null;
        let t = r.Storage.get("".concat(c, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...l } = t;
        return 1 !== n ? null : l;
      }
      new s.default("UserFlowAnalytics");
      let I = (0, l.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e
              ? e
              : r.Storage.get(u);
          if (null == n) return null;
          let { [n]: l } = t().flows,
            s = null != l ? l : d(n);
          return (null == s ? void 0 : s.currentStep) != null ? n : null;
        },
      }));
      function p(e, t) {
        let { [e]: n, ...l } = I.getState().flows,
          r = null != n ? n : d(e);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
          I.setState({
            flows: {
              ...l,
              [e]: {
                type: e,
                lastStep: null,
                lastTimestamp: null,
                currentStep: t,
                currentTimestamp: new Date(),
                skipped: !1,
              },
            },
            currentFlow: e,
          });
      }
      function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = e;
        if (e === i.FlowType.ANY) {
          var r;
          l =
            null !== (r = I.getState().activeFlow()) && void 0 !== r
              ? r
              : i.FlowType.UNKNOWN;
        }
        let { [l]: s, ...a } = I.getState().flows,
          o = null != s ? s : d(l);
        if (null != o && null != o.currentStep)
          o.currentStep !== t &&
            I.setState({
              flows: {
                ...a,
                [l]: {
                  ...o,
                  lastStep: o.currentStep,
                  lastTimestamp: o.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: l,
            });
      }
      I.subscribe(
        e => {
          var t;
          if (
            null != e &&
            (!(function (e) {
              if (e.type === i.FlowType.UNKNOWN) return;
              let t = "".concat(c, "-").concat(e.type);
              e.ended
                ? (r.Storage.remove(t), r.Storage.remove(u))
                : (r.Storage.set("".concat(c, "-").concat(e.type), {
                    ...e,
                    version: 1,
                  }),
                  r.Storage.set(u, e.type));
            })(e),
            a.default.track(
              o.AnalyticEvents.NUO_TRANSITION,
              {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step:
                  "function" !=
                  typeof (null === (t = e.lastTimestamp) || void 0 === t
                    ? void 0
                    : t.getTime)
                    ? 0
                    : (e.currentTimestamp.getTime() -
                        e.lastTimestamp.getTime()) /
                      1e3,
              },
              { flush: !0 }
            ),
            e.ended)
          ) {
            let t = { ...I.getState().flows };
            delete t[e.type], I.setState({ flows: t, currentFlow: null });
          }
        },
        e => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
      );
      function _() {
        return null != I.getState().activeFlow();
      }
      var S = {
        flowStart: p,
        flowStepOrStart: function (e, t) {
          _() ? E(e, t) : p(e, t);
        },
        flowStep: E,
        hasActiveFlow: _,
      };
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        i = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: c,
            ...d
          } = e,
          I = r.Children.only(t),
          p = (0, i.useRedesignIconContext)().enabled;
        return (0, l.jsxs)("div", {
          className: a(u.flowerStarContainer, s),
          style: { width: n, height: n },
          children: [
            (0, l.jsx)(o.default, { ...d, className: a(c, u.flowerStar) }),
            (0, l.jsx)("div", {
              className: a(u.childContainer, {
                [u.redesignIconChildContainer]: p,
              }),
              children: I,
            }),
          ],
        });
      }
    },
    476263: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        i = n("90915"),
        o = n("446674"),
        u = n("669491"),
        c = n("77078"),
        d = n("80300"),
        I = n("471671"),
        p = n("103603"),
        E = n("474293"),
        _ = n("580357"),
        S = n("356659");
      let f = {
          SMOL: "Smol",
          MINI: "Mini",
          SMALLER: "Smaller",
          SMALL: "Small",
          MEDIUM: "Medium",
          LARGE: "Large",
          LARGER: "Larger",
          XLARGE: "XLarge",
        },
        T = {
          [f.SMOL]: 16,
          [f.MINI]: 20,
          [f.SMALLER]: 24,
          [f.SMALL]: 30,
          [f.MEDIUM]: 40,
          [f.LARGE]: 50,
          [f.LARGER]: 64,
          [f.XLARGE]: 100,
        },
        C = {
          [f.SMOL]: [10, 10, 8, 6, 6, 4],
          [f.MINI]: [12, 12, 10, 10, 8, 6, 4],
          [f.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
          [f.SMALL]: [14, 14, 12, 12, 10, 8, 6],
          [f.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
          [f.LARGE]: [18, 18, 16, 16, 14, 12, 10],
          [f.LARGER]: [19, 19, 17, 17, 15, 13, 11],
          [f.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
        };
      class N extends r.PureComponent {
        renderAcronym() {
          let { guild: e, iconSrc: t } = this.props;
          return null != e.icon || null != t
            ? null
            : (0, l.jsx)("div", { className: S.acronym, children: e.acronym });
        }
        renderBadge() {
          let { showBadge: e, guild: t, badgeStrokeColor: n } = this.props;
          return e && null != t.hasFeature
            ? (0, l.jsx)(_.default, {
                className: S.guildIconBadge,
                guild: t,
                badgeStrokeColor: n,
              })
            : null;
        }
        renderIcon() {
          var e, t;
          let {
              guild: n,
              className: r,
              showBadge: s,
              active: i,
              size: o,
              style: u = {},
              textScale: d,
              showTooltip: I,
              tooltipPosition: p,
              onClick: _,
              to: f,
              badgeStrokeColor: T,
              animate: N,
              tabIndex: L,
              iconSrc: A,
              "aria-hidden": m,
              ...h
            } = this.props,
            g = C[o],
            D = null != _ ? c.Clickable : "div";
          return (0, l.jsxs)(D, {
            className: a(S.icon, r, (0, E.getClass)(S, "iconSize", o), {
              [null !== (e = (0, E.getClass)(S, "iconActive", o)) &&
              void 0 !== e
                ? e
                : ""]: i,
              [S.iconInactive]: !i,
              [S.noIcon]: null == n.icon,
            }),
            "aria-hidden": m,
            style:
              null == n.icon
                ? {
                    fontSize:
                      (null !== (t = g[n.acronym.length]) && void 0 !== t
                        ? t
                        : g[g.length - 1]) * d,
                    ...u,
                  }
                : u,
            onClick: null != f || null == _ ? void 0 : _,
            tabIndex: L,
            ...h,
            children: [this.renderAcronym(), this.renderBadge()],
          });
        }
        renderTooltip() {
          let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
          return t
            ? (0, l.jsx)(c.Tooltip, {
                text: e.name,
                position: n,
                "aria-label": !1,
                children: e =>
                  r.cloneElement(r.Children.only(this.renderIcon()), { ...e }),
              })
            : this.renderIcon();
        }
        render() {
          let {
            to: e,
            guild: t,
            source: n,
            tabIndex: r,
            "aria-hidden": s,
          } = this.props;
          return null != e
            ? (0, l.jsx)(i.Link, {
                "aria-hidden": s,
                to: {
                  pathname: e,
                  state: null != n ? { analyticsSource: n } : null,
                },
                "aria-label": t.toString(),
                tabIndex: r,
                children: this.renderTooltip(),
              })
            : this.renderTooltip();
        }
      }
      let L = o.default.connectStores([I.default], e => {
        let { guild: t, animate: n, iconSrc: l, style: r, size: s } = e;
        return {
          style: {
            ...r,
            backgroundImage: (0, p.makeCssUrlString)(
              null != l ? l : t.getIconURL(T[s], n && I.default.isFocused())
            ),
          },
        };
      })((0, d.backgroundImagePreloader)(e => (0, l.jsx)(N, { ...e })));
      class A extends r.PureComponent {
        render() {
          return (0, l.jsx)(L, { ...this.props });
        }
      }
      (A.Sizes = f),
        (A.defaultProps = {
          size: f.LARGE,
          textScale: 1,
          showBadge: !1,
          showTooltip: !1,
          active: !1,
          tooltipPosition: "top",
          badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
          animate: !1,
        });
      var m = A;
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return a;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return o;
          },
        });
      var l = n("995008"),
        r = n.n(l),
        s = n("775560");
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        i = () => (0, s.useLazyValue)(() => a()),
        o = e => {
          let { children: t } = e;
          return t(i());
        };
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("75196"),
        s = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: s = "currentColor",
            foreground: a,
            ...i
          } = e;
          return (0, l.jsx)("svg", {
            ...(0, r.default)(i),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, l.jsx)("path", {
              className: a,
              fill: s,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    883029: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDescriptiveInviteError: function () {
            return o;
          },
          getInviteError: function () {
            return u;
          },
        });
      var l = n("697218"),
        r = n("701909"),
        s = n("719923"),
        a = n("49111"),
        i = n("782340");
      function o(e) {
        switch (e) {
          case a.AbortCodes.TOO_MANY_USER_GUILDS:
            let t = l.default.getCurrentUser(),
              n =
                s.default.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff()),
              r = n ? a.MAX_USER_GUILDS_PREMIUM : a.MAX_USER_GUILDS;
            return {
              title: i.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                quantity: r,
              }),
              description: i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION,
            };
          case a.AbortCodes.GUILD_AT_CAPACITY:
            return {
              title: i.default.Messages.SERVER_IS_CURRENTLY_FULL,
              description: i.default.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          case a.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
              description: i.default.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          default:
            return null;
        }
      }
      function u(e) {
        switch (e) {
          case a.AbortCodes.TOO_MANY_USER_GUILDS:
            return i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
          case a.AbortCodes.GUILD_AT_CAPACITY:
            return i.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
          case a.AbortCodes.INVALID_COUNTRY_CODE:
            return i.default.Messages.INVALID_COUNTRY_CODE;
          case a.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
            return i.default.Messages.INVALID_CANNOT_FRIEND_SELF;
          case a.AbortCodes.INVITES_DISABLED:
            return i.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format(
              {
                articleLink: r.default.getArticleURL(
                  a.HelpdeskArticles.INVITE_DISABLED
                ),
              }
            );
          default:
            return i.default.Messages.INVITE_MODAL_ERROR_DEFAULT;
        }
      }
    },
    474293: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getClass: function () {
            return r;
          },
        }),
        n("808653");
      var l = n("159885");
      function r(e, t) {
        for (
          var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2;
          s < n;
          s++
        )
          r[s - 2] = arguments[s];
        let a = r.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
          i = "".concat(t).concat(a),
          o = e[i];
        if (null != o) return o;
      }
    },
  },
]);
//# sourceMappingURL=4156b900dde2b4425633.js.map
