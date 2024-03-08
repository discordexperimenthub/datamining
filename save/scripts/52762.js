(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52762"],
  {
    202909: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("804830");
      n.es(r, t);
    },
    200008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addFavoriteChannel: function () {
            return f;
          },
          removeFavoriteChannel: function () {
            return v;
          },
          setFavoriteChannelNickname: function () {
            return C;
          },
          addFavoriteCategory: function () {
            return h;
          },
          removeFavoriteCategory: function () {
            return m;
          },
          updateFavoriteChannels: function () {
            return p;
          },
          updateFavoriteChannelParent: function () {
            return g;
          },
          toggleFavoriteServerMuted: function () {
            return S;
          },
        }),
        n("222007");
      var r = n("151426"),
        a = n("872173"),
        i = n("42203"),
        l = n("957255"),
        o = n("299039"),
        s = n("379881"),
        u = n("843455");
      function d() {
        let e = s.default.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function c(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === r.FavoriteChannelType.CATEGORY) continue;
          let a = i.default.getChannel(t);
          if (
            null == a ||
            (!a.isPrivate() && !l.default.can(u.Permissions.VIEW_CHANNEL, a))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function f(e, t) {
        let n = s.default.isFavorite(e);
        !n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = r.FavoriteChannel.create({
                nickname: "",
                type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            a.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function v(e) {
        let t = s.default.getFavorite(e);
        null != t &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              if (
                (delete n.favoriteChannels[e],
                t.type === r.FavoriteChannelType.CATEGORY)
              )
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function C(e, t) {
        let n = s.default.isFavorite(e);
        n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function h(e) {
        let t = o.default.fromTimestamp(Date.now());
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = r.FavoriteChannel.create({
              nickname: e,
              type: r.FavoriteChannelType.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function m(e) {
        v(e);
      }
      function p(e) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let r of e)
              if (
                (null != r.position &&
                  (t.favoriteChannels[r.id].position = r.position),
                void 0 !== r.parent_id)
              ) {
                var n;
                t.favoriteChannels[r.id].parentId =
                  null !== (n = r.parent_id) && void 0 !== n ? n : "0";
              }
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g(e, t) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function S() {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          a.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    986373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanFavoriteChannel: function () {
            return v;
          },
          useFavorite: function () {
            return C;
          },
          useFavoritesCategories: function () {
            return h;
          },
          useFavoritesGuildSelected: function () {
            return m;
          },
          useFavoriteAdded: function () {
            return p;
          },
        }),
        n("222007"),
        n("424973");
      var r = n("884691"),
        a = n("298386"),
        i = n("446674");
      n("42203");
      var l = n("923959"),
        o = n("162771"),
        s = n("697218");
      n("299039");
      var u = n("379881"),
        d = n("498139"),
        c = n("136569"),
        f = n("49111");
      function v(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0,
          d.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          r = (0, i.useStateFromStores)([u.default], () =>
            u.default.isFavorite(e.id)
          ),
          a = (0, i.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          ),
          l = e.isDM() || e.isThread(),
          o = !l || (n && (null == a ? void 0 : a.isStaff()) === !0);
        return t && !__OVERLAY__ && !r && o;
      }
      function C(e) {
        let t = (0, i.useStateFromStores)([u.default], () =>
          u.default.getFavorite(e)
        );
        return t;
      }
      function h() {
        let e = (0, i.useStateFromStores)([l.default], () =>
          l.default.getChannels(f.FAVORITES)
        )[a.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function m() {
        let e = (0, i.useStateFromStores)([o.default], () =>
          o.default.getGuildId()
        );
        return e === f.FAVORITES;
      }
      function p() {
        let { isFavoritesPerk: e } = (0, d.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, c.useFavoritesTooltipStore)(),
          n = r.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          a = r.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: a,
        };
      }
    },
    136569: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesTooltipStore: function () {
            return a;
          },
        });
      var r = n("308503");
      let a = (0, r.default)(e => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => e({ favoriteAdded: !0 }),
        clearFavoriteAdded: () => e({ favoriteAdded: !1 }),
      }));
    },
    514525: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("424973"),
        n("222007");
      var r = n("233069");
      function a(e) {
        let t = [];
        for (let n = 0; n < e._categories.length; n++) {
          let a = e._categories[n].channel,
            i = e[a.id]
              .map(e => e.channel)
              .filter(e => r.GUILD_FAVORITES_CHANNEL_TYPES.has(e.type)),
            l = null == i || 0 === i.length;
          if (l) continue;
          let o = "null" === a.id;
          for (let e of (!o && t.push(a), i)) t.push(e);
        }
        return t;
      }
    },
    746039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var r = n("37983"),
        a = n("884691"),
        i = n("298386"),
        l = n("446674"),
        o = n("77078"),
        s = n("419830"),
        u = n("185153"),
        d = n("245997"),
        c = n("677099"),
        f = n("282109"),
        v = n("200008"),
        C = n("986373"),
        h = n("514525"),
        m = n("782340"),
        p = n("590232");
      function g(e) {
        let { transitionState: t, onClose: n, parentId: i } = e,
          s = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getFlattenedGuildIds()[0]
          ),
          [d, f] = a.useState(s),
          [v, C] = a.useState(!1);
        return (0, r.jsxs)(o.ModalRoot, {
          transitionState: t,
          children: [
            (0, r.jsxs)(o.ModalHeader, {
              className: p.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: p.modalHeaderTitle,
                  children: [
                    (0, r.jsx)(o.Heading, {
                      variant: "text-lg/semibold",
                      children: m.default.Messages.FAVORITE_CHANNEL,
                    }),
                    (0, r.jsx)(o.ModalCloseButton, { onClick: n }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: p.guildSelector,
                  children: (0, r.jsx)(u.GuildSelector, {
                    guildId: d,
                    onChange: function (e) {
                      null != e && f(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, r.jsx)(o.ModalContent, {
              className: p.modalContent,
              children: (0, r.jsx)(S, {
                guildId: d,
                hideMutedChannels: v,
                parentId: i,
              }),
            }),
            (0, r.jsxs)(o.ModalFooter, {
              className: p.modalFooter,
              children: [
                (0, r.jsx)(o.Button, {
                  className: p.goBackButton,
                  look: o.ButtonLooks.BLANK,
                  color: o.ButtonColors.PRIMARY,
                  size: o.ButtonSizes.SMALL,
                  onClick: n,
                  children: m.default.Messages.GO_BACK,
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(o.Checkbox, {
                    type: o.Checkbox.Types.INVERTED,
                    value: v,
                    onChange: (e, t) => C(t),
                    children: (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: m.default.Messages.HIDE_MUTED_CHANNELS,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        let { guildId: t, hideMutedChannels: n, parentId: o } = e,
          s = (0, l.useStateFromStores)([d.default], () =>
            d.default.getCategories(t)
          ),
          u = (0, h.default)(s),
          c = a.useRef(null);
        return (
          a.useEffect(() => {
            var e;
            null == c ||
              null === (e = c.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [t]),
          (0, r.jsx)("div", {
            ref: c,
            children: u.map(e =>
              e.type === i.ChannelTypes.GUILD_CATEGORY
                ? (0, r.jsx)(x, { name: e.name }, e.id)
                : (0, r.jsx)(
                    F,
                    { channel: e, hideMutedChannels: n, parentId: o },
                    e.id
                  )
            ),
          })
        );
      }
      function x(e) {
        let { name: t } = e;
        return (0, r.jsx)(o.Text, {
          className: p.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: t,
        });
      }
      function F(e) {
        let { channel: t, hideMutedChannels: n, parentId: a } = e,
          i = (0, C.useFavorite)(t.id),
          u = (0, l.useStateFromStores)([f.default], () =>
            f.default.isChannelMuted(t.guild_id, t.id)
          );
        if (u && n) return null;
        let d = (0, s.getChannelIconComponent)(t);
        return (0, r.jsxs)(
          "div",
          {
            className: p.channelRow,
            children: [
              (0, r.jsxs)("div", {
                className: p.channelName,
                children: [
                  null != d &&
                    (0, r.jsx)("div", {
                      className: p.channelIconContainer,
                      children: (0, r.jsx)(d, {
                        className: p.channelIcon,
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: t.name,
                  }),
                ],
              }),
              null != i
                ? (0, r.jsx)(I, { channelId: t.id })
                : (0, r.jsx)(N, { channelId: t.id, parentId: a }),
            ],
          },
          t.id
        );
      }
      function N(e) {
        let { channelId: t, parentId: n } = e;
        return (0, r.jsx)(o.Button, {
          look: o.ButtonLooks.OUTLINED,
          size: o.ButtonSizes.SMALL,
          color: o.ButtonColors.BRAND,
          onClick: function () {
            (0, v.addFavoriteChannel)(t, n);
          },
          children: m.default.Messages.ADD,
        });
      }
      function I(e) {
        let { channelId: t } = e;
        return (0, r.jsx)(o.Button, {
          look: o.ButtonLooks.FILLED,
          size: o.ButtonSizes.SMALL,
          color: o.ButtonColors.PRIMARY,
          onClick: function () {
            (0, v.removeFavoriteChannel)(t);
          },
          children: m.default.Messages.REMOVE,
        });
      }
    },
    185153: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
          GuildSelector: function () {
            return g;
          },
        }),
        n("843762");
      var r = n("37983"),
        a = n("884691"),
        i = n("414456"),
        l = n.n(i),
        o = n("446674"),
        s = n("77078"),
        u = n("570697"),
        d = n("305961"),
        c = n("677099"),
        f = n("476263"),
        v = n("449008"),
        C = n("424562"),
        h = n("782340"),
        m = n("714423");
      function p(e) {
        let {
          guildId: t,
          className: n,
          globalOption: a,
          hideDivider: i = !1,
          onChange: o,
          renderOptionSuffix: s,
        } = e;
        return (0, r.jsx)(u.default, {
          className: l(m.section, n),
          title: h.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
          hideDivider: i,
          forcedDivider: !0,
          children: (0, r.jsx)(g, {
            guildId: t,
            onChange: o,
            renderOptionSuffix: s,
            globalOption: a,
          }),
        });
      }
      function g(e) {
        let {
            guildId: t,
            globalOption: n,
            onChange: i,
            renderOptionSuffix: l,
          } = e,
          u = (0, o.useStateFromStores)([C.default], () =>
            C.default.showNotice()
          ),
          p = (0, o.useStateFromStores)([c.default], () =>
            c.default.getFlattenedGuildIds()
          ),
          g = (0, o.useStateFromStores)([d.default], () =>
            d.default.getGuilds()
          ),
          S = a.useMemo(() => {
            let e = p
              .map(e => {
                let t = g[e];
                return null == t ? null : { label: t.name, value: t.id };
              })
              .filter(v.isNotNullish);
            return null != n && e.unshift(n), e;
          }, [p, g, n]),
          x = a.useCallback(
            e => {
              let t =
                (null == e ? void 0 : e.label) ===
                  (null == n ? void 0 : n.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == n ? void 0 : n.value);
              return null == e || "" === e.value || t
                ? null
                : (0, r.jsx)(f.default, {
                    className: m.guildSelectOptionIcon,
                    guild: g[e.value],
                    size: f.default.Sizes.SMOL,
                    active: !0,
                  });
            },
            [g, n]
          );
        return (0, r.jsx)(s.SearchableSelect, {
          isDisabled: u,
          onChange: e => {
            if ("" === e || e === (null == n ? void 0 : n.value)) {
              i(null);
              return;
            }
            let t = g[e];
            null != t && i(t);
          },
          value: t,
          options: S,
          renderOptionPrefix: x,
          renderOptionSuffix: l,
          placeholder:
            h.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    891653: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        o = n("216422"),
        s = n("782340"),
        u = n("321562");
      function d(e) {
        let {
          text: t = s.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
          className: n,
        } = e;
        return (0, r.jsx)(l.Tooltip, {
          text: t,
          children: e =>
            (0, r.jsx)(l.Clickable, {
              ...e,
              children: (0, r.jsx)(o.default, {
                className: i(u.nitroWheel, n),
              }),
            }),
        });
      }
    },
    570697: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("781738");
      var r = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        o = n("254490"),
        s = n("891653"),
        u = n("632892"),
        d = n("881049");
      function c(e) {
        let { errors: t } = e;
        return (0, r.jsx)(r.Fragment, {
          children: t.map((e, t) =>
            (0, r.jsx)(
              l.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: d.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, e => {
                  let t = 1024 * parseInt(e, 10);
                  return isNaN(t) ? e : (0, o.sizeString)(t);
                }),
              },
              t
            )
          ),
        });
      }
      function f(e) {
        let {
          title: t,
          titleIcon: n,
          titleId: a,
          description: o,
          children: f,
          className: v,
          errors: C,
          disabled: h = !1,
          hideDivider: m = !1,
          showBorder: p = !1,
          borderType: g,
          hasBackground: S = !1,
          forcedDivider: x = !1,
          showPremiumIcon: F = !1,
        } = e;
        return (0, r.jsx)("div", {
          className: i(d.customizationSection, v, {
            [d.disabled]: h,
            [d.hideDivider]: m,
            [d.showBorder]: p,
            [d.withDivider]: x,
          }),
          children: (0, r.jsxs)(u.default, {
            className: d.customizationSectionBorder,
            backgroundClassName: d.customizationSectionBackground,
            isShown: p,
            type: g,
            hasBackground: S,
            children: [
              (0, r.jsxs)(l.FormTitle, {
                className: d.title,
                id: a,
                children: [t, F && (0, r.jsx)(s.default, {}), n],
              }),
              null != o
                ? (0, r.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: d.sectionDescription,
                    children: o,
                  })
                : null,
              f,
              null != C && (0, r.jsx)(c, { errors: C }),
            ],
          }),
        });
      }
    },
    632892: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FeatureBorderTypes: function () {
            return a;
          },
          default: function () {
            return c;
          },
        });
      var r,
        a,
        i = n("37983"),
        l = n("884691"),
        o = n("414456"),
        s = n.n(o),
        u = n("834832");
      ((r = a || (a = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let d = {
        premium: {
          border: u.premiumFeatureBorder,
          background: u.premiumBackground,
        },
        limited: {
          border: u.limitedFeatureBorder,
          background: u.limitedBackground,
        },
      };
      var c = l.forwardRef(function (e, t) {
        let {
          children: n,
          type: r = "premium",
          isShown: a,
          hasBackground: l = !1,
          className: o,
          backgroundClassName: c,
        } = e;
        if (!a) return (0, i.jsx)(i.Fragment, { children: n });
        let { border: f, background: v } = d[r];
        return (0, i.jsx)("div", {
          ref: t,
          className: s(f, o),
          children: (0, i.jsx)("div", {
            className: s(l ? v : u.background, c),
            children: n,
          }),
        });
      });
    },
    216422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("202909"),
        l = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              viewBox: i = "0 0 24 24",
              foreground: o,
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: i,
              children: (0, r.jsx)("path", {
                className: o,
                fill: a,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          i.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    619911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("125094"),
        l = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: i,
              ...o
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", {
                  d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                  className: i,
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                  className: i,
                  fill: a,
                }),
              ],
            });
          },
          i.ScreenArrowIcon,
          void 0,
          { size: 24 }
        );
    },
    804830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NitroWheelIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...s
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=5115a45fb8bb2fca8ef5.js.map
