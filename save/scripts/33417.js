(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33417"],
  {
    421898: function (e, t, s) {
      (e = s.nmd(e)),
        !(function () {
          "use strict";
          var t = {}.hasOwnProperty;
          function s() {
            for (var e = "", l = 0; l < arguments.length; l++) {
              var i = arguments[l];
              i &&
                (e = n(
                  e,
                  (function (e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return s.apply(null, e);
                    if (
                      e.toString !== Object.prototype.toString &&
                      !e.toString.toString().includes("[native code]")
                    )
                      return e.toString();
                    var l = "";
                    for (var i in e) t.call(e, i) && e[i] && (l = n(l, i));
                    return l;
                  })(i)
                ));
            }
            return e;
          }
          function n(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          void 0 !== e && e.exports
            ? ((s.default = s), (e.exports = s))
            : "function" == typeof define &&
                "object" == typeof define.amd &&
                define.amd
              ? define("classnames", [], function () {
                  return s;
                })
              : (window.classNames = s);
        })();
    },
    333693: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("700052");
      s.es(n, t);
    },
    131233: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return w;
          },
        }),
        s("222007");
      var n,
        l,
        i = s("37983"),
        a = s("884691"),
        r = s("153967"),
        o = s("771072"),
        c = s("382133"),
        d = s("630394"),
        u = s("681959"),
        h = s("91601"),
        f = s("446674"),
        m = s("333693"),
        x = s("618991"),
        v = s("77078"),
        g = s("812204"),
        p = s("685665"),
        j = s("509167"),
        C = s("129408"),
        N = s("377527"),
        S = s("375010"),
        T = s("698041"),
        R = s("153160"),
        b = s("271560"),
        I = s("253981"),
        y = s("49111"),
        E = s("646718"),
        M = s("782340"),
        L = s("816896");
      let O = { width: 20, height: 20, color: "white" };
      function w(e) {
        var t, s, n;
        let {
            app: l,
            subscriptionGroupListing: o,
            guildId: d,
            products: u,
          } = e,
          h =
            null !==
              (s =
                null == o
                  ? void 0
                  : null === (t = o.subscription_listings) || void 0 === t
                    ? void 0
                    : t.filter(e => e.published)) && void 0 !== s
              ? s
              : [],
          [f, g] = a.useState(() => (h.length > 0 ? 0 : 1)),
          p = a.useMemo(() => {
            let e = l.getIconSource(100);
            if (null != e && "number" != typeof e) {
              let s;
              if (
                (Array.isArray(e)
                  ? e.length > 0 && (s = e[0].uri)
                  : (s = e.uri),
                null != s)
              ) {
                var t;
                return null !== (t = I.default.toURLSafe(s)) && void 0 !== t
                  ? t
                  : void 0;
              }
            }
          }, [l]),
          j = a.useMemo(() => {
            var e;
            let t = l.getCoverImageURL(800);
            return null != t &&
              null !== (e = I.default.toURLSafe(t)) &&
              void 0 !== e
              ? e
              : void 0;
          }, [l]),
          N = h.length > 0 && u.length > 0,
          S =
            1 === f
              ? u.map(e => (0, i.jsx)(B, { sku: e, appId: l.id }, e.id))
              : null != o
                ? h.map(e =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: L.productCard,
                        children: (0, i.jsx)(_, {
                          appId: l.id,
                          groupListingId: o.id,
                          guildId: d,
                          listing: e,
                          groupListingType: (0,
                          C.isApplicationUserSubscription)(o.sku_flags)
                            ? "user"
                            : "guild",
                        }),
                      },
                      e.id
                    )
                  )
                : [];
        return (0, i.jsxs)("div", {
          className: L.wrapper,
          children: [
            (0, i.jsx)("div", {
              className: L.banner,
              children: (0, i.jsx)(r.Banner, {
                title: l.name,
                subtitle:
                  null !== (n = l.description) && void 0 !== n ? n : void 0,
                iconSrc: p,
                backgroundSrc: j,
              }),
            }),
            (0, i.jsx)(v.Text, {
              variant: "eyebrow",
              className: L.tabsText,
              children: M.default.Messages.STOREFRONT_PREMIUM_ITEMS,
            }),
            (0, i.jsx)("div", {
              className: L.tabs,
              children: N
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(c.default, {
                        icon: (0, i.jsx)(m.BadgeIcon, { ...O }),
                        title: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                        body: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format(
                          { appName: l.name }
                        ),
                        disabled: 0 === h.length,
                        selected: 0 === f,
                        onClick: () => {
                          g(0);
                        },
                      }),
                      (0, i.jsx)(c.default, {
                        icon: (0, i.jsx)(x.TicketIcon, { ...O }),
                        title: M.default.Messages.STOREFRONT_APP_PRODUCTS,
                        body: M.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format(
                          { appName: l.name }
                        ),
                        disabled: 0 === u.length,
                        selected: 1 === f,
                        onClick: () => {
                          g(1);
                        },
                      }),
                    ],
                  })
                : null,
            }),
            (0, i.jsx)("div", {
              className: L.productList,
              style: { gridTemplateColumns: S.length > 1 ? "1fr 1fr" : "1fr" },
              children: S,
            }),
          ],
        });
      }
      ((l = n || (n = {}))[(l.SUBSCRIPTIONS = 0)] = "SUBSCRIPTIONS"),
        (l[(l.PRODUCTS = 1)] = "PRODUCTS");
      function _(e) {
        let {
            appId: t,
            groupListingId: s,
            guildId: n,
            listing: l,
            groupListingType: r,
          } = e,
          { openModal: c } = (0, S.default)({
            listing: l,
            guildId: n,
            groupListingId: s,
            showBenefitsFirst: !1,
            analyticsLocation: y.AnalyticsLocations.BOT_PROFILE_POPOUT,
          }),
          d = a.useMemo(() => {
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
          u = a.useMemo(() => {
            var e;
            return null != l.image_asset &&
              null !==
                (e = I.default.toURLSafe(
                  (0, b.getAssetURL)(t, l.image_asset)
                )) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, l.image_asset]),
          f = l.subscription_plans.length > 0 ? l.subscription_plans[0] : null;
        if (null === f) return null;
        let m = (0, i.jsx)(v.Button, {
          onClick: c,
          children: M.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
            rate: (0, R.formatRate)(
              (0, R.formatPrice)(f.price, f.currency),
              E.SubscriptionIntervalTypes.MONTH,
              1
            ),
          }),
        });
        return (0, i.jsx)(h.SubscriptionCard, {
          title: l.name,
          description: l.description,
          imgSrc: u,
          subscriptionType: r,
          onPurchase: c,
          PurchaseButton: e =>
            (0, i.jsx)(v.Button, {
              ...e,
              children: M.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                rate: (0, R.formatRate)(
                  (0, R.formatPrice)(f.price, f.currency),
                  E.SubscriptionIntervalTypes.MONTH,
                  1
                ),
              }),
            }),
          benefitItems:
            null != d
              ? d.map(e =>
                  (0, i.jsx)(
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
                    let { onClose: t, transitionState: s } = e;
                    return (0, i.jsxs)(v.ModalRoot, {
                      transitionState: s,
                      size: v.ModalSize.DYNAMIC,
                      className: L.subDetailsModal,
                      children: [
                        (0, i.jsx)(o.CardDetails, {
                          benefits: d.map(e =>
                            (0, i.jsx)(
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
                        (0, i.jsxs)(v.ModalFooter, {
                          className: L.footer,
                          children: [
                            (0, i.jsx)(v.Button, {
                              className: L.backButton,
                              onClick: t,
                              look: v.ButtonLooks.BLANK,
                              children: (0, i.jsx)(v.Text, {
                                color: "header-primary",
                                tag: "p",
                                variant: "heading-md/semibold",
                                children: M.default.Messages.BACK,
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
      function B(e) {
        var t, s;
        let { sku: n, appId: l } = e,
          { analyticsLocations: a } = (0, p.default)(g.default.APP_STOREFRONT),
          r = (0, f.useStateFromStores)(
            [T.default],
            () => T.default.getForSKU(n.id),
            [n]
          ),
          { price: o } = n;
        if (null == o) return null;
        let c = (0, i.jsx)(v.Button, {
          onClick: () => {
            (0, j.default)({
              applicationId: l,
              skuId: n.id,
              analyticsLocations: a,
            });
          },
          children: M.default.Messages.STOREFRONT_PURCHASE_FOR.format({
            price: (0, R.formatPrice)(o.amount, o.currency),
          }),
        });
        return (0, i.jsx)(d.ProductCard, {
          description:
            null !== (t = null == r ? void 0 : r.description) && void 0 !== t
              ? t
              : void 0,
          headerImage:
            (null == r ? void 0 : r.headerBackground) != null &&
            null !==
              (s = I.default.toURLSafe(
                (0, b.getAssetURL)(l, r.headerBackground)
              )) &&
            void 0 !== s
              ? s
              : void 0,
          onDetails: () => {
            (0, v.openModal)(e => {
              var t, s;
              let { onClose: a, transitionState: o } = e;
              return (0, i.jsxs)(v.ModalRoot, {
                transitionState: o,
                children: [
                  (0, i.jsx)(u.ProductDetails, {
                    description:
                      null !== (t = null == r ? void 0 : r.description) &&
                      void 0 !== t
                        ? t
                        : void 0,
                    headerImage:
                      (null == r ? void 0 : r.headerBackground) != null &&
                      null !==
                        (s = I.default.toURLSafe(
                          (0, b.getAssetURL)(l, r.headerBackground)
                        )) &&
                      void 0 !== s
                        ? s
                        : void 0,
                    title: n.name,
                  }),
                  (0, i.jsxs)(v.ModalFooter, {
                    className: L.footer,
                    children: [
                      (0, i.jsx)("button", {
                        className: L.backButton,
                        onClick: a,
                        children: (0, i.jsx)(v.Text, {
                          color: "header-primary",
                          tag: "p",
                          variant: "heading-md/semibold",
                          children: M.default.Messages.BACK,
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
          title: n.name,
        });
      }
    },
    474956: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return p;
          },
        }),
        s("222007");
      var n,
        l,
        i = s("37983"),
        a = s("884691"),
        r = s("446674"),
        o = s("77078"),
        c = s("55620"),
        d = s("651057"),
        u = s("299285"),
        h = s("907038"),
        f = s("552712"),
        m = s("131233"),
        x = s("49111"),
        v = s("782340"),
        g = s("454436");
      function p(e) {
        let {
            onClose: t,
            transitionState: s,
            appId: n,
            guildId: l,
            subscriptionGroupListing: p,
          } = e,
          j = (0, r.useStateFromStores)([u.default], () =>
            u.default.getApplication(n)
          ),
          [C, N] = a.useState(() => {
            let e = u.default.isFetchingApplication(n);
            return e ? { status: 1 } : { status: 0 };
          });
        a.useEffect(() => {
          0 === C.status &&
            (N({ status: 1 }),
            d.default
              .fetchApplication(n)
              .then(() => {
                N({ status: 2 });
              })
              .catch(e => {
                N({ status: 3, error: e.message });
              }));
        }, [n, C.status]);
        let S = (0, r.useStateFromStoresArray)(
          [f.default],
          () =>
            f.default.getForApplication(n).filter(e => {
              switch (e.type) {
                case x.SKUTypes.DURABLE:
                case x.SKUTypes.CONSUMABLE:
                  return !0;
                default:
                  return !1;
              }
            }),
          [n]
        );
        if (
          (a.useEffect(() => {
            (0, c.fetchAllStoreListingsForApplication)(n);
          }, [n]),
          null == j)
        )
          return null;
        let T = v.default.Messages.STOREFRONT_TITLE.format({ appName: j.name });
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: s,
          "aria-label": T,
          size: o.ModalSize.LARGE,
          className: g.modal,
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              className: g.modalHeader,
              children: [
                (0, i.jsxs)("div", {
                  className: g.modalTitle,
                  children: [
                    (0, i.jsx)(h.default, {}),
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: T,
                    }),
                  ],
                }),
                (0, i.jsx)(o.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, i.jsx)(o.ModalContent, {
              className: g.modalContent,
              children: (0, i.jsx)(m.default, {
                app: j,
                subscriptionGroupListing: p,
                guildId: l,
                products: S,
              }),
            }),
          ],
        });
      }
      ((l = n || (n = {}))[(l.NONE = 0)] = "NONE"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED"),
        (l[(l.ERROR = 3)] = "ERROR");
    },
    907038: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("75196");
      function i(e) {
        let {
          width: t = 24,
          height: s = 24,
          color: i = "currentColor",
          ...a
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, n.jsxs)("g", {
              "clip-path": "url(#clip0_2645_182555)",
              children: [
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                  fill: i,
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_2645_182555",
                children: (0, n.jsx)("rect", {
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
    509167: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("748820"),
        i = s("77078"),
        a = s("112679"),
        r = s("55689"),
        o = s("599110"),
        c = s("49111");
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
        (0, i.openModalLazy)(
          async () => {
            let { default: e } = await s.el("405314").then(s.bind(s, "405314"));
            return s => {
              let { onClose: l, ...i } = s;
              return (0, n.jsx)(e, {
                ...i,
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
                (0, a.clearError)(),
                (0, r.clearPurchaseTokenAuthState)(),
                null == u || u(v);
            },
            onCloseRequest: c.NOOP,
          }
        );
      }
    },
    733527: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ArrowSmallRightIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        i = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
            className: r,
          }),
        });
      };
    },
    700052: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BadgeIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        i = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.35.93a2 2 0 0 1-1.18 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.18 1.19l.35.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    800619: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CloseSmallIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        i = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
            className: r,
          }),
        });
      };
    },
    224701: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          UserIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        i = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: r,
          }),
        });
      };
    },
    153967: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Banner: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("75979");
      function i(e) {
        let { title: t, subtitle: s, iconSrc: i, backgroundSrc: a } = e;
        return (0, n.jsxs)("div", {
          className: l.wrapper,
          style:
            null != a
              ? {
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(".concat(
                      a.toString(),
                      ")"
                    ),
                }
              : void 0,
          children: [
            null != i &&
              (0, n.jsx)("div", {
                className: l.icon,
                children: (0, n.jsx)("img", { src: i.toString(), alt: "" }),
              }),
            (0, n.jsxs)("div", {
              className: l.textWrapper,
              children: [
                (0, n.jsx)("div", { className: l.title, children: t }),
                null != s &&
                  (0, n.jsx)("div", { className: l.subtitle, children: s }),
              ],
            }),
          ],
        });
      }
    },
    771072: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CardDetails: function () {
            return x;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        i = s("15542"),
        a = s("800619"),
        r = s("300036"),
        o = s("667434"),
        c = s("502026"),
        d = s("571883"),
        u = s("792788"),
        h = s("769274");
      let f = "hsl(var(--primary-730-hsl) / 0.9)",
        m = "linear-gradient(".concat(f, ", ").concat(f, ")");
      function x(e) {
        let {
            benefits: t,
            description: s,
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
        return (0, n.jsxs)("div", {
          className: h.container,
          children: [
            (0, n.jsxs)("div", {
              className: h.header,
              children: [
                (0, n.jsx)("div", {
                  className: h.headerBackground,
                  style: { backgroundImage: N },
                }),
                null != x &&
                  (0, n.jsxs)("div", {
                    className: h.headerTop,
                    children: [
                      (0, n.jsx)(d.default, { tagType: x }),
                      (0, n.jsx)(i.FocusRing, {
                        children: (0, n.jsx)("button", {
                          onClick: g,
                          className: h.closeBtn,
                          type: "button",
                          children: (0, n.jsx)(a.CloseSmallIcon, {
                            height: 24,
                            width: 24,
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, n.jsx)("div", {
                  className: h.headerImage,
                  children:
                    null != f
                      ? (0, n.jsx)("img", { src: f.toString(), alt: "" })
                      : (0, n.jsx)(r.TicketIcon, {
                          color: "white",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, n.jsxs)(o.AdvancedScrollerThin, {
              className: h.scroll,
              fade: !0,
              ref: e => {
                null != e && ((p.current = e), S());
              },
              onScroll: S,
              children: [
                (0, n.jsx)("br", {}),
                (0, n.jsxs)("div", {
                  className: h.scrollContent,
                  children: [
                    (0, n.jsx)(c.Text, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: v,
                    }),
                    (0, n.jsxs)("div", {
                      className: h.details,
                      children: [
                        (0, n.jsx)(c.Text, {
                          color: "header-primary",
                          tag: "div",
                          variant: "heading-lg/semibold",
                          children:
                            u.default.Messages.Storefront.PRODUCT_DETAILS,
                        }),
                        (0, n.jsx)(c.Text, {
                          color: "text-muted",
                          variant: "text-md/normal",
                          children: s,
                        }),
                        null != t &&
                          (0, n.jsxs)("div", {
                            className: h.benefits,
                            children: [
                              (0, n.jsx)(c.Text, {
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
            (0, n.jsx)("div", {
              className: h.containerScrollGradient,
              "data-shown": j,
            }),
          ],
        });
      }
    },
    382133: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("421898"),
        i = s.n(l),
        a = s("15542"),
        r = s("134560");
      function o(e) {
        let {
          onClick: t,
          title: s,
          body: l,
          icon: o,
          selected: c,
          disabled: d,
        } = e;
        return (0, n.jsx)(a.FocusRing, {
          children: (0, n.jsxs)("button", {
            type: "button",
            onClick: () => {
              !d && t();
            },
            disabled: d,
            className: i(r.wrapper, { [r.selected]: c }),
            children: [
              (0, n.jsx)("div", { className: r.icon, children: o }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("div", { className: r.title, children: s }),
                  (0, n.jsx)("div", { className: r.body, children: l }),
                ],
              }),
            ],
          }),
        });
      }
    },
    630394: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ProductCard: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("15542"),
        i = s("733527"),
        a = s("700052"),
        r = s("502026"),
        o = s("792788"),
        c = s("370621");
      function d(e) {
        let {
          description: t,
          headerImage: s,
          onDetails: d,
          purchaseButton: u,
          title: h,
        } = e;
        return (0, n.jsxs)("div", {
          className: c.productCard,
          children: [
            (0, n.jsx)("div", {
              className: c.cardHeaderImg,
              style:
                null != s
                  ? {
                      backgroundImage:
                        null != s ? "url(".concat(s.toString(), ")") : void 0,
                    }
                  : void 0,
              children:
                null == s &&
                (0, n.jsx)(a.BadgeIcon, {
                  color: "white",
                  height: 128,
                  width: 128,
                }),
            }),
            (0, n.jsxs)("div", {
              className: c.details,
              children: [
                (0, n.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-md/semibold",
                  children: h,
                }),
                (0, n.jsx)(r.Text, {
                  className: c.description,
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: t,
                }),
              ],
            }),
            u &&
              (0, n.jsxs)("div", {
                className: c.footer,
                children: [
                  null != d
                    ? (0, n.jsx)(l.FocusRing, {
                        children: (0, n.jsx)("button", {
                          className: c.button,
                          onClick: d,
                          type: "button",
                          children: (0, n.jsxs)(r.Text, {
                            className: c.cta,
                            color: "text-link",
                            variant: "text-sm/semibold",
                            children: [
                              o.default.Messages.Storefront.SEE_MORE_DETAILS,
                              (0, n.jsx)(i.ArrowSmallRightIcon, {
                                color: "var(--blue-345)",
                                height: 16,
                                width: 16,
                              }),
                            ],
                          }),
                        }),
                      })
                    : (0, n.jsx)("div", {}),
                  u,
                ],
              }),
          ],
        });
      }
    },
    681959: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ProductDetails: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("502026"),
        i = s("792788"),
        a = s("562235");
      function r(e) {
        let { description: t, headerImage: s, title: r } = e,
          o = null != s ? "url(".concat(s.toString(), ")") : "";
        return (0, n.jsxs)("div", {
          className: a.container,
          children: [
            (0, n.jsxs)("div", {
              className: a.header,
              children: [
                (0, n.jsx)("div", {
                  className: a.background,
                  style: { backgroundImage: o },
                }),
                (0, n.jsx)("div", { className: a.blur }),
                null != s &&
                  (0, n.jsx)("div", {
                    className: a.image,
                    children: (0, n.jsx)("img", { src: s.toString(), alt: "" }),
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: a.content,
              children: [
                (0, n.jsx)(l.Text, {
                  color: "header-primary",
                  tag: "div",
                  variant: "heading-xl/semibold",
                  children: r,
                }),
                null != t &&
                  "" !== t &&
                  (0, n.jsxs)("div", {
                    className: a.details,
                    children: [
                      (0, n.jsx)(l.Text, {
                        color: "header-primary",
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: i.default.Messages.Storefront.PRODUCT_DETAILS,
                      }),
                      (0, n.jsx)(l.Text, {
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
    91601: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SubscriptionCard: function () {
            return d;
          },
          SubscriptionCardBenefit: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("15542"),
        i = s("300036"),
        a = s("502026"),
        r = s("571883"),
        o = s("792788"),
        c = s("484687");
      function d(e) {
        let {
          description: t,
          imgSrc: s,
          PurchaseButton: d,
          onPurchase: u,
          subscriptionType: h,
          title: f,
          onDetails: m,
          benefitItems: x,
        } = e;
        return (0, n.jsx)(l.FocusRing, {
          children: (0, n.jsxs)("div", {
            className: c.container,
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != u && u();
            },
            children: [
              (0, n.jsxs)("div", {
                className: c.card,
                children: [
                  null != h && (0, n.jsx)(r.default, { tagType: h }),
                  (0, n.jsxs)("div", {
                    className: c.body,
                    children: [
                      (0, n.jsx)(a.Text, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: f,
                      }),
                      (0, n.jsx)("div", {
                        className: c.image,
                        children:
                          null != s
                            ? (0, n.jsx)("img", { src: s.toString(), alt: "" })
                            : (0, n.jsx)(i.TicketIcon, {
                                color: "white",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != d &&
                        (0, n.jsx)(d, {
                          className: c.purchaseBtn,
                          onClick: e => {
                            e.stopPropagation(), null == u || u();
                          },
                        }),
                      null != t &&
                        "" !== t &&
                        (0, n.jsx)(a.Text, {
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
                (0, n.jsx)("div", {
                  className: c.benefits,
                  children: (0, n.jsx)("div", {
                    className: c.benefitsContainer,
                    children: (0, n.jsxs)("div", {
                      className: c.benefitsList,
                      children: [
                        (0, n.jsx)(a.Text, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children:
                            o.default.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        x.length > 3
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                x.slice(0, 3),
                                (0, n.jsx)(a.Text, {
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
        let { icon: t, name: s, description: l } = e;
        return (0, n.jsxs)("div", {
          className: c.cardBenefit,
          children: [
            (0, n.jsx)("div", { className: c.cardBenefitIcon, children: t }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  className: c.cardBenefitName,
                  children: s,
                }),
                (0, n.jsx)("div", {
                  className: c.cardBenefitDesc,
                  children: l,
                }),
              ],
            }),
          ],
        });
      }
    },
    571883: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("980763"),
        i = s("224701"),
        a = s("502026"),
        r = s("792788"),
        o = s("627327");
      let c = { width: 12, height: 12 };
      function d(e) {
        let { tagType: t } = e;
        return (0, n.jsxs)("div", {
          className: o.container,
          children: [
            "user" === t
              ? (0, n.jsx)(i.UserIcon, { ...c, color: "var(--text-positive)" })
              : (0, n.jsx)(l.ServerIcon, { ...c, color: "var(--text-brand)" }),
            (0, n.jsx)(a.Text, {
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
//# sourceMappingURL=f4abe4c95a049095dd7b.js.map
