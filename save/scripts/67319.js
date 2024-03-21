(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67319"],
  {
    310013: function (e, t, n) {
      "use strict";
      var s = {
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
        a = "function" == typeof Object.getOwnPropertySymbols;
      e.exports = function (e, t, n) {
        if ("string" != typeof t) {
          var l = Object.getOwnPropertyNames(t);
          a && (l = l.concat(Object.getOwnPropertySymbols(t)));
          for (var i = 0; i < l.length; ++i)
            if (!s[l[i]] && !r[l[i]] && (!n || !n[l[i]]))
              try {
                e[l[i]] = t[l[i]];
              } catch (e) {}
        }
        return e;
      };
    },
    144824: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4cbb7212cd1c94d49cdf.svg";
    },
    686570: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4cbb7212cd1c94d49cdf.svg";
    },
    669200: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a426a3ae492eb54ac0f0.svg";
    },
    479125: function (e, t, n) {
      "use strict";
      e.exports = n.p + "2d8dac1dbbc8278bfa86.svg";
    },
    945439: function (e, t, n) {
      "use strict";
      e.exports = n.p + "60e64ec1e28c734051d0.svg";
    },
    465312: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e5fb2c858f851f61c32e.svg";
    },
    405932: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("225389"),
        a = n("77078"),
        l = n("352969"),
        i = function (e) {
          let { message: t } = e;
          return (0, s.jsxs)("div", {
            className: l.container,
            children: [
              (0, s.jsx)(r.CircleInformationIcon, {
                className: l.icon,
                width: 20,
                height: 20,
                color: a.tokens.colors.TEXT_WARNING,
              }),
              (0, s.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-muted",
                children: t,
              }),
            ],
          });
        };
    },
    225389: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("331008");
      n.es(s, t);
    },
    763377: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("93510");
      n.es(s, t);
    },
    202909: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("804830");
      n.es(s, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("632874");
      n.es(s, t);
    },
    903016: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("808653"),
        n("424973"),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("446674"),
        o = n("266491"),
        u = n("77078"),
        d = n("345116"),
        c = n("521012"),
        f = n("145131"),
        m = n("965397"),
        E = n("423487"),
        p = n("299039"),
        I = n("782340"),
        _ = n("763247");
      class h extends r.PureComponent {
        render() {
          let { onClose: e } = this.props;
          return (0, s.jsxs)(u.ModalHeader, {
            separator: !1,
            justify: f.default.Justify.BETWEEN,
            children: [
              (0, s.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: this.props.text,
              }),
              null != e ? (0, s.jsx)(u.ModalCloseButton, { onClick: e }) : null,
            ],
          });
        }
      }
      function S(e) {
        let { imageClass: t, children: n, error: r, onDismissError: a } = e;
        return (0, s.jsxs)("div", {
          className: _.content,
          children: [
            (0, s.jsx)("div", { className: l(_.image, t) }),
            n,
            (0, s.jsx)(o.TransitionGroup, {
              children:
                null != r
                  ? (0, s.jsx)(m.default, {
                      className: _.error,
                      children: (0, s.jsx)(u.FormErrorBlock, {
                        onDismiss: a,
                        children: r.message,
                      }),
                    })
                  : null,
            }),
          ],
        });
      }
      let C = e => {
        let { canceledCount: t } = e,
          n = (0, i.useStateFromStores)([c.default], () =>
            c.default.getPremiumTypeSubscription()
          );
        return null == n
          ? null
          : (0, s.jsxs)("div", {
              className: _.pendingCancellation,
              children: [
                (0, s.jsx)(E.default, { className: _.pendingCancellationIcon }),
                (0, s.jsx)(u.Text, {
                  variant: "text-md/normal",
                  className: _.pendingCancellationMessage,
                  children:
                    I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format(
                      { date: n.currentPeriodEnd, canceledCount: t }
                    ),
                }),
              ],
            });
      };
      function R(e) {
        let {
          imageClass: t,
          blurb: n,
          guild: r,
          warning: a,
          error: l,
          onDismissError: i,
          slotCount: o = 1,
          canceledCount: c = 0,
        } = e;
        return (0, s.jsxs)(S, {
          imageClass: t,
          error: l,
          onDismissError: i,
          children: [
            (0, s.jsx)(u.Text, { variant: "text-md/normal", children: n }),
            (0, s.jsx)(d.default, {
              className: _.guildCard,
              guild: r,
              subscriptionChange: o,
            }),
            (0, s.jsx)(u.Text, { variant: "text-md/normal", children: a }),
            c > 0 ? (0, s.jsx)(C, { canceledCount: c }) : null,
          ],
        });
      }
      class N extends r.PureComponent {
        render() {
          let {
            confirmation: e,
            confirmationLabel: t,
            isModifyingSubscription: n,
            onConfirm: r,
            onCancel: a,
          } = this.props;
          return (0, s.jsxs)(u.ModalFooter, {
            children: [
              (0, s.jsx)(u.Button, {
                onClick: r,
                submitting: n,
                "aria-label": t,
                children: e,
              }),
              (0, s.jsx)(u.Button, {
                look: u.Button.Looks.LINK,
                color: u.Button.Colors.PRIMARY,
                onClick: a,
                disabled: n,
                children: I.default.Messages.CANCEL,
              }),
            ],
          });
        }
      }
      class L extends r.PureComponent {
        render() {
          let {
            guild: e,
            header: t,
            blurb: n,
            warning: a,
            confirmation: l,
            confirmationLabel: i,
            imageClass: o,
            error: d,
            isModifyingSubscription: c,
            onConfirm: f,
            onCancel: m,
            onDismissError: E,
            canceledCount: p,
          } = this.props;
          return (0, s.jsxs)(r.Fragment, {
            children: [
              (0, s.jsx)(h, { text: t }),
              (0, s.jsx)(u.ModalContent, {
                children: (0, s.jsx)(R, {
                  guild: e,
                  blurb: n,
                  warning: a,
                  imageClass: o,
                  error: d,
                  onDismissError: E,
                  canceledCount: p,
                }),
              }),
              (0, s.jsx)(N, {
                confirmation: l,
                confirmationLabel: i,
                isModifyingSubscription: c,
                onConfirm: f,
                onCancel: m,
              }),
            ],
          });
        }
      }
      (L.Header = h),
        (L.ApplyBody = R),
        (L.TransferBody = function (e) {
          var t, n;
          let {
              imageClass: a,
              blurb: l,
              fromGuilds: i,
              toGuild: o,
              error: c,
              onDismissError: f,
              slotCount: m = 1,
              canceledCount: E = 0,
            } = e,
            h = r.useRef(i),
            R = null === (t = h.current) || void 0 === t ? void 0 : t.length,
            N =
              null === (n = h.current) || void 0 === n
                ? void 0
                : n.reduce(
                    (e, t) => (
                      !e.hasOwnProperty(t.id) && (e[t.id] = []),
                      e[t.id].push(t),
                      e
                    ),
                    {}
                  );
          return (0, s.jsxs)(S, {
            imageClass: a,
            error: c,
            onDismissError: f,
            children: [
              (0, s.jsx)(u.Text, { variant: "text-md/normal", children: l }),
              (0, s.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: _.transferGuildCardHeader,
                children:
                  I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format(
                    { guildCount: R }
                  ),
              }),
              null != N
                ? p.default
                    .keys(N)
                    .map(e =>
                      (0, s.jsx)(
                        d.default,
                        {
                          className: _.transferFromGuildCard,
                          guild: N[e][0],
                          subscriptionChange: -1 * N[e].length,
                        },
                        e
                      )
                    )
                : null,
              (0, s.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: _.transferGuildCardHeader,
                children:
                  I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format(
                    { slotCount: m }
                  ),
              }),
              (0, s.jsx)("div", {
                className: _.activeTransferGuildCardBorder,
                children: (0, s.jsx)(d.default, {
                  className: _.transferToGuildCard,
                  guild: o,
                  subscriptionChange: null != i ? i.length : 1,
                }),
              }),
              E > 0 ? (0, s.jsx)(C, { canceledCount: E }) : null,
            ],
          });
        }),
        (L.Footer = N);
      var g = L;
    },
    247760: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Steps: function () {
            return s;
          },
          default: function () {
            return g;
          },
        }),
        n("222007");
      var s,
        r,
        a = n("37983"),
        l = n("884691"),
        i = n("627445"),
        o = n.n(i),
        u = n("446674"),
        d = n("77078"),
        c = n("583367"),
        f = n("735201"),
        m = n("305961"),
        E = n("625634"),
        p = n("751433"),
        I = n("599110"),
        _ = n("427459"),
        h = n("903016"),
        S = n("936992"),
        C = n("658206"),
        R = n("49111"),
        N = n("782340"),
        L = n("545480");
      ((r = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT"),
        (r.GUILD_SELECT = "GUILD_SELECT"),
        (r.CONFIRM = "CONFIRM"),
        (r.SUCCESS = "SUCCESS");
      var g = e => {
        var t, n;
        let {
            guildBoostSlots: s,
            selectedGuild: r,
            locationSection: i,
            transitionState: g,
            onClose: T,
          } = e,
          x = (0, _.getAvailableGuildBoostSlots)(E.default.boostSlots);
        o(
          null != s || null != r,
          "Must either provide slots or an initial selected guild"
        ),
          o(
            !(null == s ? void 0 : s.some(e => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown"
          );
        let M = [
            null == s ? "UNUSED_QUANTITY_SELECT" : null,
            null == r ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
          ].filter(e => null != e),
          [v, U] = (0, u.useStateFromStoresArray)([f.default], () => [
            f.default.isModifyingAppliedBoost,
            f.default.applyBoostError,
          ]),
          [D, A] = l.useState(""),
          [P, O] = l.useState(M[0]),
          [y, B] = l.useState(!1),
          [j, G] = l.useState(r),
          [w, b] = l.useState(null != s ? s : x.slice(0, 1)),
          F = l.useMemo(
            () =>
              null == w
                ? []
                : w
                    .map(e => {
                      let { premiumGuildSubscription: t } = e;
                      return m.default.getGuild(null == t ? void 0 : t.guildId);
                    })
                    .filter(e => null != e),
            [w]
          ),
          H = l.useMemo(() => {
            var e;
            return (
              (null == w
                ? void 0
                : null === (e = w[0]) || void 0 === e
                  ? void 0
                  : e.premiumGuildSubscription) != null
            );
          }, [w]),
          V = () => {
            T("SUCCESS" === P),
              I.default.track(R.AnalyticEvents.MODAL_DISMISSED, {
                type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: i,
              });
          },
          k = {
            UNUSED_QUANTITY_SELECT: {
              body: () => (
                o(
                  !(null == s && 0 === x.length),
                  "Cannot provide no slots if there are no other available slots"
                ),
                (0, a.jsxs)("div", {
                  className: L.quantitySelectorBody,
                  children: [
                    (0, a.jsx)(d.Heading, {
                      variant: "heading-md/semibold",
                      className: L.quantitySelectorHeader,
                      children:
                        N.default.Messages
                          .PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER,
                    }),
                    (0, a.jsx)(d.Text, {
                      variant: "text-md/normal",
                      className: L.quantitySelectorDescription,
                      children:
                        N.default.Messages
                          .PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION,
                    }),
                    (0, a.jsxs)("div", {
                      className: L.quantitySelectorWrapper,
                      children: [
                        (0, a.jsx)(p.default, {
                          value: w.length,
                          onChange: e => b(x.slice(0, e)),
                          minValue: 1,
                          maxValue: x.length,
                        }),
                        (0, a.jsx)(d.Text, {
                          className: L.quantitySelectorLabel,
                          variant: "text-md/normal",
                          children:
                            N.default.Messages
                              .PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER,
                        }),
                      ],
                    }),
                  ],
                })
              ),
              footer: () =>
                (0, a.jsxs)(d.ModalFooter, {
                  children: [
                    (0, a.jsx)(d.Button, {
                      onClick: () => O("CONFIRM"),
                      children:
                        N.default.Messages
                          .PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT,
                    }),
                    (0, a.jsx)(d.Button, {
                      look: d.Button.Looks.LINK,
                      color: d.Button.Colors.PRIMARY,
                      onClick: V,
                      children:
                        N.default.Messages
                          .PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL,
                    }),
                  ],
                }),
            },
            GUILD_SELECT: {
              header: () =>
                (0, a.jsx)(S.GuildSelectModalHeader, {
                  isTransfer: H,
                  query: D,
                  setQuery: A,
                }),
              bodyClass: L.selectContent,
              body: () =>
                (0, a.jsx)(S.GuildSelectModalBody, {
                  onClose: V,
                  onSelectGuild: e => {
                    G(e), O("CONFIRM");
                  },
                  isTransfer: H,
                  selectedSlotGuilds: F,
                  query: D,
                }),
            },
            CONFIRM: {
              body() {
                if (null == j) return null;
                let e = w.filter(e =>
                    (0, _.isGuildBoostSlotCanceled)(e)
                  ).length,
                  t = w.length,
                  n = F.length;
                return H
                  ? (0, a.jsx)(h.default.TransferBody, {
                      fromGuilds: F,
                      toGuild: j,
                      blurb:
                        N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format(
                          { slotCount: t, guildCount: n }
                        ),
                      imageClass: L.transferConfirmImage,
                      error: y ? U : null,
                      onDismissError: () => B(!1),
                      slotCount: t,
                      canceledCount: e,
                    })
                  : (0, a.jsx)(h.default.ApplyBody, {
                      guild: j,
                      blurb:
                        N.default.Messages
                          .PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                      warning:
                        N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format(
                          {
                            days: R.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                            slotCount: t,
                          }
                        ),
                      imageClass: L.confirmImage,
                      error: y ? U : null,
                      onDismissError: () => B(!1),
                      slotCount: t,
                      canceledCount: e,
                    });
              },
              footer() {
                let e = w.length,
                  t = "CONFIRM" === M[0] ? V : () => O(M[M.indexOf(P) - 1]),
                  n = async () => {
                    if (null != j && (null == w ? void 0 : w.length) !== 0) {
                      o(
                        !w.some(e => e.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown"
                      );
                      try {
                        await Promise.all(
                          w.map(e => {
                            let { premiumGuildSubscription: t } = e;
                            return null != t
                              ? (0, c.unapplyFromGuild)(t.guildId, t.id)
                              : Promise.resolve();
                          })
                        ),
                          await (0, c.applyToGuild)(
                            j.id,
                            w.map(e => {
                              let { id: t } = e;
                              return t;
                            })
                          ),
                          O("SUCCESS");
                      } catch (e) {
                        B(!0);
                      }
                    }
                  };
                return (0, a.jsx)(h.default.Footer, {
                  confirmation: H
                    ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format(
                        { slotCount: e }
                      )
                    : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format(
                        { slotCount: e }
                      ),
                  confirmationLabel: H
                    ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format(
                        { slotCount: e }
                      )
                    : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format(
                        { slotCount: e }
                      ),
                  onConfirm: n,
                  onCancel: t,
                  isModifyingSubscription: v,
                });
              },
            },
            SUCCESS: {
              body: () =>
                (0, a.jsx)(C.GuildBoostingConfirmation, {
                  guild: j,
                  isTransfer: H,
                  guildBoostQuantity: w.length,
                  onClose: V,
                }),
            },
          };
        l.useEffect(() => {
          I.default.track(R.AnalyticEvents.OPEN_MODAL, {
            type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: i,
          });
        }, [i]);
        let Y = k[P];
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: g,
          className: L.modal,
          size: d.ModalSize.SMALL,
          children: [
            null === (t = Y.header) || void 0 === t ? void 0 : t.call(Y),
            (0, a.jsx)(d.ModalContent, {
              className: Y.bodyClass,
              children: (0, a.jsx)(d.Sequencer, {
                step: P,
                steps: M,
                children: Y.body(),
              }),
            }),
            null === (n = Y.footer) || void 0 === n ? void 0 : n.call(Y),
            (0, a.jsx)(d.ModalCloseButton, {
              className: L.modalCloseButton,
              onClick: V,
            }),
          ],
        });
      };
    },
    936992: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildSelectModalHeader: function () {
            return S;
          },
          GuildSelectModalBody: function () {
            return C;
          },
          default: function () {
            return R;
          },
        }),
        n("808653"),
        n("424973"),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("448105"),
        l = n.n(a),
        i = n("446674"),
        o = n("77078"),
        u = n("54239"),
        d = n("393414"),
        c = n("305961"),
        f = n("677099"),
        m = n("476263"),
        E = n("810567"),
        p = n("427459"),
        I = n("49111"),
        _ = n("782340"),
        h = n("198591");
      function S(e) {
        let { isTransfer: t = !1, setQuery: n, query: r } = e;
        return (0, s.jsxs)(o.ModalHeader, {
          className: h.selectHeaderContainer,
          children: [
            (0, s.jsx)(o.Heading, {
              className: h.selectHeader,
              variant: "heading-md/semibold",
              children: t
                ? _.default.Messages
                    .PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER
                : _.default.Messages
                    .PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER,
            }),
            (0, s.jsx)(E.default, {
              size: E.default.Sizes.MEDIUM,
              placeholder:
                _.default.Messages
                  .PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
              "aria-label":
                _.default.Messages
                  .PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
              className: h.selectSearch,
              query: r,
              onChange: n,
              onClear: () => n(""),
            }),
          ],
        });
      }
      function C(e) {
        let {
            isTransfer: t = !1,
            selectedSlotGuilds: n,
            onClose: r,
            onSelectGuild: a,
            query: E,
          } = e,
          S = (0, i.useStateFromStores)([f.default], () =>
            f.default.getFlattenedGuildIds()
          ),
          C = (0, i.useStateFromStoresArray)([c.default], () =>
            S.reduce((e, t) => {
              let s = c.default.getGuild(t);
              return null == s || (null != n && n.some(e => e.id === t))
                ? e
                : ((E.length <= 0 ||
                    l(
                      E.toLowerCase(),
                      null == s ? void 0 : s.name.toLowerCase()
                    )) &&
                    e.push(s),
                  e);
            }, [])
          );
        function R() {
          r(), (0, u.popLayer)(), (0, d.transitionTo)(I.Routes.GUILD_DISCOVERY);
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            0 === C.length &&
              (0, s.jsx)("div", {
                className: h.emptyStateWrapper,
                children: (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    0 === S.length
                      ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format(
                          {
                            publicGuildDirectoryHook: (e, t) =>
                              (0, s.jsx)(
                                o.Clickable,
                                { onClick: R, tag: "a", children: e },
                                t
                              ),
                          }
                        )
                      : _.default.Messages
                          .PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND,
                }),
              }),
            C.map(e =>
              (0, s.jsxs)(
                o.Clickable,
                {
                  className: h.selectGuild,
                  onClick: () => {
                    a(e);
                  },
                  children: [
                    (0, s.jsx)(m.default, {
                      className: h.selectGuildIcon,
                      guild: e,
                      size: m.default.Sizes.SMALL,
                    }),
                    (0, s.jsxs)("div", {
                      className: h.selectGuildCopy,
                      children: [
                        (0, s.jsx)(o.Text, {
                          className: h.selectGuildName,
                          variant: "text-md/normal",
                          children: e.name,
                        }),
                        (0, s.jsx)(o.Text, {
                          className: h.selectGuildLevel,
                          color: "text-muted",
                          variant: "text-xs/normal",
                          children: (0, p.getTierName)(e.premiumTier),
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.Text, {
                      className: h.selectGuildPseudoCta,
                      color: "always-white",
                      variant: "text-sm/medium",
                      children: t
                        ? _.default.Messages
                            .PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE
                        : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION,
                    }),
                  ],
                },
                e.id
              )
            ),
          ],
        });
      }
      function R(e) {
        let { onClose: t, onSelectGuild: n, transitionState: a } = e,
          [l, i] = r.useState("");
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: a,
          className: h.modal,
          size: o.ModalSize.SMALL,
          children: [
            (0, s.jsx)(S, { query: l, setQuery: i }),
            (0, s.jsx)(o.ModalContent, {
              className: h.modalContent,
              children: (0, s.jsx)(C, {
                onClose: t,
                onSelectGuild: n,
                query: l,
              }),
            }),
            (0, s.jsx)(o.ModalCloseButton, {
              className: h.modalCloseButton,
              onClick: t,
            }),
          ],
        });
      }
    },
    809071: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateSubscriptionInvoicePreview: function () {
            return p;
          },
          useOneTimePurchaseInvoicePreview: function () {
            return S;
          },
          useSubscriptionInvoicePreview: function () {
            return C;
          },
          useGetSubscriptionInvoice: function () {
            return R;
          },
          getItemUnitPriceWithDiscount: function () {
            return N;
          },
        }),
        n("222007");
      var s = n("884691"),
        r = n("627445"),
        a = n.n(r),
        l = n("446674"),
        i = n("872717"),
        o = n("448993"),
        u = n("195358"),
        d = n("521012"),
        c = n("719923"),
        f = n("271560"),
        m = n("49111");
      async function E(e) {
        let {
          items: t,
          paymentSourceId: n,
          trialId: s,
          code: r,
          applyEntitlements: a = !1,
          currency: l,
          renewal: d,
          metadata: f,
        } = e;
        t = (0, c.coerceExistingItemsToNewItemInterval)(t);
        let E = {
          items: t.map(e => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
          }),
          payment_source_id: n,
          trial_id: s,
          code: r,
          apply_entitlements: a,
          currency: l,
          renewal: d,
          metadata: f,
        };
        try {
          let e = await i.HTTP.post({
            url: m.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: E,
            oldFormErrors: !0,
          });
          return u.default.createInvoiceFromServer(e.body);
        } catch (e) {
          throw new o.BillingError(e);
        }
      }
      async function p(e) {
        let {
          subscriptionId: t,
          items: n,
          paymentSourceId: s,
          renewal: r,
          currency: a,
          applyEntitlements: l = !1,
          analyticsLocations: d,
          analyticsLocation: f,
          userDiscountOfferId: E,
        } = e;
        null != n && (n = (0, c.coerceExistingItemsToNewItemInterval)(n));
        let p = {
          items:
            null == n
              ? void 0
              : n.map(e => {
                  let { planId: t, ...n } = e;
                  return { ...n, plan_id: t };
                }),
          payment_source_id: s,
          renewal: r,
          apply_entitlements: l,
          currency: a,
          user_discount_offer_id: E,
        };
        try {
          let e = await i.HTTP.patch({
            url: m.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: { location: f, location_stack: d },
            body: p,
            oldFormErrors: !0,
          });
          return u.default.createInvoiceFromServer(e.body);
        } catch (e) {
          throw new o.BillingError(e);
        }
      }
      async function I(e) {
        let { paymentSourceId: t, skuId: n, subscriptionPlanId: s } = e;
        a(n, "SKU ID is missing for one time purchase gift invoice preview");
        try {
          let e = await (0, f.httpGetWithCountryCodeQuery)({
            url: m.Endpoints.STORE_SKU_PURCHASE(n),
            query: {
              gift: !0,
              payment_source_id: t,
              sku_subscription_plan_id: s,
            },
            oldFormErrors: !0,
          });
          return u.default.createInvoiceFromServer(e.body);
        } catch (e) {
          throw new o.BillingError(e);
        }
      }
      async function _(e) {
        let { subscriptionId: t, preventFetch: n } = e;
        if (n) return null;
        let s = await i.HTTP.get({
          url: m.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
          oldFormErrors: !0,
        });
        return u.default.createInvoiceFromServer(s.body);
      }
      function h(e, t) {
        let { preventFetch: n = !1 } = e,
          [r, a] = (0, s.useState)(null),
          [i, o] = (0, s.useState)(null),
          u = (0, l.useStateFromStores)([d.default], () =>
            d.default.getSubscriptions()
          );
        return (
          (0, s.useEffect)(() => {
            let e = !1;
            async function s() {
              try {
                o(null), a(null);
                let n = await t();
                !e && a(n);
              } catch (t) {
                !e && o(t);
              }
            }
            return (
              !n && s(),
              () => {
                e = !0;
              }
            );
          }, [n, t, u]),
          [r, i]
        );
      }
      function S(e) {
        let t = (0, s.useCallback)(() => I(e), [JSON.stringify(e)]);
        return h(e, t);
      }
      function C(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
          let { subscriptionId: t, ...n } = e;
          e = n;
        }
        let t = (0, s.useCallback)(
          () => ("subscriptionId" in e ? p(e) : "items" in e ? E(e) : null),
          [JSON.stringify(e)]
        );
        return h(e, t);
      }
      function R(e) {
        let t = (0, s.useCallback)(() => _(e), [JSON.stringify(e)]);
        return h(e, t);
      }
      function N(e) {
        let t = e.subscriptionPlanPrice;
        return (
          e.discounts.forEach(n => {
            let s = n.amount / e.quantity;
            t -= s;
          }),
          t
        );
      }
    },
    345116: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s,
        r = n("37983"),
        a = n("884691"),
        l = n("414456"),
        i = n.n(l),
        o = n("931138"),
        u = n("476263"),
        d = n("206453"),
        c = n("811151"),
        f = n("427459"),
        m = n("858466");
      class E extends a.PureComponent {
        render() {
          let { tier: e } = this.props;
          return (0, r.jsxs)("div", {
            className: m.tierPill,
            children: [
              (0, r.jsx)(o.default, {
                className: m.tierPillStar,
                children: (0, r.jsx)(d.default, {
                  tier: e,
                  className: m.tierPillGem,
                }),
              }),
              (0, f.getTierName)(e),
            ],
          });
        }
      }
      let p = e => {
        let { subscriptionChange: t, guild: n } = e;
        if (0 === t) return null;
        let s = Math.max(n.premiumSubscriberCount + t, 0),
          a = (0, f.getGuildTierFromAppliedBoostCount)(s, n.id),
          l =
            a -
            (0, f.getGuildTierFromAppliedBoostCount)(
              n.premiumSubscriberCount,
              n.id
            );
        return 0 === l
          ? null
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(c.default, {
                  className: l > 0 ? m.levelUpIcon : m.levelDownIcon,
                }),
                (0, r.jsx)(E, { tier: a }),
              ],
            });
      };
      s = class extends a.PureComponent {
        render() {
          let { guild: e, className: t, subscriptionChange: n } = this.props;
          return (0, r.jsxs)("div", {
            className: i(m.subscription, t),
            children: [
              (0, r.jsx)(u.default, { guild: e, size: u.default.Sizes.LARGE }),
              (0, r.jsxs)("div", {
                className: m.subscriptionInfo,
                children: [
                  (0, r.jsx)("div", {
                    className: m.guildName,
                    children: e.name,
                  }),
                  (0, r.jsxs)("div", {
                    className: m.tierInfo,
                    children: [
                      (0, r.jsx)(E, { tier: e.premiumTier }),
                      (0, r.jsx)(p, {
                        guild: e,
                        subscriptionChange: null != n ? n : 0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      };
    },
    824734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("153160"),
        i = n("646718"),
        o = n("782340"),
        u = n("513600");
      function d(e) {
        let {
            price: t,
            currency: n,
            intervalType: r,
            className: d,
            intervalCount: c = 1,
            isPrepaidPaymentSource: f = !1,
          } = e,
          m = (0, l.formatPrice)(t, n),
          E = null;
        return (
          r === i.SubscriptionIntervalTypes.YEAR
            ? (E = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                price: m,
              }))
            : r === i.SubscriptionIntervalTypes.MONTH && 1 === c
              ? (E = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                  price: m,
                }))
              : r === i.SubscriptionIntervalTypes.MONTH &&
                c > 1 &&
                (E =
                  o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format(
                    { price: m, intervalCount: c }
                  )),
          (0, s.jsx)("div", {
            className: a(u.pricePerInterval, d),
            "data-testid": "PricePerInterval-".concat(n),
            children:
              null == r || f ? (0, s.jsx)("strong", { children: m }) : E,
          })
        );
      }
    },
    623003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("4263");
      let o = r.forwardRef(function (e, t) {
        let { isActive: n, children: r } = e;
        return (0, s.jsx)("div", {
          className: l(i.wrapper, { [i.wrapperActive]: n }),
          ref: t,
          children: r,
        });
      });
      var u = o;
    },
    735201: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var s = n("446674"),
        r = n("913144");
      let a = {},
        l = null,
        i = [],
        o = !1,
        u = null,
        d = null;
      function c() {
        o = !0;
      }
      class f extends s.default.Store {
        getAppliedGuildBoostsForGuild(e) {
          return null != a[e] ? a[e].subscriptions : null;
        }
        getLastFetchedAtForGuild(e) {
          return null != a[e] ? a[e].lastFetchedAt : null;
        }
        getCurrentUserAppliedBoosts() {
          return i;
        }
        getAppliedGuildBoost(e) {
          return i.find(t => t.id === e);
        }
        get isModifyingAppliedBoost() {
          return o;
        }
        get applyBoostError() {
          return u;
        }
        get unapplyBoostError() {
          return d;
        }
        get cooldownEndsAt() {
          return l;
        }
      }
      f.displayName = "AppliedGuildBoostStore";
      var m = new f(r.default, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
          let { guildId: t, appliedBoosts: n } = e;
          a[t] = { subscriptions: n, lastFetchedAt: Date.now() };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
          let { appliedGuildBoosts: t } = e;
          i = t;
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
          let { endsAt: t } = e;
          l = t;
        },
        GUILD_UNAPPLY_BOOST_START: c,
        GUILD_APPLY_BOOST_START: c,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
          let { appliedGuildBoost: t } = e,
            n = new Set(t.map(e => e.id));
          (i = [...t, ...i.filter(e => !n.has(e.id))]), (u = null), (o = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
          let { error: t } = e;
          (o = !1), (u = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
          let { boostId: t } = e;
          (i = i.filter(e => e.id !== t)), (o = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
          let { error: t } = e;
          (o = !1), (d = t);
        },
      });
    },
    971427: function (e, t, n) {
      "use strict";
      let s;
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("424973");
      var r = n("446674"),
        a = n("913144");
      let l = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class i extends r.default.PersistedStore {
        initialize(e) {
          s = null != e ? e : l;
        }
        getState() {
          return s;
        }
        get hasAcceptedStoreTerms() {
          return s.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return s.hasAcceptedEulaIds.includes(e);
        }
      }
      (i.displayName = "ApplicationStoreUserSettingsStore"),
        (i.persistKey = "ApplicationStoreUserSettingsStore"),
        (i.migrations = [
          e =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]);
      var o = new i(a.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          s.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
          let { eulaId: t } = e;
          if (s.hasAcceptedEulaIds.includes(t)) return !1;
          s.hasAcceptedEulaIds.push(t);
        },
      });
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("77078"),
        o = n("760607"),
        u = n("684133");
      function d(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: d,
            ...c
          } = e,
          f = r.Children.only(t),
          m = (0, i.useRedesignIconContext)().enabled;
        return (0, s.jsxs)("div", {
          className: l(u.flowerStarContainer, a),
          style: { width: n, height: n },
          children: [
            (0, s.jsx)(o.default, { ...c, className: l(d, u.flowerStar) }),
            (0, s.jsx)("div", {
              className: l(u.childContainer, {
                [u.redesignIconChildContainer]: m,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    791106: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Gradients: function () {
            return i;
          },
          GradientCssUrls: function () {
            return o;
          },
          default: function () {
            return p;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("748820"),
        l = n("669491");
      let i = Object.freeze({
          PREMIUM_TIER_0: (0, a.v4)(),
          PREMIUM_TIER_1: (0, a.v4)(),
          PREMIUM_TIER_2: (0, a.v4)(),
          PREMIUM_GUILD: (0, a.v4)(),
          PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.v4)(),
        }),
        o = {
          PREMIUM_TIER_0: "url(#".concat(i.PREMIUM_TIER_0, ")"),
          PREMIUM_TIER_1: "url(#".concat(i.PREMIUM_TIER_1, ")"),
          PREMIUM_TIER_2: "url(#".concat(i.PREMIUM_TIER_2, ")"),
          PREMIUM_GUILD: "url(#".concat(i.PREMIUM_GUILD, ")"),
          PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(
            i.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            ")"
          ),
        },
        u = () =>
          (0, s.jsxs)("linearGradient", {
            id: i.PREMIUM_TIER_0,
            children: [
              (0, s.jsx)("stop", {
                offset: ".1762",
                stopColor:
                  l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS
                    .css,
              }),
              (0, s.jsx)("stop", {
                offset: "0.5351",
                stopColor:
                  l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2
                    .css,
              }),
              (0, s.jsx)("stop", {
                offset: "1",
                stopColor:
                  l.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS
                    .css,
              }),
            ],
          }),
        d = () =>
          (0, s.jsxs)("linearGradient", {
            id: i.PREMIUM_TIER_1,
            children: [
              (0, s.jsx)("stop", {
                stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
              }),
              (0, s.jsx)("stop", {
                offset: "1",
                stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
              }),
            ],
          }),
        c = () =>
          (0, s.jsxs)("linearGradient", {
            id: i.PREMIUM_TIER_2,
            children: [
              (0, s.jsx)("stop", {
                stopColor:
                  l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                    .css,
              }),
              (0, s.jsx)("stop", {
                offset: "0.502368",
                stopColor:
                  l.default.unsafe_rawColors
                    .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
              }),
              (0, s.jsx)("stop", {
                offset: "1",
                stopColor:
                  l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS
                    .css,
              }),
            ],
          }),
        f = () =>
          (0, s.jsxs)("linearGradient", {
            id: i.PREMIUM_GUILD,
            children: [
              (0, s.jsx)("stop", {
                stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css,
              }),
              (0, s.jsx)("stop", {
                offset: "1",
                stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
              }),
            ],
          }),
        m = () =>
          (0, s.jsxs)("linearGradient", {
            id: i.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            gradientTransform: "rotate(45)",
            children: [
              (0, s.jsx)("stop", {
                offset: "0",
                stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
              }),
              (0, s.jsx)("stop", {
                offset: "1",
                stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
              }),
            ],
          }),
        E = r.memo(
          function () {
            return (0, s.jsxs)("svg", {
              viewBox: "0 0 1 1",
              style: {
                position: "absolute",
                pointerEvents: "none",
                top: -1,
                left: -1,
                width: 1,
                height: 1,
              },
              "aria-hidden": !0,
              children: [u(), d(), c(), f(), m()],
            });
          },
          () => !0
        );
      var p = E;
    },
    467831: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentAnimationTier0: function () {
            return C;
          },
          PremiumPaymentAnimationTier1: function () {
            return N;
          },
          PremiumPaymentAnimationTier2: function () {
            return x;
          },
          PremiumPaymentGuildAnimation: function () {
            return P;
          },
        }),
        n("222007");
      var s,
        r,
        a,
        l,
        i,
        o,
        u,
        d,
        c = n("37983"),
        f = n("884691"),
        m = n("414456"),
        E = n.n(m),
        p = n("146606"),
        I = n("458960"),
        _ = n("273108"),
        h = n("577567");
      ((i = s || (s = {})).NORMAL = "normal"),
        (i.SPEED_START = "speed_start"),
        (i.SPEED_LOOP = "speed_loop"),
        (i.FINISH = "finish"),
        (i.IDLE = "idle");
      let S = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class C extends f.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case C.Scenes.SPEED_START:
              return C.Scenes.SPEED_LOOP;
            case C.Scenes.FINISH:
              return C.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .el("133541")
            .then(n.t.bind(n, "133541", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: s,
            pause: r,
            pauseWhileUnfocused: a,
          } = this.props;
          return (0, c.jsx)(_.default, {
            className: E(h.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: S,
            onScenePlay: n,
            onSceneComplete: s,
            pauseWhileUnfocused: a,
            pause: r,
          });
        }
      }
      (C.Scenes = s),
        ((o = r || (r = {})).NORMAL = "normal"),
        (o.SPEED_START = "speed_start"),
        (o.SPEED_LOOP = "speed_loop"),
        (o.FINISH = "finish"),
        (o.IDLE = "idle");
      let R = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class N extends f.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case N.Scenes.SPEED_START:
              return N.Scenes.SPEED_LOOP;
            case N.Scenes.FINISH:
              return N.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .el("73902")
            .then(n.t.bind(n, "73902", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: s,
            pause: r,
            pauseWhileUnfocused: a,
          } = this.props;
          return (0, c.jsx)(_.default, {
            className: E(h.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: R,
            onScenePlay: n,
            onSceneComplete: s,
            pauseWhileUnfocused: a,
            pause: r,
          });
        }
      }
      (N.Scenes = r),
        ((u = a || (a = {})).IDLE_ENTRY = "idle_entry"),
        (u.IDLE_LOOP = "idle_loop"),
        (u.BOOST_START = "boost_start"),
        (u.BOOST_LOOP = "boost_loop"),
        (u.BOOST_END = "boost_end"),
        (u.VICTORY = "victory"),
        (u.ERROR = "error");
      let L = {
        idle_entry: { BEG: 0, END: 50 },
        idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
        boost_start: { BEG: 230, END: 275 },
        boost_loop: { BEG: 275, END: 290 },
        boost_end: { BEG: 386, END: 455 },
        victory: { BEG: 470, END: 525 },
        error: { BEG: 290, END: 375 },
      };
      class g extends f.PureComponent {
        getStyle(e) {
          let { animation: t } = this.props;
          return {
            transform: [
              {
                translateX: t.x.interpolate({
                  inputRange: [0, 1],
                  outputRange: e ? ["100%", "0%"] : ["0%", "-100%"],
                }),
              },
              {
                translateY: t.y.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["100%", "0%"],
                }),
              },
            ],
          };
        }
        render() {
          let { className: e } = this.props;
          return (0, c.jsxs)("div", {
            className: h.panningAnimation,
            children: [
              (0, c.jsx)(I.default.div, {
                className: e,
                style: this.getStyle(!1),
              }),
              (0, c.jsx)(I.default.div, {
                className: e,
                style: this.getStyle(!0),
              }),
            ],
          });
        }
      }
      let T = Object.freeze({
        IDLE_ENTRY: { toValue: 1, duration: 1500 },
        IDLE_LOOP: {
          toValue: 1,
          duration: 6e3,
          easing: I.default.Easing.linear,
        },
        BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
        ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
      });
      class x extends f.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case x.Scenes.IDLE_ENTRY:
              return x.Scenes.IDLE_LOOP;
            case x.Scenes.BOOST_START:
              return x.Scenes.BOOST_LOOP;
            case x.Scenes.BOOST_END:
              return x.Scenes.VICTORY;
            case x.Scenes.VICTORY:
              return x.Scenes.IDLE_ENTRY;
            case x.Scenes.ERROR:
              return x.Scenes.IDLE_LOOP;
            default:
              return e;
          }
        }
        componentWillUnmount() {
          this.didUnmount = !0;
        }
        importData() {
          return n
            .el("475800")
            .then(n.t.bind(n, "475800", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        animateEntry(e) {
          I.default
            .parallel([
              I.default.timing(this.foregroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration,
                delay: e.delay || 0,
              }),
              I.default.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: 1.2 * e.duration,
                delay: e.delay || 0,
              }),
            ])
            .start();
        }
        animateIdleEntry() {
          this.animateEntry(T.IDLE_ENTRY);
        }
        animateError() {
          this.animateEntry(T.ERROR);
        }
        animateIdleLoop() {
          this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
        }
        animateBoostStart() {
          I.default
            .parallel([
              I.default.timing(this.foregroundAnimation.y, {
                toValue: T.BOOST_START.toValue,
                duration: T.BOOST_START.duration,
                delay: T.BOOST_START.delay,
              }),
              I.default.timing(this.backgroundAnimation.y, {
                toValue: T.BOOST_START.toValue,
                duration: 1.2 * T.BOOST_START.duration,
                delay: T.BOOST_START.delay,
              }),
            ])
            .start();
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onSceneComplete: s,
          } = this.props;
          return (0, c.jsxs)("div", {
            className: E(h.tier2Animation, e),
            children: [
              n
                ? (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)("div", {
                      className: h.panningAnimation,
                      children: [
                        (0, c.jsx)("div", { className: h.tier2Background }),
                        (0, c.jsx)("div", { className: h.tier2Foreground }),
                      ],
                    }),
                  })
                : (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)(g, {
                        className: h.tier2Background,
                        animation: this.backgroundAnimation,
                      }),
                      (0, c.jsx)(g, {
                        className: h.tier2Foreground,
                        animation: this.foregroundAnimation,
                      }),
                    ],
                  }),
              (0, c.jsx)(_.default, {
                className: h.sequencedAnimation,
                importData: this.importData,
                nextScene: n ? "idle_loop" : t,
                sceneSegments: L,
                onScenePlay: this.handleScenePlay,
                onSceneComplete: s,
                pauseWhileUnfocused: !1,
                pause: n,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.backgroundAnimation = new I.default.ValueXY({ x: 0, y: 0 })),
            (this.foregroundAnimation = new I.default.ValueXY({ x: 0, y: 0 })),
            (this.didUnmount = !1),
            (this.animateIdleLoopBackground = () => {
              !this.didUnmount &&
                (this.backgroundAnimation.x.setValue(0),
                I.default
                  .timing(this.backgroundAnimation.x, {
                    toValue: T.IDLE_LOOP.toValue,
                    duration: 1.2 * T.IDLE_LOOP.duration,
                    easing: I.default.Easing.linear,
                  })
                  .start(this.animateIdleLoopBackground));
            }),
            (this.animateIdleLoopForeground = () => {
              !this.didUnmount &&
                (this.foregroundAnimation.x.setValue(0),
                I.default
                  .timing(this.foregroundAnimation.x, {
                    toValue: T.IDLE_LOOP.toValue,
                    duration: T.IDLE_LOOP.duration,
                    easing: T.IDLE_LOOP.easing,
                  })
                  .start(this.animateIdleLoopForeground));
            }),
            (this.handleScenePlay = e => {
              switch (e) {
                case "idle_entry":
                  this.animateIdleEntry(), this.animateIdleLoop();
                  break;
                case "error":
                  this.animateError();
                  break;
                case "boost_start":
                  this.animateBoostStart();
              }
              let { onScenePlay: t } = this.props;
              null != t && t(e);
            });
        }
      }
      (x.Scenes = a),
        ((d = l || (l = {})).ENTRY = "entry"),
        (d.IDLE = "idle"),
        (d.STARS = "stars"),
        (d.ERROR = "error"),
        (d.SUCCESS = "success");
      let M = {
          entry: { BEG: 0, END: 180 },
          idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          error: { BEG: 360, END: 540 },
          success: { BEG: 540, END: 778 },
        },
        v = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
        U = [
          { left: 29, top: 100, color: v.WHITE },
          { left: 245, top: 11, color: v.PINK },
          { left: 393, top: 22, color: v.WHITE },
          { left: 74, top: 30, color: v.PINK },
          { left: 188, top: 9, color: v.WHITE },
          { left: 379, top: 97, color: v.PINK },
        ],
        D = Object.freeze({
          SCALE_INITIAL: 0,
          SCALE_MIDDLE: 1,
          SCALE_END: 0,
          ROTATE_INITIAL: 0,
          ROTATE_MIDDLE: 180,
          ROTATE_END: 360,
          DELAY_MIN: 200,
          DELAY_MAX: 500,
          DELAY_STAGGER: 200,
          DURATION_MIDDLE: 400,
          DURATION_END: 250,
          SIZE_MIN: 7,
          SIZE_MAX: 15,
          EASING_MIDDLE: I.default.Easing.bezier(0.3, 0.01, 0, 0.99),
          EASING_END: I.default.Easing.bezier(0, -0.01, 0.99, 0),
        });
      function A(e) {
        let { animate: t } = e,
          [n, s] = f.useState(0),
          r = (0, p.useSprings)(
            U.length,
            U.map((e, r) => {
              let a =
                  r > 0
                    ? D.DELAY_STAGGER * r +
                      Math.random() * (D.DELAY_MAX - D.DELAY_MIN) +
                      D.DELAY_MIN
                    : 0,
                l = Math.random() * (D.SIZE_MAX - D.SIZE_MIN) + D.SIZE_MIN;
              return {
                from: {
                  scale: D.SCALE_INITIAL,
                  rotate: D.ROTATE_INITIAL,
                  top: e.top,
                  left: e.left,
                  width: l,
                  height: l,
                },
                to: async e => {
                  t
                    ? (await e({
                        scale: D.SCALE_MIDDLE,
                        rotate: D.ROTATE_MIDDLE,
                        delay: a,
                        config: {
                          duration: D.DURATION_MIDDLE,
                          easing: D.EASING_MIDDLE,
                        },
                      }),
                      await e({
                        scale: D.SCALE_END,
                        rotate: D.ROTATE_END,
                        config: {
                          duration: D.DURATION_END,
                          easing: D.EASING_END,
                        },
                      }),
                      await e({
                        scale: D.SCALE_INITIAL,
                        rotate: D.ROTATE_INITIAL,
                        immediate: !0,
                      }),
                      r === U.length - 1 && s(n + 1))
                    : await e({
                        scale: D.SCALE_INITIAL,
                        rotate: D.ROTATE_INITIAL,
                      });
                },
              };
            })
          );
        return (0, c.jsx)(c.Fragment, {
          children: r.map((e, t) => {
            let n = U[t];
            return (0, c.jsx)(
              p.animated.svg,
              {
                style: e,
                className: h.guildStar,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12.14 12.24",
                children: (0, c.jsx)("path", {
                  d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                  fill: n.color,
                }),
              },
              t
            );
          }),
        });
      }
      class P extends f.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case "entry":
            case "error":
            case "success":
              return "idle";
            default:
              return e;
          }
        }
        importData() {
          return n
            .el("438967")
            .then(n.t.bind(n, "438967", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onScenePlay: s,
            onSceneComplete: r,
            pauseWhileUnfocused: a,
          } = this.props;
          return (0, c.jsxs)("div", {
            className: E(h.guildWrapper, e),
            children: [
              (0, c.jsx)(_.default, {
                className: h.guildBackground,
                importData: this.importData,
                nextScene: n ? "idle" : t,
                sceneSegments: M,
                onScenePlay: s,
                onSceneComplete: r,
                pauseWhileUnfocused: a,
                pause: n,
              }),
              (0, c.jsx)(A, { animate: !n && "stars" === t }),
            ],
          });
        }
      }
      P.Scenes = l;
    },
    273108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("446674"),
        o = n("206230"),
        u = n("471671"),
        d = n("708721");
      class c extends r.PureComponent {
        async componentDidMount() {
          let {
              importData: e,
              nextScene: t,
              pauseWhileUnfocused: s,
              pause: r,
              isWindowFocused: a,
              useReducedMotion: l,
            } = this.props,
            [i, { default: o }] = await Promise.all([
              e(),
              n.el("865981").then(n.t.bind(n, "865981", 23)),
            ]);
          null != this.animationRef &&
            ((this.animation = o.loadAnimation({
              container: this.animationRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: i,
            })),
            this.animation.addEventListener(
              "loopComplete",
              this.handleLoopComplete
            ),
            this.animation.addEventListener("complete", this.handleComplete),
            this.playScene(t),
            ((s && !a) || r || l) && this.animation.pause());
        }
        componentWillUnmount() {
          (this.isUnmounted = !0),
            null != this.animation &&
              (this.animation.destroy(), (this.animation = void 0));
        }
        componentDidUpdate(e) {
          var t, n, s;
          let {
            nextScene: r,
            pauseWhileUnfocused: a,
            pause: l,
            isWindowFocused: i,
            useReducedMotion: o,
          } = this.props;
          r !== this.currentScene &&
            this.shouldForcePlayAfter() &&
            !l &&
            this.playScene(r),
            null != this.animation &&
              (a && !e.isWindowFocused && i && !o && !0 !== l
                ? this.animation.play()
                : (o || (a && e.isWindowFocused && !i)) &&
                  this.animation.pause()),
            !e.pause && l
              ? null === (t = this.animation) || void 0 === t || t.pause()
              : e.pause &&
                !l &&
                !o &&
                (null === (n = this.animation) || void 0 === n || n.play()),
            e.nextScene !== r &&
              l &&
              (this.playScene(r),
              null === (s = this.animation) || void 0 === s || s.pause());
        }
        shouldForcePlayAfter() {
          let { sceneSegments: e } = this.props,
            t = e[this.currentScene];
          return !0 === t.shouldForcePlayAfter;
        }
        playScene(e) {
          if (this.isUnmounted) return;
          let {
              onScenePlay: t,
              sceneSegments: n,
              useReducedMotion: s,
            } = this.props,
            r = n[e],
            a = n[this.currentScene];
          if (
            (null != this.animation &&
              (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) &&
              this.animation.playSegments([r.BEG, r.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            s)
          ) {
            var l;
            null === (l = this.animation) || void 0 === l || l.pause();
          }
        }
        render() {
          return (0, s.jsx)("div", {
            ref: this.handleSetRef,
            className: l(this.props.className, d.wrapper),
          });
        }
        constructor(...e) {
          super(...e),
            (this.animationRef = null),
            (this.currentScene = this.props.nextScene),
            (this.isUnmounted = !1),
            (this.handleLoopComplete = () => {
              let { onSceneComplete: e, nextScene: t } = this.props;
              null != e && e(this.currentScene), this.playScene(t);
            }),
            (this.handleComplete = () => {
              let { onSceneComplete: e } = this.props;
              null != e && e(this.currentScene);
            }),
            (this.handleSetRef = e => {
              this.animationRef = e;
              let { animationRef: t } = this.props;
              null != t && t(e);
            });
        }
      }
      c.defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
      var f = e => {
        let { componentRef: t, ...n } = e,
          r = (0, i.useStateFromStores)([u.default], () =>
            u.default.isFocused()
          ),
          a = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          );
        return (0, s.jsx)(c, {
          ...n,
          isWindowFocused: r,
          useReducedMotion: a,
          ref: t,
        });
      };
    },
    965397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("458960"),
        o = n("77078"),
        u = n("899284");
      let d = { friction: 7, tension: 60 };
      class c extends r.Component {
        componentWillAppear(e) {
          this.animateTo(1).start(e);
        }
        componentWillEnter(e) {
          this.animateTo(1).start(e);
        }
        componentWillLeave(e) {
          let { reducedMotion: t } = this.context;
          t.enabled
            ? this.animateTo(0).start(e)
            : i.default
                .stagger(250, [this.animateTo(1.3), this.animateTo(0)])
                .start(e);
        }
        animateTo(e) {
          return i.default.spring(this.animation, { ...d, toValue: e });
        }
        getAnimatedStyle() {
          let { reducedMotion: e } = this.context;
          return i.default.accelerate({
            opacity: this.animation,
            transform: e.enabled
              ? void 0
              : [
                  {
                    translateY: this.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["150%", "0%"],
                    }),
                  },
                ],
          });
        }
        render() {
          let { className: e, children: t } = this.props;
          return (0, s.jsx)(i.default.div, {
            className: l(e, u.slider),
            style: this.getAnimatedStyle(),
            children: t,
          });
        }
        constructor(...e) {
          super(...e), (this.animation = new i.default.Value(0));
        }
      }
      c.contextType = o.AccessibilityPreferencesContext;
      var f = c;
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("384737"),
        i = n("448052"),
        o = n("748802"),
        u = n("260792"),
        d = n("77078"),
        c = n("75196"),
        f = n("366842");
      let m = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        E = e => {
          let {
              direction: t = m.DOWN,
              width: n = 24,
              height: r = 24,
              color: E = "currentColor",
              transition: p = f.transition,
              className: I,
              foreground: _,
              expanded: h,
              ...S
            } = e,
            { enabled: C } = (0, d.useRedesignIconContext)(),
            R = t;
          if ((!0 === h ? (R = m.DOWN) : !1 === h && (R = m.RIGHT), C)) {
            let e = {
              [m.UP]: u.ChevronSmallUpIcon,
              [m.DOWN]: l.ChevronSmallDownIcon,
              [m.LEFT]: i.ChevronSmallLeftIcon,
              [m.RIGHT]: o.ChevronSmallRightIcon,
            }[R];
            return (0, s.jsx)(e, {
              ...S,
              className: I,
              width: n,
              height: r,
              color: E,
              colorClass: _,
            });
          }
          return (0, s.jsx)("svg", {
            className: a(I, p, R),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, c.default)(S),
            children: (0, s.jsx)("path", {
              className: _,
              fill: "none",
              stroke: E,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      E.Directions = m;
      var p = E;
    },
    811151: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("75196");
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = "currentColor",
          ...l
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, r.default)(l),
          width: t,
          height: n,
          viewBox: "0 0 16 16",
          children: [
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
              fill: a,
            }),
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
              fill: a,
            }),
          ],
        });
      }
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("75196"),
        a = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: l,
            ...i
          } = e;
          return (0, s.jsx)("svg", {
            ...(0, r.default)(i),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, s.jsx)("path", {
              className: l,
              fill: a,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    118503: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("75196");
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = "currentColor",
          foreground: l,
          ...i
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, r.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 8 12",
          children: [
            (0, s.jsx)("path", {
              d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
              fill: a,
              className: l,
            }),
            (0, s.jsx)("path", {
              d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
              fill: a,
              className: l,
            }),
          ],
        });
      }
    },
    834179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("763377"),
        l = n("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: a,
                fill: r,
                d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z",
              }),
            });
          },
          a.CircleQuestionIcon,
          void 0,
          { size: 24 }
        );
    },
    216422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("202909"),
        l = n("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              viewBox: a = "0 0 24 24",
              foreground: i,
              ...o
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: a,
              children: (0, s.jsx)("path", {
                className: i,
                fill: r,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          a.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("424823"),
        l = n("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                fill: r,
                className: a,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          a.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    331008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleInformationIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: i = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...d
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    93510: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleQuestionIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: i = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...d
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    804830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NitroWheelIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: i,
            }),
          ],
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5856deb41a8933a181aa.js.map
