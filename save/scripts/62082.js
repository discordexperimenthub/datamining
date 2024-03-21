(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62082"],
  {
    150021: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          setDiversityColor: function () {
            return I;
          },
          fetchEmoji: function () {
            return y;
          },
          uploadEmoji: function () {
            return T;
          },
          deleteEmoji: function () {
            return k;
          },
          updateEmoji: function () {
            return C;
          },
          favoriteEmoji: function () {
            return M;
          },
          unfavoriteEmoji: function () {
            return v;
          },
        }),
        i("424973");
      var r = i("917351"),
        n = i.n(r),
        s = i("872717"),
        a = i("750028"),
        o = i("913144"),
        u = i("599417"),
        c = i("385976"),
        l = i("867805"),
        d = i("619443"),
        E = i("872173"),
        _ = i("341542"),
        f = i("404118"),
        S = i("49111"),
        p = i("397336"),
        m = i("782340");
      function I(e) {
        E.PreloadedUserSettingsActionCreators.updateAsync(
          "textAndImages",
          t => {
            (t.diversitySurrogate = a.StringValue.create()),
              (t.diversitySurrogate.value = e);
          },
          p.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function y(e) {
        o.default.dispatch({ type: "EMOJI_FETCH", guildId: e }),
          s.HTTP.get({
            url: S.Endpoints.GUILD_EMOJIS(e),
            oldFormErrors: !0,
          }).then(
            t =>
              o.default.dispatch({
                type: "EMOJI_FETCH_SUCCESS",
                guildId: e,
                emojis: t.body,
              }),
            () =>
              o.default.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e })
          );
      }
      function T(e) {
        let { guildId: t, image: i, name: r, roles: n } = e;
        return (
          o.default.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
          s.HTTP.post({
            url: S.Endpoints.GUILD_EMOJIS(t),
            body: { image: i, name: r, roles: n },
            oldFormErrors: !0,
          }).then(
            () => o.default.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }),
            e => (
              o.default.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }),
              Promise.reject(e)
            )
          )
        );
      }
      function k(e, t) {
        return (
          o.default.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
          s.HTTP.del({ url: S.Endpoints.GUILD_EMOJI(e, t), oldFormErrors: !0 })
        );
      }
      async function C(e) {
        let { guildId: t, emojiId: i, name: r, roles: n } = e;
        try {
          return await s.HTTP.patch({
            url: S.Endpoints.GUILD_EMOJI(t, i),
            body: { name: r, roles: n },
            oldFormErrors: !0,
          });
        } catch (e) {
          throw new u.default(e);
        }
      }
      function A(e) {
        return _.default.totalUnavailableGuilds > 0 || !d.default.isConnected()
          ? e
          : e.filter(e => {
              var t;
              let i =
                null !== (t = c.default.getCustomEmojiById(e)) && void 0 !== t
                  ? t
                  : l.default.getByName(e);
              return null != i;
            });
      }
      function M(e) {
        var t;
        (function (e) {
          null != e &&
            E.FrecencyUserSettingsActionCreators.updateAsync(
              "favoriteEmojis",
              t =>
                ((t.emojis = A(t.emojis)), n.size(t.emojis) >= p.MAX_FAVORITES)
                  ? (f.default.show({
                      title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                      body: m.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format(
                        { count: p.MAX_FAVORITES }
                      ),
                    }),
                    !1)
                  : !t.emojis.includes(e) && void t.emojis.push(e),
              p.UserSettingsDelay.INFREQUENT_USER_ACTION
            );
        })(null !== (t = e.id) && void 0 !== t ? t : e.name);
      }
      function v(e) {
        var t;
        (function (e) {
          null != e &&
            E.FrecencyUserSettingsActionCreators.updateAsync(
              "favoriteEmojis",
              t => {
                if (!t.emojis.includes(e)) return !1;
                (t.emojis = t.emojis.filter(t => e !== t)),
                  (t.emojis = A(t.emojis));
              },
              p.UserSettingsDelay.INFREQUENT_USER_ACTION
            );
        })(null !== (t = e.id) && void 0 !== t ? t : e.name);
      }
    },
    367343: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var r = i("37983");
      i("884691");
      var n = i("77078"),
        s = i("272030"),
        a = i("702495"),
        o = i("782340");
      function u(e) {
        let { target: t, onSelect: i } = e,
          u = (0, a.default)({
            type: t.getAttribute("data-type"),
            id: t.getAttribute("data-id"),
            name: t.getAttribute("data-name"),
            isInExpressionPicker: !0,
          });
        return (0, r.jsx)(n.Menu, {
          navId: "expression-picker",
          onClose: s.closeContextMenu,
          "aria-label": o.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
          onSelect: i,
          className: "context-menu",
          children: (0, r.jsx)(n.MenuGroup, { children: u }),
        });
      }
    },
    702495: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return k;
          },
        }),
        i("781738");
      var r = i("37983"),
        n = i("884691"),
        s = i("446674"),
        a = i("77078"),
        o = i("150021"),
        u = i("997289"),
        c = i("788506"),
        l = i("385976"),
        d = i("867805"),
        E = i("246511"),
        _ = i("467094"),
        f = i("178207"),
        S = i("256860"),
        p = i("364685"),
        m = i("24373"),
        I = i("49111"),
        y = i("782340");
      function T(e) {
        return d.default.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function k(e) {
        let { type: t, id: i, name: k, isInExpressionPicker: C = !1 } = e,
          { location: A } = (0, u.useAnalyticsContext)(),
          M = n.useMemo(
            () => ({
              ...A,
              section: C
                ? I.AnalyticsSections.EXPRESSION_PICKER
                : I.AnalyticsSections.CONTEXT_MENU,
            }),
            [A, C]
          ),
          v = (0, S.useFavoriteStickerIds)(),
          h = (0, s.useStateFromStores)([p.default], () =>
            t === E.PickerContextMenuDataTypes.STICKER && null != i
              ? p.default.getStickerById(i)
              : null
          ),
          g = null != h && v.includes(h.id),
          R = (0, s.useStateFromStores)([l.default], () => {
            if (t === E.PickerContextMenuDataTypes.EMOJI) {
              if (null != i)
                return l.default.getDisambiguatedEmojiContext().getById(i);
              if (null != k) {
                var e;
                return null !== (e = T(k)) && void 0 !== e
                  ? e
                  : T(d.default.convertSurrogateToName(k));
              }
            }
          }),
          O = (0, c.useIsFavoriteEmoji)(null, R);
        if (null != h && t === E.PickerContextMenuDataTypes.STICKER)
          return (0, m.isGuildSticker)(h) && !(0, m.isAvailableGuildSticker)(h)
            ? null
            : g
              ? (0, r.jsx)(a.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, _.unfavoriteSticker)(h.id),
                  label: y.default.Messages.UNFAVORITE_ITEM,
                })
              : (0, r.jsx)(a.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, f.trackStickerFavorited)({
                      sticker: h,
                      location: { ...M, object: I.AnalyticsObjects.STICKER },
                    }),
                      (0, _.favoriteSticker)(null == h ? void 0 : h.id);
                  },
                  label: y.default.Messages.FAVORITE_ITEM,
                });
        if (null != R && t === E.PickerContextMenuDataTypes.EMOJI)
          return O
            ? (0, r.jsx)(a.MenuItem, {
                id: "unfavorite",
                action: () => (0, o.unfavoriteEmoji)(R),
                label: y.default.Messages.UNFAVORITE_ITEM,
              })
            : (0, r.jsx)(a.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, c.trackEmojiFavorited)({
                    emoji: R,
                    location: { ...M, object: I.AnalyticsObjects.EMOJI },
                  }),
                    (0, o.favoriteEmoji)(R);
                },
                label: y.default.Messages.FAVORITE_ITEM,
              });
      }
    },
    178207: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          trackStickerPickerOpen: function () {
            return c;
          },
          trackStickerFavorited: function () {
            return l;
          },
          trackStickerSearchStart: function () {
            return d;
          },
          trackStickerSearchResultsViewed: function () {
            return E;
          },
          trackStickerSearchSelect: function () {
            return _;
          },
          trackStickerSelect: function () {
            return f;
          },
          trackStickerSearchEmpty: function () {
            return S;
          },
        });
      var r = i("716241"),
        n = i("599110"),
        s = i("161585"),
        a = i("49111"),
        o = i("13030"),
        u = i("646718");
      let c = e => {
          let {
            containerWidth: t,
            favoriteStickers: i,
            frequentlyUsedStickers: n,
            guildStickers: u,
            stickersTotal: c,
          } = e;
          r.default.trackWithMetadata(
            a.AnalyticEvents.EXPRESSION_PICKER_OPENED,
            {
              width: t,
              tab: o.ExpressionPickerViewType.STICKER,
              badged: !1,
              num_expressions_favorites: i.length,
              num_animated_expressions_favorites: i.filter(e =>
                (0, s.isAnimatedSticker)(e.format_type)
              ).length,
              num_custom_expressions_favorites: i.filter(e =>
                (0, s.isCustomSticker)(e.type)
              ).length,
              num_standard_expressions_favorites: i.filter(
                e => !(0, s.isCustomSticker)(e.type)
              ).length,
              num_expressions_frecent: n.length,
              num_custom_expressions_frecent: n.filter(e =>
                (0, s.isCustomSticker)(e.type)
              ).length,
              num_animated_expressions_frecent: n.filter(e =>
                (0, s.isAnimatedSticker)(e.format_type)
              ).length,
              num_standard_expressions_frecent: n.filter(
                e => !(0, s.isCustomSticker)(e.type)
              ).length,
              num_current_guild_expressions: u.length,
              num_custom_expressions_total: c,
            }
          );
        },
        l = e => {
          let t,
            { sticker: i, location: n } = e;
          i.type === s.MetaStickerType.GUILD && (t = i.guild_id),
            r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_FAVORITED, {
              location: n,
              expression_type: o.ExpressionPickerViewType.STICKER,
              expression_id: i.id,
              expression_name: i.name,
              expression_guild_id: t,
              is_animated: (0, s.isAnimatedSticker)(i.format_type),
              is_custom: (0, s.isCustomSticker)(i.type),
            });
        },
        d = () => {
          n.default.track(a.AnalyticEvents.SEARCH_STARTED, {
            search_type: a.SearchTypes.STICKER,
          });
        },
        E = (e, t, i) => {
          r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            search_type: a.SearchTypes.STICKER,
            total_results: t,
            query: e,
            is_suggestion: i,
          });
        },
        _ = (e, t, i) => {
          let n;
          let { sticker: o } = e;
          o.type === s.MetaStickerType.GUILD && (n = o.guild_id),
            r.default.trackWithMetadata(
              a.AnalyticEvents.SEARCH_RESULT_SELECTED,
              {
                load_id: o.id,
                search_type: a.SearchTypes.STICKER,
                source_object: "Sticker Picker",
                total_results: i,
                expression_guild_id: n,
                sticker_id: o.id,
                query: t,
              }
            );
        },
        f = e => {
          let t;
          let { sticker: i, category: n } = e;
          i.type === s.MetaStickerType.GUILD && (t = i.guild_id),
            r.default.trackWithMetadata(
              a.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED,
              {
                type: u.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: i.id,
                expression_name: i.name,
                expression_picker_section: n,
                expression_guild_id: t,
                is_animated: (0, s.isAnimatedSticker)(i.format_type),
                is_custom: (0, s.isCustomSticker)(i.type),
              }
            );
        },
        S = e => {
          null != e &&
            "" !== e &&
            r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_EMPTY, {
              query: e,
              search_type: a.SearchTypes.STICKER,
              source_object: "Sticker Picker",
            });
        };
    },
  },
]);
//# sourceMappingURL=7057669e16257b08aa1a.js.map
