(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87107"],
  {
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
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
    856670: function (e, t, n) {
      "use strict";
      e.exports = n.p + "018197f71e03e53562e7.svg";
    },
    693029: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7e5dd7f59f96cc264184.svg";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return l;
          },
          updateCardInfo: function () {
            return a;
          },
          clearCardInfo: function () {
            return i;
          },
          updateAddressInfo: function () {
            return u;
          },
          clearError: function () {
            return o;
          },
        });
      var r = n("913144");
      function l(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function a(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function i() {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function u(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        r.default.wait(() =>
          r.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return l;
          },
        });
      var r = n("913144");
      function l() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    133403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("414456"),
        a = n.n(l),
        i = n("77078"),
        u = n("782340"),
        o = n("518377");
      let s = Object.freeze({ DEFAULT: o.default, FILLED: o.filled });
      function c(e) {
        let {
          className: t,
          onClick: n,
          "aria-label": l,
          look: c = s.DEFAULT,
        } = e;
        return (0, r.jsx)(i.Clickable, {
          "aria-label": null != l ? l : u.default.Messages.REMOVE,
          className: a(o.button, c, t),
          onClick: n,
        });
      }
      c.Looks = s;
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("76527");
      n.es(r, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("506070");
      n.es(r, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("618807");
      n.es(r, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("28289");
      n.es(r, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("882039");
      n.es(r, t);
    },
    384830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("627445"),
        l = n.n(r),
        a = n("446674"),
        i = n("385976"),
        u = n("867805");
      function o(e) {
        let { emojiId: t, emojiName: n } = e,
          r = (0, a.useStateFromStores)([i.default], () =>
            null != t ? i.default.getCustomEmojiById(t) : null
          );
        if (null != r || null != n) {
          if (null == t)
            return (
              l(
                null != n,
                "emojiName must be defined if emojiId is not defined"
              ),
              u.default.convertSurrogateToName(n, !1)
            );
          else return null == r ? void 0 : r.name;
        }
      }
    },
    208548: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r = n("37983"),
        l = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("446674"),
        o = n("77078"),
        s = n("430568"),
        c = n("133403"),
        d = n("252744"),
        f = n("86678"),
        h = n("923959"),
        C = n("882641"),
        v = n("384830"),
        p = n("958706"),
        m = n("782340"),
        E = n("468464");
      function S(e) {
        let {
            className: t,
            guildId: n,
            error: a,
            emojiId: S,
            emojiName: _,
            isRequiredField: A = !0,
            shouldUpdateBothEmojiFields: T = !1,
            setEmojiId: g,
            setEmojiName: I,
          } = e,
          N = (0, v.default)({ emojiId: S, emojiName: _ }),
          R = (0, u.useStateFromStores)([h.default], () =>
            null != n ? h.default.getDefaultChannel(n) : null
          ),
          x = l.createRef(),
          L = (0, d.default)(x),
          M = () => {
            I(void 0), g(void 0);
          },
          P = e => (t, n) => {
            let r = (null == t ? void 0 : t.id) == null;
            M(),
              r
                ? I(null == t ? void 0 : t.optionallyDiverseSequence)
                : (T && I(null == t ? void 0 : t.name),
                  g(null == t ? void 0 : t.id)),
              n && e();
          },
          y = e => {
            e.stopPropagation(), M();
          };
        return (0, r.jsx)(o.FormItem, {
          required: A,
          title: m.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
          className: i(t, E.section),
          error: a,
          children: (0, r.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: "top",
            renderPopout: e => {
              let { closePopout: t } = e;
              return (0, r.jsx)(f.default, {
                closePopout: t,
                pickerIntention: p.EmojiIntention.SOUNDBOARD,
                onNavigateAway: t,
                onSelectEmoji: P(t),
                guildId: n,
                channel: R,
              });
            },
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, r.jsxs)("div", {
                ...e,
                className: E.emojiInput,
                ref: x,
                children: [
                  (0, r.jsx)(C.default, {
                    className: E.emojiButton,
                    active: n,
                    tabIndex: 0,
                    renderButtonContents:
                      null != S || null != _
                        ? () =>
                            (0, r.jsx)(s.default, { emojiName: _, emojiId: S })
                        : null,
                  }),
                  (0, r.jsx)(o.TextInput, {
                    inputClassName: E.emojiText,
                    placeholder:
                      m.default.Messages
                        .GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                    value: null != N ? ":".concat(N, ":") : "",
                    readOnly: !0,
                  }),
                  L &&
                    null != N &&
                    (0, r.jsx)(c.default, {
                      ...e,
                      onClick: y,
                      className: E.removeButton,
                    }),
                ],
              });
            },
          }),
        });
      }
    },
    104945: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983"),
        l = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("77078"),
        o = n("371642"),
        s = n("559046");
      function c(e) {
        let {
            filename: t,
            className: n,
            filters: a,
            buttonText: c,
            placeholder: d,
            onFileSelect: f,
          } = e,
          h = l.useRef(null);
        return (0, r.jsxs)("div", {
          className: i(n, s.fileUpload),
          children: [
            (0, r.jsx)("input", {
              className: s.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: d,
              type: "text",
              value: t,
            }),
            (0, r.jsxs)(u.Button, {
              size: u.Button.Sizes.MIN,
              className: s.fileUploadButton,
              children: [
                c,
                (0, r.jsx)(o.default, {
                  ref: h,
                  tabIndex: -1,
                  onChange: e => {
                    var t;
                    let n =
                      null === (t = e.currentTarget.files) || void 0 === t
                        ? void 0
                        : t[0];
                    f(n);
                  },
                  multiple: !1,
                  filters: a,
                }),
              ],
            }),
          ],
        });
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("446674"),
        l = n("76393");
      function a() {
        return (0, r.useStateFromStores)(
          [l.default],
          () =>
            null != l.default.getRemoteSessionId() ||
            null != l.default.getAwaitingRemoteSessionInfo()
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
            return C;
          },
          canGuildUseRoleIcons: function () {
            return v;
          },
        }),
        n("781738");
      var r = n("867805"),
        l = n("407063"),
        a = n("315102"),
        i = n("773336"),
        u = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, i.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
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
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let i = a.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(i, "?")
                .concat(d)
                .concat(f)
            : "".concat(s).concat(u.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        C = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(s, "/roles")) && e.includes("/icons/")),
        v = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(u.GuildFeatures.ROLE_ICONS);
        };
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("748820"),
        a = n("77078"),
        i = n("112679"),
        u = n("55689"),
        o = n("676379"),
        s = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        C = n("646718");
      function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: p,
            onComplete: m,
            onSubscriptionConfirmation: E,
            analyticsLocations: S,
            analyticsObject: _,
            analyticsLocation: A,
            analyticsSourceLocation: T,
            isGift: g = !1,
            giftMessage: I,
            subscriptionTier: N,
            trialId: R,
            postSuccessGuild: x,
            openInvoiceId: L,
            applicationId: M,
            referralTrialOfferId: P,
            giftRecipient: y,
            returnRef: w,
            subscription: j,
          } = null != e ? e : {},
          O = !1,
          D = (0, l.v4)(),
          b = s.default.getCurrentUser(),
          F = (0, f.isPremiumExactly)(b, C.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: l, ...a } = n;
              return (0, r.jsx)(e, {
                ...a,
                loadId: D,
                subscriptionTier: N,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(N),
                isGift: g,
                giftMessage: I,
                giftRecipient: y,
                initialPlanId: t,
                followupSKUInfo: v,
                onClose: (e, t) => {
                  l(),
                    null == p || p(e),
                    e &&
                      (null == E || E(),
                      !g &&
                        null != t &&
                        t === C.PremiumSubscriptionSKUs.TIER_2 &&
                        !F &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (O = !0),
                    null == m || m(),
                    !g && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: E,
                analyticsLocations: S,
                analyticsObject: _,
                analyticsLocation: A,
                analyticsSourceLocation: T,
                trialId: R,
                postSuccessGuild: x,
                planGroup: C.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: L,
                applicationId: M,
                referralTrialOfferId: P,
                returnRef: w,
                subscription: j,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !O &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: D,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != A ? A : _,
                  source: T,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: g,
                  eligible_for_trial: null != R,
                  application_id: M,
                  location_stack: S,
                }),
                (0, i.clearError)(),
                (0, u.clearPurchaseTokenAuthState)(),
                null == p || p(O),
                O && (null == E || E());
            },
          }
        );
      }
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return l;
          },
        });
      var r = n("913144");
      let l = e => {
        r.default.dispatch({
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
            return s;
          },
        });
      var r = n("884691"),
        l = n("79112"),
        a = n("685665"),
        i = n("929423");
      n("424562");
      var u = n("49111"),
        o = n("397336");
      function s(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: s,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, a.default)(),
          h = (0, r.useCallback)(() => {
            null != t && (0, i.initGuildIdentitySettings)(t, null != c ? c : f),
              l.default.open(
                u.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: s,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, s, c, d, f]);
        return h;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return m;
          },
          useCanStartPublicThread: function () {
            return E;
          },
          computeCanStartPublicThread: function () {
            return S;
          },
          useCanStartPrivateThread: function () {
            return _;
          },
          useCanStartThread: function () {
            return A;
          },
          useCanViewThreadForMessage: function () {
            return g;
          },
          useHasActiveThreads: function () {
            return I;
          },
          useCanManageThread: function () {
            return N;
          },
          useCanUnarchiveThread: function () {
            return L;
          },
          canUnarchiveThread: function () {
            return M;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return P;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          computeIsReadOnlyThread: function () {
            return w;
          },
          useIsThreadModerator: function () {
            return O;
          },
          useCanJoinThreadVoice: function () {
            return D;
          },
          useIsNonModInLockedThread: function () {
            return b;
          },
        });
      var r = n("917351"),
        l = n.n(r),
        a = n("316693"),
        i = n("446674"),
        u = n("296892"),
        o = n("889014"),
        s = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        C = n("299039"),
        v = n("401690"),
        p = n("49111");
      let m = (0, u.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function E(e, t) {
        let n = (0, i.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? p.Permissions.SEND_MESSAGES
              : a.default.combine(
                  p.Permissions.CREATE_PUBLIC_THREADS,
                  p.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function S(e, t) {
        let n = e.isForumLikeChannel()
            ? p.Permissions.SEND_MESSAGES
            : a.default.combine(
                p.Permissions.CREATE_PUBLIC_THREADS,
                p.Permissions.READ_MESSAGE_HISTORY
              ),
          r = h.default.can(n, e);
        return T(r, e, t);
      }
      function _(e) {
        let t = (0, i.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              a.default.combine(p.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === p.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function A(e) {
        let t = E(e),
          n = _(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, s.default)(n)))
          ) && !0
        );
      }
      function g(e) {
        let t = (0, i.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(C.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, i.useStateFromStores)(
            [h.default],
            () => h.default.can(p.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function I(e) {
        return (0, i.useStateFromStoresObject)([v.default, h.default], () => {
          let t = v.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = v.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = v.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = l(n).some(e =>
              h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)
            ),
            i = l(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)
            ),
            u = l(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: a || i || u,
            hasMoreActiveThreads: u || i,
          };
        });
      }
      function N(e) {
        let t = (0, i.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, i.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, i.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function R(e, t) {
        return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function x(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function L(e) {
        let t = (0, i.useStateFromStores)([h.default], () => R(e, h.default)),
          n = O(e);
        return x(e, t, n);
      }
      function M(e) {
        let t = R(e, h.default),
          n = (function (e) {
            return j(e, h.default);
          })(e);
        return x(e, t, n);
      }
      function P(e) {
        var t;
        let n = (0, i.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function y(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function w(e) {
        let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function j(e, t) {
        return null != e && t.can(p.Permissions.MANAGE_THREADS, e);
      }
      function O(e) {
        return (0, i.useStateFromStores)([h.default], () => j(e, h.default));
      }
      function D(e) {
        let t = (0, o.default)(),
          n = (0, i.useStateFromStores)([h.default], () =>
            h.default.can(p.Permissions.CONNECT, e)
          ),
          r = P(e),
          l = m.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && l && n && r;
      }
      function b(e) {
        let t = O(e);
        return e.isLockedThread() && !t;
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983"),
        l = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("77078"),
        o = n("760607"),
        s = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: c,
            ...d
          } = e,
          f = l.Children.only(t),
          h = (0, u.useRedesignIconContext)().enabled;
        return (0, r.jsxs)("div", {
          className: i(s.flowerStarContainer, a),
          style: { width: n, height: n },
          children: [
            (0, r.jsx)(o.default, { ...d, className: i(c, s.flowerStar) }),
            (0, r.jsx)("div", {
              className: i(s.childContainer, {
                [s.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("37983");
      function l(e) {
        let { size: t, horizontal: n = !1 } = e,
          l = n ? t : 1,
          a = n ? 1 : t;
        return (0, r.jsx)("span", {
          style: {
            display: "block",
            width: l,
            minWidth: l,
            height: a,
            minHeight: a,
          },
        });
      }
      n("884691");
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("469563"),
        a = n("733154"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                className: a,
                fill: l,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          a.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("469563"),
        a = n("505088"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: a,
              backgroundColor: u,
              ...o
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, i.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != u
                  ? (0, r.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: u })
                  : null,
                (0, r.jsx)("path", {
                  fill: l,
                  className: a,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          a.CircleXIcon,
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
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("469563"),
        i = n("163725"),
        u = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foregroundColor: i = l.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: s,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, u.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: i,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: a,
                  className: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          i.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("75196"),
        a = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: i,
            ...u
          } = e;
          return (0, r.jsx)("svg", {
            ...(0, l.default)(u),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, r.jsx)("path", {
              className: i,
              fill: a,
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
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("75196");
      function a(e) {
        let { width: t = 104, height: n = 80, ...a } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.default)(a),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("469563"),
        a = n("390300"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: a,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          a.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("469563"),
        a = n("287083"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: l = "currentColor",
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, i.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: l,
              }),
            });
          },
          a.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return i;
          },
          copy: function () {
            return u;
          },
        }),
        n("70102");
      var r = n("281071"),
        l = n("773336"),
        a = n("50885");
      let i = (() => {
        if (l.isPlatformEmbedded) return null != a.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function u(e) {
        return (
          !!i && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: u,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: i = "transparent",
          secondaryColorClass: u = "",
          color: o = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...c
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof i ? i : i.css,
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: s,
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
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: u,
            }),
          ],
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: u,
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
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: u,
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
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: u,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: u,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          n.selectNodeContents(l),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let a = document.execCommand("copy");
        return t.removeChild(l), a;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=8c4dc245f8056c706b32.js.map
