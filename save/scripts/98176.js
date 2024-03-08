(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98176"],
  {
    569272: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("872717"),
        l = n("913144"),
        s = n("651057"),
        r = n("299285"),
        a = n("523086"),
        u = n("21526"),
        d = n("659632"),
        o = n("49111"),
        c = n("646718"),
        E = {
          resolveGiftCode: async function e(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            l.default.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
            try {
              let i = await (0, d.resolveGiftCode)(e, t, n);
              if (
                null != i.application_id &&
                i.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION
              ) {
                let e = r.default.getApplication(i.application_id);
                if (null == e)
                  try {
                    await s.default.fetchApplication(i.application_id);
                  } catch (e) {}
              }
              if (i.application_id === o.COLLECTIBLES_APPLICATION_ID)
                try {
                  await (0, u.fetchCollectiblesProduct)(i.sku_id);
                } catch (e) {}
              return (
                l.default.dispatch({
                  type: "GIFT_CODE_RESOLVE_SUCCESS",
                  giftCode: i,
                }),
                { giftCode: i }
              );
            } catch (t) {
              throw (
                (l.default.dispatch({
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
            l.default.dispatch({
              type: "GIFT_CODES_FETCH",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let n = await i.default.get({
                url: o.Endpoints.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
              });
              l.default.dispatch({
                type: "GIFT_CODES_FETCH_SUCCESS",
                giftCodes: n.body,
                skuId: e,
                subscriptionPlanId: t,
              });
            } catch (n) {
              l.default.dispatch({
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
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            l.default.dispatch({
              type: "GIFT_CODE_CREATE_START",
              skuId: e,
              subscriptionPlanId: t,
            });
            try {
              let s = await i.default.post({
                url: o.Endpoints.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
              });
              return (
                l.default.dispatch({
                  type: "GIFT_CODE_CREATE_SUCCESS",
                  giftCode: s.body,
                }),
                s.body
              );
            } catch (n) {
              l.default.dispatch({
                type: "GIFT_CODE_CREATE_FAILURE",
                skuId: e,
                subscriptionPlanId: t,
              });
            }
          },
          async revokeGiftCode(e) {
            l.default.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
            try {
              await i.default.delete({
                url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                oldFormErrors: !0,
              }),
                l.default.dispatch({
                  type: "GIFT_CODE_REVOKE_SUCCESS",
                  code: e,
                });
            } catch (t) {
              l.default.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
            }
          },
          openNativeGiftCodeModal(e) {
            a.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER);
          },
          ...n("812495").default,
        };
    },
    812495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          redeemGiftCode: function () {
            return d;
          },
          default: function () {
            return o;
          },
        });
      var i = n("872717"),
        l = n("913144"),
        s = n("448993"),
        r = n("745279"),
        a = n("49111");
      let u = Object.freeze({});
      async function d(e) {
        let { code: t, options: n = u, onRedeemed: d, onError: o } = e,
          { channelId: c = null, paymentSource: E = null } = n;
        l.default.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
        try {
          let e = await i.default.post({
            url: a.Endpoints.GIFT_CODE_REDEEM(t),
            body: {
              channel_id: c,
              payment_source_id: null == E ? void 0 : E.id,
              gateway_checkout_context: await (0,
              r.createGatewayCheckoutContext)(E),
            },
            oldFormErrors: !0,
          });
          return (
            l.default.dispatch({
              type: "GIFT_CODE_REDEEM_SUCCESS",
              code: t,
              entitlement: e.body,
            }),
            null == d || d(),
            { code: t, entitlement: e }
          );
        } catch (n) {
          let e = new s.BillingError(n);
          throw (
            (l.default.dispatch({
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
    534438: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageInviteFooter: function () {
            return I;
          },
          default: function () {
            return g;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        s = n("414456"),
        r = n.n(s),
        a = n("77078"),
        u = n("813006"),
        d = n("766274"),
        o = n("476263"),
        c = n("272339"),
        E = n("849467"),
        _ = n("228427"),
        f = n("713573"),
        h = n("258078"),
        S = n("587974"),
        m = n("782340"),
        C = n("674877");
      let p = e => {
          var t;
          let { speaker: n, guildId: l, isEmbed: s } = e,
            r = new d.default(n.user);
          return (0, i.jsxs)("div", {
            className: C.speaker,
            children: [
              (0, i.jsx)(a.Avatar, {
                src: r.getAvatarURL(l, s ? 16 : 24),
                size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: s ? null : C.avatar,
              }),
              (0, i.jsx)(h.default, {
                size: s ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                color: h.default.Colors.HEADER_SECONDARY,
                className: C.username,
                children:
                  null !== (t = n.nick) && void 0 !== t ? t : r.username,
              }),
            ],
          });
        },
        I = e => {
          let { guild: t, onlineCount: n } = e;
          if (null == t) return null;
          let l = new u.default(t),
            { name: s, description: r } = l;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(f.default, {
                muted: !0,
                uppercase: !0,
                className: C.alignStart,
                children: m.default.Messages.STAGE_INVITE_GUILD_HEADER,
              }),
              (0, i.jsxs)("div", {
                className: C.guild,
                children: [
                  (0, i.jsx)(S.default, {
                    mask: S.default.Masks.SQUIRCLE,
                    width: 40,
                    height: 40,
                    children: (0, i.jsx)(o.default, {
                      guild: l,
                      size: o.default.Sizes.MEDIUM,
                      active: !0,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: C.guildInfo,
                    children: [
                      (0, i.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: s,
                      }),
                      (0, i.jsxs)("div", {
                        className: C.speaker,
                        children: [
                          (0, i.jsx)("div", { className: C.dot }),
                          null != n && n > 0
                            ? (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children:
                                  m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: n }
                                  ),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              null != r &&
                "" !== r &&
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  className: C.alignStart,
                  variant: "text-sm/normal",
                  children: r,
                }),
            ],
          });
        };
      var g = e => {
        var t;
        let {
            stageInstance: n,
            guild: s,
            isCard: d = !1,
            isEmbed: I = !1,
            onClick: g,
          } = e,
          v = l.useMemo(
            () =>
              null == s ? null : s instanceof u.default ? s : new u.default(s),
            [s]
          );
        if (null == n || null == v) return null;
        let { topic: R, speaker_count: T, participant_count: A } = n,
          O = null !== (t = n.members) && void 0 !== t ? t : [],
          N = I ? O.slice(0, 3) : O,
          D = T - N.length;
        return (
          I && (D += O.length - N.length),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: C.flex,
                children: [
                  (0, i.jsxs)("div", {
                    className: C.flex,
                    children: [
                      (0, i.jsx)(_.default, {
                        height: 24,
                        width: 24,
                        className: C.live,
                      }),
                      (0, i.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: r(C.label, C.live),
                        children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: C.background,
                    children: [
                      (0, i.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: C.listeners,
                      }),
                      (0, i.jsx)(a.Heading, {
                        className: r(C.label, C.listeners),
                        variant: "heading-sm/semibold",
                        children: A,
                      }),
                    ],
                  }),
                ],
              }),
              I &&
                (0, i.jsxs)("div", {
                  className: r(C.guild, { [C.embed]: I }),
                  children: [
                    (0, i.jsx)(S.default, {
                      mask: S.default.Masks.SQUIRCLE,
                      width: 20,
                      height: 20,
                      children: (0, i.jsx)(o.default, {
                        guild: v,
                        size: o.default.Sizes.MINI,
                        active: !0,
                      }),
                    }),
                    (0, i.jsx)(a.Text, {
                      color: "header-secondary",
                      className: C.label,
                      variant: "text-sm/normal",
                      children: v.name,
                    }),
                  ],
                }),
              (0, i.jsx)(f.default, {
                size:
                  d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: r(C.header, { [C.embed]: I }),
                children: R,
              }),
              (0, i.jsxs)("div", {
                className: r(C.members, { [C.embed]: I }),
                children: [
                  N.length > 0 &&
                    (0, i.jsxs)("div", {
                      className: C.speakers,
                      children: [
                        N.map(e =>
                          (0, i.jsx)(
                            p,
                            { speaker: e, guildId: v.id, isEmbed: I },
                            e.user.id
                          )
                        ),
                        D > 0
                          ? (0, i.jsxs)("div", {
                              className: C.speaker,
                              children: [
                                (0, i.jsx)("div", {
                                  className: r(C.icon, { [C.embed]: I }),
                                  children: (0, i.jsx)(E.default, {
                                    height: I ? 12 : 14,
                                    className: C.listeners,
                                  }),
                                }),
                                (0, i.jsxs)(h.default, {
                                  size: I
                                    ? h.default.Sizes.SIZE_12
                                    : h.default.Sizes.SIZE_14,
                                  color: h.default.Colors.HEADER_SECONDARY,
                                  children: [
                                    "+",
                                    m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format(
                                      { count: D }
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  I &&
                    (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.GREEN,
                      onClick: g,
                      className: C.joinButton,
                      children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          getEventException: function () {
            return r;
          },
        });
      var i = n("446674"),
        l = n("398604");
      function s(e, t) {
        let n = (0, i.useStateFromStoresArray)([l.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = l.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return a(n, e);
      }
      function r(e, t) {
        var n, i;
        let s =
          null !==
            (i =
              null === (n = l.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== i
            ? i
            : [];
        return a(s, e);
      }
      function a(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n;
      }
    },
    466148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          getEventSchedule: function () {
            return o;
          },
        });
      var i = n("627445"),
        l = n.n(i),
        s = n("446674"),
        r = n("398604"),
        a = n("397680"),
        u = n("822516");
      function d(e, t, n) {
        var i;
        let d =
          null !==
            (i = (0, s.useStateFromStores)([r.default], () =>
              r.default.getGuildScheduledEvent(e)
            )) && void 0 !== i
            ? i
            : n;
        l(null != d, "Event must be defined"),
          (t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(d));
        let o = (0, a.default)(t, e);
        return c(d, o, t);
      }
      function o(e, t) {
        let n = (0, a.getEventException)(t, e.id);
        return c(e, n, t);
      }
      function c(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let i = (0, u.getBaseScheduleForRecurrence)(n, e),
          { startDate: l, endDate: s } = (0,
          u.getScheduleForRecurrenceWithException)(i, t);
        return {
          startTime: l.toDate(),
          endTime: null == s ? void 0 : s.toDate(),
        };
      }
    },
    644417: function (e, t, n) {
      "use strict";
      var i, l;
      n.r(t),
        n.d(t, {
          NameValidationState: function () {
            return i;
          },
        }),
        ((l = i || (i = {})).AVAILABLE = "AVAILABLE"),
        (l.ERROR = "ERROR"),
        (l.RATE_LIMIT = "RATE_LIMIT"),
        (l.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    415133: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getUserAvatarURLForPomelo: function () {
            return E;
          },
          getDefaultPomelo: function () {
            return _;
          },
          shouldSkipToEditUsername: function () {
            return m;
          },
          formatPomeloForEditing: function () {
            return C;
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
        n("781738"),
        n("222007"),
        n("794252");
      var i = n("866227"),
        l = n.n(i),
        s = n("506838"),
        r = n("315102"),
        a = n("299039"),
        u = n("159885"),
        d = n("644417"),
        o = n("935583"),
        c = n("782340");
      function E(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.getUserAvatarURL(
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
        h = [
          "```",
          "discord",
          "hypesquad",
          "system message",
          "system mesage",
          "sustem message",
          "sustem mesage",
          "clyde",
        ],
        S = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function m(e) {
        var t, n;
        let i = e.username.toLowerCase();
        if (
          ((t = i),
          (n = o.CONTROL_CHARACTERS_CODE),
          t
            .split("")
            .filter(e => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of f) if (i.includes(e)) return !0;
        for (let e of S) if (i === e.toLowerCase()) return !0;
        for (let e of h) if (i.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function C(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function p(e) {
        let t = a.default.extractTimestamp(e);
        try {
          return l(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function I(e) {
        return (0, s.match)(e)
          .with({ rateLimited: !0 }, () => ({
            type: d.NameValidationState.RATE_LIMIT,
            message:
              c.default.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: s.P.not(s.P.nullish) }, e => {
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
          .with({ error: s.P.nullish }, () => ({
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
    671484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("702976");
      var i,
        l = n("866227"),
        s = n.n(l),
        r = n("666038"),
        a = n("568734"),
        u = n("797647"),
        d = n("646718");
      let o = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      i = class e extends r.default {
        static createFromServer(t) {
          return new e({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? s(t.expires_at) : null,
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
          return null != e && s().isAfter(e);
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
          return !(0, a.hasFlag)(this.flags, o.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, a.hasFlag)(
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
    55411: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        }),
        n("222007");
      var i = n("917351"),
        l = n.n(i),
        s = n("866227"),
        r = n.n(s),
        a = n("446674"),
        u = n("862337"),
        d = n("913144"),
        o = n("569272"),
        c = n("560208"),
        E = n("671484"),
        _ = n("659632"),
        f = n("49111");
      let h = {},
        S = {},
        m = [],
        C = [],
        p = [],
        I = new Set(),
        g = {},
        v = {},
        R = new Set();
      function T(e) {
        let t = E.default.createFromServer(e),
          n = t.code;
        if (null != S[n]) S[n] = S[n].merge(t);
        else if (((S[n] = t), null != t.expiresAt)) {
          let e = new u.Timeout();
          (h[n] = e),
            (function e(t) {
              let n = S[t];
              if (null == n || null == n.expiresAt) return;
              let i = n.expiresAt.valueOf() - r().valueOf();
              if (i <= 0) delete S[t], delete h[t], b.emitChange();
              else {
                let n = h[t];
                if (null == n) return;
                n.start(Math.min(2147483647, i), () => e(t));
              }
            })(n);
        }
      }
      function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !R.has(e.channel_id)) return !1;
        let n = (0, _.isGiftCodeEmbed)(e)
          ? (0, _.findGiftCodes)(
              (null == e ? void 0 : e.embeds) != null
                ? null == e
                  ? void 0
                  : e.embeds[0].url
                : void 0
            )
          : (0, _.findGiftCodes)(e.content);
        return (
          0 !== n.length &&
          (n.forEach(e => {
            !m.includes(e) &&
              !p.includes(e) &&
              (O({ code: e }),
              d.default.wait(() =>
                o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)
              ));
          }),
          !1)
        );
      }
      function O(e) {
        let { code: t } = e;
        !m.includes(t) && (m = [...m, t]);
      }
      function N(e) {
        let { message: t } = e;
        return A(t, !0);
      }
      function D(e) {
        let { channelId: t, messages: n } = e;
        R.add(t), n.forEach(e => A(e, !0));
      }
      function L(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => A(e));
      }
      class x extends a.default.Store {
        get(e) {
          let t = S[e];
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? v[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return l
            .values(S)
            .filter(
              i =>
                i.userId === e &&
                i.skuId === t &&
                (null == n || i.subscriptionPlanId === n) &&
                !i.isExpired()
            );
        }
        getIsResolving(e) {
          return m.includes(e);
        }
        getIsResolved(e) {
          return p.includes(e);
        }
        getIsAccepting(e) {
          return C.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return I.has((0, _.makeComboId)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return g[(0, _.makeComboId)(e, t)];
        }
        getResolvingCodes() {
          return m;
        }
        getResolvedCodes() {
          return p;
        }
        getAcceptingCodes() {
          return C;
        }
      }
      x.displayName = "GiftCodeStore";
      let b = new x(d.default, {
        CONNECTION_OPEN: function () {
          return R.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && R.add(t), !1;
        },
        GIFT_CODE_RESOLVE: O,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          return (
            (m = m.filter(e => e !== t.code)),
            !p.includes(t.code) && (p = [...p, t.code]),
            T(t)
          );
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
          let { code: t } = e;
          (m = m.filter(e => e !== t)), !p.includes(t) && (p = [...p, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
          let { code: t } = e;
          !C.includes(t) && (C = [...C, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
          let { code: t } = e;
          C = C.filter(e => e !== t);
          let n = S[t];
          null != n && (S[t] = n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
          let { code: t, error: n } = e;
          C = C.filter(e => e !== t);
          let i = S[t];
          if (((v[t] = n), null != i))
            switch (n.code) {
              case f.AbortCodes.UNKNOWN_GIFT_CODE:
                S[t] = i.set("revoked", !0);
                break;
              case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                S[t] = i.set("uses", i.maxUses);
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
          let { code: t } = e;
          delete S[t];
          let n = h[t];
          null != n && (n.stop(), delete h[t]),
            !p.includes(t) && (p = [...p, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
          let { giftCode: t } = e;
          T(t);
        },
        GIFT_CODES_FETCH: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          I.add((0, _.makeComboId)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
          let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
          t.forEach(T);
          let l = (0, _.makeComboId)(n, i);
          (g[l] = Date.now()), I.delete(l);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
          let { skuId: t, subscriptionPlanId: n } = e;
          I.delete((0, _.makeComboId)(t, n));
        },
        MESSAGE_CREATE: N,
        MESSAGE_UPDATE: N,
        LOCAL_MESSAGES_LOADED: D,
        LOAD_MESSAGES_SUCCESS: D,
        LOAD_MESSAGES_AROUND_SUCCESS: D,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach(e => A(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          t.forEach(e => A(e));
        },
        SEARCH_FINISH: function (e) {
          e.messages.forEach(e => {
            e.forEach(e => A(e));
          });
        },
        GIFT_CODE_UPDATE: function (e) {
          let { uses: t, code: n } = e,
            i = S[n];
          null != i && (S[n] = i.set("uses", Math.max(i.uses, t)));
        },
        GUILD_FEED_FETCH_SUCCESS: function (e) {
          let { data: t } = e;
          (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e));
        },
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          Object.values(t).map(e => {
            let { first_message: t } = e;
            return null != t && A(t);
          });
        },
      });
      var F = b;
    },
    849467: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("696675"),
        r = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: s,
                  fill: l,
                }),
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: s,
                  fill: l,
                }),
              ],
            });
          },
          s.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=98176.7c168addfd82f2b68f8e.js.map
