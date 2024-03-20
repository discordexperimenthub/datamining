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
              var i = arguments[l];
              i &&
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
                    for (var i in e) t.call(e, i) && e[i] && (l = s(l, i));
                    return l;
                  })(i)
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
        i = n("37983"),
        a = n("884691"),
        r = n("153967"),
        o = n("771072"),
        c = n("382133"),
        d = n("630394"),
        u = n("91601"),
        h = n("478715"),
        f = n("446674"),
        m = n("333693"),
        x = n("618991"),
        v = n("77078"),
        p = n("812204"),
        g = n("685665"),
        j = n("509167"),
        C = n("129408"),
        S = n("377527"),
        N = n("375010"),
        T = n("698041"),
        R = n("315102"),
        b = n("153160"),
        I = n("271560"),
        y = n("253981"),
        M = n("49111"),
        L = n("646718"),
        B = n("782340"),
        O = n("816896");
      let E = { width: 20, height: 20, color: "white" };
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
          [h, f] = a.useState(() => (u.length > 0 ? 0 : 1)),
          p = a.useMemo(() => {
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
          { bot: g } = s,
          j = a.useMemo(() => {
            var e;
            if ((null == g ? void 0 : g.banner) == null) return;
            let t = (0, R.getUserBannerURL)({
              id: g.id,
              banner: g.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != t &&
              null !== (e = y.default.toURLSafe(t)) &&
              void 0 !== e
              ? e
              : void 0;
          }, [g]),
          S = u.length > 0 && d.length > 0,
          N =
            1 === h
              ? d.map(e => (0, i.jsx)(w, { sku: e, appId: s.id }, e.id))
              : null != l
                ? u.map(e =>
                    (0, i.jsx)(
                      A,
                      {
                        appId: s.id,
                        groupListingId: l.id,
                        guildId: o,
                        listing: e,
                        groupListingType: (0, C.isApplicationUserSubscription)(
                          l.sku_flags
                        )
                          ? "user"
                          : "guild",
                      },
                      e.id
                    )
                  )
                : [];
        return (0, i.jsxs)("div", {
          className: O.wrapper,
          children: [
            (0, i.jsx)("div", {
              className: O.banner,
              children: (0, i.jsx)(r.Banner, {
                title: s.name,
                iconSrc: p,
                backgroundSrc: j,
              }),
            }),
            (0, i.jsx)(v.Text, {
              variant: "eyebrow",
              className: O.tabsText,
              children: B.default.Messages.STOREFRONT_PREMIUM_ITEMS,
            }),
            (0, i.jsx)("div", {
              className: O.tabs,
              children: S
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(c.default, {
                        icon: (0, i.jsx)(m.BadgeIcon, { ...E }),
                        title: B.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                        body: B.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format(
                          { appName: s.name }
                        ),
                        disabled: 0 === u.length,
                        selected: 0 === h,
                        onClick: () => {
                          f(0);
                        },
                      }),
                      (0, i.jsx)(c.default, {
                        icon: (0, i.jsx)(x.TicketIcon, { ...E }),
                        title: B.default.Messages.STOREFRONT_APP_PRODUCTS,
                        body: B.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format(
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
            (0, i.jsx)("div", {
              className: O.productList,
              style: { gridTemplateColumns: 1 === N.length ? "1fr" : void 0 },
              children: N,
            }),
          ],
        });
      }
      ((l = s || (s = {}))[(l.SUBSCRIPTIONS = 0)] = "SUBSCRIPTIONS"),
        (l[(l.PRODUCTS = 1)] = "PRODUCTS");
      function A(e) {
        let {
            appId: t,
            groupListingId: n,
            guildId: s,
            listing: l,
            groupListingType: r,
          } = e,
          { openModal: c } = (0, N.default)({
            listing: l,
            guildId: s,
            groupListingId: n,
            showBenefitsFirst: !1,
            analyticsLocation: M.AnalyticsLocations.BOT_PROFILE_POPOUT,
          }),
          d = a.useMemo(() => {
            var e;
            return null === (e = l.store_listing_benefits) || void 0 === e
              ? void 0
              : e.map(e => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, S.getBenefitIcon)(t, e.icon),
                }));
          }, [t, l.store_listing_benefits]),
          f = a.useMemo(() => {
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
          m = l.subscription_plans.length > 0 ? l.subscription_plans[0] : null;
        if (null === m) return null;
        let x = (0, i.jsx)(v.Button, {
          onClick: c,
          children: B.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
            rate: (0, b.formatRate)(
              (0, b.formatPrice)(m.price, m.currency),
              L.SubscriptionIntervalTypes.MONTH,
              1
            ),
          }),
        });
        return (0, i.jsx)(u.SubscriptionCard, {
          title: l.name,
          description: l.description,
          imgSrc: f,
          subscriptionType: r,
          onPurchase: c,
          PurchaseButton: e =>
            (0, i.jsx)(v.Button, {
              ...e,
              children: B.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                rate: (0, b.formatRate)(
                  (0, b.formatPrice)(m.price, m.currency),
                  L.SubscriptionIntervalTypes.MONTH,
                  1
                ),
              }),
            }),
          benefitItems:
            null != d
              ? d.map(e =>
                  (0, i.jsx)(
                    u.SubscriptionCardBenefit,
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
                    return (0, i.jsxs)(v.ModalRoot, {
                      transitionState: n,
                      size: v.ModalSize.DYNAMIC,
                      className: O.subDetailsModal,
                      children: [
                        (0, i.jsx)(o.CardDetails, {
                          benefits: d.map(e =>
                            (0, i.jsx)(
                              u.SubscriptionCardBenefit,
                              {
                                name: e.title,
                                icon: e.icon,
                                description: e.description,
                              },
                              e.id
                            )
                          ),
                          description: l.description,
                          imgSrc: f,
                          title: l.name,
                          tag: (0, i.jsx)(h.SubscriptionTag, { type: r }),
                          onClose: t,
                        }),
                        (0, i.jsxs)(v.ModalFooter, {
                          className: O.footer,
                          children: [
                            (0, i.jsx)(v.Button, {
                              className: O.backButton,
                              onClick: t,
                              look: v.ButtonLooks.BLANK,
                              children: (0, i.jsx)(v.Text, {
                                color: "header-primary",
                                tag: "p",
                                variant: "heading-md/semibold",
                                children: B.default.Messages.BACK,
                              }),
                            }),
                            x,
                          ],
                        }),
                      ],
                    });
                  });
                }
              : void 0,
        });
      }
      function w(e) {
        var t, n, s;
        let { sku: l, appId: a } = e,
          { analyticsLocations: r } = (0, g.default)(p.default.APP_STOREFRONT),
          c = (0, f.useStateFromStores)(
            [T.default],
            () => T.default.getForSKU(l.id),
            [l]
          ),
          u = l.name,
          m =
            null !==
              (n =
                null == c
                  ? void 0
                  : null === (t = c.description) || void 0 === t
                    ? void 0
                    : t.trim()) && void 0 !== n
              ? n
              : void 0,
          x =
            (null == c ? void 0 : c.headerBackground) != null &&
            null !==
              (s = y.default.toURLSafe(
                (0, I.getAssetURL)(a, c.headerBackground)
              )) &&
            void 0 !== s
              ? s
              : void 0,
          C =
            l.type === M.SKUTypes.DURABLE
              ? B.default.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: S } = l;
        if (null == S) return null;
        let N = () => {
            (0, j.default)({
              applicationId: a,
              skuId: l.id,
              analyticsLocations: r,
            });
          },
          R = (0, i.jsx)(v.Button, {
            onClick: N,
            children: B.default.Messages.STOREFRONT_PURCHASE_FOR.format({
              price: (0, b.formatPrice)(S.amount, S.currency),
            }),
          });
        return (0, i.jsx)(d.ProductCard, {
          title: u,
          description: m,
          headerImage: x,
          availabilityLabel: C,
          onDetails: () => {
            (0, v.openModal)(e => {
              let { onClose: t, transitionState: n } = e;
              return (0, i.jsxs)(v.ModalRoot, {
                transitionState: n,
                size: v.ModalSize.DYNAMIC,
                className: O.subDetailsModal,
                children: [
                  (0, i.jsx)(o.CardDetails, {
                    title: u,
                    description: m,
                    imgSrc: x,
                    tag: null != C ? (0, i.jsx)(h.Tag, { text: C }) : void 0,
                    onClose: t,
                  }),
                  (0, i.jsxs)(v.ModalFooter, {
                    className: O.footer,
                    children: [
                      (0, i.jsx)(v.Button, {
                        className: O.backButton,
                        onClick: t,
                        look: v.ButtonLooks.BLANK,
                        children: (0, i.jsx)(v.Text, {
                          color: "header-primary",
                          tag: "p",
                          variant: "heading-md/semibold",
                          children: B.default.Messages.BACK,
                        }),
                      }),
                      R,
                    ],
                  }),
                ],
              });
            });
          },
          PurchaseButton: e =>
            (0, i.jsx)(v.Button, {
              ...e,
              children: B.default.Messages.STOREFRONT_PURCHASE_FOR.format({
                price: (0, b.formatPrice)(S.amount, S.currency),
              }),
            }),
          onPurchase: N,
        });
      }
    },
    474956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var s,
        l,
        i = n("37983"),
        a = n("884691"),
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
        p = n("454436");
      function g(e) {
        let {
            onClose: t,
            transitionState: n,
            appId: s,
            guildId: l,
            subscriptionGroupListing: g,
          } = e,
          j = (0, r.useStateFromStores)([u.default], () =>
            u.default.getApplication(s)
          ),
          [C, S] = a.useState(() => {
            let e = u.default.isFetchingApplication(s);
            return e ? { status: 1 } : { status: 0 };
          });
        a.useEffect(() => {
          0 === C.status &&
            (S({ status: 1 }),
            d.default
              .fetchApplication(s)
              .then(() => {
                S({ status: 2 });
              })
              .catch(e => {
                S({ status: 3, error: e.message });
              }));
        }, [s, C.status]);
        let N = (0, r.useStateFromStoresArray)(
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
          (a.useEffect(() => {
            (0, c.fetchAllStoreListingsForApplication)(s);
          }, [s]),
          null == j)
        )
          return null;
        let T = v.default.Messages.STOREFRONT_TITLE.format({ appName: j.name });
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: n,
          "aria-label": T,
          size: o.ModalSize.DYNAMIC,
          className: p.modal,
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              className: p.modalHeader,
              children: [
                (0, i.jsxs)("div", {
                  className: p.modalTitle,
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
              className: p.modalContent,
              children: (0, i.jsx)(m.default, {
                app: j,
                subscriptionGroupListing: g,
                guildId: l,
                products: N,
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
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("75196");
      function i(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(a),
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
                  fill: i,
                }),
                (0, s.jsx)("path", {
                  d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                  fill: i,
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
        i = n("77078"),
        a = n("112679"),
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
          p = (0, l.v4)();
        (0, i.openModalLazy)(
          async () => {
            let { default: e } = await n.el("405314").then(n.bind(n, "405314"));
            return n => {
              let { onClose: l, ...i } = n;
              return (0, s.jsx)(e, {
                ...i,
                loadId: p,
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
                  load_id: p,
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
    700052: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BadgeIcon: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
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
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
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
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
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
        i = n("502026"),
        a = n("75979");
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
          className: a.wrapper,
          children: [
            (0, s.jsx)("div", {
              className: a.background,
              style: { backgroundImage: d },
            }),
            (0, s.jsxs)("div", {
              className: a.content,
              children: [
                null != r &&
                  (0, s.jsx)("div", {
                    className: a.icon,
                    children: (0, s.jsx)("img", { src: r.toString(), alt: "" }),
                  }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(i.Text, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: t,
                    }),
                    null != n &&
                      (0, s.jsxs)(i.Text, {
                        variant: "text-sm/normal",
                        children: ["“", n, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != c
              ? (0, s.jsx)("div", {
                  className: a.image,
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
            return m;
          },
        }),
        n("222007");
      var s = n("37983"),
        l = n("884691"),
        i = n("15542"),
        a = n("800619"),
        r = n("300036"),
        o = n("667434"),
        c = n("502026"),
        d = n("792788"),
        u = n("769274");
      let h = "hsl(var(--primary-730-hsl) / 0.9)",
        f = "linear-gradient(".concat(h, ", ").concat(h, ")");
      function m(e) {
        let {
            benefits: t,
            description: n,
            imgSrc: h,
            title: m,
            onClose: x,
            tag: v,
          } = e,
          p = l.useRef(null),
          [g, j] = l.useState(!0),
          C = null != h ? "".concat(f, ", url(").concat(h.toString(), ")") : "",
          S = () => {
            var e;
            (null === (e = p.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? j(!1)
              : j(!0);
          };
        return (0, s.jsxs)("div", {
          className: u.container,
          children: [
            (0, s.jsxs)("div", {
              className: u.header,
              children: [
                (0, s.jsx)("div", {
                  className: u.headerBackground,
                  style: { backgroundImage: C },
                }),
                (0, s.jsxs)("div", {
                  className: u.headerTop,
                  children: [
                    (0, s.jsx)("div", { children: v }),
                    (0, s.jsx)(i.FocusRing, {
                      children: (0, s.jsx)("button", {
                        onClick: x,
                        className: u.closeBtn,
                        type: "button",
                        children: (0, s.jsx)(a.CloseSmallIcon, {
                          height: 24,
                          width: 24,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: u.headerImage,
                  children:
                    null != h
                      ? (0, s.jsx)("img", { src: h.toString(), alt: "" })
                      : (0, s.jsx)(r.TicketIcon, {
                          color: "white",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, s.jsxs)(o.AdvancedScrollerThin, {
              className: u.scroll,
              fade: !0,
              ref: e => {
                null != e && ((p.current = e), S());
              },
              onScroll: S,
              children: [
                (0, s.jsx)("br", {}),
                (0, s.jsxs)("div", {
                  className: u.scrollContent,
                  children: [
                    (0, s.jsx)(c.Text, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: m,
                    }),
                    ((null != n && "" !== n) || null != t) &&
                      (0, s.jsxs)("div", {
                        className: u.details,
                        children: [
                          (0, s.jsx)(c.Text, {
                            color: "header-primary",
                            tag: "div",
                            variant: "heading-lg/semibold",
                            children:
                              d.default.Messages.Storefront.PRODUCT_DETAILS,
                          }),
                          (0, s.jsx)(c.Text, {
                            color: "text-muted",
                            variant: "text-md/normal",
                            children: n,
                          }),
                          null != t &&
                            (0, s.jsxs)("div", {
                              className: u.benefits,
                              children: [
                                (0, s.jsx)(c.Text, {
                                  color: "header-secondary",
                                  variant: "eyebrow",
                                  children:
                                    d.default.Messages.Storefront
                                      .BENEFITS_TITLE,
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
              className: u.containerScrollGradient,
              "data-shown": g,
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
        i = n.n(l),
        a = n("15542"),
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
        return (0, s.jsx)(a.FocusRing, {
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: () => {
              !d && t();
            },
            disabled: d,
            className: i(r.wrapper, { [r.selected]: c }),
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
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("421898"),
        i = n.n(l),
        a = n("15542"),
        r = n("700052"),
        o = n("502026"),
        c = n("370621"),
        d = n("35589");
      function u(e) {
        let {
          title: t,
          description: n,
          headerImage: l,
          onDetails: u,
          onPurchase: h,
          PurchaseButton: f,
          availabilityLabel: m,
        } = e;
        return (0, s.jsx)(a.FocusRing, {
          children: (0, s.jsxs)("div", {
            className: i(c.wrapper, d.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != u ? u() : null != h && h();
            },
            children: [
              (0, s.jsx)("div", {
                className: c.cardHeaderImg,
                style:
                  null != l
                    ? {
                        backgroundImage:
                          null != l ? "url(".concat(l.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == l &&
                  (0, s.jsx)(r.BadgeIcon, {
                    color: "white",
                    height: 128,
                    width: 128,
                  }),
              }),
              (0, s.jsxs)("div", {
                className: c.details,
                children: [
                  (0, s.jsx)(o.Text, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: t,
                  }),
                  null != n &&
                    (0, s.jsx)(o.Text, {
                      className: c.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: n,
                    }),
                ],
              }),
              null != f &&
                (0, s.jsxs)("div", {
                  className: c.footer,
                  children: [
                    (0, s.jsx)(o.Text, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: m,
                    }),
                    (0, s.jsx)(f, {
                      onClick: e => {
                        e.stopPropagation(), null == h || h();
                      },
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    91601: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SubscriptionCard: function () {
            return f;
          },
          SubscriptionCardBenefit: function () {
            return m;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("421898"),
        i = n.n(l),
        a = n("15542"),
        r = n("300036"),
        o = n("502026"),
        c = n("478715"),
        d = n("792788"),
        u = n("484687"),
        h = n("35589");
      function f(e) {
        let {
          description: t,
          imgSrc: n,
          PurchaseButton: l,
          onPurchase: f,
          subscriptionType: m,
          title: x,
          onDetails: v,
          benefitItems: p,
        } = e;
        return (0, s.jsx)(a.FocusRing, {
          children: (0, s.jsxs)("div", {
            className: i(u.container, h.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != v ? v() : null != f && f();
            },
            children: [
              (0, s.jsxs)("div", {
                className: u.card,
                children: [
                  null != m && (0, s.jsx)(c.SubscriptionTag, { type: m }),
                  (0, s.jsxs)("div", {
                    className: u.body,
                    children: [
                      (0, s.jsx)(o.Text, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: x,
                      }),
                      (0, s.jsx)("div", {
                        className: u.image,
                        children:
                          null != n
                            ? (0, s.jsx)("img", { src: n.toString(), alt: "" })
                            : (0, s.jsx)(r.TicketIcon, {
                                color: "white",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != l &&
                        (0, s.jsx)(l, {
                          className: u.purchaseBtn,
                          onClick: e => {
                            e.stopPropagation(), null == f || f();
                          },
                        }),
                      null != t &&
                        "" !== t &&
                        (0, s.jsx)(o.Text, {
                          className: u.description,
                          color: "text-normal",
                          variant: "text-sm/medium",
                          children: t,
                        }),
                    ],
                  }),
                ],
              }),
              null != p &&
                (0, s.jsx)("div", {
                  className: u.benefits,
                  children: (0, s.jsx)("div", {
                    className: u.benefitsContainer,
                    children: (0, s.jsxs)("div", {
                      className: u.benefitsList,
                      children: [
                        (0, s.jsx)(o.Text, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children:
                            d.default.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        p.length > 3
                          ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                p.slice(0, 3),
                                (0, s.jsx)(o.Text, {
                                  variant: "text-md/semibold",
                                  children:
                                    d.default.Messages.Storefront.MORE_BENEFITS.format(
                                      { count: p.length - 3 }
                                    ),
                                }),
                              ],
                            })
                          : p,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function m(e) {
        let { icon: t, name: n, description: l } = e;
        return (0, s.jsxs)("div", {
          className: u.cardBenefit,
          children: [
            (0, s.jsx)("div", { className: u.cardBenefitIcon, children: t }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: u.cardBenefitName,
                  children: n,
                }),
                (0, s.jsx)("div", {
                  className: u.cardBenefitDesc,
                  children: l,
                }),
              ],
            }),
          ],
        });
      }
    },
    478715: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SubscriptionTag: function () {
            return d;
          },
          Tag: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var l = n("980763"),
        i = n("224701"),
        a = n("502026"),
        r = n("792788"),
        o = n("939021");
      let c = { width: 12, height: 12 };
      function d(e) {
        let { type: t } = e;
        return (0, s.jsx)(u, {
          icon:
            "user" === t
              ? (0, s.jsx)(i.UserIcon, { ...c, color: "var(--text-positive)" })
              : (0, s.jsx)(l.ServerIcon, { ...c, color: "var(--text-brand)" }),
          text:
            "user" === t
              ? r.default.Messages.Storefront.USER_SUBSCRIPTION
              : r.default.Messages.Storefront.SERVER_SUBSCRIPTION,
        });
      }
      function u(e) {
        let { icon: t, text: n } = e;
        return (0, s.jsxs)("div", {
          className: o.container,
          children: [
            t,
            (0, s.jsx)(a.Text, {
              color: "interactive-normal",
              variant: "text-sm/medium",
              children: n,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=78bdfb7b62ddf95b79ee.js.map
