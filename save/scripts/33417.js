(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33417"],
  {
    421898: function (e, t, n) {
      (e = n.nmd(e)),
        !(function () {
          "use strict";
          var t = {}.hasOwnProperty;
          function n() {
            for (var e = "", l = 0; l < arguments.length; l++) {
              var a = arguments[l];
              a &&
                (e = s(
                  e,
                  (function (e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return n.apply(null, e);
                    if (
                      e.toString !== Object.prototype.toString &&
                      !e.toString.toString().includes("[native code]")
                    )
                      return e.toString();
                    var l = "";
                    for (var a in e) t.call(e, a) && e[a] && (l = s(l, a));
                    return l;
                  })(a)
                ));
            }
            return e;
          }
          function s(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          void 0 !== e && e.exports
            ? ((n.default = n), (e.exports = n))
            : "function" == typeof define &&
                "object" == typeof define.amd &&
                define.amd
              ? define("classnames", [], function () {
                  return n;
                })
              : (window.classNames = n);
        })();
    },
    333693: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("700052");
      n.es(s, t);
    },
    131233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var s,
        l,
        a = n("37983"),
        i = n("884691"),
        r = n("153967"),
        o = n("771072"),
        c = n("382133"),
        d = n("630394"),
        u = n("681959"),
        h = n("91601"),
        f = n("446674"),
        m = n("333693"),
        x = n("618991"),
        v = n("77078"),
        g = n("812204"),
        p = n("685665"),
        j = n("509167"),
        C = n("129408"),
        N = n("377527"),
        S = n("375010"),
        T = n("698041"),
        R = n("315102"),
        b = n("153160"),
        I = n("271560"),
        y = n("253981"),
        M = n("49111"),
        E = n("646718"),
        L = n("782340"),
        O = n("816896");
      let w = { width: 20, height: 20, color: "white" };
      function _(e) {
        var t, n;
        let {
            app: s,
            subscriptionGroupListing: l,
            guildId: o,
            products: d,
          } = e,
          u =
            null !==
              (n =
                null == l
                  ? void 0
                  : null === (t = l.subscription_listings) || void 0 === t
                    ? void 0
                    : t.filter(e => e.published)) && void 0 !== n
              ? n
              : [],
          [h, f] = i.useState(() => (u.length > 0 ? 0 : 1)),
          g = i.useMemo(() => {
            let e = s.getIconSource(100);
            if (null != e && "number" != typeof e) {
              let n;
              if (
                (Array.isArray(e)
                  ? e.length > 0 && (n = e[0].uri)
                  : (n = e.uri),
                null != n)
              ) {
                var t;
                return null !== (t = y.default.toURLSafe(n)) && void 0 !== t
                  ? t
                  : void 0;
              }
            }
          }, [s]),
          { bot: p } = s,
          j = i.useMemo(() => {
            var e;
            if ((null == p ? void 0 : p.banner) == null) return;
            let t = (0, R.getUserBannerURL)({
              id: p.id,
              banner: p.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != t &&
              null !== (e = y.default.toURLSafe(t)) &&
              void 0 !== e
              ? e
              : void 0;
          }, [p]),
          N = u.length > 0 && d.length > 0,
          S =
            1 === h
              ? d.map(e => (0, a.jsx)(A, { sku: e, appId: s.id }, e.id))
              : null != l
                ? u.map(e =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: O.productCard,
                        children: (0, a.jsx)(B, {
                          appId: s.id,
                          groupListingId: l.id,
                          guildId: o,
                          listing: e,
                          groupListingType: (0,
                          C.isApplicationUserSubscription)(l.sku_flags)
                            ? "user"
                            : "guild",
                        }),
                      },
                      e.id
                    )
                  )
                : [];
        return (0, a.jsxs)("div", {
          className: O.wrapper,
          children: [
            (0, a.jsx)("div", {
              className: O.banner,
              children: (0, a.jsx)(r.Banner, {
                title: s.name,
                iconSrc: g,
                backgroundSrc: j,
              }),
            }),
            (0, a.jsx)(v.Text, {
              variant: "eyebrow",
              className: O.tabsText,
              children: L.default.Messages.STOREFRONT_PREMIUM_ITEMS,
            }),
            (0, a.jsx)("div", {
              className: O.tabs,
              children: N
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(c.default, {
                        icon: (0, a.jsx)(m.BadgeIcon, { ...w }),
                        title: L.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                        body: L.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format(
                          { appName: s.name }
                        ),
                        disabled: 0 === u.length,
                        selected: 0 === h,
                        onClick: () => {
                          f(0);
                        },
                      }),
                      (0, a.jsx)(c.default, {
                        icon: (0, a.jsx)(x.TicketIcon, { ...w }),
                        title: L.default.Messages.STOREFRONT_APP_PRODUCTS,
                        body: L.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format(
                          { appName: s.name }
                        ),
                        disabled: 0 === d.length,
                        selected: 1 === h,
                        onClick: () => {
                          f(1);
                        },
                      }),
                    ],
                  })
                : null,
            }),
            (0, a.jsx)("div", {
              className: O.productList,
              style: { gridTemplateColumns: S.length > 1 ? "1fr 1fr" : "1fr" },
              children: S,
            }),
          ],
        });
      }
      ((l = s || (s = {}))[(l.SUBSCRIPTIONS = 0)] = "SUBSCRIPTIONS"),
        (l[(l.PRODUCTS = 1)] = "PRODUCTS");
      function B(e) {
        let {
            appId: t,
            groupListingId: n,
            guildId: s,
            listing: l,
            groupListingType: r,
          } = e,
          { openModal: c } = (0, S.default)({
            listing: l,
            guildId: s,
            groupListingId: n,
            showBenefitsFirst: !1,
            analyticsLocation: M.AnalyticsLocations.BOT_PROFILE_POPOUT,
          }),
          d = i.useMemo(() => {
            var e;
            return null === (e = l.store_listing_benefits) || void 0 === e
              ? void 0
              : e.map(e => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, N.getBenefitIcon)(t, e.icon),
                }));
          }, [t, l.store_listing_benefits]),
          u = i.useMemo(() => {
            var e;
            return null != l.image_asset &&
              null !==
                (e = y.default.toURLSafe(
                  (0, I.getAssetURL)(t, l.image_asset)
                )) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, l.image_asset]),
          f = l.subscription_plans.length > 0 ? l.subscription_plans[0] : null;
        if (null === f) return null;
        let m = (0, a.jsx)(v.Button, {
          onClick: c,
          children: L.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
            rate: (0, b.formatRate)(
              (0, b.formatPrice)(f.price, f.currency),
              E.SubscriptionIntervalTypes.MONTH,
              1
            ),
          }),
        });
        return (0, a.jsx)(h.SubscriptionCard, {
          title: l.name,
          description: l.description,
          imgSrc: u,
          subscriptionType: r,
          onPurchase: c,
          PurchaseButton: e =>
            (0, a.jsx)(v.Button, {
              ...e,
              children: L.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                rate: (0, b.formatRate)(
                  (0, b.formatPrice)(f.price, f.currency),
                  E.SubscriptionIntervalTypes.MONTH,
                  1
                ),
              }),
            }),
          benefitItems:
            null != d
              ? d.map(e =>
                  (0, a.jsx)(
                    h.SubscriptionCardBenefit,
                    { name: e.title, icon: e.icon },
                    e.id
                  )
                )
              : void 0,
          onDetails:
            null != d
              ? () => {
                  (0, v.openModal)(e => {
                    let { onClose: t, transitionState: n } = e;
                    return (0, a.jsxs)(v.ModalRoot, {
                      transitionState: n,
                      size: v.ModalSize.DYNAMIC,
                      className: O.subDetailsModal,
                      children: [
                        (0, a.jsx)(o.CardDetails, {
                          benefits: d.map(e =>
                            (0, a.jsx)(
                              h.SubscriptionCardBenefit,
                              {
                                name: e.title,
                                icon: e.icon,
                                description: e.description,
                              },
                              e.id
                            )
                          ),
                          description: l.description,
                          imgSrc: u,
                          title: l.name,
                          subscriptionType: r,
                          onClose: t,
                        }),
                        (0, a.jsxs)(v.ModalFooter, {
                          className: O.footer,
                          children: [
                            (0, a.jsx)(v.Button, {
                              className: O.backButton,
                              onClick: t,
                              look: v.ButtonLooks.BLANK,
                              children: (0, a.jsx)(v.Text, {
                                color: "header-primary",
                                tag: "p",
                                variant: "heading-md/semibold",
                                children: L.default.Messages.BACK,
                              }),
                            }),
                            m,
                          ],
                        }),
                      ],
                    });
                  });
                }
              : void 0,
        });
      }
      function A(e) {
        var t, n;
        let { sku: s, appId: l } = e,
          { analyticsLocations: i } = (0, p.default)(g.default.APP_STOREFRONT),
          r = (0, f.useStateFromStores)(
            [T.default],
            () => T.default.getForSKU(s.id),
            [s]
          ),
          { price: o } = s;
        if (null == o) return null;
        let c = (0, a.jsx)(v.Button, {
          onClick: () => {
            (0, j.default)({
              applicationId: l,
              skuId: s.id,
              analyticsLocations: i,
            });
          },
          children: L.default.Messages.STOREFRONT_PURCHASE_FOR.format({
            price: (0, b.formatPrice)(o.amount, o.currency),
          }),
        });
        return (0, a.jsx)(d.ProductCard, {
          description:
            null !== (t = null == r ? void 0 : r.description) && void 0 !== t
              ? t
              : void 0,
          headerImage:
            (null == r ? void 0 : r.headerBackground) != null &&
            null !==
              (n = y.default.toURLSafe(
                (0, I.getAssetURL)(l, r.headerBackground)
              )) &&
            void 0 !== n
              ? n
              : void 0,
          onDetails: () => {
            (0, v.openModal)(e => {
              var t, n;
              let { onClose: i, transitionState: o } = e;
              return (0, a.jsxs)(v.ModalRoot, {
                transitionState: o,
                children: [
                  (0, a.jsx)(u.ProductDetails, {
                    description:
                      null !== (t = null == r ? void 0 : r.description) &&
                      void 0 !== t
                        ? t
                        : void 0,
                    headerImage:
                      (null == r ? void 0 : r.headerBackground) != null &&
                      null !==
                        (n = y.default.toURLSafe(
                          (0, I.getAssetURL)(l, r.headerBackground)
                        )) &&
                      void 0 !== n
                        ? n
                        : void 0,
                    title: s.name,
                  }),
                  (0, a.jsxs)(v.ModalFooter, {
                    className: O.footer,
                    children: [
                      (0, a.jsx)("button", {
                        className: O.backButton,
                        onClick: i,
                        children: (0, a.jsx)(v.Text, {
                          color: "header-primary",
                          tag: "p",
                          variant: "heading-md/semibold",
                          children: L.default.Messages.BACK,
                        }),
                      }),
                      c,
                    ],
                  }),
                ],
              });
            });
          },
          purchaseButton: c,
          title: s.name,
        });
      }
    },
    474956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var s,
        l,
        a = n("37983"),
        i = n("884691"),
        r = n("446674"),
        o = n("77078"),
        c = n("55620"),
        d = n("651057"),
        u = n("299285"),
        h = n("907038"),
        f = n("552712"),
        m = n("131233"),
        x = n("49111"),
        v = n("782340"),
        g = n("454436");
      function p(e) {
        let {
            onClose: t,
            transitionState: n,
            appId: s,
            guildId: l,
            subscriptionGroupListing: p,
          } = e,
          j = (0, r.useStateFromStores)([u.default], () =>
            u.default.getApplication(s)
          ),
          [C, N] = i.useState(() => {
            let e = u.default.isFetchingApplication(s);
            return e ? { status: 1 } : { status: 0 };
          });
        i.useEffect(() => {
          0 === C.status &&
            (N({ status: 1 }),
            d.default
              .fetchApplication(s)
              .then(() => {
                N({ status: 2 });
              })
              .catch(e => {
                N({ status: 3, error: e.message });
              }));
        }, [s, C.status]);
        let S = (0, r.useStateFromStoresArray)(
          [f.default],
          () =>
            f.default.getForApplication(s).filter(e => {
              switch (e.type) {
                case x.SKUTypes.DURABLE:
                case x.SKUTypes.CONSUMABLE:
                  return !0;
                default:
                  return !1;
              }
            }),
          [s]
        );
        if (
          (i.useEffect(() => {
            (0, c.fetchAllStoreListingsForApplication)(s);
          }, [s]),
          null == j)
        )
          return null;
        let T = v.default.Messages.STOREFRONT_TITLE.format({ appName: j.name });
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: n,
          "aria-label": T,
          size: o.ModalSize.DYNAMIC,
          className: g.modal,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              className: g.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: g.modalTitle,
                  children: [
                    (0, a.jsx)(h.default, {}),
                    (0, a.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: T,
                    }),
                  ],
                }),
                (0, a.jsx)(o.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, a.jsx)(o.ModalContent, {
              className: g.modalContent,
              children: (0, a.jsx)(m.default, {
                app: j,
                subscriptionGroupListing: p,
                guildId: l,
                products: S,
              }),
            }),
          ],
        });
      }
      ((l = s || (s = {}))[(l.NONE = 0)] = "NONE"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED"),
        (l[(l.ERROR = 3)] = "ERROR");
    },
    907038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("75196");
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = "currentColor",
          ...i
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, s.jsxs)("g", {
              "clip-path": "url(#clip0_2645_182555)",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                  fill: a,
                }),
                (0, s.jsx)("path", {
                  d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                  fill: a,
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_2645_182555",
                children: (0, s.jsx)("rect", {
                  width: "20",
                  height: "20",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
    },
    509167: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("748820"),
        a = n("77078"),
        i = n("112679"),
        r = n("55689"),
        o = n("599110"),
        c = n("49111");
      function d(e) {
        let {
            applicationId: t,
            skuId: d,
            onClose: u,
            onComplete: h,
            analyticsLocations: f,
            analyticsLocationObject: m,
            contextKey: x,
          } = e,
          v = !1,
          g = (0, l.v4)();
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("405314").then(n.bind(n, "405314"));
            return n => {
              let { onClose: l, ...a } = n;
              return (0, s.jsx)(e, {
                ...a,
                loadId: g,
                applicationId: t,
                skuId: d,
                analyticsLocations: f,
                analyticsLocationObject: m,
                onClose: e => {
                  l(), null == u || u(e);
                },
                onComplete: e => {
                  (v = !0), null == h || h(e);
                },
              });
            };
          },
          {
            contextKey: x,
            onCloseCallback: () => {
              !v &&
                o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: g,
                  payment_type:
                    c.PurchaseTypeToAnalyticsPaymentType[
                      c.PurchaseTypes.ONE_TIME
                    ],
                  location: m,
                  is_gift: !1,
                  application_id: t,
                  location_stack: f,
                }),
                (0, i.clearError)(),
                (0, r.clearPurchaseTokenAuthState)(),
                null == u || u(v);
            },
            onCloseRequest: c.NOOP,
          }
        );
      }
    },
    733527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ArrowSmallRightIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
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
            fill: "string" == typeof i ? i : i.css,
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
            className: r,
          }),
        });
      };
    },
    700052: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BadgeIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
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
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.35.93a2 2 0 0 1-1.18 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.18 1.19l.35.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    800619: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CloseSmallIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
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
            fill: "string" == typeof i ? i : i.css,
            d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
            className: r,
          }),
        });
      };
    },
    224701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
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
            fill: "string" == typeof i ? i : i.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: r,
          }),
        });
      };
    },
    153967: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Banner: function () {
            return c;
          },
        });
      var s = n("37983"),
        l = n("884691"),
        a = n("502026"),
        i = n("75979");
      let r = "hsl(var(--primary-730-hsl) / 0.88)",
        o = "linear-gradient(".concat(r, ", ").concat(r, ")");
      function c(e) {
        let { title: t, subtitle: n, iconSrc: r, backgroundSrc: c } = e,
          d = l.useMemo(
            () =>
              null != c
                ? "".concat(o, ", url(").concat(c.toString(), ")")
                : null != r
                  ? "".concat(o, ", url(").concat(r.toString(), ")")
                  : void 0,
            [c, r]
          );
        return (0, s.jsxs)("div", {
          className: i.wrapper,
          children: [
            (0, s.jsx)("div", {
              className: i.background,
              style: { backgroundImage: d },
            }),
            (0, s.jsxs)("div", {
              className: i.content,
              children: [
                null != r &&
                  (0, s.jsx)("div", {
                    className: i.icon,
                    children: (0, s.jsx)("img", { src: r.toString(), alt: "" }),
                  }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(a.Text, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: t,
                    }),
                    null != n &&
                      (0, s.jsxs)(a.Text, {
                        variant: "text-sm/normal",
                        children: ["“", n, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != c
              ? (0, s.jsx)("div", {
                  className: i.image,
                  style: { backgroundImage: "url(".concat(c.toString(), ")") },
                })
              : null,
          ],
        });
      }
    },
    771072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CardDetails: function () {
            return x;
          },
        }),
        n("222007");
      var s = n("37983"),
        l = n("884691"),
        a = n("15542"),
        i = n("800619"),
        r = n("300036"),
        o = n("667434"),
        c = n("502026"),
        d = n("571883"),
        u = n("792788"),
        h = n("769274");
      let f = "hsl(var(--primary-730-hsl) / 0.9)",
        m = "linear-gradient(".concat(f, ", ").concat(f, ")");
      function x(e) {
        let {
            benefits: t,
            description: n,
            imgSrc: f,
            subscriptionType: x,
            title: v,
            onClose: g,
          } = e,
          p = l.useRef(null),
          [j, C] = l.useState(!0),
          N = null != f ? "".concat(m, ", url(").concat(f.toString(), ")") : "",
          S = () => {
            var e;
            (null === (e = p.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? C(!1)
              : C(!0);
          };
        return (0, s.jsxs)("div", {
          className: h.container,
          children: [
            (0, s.jsxs)("div", {
              className: h.header,
              children: [
                (0, s.jsx)("div", {
                  className: h.headerBackground,
                  style: { backgroundImage: N },
                }),
                null != x &&
                  (0, s.jsxs)("div", {
                    className: h.headerTop,
                    children: [
                      (0, s.jsx)(d.default, { tagType: x }),
                      (0, s.jsx)(a.FocusRing, {
                        children: (0, s.jsx)("button", {
                          onClick: g,
                          className: h.closeBtn,
                          type: "button",
                          children: (0, s.jsx)(i.CloseSmallIcon, {
                            height: 24,
                            width: 24,
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, s.jsx)("div", {
                  className: h.headerImage,
                  children:
                    null != f
                      ? (0, s.jsx)("img", { src: f.toString(), alt: "" })
                      : (0, s.jsx)(r.TicketIcon, {
                          color: "white",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, s.jsxs)(o.AdvancedScrollerThin, {
              className: h.scroll,
              fade: !0,
              ref: e => {
                null != e && ((p.current = e), S());
              },
              onScroll: S,
              children: [
                (0, s.jsx)("br", {}),
                (0, s.jsxs)("div", {
                  className: h.scrollContent,
                  children: [
                    (0, s.jsx)(c.Text, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: v,
                    }),
                    (0, s.jsxs)("div", {
                      className: h.details,
                      children: [
                        (0, s.jsx)(c.Text, {
                          color: "header-primary",
                          tag: "div",
                          variant: "heading-lg/semibold",
                          children:
                            u.default.Messages.Storefront.PRODUCT_DETAILS,
                        }),
                        (0, s.jsx)(c.Text, {
                          color: "text-muted",
                          variant: "text-md/normal",
                          children: n,
                        }),
                        null != t &&
                          (0, s.jsxs)("div", {
                            className: h.benefits,
                            children: [
                              (0, s.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "eyebrow",
                                children:
                                  u.default.Messages.Storefront.BENEFITS_TITLE,
                              }),
                              t,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: h.containerScrollGradient,
              "data-shown": j,
            }),
          ],
        });
      }
    },
    382133: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("421898"),
        a = n.n(l),
        i = n("15542"),
        r = n("134560");
      function o(e) {
        let {
          onClick: t,
          title: n,
          body: l,
          icon: o,
          selected: c,
          disabled: d,
        } = e;
        return (0, s.jsx)(i.FocusRing, {
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: () => {
              !d && t();
            },
            disabled: d,
            className: a(r.wrapper, { [r.selected]: c }),
            children: [
              (0, s.jsx)("div", { className: r.icon, children: o }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("div", { className: r.title, children: n }),
                  (0, s.jsx)("div", { className: r.body, children: l }),
                ],
              }),
            ],
          }),
        });
      }
    },
    630394: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ProductCard: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("15542"),
        a = n("733527"),
        i = n("700052"),
        r = n("502026"),
        o = n("792788"),
        c = n("370621");
      function d(e) {
        let {
          description: t,
          headerImage: n,
          onDetails: d,
          purchaseButton: u,
          title: h,
        } = e;
        return (0, s.jsxs)("div", {
          className: c.productCard,
          children: [
            (0, s.jsx)("div", {
              className: c.cardHeaderImg,
              style:
                null != n
                  ? {
                      backgroundImage:
                        null != n ? "url(".concat(n.toString(), ")") : void 0,
                    }
                  : void 0,
              children:
                null == n &&
                (0, s.jsx)(i.BadgeIcon, {
                  color: "white",
                  height: 128,
                  width: 128,
                }),
            }),
            (0, s.jsxs)("div", {
              className: c.details,
              children: [
                (0, s.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-md/semibold",
                  children: h,
                }),
                (0, s.jsx)(r.Text, {
                  className: c.description,
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: t,
                }),
              ],
            }),
            u &&
              (0, s.jsxs)("div", {
                className: c.footer,
                children: [
                  null != d
                    ? (0, s.jsx)(l.FocusRing, {
                        children: (0, s.jsx)("button", {
                          className: c.button,
                          onClick: d,
                          type: "button",
                          children: (0, s.jsxs)(r.Text, {
                            className: c.cta,
                            color: "text-link",
                            variant: "text-sm/semibold",
                            children: [
                              o.default.Messages.Storefront.SEE_MORE_DETAILS,
                              (0, s.jsx)(a.ArrowSmallRightIcon, {
                                color: "var(--blue-345)",
                                height: 16,
                                width: 16,
                              }),
                            ],
                          }),
                        }),
                      })
                    : (0, s.jsx)("div", {}),
                  u,
                ],
              }),
          ],
        });
      }
    },
    681959: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ProductDetails: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("502026"),
        a = n("792788"),
        i = n("562235");
      function r(e) {
        let { description: t, headerImage: n, title: r } = e,
          o = null != n ? "url(".concat(n.toString(), ")") : "";
        return (0, s.jsxs)("div", {
          className: i.container,
          children: [
            (0, s.jsxs)("div", {
              className: i.header,
              children: [
                (0, s.jsx)("div", {
                  className: i.background,
                  style: { backgroundImage: o },
                }),
                (0, s.jsx)("div", { className: i.blur }),
                null != n &&
                  (0, s.jsx)("div", {
                    className: i.image,
                    children: (0, s.jsx)("img", { src: n.toString(), alt: "" }),
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: i.content,
              children: [
                (0, s.jsx)(l.Text, {
                  color: "header-primary",
                  tag: "div",
                  variant: "heading-xl/semibold",
                  children: r,
                }),
                null != t &&
                  "" !== t &&
                  (0, s.jsxs)("div", {
                    className: i.details,
                    children: [
                      (0, s.jsx)(l.Text, {
                        color: "header-primary",
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: a.default.Messages.Storefront.PRODUCT_DETAILS,
                      }),
                      (0, s.jsx)(l.Text, {
                        color: "interactive-active",
                        variant: "text-md/normal",
                        children: t,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    91601: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SubscriptionCard: function () {
            return d;
          },
          SubscriptionCardBenefit: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("15542"),
        a = n("300036"),
        i = n("502026"),
        r = n("571883"),
        o = n("792788"),
        c = n("484687");
      function d(e) {
        let {
          description: t,
          imgSrc: n,
          PurchaseButton: d,
          onPurchase: u,
          subscriptionType: h,
          title: f,
          onDetails: m,
          benefitItems: x,
        } = e;
        return (0, s.jsx)(l.FocusRing, {
          children: (0, s.jsxs)("div", {
            className: c.container,
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != u && u();
            },
            children: [
              (0, s.jsxs)("div", {
                className: c.card,
                children: [
                  null != h && (0, s.jsx)(r.default, { tagType: h }),
                  (0, s.jsxs)("div", {
                    className: c.body,
                    children: [
                      (0, s.jsx)(i.Text, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: f,
                      }),
                      (0, s.jsx)("div", {
                        className: c.image,
                        children:
                          null != n
                            ? (0, s.jsx)("img", { src: n.toString(), alt: "" })
                            : (0, s.jsx)(a.TicketIcon, {
                                color: "white",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != d &&
                        (0, s.jsx)(d, {
                          className: c.purchaseBtn,
                          onClick: e => {
                            e.stopPropagation(), null == u || u();
                          },
                        }),
                      null != t &&
                        "" !== t &&
                        (0, s.jsx)(i.Text, {
                          className: c.description,
                          color: "text-normal",
                          variant: "text-sm/medium",
                          children: t,
                        }),
                    ],
                  }),
                ],
              }),
              null != x &&
                (0, s.jsx)("div", {
                  className: c.benefits,
                  children: (0, s.jsx)("div", {
                    className: c.benefitsContainer,
                    children: (0, s.jsxs)("div", {
                      className: c.benefitsList,
                      children: [
                        (0, s.jsx)(i.Text, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children:
                            o.default.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        x.length > 3
                          ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                x.slice(0, 3),
                                (0, s.jsx)(i.Text, {
                                  variant: "text-md/semibold",
                                  children:
                                    o.default.Messages.Storefront.MORE_BENEFITS.format(
                                      { count: x.length - 3 }
                                    ),
                                }),
                              ],
                            })
                          : x,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function u(e) {
        let { icon: t, name: n, description: l } = e;
        return (0, s.jsxs)("div", {
          className: c.cardBenefit,
          children: [
            (0, s.jsx)("div", { className: c.cardBenefitIcon, children: t }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: c.cardBenefitName,
                  children: n,
                }),
                (0, s.jsx)("div", {
                  className: c.cardBenefitDesc,
                  children: l,
                }),
              ],
            }),
          ],
        });
      }
    },
    571883: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("980763"),
        a = n("224701"),
        i = n("502026"),
        r = n("792788"),
        o = n("627327");
      let c = { width: 12, height: 12 };
      function d(e) {
        let { tagType: t } = e;
        return (0, s.jsxs)("div", {
          className: o.container,
          children: [
            "user" === t
              ? (0, s.jsx)(a.UserIcon, { ...c, color: "var(--text-positive)" })
              : (0, s.jsx)(l.ServerIcon, { ...c, color: "var(--text-brand)" }),
            (0, s.jsx)(i.Text, {
              color: "interactive-normal",
              variant: "text-sm/medium",
              children:
                "user" === t
                  ? r.default.Messages.Storefront.USER_SUBSCRIPTION
                  : r.default.Messages.Storefront.SERVER_SUBSCRIPTION,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=c8fd67a4fac103d74ad3.js.map
