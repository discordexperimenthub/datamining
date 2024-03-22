(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94595"],
  {
    437412: function (t, e, s) {
      "use strict";
      t.exports = s.p + "5fca68e67f05bed32eb4.png";
    },
    93902: function (t, e, s) {
      "use strict";
      t.exports = s.p + "de1981a6479d060d8ebd.png";
    },
    426188: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          useFetchCollectiblesProduct: function () {
            return u;
          },
        }),
        s("222007");
      var l = s("884691"),
        i = s("65597"),
        a = s("552712"),
        n = s("21526"),
        r = s("853987"),
        o = s("49111");
      function u(t) {
        let e = (0, i.useStateFromStores)([a.default], () =>
            null != t ? a.default.get(t) : null
          ),
          s = null != e && e.productLine !== o.SKUProductLines.COLLECTIBLES,
          [u, d] = (0, i.useStateFromStoresArray)([r.default], () => [
            r.default.isFetching,
            r.default.getProduct(t),
          ]);
        return (
          (0, l.useEffect)(() => {
            null != t &&
              null == d &&
              !s &&
              !u &&
              (0, n.fetchCollectiblesProduct)(t);
          }, [t, d, s, u]),
          { product: d, isFetching: u }
        );
      }
    },
    355033: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return S;
          },
        });
      var l = s("37983");
      s("884691");
      var i = s("265586"),
        a = s("446674"),
        n = s("77078"),
        r = s("606292"),
        o = s("688318"),
        u = s("601095"),
        d = s("697218"),
        c = s("853987"),
        f = s("284105");
      let p = n.AvatarSizes.SIZE_152,
        h = (0, r.getDecorationSizeForAvatarSize)(p),
        m = t => {
          let { item: e } = t,
            s = (0, a.useStateFromStores)([d.default], () =>
              d.default.getCurrentUser()
            ),
            {
              avatarDecorationSrc: i,
              avatarPlaceholderSrc: r,
              eventHandlers: u,
            } = (0, o.default)({
              user: s,
              avatarDecorationOverride: e,
              size: h,
            });
          return (0, l.jsx)("div", {
            className: f.avatarDecorationPreview,
            children: (0, l.jsx)(n.Avatar, {
              ...u,
              "aria-label": e.label,
              src: r,
              avatarDecoration: i,
              size: p,
            }),
          });
        },
        C = t => {
          let { item: e } = t;
          return (0, l.jsx)("div", {
            className: f.profileEffectPreview,
            children: (0, l.jsx)(u.default, {
              isHovering: !0,
              profileEffectId: null == e ? void 0 : e.id,
            }),
          });
        };
      var S = t => {
        let { giftCode: e } = t,
          s = (0, a.useStateFromStores)([c.default], () =>
            c.default.getProduct(e.skuId)
          ),
          n = null == s ? void 0 : s.items[0];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (null == n ? void 0 : n.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION &&
              (0, l.jsx)(m, { item: n }),
            (null == n ? void 0 : n.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, l.jsx)(C, { item: n }),
          ],
        });
      };
    },
    264579: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return a;
          },
        });
      var l = s("37983");
      s("884691");
      var i = s("77078"),
        a = t => {
          let { product: e, analyticsLocations: a } = t;
          (0, i.openModalLazy)(async () => {
            let { default: t } = await s.el("658756").then(s.bind(s, "658756"));
            return s =>
              (0, l.jsx)(t, { product: e, analyticsLocations: a, ...s });
          });
        };
    },
    669146: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return J;
          },
        }),
        s("222007"),
        s("70102");
      var l = s("37983"),
        i = s("884691"),
        a = s("414456"),
        n = s.n(a),
        r = s("265586"),
        o = s("446674"),
        u = s("819855"),
        d = s("77078"),
        c = s("569272"),
        f = s("841098"),
        p = s("206230"),
        h = s("812204"),
        m = s("685665"),
        C = s("651057"),
        S = s("299285"),
        g = s("491232"),
        I = s("426188"),
        T = s("355033"),
        E = s("264579"),
        _ = s("526887"),
        v = s("393414"),
        M = s("235004"),
        O = s("55411"),
        x = s("686470"),
        N = s("697218"),
        A = s("10514"),
        y = s("552712"),
        R = s("953109"),
        F = s("476765"),
        b = s("599110"),
        G = s("402671"),
        j = s("659632"),
        L = s("380186"),
        P = s("158998"),
        D = s("895737"),
        k = s("210721"),
        U = s("357722"),
        w = s("65324"),
        H = s("646718"),
        B = s("49111"),
        z = s("782340"),
        V = s("370710"),
        Y = s("653240"),
        Z = s("140802");
      let X = t => {
          let { openedGift: e } = t,
            { createMultipleConfettiAt: s } = i.useContext(
              _.ConfettiCannonContext
            );
          return (
            i.useEffect(() => {
              e && s(window.innerWidth / 2, window.innerHeight / 4);
            }, [s, e]),
            null
          );
        },
        W = t => {
          let { step: e, soundId: s } = t;
          return (
            i.useEffect(() => {
              var t;
              if (e !== B.GiftCodeModalStates.CONFIRM) return;
              let l = M.default.getSoundById(s);
              (0, D.playGiftSound)(
                s,
                null !== (t = null == l ? void 0 : l.volume) && void 0 !== t
                  ? t
                  : 1
              );
            }, [e, s]),
            null
          );
        };
      class K extends i.Component {
        componentDidMount() {
          let {
            application: t,
            sku: e,
            customGiftMessage: s,
            giftCode: l,
            emojiName: i,
          } = this.props;
          null == t && null != e && C.default.fetchApplication(e.applicationId);
          let a = null != s || null != l.giftStyle,
            n = (0, g.isCollectiblesGiftCode)(l),
            r = null != i ? G.default.getURL(i) : void 0;
          this.setState({
            isCustomGift: a,
            isCollectiblesGift: n,
            emojiURL: r,
            opened: n,
          }),
            this.trackStepAnalytics();
        }
        get step() {
          let { libraryApplication: t, accepting: e, giftCode: s } = this.props,
            { error: l, accepted: i, opened: a, isCustomGift: n } = this.state;
          return (0, j.getStep)(t, s, l, i, e, a, n);
        }
        get buttonText() {
          return (0, j.getButtonText)(
            this.step,
            this.props.giftCode,
            this.state.isCustomGift
          );
        }
        get firstHeaderText() {
          let { isCustomGift: t, opened: e, accepted: s } = this.state,
            {
              giftCode: l,
              subscriptionPlan: i,
              collectiblesItemType: a,
            } = this.props;
          if (t && this.step === B.GiftCodeModalStates.ERROR)
            return z.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
          if (t && !s) {
            if (!e)
              return z.default.Messages.GIFT_RECIPIENT_INFO.format({
                recipientDisplayName: P.default.getName(
                  N.default.getCurrentUser()
                ),
              });
            {
              let t = N.default.getUser(l.userId),
                e = P.default.getName(t);
              return a === r.CollectiblesItemType.AVATAR_DECORATION
                ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format(
                    { sender: e }
                  )
                : a === r.CollectiblesItemType.PROFILE_EFFECT
                  ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format(
                      { sender: e }
                    )
                  : z.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
                      sender: e,
                      timeInterval:
                        (null == i ? void 0 : i.interval) ===
                        H.SubscriptionIntervalTypes.MONTH
                          ? z.default.Messages
                              .PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                          : z.default.Messages
                              .PREMIUM_SUBSCRIPTION_INTERVAL_YEAR,
                    });
            }
          }
          return null == this.props.sku
            ? null
            : (0, j.getHeaderText)(
                this.step,
                this.props.giftCode,
                this.props.sku
              );
        }
        get secondHeaderText() {
          if (
            !this.state.isCustomGift ||
            this.state.opened ||
            this.state.accepted
          )
            return null;
          let t = N.default.getUser(this.props.giftCode.userId);
          return z.default.Messages.GIFT_SENDER_INFO.format({
            sender: P.default.getName(t),
          });
        }
        get bodyText() {
          let {
            sku: t,
            accepting: e,
            libraryApplication: s,
            subscriptionPlan: l,
          } = this.props;
          if (null == t) return null;
          let {
            error: i,
            accepted: a,
            isCustomGift: n,
            opened: r,
          } = this.state;
          return !r && n
            ? null
            : (0, j.getBodyText)({
                step: this.step,
                sku: t,
                libraryApplication: s,
                error: i,
                accepted: a,
                accepting: e,
                onGoToLibrary: this.handleGoToLibrary,
                subscriptionPlan: l,
              });
        }
        get errorMessage() {
          let { libraryApplication: t, accepting: e } = this.props,
            { error: s, accepted: l } = this.state;
          return (0, j.getErrorMessage)(t, s, l, e, this.handleGoToLibrary);
        }
        get handleClick() {
          let { giftCode: t, onClose: e } = this.props;
          switch (this.step) {
            case B.GiftCodeModalStates.ERROR:
              return e;
            case B.GiftCodeModalStates.SUCCESS:
              if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
              return this.handleGoToLibrary;
            case B.GiftCodeModalStates.OPEN:
              return this.handleOpen;
            case B.GiftCodeModalStates.CONFIRM:
            default:
              return this.handleAccept;
          }
        }
        trackStepAnalytics() {
          let {
              giftCode: t,
              customGiftMessage: e,
              emojiName: s,
              soundId: l,
            } = this.props,
            { isCustomGift: i } = this.state;
          b.default.track(B.AnalyticEvents.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: i,
            is_custom_message_edited:
              i && e !== z.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: s,
            sound_id: l,
          });
        }
        render() {
          let {
              application: t,
              accepting: e,
              onClose: s,
              giftCode: i,
              headerId: a,
              transitionState: r,
              useReducedMotion: o,
              onComplete: u,
              customGiftMessage: c,
              emojiName: f,
              soundId: p,
              isThemeDark: h,
            } = this.props,
            m = N.default.getUser(i.userId),
            {
              isCustomGift: C,
              isCollectiblesGift: S,
              accepted: g,
              opened: I,
              emojiURL: E,
            } = this.state,
            _ = N.default.getCurrentUser(),
            v = this.step === B.GiftCodeModalStates.ERROR,
            M =
              (null == i ? void 0 : i.userId) != null &&
              null != _ &&
              (null == _ ? void 0 : _.id) != null &&
              i.userId === _.id;
          switch (this.step) {
            case B.GiftCodeModalStates.ERROR:
              null == u || u(i, !1);
              break;
            case B.GiftCodeModalStates.SUCCESS:
              null == u || u(i, !0);
          }
          return (0, l.jsxs)("div", {
            ref: this.modalRef,
            children: [
              (0, l.jsxs)(d.ModalRoot, {
                transitionState: r,
                size: d.ModalSize.SMALL,
                className: V.modal,
                "aria-labelledby": a,
                children: [
                  null != i.giftStyle &&
                    !C &&
                    !S &&
                    (0, l.jsx)(w.default, {
                      defaultAnimationState: this.getDefaultAnimationStatus(),
                      idleAnimationState: this.getIdleAnimationStatus(),
                      giftStyle: i.giftStyle,
                      className: V.seasonalGiftIcon,
                    }),
                  (0, l.jsx)("div", { className: C ? void 0 : V.backSplash }),
                  (0, l.jsxs)(d.ModalContent, {
                    className: n({ [V.content]: !C, [V.contentCustomGift]: C }),
                    children: [
                      !S &&
                        (0, l.jsx)(d.ModalCloseButton, {
                          onClick: s,
                          className: V.closeButton,
                        }),
                      !S &&
                        (null == i.giftStyle || (C && g)) &&
                        (0, l.jsx)(R.default, {
                          size: R.default.Sizes.LARGE,
                          game: t,
                          skuId: i.skuId,
                        }),
                      v && (0, l.jsx)("img", { alt: "", src: h ? Y : Z }),
                      (0, l.jsxs)(d.Heading, {
                        id: a,
                        className: n({
                          [V.customGiftHeader]: C && !g,
                          [V.header]: !C || g,
                        }),
                        variant: "heading-sm/semibold",
                        children: [
                          (0, l.jsx)("div", {
                            className: n({ [V.customGiftHeaderText]: C }),
                            children: this.firstHeaderText,
                          }),
                          (0, l.jsx)("div", {
                            children: this.secondHeaderText,
                          }),
                        ],
                      }),
                      !(C && !g) &&
                        (0, l.jsx)(d.Text, {
                          className: V.body,
                          variant: "text-sm/normal",
                          children: this.bodyText,
                        }),
                      C &&
                        !S &&
                        null != i.giftStyle &&
                        !g &&
                        (0, l.jsx)(w.default, {
                          defaultAnimationState:
                            this.getDefaultAnimationStatus(),
                          idleAnimationState: this.getIdleAnimationStatus(),
                          className: V.giftAnimation,
                          giftStyle: i.giftStyle,
                        }),
                      this.state.opened &&
                        !v &&
                        (0, l.jsx)(T.default, { giftCode: i }),
                      v &&
                        (0, l.jsx)(d.Text, {
                          className: V.body,
                          variant: "text-md/normal",
                          children: this.errorMessage,
                        }),
                      C &&
                        this.state.opened &&
                        !this.state.accepted &&
                        !v &&
                        null != c &&
                        "" !== c &&
                        !M &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(d.FormTitle, {
                              children:
                                z.default.Messages.GIFT_SENDER_INFO.format({
                                  sender: P.default.getName(m),
                                }),
                            }),
                            (0, l.jsx)(d.Heading, {
                              id: a,
                              className: V.customMessage,
                              variant: "heading-sm/bold",
                              children: c,
                            }),
                          ],
                        }),
                      (0, l.jsx)(d.Button, {
                        submitting: e,
                        onClick: () => {
                          this.trackStepAnalytics(), this.handleClick();
                        },
                        children: this.buttonText,
                      }),
                    ],
                  }),
                ],
              }),
              null != i.giftStyle &&
                !o &&
                this.step !== B.GiftCodeModalStates.ERROR &&
                (0, l.jsx)(l.Fragment, {
                  children:
                    !g &&
                    !e &&
                    I &&
                    (null == f || null == E
                      ? (0, l.jsx)(X, { openedGift: I && !g && !e })
                      : (0, l.jsx)(U.default, {
                          confettiTarget: this.modalRef.current,
                          emojiURL: E,
                        })),
                }),
              !g &&
                !e &&
                I &&
                null != p &&
                (0, l.jsx)(W, { soundId: p, step: this.step }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            (this.state = {
              error: null,
              accepted: !1,
              opened: !1,
              isCustomGift: !1,
              isCollectiblesGift: !1,
              step: void 0,
              emojiURL: void 0,
            }),
            (this.modalRef = i.createRef()),
            (this.handleOpen = () => {
              this.setState({ opened: !0 });
            }),
            (this.handleAccept = async () => {
              let { giftCode: t, channelContext: e, onAccept: s } = this.props;
              if (null == t) throw Error("GiftCode is null at acceptance.");
              try {
                await c.default.redeemGiftCode({
                  code: t.code,
                  options: { channelId: e },
                }),
                  this.setState({ accepted: !0 }),
                  null == s || s();
              } catch (t) {
                this.setState({ error: t });
              }
            }),
            (this.handleGoToLibrary = () => {
              let { onClose: t, libraryApplication: e } = this.props;
              (0, v.transitionTo)(B.Routes.APPLICATION_LIBRARY, {
                state: { applicationId: null != e ? e.id : null },
              }),
                t();
            }),
            (this.getDefaultAnimationStatus = () => {
              if (this.step === B.GiftCodeModalStates.OPEN)
                return k.AnimationState.IDLE;
              return k.AnimationState.ACTION;
            }),
            (this.getIdleAnimationStatus = () => {
              if (this.step !== B.GiftCodeModalStates.OPEN)
                return k.AnimationState.LOOP;
            });
        }
      }
      let q = o.default.connectStores(
        [x.default, y.default, S.default, O.default, A.default, p.default],
        t => {
          let { giftCode: e } = t,
            s = y.default.get(e.skuId),
            l = null != s ? S.default.getApplication(s.applicationId) : null,
            i = p.default.useReducedMotion;
          return {
            sku: s,
            libraryApplication:
              null != s && (null == e ? void 0 : e.entitlementBranches) != null
                ? (0, j.firstLibraryApplicationForGiftCode)(
                    e.entitlementBranches,
                    s,
                    x.default
                  )
                : null,
            application: l,
            subscriptionPlan:
              null != e.subscriptionPlanId
                ? (0, L.getOrFetchSubscriptionPlan)(e.subscriptionPlanId)
                : null,
            accepting: O.default.getIsAccepting(e.code),
            useReducedMotion: i,
          };
        }
      )(K);
      var J = t => {
        var e;
        let {
            channelContext: s,
            code: i,
            customGiftMessage: a,
            emojiName: n,
            soundId: r,
            onClose: d,
            ...c
          } = t,
          p = (0, F.useUID)(),
          C = (0, o.useStateFromStores)([O.default], () => O.default.get(i)),
          S = (0, f.default)(),
          { analyticsLocations: g } = (0, m.default)(h.default.GIFT_CODE_MODAL),
          { product: T } = (0, I.useFetchCollectiblesProduct)(
            null == C ? void 0 : C.skuId
          );
        return null == C
          ? null
          : (0, l.jsx)(q, {
              ...c,
              customGiftMessage: a,
              channelContext: s,
              giftCode: C,
              headerId: p,
              emojiName: n,
              soundId: r,
              analyticsLocations: g,
              isThemeDark: (0, u.isThemeDark)(S),
              onClose: d,
              collectiblesItemType:
                null == T
                  ? void 0
                  : null === (e = T.items[0]) || void 0 === e
                    ? void 0
                    : e.type,
              onAccept:
                null != T
                  ? () => {
                      d(),
                        (0, E.default)({ product: T, analyticsLocations: g });
                    }
                  : void 0,
            });
      };
    },
    357722: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var l = s("37983"),
        i = s("884691"),
        a = s("516555"),
        n = s("526887"),
        r = s("172858");
      let o = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 },
        u = (t, e, s) => (null == s ? e : (t * s) / 100),
        d = i.memo(function (t) {
          let {
              confettiTarget: e,
              colors: s,
              emojiURL: d,
              numBursts: c,
              particlesPerBurst: f,
              offsetXPercentageMax: p,
              offsetXPercentageMin: h,
              offsetYPercentageMax: m,
              offsetYPercentageMin: C,
              customConfettiCanvas: S,
              speedValues: g = o,
              dragCoefficientValue: I = 0.001,
              onAnimationEnd: T,
            } = t,
            [E, _] = i.useState(null),
            { confettiCanvas: v } = i.useContext(n.ConfettiCannonContext),
            M = (0, a.useConfettiCannon)(null != S ? S : v, E),
            [O, x] = i.useState(!1);
          i.useEffect(() => {
            O && (null == T || T());
          });
          let N = i.useMemo(() => {
            if (null != d) return [{ src: d, colorize: !1 }];
          }, [d]);
          return (
            i.useEffect(() => {
              if (null == e) return;
              let t = Array(null != c ? c : 4).fill(0);
              return (
                (t = t.map((s, l) =>
                  setTimeout(() => {
                    M.createMultipleConfetti(
                      (function (t, e, s, l, i) {
                        let a =
                            arguments.length > 5 && void 0 !== arguments[5]
                              ? arguments[5]
                              : o,
                          n =
                            arguments.length > 6 && void 0 !== arguments[6]
                              ? arguments[6]
                              : 0.001,
                          d = u(t.width, 100, s),
                          c = u(t.height, 75, i),
                          f = u(t.width, 350, e),
                          p = u(t.height, 75, l),
                          { xMin: h, xMax: m, yMin: C, yMax: S } = a;
                        return {
                          ...r.COMMON_CONFETTI_BASE_CONFIG,
                          position: {
                            type: "static-random",
                            minValue: { x: t.left + d, y: t.top + c },
                            maxValue: { x: t.left + f, y: t.top + p },
                          },
                          velocity: {
                            type: "static-random",
                            minValue: { x: h, y: C },
                            maxValue: { x: m, y: S },
                          },
                          size: {
                            type: "static-random",
                            minValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                            maxValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                          },
                          dragCoefficient: { type: "static", value: n },
                        };
                      })(e.getBoundingClientRect(), p, h, m, C, g, I),
                      null != f ? f : 50
                    ),
                      l === t.length - 1 && null != T && x(!0);
                  }, 60 * l)
                )),
                () => {
                  for (let e of t) clearTimeout(e);
                }
              );
            }, [M, e, c, f, p, h, m, C, g, I, T]),
            (0, l.jsx)(a.SpriteCanvas, {
              ref: _,
              sprites: null != N ? N : r.COMMON_CONFETTI_SPRITES,
              colors: null != s ? s : r.COMMON_CONFETTI_COLORS,
              spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            })
          );
        });
      var c = d;
    },
    601095: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var l = s("37983"),
        i = s("884691"),
        a = s("414456"),
        n = s.n(a),
        r = s("859498"),
        o = s("635471"),
        u = s("126746"),
        d = s("93902"),
        c = t => {
          let {
              profileEffectId: e,
              isHovering: s,
              forCollectedModal: a = !1,
              isPurchased: c,
              removeSetHeight: f = !1,
            } = t,
            p = a ? 250 : 0.1,
            [h, m] = i.useState(!0);
          return (i.useEffect(() => {
            if (!0 !== a) m(!1);
            else {
              let t = setTimeout(() => {
                m(!1);
              }, p);
              return () => {
                clearTimeout(t);
              };
            }
          }, [p, a]),
          null != e)
            ? (0, l.jsxs)("div", {
                className: n(u.previewContainer, {
                  [u.previewContainerAnimation]: a,
                  [u.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, l.jsx)("img", {
                    src: d,
                    alt: " ",
                    className: a ? u.previewForCollected : u.preview,
                    "aria-hidden": !0,
                  }),
                  !h &&
                    (0, l.jsx)("div", {
                      className: c ? u.purchasedEffect : void 0,
                      children: (0, l.jsx)(o.default, {
                        profileEffectId: e,
                        useThumbnail: !0,
                        autoPlay: a,
                        restartMethod: r.RestartMethod.FromStart,
                        resetOnHover: !0,
                        isHovering: s,
                        introDelay: p,
                        useOpacityOnHover: !1,
                        shopPreview: !0,
                      }),
                    }),
                ],
              })
            : null;
        };
    },
  },
]);
//# sourceMappingURL=e86a7a52544abfad728e.js.map
