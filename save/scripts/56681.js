(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56681"],
  {
    569272: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return E;
          },
        });
      var s = i("872717"),
        n = i("913144"),
        l = i("651057"),
        a = i("299285"),
        r = i("523086"),
        u = i("21526"),
        d = i("659632"),
        o = i("49111"),
        c = i("646718"),
        E = {
          resolveGiftCode: async function e(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            n.default.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
            try {
              let s = await (0, d.resolveGiftCode)(e, t, i);
              if (
                null != s.application_id &&
                s.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION
              ) {
                let e = a.default.getApplication(s.application_id);
                if (null == e)
                  try {
                    await l.default.fetchApplication(s.application_id);
                  } catch (e) {}
              }
              if (s.application_id === o.COLLECTIBLES_APPLICATION_ID)
                try {
                  await (0, u.fetchCollectiblesProduct)(s.sku_id);
                } catch (e) {}
              return (
                n.default.dispatch({
                  type: "GIFT_CODE_RESOLVE_SUCCESS",
                  giftCode: s,
                }),
                { giftCode: s }
              );
            } catch (t) {
              throw (
                (n.default.dispatch({
                  type: "GIFT_CODE_RESOLVE_FAILURE",
                  code: e,
                  error: t,
                }),
                t)
              );
            }
          },
          async fetchUserGiftCodesForSKU(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            n.default.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let i = await s.default.get({
                url: o.Endpoints.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              n.default.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: i.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (i) {
              n.default.dispatch({
                type: "GIFT_CODES_FETCH_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async createGiftCode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            n.default.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let l = await s.default.post({
                url: o.Endpoints.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: i },
                oldFormErrors: !0,
              });
              return (
                n.default.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: l.body,
                }),
                l.body
              );
            } catch (i) {
              n.default.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            n.default.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await s.default.delete({
                url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                n.default.dispatch({
                  type: "GIFT_CODE_REVOKE_SUCCESS",
                  code: e,
                });
            } catch (t) {
              n.default.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            r.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER);
          },
          ...i("812495").default,
        };
    },
    812495: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          redeemGiftCode: function () {
            return d;
          },
          default: function () {
            return o;
          },
        });
      var s = i("872717"),
        n = i("913144"),
        l = i("448993"),
        a = i("745279"),
        r = i("49111");
      let u = Object.freeze({});
      async function d(e) {
        let { code: t, options: i = u, onRedeemed: d, onError: o } = e,
          { channelId: c = null, paymentSource: E = null } = i;
        n.default.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await s.default.post({
            url: r.Endpoints.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: c,
              payment_source_id: null == E ? void 0 : E.id,
              gateway_checkout_context: await (0,
              a.createGatewayCheckoutContext)(E),
            },
            oldFormErrors: !0,
          });
          return (
            n.default.dispatch({
              type: "GIFT_CODE_REDEEM_SUCCESS",
              code: t,
              entitlement: e.body,
            }),
            null == d || d(),
            { code: t, entitlement: e }
          );
        } catch (i) {
          let e = new l.BillingError(i);
          throw (
            (n.default.dispatch({
              type: "GIFT_CODE_REDEEM_FAILURE",
              code: t,
              error: e,
            }),
            null == o || o(e),
            e)
          );
        }
      }
      var o = { redeemGiftCode: d };
    },
    534438: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          StageInviteFooter: function () {
            return I;
          },
          default: function () {
            return g;
          },
        });
      var s = i("37983"),
        n = i("884691"),
        l = i("414456"),
        a = i.n(l),
        r = i("77078"),
        u = i("813006"),
        d = i("766274"),
        o = i("476263"),
        c = i("272339"),
        E = i("849467"),
        _ = i("228427"),
        f = i("713573"),
        C = i("258078"),
        h = i("587974"),
        S = i("782340"),
        m = i("674877");
      let p = e => {
          var t;
          let { speaker: i, guildId: n, isEmbed: l } = e,
            a = new d.default(i.user);
          return (0, s.jsxs)("div", {
            className: m.speaker,
            children: [
              (0, s.jsx)(r.Avatar, {
                src: a.getAvatarURL(n, l ? 16 : 24),
                size: l ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                "aria-label": "".concat(i.nick, "-avatar"),
                className: l ? null : m.avatar,
              }),
              (0, s.jsx)(C.default, {
                size: l ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                color: C.default.Colors.HEADER_SECONDARY,
                className: m.username,
                children:
                  null !== (t = i.nick) && void 0 !== t ? t : a.username,
              }),
            ],
          });
        },
        I = e => {
          let { guild: t, onlineCount: i } = e;
          if (null == t) return null;
          let n = new u.default(t),
            { name: l, description: a } = n;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(f.default, {
                muted: !0,
                uppercase: !0,
                className: m.alignStart,
                children: S.default.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, s.jsxs)("div", {
                className: m.guild,
                children: [
                  (0, s.jsx)(h.default, {
                    mask: h.default.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, s.jsx)(o.default, {
                      guild: n,
                      size: o.default.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: m.guildInfo,
                    children: [
                      (0, s.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        children: l,
                      }),
                      (0, s.jsxs)("div", {
                        className: m.speaker,
                        children: [
                          (0, s.jsx)("div", { className: m.dot }),
                          null != i && i > 0
                            ? (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children:
                                  S.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: i }
                                  ),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              null != a &&
                "" !== a &&
                (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  className: m.alignStart,
                  variant: "text-sm/normal",
                  children: a,
                }),
            ],
          });
        };
      var g = e => {
        var t;
        let {
            stageInstance: i,
            guild: l,
            isCard: d = !1,
            isEmbed: I = !1,
            onClick: g,
          } = e,
          R = n.useMemo(
            () =>
              null == l ? null : l instanceof u.default ? l : new u.default(l),
            [l]
          );
        if (null == i || null == R) return null;
        let { topic: T, speaker_count: A, participant_count: O } = i,
          v = null !== (t = i.members) && void 0 !== t ? t : [],
          N = I ? v.slice(0, 3) : v,
          L = A - N.length;
        return (
          I && (L += v.length - N.length),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: m.flex,
                children: [
                  (0, s.jsxs)("div", {
                    className: m.flex,
                    children: [
                      (0, s.jsx)(_.default, {
                        height: 24,
                        width: 24,
                        className: m.live,
                      }),
                      (0, s.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: a(m.label, m.live),
                        children: S.default.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: m.background,
                    children: [
                      (0, s.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: m.listeners,
                      }),
                      (0, s.jsx)(r.Heading, {
                        className: a(m.label, m.listeners),
                        variant: "heading-sm/semibold",
                        children: O,
                      }),
                    ],
                  }),
                ],
              }),
              I &&
                (0, s.jsxs)("div", {
                  className: a(m.guild, { [m.embed]: I }),
                  children: [
                    (0, s.jsx)(h.default, {
                      mask: h.default.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, s.jsx)(o.default, {
                        guild: R,
                        size: o.default.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, s.jsx)(r.Text, {
                      color: "header-secondary",
                      className: m.label,
                      variant: "text-sm/normal",
                      children: R.name,
                    }),
                  ],
                }),
              (0, s.jsx)(f.default, {
                size:
                  d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: a(m.header, { [m.embed]: I }),
                children: T,
              }),
              (0, s.jsxs)("div", {
                className: a(m.members, { [m.embed]: I }),
                children: [
                  N.length > 0 &&
                    (0, s.jsxs)("div", {
                      className: m.speakers,
                      children: [
                        N.map(e =>
                          (0, s.jsx)(
                            p,
                            { speaker: e, guildId: R.id, isEmbed: I },
                            e.user.id
                          )
                        ),
                        L > 0
                          ? (0, s.jsxs)("div", {
                              className: m.speaker,
                              children: [
                                (0, s.jsx)("div", {
                                  className: a(m.icon, { [m.embed]: I }),
                                  children: (0, s.jsx)(E.default, {
                                    height: I ? 12 : 14,
                                    className: m.listeners,
                                  }),
                                }),
                                (0, s.jsxs)(C.default, {
                                  size: I
                                    ? C.default.Sizes.SIZE_12
                                    : C.default.Sizes.SIZE_14,
                                  color: C.default.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    S.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: L }
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  I &&
                    (0, s.jsx)(r.Button, {
                      color: r.Button.Colors.GREEN,
                      onClick: g,
                      className: m.joinButton,
                      children: S.default.Messages.STAGE_CHANNEL_JOIN_BUTTON,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    644417: function (e, t, i) {
      "use strict";
      var s, n;
      i.r(t),
        i.d(t, {
          NameValidationState: function () {
            return s;
          },
        }),
        ((n = s || (s = {})).AVAILABLE = "AVAILABLE"),
        (n.ERROR = "ERROR"),
        (n.RATE_LIMIT = "RATE_LIMIT"),
        (n.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    415133: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getUserAvatarURLForPomelo: function () {
            return E;
          },
          getDefaultPomelo: function () {
            return _;
          },
          shouldSkipToEditUsername: function () {
            return S;
          },
          formatPomeloForEditing: function () {
            return m;
          },
          getMemberSince: function () {
            return p;
          },
          formatUsernameLiveCheckValidation: function () {
            return I;
          },
          getLocalizedForcedUUDate: function () {
            return g;
          },
        }),
        i("781738"),
        i("222007"),
        i("794252");
      var s = i("866227"),
        n = i.n(s),
        l = i("506838"),
        a = i("315102"),
        r = i("299039"),
        u = i("159885"),
        d = i("644417"),
        o = i("935583"),
        c = i("782340");
      function E(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return a.default.getUserAvatarURL(
          { id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" },
          t,
          80
        );
      }
      function _(e) {
        let t = (0, u.stripDiacritics)(e.username)
          .replace(o.dirtyChars, "")
          .replace(o.coalescePeriods, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let f = ["@", "#", ":"],
        C = [
          "```",
          "discord",
          "hypesquad",
          "system message",
          "system mesage",
          "sustem message",
          "sustem mesage",
          "clyde",
        ],
        h = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function S(e) {
        var t, i;
        let s = e.username.toLowerCase();
        if (
          ((t = s),
          (i = o.CONTROL_CHARACTERS_CODE),
          t
            .split("")
            .filter(e => !i.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of f) if (s.includes(e)) return !0;
        for (let e of h) if (s === e.toLowerCase()) return !0;
        for (let e of C) if (s.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function m(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function p(e) {
        let t = r.default.extractTimestamp(e);
        try {
          return n(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function I(e) {
        return (0, l.match)(e)
          .with({ rateLimited: !0 }, () => ({
            type: d.NameValidationState.RATE_LIMIT,
            message:
              c.default.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: l.P.not(l.P.nullish) }, e => {
            let { error: t } = e;
            return { type: d.NameValidationState.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: d.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: d.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: l.P.nullish }, () => ({
            type: d.NameValidationState.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function g(e) {
        let t = new Date(2024, 2, 4);
        return t.toLocaleDateString(e, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    },
    671484: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return s;
          },
        }),
        i("702976");
      var s,
        n = i("866227"),
        l = i.n(n),
        a = i("666038"),
        r = i("568734"),
        u = i("797647"),
        d = i("646718");
      let o = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      s = class e extends a.default {
        static createFromServer(t) {
          return new e({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? l(t.expires_at) : null,
            redeemed: t.redeemed,
            subscriptionPlanId:
              null != t.subscription_plan
                ? t.subscription_plan.id
                : t.subscription_plan_id,
            subscriptionPlan:
              null != t.subscription_plan
                ? u.default.createFromServer(t.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != t.entitlement_branches ? t.entitlement_branches : null,
            flags: null != t.flags ? t.flags : 0,
            giftStyle: t.gift_style,
            subscriptionTrial:
              null != t.subscription_trial
                ? {
                    id: t.subscription_trial.id,
                    interval: t.subscription_trial.interval,
                    intervalCount: t.subscription_trial.interval_count,
                    skuId: t.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != t.promotion
                ? {
                    id: t.promotion.id,
                    startDate: t.promotion.start_date,
                    endDate: t.promotion.end_date,
                    inboundHeaderText: t.promotion.inbound_header_text,
                    inboundBodyText: t.promotion.inbound_body_text,
                    inboundHelpCenterLink: t.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && l().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (
            (this.isSubscription &&
              d.PremiumSubscriptionSKUToPremiumType[this.skuId]) ||
            null
          );
        }
        get isSelfRedeemable() {
          return !(0, r.hasFlag)(this.flags, o.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, r.hasFlag)(
            this.flags,
            o.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      };
    },
    55411: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return U;
          },
        }),
        i("222007");
      var s = i("917351"),
        n = i.n(s),
        l = i("866227"),
        a = i.n(l),
        r = i("446674"),
        u = i("862337"),
        d = i("913144"),
        o = i("569272"),
        c = i("560208"),
        E = i("671484"),
        _ = i("659632"),
        f = i("49111");
      let C = {},
        h = {},
        S = [],
        m = [],
        p = [],
        I = new Set(),
        g = {},
        R = {},
        T = new Set();
      function A(e) {
        let t = E.default.createFromServer(e),
          i = t.code;
        if (null != h[i]) h[i] = h[i].merge(t);
        else if (((h[i] = t), null != t.expiresAt)) {
          let e = new u.Timeout();
          (C[i] = e),
            (function e(t) {
              let i = h[t];
              if (null == i || null == i.expiresAt) return;
              let s = i.expiresAt.valueOf() - a().valueOf();
              if (s <= 0) delete h[t], delete C[t], x.emitChange();
              else {
                let i = C[t];
                if (null == i) return;
                i.start(Math.min(2147483647, s), () => e(t));
              }
            })(i);
        }
      }
      function O(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !T.has(e.channel_id)) return !1;
        let i = (0, _.isGiftCodeEmbed)(e)
          ? (0, _.findGiftCodes)(
              (null == e ? void 0 : e.embeds) != null
                ? null == e
                  ? void 0
                  : e.embeds[0].url
                : void 0
            )
          : (0, _.findGiftCodes)(e.content);
        return (
          0 !== i.length &&
          (i.forEach(e => {
            !S.includes(e) &&
              !p.includes(e) &&
              (v({ code: e }),
              d.default.wait(() =>
                o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)
              ));
          }),
          !1)
        );
      }
      function v(e) {
        let { code: t } = e;
        !S.includes(t) && (S = [...S, t]);
      }
      function N(e) {
        let { message: t } = e;
        return O(t, !0);
      }
      function L(e) {
        let { channelId: t, messages: i } = e;
        T.add(t), i.forEach(e => O(e, !0));
      }
      function D(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => O(e));
      }
      class b extends r.default.Store {
        get(e) {
          let t = h[e];
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? R[e] : null;
        }
        getForGifterSKUAndPlan(e, t, i) {
          return n
            .values(h)
            .filter(
              s =>
                s.userId === e &&
                s.skuId === t &&
                (null == i || s.subscriptionPlanId === i) &&
                !s.isExpired()
            );
        }
        getIsResolving(e) {
          return S.includes(e);
        }
        getIsResolved(e) {
          return p.includes(e);
        }
        getIsAccepting(e) {
          return m.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return I.has((0, _.makeComboId)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return g[(0, _.makeComboId)(e, t)];
        }
        getResolvingCodes() {
          return S;
        }
        getResolvedCodes() {
          return p;
        }
        getAcceptingCodes() {
          return m;
        }
      }
      b.displayName = "GiftCodeStore";
      let x = new b(d.default, {
        CONNECTION_OPEN: function () {
          return T.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && T.add(t), !1;
        },
        GIFT_CODE_RESOLVE: v,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (S = S.filter(e => e !== t.code)),
            !p.includes(t.code) && (p = [...p, t.code]),
            A(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (S = S.filter(e => e !== t)), !p.includes(t) && (p = [...p, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
          let { code: t } = e;
          !m.includes(t) && (m = [...m, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
          let { code: t } = e;
          m = m.filter(e => e !== t);
          let i = h[t];
          null != i && (h[t] = i.merge({ redeemed: !0, uses: i.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
          let { code: t, error: i } = e;
          m = m.filter(e => e !== t);
          let s = h[t];
          if (((R[t] = i), null != s))
            switch (i.code) {
              case f.AbortCodes.UNKNOWN_GIFT_CODE:
                h[t] = s.set("revoked", !0);
                break;
              case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                h[t] = s.set("uses", s.maxUses);
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          delete h[t];
          let i = C[t];
          null != i && (i.stop(), delete C[t]),
            !p.includes(t) && (p = [...p, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          A(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: i } = e;
          I.add((0, _.makeComboId)(t, i));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: i, subscriptionPlanId: s } = e;
          t.forEach(A);
          let n = (0, _.makeComboId)(i, s);
          (g[n] = Date.now()), I.delete(n);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: i } = e;
          I.delete((0, _.makeComboId)(t, i));
        },
        MESSAGE_CREATE: N,
        MESSAGE_UPDATE: N,
        LOCAL_MESSAGES_LOADED: L,
        LOAD_MESSAGES_SUCCESS: L,
        LOAD_MESSAGES_AROUND_SUCCESS: L,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach(e => O(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach(e => O(e));
        },
        SEARCH_FINISH: function (e) {
          e.messages.forEach(e => {
            e.forEach(e => O(e));
          });
        },
        GIFT_CODE_UPDATE: function (e) {
          let { uses: t, code: i } = e,
            s = h[i];
          null != s && (h[i] = s.set("uses", Math.max(s.uses, t)));
        },
        GUILD_FEED_FETCH_SUCCESS: function (e) {
          let { data: t } = e;
          (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => O(e));
        },
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map(e => {
            let { first_message: t } = e;
            return null != t && O(t);
          });
        },
      });
      var U = x;
    },
    849467: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("469563"),
        l = i("696675"),
        a = i("75196"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: n = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: l,
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: l,
                  fill: n,
                }),
              ],
            });
          },
          l.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=56681.9561c071e9c95dc60410.js.map
