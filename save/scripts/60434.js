(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60434"],
  {
    310013: function (e, t, l) {
      "use strict";
      var n = {
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
      e.exports = function (e, t, l) {
        if ("string" != typeof t) {
          var a = Object.getOwnPropertyNames(t);
          s && (a = a.concat(Object.getOwnPropertySymbols(t)));
          for (var i = 0; i < a.length; ++i)
            if (!n[a[i]] && !r[a[i]] && (!l || !l[a[i]]))
              try {
                e[a[i]] = t[a[i]];
              } catch (e) {}
        }
        return e;
      };
    },
    529861: function (e, t, l) {
      "use strict";
      e.exports = l.p + "ebd4163d89c2d849ec54.svg";
    },
    156465: function (e, t, l) {
      "use strict";
      e.exports = l.p + "42b086ee3d9863ea45bc.svg";
    },
    80300: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          backgroundImagePreloader: function () {
            return c;
          },
        }),
        l("424973");
      var n = l("37983"),
        r = l("884691"),
        s = l("310013"),
        a = l.n(s),
        i = l("407063");
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
            let { cached: l, loaded: n } = this.state,
              { style: r } = this.props,
              s = null != r ? u(r.backgroundImage) : null;
            null == s && s !== l
              ? this.setState({ loaded: !0, cached: s })
              : this.cachedURLs.indexOf(s) >= 0
                ? this.setState({ loaded: !0, cached: s })
                : null != s &&
                  s !== l &&
                  !0 === n &&
                  this.setState({ loaded: !1 }, () => this.preloadURL(s));
          }
          preloadURL(e) {
            this.canceller && this.canceller(),
              (this.canceller = (0, i.loadImage)(e, t => {
                this.canceller && (this.canceller = null),
                  !t &&
                    (this.cachedURLs.push(e),
                    this.setState({ cached: e, loaded: !0 }));
                let { onBackgroundImageLoad: l } = this.props;
                l && l(t, e);
              }));
          }
          componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
          }
          render() {
            let { style: t, onBackgroundImageLoad: l, ...r } = this.props,
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
            return (0, n.jsx)(e, { style: t, ...r });
          }
          constructor(e) {
            super(e), (this.cachedURLs = []), (this.canceller = null);
            let { style: t } = e,
              l = null != t ? u(t.backgroundImage) : null;
            (this.cachedURLs = [l]), (this.state = { cached: l, loaded: !0 });
          }
        }
        return a(t, e), t;
      }
    },
    297267: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          openCreateGuildModal: function () {
            return I;
          },
          updateCreateGuildModal: function () {
            return p;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("77078"),
        s = l("42963"),
        a = l("599110"),
        i = l("169626"),
        o = l("243338"),
        u = l("49111"),
        c = l("149806");
      function d(e, t, l, r) {
        return (0, n.jsx)(i.default, {
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
            })(e, l),
          initialSlide: t,
          hasJoinButton: !0,
          ...e,
        });
      }
      let I = e => {
          let { initialSlide: t, location: l, onSuccess: n } = e;
          (0, r.openModal)(e => d(e, t, l, n), {
            modalKey: o.CREATE_GUILD_MODAL_KEY,
          });
        },
        p = e => {
          let { slide: t, location: l } = e;
          (0, r.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => d(e, t, l));
        };
    },
    169626: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        }),
        l("222007");
      var n = l("37983"),
        r = l("884691"),
        s = l("627445"),
        a = l.n(s),
        i = l("759843"),
        o = l("77078"),
        u = l("84339"),
        c = l("599110"),
        d = l("818351"),
        I = l("21214"),
        p = l("622210"),
        _ = l("72405"),
        E = l("110337"),
        f = l("243338"),
        S = l("49111"),
        T = l("784505");
      function C(e) {
        let {
            transitionState: t,
            initialSlide: l = f.CreateGuildSlideTypes.GUILD_TEMPLATES,
            onSuccess: s,
            onClose: C,
            onSlideChange: N,
            hasJoinButton: A,
          } = e,
          [L, m] = r.useState(l),
          h = (0, u.default)(L),
          [g, D] = r.useState(null),
          [R, G] = r.useState(null),
          [U, O] = r.useState(null),
          [M, v] = r.useState(!1);
        r.useEffect(() => {
          m(l);
        }, [m, l]),
          r.useEffect(() => {
            L !== h && N(L);
          }, [N, L, h]);
        let y = r.useCallback(e => {
            m(f.CreateGuildSlideTypes.CREATION_INTENT),
              G(e),
              c.default.track(S.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code,
              });
          }, []),
          x = r.useCallback(e => {
            v(e), m(f.CreateGuildSlideTypes.CUSTOMIZE_GUILD);
          }, []),
          w = r.useCallback(() => m(f.CreateGuildSlideTypes.JOIN_GUILD), [m]),
          P = r.useCallback(() => {
            if (L === f.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
              m(f.CreateGuildSlideTypes.CREATION_INTENT);
              return;
            }
            m(f.CreateGuildSlideTypes.GUILD_TEMPLATES), G(null);
          }, [L]),
          b = r.useCallback(
            e => {
              O(e), s(e);
            },
            [s, O]
          ),
          j = r.useCallback(() => {
            a(null != U, "handleSuccess called before onGuildCreated"), s(U);
          }, [s, U]),
          k = { impression_group: i.ImpressionGroups.GUILD_ADD_FLOW };
        return (0, n.jsx)("div", {
          children: (0, n.jsx)(o.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, n.jsx)("div", {
              className: T.container,
              children: (0, n.jsxs)(o.Slides, {
                activeSlide: L,
                width: 440,
                onSlideReady: e => D(e),
                children: [
                  (0, n.jsx)(o.Slide, {
                    id: f.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: k,
                    children: (0, n.jsx)(_.default, {
                      isNewUser: !1,
                      onJoin: A ? w : void 0,
                      onChooseTemplate: y,
                      onClose: C,
                    }),
                  }),
                  (0, n.jsx)(o.Slide, {
                    id: f.CreateGuildSlideTypes.CREATION_INTENT,
                    impressionName:
                      i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: k,
                    children: (0, n.jsx)(I.default, {
                      onClose: C,
                      onBack: P,
                      onCreationIntentChosen: x,
                    }),
                  }),
                  (0, n.jsx)(o.Slide, {
                    id: f.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                    impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: k,
                    children: (0, n.jsx)(p.default, {
                      guildTemplate: R,
                      onGuildCreated: b,
                      onClose: C,
                      onBack: P,
                      isSlideReady:
                        g === f.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                      isCommunity: M,
                    }),
                  }),
                  (0, n.jsx)(o.Slide, {
                    id: f.CreateGuildSlideTypes.CHANNEL_PROMPT,
                    impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: k,
                    children: (0, n.jsx)(d.default, {
                      createdGuildId: U,
                      onClose: C,
                      onChannelPromptCompleted: j,
                      isSlideReady:
                        g === f.CreateGuildSlideTypes.CHANNEL_PROMPT,
                    }),
                  }),
                  (0, n.jsx)(o.Slide, {
                    id: f.CreateGuildSlideTypes.JOIN_GUILD,
                    impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: k,
                    children: (0, n.jsx)(E.default, {
                      onBack: P,
                      onClose: C,
                      isSlideReady: g === f.CreateGuildSlideTypes.JOIN_GUILD,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    243338: function (e, t, l) {
      "use strict";
      var n, r;
      l.r(t),
        l.d(t, {
          CreateGuildSlideTypes: function () {
            return n;
          },
          CREATE_GUILD_MODAL_KEY: function () {
            return s;
          },
        }),
        ((r = n || (n = {})).GUILD_TEMPLATES = "guild-templates"),
        (r.CUSTOMIZE_GUILD = "customize-guild"),
        (r.CHANNEL_PROMPT = "channel-prompt"),
        (r.JOIN_GUILD = "join-guild"),
        (r.CREATION_INTENT = "creation-intent");
      let s = "create-guild";
    },
    110337: function (e, t, l) {
      "use strict";
      let n, r;
      l.r(t),
        l.d(t, {
          default: function () {
            return D;
          },
        }),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        i = l("414456"),
        o = l.n(i),
        u = l("77078"),
        c = l("970728"),
        d = l("448993"),
        I = l("393414"),
        p = l("145131"),
        _ = l("476765"),
        E = l("883029"),
        f = l("49111"),
        S = l("782340"),
        T = l("274039"),
        C = l("529861"),
        N = l("156465");
      let A = "hTKzmak",
        L = (0, _.uid)();
      let m =
          ((n = window.GLOBAL_ENV.INVITE_HOST),
          (r = ""),
          null == n && ((n = location.host), (r = f.Routes.INVITE(""))),
          "".concat(location.protocol, "//").concat(n).concat(r, "/")),
        h = [A, "".concat(m).concat(A), "".concat(m).concat("cool-people")],
        g = e => {
          let { onClick: t } = e;
          return (0, s.jsxs)(u.Clickable, {
            className: T.rowContainer,
            onClick: () => {
              t(), (0, I.transitionTo)(f.Routes.GUILD_DISCOVERY);
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
                    children: S.default.Messages.DISCOVERY_UPSELL_HEADER,
                  }),
                  (0, s.jsx)(u.Text, {
                    className: T.rowText,
                    variant: "text-xs/normal",
                    children: S.default.Messages.DISCOVERY_UPSELL_DESCRIPTION,
                  }),
                ],
              }),
              (0, s.jsx)("img", { className: T.rowArrow, alt: "", src: C }),
            ],
          });
        };
      function D(e) {
        let { onBack: t, onClose: l, isSlideReady: n } = e,
          [r, i] = a.useState(""),
          [I, _] = a.useState(!1),
          [f, C] = a.useState(null),
          N = a.useRef(null);
        a.useEffect(() => {
          var e;
          n && (null === (e = N.current) || void 0 === e || e.focus());
        }, [n]);
        let D = e => {
          e.preventDefault();
          let t = r.trim();
          if ("" === t) {
            C(S.default.Messages.INVALID_INVITE_LINK_ERROR);
            return;
          }
          C(null), _(!0);
          let n = t.split("/"),
            s = n[n.length - 1];
          c.default.resolveInvite(s, "Join Guild", { inputValue: t }).then(
            e => {
              let { invite: t } = e;
              if ((_(!1), null == t)) {
                C(S.default.Messages.INSTANT_INVITE_EXPIRED);
                return;
              }
              if (null != t.channel) {
                let e = c.default.getInviteContext("Join Guild", t);
                c.default
                  .acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                      l(), c.default.transitionToInvite(e);
                    },
                  })
                  .then(
                    () => {},
                    e => {
                      if (
                        e instanceof d.V6OrEarlierAPIError ||
                        e instanceof d.APIError
                      ) {
                        let t = (0, E.getInviteError)(e.code);
                        C(t);
                      } else C(S.default.Messages.INVITE_MODAL_ERROR_DEFAULT);
                    }
                  );
              }
            },
            e => {
              _(!1);
              let t = new d.V6OrEarlierAPIError(e),
                l = (0, E.getInviteError)(t.code);
              C(l);
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
                  children: S.default.Messages.JOIN_SERVER_TITLE,
                }),
                (0, s.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: S.default.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                }),
                (0, s.jsx)(u.ModalCloseButton, {
                  className: T.closeButton,
                  onClick: l,
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
                        id: L,
                        error: f,
                        className: o(T.formTitle, { [T.error]: null != f }),
                        required: !0,
                        children: S.default.Messages.FORM_LABEL_INVITE_LINK,
                      }),
                      (0, s.jsx)(u.TextInput, {
                        value: r,
                        onChange: i,
                        className: T.input,
                        inputClassName: T.inputInner,
                        placeholder: "".concat(m).concat(A),
                        inputRef: N,
                        required: !0,
                        "aria-labelledby": L,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(u.FormItem, {
                  title: S.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
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
                (0, s.jsx)(g, { onClick: l }),
              ],
            }),
            (0, s.jsxs)(u.ModalFooter, {
              className: T.footer,
              children: [
                (0, s.jsx)(u.Button, {
                  color: u.Button.Colors.BRAND,
                  submitting: I,
                  onClick: D,
                  children: S.default.Messages.NUF_JOIN_SERVER_BUTTON,
                }),
                (0, s.jsx)(u.Button, {
                  color: u.Button.Colors.PRIMARY,
                  look: u.Button.Looks.LINK,
                  size: u.Button.Sizes.MIN,
                  onClick: t,
                  children: S.default.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    740822: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("449918"),
        s = l("956089"),
        a = l("49111"),
        i = l("782340");
      function o(e) {
        let {
          className: t,
          color: l = (0, r.getColor)(a.Color.BRAND_500),
          ...o
        } = e;
        return (0, n.jsx)(s.TextBadge, {
          ...o,
          text: i.default.Messages.ALPHA,
          color: l,
          className: t,
        });
      }
    },
    149806: function (e, t, l) {
      "use strict";
      var n, r, s, a, i, o, u, c, d, I;
      l.r(t),
        l.d(t, {
          FlowType: function () {
            return n;
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
        ((o = n || (n = {})).UNKNOWN = "unknown"),
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
    42963: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("308503"),
        r = l("95410"),
        s = l("605250"),
        a = l("599110"),
        i = l("149806"),
        o = l("49111");
      let u = "UserFlowAnalyticsStore_current",
        c = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === i.FlowType.UNKNOWN) return null;
        let t = r.default.get("".concat(c, "-").concat(e));
        if (null == t) return null;
        let { version: l, ...n } = t;
        return 1 !== l ? null : n;
      }
      new s.default("UserFlowAnalytics");
      let I = (0, n.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let l =
            null !== (e = t().currentFlow) && void 0 !== e
              ? e
              : r.default.get(u);
          if (null == l) return null;
          let { [l]: n } = t().flows,
            s = null != n ? n : d(l);
          return (null == s ? void 0 : s.currentStep) != null ? l : null;
        },
      }));
      function p(e, t) {
        let { [e]: l, ...n } = I.getState().flows,
          r = null != l ? l : d(e);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
          I.setState({
            flows: {
              ...n,
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
      function _(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = e;
        if (e === i.FlowType.ANY) {
          var r;
          n =
            null !== (r = I.getState().activeFlow()) && void 0 !== r
              ? r
              : i.FlowType.UNKNOWN;
        }
        let { [n]: s, ...a } = I.getState().flows,
          o = null != s ? s : d(n);
        if (null != o && null != o.currentStep)
          o.currentStep !== t &&
            I.setState({
              flows: {
                ...a,
                [n]: {
                  ...o,
                  lastStep: o.currentStep,
                  lastTimestamp: o.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: l,
                },
              },
              currentFlow: n,
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
                ? (r.default.remove(t), r.default.remove(u))
                : (r.default.set("".concat(c, "-").concat(e.type), {
                    ...e,
                    version: 1,
                  }),
                  r.default.set(u, e.type));
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
      function E() {
        return null != I.getState().activeFlow();
      }
      var f = {
        flowStart: p,
        flowStepOrStart: function (e, t) {
          E() ? _(e, t) : p(e, t);
        },
        flowStep: _,
        hasActiveFlow: E,
      };
    },
    931138: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l("37983"),
        r = l("884691"),
        s = l("414456"),
        a = l.n(s),
        i = l("77078"),
        o = l("760607"),
        u = l("684133");
      function c(e) {
        let {
            children: t,
            size: l = 16,
            className: s,
            flowerStarClassName: c,
            ...d
          } = e,
          I = r.Children.only(t),
          p = (0, i.useRedesignIconContext)().enabled;
        return (0, n.jsxs)("div", {
          className: a(u.flowerStarContainer, s),
          style: { width: l, height: l },
          children: [
            (0, n.jsx)(o.default, { ...d, className: a(c, u.flowerStar) }),
            (0, n.jsx)("div", {
              className: a(u.childContainer, {
                [u.redesignIconChildContainer]: p,
              }),
              children: I,
            }),
          ],
        });
      }
    },
    476263: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var n = l("37983"),
        r = l("884691"),
        s = l("414456"),
        a = l.n(s),
        i = l("90915"),
        o = l("446674"),
        u = l("669491"),
        c = l("77078"),
        d = l("80300"),
        I = l("471671"),
        p = l("103603"),
        _ = l("474293"),
        E = l("580357"),
        f = l("356659");
      let S = {
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
          [S.SMOL]: 16,
          [S.MINI]: 20,
          [S.SMALLER]: 24,
          [S.SMALL]: 30,
          [S.MEDIUM]: 40,
          [S.LARGE]: 50,
          [S.LARGER]: 64,
          [S.XLARGE]: 100,
        },
        C = {
          [S.SMOL]: [10, 10, 8, 6, 6, 4],
          [S.MINI]: [12, 12, 10, 10, 8, 6, 4],
          [S.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
          [S.SMALL]: [14, 14, 12, 12, 10, 8, 6],
          [S.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
          [S.LARGE]: [18, 18, 16, 16, 14, 12, 10],
          [S.LARGER]: [19, 19, 17, 17, 15, 13, 11],
          [S.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
        };
      class N extends r.PureComponent {
        renderAcronym() {
          let { guild: e, iconSrc: t } = this.props;
          return null != e.icon || null != t
            ? null
            : (0, n.jsx)("div", { className: f.acronym, children: e.acronym });
        }
        renderBadge() {
          let { showBadge: e, guild: t, badgeStrokeColor: l } = this.props;
          return e && null != t.hasFeature
            ? (0, n.jsx)(E.default, {
                className: f.guildIconBadge,
                guild: t,
                badgeStrokeColor: l,
              })
            : null;
        }
        renderIcon() {
          var e, t;
          let {
              guild: l,
              className: r,
              showBadge: s,
              active: i,
              size: o,
              style: u = {},
              textScale: d,
              showTooltip: I,
              tooltipPosition: p,
              onClick: E,
              to: S,
              badgeStrokeColor: T,
              animate: N,
              tabIndex: A,
              iconSrc: L,
              "aria-hidden": m,
              ...h
            } = this.props,
            g = C[o],
            D = null != E ? c.Clickable : "div";
          return (0, n.jsxs)(D, {
            className: a(f.icon, r, (0, _.getClass)(f, "iconSize", o), {
              [null !== (e = (0, _.getClass)(f, "iconActive", o)) &&
              void 0 !== e
                ? e
                : ""]: i,
              [f.iconInactive]: !i,
              [f.noIcon]: null == l.icon,
            }),
            "aria-hidden": m,
            style:
              null == l.icon
                ? {
                    fontSize:
                      (null !== (t = g[l.acronym.length]) && void 0 !== t
                        ? t
                        : g[g.length - 1]) * d,
                    ...u,
                  }
                : u,
            onClick: null != S || null == E ? void 0 : E,
            tabIndex: A,
            ...h,
            children: [this.renderAcronym(), this.renderBadge()],
          });
        }
        renderTooltip() {
          let { guild: e, showTooltip: t, tooltipPosition: l } = this.props;
          return t
            ? (0, n.jsx)(c.Tooltip, {
                text: e.name,
                position: l,
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
            source: l,
            tabIndex: r,
            "aria-hidden": s,
          } = this.props;
          return null != e
            ? (0, n.jsx)(i.Link, {
                "aria-hidden": s,
                to: {
                  pathname: e,
                  state: null != l ? { analyticsSource: l } : null,
                },
                "aria-label": t.toString(),
                tabIndex: r,
                children: this.renderTooltip(),
              })
            : this.renderTooltip();
        }
      }
      let A = o.default.connectStores([I.default], e => {
        let { guild: t, animate: l, iconSrc: n, style: r, size: s } = e;
        return {
          style: {
            ...r,
            backgroundImage: (0, p.makeCssUrlString)(
              null != n ? n : t.getIconURL(T[s], l && I.default.isFocused())
            ),
          },
        };
      })((0, d.backgroundImagePreloader)(e => (0, n.jsx)(N, { ...e })));
      class L extends r.PureComponent {
        render() {
          return (0, n.jsx)(A, { ...this.props });
        }
      }
      (L.Sizes = S),
        (L.defaultProps = {
          size: S.LARGE,
          textScale: 1,
          showBadge: !1,
          showTooltip: !1,
          active: !1,
          tooltipPosition: "top",
          badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
          animate: !1,
        });
      var m = L;
    },
    476765: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
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
      var n = l("995008"),
        r = l.n(n),
        s = l("775560");
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
    760607: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("75196"),
        s = function (e) {
          let {
            width: t = 16,
            height: l = 16,
            color: s = "currentColor",
            foreground: a,
            ...i
          } = e;
          return (0, n.jsx)("svg", {
            ...(0, r.default)(i),
            width: t,
            height: l,
            viewBox: "0 0 16 15.2",
            children: (0, n.jsx)("path", {
              className: a,
              fill: s,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    883029: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getDescriptiveInviteError: function () {
            return o;
          },
          getInviteError: function () {
            return u;
          },
        });
      var n = l("697218"),
        r = l("701909"),
        s = l("719923"),
        a = l("49111"),
        i = l("782340");
      function o(e) {
        switch (e) {
          case a.AbortCodes.TOO_MANY_USER_GUILDS:
            let t = n.default.getCurrentUser(),
              l =
                s.default.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff()),
              r = l ? a.MAX_USER_GUILDS_PREMIUM : a.MAX_USER_GUILDS;
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
    474293: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getClass: function () {
            return r;
          },
        }),
        l("808653");
      var n = l("159885");
      function r(e, t) {
        for (
          var l = arguments.length, r = Array(l > 2 ? l - 2 : 0), s = 2;
          s < l;
          s++
        )
          r[s - 2] = arguments[s];
        let a = r.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
          i = "".concat(t).concat(a),
          o = e[i];
        if (null != o) return o;
      }
    },
  },
]);
//# sourceMappingURL=fe2f8ff0ee8115591f0a.js.map
