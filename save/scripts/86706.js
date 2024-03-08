(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86706"],
  {
    397613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorBoundary: function () {
            return a;
          },
        }),
        n("70102"),
        n("222007");
      var i = n("884691");
      let s = (0, i.createContext)(null),
        r = { didCatch: !1, error: null };
      class a extends i.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, s = Array(i), a = 0;
              a < i;
              a++
            )
              s[a] = arguments[a];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: s, reason: "imperative-api" }),
              this.setState(r);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, i)
          ) {
            var s, a;
            null === (s = (a = this.props).onReset) ||
              void 0 === s ||
              s.call(a, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(r);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: r,
            } = this.props,
            { didCatch: a, error: l } = this.state,
            o = e;
          if (a) {
            let e = { error: l, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(r)) o = r;
            else if ("function" == typeof t) o = t(e);
            else if (n) o = (0, i.createElement)(n, e);
            else throw l;
          }
          return (0, i.createElement)(
            s.Provider,
            {
              value: {
                didCatch: a,
                error: l,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            o
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = r);
        }
      }
    },
    985745: function (e, t, n) {
      var i = n("390493");
      n("860677"),
        n("854508"),
        !(function (e, t) {
          "use strict";
          if (!e.setImmediate) {
            var n,
              s = 1,
              r = {},
              a = !1,
              l = e.document,
              o = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (o = o && o.setTimeout ? o : e),
              "[object process]" === {}.toString.call(e.process)
                ? (function () {
                    n = function (e) {
                      i.nextTick(function () {
                        d(e);
                      });
                    };
                  })()
                : (function () {
                      if (e.postMessage && !e.importScripts) {
                        var t = !0,
                          n = e.onmessage;
                        return (
                          (e.onmessage = function () {
                            t = !1;
                          }),
                          e.postMessage("", "*"),
                          (e.onmessage = n),
                          t
                        );
                      }
                    })()
                  ? (function () {
                      var t = "setImmediate$" + Math.random() + "$",
                        i = function (n) {
                          n.source === e &&
                            "string" == typeof n.data &&
                            0 === n.data.indexOf(t) &&
                            d(+n.data.slice(t.length));
                        };
                      e.addEventListener
                        ? e.addEventListener("message", i, !1)
                        : e.attachEvent("onmessage", i),
                        (n = function (n) {
                          e.postMessage(t + n, "*");
                        });
                    })()
                  : e.MessageChannel
                    ? (function () {
                        var e = new MessageChannel();
                        (e.port1.onmessage = function (e) {
                          d(e.data);
                        }),
                          (n = function (t) {
                            e.port2.postMessage(t);
                          });
                      })()
                    : l && "onreadystatechange" in l.createElement("script")
                      ? (function () {
                          var e = l.documentElement;
                          n = function (t) {
                            var n = l.createElement("script");
                            (n.onreadystatechange = function () {
                              d(t),
                                (n.onreadystatechange = null),
                                e.removeChild(n),
                                (n = null);
                            }),
                              e.appendChild(n);
                          };
                        })()
                      : (function () {
                          n = function (e) {
                            setTimeout(d, 0, e);
                          };
                        })(),
              (o.setImmediate = function (e) {
                "function" != typeof e && (e = Function("" + e));
                for (
                  var t = Array(arguments.length - 1), i = 0;
                  i < t.length;
                  i++
                )
                  t[i] = arguments[i + 1];
                var a = { callback: e, args: t };
                return (r[s] = a), n(s), s++;
              }),
              (o.clearImmediate = c);
          }
          function c(e) {
            delete r[e];
          }
          function d(e) {
            if (a) setTimeout(d, 0, e);
            else {
              var t = r[e];
              if (t) {
                a = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  c(e), (a = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === n.g ? this : n.g) : self);
    },
    111633: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t, n;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            b.test(e)
              ? (e = e.substr(0, e.length - 2))
              : S.test(e) && (e = e.substr(0, e.length - 1)),
            (n = j.exec(e))
              ? o.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = v.exec(e)) &&
                u.test(n[1]) &&
                ((e = n[1]),
                x.test(e)
                  ? (e += "e")
                  : N.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = g.exec(e)) && u.test(n[1]) && (e = n[1] + "i"),
            (n = T.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]),
            (n = R.exec(e)) && o.test(n[1]) && (e = n[1] + s[n[2]]),
            (n = I.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = p.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = m.exec(e)) &&
              (d.test(n[1]) || (c.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        s = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        r = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        l = "(" + r + "[aeiou]*)",
        o = RegExp("^" + a + "?" + l + a),
        c = RegExp("^" + a + "?" + l + a + l + "?$"),
        d = RegExp("^" + a + "?(" + l + a + "){2,}"),
        u = RegExp("^" + a + "?" + r),
        f = RegExp("^" + a + r + "[^aeiouwxy]$"),
        h = /ll$/,
        m = /^(.+?)e$/,
        g = /^(.+?)y$/,
        p = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        x = /(at|bl|iz)$/,
        j = /^(.+?)eed$/,
        S = /^.+?[^s]s$/,
        b = /^.+?(ss|i)es$/,
        N = /([^aeiouylsz])\1$/,
        T = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        R = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        I = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("70102");
      var i = n("884691");
      function s() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: s, children: r } = t,
              a = (0, i.useRef)();
            return (
              !a.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !s && (s = () => n)),
                (a.current = s())),
              (0, i.createElement)(e.Provider, { value: a.current }, r)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              s = (0, i.useContext)(e);
            if (!s)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return s(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t]
            );
          },
        };
      }
    },
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    333693: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("700052");
      n.es(i, t);
    },
    131233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n("222007");
      var i,
        s,
        r = n("37983"),
        a = n("884691"),
        l = n("153967"),
        o = n("771072"),
        c = n("382133"),
        d = n("630394"),
        u = n("681959"),
        f = n("91601"),
        h = n("446674"),
        m = n("333693"),
        g = n("618991"),
        p = n("77078"),
        v = n("812204"),
        x = n("685665"),
        j = n("509167"),
        S = n("129408"),
        b = n("377527"),
        N = n("375010"),
        T = n("698041"),
        R = n("153160"),
        I = n("271560"),
        E = n("253981"),
        y = n("49111"),
        C = n("646718"),
        O = n("782340"),
        B = n("816896");
      let M = { width: 20, height: 20, color: "white" };
      function w(e) {
        var t;
        let {
            app: n,
            subscriptionGroupListing: i,
            guildId: s,
            products: o,
          } = e,
          { subscription_listings: d = [] } = null != i ? i : {},
          [u, f] = a.useState(() => (d.length > 0 ? 0 : 1)),
          h = a.useMemo(() => {
            let e = n.getIconSource(100);
            if (null != e && "number" != typeof e) {
              let n;
              if (
                (Array.isArray(e)
                  ? e.length > 0 && (n = e[0].uri)
                  : (n = e.uri),
                null != n)
              ) {
                var t;
                return null !== (t = E.default.toURLSafe(n)) && void 0 !== t
                  ? t
                  : void 0;
              }
            }
          }, [n]),
          p = a.useMemo(() => {
            var e;
            let t = n.getCoverImageURL(800);
            return null != t &&
              null !== (e = E.default.toURLSafe(t)) &&
              void 0 !== e
              ? e
              : void 0;
          }, [n]),
          v = d.length > 0 && o.length > 0;
        return (0, r.jsxs)("div", {
          className: B.wrapper,
          children: [
            (0, r.jsx)(l.Banner, {
              title: n.name,
              subtitle:
                null !== (t = n.description) && void 0 !== t ? t : void 0,
              iconSrc: h,
              backgroundSrc: p,
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
              className: B.tabs,
              children: v
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(c.default, {
                        icon: (0, r.jsx)(m.BadgeIcon, { ...M }),
                        title: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                        body: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format(
                          { appName: n.name }
                        ),
                        disabled: 0 === d.length,
                        selected: 0 === u,
                        onClick: () => {
                          f(0);
                        },
                      }),
                      (0, r.jsx)(c.default, {
                        icon: (0, r.jsx)(g.TicketIcon, { ...M }),
                        title: O.default.Messages.STOREFRONT_APP_PRODUCTS,
                        body: O.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format(
                          { appName: n.name }
                        ),
                        disabled: 0 === o.length,
                        selected: 1 === u,
                        onClick: () => {
                          f(1);
                        },
                      }),
                    ],
                  })
                : null,
            }),
            (0, r.jsx)("div", {
              className: B.productList,
              children:
                1 === u
                  ? o.map(e => (0, r.jsx)(k, { sku: e, appId: n.id }, e.id))
                  : null != i
                    ? d.map(e =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: B.productCard,
                            children: (0, r.jsx)(P, {
                              appId: n.id,
                              groupListingId: i.id,
                              guildId: s,
                              listing: e,
                              groupListingType: (0,
                              S.isApplicationUserSubscription)(i.sku_flags)
                                ? "user"
                                : "guild",
                            }),
                          },
                          e.id
                        )
                      )
                    : null,
            }),
          ],
        });
      }
      ((s = i || (i = {}))[(s.SUBSCRIPTIONS = 0)] = "SUBSCRIPTIONS"),
        (s[(s.PRODUCTS = 1)] = "PRODUCTS");
      function P(e) {
        let {
            appId: t,
            groupListingId: n,
            guildId: i,
            listing: s,
            groupListingType: l,
          } = e,
          { openModal: c } = (0, N.default)({
            listing: s,
            guildId: i,
            groupListingId: n,
            showBenefitsFirst: !1,
            analyticsLocation: y.AnalyticsLocations.BOT_PROFILE_POPOUT,
          }),
          d = a.useMemo(() => {
            var e;
            return null === (e = s.store_listing_benefits) || void 0 === e
              ? void 0
              : e.map(e => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, b.getBenefitIcon)(t, e.icon),
                }));
          }, [t, s.store_listing_benefits]),
          u = a.useMemo(() => {
            var e;
            return null != s.image_asset &&
              null !==
                (e = E.default.toURLSafe(
                  (0, I.getAssetURL)(t, s.image_asset)
                )) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, s.image_asset]),
          h = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
        if (null === h) return null;
        let m = (0, r.jsx)(p.Button, {
          onClick: c,
          children: O.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
            rate: (0, R.formatRate)(
              (0, R.formatPrice)(h.price, h.currency),
              C.SubscriptionIntervalTypes.MONTH,
              1
            ),
          }),
        });
        return (0, r.jsx)(f.SubscriptionCard, {
          title: s.name,
          description: s.description,
          imgSrc: u,
          subscriptionType: l,
          onPurchase: c,
          PurchaseButton: e =>
            (0, r.jsx)(p.Button, {
              ...e,
              children: O.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                rate: (0, R.formatRate)(
                  (0, R.formatPrice)(h.price, h.currency),
                  C.SubscriptionIntervalTypes.MONTH,
                  1
                ),
              }),
            }),
          benefitItems:
            null != d
              ? d.map(e =>
                  (0, r.jsx)(
                    f.SubscriptionCardBenefit,
                    { name: e.title, icon: e.icon },
                    e.id
                  )
                )
              : void 0,
          onDetails:
            null != d
              ? () => {
                  (0, p.openModal)(e => {
                    let { onClose: t, transitionState: n } = e;
                    return (0, r.jsxs)(p.ModalRoot, {
                      transitionState: n,
                      size: p.ModalSize.DYNAMIC,
                      className: B.subDetailsModal,
                      children: [
                        (0, r.jsx)(o.CardDetails, {
                          benefits: d.map(e =>
                            (0, r.jsx)(
                              f.SubscriptionCardBenefit,
                              {
                                name: e.title,
                                icon: e.icon,
                                description: e.description,
                              },
                              e.id
                            )
                          ),
                          description: s.description,
                          imgSrc: u,
                          title: s.name,
                          subscriptionType: l,
                          onClose: t,
                        }),
                        (0, r.jsxs)(p.ModalFooter, {
                          className: B.footer,
                          children: [
                            (0, r.jsx)(p.Button, {
                              className: B.backButton,
                              onClick: t,
                              look: p.ButtonLooks.BLANK,
                              children: (0, r.jsx)(p.Text, {
                                color: "header-primary",
                                tag: "p",
                                variant: "heading-md/semibold",
                                children: O.default.Messages.BACK,
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
      function k(e) {
        var t, n;
        let { sku: i, appId: s } = e,
          { analyticsLocations: a } = (0, x.default)(v.default.APP_STOREFRONT),
          l = (0, h.useStateFromStores)(
            [T.default],
            () => T.default.getForSKU(i.id),
            [i]
          ),
          { price: o } = i;
        if (null == o) return null;
        let c = (0, r.jsx)(p.Button, {
          onClick: () => {
            (0, j.default)({
              applicationId: s,
              skuId: i.id,
              analyticsLocations: a,
            });
          },
          children: O.default.Messages.STOREFRONT_PURCHASE_FOR.format({
            price: (0, R.formatPrice)(o.amount, o.currency),
          }),
        });
        return (0, r.jsx)(d.ProductCard, {
          description:
            null !== (t = null == l ? void 0 : l.description) && void 0 !== t
              ? t
              : void 0,
          headerImage:
            (null == l ? void 0 : l.headerBackground) != null &&
            null !==
              (n = E.default.toURLSafe(
                (0, I.getAssetURL)(s, l.headerBackground)
              )) &&
            void 0 !== n
              ? n
              : void 0,
          onDetails: () => {
            (0, p.openModal)(e => {
              var t, n;
              let { onClose: a, transitionState: o } = e;
              return (0, r.jsxs)(p.ModalRoot, {
                transitionState: o,
                children: [
                  (0, r.jsx)(u.ProductDetails, {
                    description:
                      null !== (t = null == l ? void 0 : l.description) &&
                      void 0 !== t
                        ? t
                        : void 0,
                    headerImage:
                      (null == l ? void 0 : l.headerBackground) != null &&
                      null !==
                        (n = E.default.toURLSafe(
                          (0, I.getAssetURL)(s, l.headerBackground)
                        )) &&
                      void 0 !== n
                        ? n
                        : void 0,
                    title: i.name,
                  }),
                  (0, r.jsxs)(p.ModalFooter, {
                    className: B.footer,
                    children: [
                      (0, r.jsx)("button", {
                        className: B.backButton,
                        onClick: a,
                        children: (0, r.jsx)(p.Text, {
                          color: "header-primary",
                          tag: "p",
                          variant: "heading-md/semibold",
                          children: O.default.Messages.BACK,
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
          title: i.name,
        });
      }
    },
    474956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007");
      var i,
        s,
        r = n("37983"),
        a = n("884691"),
        l = n("446674"),
        o = n("77078"),
        c = n("55620"),
        d = n("651057"),
        u = n("299285"),
        f = n("20606"),
        h = n("907038"),
        m = n("539938"),
        g = n("653047"),
        p = n("552712"),
        v = n("131233"),
        x = n("49111"),
        j = n("782340"),
        S = n("454436");
      function b(e) {
        let {
            onClose: t,
            transitionState: n,
            appId: i,
            guildId: s,
            subscriptionGroupListing: b,
          } = e,
          [N, T] = a.useState(() => {
            let e = u.default.getApplication(i);
            if (null != e) return { status: 2, app: e };
            let t = u.default.isFetchingApplication(i);
            return t ? { status: 1 } : { status: 0 };
          }),
          R = 2 === N.status ? N.app : null;
        a.useEffect(() => {
          0 === N.status &&
            (T({ status: 1 }),
            d.default
              .fetchApplication(i)
              .then(e => {
                T({ status: 2, app: g.default.createFromServer(e) });
              })
              .catch(e => {
                T({ status: 3, error: e.message });
              }));
        }, [i, N.status]);
        let I = (0, l.useStateFromStoresArray)(
          [p.default],
          () =>
            p.default.getForApplication(i).filter(e => {
              switch (e.type) {
                case x.SKUTypes.DURABLE:
                case x.SKUTypes.CONSUMABLE:
                  return !0;
                default:
                  return !1;
              }
            }),
          [i]
        );
        if (
          (a.useEffect(() => {
            (0, c.fetchAllStoreListingsForApplication)(i);
          }, [i]),
          null == R)
        )
          return null;
        let E = j.default.Messages.STOREFRONT_TITLE.format({ appName: R.name });
        return (0, r.jsxs)(o.ModalRoot, {
          transitionState: n,
          "aria-label": E,
          size: o.ModalSize.LARGE,
          children: [
            (0, r.jsx)(o.ModalHeader, {
              children: (0, r.jsxs)(m.default, {
                children: [
                  (0, r.jsx)(m.default.Icon, {
                    icon: h.default,
                    "aria-hidden": !0,
                    color: f.default.INTERACTIVE_ACTIVE,
                  }),
                  (0, r.jsx)(m.default.Title, { children: E }),
                  (0, r.jsx)(o.ModalCloseButton, {
                    onClick: t,
                    className: S.modalCloseButton,
                  }),
                ],
              }),
            }),
            (0, r.jsx)(o.ModalContent, {
              children: (0, r.jsx)(v.default, {
                app: R,
                subscriptionGroupListing: b,
                guildId: s,
                products: I,
              }),
            }),
          ],
        });
      }
      ((s = i || (i = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.ERROR = 3)] = "ERROR");
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("803182"),
        s = n("308503"),
        r = n("49111");
      function a(e) {
        let t = (0, i.matchPath)(null != e ? e : "", {
          path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === r.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.matchPath)(null != e ? e : "", {
          path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var l = (0, s.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = a(t);
          e({ path: t, guildId: n, channelId: i });
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = a(t);
          e({ path: null, guildId: n, channelId: i, basePath: t });
        },
      }));
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return c;
          },
          getPlatformReadableName: function () {
            return u;
          },
          getCurrentPlatformDownloadURL: function () {
            return f;
          },
          getMobileDownloadLink: function () {
            return h;
          },
        });
      var i = n("597755"),
        s = n.n(i),
        r = n("815157"),
        a = n("271938"),
        l = n("49111");
      let o = "linux";
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(l.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function d() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = s.os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? o
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function u(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[d(e)];
      }
      function f() {
        let e = d();
        return c(e, !1, e === o ? "tar.gz" : null);
      }
      function h(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.default)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, r.default)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
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
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        r = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.35.93a2 2 0 0 1-1.18 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.18 1.19l.35.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
            clipRule: "evenodd",
            className: l,
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
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        r = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
            className: l,
          }),
        });
      };
    },
    153967: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Banner: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("75979");
      function r(e) {
        let { title: t, subtitle: n, iconSrc: r, backgroundSrc: a } = e;
        return (0, i.jsxs)("div", {
          className: s.wrapper,
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
            null != r &&
              (0, i.jsx)("div", {
                className: s.icon,
                children: (0, i.jsx)("img", { src: r.toString(), alt: "" }),
              }),
            (0, i.jsxs)("div", {
              className: s.textWrapper,
              children: [
                (0, i.jsx)("div", { className: s.title, children: t }),
                null != n &&
                  (0, i.jsx)("div", { className: s.subtitle, children: n }),
              ],
            }),
          ],
        });
      }
    },
    771072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CardDetails: function () {
            return g;
          },
        }),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        r = n("15542"),
        a = n("800619"),
        l = n("300036"),
        o = n("667434"),
        c = n("502026"),
        d = n("571883"),
        u = n("792788"),
        f = n("769274");
      let h = "hsl(var(--primary-730-hsl) / 0.9)",
        m = "linear-gradient(".concat(h, ", ").concat(h, ")");
      function g(e) {
        let {
            benefits: t,
            description: n,
            imgSrc: h,
            subscriptionType: g,
            title: p,
            onClose: v,
          } = e,
          x = s.useRef(null),
          [j, S] = s.useState(!0),
          b = null != h ? "".concat(m, ", url(").concat(h.toString(), ")") : "",
          N = () => {
            var e;
            (null === (e = x.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? S(!1)
              : S(!0);
          };
        return (0, i.jsxs)("div", {
          className: f.container,
          children: [
            (0, i.jsxs)("div", {
              className: f.header,
              children: [
                (0, i.jsx)("div", {
                  className: f.headerBackground,
                  style: { backgroundImage: b },
                }),
                null != g &&
                  (0, i.jsxs)("div", {
                    className: f.headerTop,
                    children: [
                      (0, i.jsx)(d.default, { tagType: g }),
                      (0, i.jsx)(r.FocusRing, {
                        children: (0, i.jsx)("button", {
                          onClick: v,
                          className: f.closeBtn,
                          type: "button",
                          children: (0, i.jsx)(a.CloseSmallIcon, {
                            height: 24,
                            width: 24,
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: f.headerImage,
                  children:
                    null != h
                      ? (0, i.jsx)("img", { src: h.toString(), alt: "" })
                      : (0, i.jsx)(l.TicketIcon, {
                          color: "white",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, i.jsxs)(o.AdvancedScrollerThin, {
              className: f.scroll,
              fade: !0,
              ref: e => {
                null != e && ((x.current = e), N());
              },
              onScroll: N,
              children: [
                (0, i.jsx)("br", {}),
                (0, i.jsxs)("div", {
                  className: f.scrollContent,
                  children: [
                    (0, i.jsx)(c.Text, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: p,
                    }),
                    (0, i.jsxs)("div", {
                      className: f.details,
                      children: [
                        (0, i.jsx)(c.Text, {
                          color: "header-primary",
                          tag: "div",
                          variant: "heading-lg/semibold",
                          children:
                            u.default.Messages.Storefront.PRODUCT_DETAILS,
                        }),
                        (0, i.jsx)(c.Text, {
                          color: "text-muted",
                          variant: "text-md/normal",
                          children: n,
                        }),
                        null != t &&
                          (0, i.jsxs)("div", {
                            className: f.benefits,
                            children: [
                              (0, i.jsx)(c.Text, {
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
            (0, i.jsx)("div", {
              className: f.containerScrollGradient,
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
      var i = n("37983");
      n("884691");
      var s = n("421898"),
        r = n.n(s),
        a = n("15542"),
        l = n("134560");
      function o(e) {
        let {
          onClick: t,
          title: n,
          body: s,
          icon: o,
          selected: c,
          disabled: d,
        } = e;
        return (0, i.jsx)(a.FocusRing, {
          children: (0, i.jsxs)("button", {
            type: "button",
            onClick: () => {
              !d && t();
            },
            disabled: d,
            className: r(l.wrapper, { [l.selected]: c }),
            children: [
              (0, i.jsx)("div", { className: l.icon, children: o }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", { className: l.title, children: n }),
                  (0, i.jsx)("div", { className: l.body, children: s }),
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
      var i = n("37983");
      n("884691");
      var s = n("15542"),
        r = n("733527"),
        a = n("700052"),
        l = n("502026"),
        o = n("792788"),
        c = n("370621");
      function d(e) {
        let {
          description: t,
          headerImage: n,
          onDetails: d,
          purchaseButton: u,
          title: f,
        } = e;
        return (0, i.jsxs)("div", {
          className: c.productCard,
          children: [
            (0, i.jsx)("div", {
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
                (0, i.jsx)(a.BadgeIcon, {
                  color: "white",
                  height: 128,
                  width: 128,
                }),
            }),
            (0, i.jsxs)("div", {
              className: c.details,
              children: [
                (0, i.jsx)(l.Text, {
                  color: "header-primary",
                  variant: "text-md/semibold",
                  children: f,
                }),
                (0, i.jsx)(l.Text, {
                  className: c.description,
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: t,
                }),
              ],
            }),
            u &&
              (0, i.jsxs)("div", {
                className: c.footer,
                children: [
                  null != d
                    ? (0, i.jsx)(s.FocusRing, {
                        children: (0, i.jsx)("button", {
                          className: c.button,
                          onClick: d,
                          type: "button",
                          children: (0, i.jsxs)(l.Text, {
                            className: c.cta,
                            color: "text-link",
                            variant: "text-sm/semibold",
                            children: [
                              o.default.Messages.Storefront.SEE_MORE_DETAILS,
                              (0, i.jsx)(r.ArrowSmallRightIcon, {
                                color: "var(--blue-345)",
                                height: 16,
                                width: 16,
                              }),
                            ],
                          }),
                        }),
                      })
                    : (0, i.jsx)("div", {}),
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
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("502026"),
        r = n("792788"),
        a = n("562235");
      function l(e) {
        let { description: t, headerImage: n, title: l } = e,
          o = null != n ? "url(".concat(n.toString(), ")") : "";
        return (0, i.jsxs)("div", {
          className: a.container,
          children: [
            (0, i.jsxs)("div", {
              className: a.header,
              children: [
                (0, i.jsx)("div", {
                  className: a.background,
                  style: { backgroundImage: o },
                }),
                (0, i.jsx)("div", { className: a.blur }),
                null != n &&
                  (0, i.jsx)("div", {
                    className: a.image,
                    children: (0, i.jsx)("img", { src: n.toString(), alt: "" }),
                  }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: a.content,
              children: [
                (0, i.jsx)(s.Text, {
                  color: "header-primary",
                  tag: "div",
                  variant: "heading-xl/semibold",
                  children: l,
                }),
                null != t &&
                  "" !== t &&
                  (0, i.jsxs)("div", {
                    className: a.details,
                    children: [
                      (0, i.jsx)(s.Text, {
                        color: "header-primary",
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: r.default.Messages.Storefront.PRODUCT_DETAILS,
                      }),
                      (0, i.jsx)(s.Text, {
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
      var i = n("37983");
      n("884691");
      var s = n("15542"),
        r = n("300036"),
        a = n("502026"),
        l = n("571883"),
        o = n("792788"),
        c = n("484687");
      function d(e) {
        let {
          description: t,
          imgSrc: n,
          PurchaseButton: d,
          onPurchase: u,
          subscriptionType: f,
          title: h,
          onDetails: m,
          benefitItems: g,
        } = e;
        return (0, i.jsx)(s.FocusRing, {
          children: (0, i.jsxs)("div", {
            className: c.container,
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != u && u();
            },
            children: [
              (0, i.jsxs)("div", {
                className: c.card,
                children: [
                  null != f && (0, i.jsx)(l.default, { tagType: f }),
                  (0, i.jsxs)("div", {
                    className: c.body,
                    children: [
                      (0, i.jsx)(a.Text, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: h,
                      }),
                      (0, i.jsx)("div", {
                        className: c.image,
                        children:
                          null != n
                            ? (0, i.jsx)("img", { src: n.toString(), alt: "" })
                            : (0, i.jsx)(r.TicketIcon, {
                                color: "white",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != d &&
                        (0, i.jsx)(d, {
                          className: c.purchaseBtn,
                          onClick: e => {
                            e.stopPropagation(), null == u || u();
                          },
                        }),
                      null != t &&
                        "" !== t &&
                        (0, i.jsx)(a.Text, {
                          className: c.description,
                          color: "text-normal",
                          variant: "text-sm/medium",
                          children: t,
                        }),
                    ],
                  }),
                ],
              }),
              null != g &&
                (0, i.jsx)("div", {
                  className: c.benefits,
                  children: (0, i.jsx)("div", {
                    className: c.benefitsContainer,
                    children: (0, i.jsxs)("div", {
                      className: c.benefitsList,
                      children: [
                        (0, i.jsx)(a.Text, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children:
                            o.default.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        g.length > 3
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                g.slice(0, 3),
                                (0, i.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  children:
                                    o.default.Messages.Storefront.MORE_BENEFITS.format(
                                      { count: g.length - 3 }
                                    ),
                                }),
                              ],
                            })
                          : g,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function u(e) {
        let { icon: t, name: n, description: s } = e;
        return (0, i.jsxs)("div", {
          className: c.cardBenefit,
          children: [
            (0, i.jsx)("div", { className: c.cardBenefitIcon, children: t }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  className: c.cardBenefitName,
                  children: n,
                }),
                (0, i.jsx)("div", {
                  className: c.cardBenefitDesc,
                  children: s,
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
      var i = n("37983");
      n("884691");
      var s = n("980763"),
        r = n("224701"),
        a = n("502026"),
        l = n("792788"),
        o = n("627327");
      let c = { width: 12, height: 12 };
      function d(e) {
        let { tagType: t } = e;
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            "user" === t
              ? (0, i.jsx)(r.UserIcon, { ...c, color: "var(--text-positive)" })
              : (0, i.jsx)(s.ServerIcon, { ...c, color: "var(--text-brand)" }),
            (0, i.jsx)(a.Text, {
              color: "interactive-normal",
              variant: "text-sm/medium",
              children:
                "user" === t
                  ? l.default.Messages.Storefront.USER_SUBSCRIPTION
                  : l.default.Messages.Storefront.SERVER_SUBSCRIPTION,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=9137d1b0d6328d244f29.js.map
