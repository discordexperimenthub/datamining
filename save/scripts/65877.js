(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65877"],
  {
    660097: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    621680: function (e, t, n) {
      "use strict";
      e.exports = n.p + "18517b33da6ed36b855b.svg";
    },
    725345: function (e, t, n) {
      "use strict";
      e.exports = n.p + "2304725db3c96705e901.svg";
    },
    673762: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b21a7b48a6e973958489.svg";
    },
    788525: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5ff8ffaa3831478d2a28.svg";
    },
    331906: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4ba6811c2bcb626963c6.svg";
    },
    894990: function (e, t, n) {
      "use strict";
      e.exports = n.p + "20c942338703af7dccd1.svg";
    },
    674720: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d18655651bd838408129.svg";
    },
    109837: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg";
    },
    504514: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f5710b460ce933c9abe8.svg";
    },
    392807: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f5c7b6adf73fe335fa05.svg";
    },
    291410: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4fd94b2e62b94b0454d3.svg";
    },
    516083: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5b74fc90eac76055a5ad.svg";
    },
    430539: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d994d2093d7d1924be78.svg";
    },
    343305: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e9b67e80d0033605e8f4.svg";
    },
    167969: function (e, t, n) {
      "use strict";
      e.exports = n.p + "baa5b6db50bb89d55668.svg";
    },
    557256: function (e, t, n) {
      "use strict";
      e.exports = n.p + "abb37025036befe38e64.svg";
    },
    341048: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4a1620da08f098314241.svg";
    },
    537381: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ac64a4b16416154663f7.svg";
    },
    425456: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3af18e66cab696affd74.svg";
    },
    945182: function (e, t, n) {
      "use strict";
      e.exports = n.p + "789cbb1aaa8190be1c18.svg";
    },
    769860: function (e, t, n) {
      "use strict";
      e.exports = n.p + "714405524ef39906bd06.png";
    },
    867250: function (e, t, n) {
      "use strict";
      e.exports = n.p + "75ad54f57ebd84babdf2.svg";
    },
    702143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          accountDetailsClose: function () {
            return I;
          },
          accountDetailsInit: function () {
            return T;
          },
          clearErrors: function () {
            return g;
          },
          disableAccount: function () {
            return m;
          },
          getHarvestStatus: function () {
            return p;
          },
          requestHarvest: function () {
            return P;
          },
          resetAllPending: function () {
            return U;
          },
          resetAndCloseUserProfileForm: function () {
            return h;
          },
          resetPendingAccountChanges: function () {
            return A;
          },
          saveAccountChanges: function () {
            return C;
          },
          saveAccountRequest: function () {
            return S;
          },
          setDisableSubmit: function () {
            return M;
          },
          setPendingAvatar: function () {
            return R;
          },
          setPendingAvatarDecoration: function () {
            return N;
          },
          setPendingGlobalNameName: function () {
            return O;
          },
          setPendingProfileEffectId: function () {
            return L;
          },
        });
      var r = n("454836"),
        i = n("986329"),
        a = n("24135"),
        s = n("312916"),
        o = n("521588"),
        u = n("328470"),
        l = n("204606"),
        c = n("567713"),
        d = n("720872"),
        _ = n("467006"),
        f = n("999114"),
        E = n("30175");
      function T() {
        s.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
      }
      function I() {
        s.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
      }
      function m(e, t) {
        let n = t
            ? E.default.Messages.DELETE_ACCOUNT
            : E.default.Messages.DISABLE_ACCOUNT,
          i = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
        return (0, c.default)(
          t =>
            r.default.post({
              url: i,
              body: { password: e, ...t },
              oldFormErrors: !0,
            }),
          { modalProps: { title: n }, checkEnabled: !1 }
        ).then(() => {
          d.default.logoutInternal(),
            (0, o.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT);
        });
      }
      async function S(e) {
        let t = await r.default.patch({
            url: _.Endpoints.ME,
            oldFormErrors: !0,
            body: e,
          }),
          n = t.body;
        if (n.token) {
          let t = n.token;
          delete n.token,
            s.default.dispatch({
              type: "UPDATE_TOKEN",
              token: t,
              userId: n.id,
            }),
            e?.password != null &&
              e?.new_password != null &&
              s.default.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
        }
        return s.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
      }
      function C(e) {
        let {
          username: t,
          discriminator: n,
          email: r,
          emailToken: a,
          password: o,
          avatar: d,
          avatarDecoration: T,
          newPassword: I,
          globalName: m,
        } = e;
        return (
          s.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" }),
          (0, c.default)(
            e => {
              let s = {
                username: t,
                email: r,
                email_token: a,
                password: o,
                avatar: d,
                discriminator: n,
                global_name: m,
                new_password: I,
                ...e,
              };
              null === T && (s.avatar_decoration_id = null),
                null != T &&
                  ((s.avatar_decoration_id = T.id),
                  (s.avatar_decoration_sku_id = T.skuId));
              let u = i.default.get(_.DEVICE_TOKEN),
                l = (0, f.getDevicePushProvider)();
              null != l &&
                null != u &&
                ((s.push_provider = l), (s.push_token = u));
              let c = i.default.get(_.DEVICE_VOIP_TOKEN);
              return (
                null != f.DEVICE_PUSH_VOIP_PROVIDER &&
                  null != c &&
                  ((s.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER),
                  (s.push_voip_token = c)),
                S(s)
              );
            },
            {
              checkEnabled: !1,
              modalProps: { title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT },
              hooks: {
                onEarlyClose: () =>
                  s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: {},
                  }),
              },
            }
          ).then(
            e => {
              let t = e.body;
              return (
                u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                  animated: (0, l.isAnimatedIconHash)(t.avatar),
                }),
                s.default.dispatch({
                  type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS",
                }),
                e
              );
            },
            e => (
              s.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                errors: e.body,
              }),
              e
            )
          )
        );
      }
      function p() {
        return r.default.get({
          url: _.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function P() {
        return r.default.post({
          url: _.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function R(e) {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
          avatar: e,
        }),
          null == e
            ? a.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE
              )
            : a.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED
              );
      }
      function O(e) {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
          globalName: e,
        });
      }
      function N(e) {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
          avatarDecoration: e,
        });
      }
      function L(e) {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
          profileEffectId: e,
        });
      }
      function g() {
        s.default.dispatch({ type: "USER_SETTINGS_CLEAR_ERRORS" });
      }
      function A() {
        s.default.dispatch({
          type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function U() {
        s.default.dispatch({ type: "USER_SETTINGS_RESET_ALL_PENDING" });
      }
      function h() {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM",
        });
      }
      function M(e) {
        s.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
          disable: e,
        });
      }
    },
    822645: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DEFAULT_FILE_UPLOAD_ICONS: function () {
            return o;
          },
          EMOJI_FILE_UPLOAD_ICONS: function () {
            return u;
          },
          FileUploadIconClassNames: function () {
            return s;
          },
        });
      var r,
        i,
        a = n("577950");
      ((r = i || (i = {}))[(r.IMAGE = 0)] = "IMAGE"),
        (r[(r.DOCUMENT = 1)] = "DOCUMENT"),
        (r[(r.CODE = 2)] = "CODE");
      let s = { 0: a.image, 1: a.document, 2: a.code },
        o = [1, 0, 2],
        u = [0, 0, 0];
    },
    601763: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("803997"),
        a = n.n(i),
        s = n("822645"),
        o = n("577950"),
        u = function (e) {
          let { icons: t, className: n } = e;
          return (0, r.jsxs)("div", {
            className: a()(o.icons, n),
            children: [
              (0, r.jsx)("div", {
                className: o.wrapOne,
                children: (0, r.jsx)("div", {
                  className: a()(
                    o.icon,
                    o.one,
                    s.FileUploadIconClassNames[t[0]]
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: o.wrapThree,
                children: (0, r.jsx)("div", {
                  className: a()(
                    o.icon,
                    o.three,
                    s.FileUploadIconClassNames[t[2]]
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: o.wrapTwo,
                children: (0, r.jsx)("div", {
                  className: a()(
                    o.icon,
                    o.two,
                    s.FileUploadIconClassNames[t[1]]
                  ),
                }),
              }),
            ],
          });
        };
    },
    736587: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UPLOAD_ERROR_MODAL_KEY: function () {
            return E;
          },
          default: function () {
            return f;
          },
          openUploadError: function () {
            return T;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("803997"),
        a = n.n(i),
        s = n("910838"),
        o = n("916615"),
        u = n("547783"),
        l = n("508338"),
        c = n("601763"),
        d = n("822645"),
        _ = n("577950");
      function f(e) {
        let {
            title: t,
            help: n,
            showPremiumUpsell: i,
            transitionState: s,
            icons: f,
            fileSize: E,
            onClose: T,
          } = e,
          I = (0, l.useUID)(),
          m = f ?? d.DEFAULT_FILE_UPLOAD_ICONS;
        return i
          ? (0, r.jsx)(u.default, {
              transitionState: s,
              onClose: T,
              fileSize: E,
            })
          : (0, r.jsx)(o.ModalRoot, {
              size: o.ModalSize.DYNAMIC,
              "aria-labelledby": I,
              transitionState: s,
              children: (0, r.jsx)("div", {
                className: a()(_.uploadDropModal, _.error),
                children: (0, r.jsxs)("div", {
                  className: _.inner,
                  children: [
                    (0, r.jsx)(c.default, { icons: m }),
                    (0, r.jsx)("div", {
                      id: I,
                      className: _.title,
                      children: t,
                    }),
                    (0, r.jsx)("div", {
                      className: _.instructions,
                      children: n,
                    }),
                  ],
                }),
              }),
            });
      }
      let E = "UPLOAD_ERROR_MODAL_KEY";
      function T(e) {
        (0, s.openModal)(t => (0, r.jsx)(f, { ...t, ...e }), { modalKey: E });
      }
    },
    699340: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("654095");
      n.es(r, t);
    },
    299647: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("646510");
      n.es(r, t);
    },
    62889: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("207561"),
        i = n("566031"),
        a = n("804594");
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n = arguments.length > 2 ? arguments[2] : void 0,
          s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = (0, i.diffAsUnits)(Date.now(), e),
          u = (0, r.useForceUpdate)();
        return (
          (0, a.default)(
            () => {
              !(
                0 === o.days &&
                0 === o.hours &&
                0 === o.minutes &&
                0 === o.seconds
              ) &&
                !s &&
                (u(), n?.());
            },
            s ? null : t
          ),
          o
        );
      }
    },
    804594: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("470079"),
        i = n("512722"),
        a = n.n(i);
      function s(e, t) {
        let n = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          n.current = e;
        }, [e]),
          (0, r.useEffect)(() => {
            if (null === t) return;
            let e = setInterval(function () {
              a()(null != n.current, "Missing callback"), n.current();
            }, t);
            return () => clearInterval(e);
          }, [t]);
      }
    },
    455784: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IMAGE_OPEN_DIALOG_DESCRIPTION: function () {
            return u;
          },
          MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function () {
            return a;
          },
          MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function () {
            return s;
          },
          MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function () {
            return o;
          },
          insertAccessibilityLabelElements: function () {
            return l;
          },
        });
      var r = n("508338"),
        i = n("30175");
      let a = (0, r.uid)(),
        s = (0, r.uid)(),
        o = (0, r.uid)(),
        u = (0, r.uid)();
      function l() {
        [
          { id: a, text: "," },
          { id: s, text: "," },
          { id: o, text: i.default.Messages.REACTIONS },
          {
            id: u,
            text: i.default.Messages
              .OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION,
          },
        ].forEach(e => {
          let { id: t, text: n } = e,
            r = document.getElementById(t);
          null == r &&
            ((r = document.createElement("div")).setAttribute("id", t),
            (r.innerText = n),
            (r.style.display = "none"),
            document.body.appendChild(r));
        });
      }
    },
    796538: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDecorationSizeForAvatarSize: function () {
            return u;
          },
          openAvatarDecorationModal: function () {
            return l;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("974328"),
        a = n("521588");
      n("495366");
      var s = n("249606"),
        o = n("467006");
      function u(e) {
        return "number" != typeof e
          ? (0, i.getAvatarSize)(e) * s.DECORATION_TO_AVATAR_RATIO
          : e * s.DECORATION_TO_AVATAR_RATIO;
      }
      let l = e => {
        let {
          analyticsLocations: t,
          initialSelectedDecoration: s,
          isTryItOutFlow: u,
          guild: l,
        } = e;
        (0, i.openModalLazy)(async () => {
          (0, a.getHistory)().location.pathname ===
            o.Routes.COLLECTIBLES_SHOP_FULLSCREEN &&
            (0, a.transitionTo)(o.Routes.APP);
          let { default: e } = await n
            .el("796538@1309:1342")
            .then(n.bind(n, "314945"));
          return n =>
            (0, r.jsx)(e, {
              ...n,
              analyticsLocations: t,
              initialSelectedDecoration: s,
              isTryItOutFlow: u,
              guild: l,
            });
        }, {});
      };
    },
    940213: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("470079"),
        i = n("661223"),
        a = n("329420"),
        s = n("463451"),
        o = n("361733"),
        u = n("871831"),
        l = n("470526"),
        c = n("204606"),
        d = n("660097"),
        _ = e => {
          let {
              user: t,
              guildId: n,
              size: _,
              animateOnHover: f = !1,
              showPending: E = !1,
              showTryItOut: T = !1,
              avatarDecorationOverride: I,
            } = e,
            [m, S] = r.useState(!1),
            C = (0, i.useStateFromStores)(
              [a.default],
              () => a.default.useReducedMotion
            ),
            p = (0, i.useStateFromStores)([l.default], () =>
              l.default.isFocused()
            ),
            P = (0, i.useStateFromStores)([o.default], () =>
              null != n && null != t ? o.default.getMember(n, t.id) : null
            ),
            [R, O] = (0, i.useStateFromStoresArray)([u.default], () => [
              u.default.getCurrentUser()?.id,
              u.default.getUser(t?.id),
            ]),
            N =
              null == P
                ? O?.avatarDecoration
                : null === P.avatarDecoration
                  ? null
                  : P.avatarDecoration ?? O?.avatarDecoration,
            { pendingAvatarDecoration: L } = (0, s.default)({
              isTryItOut: T,
              guildId: n,
            }),
            g = p && (m || (!C && !f)),
            A = E && void 0 !== L && void 0 !== R && R === t?.id,
            U = null != n && null === L,
            h = A
              ? U
                ? t?.avatarDecoration
                : L ?? N
              : N ?? t?.avatarDecoration,
            M = r.useMemo(
              () =>
                (0, c.getAvatarDecorationURL)({
                  avatarDecoration: void 0 !== I ? I : h,
                  canAnimate: g,
                  size: _,
                }),
              [h, g, _, I]
            ),
            D = r.useCallback(() => S(!0), []);
          return {
            avatarPlaceholderSrc: d,
            avatarDecorationSrc: M,
            isAvatarDecorationAnimating: g,
            eventHandlers: {
              onMouseEnter: D,
              onMouseLeave: r.useCallback(() => S(!1), []),
            },
          };
        };
    },
    174942: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          closeEditor: function () {
            return o;
          },
          openEditor: function () {
            return s;
          },
          resetBackgroundGradientPreset: function () {
            return a;
          },
          resetPreviewClientTheme: function () {
            return u;
          },
          updateBackgroundGradientPreset: function () {
            return i;
          },
        });
      var r = n("312916");
      let i = e => {
          r.default.dispatch({
            type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
            presetId: e,
          });
        },
        a = () => {
          r.default.dispatch({
            type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
            presetId: null,
          });
        },
        s = () => {
          r.default.dispatch({ type: "CLIENT_THEMES_EDITOR_OPEN" });
        },
        o = () => {
          r.default.dispatch({ type: "CLIENT_THEMES_EDITOR_CLOSE" });
        },
        u = () => {
          r.default.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
        };
    },
    515562: function (e, t, n) {
      "use strict";
      let r, i;
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("392711"),
        s = n("661223"),
        o = n("312916"),
        u = n("703229"),
        l = n("547723");
      let c = new Map(),
        d = new Map(),
        _ = c,
        f = d,
        E = !1;
      let T = () => {
        (_ = c), (f = d), (i = void 0), (E = !1), (r = void 0);
      };
      class I extends s.default.Store {
        static #e = (this.displayName = "CollectiblesCategoryStore");
        initialize() {
          this.syncWith([u.default], T);
        }
        get isFetching() {
          return E;
        }
        get error() {
          return r;
        }
        get lastFetched() {
          return i;
        }
        get categories() {
          return _;
        }
        get products() {
          return f;
        }
        getCategory(e) {
          return null != e ? _.get(e) : void 0;
        }
        getProduct(e) {
          return null != e ? f.get(e) : void 0;
        }
        getCategoryForProduct(e) {
          let t = this.getProduct(e);
          return this.getCategory(t?.categorySkuId);
        }
      }
      var m = new I(o.default, {
        COLLECTIBLES_CATEGORIES_FETCH: e => {
          (E = !0), (r = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
          0 === e.categories.length
            ? ((_ = c), (f = d))
            : !(0, a.isEqual)([..._.values()], e.categories) &&
              ((_ = new Map(e.categories.map(e => [e.skuId, e]))),
              (f = new Map(
                (0, l.getProductsFromCategories)(_).map(e => [e.skuId, e])
              ))),
            (i = Date.now()),
            (E = !1),
            (r = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
          let { error: t } = e;
          (_ = c), (f = d), (E = !1), (r = t);
        },
        COLLECTIBLES_PRODUCT_FETCH: e => {
          (E = !0), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
          f.set(e.product.skuId, e.product), (E = !1), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
          let { error: t } = e;
          (E = !1), (r = t);
        },
        LOGOUT: T,
      });
    },
    547723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          extractPriceByPurchaseTypes: function () {
            return f;
          },
          getAvatarDecorations: function () {
            return p;
          },
          getCollectiblesAssetURL: function () {
            return P;
          },
          getFormattedPriceForCollectiblesProduct: function () {
            return _;
          },
          getLogoSize: function () {
            return g;
          },
          getProductsFromCategories: function () {
            return T;
          },
          getProfileEffectsFromCategories: function () {
            return O;
          },
          getProfileEffectsFromPurchases: function () {
            return R;
          },
          groupProfileEffects: function () {
            return N;
          },
          isCollectiblesGiftCode: function () {
            return L;
          },
          isFreeCollectiblesProduct: function () {
            return E;
          },
          isPremiumCollectiblesProduct: function () {
            return c;
          },
          isPremiumCollectiblesPurchase: function () {
            return d;
          },
        });
      var r = n("392711"),
        i = n("53452"),
        a = n("500833"),
        s = n("977634"),
        o = n("5595"),
        u = n("739596"),
        l = n("467006");
      let c = e => e?.premiumType != null,
        d = e => e?.purchaseType === l.EntitlementTypes.PREMIUM_PURCHASE,
        _ = (e, t) => {
          let n = f(
            e,
            t
              ? l.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
              : l.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
          return null == n ? "" : (0, s.formatPrice)(n?.amount, n?.currency);
        },
        f = (e, t) => {
          let n = e.prices[t] ?? null;
          return null == n ? null : n.countryPrices?.prices?.[0];
        },
        E = e => f(e, l.PriceSetAssignmentPurchaseTypes.DEFAULT)?.amount === 0,
        T = e => {
          let t = (0, r.flatMap)([...e.values()], "products");
          return (0, r.uniqBy)(t, "storeListingId");
        },
        I = (e, t) => {
          if (t === i.CollectiblesItemType.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(
              o.isAvatarDecorationRecord
            );
            return (0, r.uniqBy)(t, "id");
          }
          if (t === i.CollectiblesItemType.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], "items").filter(
              u.isProfileEffectRecord
            );
            return (0, r.uniqBy)(t, "id");
          }
        },
        m = (e, t) => {
          let n = T(e);
          if (t === i.CollectiblesItemType.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, "items").filter(
              o.isAvatarDecorationRecord
            );
            return (0, r.uniqBy)(e, "id");
          }
          if (t === i.CollectiblesItemType.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, "items").filter(u.isProfileEffectRecord);
            return (0, r.uniqBy)(e, "id");
          }
        },
        S = e => I(e, i.CollectiblesItemType.AVATAR_DECORATION),
        C = e => m(e, i.CollectiblesItemType.AVATAR_DECORATION),
        p = (e, t) => (0, r.uniqBy)([...S(e), ...C(t)], "id"),
        P = (e, t) => {
          let { CDN_HOST: n, API_ENDPOINT: r } = window.GLOBAL_ENV,
            i = (0, a.getBestMediaProxySize)(
              t.size * (0, a.getDevicePixelRatio)()
            ),
            s = t?.format ?? "png";
          if (null != n)
            return `${location.protocol}//${n}/app-assets/${l.COLLECTIBLES_APPLICATION_ID}/${e}.${s}?size=${i}`;
          let o = l.Endpoints.APPLICATION_ASSET(
            l.COLLECTIBLES_APPLICATION_ID,
            e,
            s
          );
          return `${location.protocol}${r}${o}?size=${i}`;
        },
        R = e => I(e, i.CollectiblesItemType.PROFILE_EFFECT),
        O = e => m(e, i.CollectiblesItemType.PROFILE_EFFECT),
        N = (e, t) => {
          let n = R(t),
            r = O(e).filter(e => {
              let { id: t } = e;
              return !n.some(e => e.id === t);
            });
          return { purchased: n, shopPreviews: r };
        },
        L = e => e.applicationId === l.COLLECTIBLES_APPLICATION_ID,
        g = e => 3.8 * e;
    },
    23419: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("627341");
      var r = n("470079"),
        i = n("278074"),
        a = n("53452"),
        s = n("203959"),
        o = n("328470"),
        u = n("515562"),
        l = n("547723"),
        c = n("467006"),
        d = n("171168"),
        _ = e => {
          let t = (0, s.default)([u.default], () => u.default.products);
          return (0, r.useCallback)(
            n => {
              let { type: r, skuId: s } = n,
                u = t.get(s);
              o.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, i.match)(r)
                  .with(
                    a.CollectiblesItemType.AVATAR_DECORATION,
                    () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION
                  )
                  .with(
                    a.CollectiblesItemType.PROFILE_EFFECT,
                    () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT
                  )
                  .otherwise(() => void 0),
                feature_tier: (0, l.isPremiumCollectiblesProduct)(u)
                  ? d.AnalyticsPremiumFeatureTiers.FREE
                  : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                feature_selection: u?.name,
                location_stack: e,
              });
            },
            [t, e]
          );
        };
    },
    5595: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          isAvatarDecorationRecord: function () {
            return a;
          },
        });
      var r = n("53452"),
        i = n("673992");
      let a = e => e instanceof s;
      class s extends i.default {
        constructor(e) {
          super(e),
            (this.type = r.CollectiblesItemType.AVATAR_DECORATION),
            (this.asset = e.asset),
            (this.label = e.label);
        }
        static fromServer(e) {
          return new s({ ...super.fromServer(e), ...e });
        }
      }
    },
    673992: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("885714");
      class i extends r.default {
        constructor(e) {
          super(), (this.id = e.id), (this.skuId = e.skuId);
        }
        static fromServer(e) {
          let { sku_id: t, ...n } = e;
          return new i({ ...n, skuId: t });
        }
      }
    },
    739596: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          isProfileEffectRecord: function () {
            return a;
          },
        });
      var r = n("53452"),
        i = n("673992");
      let a = e => e instanceof s;
      class s extends i.default {
        constructor(e) {
          super(e), (this.type = r.CollectiblesItemType.PROFILE_EFFECT);
        }
        static fromServer(e) {
          return new s({ ...super.fromServer(e), ...e });
        }
      }
    },
    747195: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearErrors: function () {
            return O;
          },
          closeGuildIdentitySettings: function () {
            return c;
          },
          initGuildIdentitySettings: function () {
            return l;
          },
          resetAllPending: function () {
            return R;
          },
          resetAndCloseGuildIdentityForm: function () {
            return d;
          },
          resetPendingMemberChanges: function () {
            return p;
          },
          resetPendingProfileChanges: function () {
            return P;
          },
          saveGuildIdentityChanges: function () {
            return o;
          },
          setCurrentGuild: function () {
            return u;
          },
          setDisableSubmit: function () {
            return N;
          },
          setPendingAvatar: function () {
            return _;
          },
          setPendingAvatarDecoration: function () {
            return f;
          },
          setPendingBanner: function () {
            return T;
          },
          setPendingBio: function () {
            return I;
          },
          setPendingNickname: function () {
            return S;
          },
          setPendingProfileEffectId: function () {
            return E;
          },
          setPendingPronouns: function () {
            return m;
          },
          setPendingThemeColors: function () {
            return C;
          },
        });
      var r = n("454836"),
        i = n("312916"),
        a = n("939591"),
        s = n("467006");
      async function o(e, t) {
        let { nick: n, avatar: a, avatarDecoration: o } = t;
        if (null == e) throw Error("Need guildId");
        i.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT" });
        let u = {
          nick: n,
          avatar: a,
          avatar_decoration_id: null === o ? null : o?.id,
          avatar_decoration_sku_id: null === o ? null : o?.skuId,
        };
        try {
          let t = await r.default.patch({
            url: s.Endpoints.SET_GUILD_MEMBER(e),
            body: u,
            oldFormErrors: !0,
          });
          return (
            i.default.dispatch({
              type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS",
            }),
            i.default.dispatch({
              type: "GUILD_MEMBER_PROFILE_UPDATE",
              guildMember: t.body,
              guildId: e,
            }),
            t
          );
        } catch (t) {
          let e = t.body;
          e?.username != null && ((e.nick = e.username), delete e.username),
            i.default.dispatch({
              type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
              errors: t.body,
            });
        }
      }
      function u(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
          guild: e,
        });
      }
      function l(e, t) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_INIT",
          guild: e,
          analyticsLocations: t,
        });
      }
      function c() {
        i.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLOSE" }),
          (0, a.popLayer)();
      }
      function d() {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM",
        });
      }
      function _(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
          avatar: e,
        });
      }
      function f(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
          avatarDecoration: e,
        });
      }
      function E(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
          profileEffectId: e,
        });
      }
      function T(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
          banner: e,
        });
      }
      function I(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
          bio: e,
        });
      }
      function m(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
          pronouns: e,
        });
      }
      function S(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
          nickname: e,
        });
      }
      function C(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
          themeColors: e,
        });
      }
      function p() {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES",
        });
      }
      function P() {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function R() {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING",
        });
      }
      function O() {
        i.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS" });
      }
      function N(e) {
        i.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
          disable: e,
        });
      }
    },
    513462: function (e, t, n) {
      "use strict";
      let r, i, a, s, o, u, l, c, d, _, f;
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var E = n("661223"),
        T = n("312916"),
        I = n("467006");
      let m = I.FormStates.CLOSED,
        S = {},
        C = !1;
      function p() {
        (m = I.FormStates.CLOSED), (S = {}), (d = null), (_ = void 0), (f = []);
      }
      function P() {
        R(), O(), (S = {}), (m = I.FormStates.OPEN);
      }
      function R() {
        (r = void 0), (l = void 0), (i = void 0);
      }
      function O() {
        (s = void 0), (o = void 0), (u = void 0), (c = void 0), (a = void 0);
      }
      class N extends E.default.Store {
        static #e = (this.displayName = "GuildIdentitySettingsStore");
        getFormState() {
          return m;
        }
        getErrors() {
          return S;
        }
        showNotice() {
          return (
            void 0 !== r ||
            void 0 !== i ||
            void 0 !== a ||
            void 0 !== s ||
            void 0 !== o ||
            void 0 !== u ||
            void 0 !== l ||
            void 0 !== c
          );
        }
        getPendingAvatar() {
          return r;
        }
        getPendingAvatarDecoration() {
          return i;
        }
        getPendingProfileEffectId() {
          return a;
        }
        getPendingBanner() {
          return s;
        }
        getPendingBio() {
          return o;
        }
        getPendingNickname() {
          return l;
        }
        getPendingPronouns() {
          return u;
        }
        getPendingAccentColor() {
          return l;
        }
        getPendingThemeColors() {
          return c;
        }
        getAllPending() {
          return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffectId: a,
            pendingBanner: s,
            pendingBio: o,
            pendingPronouns: u,
            pendingNickname: l,
            pendingThemeColors: c,
          };
        }
        getGuild() {
          return d;
        }
        getSource() {
          return _;
        }
        getAnalyticsLocations() {
          return f;
        }
        getIsDisableSubmit() {
          return C;
        }
      }
      var L = new N(T.default, {
        GUILD_IDENTITY_SETTINGS_INIT: function (e) {
          (d = e.guild),
            (m = I.FormStates.OPEN),
            (S = {}),
            (_ = e.source),
            (f = e.analyticsLocations);
        },
        GUILD_IDENTITY_SETTINGS_CLOSE: p,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function () {
          P(), p();
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function (e) {
          (d = e.guild), (S = {});
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function () {
          (m = I.FormStates.SUBMITTING), (S = {});
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function (e) {
          if (m !== I.FormStates.SUBMITTING) return !1;
          (m = I.FormStates.OPEN), (S = e.errors ?? {});
        },
        USER_PROFILE_UPDATE_FAILURE: function (e) {
          (m = I.FormStates.OPEN), (S = e.errors);
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function (e) {
          let { avatar: t } = e;
          r = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function (e) {
          let { avatarDecoration: t } = e;
          i = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
          let { profileEffectId: t } = e;
          a = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function (e) {
          let { banner: t } = e;
          s = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function (e) {
          let { bio: t } = e;
          o = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function (e) {
          let { pronouns: t } = e;
          u = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function (e) {
          let { nickname: t } = e;
          l = t;
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function (e) {
          let { themeColors: t } = e;
          c = t;
        },
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: R,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: O,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: P,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: P,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function () {
          S = {};
        },
        GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function (e) {
          let { disable: t } = e;
          C = t;
        },
      });
    },
    718408: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2023-11_nitro_affinities",
        label: "Nitro Affinities",
        defaultConfig: { marketingEnabled: !1, planSelectionEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Nitro Affinities for Marketing Page",
            config: { marketingEnabled: !0, planSelectionEnabled: !1 },
          },
          {
            id: 2,
            label: "Enable Nitro Affinities for Plan Selection Page",
            config: { marketingEnabled: !1, planSelectionEnabled: !0 },
          },
          {
            id: 3,
            label:
              "Enable Nitro Affinities for Both Marketing Page and Plan Selection Page",
            config: { marketingEnabled: !0, planSelectionEnabled: !0 },
          },
        ],
      });
    },
    468385: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("661223"),
        i = n("312916");
      let a = { fetched: !1, affinities: [] };
      class s extends r.default.Store {
        get hasFetched() {
          return a.fetched;
        }
        get affinities() {
          return a.affinities;
        }
      }
      var o = new s(i.default, {
        BILLING_NITRO_AFFINITY_FETCHED: function (e) {
          let {} = e;
          a.fetched = !0;
        },
        BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function (e) {
          let { res: t } = e;
          a.affinities = t;
        },
      });
    },
    675609: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          navigateToPremiumMarketingPage: function () {
            return a;
          },
        });
      var r = n("620412"),
        i = n("467006");
      let a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        r.default.open(i.UserSettingsSections.PREMIUM, null, {
          openWithoutBackstack: e,
        });
      };
    },
    389280: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useActiveDiscountDuration: function () {
            return m;
          },
          useFetchChurnUserDiscountOffer: function () {
            return C;
          },
          useHasDiscountApplied: function () {
            return I;
          },
          useIsInPremiumOfferExperience: function () {
            return T;
          },
          useShouldFetchChurnOffer: function () {
            return p;
          },
        });
      var r = n("470079"),
        i = n("913527"),
        a = n.n(i),
        s = n("661223"),
        o = n("454836"),
        u = n("416573"),
        l = n("864342"),
        c = n("458565"),
        d = n("459992"),
        _ = n("921011"),
        f = n("171168"),
        E = n("467006");
      function T() {
        let e = (0, _.usePremiumTrialOffer)(),
          t = (0, l.useHasActiveTrial)(),
          n = (0, d.usePremiumDiscountOffer)(),
          r = I();
        return null != e || t || null != n || r;
      }
      let I = () => {
          let e = (0, s.useStateFromStores)([u.default], () =>
              u.default.getPremiumTypeSubscription()
            ),
            t = e?.metadata?.active_discount_expires_at;
          return null != t && a()(Date.now()) <= a()(t);
        },
        m = () => {
          let e = (0, s.useStateFromStores)([u.default], () =>
            u.default.getPremiumTypeSubscription()
          );
          switch (e?.metadata?.active_discount_id) {
            case f.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
              return 1;
            case f.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
            case f.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
            case f.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
              return 3;
            default:
              return;
          }
        },
        S = async () => {
          let e = null;
          try {
            e =
              (await o.default.post({ url: E.Endpoints.CHURN_USER_OFFER })).body
                .offer ?? null;
          } catch (e) {}
          return e;
        },
        C = e => {
          let [t, n] = r.useState(!1),
            [i, a] = r.useState(!1),
            [s, o] = r.useState(null);
          if (e)
            return {
              churnUserDiscountOffer: s,
              isFetchingChurnDiscountOffer: i,
            };
          let u = () => {
            n(!0), a(!1);
          };
          return (
            !i &&
              !t &&
              (a(!0),
              S()
                .then(e => {
                  o(e), u();
                })
                .catch(e => {
                  u();
                })),
            { churnUserDiscountOffer: s, isFetchingChurnDiscountOffer: i }
          );
        },
        p = () => {
          let { enabled: e } = c.default.useExperiment(
              { location: "useShouldFetchChurnOffer" },
              { autoTrackExposure: !1 }
            ),
            t = (0, s.useStateFromStores)([u.default], () =>
              u.default.getPremiumTypeSubscription()
            ),
            n = I(),
            r = null !== t && t.hasPremiumNitroMonthly,
            i = null != t && null != t.trialId;
          return e && r && !i && !n;
        };
    },
    864342: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentPremiumTrialTier: function () {
            return o;
          },
          useHasActiveTrial: function () {
            return s;
          },
        });
      var r = n("661223"),
        i = n("871831"),
        a = n("416573");
      n("171168");
      let s = () => {
        let e = (0, r.useStateFromStores)([a.default], () =>
          a.default.getPremiumTypeSubscription()
        );
        return e?.trialId != null;
      };
      function o() {
        let e = (0, r.useStateFromStores)([a.default], () =>
            a.default.getPremiumTypeSubscription()
          ),
          t = (0, r.useStateFromStores)([i.default], () =>
            i.default.getCurrentUser()
          );
        return e?.trialId != null ? t?.premiumType : null;
      }
    },
    766873: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NON_SUBSCRIBER_SENTINEL: function () {
            return E;
          },
          maybeFetchPremiumLikelihood: function () {
            return I;
          },
          useMaybeFetchPremiumLikelihood: function () {
            return m;
          },
        });
      var r = n("470079"),
        i = n("203959"),
        a = n("454836"),
        s = n("312916"),
        o = n("714558"),
        u = n("871831"),
        l = n("643847"),
        c = n("952223"),
        d = n("862949"),
        _ = n("171168"),
        f = n("467006");
      let E = "nonSubscriber";
      async function T() {
        try {
          s.default.dispatch({ type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH" });
          let { body: e } = await a.default.get({
            url: f.Endpoints.USER_PREMIUM_LIKELIHOOD,
          });
          s.default.dispatch({
            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
            premiumLikelihood: (function (e) {
              return {
                [E]: e.non_subscriber,
                [_.PremiumSubscriptionSKUs.TIER_0]:
                  e[_.PremiumSubscriptionSKUs.TIER_0],
                [_.PremiumSubscriptionSKUs.TIER_2]:
                  e[_.PremiumSubscriptionSKUs.TIER_2],
              };
            })(e),
          });
        } catch (e) {
          404 === e.status
            ? s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
              })
            : s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR",
              });
        }
      }
      function I(e) {
        let { enabled: t, useExpectedValue: n } = e.getCurrentConfig(
            { location: "443cca_1" },
            { autoTrackExposure: !1 }
          ),
          r = d.default.shouldFetchPremiumLikelihood();
        S(u.default.getCurrentUser(), r, t, n);
      }
      function m(e) {
        let { enabled: t, useExpectedValue: n } = e.useExperiment(
            { location: "443cca_2" },
            { autoTrackExposure: !1 }
          ),
          a = (0, i.default)([d.default], () =>
            d.default.shouldFetchPremiumLikelihood()
          ),
          s = (0, i.default)([u.default], () => u.default.getCurrentUser());
        r.useEffect(() => {
          S(s, a, t, n);
        }, [s, a, t, n]);
      }
      function S(e, t, n, r) {
        null != e &&
          !(0, c.isPremium)(e) &&
          n &&
          (t && T(),
          r &&
            (!l.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_0) &&
              !l.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_0) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                _.PremiumSubscriptionSKUs.TIER_0
              ),
            !l.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_2) &&
              !l.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_2) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                _.PremiumSubscriptionSKUs.TIER_2
              )));
      }
    },
    862949: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("661223"),
        i = n("312916");
      let a = { premiumLikelihood: void 0, isFetching: !1, fetched: !1 },
        s = a;
      class o extends r.default.Store {
        static #e = (this.displayName = "UserPremiumLikelihoodStore");
        initialize() {
          s = a;
        }
        getState() {
          return s;
        }
        shouldFetchPremiumLikelihood() {
          return !s.isFetching && !s.fetched;
        }
      }
      var u = new o(i.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function () {
          s.isFetching = !0;
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function (e) {
          let { premiumLikelihood: t } = e;
          (s.premiumLikelihood = t), (s.fetched = !0), (s.isFetching = !1);
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function () {
          s.isFetching = !1;
        },
        LOGOUT: function () {
          s.premiumLikelihood = void 0;
        },
      });
    },
    878042: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getHigherExpectedValue: function () {
            return a;
          },
          getHighestLikelihood: function () {
            return s;
          },
        });
      var r = n("766873"),
        i = n("171168");
      function a(e, t, n) {
        return null == e
          ? i.PremiumTypes.TIER_2
          : e[i.PremiumSubscriptionSKUs.TIER_0] * t >
              e[i.PremiumSubscriptionSKUs.TIER_2] * n
            ? i.PremiumTypes.TIER_0
            : i.PremiumTypes.TIER_2;
      }
      function s(e) {
        if (null == e) return i.PremiumTypes.TIER_0;
        let t = e[r.NON_SUBSCRIBER_SENTINEL],
          n = e[i.PremiumSubscriptionSKUs.TIER_0],
          a = e[i.PremiumSubscriptionSKUs.TIER_2];
        return a > n && a > t ? i.PremiumTypes.TIER_2 : i.PremiumTypes.TIER_0;
      }
    },
    544359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("454836"),
        i = n("310057"),
        a = n("312916"),
        s = n("87727"),
        o = n("259537"),
        u = n("467006"),
        l = {
          async fetchUserTrialOffer() {
            try {
              let { body: e } = await r.default.get({
                url: u.Endpoints.USER_TRIAL_OFFER,
                oldFormErrors: !0,
              });
              null == e &&
                (0, s.isDismissibleContentDismissed)(
                  i.DismissibleContent
                    .NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING
                ) &&
                (0, o.removeDismissedContent)(
                  i.DismissibleContent
                    .NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING
                ),
                a.default.dispatch({
                  type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                  userTrialOffer: e,
                });
            } catch (e) {
              a.default.dispatch({
                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
              });
            }
          },
          async acknowledgeUserTrialOffer(e) {
            if (null == e.expires_at)
              try {
                let { body: t } = await r.default.post({
                  url: u.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id),
                });
                a.default.dispatch({
                  type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                  userTrialOffer: t,
                });
              } catch (e) {
                404 === e.status &&
                  a.default.dispatch({
                    type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null,
                  });
              }
          },
        };
    },
    892084: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BOGOAnnouncementModalExperiment: function () {
            return r;
          },
        });
      let r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2023-06_bogo_announcement_modal",
        label: "BOGO Announcement Modal",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Users will see the BOGO announcement modal",
            config: { enabled: !0 },
          },
        ],
      });
    },
    958101: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2023-07_bogo_marketing_materials_experiment",
        label: "BOGO Marketing Materials",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable BOGO marketing materials",
            config: { enabled: !0 },
          },
        ],
      });
    },
    448087: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BogoPromotionExperiment: function () {
            return r;
          },
          default: function () {
            return a;
          },
          isBogoPromotionExperimentEnabled: function () {
            return i;
          },
        });
      let r = (0, n("516086").createExperiment)({
          kind: "user",
          id: "2023-06_bogo_promotion_gate",
          label: "BOGO Promotion Manager",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable BOGO Promotion Manager",
              config: { enabled: !0 },
            },
          ],
        }),
        i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return r.getCurrentConfig(
            { location: "489551_2" },
            { autoTrackExposure: e }
          );
        };
      var a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.useExperiment(
          { location: "489551_1" },
          { autoTrackExposure: e }
        );
      };
    },
    458565: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2024-02_churn_user_discount_offer_experiment",
        label: "Churn User Discount Offer",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 0,
            label: "users receive no discount offer when churning",
            config: { enabled: !0 },
          },
          {
            id: 1,
            label: "users receive a 1 month discout offer when churning",
            config: { enabled: !0 },
          },
          {
            id: 2,
            label: "users receive a 3 month discount offer when churning",
            config: { enabled: !0 },
          },
        ],
      });
    },
    392874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EnhancedHDStreamingRoadblockVariants: function () {
            return i;
          },
          GradientVariants: function () {
            return s;
          },
          default: function () {
            return o;
          },
        });
      var r,
        i,
        a = n("516086");
      ((r = i || (i = {}))[(r.NONE = 0)] = "NONE"),
        (r[(r.VARIANT_1A = 1)] = "VARIANT_1A"),
        (r[(r.VARIANT_1B = 2)] = "VARIANT_1B"),
        (r[(r.VARIANT_2A = 3)] = "VARIANT_2A"),
        (r[(r.VARIANT_2B = 4)] = "VARIANT_2B");
      let s = [1, 3];
      var o = (0, a.createExperiment)({
        kind: "user",
        id: "2024-01_enhanced_hd_streaming_roadblock",
        label: "Enhanced HD Streaming Roadblock",
        defaultConfig: { enabled: !1, variant: 0 },
        treatments: [
          { id: 1, label: "Variant 1A", config: { enabled: !0, variant: 1 } },
          { id: 2, label: "Variant 1B", config: { enabled: !0, variant: 2 } },
          { id: 3, label: "Variant 2A", config: { enabled: !0, variant: 3 } },
          { id: 4, label: "Variant 2B", config: { enabled: !0, variant: 4 } },
        ],
      });
    },
    986656: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2022-12_premium_targeted_upsells",
        label: "Premium Targeted Upsells",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Use highest expected value to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !0, useLikelihood: !1 },
          },
          {
            id: 2,
            label: "Use highest likelihood to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !1, useLikelihood: !0 },
          },
        ],
      });
    },
    404627: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("661223"),
        i = n("871831"),
        a = n("643847"),
        s = n("488867"),
        o = n("766873"),
        u = n("862949"),
        l = n("878042"),
        c = n("921011"),
        d = n("171168");
      function _(e) {
        let { autoTrackExposure: t, experiment: n, location: _ } = e,
          f = (0, r.useStateFromStores)([i.default], () =>
            i.default.getCurrentUser()
          ),
          E = (0, c.usePremiumTrialOffer)(),
          T = null != E,
          I = null != f && (0, s.isPremium)(f);
        (0, o.useMaybeFetchPremiumLikelihood)(n);
        let {
            enabled: m,
            useExpectedValue: S,
            useLikelihood: C,
          } = n.useExperiment(
            { location: _ ?? "1" },
            { autoTrackExposure: !I && !T && t }
          ),
          { premiumLikelihood: p, fetched: P } = (0,
          r.useStateFromStoresObject)([u.default], () => {
            let e = u.default.getState();
            return {
              fetched: e.fetched,
              premiumLikelihood: e.premiumLikelihood,
            };
          }),
          R = (0, r.useStateFromStores)([a.default], () =>
            a.default.isLoadedForSKUs([
              d.PremiumSubscriptionSKUs.TIER_0,
              d.PremiumSubscriptionSKUs.TIER_2,
            ])
          ),
          O = !I && m && !T && (S ? !P || !R : !P),
          N = d.PremiumTypes.TIER_2;
        if (T) {
          let e = E.subscription_trial;
          e?.sku_id === d.PremiumSubscriptionSKUs.TIER_0
            ? (N = d.PremiumTypes.TIER_0)
            : e?.sku_id === d.PremiumSubscriptionSKUs.TIER_2 &&
              (N = d.PremiumTypes.TIER_2);
        } else if (!I && !O && m) {
          if (S) {
            let { amount: e } = (0, s.getPrice)(
                d.SubscriptionPlans.PREMIUM_MONTH_TIER_0
              ),
              { amount: t } = (0, s.getPrice)(
                d.SubscriptionPlans.PREMIUM_MONTH_TIER_2
              );
            N = (0, l.getHigherExpectedValue)(p, e, t);
          } else C && (N = (0, l.getHighestLikelihood)(p));
        }
        return { isLoading: O, suggestedPremiumType: N };
      }
    },
    459992: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          discountOfferHasTier: function () {
            return d;
          },
          usePremiumDiscountOffer: function () {
            return f;
          },
        });
      var r = n("470079"),
        i = n("661223"),
        a = n("767191"),
        s = n("871831"),
        o = n("537022"),
        u = n("488867"),
        l = n("171168");
      function c(e) {
        return (
          null != e &&
          null != e.expires_at &&
          Date.now() > Date.parse(e.expires_at)
        );
      }
      function d(e, t) {
        return (
          null != e &&
          new Set(
            e.discount?.plan_ids.map(e => l.SubscriptionPlanInfo[e].skuId)
          ).has(t)
        );
      }
      function _(e) {
        let t = (0, i.useStateFromStores)([o.default], () =>
            o.default.getUserDiscountOffer(e)
          ),
          [n, l] = r.useState(c(t)),
          d = (0, i.useStateFromStores)([s.default], () =>
            (0, u.isPremium)(s.default.getCurrentUser())
          );
        return (
          r.useEffect(() => {
            if (null == t || null == t.expires_at) return;
            let e = new a.Timeout(),
              r = () => {
                let i =
                  null != t.expires_at
                    ? Date.parse(t.expires_at) - Date.now()
                    : 0;
                e?.start(i, () => {
                  !n && c(t) ? l(!0) : r();
                });
              };
            return r(), () => e.stop();
          }, [n, t]),
          n || d ? null : t
        );
      }
      function f() {
        let e = _(l.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
          t = _(l.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID);
        return e ?? t;
      }
    },
    391436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PromotionPreviewExperiment: function () {
            return r;
          },
        });
      let r = (0, n("516086").createExperiment)({
        kind: "user",
        id: "2021-06_preview_promotions",
        label: "Promotions Preview",
        defaultConfig: { previewEnabled: !1 },
        treatments: [
          { id: 1, label: "Preview Enabled", config: { previewEnabled: !0 } },
        ],
      });
    },
    776500: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          bogoPromotionFromServer: function () {
            return E;
          },
          claimOutboundPromotion: function () {
            return m;
          },
          fetchClaimedOutboundPromotionCodes: function () {
            return I;
          },
          getOutboundPromotionRedemptionUrl: function () {
            return S;
          },
          getPromotionImageURL: function () {
            return _;
          },
          isOutboundPromotionRedeemableByTrialUsers: function () {
            return P;
          },
          isTrialUserEligibleToSeeOutboundPromotion: function () {
            return R;
          },
          outboundPromotionFromServer: function () {
            return f;
          },
          shouldShowOutboundPromotionNotice: function () {
            return C;
          },
          shouldShowOutboundPromotionOnPlatform: function () {
            return p;
          },
        }),
        n("789020");
      var r = n("454836"),
        i = n("24135"),
        a = n("703229"),
        s = n("416573"),
        o = n("984362"),
        u = n("501769"),
        l = n("7112"),
        c = n("171168"),
        d = n("467006");
      function _(e, t) {
        let n = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
          r = window.GLOBAL_ENV.CDN_HOST,
          a = "?size=256";
        return null != r
          ? `${location.protocol}//${r}/promotions/${e}/${n}${a}`
          : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${a}`;
      }
      function f(e) {
        return {
          id: e.id,
          startDate: e.start_date,
          endDate: e.end_date,
          outboundRedemptionEndDate: e.outbound_redemption_end_date,
          outboundTitle: e.outbound_title,
          outboundRedemptionModalBody: e.outbound_redemption_modal_body,
          outboundRedemptionPageLink: e.outbound_redemption_page_link,
          outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
          outboundTermsAndConditions: e.outbound_terms_and_conditions,
          flags: e.flags,
        };
      }
      function E(e) {
        return { id: e.id, startDate: e.start_date, endDate: e.end_date };
      }
      function T(e) {
        return {
          code: e.code,
          userId: e.user_id,
          claimedAt: e.claimed_at,
          promotion: f(e.promotion),
        };
      }
      async function I() {
        return (
          await r.default.get({
            url: d.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: a.default.locale },
            oldFormErrors: !0,
          })
        ).body.map(T);
      }
      async function m(e) {
        return T(
          (
            await r.default.post({
              url: d.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e),
            })
          ).body
        );
      }
      function S(e, t) {
        return null != t.outboundRedemptionUrlFormat
          ? t.outboundRedemptionUrlFormat.replace(
              "{code}",
              encodeURIComponent(e)
            )
          : t.outboundRedemptionPageLink;
      }
      function C() {
        let e = l.default.lastSeenOutboundPromotionStartDate,
          t = l.default.outboundPromotions,
          n = l.default.consumedInboundPromotionId,
          r = t.filter(e => {
            let { id: t, flags: r } = e;
            return (
              t !== n &&
              !(0, o.hasFlag)(r, c.PromotionFlags.SUPPRESS_NOTIFICATION)
            );
          }),
          i =
            null == e
              ? r
              : r.filter(t => {
                  let { startDate: n } = t;
                  return new Date(n) > new Date(e);
                }),
          a = l.default.lastDismissedOutboundPromotionStartDate,
          u = s.default.getPremiumTypeSubscription(),
          d = u?.trialId != null ? i.filter(e => P(e)) : i;
        return (
          0 !== d.length &&
          (null == a ||
            d.some(e => {
              let { startDate: t } = e;
              return new Date(t) > new Date(a);
            }))
        );
      }
      function p(e) {
        return (
          !(0, u.isIOS)() ||
          !(0, o.hasFlag)(e.flags, c.PromotionFlags.IS_BLOCKED_IOS)
        );
      }
      function P(e) {
        return (0, o.hasFlag)(
          e.flags,
          c.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS
        );
      }
      function R(e, t) {
        return null != t[e.id] || P(e);
      }
    },
    114032: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
          fetchActiveBogoPromotion: function () {
            return T;
          },
          fetchActiveOutboundPromotions: function () {
            return E;
          },
        });
      var r = n("454836"),
        i = n("599187"),
        a = n("312916"),
        s = n("286021"),
        o = n("703229"),
        u = n("259537"),
        l = n("391436"),
        c = n("776500"),
        d = n("7112"),
        _ = n("171168"),
        f = n("467006");
      async function E() {
        if (!d.default.isFetchingActiveOutboundPromotions)
          try {
            a.default.dispatch({ type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH" });
            let e = l.PromotionPreviewExperiment.getCurrentConfig(
                { location: "5731cc_1" },
                { autoTrackExposure: !1 }
              ).previewEnabled
                ? f.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW
                : f.Endpoints.OUTBOUND_PROMOTIONS,
              t = (
                await r.default.get({
                  url: e,
                  query: { locale: o.default.locale },
                  oldFormErrors: !0,
                })
              ).body,
              n = d.default.consumedInboundPromotionId;
            if (!d.default.hasFetchedConsumedInboundPromotionId) {
              let e = (
                await (0, s.fetchUserEntitlementsForApplication)(
                  _.PREMIUM_SUBSCRIPTION_APPLICATION,
                  !1
                )
              ).find(e => null != e.promotion_id && !0 === e.consumed);
              n = e?.promotion_id ?? null;
            }
            a.default.dispatch({
              type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
              activeOutboundPromotions: t.map(e =>
                (0, c.outboundPromotionFromServer)(e)
              ),
              consumedInboundPromotionId: n,
            });
          } catch (e) {
            a.default.dispatch({
              type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL",
            });
          }
      }
      async function T() {
        if (!d.default.isFetchingActiveBogoPromotion)
          try {
            a.default.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
              await r.default.get({
                url: f.Endpoints.BOGO_PROMOTIONS,
                query: { locale: o.default.locale },
              })
            ).body;
            a.default.dispatch({
              type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
              activePromotion: (0, c.bogoPromotionFromServer)(e),
            });
          } catch (e) {
            a.default.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
          }
      }
      var I = {
        fetchActiveOutboundPromotions: E,
        dismissOutboundPromotionNotice: function () {
          a.default.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
          let e = d.default.lastDismissedOutboundPromotionStartDate;
          null != e &&
            u.PreloadedUserSettingsActionCreators.updateAsync(
              "userContent",
              t => {
                t.lastDismissedOutboundPromotionStartDate =
                  i.StringValue.create({ value: e });
              },
              u.UserSettingsDelay.INFREQUENT_USER_ACTION
            );
        },
        markOutboundPromotionsSeen() {
          a.default.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
        },
        fetchActiveBogoPromotion: T,
      };
    },
    508109: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBogoPromotion: function () {
            return I;
          },
          useOutboundPromotions: function () {
            return E;
          },
          useUnseenOutboundPromotions: function () {
            return T;
          },
        });
      var r = n("470079"),
        i = n("661223"),
        a = n("312916"),
        s = n("871831"),
        o = n("488867"),
        u = n("864342"),
        l = n("776500"),
        c = n("114032"),
        d = n("7112"),
        _ = n("171168");
      function f() {
        let e = (0, i.useStateFromStoresArray)(
            [d.default],
            () => d.default.outboundPromotions
          ),
          t = (0, i.useStateFromStores)(
            [d.default],
            () => d.default.consumedInboundPromotionId
          );
        return r.useMemo(
          () =>
            e.filter(e => {
              let { id: n } = e;
              return n !== t;
            }),
          [e, t]
        );
      }
      function E() {
        let e = (0, i.useStateFromStores)(
            [d.default],
            () => d.default.lastFetchedActivePromotions
          ),
          t = f(),
          n = (0, i.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          ),
          E = (0, u.useHasActiveTrial)(),
          [T, I] = r.useState(!1),
          [m, S] = r.useState([]);
        r.useEffect(() => {
          null != e &&
            a.default.wait(() => c.default.markOutboundPromotionsSeen());
        }, [e]);
        let C = r.useCallback(e => {
            S(t =>
              t.some(t => {
                let { promotion: n } = t;
                return n.id === e.promotion.id;
              })
                ? t
                : [...t, e]
            );
          }, []),
          p = (0, o.isPremiumExactly)(n, _.PremiumTypes.TIER_2);
        r.useEffect(() => {
          a.default.wait(() => {
            p && null == e && c.default.fetchActiveOutboundPromotions();
          });
        }, [e, p]),
          r.useEffect(() => {
            a.default.wait(() => {
              (0, l.fetchClaimedOutboundPromotionCodes)()
                .then(e => {
                  S(e), I(!0);
                })
                .catch(() => {
                  S([]), I(!0);
                });
            });
          }, []);
        let P = {};
        for (let { code: e, promotion: t } of m) P[t.id] = e;
        let R = new Set(
            t.map(e => {
              let { id: t } = e;
              return t;
            })
          ),
          O = m.filter(e => {
            let { promotion: t } = e;
            return !R.has(t.id);
          });
        return {
          promotionsLoaded: T && (!p || null != e),
          activeOutboundPromotions: t.filter(
            e =>
              (0, l.shouldShowOutboundPromotionOnPlatform)(e) &&
              (!E || (0, l.isTrialUserEligibleToSeeOutboundPromotion)(e, P))
          ),
          claimedEndedOutboundPromotions: O.filter(e =>
            (0, l.shouldShowOutboundPromotionOnPlatform)(e.promotion)
          ),
          claimedOutboundPromotionCodeMap: P,
          addClaimedOutboundPromotionCode: C,
        };
      }
      function T() {
        let e = (0, i.useStateFromStores)(
            [d.default],
            () => d.default.lastSeenOutboundPromotionStartDate
          ),
          t = (0, u.useHasActiveTrial)(),
          n = f();
        return r
          .useMemo(() => {
            if (null == e)
              return t
                ? n.filter(e =>
                    (0, l.isOutboundPromotionRedeemableByTrialUsers)(e)
                  )
                : n;
            let r = n.filter(t => {
              let { startDate: n } = t;
              return new Date(n) > new Date(e);
            });
            return t
              ? r.filter(e =>
                  (0, l.isOutboundPromotionRedeemableByTrialUsers)(e)
                )
              : r;
          }, [n, e, t])
          .filter(e => (0, l.shouldShowOutboundPromotionOnPlatform)(e));
      }
      function I() {
        return {
          promotion: (0, i.useStateFromStores)(
            [d.default],
            () => d.default.bogoPromotion
          ),
        };
      }
    },
    7112: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n("661223"),
        i = n("312916"),
        a = n("991400");
      function s() {
        return {
          hasFetchedConsumedInboundPromotionId: !1,
          consumedInboundPromotionId: null,
          lastSeenOutboundPromotionStartDate: null,
          bogoPromotion: null,
        };
      }
      let o = s(),
        u = !1,
        l = null,
        c = !1,
        d = null,
        _ = [],
        f = null;
      function E() {
        let e = null;
        for (let t of _)
          (null == e || new Date(t.startDate) > new Date(e)) &&
            (e = t.startDate);
        return e;
      }
      function T() {
        f =
          a.default.settings.userContent
            ?.lastDismissedOutboundPromotionStartDate?.value ?? null;
      }
      class I extends r.default.PersistedStore {
        static #e = (this.displayName = "PromotionsStore");
        static #t = (this.persistKey = "PromotionsPersistedStore");
        initialize(e) {
          null != e && (o = e),
            this.waitFor(a.default),
            this.syncWith([a.default], T);
        }
        get outboundPromotions() {
          return _;
        }
        get lastSeenOutboundPromotionStartDate() {
          return o.lastSeenOutboundPromotionStartDate;
        }
        get lastDismissedOutboundPromotionStartDate() {
          return f;
        }
        get lastFetchedActivePromotions() {
          return d;
        }
        get isFetchingActiveOutboundPromotions() {
          return c;
        }
        get hasFetchedConsumedInboundPromotionId() {
          return o.hasFetchedConsumedInboundPromotionId;
        }
        get consumedInboundPromotionId() {
          return o.consumedInboundPromotionId;
        }
        get bogoPromotion() {
          return o.bogoPromotion;
        }
        get isFetchingActiveBogoPromotion() {
          return u;
        }
        get lastFetchedActiveBogoPromotion() {
          return l;
        }
        getState() {
          return o;
        }
      }
      var m = new I(i.default, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function (e) {
          let { activeOutboundPromotions: t, consumedInboundPromotionId: n } =
            e;
          (_ = t),
            (d = Date.now()),
            (c = !1),
            !o.hasFetchedConsumedInboundPromotionId &&
              ((o.hasFetchedConsumedInboundPromotionId = !0),
              (o.consumedInboundPromotionId = n));
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function () {
          c = !0;
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function () {
          (_ = []), (c = !1);
        },
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
          let { activePromotion: t } = e;
          (o.bogoPromotion = t), (l = Date.now()), (u = !1);
        },
        ACTIVE_BOGO_PROMOTION_FETCH: function () {
          u = !0;
        },
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
          (o.bogoPromotion = null), (u = !1);
        },
        OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
          if (0 === _.length) return !1;
          let e = E();
          null != e && (f = e);
        },
        OUTBOUND_PROMOTIONS_SEEN: function () {
          if (0 === _.length) return !1;
          let e = E();
          null != e && ((f = e), (o.lastSeenOutboundPromotionStartDate = e));
        },
        LOGOUT: function () {
          (o = s()), (c = !1), (d = null), (u = !1), (l = null), (_ = []);
        },
      });
    },
    908783: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChurnDiscountedPrice: function () {
            return _;
          },
          useDiscountedPrice: function () {
            return d;
          },
        });
      var r = n("243770"),
        i = n("354627"),
        a = n("675796"),
        s = n("488867"),
        o = n("977634"),
        u = n("5082"),
        l = n("459992"),
        c = n("171168");
      let d = e => {
          let { paymentSourceId: t } = (0, a.default)({
              isGift: !1,
              activeSubscription: null,
            }),
            n = c.SubscriptionPlanInfo[e].skuId,
            { priceOptions: d } = (0, i.default)({
              activeSubscription: null,
              skuIDs: [n],
              paymentSourceId: t,
              isGift: !1,
            }),
            _ = (0, l.usePremiumDiscountOffer)(),
            [f, E] = (0, u.useSubscriptionInvoicePreview)({
              items: [{ planId: e, quantity: 1 }],
              renewal: !0,
              preventFetch: !(null != _),
              paymentSourceId: t,
              currency: d.currency,
            }),
            T = f?.invoiceItems
              ?.find(t => t.subscriptionPlanId === e)
              ?.discounts?.find(
                e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
              )?.amount,
            I = (0, s.getPrice)(e, !1, !1, d);
          return (0, o.formatPrice)(I.amount - (T ?? 0), I.currency);
        },
        _ = (e, t, n) => {
          let { paymentSourceId: l } = (0, a.default)({
              isGift: !1,
              activeSubscription: null,
            }),
            d = c.SubscriptionPlanInfo[t].skuId,
            { priceOptions: _ } = (0, i.default)({
              activeSubscription: null,
              skuIDs: [d],
              paymentSourceId: l,
              isGift: !1,
            }),
            [f, E] = (0, u.useSubscriptionInvoicePreview)({
              subscriptionId: e.id,
              items: [{ planId: t, quantity: 1 }],
              renewal: !0,
              preventFetch: !(null != n),
              paymentSourceId: l,
              currency: _.currency,
              userDiscountOfferId: n?.id,
            }),
            T = f?.invoiceItems
              ?.find(e => e.subscriptionPlanId === t)
              ?.discounts?.find(
                e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
              )?.amount,
            I = (0, s.getPrice)(t, !1, !1, _);
          return (0, o.formatPrice)(I.amount - (T ?? 0), I.currency);
        };
    },
    893302: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getBOGOPillCopy: function () {
            return v;
          },
          isEligibleForBOGOAnnouncementModal: function () {
            return D;
          },
          maybeFetchActiveBogoPromotion: function () {
            return M;
          },
          useIsEligibleForBogoPromotion: function () {
            return U;
          },
        });
      var r = n("913527"),
        i = n.n(r),
        a = n("203959"),
        s = n("310057"),
        o = n("242677"),
        u = n("62889"),
        l = n("471154"),
        c = n("87727"),
        d = n("703229"),
        _ = n("871831"),
        f = n("416573"),
        E = n("537022"),
        T = n("488867"),
        I = n("544359"),
        m = n("892084"),
        S = n("958101"),
        C = n("448087"),
        p = n("921011"),
        P = n("114032"),
        R = n("508109"),
        O = n("7112"),
        N = n("171168"),
        L = n("467006"),
        g = n("30175");
      function A(e) {
        let {
            experimentEnabled: t,
            premiumSubscription: n,
            mostRecentSubscription: r,
          } = e,
          a = !1,
          s = !1;
        if (null != r && r.status === L.SubscriptionStatusTypes.ENDED) {
          let e =
              r.metadata?.ended_at != null ? i()(r.metadata.ended_at) : null,
            t = T.getPremiumPlanItem(r)?.planId,
            n =
              null != t &&
              T.default.getPremiumType(t) === N.PremiumTypes.TIER_2;
          s = null != e && n && e.add(10, "days").isAfter(i()());
        }
        if (null != n) {
          let e = T.getPremiumPlanItem(n)?.planId,
            t =
              null != e &&
              T.default.getPremiumType(e) === N.PremiumTypes.TIER_2,
            r = _.default.getCurrentUser(),
            i =
              n?.trialId != null &&
              T.default.isPremiumExactly(r, N.PremiumTypes.TIER_0);
          a = t || i;
        }
        return !t || a || s;
      }
      function U() {
        let { paymentsBlocked: e } = l.default.useExperiment(
            { location: "153d31_1" },
            { autoTrackExposure: !1 }
          ),
          { promotion: t } = (0, R.useBogoPromotion)(),
          { enabled: n } = (0, C.default)(),
          { mostRecentSubscription: r, premiumSubscription: i } = (0,
          a.useStateFromStoresObject)([f.default], () => ({
            mostRecentSubscription:
              f.default.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: f.default.getPremiumTypeSubscription(),
          })),
          s = (0, p.usePremiumTrialOffer)(),
          o = new Date(t?.endDate ?? 0).valueOf();
        (0, u.default)(o, 1e3, void 0, o + 2e3 < Date.now());
        let c =
            !A({
              experimentEnabled: n,
              premiumSubscription: i,
              mostRecentSubscription: r,
            }) &&
            null == s &&
            null != t &&
            !e,
          d = Date.now(),
          { enabled: _ } = S.default.useExperiment(
            { location: "153d31_2" },
            { autoTrackExposure: c, disable: !c }
          );
        return !(d > o) && _;
      }
      async function h() {
        let e = _.default.getCurrentUser(),
          t = !e?.isClaimed(),
          { paymentsBlocked: n } = l.default.getCurrentConfig(
            { location: "153d31_3" },
            { autoTrackExposure: !1 }
          ),
          { enabled: r } = (0, C.isBogoPromotionExperimentEnabled)(),
          { enabled: i } = S.default.getCurrentConfig(
            { location: "153d31_4" },
            { autoTrackExposure: !1 }
          ),
          { enabled: a } = m.BOGOAnnouncementModalExperiment.getCurrentConfig(
            { location: "153d31_5" },
            { autoTrackExposure: !1 }
          );
        if (t || n || !r || (!a && !i)) return !1;
        if (
          (E.default.shouldFetchOffer() &&
            (await I.default.fetchUserTrialOffer()),
          E.default.hasFetchedOffer() && E.default.hasAnyUnexpiredOffer())
        )
          return !1;
        !f.default.hasFetchedMostRecentPremiumTypeSubscription() &&
          _.default
            .getCurrentUser()
            ?.hasHadSKU(N.PremiumSubscriptionSKUs.TIER_2) &&
          (await (0, o.fetchMostRecentSubscription)()),
          !f.default.hasFetchedSubscriptions() &&
            (await (0, o.fetchSubscriptions)());
        let s = f.default.getMostRecentPremiumTypeSubscription();
        return !A({
          experimentEnabled: r,
          premiumSubscription: f.default.getPremiumTypeSubscription(),
          mostRecentSubscription: s,
        });
      }
      async function M() {
        if (!(await h())) return;
        let e = O.default.bogoPromotion;
        if (!(null != e && new Date(e.endDate).valueOf() >= Date.now()))
          await (0, P.fetchActiveBogoPromotion)();
      }
      async function D() {
        let e = O.default.bogoPromotion,
          t =
            null != e &&
            new Date(e.endDate).valueOf() >= Date.now() &&
            new Date(e.startDate).valueOf() <= Date.now(),
          n = (0, c.isDismissibleContentDismissed)(
            s.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL
          ),
          r = await h(),
          { enabled: i } = C.BogoPromotionExperiment.getCurrentConfig(
            { location: "153d31_6" },
            { autoTrackExposure: !1 }
          ),
          { enabled: a } = m.BOGOAnnouncementModalExperiment.getCurrentConfig(
            { location: "153d31_7" },
            { autoTrackExposure: t && i && !n && r }
          );
        return t && a && i && !n && r;
      }
      function v() {
        switch (d.default.locale) {
          case "de":
          case "es-ES":
          case "fr":
          case "hr":
          case "it":
          case "lt":
          case "nl":
          case "pl":
          case "pt-BR":
          case "ro":
          case "fi":
          case "sv-SE":
          case "tr":
          case "cs":
          case "el":
          case "bg":
          case "ru":
          case "uk":
          case "ja":
          case "ko":
            return g.default.Messages.NITRO_BADGE_TEXT;
          default:
            return g.default.Messages.BOGO_PILL;
        }
      }
    },
    749911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumTrialGradientBadge: function () {
            return G;
          },
          default: function () {
            return k;
          },
        });
      var r = n("735250"),
        i = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("512722"),
        u = n.n(o),
        l = n("913527"),
        c = n.n(l),
        d = n("661223"),
        _ = n("910838"),
        f = n("24135"),
        E = n("974328"),
        T = n("960099"),
        I = n("329420"),
        m = n("174942"),
        S = n("521588"),
        C = n("108679"),
        p = n("860767"),
        P = n("747690"),
        R = n("428037"),
        O = n("488867"),
        N = n("281925"),
        L = n("675609"),
        g = n("921011"),
        A = n("650742"),
        U = n("119014"),
        h = n("171168"),
        M = n("467006"),
        D = n("30175"),
        v = n("228743"),
        b = n("867250");
      function x(e) {
        if (null == e) return null;
        let t = c()(e),
          n = t.diff(c()(), "h");
        if (n > 24) {
          let e = t.diff(c()(), "d");
          return D.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
            numDays: e,
          });
        }
        if (n > 1)
          return D.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
            numHours: n,
          });
        let r = t.diff(c()(), "minutes");
        return D.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
          numMinutes: r,
        });
      }
      function y(e) {
        let {
            className: t,
            children: n,
            withBottomMargin: i,
            discountOffer: a,
            trialOffer: o,
          } = e,
          u = o?.expires_at ?? a?.expires_at,
          l = o?.subscription_trial,
          c =
            e.subscriptionTier ?? l?.sku_id ?? h.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsxs)("div", {
          className: s()(t, v.gradientUpsellWrapper, {
            [v.gradientUpsellWrapperTier0]:
              c === h.PremiumSubscriptionSKUs.TIER_0,
            [v.gradientUpsellWrapperTier2]:
              c === h.PremiumSubscriptionSKUs.TIER_2,
            [v.gradientUpsellWrapperWithBottomMargin]: i,
          }),
          children: [
            (0, r.jsxs)("div", {
              className: v.logo,
              children: [
                (0, r.jsx)(R.default, { className: v.logoIcon }),
                c === h.PremiumSubscriptionSKUs.TIER_0 &&
                  (0, r.jsx)(P.default, { className: v.logoWordmark }),
                c === h.PremiumSubscriptionSKUs.TIER_2 &&
                  (0, r.jsx)(p.default, { className: v.logoWordmark }),
              ],
            }),
            (0, r.jsx)(E.Text, {
              variant: "text-md/medium",
              className: v.copy,
              color: "none",
              children: n,
            }),
            (0, r.jsx)(U.PremiumPillWithSparkles, {
              text:
                null != a
                  ? D.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format(
                      { percent: a.discount.amount }
                    )
                  : D.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
              colorOptions:
                c === h.PremiumSubscriptionSKUs.TIER_0
                  ? U.PremiumPillAndSparklesColorOptions
                      .PREMIUM_TIER_0_WHITE_FILL
                  : U.PremiumPillAndSparklesColorOptions
                      .PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(E.Text, {
              variant: "eyebrow",
              className: v.countdownText,
              children: x(u),
            }),
          ],
        });
      }
      function F(e) {
        let {
            className: t,
            onClose: n,
            subscriptionTier: a,
            analyticsLocationObject: s,
            trialOffer: o,
            discountOffer: u,
          } = e,
          [l, c] = i.useState(!1),
          d =
            null != u
              ? D.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: u.discount.amount,
                })
              : (0, O.formatTrialCtaIntervalDuration)({
                  intervalType: o?.subscription_trial?.interval,
                  intervalCount: o?.subscription_trial?.interval_count,
                });
        return (0, r.jsx)(A.default, {
          className: t,
          subscriptionTier: a,
          trialId: o?.trial_id,
          submitting: l,
          premiumModalAnalyticsLocation: s,
          size: E.Button.Sizes.MEDIUM,
          color: E.Button.Colors.GREEN,
          onClick: () => {
            c(!0);
          },
          onSubscribeModalClose: e => {
            c(!1), e && n?.();
          },
          buttonText: d,
        });
      }
      function G(e) {
        let t = g.usePremiumTrialOffer()?.subscription_trial,
          n = t?.sku_id ?? h.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsx)(E.Text, {
          variant: "text-xs/bold",
          className: s()(v.trialBadge, e.className, {
            [v.trialBadgeGradientTier0]: n === h.PremiumSubscriptionSKUs.TIER_0,
            [v.trialBadgeGradientTier2]: n === h.PremiumSubscriptionSKUs.TIER_2,
          }),
          color: "none",
          children: (0, O.formatTrialOfferIntervalDuration)({
            intervalType: t?.interval,
            intervalCount: t?.interval_count,
          }),
        });
      }
      function j(e) {
        let {
          subscriptionTier: t,
          onClose: n,
          analyticsLocationObject: i,
          trialOffer: a,
          discountOffer: s,
        } = e;
        return (0, r.jsxs)("div", {
          className: v.footer,
          children: [
            (0, r.jsx)(E.Button, {
              onClick: n,
              size: E.Button.Sizes.SMALL,
              look: E.ButtonLooks.BLANK,
              className: v.cancelButton,
              children: D.default.Messages.CLOSE,
            }),
            (0, r.jsx)(F, {
              className: v.subscribeButton,
              subscriptionTier: t,
              analyticsLocationObject: i,
              onClose: n,
              discountOffer: s,
              trialOffer: a,
            }),
          ],
        });
      }
      function B(e) {
        let { onClose: t, analyticsLocationObject: n } = e,
          i = (0, g.usePremiumTrialOffer)();
        return (0, r.jsxs)("div", {
          className: v.tryOutUpsellContainer,
          children: [
            (0, r.jsx)(U.PremiumPillWithSparkles, {
              className: v.topRimPill,
              text: D.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
              colorOptions:
                U.PremiumPillAndSparklesColorOptions
                  .PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(E.Heading, {
              variant: "heading-md/semibold",
              color: "text-normal",
              children:
                D.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format(
                  { onClick: L.navigateToPremiumMarketingPage }
                ),
            }),
            (0, r.jsx)(F, {
              trialOffer: i,
              className: v.subscribeButtonWide,
              subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocationObject: n,
              onClose: t,
            }),
            (0, r.jsx)(E.Text, {
              variant: "eyebrow",
              className: v.countdownTextInSetting,
              children: x(i?.expires_at),
            }),
          ],
        });
      }
      function w(e) {
        let {
          headingText: t,
          context: n,
          children: i,
          trialOffer: a,
          discountOffer: s,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(E.Heading, {
              className: v.header,
              variant: "heading-xl/semibold",
              children: t,
            }),
            null != n &&
              (0, r.jsx)(E.Text, {
                className: v.context,
                variant: "text-md/normal",
                children: n,
              }),
            (0, r.jsx)(y, { trialOffer: a, discountOffer: s, children: i }),
          ],
        });
      }
      function k(e) {
        let {
            headingText: t,
            context: i,
            children: a,
            onClose: o,
            type: l,
            subscriptionTier: c,
            analyticsLocationObject: p,
            trialOffer: P,
            discountOffer: R,
          } = e,
          L = (0, d.useStateFromStores)(
            [I.default],
            () => I.default.useReducedMotion
          ),
          g = (0, T.default)();
        switch (l) {
          case h.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(E.Clickable, {
                  className: v.upsellClose,
                  onClick: o,
                  children: (0, r.jsx)(C.default, {}),
                }),
                (0, r.jsxs)("div", {
                  className: v.contentContainer,
                  children: [
                    (0, r.jsx)("img", {
                      className: v.upsellImage,
                      src: b,
                      alt: D.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT,
                    }),
                    (0, r.jsx)(E.Heading, {
                      variant: "heading-xl/bold",
                      color: "header-primary",
                      children:
                        D.default.Messages
                          .STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE,
                    }),
                    (0, r.jsx)(y, {
                      trialOffer: P,
                      discountOffer: R,
                      children:
                        D.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format(
                          {
                            planName: (0, O.getDisplayNameFromSku)(c),
                            onClick: () =>
                              (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                          }
                        ),
                    }),
                  ],
                }),
                (0, r.jsx)(j, {
                  subscriptionTier: c,
                  onClose: o,
                  analyticsLocationObject: {
                    section: M.AnalyticsSections.EXPRESSION_PICKER,
                    object: M.AnalyticsObjects.BUTTON_CTA,
                  },
                  trialOffer: P,
                  discountOffer: R,
                }),
              ],
            });
          case h.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
            return (
              u()(null != a, "You must specify children for this upsell type"),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: v.contentContainer,
                    children: [
                      (0, r.jsx)("img", {
                        className: v.upsellImage,
                        src: b,
                        alt: D.default.Messages
                          .STICKER_PICKER_PREMIUM_UPSELL_ALT,
                      }),
                      (0, r.jsx)(E.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children:
                          D.default.Messages
                            .STICKER_PICKER_PREMIUM_UPSELL_TITLE,
                      }),
                      (0, r.jsx)(y, {
                        trialOffer: P,
                        discountOffer: R,
                        children:
                          D.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format(
                            {
                              planName: (0, O.getDisplayNameFromSku)(c),
                              onClick: () =>
                                (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                            }
                          ),
                      }),
                    ],
                  }),
                  (0, r.jsx)(j, {
                    subscriptionTier: c,
                    onClose: o,
                    analyticsLocationObject: {
                      section: M.AnalyticsSections.EXPRESSION_PICKER,
                      object: M.AnalyticsObjects.BUTTON_CTA,
                    },
                    trialOffer: P,
                    discountOffer: R,
                  }),
                ],
              })
            );
          case h.PremiumUpsellTypes
            .AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            u()(null != a, "You must specify children for this upsell type");
            let A = (0, f.isThemeLight)(g) ? n("537381") : n("341048");
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: v.contentContainer,
                  children: [
                    (0, r.jsx)("img", {
                      alt: "",
                      className: v.upsellImage,
                      src: A,
                    }),
                    (0, r.jsx)(E.Heading, {
                      variant: "heading-xl/bold",
                      color: "header-primary",
                      children:
                        D.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL,
                    }),
                    (0, r.jsx)(y, {
                      trialOffer: P,
                      discountOffer: R,
                      children:
                        D.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format(
                          {
                            planName: (0, O.getDisplayNameFromSku)(c),
                            onClick: () =>
                              (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                          }
                        ),
                    }),
                  ],
                }),
                (0, r.jsx)(j, {
                  subscriptionTier: c,
                  onClose: o,
                  analyticsLocationObject: {
                    section: M.AnalyticsSections.EMOJI_PICKER_POPOUT,
                    object: M.AnalyticsObjects.BUTTON_CTA,
                  },
                  trialOffer: P,
                  discountOffer: R,
                }),
              ],
            });
          case h.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
          case h.PremiumUpsellTypes.BURST_REACTION_UPSELL:
          case h.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
          case h.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
            let U;
            switch (l) {
              case h.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                U =
                  D.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format(
                    {
                      planName: (0, O.getDisplayNameFromSku)(c),
                      premiumMaxSize:
                        c === h.PremiumSubscriptionSKUs.TIER_0
                          ? D.default.Messages
                              .FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                          : D.default.Messages
                              .FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                      onClick: () => {
                        (0, S.transitionTo)(M.Routes.APPLICATION_STORE), o?.();
                      },
                    }
                  );
                break;
              case h.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                U =
                  D.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format(
                    {
                      planName: (0, O.getDisplayNameFromSku)(c),
                      onClick: () => {
                        (0, S.transitionTo)(M.Routes.APPLICATION_STORE), o?.();
                      },
                    }
                  );
                break;
              case h.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                U = D.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format(
                  {
                    onClick: () => {
                      (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                        o?.(),
                        (0, _.closeAllModals)();
                    },
                  }
                );
                break;
              case h.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                U =
                  D.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format(
                    {
                      premiumMaxMessageLength: M.MAX_MESSAGE_LENGTH_PREMIUM,
                      onClick: () => {
                        (0, S.transitionTo)(M.Routes.APPLICATION_STORE), o?.();
                      },
                    }
                  );
            }
            return (
              u()(null != U, "There must be some upsell context"),
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                  className: v.contentContainer,
                  children: [
                    (0, r.jsx)(E.Heading, {
                      variant: "heading-xl/bold",
                      color: "header-primary",
                      children: t,
                    }),
                    (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: i,
                    }),
                    (0, r.jsx)(y, {
                      trialOffer: P,
                      discountOffer: R,
                      children: U,
                    }),
                  ],
                }),
              })
            );
          case h.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
              className: v.contentContainer,
              children: [
                (0, r.jsx)(E.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: t,
                }),
                (0, r.jsx)(E.Text, { variant: "text-md/normal", children: i }),
                (0, r.jsx)(y, {
                  trialOffer: P,
                  discountOffer: R,
                  children:
                    D.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format(
                      {
                        planName: (0, O.getDisplayNameFromSku)(c),
                        onClick: () =>
                          (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                      }
                    ),
                }),
                (0, r.jsx)(F, {
                  className: v.upsellButton,
                  subscriptionTier: c,
                  analyticsLocationObject: p,
                  onClose: o,
                  trialOffer: P,
                  discountOffer: R,
                }),
              ],
            });
          case h.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
              u()(null != a, "You must specify children for this upsell type"),
              (0, r.jsx)(y, {
                trialOffer: P,
                discountOffer: R,
                children: D.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format(
                  {
                    onClick: () => {
                      (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                        (0, m.closeEditor)();
                    },
                  }
                ),
              })
            );
          case h.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)("div", {
              className: s()(v.messageLengthUpsellContainer, {
                [v.messageLengthUpsellAppearAnimation]: !L,
              }),
              children: [
                (0, r.jsx)(E.Text, {
                  variant: "text-lg/bold",
                  color: "status-danger",
                  children: i,
                }),
                (0, r.jsx)(E.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: v.messageLengthUpsellHeader,
                  children:
                    D.default.Messages
                      .PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT,
                }),
                (0, r.jsx)("div", { className: v.divider }),
                (0, r.jsx)(y, {
                  trialOffer: P,
                  discountOffer: R,
                  className: v.messageLengthBrandedContainer,
                  subscriptionTier: c,
                  children:
                    D.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format(
                      {
                        premiumMaxMessageLength: M.MAX_MESSAGE_LENGTH_PREMIUM,
                        onClick: () => {
                          (0, S.transitionTo)(M.Routes.APPLICATION_STORE),
                            o?.();
                        },
                      }
                    ),
                }),
                (0, r.jsx)(F, {
                  subscriptionTier: c,
                  analyticsLocationObject: p,
                  onClose: o,
                  trialOffer: P,
                  discountOffer: R,
                }),
              ],
            });
          case h.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
          case h.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(B, {});
          case h.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
          case h.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
          case h.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
          case h.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
          case h.PremiumUpsellTypes
            .VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
          case h.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
          case h.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
            return (0, r.jsx)(w, {
              trialOffer: P,
              discountOffer: R,
              headingText: t,
              context: i,
              children: a,
            });
          default:
            return (
              N.default.captureMessage(
                `Possible mishandling of a PremiumUpsellType: ${l}`
              ),
              (0, r.jsx)(w, {
                headingText: t,
                context: i,
                children: a,
                trialOffer: P,
                discountOffer: R,
              })
            );
        }
      }
    },
    559063: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("600186"),
        a = n("24135"),
        s = n("960099"),
        o = n("881343"),
        u = n("171168"),
        l = n("885519"),
        c = e => {
          let {
              isStacked: t,
              ctaButton: n,
              isGift: c,
              trialOfferTier: d,
              discountOffer: _,
            } = e,
            f = !c && (d === u.PremiumSubscriptionSKUs.TIER_2 || null != _),
            E = (0, s.default)(),
            T =
              (0, a.isThemeLight)(E) && t ? void 0 : i.default.colors.WHITE.css;
          return t
            ? c || (d !== u.PremiumSubscriptionSKUs.TIER_2 && null == _)
              ? (0, r.jsx)(r.Fragment, { children: n })
              : (0, r.jsxs)("div", {
                  className: l.sparklesAndButton,
                  children: [
                    (0, r.jsx)(o.SparkleGroupLeft, {
                      color: T,
                      wrapperStyle: l.leftSparkle,
                    }),
                    (0, r.jsx)("div", {
                      className: l.ctaFullWidth,
                      children: n,
                    }),
                    (0, r.jsx)(o.SparkleGroupRight, {
                      color: T,
                      wrapperStyle: l.rightSparkle,
                    }),
                  ],
                })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  n,
                  f &&
                    (0, r.jsx)(o.ButtonSparkleGroup, {
                      tier: u.PremiumTypes.TIER_2,
                    }),
                ],
              });
        };
    },
    119014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPillAndSparklesColorOptions: function () {
            return o;
          },
          PremiumPillWithSparkles: function () {
            return ea;
          },
          PremiumTierCardsVariant: function () {
            return c;
          },
          Tier0Card: function () {
            return ed;
          },
          Tier2Card: function () {
            return ef;
          },
          Tier2FeatureItems: function () {
            return e_;
          },
          Tier2FeatureSet: function () {
            return l;
          },
          default: function () {
            return eE;
          },
        });
      var r,
        i,
        a,
        s,
        o,
        u,
        l,
        c,
        d = n("735250");
      n("470079");
      var _ = n("803997"),
        f = n.n(_),
        E = n("913527"),
        T = n.n(E),
        I = n("661223"),
        m = n("600186"),
        S = n("24135"),
        C = n("974328"),
        p = n("960099"),
        P = n("329420"),
        R = n("495157"),
        O = n("986821"),
        N = n("431986"),
        L = n("703229"),
        g = n("871831"),
        A = n("416573"),
        U = n("446426"),
        h = n("596739"),
        M = n("150060"),
        D = n("815607"),
        v = n("7304"),
        b = n("860767"),
        x = n("747690"),
        y = n("428037"),
        F = n("433887"),
        G = n("33848"),
        j = n("262113"),
        B = n("934439"),
        w = n("488867"),
        k = n("718408"),
        H = n("468385"),
        V = n("389280"),
        K = n("459992"),
        Y = n("921011"),
        W = n("908783"),
        z = n("893302"),
        Z = n("559063"),
        $ = n("579093"),
        X = n("881343"),
        q = n("85359"),
        J = n("171168"),
        Q = n("406639"),
        ee = n("30175"),
        et = n("46049"),
        en = n("425456"),
        er = n("945182");
      function ei(e) {
        let { text: t, className: n, colorOptions: r = 2 } = e;
        return (0, d.jsx)("div", {
          className: f()(n, et.freeTrialPill, {
            [et.freeTrialPillTier0GradientFill]: 1 === r,
            [et.freeTrialPillTier2GradientFill]: 3 === r,
            [et.freeTrialPillTier2OldGradientFill]: 4 === r,
            [et.lightBackgroundPill]: 5 === r,
          }),
          children: (0, d.jsx)(C.Text, {
            variant: "text-xs/bold",
            className: f()(et.freeTrialPillText, {
              [et.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
              [et.freeTrialPillTextTier0]: 0 === r,
              [et.freeTrialPillTextTier2]: 2 === r,
            }),
            children: t,
          }),
        });
      }
      function ea(e) {
        let t,
          {
            text: n,
            className: r,
            colorOptions: i = 2,
            isPillOnBorder: a = !0,
          } = e;
        switch (i) {
          case 1:
            t =
              m.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS
                .css;
            break;
          case 3:
            t = `url(#${X.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID})`;
            break;
          case 4:
          case 5:
            t = `url(#${X.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID})`;
            break;
          default:
            t = "white";
        }
        return a
          ? (0, d.jsxs)("div", {
              className: f()(r, et.freeTrialPillWithSparkles),
              children: [
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar1,
                  color: t,
                }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar2,
                  color: t,
                }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar3,
                  color: t,
                }),
                (0, d.jsx)(ei, { text: n, colorOptions: i }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar4,
                  color: t,
                }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar5,
                  color: t,
                }),
              ],
            })
          : (0, d.jsxs)("div", {
              className: f()(r, et.freeTrialPillWithSparkles),
              children: [
                (0, d.jsx)(ei, { text: n, colorOptions: i }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar1,
                  style: { marginLeft: 4, marginBottom: -6 },
                  color: t,
                }),
                (0, d.jsx)(X.SparkleStar, {
                  foreground: et.sparkleStar2,
                  color: t,
                }),
              ],
            });
      }
      function es(e) {
        let { width: t = 83, height: n = 82, ...r } = e;
        return (0, d.jsxs)("svg", {
          ...(0, j.default)({ ...r }),
          width: t,
          height: n,
          viewBox: "0 0 83 82",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, d.jsx)("g", {
              clipPath: "url(#clip0_1691_113820)",
              children: (0, d.jsx)("path", {
                d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                fill: "currentColor",
              }),
            }),
            (0, d.jsx)("path", {
              d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
              fill: "#5865F2",
            }),
            (0, d.jsx)("path", {
              d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
              fill: "#5865F2",
            }),
            (0, d.jsx)("path", {
              d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
              fill: "#5865F2",
            }),
            (0, d.jsx)("defs", {
              children: (0, d.jsx)("clipPath", {
                id: "clip0_1691_113820",
                children: (0, d.jsx)("rect", {
                  width: "70.3636",
                  height: "70.3636",
                  fill: "white",
                  transform: "translate(10.915 0.5) rotate(8)",
                }),
              }),
            }),
          ],
        });
      }
      function eo(e) {
        let { Icon: t, text: n, isNew: r = !1 } = e;
        return (0, d.jsxs)("div", {
          className: et.item,
          children: [
            (0, d.jsx)(t, { className: et.icon }),
            (0, d.jsx)(C.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: n,
            }),
            r
              ? (0, d.jsx)(N.default, {
                  className: et.newTagItem,
                  forceUseColorForSparkles: !0,
                  shouldInheritBackgroundColor: !0,
                  shouldInheritTextColor: !0,
                })
              : null,
          ],
        });
      }
      function eu(e) {
        let { defaultPriceString: t, subscriptionPlan: n } = e,
          r = (0, W.useDiscountedPrice)(n);
        return (0, d.jsx)(d.Fragment, {
          children:
            ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format(
              { discountedPrice: r, regularPrice: t }
            ),
        });
      }
      function el(e) {
        let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: r,
            offerType: i,
            showYearlyPrice: a,
            isStacked: s,
            isFullScreen: o,
          } = e,
          u = (0, I.useStateFromStores)([A.default], () =>
            A.default.getPremiumTypeSubscription()
          ),
          l = (0, I.useStateFromStores)([g.default], () =>
            g.default.getCurrentUser()
          ),
          c = (0, V.useHasDiscountApplied)(),
          _ = (0, V.useActiveDiscountDuration)(),
          E =
            n === J.PremiumTypes.TIER_0
              ? J.PremiumSubscriptionSKUs.TIER_0
              : J.PremiumSubscriptionSKUs.TIER_2,
          m =
            u?.trialId != null
              ? l?.premiumType
              : c
                ? J.PremiumTypes.TIER_2
                : null,
          S = (0, Y.usePremiumTrialOffer)(),
          p = S?.subscription_trial;
        if (
          !t &&
          null != m &&
          n === m &&
          null != u &&
          null != u.planIdFromItems &&
          !s
        ) {
          let e =
              null != u.trialEndsAt ? T()(u?.trialEndsAt).diff(T()(), "d") : 0,
            t = J.SubscriptionPlanInfo[u.planIdFromItems],
            n = w.default.formatPriceString(
              w.default.getDefaultPrice(t.id),
              t.interval
            );
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(C.Heading, {
              variant: "heading-md/normal",
              color: "always-white",
              className: et.trialHeader,
              children:
                0 === i
                  ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format(
                      { remainingTime: e, price: n }
                    )
                  : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format(
                      {
                        percent: 30,
                        regularPrice: n,
                        numMonths: _ ?? J.DISCOUNT_DURATION_FALLBACK,
                      }
                    ),
            }),
          });
        }
        if (!t && r && !s) {
          let e = w.default.formatPriceString(
            w.default.getDefaultPrice(
              n === J.PremiumTypes.TIER_0
                ? J.SubscriptionPlans.PREMIUM_MONTH_TIER_0
                : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2
            ),
            J.SubscriptionIntervalTypes.MONTH
          );
          return (0, d.jsx)(C.Heading, {
            variant: "heading-md/normal",
            color: "always-white",
            className: et.trialHeader,
            children:
              0 === i
                ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format(
                    {
                      planName: (0, w.getTierDisplayName)(
                        J.PREMIUM_SKU_TO_MONTHLY_PLAN[
                          p?.sku_id ?? J.PremiumSubscriptionSKUs.NONE
                        ] ?? J.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                      ),
                      duration: (0, w.formatIntervalDuration)({
                        intervalType:
                          p?.interval ?? J.SubscriptionIntervalTypes.DAY,
                        intervalCount: p?.interval_count ?? 30,
                        capitalize: !1,
                      }),
                      price: e,
                    }
                  )
                : (0, d.jsx)(eu, {
                    defaultPriceString: e,
                    subscriptionPlan: J.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                  }),
          });
        }
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)($.default, {
              subscriptionTier: E,
              isGift: t,
              className: f()(et.price, {
                [et.priceStacked]: s && o,
                [et.priceStackedSmallScreen]: s && !o,
              }),
              variant: s ? "heading-lg/extrabold" : void 0,
            }),
            a &&
              (0, d.jsx)($.default, {
                subscriptionTier: E,
                interval: J.SubscriptionIntervalTypes.YEAR,
                isGift: t,
                className: et.price,
              }),
          ],
        });
      }
      function ec() {
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(eo, {
              Icon: G.default,
              text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(
                  J.PremiumTypes.TIER_0,
                  { useSpace: !1 }
                ),
              }),
            }),
            (0, d.jsx)(eo, {
              Icon: D.default,
              text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
            }),
            (0, d.jsx)(eo, {
              Icon: h.default,
              text: ee.default.Messages
                .PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED,
            }),
            (0, d.jsx)(eo, {
              Icon: y.default,
              text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM,
            }),
          ],
        });
      }
      function ed(e) {
        let {
            showWumpus: t,
            showBadge: n,
            ctaButton: r,
            showYearlyPrice: i,
            className: a,
            isGift: s = !1,
            variant: o = 0,
            isFullScreen: u,
          } = e,
          l = (0, I.useStateFromStores)([A.default], () =>
            A.default.getPremiumTypeSubscription()
          ),
          c = (0, I.useStateFromStores)([g.default], () =>
            g.default.getCurrentUser()
          ),
          _ = (0, Y.usePremiumTrialOffer)(),
          E = _?.subscription_trial?.sku_id,
          T = l?.trialId != null,
          m = l?.trialId != null ? c?.premiumType : null,
          S = null != E || T,
          p = 1 === o;
        return (0, d.jsxs)("div", {
          className: f()(et.card, a, {
            [et.card]: !p,
            [et.stackedCard]: p,
            [et.withTier0Rim]: !s && S,
            [et.withCardHover]: !s && S,
            [et.tier0Stacked]: p,
            [et.tier0]: !p,
          }),
          children: [
            E === J.PremiumSubscriptionSKUs.TIER_0
              ? (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(ea, {
                      text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                      className: et.topRimPill,
                      colorOptions: 0,
                    }),
                    (0, d.jsx)("div", { className: et.rimGlowTier0 }),
                  ],
                })
              : null,
            n && (0, d.jsx)(es, { className: et.newCircleIcon }),
            t
              ? (0, d.jsx)("div", {
                  className: et.wumpusImageContainer,
                  children: (0, d.jsx)(U.default, {
                    src: en,
                    mediaLayoutType: Q.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1,
                  }),
                })
              : null,
            s || E !== J.PremiumSubscriptionSKUs.TIER_0
              ? null
              : (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(ea, {
                      text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                      className: et.topRimPill,
                      colorOptions: 0,
                    }),
                    (0, d.jsx)("div", { className: et.rimGlowTier0 }),
                  ],
                }),
            s || m !== J.PremiumTypes.TIER_0
              ? null
              : (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(ea, {
                      text: ee.default.Messages
                        .PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                      className: et.topRimPill,
                      colorOptions: 0,
                    }),
                    (0, d.jsx)("div", { className: et.rimGlowTier0 }),
                  ],
                }),
            (0, d.jsxs)("div", {
              className: f()({
                [et.body]: p && u,
                [et.bodySmallScreen]: p && !u,
              }),
              children: [
                (0, d.jsx)("div", {
                  className: f()({
                    [et.planContainer]: p && u,
                    [et.planContainerSmallScreen]: p && !u,
                  }),
                  children: (0, d.jsxs)("div", {
                    className: f()({ [et.subscriptionPlanInfo]: p }),
                    children: [
                      (0, d.jsx)(x.default, {
                        className: f()({
                          [et.title]: !p,
                          [et.tier0Title]: !p,
                          [et.tier0TitleStacked]: p && u,
                          [et.tier0TitleStackedSmallScreen]: p && !u,
                        }),
                      }),
                      (0, d.jsx)(el, {
                        isGift: s,
                        premiumTier: J.PremiumTypes.TIER_0,
                        offerType: 0,
                        offerTierMatchesCard:
                          E === J.PremiumSubscriptionSKUs.TIER_0,
                        showYearlyPrice: i,
                        isStacked: p,
                        isFullScreen: u,
                      }),
                    ],
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: f()({
                    [et.perkContainer]: p && u,
                    [et.perkContainerSmallScreen]: p && !u,
                  }),
                  children: [
                    (0, d.jsxs)("div", {
                      children: [
                        p &&
                          (0, d.jsx)(C.Heading, {
                            variant: "heading-xxl/extrabold",
                            className: u
                              ? et.stackedCardTitle
                              : et.stackedCardTitleSmallScreen,
                            children:
                              ee.default.Messages
                                .NITRO_MARKETING_JUST_THE_BASICS,
                          }),
                        (0, d.jsx)("div", {
                          className: f()({ [et.listItems]: p }),
                          children: (0, d.jsx)(ec, {}),
                        }),
                      ],
                    }),
                    p && r,
                  ],
                }),
              ],
            }),
            !p && r,
            s || E !== J.PremiumSubscriptionSKUs.TIER_0
              ? null
              : (0, d.jsx)(X.ButtonSparkleGroup, {
                  tier: J.PremiumTypes.TIER_0,
                }),
          ],
        });
      }
      function e_(e) {
        let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
          i = (0, I.useStateFromStores)([L.default], () => L.default.locale),
          a = (0, I.useStateFromStores)(
            [H.default],
            () => H.default.affinities
          ),
          { planSelectionEnabled: s } = k.default.useExperiment(
            { location: "planSelection" },
            { autoTrackExposure: !1 }
          ),
          o = n && !r && a.length > 0;
        o && k.default.trackExposure({ location: "planSelection" });
        if (1 === t)
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(eo, {
                Icon: v.default,
                text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format(
                  {
                    numBoosts: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                    percentageOff: (0, B.formatPercent)(
                      i,
                      J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100
                    ),
                  }
                ),
              }),
              (0, d.jsx)(eo, {
                Icon: G.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                  maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(
                    J.PremiumTypes.TIER_2,
                    { useSpace: !1 }
                  ),
                }),
              }),
              (0, d.jsx)(eo, {
                Icon: D.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
              }),
              (0, d.jsx)(eo, {
                Icon: F.default,
                text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
              }),
              (0, d.jsx)(eo, {
                Icon: M.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM,
              }),
            ],
          });
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(eo, {
              Icon: G.default,
              text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(
                  J.PremiumTypes.TIER_2,
                  { useSpace: !1 }
                ),
              }),
            }),
            (0, d.jsx)(eo, {
              Icon: D.default,
              text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
            }),
            (0, d.jsx)(eo, {
              Icon: h.default,
              text: ee.default.Messages
                .PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED,
            }),
            (0, d.jsx)(eo, {
              Icon: F.default,
              text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
            }),
            (0, d.jsx)(eo, {
              Icon: v.default,
              text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM,
            }),
            (0, d.jsx)(eo, {
              Icon: M.default,
              text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM,
            }),
            s && o && (0, d.jsx)(q.default, {}),
          ],
        });
      }
      function ef(e) {
        let t,
          {
            showWumpus: n,
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: a = 0,
            className: s,
            isGift: o = !1,
            isModal: u = !1,
            variant: l = 0,
            isFullScreen: c,
          } = e,
          _ = (0, I.useStateFromStores)([A.default], () =>
            A.default.getPremiumTypeSubscription()
          ),
          E = (0, I.useStateFromStores)([g.default], () =>
            g.default.getCurrentUser()
          ),
          T = (0, Y.usePremiumTrialOffer)(),
          m = T?.subscription_trial?.sku_id,
          P = _?.trialId != null ? E?.premiumType : null,
          R = (0, V.useIsInPremiumOfferExperience)(),
          O = (0, K.usePremiumDiscountOffer)(),
          N = (0, V.useHasDiscountApplied)(),
          L = null != m || null != P ? 0 : null != O || N ? 1 : null,
          h = 1 === l,
          M = (0, z.useIsEligibleForBogoPromotion)(),
          D = !o && R,
          v = (0, z.getBOGOPillCopy)(),
          x = (0, S.isThemeLight)((0, p.default)()),
          y = x && h ? 5 : 2;
        return (
          D && !h
            ? (t = et.rimGlowTier2)
            : D && h && !x && (t = et.rimGlowTier2Stacked),
          (0, d.jsxs)("div", {
            className: f()(et.card, s, {
              [et.withTier2Rim]: D && !h,
              [et.withTier2RimStacked]: D && h,
              [et.withCardHover]: D,
              [et.tier2Stacked]: h,
              [et.tier2]: !h,
            }),
            children: [
              !o &&
              null != O &&
              (0, K.discountOfferHasTier)(
                O,
                J.PremiumSubscriptionSKUs.TIER_2
              ) &&
              void 0 !== O.discount.amount
                ? (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(ea, {
                        text: N
                          ? ee.default.Messages
                              .PREMIUM_TIER_CARD_DISCOUNT_APPLIED
                          : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format(
                              { percent: O.discount.amount }
                            ),
                        className: et.topRimPill,
                        colorOptions: y,
                      }),
                      (0, d.jsx)("div", { className: t }),
                    ],
                  })
                : null,
              o || m !== J.PremiumSubscriptionSKUs.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(ea, {
                        text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: et.topRimPill,
                        colorOptions: y,
                      }),
                      (0, d.jsx)("div", { className: t }),
                    ],
                  }),
              o || P !== J.PremiumTypes.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(ea, {
                        text: ee.default.Messages
                          .PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                        className: et.topRimPill,
                        colorOptions: y,
                      }),
                      (0, d.jsx)("div", { className: t }),
                    ],
                  }),
              !o &&
                N &&
                (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(ea, {
                      text: ee.default.Messages
                        .PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                      className: et.topRimPill,
                      colorOptions: y,
                    }),
                    (0, d.jsx)("div", { className: t }),
                  ],
                }),
              n
                ? (0, d.jsx)("div", {
                    className: et.wumpusImageContainer,
                    children: (0, d.jsx)(U.default, {
                      src: er,
                      mediaLayoutType: Q.MediaLayoutType.RESPONSIVE,
                      width: 270,
                      height: 242,
                      zoomable: !1,
                    }),
                  })
                : null,
              (0, d.jsxs)("div", {
                className: f()({
                  [et.body]: h && c,
                  [et.bodySmallScreen]: h && !c,
                }),
                children: [
                  (0, d.jsx)("div", {
                    className: f()({
                      [et.planContainer]: h && c,
                      [et.planContainerSmallScreen]: h && !c,
                    }),
                    children: (0, d.jsxs)("div", {
                      className: f()({ [et.subscriptionPlanInfo]: h }),
                      children: [
                        (0, d.jsx)(b.default, {
                          className: f()({
                            [et.title]: !h,
                            [et.tier2Title]: !h,
                            [et.tier2TitleStacked]: h && c,
                            [et.tier2TitleStackedSmallScreen]: h && !c,
                          }),
                        }),
                        !o &&
                          m !== J.PremiumSubscriptionSKUs.TIER_2 &&
                          M &&
                          (0, d.jsx)(C.Text, {
                            variant: "text-xs/bold",
                            className: et.freeTrialPillInline,
                            children: v,
                          }),
                        (0, d.jsx)(el, {
                          isGift: o,
                          premiumTier: J.PremiumTypes.TIER_2,
                          offerType: L,
                          offerTierMatchesCard:
                            m === J.PremiumSubscriptionSKUs.TIER_2 ||
                            (0, K.discountOfferHasTier)(
                              O,
                              J.PremiumSubscriptionSKUs.TIER_2
                            ),
                          showYearlyPrice: i,
                          isStacked: h,
                          isFullScreen: c,
                        }),
                      ],
                    }),
                  }),
                  (0, d.jsxs)("div", {
                    className: f()({
                      [et.perkContainer]: h && c,
                      [et.perkContainerSmallScreen]: h && !c,
                    }),
                    children: [
                      (0, d.jsxs)("div", {
                        children: [
                          h &&
                            (0, d.jsx)(C.Heading, {
                              className: f()({
                                [et.stackedCardTitle]: c,
                                [et.stackedCardTitleSmallScreen]: !c,
                              }),
                              variant: "heading-xxl/extrabold",
                              children:
                                ee.default.Messages
                                  .NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD,
                            }),
                          (0, d.jsx)(e_, {
                            featureSet: a,
                            isModal: u,
                            isGift: o,
                          }),
                        ],
                      }),
                      h &&
                        (0, d.jsx)(Z.default, {
                          isStacked: h,
                          ctaButton: r,
                          isGift: o,
                          trialOfferTier: m,
                          discountOffer: O,
                        }),
                    ],
                  }),
                ],
              }),
              !h &&
                (0, d.jsx)(Z.default, {
                  isStacked: h,
                  ctaButton: r,
                  isGift: o,
                  trialOfferTier: m,
                  discountOffer: O,
                }),
            ],
          })
        );
      }
      function eE(e) {
        let {
            showWumpus: t,
            showBadge: n,
            tier0CTAButton: r,
            tier2CTAButton: i,
            className: a,
            variant: s = 0,
            selectedPremiumType: o,
            isFullScreen: u,
          } = e,
          { AnalyticsLocationProvider: l } = (0, O.default)(
            R.default.PREMIUM_MARKETING_TIER_CARD
          ),
          c = 1 === s,
          _ = o === J.PremiumTypes.TIER_0,
          E = (0, I.useStateFromStores)(
            [P.default],
            () => P.default.useReducedMotion
          );
        return (0, d.jsx)(l, {
          children: (0, d.jsxs)("div", {
            className: f()(
              {
                [et.premiumCards]: !c,
                [et.premiumCardsStackedVariant]: c && u,
                [et.premiumCardsStackedVariantSmallScreen]: c && !u,
              },
              a
            ),
            children: [
              (0, d.jsx)(ed, {
                className: f()({
                  [et.tierCardFocused]: c && _,
                  [et.tierCardHidden]: c && !_,
                  [et.tierCardAnimation]: c && !E,
                }),
                showWumpus: t,
                showBadge: n,
                ctaButton: r,
                variant: s,
                isFullScreen: u,
              }),
              (0, d.jsx)(ef, {
                className: f()({
                  [et.tierCardFocused]: c && !_,
                  [et.tierCardHidden]: c && _,
                  [et.tierCardAnimation]: c && !E,
                }),
                showWumpus: t,
                ctaButton: i,
                variant: s,
                isFullScreen: u,
              }),
            ],
          }),
        });
      }
      ((r = o || (o = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] =
        "PREMIUM_TIER_0_WHITE_FILL"),
        (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] =
          "PREMIUM_TIER_0_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = "PREMIUM_TIER_2_WHITE_FILL"),
        (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] =
          "PREMIUM_TIER_2_NEW_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] =
          "PREMIUM_TIER_2_OLD_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] =
          "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE"),
        ((i = u || (u = {}))[(i.PREMIUM_TRIAL = 0)] = "PREMIUM_TRIAL"),
        (i[(i.PREMIUM_DISCOUNT = 1)] = "PREMIUM_DISCOUNT"),
        ((a = l || (l = {}))[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.BOOSTING = 1)] = "BOOSTING"),
        ((s = c || (c = {}))[(s.DEFAULT = 0)] = "DEFAULT"),
        (s[(s.STACKED = 1)] = "STACKED");
    },
    579093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("803997"),
        a = n.n(i),
        s = n("661223"),
        o = n("974328"),
        u = n("643847"),
        l = n("488867"),
        c = n("171168"),
        d = n("632201"),
        _ = function (e) {
          let {
            subscriptionTier: t,
            interval: n = c.SubscriptionIntervalTypes.MONTH,
            className: i,
            isGift: _ = !1,
            variant: f,
          } = e;
          if (
            !(0, s.useStateFromStores)([u.default], () =>
              u.default.isLoadedForPremiumSKUs()
            )
          )
            return (0, r.jsx)(o.Spinner, {
              type: o.Spinner.Type.PULSING_ELLIPSIS,
              className: d.priceSpinner,
            });
          let E = u.default.getForSkuAndInterval(t, n),
            T =
              null != E
                ? (0, l.getFormattedPriceForPlan)(E, void 0, !1, _)
                : null;
          return (0, r.jsxs)(o.Heading, {
            color: "always-white",
            variant: f ?? "heading-md/medium",
            className: a()(d.pricePerInterval, i),
            children: [
              (0, r.jsx)("span", { className: d.price, children: T }),
              " / ",
              (0, l.getIntervalStringAsNoun)(n),
            ],
          });
        };
    },
    881343: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ButtonSparkleGroup: function () {
            return T;
          },
          PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID: function () {
            return d;
          },
          PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID: function () {
            return _;
          },
          SparkleGroupLeft: function () {
            return f;
          },
          SparkleGroupRight: function () {
            return E;
          },
          SparkleStar: function () {
            return I;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("803997"),
        a = n.n(i),
        s = n("24135"),
        o = n("960099"),
        u = n("262113"),
        l = n("171168"),
        c = n("885519");
      let d = "premium_new_tier_2_gradient",
        _ = "premium_old_tier_2_gradient",
        f = e => {
          let {
              width: t = 28,
              height: n = 53,
              color: i,
              foreground: a,
              wrapperStyle: s,
              ...o
            } = e,
            l = `sparkle-gradient-${Math.random().toString(36).substring(2, 15)}`;
          return (0, r.jsx)("div", {
            className: s,
            children: (0, r.jsxs)("svg", {
              ...(0, u.default)({ ...o }),
              width: t,
              height: n,
              viewBox: "0 0 28 53",
              className: a,
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: l,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                      (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M19.1626 48.3974L21.7394 49.4231C21.7943 49.4744 21.7943 49.5256 21.7394 49.5256L19.1626 50.6026L18.0112 52.9615C18.0112 53.0128 17.9564 53.0128 17.9015 52.9615L16.805 50.6026H16.7502L14.2281 49.5256C14.1733 49.5256 14.1733 49.4744 14.2281 49.4231L16.7502 48.3974H16.805L17.9015 46.0385C17.9564 45.9872 18.0112 45.9872 18.0112 46.0385L19.1626 48.3974Z",
                  fill: i ?? `url(#${l})`,
                }),
                (0, r.jsx)("path", {
                  d: "M26.5697 14.865C25.3611 15.6925 24.3322 16.7831 23.5512 18.0645C22.7702 19.3459 22.2549 20.7888 22.0395 22.2975L21.3147 27.5515C21.2999 27.676 21.2426 27.7905 21.1535 27.8732C21.0644 27.9558 20.9498 28.001 20.8315 28C20.7131 28.001 20.5986 27.9558 20.5095 27.8732C20.4204 27.7905 20.3631 27.676 20.3483 27.5515L19.5631 22.2975C19.3591 20.7849 18.8485 19.3373 18.0665 18.0542C17.2844 16.771 16.2495 15.683 15.0329 14.865L14.3685 14.4165C14.3092 14.3603 14.2623 14.291 14.231 14.2136C14.1997 14.1361 14.1847 14.0522 14.1873 13.968C14.1847 13.8929 14.2 13.8184 14.2316 13.7512C14.2633 13.6841 14.3104 13.6264 14.3685 13.5835L15.0329 13.135C16.2512 12.3038 17.2863 11.2039 18.068 9.91036C18.8497 8.61677 19.3597 7.15977 19.5631 5.63845L20.3483 0.44853C20.3631 0.323971 20.4204 0.209499 20.5095 0.126827C20.5986 0.044157 20.7131 -0.000967026 20.8315 1.71661e-05C20.9498 -0.000967026 21.0644 0.044157 21.1535 0.126827C21.2426 0.209499 21.2999 0.323971 21.3147 0.44853L22.0395 5.63845C22.2542 7.15601 22.7687 8.60832 23.5494 9.90022C24.3301 11.1921 25.3594 12.2945 26.5697 13.135L27.2341 13.5835C27.2999 13.6231 27.3561 13.6785 27.3981 13.7452C27.44 13.812 27.4666 13.8883 27.4757 13.968C27.467 14.0564 27.441 14.142 27.3994 14.2192C27.3578 14.2964 27.3015 14.3636 27.2341 14.4165L26.5697 14.865Z",
                  fill: i ?? `url(#${l})`,
                }),
                (0, r.jsx)("path", {
                  d: "M8.70724 31.8901L13.2167 30.1319C13.3127 30.044 13.3127 29.9561 13.2167 29.9561L8.70724 28.1099L6.6923 24.0659C6.6923 23.978 6.59634 23.978 6.5004 24.0659L4.58145 28.1099H4.48552L0.0719606 29.9561C-0.0239869 29.9561 -0.0239869 30.044 0.0719606 30.1319L4.48552 31.8901H4.58145L6.5004 35.9341C6.59634 36.022 6.6923 36.022 6.6923 35.9341L8.70724 31.8901Z",
                  fill: i ?? `url(#${l})`,
                }),
              ],
            }),
          });
        },
        E = e => {
          let { width: t = 21, height: n = 22, color: i, wrapperStyle: a } = e,
            s = `sparkle-gradient-${Math.random().toString(36).substring(2, 15)}`;
          return (0, r.jsx)("div", {
            className: a,
            children: (0, r.jsxs)("svg", {
              width: t,
              height: n,
              viewBox: "0 0 21 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: s,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                      (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M17.8554 2.39744L20.4323 3.42308C20.4871 3.47436 20.4871 3.52563 20.4323 3.52563L17.8554 4.60256L16.7041 6.96154C16.7041 7.01282 16.6492 7.01282 16.5944 6.96154L15.4979 4.60256H15.443L12.921 3.52563C12.8662 3.52563 12.8662 3.47436 12.921 3.42308L15.443 2.39744H15.4979L16.5944 0.0384612C16.6492 -0.0128207 16.7041 -0.0128207 16.7041 0.0384612L17.8554 2.39744Z",
                  fill: i ?? `url(#${s})`,
                }),
                (0, r.jsx)("path", {
                  d: "M8.62582 14.7674L12.8132 16.3791C12.9023 16.4597 12.9023 16.5403 12.8132 16.5403L8.62582 18.2326L6.75481 21.9396C6.75481 22.0201 6.6657 22.0201 6.57661 21.9396L4.79473 18.2326H4.70566L0.607348 16.5403C0.518254 16.5403 0.518254 16.4597 0.607348 16.3791L4.70566 14.7674H4.79473L6.57661 11.0604C6.6657 10.9799 6.75481 10.9799 6.75481 11.0604L8.62582 14.7674Z",
                  fill: i ?? `url(#${s})`,
                }),
              ],
            }),
          });
        };
      function T(e) {
        let { tier: t = l.PremiumTypes.TIER_2 } = e,
          n = (0, o.default)(),
          i = (0, s.isThemeLight)(n);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !i &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: a()(c.rimGlowVertical, {
                      [c.rimGlowVerticalTier0]: t === l.PremiumTypes.TIER_0,
                      [c.rimGlowVerticalTier2]: t === l.PremiumTypes.TIER_2,
                    }),
                  }),
                  (0, r.jsx)(I, { foreground: c.buttonSparkleStar1 }),
                ],
              }),
            (0, r.jsx)(I, { foreground: c.buttonSparkleStar2 }),
            (0, r.jsx)(I, { foreground: c.buttonSparkleStar3 }),
            (0, r.jsx)(I, { foreground: c.buttonSparkleStar4 }),
            (0, r.jsx)(I, { foreground: c.buttonSparkleStar5 }),
          ],
        });
      }
      function I(e) {
        let {
          width: t = 14,
          height: n = 13,
          color: i = "white",
          foreground: a,
          ...s
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, u.default)({ ...s }),
          preserveAspectRatio: "none",
          width: t,
          height: n,
          viewBox: "0 0 14 13",
          className: a,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  id: d,
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                    (0, r.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#AB5D8A",
                    }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: _,
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#E292AA",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("path", {
              d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
              fill: i,
            }),
          ],
        });
      }
    },
    85359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n("735250"),
        i = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("661223"),
        u = n("974328"),
        l = n("879046"),
        c = n("468385"),
        d = n("30175"),
        _ = n("757349");
      function f() {
        let e = (0, o.useStateFromStores)([c.default], () =>
            c.default.affinities.slice(0, 3)
          ),
          t = e[0],
          { avatarSrc: n, eventHandlers: a } = (0, l.default)({
            user: t,
            size: u.AvatarSizes.SIZE_24,
            animateOnHover: !0,
          }),
          f = e => (null != e.globalName ? e.globalName : e.username),
          E = i.useMemo(
            () =>
              e.length >= 2
                ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                    username: f(e[0]),
                  })
                : 1 === e.length
                  ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                      username: f(e[0]),
                    })
                  : "",
            [e]
          );
        return 0 === e.length
          ? null
          : (0, r.jsxs)("div", {
              className: _.container,
              children: [
                (0, r.jsx)(u.Avatar, {
                  className: _.icon,
                  src: n,
                  "aria-label": t.username,
                  size: u.AvatarSizes.SIZE_24,
                  ...a,
                }),
                (0, r.jsx)(u.Text, {
                  className: s()(_.text),
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: E,
                }),
              ],
            });
      }
    },
    547783: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        });
      var r = n("735250"),
        i = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("661223"),
        u = n("974328"),
        l = n("601763"),
        c = n("871831"),
        d = n("158619"),
        _ = n("488867"),
        f = n("986656"),
        E = n("404627"),
        T = n("624191"),
        I = n("171168"),
        m = n("467006"),
        S = n("822645"),
        C = n("30175"),
        p = n("671666");
      function P(e) {
        let t,
          { onClose: n, fileSize: a, ...P } = e,
          R = null != a && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < a,
          { isLoading: O, suggestedPremiumType: N } = (0, E.default)({
            autoTrackExposure: !R,
            experiment: f.default,
            location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
          }),
          L = !R && N === I.PremiumTypes.TIER_0,
          g = (0, o.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          A = (0, r.jsx)(l.default, { icons: S.DEFAULT_FILE_UPLOAD_ICONS });
        t = L
          ? C.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format(
              {
                premiumPlan: (0, _.getPremiumTypeDisplayName)(
                  I.PremiumTypes.TIER_0
                ),
                premiumMaxSize:
                  C.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED,
              }
            )
          : C.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
        let U = i.useMemo(() => {
            let e = _.default.getUserMaxFileSize(g),
              t = (0, d.formatSize)(e / 1024, { useKibibytes: !0 }),
              n =
                C.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format(
                  { maxSize: t }
                );
            switch (g?.premiumType) {
              case I.PremiumTypes.TIER_0:
                n =
                  C.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format(
                    { maxSize: t }
                  );
                break;
              case I.PremiumTypes.TIER_1:
                n =
                  C.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format(
                    { maxSize: t }
                  );
            }
            return n;
          }, [g]),
          h = (0, r.jsxs)("div", {
            className: p.body,
            children: [
              (0, r.jsx)("span", { children: U }),
              (0, r.jsx)(u.Text, { variant: "text-md/medium", children: t }),
            ],
          });
        return (0, r.jsx)(T.default, {
          artElement: A,
          artContainerClassName: s()(p.artContainer),
          enableArtBoxShadow: !1,
          type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
          title: C.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          body: h,
          context:
            C.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
              maxSize: C.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD,
            }),
          glowUp: t,
          analyticsLocation: {
            section: m.AnalyticsSections.FILE_UPLOAD_POPOUT,
          },
          onClose: n,
          subscriptionTier: L
            ? I.PremiumSubscriptionSKUs.TIER_0
            : I.PremiumSubscriptionSKUs.TIER_2,
          isLoading: O,
          ...P,
        });
      }
    },
    624191: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var r = n("735250"),
        i = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("974328"),
        u = n("495157"),
        l = n("986821"),
        c = n("620871"),
        d = n("328470"),
        _ = n("488867"),
        f = n("392874"),
        E = n("459992"),
        T = n("921011"),
        I = n("749911"),
        m = n("650742"),
        S = n("171168"),
        C = n("467006"),
        p = n("30175"),
        P = n("262109"),
        R = n("769860");
      function O(e) {
        let {
            title: t,
            type: n,
            guildBoostProps: a,
            analyticsSource: O,
            analyticsLocation: N,
            body: L,
            context: g,
            glowUp: A,
            modalClassName: U,
            artContainerClassName: h,
            bodyClassName: M,
            transitionState: D,
            onClose: v,
            onSubscribeClick: b,
            onSecondaryClick: x,
            secondaryCTA: y,
            subscribeButtonText: F,
            showNewBadge: G = !1,
            enableArtBoxShadow: j = !0,
            subscriptionTier: B = S.PremiumSubscriptionSKUs.TIER_2,
            isLoading: w = !1,
            hideBackButton: k,
            backButtonText: H,
            ...V
          } = e,
          K = null != a,
          Y = (0, T.usePremiumTrialOffer)(),
          W = (0, E.usePremiumDiscountOffer)(),
          z =
            (Y?.subscription_trial?.sku_id === B ||
              (0, E.discountOfferHasTier)(W, B)) &&
            !K,
          { analyticsLocations: Z } = (0, l.default)(
            u.default.PREMIUM_UPSELL_MODAL
          ),
          { enabled: $, variant: X } = f.default.useExperiment(
            { location: "PremiumUpsellModal" },
            { autoTrackExposure: !1 }
          ),
          q = $ && n === S.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
          J = q && f.GradientVariants.includes(X);
        i.useEffect(() => {
          !w &&
            (K
              ? d.default.track(C.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                  type: `${n} - Tier ${a.boostedGuildTier}`,
                  guild_id: a.guild.id,
                  channel_id: a.channelId,
                  location: N,
                  location_stack: Z,
                })
              : d.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                  type: n,
                  source: O,
                  location: N,
                  location_stack: Z,
                  sku_id: B,
                }));
        }, [K, B, w]);
        let Q = j
            ? s()(P.artContainer, P.artContainerBoxShadow, h)
            : s()(P.artContainer, h),
          ee = null;
        return (
          (ee =
            "artURL" in V
              ? (0, r.jsx)("img", { className: P.art, alt: "", src: V.artURL })
              : V.artElement),
          (0, r.jsxs)(o.ModalRoot, {
            className: s()(P.root, U),
            "aria-label": t,
            transitionState: D,
            children: [
              (0, r.jsxs)("div", {
                className: Q,
                children: [
                  ee,
                  G
                    ? (0, r.jsx)("img", {
                        className: P.sparkleBadge,
                        alt: "",
                        src: R,
                      })
                    : null,
                ],
              }),
              q
                ? (0, r.jsx)(o.ModalCloseButton, {
                    onClick: v,
                    className: P.closeButton,
                  })
                : null,
              (0, r.jsx)(o.ModalContent, {
                className: P.content,
                children: w
                  ? (0, r.jsx)(o.Spinner, {})
                  : (0, r.jsx)(r.Fragment, {
                      children: z
                        ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(I.default, {
                              onClose: v,
                              type: n,
                              subscriptionTier:
                                Y?.subscription_trial?.sku_id ??
                                S.PremiumSubscriptionSKUs.TIER_2,
                              headingText: t,
                              context: g,
                              analyticsLocationObject: N,
                              discountOffer: W,
                              trialOffer: Y,
                              children: A,
                            }),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(o.Heading, {
                                className: s()(P.header, {
                                  [P.enhancedHeader]: q,
                                }),
                                variant: "heading-xl/semibold",
                                children: t,
                              }),
                              (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: s()(M),
                                children: L,
                              }),
                            ],
                          }),
                    }),
              }),
              (0, r.jsxs)(o.ModalFooter, {
                className: s()(P.footer, { [P.enhancedFooter]: q }),
                children: [
                  (0, r.jsxs)("div", {
                    className: s()(P.primaryActions, {
                      [P.enhancedPrimaryActions]: q,
                    }),
                    children: [
                      null != y
                        ? (0, r.jsx)(o.Button, {
                            className: s()(P.secondaryAction, {
                              [P.enhancedSecondaryAction]: J,
                            }),
                            onClick: x,
                            size: o.Button.Sizes.SMALL,
                            color: J
                              ? o.Button.Colors.CUSTOM
                              : o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: y,
                          })
                        : null,
                      (() => {
                        let e;
                        if (K)
                          return (0, r.jsx)(c.default, {
                            analyticsLocation: N,
                            guild: a.guild,
                            onClose: v,
                          });
                        let t = q
                          ? p.default.Messages.PREMIUM_UPSELL_GET_NITRO
                          : void 0;
                        return (
                          z &&
                            (null != Y
                              ? ((t = (0, _.formatTrialCtaIntervalDuration)({
                                  intervalType: Y?.subscription_trial?.interval,
                                  intervalCount:
                                    Y?.subscription_trial?.interval_count,
                                })),
                                (e = Y?.trial_id))
                              : null != W &&
                                (t =
                                  p.default.Messages.PREMIUM_DISCOUNT_CTA.format(
                                    { percent: W.discount.amount }
                                  ))),
                          (0, r.jsx)(m.default, {
                            className: s()({ [P.getNitroCTA]: J }),
                            premiumModalAnalyticsLocation: N,
                            subscriptionTier: B,
                            trialId: e,
                            size: o.Button.Sizes.SMALL,
                            color: J
                              ? o.Button.Colors.CUSTOM
                              : o.Button.Colors.GREEN,
                            onClick: () => {
                              b?.(), v();
                            },
                            buttonText: F ?? t,
                          })
                        );
                      })(),
                    ],
                  }),
                  !k &&
                    !q &&
                    (0, r.jsx)(o.Button, {
                      onClick: v,
                      size: o.Button.Sizes.SMALL,
                      color: o.Button.Colors.PRIMARY,
                      look: o.Button.Looks.LINK,
                      children: null != H ? H : p.default.Messages.BACK,
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    613352: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getProfilePreviewField: function () {
            return p;
          },
          setNewPendingAvatar: function () {
            return m;
          },
          setNewPendingAvatarDecoration: function () {
            return S;
          },
          setNewPendingProfileEffectId: function () {
            return C;
          },
          setNewPendingUserBio: function () {
            return I;
          },
          showRemoveAvatar: function () {
            return P;
          },
          showRemoveBanner: function () {
            return R;
          },
          useAvatarsWithGuilds: function () {
            return _;
          },
          useGlobalOrGuildIdentityPendingProfileEffect: function () {
            return T;
          },
          useGlobalOrGuildIdentityProfileEffect: function () {
            return E;
          },
          useGuildMemberAndUserPendingAvatarDecoration: function () {
            return f;
          },
        }),
        n("653041");
      var r = n("470079"),
        i = n("661223"),
        a = n("702143"),
        s = n("747195"),
        o = n("513462"),
        u = n("246619"),
        l = n("846774"),
        c = n("361733"),
        d = n("801856");
      function _(e) {
        return r.useMemo(() => {
          let t = c.default.getMutableAllGuildsAndMembers(),
            n = {};
          for (let r in t) {
            let i = t[r],
              a = i[e]?.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(r));
          }
          return null != n ? Object.entries(n).map(e => e[1][0]) : [];
        }, [e]);
      }
      function f(e, t) {
        let n = (0, i.useStateFromStores)([c.default], () =>
            void 0 === t ? null : c.default.getMember(t.id, e.id)
          ),
          { pendingUserAvatarDecoration: r, userErrors: a } = (0,
          i.useStateFromStoresObject)([d.default], () => ({
            pendingUserAvatarDecoration: d.default.getPendingAvatarDecoration(),
            userErrors: d.default.getErrors().avatarDecoration,
          })),
          { pendingGuildAvatarDecoration: s, guildErrors: u } = (0,
          i.useStateFromStoresObject)([o.default], () => ({
            pendingGuildAvatarDecoration:
              o.default.getPendingAvatarDecoration(),
            guildErrors: o.default.getErrors().avatarDecoration,
          }));
        return {
          userAvatarDecoration: e.avatarDecoration,
          guildAvatarDecoration: n?.avatarDecoration,
          pendingAvatarDecoration: null != t ? s : r,
          pendingErrors: null != t ? u : a,
        };
      }
      function E(e, t) {
        return (0, i.useStateFromStores)(
          [l.default],
          () =>
            null == t
              ? l.default.getUserProfile(e.id)?.profileEffectId
              : l.default.getGuildMemberProfile(e.id, t.id)?.profileEffectId,
          [e, t]
        );
      }
      function T(e) {
        return (0, i.useStateFromStoresObject)(
          [d.default, o.default],
          () =>
            null == e
              ? {
                  pendingProfileEffectId: d.default.getPendingProfileEffectId(),
                  errors: d.default.getErrors().profileEffect,
                }
              : {
                  pendingProfileEffectId: o.default.getPendingProfileEffectId(),
                  errors: o.default.getErrors().profileEffect,
                },
          [e]
        );
      }
      function I(e, t) {
        (0, u.setPendingBio)(e === t ? void 0 : e);
      }
      function m(e, t) {
        (0, a.setPendingAvatar)(e === t ? void 0 : e);
      }
      function S(e, t) {
        (null != e
          ? s.setPendingAvatarDecoration
          : a.setPendingAvatarDecoration)(t);
      }
      function C(e, t, n) {
        if (e === t) {
          null == n
            ? (0, a.setPendingProfileEffectId)(void 0)
            : (0, s.setPendingProfileEffectId)(void 0);
          return;
        }
        null == n
          ? (0, a.setPendingProfileEffectId)(e)
          : (0, s.setPendingProfileEffectId)(e);
      }
      function p(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e)
          return "" === e
            ? { value: r ? n : null, isUsingGuildValue: !1 }
            : { value: e, isUsingGuildValue: r };
        return null != t && "" !== t
          ? { value: t, isUsingGuildValue: !0 }
          : { value: n, isUsingGuildValue: !1 };
      }
      function P(e, t) {
        return void 0 === e ? null != t : null != e;
      }
      function R(e, t) {
        return void 0 === e ? null != t : null != e;
      }
    },
    513094: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          maybeOpenProfilePreviewModal: function () {
            return i;
          },
        });
      var r = n("312916");
      function i(e) {
        let {
          imageSrc: t,
          file: n,
          uploadType: i,
          guildId: a,
          isTryItOutFlow: s = !1,
        } = e;
        r.default.dispatch({
          type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
          imageSrc: t,
          file: n,
          uploadType: i,
          guildId: a,
          isTryItOutFlow: s,
        });
      }
    },
    60495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function () {
            return r;
          },
        });
      let r = 10485760;
    },
    802390: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getPreviewAvatar: function () {
            return T;
          },
          getPreviewDisplayName: function () {
            return m;
          },
          getPreviewNickname: function () {
            return I;
          },
          handleOpenSelectImageModal: function () {
            return f;
          },
          isColorDark: function () {
            return S;
          },
          showFileSizeErrorModal: function () {
            return E;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("148817"),
        a = n("974328"),
        s = n("736587"),
        o = n("204606"),
        u = n("10357"),
        l = n("513094"),
        c = n("60495"),
        d = n("274532"),
        _ = n("30175");
      function f(e, t, i, s) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await n
            .el("802390@825:881")
            .then(n.bind(n, "326390"));
          return n =>
            (0, r.jsx)(a, {
              filters: s,
              maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              imageSpecifications:
                e === d.UploadTypes.BANNER &&
                _.default.Messages
                  .USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
              onComplete: (n, r) =>
                (0, l.maybeOpenProfilePreviewModal)({
                  imageSrc: n,
                  file: r,
                  uploadType: e,
                  guildId: t,
                  isTryItOutFlow: i,
                }),
              uploadType: e,
              showUpsellHeader: !0,
              ...n,
            });
        });
      }
      function E() {
        (0, s.openUploadError)({
          title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: _.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, u.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES),
          }),
        });
      }
      function T(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        let { size: i = 80, canAnimate: a = !0 } = r,
          s = null === e;
        return s && null == t
          ? o.default.getDefaultAvatarURL(n.id, n.discriminator)
          : s || t?.avatar == null
            ? n.getAvatarURL(void 0, i, a)
            : n.getAvatarURL(t?.guildId, i, a);
      }
      function I(e, t) {
        return "" === e ? null : e ?? t;
      }
      function m(e, t) {
        return "" === e ? null : e ?? t;
      }
      function S(e) {
        return (null != e ? (0, i.getDarkness)(e) : 1) > 0.25;
      }
    },
    213952: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          thumbHashToRGBA: function () {
            return i;
          },
        }),
        n("653041"),
        n("268111"),
        n("941497"),
        n("744285"),
        n("492257"),
        n("873817");
      var r = n("788900");
      function i(e) {
        let { detail: t = 1, pop: n = 1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { PI: i, min: a, max: s, cos: o, round: u } = Math,
          l = e[0] | (e[1] << 8) | (e[2] << 16),
          c = e[3] | (e[4] << 8),
          d = (63 & l) / 63,
          _ = ((l >> 6) & 63) / 31.5 - 1,
          f = ((l >> 12) & 63) / 31.5 - 1,
          E = l >> 23,
          T = c >> 15,
          I = s(3, T ? (E ? 5 : 7) : 7 & c),
          m = s(3, T ? 7 & c : E ? 5 : 7),
          S = E ? (15 & e[5]) / 15 : 1,
          C = (e[5] >> 4) / 15,
          p = E ? 6 : 5,
          P = 0,
          R = (t, n, r) => {
            let i = [];
            for (let a = 0; a < n; a++)
              for (let s = a ? 0 : 1; s * n < t * (n - a); s++)
                i.push(
                  (((e[p + (P >> 1)] >> ((1 & P++) << 2)) & 15) / 7.5 - 1) * r
                );
            return i;
          },
          O = R(I, m, ((l >> 18) & 31) / 31 / 2),
          N = R(3, 3, (((c >> 3) & 63) / 63) * n),
          L = R(3, 3, (((c >> 9) & 63) / 63) * n),
          g = E ? R(5, 5, C) : [],
          A = (0, r.thumbHashToApproximateAspectRatio)(e),
          U = u(A > 1 ? 32 : 32 * A),
          h = u(A > 1 ? 32 / A : 32),
          M = new Uint8Array(U * h * 4),
          D = [],
          v = [];
        for (let e = 0, n = 0; e < h; e++)
          for (let r = 0; r < U; r++, n += 4) {
            let u = d,
              l = _,
              c = f,
              T = S;
            for (let e = 0, t = s(I, E ? 5 : 3); e < t; e++)
              D[e] = o((i / U) * (r + 0.5) * e);
            for (let t = 0, n = s(m, E ? 5 : 3); t < n; t++)
              v[t] = o((i / h) * (e + 0.5) * t);
            for (let e = 0, n = 0; e < m; e++)
              for (
                let r = e ? 0 : 1, i = 2 * v[e];
                r * m < I * (m - e);
                r++, n++
              )
                !(r > t) && !(e > t) && (u += O[n] * D[r] * i);
            for (let e = 0, t = 0; e < 3; e++)
              for (let n = e ? 0 : 1, r = 2 * v[e]; n < 3 - e; n++, t++) {
                let e = D[n] * r;
                (l += N[t] * e), (c += L[t] * e);
              }
            if (E)
              for (let e = 0, t = 0; e < 5; e++)
                for (let n = e ? 0 : 1, r = 2 * v[e]; n < 5 - e; n++, t++)
                  T += g[t] * D[n] * r;
            let C = u - (2 / 3) * l,
              p = (3 * u - C + c) / 2,
              P = p - c;
            (M[n] = s(0, 255 * a(1, p))),
              (M[n + 1] = s(0, 255 * a(1, P))),
              (M[n + 2] = s(0, 255 * a(1, C))),
              (M[n + 3] = s(0, 255 * a(1, T)));
          }
        return { w: U, h, rgba: M };
      }
    },
    246619: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          handleProfileAccessibilityTooltipViewed: function () {
            return E;
          },
          resetPendingProfileChanges: function () {
            return T;
          },
          saveProfileChanges: function () {
            return f;
          },
          setPendingAccentColor: function () {
            return C;
          },
          setPendingBanner: function () {
            return I;
          },
          setPendingBio: function () {
            return m;
          },
          setPendingPronouns: function () {
            return S;
          },
          setPendingThemeColors: function () {
            return p;
          },
          setTryItOutAvatar: function () {
            return P;
          },
          setTryItOutAvatarDecoration: function () {
            return R;
          },
          setTryItOutBanner: function () {
            return O;
          },
          setTryItOutThemeColors: function () {
            return N;
          },
        });
      var r = n("454836"),
        i = n("312916"),
        a = n("253842"),
        s = n("929748"),
        o = n("362939"),
        u = n("871831"),
        l = n("328470"),
        c = n("467006"),
        d = n("171168");
      function _(e) {
        l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
          feature_name: e,
          feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
        });
      }
      async function f(e, t) {
        let n = u.default.getCurrentUser()?.id;
        if (null == n) return;
        let l = o.UseLegacyChatInput.getSetting();
        null != e.bio && l && (e.bio = s.default.parse(void 0, e.bio).content);
        try {
          i.default.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n });
          let s = await r.default.patch({
            url:
              null != t
                ? c.Endpoints.GUILD_PROFILE(t, c.ME)
                : c.Endpoints.USER_PROFILE(c.ME),
            body: e,
          });
          if (s.ok) {
            let e = s.body.profile_effect?.id;
            i.default.dispatch({
              type: "USER_PROFILE_UPDATE_SUCCESS",
              userId: n,
              profileEffectId: e,
              ...s.body,
            });
          } else {
            let e = new a.APIError(s);
            i.default.dispatch({
              type: "USER_PROFILE_UPDATE_FAILURE",
              errors: s.body,
              apiError: e,
            });
          }
          return s;
        } catch (t) {
          let e = new a.APIError(t);
          i.default.dispatch({
            type: "USER_PROFILE_UPDATE_FAILURE",
            errors: {},
            apiError: e,
          });
        }
      }
      function E() {
        i.default.dispatch({
          type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED",
        });
      }
      function T() {
        i.default.dispatch({
          type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function I(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
          banner: e,
        });
      }
      function m(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
          bio: e,
        });
      }
      function S(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
          pronouns: e,
        });
      }
      function C(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
          color: e,
        });
      }
      function p(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
          themeColors: e,
        });
      }
      function P(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
          avatar: e,
        }),
          _(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR);
      }
      function R(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
          avatarDecoration: e,
        }),
          _(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION);
      }
      function O(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
          banner: e,
        }),
          _(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER);
      }
      function N(e) {
        i.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
          themeColors: e,
        }),
          _(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR);
      }
    },
    846774: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("789020");
      var r = n("392711"),
        i = n.n(r),
        a = n("763301"),
        s = n("703229"),
        o = n("535291"),
        u = n("262047"),
        l = n("327271"),
        c = n("565639"),
        d = n("12480"),
        _ = n("880315");
      let f = new Set(),
        E = new Set(),
        T = {},
        I = {},
        m = {},
        S = {},
        C = {},
        p = !1,
        P = !1;
      function R() {
        f.clear(),
          E.clear(),
          (T = {}),
          (I = {}),
          (m = {}),
          (S = {}),
          (C = {}),
          (p = !1);
      }
      function O(e) {
        let { userId: t } = e;
        E.add(t);
      }
      function N(e) {
        let { userId: t } = e;
        E.delete(t);
      }
      function L(e) {
        E.delete(e.userId),
          (m[e.userId] = i()(e.mutualFriends)
            .map(e => ({
              key: e.id,
              user: new o.default(e),
              status: c.default.getStatus(e.id),
            }))
            .sortBy(e => {
              let { user: t } = e;
              return t.username.toLowerCase();
            })
            .value()),
          (S[e.userId] = e.mutualFriends.length);
      }
      function g() {
        if (0 === Object.keys(C).length) return !1;
        C = {};
      }
      function A(e) {
        if (null == C[e.user.id]) return !1;
        delete C[e.user.id];
      }
      function U(e) {
        if ((f.delete(e.user.id), null != e.mutual_guilds)) {
          let t = {};
          e.mutual_guilds.forEach(e => {
            let { id: n, nick: r } = e,
              i = l.default.getGuild(n);
            null != i && (t[n] = { guild: i, nick: r });
          }),
            (C[e.user.id] = _.default
              .getFlattenedGuildIds()
              .filter(e => null != t[e])
              .map(e => ({ guild: t[e].guild, nick: t[e].nick })));
        }
        if (null != e.mutual_friends_count) {
          let t = e.mutual_friends_count;
          S[e.user.id] = t;
        }
        let t = e.premium_since ?? null,
          n = e.application;
        if (
          ((T[e.user.id] = {
            userId: e.user.id,
            banner: e.user_profile?.banner,
            accentColor: e.user_profile?.accent_color,
            themeColors: e.user_profile?.theme_colors,
            popoutAnimationParticleType:
              e.user_profile?.popout_animation_particle_type,
            bio: e.user_profile?.bio ?? "",
            profileEffectId: e.user_profile?.profile_effect?.id,
            pronouns: e.user_profile?.pronouns ?? "",
            connectedAccounts:
              e.connected_accounts.filter(e => a.default.isSupported(e.type)) ??
              [],
            applicationRoleConnections: e.application_role_connections ?? [],
            premiumSince: null != t ? new Date(t) : null,
            premiumType: e.premium_type,
            premiumGuildSince:
              null != e.premium_guild_since
                ? new Date(e.premium_guild_since)
                : null,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            profileFetchFailed: !1,
            application:
              null != n
                ? {
                    id: n.id,
                    primarySkuId: n.primary_sku_id,
                    customInstallUrl: n.custom_install_url,
                    installParams: n.install_params,
                    flags: n.flags,
                    popularApplicationCommandIds:
                      n.popular_application_command_ids,
                  }
                : null,
            badges: e.badges,
          }),
          null != e.guild_member_profile)
        ) {
          let t = {
            userId: e.user.id,
            guildId: e.guild_member_profile.guild_id,
            banner: e.guild_member_profile.banner,
            accentColor: e.guild_member_profile.accent_color,
            themeColors: e.guild_member_profile?.theme_colors,
            popoutAnimationParticleType:
              e.guild_member_profile?.popout_animation_particle_type,
            profileEffectId: e.guild_member_profile?.profile_effect?.id,
            bio: e.guild_member_profile.bio,
            pronouns: e.guild_member_profile.pronouns,
            badges: e.guild_badges,
          };
          null != I[e.user.id]
            ? (I[e.user.id][e.guild_member_profile.guild_id] = t)
            : (I[e.user.id] = { [e.guild_member_profile.guild_id]: t });
        }
      }
      function h(e) {
        let { userId: t } = e;
        f.add(t);
      }
      function M(e) {
        let { userId: t } = e;
        (T[t] = T[t] ?? {
          connectedAccounts: [],
          applicationRoleConnections: [],
          premiumSince: null,
          premiumGuildSince: null,
          lastFetched: Date.now(),
          profileFetchFailed: !0,
          application: null,
          legacyUsername: null,
          userId: t,
          banner: null,
          accentColor: null,
          bio: "",
          pronouns: "",
        }),
          f.delete(t);
      }
      function D(e) {
        p = !0;
      }
      function v(e) {
        (p = !1),
          null != e.guild_id
            ? !(function (e) {
                let {
                  userId: t,
                  guild_id: n,
                  accent_color: r,
                  banner: i,
                  bio: a,
                  pronouns: s,
                  popout_animation_particle_type: o,
                  theme_colors: u,
                  profileEffectId: l,
                } = e;
                if (null == n || null == I[t]) return !1;
                let c = I[t][n];
                if (null == c) return !1;
                I[t][n] = {
                  ...c,
                  accentColor: r,
                  banner: i,
                  bio: a,
                  pronouns: s,
                  popoutAnimationParticleType: o,
                  themeColors: u,
                  profileEffectId: l,
                };
              })(e)
            : !(function (e) {
                let {
                    userId: t,
                    accent_color: n,
                    banner: r,
                    bio: i,
                    pronouns: a,
                    popout_animation_particle_type: s,
                    theme_colors: o,
                    profileEffectId: u,
                  } = e,
                  l = T[t];
                if (null == l) return !1;
                T[t] = {
                  ...l,
                  accentColor: n,
                  banner: r,
                  bio: i,
                  pronouns: a,
                  popoutAnimationParticleType: s,
                  themeColors: o,
                  profileEffectId: u,
                };
              })(e);
      }
      function b(e) {
        p = !1;
      }
      function x(e) {
        P = !0;
      }
      function y(e) {
        let { user: t } = e;
        if (f.has(t.id) || null == T[t.id]) return !1;
        T[t.id].lastFetched = 0;
      }
      function F() {
        f.clear(), (T = {}), (I = {});
      }
      class G extends d.default {
        static #e = (this.displayName = "UserProfileStore");
        static #t = (this.LATEST_SNAPSHOT_VERSION = 1);
        constructor() {
          super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: h,
            USER_PROFILE_FETCH_FAILURE: M,
            USER_PROFILE_FETCH_SUCCESS: U,
            USER_PROFILE_UPDATE_START: D,
            USER_PROFILE_UPDATE_SUCCESS: v,
            USER_PROFILE_UPDATE_FAILURE: b,
            USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: x,
            MUTUAL_FRIENDS_FETCH_START: O,
            MUTUAL_FRIENDS_FETCH_SUCCESS: L,
            MUTUAL_FRIENDS_FETCH_FAILURE: N,
            GUILD_JOIN: g,
            GUILD_DELETE: g,
            GUILD_MEMBER_ADD: A,
            GUILD_MEMBER_REMOVE: A,
            GUILD_MEMBER_UPDATE: y,
            USER_UPDATE: y,
            LOGOUT: R,
          }),
            (this.loadCache = () => {
              let e = this.readSnapshot(G.LATEST_SNAPSHOT_VERSION);
              null != e &&
                e.forEach(e => {
                  let { userId: t, profile: n } = e;
                  T[t] = n;
                });
            });
        }
        initialize() {
          this.waitFor(_.default), this.syncWith([s.default], F);
        }
        isFetchingProfile(e) {
          return f.has(e);
        }
        isFetchingFriends(e) {
          return E.has(e);
        }
        get isSubmitting() {
          return p;
        }
        getUserProfile(e) {
          return T[e];
        }
        getGuildMemberProfile(e, t) {
          return null == t ? null : I[e]?.[t];
        }
        getMutualFriends(e) {
          return m[e];
        }
        getMutualFriendsCount(e) {
          return S[e];
        }
        getMutualGuilds(e) {
          return C[e];
        }
        getIsAccessibilityTooltipViewed() {
          return P;
        }
        takeSnapshot() {
          let e = u.default.getId();
          return {
            version: G.LATEST_SNAPSHOT_VERSION,
            data: [{ userId: e, profile: T[e] }],
          };
        }
      }
      var j = new G();
    },
    463451: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("470079"),
        i = n("203959"),
        a = n("23419"),
        s = n("513462"),
        o = n("613352"),
        u = n("361733"),
        l = n("801856"),
        c = n("871831"),
        d = n("246619"),
        _ = e => {
          let { isTryItOut: t, analyticsLocations: n, guildId: _ } = e,
            f = (0, i.default)([c.default], () => c.default.getCurrentUser()),
            E = (0, i.default)([u.default], () =>
              null != _ && null != f ? u.default.getMember(_, f.id) : null
            ),
            T = null != E ? E.avatarDecoration : f?.avatarDecoration,
            I = (0, a.default)(n),
            {
              pendingAvatar: m,
              pendingAvatarDecoration: S,
              pendingErrors: C,
            } = (0, i.useStateFromStoresObject)([l.default, s.default], () => ({
              pendingAvatar: t
                ? l.default.getTryItOutAvatar()
                : null != _
                  ? s.default.getPendingAvatar()
                  : l.default.getPendingAvatar(),
              pendingAvatarDecoration: t
                ? l.default.getTryItOutAvatarDecoration()
                : null != _
                  ? s.default.getPendingAvatarDecoration()
                  : l.default.getPendingAvatarDecoration(),
              pendingErrors:
                null != _
                  ? s.default.getErrors().avatarDecoration
                  : l.default.getErrors().avatarDecoration,
            })),
            p = (0, r.useCallback)(
              e => (0, o.setNewPendingAvatar)(e, f?.avatar),
              [f?.avatar]
            ),
            P = (0, r.useCallback)(
              e => {
                (0, o.setNewPendingAvatarDecoration)(_, e), null != e && I(e);
              },
              [I, _]
            );
          return {
            pendingAvatar: m,
            pendingAvatarDecoration: S,
            setPendingAvatar: t ? d.setTryItOutAvatar : p,
            setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
            savedAvatarDecoration: T,
            pendingErrors: C,
          };
        };
    },
    879046: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("470079"),
        i = n("974328"),
        a = n("796538"),
        s = n("940213"),
        o = n("975846");
      function u(e) {
        let {
            user: t,
            guildId: n,
            size: u,
            showPending: l = !1,
            showTryItOut: c = !1,
            animateOnHover: d = !1,
            avatarDecorationOverride: _,
            avatarOverride: f,
          } = e,
          {
            avatarSrc: E,
            isAvatarAnimating: T,
            eventHandlers: I,
          } = (0, o.useAnimatedAvatarSrc)({
            user: t,
            guildId: n,
            size: (0, i.getAvatarSize)(u),
            showPending: l,
            animateOnHover: d,
            avatarOverride: f,
          }),
          {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: S,
            eventHandlers: C,
          } = (0, s.default)({
            user: t,
            guildId: null != n ? n : void 0,
            size: (0, a.getDecorationSizeForAvatarSize)(u),
            showPending: l,
            animateOnHover: d,
            avatarDecorationOverride: _,
            showTryItOut: c,
          }),
          p = r.useCallback(() => {
            I.onMouseEnter(), C.onMouseEnter();
          }, [I, C]);
        return {
          avatarPlaceholderSrc: m,
          avatarDecorationSrc: S,
          avatarSrc: E,
          isAnimating: T,
          eventHandlers: {
            onMouseEnter: p,
            onMouseLeave: r.useCallback(() => {
              I.onMouseLeave(), C.onMouseLeave();
            }, [I, C]),
          },
        };
      }
    },
    975846: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnimatedAvatarSrc: function () {
            return c;
          },
        });
      var r = n("470079"),
        i = n("661223"),
        a = n("329420"),
        s = n("802390"),
        o = n("361733"),
        u = n("470526"),
        l = n("463451");
      function c(e) {
        let {
            user: t,
            guildId: n,
            size: c,
            showPending: d = !1,
            animateOnHover: _ = !1,
            avatarOverride: f,
          } = e,
          [E, T] = r.useState(!1),
          I = (0, i.useStateFromStores)(
            [a.default],
            () => a.default.useReducedMotion
          ),
          m =
            (0, i.useStateFromStores)([u.default], () =>
              u.default.isFocused()
            ) &&
            (E || (!I && !_)),
          { pendingAvatar: S } = (0, l.default)({}),
          C = (0, i.useStateFromStores)([o.default], () =>
            null != n && null != t ? o.default.getMember(n, t.id) : null
          ),
          p = r.useMemo(
            () =>
              null != t
                ? (0, s.getPreviewAvatar)(d ? f ?? S : void 0, C, t, {
                    canAnimate: m,
                    size: c,
                  })
                : void 0,
            [d, S, C, t, m, c, f]
          ),
          P = r.useCallback(() => T(!0), []);
        return {
          avatarSrc: p,
          isAvatarAnimating: m,
          eventHandlers: {
            onMouseEnter: P,
            onMouseLeave: r.useCallback(() => T(!1), []),
          },
        };
      }
    },
    801856: function (e, t, n) {
      "use strict";
      let r, i, a, s, o, u, l, c, d, _, f, E, T, I;
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var m = n("53452"),
        S = n("661223"),
        C = n("312916"),
        p = n("467006");
      let P = p.FormStates.CLOSED,
        R = {},
        O = !1;
      function N() {
        (P = p.FormStates.OPEN), (R = {});
      }
      function L() {
        (P = p.FormStates.CLOSED), (R = {});
      }
      function g() {
        A(), U(), (R = {});
      }
      function A() {
        (r = void 0), (i = void 0), (a = void 0), (s = void 0);
      }
      function U() {
        (o = void 0),
          (u = void 0),
          (l = void 0),
          (c = void 0),
          (d = void 0),
          (s = void 0);
      }
      function h() {
        (f = void 0), (E = void 0), (T = void 0), (I = void 0), (_ = void 0);
      }
      class M extends S.default.Store {
        static #e = (this.displayName = "UserSettingsAccountStore");
        getFormState() {
          return P;
        }
        getErrors() {
          return R;
        }
        showNotice() {
          return (
            void 0 !== r ||
            void 0 !== o ||
            void 0 !== u ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== d ||
            void 0 !== a ||
            void 0 !== s ||
            void 0 !== i
          );
        }
        getPendingAvatar() {
          return r;
        }
        getPendingGlobalName() {
          return i;
        }
        getPendingBanner() {
          return o;
        }
        getPendingBio() {
          return u;
        }
        getPendingPronouns() {
          return l;
        }
        getPendingAccentColor() {
          return c;
        }
        getPendingThemeColors() {
          return d;
        }
        getPendingAvatarDecoration() {
          return a;
        }
        getPendingProfileEffectId() {
          return s;
        }
        getAllPending() {
          return {
            pendingAvatar: r,
            pendingBanner: o,
            pendingBio: u,
            pendingPronouns: l,
            pendingAccentColor: c,
            pendingThemeColors: d,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: s,
            pendingGlobalName: i,
          };
        }
        getTryItOutThemeColors() {
          return _;
        }
        getTryItOutAvatar() {
          return f;
        }
        getTryItOutAvatarDecoration() {
          return E;
        }
        getTryItOutProfileEffectId() {
          return T;
        }
        getTryItOutBanner() {
          return I;
        }
        getAllTryItOut() {
          return {
            tryItOutThemeColors: _,
            tryItOutAvatar: f,
            tryItOutAvatarDecoration: E,
            tryItOutProfileEffectId: T,
            tryItOutBanner: I,
          };
        }
        getIsDisableSubmit() {
          return O;
        }
      }
      var D = new M(C.default, {
        USER_SETTINGS_ACCOUNT_INIT: N,
        USER_SETTINGS_MODAL_INIT: N,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: N,
        USER_SETTINGS_MODAL_SET_SECTION: function (e) {
          let { section: t } = e;
          return t === p.UserSettingsSections.ACCOUNT && N();
        },
        USER_SETTINGS_ACCOUNT_CLOSE: L,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function () {
          g(), h(), L();
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function () {
          (P = p.FormStates.SUBMITTING), (R = {});
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function (e) {
          if (P !== p.FormStates.SUBMITTING) return !1;
          (P = p.FormStates.OPEN), (R = e.errors ?? {});
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function (e) {
          let { avatar: t } = e;
          (r = t), (f = void 0);
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function (e) {
          let { globalName: t } = e;
          i = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function (e) {
          let { avatarDecoration: t } = e;
          a = t;
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM:
          function (e) {
            let { item: t } = e;
            t?.type === m.CollectiblesItemType.PROFILE_EFFECT
              ? ((E = null), (T = t?.id))
              : ((T = null), (E = t));
          },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
          let { profileEffectId: t } = e;
          s = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function (e) {
          let { banner: t } = e;
          o = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function (e) {
          let { bio: t } = e;
          u = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function (e) {
          let { pronouns: t } = e;
          l = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function (e) {
          let { color: t } = e;
          c = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function (e) {
          let { themeColors: t } = e;
          d = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function (e) {
          let { avatar: t } = e;
          f = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
          let { avatarDecoration: t } = e;
          E = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function (e) {
          let { profileEffectId: t } = e;
          T = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function (e) {
          let { banner: t } = e;
          I = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
          let { themeColors: t } = e;
          _ = t;
        },
        USER_SETTINGS_CLEAR_ERRORS: function () {
          R = {};
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: A,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
        USER_SETTINGS_RESET_ALL_PENDING: g,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: h,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function () {
          a = void 0;
        },
        LOGOUT: function () {
          r = void 0;
        },
        USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function (e) {
          let { disable: t } = e;
          O = t;
        },
      });
    },
    446426: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var r = n("735250"),
        i = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("24135"),
        u = n("974328"),
        l = n("960099"),
        c = n("455784"),
        d = n("495366"),
        _ = n("156346"),
        f = n("958649"),
        E = n("406639"),
        T = n("467006"),
        I = n("30175"),
        m = n("347405"),
        S = n("167969"),
        C = n("557256");
      class p extends i.PureComponent {
        static #e = (this.defaultProps = {
          readyState: T.ImageReadyStates.READY,
          zoomable: !0,
          children: e => {
            let {
              src: t,
              size: n,
              alt: i,
              className: a,
              mediaLayoutType: s,
            } = e;
            return (0, r.jsx)("img", {
              className: a ?? void 0,
              alt: i ?? I.default.Messages.IMAGE,
              src: t,
              style: R(n, s),
            });
          },
          minWidth: 0,
          minHeight: 0,
        });
        render() {
          let e;
          let {
            className: t,
            imageClassName: n,
            readyState: i,
            src: a,
            placeholder: o,
            placeholderVersion: l,
            alt: _,
            width: S,
            height: C,
            maxWidth: p = S,
            maxHeight: O = C,
            minWidth: N,
            minHeight: L,
            mediaLayoutType: g,
            limitResponsiveWidth: A = !0,
            accessory: U,
            zoomable: h,
            original: M,
            children: D,
            renderAccessory: v,
            onClick: b,
            tabIndex: x,
            useFullWidth: y = !1,
            ...F
          } = this.props;
          if (1 === S && 1 === C) return null;
          let G = (0, d.fit)({
              width: S,
              height: C,
              maxWidth: p,
              maxHeight: O,
              minWidth: N,
              minHeight: L,
            }),
            j = 0 !== G.width ? G.width / G.height : 1;
          null != a && i !== T.ImageReadyStates.ERROR
            ? (e = D({
                src: a,
                size: G,
                alt: _,
                className: n,
                mediaLayoutType: g,
              }))
            : i !== T.ImageReadyStates.LOADING &&
              (e = (0, r.jsx)(P, { size: G, mediaLayoutType: g, alt: _ })),
            (e = (0, r.jsx)(f.ImageLoadingOverlay, {
              readyState: i,
              aspectRatio: j,
              placeholder: o,
              placeholderVersion: l,
              placeholderStyle: R(G, g),
              children: e,
            }));
          let B = null != v ? v() : null;
          return (
            (B = B ?? U),
            (0, r.jsx)(u.FocusRing, {
              ringTarget: this._containerRef,
              focusTarget: this._clickableRef,
              children: (0, r.jsxs)("div", {
                className: s()(
                  m.imageWrapper,
                  {
                    [m.imageZoom]: h,
                    [m.imageWrapperBackground]: i !== T.ImageReadyStates.READY,
                    [m.clickable]: null != b,
                  },
                  t
                ),
                style: (function (e, t, n, r) {
                  return r === E.MediaLayoutType.MOSAIC
                    ? {
                        display: "block",
                        maxHeight: "inherit",
                        margin: "auto",
                        width:
                          !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH
                            ? e.width
                            : "100%",
                        height: "100%",
                      }
                    : r === E.MediaLayoutType.RESPONSIVE
                      ? {
                          maxWidth: t ? e.width : void 0,
                          width: "100%",
                          aspectRatio: `${e.width} / ${e.height}`,
                        }
                      : e;
                })(G, A, y, g),
                ...F,
                children: [
                  null != M &&
                    (0, r.jsx)("a", {
                      tabIndex: -1,
                      onClick: b,
                      "aria-hidden": !0,
                      className: m.originalLink,
                      href: M,
                      ref: this._containerRef,
                      "data-role": "img",
                      "data-safe-src": a,
                    }),
                  null != b
                    ? (0, r.jsx)(u.Clickable, {
                        className: m.clickableWrapper,
                        tabIndex: x ?? 0,
                        onClick: b,
                        "aria-label": _ ?? I.default.Messages.IMAGE,
                        "aria-describedby": c.IMAGE_OPEN_DIALOG_DESCRIPTION,
                        innerRef: this._clickableRef,
                        focusProps: { enabled: !1 },
                        children: e,
                      })
                    : e,
                  null != B
                    ? (0, r.jsx)("div", {
                        className: m.imageAccessory,
                        children: B,
                      })
                    : null,
                ],
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this._containerRef = i.createRef()),
            (this._clickableRef = i.createRef());
        }
      }
      function P(e) {
        let { size: t, mediaLayoutType: n, alt: i } = e,
          a = (0, l.default)();
        return (0, r.jsx)("div", {
          className: m.imageErrorWrapper,
          style: (function (e, t) {
            switch (t) {
              case E.MediaLayoutType.MOSAIC:
                return {
                  width: "100%",
                  height: "100%",
                  aspectRatio: `${e.width} / ${e.height}`,
                  display: "flex",
                  maxHeight: "inherit",
                };
              case E.MediaLayoutType.RESPONSIVE:
                return { ...O(e), display: "flex" };
              default:
                return e;
            }
          })(t, n),
          children: (0, r.jsx)("img", {
            src: (0, o.isThemeLight)(a) ? C : S,
            className: m.imageError,
            alt: i ?? I.default.Messages.IMAGE,
          }),
        });
      }
      function R(e, t) {
        switch (t) {
          case E.MediaLayoutType.MOSAIC:
            return {
              display: "block",
              objectFit: "cover",
              minWidth: "100%",
              minHeight: "100%",
              maxWidth: 1 === (0, _.default)() ? "calc(100% + 1px)" : "100%",
            };
          case E.MediaLayoutType.RESPONSIVE:
            return O(e);
          default:
            return e;
        }
      }
      function O(e) {
        let { width: t, height: n } = e;
        return {
          maxWidth: t,
          maxHeight: n,
          width: "100%",
          display: "block",
          aspectRatio: `${t} / ${n}`,
        };
      }
    },
    958649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImageLoadingOverlay: function () {
            return E;
          },
        }),
        n("268111"),
        n("941497"),
        n("744285"),
        n("492257"),
        n("873817"),
        n("642549");
      var r = n("735250"),
        i = n("470079"),
        a = n("21840"),
        s = n("788900"),
        o = n("974328"),
        u = n("213952"),
        l = n("467006"),
        c = n("347405");
      let d = {
          from: { opacity: 1 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          config: { duration: 200 },
        },
        _ = { ...d, config: { duration: 50 } },
        f = {
          ...d,
          config: (e, t) => (t ? { duration: 800 } : { duration: 200 }),
        };
      function E(e) {
        let {
            readyState: t,
            aspectRatio: n,
            placeholder: E,
            placeholderVersion: T,
            placeholderStyle: I,
            children: m,
          } = e,
          S = t === l.ImageReadyStates.LOADING,
          [C] = i.useState(() => Date.now()),
          [p] = i.useState(S),
          [P, R] = i.useState(!1),
          O = i.useMemo(() => {
            if (p && 1 === T && null != E) {
              let e = Uint8Array.from(atob(E), e => e.charCodeAt(0)),
                t = (0, u.thumbHashToRGBA)(e, { detail: 1, pop: 1.1 });
              return (0, s.rgbaToDataURL)(t.w, t.h, t.rgba);
            }
          }, [p, E, T]);
        i.useEffect(() => {
          let e = setTimeout(() => {
            R(!0);
          }, 2e3);
          return () => {
            clearTimeout(e);
          };
        }, [p]);
        let N = t === l.ImageReadyStates.READY && Date.now() - C < 200,
          L = (0, a.useTransition)(S && null != O, N ? _ : d),
          g = (0, a.useTransition)(S && P, f);
        return (0, r.jsxs)("div", {
          className: c.loadingOverlay,
          style: { aspectRatio: n },
          children: [
            m,
            L(
              (e, t) =>
                t &&
                (0, r.jsx)(a.animated.img, {
                  style: { ...I, ...e },
                  className: c.imagePlaceholder,
                  src: O,
                  alt: "",
                })
            ),
            g(
              (e, t) =>
                t &&
                (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: c.imageLoadingOverlay,
                  children: (0, r.jsx)(o.Spinner, {
                    type: o.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: c.cornerLoadingSpinner,
                  }),
                })
            ),
          ],
        });
      }
    },
    508338: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UID: function () {
            return u;
          },
          uid: function () {
            return s;
          },
          useUID: function () {
            return o;
          },
        });
      var r = n("97613"),
        i = n.n(r),
        a = n("207561");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i()(e);
        },
        o = () => (0, a.useLazyValue)(() => s()),
        u = e => {
          let { children: t } = e;
          return t(o());
        };
    },
    596739: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("336328"),
        a = n("699340"),
        s = n("262113"),
        o = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: n = 18,
              color: i = "currentColor",
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23 12C23 15.4588 21.244 18.5074 18.575 20.303C16.9546 21.4361 14.9961 22.0511 12.9077 21.9996C11.5234 21.9871 10.2063 21.6933 9.01083 21.1726L8.93992 21.1486C7.24876 20.5765 5.54476 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.03814 17 4.40201 16.7197 4.57202 16.3248C4.83747 15.7082 4.79971 14.5414 3.86441 14.1934C3.41676 14.0268 2.72587 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11C2.16507 11 2.69887 10.6988 3.10938 10.1953C3.46698 9.75673 3.46834 9.09578 3.27805 8.62811C3.11182 8.21955 2.77674 7.83979 2.44976 7.55367C2.17543 7.31362 2 6.96873 2 6.50001C2 5.67158 2.67157 5.00001 3.5 5.00001C4.79441 5.00001 6.01593 4.51851 7.15231 3.88709C8.79678 2.6997 10.8167 2 13 2C18.5228 2 23 6.47715 23 12ZM15.2781 13.6032C15.7366 13.7241 16.1174 14.026 16.3144 14.4105C16.5162 14.8043 16.5223 15.2869 16.2154 15.7057C15.2355 17.0432 13.4838 17.7164 11.7684 17.264C10.0529 16.8115 8.87791 15.3665 8.70867 13.726C8.65566 13.2122 8.90615 12.7973 9.28089 12.5555C9.64684 12.3195 10.13 12.2455 10.5885 12.3664L15.2781 13.6032ZM9.20943 8.1998C8.65483 8.05353 8.08712 8.27952 7.78185 8.72337C7.56782 9.03455 7.13921 9.34399 6.64391 9.21336C6.18769 9.09304 5.83028 8.58879 6.08468 8.08437C6.72953 6.80575 8.21942 6.10768 9.6745 6.49143C11.1296 6.87519 12.0653 8.21295 11.9742 9.63762C11.9382 10.1997 11.3726 10.4605 10.9163 10.3401C10.4211 10.2095 10.2071 9.73061 10.1798 9.35578C10.1409 8.82116 9.76403 8.34606 9.20943 8.1998ZM17.6296 11.3621C17.9348 10.9182 18.5026 10.6922 19.0571 10.8385C19.6117 10.9848 19.9886 11.4599 20.0275 11.9945C20.0548 12.3693 20.2688 12.8482 20.7641 12.9788C21.2203 13.0992 21.786 12.8384 21.8219 12.2763C21.913 10.8517 20.9773 9.51389 19.5222 9.13014C18.0671 8.74638 16.5772 9.44445 15.9324 10.7231C15.678 11.2275 16.0354 11.7317 16.4916 11.8521C16.9869 11.9827 17.4155 11.6733 17.6296 11.3621Z",
                fill: i,
              }),
            });
          },
          a.SuperReactionIcon,
          void 0,
          { size: 18 }
        );
    },
    150060: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("336328"),
        a = n("299647"),
        s = n("262113"),
        o = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 25,
              height: n = 25,
              color: i = "currentColor",
              ...a
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsxs)("g", {
                  clipPath: "url(#clip0_1473_119386)",
                  children: [
                    (0, r.jsx)("path", {
                      d: "M16.001 20.5H4.00098C2.89798 20.5 2.00098 19.602 2.00098 18.5V8.5H4.00098V18.5H16.001V20.5Z",
                      fill: i,
                    }),
                    (0, r.jsx)("path", {
                      d: "M21.001 3.5H8.00098C6.89798 3.5 6.00098 4.396 6.00098 5.5V14.5C6.00098 15.602 6.89798 16.5 8.00098 16.5H21.001C22.104 16.5 23.001 15.602 23.001 14.5V5.5C23.001 4.396 22.104 3.5 21.001 3.5ZM9.00098 13.5C9.00098 11.659 10.16 10.5 12.001 10.5C10.896 10.5 10.001 9.604 10.001 8.5C10.001 7.396 10.896 6.5 12.001 6.5C13.106 6.5 14.001 7.396 14.001 8.5C14.001 9.604 13.105 10.5 12.001 10.5C13.842 10.5 15.001 11.659 15.001 13.5H9.00098ZM20.001 13.5H16.001V11.5H20.001V13.5ZM20.001 9.5H16.001V7.5H20.001V9.5Z",
                      fill: i,
                    }),
                  ],
                }),
                (0, r.jsx)("defs", {
                  children: (0, r.jsx)("clipPath", {
                    id: "clip0_1473_119386",
                    children: (0, r.jsx)("rect", {
                      width: t,
                      height: t,
                      fill: i,
                      transform: "translate(0 0.5)",
                    }),
                  }),
                }),
              ],
            });
          },
          a.UserSquareIcon,
          void 0,
          { size: 25 }
        );
    },
    860767: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("262113");
      function a(e) {
        let {
          width: t = 106,
          height: n = 26,
          color: a = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(o),
          width: t,
          height: n,
          viewBox: "0 0 106 26",
          children: [
            (0, r.jsx)("title", { children: "Nitro" }),
            (0, r.jsx)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: (0, r.jsx)("path", {
                className: s,
                fill: a,
                d: "M98.8266537 8.64800265L97.5788372 17.0822416C97.2940433 19.0754982 95.0485266 20.0010292 92.981582 20.0010292 91.0571496 20.0010292 89.1680861 19.0754982 89.4175111 17.2605602L90.6652125 8.64800265C90.9501215 6.76162212 93.1956383 5.80077257 95.2624676 5.80077257 97.3294121 5.80077257 99.1115628 6.76162212 98.8266537 8.64800265M96.2496839.0038079646L96.2503751.0000115044248 82.8208233.0000115044248C82.4777342.0000115044248 82.1864887.251383186 82.1368341.59030354L81.4839511 5.04596726C81.4228909 5.46254248 81.7462794 5.83609115 82.167825 5.83609115L84.6202551 5.83609115C84.8670304 5.83609115 85.0355795 6.08734779 84.9386897 6.31398496 84.6326976 7.03036549 84.4097703 7.8080646 84.2859219 8.64800265L83.0381053 17.2605602C82.2182861 23.0258876 87.0301735 25.9085513 92.2687909 25.9085513 97.7574094 25.9085513 103.139115 23.0258876 103.958934 17.2605602L105.206059 8.64800265C106.009634 2.99656903 101.367679.115400885 96.2496839.0038079646M15.5778562 11.7941867L15.6467505 15.9747796C15.648133 16.0607177 15.5902986 16.1363018 15.5068881 16.1574699L15.5067729 16.1574699 14.0843013 11.1148504C14.0822275 11.1071425 14.0795777 11.0996646 14.0763519 11.0923018L9.66308376.775018584C9.55432753.520885841 9.30421123.355912389 9.0273667.355912389L4.02607753.355912389C3.68126035.355912389 3.38920838.6097 3.34151232.950576106L.00682030635 24.7668062C-.0513596718 25.1820009.271568009 25.5526735.691385514 25.5526735L5.67355018 25.5526735C6.01882818 25.5526735 6.31122578 25.2981956 6.3583458 24.9566292L7.6643423 15.4949301C7.66560958 15.4857265 7.66618562 15.4762929 7.66607042 15.4669743L7.59475674 10.6052044 7.73715368 10.5697708 9.23116943 15.6125053C9.23335838 15.6196381 9.23589295 15.6267708 9.23888836 15.6336735L13.3663258 25.1370186C13.4758885 25.3893106 13.7250831 25.5526735 14.0004299 25.5526735L19.39573 25.5526735C19.7405472 25.5526735 20.0325992 25.2988858 20.0802953 24.9580097L23.4156785 1.14177965C23.4738585.726584956 23.1509308.355912389 22.7311133.355912389L17.782935.355912389C17.438233.355912389 17.146181.609469912 17.0983698.950346018L15.5795843 11.7654257C15.578317 11.7749743 15.577741 11.784523 15.5778562 11.7941867M25.2200758 25.5526274L30.2035078 25.5526274C30.5483249 25.5526274 30.8403769 25.2989549 30.888073 24.9579637L34.222765 1.14184867C34.280945.726653982 33.9580173.355981416 33.5381998.355981416L28.5547678.355981416C28.2100659.355981416 27.9180139.609653982 27.8702026.950645133L24.5355106 24.7667602C24.4773306 25.1819549 24.8002583 25.5526274 25.2200758 25.5526274M37.588782.910862832L36.9357838 5.3664115C36.8748388 5.78298673 37.1982273 6.15665044 37.6197729 6.15665044L42.8344271 6.15665044C43.2536686 6.15665044 43.5763658 6.52628761 43.5192227 6.94102212L41.0626451 24.7682788C41.005502 25.1830133 41.3281993 25.5526504 41.7474408 25.5526504L46.8027624 25.5526504C47.1481556 25.5526504 47.4405532 25.2980575 47.4875581 24.9564912L49.9960944 6.75280973C50.0430992 6.41112832 50.3354968 6.15665044 50.68089 6.15665044L56.2874814 6.15665044C56.6305704 6.15665044 56.9217007 5.90539381 56.9714705 5.56635841L57.6249296 1.11080973C57.6859898.694234513 57.3626013.320570796 56.9409404.320570796L38.2727712.320570796C37.9296821.320570796 37.6384366.571827434 37.588782.910862832M72.9157339 9.14614425C72.7371616 10.6051354 71.5970645 12.0642416 69.6364568 12.0642416L66.6908218 12.0642416C66.2704283 12.0642416 65.9472702 11.6925336 66.0063718 11.2768788L66.6298768 6.8920823C66.6782642 6.55178142 66.9700857 6.29891416 67.3143268 6.29891416L70.4562761 6.29891416C72.3453396 6.29891416 73.0936148 7.61571062 72.9157339 9.14614425M71.1691824.355958407L61.6845787.355958407C61.3397615.355958407 61.0477096.609630973 60.9998983.950622124L57.6652063 24.7667372C57.6070263 25.1819319 57.929954 25.5526044 58.3497715 25.5526044L63.4034802 25.5526044C63.7487582 25.5526044 64.0411558 25.2981265 64.0882759 24.9565602L65.0696166 17.8430292C65.0932342 17.6723035 65.2393178 17.5450646 65.4120144 17.5450646L66.0616716 17.5450646C66.1795293 17.5450646 66.2893224 17.6050027 66.3528019 17.7041708L71.1792055 25.2345071C71.3062798 25.4327283 71.5256356 25.5526044 71.7613509 25.5526044L78.0034289 25.5526044C78.5625328 25.5526044 78.8902992 24.9242327 78.5697909 24.4667018L73.5050221 17.2370912C73.383593 17.0637195 73.4460357 16.8224717 73.6364743 16.729631 76.8698986 15.1516841 78.7475566 13.5351973 79.3665685 9.03926814 80.0787836 3.13174602 76.3728918.355958407 71.1691824.355958407",
              }),
            }),
          ],
        });
      }
    },
    747690: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("262113");
      function a(e) {
        let {
          width: t = 103,
          height: n = 39,
          color: a = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(o),
          width: t,
          height: n,
          viewBox: "0 0 103 39",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            fill: a,
            className: s,
            children: [
              (0, r.jsx)("path", {
                d: "M93.9519 0.175787H81.0164C80.8563 0.175146 80.7012 0.231811 80.5799 0.335344C80.4586 0.438877 80.3792 0.582303 80.3564 0.739196L79.7272 4.99334C79.7136 5.08695 79.7205 5.18236 79.7474 5.2731C79.7744 5.36384 79.8207 5.44778 79.8833 5.51923C79.946 5.59068 80.0234 5.64796 80.1103 5.68719C80.1973 5.72642 80.2917 5.74668 80.3873 5.7466H82.7491C82.804 5.74682 82.8579 5.76039 82.9062 5.78612C82.9545 5.81185 82.9956 5.84895 83.026 5.89414C83.0564 5.93932 83.075 5.99121 83.0803 6.04522C83.0857 6.09924 83.0775 6.15372 83.0565 6.20385C82.7507 6.91629 82.5392 7.66486 82.4273 8.43095L81.2248 16.6535C80.4347 22.1651 85.0697 24.9086 90.1172 24.9086C95.404 24.9086 100.588 22.1569 101.378 16.6535L102.58 8.43095C103.354 3.03162 98.8818 0.281936 93.9519 0.175787ZM96.4272 8.42687L95.2328 16.4779C94.9585 18.3804 92.7947 19.2643 90.8041 19.2643C88.9477 19.2643 87.1304 18.3804 87.3697 16.6473L88.5722 8.42483C88.8466 6.62437 91.0104 5.70781 93.0009 5.70781C94.9915 5.70781 96.7139 6.62641 96.4333 8.42687H96.4272Z",
              }),
              (0, r.jsx)("path", {
                d: "M22.1974 0.17587H17.3644C17.2005 0.176513 17.0423 0.236066 16.9194 0.343454C16.7965 0.450842 16.7171 0.598756 16.6961 0.759692L15.213 11.2256C15.212 11.2351 15.212 11.2447 15.213 11.2542L15.279 15.3001C15.2798 15.3406 15.2669 15.3801 15.2421 15.4124C15.2174 15.4446 15.1825 15.4676 15.1429 15.4777L13.7526 10.5969V10.5744L9.43527 0.582096C9.38392 0.461509 9.29788 0.35852 9.18786 0.285933C9.07784 0.213345 8.94868 0.174361 8.81645 0.173828H3.93188C3.7689 0.176072 3.61225 0.236646 3.49091 0.344348C3.36956 0.45205 3.29173 0.599594 3.27181 0.759692L0.00648965 23.8003C-0.00675491 23.8949 0.000616673 23.9912 0.0281092 24.0828C0.0556018 24.1744 0.102579 24.2591 0.165884 24.3312C0.22919 24.4033 0.307359 24.4612 0.39514 24.501C0.482921 24.5407 0.578282 24.5614 0.674817 24.5617H5.54082C5.70386 24.5612 5.86126 24.5025 5.98405 24.3964C6.10685 24.2903 6.18678 24.1438 6.20915 23.984L7.48392 14.8286C7.48494 14.8191 7.48494 14.8095 7.48392 14.8L7.41379 10.0947L7.55405 10.0621L9.01241 14.9409C9.01126 14.9476 9.01126 14.9545 9.01241 14.9613L13.043 24.1595C13.0941 24.2803 13.1801 24.3834 13.2902 24.456C13.4003 24.5287 13.5295 24.5675 13.6618 24.5678H18.9486C19.1114 24.5674 19.2685 24.509 19.3913 24.4033C19.514 24.2976 19.5941 24.1516 19.617 23.9921L22.8678 0.937289C22.8815 0.842432 22.8743 0.745785 22.8468 0.653916C22.8193 0.562046 22.7722 0.477107 22.7086 0.404871C22.645 0.332635 22.5664 0.274794 22.4782 0.235279C22.39 0.195765 22.2943 0.175503 22.1974 0.17587Z",
              }),
              (0, r.jsx)("path", {
                d: "M32.7504 0.175781H27.8844C27.7203 0.17599 27.5619 0.23539 27.4389 0.342858C27.3159 0.450326 27.2366 0.598492 27.2161 0.759604L23.959 23.8002C23.9458 23.8948 23.9531 23.9911 23.9806 24.0827C24.0081 24.1743 24.0551 24.259 24.1184 24.3311C24.1817 24.4032 24.2599 24.4611 24.3477 24.5009C24.4354 24.5406 24.5308 24.5613 24.6273 24.5616H29.4933C29.6563 24.5613 29.8137 24.503 29.9368 24.3973C30.0599 24.2916 30.1404 24.1456 30.1637 23.9859L33.4187 0.937201C33.4323 0.842515 33.4252 0.746043 33.3978 0.654318C33.3705 0.562593 33.3235 0.477757 33.2601 0.405555C33.1968 0.333353 33.1185 0.275472 33.0305 0.235829C32.9426 0.196186 32.847 0.175708 32.7504 0.175781Z",
              }),
              (0, r.jsx)("path", {
                d: "M55.5911 0.175834H37.3854C37.2235 0.17613 37.0671 0.234031 36.9448 0.338966C36.8225 0.443901 36.7424 0.588871 36.7191 0.747409L36.0817 5.04646C36.0678 5.14131 36.0747 5.238 36.1019 5.32998C36.1291 5.42195 36.176 5.50705 36.2394 5.57948C36.3028 5.65192 36.3812 5.70999 36.4694 5.74976C36.5575 5.78952 36.6532 5.81004 36.75 5.80992H41.845C41.9414 5.80989 42.0368 5.83033 42.1246 5.86985C42.2123 5.90937 42.2905 5.96706 42.3539 6.03903C42.4172 6.111 42.4642 6.19557 42.4917 6.28705C42.5192 6.37852 42.5266 6.47477 42.5133 6.5693L40.1164 23.7961C40.1032 23.8907 40.1105 23.9869 40.138 24.0784C40.1655 24.1699 40.2125 24.2545 40.2759 24.3264C40.3392 24.3984 40.4174 24.4561 40.5052 24.4956C40.593 24.5351 40.6883 24.5556 40.7848 24.5555H45.7147C45.8777 24.5551 46.0351 24.4964 46.1579 24.3902C46.2807 24.2841 46.3607 24.1377 46.383 23.9778L48.8294 6.38762C48.8509 6.22779 48.9303 6.08112 49.0529 5.97487C49.1754 5.86861 49.3328 5.81 49.4957 5.80992H54.964C55.1257 5.81012 55.2821 5.75266 55.4044 5.64806C55.5268 5.54346 55.607 5.39873 55.6303 5.24039L56.2677 0.935212C56.2811 0.839995 56.2735 0.743042 56.2455 0.650985C56.2175 0.558928 56.1698 0.473939 56.1055 0.401832C56.0413 0.329726 55.9621 0.272202 55.8733 0.233197C55.7845 0.194191 55.6882 0.174624 55.5911 0.175834Z",
              }),
              (0, r.jsx)("path", {
                d: "M69.4981 0.175781H60.2364C60.0723 0.17599 59.9139 0.23539 59.7909 0.342858C59.6679 0.450326 59.5887 0.598491 59.5681 0.759604L56.311 23.8002C56.2978 23.8948 56.3051 23.9911 56.3326 24.0827C56.3601 24.1743 56.4071 24.259 56.4704 24.3311C56.5337 24.4032 56.6119 24.4611 56.6997 24.5009C56.7875 24.5406 56.8828 24.5613 56.9794 24.5616H61.9155C62.0785 24.5612 62.2359 24.5025 62.3587 24.3963C62.4815 24.2902 62.5614 24.1437 62.5838 23.9839L63.5409 17.1005C63.5523 17.0206 63.5923 16.9474 63.6536 16.8942C63.7149 16.841 63.7935 16.8113 63.8751 16.8106H64.5104C64.5672 16.8108 64.6231 16.8251 64.6728 16.8522C64.7225 16.8793 64.7646 16.9184 64.7951 16.9658L69.5084 24.2534C69.5693 24.3477 69.6531 24.4253 69.7523 24.4792C69.8514 24.5331 69.9626 24.5614 70.0757 24.5616H76.1711C76.2947 24.5618 76.4159 24.5283 76.5216 24.465C76.6272 24.4016 76.7133 24.3107 76.7704 24.2022C76.8274 24.0937 76.8532 23.9718 76.845 23.8498C76.8368 23.7278 76.7949 23.6104 76.7239 23.5103L71.7733 16.5146C71.7454 16.4751 71.7265 16.43 71.7178 16.3826C71.7091 16.3351 71.7109 16.2863 71.7231 16.2396C71.7352 16.1929 71.7574 16.1493 71.7882 16.1119C71.8189 16.0744 71.8575 16.044 71.9012 16.0227C75.0593 14.4958 76.893 12.9301 77.4974 8.57997C78.1988 2.86218 74.5786 0.175781 69.4981 0.175781ZM71.204 8.68407C71.0287 10.0946 69.9169 11.5072 68.0006 11.5072H65.1251C65.0285 11.5073 64.9329 11.4868 64.845 11.4472C64.757 11.4076 64.6787 11.3497 64.6154 11.2775C64.552 11.2053 64.505 11.1204 64.4777 11.0287C64.4503 10.937 64.4432 10.8405 64.4568 10.7458L65.0653 6.50188C65.0882 6.34263 65.1684 6.1969 65.2912 6.09151C65.414 5.98611 65.5711 5.92815 65.7336 5.92827H68.8009C70.6471 5.92827 71.3773 7.20206 71.204 8.68407Z",
              }),
              (0, r.jsx)("path", {
                d: "M7.17861 33.4558C7.14695 33.4798 7.12131 33.5107 7.10366 33.5461C7.086 33.5815 7.07682 33.6205 7.07682 33.6599C7.07682 33.6994 7.086 33.7383 7.10366 33.7737C7.12131 33.8091 7.14695 33.84 7.17861 33.8641C8.11097 34.5683 8.07796 35.6584 7.86344 36.332C7.38901 37.9059 6.19056 38.8592 3.99993 38.8592H0.262245C0.224761 38.859 0.187761 38.8508 0.153705 38.8353C0.11965 38.8198 0.0893196 38.7973 0.0647325 38.7693C0.0401454 38.7413 0.021865 38.7085 0.0111071 38.6729C0.000349207 38.6374 -0.00263948 38.6 0.00233983 38.5632L1.31012 29.3058C1.31907 29.2439 1.35029 29.1873 1.39805 29.1464C1.4458 29.1056 1.50688 29.0831 1.57002 29.0833H5.30358C7.18892 29.0833 8.41625 30.2019 8.09447 32.0656C7.96306 32.6209 7.63894 33.1128 7.17861 33.4558ZM4.23096 36.6872C5.73675 36.6872 5.98841 34.6847 4.50943 34.6847H3.28622C3.22289 34.685 3.16179 34.7079 3.11408 34.7491C3.06637 34.7904 3.03522 34.8472 3.02632 34.9092L2.82004 36.3912C2.81506 36.428 2.81805 36.4654 2.82881 36.5009C2.83957 36.5365 2.85785 36.5693 2.88243 36.5973C2.90702 36.6253 2.93735 36.6478 2.97141 36.6633C3.00546 36.6788 3.04246 36.687 3.07995 36.6872H4.23096ZM4.76108 32.9026C5.97397 32.9026 6.26688 31.1634 5.01067 31.1634H3.78747C3.72444 31.1637 3.66359 31.1862 3.61593 31.2271C3.56826 31.2679 3.53692 31.3242 3.52756 31.3859L3.35223 32.6107C3.3469 32.6475 3.34964 32.685 3.36027 32.7207C3.37089 32.7564 3.38916 32.7894 3.41381 32.8175C3.43847 32.8456 3.46894 32.8681 3.50316 32.8834C3.53738 32.8988 3.57454 32.9068 3.61213 32.9067L4.76108 32.9026Z",
              }),
              (0, r.jsx)("path", {
                d: "M16.7972 38.8632H14.6602C14.6002 38.8632 14.5419 38.843 14.495 38.8059C14.4482 38.7688 14.4155 38.717 14.4023 38.659L14.1074 37.1219C14.0946 37.0638 14.062 37.0117 14.015 36.9746C13.9681 36.9374 13.9097 36.9173 13.8495 36.9178H11.6011C11.5504 36.9179 11.5007 36.9326 11.4582 36.9602C11.4157 36.9877 11.3823 37.0269 11.3619 37.0729L10.6193 38.7244C10.5991 38.7705 10.5657 38.8099 10.5232 38.8374C10.4806 38.865 10.4309 38.8796 10.38 38.8795H8.29251C8.24801 38.8795 8.20424 38.8683 8.16533 38.8469C8.12643 38.8255 8.09366 38.7947 8.07013 38.7573C8.0466 38.7199 8.03308 38.6772 8.03085 38.6333C8.02861 38.5893 8.03774 38.5455 8.05736 38.5059L12.6284 29.2485C12.6496 29.2047 12.683 29.1678 12.7246 29.1421C12.7663 29.1164 12.8145 29.103 12.8635 29.1035H14.7633C14.8232 29.1032 14.8813 29.1233 14.9279 29.1605C14.9746 29.1977 15.0068 29.2497 15.0191 29.3077L17.053 38.5651C17.0586 38.6018 17.0562 38.6392 17.0459 38.6748C17.0357 38.7105 17.0179 38.7435 16.9936 38.7718C16.9694 38.8 16.9393 38.8228 16.9054 38.8385C16.8715 38.8543 16.8346 38.8627 16.7972 38.8632ZM13.4968 34.707C13.5334 34.7069 13.5696 34.6992 13.603 34.6844C13.6364 34.6697 13.6663 34.6481 13.6908 34.6212C13.7153 34.5943 13.7338 34.5625 13.7452 34.5281C13.7565 34.4937 13.7605 34.4572 13.7567 34.4212L13.4927 31.8491H13.3957L12.4407 34.3559C12.4256 34.3952 12.4205 34.4375 12.4256 34.4792C12.4308 34.5209 12.4461 34.5607 12.4702 34.5953C12.4944 34.6298 12.5266 34.658 12.5643 34.6775C12.6019 34.6969 12.6437 34.7071 12.6861 34.707H13.4968Z",
              }),
              (0, r.jsx)("path", {
                d: "M19.1384 35.9359C19.1901 35.8936 19.2563 35.8728 19.3232 35.8777C19.3901 35.8826 19.4525 35.913 19.4973 35.9624C19.7378 36.2023 20.0247 36.3919 20.3408 36.5199C20.6569 36.6479 20.9957 36.7117 21.3372 36.7075C22.0056 36.7075 22.5935 36.4727 22.6904 35.9624C22.8018 35.35 21.9375 35.0928 21.1413 34.9826C19.5922 34.7335 18.1978 33.5046 18.5464 31.6552C18.9238 29.6526 20.7081 28.9484 22.5233 28.9484C23.6455 28.9484 24.6954 29.2382 25.5225 30.2834C25.5451 30.3114 25.5616 30.3436 25.5711 30.3781C25.5805 30.4127 25.5827 30.4488 25.5775 30.4842C25.5723 30.5196 25.5598 30.5536 25.5407 30.584C25.5217 30.6144 25.4965 30.6406 25.4669 30.661L24.058 31.6266C24.0095 31.6601 23.9509 31.6766 23.8918 31.6732C23.8327 31.6699 23.7765 31.647 23.7321 31.6082C23.3125 31.2544 22.7816 31.0559 22.2304 31.0469C21.6116 31.0346 21.0712 31.2673 21.0155 31.7654C20.9453 32.3309 21.4486 32.5819 22.2015 32.7453C23.9177 33.0637 25.5927 33.7128 25.1327 36.142C24.7696 38.0486 23.0947 38.9999 20.9598 38.9999C19.8459 38.9999 18.4845 38.4773 17.7006 37.4403C17.6594 37.3867 17.6406 37.3194 17.6483 37.2525C17.656 37.1855 17.6895 37.1241 17.7419 37.081L19.1384 35.9359Z",
              }),
              (0, r.jsx)("path", {
                d: "M28.365 38.8631H26.3951C26.3577 38.8629 26.3208 38.8548 26.2868 38.8393C26.2528 38.8238 26.2226 38.8012 26.1982 38.7732C26.1737 38.7451 26.1557 38.7122 26.1452 38.6767C26.1346 38.6411 26.132 38.6038 26.1373 38.5671L27.445 29.3097C27.4536 29.2476 27.4847 29.1908 27.5325 29.1498C27.5804 29.1089 27.6417 29.0866 27.7049 29.0872H29.6749C29.7122 29.0871 29.7491 29.095 29.783 29.1102C29.817 29.1255 29.8473 29.1479 29.8717 29.1758C29.8962 29.2037 29.9143 29.2364 29.9248 29.2719C29.9353 29.3073 29.938 29.3446 29.9327 29.3811L28.6249 38.6386C28.6169 38.701 28.5859 38.7583 28.538 38.7997C28.4902 38.8411 28.4286 38.8636 28.365 38.8631Z",
              }),
              (0, r.jsx)("path", {
                d: "M37.6597 36.6687C37.6947 36.686 37.7253 36.7107 37.7495 36.7411C37.7736 36.7714 37.7906 36.8068 37.7993 36.8444C37.808 36.8821 37.8081 36.9212 37.7997 36.959C37.7912 36.9967 37.7744 37.0321 37.7505 37.0627C36.5788 38.5671 35.2381 38.9999 34.0623 38.9999C32.1213 38.9999 30.337 37.8813 30.6423 35.6582L31.1167 32.29C31.4241 30.0813 33.5446 28.9484 35.5268 28.9484C36.6799 28.9484 38.0021 29.4097 38.5921 30.9489C38.6178 31.0136 38.6167 31.0858 38.5888 31.1496C38.561 31.2135 38.5088 31.2639 38.4436 31.2898L36.748 31.9308C36.6909 31.9519 36.6281 31.9526 36.5705 31.9329C36.5129 31.9131 36.4641 31.8741 36.4324 31.8226C36.1622 31.4143 35.6485 31.2265 35.1349 31.2265C34.4233 31.2408 33.7137 31.6348 33.6147 32.29L33.1403 35.6664C33.0433 36.3033 33.6559 36.7034 34.3552 36.7034C34.6326 36.7074 34.907 36.6462 35.1559 36.5249C35.4048 36.4035 35.621 36.2254 35.7868 36.0053C35.8226 35.9552 35.8752 35.9192 35.9352 35.9039C35.9953 35.8886 36.0589 35.8948 36.1147 35.9216L37.6597 36.6687Z",
              }),
            ],
          }),
        });
      }
    },
    33848: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("336328"),
        a = n("922047"),
        s = n("262113"),
        o = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...o
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: i,
                className: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.2137 2.00088L2.27111 13.3826C1.9299 13.8168 2.00535 14.4455 2.43963 14.7867C2.61581 14.9251 2.83338 15.0004 3.05744 15.0004H7V21.0004C7 21.5527 7.44772 22.0004 8 22.0004H16C16.5523 22.0004 17 21.5527 17 21.0004V15.0004H20.9425C21.4948 15.0004 21.9425 14.5527 21.9425 14.0004C21.9425 13.7763 21.8673 13.5588 21.7289 13.3826L12.7863 2.00088C12.4451 1.56661 11.8165 1.49116 11.3822 1.83237C11.3195 1.88162 11.2629 1.93819 11.2137 2.00088Z",
              }),
            });
          },
          a.UploadIcon,
          void 0,
          { size: 24 }
        );
    },
    406639: function (e, t, n) {
      "use strict";
      var r, i;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return s;
          },
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return a;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return o;
          },
          MediaLayoutType: function () {
            return r;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return u;
          },
        });
      let a = 550,
        s = 350,
        o = 40;
      ((i = r || (r = {})).STATIC = "STATIC"),
        (i.RESPONSIVE = "RESPONSIVE"),
        (i.MOSAIC = "MOSAIC");
      let u = 20;
    },
    654095: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SuperReactionIcon: function () {
            return s;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("600186"),
        a = n("11768");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              d: "M15.4 1.53A11 11 0 0 0 1.63 15.68c1.4-1.2 3.8-.81 4.54 1.18l.26.7.7.27c2 .73 2.4 3.14 1.19 4.54A11 11 0 0 0 22.47 8.6a2.93 2.93 0 0 1-5.21-.57l-.34-.93a.05.05 0 0 0-.03-.03l-.93-.34a2.93 2.93 0 0 1-.56-5.2ZM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.79.54c.27-.43.02-.95-.43-1.09l-4.06-1.23c-.45-.14-.94.15-.96.66a3.02 3.02 0 0 0 2.05 3.06c1.29.4 2.66-.21 3.4-1.4Z",
              clipRule: "evenodd",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, r.jsx)("path", {
              d: "M19.42 3.88c.24.22.48.46.7.7a4 4 0 0 0-.12.14c-.2-.27-.45-.51-.72-.72l.14-.12Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, r.jsx)("path", {
              d: "M19.09.63a.97.97 0 0 1 1.82 0l.34.93a2 2 0 0 0 1.19 1.19l.93.34a.97.97 0 0 1 0 1.82l-.93.34a2 2 0 0 0-1.19 1.19l-.34.93a.97.97 0 0 1-1.82 0l-.34-.93a2 2 0 0 0-1.19-1.19l-.93-.34a.97.97 0 0 1 0-1.82l.93-.34a2 2 0 0 0 1.19-1.19l.34-.93ZM2.7 17.55a.85.85 0 0 1 1.6 0l.26.71a2 2 0 0 0 1.18 1.18l.7.26a.85.85 0 0 1 0 1.6l-.7.26a2 2 0 0 0-1.18 1.18l-.26.7a.85.85 0 0 1-1.6 0l-.26-.7a2 2 0 0 0-1.18-1.18l-.7-.26a.85.85 0 0 1 0-1.6l.7-.26a2 2 0 0 0 1.18-1.18l.26-.7Z",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
          ],
        });
      };
    },
    646510: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserSquareIcon: function () {
            return s;
          },
        });
      var r = n("735250");
      n("470079");
      var i = n("600186"),
        a = n("11768");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
    53452: function (e, t, n) {
      "use strict";
      var r, i;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return r;
          },
        }),
        ((i = r || (r = {}))[(i.NONE = 100)] = "NONE"),
        (i[(i.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (i[(i.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
    },
  },
]);
//# sourceMappingURL=65877.94b0d19a1731485f80c0.js.map
