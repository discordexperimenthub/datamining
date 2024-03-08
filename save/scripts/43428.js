(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43428"],
  {
    766665: function (e, t, n) {
      var i = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && i
          ? i(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    445356: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c8718df1382ba878f1fc.svg";
    },
    460287: function (e, t, n) {
      "use strict";
      e.exports = n.p + "08e581a604e6635d1424.svg";
    },
    437140: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("70102");
      var i = n("759843"),
        r = n("627929"),
        l = n("913144"),
        s = n("81732"),
        a = n("282109"),
        o = n("34676"),
        u = n("840707"),
        c = n("519705"),
        d = n("49111"),
        f = n("397336"),
        h = {
          createChannel(e) {
            let {
              guildId: t,
              type: n,
              name: h,
              permissionOverwrites: E = [],
              bitrate: C,
              userLimit: v,
              parentId: p,
              skuId: _,
              branchId: S,
            } = e;
            l.default.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
            let g = { type: n, name: h, permission_overwrites: E };
            if (
              (null != C && C !== d.BITRATE_DEFAULT && (g.bitrate = C),
              null != v && v > 0 && (g.user_limit = v),
              null != p && (g.parent_id = p),
              n === d.ChannelTypes.GUILD_STORE)
            ) {
              if (null == _) throw Error("Unexpected missing SKU");
              (g.sku_id = _), (g.branch_id = S);
            }
            return u.default
              .post({
                url: d.Endpoints.GUILD_CHANNELS(t),
                body: g,
                oldFormErrors: !0,
                trackedActionData: {
                  event: i.NetworkActionNames.CHANNEL_CREATE,
                  properties: e => {
                    var t, n;
                    return (0, r.exact)({
                      is_private: E.length > 0,
                      channel_id:
                        null == e
                          ? void 0
                          : null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.id,
                      channel_type:
                        null == e
                          ? void 0
                          : null === (n = e.body) || void 0 === n
                            ? void 0
                            : n.type,
                    });
                  },
                },
              })
              .then(
                e => (
                  a.default.isOptInEnabled(t) &&
                    c.default.updateChannelOverrideSettings(
                      t,
                      e.body.id,
                      {
                        flags:
                          f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
                      },
                      o.NotificationLabels.OptedIn
                    ),
                  s.default.checkGuildTemplateDirty(t),
                  e
                ),
                e => {
                  throw (
                    (l.default.dispatch({
                      type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                      errors: e.body,
                    }),
                    e)
                  );
                }
              );
          },
          createRoleSubscriptionTemplateChannel: (e, t, n, l) =>
            u.default.post({
              url: d.Endpoints.GUILD_CHANNELS(e),
              body: { name: t, type: n, topic: l },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: e => {
                  var t, n;
                  return (0, r.exact)({
                    is_private: !0,
                    channel_id:
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.id,
                    channel_type:
                      null == e
                        ? void 0
                        : null === (n = e.body) || void 0 === n
                          ? void 0
                          : n.type,
                  });
                },
              },
            }),
        };
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return r;
          },
          updateCardInfo: function () {
            return l;
          },
          clearCardInfo: function () {
            return s;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return o;
          },
        });
      var i = n("913144");
      function r(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function l(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function s() {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function a(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        i.default.wait(() =>
          i.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    519705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("872717"),
        r = n("819855"),
        l = n("913144"),
        s = n("679428"),
        a = n("282109"),
        o = n("568734"),
        u = n("34676"),
        c = n("299039"),
        d = n("49111"),
        f = n("397336"),
        h = n("782340"),
        E = {
          open(e) {
            l.default.dispatch({
              type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
              guildId: e,
            });
          },
          close() {
            l.default.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
          },
          updateGuildNotificationSettings(e, t, n, i) {
            let r = (0, u.getCurrentGuildSettings)(e);
            s.default.saveUserGuildSettings(e, t),
              l.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, u.trackGuildNotificationSettingsUpdate)(e, t, r, n, i);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, i) {
            let r = c.default.keys(t.channel_overrides),
              a = (0, u.getCurrentGuildSettings)(e),
              o = (0, u.getManyCurrentChannelSettings)(e, r);
            s.default.saveUserGuildSettings(e, t),
              l.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, u.trackGuildNotificationSettingsUpdate)(e, t, a, n, i),
              c.default.keys(t.channel_overrides).forEach(r => {
                let l = o.get(r);
                (0, u.trackChannelNotificationSettingsUpdate)(
                  e,
                  r,
                  t.channel_overrides[r],
                  l,
                  n,
                  i
                );
              });
          },
          updateGuildNotificationSettingsBulk(e, t, n) {
            let i = c.default.keys(e),
              r = (0, u.getManyCurrentGuildSettings)(i);
            s.default.saveUserGuildSettingsBulk(e),
              c.default.entries(e).forEach(e => {
                let [i, s] = e,
                  a = r.get(i);
                l.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: i,
                  settings: s,
                }),
                  (0, u.trackGuildNotificationSettingsUpdate)(i, s, a, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, i, a) {
            let o = (0, u.getCurrentChannelSettings)(e, t);
            s.default.saveUserGuildSettings(e, {
              channel_overrides: { [t]: n },
            }),
              l.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
              }),
              r.AccessibilityAnnouncer.announce(
                h.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED
              ),
              (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, o, i, a);
          },
          updateChannelOverrideSettingsBulk(e, t, n, i) {
            let r = c.default.keys(t),
              a = (0, u.getManyCurrentChannelSettings)(e, r);
            s.default.saveUserGuildSettings(e, { channel_overrides: t }),
              l.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              c.default
                .keys(t)
                .forEach(r =>
                  (0, u.trackChannelNotificationSettingsUpdate)(
                    e,
                    r,
                    t[r],
                    a.get(r),
                    n,
                    i
                  )
                );
          },
          setForumThreadsCreated(e, t) {
            let n = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
              i = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
              r = a.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { flags: (r & ~i) | n },
              u.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = a.default.accountNotificationSettings.flags,
              r = (0, o.setFlag)(n, e, t);
            await i.default.patch({
              url: d.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
              body: { flags: r },
            }),
              await l.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: r },
              });
          },
        };
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return r;
          },
        });
      var i = n("913144");
      function r() {
        i.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("76527");
      n.es(i, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("506070");
      n.es(i, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("962821");
      n.es(i, t);
    },
    704822: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("611013");
      n.es(i, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("632874");
      n.es(i, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("782542");
      n.es(i, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("618807");
      n.es(i, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("28289");
      n.es(i, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("882039");
      n.es(i, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var i = n("884691");
      function r(e) {
        let [t, n] = (0, i.useState)(!1),
          r = (0, i.useRef)(e.current);
        return (
          (0, i.useEffect)(() => {
            r.current = e.current;
          }, [e]),
          (0, i.useEffect)(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => n(!0),
              i = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", i),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", i);
              }
            );
          }, [r]),
          t
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("446674"),
        r = n("76393");
      function l() {
        return (0, i.useStateFromStores)(
          [r.default],
          () =>
            null != r.default.getRemoteSessionId() ||
            null != r.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return E;
          },
          canGuildUseRoleIcons: function () {
            return C;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
        l = n("315102"),
        s = n("773336"),
        a = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, s.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: h(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let s = l.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(s, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        E = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        C = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(a.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return s;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var i = n("316693"),
        r = n("923510"),
        l = n("49111");
      let s = l.Permissions.VIEW_CHANNEL,
        a = i.default.combine(s, l.Permissions.CONNECT),
        o = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    507453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("41543");
      function a(e) {
        let { className: t } = e;
        return (0, i.jsx)("div", { className: l(s.image, t) });
      }
    },
    95045: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          renderAutomodMessageMarkup: function () {
            return c;
          },
        }),
        n("222007"),
        n("781738"),
        n("355025");
      var i = n("312016"),
        r = n("367376"),
        l = n("240873"),
        s = n("49111");
      let a = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.GIFV]),
        o = new Set([
          "strong",
          "em",
          "u",
          "text",
          "inlineCode",
          "s",
          "spoiler",
        ]);
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.formatInline ? r.default.parseInlineReply : r.default.parse;
        return (function (e, t, n) {
          var r, s;
          let {
              toAST: u = !1,
              hideSimpleEmbedContent: c = !0,
              formatInline: h = !1,
              postProcessor: E,
            } = n,
            C = !1;
          let v = e(
            t.content,
            !0,
            ((r = t),
            (s = n),
            {
              allowLinks: null != r.webhookId || !!s.allowLinks,
              allowEmojiLinks: null != r.webhookId,
              channelId: r.channel_id,
              messageId: r.id,
              mentionChannels: r.mentionChannels,
              isInteracting: !!s.isInteracting,
              formatInline: !!s.formatInline,
              noStyleAndInteraction: !!s.noStyleAndInteraction,
              allowHeading: !!s.allowHeading,
              allowList: !!s.allowList,
              previewLinkTarget: !!s.previewLinkTarget,
              disableAnimatedEmoji: !!s.disableAnimatedEmoji,
              disableAutoBlockNewlines: !0,
              muted: !1,
            }),
            (e, n) => (
              !Array.isArray(e) && (e = [e]),
              c &&
                (e = (function (e, t) {
                  if (1 !== e.length || 1 !== t.length) return e;
                  let n = e[0],
                    i = t[0];
                  return ("link" === n.type || "attachmentLink" === n.type) &&
                    a.has(i.type) &&
                    (0, l.isEmbedInline)(i)
                    ? []
                    : e;
                })(e, t.embeds)),
              !h &&
                (e = (function (e, t) {
                  return t
                    ? d(e)
                    : ("paragraph" === e[0].type &&
                        e[0].content instanceof Array &&
                        (e[0].content = d(e[0].content)),
                      e);
                })(e, n)),
              (C = (function (e, t) {
                return t
                  ? f(e)
                  : "paragraph" === e[0].type &&
                      e[0].content instanceof Array &&
                      f(e[0].content);
              })(
                (e = (function (e) {
                  let t = e.some(e => "link" !== e.type || !1);
                  return e.filter(e => {
                    let n = "link" === e.type,
                      r = (0, i.parseQuestsEmbedCode)(e.target);
                    return !(n && null != r && !t);
                  });
                })(e)),
                n
              )),
              h &&
                (e = (function e(t) {
                  return (
                    t.forEach(t => {
                      o.has(t.type) &&
                        null != t.content &&
                        (Array.isArray(t.content)
                          ? e(t.content)
                          : (t.content = t.content.replace(/\n/g, " ")));
                    }),
                    t
                  );
                })(e)),
              null != E && (e = E(e, n)),
              e
            )
          );
          return { hasSpoilerEmbeds: C, content: v };
        })(n, e, t);
      }
      function c(e, t, n) {
        var i;
        return (
          (i = r.default.parseAutoModerationSystemMessage),
          i(
            e,
            !0,
            {
              allowLinks: !1,
              allowEmojiLinks: !1,
              mentionChannels: [],
              isInteracting: !1,
              formatInline: !1,
              noStyleAndInteraction: !1,
              allowHeading: !1,
              allowList: !1,
              disableAutoBlockNewlines: !0,
              highlightWord: t,
              disableAnimatedEmoji: !1,
              channelId: n,
              muted: !1,
            },
            e => (!Array.isArray(e) && (e = [e]), e)
          )
        );
      }
      function d(e) {
        let t = e.some(
          e =>
            "emoji" !== e.type &&
            "customEmoji" !== e.type &&
            "soundboard" !== e.type &&
            ("string" != typeof e.content || "" !== e.content.trim()) &&
            !0
        );
        if (t) return e;
        let n = 0;
        return (e.forEach(e => {
          if (
            (("emoji" === e.type ||
              "customEmoji" === e.type ||
              "soundboard" === e.type) &&
              (n += 1),
            n > 30)
          )
            return !1;
        }),
        n > 30)
          ? e
          : (e.forEach(e => {
              e.jumboable = !0;
            }),
            e);
      }
      function f(e) {
        return e.some(
          e =>
            "spoiler" === e.type &&
            Array.isArray(e.content) &&
            e.content.some(
              e => "link" === e.type || "attachmentLink" === e.type
            )
        );
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("748820"),
        l = n("77078"),
        s = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");
      function C(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: C,
            onClose: v,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: S,
            analyticsObject: g,
            analyticsLocation: m,
            analyticsSourceLocation: N,
            isGift: A = !1,
            giftMessage: T,
            subscriptionTier: I,
            trialId: R,
            postSuccessGuild: L,
            openInvoiceId: y,
            applicationId: M,
            referralTrialOfferId: w,
            giftRecipient: O,
            returnRef: P,
            subscription: b,
          } = null != e ? e : {},
          x = !1,
          U = (0, r.v4)(),
          D = u.default.getCurrentUser(),
          G = (0, f.isPremiumExactly)(D, E.PremiumTypes.TIER_2);
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...l } = n;
              return (0, i.jsx)(e, {
                ...l,
                loadId: U,
                subscriptionTier: I,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(I),
                isGift: A,
                giftMessage: T,
                giftRecipient: O,
                initialPlanId: t,
                followupSKUInfo: C,
                onClose: (e, t) => {
                  r(),
                    null == v || v(e),
                    e &&
                      (null == _ || _(),
                      !A &&
                        null != t &&
                        t === E.PremiumSubscriptionSKUs.TIER_2 &&
                        !G &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (x = !0),
                    null == p || p(),
                    !A && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: _,
                analyticsLocations: S,
                analyticsObject: g,
                analyticsLocation: m,
                analyticsSourceLocation: N,
                trialId: R,
                postSuccessGuild: L,
                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: y,
                applicationId: M,
                referralTrialOfferId: w,
                returnRef: P,
                subscription: b,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !x &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: U,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != m ? m : g,
                  source: N,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: A,
                  eligible_for_trial: null != R,
                  application_id: M,
                  location_stack: S,
                }),
                (0, s.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == v || v(x),
                x && (null == _ || _());
            },
          }
        );
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return E;
          },
          getManageResourcePermissions: function () {
            return C;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
        l = n("446674"),
        s = n("813006");
      n("923959");
      var a = n("957255"),
        o = n("697218");
      n("991170");
      var u = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, i) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
          if ("userId" in e) return i && null != t && e.userId === t.id;
          if ("user" in e) {
            var r;
            return (
              i &&
              null != t &&
              (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              r.default.combine(t, c.Permissions.CREATE_EVENTS),
              r.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        E = e => {
          let [t, n] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [r, u, E, C] = (0, l.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            v = (0, l.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            p = i.useCallback(e => f(e, v, u, r), [r, u, v]),
            _ = i.useCallback(e => f(e, v, C, E), [C, E, v]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: p,
                canManageGuildEvent: _,
              };
        },
        C = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [i, r] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            E = t.can(i, e),
            C = t.can(r, e),
            v = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: e => f(e, v, u, l),
                canManageGuildEvent: e => f(e, v, C, E),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return r;
          },
        });
      var i = n("913144");
      let r = e => {
        i.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("884691"),
        r = n("79112"),
        l = n("685665"),
        s = n("929423");
      n("424562");
      var a = n("49111"),
        o = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, l.default)(),
          h = (0, i.useCallback)(() => {
            null != t && (0, s.initGuildIdentitySettings)(t, null != c ? c : f),
              r.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: u,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, u, c, d, f]);
        return h;
      }
    },
    178225: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isGuildEligibleForStageChannels: function () {
            return s;
          },
          useGuildEligibleForStageChannels: function () {
            return a;
          },
        }),
        n("222007");
      var i = n("446674"),
        r = n("305961"),
        l = n("49111");
      function s(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.default];
        return !!(null === (t = n.getGuild(e)) || void 0 === t
          ? void 0
          : t.hasFeature(l.GuildFeatures.COMMUNITY));
      }
      function a(e) {
        return (0, i.useStateFromStores)([r.default], () => s(e, [r.default]), [
          e,
        ]);
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return p;
          },
          useCanStartPublicThread: function () {
            return _;
          },
          computeCanStartPublicThread: function () {
            return S;
          },
          useCanStartPrivateThread: function () {
            return g;
          },
          useCanStartThread: function () {
            return m;
          },
          useCanViewThreadForMessage: function () {
            return A;
          },
          useHasActiveThreads: function () {
            return T;
          },
          useCanManageThread: function () {
            return I;
          },
          useCanUnarchiveThread: function () {
            return y;
          },
          canUnarchiveThread: function () {
            return M;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return w;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return O;
          },
          computeIsReadOnlyThread: function () {
            return P;
          },
          useIsThreadModerator: function () {
            return x;
          },
          useCanJoinThreadVoice: function () {
            return U;
          },
          useIsNonModInLockedThread: function () {
            return D;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        l = n("316693"),
        s = n("446674"),
        a = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        C = n("401690"),
        v = n("49111");
      let p = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function _(e, t) {
        let n = (0, s.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? v.Permissions.SEND_MESSAGES
              : l.default.combine(
                  v.Permissions.CREATE_PUBLIC_THREADS,
                  v.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return N(n, e, t);
      }
      function S(e, t) {
        let n = e.isForumLikeChannel()
            ? v.Permissions.SEND_MESSAGES
            : l.default.combine(
                v.Permissions.CREATE_PUBLIC_THREADS,
                v.Permissions.READ_MESSAGE_HISTORY
              ),
          i = h.default.can(n, e);
        return N(i, e, t);
      }
      function g(e) {
        let t = (0, s.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              l.default.combine(v.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === v.ChannelTypes.GUILD_TEXT && N(t, e);
      }
      function m(e) {
        let t = _(e),
          n = g(e);
        return t || n;
      }
      function N(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(v.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function A(e) {
        let t = (0, s.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => h.default.can(v.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(v.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function T(e) {
        return (0, s.useStateFromStoresObject)([C.default, h.default], () => {
          let t = C.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = C.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = C.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            l = r(n).some(e =>
              h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = r(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = r(i).some(e => h.default.can(v.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: l || s || a,
            hasMoreActiveThreads: a || s,
          };
        });
      }
      function I(e) {
        let t = (0, s.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(v.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function R(e, t) {
        return null != e && t.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function L(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function y(e) {
        let t = (0, s.useStateFromStores)([h.default], () => R(e, h.default)),
          n = x(e);
        return L(e, t, n);
      }
      function M(e) {
        let t = R(e, h.default),
          n = (function (e) {
            return b(e, h.default);
          })(e);
        return L(e, t, n);
      }
      function w(e) {
        var t;
        let n = (0, s.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function O(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function P(e) {
        let t = h.default.can(v.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function b(e, t) {
        return null != e && t.can(v.Permissions.MANAGE_THREADS, e);
      }
      function x(e) {
        return (0, s.useStateFromStores)([h.default], () => b(e, h.default));
      }
      function U(e) {
        let t = (0, o.default)(),
          n = (0, s.useStateFromStores)([h.default], () =>
            h.default.can(v.Permissions.CONNECT, e)
          ),
          i = w(e),
          r = p.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function D(e) {
        let t = x(e);
        return e.isLockedThread() && !t;
      }
    },
    679428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var i = n("872717"),
        r = n("689988"),
        l = n("870691"),
        s = n("42203"),
        a = n("718517"),
        o = n("49111");
      let u = {},
        c = 0,
        d = 15 * a.default.Millis.SECOND;
      function f() {
        u = { ...l.default.getCollapsedCategories() };
      }
      function h() {
        !__OVERLAY__ && (clearTimeout(c), (c = setTimeout(() => C({}), d)));
      }
      async function E(e, t) {
        null == e || e === o.ME
          ? await i.default.patch({
              url: o.Endpoints.USER_GUILD_SETTINGS(o.ME),
              body: t,
            })
          : await C(null != t ? { [null != e ? e : o.ME]: t } : {});
      }
      async function C(e) {
        clearTimeout(c);
        let t = 0 !== Object.keys(e).length,
          n = l.default.getCollapsedCategories(),
          r = (function () {
            let e = {},
              t = l.default.getCollapsedCategories();
            for (let n in t) t[n] !== u[n] && (e[n] = !0);
            for (let n in u) t[n] !== u[n] && (e[n] = !0);
            return e;
          })();
        for (let i in r) {
          let r = s.default.getChannel(i);
          null != r &&
            null != r.guild_id &&
            (!(r.guild_id in e) && (e[r.guild_id] = {}),
            null == e[r.guild_id].channel_overrides &&
              (e[r.guild_id].channel_overrides = {}),
            (e[r.guild_id].channel_overrides[r.id] = {
              ...e[r.guild_id].channel_overrides[r.id],
              collapsed: r.id in n,
            }),
            (t = !0));
        }
        return t
          ? ((u = { ...n }),
            delete e[o.FAVORITES],
            (
              await i.default.patch({
                url: o.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function v() {
        u = { ...l.default.getCollapsedCategories() };
      }
      class p extends r.default {
        constructor(...e) {
          super(...e),
            (this.actions = {
              CATEGORY_COLLAPSE: h,
              CATEGORY_EXPAND: h,
              CATEGORY_COLLAPSE_ALL: h,
              CATEGORY_EXPAND_ALL: h,
              POST_CONNECTION_OPEN: f,
              USER_GUILD_SETTINGS_FULL_UPDATE: v,
            }),
            (this.saveUserGuildSettings = E),
            (this.saveUserGuildSettingsBulk = C);
        }
      }
      var _ = new p();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var i = n("446674"),
        r = n("913144"),
        l = n("449008"),
        s = n("42203"),
        a = n("341542"),
        o = n("923959"),
        u = n("49111");
      let c = {},
        d = 0;
      function f() {
        d += 1;
      }
      function h(e) {
        if (null == c[e]) return !1;
        delete c[e];
      }
      class E extends i.default.PersistedStore {
        initialize(e) {
          this.waitFor(s.default, a.default),
            this.removeChangeListener(f),
            this.addChangeListener(f),
            (c = null != e ? e : {});
        }
        getState() {
          return c;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!c[e] && c[e];
        }
        getCollapsedCategories() {
          return c;
        }
        get version() {
          return d;
        }
      }
      (E.displayName = "CategoryCollapseStore"),
        (E.persistKey = "collapsedCategories");
      var C = new E(r.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (c = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (c[e.channel_id] = !0) : delete c[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
          for (let e in c) {
            let t = s.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete c[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (c[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (c[t]) return !1;
          c[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return h(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (c[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete c[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return h(t);
        },
      });
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        a = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = r.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(u.flowerStarContainer, l),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(o.default, { ...d, className: s(c, u.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(u.childContainer, {
                [u.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return r;
          },
          default: function () {
            return E;
          },
        });
      var i,
        r,
        l = n("37983");
      n("884691");
      var s = n("414456"),
        a = n.n(s),
        o = n("77078"),
        u = n("36694"),
        c = n("381546"),
        d = n("68238"),
        f = n("423487"),
        h = n("950038");
      ((i = r || (r = {}))[(i.WARNING = 0)] = "WARNING"),
        (i[(i.INFO = 1)] = "INFO"),
        (i[(i.ERROR = 2)] = "ERROR"),
        (i[(i.POSITIVE = 3)] = "POSITIVE");
      var E = function (e) {
        let {
            children: t,
            messageType: n,
            className: i,
            textColor: r = "text-normal",
            textVariant: s = "text-sm/medium",
          } = e,
          E = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return d.default;
              case 2:
                return c.default;
              case 3:
                return u.default;
            }
          })(n),
          C = (function (e) {
            switch (e) {
              case 0:
                return h.warning;
              case 1:
                return h.info;
              case 2:
                return h.error;
              case 3:
                return h.positive;
            }
          })(n);
        return (0, l.jsxs)("div", {
          className: a(h.container, C, i),
          children: [
            (0, l.jsx)("div", {
              className: h.iconDiv,
              children: (0, l.jsx)(E, { className: h.icon }),
            }),
            (0, l.jsx)(o.Text, {
              className: h.text,
              color: r,
              variant: s,
              children: t,
            }),
          ],
        });
      };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return r;
          },
          Shine: function () {
            return v;
          },
          default: function () {
            return _;
          },
        });
      var i,
        r,
        l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        o = n.n(a),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((i = r || (r = {})).DEFAULT = "default"), (i.SMALL = "small");
      let E = { default: h.shineDefault, small: h.shineSmall },
        C = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class v extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, l.jsx)(u.default.div, {
            ...i,
            className: o(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, l.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: E[t],
              children: (0, l.jsx)("div", { className: C[t] }),
            }),
          });
        }
      }
      v.defaultProps = { shineSize: "default" };
      let p = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: r,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: E,
            onlyShineOnHover: C,
            ...p
          } = e,
          _ = s.createRef(),
          S = (0, d.default)(_),
          g = !i && !r && !0 !== a && (!C || S);
        return (0, l.jsxs)(c.Button, {
          buttonRef: _,
          ...p,
          className: o(h.shinyButton, n),
          disabled: i,
          submitting: r,
          children: [
            t,
            g
              ? (0, l.jsx)(v, {
                  shinePaused: f,
                  className: o(
                    h.buttonShine,
                    C ? h.onlyShineOnHover : void 0,
                    E
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      p.ShineSizes = r;
      var _ = p;
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      function r(e) {
        let { size: t, horizontal: n = !1 } = e,
          r = n ? t : 1,
          l = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: r,
            minWidth: r,
            height: l,
            minHeight: l,
          },
        });
      }
      n("884691");
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return o;
          },
        });
      var i = n("995008"),
        r = n.n(i),
        l = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        a = () => (0, l.useLazyValue)(() => s()),
        o = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("384737"),
        a = n("448052"),
        o = n("748802"),
        u = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        E = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: r = 24,
              color: E = "currentColor",
              transition: C = f.transition,
              className: v,
              foreground: p,
              expanded: _,
              ...S
            } = e,
            { enabled: g } = (0, c.useRedesignIconContext)(),
            m = t;
          if ((!0 === _ ? (m = h.DOWN) : !1 === _ && (m = h.RIGHT), g)) {
            let e = {
              [h.UP]: u.ChevronSmallUpIcon,
              [h.DOWN]: s.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: o.ChevronSmallRightIcon,
            }[m];
            return (0, i.jsx)(e, {
              ...S,
              className: v,
              width: n,
              height: r,
              color: E,
              colorClass: p,
            });
          }
          return (0, i.jsx)("svg", {
            className: l(v, C, m),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(S),
            children: (0, i.jsx)("path", {
              className: p,
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
      E.Directions = h;
      var C = E;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("733154"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: l,
                fill: r,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          l.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("505088"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              backgroundColor: a,
              ...o
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, i.jsx)("path", {
                  fill: r,
                  className: l,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          l.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("469563"),
        s = n("163725"),
        a = n("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foregroundColor: s = r.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: s,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: l,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          s.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196"),
        l = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: l = "currentColor",
            foreground: s,
            ...a
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, r.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: s,
              fill: l,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function l(e) {
        let { width: t = 104, height: n = 80, ...l } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(l),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, i.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    178837: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("704822"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: l,
                d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
              }),
            });
          },
          l.KeyIcon,
          void 0,
          { size: 24 }
        );
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("424823"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: l,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          l.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("390300"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: l,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          l.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("287083"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: r = "currentColor",
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: r,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return s;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var i = n("281071"),
        r = n("773336"),
        l = n("50885");
      let s = (() => {
        if (r.isPlatformEmbedded) return null != l.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!s && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return a;
          },
        });
      var i = n("884691"),
        r = n("446674"),
        l = n("244201"),
        s = n("471671");
      function a() {
        let { windowId: e } = i.useContext(l.default);
        return (0, r.useStateFromStores)(
          [s.default],
          () => s.default.isFocused(e),
          [e]
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: a,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: a = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof s ? s : s.css,
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
            }),
          ],
        });
      };
    },
    611013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KeyIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M21.41 5.41A2 2 0 1 0 18.6 2.6l-7.75 7.74a.53.53 0 0 1-.58.11 6 6 0 1 0 3.3 3.28.51.51 0 0 1 .1-.55c.19-.19.5-.19.68 0l1.25 1.24a2 2 0 1 0 2.82-2.82l-1.23-1.24a.5.5 0 0 1 0-.7l.47-.47c.2-.2.5-.2.7 0l1.24 1.23A2 2 0 1 0 22.4 7.6l-1.23-1.24a.5.5 0 0 1 0-.7l.23-.24ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
            }),
          ],
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var i,
        r = n("817736"),
        l = n("118810");
      let s = { root: null, rootMargin: "0px", threshold: 0.5 };
      i = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, r.findDOMNode)(e);
          (0, l.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = s) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        r = n("748820"),
        l = n("157590");
      let s = (0, r.v4)(),
        a = new Map(),
        o = new Map();
      class u extends i.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = o.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, r.v4)())
            : (this.elementId = s);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(u, new l.default({ root: t, rootMargin: n, threshold: i }));
        }
      }
      u.defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var c = u;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return i.default;
          },
          VisibilitySensor: function () {
            return r.default;
          },
        }),
        n("6268");
      var i = n("157590"),
        r = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function i(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          i = window.getSelection(),
          r = document.createElement("textarea");
        (r.value = e),
          (r.contentEditable = "true"),
          (r.style.visibility = "none"),
          t.appendChild(r),
          n.selectNodeContents(r),
          null == i || i.removeAllRanges(),
          null == i || i.addRange(n),
          r.focus(),
          r.setSelectionRange(0, e.length);
        let l = document.execCommand("copy");
        return t.removeChild(r), l;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return i;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=5c8dbe999332d551673e.js.map
