(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67131"],
  {
    277064: function (e, t, i) {
      "use strict";
      e.exports = i.p + "b7cfbc1104ec3593f753.gif";
    },
    748301: function (e, t, i) {
      "use strict";
      e.exports = i.p + "45266c5a3e03cba8884e.svg";
    },
    281862: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("211162");
      i.es(a, t);
    },
    58533: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return E;
          },
        }),
        i("222007");
      var a = i("37983"),
        n = i("884691"),
        l = i("516555"),
        o = i("907002"),
        s = i("458960"),
        r = i("430568"),
        u = i("526887"),
        d = i("140708"),
        c = i("983782"),
        h = i("315102"),
        p = i("402671"),
        T = i("172858"),
        m = i("62688");
      let f = [];
      function E(e) {
        let { messageId: t, emoji: i, startPosition: E, targetPosition: R } = e,
          [I, g] = n.useState(0),
          [_, N] = n.useState(0),
          [C, v] = n.useState(null),
          { confettiCanvas: O } = n.useContext(u.ConfettiCannonContext),
          S = (0, l.useConfettiCannon)(O, C),
          j = n.useMemo(() => {
            let e =
              null == i.id
                ? p.default.getURL(i.name)
                : h.default.getEmojiURL({ id: i.id, animated: !1, size: 22 });
            return [{ src: e, colorize: !1 }];
          }, [i.name, i.id]),
          x = R.x - (R.width / 2) * 0.5,
          A = R.y - (R.height / 2) * 0.5,
          P = (0, o.useSpring)({
            from: { y: E.y },
            to: { y: A },
            config: {
              duration: 450,
              easing: s.default.Easing.in(s.default.Easing.exp),
            },
            onChange: e => {
              let { y: t } = e;
              N(t);
            },
          }),
          M = (0, o.useSpring)({
            from: { x: E.x, scale: 1, opacity: 1 },
            to: { x: x, scale: 0.5, opacity: 0.4 },
            config: {
              duration: 450,
              easing: s.default.Easing.in(s.default.Easing.ease),
            },
            onRest: () => {
              (0, d.clearReactionPickerAnimation)(t, i.name, i.id);
            },
            onChange: e => {
              let { x: t } = e;
              g(t);
            },
          });
        return (
          n.useEffect(() => {
            I > 0 &&
              _ > 0 &&
              S.createConfetti({
                ...T.COMMON_CONFETTI_BASE_CONFIG,
                position: { type: "static", value: { x: I, y: _ } },
              });
          }, [S, I, _]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.SpriteCanvas, {
                ref: v,
                sprites: j,
                colors: f,
                spriteWidth: T.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                spriteHeight: T.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              }),
              (0, a.jsx)(c.default, {
                children: (0, a.jsx)(o.animated.div, {
                  style: { ...P },
                  className: m.emojiContainer,
                  children: (0, a.jsx)(o.animated.div, {
                    style: { ...M, opacity: M.opacity },
                    children: (0, a.jsx)(r.default, {
                      className: m.emoji,
                      emojiId: i.id,
                      emojiName: i.name,
                      animated: i.animated,
                      size: "jumbo",
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    102873: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useEmojiColorPalette: function () {
            return r;
          },
        });
      var a = i("446674"),
        n = i("819855"),
        l = i("206230"),
        o = i("161778"),
        s = i("584375");
      let r = e => {
        let t = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.saturation
          ),
          i = (0, a.useStateFromStores)([o.default], () =>
            (0, n.isThemeDark)(o.default.theme)
          );
        return (0, s.buildEmojiColorPalette)(e, t, i);
      };
    },
    13066: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          LurkerModeUpsellPopoutTypes: function () {
            return a;
          },
          default: function () {
            return f;
          },
        }),
        i("222007");
      var a,
        n,
        l = i("37983"),
        o = i("884691"),
        s = i("446674"),
        r = i("77078"),
        u = i("851387"),
        d = i("476765"),
        c = i("449008"),
        h = i("267567"),
        p = i("49111"),
        T = i("782340"),
        m = i("194627");
      ((n = a || (a = {}))[(n.CHAT = 0)] = "CHAT"),
        (n[(n.REACTIONS = 1)] = "REACTIONS");
      var f = e => {
        let { type: t, guild: a, closePopout: n, ctaRef: f } = e,
          E = (0, d.useUID)(),
          [R, I] = o.useState(!1),
          g = (0, s.useStateFromStores)(
            [h.default],
            () => h.default.isLurking(a.id),
            [a.id]
          );
        o.useEffect(() => {
          R && !g && n();
        }, [R, g, n]);
        let _ = null,
          N = T.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
        switch (t) {
          case 0:
            _ = T.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
            break;
          case 1:
            _ = T.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
            break;
          default:
            return (0, c.assertNever)(t);
        }
        if (null == _) return null;
        let C = async () => {
          I(!0);
          try {
            await u.default.joinGuild(a.id, {
              source: p.JoinGuildSources.CHAT_INPUT_BLOCKER,
            }),
              n();
          } catch {
            I(!1);
          }
        };
        return (0, l.jsxs)(r.Dialog, {
          className: m.container,
          "aria-labelledby": E,
          children: [
            (0, l.jsx)("img", {
              alt: "",
              className: m.image,
              src: i("748301"),
            }),
            (0, l.jsxs)("div", {
              className: m.content,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: E,
                  children: _,
                }),
                (0, l.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: N,
                }),
                (0, l.jsxs)("div", {
                  className: m.buttonContainer,
                  children: [
                    (0, l.jsx)(r.Button, {
                      buttonRef: f,
                      onClick: C,
                      submitting: R,
                      children: T.default.Messages.LURKER_MODE_POPOUT_JOIN,
                    }),
                    (0, l.jsx)(r.Button, {
                      onClick: n,
                      look: r.Button.Looks.BLANK,
                      className: m.cancel,
                      children: T.default.Messages.LURKER_MODE_POPOUT_CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    583022: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var a = e => {
        let {
            channel: t,
            canChat: i,
            renderReactions: a,
            canAddNewReactions: n,
            isLurking: l,
            isGuest: o,
            communicationDisabled: s,
            isActiveChannelOrUnarchivableThread: r,
          } = e,
          u = t.isPrivate(),
          d = t.isSystemDM(),
          c = (i || u) && r;
        return {
          disableReactionReads: !a,
          disableReactionCreates: l || o || !c || !((!0 === n || u) && !d && r),
          disableReactionUpdates: l || o || !c || !0 === s,
        };
      };
    },
    331011: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getReactionTooltipText: function () {
            return h;
          },
        });
      var a = i("917351"),
        n = i.n(a),
        l = i("432173"),
        o = i("42203"),
        s = i("486996"),
        r = i("27618"),
        u = i("387111"),
        d = i("875978"),
        c = i("782340");
      function h(e, t) {
        var i;
        let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : d.ReactionTypes.NORMAL,
          h = arguments.length > 3 ? arguments[3] : void 0,
          p = s.default.getReactions(e.getChannelId(), e.id, t, 3, a),
          T = o.default.getChannel(e.getChannelId()),
          m = null == T || T.isPrivate() ? null : T.getGuildId(),
          f = e.getReaction(t),
          E = a === d.ReactionTypes.BURST,
          R = n(p)
            .reject(e => r.default.isBlocked(e.id))
            .take(3)
            .map(e => u.default.getName(m, null == T ? void 0 : T.id, e))
            .value();
        if (0 === R.length) return "";
        let I = {
            standard: {
              reactionTooltip1NInteractive:
                c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
              reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
              reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
              reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N,
            },
            burst: {
              reactionTooltip1NInteractive:
                c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
              reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
              reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
              reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N,
            },
          },
          g = E ? I.burst : I.standard,
          _ =
            null !==
              (i = E
                ? null == f
                  ? void 0
                  : f.burst_count
                : null == f
                  ? void 0
                  : f.count) && void 0 !== i
              ? i
              : 0,
          N = Math.max(0, _ - R.length),
          C = (0, l.getReactionEmojiName)(t);
        if (1 === R.length)
          return N > 0
            ? null != h
              ? g.reactionTooltip1NInteractive.format({
                  a: R[0],
                  n: N,
                  emojiName: C,
                  onClick: h,
                })
              : g.reactionTooltip1N.format({ a: R[0], n: N, emojiName: C })
            : g.reactionTooltip1.format({ a: R[0], emojiName: C });
        if (2 === R.length)
          return N > 0
            ? null != h
              ? g.reactionTooltip2NInteractive.format({
                  a: R[0],
                  b: R[1],
                  n: N,
                  emojiName: C,
                  onClick: h,
                })
              : g.reactionTooltip2N.format({
                  a: R[0],
                  b: R[1],
                  n: N,
                  emojiName: C,
                })
            : g.reactionTooltip2.format({ a: R[0], b: R[1], emojiName: C });
        if (3 === R.length)
          return N > 0
            ? null != h
              ? g.reactionTooltip3NInteractive.format({
                  a: R[0],
                  b: R[1],
                  c: R[2],
                  n: N,
                  emojiName: C,
                  onClick: h,
                })
              : g.reactionTooltip3N.format({
                  a: R[0],
                  b: R[1],
                  c: R[2],
                  n: N,
                  emojiName: C,
                })
            : g.reactionTooltip3.format({
                a: R[0],
                b: R[1],
                c: R[2],
                emojiName: C,
              });
        else
          return null != h
            ? g.reactionTooltipNInteractive.format({
                n: N,
                emojiName: C,
                onClick: h,
              })
            : g.reactionTooltipN.format({ n: N, emojiName: C });
      }
    },
    350134: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          REACTION_MIN_WIDTH_DIGITS: function () {
            return en;
          },
          showReactionsModal: function () {
            return el;
          },
          isMeReaction: function () {
            return eo;
          },
          Reaction: function () {
            return er;
          },
        }),
        i("222007");
      var a = i("37983"),
        n = i("884691"),
        l = i("414456"),
        o = i.n(l),
        s = i("748820"),
        r = i("458960"),
        u = i("509043"),
        d = i("446674"),
        c = i("862337"),
        h = i("130969"),
        p = i("77078"),
        T = i("430568"),
        m = i("57155"),
        f = i("206230"),
        E = i("716241"),
        R = i("58533"),
        I = i("385976"),
        g = i("858619"),
        _ = i("102873"),
        N = i("101263"),
        C = i("865453"),
        v = i("233322"),
        O = i("13066"),
        S = i("785621"),
        j = i("635956"),
        x = i("85589"),
        A = i("166257"),
        P = i("432173"),
        M = i("845579"),
        L = i("42203"),
        y = i("305961"),
        b = i("486996"),
        U = i("162771"),
        B = i("697218"),
        V = i("471671"),
        k = i("738107"),
        D = i("791106"),
        w = i("256170"),
        G = i("216422"),
        F = i("599110"),
        H = i("719923"),
        K = i("15935"),
        W = i("875978"),
        J = i("412745"),
        z = i("459698"),
        Z = i("933629"),
        Y = i("331011"),
        X = i("81924"),
        q = i("49111"),
        Q = i("646718"),
        $ = i("782340"),
        ee = i("325417"),
        et = i("159441"),
        ei = i("450076"),
        ea = i("363454");
      let en = 9;
      function el(e, t, i) {
        (0, p.openModal)(e =>
          (0, a.jsx)(m.default, { ...e, message: t, selectedReaction: i })
        );
      }
      function eo(e, t, i) {
        return (
          (i === W.ReactionTypes.BURST && t) ||
          (i === W.ReactionTypes.NORMAL && e)
        );
      }
      class es extends n.PureComponent {
        componentWillAppear(e) {
          this.animateIn(e);
        }
        componentWillEnter(e) {
          this.animateIn(e);
        }
        componentWillUnmount() {
          this.hideTooltip();
        }
        animateIn(e) {
          let { autoUnfurlReactionTooltip: t } = this.props;
          V.default.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              r.default
                .parallel([
                  r.default.timing(this.scale, {
                    toValue: 1,
                    duration: t ? 200 : 300,
                    easing: r.default.Easing.inOut(r.default.Easing.back()),
                  }),
                  r.default.timing(this.opacity, {
                    toValue: 1,
                    duration: t ? 200 : 300,
                  }),
                ])
                .start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
        }
        render() {
          let e, t;
          let {
              count: i,
              burst_count: n,
              colors: l,
              isBurstReaction: s,
              hideCount: d,
              emoji: c,
              readOnly: h,
              isLurking: m,
              isGuest: f,
              isPendingMember: E,
              className: I,
              useChatFontScaling: g,
              message: _,
              hideEmoji: N,
              animationStartPosition: C,
            } = this.props,
            {
              shouldShowTooltip: v,
              tooltipTextAria: O,
              reactionRef: j,
              tooltipPositionKey: x,
            } = this.state,
            A = g ? ei : et,
            M = { transform: [{ scale: this.scale }], opacity: this.opacity },
            L = s ? n : i;
          if (s && null != l) {
            var y;
            let { accentColor: i, backgroundColor: a, opacity: n } = l,
              o =
                null !== (y = (0, u.hex2rgb)(null != a ? a : "", n)) &&
                void 0 !== y
                  ? y
                  : "";
            this.isMe() && (M.borderColor = a),
              (M.background = o),
              (e = i),
              (t = i);
          }
          let b = null == j ? void 0 : j.getBoundingClientRect(),
            U = null != C && null != b,
            B = null == C;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(p.Popout, {
              shouldShow: v,
              "aria-label": null != O && O,
              renderPopout: this.renderTooltip,
              nudgeAlignIntoViewport: !0,
              position: "top",
              align: "center",
              positionKey: x,
              children: () =>
                (0, a.jsx)("div", {
                  onMouseEnter: this.handleEnter,
                  onMouseLeave: this.handleLeave,
                  ref: this.handleSetReactionRef,
                  children: (0, a.jsx)(r.default.div, {
                    className: o(A.reaction, I, {
                      [A.reactionMe]: this.isMe(),
                      [A.reactionReadOnly]: h && !m && !E && !f,
                      [A.shakeReaction]: N && null == C,
                    }),
                    style: M,
                    children: (0, a.jsx)(p.Popout, {
                      renderPopout: this.renderLurkerModeUpsellPopout,
                      position: "top",
                      children: i =>
                        (0, a.jsxs)(p.Clickable, {
                          ...i,
                          className: A.reactionInner,
                          onClick: this.handleClick,
                          "aria-disabled": h,
                          "aria-label": (0, P.getAccessibleEmojiDisplayName)(
                            this.isMe(),
                            L,
                            c,
                            s
                          ),
                          "aria-pressed": this.isMe(),
                          children: [
                            (0, a.jsx)("div", {
                              className: o({ [A.burstGlow]: s }),
                              style: { boxShadow: "0 0 16px ".concat(t) },
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                s
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        U &&
                                          (0, a.jsx)(R.default, {
                                            messageId: _.id,
                                            emoji: c,
                                            startPosition: C,
                                            targetPosition: b,
                                          }),
                                        B &&
                                          (0, a.jsx)(X.default, {
                                            count: n,
                                            emoji: c,
                                            channelId: _.getChannelId(),
                                            messageId: _.id,
                                            useChatFontScaling: g,
                                            color: t,
                                          }),
                                      ],
                                    })
                                  : null,
                                (0, a.jsx)(T.default, {
                                  className: o({ [A.hideEmoji]: N }),
                                  emojiId: c.id,
                                  emojiName: c.name,
                                  size: "reaction",
                                  animated: c.animated,
                                }),
                              ],
                            }),
                            d
                              ? null
                              : (0, a.jsx)(k.default, {
                                  className: A.reactionCount,
                                  value: L,
                                  color: e,
                                  digitWidth: en,
                                }),
                            (0, a.jsx)(S.default, { count: L, reactionRef: j }),
                          ],
                        }),
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.isReactionEventActive = !1),
            (this.isKeyboardNavigation = !1),
            (this.scale = new r.default.Value(1)),
            (this.opacity = new r.default.Value(1)),
            (this.timeout = new c.Timeout()),
            (this.hideTimeout = new c.Timeout()),
            (this.ctaRef = n.createRef()),
            (this.type = W.ReactionTypes.NORMAL),
            (this.colors = {
              backgroundColor: void 0,
              borderColor: void 0,
              textColor: void 0,
            }),
            (this.state = {
              shouldShowTooltip: !1,
              tooltipText: null,
              tooltipTextAria: null,
              reactionRef: null,
              tooltipPositionKey: void 0,
            }),
            (this.hasShownTooltip = !1),
            (this.nonce = (0, s.v4)()),
            (this.userCanBurstReact = () => this.props.userHasPremium),
            (this.handleClick = e => {
              e.stopPropagation();
              let {
                  message: t,
                  emoji: i,
                  readOnly: a,
                  isBurstReaction: n,
                  isPendingMember: l,
                  isLurking: o,
                  isGuest: s,
                  isForumToolbar: r,
                } = this.props,
                u = L.default.getChannel(t.getChannelId());
              if (o || s) {
                var d, c;
                null === (c = this.ctaRef) ||
                  void 0 === c ||
                  null === (d = c.current) ||
                  void 0 === d ||
                  d.focus();
                return;
              }
              let h = t.getChannelId(),
                p = r
                  ? A.ReactionLocations.FORUM_TOOLBAR
                  : A.ReactionLocations.MESSAGE;
              if (n && !this.userCanBurstReact()) {
                (0, x.openBurstReactionsUpsellModal)({
                  analytics: {
                    type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    page:
                      (null == u ? void 0 : u.getGuildId()) != null
                        ? q.AnalyticsPages.GUILD_CHANNEL
                        : q.AnalyticsPages.DM_CHANNEL,
                    section:
                      null != u ? (0, P.getBurstAnalyticsSection)(u) : void 0,
                    object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL,
                  },
                });
                return;
              }
              l
                ? this.handleShowVerificationGate()
                : !a &&
                  (this.isMe()
                    ? (0, A.removeReaction)(h, t.id, i, void 0, p, { burst: n })
                    : (0, A.addReaction)(h, t.id, i, p, { burst: n }));
            }),
            (this.handleEnter = e => {
              let {
                  emoji: t,
                  message: i,
                  type: a,
                  reduceMotion: n,
                  animateEmoji: l,
                  autoUnfurlReactionTooltip: o,
                } = this.props,
                s = a === W.ReactionTypes.BURST;
              s &&
                !this.isReactionEventActive &&
                !n &&
                l &&
                (0, A.playBurstReaction)({
                  channelId: i.getChannelId(),
                  messageId: i.id,
                  emoji: t,
                  key: K.BurstReactionEffectSource.HOVER,
                }),
                (this.isReactionEventActive = !0),
                (this.isKeyboardNavigation = "focus" === e.type),
                this.timeout.start(
                  s ? 750 : o ? 200 : 500,
                  this.showTooltip,
                  !1
                );
            }),
            (this.handleEnterTooltip = () => {
              (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            (this.handleShowTooltip = () => {
              this.hideTimeout.stop(),
                this.isReactionEventActive &&
                  (this.updateTooltipText(),
                  b.default.addChangeListener(this.updateTooltipText));
            }),
            (this.showTooltip = () => {
              this.handleShowTooltip(),
                this.isReactionEventActive && this.trackReactionTooltipViewed(),
                (this.hasShownTooltip = !0);
            }),
            (this.handleLeave = () => {
              (this.isReactionEventActive = !1),
                (this.isKeyboardNavigation = !1),
                this.timeout.stop(),
                b.default.removeChangeListener(this.updateTooltipText),
                this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            (this.hideTooltip = () => {
              this.setState({ shouldShowTooltip: !1 }),
                this.hasShownTooltip &&
                  F.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
                    nonce: this.nonce,
                  });
            }),
            (this.isMe = () => {
              let { me: e, me_burst: t, type: i } = this.props;
              return eo(e, t, i);
            }),
            (this.updateTooltipText = () => {
              let { message: e, emoji: t, type: i } = this.props,
                a = (0, Y.getReactionTooltipText)(e, t, i),
                n = this.isKeyboardNavigation
                  ? a
                  : (0, Y.getReactionTooltipText)(e, t, i, q.NOOP);
              this.setState({
                tooltipText: n,
                tooltipTextAria: a,
                shouldShowTooltip: null != n && "" !== n,
              });
            }),
            (this.renderLurkerModeUpsellPopout = e => {
              let { closePopout: t } = e,
                { message: i, isLurking: n } = this.props,
                l = L.default.getChannel(i.getChannelId()),
                o = y.default.getGuild(null == l ? void 0 : l.getGuildId());
              return n && null != o
                ? (0, a.jsx)(O.default, {
                    ctaRef: this.ctaRef,
                    type: O.LurkerModeUpsellPopoutTypes.REACTIONS,
                    guild: o,
                    closePopout: t,
                  })
                : (0, a.jsx)(a.Fragment, {});
            }),
            (this.renderEmojiDetails = () => {
              let e = this.props.emoji;
              return (
                null != e.id &&
                (0, a.jsx)(ed, {
                  emojiId: e.id,
                  refreshPositionKey: this.refreshTooltipPositionKey,
                  onClose: this.handleLeave,
                  nonce: this.nonce,
                })
              );
            }),
            (this.renderTooltip = () => {
              let {
                  emoji: e,
                  message: t,
                  type: i,
                  me_burst: n,
                  isBurstReaction: l = !1,
                } = this.props,
                { tooltipText: s } = this.state,
                r = i => {
                  let a = L.default.getChannel(t.getChannelId());
                  if (null == a) return;
                  this.handleLeave();
                  let n = l ? W.ReactionTypes.BURST : W.ReactionTypes.NORMAL;
                  el(a, t, { emoji: e, reactionType: n });
                },
                u = "string" == typeof s,
                d = u ? "" === s.trim() : null == s,
                c = () =>
                  d || null == s
                    ? null
                    : (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        className: ea.reactionTooltipText,
                        "aria-label": s,
                        children: s,
                      });
              return i === W.ReactionTypes.BURST
                ? (0, a.jsxs)(h.Dialog, {
                    className: ea.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, a.jsx)(p.Clickable, {
                        className: ea.burstReactionTooltipInner,
                        onClick: r,
                        children: (0, a.jsxs)("div", {
                          className: ea.burstReactionTooltipMessage,
                          children: [
                            (0, a.jsx)(T.default, {
                              className: ea.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            c(),
                          ],
                        }),
                      }),
                      (() => {
                        let e = B.default.getCurrentUser();
                        if (n)
                          return (0, a.jsxs)("div", {
                            className: o(
                              ea.burstReactionTooltipPrompt,
                              ea.burstReactionTooltipSpacer
                            ),
                            children: [
                              (0, H.isPremium)(e) &&
                                (0, a.jsx)(G.default, {
                                  className: ea.burstReactionTooltipNitroIcon,
                                  color: D.GradientCssUrls.PREMIUM_TIER_2,
                                }),
                              (0, a.jsx)(p.Text, {
                                variant: "text-sm/normal",
                                className: ea.reactionTooltipText,
                                "aria-label": "super reaction tooltip cta",
                                children:
                                  $.default.Messages
                                    .SUPER_REACTION_TOOLTIP_CTA_REACTED,
                              }),
                            ],
                          });
                        if (this.userCanBurstReact())
                          return (0, a.jsxs)("div", {
                            className: o(
                              ea.burstReactionTooltipPrompt,
                              ea.burstReactionTooltipSpacer,
                              ea.burstReactionTooltipPromptClickable
                            ),
                            children: [
                              (0, a.jsx)(G.default, {
                                className: ea.burstReactionTooltipNitroIcon,
                                color: D.GradientCssUrls.PREMIUM_TIER_2,
                              }),
                              (0, a.jsx)(p.Clickable, {
                                onClick: this.handleClick,
                                children: (0, a.jsx)(p.Text, {
                                  variant: "text-sm/normal",
                                  className: ea.reactionTooltipText,
                                  "aria-label": "super reaction tooltip cta",
                                  children:
                                    $.default.Messages
                                      .SUPER_REACTION_TOOLTIP_CTA,
                                }),
                              }),
                            ],
                          });
                        if (
                          !this.userCanBurstReact() &&
                          !this.isKeyboardNavigation
                        )
                          return (0, a.jsx)("div", {
                            className: o(
                              ea.burstReactionTooltipPrompt,
                              ea.burstReactionTooltipSpacer
                            ),
                            children: (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)(p.Text, {
                                  variant: "text-sm/normal",
                                  "aria-label": "super reaction tooltip upsell",
                                  children:
                                    $.default.Messages
                                      .SUPER_REACTION_TOOLTIP_UPSELL,
                                }),
                                (0, a.jsx)(j.default, {
                                  subscriptionTier:
                                    Q.PremiumSubscriptionSKUs.TIER_2,
                                  buttonText:
                                    $.default.Messages
                                      .USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                  className: ea.burstReactionTooltipUpsellCta,
                                  onClick: e => e.stopPropagation(),
                                }),
                              ],
                            }),
                          });
                        return null;
                      })(),
                      this.renderEmojiDetails(),
                    ],
                  })
                : (0, a.jsxs)(h.Dialog, {
                    className: ea.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, a.jsx)(p.Clickable, {
                        onClick: r,
                        children: (0, a.jsxs)("div", {
                          className: ea.reactionTooltipInner,
                          children: [
                            (0, a.jsx)(T.default, {
                              className: ea.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            c(),
                          ],
                        }),
                      }),
                      this.renderEmojiDetails(),
                    ],
                  });
            }),
            (this.refreshTooltipPositionKey = () => {
              this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            (this.handleShowVerificationGate = () => {
              let { message: e, isPendingMember: t } = this.props;
              if (!t) return null;
              let i = L.default.getChannel(e.getChannelId()),
                a = y.default.getGuild(null == i ? void 0 : i.getGuildId());
              null != a && (0, v.openMemberVerificationModal)(a.id);
            }),
            (this.handleSetReactionRef = e => {
              this.setState({ reactionRef: e });
            }),
            (this.trackReactionTooltipViewed = () => {
              let { emoji: e, message: t, type: i } = this.props,
                a = B.default.getCurrentUser(),
                n = L.default.getChannel(t.getChannelId()),
                l = i === W.ReactionTypes.BURST,
                o = (0, H.isPremium)(a),
                s = l
                  ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER
                  : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
              l &&
                !this.userCanBurstReact() &&
                !o &&
                (s = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                E.default.trackWithMetadata(
                  q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED,
                  {
                    type: s,
                    expression_id: e.id,
                    expression_name: e.name,
                    is_animated: e.animated,
                    is_custom: null != e.id,
                    nonce: this.nonce,
                  }
                ),
                l &&
                  null != n &&
                  !o &&
                  !this.userCanBurstReact() &&
                  F.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    location: {
                      page:
                        (null == n ? void 0 : n.getGuildId()) != null
                          ? q.AnalyticsPages.GUILD_CHANNEL
                          : q.AnalyticsPages.DM_CHANNEL,
                      section: (0, P.getBurstAnalyticsSection)(n),
                      object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                  });
            });
        }
      }
      es.defaultProps = { emojiSize: "jumbo" };
      let er = n.memo(e => {
          let { type: t, burst_colors: i, message: n, emoji: l } = e,
            o = t === W.ReactionTypes.BURST,
            s = (0, _.useEmojiColorPalette)(o && null != i ? i : []),
            r = (0, d.useStateFromStores)(
              [K.default],
              () =>
                void 0 !==
                K.default.getEffectForEmojiId(n.getChannelId(), n.id, l)
            ),
            u = (0, d.useStateFromStores)(
              [f.default],
              () => f.default.useReducedMotion
            ),
            c = M.AnimateEmoji.useSetting(),
            h = B.default.getCurrentUser(),
            p = (0, H.isPremium)(h),
            T = (0, d.useStateFromStores)([K.default], () =>
              K.default.getReactionPickerAnimation(n.id, l.name, l.id)
            ),
            m = o && (r || null != T);
          return (0, a.jsx)(es, {
            ...e,
            colors: s,
            isBurstReaction: o,
            hideEmoji: m,
            userHasPremium: p,
            reduceMotion: u,
            animateEmoji: c,
            animationStartPosition: T,
          });
        }),
        eu = e => {
          var t;
          let {
            emojiId: i,
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: l,
            onClose: o,
            popoutData: s,
            currentGuildId: r,
            nonce: u,
          } = e;
          (0, C.useTrackOpenPopout)({
            emojiId: i,
            currentGuildId: r,
            popoutData: s,
            emojiSourceGuildId: null == n ? void 0 : n.id,
            nonce: u,
          });
          let d =
              null !== (t = null == n ? void 0 : n.isDiscoverable()) &&
              void 0 !== t &&
              t,
            c = null !== n && d;
          return (0, a.jsx)(a.Fragment, {
            children: c
              ? null == n
                ? null
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: ee.reactionEmojiDetailsUnfurlGuildDetails,
                        children: (0, a.jsx)(z.GuildDetails, {
                          expressionSourceGuild: n,
                          hasJoinedExpressionSourceGuild: l,
                          isDisplayingJoinGuildButtonInPopout:
                            s.type === J.EmojiPopoutType.JOIN_GUILD,
                        }),
                      }),
                      (0, a.jsx)(z.EmojiPopoutList, {
                        emojiId: i,
                        expressionSourceGuild: n,
                        hasJoinedEmojiSourceGuild: l,
                        onClose: o,
                        popoutData: s,
                        isDisplayingButtonInTopSection: !1,
                      }),
                    ],
                  })
              : (0, a.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  "aria-label": s.type,
                  children: s.emojiDescription,
                }),
          });
        },
        ed = e => {
          var t;
          let { emojiId: i, refreshPositionKey: l, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: u } = (0, d.useStateFromStoresObject)(
              [I.default, y.default],
              () => {
                let e = I.default.getCustomEmojiById(i);
                return {
                  joinedEmojiSourceGuild:
                    (null == e ? void 0 : e.type) === g.EmojiTypes.GUILD
                      ? y.default.getGuild(null == e ? void 0 : e.guildId)
                      : void 0,
                };
              }
            ),
            [c, h] = n.useState(void 0),
            [T, m] = n.useState(!1),
            [f, E] = n.useState(!1),
            [R, _] = n.useState(!1),
            C = null != u,
            v =
              null !== (t = null == c ? void 0 : c.isDiscoverable()) &&
              void 0 !== t &&
              t,
            O = U.default.getGuildId(),
            S =
              null != O &&
              (O === (null == c ? void 0 : c.id) ||
                O === (null == u ? void 0 : u.id)),
            j = B.default.getCurrentUser(),
            x = (0, J.getEmojiPopoutData)({
              isPremium: H.default.isPremium(j),
              hasJoinedEmojiSourceGuild: C,
              isDiscoverable: v,
              emojiComesFromCurrentGuild: S,
              isUnusableRoleSubscriptionEmoji: !1,
              userIsRoleSubscriber: !1,
              isRoleSubscriptionEmoji: !1,
              shouldHideRoleSubscriptionCTA: !1,
            });
          n.useEffect(() => {
            if (!T || R) return;
            let e = async () => {
              l(), E(!0);
              let e = await N.default.getGuildFromEmojiId(i);
              h(e), E(!1), _(!0), l();
            };
            e();
          }, [i, T, R, l]);
          if (C) return null;
          let A = () => {
              m(!T);
            },
            P = T && void 0 !== c;
          return (0, a.jsxs)("div", {
            children: [
              P
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: ee.reactionEmojiDetailsDivider,
                      }),
                      null != x.emojiDescription &&
                        x.type !== J.EmojiPopoutType.UNAVAILABLE &&
                        (0, a.jsx)(p.Text, {
                          variant: "text-sm/normal",
                          "aria-label": x.type,
                          children: x.emojiDescription,
                        }),
                    ],
                  })
                : (() => {
                    let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                    return (0, a.jsxs)(p.Clickable, {
                      onClick: A,
                      className: ee.reactionEmojiDetailsClickable,
                      children: [
                        (0, a.jsx)(p.Text, {
                          variant: "text-sm/normal",
                          color: "none",
                          "aria-label": e,
                          children: e,
                        }),
                        (0, a.jsx)(w.default, {
                          width: 16,
                          height: 16,
                          className: o(ee.reactionEmojiDetailsArrow, {
                            [ee.reactionEmojiDetailsArrowCollapsed]: !T,
                          }),
                        }),
                      ],
                    });
                  })(),
              f
                ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
                    className: ee.emojiDetailsLoader,
                  })
                : P &&
                  (0, a.jsx)(eu, {
                    emojiId: i,
                    expressionSourceGuild: c,
                    hasJoinedExpressionSourceGuild: C,
                    onClose: s,
                    popoutData: x,
                    currentGuildId: O,
                    nonce: r,
                  }),
            ],
          });
        };
    },
    81924: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        }),
        i("222007");
      var a = i("37983"),
        n = i("884691"),
        l = i("446674"),
        o = i("913144"),
        s = i("206230"),
        r = i("166257"),
        u = i("845579"),
        d = i("15935"),
        c = i("103475"),
        h = i("512306"),
        p = i("941723"),
        T = i("757616"),
        m = i("957044"),
        f = n.memo(function (e) {
          let {
              channelId: t,
              messageId: i,
              emoji: f,
              useChatFontScaling: E,
              color: R,
              count: I,
            } = e,
            g = (0, l.useStateFromStores)([d.default], () =>
              d.default.getEffectForEmojiId(t, i, f)
            ),
            _ = E ? m : T,
            N = n.useMemo(
              () => (0, p.buildEffect)(f, R, t, { key: g, messageId: i }),
              [R, g, f, t, i]
            ),
            [C, v] = n.useState(!1),
            O = (0, l.useStateFromStores)(
              [s.default],
              () => s.default.useReducedMotion
            ),
            S = u.AnimateEmoji.useSetting(),
            j = n.useCallback(() => {
              o.default.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: i,
                emoji: f,
              });
            }, [f, t, i]);
          return (n.useEffect(() => {
            let e = () => {
              if (C) return;
              let e = (0, c.getBurstAnimationHash)(
                  "".concat(Date.now()).concat(t).concat(i).concat(f.name)
                ),
                a = e % 10;
              (a += I > 4 ? 4 : I - 1) > 7 &&
                (v(!0),
                (0, r.playBurstReaction)({
                  channelId: t,
                  messageId: i,
                  emoji: f,
                  key: d.BurstReactionEffectSource.RANDOM,
                }));
            };
            if (C || (O && !S) || !S) return;
            e();
            let a = setInterval(e, 5e3);
            return () => {
              clearInterval(a);
            };
          }, [S, t, I, f, f.name, C, i, O]),
          null == g)
            ? null
            : (0, a.jsx)(h.default, {
                className: _.effect,
                effect: N,
                onComplete: j,
              });
        });
    },
    232259: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useUsernameHook: function () {
            return d;
          },
        });
      var a = i("37983"),
        n = i("884691"),
        l = i("77078"),
        o = i("506885"),
        s = i("981601"),
        r = i("42203"),
        u = i("441823");
      function d(e, t, i) {
        var d, c;
        let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          p = arguments.length > 4 ? arguments[4] : void 0;
        let T =
          ((d = e),
          (c = t),
          n.useCallback(
            e => {
              let t = r.default.getChannel(c);
              null != t && null != d && (0, u.openUserContextMenu)(e, d, t);
            },
            [d, c]
          ));
        return n.useCallback(
          r => (u, d) => {
            let c = (e, t) =>
                (0, n.createElement)(l.NameWithRoleAnchor, {
                  ...(null != e ? e : {}),
                  key: t,
                  onContextMenu: T,
                  name: u,
                  color: null == r ? void 0 : r.colorString,
                  roleName: null == r ? void 0 : r.colorRoleName,
                  "aria-label": p,
                }),
              m = e => t => {
                h && t.stopPropagation(), e(t);
              };
            return null != e
              ? (0, a.jsx)(
                  l.Popout,
                  {
                    position: "right",
                    preload: () =>
                      (0, o.default)(e.id, e.getAvatarURL(i, 80), {
                        guildId: i,
                        channelId: t,
                      }),
                    renderPopout: n =>
                      (0, a.jsx)(s.default, {
                        ...n,
                        userId: e.id,
                        guildId: i,
                        channelId: t,
                      }),
                    children: e => {
                      let { onClick: t, ...i } = e;
                      return c({ onClick: m(t), ...i });
                    },
                  },
                  d
                )
              : c(void 0, d);
          },
          [e, t, i, T, h, p]
        );
      }
    },
    785621: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return p;
          },
        });
      var a = i("37983"),
        n = i("884691"),
        l = i("917351"),
        o = i("65597"),
        s = i("880731"),
        r = i("232268"),
        u = i("759432"),
        d = i("798592"),
        c = i("39141");
      function h(e) {
        let { reactionRef: t, count: i } = e,
          a = n.useRef(i),
          r = (0, o.default)([s.default], () => s.default.getState()),
          c = (0, d.default)(),
          h = (0, u.default)(t);
        return (
          n.useEffect(() => {
            if (i > a.current && null != h) {
              let e = (0, l.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
              c.fire(h.x, h.y, { count: e });
            }
            a.current = i;
          }, [i, h, c, r.confettiCount]),
          null
        );
      }
      function p(e) {
        return (0, a.jsx)(r.default, {
          confettiLocation: c.ConfettiLocation.REACTION,
          children: (0, a.jsx)(h, { ...e }),
        });
      }
    },
    85589: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return T;
          },
          openBurstReactionsUpsellModal: function () {
            return m;
          },
        });
      var a = i("37983");
      i("884691");
      var n = i("77078"),
        l = i("79112"),
        o = i("154889"),
        s = i("917247"),
        r = i("789946"),
        u = i("646718"),
        d = i("49111"),
        c = i("782340"),
        h = i("618080"),
        p = i("277064");
      function T(e) {
        var t, i;
        let { onClose: n, analyticsSource: T, ...m } = e,
          f = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
            onClick: () => {
              l.default.open(d.UserSettingsSections.PREMIUM), n();
            },
          }),
          E = (0, s.usePremiumTrialOffer)(),
          R = (0, o.usePremiumDiscountOffer)();
        return (0, a.jsx)(r.default, {
          artURL: p,
          artContainerClassName: h.artContainer,
          modalClassName: h.modalContainer,
          bodyClassName: h.bodyContainer,
          type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
          title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
          body: f,
          glowUp: f,
          analyticsSource: T,
          analyticsLocation: {
            page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: n,
          subscribeButtonText:
            null != E || null != R
              ? void 0
              : c.default.Messages.PREMIUM_SETTINGS_GET,
          subscriptionTier:
            null !==
              (i =
                null == E
                  ? void 0
                  : null === (t = E.subscription_trial) || void 0 === t
                    ? void 0
                    : t.sku_id) && void 0 !== i
              ? i
              : u.PremiumSubscriptionSKUs.TIER_2,
          backButtonText: c.default.Messages.NO_THANKS,
          ...m,
        });
      }
      function m(e) {
        let { analytics: t } = e;
        (0, n.openModalLazy)(async () => {
          let { default: e } = await i.el("85589").then(i.bind(i, "85589"));
          return i => (0, a.jsx)(e, { analyticsSource: t, ...i });
        });
      }
    },
    738107: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getMinCounterWidth: function () {
            return T;
          },
          default: function () {
            return o;
          },
        });
      var a,
        n,
        l,
        o,
        s = i("37983"),
        r = i("884691"),
        u = i("917351"),
        d = i.n(u),
        c = i("458960"),
        h = i("471671");
      function p(e, t) {
        return {
          toValue: e,
          duration: null != t ? t : 300,
          easing: c.default.Easing.inOut(c.default.Easing.back()),
        };
      }
      function T(e, t, i) {
        if (null != t) {
          let a = Math.ceil(Math.log10(e + 1));
          return null != i && i > 0 ? Math.min(a, i) * t : a * t;
        }
      }
      ((a = l || (l = {}))[(a.ABOVE = 0)] = "ABOVE"),
        (a[(a.VISIBLE = 1)] = "VISIBLE"),
        (a[(a.BELOW = 2)] = "BELOW"),
        ((n = class extends r.PureComponent {
          static getDerivedStateFromProps(e, t) {
            let { prevValue: i, currValue: a, nextValue: n } = t;
            return null == i && a !== e.value
              ? {
                  prevValue: h.default.isFocused() ? a : null,
                  currValue: e.value,
                }
              : null != n && n !== e.value
                ? { nextValue: e.value }
                : null;
          }
          componentDidUpdate(e, t) {
            let { prevValue: i, currValue: a } = this.state;
            i !== t.prevValue && null != i && this.animateBetween(i, a);
          }
          animateBetween(e, t) {
            let i;
            let { forcePosition: a, animationSpeed: n } = this.props;
            this.prevAnimate.setValue(1),
              null != a
                ? 0 === a
                  ? (this.currAnimate.setValue(0), (i = 2))
                  : 2 === a && (this.currAnimate.setValue(2), (i = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (i = 2))
                  : (this.currAnimate.setValue(2), (i = 0)),
              c.default
                .parallel([
                  c.default.timing(this.prevAnimate, p(i, n)),
                  c.default.timing(this.currAnimate, p(1, n)),
                ])
                .start(this.animateNext);
          }
          getAnimatedStyle(e) {
            let { animationColor: t } = this.props;
            return {
              transform: [
                {
                  translateY: e.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: ["-100%", "0%", "100%"],
                  }),
                },
              ],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...(null != t && { color: t }),
            };
          }
          getMinWidth(e) {
            let { digitWidth: t, padStartLength: i } = this.props;
            return T(e, t, i);
          }
          padValue(e) {
            let { padStartLength: t } = this.props;
            return null != t ? String(e).padStart(t, "0") : e;
          }
          render() {
            let { prevValue: e, currValue: t } = this.state,
              { color: i, formatString: a } = this.props,
              n = d.omit(this.props, [
                "value",
                "digitWidth",
                "padStartLength",
                "forcePosition",
              ]);
            if (null == e)
              return (0, s.jsx)("div", {
                ...n,
                style: { color: i, minWidth: this.getMinWidth(t) },
                children: null != a ? a(this.padValue(t)) : this.padValue(t),
              });
            let l = Math.max(e, t);
            return (0, s.jsxs)("div", {
              ...n,
              style: { color: i, position: "relative", overflow: "hidden" },
              children: [
                (0, s.jsx)("div", {
                  style: {
                    visibility: "hidden",
                    minWidth: this.getMinWidth(l),
                  },
                  children: this.padValue(l),
                }),
                (0, s.jsx)(c.default.div, {
                  style: {
                    color: i,
                    ...this.getAnimatedStyle(this.prevAnimate),
                  },
                  children: null != a ? a(this.padValue(e)) : this.padValue(e),
                }),
                (0, s.jsx)(c.default.div, {
                  style: {
                    color: i,
                    ...this.getAnimatedStyle(this.currAnimate),
                  },
                  children: null != a ? a(this.padValue(t)) : this.padValue(t),
                }),
              ],
            });
          }
          constructor(e) {
            super(e),
              (this.animateNext = () => {
                let { currValue: e, nextValue: t } = this.state;
                null != t
                  ? this.setState({
                      prevValue: h.default.isFocused() ? e : null,
                      currValue: t,
                      nextValue: null,
                    })
                  : this.setState({ prevValue: null });
              }),
              (this.state = {
                prevValue: null,
                currValue: e.value,
                nextValue: null,
              }),
              (this.prevAnimate = new c.default.Value(0)),
              (this.currAnimate = new c.default.Value(1));
          }
        }).Positions = l),
        (o = n);
    },
    211162: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PinIcon: function () {
            return o;
          },
        });
      var a = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let o = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: o = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
            className: s,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=436d0d80b54c1fd352b5.js.map
