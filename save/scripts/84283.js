(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84283"],
  {
    68422: function (e, t, n) {
      "use strict";
      e.exports = n.p + "467602d632b5f9c1ce4b.svg";
    },
    578817: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d4d9f2bff23beec65b1f.svg";
    },
    926607: function (e, t, n) {
      "use strict";
      function s(e, t) {
        return (
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.r(t),
        n.d(t, {
          _: function () {
            return s;
          },
        });
    },
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return i;
          },
          categoryExpand: function () {
            return a;
          },
          categoryCollapseAll: function () {
            return l;
          },
          categoryExpandAll: function () {
            return r;
          },
        });
      var s = n("913144");
      function i(e) {
        s.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function a(e) {
        s.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function l(e) {
        s.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function r(e) {
        s.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    289867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("913144"),
        i = {
          toggleMembersSection() {
            s.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            s.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            s.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    549825: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("77078"),
        r = n("978970"),
        u = n("36694"),
        o = n("945330"),
        c = n("434106");
      function d(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: n,
          grantedPermissionsHeader: i,
          disabledPermissionsHeader: d,
          className: f,
        } = e;
        return (0, s.jsxs)("div", {
          className: a(c.list, f),
          children: [
            null != t && t.length > 0
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    null != i
                      ? (0, s.jsx)(l.FormTitle, {
                          className: c.permissionHeader,
                          children: i,
                        })
                      : null,
                    (0, s.jsx)("div", {
                      className: c.container,
                      children: t.map(e =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, s.jsx)(u.default, {
                                width: 16,
                                height: 16,
                                className: c.check,
                              }),
                              (0, s.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, r.getPermissionName)(e),
                              }),
                            ],
                          },
                          e.toString()
                        )
                      ),
                    }),
                  ],
                })
              : null,
            null != n && n.length > 0
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    null != d
                      ? (0, s.jsx)(l.FormTitle, {
                          className: c.permissionHeader,
                          children: d,
                        })
                      : null,
                    (0, s.jsx)("div", {
                      className: c.container,
                      children: n.map(e =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, s.jsx)(o.default, {
                                width: 16,
                                height: 16,
                                className: c.cross,
                              }),
                              (0, s.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, r.getPermissionName)(e),
                              }),
                            ],
                          },
                          e.toString()
                        )
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    7037: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("833067");
      n.es(s, t);
    },
    772279: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("890439");
      n.es(s, t);
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("35466");
      n.es(s, t);
    },
    392646: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("30625");
      n.es(s, t);
    },
    533806: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("224701");
      n.es(s, t);
    },
    722525: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          transitionToChannel: function () {
            return u;
          },
          transitionToPage: function () {
            return o;
          },
        });
      var s = n("77078"),
        i = n("255397"),
        a = n("406189"),
        l = n("393027"),
        r = n("49111");
      function u(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        !(0, s.hasAnyModalOpen)() &&
          (n && a.default.channelListScrollTo(e, t),
          u && null != t && i.default.updateChatOpen(t, !0),
          l.default.getState().updatePath(r.Routes.CHANNEL(e, t)));
      }
      function o(e) {
        !(0, s.hasAnyModalOpen)() && l.default.getState().updatePath(e);
      }
    },
    765105: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("90915"),
        a = n("73749"),
        l = n("468560"),
        r = n("271081"),
        u = n("298557"),
        o = n("176162"),
        c = n("750947"),
        d = n("49111");
      let f = function (e) {
        let { match: t } = e,
          { applicationId: n, section: i } = t.params,
          a = (0, l.default)(c.ApplicationDirectoryProfileSections, i);
        return (0, s.jsx)(u.default, { applicationId: n, initialSection: a });
      };
      function p() {
        return (0, s.jsxs)(i.Switch, {
          children: [
            (0, s.jsx)(a.default, {
              path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
              component: o.default,
            }),
            (0, s.jsx)(a.default, {
              path: d.Routes.APPLICATION_DIRECTORY_PROFILE(
                ":applicationId",
                ":section?"
              ),
              render: f,
            }),
            (0, s.jsx)(a.default, {
              path: d.Routes.APPLICATION_DIRECTORY,
              component: r.default,
            }),
          ],
        });
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("627445"),
        a = n.n(i),
        l = n("77078"),
        r = n("845579"),
        u = n("662255"),
        o = n("306160");
      function c(e) {
        let { id: t, label: n, onSuccess: i, shiftId: c, showIconFirst: d } = e,
          f = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
        let p = "devmode-copy-id-".concat(t);
        return (0, s.jsx)(
          l.MenuItem,
          {
            id: p,
            label: n,
            action: function (e) {
              let n = null != c && e.shiftKey ? c : t;
              a(null != n, "cannot copy null text"),
                (0, o.copy)(n),
                null == i || i();
            },
            icon: u.default,
            showIconFirst: d,
          },
          p
        );
      }
    },
    577357: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getBenefitKey: function () {
            return l;
          },
          formatPlanInterval: function () {
            return r;
          },
          formatPlanIntervalDuration: function () {
            return u;
          },
          isChannelBenefit: function () {
            return o;
          },
          isIntangibleBenefit: function () {
            return c;
          },
        });
      var s = n("677795"),
        i = n("646718"),
        a = n("782340");
      function l(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function r(e) {
        let { interval: t, interval_count: n } = e;
        return (function (e) {
          switch (e) {
            case i.SubscriptionIntervalTypes.DAY:
              return a.default.Messages.DAY;
            case i.SubscriptionIntervalTypes.MONTH:
              return a.default.Messages.MONTH;
            case i.SubscriptionIntervalTypes.YEAR:
              return a.default.Messages.YEAR;
          }
        })(t).format({ count: n });
      }
      function u(e) {
        let { interval: t, interval_count: n } = e;
        switch (t) {
          case i.SubscriptionIntervalTypes.DAY:
            if (n > 0 && n % 7 == 0)
              return a.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: n / 7,
              });
            return a.default.Messages.DURATION_DAYS_CAPITALIZE.format({
              days: n,
            });
          case i.SubscriptionIntervalTypes.MONTH:
            return a.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: n,
            });
          case i.SubscriptionIntervalTypes.YEAR:
            return a.default.Messages.DURATION_YEARS_CAPITALIZE.format({
              years: n,
            });
        }
      }
      function o(e) {
        return e.ref_type === s.GuildRoleSubscriptionBenefitTypes.CHANNEL;
      }
      function c(e) {
        return e.ref_type === s.GuildRoleSubscriptionBenefitTypes.INTANGIBLE;
      }
    },
    95226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007");
      var s = n("37983"),
        i = n("884691"),
        a = n("617258"),
        l = n("446674"),
        r = n("769846"),
        u = n("77078"),
        o = n("598981"),
        c = n("682777"),
        d = n("577357"),
        f = n("393414"),
        p = n("160299"),
        h = n("153160"),
        I = n("271560"),
        v = n("991254"),
        E = n("777053"),
        _ = n("139737"),
        T = n("375010"),
        C = n("49111"),
        m = n("782340"),
        A = n("597550");
      let g = (0, a.cssValueToNumber)(
          r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE
        ),
        N = "start_application_subscription",
        R = e => {
          let { listing: t } = e,
            n = t.image_asset;
          if (null == n) return null;
          let i = (0, I.getAssetURL)(t.application_id, n, g);
          return (0, s.jsx)("div", {
            children: (0, s.jsx)("img", {
              src: i,
              alt: "",
              className: A.listingImage,
            }),
          });
        },
        S = e => {
          let { children: t } = e;
          return (0, s.jsx)(u.Button, {
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            size: u.Button.Sizes.SMALL,
            children: t,
          });
        };
      function L(e) {
        let {
            listing: t,
            groupListingId: n,
            guildId: a,
            analyticsLocation: r,
            onComplete: I,
            forcesTransitionToGuild: g,
          } = e,
          L = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing),
          { activeSubscription: x, activeSubscriptionListing: P } = (0,
          v.useActiveSubscriptionListingForApplication)(t.application_id, a),
          {
            openModal: O,
            canOpenModal: M,
            cannotOpenReason: y,
          } = (0, T.default)({
            listing: t,
            guildId: a,
            groupListingId: n,
            showBenefitsFirst: !1,
            analyticsLocation: r,
            onComplete: I,
            forcesTransitionToGuild: g,
          }),
          j = t.subscription_plans[0],
          b = 0 === j.price,
          w = (null == P ? void 0 : P.id) === t.id,
          D = (0, o.default)(),
          U = (D && !M) || L,
          V = () => {
            D ? O() : (0, c.redirectToLogin)({ [N]: "true" });
          };
        return (
          i.useEffect(() => {
            let e = new URL(location.href);
            if (D && !U && "true" === e.searchParams.get(N)) {
              e.searchParams.delete(N);
              let t = e.pathname + e.search;
              (0, f.replaceWith)(t), O();
            }
          }, [D, O, U]),
          (0, s.jsxs)("div", {
            className: A.container,
            children: [
              (0, s.jsxs)("div", {
                className: A.cardHeader,
                children: [
                  (0, s.jsx)(R, { listing: t }),
                  (0, s.jsx)(u.Text, {
                    variant: "text-lg/medium",
                    color: "interactive-active",
                    children: t.name,
                  }),
                  (0, s.jsxs)("div", {
                    className: A.priceAndButtonContainer,
                    children: [
                      (0, s.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "interactive-normal",
                        children: b
                          ? m.default.Messages.APPLICATION_SUBSCRIPTION_FREE
                          : m.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format(
                              {
                                amount: (0, h.formatPrice)(j.price, j.currency),
                                period: (0, d.formatPlanInterval)(j),
                              }
                            ),
                      }),
                      (() => {
                        var e;
                        if (w)
                          return (0, s.jsx)(S, {
                            children:
                              (null == x ? void 0 : x.status) ===
                              C.SubscriptionStatusTypes.CANCELED
                                ? m.default.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL
                                : m.default.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
                          });
                        if (b)
                          return null == P
                            ? (0, s.jsx)(S, {
                                children:
                                  m.default.Messages
                                    .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
                              })
                            : null;
                        return (0, s.jsx)(u.Tooltip, {
                          tooltipClassName: A.subscribeButtonTooltip,
                          text: M || !D ? null : y,
                          "aria-label":
                            null !== (e = !M && y) && void 0 !== e && e,
                          children: e =>
                            (0, s.jsx)(E.default, {
                              ...e,
                              disabled: U,
                              submitting: !1,
                              onClick: V,
                              children:
                                m.default.Messages
                                  .APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL,
                            }),
                        });
                      })(),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: A.benefitsContainer,
                children: (0, s.jsx)(_.SubscriptionListingBenefits, {
                  applicationId: t.application_id,
                  storeListingBenefits: t.store_listing_benefits,
                  skuBenefits: t.sku_benefits.benefits,
                  className: A.benefit,
                }),
              }),
            ],
          })
        );
      }
    },
    766366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("37983"),
        i = n("884691"),
        a = n("77078"),
        l = n("850068"),
        r = n("598981"),
        u = n("991254"),
        o = n("129408"),
        c = n("95226"),
        d = n("782340"),
        f = n("187598");
      function p(e) {
        let { listing: t } = e,
          n = (0, o.isApplicationGuildSubscription)(t.sku_flags),
          i = (0, o.isApplicationUserSubscription)(t.sku_flags);
        return i || n
          ? (0, s.jsxs)("div", {
              className: f.cta,
              children: [
                (0, s.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  children: n
                    ? d.default.Messages
                        .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER
                    : d.default.Messages
                        .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER,
                }),
                (0, s.jsx)(a.Heading, {
                  color: "interactive-normal",
                  variant: "heading-md/normal",
                  children: n
                    ? d.default.Messages
                        .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                    : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                        { applicationName: t.name }
                      ),
                }),
              ],
            })
          : null;
      }
      function h(e) {
        var t;
        let {
            guildId: n,
            applicationId: o,
            applicationPrimarySkuId: d,
            analyticsLocation: h,
            onComplete: I,
            forcesTransitionToGuild: v,
          } = e,
          { listingsLoaded: E } = (0, u.useFetchListingsForApplication)(o, d),
          { entitlementsLoaded: _ } = (0, u.useFetchEntitlementsForGuild)({
            guildId: n,
          }),
          { subscriptionGroupListing: T } = (0,
          u.useActiveSubscriptionListingForApplication)(o, n),
          C = (0, r.default)();
        i.useEffect(() => {
          C && l.fetchSubscriptions();
        }, [C]);
        let m = null == T ? void 0 : T.id,
          A =
            null == T
              ? void 0
              : null === (t = T.subscription_listings) || void 0 === t
                ? void 0
                : t.filter(e => e.published);
        return E && (null == n || _)
          ? null == m || null == A || 0 === A.length
            ? null
            : (0, s.jsx)("div", {
                className: f.container,
                children: A.map(e =>
                  (0, s.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        (0, s.jsx)(p, { listing: e }),
                        (0, s.jsx)(c.default, {
                          listing: e,
                          guildId: n,
                          groupListingId: m,
                          analyticsLocation: h,
                          onComplete: I,
                          forcesTransitionToGuild: v,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              })
          : (0, s.jsx)("div", {
              className: f.loadingContainer,
              children: (0, s.jsx)(a.Spinner, {}),
            });
      }
    },
    208021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("913144"),
        i = n("819689"),
        a = n("115718"),
        l = n("347895"),
        r = n("341329"),
        u = n("582713"),
        o = n("724210"),
        c = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: a,
              hasSingleMessageRequest: l,
            } = e;
            s.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: a,
              channelId: t,
              details: {
                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: l,
              },
            }),
              null != n
                ? i.default.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                  })
                : r.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: n,
              baseChannelId: l,
              flash: o = !0,
              details: c,
            } = e;
            s.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: l,
              channelId: n,
              details: c,
            });
            let d = null == c ? void 0 : c.initialMessageId;
            null != d
              ? i.default.jumpToMessage({
                  channelId: n,
                  messageId: d,
                  flash: o,
                  jumpType: a.JumpTypes.INSTANT,
                })
              : r.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, l.selectHomeResourceChannel)(t, n, !1),
              s.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: u.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                channelId: n,
              }));
          },
          openThreadAsSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              channelId: l,
              flash: o = !0,
              details: c,
            } = e;
            s.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: l,
              details: c,
            }),
              (null == c ? void 0 : c.initialMessageId) != null
                ? i.default.jumpToMessage({
                    channelId: l,
                    messageId: c.initialMessageId,
                    flash: o,
                    jumpType: a.JumpTypes.INSTANT,
                  })
                : r.default.fetchMessages({ guildId: t, channelId: l });
          },
          closeChannelSidebar(e) {
            s.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: i,
              details: a,
            } = e;
            return s.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: i,
              baseChannelId: n,
              guildId: t,
              details: a,
            });
          },
          closeGuildSidebar(e) {
            s.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    893980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackProfilePanelViewed: function () {
            return u;
          },
          trackProfilePanelToggled: function () {
            return o;
          },
        });
      var s = n("373469"),
        i = n("824563"),
        a = n("27618"),
        l = n("599110"),
        r = n("49111");
      let u = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: s,
            activity: i,
            customStatusActivity: a,
            status: u,
          } = e;
          l.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != i &&
              (null == i ? void 0 : i.type) !== r.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == i ? void 0 : i.type) === r.ActivityTypes.PLAYING,
            load_duration_ms: s,
            profile_user_status: u,
            has_custom_status: null != a,
            has_profile_effect: null != t.profileEffectId,
            ...c(t),
          });
        },
        o = (e, t) => {
          l.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...c(e),
          });
        },
        c = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            l = null != s.default.getAnyStreamForUser(n),
            u = i.default.findActivity(n, e => {
              let { type: t } = e;
              return l
                ? t === r.ActivityTypes.PLAYING
                : t !== r.ActivityTypes.CUSTOM_STATUS;
            }),
            o = null == u ? void 0 : u.assets,
            c = a.default.isFriend(n);
          return {
            has_images: !!(null !== (t = null == o ? void 0 : o.large_image) &&
            void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.small_image),
            is_friend: c,
            viewed_profile_user_id: n,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
    },
    476108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("446674"),
        i = n("95410"),
        a = n("913144"),
        l = n("49111");
      let r = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = r,
        o = "LAST_VIEWED_PATH";
      class c extends s.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
          u = null != e ? e : r;
        }
        get defaultRoute() {
          return l.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : l.Routes.ME;
        }
        get fallbackRoute() {
          return l.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (c.displayName = "DefaultRouteStore"),
        (c.persistKey = "DefaultRouteStore"),
        (c.migrations = [
          () => {
            let e = i.default.get(o, null);
            return i.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var d = new c(a.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    287850: function (e, t, n) {
      "use strict";
      let s, i, a;
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007"),
        n("424973");
      var l,
        r,
        u = n("866227"),
        o = n.n(u),
        c = n("446674"),
        d = n("407846"),
        f = n("913144"),
        p = n("21121"),
        h = n("934306"),
        I = n("288518"),
        v = n("486503"),
        E = n("233069"),
        _ = n("42203"),
        T = n("305961"),
        C = n("660478"),
        m = n("282109"),
        A = n("697218"),
        g = n("299039"),
        N = n("724210");
      ((r = l || (l = {})).DEFAULT = "DEFAULT"), (r.FAVORITE = "FAVORITE");
      let R = new d.SecondaryIndexMap(
        e => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let s =
                    null !==
                      (n =
                        null !== (t = C.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = o(i).valueOf(),
                    t = g.default.fromTimestamp(e);
                  return g.default.compare(s, t) > 0 ? s : t;
                }
                return s;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            m.default.isMessagesFavorite(e.id) &&
            (0, p.isInMainTabsExperiment)(),
          isRequest: I.default.isMessageRequest(e.id) || v.default.isSpam(e.id),
        };
      }
      function L() {
        R.clear(),
          Object.values(_.default.getMutablePrivateChannels()).forEach(e => {
            R.set(e.id, S(e));
          }),
          (0, p.isInMainTabsExperiment)() &&
            (0, h.isSplitMessagesTab)() &&
            m.default.getAddedToMessages().forEach(e => {
              let t = _.default.getChannel(e);
              null != t &&
                (0, E.isGuildTextChannelType)(t.type) &&
                R.set(t.id, S(t));
            });
      }
      function x() {
        let e = _.default.getMutablePrivateChannels();
        for (let t in e) R.set(t, S(e[t]));
      }
      let P =
        ((s = []),
        (i = []),
        (a = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
          return (
            (s !== e || i !== t) &&
              ((a = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (s = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (i = t)),
            a
          );
        });
      class O extends c.default.Store {
        initialize() {
          this.waitFor(_.default, T.default, A.default, I.default, m.default),
            this.syncWith([m.default, I.default], L);
        }
        getPrivateChannelIds() {
          return P();
        }
        getSortedChannels() {
          return [R.values("FAVORITE"), R.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            R.values().forEach(t => {
              let { channelId: n, lastMessageId: s } = t;
              e[n] = s;
            }),
            e
          );
        }
      }
      O.displayName = "PrivateChannelSortStore";
      var M = new O(f.default, {
        CONNECTION_OPEN: L,
        CONNECTION_OPEN_SUPPLEMENTAL: L,
        OVERLAY_INITIALIZE: L,
        CACHE_LOADED: x,
        CACHE_LOADED_LAZY: x,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, S(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, E.isPrivate)(t.type) ||
            t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          R.set(t.id, S(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return R.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: n } = e;
          if (!R.has(t)) return !1;
          let s = _.default.getChannel(t);
          return null != s && R.set(t, S(s, n.id));
        },
        GUILD_CREATE: function (e) {
          let t = e.guild.id;
          return R.delete(t);
        },
        LOGOUT: function () {
          R.clear();
        },
      });
    },
    137215: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var s = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        r = n("546671"),
        u = n("711603");
      let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
        c = {
          [o.UP]: u.up,
          [o.RIGHT]: u.right,
          [o.DOWN]: u.down,
          [o.LEFT]: u.left,
        };
      class d extends i.PureComponent {
        render() {
          let { direction: e, className: t } = this.props;
          return (0, s.jsx)(r.default, {
            className: l(u.arrow, t, { [c[e]]: !0 }),
          });
        }
      }
      d.Directions = o;
      var f = d;
    },
    265836: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var s = n("37983"),
        i = n("884691"),
        a = n("862337");
      class l extends i.Component {
        static getDerivedStateFromProps(e) {
          return e.disable ? { hovered: !1 } : null;
        }
        componentDidMount() {
          let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
          !t && !n && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, t) {
          var n, s, i, a;
          let { props: l } = this;
          let r =
            ((n = l),
            (s = this.state),
            !n.disable && !(s.hovered && n.pauseOnHover));
          let u =
            ((i = e), (a = t), !i.disable && !(a.hovered && i.pauseOnHover));
          (r && !u) || e.interval !== l.interval
            ? this.startTimer()
            : !r && u && this.stopTimer();
        }
        startTimer() {
          let { interval: e, onInterval: t, disable: n } = this.props;
          !n &&
            this.timer.start(e, () => {
              t();
            });
        }
        stopTimer() {
          this.timer.stop();
        }
        render() {
          let { children: e, className: t, disable: n } = this.props,
            i = n
              ? null
              : {
                  onMouseEnter: this.handlePause,
                  onFocus: this.handlePause,
                  onMouseLeave: this.handleResume,
                  onBlur: this.handleResume,
                };
          return (0, s.jsx)("div", { ...i, className: t, children: e });
        }
        constructor(...e) {
          super(...e),
            (this.timer = new a.Interval()),
            (this.state = { hovered: !1 }),
            (this.handlePause = () => {
              !this.state.hovered && this.setState({ hovered: !0 });
            }),
            (this.handleResume = () => {
              this.setState({ hovered: !1 });
            });
        }
      }
      l.defaultProps = { disable: !1, pauseOnHover: !1 };
      var r = l;
    },
    466857: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var s = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        r = n("77078"),
        u = n("381546"),
        o = n("229915"),
        c = n("782340"),
        d = n("717386");
      class f extends i.Component {
        render() {
          let {
              autoFocus: e,
              label: t,
              placeholder: n,
              searchTerm: i,
              inputClassName: a,
              className: f,
              onChange: p,
              onFocus: h,
              onBlur: I,
              onKeyPress: v,
              autoComplete: E,
              forwardedRef: _,
              closeIconClassName: T,
              searchIconClassName: C,
              cta: m,
            } = this.props,
            A = null != i && i.length > 0,
            g = null != _ ? _ : this._textInputRef;
          return (0, s.jsx)(r.FocusRing, {
            focusTarget: g,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)("div", {
              className: l(d.searchBox, f),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(r.TextInput, {
                  inputRef: g,
                  focusProps: { enabled: !1 },
                  name: "search",
                  maxLength: 100,
                  className: d.searchBoxInputWrapper,
                  inputClassName: l(d.searchBoxInput, a),
                  onChange: p,
                  onFocus: h,
                  onBlur: I,
                  onKeyPress: v,
                  value: A ? i : "",
                  placeholder: n,
                  autoFocus: e,
                  "aria-label": t,
                  autoComplete: E ? "on" : "off",
                }),
                null != m
                  ? (0, s.jsx)(r.Text, {
                      color: "text-muted",
                      variant: "text-xs/normal",
                      className: d.cta,
                      children: m,
                    })
                  : null,
                A
                  ? (0, s.jsx)(r.Clickable, {
                      onClick: this.handleClear,
                      className: d.clear,
                      "aria-label": c.default.Messages.SEARCH_CLEAR,
                      children: (0, s.jsx)(u.default, {
                        className: l(d.clearIcon, T),
                      }),
                    })
                  : (0, s.jsx)(o.default, {
                      className: l(d.searchIcon, C),
                      "aria-label": c.default.Messages.SEARCH,
                    }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._textInputRef = i.createRef()),
            (this._containerRef = i.createRef()),
            (this.handleClear = () => {
              let { onClear: e, forwardedRef: t } = this.props,
                { current: n } = null != t ? t : this._textInputRef;
              null != n && n.focus(), null != e && e();
            });
        }
      }
      f.defaultProps = { autoComplete: !1 };
      var p = i.forwardRef((e, t) => (0, s.jsx)(f, { forwardedRef: t, ...e }));
    },
    546671: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("7037"),
        l = n("246053"),
        r = (0, i.replaceIcon)(function (e) {
          return (0, s.jsx)(l.default, {
            ...e,
            direction: l.default.Directions.UP,
          });
        }, a.ArrowSmallUpIcon);
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("35647"),
        l = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: a,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          a.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    627490: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("772279"),
        l = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              className: a,
              foreground: r,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(u),
              className: a,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: r,
                fill: i,
                d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z",
              }),
            });
          },
          a.CompassIcon,
          void 0,
          { size: 24 }
        );
    },
    781896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("533806"),
        l = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: a,
                d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                fill: i,
              }),
            });
          },
          a.UserIcon,
          void 0,
          { size: 24 }
        );
    },
    849483: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("392646"),
        l = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsxs)("g", {
                fill: "none",
                className: a,
                children: [
                  (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                    fill: i,
                  }),
                  (0, s.jsx)("path", {
                    d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                    fill: i,
                  }),
                ],
              }),
            });
          },
          a.UserCircleStatusIcon,
          void 0,
          { size: 24 }
        );
    },
    833067: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ArrowSmallUpIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: r,
          }),
        });
      };
    },
    890439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CompassIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    30625: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserCircleStatusIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M23 12.38c-.02.38-.45.58-.78.4a6.97 6.97 0 0 0-6.27-.08.54.54 0 0 1-.44 0 8.97 8.97 0 0 0-11.16 3.55c-.1.15-.1.35 0 .5.37.58.8 1.13 1.28 1.61.24.24.64.15.8-.15.19-.38.39-.73.58-1.02.14-.21.43-.1.4.15l-.19 1.96c-.02.19.07.37.23.47A8.96 8.96 0 0 0 12 21a.4.4 0 0 1 .38.27c.1.33.25.65.4.95.18.34-.02.76-.4.77L12 23a11 11 0 1 1 11-10.62ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
              className: r,
            }),
          ],
        });
      };
    },
    224701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=3387940c8718011b770b.js.map
