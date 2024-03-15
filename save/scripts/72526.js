(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72526"],
  {
    437140: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("70102");
      var i = n("759843"),
        r = n("627929"),
        l = n("913144"),
        s = n("81732"),
        u = n("282109"),
        o = n("34676"),
        a = n("840707"),
        d = n("519705"),
        c = n("49111"),
        f = n("397336"),
        S = {
          createChannel(e) {
            let {
              guildId: t,
              type: n,
              name: S,
              permissionOverwrites: E = [],
              bitrate: h,
              userLimit: _,
              parentId: g,
              skuId: p,
              branchId: C,
            } = e;
            l.default.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
            let I = { type: n, name: S, permission_overwrites: E };
            if (
              (null != h && h !== c.BITRATE_DEFAULT && (I.bitrate = h),
              null != _ && _ > 0 && (I.user_limit = _),
              null != g && (I.parent_id = g),
              n === c.ChannelTypes.GUILD_STORE)
            ) {
              if (null == p) throw Error("Unexpected missing SKU");
              (I.sku_id = p), (I.branch_id = C);
            }
            return a.default
              .post({
                url: c.Endpoints.GUILD_CHANNELS(t),
                body: I,
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
                  u.default.isOptInEnabled(t) &&
                    d.default.updateChannelOverrideSettings(
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
            a.default.post({
              url: c.Endpoints.GUILD_CHANNELS(e),
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
    704426: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("733527");
      n.es(i, t);
    },
    167338: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("291776");
      n.es(i, t);
    },
    772279: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("890439");
      n.es(i, t);
    },
    833222: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("583103");
      n.es(i, t);
    },
    851298: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("499779");
      n.es(i, t);
    },
    49097: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("14935");
      n.es(i, t);
    },
    533806: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("224701");
      n.es(i, t);
    },
    183137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getAssetCDNUrl: function () {
            return i;
          },
        });
      function i(e) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(e);
      }
    },
    763913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchPriceTiers: function () {
            return l;
          },
        });
      var i = n("913144"),
        r = n("56949");
      async function l(e, t) {
        i.default.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: e,
          priceTierType: t,
        });
        try {
          let n = await r.getPriceTiers(e, t);
          i.default.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
          });
        } catch (n) {
          i.default.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: e,
            priceTierType: t,
          });
        }
      }
    },
    874146: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildProductSortOptions: function () {
            return l;
          },
          ServerShopTabOrder: function () {
            return s;
          },
          getGuildProductSortOptionLabel: function () {
            return o;
          },
          DISPLAYED_SORT_OPTIONS: function () {
            return a;
          },
        });
      var i,
        r,
        l,
        s,
        u = n("782340");
      function o(e) {
        return {
          4: u.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
          2: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
          3: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
          1: u.default.Messages.GUILD_STORE_SORT_OPTION_NAME,
        }[e];
      }
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = s || (s = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let a = [4, 2, 3, 1];
    },
    741515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePriceTiers: function () {
            return o;
          },
          useMonetizationSettings: function () {
            return a;
          },
        });
      var i = n("884691"),
        r = n("446674"),
        l = n("837008"),
        s = n("763913"),
        u = n("670535");
      function o(e, t) {
        let n = (0, r.useStateFromStores)([u.default], () =>
            u.default.getPriceTiersForGuildAndType(e, t)
          ),
          l = (0, r.useStateFromStores)([u.default], () =>
            u.default.getPriceTiersFetchStateForGuildAndType(e, t)
          );
        return (
          i.useEffect(() => {
            l === u.FetchState.NOT_FETCHED && (0, s.fetchPriceTiers)(e, t);
          }, [e, l, t]),
          { loading: l === u.FetchState.FETCHING, priceTiers: n }
        );
      }
      function a(e) {
        let {
          fetchSubscriptionsSettings: t,
          loading: n,
          error: r,
        } = (0, l.useFetchSubscriptionsSettings)();
        i.useEffect(() => {
          t(e);
        }, [t, e]);
        let s = (0, l.useSubscriptionsSettings)(e);
        return {
          loaded: null != s && !n,
          subscriptionsSettings: s,
          loading: n,
          error: r,
        };
      }
    },
    56949: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getPriceTiers: function () {
            return s;
          },
        });
      var i = n("872717"),
        r = n("448993"),
        l = n("49111");
      let s = async (e, t) => {
        try {
          let n = await i.default.get({
            url: l.Endpoints.PRICE_TIERS,
            query: { price_tier_type: t, guild_id: e },
          });
          return n.body;
        } catch (e) {
          throw new r.APIError(e);
        }
      };
    },
    670535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FetchState: function () {
            return i;
          },
          default: function () {
            return d;
          },
        }),
        n("222007");
      var i,
        r,
        l = n("446674"),
        s = n("913144");
      let u = new Map(),
        o = new Map();
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      class a extends l.default.Store {
        getPriceTiersFetchStateForGuildAndType(e, t) {
          var n, i;
          return null !==
            (i = null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(e, t) {
          var n;
          return null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t);
        }
      }
      a.displayName = "CreatorMonetizationStore";
      var d = new a(s.default, {
        CONNECTION_OPEN: function () {
          u.clear(), o.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
          let { guildId: t, priceTierType: n } = e;
          !o.has(t) && o.set(t, new Map()), o.get(t).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
          let { guildId: t, priceTierType: n, priceTiers: i } = e;
          !o.has(t) && o.set(t, new Map()),
            o.get(t).set(n, 2),
            !u.has(t) && u.set(t, new Map()),
            u.get(t).set(n, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
          let { guildId: t, priceTierType: n } = e;
          !o.has(t) && o.set(t, new Map()), o.get(t).set(n, 2);
        },
      });
    },
    624180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return r;
          },
        });
      var i = n("866190");
      function r() {
        return (0, i.useIsWindowFocused)();
      }
    },
    801765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useListingThumbnailUrl: function () {
            return u;
          },
        });
      var i = n("884691"),
        r = n("845579"),
        l = n("271560"),
        s = n("624180");
      function u(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.GifAutoPlay.useSetting(),
          o = (0, s.useIsWindowFocused)(),
          a = n && o && u;
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, l.getAssetURL)(
              e.application_id,
              e.image_asset,
              t,
              a ? void 0 : "webp"
            );
        }, [t, e, a]);
      }
    },
    500307: function (e, t, n) {
      "use strict";
      var i, r, l, s;
      n.r(t),
        n.d(t, {
          GuildShopPreviewClickActions: function () {
            return i;
          },
          GuildShopCopyLinkLocations: function () {
            return r;
          },
          GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK: function () {
            return u;
          },
          GUILD_SHOP_CHANNEL_ROW_CLICK: function () {
            return o;
          },
          SERVER_SHOP_URL: function () {
            return a;
          },
          GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE: function () {
            return d;
          },
        }),
        ((l = i || (i = {})).GET_STARTED_CLICK = "get_started_click"),
        (l.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (l.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (l.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((s = r || (r = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (s.SHOP_HEADER_BUTTON = "shop_header_button");
      let u = "hasClickedGuildShopProductPreviewTab",
        o = "hasClickedGuildShopChannelRow",
        a = "https://discord.com/servershop",
        d = "1 GB";
    },
    955735: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        u = n("77078"),
        o = n("365544");
      function a(e) {
        let { alt: t, ...n } = e,
          [l, s] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: o.loader,
              }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => s(!1) }),
          ],
        });
      }
      function d(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: r,
          aspectRatio: l,
          className: u,
          imageChildClassName: d,
          ...c
        } = e;
        return (0, i.jsxs)("div", {
          className: s(o.container, u),
          children: [
            (0, i.jsx)("img", { src: n, alt: r, className: o.backgroundImage }),
            (0, i.jsx)("div", { className: o.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: o.imageContainer,
              children: (0, i.jsx)(a, {
                src: t,
                alt: r,
                className: s(o.image, d),
                ...c,
              }),
            }),
          ],
        });
      }
    },
    398654: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildIncidentsState: function () {
            return g;
          },
          shouldShowRaidNotificationNagbar: function () {
            return p;
          },
        }),
        n("222007");
      var i = n("316693"),
        r = n("65597"),
        l = n("374363"),
        s = n("305961"),
        u = n("957255"),
        o = n("162771"),
        a = n("697218"),
        d = n("991170"),
        c = n("299039"),
        f = n("610174"),
        S = n("311161"),
        E = n("54346"),
        h = n("421127"),
        _ = n("49111");
      function g(e) {
        let { showAlertMode: t } = (0, f.useGuildAlertModeEnabled)(
            null != e ? e : _.ZERO_STRING_GUILD_ID
          ),
          n = (0, r.default)([s.default, u.default], () => {
            let t = s.default.getGuild(e);
            if (null == t) return !1;
            let n = u.default.getGuildPermissions(t);
            return (
              null != n &&
              i.default.hasAny(n, h.IncidentAlertModeratorPermissions)
            );
          }),
          l = (0, r.default)([E.default], () =>
            null != e ? E.default.getGuildIncident(e) : null
          ),
          o = null != l && (0, S.isUnderLockdown)(l);
        return {
          shouldShowIncidentActions: n && t,
          incidentData: l,
          isUnderLockdown: o,
        };
      }
      function p() {
        var e;
        let t = o.default.getGuildId(),
          n = (function (e) {
            let t = a.default.getCurrentUser(),
              n = E.default.getIncidentsByGuild(),
              r = c.default.keys(n).map(e => s.default.getGuild(e));
            for (let l of r) {
              if (null == l) continue;
              let r = n[l.id];
              if (
                null == r ||
                (!(0, S.hasDetectedActivity)(r) &&
                  !(0, S.isUnderLockdown)(r)) ||
                ((0, S.isUnderLockdown)(r) && l.id !== e)
              )
                continue;
              let s = i.default.hasAny(
                d.default.computePermissions({
                  user: t,
                  context: l,
                  checkElevated: !1,
                }),
                h.IncidentAlertModeratorPermissions
              );
              if (s) return l.id;
            }
            return null;
          })(t),
          { showAlertMode: r } = (0, f.getGuildAlertModeEnabled)(
            null != n ? n : _.ZERO_STRING_GUILD_ID
          ),
          u =
            null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
          g = null != n ? u[n] : null,
          p = null != g && g.disableRaidAlertNag;
        return { show: null != n && r && !p, guildId: n };
      }
    },
    619259: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("808653");
      var i = n("446674"),
        r = n("913144"),
        l = n("979911"),
        s = n("692038"),
        u = n("42203"),
        o = n("377253"),
        a = n("299039"),
        d = n("600798"),
        c = n("201131"),
        f = n("49111");
      let S = {},
        E = 0,
        h = {},
        _ = {},
        g = (e, t) => {
          let n = (0, l.getFailedMessageId)(e),
            i = {
              id: n,
              isBlockedEdit: (0, l.isMessageDataEdit)(e),
              messageData: e,
              errorMessage: (0, d.getAutomodErrorMessage)(e, t),
            };
          (S[n] = i), E++;
        },
        p = e => S[e],
        C = e => {
          let t = S[e];
          null != t && delete S[e], E++;
        };
      function I(e) {
        let { messageData: t, errorResponseBody: n } = e;
        return g(t, n), !0;
      }
      function T(e) {
        var t;
        let { channelId: n, messages: i } = e,
          r =
            null === (t = u.default.getChannel(n)) || void 0 === t
              ? void 0
              : t.getGuildId();
        if (null == r) return !1;
        let l = _[r],
          s = i.reduce((e, t) => {
            var n;
            let i = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
            if (!i) return e;
            let r =
              null === (n = t.embeds) || void 0 === n
                ? void 0
                : n.some(e => {
                    let { type: t } = e;
                    return (
                      t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                    );
                  });
            return r
              ? null == e || -1 === a.default.compare(e, t.id)
                ? t.id
                : void 0
              : e;
          }, l);
        return null != s && _[r] !== s && ((_[r] = s), !0);
      }
      class m extends i.default.PersistedStore {
        initialize(e) {
          this.waitFor(o.default),
            null != e &&
              ((S = e.automodFailedMessages),
              (h = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: S,
            mentionRaidDetectionByGuild: h,
            lastIncidentAlertMessage: _,
          };
        }
        getMessage(e) {
          var t;
          return null == e
            ? null
            : null !== (t = p(e)) && void 0 !== t
              ? t
              : null;
        }
        getMessagesVersion() {
          return E;
        }
        getMentionRaidDetected(e) {
          var t;
          return null !== (t = h[e]) && void 0 !== t ? t : null;
        }
        getLastIncidentAlertMessage(e) {
          var t;
          return null !== (t = _[e]) && void 0 !== t ? t : null;
        }
      }
      (m.displayName = "GuildAutomodMessageStore"),
        (m.persistKey = "GuildAutomodMessages");
      var v = new m(r.default, {
        CONNECTION_OPEN: function (e) {
          return (S = {}), E++, !0;
        },
        LOAD_MESSAGES_SUCCESS: T,
        LOCAL_MESSAGES_LOADED: T,
        MESSAGE_CREATE: function (e) {
          let { guildId: t, message: n } = e;
          if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION)
            return !1;
          let i = (0, s.createMessageRecord)(n);
          return (
            !!(0, c.isAutomodMessageRecord)(i) &&
            !!(0, c.isAutomodNotification)(i) &&
            ((_[t] = i.id), !0)
          );
        },
        MESSAGE_SEND_FAILED_AUTOMOD: I,
        MESSAGE_EDIT_FAILED_AUTOMOD: I,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
          let { messageId: t } = e;
          return C(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
          let { response: t } = e;
          if (
            (null == t ? void 0 : t.body) == null ||
            t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED
          )
            return !1;
          let n = t.body.id;
          if (null == n) return !1;
          C(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
          let {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: i,
          } = e;
          return (
            (h[t] = {
              guildId: t,
              decisionId: n,
              suspiciousMentionActivityUntil: i,
            }),
            !0
          );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
          let { guildId: t } = e;
          return delete h[t], !0;
        },
      });
    },
    863921: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("931138"),
        u = n("206453"),
        o = n("49111"),
        a = n("666703");
      let d = {
          [o.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
          [o.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
          [o.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
          [o.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree,
        },
        c = {
          [o.BoostedGuildTiers.NONE]: a.iconTierNone,
          [o.BoostedGuildTiers.TIER_1]: a.iconTierOne,
          [o.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
          [o.BoostedGuildTiers.TIER_3]: a.iconTierThree,
        };
      function f(e) {
        let {
          premiumTier: t,
          iconBackgroundClassName: n,
          iconClassName: r,
          size: o,
        } = e;
        return (0, i.jsx)(s.default, {
          className: l(n, d[t]),
          size: o,
          children: (0, i.jsx)(u.default, {
            tier: t,
            className: l(r, a.boostedGuildIconGem, c[t]),
          }),
        });
      }
    },
    645266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          initializeMemberSafetyStore: function () {
            return c;
          },
          refreshMemberSafetyTimestamp: function () {
            return f;
          },
          updateMemberSafetyTablePagination: function () {
            return S;
          },
          updateSearchState: function () {
            return E;
          },
          goToMemberSafetyDashboard: function () {
            return h;
          },
          getMemberSupplemental: function () {
            return _;
          },
        });
      var i = n("913144"),
        r = n("592407"),
        l = n("393414"),
        s = n("305961"),
        u = n("466818"),
        o = n("835257"),
        a = n("49111"),
        d = n("724210");
      async function c(e) {
        await i.default.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: e,
        });
      }
      function f(e) {
        i.default.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: e,
        });
      }
      function S(e, t) {
        let { continuationToken: n, ...r } = t;
        i.default.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function E(e, t) {
        await i.default.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function h(e) {
        let t = (0, u.canAccessMemberSafetyPage)(e),
          n = s.default.getGuild(e);
        return (
          !!t &&
          null != n &&
          (n.hasFeature(a.GuildFeatures.COMMUNITY) ||
          n.hasFeature(
            a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY
          )
            ? ((0, l.transitionTo)(
                a.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)
              ),
              !0)
            : (r.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
        );
      }
      async function _(e, t) {
        let n = await (0, o.fetchMemberSupplemental)(e, t);
        return 0 === n.length
          ? []
          : (await i.default.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: e,
              memberSupplementals: n,
            }),
            n);
      }
    },
    757515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ROLE_FIELD_NAME: function () {
            return s;
          },
          describeUploadProgressError: function () {
            return u;
          },
          describeProductChangeValidation: function () {
            return o;
          },
          computeProductChanges: function () {
            return a;
          },
          getGuildProductListingUrl: function () {
            return d;
          },
        });
      var i = n("448993");
      n("957255");
      var r = n("49111"),
        l = n("782340");
      let s = "_role";
      function u(e) {
        if (!(e >= 0))
          switch (-e) {
            case r.AbortCodes.ENTITY_TOO_LARGE:
              return l.default.Messages.UPLOAD_ERROR_TOO_LARGE;
            case r.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return l.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
              return l.default.Messages.ERROR_GENERIC_TITLE;
            default:
              return l.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
                code: -e,
              });
          }
      }
      function o(e) {
        let { newRoleParams: t } = e;
        if (null != t && "" === t.name.trim()) {
          var n, r;
          return (
            (n = s),
            (r = l.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
            new i.APIError({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [n]: { _errors: [{ code: "", message: r }] } },
              },
            })
          );
        }
      }
      function a(e) {
        var t;
        let {
            guildProductListing: n,
            name: i,
            priceTier: r,
            description: l,
            image: s,
            imageName: u,
            isImageChanged: o,
            newRoleParams: a,
            hasUnsavedAttachmentChanges: d,
          } = e,
          c = {};
        (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (c.name = i),
          (null !== (t = null == n ? void 0 : n.description) && void 0 !== t
            ? t
            : "") !== l && (c.description = l),
          (null == n ? void 0 : n.price_tier) !== r &&
            null != r &&
            (c.priceTier = r),
          null != a && "" !== a.name.trim()
            ? (c.createNewRole = !0)
            : null === a && (c.unlinkRole = !0),
          s.startsWith("data:") &&
            (o || (null == n && (Object.keys(c).length > 0 || d))) &&
            ((c.image = s), (c.imageName = u));
        let f = Object.keys(c).length > 0 || d;
        return {
          changes: c,
          hasUnsavedChanges: f,
          canSaveForDraft: f,
          canSaveForPublished: f,
          canPublishOrUnpublish: !(null == n || f),
        };
      }
      function d(e, t) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Routes.GUILD_PRODUCT(e, t));
      }
    },
    727411: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openModal: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("307785");
      function s(e, t) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await n.el("48175").then(n.bind(n, "48175"));
            return n => (0, i.jsx)(r, { guildId: e, productId: t, ...n });
          },
          { modalKey: l.GUILD_PRODUCT_EDIT_MODAL_KEY }
        );
      }
    },
    739726: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildProductListingPopout: function () {
            return I;
          },
          default: function () {
            return T;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("77078"),
        u = n("272030"),
        o = n("801765"),
        a = n("191814"),
        d = n("195812"),
        c = n("83900"),
        f = n("663745"),
        S = n("153160"),
        E = n("928576"),
        h = n("516770"),
        _ = n("843455"),
        g = n("782340"),
        p = n("303903");
      function C(e) {
        let {
          showEditProduct: t,
          showUnpublishProduct: n,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: u,
          showReportProduct: o,
          onEditProduct: a,
          onUnpublishProduct: f,
          onDeleteProduct: S,
          onCopyLink: E,
          onTestDownload: h,
          onReportProduct: _,
          closePopout: C,
          onSelect: I,
        } = e;
        return (0, i.jsx)("div", {
          className: p.menuContainer,
          children: (0, i.jsxs)(s.Menu, {
            navId: "guild-product-context",
            onClose: C,
            "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: I,
            children: [
              (0, i.jsxs)(s.MenuGroup, {
                children: [
                  t &&
                    (0, i.jsx)(s.MenuItem, {
                      id: "guild-product-edit",
                      label: g.default.Messages.GUILD_PRODUCT_EDIT,
                      action: a,
                    }),
                  r &&
                    (0, i.jsx)(s.MenuItem, {
                      id: "guild-product-copy-link",
                      label: g.default.Messages.GUILD_PRODUCT_COPY_LINK,
                      icon: c.default,
                      action: E,
                    }),
                  l &&
                    (0, i.jsx)(s.MenuItem, {
                      id: "guild-product-test-download",
                      label: g.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                      icon: d.default,
                      action: h,
                    }),
                ],
              }),
              (0, i.jsxs)(s.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(s.MenuItem, {
                      id: "guild-product-unpublish",
                      label: g.default.Messages.GUILD_PRODUCT_UNPUBLISH,
                      action: f,
                    }),
                  u &&
                    (0, i.jsx)(s.MenuItem, {
                      id: "guild-product-delete",
                      label: g.default.Messages.GUILD_PRODUCT_DELETE,
                      color: "danger",
                      action: S,
                    }),
                ],
              }),
              (0, i.jsx)(s.MenuGroup, {
                children:
                  o &&
                  (0, i.jsx)(s.MenuItem, {
                    id: "guild-product-report",
                    label: g.default.Messages.GUILD_PRODUCT_REPORT,
                    color: "danger",
                    action: _,
                  }),
              }),
            ],
          }),
        });
      }
      function I(e) {
        let {
          product: t,
          guildId: n,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: o,
          showDeleteProduct: a,
          showReportProduct: d,
          onEditProduct: c,
          onUnpublishProduct: S,
          onDeleteProduct: E,
          onCopyProductLink: h,
          onTestDownload: _,
          onReportProduct: I,
        } = e;
        return (0, i.jsx)("div", {
          onClick: e => {
            e.stopPropagation();
          },
          children: (0, i.jsx)(s.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: s.Popout.Animation.FADE,
            renderPopout: e =>
              (0, i.jsx)(C, {
                ...e,
                guildId: n,
                productId: t.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: o,
                showTestDownload: u,
                showReportProduct: d,
                showDeleteProduct: a,
                onEditProduct: c,
                onUnpublishProduct: S,
                onDeleteProduct: E,
                onCopyLink: h,
                onTestDownload: _,
                onReportProduct: I,
              }),
            children: (e, n) => {
              let { isShown: r } = n;
              return (0, i.jsx)(s.Clickable, {
                ...e,
                "aria-label":
                  g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format(
                    { productName: t.name }
                  ),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: p.productActionMenuButton,
                children: (0, i.jsx)(f.default, {
                  className: p.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function T(e) {
        let {
            product: t,
            guildId: n,
            onEditProduct: r,
            onUnpublishProduct: d,
            onDeleteProduct: c,
            onCopyProductLink: f,
            onTestDownload: T,
            disabled: m = !1,
          } = e,
          v = (0, o.useListingThumbnailUrl)(t, 600),
          R =
            null !== t.price_tier
              ? (0, S.formatPrice)(t.price_tier, _.CurrencyCodes.USD)
              : void 0,
          N = (0, E.useProductType)(t);
        return (0, i.jsxs)(s.ClickableContainer, {
          tag: "article",
          className: l(p.productCardClickable, p.productCard, {
            [p.disabled]: m,
          }),
          onClick: m ? void 0 : r,
          onContextMenu: function (e) {
            (0, u.openContextMenuLazy)(e, () =>
              Promise.resolve(e =>
                (0, i.jsx)(C, {
                  ...e,
                  closePopout: u.closeContextMenu,
                  guildId: n,
                  productId: t.id,
                  showEditProduct: !0,
                  showUnpublishProduct: t.published,
                  showCopyLink: t.published,
                  showTestDownload: null != t.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: d,
                  onDeleteProduct: c,
                  onCopyLink: f,
                  onTestDownload: T,
                  onReportProduct: () => {},
                })
              )
            );
          },
          "aria-label": g.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format(
            { productName: t.name }
          ),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: v,
              className: p.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: p.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: p.productInfoContent,
                  children: [
                    (0, i.jsx)(s.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: p.productName,
                      children: t.name,
                    }),
                    (0, i.jsx)(a.default, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: p.productDetails,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: R,
                        }),
                        null != N
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: p.dotSeparator,
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: N,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(a.default, { size: 16 }),
                    t.published
                      ? (0, i.jsx)(h.PublishedBadge, {})
                      : (0, i.jsx)(h.DraftBadge, {}),
                  ],
                }),
                !m &&
                  (0, i.jsx)(I, {
                    product: t,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: d,
                    onDeleteProduct: c,
                    onCopyProductLink: f,
                    onTestDownload: T,
                    onReportProduct: () => {},
                  }),
              ],
            }),
          ],
        });
      }
    },
    516770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PublishedBadge: function () {
            return S;
          },
          DraftBadge: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("449918"),
        s = n("20606"),
        u = n("832132"),
        o = n("952479"),
        a = n("49111"),
        d = n("782340"),
        c = n("358329");
      function f(e) {
        let {
          label: t,
          backgroundColor: n = s.default.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: u,
        } = e;
        return (0, i.jsxs)("div", {
          className: c.badge,
          style: { backgroundColor: n },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: c.badgeText,
              children: t,
            }),
            (0, i.jsx)(l, {
              className: c.badgeIcon,
              color: null != u ? u : "currentColor",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function S() {
        return (0, i.jsx)(f, {
          label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
          backgroundColor: "#207B8D",
          icon: o.default,
        });
      }
      function E() {
        return (0, i.jsx)(f, {
          label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
          icon: u.default,
          iconColor: (0, l.getColor)(a.Color.PRIMARY_330),
        });
      }
    },
    257869: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGroupListingsFetchContext: function () {
            return d;
          },
          GroupListingsFetchContextProvider: function () {
            return c;
          },
        }),
        n("70102");
      var i = n("37983"),
        r = n("884691"),
        l = n("65597"),
        s = n("619443"),
        u = n("371358"),
        o = n("648825");
      let a = r.createContext(void 0);
      function d(e) {
        let t = r.useContext(a);
        if (null == t)
          throw Error(
            "".concat(
              null != e ? e : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider"
            )
          );
        let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
        return i(), n;
      }
      function c(e) {
        let {
            guildId: t,
            children: n,
            refetchOnMount: d,
            includeSoftDeleted: c,
            countryCode: f,
            dontFetchWhileTrue: S,
          } = e,
          E = (0, l.default)([s.default], () => s.default.isConnected()),
          h = (0, l.default)([o.default], () =>
            null != t
              ? o.default.getSubscriptionGroupListingsForGuildFetchState(t)
              : o.FetchState.FETCHED
          ),
          _ = r.useRef(d),
          g = r.useCallback(() => {
            if (null == t || !E || !0 === S) return;
            let e = o.default.getSubscriptionGroupListingsForGuildFetchState(t);
            (_.current || e === o.FetchState.NOT_FETCHED) &&
              ((_.current = !1),
              u.fetchAllSubscriptionListingsDataForGuild(t, {
                includeSoftDeleted: c,
                countryCode: f,
              }));
          }, [E, t, c, f, S]),
          p = r.useMemo(
            () => h === o.FetchState.FETCHED && !0 !== _.current,
            [h, _]
          );
        return (0, i.jsx)(a.Provider, {
          value: { listingsLoaded: p, fetchGroupListingsForGuild: g },
          children: n,
        });
      }
    },
    531034: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getJoinButtonLabels: function () {
            return l;
          },
          getRenewButtonLabels: function () {
            return s;
          },
          STICKERS: function () {
            return u;
          },
        });
      var i = n("161585"),
        r = n("782340");
      let l = () => [
          r.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          r.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        s = () => [
          r.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          r.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
        u = [
          {
            id: "781323471249604648",
            format_type: i.StickerFormat.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: i.StickerFormat.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: i.StickerFormat.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: i.StickerFormat.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: i.StickerFormat.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    843257: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleSubscriptionPurchaseSystemMessageFormattedContent:
            function () {
              return a;
            },
          getRoleSubscriptionPurchaseSystemMessageAstFormattedContent:
            function () {
              return d;
            },
          getRoleSubscriptionPurchaseSystemMessageContentMobile: function () {
            return S;
          },
          isEligibleForRoleSubscriptionPurchaseSystemMessageSettings:
            function () {
              return E;
            },
          trackRoleSubscriptionPurchaseMessageTierClick: function () {
            return h;
          },
          getRoleSubscriptionPurchaseSystemMessageEventProperties: function () {
            return _;
          },
        });
      var i = n("716241"),
        r = n("250666"),
        l = n("305961"),
        s = n("697218");
      n("299039"), n("531034");
      var u = n("49111"),
        o = n("782340");
      function a(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: s, formatParams: u } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return s.format(u);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: s, formatParams: u } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return s.astFormat(u);
      }
      function c(e, t) {
        var n, i;
        let r = l.default.getGuild(e),
          s =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0,
          u =
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i;
        return {
          guild: r,
          totalMonthsSubscribed: s,
          showWithDuration: s > 0,
          isRenewal: u,
        };
      }
      function f(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: s,
          } = e,
          {
            guild: u,
            totalMonthsSubscribed: a,
            showWithDuration: d,
            isRenewal: f,
          } = c(l, s);
        t = d
          ? f
            ? o.default.Messages
                .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
            : o.default.Messages
                .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
          : f
            ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
            : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN;
        let S = {
          username: n,
          usernameHook: i,
          guildName: null == u ? void 0 : u.name,
          handleGuildNameClick: r,
          tierName: null == s ? void 0 : s.tier_name,
          months: a,
        };
        return { content: t, formatParams: S };
      }
      function S(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = u.NOOP,
            roleSubscriptionOnClickHandler: r = u.NOOP,
            guildId: l,
            roleSubscriptionData: s,
          } = e,
          {
            guild: a,
            totalMonthsSubscribed: d,
            showWithDuration: f,
            isRenewal: S,
          } = c(l, s),
          E = {
            guildName: null == a ? void 0 : a.name,
            tierName: null == s ? void 0 : s.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (t = f
          ? S
            ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...E, months: d }
              )
            : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...E, months: d }
              )
          : S
            ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                E
              )
            : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                E
              ));
      }
      function E(e) {
        return (0, r.isCreatorMonetizationEnabledGuild)(e);
      }
      function h(e, t, n, r) {
        var l;
        i.default.trackWithMetadata(
          u.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (l = s.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: r,
          }
        );
      }
      function _(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = s.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    837008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSubscriptionListingsForGroup: function () {
            return S;
          },
          useSubscriptionListing: function () {
            return E;
          },
          useGroupListingsForGuild: function () {
            return h;
          },
          useSubscriptionListingsForGuild: function () {
            return _;
          },
          useFetchListingsForSubscriptions: function () {
            return g;
          },
          useDeleteSubscriptionListing: function () {
            return p;
          },
          useArchiveSubscriptionListing: function () {
            return C;
          },
          usePublishSubscriptionListing: function () {
            return I;
          },
          useSubscriptionsSettings: function () {
            return T;
          },
          useUpdateSubscriptionsSettings: function () {
            return m;
          },
          useFetchSubscriptionsSettings: function () {
            return v;
          },
          useSubscriptionTrial: function () {
            return R;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("884691"),
        r = n("446674"),
        l = n("162426"),
        s = n("619443");
      n("449008");
      var u = n("257869"),
        o = n("371358"),
        a = n("648825"),
        d = n("136185");
      let c = [],
        f = function (e) {
          let {
              refetchOnMount: t = !1,
              includeSoftDeleted: n = !0,
              countryCode: l,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            d = (0, r.useStateFromStores)([s.default], () =>
              s.default.isConnected()
            ),
            c = (0, r.useStateFromStores)([a.default], () =>
              null != e
                ? a.default.getSubscriptionGroupListingsForGuildFetchState(e)
                : a.FetchState.FETCHED
            ),
            f = i.useRef(t);
          return (
            i.useEffect(() => {
              if (null == e || !d || !0 === u) return;
              let i =
                a.default.getSubscriptionGroupListingsForGuildFetchState(e);
              (t || i === a.FetchState.NOT_FETCHED) &&
                ((f.current = !1),
                o.fetchAllSubscriptionListingsDataForGuild(e, {
                  includeSoftDeleted: n,
                  countryCode: l,
                }));
            }, [d, e, n, t, l, u]),
            { listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current }
          );
        },
        S = function (e) {
          let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.useStateFromStoresArray)(
            [a.default],
            () => {
              if (null == e) return [];
              let i = a.default.getSubscriptionGroupListing(e);
              if (null == i) return [];
              let r = [];
              for (let e of i.subscription_listings_ids) {
                let i = a.default.getSubscriptionListing(e);
                if (null != i && (!i.soft_deleted || !!t))
                  (i.published || n) && r.push(i);
              }
              return r;
            },
            [e, t, n]
          );
        },
        E = e =>
          (0, r.useStateFromStores)([a.default], () =>
            null != e ? a.default.getSubscriptionListing(e) : null
          ),
        h = e => {
          let t = (0, u.useGroupListingsFetchContext)(
            "useGroupListingsForGuild"
          );
          return (0, r.useStateFromStores)([a.default], () =>
            null != e && t
              ? a.default.getSubscriptionGroupListingsForGuild(e)
              : c
          );
        },
        _ = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            f(e),
            (0, r.useStateFromStoresArray)([a.default], () => {
              let n =
                  null != e
                    ? a.default.getSubscriptionGroupListingsForGuild(e)
                    : c,
                i = [];
              for (let e of n)
                for (let n of e.subscription_listings_ids) {
                  let e = a.default.getSubscriptionListing(n);
                  null != e &&
                    (t.includeSoftDeleted || !e.soft_deleted) &&
                    i.push(e);
                }
              return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [
                    ...i.filter(e => !e.soft_deleted),
                    ...i.filter(e => e.soft_deleted),
                  ]
                : i;
            })
          );
        },
        g = e => {
          let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]),
            s = (0, r.useStateFromStoresArray)(
              [a.default],
              () =>
                l.filter(
                  e => !a.default.getDidFetchListingForSubscriptionPlanId(e)
                ),
              [l]
            );
          return (
            i.useEffect(() => {
              !t &&
                s.length > 0 &&
                (n(!0),
                Promise.all(s.map(e => o.fetchSubscriptionListingForPlan(e)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [t, s]),
            { loading: t }
          );
        },
        p = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null),
            l = async (e, n, i) => {
              try {
                return (
                  t(!0), r(null), await o.deleteSubscriptionListing(e, n, i), !0
                );
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            };
          return { error: n, submitting: e, deleteSubscriptionListing: l };
        },
        C = () => {
          let [e, t] = (0, l.default)(o.archiveSubscriptionListing),
            { loading: n, error: i } = t;
          return { error: i, submitting: n, archiveSubscriptionListing: e };
        },
        I = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null),
            l = async e => {
              let { guildId: n, groupListingId: i, listingId: l } = e;
              try {
                return (
                  t(!0),
                  r(null),
                  await o.updateSubscriptionListing({
                    guildId: n,
                    groupListingId: i,
                    listingId: l,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            };
          return {
            error: n,
            submitting: e,
            publishSubscriptionListing: l,
            clearError: () => r(null),
          };
        },
        T = e =>
          (0, r.useStateFromStores)([a.default], () =>
            null != e ? a.default.getSubscriptionSettings(e) : void 0
          ),
        m = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null),
            l = i.useCallback(async (e, n) => {
              t(!0), r(null);
              try {
                await o.updateSubscriptionsSettings(e, n);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []);
          return { loading: e, updateSubscriptionsSettings: l, error: n };
        },
        v = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null),
            l = i.useCallback(async e => {
              t(!0), r(null);
              try {
                await o.fetchSubscriptionsSettings(e);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []);
          return { loading: e, fetchSubscriptionsSettings: l, error: n };
        },
        R = e =>
          (0, r.useStateFromStores)([a.default], () =>
            null != e ? a.default.getSubscriptionTrial(e) : null
          );
    },
    971150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AllChannelAccessOptions: function () {
            return r;
          },
          useEditStateStore: function () {
            return s;
          },
        });
      var i,
        r,
        l = n("308503");
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let s = (0, l.default)(e => ({
        listings: {},
        setListing: (t, n) =>
          e(e => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } })),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (t, n) =>
          e(e => ({
            editStateIdsForGroup: {
              ...e.editStateIdsForGroup,
              [t]: n(e.editStateIdsForGroup[t]),
            },
          })),
      }));
    },
    65722: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildRoleSubscriptionSettingsVisibility: function () {
            return r;
          },
          canSeeGuildRoleSubscriptionSettings: function () {
            return S;
          },
          useGuildRoleSubscriptionSettingsVisibility: function () {
            return E;
          },
          useCanManageGuildRoleSubscriptions: function () {
            return h;
          },
          canManageGuildRoleSubscriptions: function () {
            return _;
          },
        });
      var i,
        r,
        l = n("446674"),
        s = n("7331"),
        u = n("465869"),
        o = n("957255"),
        a = n("697218"),
        d = n("808388"),
        c = n("49111");
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
        (i[(i.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
        (i[(i.VISIBLE = 3)] = "VISIBLE");
      function f(e) {
        if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED))
          return 0;
        if (
          (function (e) {
            let {
              guild: t,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: l,
              isUserInCreatorMonetizationEligibleCountry: s,
              shouldRestrictUpdatingRoleSubscriptionSettings: u,
            } = e;
            return (
              !!t.hasFeature(c.GuildFeatures.COMMUNITY) &&
              !!i &&
              (!u || !!n) &&
              (!!(
                t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) ||
                t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                ((!!r || !!l) && n && s))
            );
          })(e)
        )
          return 3;
        let {
          guild: t,
          isOwner: n,
          isUserInCreatorMonetizationEligibleCountry: i,
          isMonetizationWaitlistEnabledForGuild: r,
          isGuildEligibleForRoleSubscriptions: l,
          isExpeditedMonetizationOnboardingGuild: s,
        } = e;
        return n && !i && r
          ? 1
          : n && r && (l || s) && !t.hasFeature(c.GuildFeatures.COMMUNITY)
            ? 2
            : 0;
      }
      function S(e) {
        return 0 !== f(e);
      }
      function E(e) {
        let t = (0, d.useGuildEligibleForRoleSubscriptions)(
            null == e ? void 0 : e.id
          ),
          n = (0, s.useIsExpeditedOnboardingGuild)(e),
          i = (0, s.useIsMonetizationWaitlistEnabledForGuild)(
            null == e ? void 0 : e.id
          ),
          r = h(e),
          o = (0, l.useStateFromStores)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
          }),
          c = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
          { shouldRestrictUpdatingCreatorMonetizationSettings: S } = (0,
          u.useShouldRestrictUpdatingCreatorMonetizationSettings)(
            null == e ? void 0 : e.id
          );
        return null == e
          ? 0
          : f({
              guild: e,
              isOwner: o,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: c,
              shouldRestrictUpdatingRoleSubscriptionSettings: S,
            });
      }
      function h(e) {
        let t = (0, l.useStateFromStores)([o.default], () => _(e), [e]);
        return t;
      }
      function _(e) {
        return null != e && o.default.can(c.Permissions.ADMINISTRATOR, e);
      }
    },
    136185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleSubscriptionPlanId: function () {
            return l;
          },
          getRoleSubscriptionMutationPlanId: function () {
            return s;
          },
        });
      var i = n("627445"),
        r = n.n(i);
      function l(e) {
        let t = e.items;
        return (
          r(
            1 === t.length,
            "more than 1 subscription item for role subscription"
          ),
          t[0].planId
        );
      }
      function s(e) {
        var t;
        let n =
          null == e
            ? void 0
            : null === (t = e.renewalMutations) || void 0 === t
              ? void 0
              : t.items;
        if (null != n)
          return (
            r(
              n.length <= 1,
              "more than 1 renewal mutation for role subscription"
            ),
            null == n ? void 0 : n[0].planId
          );
      }
    },
    736880: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("446674"),
        r = n("913144"),
        l = n("233069"),
        s = n("42203");
      let u = {},
        o = {};
      class a extends i.default.Store {
        getTemplates(e) {
          return u[e];
        }
        getTemplateWithCategory(e, t) {
          var n;
          return null === (n = u[e]) || void 0 === n
            ? void 0
            : n.find(e => e.category === t);
        }
        getChannel(e) {
          return o[e];
        }
      }
      a.displayName = "GuildRoleSubscriptionTierTemplatesStore";
      var d = new a(r.default, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
          let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(s.default.getMutableGuildChannelsForGuild(n));
          t.listings.forEach(e => {
            e.channels.forEach(e => {
              let t = i.find(t => t.name === e.name);
              if (void 0 !== t) e.id = t.id;
              else if (!(e.id in o)) {
                let t = (0, l.createChannelRecord)(e);
                o[e.id] = t;
              }
            });
          });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
          let { templates: t, guildId: n } = e;
          u[n] = t;
        },
      });
    },
    432153: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelWithTemplateFallback: function () {
            return g;
          },
          useSuggestedUnusedPrices: function () {
            return p;
          },
          announceCreateTemplateChannels: function () {
            return I;
          },
          announceDeleteTemplateChannels: function () {
            return T;
          },
          createChannelsFromTemplateTierBenefits: function () {
            return m;
          },
          getTemplateTierCreationAnalyticsContext: function () {
            return v;
          },
          isEligibleForNewBadge: function () {
            return R;
          },
        }),
        n("424973"),
        n("222007"),
        n("462568");
      var i = n("642852"),
        r = n.n(i),
        l = n("65597"),
        s = n("913144"),
        u = n("437140"),
        o = n("42203"),
        a = n("808388"),
        d = n("648825"),
        c = n("971150"),
        f = n("65722"),
        S = n("736880"),
        E = n("49111"),
        h = n("724210");
      r.shim();
      let _ = {};
      function g(e) {
        let t = (0, l.default)([o.default], () => o.default.getChannel(e)),
          n = (0, l.default)([S.default], () => S.default.getChannel(e));
        return null != t ? t : n;
      }
      function p(e, t, n) {
        let i = (0, l.default)([d.default], () =>
            d.default.getSubscriptionListingsForGuild(e)
          ),
          r = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
          s = (0, c.useEditStateStore)(e => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let u = i.filter(e => !e.soft_deleted && !e.archived),
          o = u.map(e => e.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach(e => {
            let t = s[e],
              n = null == t ? void 0 : t.priceTier;
            null != n && a.push(n);
          });
        let f = new Set(a.concat(o));
        if (!f.has(n)) return null;
        let S = t.indexOf(n);
        if (-1 === S) return null;
        let E = [];
        for (
          let e = S + 1;
          e < t.length && (!f.has(t[e]) && E.push(t[e]), 3 !== E.length);
          e++
        );
        return E;
      }
      function C(e) {
        let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
          n = c.useEditStateStore.getState().listings,
          i = new Set();
        null != t &&
          t.forEach(e => {
            var t;
            let r =
              null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r ||
              r.forEach(e => {
                null != S.default.getChannel(e.ref_id) && i.add(e.ref_id);
              });
          });
        let r = [];
        for (let t of i) {
          let n = S.default.getChannel(t);
          if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
          }
        }
        return r;
      }
      function I(e) {
        let t = C(e);
        (_[e] = t),
          t.forEach(e => {
            let t = e.set(
              "flags",
              h.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL
            );
            s.default.dispatch({ type: "CHANNEL_CREATE", channel: t });
          });
      }
      function T(e) {
        var t;
        let n = null !== (t = _[e]) && void 0 !== t ? t : C(e);
        n.forEach(e => {
          s.default.dispatch({ type: "CHANNEL_DELETE", channel: e });
        });
      }
      async function m(e, t) {
        let n = [],
          i = [];
        if (
          (t.forEach(t => {
            let r = S.default.getChannel(t.ref_id);
            null != r &&
              (n.push(
                u.default.createRoleSubscriptionTemplateChannel(
                  e,
                  r.name,
                  r.type,
                  r.topic
                )
              ),
              i.push(r));
          }),
          0 === n.length)
        )
          return;
        let r = await Promise.allSettled(n);
        r.forEach((n, r) => {
          let l = i[r].id;
          if ("fulfilled" === n.status) {
            let t = n.value.body,
              i = c.useEditStateStore.getState().editStateIdsForGroup[e],
              r = c.useEditStateStore.getState().listings;
            null != i &&
              i.forEach(e => {
                var n;
                let i =
                  null === (n = r[e]) || void 0 === n
                    ? void 0
                    : n.channelBenefits;
                null == i ||
                  i.forEach(e => {
                    e.ref_id === l && (e.ref_id = t.id);
                  });
              });
          } else if (null != t) {
            let e = t.findIndex(e => e.ref_id === l);
            -1 !== e && (null == t || t.splice(e, 1));
          }
        });
      }
      function v(e, t) {
        var n, i;
        let r = c.useEditStateStore.getState().listings[e],
          l = null == r ? void 0 : r.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let s = S.default.getTemplateWithCategory(t, l);
        if (null == s)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let u = s.listings[0];
        if (
          (null == r ? void 0 : r.name) !== u.name ||
          (null == r ? void 0 : r.description) !== u.description ||
          (null == r ? void 0 : r.priceTier) !== u.price_tier ||
          (null == r ? void 0 : r.image) !== u.image ||
          (null == r ? void 0 : r.roleColor) !== u.role_color ||
          (null == r
            ? void 0
            : null === (n = r.channelBenefits) || void 0 === n
              ? void 0
              : n.length) !== u.channels.length ||
          (null == r
            ? void 0
            : null === (i = r.intangibleBenefits) || void 0 === i
              ? void 0
              : i.length) !== u.additional_perks.length
        )
          return { templateCategory: s.category, hasChangeFromTemplate: !0 };
        for (let e = 0; e < u.channels.length; e++) {
          let t = r.channelBenefits[e],
            n = u.channels[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: s.category, hasChangeFromTemplate: !0 };
        }
        for (let e = 0; e < u.additional_perks.length; e++) {
          let t = r.intangibleBenefits[e],
            n = u.additional_perks[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: s.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: s.category, hasChangeFromTemplate: !1 };
      }
      function R(e) {
        return (
          (0, f.canManageGuildRoleSubscriptions)(e) &&
          e.hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
          (0, a.isUserEligibleForTierTemplates)() &&
          (0, a.isGuildEligibleForTierTemplates)(e.id)
        );
      }
    },
    795228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("884691"),
        r = n("446674"),
        l = n("895026"),
        s = n("36402");
      let u = {};
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.useStateFromStores)([s.default], () =>
            s.default.getRoleMemberCount(e)
          );
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = u[e],
              i = null != n && t > 0 && Date.now() - n < t;
            !i && ((u[e] = Date.now()), l.fetchMemberCounts(e));
          }, [e, t]),
          n
        );
      }
    },
    974755: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("446674"),
        u = n("77078"),
        o = n("51565"),
        a = n("95039"),
        d = n("863921"),
        c = n("26989"),
        f = n("697218"),
        S = n("580357"),
        E = n("40469"),
        h = n("427459"),
        _ = n("49111"),
        g = n("782340"),
        p = n("543385");
      function C(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
          l = (0, s.useStateFromStores)([f.default, c.default], () => {
            let e = f.default.getCurrentUser();
            return c.default.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: o, premiumSubscriberCount: S } = t;
        if (0 === S && o === _.BoostedGuildTiers.NONE) return null;
        let E = e => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !r &&
                (0, a.openGuildBoostingMarketingModal)({
                  guildId: t.id,
                  location: {
                    section: _.AnalyticsSections.GUILD_HEADER,
                    object: _.AnalyticsObjects.BOOST_GEM_ICON,
                  },
                });
          },
          C =
            o === _.BoostedGuildTiers.NONE
              ? g.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : h.getTierName(o),
          I = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: p.tierTooltipTitle, children: C }),
              (0, i.jsx)("div", {
                children:
                  g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: S }
                  ),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: p.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: I,
            position: "bottom",
            "aria-label": null != C ? C : "",
            children: e =>
              (0, i.jsx)(u.Clickable, {
                ...e,
                className: p.premiumGuildIcon,
                onClick: E,
                children: (0, i.jsx)(d.default, {
                  premiumTier: o,
                  iconBackgroundClassName: n
                    ? p.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && o !== _.BoostedGuildTiers.TIER_3
                      ? p.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function I(e) {
        let { guild: t, disableColor: n, disableBoostClick: r } = e,
          s = (0, o.default)(t);
        return s
          ? (0, i.jsx)("div", {
              className: p.guildIconV2Container,
              children: (0, i.jsx)(E.default, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l(p.guildBadge, { [p.disableColor]: n }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: p.guildIconContainer,
              children: (0, i.jsx)(S.default, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l(p.guildBadge, { [p.disableColor]: n }),
              }),
            });
      }
      function T(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
          l = (0, o.default)(t);
        if (l)
          return (0, i.jsx)(I, {
            guild: t,
            disableColor: !1,
            disableBoostClick: r,
          });
        let s =
          t.hasFeature(_.GuildFeatures.VERIFIED) ||
          t.hasFeature(_.GuildFeatures.PARTNERED);
        return s
          ? (0, i.jsx)(I, { guild: t, disableColor: !n })
          : (0, i.jsx)(C, {
              guild: t,
              isBannerVisible: n,
              disableBoostClick: r,
            });
      }
    },
    593916: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var i = n("37983"),
        r = n("884691"),
        l = n("448105"),
        s = n.n(l),
        u = n("917351"),
        o = n.n(u),
        a = n("316693"),
        d = n("446674"),
        c = n("77078"),
        f = n("26989"),
        S = n("305961"),
        E = n("697218"),
        h = n("991170"),
        _ = n("299039"),
        g = n("479756"),
        p = n("38654"),
        C = n("507950"),
        I = n("49111"),
        T = n("782340"),
        m = n("29124");
      function v(e) {
        var t;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (t = e.colorString) && void 0 !== t ? t : "currentColor",
          },
          children: e.name,
        });
      }
      function R(e) {
        let { guildId: t } = e,
          n = (0, d.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          l = (0, d.useStateFromStores)([S.default], () =>
            S.default.getGuild(t)
          ),
          u = (0, d.useStateFromStores)([S.default], () =>
            S.default.getRoles(t)
          ),
          { impersonateType: R, viewingRoles: N } = (0,
          d.useStateFromStoresObject)([p.default], () => ({
            impersonateType: p.default.getImpersonateType(t),
            viewingRoles: p.default.getViewingRoles(t),
          })),
          M = R === C.ImpersonateType.SERVER_SHOP,
          O = (0, d.useStateFromStores)([f.default], () =>
            null != n ? f.default.getTrueMember(t, n.id) : null
          ),
          [A, L] = (0, c.useMultiSelect)(null == N ? [] : _.default.keys(N)),
          b = r.useRef(l);
        r.useEffect(() => {
          let e = {},
            t = b.current;
          if (null != t && null != R) {
            for (let t of A) {
              let n = u[t];
              null != n && (e[t] = n);
            }
            (0, g.updateImpersonating)(t.id, { type: R, roles: e });
          }
        }, [A, R, u]);
        let x =
            null != l && null != n && null != O
              ? o(u)
                  .filter(e => -1 !== O.roles.indexOf(e.id))
                  .sortBy(e => -e.position)
                  .first()
              : void 0,
          P = r.useMemo(
            () =>
              null != l && null != n
                ? Object.values(u)
                    .filter(e => e.id !== l.id)
                    .filter(e => {
                      var t;
                      return (
                        !M ||
                        (null === (t = e.tags) || void 0 === t
                          ? void 0
                          : t.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      e =>
                        (null == x ? void 0 : x.id) === e.id ||
                        h.default.isRoleHigher(l, n.id, x, e)
                    )
                : [],
            [l, n, M, x, u]
          );
        if (null == n || null == l || null == O) return null;
        let D = {};
        O.roles.forEach(e => {
          let t = u[e];
          null != t && (D[t.id] = t);
        });
        let G = a.default.has(
          h.default.computePermissionsForRoles({ forceRoles: D, context: l }),
          a.default.combine(
            I.Permissions.MANAGE_GUILD,
            I.Permissions.MANAGE_ROLES
          )
        );
        return G || l.isOwner(n.id)
          ? (0, i.jsx)("div", {
              className: m.container,
              children: (0, i.jsx)(c.Combobox, {
                placeholder: T.default.Messages.SEARCH_ROLES,
                value: A,
                onChange: L,
                autoFocus: !0,
                children: e => {
                  let t = P.reduce(
                      (t, n) => (
                        s(e.toLowerCase(), n.name.toLowerCase()) &&
                          t.push(
                            (0, i.jsxs)(
                              c.ComboboxItem,
                              {
                                value: n.id,
                                children: [
                                  (0, i.jsx)(c.ComboboxItem.Label, {
                                    children: v(n),
                                  }),
                                  (0, i.jsx)(c.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              n.id
                            )
                          ),
                        t
                      ),
                      []
                    ),
                    n = u[l.getEveryoneRoleId()];
                  return (
                    null != n &&
                      t.push(
                        (0, i.jsxs)(
                          c.ComboboxItem,
                          {
                            value: n.id,
                            disabled: !0,
                            children: [
                              (0, i.jsx)(c.ComboboxItem.Label, {
                                children: v(n),
                              }),
                              (0, i.jsx)(c.ComboboxItem.Checkbox, {
                                checked: !0,
                              }),
                            ],
                          },
                          n.id
                        )
                      ),
                    t
                  );
                },
              }),
            })
          : (0, i.jsx)(c.Text, {
              variant: "text-md/medium",
              children: T.default.Messages.VIEW_AS_ROLES_NO_ACCESS,
            });
      }
    },
    977169: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
          ViewingRolesSettingsNotice: function () {
            return G;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("446674"),
        u = n("669491"),
        o = n("77078"),
        a = n("921031"),
        d = n("471706"),
        c = n("937692"),
        f = n("432153"),
        S = n("592407"),
        E = n("393414"),
        h = n("18494"),
        _ = n("162771"),
        g = n("246053"),
        p = n("461380"),
        C = n("423487"),
        I = n("489622"),
        T = n("773336"),
        m = n("479756"),
        v = n("38654"),
        R = n("593916"),
        N = n("49111"),
        M = n("724210"),
        O = n("307785"),
        A = n("677795"),
        L = n("782340"),
        b = n("459186");
      function x(e) {
        let { className: t, onClick: n, children: r } = e;
        return (0, i.jsx)(o.Button, {
          className: l(b.button, t),
          innerClassName: b.buttonInner,
          look: o.Button.Looks.OUTLINED,
          color: o.Button.Colors.WHITE,
          size: o.Button.Sizes.NONE,
          onClick: n,
          children: r,
        });
      }
      function P(e) {
        let { onClick: t } = e;
        return (0, i.jsx)(x, {
          onClick: t,
          children: L.default.Messages.DISABLE,
        });
      }
      function D() {
        let e = (0, s.useStateFromStores)([_.default], () =>
            _.default.getGuildId()
          ),
          t = (0, s.useStateFromStores)([h.default], () =>
            h.default.getChannelId(e)
          ),
          {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: T,
          } = (0, s.useStateFromStoresObject)([v.default], () => ({
            viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
            backNavigationSection: v.default.getBackNavigationSection(e),
            isFullServerPreview: null != e && v.default.isFullServerPreview(e),
            isServerShopPreview: null != e && v.default.isViewingServerShop(e),
          }));
        if (null == n || null == e) return null;
        let D = (function (e) {
            switch (e) {
              case N.GuildSettingsSections.INTEGRATIONS:
                return L.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
              case N.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
                return L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
              case N.GuildSettingsSections.ONBOARDING:
                return L.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
              default:
                return L.default.Messages.VIEWING_AS_ROLES_BACK;
            }
          })(r),
          G =
            r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS
              ? L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT
              : L.default.Messages.VIEWING_AS_ROLES_SELECT,
          w = t === M.StaticChannelRoute.GUILD_ONBOARDING,
          F = t => {
            let { backToSettings: n } = t;
            null != e &&
              (v.default.isFullServerPreview(e) &&
                (0, E.transitionTo)(N.Routes.CHANNEL(e)),
              d.default.shouldShowOnboarding(e) &&
                (a.default.finishOnboarding(e),
                (0, c.discardOnboardingPromise)(e)),
              (0, m.stopImpersonating)(e),
              n && S.default.open(e, r),
              r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS &&
                (0, f.announceDeleteTemplateChannels)(e));
          };
        return (0, i.jsxs)(I.default, {
          color: I.NoticeColors.BRAND,
          className: b.notice,
          children: [
            (0, i.jsxs)(x, {
              onClick: () => F({ backToSettings: !0 }),
              className: b.backButton,
              children: [
                (0, i.jsx)(g.default, {
                  width: 16,
                  height: 16,
                  direction: g.default.Directions.LEFT,
                  className: b.backArrow,
                }),
                D,
              ],
            }),
            w && l
              ? (0, i.jsx)("div", {
                  className: b.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: b.noticeText,
                    children: L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION,
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: b.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: b.noticeText,
                      children: l
                        ? L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format(
                            { numRoles: Object.keys(n).length }
                          )
                        : L.default.Messages.VIEWING_AS_ROLES.format({
                            numRoles: Object.keys(n).length,
                          }),
                    }),
                    (0, i.jsx)(o.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(R.default, { guildId: e }),
                      children: e => {
                        let { onClick: t } = e;
                        return (0, i.jsxs)(x, {
                          onClick: t,
                          children: [
                            G,
                            (0, i.jsx)(p.default, {
                              width: 16,
                              height: 16,
                              direction: p.default.Directions.DOWN,
                              className: b.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    l &&
                      (0, i.jsx)(o.TooltipContainer, {
                        className: b.previewWarning,
                        text: L.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, i.jsx)(C.default, {
                          width: 16,
                          height: 16,
                          color: u.default.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    T &&
                      (0, i.jsx)(o.TooltipContainer, {
                        className: b.previewWarning,
                        text: L.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format(
                          {
                            maxTiers: A.MAX_SUBSCRIPTION_TIERS,
                            maxProducts: O.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS,
                          }
                        ),
                        children: (0, i.jsx)(C.default, {
                          width: 16,
                          height: 16,
                          color: u.default.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            l || r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(P, { onClick: () => F({ backToSettings: !1 }) }),
          ],
        });
      }
      function G(e) {
        let { guildId: t } = e,
          n = (0, s.useStateFromStores)([v.default], () =>
            v.default.isViewingRoles(t)
          );
        return n
          ? (0, i.jsx)("div", {
              className: l(b.settingsWrapper, {
                [b.windows]: (0, T.isWindows)(),
                [b.osx]: (0, T.isMac)(),
              }),
              children: (0, i.jsx)(D, {}),
            })
          : null;
      }
    },
    634807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isMessageNewerThanImprovedMarkdownEpoch: function () {
            return r;
          },
        });
      var i = n("299039");
      function r(e) {
        return !(e < i.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    596368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("497880");
      function l(e, t) {
        let { message: n } = e;
        return (0, i.jsx)(r.default, { message: n, content: t });
      }
    },
    227439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        l = n("93332"),
        s = n("913491");
      let u = r.memo(l.default);
      function o(e) {
        let {
          message: t,
          channel: n,
          author: r,
          compact: l,
          animateAvatar: o,
          guildId: a,
          isGroupStart: d = !0,
          roleIcon: c,
          hideTimestamp: f,
        } = e;
        return !(0, s.default)(t) && (d || l)
          ? (0, i.jsx)(u, {
              message: t,
              channel: n,
              author: r,
              guildId: a,
              compact: l,
              animate: o,
              roleIcon: c,
              hideTimestamp: f,
            })
          : void 0;
      }
    },
    959905: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useLocalizedPromoQuery: function () {
            return l;
          },
        });
      var i = n("446674"),
        r = n("160299");
      function l() {
        let { localizedPricingPromo: e, hasError: t } = (0,
        i.useStateFromStoresObject)([r.default], () => ({
          localizedPricingPromo: r.default.localizedPricingPromo,
          hasError: r.default.localizedPricingPromoHasError,
        }));
        return t ? null : e;
      }
    },
    485138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTrackLocalizedPricingPromoImpression: function () {
            return l;
          },
        });
      var i = n("759843"),
        r = n("428958");
      function l(e, t) {
        (0, r.default)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
          properties: { country_code: t, action_location: e },
        });
      }
    },
    188649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isEligibleForQuestsClientMonitoring: function () {
            return l;
          },
        });
      var i = n("862205");
      let r = (0, i.createExperiment)({
          id: "2024-03_quests_client_monitoring",
          kind: "user",
          label: "Quests client monitoring experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "disabled", config: { enabled: !1 } },
            { id: 1, label: "enabled", config: { enabled: !0 } },
          ],
        }),
        l = e =>
          r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 })
            .enabled;
    },
    534801: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QuestContentImpressionTracker: function () {
            return g;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        l = n("748820"),
        s = n("432710"),
        u = n("446674"),
        o = n("811425"),
        a = n("84339"),
        d = n("155084"),
        c = n("471671"),
        f = n("815496"),
        S = n("188649"),
        E = n("2973"),
        h = n("49111");
      class _ {
        constructor(e, t) {
          var n = this;
          (this.onMinViewTimeReached = () => {
            this.questIds.forEach(e => {
              (0, f.trackQuestEvent)(e, h.AnalyticEvents.QUEST_CONTENT_VIEWED, {
                min_view_time_seconds: this.minViewTimeSecond,
                min_viewport_percentage: this.minViewportPercentage,
                ...this.commonProperties(e),
              });
            });
          }),
            (this.heartbeat = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              n.questIds.forEach(t => {
                null != n.lastBeatTime &&
                  (0, f.trackQuestEvent)(
                    t,
                    h.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
                    {
                      is_termination_beat: e,
                      viewed_time_ms: Date.now() - n.lastBeatTime,
                      ...n.commonProperties(t),
                    }
                  );
              }),
                (n.lastBeatTime = Date.now());
            }),
            (this.commonProperties = e => ({
              impression_id: this.id,
              quest_status: (0, f.getQuestStatus)(E.default.quests.get(e)),
              ...(0, f.getContentProperties)(this.questContent),
            })),
            (this.start = () => {
              this.stop(!1),
                (this.lastBeatTime = Date.now()),
                (this.beatTimeout = setInterval(() => this.heartbeat(), 6e4)),
                (this.minViewTimeReachedTimeout = setTimeout(
                  this.onMinViewTimeReached,
                  1e3 * this.minViewTimeSecond
                )),
                this.questIds.forEach(e => {
                  (0, f.trackQuestEvent)(
                    e,
                    h.AnalyticEvents.QUEST_CONTENT_LOADED,
                    this.commonProperties(e)
                  );
                }),
                (0, S.isEligibleForQuestsClientMonitoring)(
                  "QuestImpressionTracker"
                ) &&
                  d.default.increment({
                    name: s.MetricEvents.QUEST_CONTENT_IMPRESSION,
                    tags: [
                      "quest_content:".concat(
                        (0, f.getQuestContentName)(this.questContent)
                      ),
                    ],
                  });
            }),
            (this.stop = function () {
              let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0];
              e && n.heartbeat(!0),
                (n.lastBeatTime = void 0),
                clearInterval(n.beatTimeout),
                clearTimeout(n.minViewTimeReachedTimeout);
            }),
            (this.id = (0, l.v4)()),
            (this.questContent = t),
            (this.minViewTimeSecond = 1),
            (this.minViewportPercentage = 0.5),
            (this.questIds = Array.isArray(e) ? e : [e]);
        }
      }
      function g(e) {
        let t = Array.isArray(e.questId)
          ? e.questId.sort().join("_")
          : e.questId;
        return (0, i.jsx)(
          p,
          { ...e },
          "".concat(t, "_").concat(e.questContent)
        );
      }
      function p(e) {
        var t;
        let n = (0, u.useStateFromStores)([c.default], () =>
            c.default.isFocused()
          ),
          l = n !== (0, a.default)(n),
          [s, d] = r.useState(!1),
          f = null !== (t = e.overrideVisibility) && void 0 !== t ? t : s,
          S = f !== (0, a.default)(f),
          E = r.useRef(null),
          h = (0, o.useIsVisible)(e => d(e), 0.5);
        return (
          r.useEffect(
            () => () => {
              null != E.current && E.current.stop();
            },
            []
          ),
          r.useEffect(() => {
            let t = (S && f) || (l && n && f),
              i = (S && !f) || (l && !n);
            (t || i) && null != E.current && E.current.stop(),
              t &&
                ((E.current = new _(e.questId, e.questContent)),
                E.current.start());
          }, [n, f, E, l, S, e.questId, e.questContent]),
          (0, i.jsx)(i.Fragment, { children: e.children(h) })
        );
      }
    },
    533403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("424973"),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        u = n("77078"),
        o = n("766274"),
        a = n("368121"),
        d = n("107294"),
        c = n("633827");
      class f extends r.PureComponent {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            l = e.length === t ? e.length : t - 1,
            s = 0;
          for (; s < l && s < e.length; ) {
            let t = s === e.length - 1;
            r.push(
              n(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t)
            ),
              s++;
          }
          if (s < e.length) {
            let t = Math.min(e.length - s, 99);
            r.push(i("+".concat(t), d.moreUsers, "more-users", t));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, i.jsx)("div", {
                className: d.iconContainer,
                children: (0, i.jsx)(a.default, {
                  width: 16,
                  height: 16,
                  foreground: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, i.jsxs)("div", {
            className: s(e, d.container),
            ref: e => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.defaultRenderUser = (e, t, n, r) => {
              let { onClick: l, size: a, guildId: f } = this.props,
                S = e instanceof o.default ? e : null != e ? e.user : null;
              return null == S
                ? (0, i.jsx)("div", { className: s(d.emptyUser, t) }, n)
                : (0, i.jsx)(
                    u.Avatar,
                    {
                      tabIndex: 0,
                      src: S.getAvatarURL(f, (0, u.getAvatarSize)(a)),
                      size: a,
                      "aria-label": S.username,
                      className: s(t, c.cursorPointer, d.avatarSize),
                      onClick: e => (null != l ? l(e, S, this._ref) : null),
                    },
                    S.id
                  );
            });
        }
      }
      f.defaultProps = {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, i.jsx)("div", { className: t, children: e }, n);
        },
        size: u.AvatarSizes.SIZE_24,
      };
      var S = f;
    },
    538137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("704426"),
        s = n("246053"),
        u = (0, r.replaceIcon)(function (e) {
          return (0, i.jsx)(s.default, {
            ...e,
            direction: s.default.Directions.RIGHT,
          });
        }, l.ArrowSmallRightIcon);
    },
    627490: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("772279"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              className: l,
              foreground: u,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              className: l,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: u,
                fill: r,
                d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z",
              }),
            });
          },
          l.CompassIcon,
          void 0,
          { size: 24 }
        );
    },
    832132: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("504318"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: r = 24,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: r,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                fill: t,
              }),
            });
          },
          l.PencilIcon,
          void 0,
          { size: 24 }
        );
    },
    952479: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("49097"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: r = "currentColor",
              ...l
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsxs)("g", {
                  clipPath: "url(#clip0_3523_134157)",
                  children: [
                    (0, i.jsx)("path", {
                      d: "M22.2856 1.81423L23.7697 2.6283C23.8391 2.66388 23.8973 2.71794 23.9379 2.78452C23.9785 2.8511 24 2.92762 24 3.00565C24 3.08369 23.9785 3.16021 23.9379 3.22679C23.8973 3.29337 23.8391 3.34743 23.7697 3.38301L22.2856 4.18577C22.2402 4.21036 22.2029 4.24769 22.1784 4.29318L21.3657 5.77999C21.3292 5.8466 21.2755 5.90217 21.2103 5.94087C21.145 5.97958 21.0705 6 20.9947 6C20.9188 6 20.8444 5.97958 20.7791 5.94087C20.7138 5.90217 20.6601 5.8466 20.6236 5.77999L19.811 4.29318C19.7869 4.24903 19.7507 4.21273 19.7066 4.1886L18.2196 3.37453C18.1531 3.33797 18.0977 3.28418 18.059 3.21879C18.0204 3.1534 18 3.07881 18 3.00283C18 2.92684 18.0204 2.85225 18.059 2.78686C18.0977 2.72147 18.1531 2.66768 18.2196 2.63112L19.7038 1.81706C19.7486 1.79172 19.7857 1.75458 19.811 1.70964L20.6265 0.220011C20.663 0.153397 20.7166 0.0978302 20.7819 0.0591255C20.8472 0.0204207 20.9216 0 20.9975 0C21.0734 0 21.1478 0.0204207 21.2131 0.0591255C21.2784 0.0978302 21.3321 0.153397 21.3685 0.220011L22.1812 1.70682C22.2057 1.75138 22.2418 1.78849 22.2856 1.81423Z",
                      fill: r,
                    }),
                    (0, i.jsx)("path", {
                      d: "M14.9888 9.50624L18.7402 11.5593C18.8189 11.6025 18.8845 11.666 18.9302 11.7433C18.9759 11.8205 19 11.9086 19 11.9983C19 12.0881 18.9759 12.1762 18.9302 12.2534C18.8845 12.3306 18.8189 12.3941 18.7402 12.4373L14.9855 14.4904C14.7769 14.6044 14.6055 14.7759 14.4915 14.9845L12.4389 18.7402C12.3957 18.8188 12.3322 18.8845 12.255 18.9302C12.1778 18.9759 12.0897 19 12 19C11.9103 19 11.8222 18.9759 11.745 18.9302C11.6678 18.8845 11.6043 18.8188 11.5611 18.7402L9.50851 14.9845C9.39437 14.776 9.22297 14.6046 9.01454 14.4904L5.25978 12.4373C5.18112 12.3941 5.11551 12.3306 5.06981 12.2534C5.02411 12.1762 5 12.0881 5 11.9983C5 11.9086 5.02411 11.8205 5.06981 11.7433C5.11551 11.666 5.18112 11.6025 5.25978 11.5593L9.01454 9.49289C9.22319 9.37903 9.39467 9.20751 9.50851 8.99881L11.5644 5.25984C11.6076 5.18117 11.6711 5.11554 11.7483 5.06983C11.8255 5.02412 11.9136 5 12.0033 5C12.0931 5 12.1811 5.02412 12.2583 5.06983C12.3356 5.11554 12.3991 5.18117 12.4422 5.25984L14.4948 8.99881C14.6066 9.21244 14.7783 9.3888 14.9888 9.50624Z",
                      fill: r,
                    }),
                  ],
                }),
                (0, i.jsx)("defs", {
                  children: (0, i.jsx)("clipPath", {
                    id: "clip0_3523_134157",
                    children: (0, i.jsx)("rect", {
                      width: "24",
                      height: "24",
                      fill: r,
                    }),
                  }),
                }),
              ],
            });
          },
          l.SparklesIcon,
          void 0,
          { size: 16 }
        );
    },
    266926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("225389"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              backgroundColor: l,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                null != l
                  ? (0, i.jsx)("circle", { r: 8, cx: 12, cy: 12, fill: l })
                  : null,
                (0, i.jsx)("path", {
                  d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 6.751C12.69 6.751 13.25 7.311 13.25 8.001C13.25 8.692 12.69 9.251 12 9.251C11.31 9.251 10.75 8.691 10.75 8C10.75 7.31 11.31 6.751 12 6.751ZM15 17H9V15H11V12H10V10H12C12.553 10 13 10.448 13 11V15H15V17Z",
                  fill: r,
                }),
              ],
            });
          },
          l.CircleInformationIcon,
          void 0,
          { size: 24 }
        );
    },
    781896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("533806"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: l,
                d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                fill: r,
              }),
            });
          },
          l.UserIcon,
          void 0,
          { size: 24 }
        );
    },
    561359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("877585"),
        s = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z",
                fill: r,
                className: l,
              }),
            });
          },
          l.ShieldIcon,
          void 0,
          { size: 24 }
        );
    },
    441823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openUserContextMenu: function () {
            return l;
          },
          openModerateUserContextMenu: function () {
            return s;
          },
          openModerateRoleContextMenu: function () {
            return u;
          },
          openModerationRaidContextMenu: function () {
            return o;
          },
        }),
        n("70102");
      var i = n("37983");
      n("884691");
      var r = n("272030");
      function l(e, t, l) {
        l.isGroupDM()
          ? (0, r.openContextMenuLazy)(e, async () => {
              let { default: e } = await n
                .el("166452")
                .then(n.bind(n, "166452"));
              return n => (0, i.jsx)(e, { ...n, user: t, channel: l });
            })
          : l.isDM()
            ? (0, r.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("130074")
                  .then(n.bind(n, "130074"));
                return n =>
                  (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, r.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("834247")
                    .then(n.bind(n, "834247"));
                  return n =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: t,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, r.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("406784")
                    .then(n.bind(n, "406784"));
                  return n => (0, i.jsx)(e, { ...n, user: t });
                });
      }
      function s(e, t) {
        let { user: l, channel: s, moderationAlertId: u, guildId: o, ...a } = t;
        if (
          (null == s ? void 0 : s.isGroupDM()) ||
          (null == s ? void 0 : s.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != o ? o : null == s ? void 0 : s.getGuildId();
        null != d &&
          (0, r.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("467940").then(n.bind(n, "467940"));
            return t =>
              (0, i.jsx)(e, {
                ...t,
                user: l,
                channelId: null == s ? void 0 : s.id,
                guildId: d,
                moderationAlertId: u,
                ...a,
              });
          });
      }
      function u(e, t) {
        let {
          user: l,
          guildId: s,
          analyticsLocations: u,
          onCloseContextMenu: o,
        } = t;
        (0, r.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("522651").then(n.bind(n, "522651"));
          return t =>
            (0, i.jsx)(e, {
              ...t,
              user: l,
              guildId: s,
              analyticsLocations: u,
              onCloseContextMenu: o,
            });
        });
      }
      function o(e, t, l) {
        null != l &&
          (0, r.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("701587").then(n.bind(n, "701587"));
            return t => (0, i.jsx)(e, { ...t, guildId: l });
          });
      }
    },
    733527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ArrowSmallRightIcon: function () {
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
          colorClass: u = "",
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
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
            className: u,
          }),
        });
      };
    },
    291776: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatAlertIcon: function () {
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
          colorClass: u = "",
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
              d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
              className: u,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    890439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CompassIcon: function () {
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
          colorClass: u = "",
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
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: u,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    583103: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DenyIcon: function () {
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
          colorClass: u = "",
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
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    499779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImagePlusIcon: function () {
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
          colorClass: u = "",
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
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: u,
            }),
          ],
        });
      };
    },
    14935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SparklesIcon: function () {
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
          colorClass: u = "",
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
            d: "M18.14 2.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19l-.51-1.38ZM10.6 9.11a1.7 1.7 0 0 0-3.2 0l-.84 2.27a2 2 0 0 1-1.18 1.18l-2.27.85a1.7 1.7 0 0 0 0 3.18l2.27.85a2 2 0 0 1 1.18 1.18l.85 2.27a1.7 1.7 0 0 0 3.18 0l.85-2.27a2 2 0 0 1 1.18-1.18l2.27-.85a1.7 1.7 0 0 0 0-3.18l-2.27-.85a2 2 0 0 1-1.18-1.18l-.85-2.27Z",
            className: u,
          }),
        });
      };
    },
    224701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserIcon: function () {
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
          colorClass: u = "",
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
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: u,
          }),
        });
      };
    },
    498574: function (e, t, n) {
      "use strict";
      var i, r;
      n.r(t),
        n.d(t, {
          GuildInviteFlags: function () {
            return i;
          },
        }),
        n("222007"),
        ((r = i || (i = {}))[(r.IS_GUEST_INVITE = 1)] = "IS_GUEST_INVITE"),
        (r[(r.IS_VIEWED = 2)] = "IS_VIEWED"),
        (r[(r.IS_ENHANCED = 4)] = "IS_ENHANCED");
    },
  },
]);
//# sourceMappingURL=1be530d26fa2eac7b987.js.map
