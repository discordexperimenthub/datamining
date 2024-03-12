(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36034"],
  {
    406189: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("913144"),
        s = {
          updateChannelDimensions(e, t, l, s, u) {
            n.default.wait(() => {
              n.default.dispatch({
                type: "UPDATE_CHANNEL_DIMENSIONS",
                channelId: e,
                scrollTop: t,
                scrollHeight: l,
                offsetHeight: s,
              }),
                null != u && u();
            });
          },
          updateChannelListScroll(e, t) {
            let l =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            n.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTop: t,
              channelIds: l,
            });
          },
          channelListScrollTo(e, t) {
            n.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTo: t,
              channelIds: [],
            });
          },
          clearChannelListScrollTo(e) {
            n.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTo: null,
              channelIds: [],
            });
          },
          clearChannelDimensions(e, t) {
            this.updateChannelDimensions(e, null, null, null, t);
          },
          updateGuildListScrollTo(e) {
            n.default.dispatch({
              type: "UPDATE_GUILD_LIST_DIMENSIONS",
              scrollTop: e,
            });
          },
        };
    },
    242149: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          QUICKSWITCHER_SHOW: function () {
            return u;
          },
        });
      var n = l("104589"),
        s = l("778588");
      let u = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!s.default.hasLayers() && (0, n.show)(), !1),
      };
    },
    347445: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TOGGLE_HOTKEYS: function () {
            return a;
          },
        });
      var n = l("77078"),
        s = l("244030"),
        u = l("386867");
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, n.hasModalOpen)(u.KEYBOARD_SHORTCUT_MODAL_KEY)
            ? s.hide()
            : s.show(),
          !1
        ),
      };
    },
    856584: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        });
      var n = l("37983"),
        s = l("884691"),
        u = l("77078"),
        a = l("242149"),
        o = l("347445"),
        i = l("476765"),
        c = l("701909"),
        r = l("180748"),
        d = l("49111"),
        _ = l("782340"),
        p = l("162757");
      function T(e) {
        let { transitionState: t, onClose: l } = e,
          T = (0, i.useUID)();
        return (
          s.useEffect(() => {
            r.keyboardNavigationExplainerModalSeen();
          }, []),
          (0, n.jsxs)(u.ModalRoot, {
            transitionState: t,
            role: "alertdialog",
            "aria-labelledby": T,
            children: [
              (0, n.jsxs)(u.ModalContent, {
                className: p.content,
                children: [
                  (0, n.jsx)(u.Heading, {
                    variant: "heading-xl/semibold",
                    id: T,
                    className: p.header,
                    children:
                      _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format(
                        {
                          tab: (e, t) =>
                            (0, n.jsx)(
                              u.KeyCombo,
                              { shortcut: "tab", className: p.headerShortcut },
                              t
                            ),
                        }
                      ),
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      _.default.Messages
                        .KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY,
                  }),
                  (0, n.jsxs)("ul", {
                    className: p.tips,
                    children: [
                      (0, n.jsxs)("li", {
                        children: [
                          (0, n.jsx)(u.KeyCombo, {
                            shortcut: o.TOGGLE_HOTKEYS.binds[0],
                          }),
                          (0, n.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children:
                              _.default.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("li", {
                        children: [
                          (0, n.jsx)(u.KeyCombo, {
                            shortcut: a.QUICKSWITCHER_SHOW.binds[0],
                          }),
                          (0, n.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children:
                              _.default.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format(
                        {
                          link: c.default.getArticleURL(
                            d.HelpdeskArticles.KEYBOARD_NAVIGATION
                          ),
                        }
                      ),
                  }),
                ],
              }),
              (0, n.jsx)(u.ModalFooter, {
                children: (0, n.jsx)(u.Button, {
                  onClick: l,
                  color: u.Button.Colors.BRAND,
                  size: u.Button.Sizes.SMALL,
                  autoFocus: !0,
                  children: _.default.Messages.OKAY,
                }),
              }),
            ],
          })
        );
      }
    },
    244030: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          show: function () {
            return s;
          },
          hide: function () {
            return u;
          },
        });
      var n = l("913144");
      function s() {
        n.default.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function u() {
        n.default.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    386867: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          KEYBOARD_SHORTCUT_MODAL_KEY: function () {
            return n;
          },
        });
      let n = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    104589: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          show: function () {
            return H;
          },
          hide: function () {
            return g;
          },
          search: function () {
            return U;
          },
          selectResult: function () {
            return D;
          },
          switchToResult: function () {
            return b;
          },
        }),
        l("781738"),
        l("222007");
      var n = l("913144"),
        s = l("450911"),
        u = l("255397"),
        a = l("406189"),
        o = l("987317"),
        i = l("123225"),
        c = l("537325"),
        r = l("144491"),
        d = l("239380"),
        _ = l("233069"),
        p = l("42203"),
        T = l("686470"),
        E = l("18494"),
        A = l("162771"),
        C = l("599110"),
        R = l("340454"),
        f = l("116460"),
        h = l("49111"),
        S = l("724210");
      let I = () => Promise.resolve();
      {
        let e = l("780009");
        I = e.playApplication;
      }
      let m = Object.freeze({
          [i.AutocompleterQuerySymbols.USER]: i.AutocompleterResultTypes.USER,
          [i.AutocompleterQuerySymbols.TEXT_CHANNEL]:
            i.AutocompleterResultTypes.TEXT_CHANNEL,
          [i.AutocompleterQuerySymbols.VOICE_CHANNEL]:
            i.AutocompleterResultTypes.VOICE_CHANNEL,
          [i.AutocompleterQuerySymbols.GUILD]: i.AutocompleterResultTypes.GUILD,
          [i.AutocompleterQuerySymbols.APPLICATION]:
            i.AutocompleterResultTypes.APPLICATION,
        }),
        y = new RegExp(
          "^"
            .concat(i.AutocompleterQuerySymbols.USER, "|")
            .concat(i.AutocompleterQuerySymbols.TEXT_CHANNEL, "|")
            .concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\")
            .concat(i.AutocompleterQuerySymbols.GUILD, "|\\")
            .concat(i.AutocompleterQuerySymbols.APPLICATION)
        );
      function N(e) {
        let [t, l] = (function (e) {
          var t;
          let l = e.charAt(0),
            n = null !== (t = m[l]) && void 0 !== t ? t : null;
          return [e.replace(y, ""), n];
        })(e);
        return { query: t, queryMode: l };
      }
      function L(e, t) {
        let {
            results: l,
            queryMode: n,
            query: s,
            maxQueryLength: u,
          } = f.default.getProps(),
          a = A.default.getGuildId(),
          o = E.default.getChannelId(a),
          c =
            l[
              (0, i.findNextSelectedResult)(i.FindResultDirections.DOWN, -1, l)
            ],
          r = R.default.isEmail(s),
          d = R.default.isPhoneNumber(s),
          T = R.default.isUserTagLike(s),
          h = null != o && (0, S.isStaticChannelRoute)(o),
          I = {
            current_channel_id: h ? void 0 : o,
            current_channel_static_route: h ? o : void 0,
            current_guild_id: a,
            query_mode: null != n ? n : "GENERAL",
            query_length: s.length,
            max_query_length: u,
            is_email_like: r,
            is_phone_like: d,
            is_username_like: T,
            query: r || d || T ? null : s,
            top_result_type: null != c ? c.type : null,
            top_result_score: null != c ? c.score : null,
            num_results_total: f.default.getResultTotals(),
            num_results_users: f.default.getResultTotals(
              i.AutocompleterResultTypes.USER
            ),
            num_results_text_channels: f.default.getResultTotals(
              i.AutocompleterResultTypes.TEXT_CHANNEL
            ),
            num_results_voice_channels: f.default.getResultTotals(
              i.AutocompleterResultTypes.VOICE_CHANNEL
            ),
            num_results_guilds: f.default.getResultTotals(
              i.AutocompleterResultTypes.GUILD
            ),
            num_results_group_dms: f.default.getResultTotals(
              i.AutocompleterResultTypes.GROUP_DM
            ),
          };
        if (null != o) {
          let e = p.default.getChannel(o);
          I.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: n, record: s } = t;
          switch (
            ((I.selected_type = e),
            (I.selected_score = n),
            (I.selected_index = l.indexOf(t)),
            e)
          ) {
            case i.AutocompleterResultTypes.GUILD:
              I.selected_guild_id = s.id;
              break;
            case i.AutocompleterResultTypes.TEXT_CHANNEL:
            case i.AutocompleterResultTypes.VOICE_CHANNEL:
              s instanceof _.ChannelRecordBase &&
                (I.selected_guild_id = null != s.guild_id ? s.guild_id : null),
                (I.selected_channel_id = s.id);
              break;
            case i.AutocompleterResultTypes.GROUP_DM:
              I.selected_channel_id = s.id;
              break;
            case i.AutocompleterResultTypes.USER:
              I.selected_user_id = s.id;
          }
        }
        C.default.track(e, I);
      }
      function O() {
        n.default.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function H() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (f.default.isOpen()) return;
          let l = A.default.getGuildId(),
            n = E.default.getChannelId(l);
          if (null != n) {
            let e = p.default.getChannel(n);
            t = null != e ? e.type : null;
          }
          C.default.track(h.AnalyticEvents.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: l,
            current_channel_id: n,
            current_channel_type: t,
          });
        })(e),
          n.default.dispatch({ type: "QUICKSWITCHER_SHOW", ...N(t) });
      }
      function g() {
        L(h.AnalyticEvents.QUICKSWITCHER_CLOSED), O();
      }
      function U(e) {
        n.default.dispatch({ type: "QUICKSWITCHER_SEARCH", ...N(e) });
      }
      function D(e) {
        n.default.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function b(e) {
        let t,
          l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        O(), L(h.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: _, record: E } = e,
          A = { page: h.AnalyticsPages.QUICK_SWITCHER };
        switch (_) {
          case i.AutocompleterResultTypes.GUILD:
            (0, d.transitionToGuild)(E.id, { navigationReplace: !0 });
            break;
          case i.AutocompleterResultTypes.TEXT_CHANNEL:
            null != (t = p.default.getChannel(E.id)) &&
              (0, r.transitionToChannel)(t.id, {
                state: { analyticsSource: A },
                navigationReplace: !0,
              });
            break;
          case i.AutocompleterResultTypes.VOICE_CHANNEL:
            null != (t = p.default.getChannel(E.id)) &&
              (l
                ? u.default.updateChatOpen(E.id, !0)
                : o.default.selectVoiceChannel(E.id),
              (0, r.transitionToChannel)(t.id, {
                state: { analyticsSource: A },
                navigationReplace: !0,
              }));
            break;
          case i.AutocompleterResultTypes.USER:
            s.default.openPrivateChannel([E.id], !1, !1, "Quickswitcher"),
              a.default.channelListScrollTo(
                h.ME,
                p.default.getDMFromUserId(E.id)
              );
            break;
          case i.AutocompleterResultTypes.GROUP_DM:
            (0, r.transitionToChannel)(E.id, { navigationReplace: !0 }),
              a.default.channelListScrollTo(h.ME, E.id);
            break;
          case i.AutocompleterResultTypes.APPLICATION:
            let C = T.default.getActiveLibraryApplication(E.id);
            I(E.id, C, {
              analyticsParams: {
                source: h.AnalyticsLocations.QUICK_SWITCHER,
                location: h.AnalyticsLocations.QUICK_SWITCHER,
              },
            });
            break;
          case i.AutocompleterResultTypes.LINK:
            (0, c.default)(E.path, { navigationReplace: !0 });
        }
        n.default.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
  },
]);
//# sourceMappingURL=508c031e5540fd7e5144.js.map
