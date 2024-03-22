(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53992"],
  {
    77998: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("3107");
      n.es(a, e);
    },
    194247: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("551042");
      function l(t) {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.el("332512").then(n.bind(n, "332512"));
          return n => (0, a.jsx)(e, { ...t, ...n });
        });
      }
    },
    359366: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          fetchGuildProductsForGuild: function () {
            return i;
          },
          fetchGuildProduct: function () {
            return s;
          },
          updateGuildProductListing: function () {
            return u;
          },
          deleteGuildProductListing: function () {
            return d;
          },
        });
      var a = n("913144"),
        r = n("448993"),
        l = n("242278");
      let i = async t => {
          a.default.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
          try {
            let e = await l.getGuildProductListingsForGuild(t);
            a.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: t,
              products: e,
            });
          } catch (e) {
            a.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_FAILURE",
              guildId: t,
            });
          }
        },
        s = async (t, e) => {
          a.default.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
          try {
            let n = await l.getGuildProductListing(t, e);
            return (
              a.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_SUCCESS",
                product: n,
              }),
              n
            );
          } catch (t) {
            throw (
              (a.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: e,
                error: new r.APIError(t),
              }),
              t)
            );
          }
        };
      async function u(t, e, n) {
        let r = await l.updateGuildProductListing(t, e, n);
        return (
          a.default.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r
        );
      }
      async function d(t, e) {
        return (
          await l.deleteGuildProductListing(t, e),
          a.default.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }),
          !0
        );
      }
    },
    242278: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          updateGuildProductListing: function () {
            return s;
          },
          deleteGuildProductListing: function () {
            return u;
          },
          getGuildProductListingsForGuild: function () {
            return d;
          },
          getGuildProductListing: function () {
            return o;
          },
          requestDownloadUrl: function () {
            return c;
          },
        });
      var a = n("872717"),
        r = n("448993"),
        l = n("271560"),
        i = n("49111");
      let s = async (t, e, n) => {
          let {
            priceTier: l,
            imageName: s,
            createNewRole: u,
            unlinkRole: d,
            ...o
          } = n;
          try {
            let n = await a.HTTP.patch({
              url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
              body: {
                ...o,
                image_name: s,
                price_tier: l,
                create_new_role: u,
                unlink_role: d,
              },
            });
            return n.body;
          } catch (t) {
            throw new r.APIError(t);
          }
        },
        u = async (t, e) => {
          try {
            await a.HTTP.del({ url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e) });
          } catch (t) {
            throw new r.APIError(t);
          }
        },
        d = async t => {
          try {
            let e = await (0, l.httpGetWithCountryCodeQuery)({
              url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t),
            });
            return e.body.listings;
          } catch (t) {
            throw new r.APIError(t);
          }
        },
        o = async (t, e) => {
          try {
            let n = await (0, l.httpGetWithCountryCodeQuery)({
              url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
            });
            return n.body;
          } catch (t) {
            throw new r.APIError(t);
          }
        },
        c = async t => {
          let { guildId: e, productId: n, attachmentId: l } = t;
          try {
            let t = await a.HTTP.post({
              url: i.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, l),
            });
            return t.body;
          } catch (t) {
            throw new r.APIError(t);
          }
        };
    },
    153587: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          download: function () {
            return r;
          },
        });
      var a = n("545158");
      function r(t) {
        return (0, a.default)(t);
      }
    },
    158195: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("884691"),
        r = n("404118"),
        l = n("448993"),
        i = n("242278"),
        s = n("153587"),
        u = n("782340");
      function d(t, e) {
        let [n, d] = a.useState(!1),
          o = a.useCallback(
            async n => {
              if (null != t && null != e) {
                d(!0);
                try {
                  let { url: a } = await i.requestDownloadUrl({
                    guildId: t,
                    productId: e,
                    attachmentId: n,
                  });
                  await s.download(a);
                } catch (e) {
                  let t =
                    e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
                  r.default.show({
                    title: u.default.Messages.ERROR_GENERIC_TITLE,
                    body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY,
                  });
                } finally {
                  d(!1);
                }
              }
            },
            [t, e]
          );
        return { isLoading: n, downloadAttachment: o };
      }
    },
    928576: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          useProductType: function () {
            return i;
          },
          usePrice: function () {
            return s;
          },
        });
      var a = n("884691"),
        r = n("153160"),
        l = n("782340");
      function i(t) {
        return a.useMemo(() => {
          if (null == t) return;
          let e = null != t.role_id,
            n = t.attachments_count > 0;
          if (e && n)
            return l.default.Messages
              .GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (e) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (n) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
        }, [t]);
      }
      function s(t) {
        return a.useMemo(() => {
          if ((null == t ? void 0 : t.price) == null) return;
          let { amount: e, currency: n } = t.price;
          return (0, r.formatPrice)(e, n);
        }, [t]);
      }
    },
    911029: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("191814"),
        i = n("903635"),
        s = n("662833");
      function u(t) {
        var e;
        let { attachment: n } = t,
          u = null !== (e = n.size) && void 0 !== e ? e : 0;
        return (0, a.jsxs)("div", {
          className: s.container,
          children: [
            (0, a.jsx)(i.default, {
              width: 16,
              height: 16,
              className: s.fileIcon,
            }),
            (0, a.jsx)(l.default, { size: 8, horizontal: !0 }),
            (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: s.fileName,
              children: n.filename,
            }),
            (0, a.jsx)(l.default, { size: 8, horizontal: !0 }),
            (0, a.jsx)("div", { className: s.dot }),
            (0, a.jsx)(l.default, { size: 8, horizontal: !0 }),
            (0, a.jsxs)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [Math.round((u / 1024 / 1024) * 100) / 100, "MB"],
            }),
          ],
        });
      }
    },
    856246: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("191814"),
        i = n("843499");
      function s(t) {
        let { children: e, label: n } = t;
        return (0, a.jsxs)("li", {
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary",
              className: i.benefitLabel,
              children: n,
            }),
            (0, a.jsx)(l.default, { size: 12 }),
            e,
          ],
        });
      }
    },
    898998: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("158195");
      function i(t) {
        let { guildId: e, productId: n, attachmentId: i, ...s } = t,
          { isLoading: u, downloadAttachment: d } = (0, l.default)(e, n);
        return (0, a.jsx)(r.Button, {
          ...s,
          submitting: u,
          onClick: function () {
            d(i);
          },
        });
      }
    },
    407417: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return m;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("627445"),
        l = n.n(r),
        i = n("65597"),
        s = n("77078"),
        u = n("191814"),
        d = n("246053"),
        o = n("195812"),
        c = n("565559"),
        f = n("35018"),
        h = n("898998"),
        x = n("782340"),
        _ = n("116834");
      function m(t) {
        var e, n, r, m;
        let { guildId: T, productId: D } = t,
          I = (0, i.useStateFromStores)([c.default], () =>
            c.default.getGuildProduct(D)
          ),
          C =
            (null !==
              (m =
                null == I
                  ? void 0
                  : null === (e = I.attachments) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== m
              ? m
              : 0) > 1,
          L =
            null == I
              ? void 0
              : null === (r = I.attachments) || void 0 === r
                ? void 0
                : null === (n = r[0]) || void 0 === n
                  ? void 0
                  : n.id;
        return C
          ? (0, a.jsxs)(s.Button, {
              onClick: function () {
                f.default.open({ guildId: T, productId: D });
              },
              innerClassName: _.textWithIcon,
              children: [
                (0, a.jsx)("div", {
                  children:
                    x.default.Messages
                      .GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES,
                }),
                (0, a.jsx)(u.default, { size: 8, horizontal: !0 }),
                (0, a.jsx)(d.default, {
                  width: 16,
                  height: 16,
                  direction: d.default.Directions.RIGHT,
                }),
              ],
            })
          : (l(null != L, "No attachment"),
            (0, a.jsxs)(h.default, {
              guildId: T,
              productId: D,
              attachmentId: L,
              innerClassName: _.textWithIcon,
              children: [
                (0, a.jsx)("div", {
                  children:
                    x.default.Messages
                      .GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE,
                }),
                (0, a.jsx)(u.default, { size: 8, horizontal: !0 }),
                (0, a.jsx)(o.default, { width: 16, height: 16 }),
              ],
            }));
      }
    },
    246421: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("509043"),
        l = n("77078"),
        i = n("191814"),
        s = n("45029"),
        u = n("782340"),
        d = n("276766");
      function o(t) {
        let { locked: e, role: n, textVariant: o = "text-xs/medium" } = t,
          c = (0, l.useToken)(l.tokens.colors.INTERACTIVE_NORMAL).hex();
        return (0, a.jsx)("div", {
          className: d.roleTagContainer,
          children: (0, a.jsxs)("div", {
            className: d.roleTag,
            children: [
              (0, a.jsx)("div", {
                className: d.roleColor,
                style: { backgroundColor: (0, r.int2hex)(n.color) },
              }),
              (0, a.jsx)(i.default, { size: 8, horizontal: !0 }),
              (0, a.jsxs)(l.Text, {
                variant: o,
                color: "text-normal",
                children: [
                  (0, a.jsx)(l.HiddenVisually, {
                    children:
                      u.default.Messages
                        .GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER,
                  }),
                  n.name,
                ],
              }),
              !0 === e &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(i.default, { size: 8, horizontal: !0 }),
                    (0, a.jsx)(s.default, { color: c }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    35018: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = {
          open: function (t) {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await n
                .el("560057")
                .then(n.bind(n, "560057"));
              return n => (0, a.jsx)(e, { ...t, ...n });
            });
          },
        };
    },
    392977: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("37983"),
        r = n("884691"),
        l = n("414456"),
        i = n.n(l),
        s = n("627445"),
        u = n.n(s),
        d = n("446674"),
        o = n("271841"),
        c = n("77078"),
        f = n("750482"),
        h = n("194247"),
        x = n("305961"),
        _ = n("191814"),
        m = n("945330"),
        T = n("153160"),
        D = n("359366"),
        I = n("565559"),
        C = n("928576"),
        L = n("911029"),
        O = n("856246"),
        v = n("407417"),
        g = n("246421"),
        R = n("782340"),
        j = n("585649");
      function N(t) {
        let { guildProductListing: e, guildId: n, skuPricePreview: r } = t,
          l = (0, C.useProductType)(e),
          i = (0, T.formatPrice)(r.amount, r.currency),
          s = (0, d.useStateFromStores)([x.default], () =>
            x.default.getGuild(n)
          );
        return (
          u(null != s, "guild cannot be null"),
          (0, a.jsxs)("div", {
            className: j.purchaseSummaryContainer,
            children: [
              (0, a.jsx)(f.default, {
                alt: "",
                className: j.purchaseSummaryImage,
                listing: e,
                imageSize: 100,
              }),
              (0, a.jsxs)("div", {
                className: j.purchaseSummarInfo,
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: e.name,
                  }),
                  (0, a.jsx)(_.default, { size: 4 }),
                  (0, a.jsxs)("div", {
                    className: j.productTypeContainer,
                    children: [
                      (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: l,
                      }),
                      (0, a.jsx)("div", { className: j.dotSeparator }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: s.name,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: j.purchaseSummaryPrice,
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: i,
                  }),
                  (0, a.jsx)(_.default, { size: 4 }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      R.default.Messages
                        .GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function U(t) {
        var e;
        let { guildProductListing: n, guildId: r } = t,
          l = null !== (e = n.attachments) && void 0 !== e ? e : [],
          s = l.length > 1;
        return 0 === l.length
          ? null
          : (0, a.jsx)(O.default, {
              label:
                R.default.Messages
                  .GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
              children: (0, a.jsxs)("div", {
                className: i(j.attachmentsContainer, {
                  [j.attachmentsContainerMultiple]: s,
                }),
                children: [
                  (0, a.jsx)("div", {
                    className: j.attachmentGrid,
                    children: l.map(t =>
                      (0, a.jsx)(L.default, { attachment: t }, t.id)
                    ),
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(v.default, {
                      guildId: r,
                      productId: n.id,
                    }),
                  }),
                ],
              }),
            });
      }
      function P(t) {
        let { role: e } = t;
        return null == e
          ? null
          : (0, a.jsx)(O.default, {
              label:
                R.default.Messages
                  .GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
              children: (0, a.jsx)(g.default, { role: e }),
            });
      }
      function E(t) {
        return (0, a.jsx)(c.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: t,
        });
      }
      function p(t) {
        var e;
        let {
            onClose: n,
            transitionState: l,
            guildProductListingId: i,
            guildId: s,
            skuPricePreview: f,
          } = t,
          T = (0, d.useStateFromStores)([I.default], () =>
            I.default.getGuildProduct(i)
          );
        u(null != T, "guildProductListing cannot be null");
        let [C, L] = r.useState(!1);
        r.useEffect(() => {
          (async function t() {
            try {
              L(!0), await (0, D.fetchGuildProduct)(s, i), L(!1);
            } catch (t) {
              n(),
                (0, h.default)({
                  body: R.default.Messages
                    .GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
                  confirmText: R.default.Messages.GOT_IT,
                  header:
                    R.default.Messages
                      .GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
                  confirmButtonColor: o.Button.Colors.BRAND,
                });
            }
          })();
        }, [s, i, n]);
        let O =
            (null !== (e = T.attachments) && void 0 !== e ? e : []).length > 0,
          v = T.role_id,
          g = (0, d.useStateFromStores)([x.default], () =>
            null != v ? x.default.getRole(s, v) : void 0
          );
        return (0, a.jsx)(c.ModalRoot, {
          className: j.modal,
          size: c.ModalSize.DYNAMIC,
          transitionState: l,
          "aria-label": T.name,
          children: (0, a.jsx)(c.ModalContent, {
            children: (0, a.jsx)("div", {
              className: j.container,
              children: C
                ? (0, a.jsx)(c.Spinner, {})
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: j.header,
                        children: [
                          (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children:
                              R.default.Messages
                                .GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE,
                          }),
                          (0, a.jsx)(c.Clickable, {
                            onClick: n,
                            children: (0, a.jsx)(m.default, {
                              width: 24,
                              height: 24,
                              className: j.close,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(_.default, { size: 16 }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children:
                          R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format(
                            { productName: T.name, emphasisHook: E }
                          ),
                      }),
                      (0, a.jsx)(_.default, { size: 12 }),
                      (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: [
                          O
                            ? R.default.Messages
                                .GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT +
                              " "
                            : "",
                          null != g
                            ? R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format(
                                { roleName: g.name, emphasisHook: E }
                              )
                            : "",
                        ],
                      }),
                      (0, a.jsx)(_.default, { size: 12 }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children:
                          R.default.Messages
                            .GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU,
                      }),
                      (0, a.jsx)(_.default, { size: 24 }),
                      (0, a.jsx)(N, {
                        guildProductListing: T,
                        guildId: s,
                        skuPricePreview: f,
                      }),
                      (0, a.jsx)(_.default, { size: 32 }),
                      (0, a.jsx)("div", { className: j.divider }),
                      (0, a.jsx)(_.default, { size: 32 }),
                      (0, a.jsxs)("ul", {
                        className: j.benefitsContainer,
                        children: [
                          (0, a.jsx)(U, { guildProductListing: T, guildId: s }),
                          (0, a.jsx)(P, { role: g }),
                        ],
                      }),
                    ],
                  }),
            }),
          }),
        });
      }
    },
    903635: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("77998"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (t) {
            let {
              width: e = 16,
              height: n = 16,
              color: r = "currentColor",
              foreground: l,
              ...s
            } = t;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: e,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              children: (0, a.jsx)("path", {
                d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                fill: r,
                className: l,
              }),
            });
          },
          l.ImageFileIcon,
          void 0,
          { size: 16 }
        );
    },
    3107: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ImageFileIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let i = t => {
        let {
          width: e = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = t;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Zm9.35-8.87 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=b606f0de8d64559f466a.js.map
