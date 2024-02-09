(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69875"],
  {
    777483: function (e, t, n) {
      var l = {
        "./icon-file-acrobat.svg": "668973",
        "./icon-file-ae.svg": "124036",
        "./icon-file-ai.svg": "721569",
        "./icon-file-archive.svg": "644286",
        "./icon-file-audio.svg": "597346",
        "./icon-file-code.svg": "380499",
        "./icon-file-document.svg": "50617",
        "./icon-file-image.svg": "972094",
        "./icon-file-ps.svg": "92729",
        "./icon-file-sketch.svg": "335000",
        "./icon-file-spreadsheet.svg": "302872",
        "./icon-file-unknown.svg": "425914",
        "./icon-file-video.svg": "272477",
        "./icon-file-webcode.svg": "164059",
      };
      function a(e) {
        return n(s(e));
      }
      function s(e) {
        if (!n.o(l, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return l[e];
      }
      (a.id = '"777483"'),
        (a.keys = function () {
          return Object.keys(l);
        }),
        (a.resolve = s),
        (e.exports = a);
    },
    447341: function (e, t, n) {
      "use strict";
      e.exports =
        "data:image/svg+xml;utf8,%3Csvg%20width%3D%22256%22%20height%3D%2278%22%20viewBox%3D%2232%2024%20256%2078%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M36%2024C33.7909%2024%2032%2025.7909%2032%2028V78C32%2080.2091%2033.7909%2082%2036%2082H86C88.2091%2082%2090%2080.2091%2090%2078V28C90%2025.7909%2088.2091%2024%2086%2024H36ZM110%2024C107.791%2024%20106%2025.7909%20106%2028V38C106%2040.2091%20107.791%2042%20110%2042H179C181.209%2042%20183%2040.2091%20183%2038V28C183%2025.7909%20181.209%2024%20179%2024H110ZM106%2058C106%2055.7909%20107.791%2054%20110%2054H284C286.209%2054%20288%2055.7909%20288%2058V68C288%2070.2091%20286.209%2072%20284%2072H110C107.791%2072%20106%2070.2091%20106%2068V58ZM110%2084C107.791%2084%20106%2085.7909%20106%2088V98C106%20100.209%20107.791%20102%20110%20102H223C225.209%20102%20227%20100.209%20227%2098V88C227%2085.7909%20225.209%2084%20223%2084H110Z%22%20fill%3D%22%23000000%22%20%2F%3E%3C%2Fsvg%3E";
    },
    32974: function (e, t, n) {
      "use strict";
      e.exports = n.p + "72b9b5356f57edb2ba51.svg";
    },
    850268: function (e, t, n) {
      "use strict";
      e.exports = n.p + "660de41d05e820cd186e.svg";
    },
    817480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("118810"),
        i = n("77078"),
        r = n("244201"),
        o = n("952368"),
        u = n("924444"),
        d = n("103603"),
        c = n("866190"),
        m = n("782340"),
        f = n("842992");
      let h = "Zoomed Lazy Image Modal";
      class p extends a.PureComponent {
        render() {
          let { appContext: e, isWindowFocused: t, ...n } = this.props;
          return (0, l.jsx)(o.default, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t,
          });
        }
        constructor(...e) {
          super(...e),
            (this.onMouseEnter = (e, t) => {
              let { preloadImage: n } = t,
                { width: l, height: a } = this.props;
              n((0, d.zoomFit)(l, a));
            }),
            (this.modalContext = (0, i.modalContextFromAppContext)(
              this.props.appContext
            )),
            (this.onCloseImage = () => {
              (0, i.closeModal)(h, this.modalContext);
            }),
            (this.onZoom = (e, t) => {
              let { zoomThumbnailPlaceholder: n } = t;
              e.preventDefault();
              let {
                  alt: a,
                  src: r,
                  original: o,
                  width: d,
                  height: c,
                  animated: p,
                  children: g,
                  renderLinkComponent: E,
                  isWindowFocused: C,
                  shouldHideMediaOptions: v = !1,
                } = this.props,
                I = {
                  alt: a,
                  src: r,
                  original: null != o ? o : r,
                  width: d,
                  height: c,
                  animated: p,
                  children: g,
                  zoomThumbnailPlaceholder: n,
                  renderLinkComponent: E,
                  onContextMenu: v
                    ? e => {
                        e.stopPropagation(), e.preventDefault();
                      }
                    : void 0,
                };
              (0, s.isElement)(e.currentTarget) && e.currentTarget.blur(),
                (0, i.openModal)(
                  e =>
                    (0, l.jsx)(i.ModalRoot, {
                      className: f.modal,
                      ...e,
                      size: i.ModalSize.DYNAMIC,
                      "aria-label": m.default.Messages.IMAGE,
                      children: (0, l.jsx)(u.ImageModal, {
                        ...I,
                        className: f.image,
                        shouldAnimate: C,
                        onClose: this.onCloseImage,
                        shouldHideMediaOptions: v,
                      }),
                    }),
                  { modalKey: h },
                  this.modalContext
                );
            });
        }
      }
      function g(e) {
        let t = (0, r.useAppContext)(),
          n = (0, c.useIsWindowFocused)();
        return (0, l.jsx)(p, { ...e, isWindowFocused: n, appContext: t });
      }
      p.defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    },
    86621: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("599110");
      function i(e) {
        var t;
        let n = a.forwardRef((t, n) =>
          (0, l.jsx)(s.AnalyticsContext.Consumer, {
            children: a => (0, l.jsx)(e, { ...t, ref: n, analyticsContext: a }),
          })
        );
        return (
          (n.displayName = "withAnalyticsContext(".concat(
            null !== (t = e.displayName) && void 0 !== t ? t : e.name,
            ")"
          )),
          n
        );
      }
    },
    943325: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("532340");
      n.es(l, t);
    },
    641531: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("250573");
      n.es(l, t);
    },
    4997: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("282371");
      n.es(l, t);
    },
    821455: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("532054");
      n.es(l, t);
    },
    691096: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("46575");
      n.es(l, t);
    },
    736616: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("19493");
      n.es(l, t);
    },
    332127: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("455578");
      n.es(l, t);
    },
    485358: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("248307");
      n.es(l, t);
    },
    159190: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("383362");
      n.es(l, t);
    },
    828516: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("299476");
      n.es(l, t);
    },
    782926: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("733214");
      n.es(l, t);
    },
    504626: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("208425");
      n.es(l, t);
    },
    992305: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("466497");
      n.es(l, t);
    },
    352265: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("10397");
      n.es(l, t);
    },
    734575: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          channelEligibleForSummaries: function () {
            return i;
          },
          canSeeChannelSummaries: function () {
            return r;
          },
          canGuildUseConversationSummaries: function () {
            return o;
          },
          useChannelSummariesExperiment: function () {
            return u;
          },
        }),
        n("65597");
      var l = n("305961"),
        a = n("49111"),
        s = n("724210");
      function i(e) {
        return r(e, !0, !1);
      }
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
          null == e ||
          !(function (e) {
            var t;
            if (null == e) return !1;
            let n = l.default.getGuild(
                null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t
                  ? t
                  : ""
              ),
              s = null != n && n.rulesChannelId === e.id;
            return (
              a.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !s
            );
          })(e) ||
          (!1 === t && e.hasFlag(s.ChannelFlags.SUMMARIES_DISABLED))
        )
          return !1;
        let i = l.default.getGuild(e.guild_id);
        return o(i, n);
      }
      function o(e) {
        var t;
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return !1;
        return (
          !!(
            (null == (t = e.id) || (t !== a.ME && t !== a.FAVORITES)) &&
            e.hasFeature(a.GuildFeatures.SUMMARIES_ENABLED_GA)
          ) &&
          (!n || e.hasFeature(a.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
        );
      }
      function u(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r(e, t);
      }
    },
    554743: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("884691");
      function a(e, t) {
        let n = e.getBoundingClientRect(),
          l = (t.clientX - n.left) / n.width;
        return Math.min(1, Math.max(0, l));
      }
      function s(e) {
        let { ref: t, onDrag: n, onDragStart: s, onDragEnd: i } = e,
          [r, o] = l.useState(!1);
        l.useEffect(() => {
          if (r)
            return (
              window.addEventListener("mouseup", e),
              window.addEventListener("mousemove", l),
              () => {
                window.removeEventListener("mouseup", e),
                  window.removeEventListener("mousemove", l);
              }
            );
          function e() {
            null == i || i(), o(!1);
          }
          function l(e) {
            let l = t.current;
            null != l && (null == n || n(a(l, e)));
          }
        }, [t, r, i, n]);
        let u = l.useCallback(
          e => {
            e.preventDefault();
            let l = t.current;
            null != l && (o(!0), null == s || s(), null == n || n(a(l, e)));
          },
          [t, s, n]
        );
        return [r, u];
      }
    },
    333987: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("884691");
      function a(e) {
        let t = l.useRef(null),
          n = l.useCallback(
            n => {
              null != e &&
                ("function" == typeof e ? e(n) : (e.current = n),
                (t.current = n));
            },
            [e]
          );
        return [t, n];
      }
    },
    428958: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("884691"),
        a = n("714617"),
        s = n.n(a),
        i = n("995008"),
        r = n.n(i),
        o = n("759843"),
        u = n("913144"),
        d = n("42203"),
        c = n("18494"),
        m = n("162771"),
        f = n("599110"),
        h = n("716241"),
        p = n("939011");
      let g = (0, o.trackMaker)({
        analyticEventConfigs: f.AnalyticEventConfigs,
        dispatcher: u.default,
        TRACK_ACTION_NAME: "TRACK",
      });
      function E(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { disableTrack: !1, trackOnInitialLoad: !1 },
          n = arguments.length > 2 ? arguments[2] : void 0,
          a = l.useRef(),
          i = l.useRef();
        l.useEffect(
          () => {
            let l = !s(a.current, e);
            l && (a.current = e);
            let u = !s(i.current, n);
            if ((u && (i.current = n), !l && !u)) return;
            let E = { ...e, sequenceId: r("impression_") };
            return (
              !(function (e) {
                var t, n;
                let l =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  { name: a, type: s, properties: i } = e;
                if (
                  e.type === o.ImpressionTypes.MODAL &&
                  null == e.name &&
                  (0, p.getImpressionStack)().some(e => {
                    var t;
                    return null === (t = e._stackContext) || void 0 === t
                      ? void 0
                      : t.isSlide;
                  })
                )
                  return;
                (0, p.setCurrentImpression)(e);
                let r =
                    null !== (t = null == i ? void 0 : i.guild_id) &&
                    void 0 !== t
                      ? t
                      : m.default.getGuildId(),
                  u =
                    null !== (n = null == i ? void 0 : i.channel_id) &&
                    void 0 !== n
                      ? n
                      : c.default.getChannelId(r),
                  E = (0, f.expandEventProperties)({
                    impression_type: s,
                    location: (0, p.getLocation)(),
                    ...(0, h.collectGuildAnalyticsMetadata)(r),
                    ...(0, h.collectChannelAnalyticsMetadata)(
                      d.default.getChannel(u)
                    ),
                    ...i,
                  });
                if (l) {
                  (0, p.setDebugTrackedData)(null, null);
                  return;
                }
                null != a && null != s && ((0, f.debugLogEvent)(a, E), g(a, E)),
                  (0, p.setDebugTrackedData)(a, E);
              })(E, t.disableTrack),
              () => {
                null != E && (0, p.cleanupImpression)(E);
              }
            );
          },
          t.trackOnInitialLoad ? [] : void 0
        );
      }
    },
    406291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MENTION_SENTINEL: function () {
            return l;
          },
          CHANNEL_SENTINEL: function () {
            return a;
          },
          EMOJI_SENTINEL: function () {
            return s;
          },
          REACTION_START_SENTINEL: function () {
            return i;
          },
          REACTION_END_SENTINEL: function () {
            return r;
          },
          COMMAND_SENTINEL: function () {
            return o;
          },
        });
      let l = "@",
        a = "#",
        s = ":",
        i = "+:",
        r = ":",
        o = "/";
    },
    558986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getEmojiCaptionsForUser: function () {
            return i;
          },
          initiateEmojiInteraction: function () {
            return r;
          },
        }),
        n("222007");
      var l = n("872717"),
        a = n("913144"),
        s = n("49111");
      async function i() {
        a.default.dispatch({ type: "EMOJI_CAPTIONS_FETCH" });
        try {
          let { body: e } = await l.default.get({
              url: s.Endpoints.EMOJI_CAPTIONS_GET,
            }),
            t = {};
          for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
          a.default.dispatch({
            type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
            emojiCaptions: t,
          });
        } catch (t) {
          var e;
          a.default.dispatch({
            type: "EMOJI_CAPTIONS_FETCH_ERROR",
            is4XXError:
              (null == (e = t.body) ? void 0 : e.status) >= 400 &&
              (null == e ? void 0 : e.status) <= 499,
          });
        }
      }
      function r(e) {
        a.default.dispatch({
          type: "EMOJI_INTERACTION_INITIATED",
          interaction: e,
        });
      }
    },
    500460: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEmojiAndSourceGuild: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("65597"),
        s = n("305961"),
        i = n("385976"),
        r = n("858619"),
        o = n("101263"),
        u = n("49111");
      let d = (e, t, n) => {
          let l = null != n ? e.getCustomEmojiById(n) : null;
          if ((null == l ? void 0 : l.type) === r.EmojiTypes.GUILD)
            return {
              emoji: l,
              joinedEmojiSourceGuildRecord: t.getGuild(
                null == l ? void 0 : l.guildId
              ),
            };
          return { emoji: null, joinedEmojiSourceGuildRecord: null };
        },
        c = e => {
          let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: r, emoji: c } = (0,
            a.useStateFromStoresObject)([i.default, s.default], () =>
              d(i.default, s.default, t)
            ),
            m = null != r,
            f = null != r && r.hasFeature(u.GuildFeatures.DISCOVERABLE),
            h = (!m || f) && null != t,
            [p, g] = l.useState(h),
            E = null != r ? o.default.createFromGuildRecord(r) : null,
            [C, v] = l.useState(E);
          return (
            l.useEffect(() => {
              null == n || n();
              let e = async () => {
                let e =
                  null != t ? await o.default.getGuildFromEmojiId(t) : null;
                v(e), g(!1), null == n || n();
              };
              if (h) {
                e();
                return;
              }
              null == n || n();
            }, [t, h]),
            {
              expressionSourceGuild: C,
              joinedEmojiSourceGuildRecord: r,
              hasJoinedEmojiSourceGuild: m,
              emoji: c,
              isFetching: p,
            }
          );
        };
    },
    101263: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("872717"),
        i = n("666038"),
        r = n("813006"),
        o = n("315102"),
        u = n("159885"),
        d = n("49111");
      (l || (l = {})).GUILD = "GUILD";
      let c = async e => {
        let t = null;
        try {
          var n;
          let l = await s.default.get({
            url: d.Endpoints.EMOJI_SOURCE_DATA(e),
            oldFormErrors: !0,
            timeout: 5e3,
          });
          (null == l
            ? void 0
            : null === (n = l.body) || void 0 === n
              ? void 0
              : n.guild) != null &&
            (t = {
              guild: a.createFromServer(l.body.guild),
              type: l.body.type,
            });
        } catch {}
        return t;
      };
      a = class e extends i.default {
        getIconURL(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return o.default.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t,
          });
        }
        getIconSource(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return o.default.getAnimatableSourceWithFallback(t, t =>
            o.default.getGuildIconSource({
              id: this.id,
              size: e,
              icon: this.icon,
              canAnimate: t,
            })
          );
        }
        hasFeature(e) {
          return this.features.has(e);
        }
        isDiscoverable() {
          return this.hasFeature(d.GuildFeatures.DISCOVERABLE);
        }
        get acronym() {
          return (0, u.getAcronym)(this.name);
        }
        static async getGuildFromEmojiId(e) {
          let t = await c(e),
            n = null != t && (null == t ? void 0 : t.type) === "GUILD";
          return n ? t.guild : null;
        }
        static _mapCommon(e) {
          var t;
          return {
            id: e.id,
            name: e.name,
            icon: e.icon,
            description: e.description,
            features: new Set(
              null !== (t = e.features) && void 0 !== t ? t : new Set()
            ),
          };
        }
        static createFromGuildRecord(t) {
          return new e({
            ...e._mapCommon(t),
            premiumTier: t.premiumTier,
            premiumSubscriberCount: t.premiumSubscriberCount,
            presenceCount: null,
            memberCount: null,
            emojis: null,
          });
        }
        static createFromDiscoverableGuild(t) {
          return new e({
            ...e._mapCommon(t),
            premiumTier: null,
            premiumSubscriberCount: t.premiumSubscriptionCount,
            presenceCount: t.presenceCount,
            memberCount: t.memberCount,
            emojis: t.emojis,
          });
        }
        static createFromServer(t) {
          return new e({
            ...e._mapCommon(t),
            premiumTier: t.premium_tier,
            premiumSubscriberCount: t.premium_subscription_count,
            presenceCount: t.approximate_presence_count,
            memberCount: t.approximate_member_count,
            emojis: t.emojis,
          });
        }
        static createFromGuildType(t) {
          return t instanceof e
            ? t
            : t instanceof r.default
              ? e.createFromGuildRecord(t)
              : e.createFromDiscoverableGuild(t);
        }
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.icon = e.icon),
            (this.description = e.description),
            (this.features = e.features),
            (this.premiumTier = e.premiumTier),
            (this.premiumSubscriberCount = e.premiumSubscriberCount),
            (this.presenceCount = e.presenceCount),
            (this.memberCount = e.memberCount),
            (this.emojis = e.emojis);
        }
      };
    },
    865453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTrackOpenPopout: function () {
            return c;
          },
        });
      var l = n("884691"),
        a = n("716241"),
        s = n("42203"),
        i = n("18494"),
        r = n("599110"),
        o = n("558986"),
        u = n("958706"),
        d = n("49111");
      let c = e => {
        let {
            emojiId: t,
            currentGuildId: n,
            popoutData: c,
            nonce: m,
            demoMode: f,
          } = e,
          { current: h } = l.useRef({
            guild_id: n,
            emoji_id: t,
            ...(0, a.collectChannelAnalyticsMetadata)(
              s.default.getChannel(i.default.getChannelId(n))
            ),
          });
        return (
          l.useEffect(() => {
            var e;
            (0, o.initiateEmojiInteraction)(
              u.EmojiInteractionPoint.TrackOpenPopoutUsed
            ),
              !f &&
                r.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                  type:
                    null !== (e = null == c ? void 0 : c.analyticsType) &&
                    void 0 !== e
                      ? e
                      : "Standard Emoji Popout",
                  nonce: m,
                  ...h,
                });
          }, []),
          h
        );
      };
    },
    10130: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useExplicitContentSettingOrDefault: function () {
            return r;
          },
        });
      var l = n("65597"),
        a = n("151426"),
        s = n("374363"),
        i = n("447435");
      let r = () => {
        let e = (0, l.useStateFromStoresObject)([s.default], () => {
          var e, t;
          return null !==
            (t =
              null === (e = s.default.settings.textAndImages) || void 0 === e
                ? void 0
                : e.explicitContentSettings) && void 0 !== t
            ? t
            : (0, i.getExplicitContentSettingOrDefault)();
        });
        return {
          explicitContentGuilds:
            (null == e ? void 0 : e.explicitContentGuilds) === void 0 ||
            (null == e ? void 0 : e.explicitContentGuilds) ===
              a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
              ? (0, i.resolveDefaultSetting)()
              : e.explicitContentGuilds,
          explicitContentNonFriendDm:
            (null == e ? void 0 : e.explicitContentNonFriendDm) === void 0 ||
            (null == e ? void 0 : e.explicitContentNonFriendDm) ===
              a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
              ? (0, i.resolveDefaultSetting)(!0)
              : e.explicitContentNonFriendDm,
          explicitContentFriendDm:
            (null == e ? void 0 : e.explicitContentFriendDm) === void 0 ||
            (null == e ? void 0 : e.explicitContentFriendDm) ===
              a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
              ? (0, i.resolveDefaultSetting)(!0, !0)
              : e.explicitContentFriendDm,
        };
      };
    },
    963119: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useShouldRedactExplicitContent: function () {
            return d;
          },
          useShouldRedactExplicitContentForForum: function () {
            return c;
          },
        });
      var l = n("65597"),
        a = n("42203"),
        s = n("27618"),
        i = n("697218"),
        r = n("457971"),
        o = n("447435"),
        u = n("10130");
      let d = (e, t) => {
          let n = (0, r.useIsEligibleForExplicitMediaRedaction)(),
            {
              explicitContentGuilds: d,
              explicitContentFriendDm: c,
              explicitContentNonFriendDm: m,
            } = (0, u.useExplicitContentSettingOrDefault)(),
            f = (0, l.default)([s.default], () =>
              s.default.getFriendIDs().includes(t)
            ),
            h = (0, l.default)([i.default], () => i.default.getCurrentUser()),
            p = (0, l.default)([a.default], () => {
              let t = a.default.getChannel(e);
              return null != t && t.isPrivate();
            });
          return (
            !!n &&
            null != h &&
            h.id !== t &&
            (p && f
              ? (0, o.getShouldObscureForSetting)(c)
              : p
                ? (0, o.getShouldObscureForSetting)(m)
                : (0, o.getShouldObscureForSetting)(d))
          );
        },
        c = () => {
          let e = (0, r.useIsEligibleForExplicitMediaRedaction)(),
            { explicitContentGuilds: t } = (0,
            u.useExplicitContentSettingOrDefault)(),
            n = (0, l.default)([i.default], () => i.default.getCurrentUser());
          return !!e && null != n && (0, o.getShouldObscureForSetting)(t);
        };
    },
    298878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("956089"),
        i = n("782340");
      function r(e) {
        let {
          className: t,
          color: n = a.default.unsafe_rawColors.BRAND_500.css,
          ...r
        } = e;
        return (0, l.jsx)(s.TextBadge, {
          ...r,
          text: i.default.Messages.BETA,
          color: n,
          className: t,
        });
      }
    },
    200521: function (e, t, n) {
      "use strict";
      var l, a, s, i;
      n.r(t),
        n.d(t, {
          FeedbackRating: function () {
            return l;
          },
          FEEDBACK_FREEFORM_LENGTH: function () {
            return r;
          },
          FeedbackType: function () {
            return a;
          },
          FeedbackTypePrecedence: function () {
            return o;
          },
        }),
        n("808653"),
        ((s = l || (l = {})).BAD = "bad"),
        (s.NEUTRAL = "neutral"),
        (s.GOOD = "good");
      let r = 1024;
      ((i = a || (a = {}))[(i.VOICE = 0)] = "VOICE"),
        (i[(i.STREAM = 1)] = "STREAM"),
        (i[(i.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
        (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
        (i[(i.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS");
      let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({ ...e, [t]: n }), {});
    },
    791234: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getEmbedColor: function () {
            return p;
          },
          ForumPostMediaTypes: function () {
            return l;
          },
          useForumPostMediaThumbnail: function () {
            return S;
          },
          useForumPostMediaProperties: function () {
            return _;
          },
          useFindFirstMediaProperties: function () {
            return x;
          },
          useFirstMediaIsEmbed: function () {
            return N;
          },
          shouldShowAddMediaToOriginalPostModal: function () {
            return T;
          },
          messageContainsGifOrVideo: function () {
            return M;
          },
        }),
        n("702976"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007"),
        n("808653");
      var l,
        a,
        s = n("884691"),
        i = n("651693"),
        r = n("610730"),
        o = n("845579"),
        u = n("42203"),
        d = n("377253"),
        c = n("697218"),
        m = n("568734"),
        f = n("449008"),
        h = n("49111");
      function p(e, t) {
        if (null == e || null == e.embeds[0]) return;
        let { color: n } = e.embeds[0];
        return (null != n && "#ffffff" === n.toLowerCase()) || t ? void 0 : n;
      }
      function g(e) {
        if (null == e) return !1;
        let { filename: t, height: n, width: l } = e;
        return (
          (0, i.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
        );
      }
      function E(e) {
        return (
          null != e &&
          null != e &&
          (0, i.isVideoFile)(e.filename) &&
          null != e.proxy_url
        );
      }
      function C(e) {
        return g(e) || E(e);
      }
      ((a = l || (l = {})).EMBED = "embed"), (a.ATTACHMENT = "attachment");
      function v(e) {
        let t = o.InlineAttachmentMedia.useSetting();
        return (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.InlineAttachmentMedia.getSetting();
          if (!t) return [];
          let n = null == e ? void 0 : e.attachments;
          return null == e || null == n
            ? []
            : n
                .filter(C)
                .map(e => {
                  let {
                    proxy_url: t,
                    url: n,
                    description: l,
                    spoiler: a,
                    flags: s,
                    width: r,
                    height: o,
                    filename: u,
                    content_scan_version: d,
                  } = e;
                  if (null == r || null == o) return null;
                  let c = (0, i.isVideoFile)(u),
                    f =
                      null != e.flags &&
                      (0, m.hasFlag)(
                        e.flags,
                        h.MessageAttachmentFlags.IS_THUMBNAIL
                      ),
                    p = null != t ? t : n;
                  if (c) {
                    let e = new URL(t);
                    e.searchParams.append("format", "jpeg"), (p = e.toString());
                  }
                  return {
                    src: p,
                    width: r,
                    height: o,
                    spoiler: null != a && a,
                    flags: s,
                    contentScanVersion: d,
                    alt: l,
                    isVideo: c,
                    isThumbnail: f,
                    type: "attachment",
                  };
                })
                .filter(f.isNotNullish);
        })(e, t);
      }
      function I(e, t) {
        let n = o.InlineEmbedMedia.useSetting(),
          l = o.RenderEmbeds.useSetting();
        if (null == e) return [];
        let a = e.embeds;
        return n && l && null != a
          ? a
              .map(e => {
                var n;
                let l =
                  null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
                if (
                  (null == l && null != e.images && (l = e.images[0]),
                  null != l && null != l.url)
                ) {
                  let { height: n, proxyURL: a, url: s, width: r } = l,
                    o = null != a && (0, i.isVideoUrl)(a);
                  return {
                    src: null != a && "" !== a ? a : s,
                    height: n,
                    width: r,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: o,
                    type: "embed",
                  };
                }
              })
              .filter(f.isNotNullish)
          : [];
      }
      function S(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = _(e, n);
        return s.useMemo(() => {
          if (null == t) return [];
          if (!t.isMediaChannel()) return l;
          {
            let e = l.find(e => e.isThumbnail);
            return null != e ? [e] : l;
          }
        }, [t, l]);
      }
      function _(e, t) {
        let n = v(e),
          l = I(e, t);
        return [...n, ...l];
      }
      function x(e, t) {
        var n, l;
        let a = v(e),
          s = I(e, t);
        return null !== (l = null !== (n = a[0]) && void 0 !== n ? n : s[0]) &&
          void 0 !== l
          ? l
          : null;
      }
      function N(e, t) {
        let n = v(e),
          l = I(e, t);
        return null == n[0] && null != l[0];
      }
      function T(e, t) {
        var n;
        let l = u.default.getChannel(t);
        if (null == l) return !1;
        let a = d.default.getMessage(l.id, l.id);
        return (
          null != a &&
          e.length > 0 &&
          null != e.find(e => e.isImage || e.isVideo) &&
          l.isForumPost() &&
          l.ownerId ===
            (null === (n = c.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) &&
          0 === r.default.getCount(l.id) &&
          (0 === a.attachments.length ||
            null == a.attachments.find(e => g(e) || E(e)))
        );
      }
      function M(e) {
        return e.reduce(
          (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, i.isAnimatedImageUrl)(t.src),
          }),
          { containsVideo: !1, containsGif: !1 }
        );
      }
    },
    120027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 4 4",
          children: (0, l.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: s }),
        });
      }
    },
    270295: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("181114"),
        o = n("915675"),
        u = n("302287");
      function d(e) {
        let {
          children: t,
          className: n,
          size: a = i.Button.Sizes.MEDIUM,
          onlyShineOnHover: d = !1,
          ...c
        } = e;
        return (0, l.jsx)(r.default, {
          ...c,
          color: i.Button.Colors.CUSTOM,
          size: a,
          className: s(u.button, n),
          onlyShineOnHover: d,
          children: (0, l.jsxs)("div", {
            className: u.buttonContents,
            children: [(0, l.jsx)(o.default, { className: u.icon }), t],
          }),
        });
      }
    },
    915675: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 16,
          height: n = t,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 16 16",
          children: (0, l.jsx)("path", {
            d: "M14.3385 7.6721L10.4015 6.85189L11.891 4.56187C11.9309 4.49891 11.9482 4.42423 11.94 4.35013C11.9318 4.27603 11.8986 4.20692 11.8459 4.15421C11.7932 4.10149 11.7241 4.06829 11.65 4.06009C11.5759 4.05189 11.5012 4.0692 11.4382 4.10911L9.14822 5.59859L8.328 1.66158C8.328 1.57457 8.29345 1.49114 8.23193 1.42961C8.1704 1.36809 8.08693 1.3335 7.99992 1.3335C7.91291 1.3335 7.82944 1.36809 7.76791 1.42961C7.70639 1.49114 7.67183 1.57457 7.67183 1.66158L6.85162 5.59859L4.5616 4.10911C4.49863 4.0692 4.42395 4.05189 4.34985 4.06009C4.27576 4.06829 4.20665 4.10149 4.15393 4.15421C4.10122 4.20692 4.06802 4.27603 4.05982 4.35013C4.05162 4.42423 4.06892 4.49891 4.10884 4.56187L5.59836 6.85189L1.66134 7.6721C1.57432 7.6721 1.49086 7.70665 1.42933 7.76818C1.3678 7.8297 1.33325 7.91317 1.33325 8.00018C1.33325 8.0872 1.3678 8.17062 1.42933 8.23215C1.49086 8.29368 1.57432 8.32827 1.66134 8.32827L5.59836 9.14848L4.10884 11.4385C4.06803 11.5011 4.05031 11.5759 4.0587 11.6502C4.06708 11.7244 4.10104 11.7934 4.15477 11.8453C4.18407 11.8768 4.21963 11.9019 4.25918 11.9188C4.29874 11.9358 4.34139 11.9443 4.38442 11.9438C4.44713 11.9426 4.50835 11.9244 4.5616 11.8913L6.85162 10.4017L7.67183 14.3387C7.67183 14.4258 7.70639 14.5092 7.76791 14.5708C7.82944 14.6323 7.91291 14.6668 7.99992 14.6668C8.08693 14.6668 8.1704 14.6323 8.23193 14.5708C8.29345 14.5092 8.328 14.4258 8.328 14.3387L9.14822 10.4017L11.4382 11.8913C11.4915 11.9244 11.5527 11.9426 11.6154 11.9438C11.6585 11.9443 11.7011 11.9358 11.7407 11.9188C11.7802 11.9019 11.8158 11.8768 11.8451 11.8453C11.8988 11.7934 11.9328 11.7244 11.9411 11.6502C11.9495 11.5759 11.9318 11.5011 11.891 11.4385L10.4015 9.14848L14.3385 8.32827C14.4255 8.32827 14.509 8.29368 14.5705 8.23215C14.632 8.17062 14.6666 8.0872 14.6666 8.00018C14.6666 7.91317 14.632 7.8297 14.5705 7.76818C14.509 7.70665 14.4255 7.6721 14.3385 7.6721Z",
            fill: s,
            className: i,
          }),
        });
      }
    },
    368639: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          parseBioReact: function () {
            return d;
          },
          parseBioReactWithoutScrolling: function () {
            return c;
          },
        });
      var l = n("917351"),
        a = n.n(l),
        s = n("933805"),
        i = n("52140"),
        r = n("888198"),
        o = n("788554");
      let u = (0, o.default)([
          r.default.PROFILE_BIO_RULES,
          (0, i.default)({ enableBuildOverrides: !1 }),
        ]),
        d = s.reactParserFor(u),
        c = s.reactParserFor(
          (0, o.default)([
            a.omit(u, [
              "link",
              "url",
              "autolink",
              "customEmoji",
              "emoji",
              "commandMention",
            ]),
            { emoji: { react: () => null } },
          ])
        );
    },
    52140: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("404828"),
        o = n("77078"),
        u = n("340616"),
        d = n("269936"),
        c = n("385976"),
        m = n("855920"),
        f = n("393414"),
        h = n("305961"),
        p = n("666897"),
        g = n("505684"),
        E = n("36694"),
        C = n("413709"),
        v = n("873218"),
        I = n("250832"),
        S = n("22248"),
        _ = n("28236"),
        x = n("306160"),
        N = n("794818"),
        T = n("844659"),
        M = n("657057"),
        A = n("886125"),
        O = n("180161"),
        j = n("781423"),
        y = n("47677"),
        L = n("49111"),
        R = n("724210"),
        b = n("782340"),
        P = n("862839");
      n("706250");
      var D = n("632215");
      function w(e) {
        let { text: t } = e,
          [n, s] = a.useState(!1);
        return (0, l.jsx)(o.Clickable, {
          onClick: () => {
            try {
              (0, x.copy)(t), s(!0);
            } catch (e) {
              s(!1);
            }
          },
          children: n
            ? (0, l.jsx)(E.default, { width: 16, height: 16 })
            : (0, l.jsx)(C.default, { width: 16, height: 16 }),
        });
      }
      let U = {
        blockQuote: {
          react: (e, t, n) =>
            (0, l.jsxs)(
              "div",
              {
                className: D.blockquoteContainer,
                children: [
                  (0, l.jsx)("div", { className: D.blockquoteDivider }),
                  (0, l.jsx)("blockquote", { children: t(e.content, n) }),
                ],
              },
              n.key
            ),
        },
        s: {
          react: (e, t, n) =>
            (0, l.jsx)("s", { children: t(e.content, n) }, n.key),
        },
        highlight: {
          react: (e, t, n) =>
            (0, l.jsx)(
              "span",
              { className: "highlight", children: e.content },
              n.key
            ),
        },
        paragraph: {
          react: (e, t, n) =>
            (0, l.jsx)("p", { children: t(e.content, n) }, n.key),
        },
        inlineCode: {
          react: (e, t, n) =>
            (0, l.jsx)(
              "code",
              { className: "inline", children: (0, T.smartOutput)(e, t, n) },
              n.key
            ),
        },
        codeBlock: {
          react(e, t, a) {
            let s = () =>
              (0, l.jsx)("code", {
                className: i(P.scrollbarGhostHairline, "hljs"),
                children: (0, T.smartOutput)(e, t, a),
              });
            return (0, l.jsx)(
              "pre",
              {
                children: (0, l.jsxs)("div", {
                  className: D.codeContainer,
                  children: [
                    x.SUPPORTS_COPY
                      ? (0, l.jsx)("div", {
                          className: D.codeActions,
                          children: (0, l.jsx)(w, { text: e.content }),
                        })
                      : null,
                    (0, l.jsx)(d.LazyLibrary, {
                      createPromise: () =>
                        n.el("86256").then(n.bind(n, "86256")),
                      webpackId: "86256",
                      renderFallback: s,
                      render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                        {
                          let n = t.highlight(e.lang, e.content, !0);
                          return null == n
                            ? s()
                            : (0, l.jsx)("code", {
                                className: i(
                                  P.scrollbarGhostHairline,
                                  "hljs",
                                  n.language
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              });
                        }
                      },
                    }),
                  ],
                }),
              },
              a.key
            );
          },
        },
        text: {
          react: (e, t, n) =>
            "string" == typeof e.content
              ? (0, l.jsx)("span", { children: e.content }, n.key)
              : (0, l.jsx)("span", { children: t(e.content, n) }, n.key),
        },
        spoiler: {
          react: (e, t, n) =>
            (0, l.jsx)(
              g.default,
              {
                type: g.default.Types.TEXT,
                inline: n.formatInline,
                renderTextElement: (e, t) =>
                  null == e || e.type !== u.default || t
                    ? e
                    : a.cloneElement(e, { tabIndex: -1 }),
                children: () => t(e.content, n),
              },
              n.key
            ),
        },
        soundboard: {
          react: e =>
            (0, l.jsx)(_.default, {
              channelId: e.channelId,
              soundId: e.soundId,
              jumbo: e.jumboable,
            }),
        },
        staticRouteLink: {
          react(e, t, n) {
            let a = () => {
              !(function (e, t) {
                let n = h.default.getGuild(e);
                if (
                  null == e ||
                  null == n ||
                  !n.hasFeature(L.GuildFeatures.COMMUNITY)
                )
                  return;
                let l = {
                    home: R.StaticChannelRoute.GUILD_HOME,
                    browse: R.StaticChannelRoute.CHANNEL_BROWSER,
                    customize: R.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                    guide: R.StaticChannelRoute.GUILD_HOME,
                  },
                  a = l[t],
                  s = h.default.getGuild(e);
                if ((null == s ? void 0 : s.joinedAt) == null) {
                  N.startLurking(e, {}, { channelId: a });
                  return;
                }
                (0, f.transitionTo)(L.Routes.CHANNEL(e, a));
              })(e.guildId, e.channelId);
            };
            if (!(0, T.isStaticRouteIconType)(e.channelId)) return null;
            let s = "".concat(e.channelId);
            switch (e.channelId) {
              case R.StaticChannelId.GUILD_HOME:
              case R.StaticChannelId.SERVER_GUIDE:
                s = b.default.Messages.SERVER_GUIDE;
                break;
              case R.StaticChannelId.CHANNEL_BROWSER:
                s = b.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                break;
              case R.StaticChannelId.CUSTOMIZE_COMMUNITY:
                s = b.default.Messages.CHANNELS_AND_ROLES;
            }
            return (0, l.jsx)(
              o.Tooltip,
              {
                text: s,
                position: "top",
                children: s => {
                  let { onMouseEnter: i, onMouseLeave: r } = s;
                  return (0, l.jsx)(
                    p.default,
                    {
                      role: "link",
                      onClick: a,
                      onMouseEnter: i,
                      onMouseLeave: r,
                      className: "channelMention",
                      iconType: e.channelId,
                      children: t(e.content, n),
                    },
                    n.key
                  );
                },
              },
              n.key
            );
          },
        },
        timestamp: {
          react: (e, t, n) => (0, l.jsx)(M.default, { node: e }, n.key),
        },
        list: {
          react: (e, t, n) => {
            let l = e.ordered ? "ol" : "ul",
              a =
                null == e.start
                  ? void 0
                  : (e.start + (e.items.length - 1)).toString().length;
            return (0, r.reactElement)(l, "".concat(n.key), {
              start: e.start,
              className: n.formatInline ? D.inlineFormat : null,
              style: { "--totalCharacters": a },
              children: e.items.map((e, l) => {
                let a = (0, r.reactElement)(
                  "span",
                  "".concat(n.key, "-").concat(l, "-innerSpan"),
                  { children: t(e, n) }
                );
                return (0, r.reactElement)(
                  "li",
                  "".concat(n.key, "-").concat(l) + l,
                  { children: a }
                );
              }),
            });
          },
        },
        heading: {
          react: (e, t, n) => {
            let l = (0, r.reactElement)(
              "span",
              "".concat(n.key, "-innerSpan"),
              { children: t(e.content, n) }
            );
            return (0, r.reactElement)(
              "h" + e.level,
              (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null,
              { children: l, className: n.formatInline ? D.inlineFormat : null }
            );
          },
        },
        guild: {
          react: (e, t, n) => {
            let a = h.default.getGuild(e.guildId);
            return (0, l.jsx)(
              I.default,
              { guild: a, children: (0, T.smartOutput)(e, t, n) },
              n.key
            );
          },
        },
        channel: {
          react: (e, t, n) =>
            (0, l.jsx)(
              v.default,
              { iconType: e.iconType, children: (0, T.smartOutput)(e, t, n) },
              n.key
            ),
        },
        message: { react: (e, t, n) => (0, l.jsx)(S.default, {}, n.key) },
      };
      function k(e) {
        return {
          ...U,
          link: (0, y.default)(e),
          emoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } =
              e;
            return {
              react(e, a, s) {
                let { key: i } = s;
                return e.src
                  ? (0, l.jsx)(
                      m.MessageStandardEmoji,
                      { node: e, tooltipPosition: t, enableClick: n },
                      i
                    )
                  : (0, l.jsx)("span", { children: e.surrogate }, i);
              },
            };
          })(e),
          customEmoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } =
              e;
            return {
              react(e, a, s) {
                let { key: i, guildId: r, isInteracting: o } = s,
                  u = c.default
                    .getDisambiguatedEmojiContext(r)
                    .getById(e.emojiId);
                if (null != u) {
                  let t = u.require_colons;
                  e = { ...e, name: t ? ":".concat(u.name, ":") : u.name };
                }
                return (0, l.jsx)(
                  m.MessageCustomEmoji,
                  {
                    isInteracting: o,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n,
                  },
                  i
                );
              },
            };
          })(e),
          channelMention: (0, O.default)(e),
          commandMention: (0, j.default)(e),
          attachmentLink: (0, A.default)(e),
        };
      }
    },
    844659: function (e, t, n) {
      "use strict";
      function l(e, t, n) {
        return "string" == typeof e.content || void 0 === e.content
          ? e.content
          : t(e.content, n);
      }
      function a(e) {
        return (
          "home" === e || "browse" === e || "customize" === e || "guide" === e
        );
      }
      n.r(t),
        n.d(t, {
          smartOutput: function () {
            return l;
          },
          isStaticRouteIconType: function () {
            return a;
          },
        });
    },
    657057: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("683012"),
        i = n("632215");
      function r(e) {
        let { node: t } = e,
          n = (0, s.default)(t);
        return (0, l.jsx)(a.Tooltip, {
          text: t.full,
          tooltipClassName: i.timestampTooltip,
          children: e =>
            (0, l.jsx)("span", { ...e, className: i.timestamp, children: n }),
        });
      }
    },
    683012: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("866227"),
        s = n.n(a),
        i = n("775560"),
        r = n("718517"),
        o = n("646630");
      let u = [
          [2 * r.default.Seconds.MINUTE, r.default.Seconds.SECOND],
          [5 * r.default.Seconds.MINUTE, r.default.Seconds.MINUTE],
          [45 * r.default.Seconds.MINUTE, 2 * r.default.Seconds.MINUTE],
          [21 * r.default.Seconds.HOUR, 5 * r.default.Seconds.MINUTE],
        ],
        d = 2 * r.default.Seconds.HOUR;
      function c(e) {
        let t = (0, i.useForceUpdate)();
        return (l.useEffect(() => {
          if ("R" !== e.format) return;
          let n = 1e3 * d,
            l = Math.abs(e.parsed.diff(s()));
          for (let [e, t] of u)
            if (l < 1e3 * e) {
              n = 1e3 * t;
              break;
            }
          let a = setInterval(() => {
            t();
          }, n);
          return () => clearInterval(a);
        }, [t, e.format, e.parsed]),
        "R" === e.format)
          ? o.TIMESTAMP_FORMATS.R(e.parsed)
          : e.formatted;
      }
    },
    886125: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("641531"),
        r = n("77078"),
        o = n("272030"),
        u = n("545158"),
        d = n("765089"),
        c = n("787336"),
        m = n("666897"),
        f = n("844659"),
        h = n("49111"),
        p = n("909266"),
        g = n("671934");
      function E(e) {
        return {
          react(t, a, E) {
            let C = E.noStyleAndInteraction
                ? void 0
                : async n => {
                    let l = await (0, c.maybeRefreshAttachmentUrl)(
                      t.attachmentUrl
                    );
                    e.shouldStopPropagation &&
                      (null == n || n.stopPropagation()),
                      d.default.trackLinkClicked(l),
                      e.shouldCloseDefaultModals && (0, r.closeAllModals)(),
                      (0, u.default)(l);
                  },
              v = E.noStyleAndInteraction
                ? h.NOOP
                : e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                      let { default: e } = await n
                        .el("136394")
                        .then(n.bind(n, "136394"));
                      return n =>
                        (0, l.jsx)(e, {
                          ...n,
                          attachmentUrl: t.attachmentUrl,
                          attachmentName: t.attachmentName,
                        });
                    });
                  };
            return (0, l.jsxs)(
              m.default,
              {
                role: "link",
                href: t.attachmentUrl,
                onClick: C,
                onContextMenu: v,
                className: "attachmentLink",
                children: [
                  (0, l.jsx)(i.AttachmentIcon, {
                    className: s(g.icon, p.icon),
                    color: r.tokens.colors.MENTION_FOREGROUND,
                    width: 16,
                    height: 16,
                  }),
                  (0, f.smartOutput)(t, a, E),
                ],
              },
              E.key
            );
          },
        };
      }
    },
    180161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("272030"),
        i = n("987317"),
        r = n("765089"),
        o = n("361572"),
        u = n("537325"),
        d = n("233069"),
        c = n("42203"),
        m = n("305961"),
        f = n("666897"),
        h = n("848825"),
        p = n("794818"),
        g = n("844659"),
        E = n("49111");
      async function C(e, t, n) {
        if (null == t) return;
        if (
          (r.default.trackDiscordLinkClicked({
            guildId: e,
            channelId: t,
            messageId: n,
          }),
          null != e)
        ) {
          let n = m.default.getGuild(e);
          if ((null == n ? void 0 : n.joinedAt) == null)
            try {
              await p.startLurking(e, {}, { channelId: t });
              return;
            } catch {}
        }
        let l = c.default.getChannel(t);
        if (
          null != l &&
          null == n &&
          (0, d.isGuildVocalChannelType)(l.type) &&
          (0, o.canViewChannel)(l)
        ) {
          i.default.selectVoiceChannel(l.id);
          return;
        }
        (0, u.default)(E.Routes.CHANNEL(e, t, n));
      }
      function v(e) {
        return {
          react(t, i, r) {
            let o = c.default.getChannel(t.channelId),
              u = r.noStyleAndInteraction
                ? void 0
                : n => {
                    e.shouldStopPropagation &&
                      (null == n || n.stopPropagation()),
                      C(t.guildId, t.channelId, t.messageId),
                      e.shouldCloseDefaultModals && (0, a.closeAllModals)();
                  },
              d =
                r.noStyleAndInteraction ||
                null == t.channelId ||
                (null == o && null == t.originalLink)
                  ? E.NOOP
                  : e => {
                      (0, s.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("454000")
                          .then(n.bind(n, "454000"));
                        return n => {
                          var a;
                          return (0, l.jsx)(e, {
                            ...n,
                            channel: o,
                            channelId:
                              null !== (a = null == o ? void 0 : o.id) &&
                              void 0 !== a
                                ? a
                                : t.channelId,
                            originalLink: t.originalLink,
                            messageId: t.messageId,
                          });
                        };
                      });
                    };
            return (0, l.jsxs)(
              f.default,
              {
                role: "link",
                onClick: u,
                onContextMenu: d,
                className: "channelMention",
                children: [
                  null != t.inContent ? i(t.inContent, r) : null,
                  null != t.inContent ? (0, l.jsx)(h.default, {}) : null,
                  (0, g.smartOutput)(t, i, r),
                ],
              },
              r.key
            );
          },
        };
      }
    },
    781423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CommandClickable: function () {
            return T;
          },
          default: function () {
            return M;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("507217"),
        o = n("240249"),
        u = n("524768"),
        d = n("300322"),
        c = n("845579"),
        m = n("42203"),
        f = n("474643"),
        h = n("957255"),
        p = n("18494"),
        g = n("666897"),
        E = n("659500"),
        C = n("49111"),
        v = n("317041"),
        I = n("406291"),
        S = n("782340"),
        _ = n("781606");
      function x(e, t, n, a) {
        if (null == e) return;
        let s = () => {
          let l = m.default.getChannel(e);
          if (null == l) return;
          let { command: s, application: i } = o.getCachedCommand(l, n);
          if (null != s && s.name === t) {
            var d, c;
            E.ComponentDispatch.dispatch(
              C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
              { channelId: e }
            );
            let t =
              null != i
                ? {
                    type: u.ApplicationCommandSectionType.APPLICATION,
                    id: i.id,
                    icon:
                      null !==
                        (c =
                          null == i
                            ? void 0
                            : null === (d = i.bot) || void 0 === d
                              ? void 0
                              : d.username) && void 0 !== c
                        ? c
                        : i.icon,
                    name: i.name,
                    application: i,
                  }
                : null;
            r.setActiveCommand({ channelId: e, command: null, section: null }),
              r.setActiveCommand({
                channelId: e,
                command: s,
                section: t,
                location: a,
              });
          }
        };
        "" !== f.default.getDraft(e, f.DraftType.ChannelMessage)
          ? (0, i.openModal)(t =>
              (0, l.jsx)(i.ConfirmModal, {
                header:
                  S.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                confirmText: S.default.Messages.CLEAR,
                cancelText: S.default.Messages.CANCEL,
                onConfirm: () => s(),
                confirmButtonColor: i.Button.Colors.BRAND,
                onCloseCallback: () => {
                  E.ComponentDispatch.dispatch(
                    C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
                    { channelId: e }
                  );
                },
                ...t,
                children: (0, l.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children:
                    S.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY,
                }),
              })
            )
          : s();
      }
      function N(e) {
        var t;
        let { node: n, output: r, state: f } = e,
          E = (0, s.useStateFromStores)(
            [m.default, p.default],
            () => {
              var e;
              return m.default.getChannel(
                null !== (e = n.channelId) && void 0 !== e
                  ? e
                  : p.default.getChannelId()
              );
            },
            [n.channelId]
          ),
          { hasSendMessagePerm: S, hasUseAppCommandsPerm: _ } = (0,
          s.useStateFromStoresObject)([h.default], () => {
            let e = h.default.can(C.Permissions.SEND_MESSAGES, E),
              t = h.default.can(C.Permissions.USE_APPLICATION_COMMANDS, E);
            return { hasSendMessagePerm: e, hasUseAppCommandsPerm: t };
          }),
          { command: N } = o.useCommand(
            E,
            null !== (t = n.commandKey) && void 0 !== t ? t : ""
          ),
          T = c.UseLegacyChatInput.useSetting(),
          M = a.useMemo(() => {
            if (null == N || null == E || N.name !== n.commandName || T)
              return !1;
            let e = E.isPrivate(),
              t = (0, d.computeIsReadOnlyThread)(E);
            if (t || (!e && !S)) return !1;
            let l =
              (null == N ? void 0 : N.applicationId) ===
              v.BuiltInSectionId.BUILT_IN;
            return !!e || !!l || !!_ || !1;
          }, [E, N, S, _, n.commandName, T]),
          A = a.useCallback(
            e => {
              null == e || e.stopPropagation(),
                null != E &&
                  null != n.commandName &&
                  null != n.commandKey &&
                  x(
                    E.id,
                    n.commandName,
                    n.commandKey,
                    u.ApplicationCommandTriggerLocations.MENTION
                  );
            },
            [E, n.commandKey, n.commandName]
          );
        return M
          ? (0, l.jsx)(
              i.Tooltip,
              {
                text: n.output,
                position: "top",
                children: e => {
                  let { onMouseEnter: t, onMouseLeave: a } = e;
                  return (0, l.jsxs)(
                    g.default,
                    {
                      role: "link",
                      onClick: A,
                      onMouseEnter: t,
                      onMouseLeave: a,
                      children: [I.COMMAND_SENTINEL, r(n.content, f)],
                    },
                    f.key
                  );
                },
              },
              f.key
            )
          : (0, l.jsxs)("span", {
              children: [I.COMMAND_SENTINEL, r(n.content, f)],
            });
      }
      function T(e) {
        let {
            commandId: t,
            commandName: n,
            commandDescription: a,
            onClick: r,
          } = e,
          o = (0, s.useStateFromStores)([p.default], () =>
            p.default.getChannelId()
          ),
          d = e => {
            null == e || e.stopPropagation(),
              x(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS),
              null == r || r(t);
          };
        return (0, l.jsx)(i.Tooltip, {
          text: a,
          position: "top",
          tooltipContentClassName: _.tooltip,
          children: e => {
            let { onMouseEnter: t, onMouseLeave: a } = e;
            return (0, l.jsxs)(i.Button, {
              color: i.ButtonColors.PRIMARY,
              size: i.ButtonSizes.ICON,
              onClick: d,
              onMouseEnter: t,
              onMouseLeave: a,
              children: ["/", n],
            });
          },
        });
      }
      function M(e) {
        return {
          react: (e, t, n) => (0, l.jsx)(N, { node: e, output: t, state: n }),
        };
      }
    },
    806135: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("333987"),
        i = a.forwardRef(function (e, t) {
          let { muted: n, volume: i, playing: r, ...o } = e,
            [u, d] = (0, s.default)(t);
          return (
            a.useEffect(() => {
              let e = u.current;
              if (null != e) void 0 !== n && (e.muted = n);
            }, [u, n]),
            a.useEffect(() => {
              let e = u.current;
              if (null != e) void 0 !== i && (e.volume = i);
            }, [u, i]),
            a.useEffect(() => {
              let e = u.current;
              if (null != e) void 0 !== r && (r ? e.play() : e.pause());
            }, [u, r]),
            (0, l.jsx)("audio", { ref: d, ...o })
          );
        });
    },
    519841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentLinkRefreshExperiment: function () {
            return a;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "user",
        id: "2023-12_attachment_link_refresh",
        label: "Attachment Link Refresh User Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Refresh expired attachment links",
            config: { enabled: !0 },
          },
        ],
      });
    },
    605160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ObscureReason: function () {
            return l;
          },
          getObscureReason: function () {
            return C;
          },
          getObscureReasonForEmbed: function () {
            return v;
          },
          getForumPostShouldObscure: function () {
            return I;
          },
          useShouldObscure: function () {
            return S;
          },
          getObscuredAlt: function () {
            return _;
          },
        }),
        n("702976"),
        n("794252");
      var l,
        a,
        s = n("506838"),
        i = n("65597"),
        r = n("676574"),
        o = n("447435"),
        u = n("963119"),
        d = n("791234"),
        c = n("845579"),
        m = n("377253"),
        f = n("957255"),
        h = n("568734"),
        p = n("70845"),
        g = n("49111"),
        E = n("782340");
      ((a = l || (l = {})).SPOILER = "spoiler"),
        (a.EXPLICIT_CONTENT = "explicit_content"),
        (a.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content");
      let C = (e, t) => {
          let { spoiler: n, flags: l = 0, content_scan_version: a } = e;
          return t && (0, o.isPendingScan)(a)
            ? "potential_explicit_content"
            : t &&
                ((0, h.hasFlag)(
                  l,
                  g.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA
                ) ||
                  r.default.get("obscure_blur_effect_enabled"))
              ? "explicit_content"
              : n || (0, h.hasFlag)(l, g.MessageAttachmentFlags.IS_SPOILER)
                ? "spoiler"
                : null;
        },
        v = (e, t, n, l, a) => {
          let { flags: s = 0, contentScanVersion: i } = e,
            u = m.default.getMessage(t, n);
          return null == u
            ? null
            : a && !u.author.bot && (0, o.isPendingScan)(i)
              ? "potential_explicit_content"
              : a &&
                  ((0, h.hasFlag)(
                    s,
                    g.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA
                  ) ||
                    r.default.get("obscure_blur_effect_enabled"))
                ? "explicit_content"
                : l
                  ? "spoiler"
                  : null;
        };
      function I(e, t, n) {
        if (null == e) return [!1, void 0];
        if (n && (0, o.isPendingScan)(e.contentScanVersion))
          return [!0, "potential_explicit_content"];
        let l = (function (e) {
          switch (e) {
            case d.ForumPostMediaTypes.EMBED:
              return o.ObscuredMediaTypes.Embed;
            case d.ForumPostMediaTypes.ATTACHMENT:
              return o.ObscuredMediaTypes.Attachment;
            default:
              return;
          }
        })(e.type);
        return null != l && (0, o.isMediaObscured)({ type: l, media: e }, n)
          ? [!0, "explicit_content"]
          : e.spoiler
            ? [t, "spoiler"]
            : [!1, void 0];
      }
      function S(e) {
        let { channel: t, media: n } = e,
          l = (0, i.default)(
            [f.default],
            () => null != t && f.default.can(g.Permissions.MANAGE_MESSAGES, t)
          ),
          a = c.RenderSpoilers.useSetting(),
          s = (0, u.useShouldRedactExplicitContentForForum)();
        return I(n, !(0, p.default)(a, l), s);
      }
      let _ = e =>
        (0, s.match)(e)
          .with(
            "explicit_content",
            () => E.default.Messages.EXPLICIT_CONTENT_ALT
          )
          .with("spoiler", () => E.default.Messages.SPOILER_HIDDEN_A11Y_LABEL)
          .otherwise(() => void 0);
    },
    787336: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isAttachmentUrl: function () {
            return c;
          },
          removeSignedUrlParameters: function () {
            return m;
          },
          messageHasExpiredAttachmentUrl: function () {
            return E;
          },
          maybeRefreshAttachmentUrl: function () {
            return v;
          },
        }),
        n("222007"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660");
      var l,
        a = n("872717"),
        s = n("718517"),
        i = n("519841"),
        r = n("49111");
      let o = new Set([
          window.GLOBAL_ENV.CDN_HOST,
          null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l
            ? void 0
            : l.substring(2),
        ]),
        u = new Set(["/attachments/", "/ephemeral-attachments/"]),
        d = 1 * s.default.Millis.HOUR;
      function c(e) {
        return (
          o.has(e.hostname) && Array.from(u).some(t => e.pathname.startsWith(t))
        );
      }
      function m(e) {
        for (let t of ((e = new URL(e)), ["ex", "is", "hm"]))
          e.searchParams.delete(t);
        return e;
      }
      function f(e) {
        let t = (function (e) {
          let t = e.searchParams.get("ex"),
            n = parseInt(null != t ? t : "", 16);
          return isNaN(n) ? void 0 : n * s.default.Millis.SECOND;
        })(e);
        return null == t || t <= Date.now() + d;
      }
      function h(e) {
        let t = new URL(e.url);
        return f(t);
      }
      function p(e) {
        if (null == e) return !1;
        let t = new URL(e.url);
        return !!c(t) && f(t);
      }
      function g(e) {
        var t;
        return (
          p(e.image) ||
          (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) ||
          p(e.video)
        );
      }
      function E(e) {
        return e.attachments.some(h) || e.embeds.some(g);
      }
      async function C(e) {
        let t = await a.default.post({
          url: r.Endpoints.ATTACHMENTS_REFRESH_URLS,
          body: { attachment_urls: [e] },
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
      }
      async function v(e) {
        if (
          !i.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "link_clicked",
          }).enabled
        )
          return e;
        let t = new URL(e);
        if (!f(t)) return e;
        let n = await C(e);
        return null != n ? n : e;
      }
    },
    277855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSoundmojiExperiment: function () {
            return s;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "user",
        id: "2023-09_soundmoji",
        label: "Soundmoji",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function s(e) {
        let { enabled: t } = a.useExperiment(
          { location: e },
          { autoTrackExposure: !0 }
        );
        return t;
      }
    },
    70845: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("65597"),
        n("845579"),
        n("957255");
      var l = n("49111");
      function a(e, t) {
        switch (e) {
          case l.SpoilerRenderSetting.ALWAYS:
            return !0;
          case l.SpoilerRenderSetting.IF_MODERATOR:
            return t;
          case l.SpoilerRenderSetting.ON_CLICK:
          default:
            return !1;
        }
      }
    },
    412745: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EmojiPopoutType: function () {
            return i;
          },
          getEmojiPopoutData: function () {
            return c;
          },
        });
      var l,
        a,
        s,
        i,
        r = n("782340");
      ((l = s || (s = {})).DEFAULT = "Custom Emoji Popout"),
        (l.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)"),
        (l.UPSELL_CURRENT_SERVER_JOINED =
          "Custom Emoji Popout (Upsell Joined Current-Server)"),
        (l.UPSELL_CROSS_SERVER_JOINED =
          "Custom Emoji Popout (Upsell Joined Cross-Server)"),
        (l.UPSELL_CROSS_SERVER_JOINABLE =
          "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"),
        (l.UPSELL_CROSS_SERVER_UNJOINABLE =
          "Custom Emoji Popout (Soft Upsell)"),
        ((a = i || (i = {})).GET_PREMIUM = "GET_PREMIUM"),
        (a.JOIN_GUILD = "JOIN_GUILD"),
        (a.UNAVAILABLE = "UNAVAILABLE");
      let o = e => {
          let {
              isPremium: t,
              hasJoinedEmojiSourceGuild: n,
              isUnusableRoleSubscriptionEmoji: l,
              emojiComesFromCurrentGuild: a,
              isDiscoverable: s,
            } = e,
            i = "Custom Emoji Popout";
          return (
            t && !n && s
              ? (i = "Custom Emoji Popout (Cross-Server)")
              : t || !n || l
                ? !t &&
                  !n &&
                  (i = s
                    ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                    : "Custom Emoji Popout (Soft Upsell)")
                : (i = a
                    ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                    : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
            i
          );
        },
        u = e => {
          let {
              isPremium: t,
              hasJoinedEmojiSourceGuild: n,
              isUnusableRoleSubscriptionEmoji: l,
              isDiscoverable: a,
              emojiComesFromCurrentGuild: s,
              userIsRoleSubscriber: i,
              isRoleSubscriptionEmoji: o,
              shouldHideRoleSubscriptionCTA: u,
              onOpenPremiumSettings: d,
            } = e,
            c = null;
          return (c = t
            ? n
              ? o
                ? u && l
                  ? r.default.Messages
                      .ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION
                  : l
                    ? i
                      ? r.default.Messages
                          .ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION
                      : r.default.Messages
                          .ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION
                    : r.default.Messages
                        .ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION
                : s
                  ? r.default.Messages
                      .EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION
                  : r.default.Messages
                      .EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION
              : a
                ? r.default.Messages
                    .EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION
                : r.default.Messages
                    .EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION
            : n
              ? u && l
                ? r.default.Messages
                    .ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION
                : l
                  ? i
                    ? r.default.Messages
                        .ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION
                    : r.default.Messages
                        .ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION
                  : s
                    ? r.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION
                    : r.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION
              : a
                ? r.default.Messages
                    .EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION
                : r.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format(
                    { openPremiumSettings: d }
                  ));
        },
        d = e => {
          let {
              isPremium: t,
              hasJoinedEmojiSourceGuild: n,
              isUnusableRoleSubscriptionEmoji: l,
              isDiscoverable: a,
            } = e,
            s = !n && a;
          return t && s
            ? {
                type: "JOIN_GUILD",
                text: r.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null,
              }
            : !t && ((n && !l) || s)
              ? {
                  type: "GET_PREMIUM",
                  text: r.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                  description: null,
                }
              : { type: "UNAVAILABLE", text: null, description: null };
        },
        c = e => {
          let t = u(e),
            n = o(e),
            l = d(e);
          return { ...l, emojiDescription: t, analyticsType: n };
        };
    },
    855920: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MessageStandardEmoji: function () {
            return v;
          },
          MessageCustomEmoji: function () {
            return I;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("748820"),
        o = n("77078"),
        u = n("430568"),
        d = n("716241"),
        c = n("558986"),
        m = n("599110"),
        f = n("459698"),
        h = n("933629"),
        p = n("49111"),
        g = n("958706"),
        E = n("646718"),
        C = n("228551");
      let v = e => {
          var t;
          let {
              node: n,
              tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
              enableClick: s = !0,
            } = e,
            r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            d = null != r ? r : n.name,
            c = e =>
              (0, l.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: r,
                animated: !1,
              }),
            m = e =>
              (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(n.name, s),
                "aria-label": d,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                onTooltipShow: () => {
                  s && S({ emojiNode: n, isCustomEmoji: !1 });
                },
                children: t =>
                  (0, l.jsx)(o.Clickable, {
                    ...e,
                    tag: "span",
                    className: i(C.emojiContainer, {
                      [C.emojiContainerClickable]: s,
                    }),
                    children: c(t),
                  }),
              });
          return s
            ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e =>
                  (0, l.jsx)(f.MessageStandardEmojiPopout, { ...e, node: n }),
                children: m,
              })
            : m();
        },
        I = e => {
          let {
              node: t,
              isInteracting: n,
              tooltipPosition: s = h.EXPRESSION_TOOLTIP_PROPS.position,
              enableClick: d = !0,
            } = e,
            [E, v] = a.useState(String(Date.now())),
            [I, _] = a.useState(!1),
            x = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (0, l.jsx)(u.default, {
                ...e,
                emojiName: t.name,
                size: t.jumboable ? "jumbo" : "default",
                emojiId: t.emojiId,
                animated: t.animated,
                isInteracting: n,
              });
            },
            N = (0, r.v4)(),
            T = e =>
              (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(t.name, d),
                "aria-label": t.name,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: s,
                onTooltipShow: () => {
                  _(!0),
                    d &&
                      (S({ emojiNode: t, isCustomEmoji: !0, nonce: N }),
                      (0, c.initiateEmojiInteraction)(
                        g.EmojiInteractionPoint.CustomEmojiTooltipShown
                      ));
                },
                children: t =>
                  (0, l.jsx)(o.Clickable, {
                    ...e,
                    onMouseEnter: () => {
                      var t;
                      null == e ||
                        null === (t = e.onMouseEnter) ||
                        void 0 === t ||
                        t.call(e);
                    },
                    onClick: t => {
                      var n;
                      _(!1),
                        null == e ||
                          null === (n = e.onClick) ||
                          void 0 === n ||
                          n.call(e, t);
                    },
                    onMouseLeave: () => {
                      I &&
                        (m.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                          nonce: N,
                        }),
                        _(!1));
                    },
                    tag: "span",
                    className: i(C.emojiContainer, {
                      [C.emojiContainerClickable]: d,
                    }),
                    children: x(t),
                  }),
              });
          return d
            ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                  m.default.track(p.AnalyticEvents.CLOSE_POPOUT, { nonce: N }),
                    _(!1);
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e =>
                  (0, l.jsx)(f.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => v(String(Date.now())),
                    nonce: N,
                  }),
                positionKey: E,
                children: T,
              })
            : T();
        },
        S = e => {
          let { emojiNode: t, isCustomEmoji: n, nonce: l } = e;
          d.default.trackWithMetadata(
            p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED,
            {
              type: E.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
              expression_id: t.emojiId,
              expression_name: t.name,
              is_animated: t.animated,
              is_custom: n,
              nonce: l,
            }
          );
        };
    },
    459698: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MessageStandardEmojiPopout: function () {
            return J;
          },
          GuildDetails: function () {
            return Y;
          },
          MessageCustomEmojiPopout: function () {
            return X;
          },
          CustomGuildEmojiPopout: function () {
            return K;
          },
          EmojiPopoutList: function () {
            return q;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("759843"),
        o = n("446674"),
        u = n("130969"),
        d = n("77078"),
        c = n("851387"),
        m = n("430568"),
        f = n("812204"),
        h = n("685665"),
        p = n("428958"),
        g = n("736271"),
        E = n("500460"),
        C = n("101263"),
        v = n("865453"),
        I = n("153043"),
        S = n("256941"),
        _ = n("270295"),
        x = n("626301"),
        N = n("635956"),
        T = n("393414"),
        M = n("18494"),
        A = n("162771"),
        O = n("697218"),
        j = n("145131"),
        y = n("580357"),
        L = n("476263"),
        R = n("98292"),
        b = n("256170"),
        P = n("587974"),
        D = n("599110"),
        w = n("315102"),
        U = n("794818"),
        k = n("719923"),
        V = n("412745"),
        F = n("933629"),
        B = n("49111"),
        H = n("724210"),
        G = n("646718"),
        W = n("782340"),
        z = n("154403");
      let Z = () => {
          let e = (0, o.useStateFromStores)([A.default], () =>
            A.default.getGuildId()
          );
          return {
            page:
              null != e
                ? B.AnalyticsPages.GUILD_CHANNEL
                : B.AnalyticsPages.DM_CHANNEL,
            section: B.AnalyticsSections.EMOJI_UPSELL_POPOUT,
          };
        },
        J = e => {
          let { node: t } = e;
          return (
            (0, v.useTrackOpenPopout)({
              emojiId: t.emojiId,
              currentGuildId: A.default.getGuildId(),
            }),
            (0, l.jsx)(u.Dialog, {
              children: (0, l.jsx)(F.MessagePopoutContent, {
                children: (0, l.jsxs)(j.default, {
                  className: z.emojiSection,
                  children: [
                    (0, l.jsx)(m.default, {
                      emojiName: t.name,
                      className: z.primaryEmoji,
                      src: t.src,
                      animated: !1,
                      size: "jumbo",
                    }),
                    (0, l.jsxs)(j.default, {
                      direction: j.default.Direction.VERTICAL,
                      justify: j.default.Justify.CENTER,
                      className: z.truncatingText,
                      children: [
                        (0, l.jsx)(d.Text, {
                          className: z.emojiName,
                          variant: "text-md/semibold",
                          children: (0, l.jsx)(R.default, { children: t.name }),
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children:
                            W.default.Messages
                              .EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Y = e => {
          let {
              expressionSourceGuild: t,
              hasJoinedExpressionSourceGuild: n,
              isDisplayingJoinGuildButtonInPopout: a,
            } = e,
            { id: s, icon: r, name: o } = t,
            u = w.default.getGuildIconURL({
              id: s,
              icon: r,
              size: 32,
              canAnimate: !0,
            });
          n = null == n || n;
          let c = n || t.isDiscoverable(),
            m = () => {
              t.isDiscoverable()
                ? (0, U.startLurking)(s, {})
                : n &&
                  (0, T.transitionTo)(
                    B.Routes.CHANNEL(s, M.default.getChannelId(s))
                  );
            },
            f = t.isDiscoverable() && null != t.presenceCount,
            h = () => {
              let e = !a && !n;
              return (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      W.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                        { membersOnline: t.presenceCount }
                      ),
                  }),
                  (0, l.jsx)("div", { className: z.dotSeparator }),
                  e
                    ? (0, l.jsx)(d.Clickable, {
                        className: z.joinGuildLink,
                        onClick: m,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "text-link",
                          children:
                            W.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        }),
                      })
                    : (0, l.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: W.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER,
                      }),
                ],
              });
            };
          return (0, l.jsxs)(j.default, {
            align: j.default.Align.CENTER,
            children: [
              (0, l.jsx)(P.default, {
                mask: P.default.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: z.guildIconContainer,
                children: (() => {
                  let e = null != u && c;
                  return e
                    ? (0, l.jsxs)(d.Clickable, {
                        "aria-label": o,
                        onClick: m,
                        children: [
                          (0, l.jsx)("img", {
                            src: u,
                            alt: "",
                            className: z.guildIcon,
                          }),
                          " :",
                        ],
                      })
                    : (0, l.jsx)(L.default, {
                        size: L.default.Sizes.SMALL,
                        className: z.guildIconNotClickable,
                        guild: t,
                      });
                })(),
              }),
              (0, l.jsxs)(j.default, {
                direction: j.default.Direction.VERTICAL,
                className: i(z.guildInformation, z.truncatingText),
                children: [
                  (0, l.jsxs)(j.default, {
                    align: j.default.Align.CENTER,
                    children: [
                      (0, l.jsx)(y.default, {
                        guild: t,
                        className: z.guildBadge,
                      }),
                      c
                        ? (0, l.jsx)(d.Clickable, {
                            onClick: m,
                            className: z.truncatingText,
                            children: (0, l.jsx)(d.Heading, {
                              className: z.guildName,
                              variant: "heading-md/semibold",
                              children: (0, l.jsx)(R.default, { children: o }),
                            }),
                          })
                        : (0, l.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, l.jsx)(R.default, { children: o }),
                          }),
                    ],
                  }),
                  (0, l.jsx)(j.default, {
                    align: j.default.Align.CENTER,
                    children: f
                      ? h()
                      : (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children:
                            W.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER,
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        X = e => {
          let { node: t, closePopout: n, refreshPositionKey: a, nonce: s } = e,
            {
              expressionSourceGuild: i,
              joinedEmojiSourceGuildRecord: r,
              emoji: o,
              isFetching: d,
            } = (0, E.useEmojiAndSourceGuild)({
              emojiId: t.emojiId,
              refreshPositionKey: a,
            });
          return d
            ? (0, l.jsx)(F.PopoutLoadingAnimation, {})
            : (0, l.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, l.jsx)(K, {
                  node: t,
                  guildEmoji: null != o ? o : void 0,
                  expressionSourceGuild: i,
                  joinedEmojiSourceGuildRecord: r,
                  closePopout: n,
                  onToggleShowMoreEmojis: a,
                  demoMode: !1,
                  nonce: s,
                }),
              });
        },
        K = e => {
          var t, n, s;
          let {
              node: u,
              expressionSourceGuild: E,
              joinedEmojiSourceGuildRecord: T,
              closePopout: M,
              onToggleShowMoreEmojis: y,
              guildEmoji: L,
              demoMode: P = !1,
              nonce: w,
            } = e,
            U = (0, o.useStateFromStores)([O.default], () =>
              O.default.getCurrentUser()
            ),
            J = (0, o.useStateFromStores)([A.default], () =>
              A.default.getGuildId()
            ),
            X = k.default.isPremium(U),
            K =
              null != J &&
              (J === (null == E ? void 0 : E.id) ||
                J === (null == T ? void 0 : T.id)),
            Q = null != T,
            $ =
              null !== (t = null == E ? void 0 : E.isDiscoverable()) &&
              void 0 !== t &&
              t;
          P && ((X = !0), ($ = !0), (Q = !1), (K = !1));
          let ee = Z(),
            {
              isRoleSubscriptionEmoji: et,
              isUnusableRoleSubscriptionEmoji: en,
              userIsRoleSubscriber: el,
            } = a.useMemo(
              () =>
                null == L
                  ? {
                      isRoleSubscriptionEmoji: !1,
                      isUnusableRoleSubscriptionEmoji: !1,
                      userIsRoleSubscriber: !1,
                    }
                  : {
                      isRoleSubscriptionEmoji:
                        I.isPurchasableRoleSubscriptionEmoji(L),
                      isUnusableRoleSubscriptionEmoji:
                        I.isUnusableRoleSubscriptionEmoji(
                          L,
                          null != J ? J : void 0
                        ),
                      userIsRoleSubscriber:
                        S.default.getUserSubscriptionRoles(L.guildId).size > 0,
                    },
              [L, J]
            ),
            ea =
              !!en &&
              (0, g.shouldHideGuildPurchaseEntryPoints)(
                null == L ? void 0 : L.guildId
              ),
            { analyticsLocations: es } = (0, h.default)(
              f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL
            );
          (0, p.default)(
            {
              type: r.ImpressionTypes.MODAL,
              name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
              properties: {
                location_stack: es,
                emoji_guild_id:
                  null !== (n = null == L ? void 0 : L.guildId) && void 0 !== n
                    ? n
                    : null,
                emoji_id:
                  null !== (s = null == L ? void 0 : L.id) && void 0 !== s
                    ? s
                    : null,
              },
            },
            { disableTrack: !et }
          );
          let ei = A.default.getGuildId(),
            er = (0, V.getEmojiPopoutData)({
              isPremium: X,
              hasJoinedEmojiSourceGuild: Q,
              isRoleSubscriptionEmoji: et,
              isUnusableRoleSubscriptionEmoji: en,
              userIsRoleSubscriber: el,
              emojiComesFromCurrentGuild: K,
              isDiscoverable: $,
              shouldHideRoleSubscriptionCTA: ea,
              onOpenPremiumSettings: () => {
                M(),
                  D.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                    location_page: ee.page,
                    location_section: ee.section,
                  }),
                  (0, x.navigateToPremiumMarketingPage)();
              },
            }),
            eo = Q && en && !ea && ((X && et) || !X),
            eu = er.emojiDescription,
            ed = (0, v.useTrackOpenPopout)({
              emojiId: u.emojiId,
              currentGuildId: ei,
              popoutData: er,
              emojiSourceGuildId: null == E ? void 0 : E.id,
              nonce: w,
              demoMode: P,
            }),
            ec = er.type === V.EmojiPopoutType.JOIN_GUILD,
            em = er.type === V.EmojiPopoutType.GET_PREMIUM,
            [ef, eh] = a.useState(!1),
            ep = $ || (Q && !K) || null != E;
          return (0, l.jsxs)(F.MessagePopoutContent, {
            className: z.popoutContent,
            children: [
              (() => {
                let e = async () => {
                    if (P || null == E || Q) return;
                    M();
                    let e = E.id;
                    try {
                      await c.default.joinGuild(e),
                        c.default.transitionToGuildSync(e);
                    } catch {}
                  },
                  t = !Q && $;
                return (0, l.jsxs)("div", {
                  className: z.emojiSection,
                  children: [
                    (0, l.jsxs)(j.default, {
                      children: [
                        (0, l.jsx)(m.default, {
                          className: z.primaryEmoji,
                          emojiId: u.emojiId,
                          emojiName: u.name,
                          animated: u.animated,
                          size: "jumbo",
                        }),
                        (0, l.jsxs)(j.default, {
                          direction: j.default.Direction.VERTICAL,
                          justify: j.default.Justify.CENTER,
                          className: z.truncatingText,
                          children: [
                            (0, l.jsx)(d.Text, {
                              variant: "text-md/semibold",
                              children: (0, l.jsx)(R.default, {
                                children: u.name,
                              }),
                            }),
                            null != eu &&
                              (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: eu,
                              }),
                          ],
                        }),
                      ],
                    }),
                    em
                      ? (0, l.jsx)(N.default, {
                          className: z.ctaButton,
                          subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
                          size: d.Button.Sizes.SMALL,
                          fullWidth: !0,
                          buttonText: er.text,
                          onSubscribeModalClose: t => (t ? e() : M()),
                          postSuccessGuild: t && null != E ? E : void 0,
                          premiumModalAnalyticsLocation: ee,
                        })
                      : ec
                        ? (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: z.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: er.text,
                          })
                        : void 0,
                    eo &&
                      (0, l.jsx)(_.default, {
                        className: z.ctaButton,
                        size: d.Button.Sizes.SMALL,
                        fullWidth: !0,
                        onClick: () => {
                          M(),
                            (null == T ? void 0 : T.id) != null &&
                              c.default.transitionToGuildSync(
                                T.id,
                                void 0,
                                H.StaticChannelRoute.ROLE_SUBSCRIPTIONS,
                                [
                                  f.default
                                    .GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                ]
                              );
                        },
                        children: el
                          ? W.default.Messages
                              .ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON
                          : W.default.Messages
                              .ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON,
                      }),
                  ],
                });
              })(),
              ep &&
                (() => {
                  let e = null != E && !Q && $,
                    t = () => {
                      e &&
                        (null == y || y(),
                        !ef &&
                          !P &&
                          D.default.track(
                            B.AnalyticEvents
                              .EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED,
                            ed
                          ),
                        eh(!ef));
                    };
                  return (0, l.jsxs)("div", {
                    className: z.guildSection,
                    children: [
                      (0, l.jsx)(d.FormTitle, {
                        className: z.guildTitle,
                        children: Q
                          ? W.default.Messages
                              .EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION
                          : W.default.Messages
                              .EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION,
                      }),
                      (0, l.jsx)(Y, {
                        expressionSourceGuild:
                          null != E ? E : C.default.createFromGuildRecord(T),
                        hasJoinedExpressionSourceGuild: Q,
                        isDisplayingJoinGuildButtonInPopout: ec,
                      }),
                      e &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (() => {
                              let e =
                                W.default.Messages
                                  .EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                              return (0, l.jsx)(d.Clickable, {
                                onClick: t,
                                className: z.showMoreEmojis,
                                children: (0, l.jsxs)(j.default, {
                                  children: [
                                    (0, l.jsx)(d.Text, {
                                      className: z.showMoreEmojisLabel,
                                      "aria-label": e,
                                      variant: "text-xs/normal",
                                      color: "none",
                                      children: e,
                                    }),
                                    (0, l.jsx)(b.default, {
                                      className: i(z.showMoreEmojisArrow, {
                                        [z.showMoreEmojisArrowCollapsed]: !ef,
                                      }),
                                    }),
                                  ],
                                }),
                              });
                            })(),
                            null != u.emojiId &&
                              ef &&
                              (0, l.jsx)(q, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: E,
                                popoutData: er,
                                onClose: M,
                                hasJoinedEmojiSourceGuild: Q,
                                isDisplayingButtonInTopSection: ec || em,
                              }),
                          ],
                        }),
                    ],
                  });
                })(),
            ],
          });
        },
        q = e => {
          var t;
          let {
              emojiId: n,
              expressionSourceGuild: a,
              hasJoinedEmojiSourceGuild: s,
              popoutData: i,
              onClose: r,
              isDisplayingButtonInTopSection: o,
            } = e,
            u = (
              null !== (t = null == a ? void 0 : a.emojis) && void 0 !== t
                ? t
                : []
            )
              .slice(0, 13)
              .filter(e => e.id !== n)
              .slice(0, 12),
            { type: c, description: f } = i;
          return (0, l.jsxs)(j.default, {
            wrap: j.default.Wrap.WRAP,
            align: j.default.Align.CENTER,
            justify: j.default.Justify.CENTER,
            className: z.otherEmojisContainer,
            children: [
              s
                ? null
                : u.map(e =>
                    (0, l.jsx)(
                      d.Tooltip,
                      {
                        text: e.require_colons
                          ? ":".concat(e.name, ":")
                          : e.name,
                        ...F.EXPRESSION_TOOLTIP_PROPS,
                        children: t =>
                          (0, l.jsx)(m.default, {
                            className: z.otherEmoji,
                            emojiId: e.id,
                            animated: e.animated,
                            ...t,
                          }),
                      },
                      e.id
                    )
                  ),
              !o &&
                (c === V.EmojiPopoutType.GET_PREMIUM
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(N.default, {
                          subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
                          buttonText: i.text,
                          className: z.ctaButton,
                          fullWidth: !0,
                          onClick: () => r(),
                        }),
                        null != f &&
                          (0, l.jsx)("div", {
                            className: z.ctaDescription,
                            children: (0, l.jsx)(d.Text, {
                              variant: "text-sm/medium",
                              "aria-label": f,
                              children: f,
                            }),
                          }),
                      ],
                    })
                  : c === V.EmojiPopoutType.JOIN_GUILD
                    ? (0, l.jsx)(d.Button, {
                        size: d.Button.Sizes.SMALL,
                        className: z.ctaButton,
                        color: d.ButtonColors.BRAND,
                        fullWidth: !0,
                        onClick: () => {
                          (0, U.startLurking)(a.id, {});
                        },
                        children: i.text,
                      })
                    : null),
            ],
          });
        };
    },
    933629: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EXPRESSION_TOOLTIP_PROPS: function () {
            return Z;
          },
          renderVideoComponent: function () {
            return X;
          },
          renderAudioComponent: function () {
            return K;
          },
          renderVoiceMessageAudioComponent: function () {
            return q;
          },
          renderImageComponent: function () {
            return Q;
          },
          renderMaskedLinkComponent: function () {
            return $;
          },
          renderPlaintextFilePreview: function () {
            return ee;
          },
          JumpBarType: function () {
            return l;
          },
          JumpToPresentBar: function () {
            return et;
          },
          ErrorLoadingBar: function () {
            return en;
          },
          NewMessagesBar: function () {
            return el;
          },
          NewTopicsBar: function () {
            return ea;
          },
          TopicsPill: function () {
            return ei;
          },
          renderClickableTooltipNode: function () {
            return er;
          },
          MessagePopoutContent: function () {
            return eo;
          },
          PopoutLoadingAnimation: function () {
            return eu;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("917351"),
        d = n.n(u),
        c = n("118810"),
        m = n("446674"),
        f = n("77078"),
        h = n("819689"),
        p = n("267363"),
        g = n("817480"),
        E = n("340616"),
        C = n("115718"),
        v = n("84339"),
        I = n("298878"),
        S = n("793237"),
        _ = n("347738"),
        x = n("584998"),
        N = n("845579"),
        T = n("876308"),
        M = n("660478"),
        A = n("697218"),
        O = n("663175"),
        j = n("888673"),
        y = n("839952"),
        L = n("476765"),
        R = n("62843"),
        b = n("461380"),
        P = n("171710"),
        D = n("945330"),
        w = n("909004"),
        U = n("599110"),
        k = n("449008"),
        V = n("874276"),
        F = n("49111"),
        B = n("894282"),
        H = n("995307"),
        G = n("719347"),
        W = n("782340"),
        z = n("620109");
      let Z = { delay: 300, position: "top" },
        J = e => t => {
          null == e || e(t), (0, V.setVolume)(t);
        },
        Y = e => t => {
          null == e || e(t), (0, V.setMuted)(t);
        };
      function X(e) {
        let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: a,
            alt: r,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            ...d
          } = e,
          c = J(t),
          m = Y(n);
        return (
          (l = null == l ? V.getVolume : l),
          (a = null == a ? V.getMuted : a),
          (0, s.jsxs)(i.Fragment, {
            children: [
              (0, s.jsx)(j.default, {
                ...d,
                alt: r,
                volume: l,
                autoMute: a,
                onVolumeChange: c,
                onMute: m,
                renderLinkComponent: $,
                renderOverlayContent: u,
              }),
              null != o && o(),
            ],
          })
        );
      }
      function K(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: a,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...u
          } = e,
          d = J(t),
          c = Y(l);
        return (
          (n = null == n ? V.getVolume : n),
          (0, s.jsxs)(i.Fragment, {
            children: [
              (0, s.jsx)(O.default, {
                ...u,
                onVolumeChange: d,
                onMute: c,
                onVolumeShow: a,
                onVolumeHide: r,
                volume: n,
                autoMute: () => !1,
                renderLinkComponent: $,
              }),
              null != o && o(),
            ],
          })
        );
      }
      function q(e) {
        let { onVolumeChange: t, volume: n, onMute: l, ...a } = e,
          i = J(t),
          r = Y(l);
        return (
          (n = null == n ? V.getVolume : n),
          (0, s.jsx)(T.default, {
            ...a,
            onVolumeChange: i,
            onMute: r,
            volume: n,
          })
        );
      }
      function Q(e) {
        let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: a,
            imageContainerClassName: r,
            disableAltTextDisplay: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: c,
          } = e,
          m = d === G.MediaLayoutType.MOSAIC,
          h =
            !u &&
            N.ViewImageDescriptions.getSetting() &&
            null != t &&
            "" !== t &&
            !0 !== n,
          p = e => {
            let { altText: t } = e;
            return (0, s.jsxs)(f.Dialog, {
              "aria-label":
                W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
              className: z.mediaMosaicAltTextPopout,
              onKeyDown: e => {
                e.key === B.KeyboardEventKey.Escape &&
                  setTimeout(() => {
                    var e;
                    return null === (e = E.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  }, 0);
              },
              children: [
                (0, s.jsx)("span", {
                  className: z.mediaMosaicAltTextPopoutTitle,
                  children:
                    W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                }),
                (0, s.jsx)("span", {
                  className: z.mediaMosaicAltTextPopoutDescription,
                  children: t,
                }),
              ],
            });
          },
          E = i.createRef();
        return (0, s.jsxs)("div", {
          className: o(z.imageContent, a),
          children: [
            (0, s.jsxs)("div", {
              className: o(z.imageContainer, r),
              style: c,
              children: [
                (0, s.jsx)(g.default, { ...e, renderLinkComponent: $ }),
                null != l && l(),
              ],
            }),
            m &&
              h &&
              (0, s.jsx)("div", {
                className: z.mediaMosaicAltTextContainer,
                children: (0, s.jsx)(f.Popout, {
                  animation: f.Popout.Animation.FADE,
                  renderPopout: () => (0, s.jsx)(p, { altText: t }),
                  children: e =>
                    (0, s.jsx)(f.FocusRing, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                        ...e,
                        type: "button",
                        ref: E,
                        "aria-label":
                          W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                        className: z.mediaMosaicAltText,
                        children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA,
                      }),
                    }),
                }),
              }),
            !m &&
              h &&
              (0, s.jsx)("span", { className: z.altText, children: t }),
          ],
        });
      }
      function $(e) {
        return (0, s.jsx)(E.default, { ...e });
      }
      function ee(e) {
        let { renderAdjacentContent: t, ...n } = e;
        return (0, s.jsxs)(i.Fragment, {
          children: [(0, s.jsx)(y.default, { ...n }), null != t && t()],
        });
      }
      ((a = l || (l = {}))[(a.OLD_MESSAGES = 0)] = "OLD_MESSAGES"),
        (a[(a.REPLY = 1)] = "REPLY");
      let et = e => {
          let { type: t = 0, onClick: n } = e;
          return (0, s.jsx)(R.MessagesInteractionContext.Consumer, {
            children: e =>
              e.disableInteractions
                ? null
                : (0, s.jsxs)("div", {
                    className: z.jumpToPresentBar,
                    children: [
                      (0, s.jsx)(f.FocusRing, {
                        offset: 4,
                        children: (0, s.jsx)("button", {
                          type: "button",
                          onClick: n,
                          className: z.barButtonMain,
                          children: (function (e) {
                            switch (e) {
                              case 0:
                                return W.default.Messages
                                  .YOURE_VIEWING_OLDER_MESSAGES;
                              case 1:
                                return W.default.Messages
                                  .JUMP_BAR_VIEWING_REPLY;
                              default:
                                return (0, k.assertNever)(e);
                            }
                          })(t),
                        }),
                      }),
                      null != n
                        ? (0, s.jsx)(f.FocusRing, {
                            offset: 4,
                            children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: n,
                              className: z.barButtonAlt,
                              children: [
                                (function (e) {
                                  switch (e) {
                                    case 0:
                                      return W.default.Messages.JUMP_TO_PRESENT;
                                    case 1:
                                      return W.default.Messages
                                        .JUMP_TO_ORIGINAL_MESSAGE;
                                    default:
                                      return (0, k.assertNever)(e);
                                  }
                                })(t),
                                (0, s.jsx)(b.default, {
                                  className: z.barButtonIcon,
                                }),
                              ],
                            }),
                          })
                        : (0, s.jsx)(f.Spinner, {
                            type: f.Spinner.Type.PULSING_ELLIPSIS,
                            className: z.spinner,
                            itemClassName: z.spinnerItem,
                          }),
                    ],
                  }),
          });
        },
        en = e => {
          let { onClick: t, loading: n } = e;
          return (0, s.jsx)(R.MessagesInteractionContext.Consumer, {
            children: e =>
              e.disableInteractions
                ? null
                : (0, s.jsxs)(f.Clickable, {
                    className: z.messagesErrorBar,
                    onClick: t,
                    focusProps: {
                      offset: { top: 4, right: 4, bottom: 12, left: 4 },
                    },
                    children: [
                      (0, s.jsx)("div", {
                        className: z.barButtonMain,
                        children: W.default.Messages.MESSAGES_FAILED_TO_LOAD,
                      }),
                      n
                        ? (0, s.jsx)(f.Spinner, {
                            type: f.Spinner.Type.PULSING_ELLIPSIS,
                            className: z.spinner,
                            itemClassName: z.spinnerItem,
                          })
                        : (0, s.jsx)("div", {
                            className: z.barButtonAlt,
                            children:
                              W.default.Messages
                                .MESSAGES_FAILED_TO_LOAD_TRY_AGAIN,
                          }),
                    ],
                  }),
          });
        };
      function el(e) {
        let { content: t, channelId: n } = e,
          [l] = i.useState(() =>
            (0, L.uid)("NewMessagesBarJumpToNewMessages_")
          ),
          a = i.useCallback(() => {
            let e = M.default.ackMessageId(n);
            null != e
              ? h.default.jumpToMessage({
                  channelId: n,
                  messageId: e,
                  offset: 1,
                  context: "Mark As Read",
                })
              : h.default.jumpToMessage({
                  channelId: n,
                  messageId: n,
                  offset: 1,
                  context: "Mark As Read",
                });
          }, [n]),
          r = i.useCallback(() => {
            (0, p.ack)(n);
          }, [n]),
          { disableInteractions: u } = i.useContext(
            R.MessagesInteractionContext
          );
        return u
          ? null
          : (0, s.jsxs)("div", {
              className: o(z.newMessagesBar, { [z.disableInteractions]: u }),
              children: [
                (0, s.jsx)(f.FocusRing, {
                  offset: 4,
                  children: (0, s.jsx)("button", {
                    type: "button",
                    className: z.barButtonMain,
                    onClick: a,
                    "aria-label":
                      W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                    "aria-describedby": l,
                    children: (0, s.jsx)("span", {
                      id: l,
                      className: z.span,
                      children: t,
                    }),
                  }),
                }),
                (0, s.jsx)(f.FocusRing, {
                  offset: 4,
                  children: (0, s.jsxs)("button", {
                    type: "button",
                    onClick: r,
                    className: z.barButtonAlt,
                    children: [
                      W.default.Messages.MARK_AS_READ,
                      (0, s.jsx)(P.default, { className: z.barButtonIcon }),
                    ],
                  }),
                }),
              ],
            });
      }
      function ea(e) {
        var t, n, l;
        let { channel: a, content: r, scrollManager: u } = e,
          { disableInteractions: g } = i.useContext(
            R.MessagesInteractionContext
          ),
          [E, N] = i.useState(null),
          T = i.useRef(null),
          [O, j] = i.useState(null),
          y = i.useRef(null),
          L = (0, m.useStateFromStoresArray)(
            [_.default],
            () => {
              var e;
              return null !== (e = _.default.summaries(a.id)) && void 0 !== e
                ? e
                : [];
            },
            [a]
          ),
          V = (0, v.default)(L);
        i.useEffect(() => {
          !d.isEqual(V, L) &&
            U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
              num_summaries: L.length,
              message_counts: L.map(e => e.count),
              start_message_ids: L.map(e => e.startId),
              end_message_ids: L.map(e => e.endId),
              num_participants: L.map(e => e.people.length),
              guild_id: a.guild_id,
              channel_id: a.id,
              channel_type: a.type,
            });
        }, [L, V, a.guild_id, a.id, a.type]);
        let B = (0, m.useStateFromStores)(
            [A.default],
            () => {
              var e;
              return null !==
                (e =
                  null == L
                    ? void 0
                    : L.map(e => {
                        var t;
                        return null === (t = e.people) || void 0 === t
                          ? void 0
                          : t
                              .map(e => {
                                var t;
                                return null !== (t = A.default.getUser(e)) &&
                                  void 0 !== t
                                  ? t
                                  : null;
                              })
                              .filter(k.isNotNullish);
                      })) && void 0 !== e
                ? e
                : [];
            },
            [L],
            es
          ),
          G =
            null !==
              (n = (0, m.useStateFromStores)([_.default], () =>
                _.default.visibleSummaryIndex()
              )) && void 0 !== n
              ? n
              : -1,
          Z =
            null == L
              ? void 0
              : null === (t = L[G]) || void 0 === t
                ? void 0
                : t.topic;
        null == Z &&
          null == E &&
          (null == L ? void 0 : L.length) >= 1 &&
          (Z = null === (l = L[0]) || void 0 === l ? void 0 : l.topic);
        let J = i.useMemo(
            () =>
              d.debounce(e => {
                var t;
                N(
                  null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                    ? t
                    : null
                );
              }, 64),
            [N]
          ),
          Y = i.useMemo(
            () =>
              d.throttle(
                () => {
                  (0, S.setHighlightedSummary)(null);
                },
                1200,
                { trailing: !1 }
              ),
            []
          ),
          X = i.useCallback(
            e => {
              Y(), J(e);
            },
            [J, Y]
          ),
          [K, q] = i.useState(!1),
          Q = i.useCallback(() => {
            U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
              topics_dropdown_open: !K,
              num_summaries: L.length,
              message_counts: L.map(e => e.count),
              start_message_ids: L.map(e => e.startId),
              end_message_ids: L.map(e => e.endId),
              num_participants: L.map(e => e.people.length),
              guild_id: a.guild_id,
              channel_id: a.id,
              channel_type: a.type,
            }),
              q(!K);
          }, [K, L, q, a]),
          $ = i.useCallback(
            function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : H.SummariesTopicClickedSource.PILL_DROPDOWN,
                n = L[e];
              if (null == n) return;
              (0, S.setSelectedSummary)(a.id, n.id),
                (0, S.setHighlightedSummary)(a.id, n.id);
              let l = () => {
                u.removeScrollCompleteCallback(l),
                  setTimeout(() => {
                    u.addAutomaticAnchorCallback(X, !1);
                  }, 100);
              };
              u.removeAutomaticAnchorCallback(X),
                u.addScrollCompleteCallback(l),
                U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                  source: t,
                  message_id: n.startId,
                  guild_id: a.guild_id,
                  channel_id: a.id,
                  channel_type: a.type,
                }),
                h.default.jumpToMessage({
                  channelId: a.id,
                  messageId: n.startId,
                  flash: !0,
                  offset: 0,
                  jumpType: C.JumpTypes.ANIMATED,
                  context: "Summary Jump",
                });
            },
            [L, a, X, u]
          ),
          ee = i.useCallback(e => {
            var t;
            q(e);
            let n =
              null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && j(n);
          }, []);
        i.useEffect(() => {
          if (null != O && K) {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollTo({ top: O });
          }
        }, [O, K]);
        let et = i.useCallback(
          e => {
            var t;
            !(
              (0, c.isElement)(e.target) &&
              (null === (t = T.current) || void 0 === t
                ? void 0
                : t.contains(e.target))
            ) &&
              (K &&
                U.default.track(
                  F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED,
                  {
                    topics_dropdown_open: !1,
                    num_summaries: L.length,
                    message_counts: L.map(e => e.count),
                    start_message_ids: L.map(e => e.startId),
                    end_message_ids: L.map(e => e.endId),
                    num_participants: L.map(e => e.people.length),
                    guild_id: a.guild_id,
                    channel_id: a.id,
                    channel_type: a.type,
                  }
                ),
              ee(!1));
          },
          [K, L, a, ee]
        );
        i.useEffect(
          () => (
            u.addAutomaticAnchorCallback(X),
            () => {
              u.removeAutomaticAnchorCallback(X);
            }
          ),
          [u, X]
        ),
          (0, S.useSummaryPolling)(a.id, !0),
          i.useEffect(
            () => (
              document.addEventListener("mousedown", et),
              () => {
                document.removeEventListener("mousedown", et);
              }
            ),
            [et]
          );
        let en = i.useMemo(
            () =>
              (0, s.jsx)(x.default, {
                channel: a,
                summaries: L,
                summariesMembers: B,
                selectTopic: $,
                setOpen: ee,
              }),
            [L, B, $, ee, a]
          ),
          el = i.useCallback(() => {
            let e = M.default.ackMessageId(a.id);
            null != e
              ? h.default.jumpToMessage({
                  channelId: a.id,
                  messageId: e,
                  offset: 1,
                  context: "Mark As Read",
                })
              : h.default.jumpToMessage({
                  channelId: a.id,
                  messageId: a.id,
                  offset: 1,
                  context: "Mark As Read",
                });
          }, [a.id]),
          ea = i.useCallback(() => {
            (0, p.ack)(a.id);
          }, [a.id]),
          ei = W.default.Messages.SUMMARIES_NO_SUMMARIES;
        return (
          L.length > 0 &&
            (ei =
              "" === Z || null == Z
                ? W.default.Messages.SUMMARIES_VIEW_ALL
                : Z),
          g
            ? null
            : (0, s.jsxs)("div", {
                ref: T,
                className: o(z.newTopicsBarContainer, z.containerMarginTop),
                children: [
                  (0, s.jsx)("div", {
                    className: o(z.newTopicsBarTopicSection),
                    children: (0, s.jsx)(f.Clickable, {
                      className: z.newTopicsBarTextClickable,
                      "aria-label": W.default.Messages.SUMMARY_PILL,
                      onClick: Q,
                      children: (0, s.jsxs)("div", {
                        className: o({
                          [z.newTopicsBarTextUnselected]: !K,
                          [z.newTopicsBarTextSelected]: K,
                        }),
                        children: [
                          (0, s.jsx)(w.default, {
                            className: z.newTopicsBarIcon,
                            width: 16,
                            height: 16,
                          }),
                          (0, s.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            className: o(
                              z.newTopicsBarCompact,
                              z.newTopicsBarText
                            ),
                            children: ei,
                          }),
                          (0, s.jsx)(b.default, {
                            width: 16,
                            height: 16,
                            direction: b.default.Directions.DOWN,
                            className: z.newTopicsBarCaret,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsx)(f.Clickable, {
                    onClick: el,
                    className: o(z.barButtonMain, z.newTopicsBarInitial),
                    children: r,
                  }),
                  (0, s.jsxs)(f.Clickable, {
                    onClick: ea,
                    className: o(z.barButtonAlt, z.flexEnd),
                    children: [
                      (0, s.jsx)("div", {
                        className: z.newTopicsBarCompact,
                        children: W.default.Messages.MARK_AS_READ,
                      }),
                      (0, s.jsx)(P.default, { className: z.barButtonIcon }),
                    ],
                  }),
                  K &&
                    (0, s.jsxs)("div", {
                      className: z.topicsDropdown,
                      children: [
                        (0, s.jsxs)("div", {
                          className: z.topicsDropdownHeading,
                          children: [
                            (0, s.jsxs)("div", {
                              className: z.topicsDropdownHeadingText,
                              children: [
                                (0, s.jsx)(w.default, {
                                  className: z.topicsPillHeadingIcon,
                                  width: 18,
                                  height: 20,
                                }),
                                (0, s.jsx)(f.Heading, {
                                  variant: "heading-md/bold",
                                  color: "header-primary",
                                  lineClamp: 1,
                                  children: W.default.Messages.SUMMARIES,
                                }),
                                (0, s.jsx)(I.default, {
                                  className: z.summariesBetaTag,
                                }),
                              ],
                            }),
                            (0, s.jsx)(f.Clickable, {
                              "aria-label": W.default.Messages.CLOSE,
                              onClick: Q,
                              className: z.topicsDropdownClose,
                              children: (0, s.jsx)(D.default, {}),
                            }),
                          ],
                        }),
                        (0, s.jsx)(f.Scroller, {
                          ref: y,
                          className: z.topicsScroller,
                          fade: !0,
                          children: en,
                        }),
                      ],
                    }),
                ],
              })
        );
      }
      function es(e, t) {
        return (
          null != t &&
          e.length === t.length &&
          !e.some((e, n) => {
            var l, a;
            return (
              (l = e),
              null == (a = t[n]) ||
                l.length !== a.length ||
                !!l.some((e, t) => a[t] !== e)
            );
          })
        );
      }
      function ei(e) {
        var t, n, l;
        let { channel: a, scrollManager: r } = e,
          { disableInteractions: u } = i.useContext(
            R.MessagesInteractionContext
          ),
          [p, g] = i.useState(null),
          E = i.useRef(null),
          [N, T] = i.useState(null),
          M = i.useRef(null),
          O = (0, m.useStateFromStoresArray)(
            [_.default],
            () => {
              var e;
              return null !== (e = _.default.summaries(a.id)) && void 0 !== e
                ? e
                : [];
            },
            [a]
          ),
          j = (0, v.default)(O);
        i.useEffect(() => {
          !d.isEqual(j, O) &&
            U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
              num_summaries: O.length,
              message_counts: O.map(e => e.count),
              start_message_ids: O.map(e => e.startId),
              end_message_ids: O.map(e => e.endId),
              num_participants: O.map(e => e.people.length),
              guild_id: a.guild_id,
              channel_id: a.id,
              channel_type: a.type,
            });
        }, [O, j, a.guild_id, a.id, a.type]);
        let y = (0, m.useStateFromStores)(
            [A.default],
            () => {
              var e;
              return null !==
                (e =
                  null == O
                    ? void 0
                    : O.map(e => {
                        var t;
                        return null === (t = e.people) || void 0 === t
                          ? void 0
                          : t
                              .map(e => {
                                var t;
                                return null !== (t = A.default.getUser(e)) &&
                                  void 0 !== t
                                  ? t
                                  : null;
                              })
                              .filter(k.isNotNullish);
                      })) && void 0 !== e
                ? e
                : [];
            },
            [O],
            es
          ),
          L =
            null !==
              (n = (0, m.useStateFromStores)([_.default], () =>
                _.default.visibleSummaryIndex()
              )) && void 0 !== n
              ? n
              : -1,
          P =
            null == O
              ? void 0
              : null === (t = O[L]) || void 0 === t
                ? void 0
                : t.topic;
        null == P &&
          null == p &&
          (null == O ? void 0 : O.length) >= 1 &&
          (P = null === (l = O[0]) || void 0 === l ? void 0 : l.topic);
        let V = i.useMemo(() => d.get(O, L - 1), [L, O]),
          B = i.useMemo(() => d.get(O, L + 1), [L, O]),
          G = i.useMemo(
            () =>
              d.debounce(e => {
                var t;
                g(
                  null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                    ? t
                    : null
                );
              }, 64),
            [g]
          ),
          Z = i.useMemo(
            () =>
              d.throttle(
                () => {
                  (0, S.setHighlightedSummary)(null);
                },
                1200,
                { trailing: !1 }
              ),
            []
          ),
          J = i.useCallback(
            e => {
              Z(), G(e);
            },
            [G, Z]
          ),
          [Y, X] = i.useState(!1),
          K = i.useCallback(() => {
            U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
              topics_dropdown_open: !Y,
              num_summaries: O.length,
              message_counts: O.map(e => e.count),
              start_message_ids: O.map(e => e.startId),
              end_message_ids: O.map(e => e.endId),
              num_participants: O.map(e => e.people.length),
              guild_id: a.guild_id,
              channel_id: a.id,
              channel_type: a.type,
            }),
              X(!Y);
          }, [Y, O, X, a]),
          q = i.useCallback(
            function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : H.SummariesTopicClickedSource.PILL_DROPDOWN,
                n = O[e];
              if (null == n) return;
              (0, S.setSelectedSummary)(a.id, n.id),
                (0, S.setHighlightedSummary)(a.id, n.id);
              let l = () => {
                r.removeScrollCompleteCallback(l),
                  setTimeout(() => {
                    r.addAutomaticAnchorCallback(J, !1);
                  }, 100);
              };
              r.removeAutomaticAnchorCallback(J),
                r.addScrollCompleteCallback(l),
                U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                  source: t,
                  message_id: n.startId,
                  guild_id: a.guild_id,
                  channel_id: a.id,
                  channel_type: a.type,
                }),
                h.default.jumpToMessage({
                  channelId: a.id,
                  messageId: n.startId,
                  flash: !0,
                  offset: 0,
                  jumpType: C.JumpTypes.ANIMATED,
                  context: "Summary Jump",
                });
            },
            [O, a, J, r]
          ),
          Q = i.useCallback(() => {
            q(L - 1, H.SummariesTopicClickedSource.PILL_NEXT_ARROW);
          }, [q, L]),
          $ = i.useCallback(() => {
            q(L + 1, H.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW);
          }, [L, q]),
          ee = i.useCallback(e => {
            var t;
            X(e);
            let n =
              null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && T(n);
          }, []);
        i.useEffect(() => {
          if (null != N && Y) {
            var e;
            null === (e = M.current) || void 0 === e || e.scrollTo({ top: N });
          }
        }, [N, Y]);
        let et = i.useCallback(
          e => {
            var t;
            !(
              (0, c.isElement)(e.target) &&
              (null === (t = E.current) || void 0 === t
                ? void 0
                : t.contains(e.target))
            ) &&
              (Y &&
                U.default.track(
                  F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED,
                  {
                    topics_dropdown_open: !1,
                    num_summaries: O.length,
                    message_counts: O.map(e => e.count),
                    start_message_ids: O.map(e => e.startId),
                    end_message_ids: O.map(e => e.endId),
                    num_participants: O.map(e => e.people.length),
                    guild_id: a.guild_id,
                    channel_id: a.id,
                    channel_type: a.type,
                  }
                ),
              ee(!1));
          },
          [Y, O, a, ee]
        );
        i.useEffect(
          () => (
            r.addAutomaticAnchorCallback(J),
            () => {
              r.removeAutomaticAnchorCallback(J);
            }
          ),
          [r, J]
        ),
          (0, S.useSummaryPolling)(a.id, !0),
          i.useEffect(
            () => (
              document.addEventListener("mousedown", et),
              () => {
                document.removeEventListener("mousedown", et);
              }
            ),
            [et]
          );
        let en = i.useMemo(
            () =>
              (0, s.jsx)(x.default, {
                channel: a,
                summaries: O,
                summariesMembers: y,
                selectTopic: q,
                setOpen: ee,
              }),
            [O, y, q, ee, a]
          ),
          el = (0, m.useStateFromStores)([_.default], () =>
            _.default.shouldShowTopicsBar()
          );
        if (!el) return null;
        let ea = W.default.Messages.SUMMARIES_NO_SUMMARIES;
        return (
          O.length > 0 &&
            (ea =
              "" === P || null == P
                ? W.default.Messages.SUMMARIES_VIEW_ALL
                : P),
          u
            ? null
            : (0, s.jsxs)("div", {
                ref: E,
                className: o(z.topicsPillContainer, z.containerMarginTop),
                children: [
                  (0, s.jsxs)("div", {
                    className: z.topicsPill,
                    children: [
                      (0, s.jsx)(f.Clickable, {
                        className: z.topicsPillText,
                        "aria-label": W.default.Messages.SUMMARY_PILL,
                        onClick: K,
                        children: (0, s.jsxs)("div", {
                          className: o({
                            [z.topicsPillTextUnselected]: !Y,
                            [z.topicsPillTextSelected]: Y,
                          }),
                          children: [
                            (0, s.jsx)(w.default, {
                              className: z.topicsPillSummaryIcon,
                              width: 16,
                              height: 16,
                            }),
                            (0, s.jsx)(f.Text, {
                              className: z.topicsPillTextTitle,
                              variant: "text-sm/medium",
                              children: ea,
                            }),
                            (0, s.jsx)(b.default, {
                              width: 16,
                              height: 16,
                              direction: b.default.Directions.DOWN,
                              className: z.topicsPillDropdownCaret,
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: z.topicsPillCarets,
                        children: [
                          (0, s.jsx)(f.Clickable, {
                            "aria-label": W.default.Messages.SUMMARY_PILL_NEXT,
                            onClick: $,
                            className: o(z.topicsPillCaret, z.topicsCaretLeft, {
                              [z.topicsPillCaretDisabled]: null == B,
                            }),
                            children: (0, s.jsx)(b.default, {
                              width: 16,
                              height: 16,
                              direction: b.default.Directions.UP,
                            }),
                          }),
                          (0, s.jsx)(f.Clickable, {
                            "aria-label":
                              W.default.Messages.SUMMARY_PILL_PREVIOUS,
                            onClick: Q,
                            className: o(
                              z.topicsPillCaret,
                              z.topicsCaretRight,
                              { [z.topicsPillCaretDisabled]: null == V }
                            ),
                            children: (0, s.jsx)(b.default, {
                              width: 16,
                              height: 16,
                              direction: b.default.Directions.DOWN,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Y &&
                    (0, s.jsxs)("div", {
                      className: z.topicsDropdown,
                      children: [
                        (0, s.jsxs)("div", {
                          className: z.topicsDropdownHeading,
                          children: [
                            (0, s.jsxs)("div", {
                              className: z.topicsDropdownHeadingText,
                              children: [
                                (0, s.jsx)(w.default, {
                                  className: z.topicsPillHeadingIcon,
                                  width: 18,
                                  height: 20,
                                }),
                                (0, s.jsx)(f.Heading, {
                                  variant: "heading-md/bold",
                                  color: "header-primary",
                                  lineClamp: 1,
                                  children: W.default.Messages.SUMMARIES,
                                }),
                                (0, s.jsx)(I.default, {
                                  className: z.summariesBetaTag,
                                }),
                              ],
                            }),
                            (0, s.jsx)(f.Clickable, {
                              "aria-label": W.default.Messages.CLOSE,
                              onClick: K,
                              className: z.topicsDropdownClose,
                              children: (0, s.jsx)(D.default, {}),
                            }),
                          ],
                        }),
                        (0, s.jsx)(f.Scroller, {
                          ref: M,
                          className: z.topicsScroller,
                          fade: !0,
                          children: en,
                        }),
                      ],
                    }),
                ],
              })
        );
      }
      let er = function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return (0, s.jsxs)("div", {
            className: z.tooltip,
            children: [
              (0, s.jsx)(f.Text, {
                color: "none",
                variant: "text-sm/semibold",
                children: e,
              }),
              t &&
                (0, s.jsx)(f.Text, {
                  className: z.clickCTA,
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: W.default.Messages.EMOJI_TOOLTIP_CLICK_CTA,
                }),
            ],
          });
        },
        eo = e => {
          let { children: t, className: n } = e;
          return (0, s.jsx)("div", {
            className: o(z.popoutContainer, n),
            children: t,
          });
        },
        eu = e => {
          let { className: t } = e;
          return (0, s.jsx)(eo, {
            className: t,
            children: (0, s.jsx)("div", {
              className: z.popoutLoadingBackground,
              children: (0, s.jsx)("div", {
                className: z.popoutLoadingForeground,
              }),
            }),
          });
        };
    },
    903962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PLAINTEXT_FILE_EXTENSIONS: function () {
            return l;
          },
          isPlaintextPreviewableFile: function () {
            return a;
          },
        }),
        n("222007");
      let l = new Set([
        "1c",
        "4d",
        "abnf",
        "accesslog",
        "ada",
        "arduino",
        "ino",
        "armasm",
        "arm",
        "avrasm",
        "actionscript",
        "as",
        "alan",
        "ansi",
        "i",
        "log",
        "ln",
        "angelscript",
        "asc",
        "apache",
        "apacheconf",
        "applescript",
        "osascript",
        "arcade",
        "asciidoc",
        "adoc",
        "aspectj",
        "autohotkey",
        "autoit",
        "awk",
        "mawk",
        "nawk",
        "gawk",
        "bash",
        "sh",
        "zsh",
        "basic",
        "bbcode",
        "blade",
        "bnf",
        "brainfuck",
        "bf",
        "csharp",
        "cs",
        "c",
        "h",
        "cpp",
        "hpp",
        "cc",
        "hh",
        "c++",
        "h++",
        "cxx",
        "hxx",
        "cal",
        "cos",
        "cls",
        "cmake",
        "cmake.in",
        "coq",
        "csp",
        "css",
        "csv",
        "capnproto",
        "capnp",
        "chaos",
        "kaos",
        "chapel",
        "chpl",
        "cisco",
        "clojure",
        "clj",
        "coffeescript",
        "coffee",
        "cson",
        "iced",
        "cpc",
        "crmsh",
        "crm",
        "pcmk",
        "crystal",
        "cr",
        "cypher",
        "d",
        "dns",
        "zone",
        "bind",
        "dos",
        "bat",
        "cmd",
        "dart",
        "delphi",
        "dpr",
        "dfm",
        "pas",
        "pascal",
        "freepascal",
        "lazarus",
        "lpr",
        "lfm",
        "diff",
        "patch",
        "django",
        "jinja",
        "dockerfile",
        "docker",
        "dsconfig",
        "dts",
        "dust",
        "dst",
        "dylan",
        "ebnf",
        "elixir",
        "ex",
        "elm",
        "erlang",
        "erl",
        "extempore",
        "xtlang",
        "xtm",
        "fsharp",
        "fs",
        "fix",
        "fortran",
        "f90",
        "f95",
        "gcode",
        "nc",
        "gams",
        "gms",
        "gauss",
        "gss",
        "godot",
        "gdscript",
        "gherkin",
        "gn",
        "gni",
        "go",
        "golang",
        "gf",
        "golo",
        "gololang",
        "gradle",
        "groovy",
        "xml",
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "svg",
        "http",
        "https",
        "haml",
        "handlebars",
        "hbs",
        "html.hbs",
        "html.handlebars",
        "haskell",
        "hs",
        "haxe",
        "hx",
        "hy",
        "hylang",
        "ini",
        "toml",
        "inform7",
        "i7",
        "irpf90",
        "json",
        "java",
        "jsp",
        "javascript",
        "js",
        "jsx",
        "jolie",
        "iol",
        "ol",
        "julia",
        "julia-repl",
        "kotlin",
        "kt",
        "tex",
        "leaf",
        "lean",
        "lasso",
        "ls",
        "lassoscript",
        "less",
        "ldif",
        "lisp",
        "livecodeserver",
        "livescript",
        "lock",
        "ls",
        "lua",
        "makefile",
        "mk",
        "mak",
        "make",
        "markdown",
        "md",
        "mkdown",
        "mkd",
        "mathematica",
        "mma",
        "wl",
        "matlab",
        "maxima",
        "mel",
        "mercury",
        "mirc",
        "mrc",
        "mizar",
        "mojolicious",
        "monkey",
        "moonscript",
        "moon",
        "n1ql",
        "nsis",
        "never",
        "nginx",
        "nginxconf",
        "nim",
        "nimrod",
        "nix",
        "ocl",
        "ocaml",
        "ml",
        "objectivec",
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++",
        "glsl",
        "openscad",
        "scad",
        "ruleslanguage",
        "oxygene",
        "pf",
        "pf.conf",
        "php",
        "php3",
        "php4",
        "php5",
        "php6",
        "php7",
        "parser3",
        "perl",
        "pl",
        "pm",
        "plaintext",
        "txt",
        "text",
        "pony",
        "pgsql",
        "postgres",
        "postgresql",
        "powershell",
        "ps",
        "ps1",
        "processing",
        "prolog",
        "properties",
        "protobuf",
        "puppet",
        "pp",
        "python",
        "py",
        "gyp",
        "profile",
        "python-repl",
        "pycon",
        "k",
        "kdb",
        "qml",
        "r",
        "cshtml",
        "razor",
        "razor-cshtml",
        "reasonml",
        "re",
        "redbol",
        "rebol",
        "red",
        "red-system",
        "rib",
        "rsl",
        "graph",
        "instances",
        "robot",
        "rf",
        "rpm-specfile",
        "rpm",
        "spec",
        "rpm-spec",
        "specfile",
        "ruby",
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb",
        "rust",
        "rs",
        "SAS",
        "sas",
        "scss",
        "sql",
        "p21",
        "step",
        "stp",
        "scala",
        "scheme",
        "scilab",
        "sci",
        "shexc",
        "shell",
        "console",
        "smali",
        "smalltalk",
        "st",
        "sml",
        "ml",
        "solidity",
        "sol",
        "stan",
        "stanfuncs",
        "stata",
        "iecst",
        "scl",
        "structured-text",
        "stylus",
        "styl",
        "subunit",
        "supercollider",
        "sc",
        "svelte",
        "swift",
        "tcl",
        "tk",
        "terraform",
        "tf",
        "hcl",
        "tap",
        "thrift",
        "tp",
        "tsql",
        "twig",
        "craftcms",
        "typescript",
        "ts",
        "tsx",
        "unicorn-rails-log",
        "vbnet",
        "vb",
        "vba",
        "vbscript",
        "vbs",
        "vhdl",
        "vala",
        "verilog",
        "v",
        "vim",
        "axapta",
        "x++",
        "x86asm",
        "xl",
        "tao",
        "xquery",
        "xpath",
        "xq",
        "yml",
        "yaml",
        "zephir",
        "zep",
      ]);
      function a(e) {
        return l.has(e.split(".").slice(-1)[0]);
      }
    },
    305122: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          maybeFetchSoundboardSounds: function () {
            return S;
          },
          uploadSound: function () {
            return _;
          },
          updateSound: function () {
            return x;
          },
          deleteSound: function () {
            return N;
          },
          addFavoriteSound: function () {
            return T;
          },
          removeFavoriteSound: function () {
            return M;
          },
          playSoundLocally: function () {
            return A;
          },
          reportSoundStartedPlaying: function () {
            return O;
          },
          reportSoundFinishedPlaying: function () {
            return j;
          },
          updateUserSoundboardVolume: function () {
            return y;
          },
          muteCustomJoinSound: function () {
            return L;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("917351"),
        a = n.n(l),
        s = n("872717"),
        i = n("913144"),
        r = n("404118"),
        o = n("599417"),
        u = n("872173"),
        d = n("235004"),
        c = n("389480"),
        m = n("24156"),
        f = n("846325"),
        h = n("49111"),
        p = n("397336"),
        g = n("782340");
      let E = async e => {
          try {
            let t = await s.default.get({
                url: h.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                query: { guild_ids: e },
              }),
              n = t.body.map(e =>
                (0, c.soundboardSoundFromAPI)(e, f.DEFAULT_SOUND_GUILD_ID)
              );
            i.default.dispatch({
              type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
              soundboardSounds: n,
            });
          } catch (e) {
            throw (
              (i.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE",
              }),
              new o.default(e))
            );
          }
        },
        C = e =>
          new Promise(t => {
            let n = () => {
              i.default.unsubscribe(e, n), setTimeout(t, 0);
            };
            i.default.subscribe(e, n);
          }),
        v = e => {
          if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
          i.default.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
          let t = C("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
          return E(e), t;
        },
        I = () => {
          let e = (0, m.getGuildIdsToFetchSoundsFor)();
          if (0 === e.length) return Promise.resolve();
          let t = C("SOUNDBOARD_SOUNDS_RECEIVED");
          return (
            i.default.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
            i.default.dispatch({
              type: "REQUEST_SOUNDBOARD_SOUNDS",
              guildIds: e,
            }),
            t
          );
        },
        S = () =>
          __OVERLAY__
            ? (i.default.dispatch({
                type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
              }),
              Promise.all([]))
            : Promise.all([v(), I()]);
      async function _(e) {
        let {
            guildId: t,
            name: n,
            sound: l,
            volume: a,
            emojiId: i,
            emojiName: r,
          } = e,
          o = await s.default.post({
            url: h.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
            body: { name: n, sound: l, volume: a, emoji_id: i, emoji_name: r },
          }),
          u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u;
      }
      async function x(e) {
        let {
            guildId: t,
            soundId: n,
            name: l,
            volume: a,
            emojiId: i,
            emojiName: r,
          } = e,
          o = await s.default.patch({
            url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
            body: { name: l, volume: a, emoji_id: i, emoji_name: r },
          }),
          u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u;
      }
      async function N(e, t) {
        await s.default.delete({
          url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
          oldFormErrors: !0,
        });
      }
      function T(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync(
          "favoriteSoundboardSounds",
          t =>
            a.size(t.soundIds) >= p.MAX_FAVORITES
              ? (r.default.show({
                  title: g.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                  body: g.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: p.MAX_FAVORITES,
                  }),
                }),
                !1)
              : !t.soundIds.includes(e) && void t.soundIds.push(e),
          p.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
      function M(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync(
          "favoriteSoundboardSounds",
          t => {
            t.soundIds = t.soundIds.filter(t => t !== e);
          },
          p.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
      function A(e, t, n) {
        i.default.dispatch({
          type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
          sound: t,
          channelId: e,
          trigger: n,
        });
      }
      function O(e, t) {
        i.default.dispatch({
          type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
          soundId: e,
          userId: t,
        });
      }
      function j(e, t) {
        i.default.dispatch({
          type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
          soundId: e,
          userId: t,
        });
      }
      function y(e) {
        i.default.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume: e });
      }
      function L(e) {
        i.default.dispatch({
          type: "SOUNDBOARD_MUTE_JOIN_SOUND",
          channelId: e,
        });
      }
    },
    462550: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("884691");
      let a = { currentPreviewRef: l.createRef() },
        s = l.createContext(a);
      var i = s;
    },
    389480: function (e, t, n) {
      "use strict";
      var l, a, s, i, r, o, u, d, c, m, f, h, p, g;
      function E(e, t) {
        let {
          sound_id: n,
          emoji_id: l,
          emoji_name: a,
          user_id: s,
          available: i,
          ...r
        } = e;
        return {
          ...r,
          soundId: n,
          guildId: t,
          emojiId: l,
          emojiName: a,
          userId: s,
          available: null == i || i,
        };
      }
      function C(e) {
        let {
          soundId: t,
          guildId: n,
          emojiId: l,
          emojiName: a,
          userId: s,
          ...i
        } = e;
        return {
          ...i,
          sound_id: t,
          guild_id: n,
          emoji_id: l,
          emoji_name: a,
          user_id: s,
        };
      }
      n.r(t),
        n.d(t, {
          SoundButtonOverlay: function () {
            return l;
          },
          AnalyticsSoundType: function () {
            return a;
          },
          AnalyticsChangeType: function () {
            return s;
          },
          AnalyticsSoundSource: function () {
            return i;
          },
          soundboardSoundFromAPI: function () {
            return E;
          },
          soundboardSoundToAPI: function () {
            return C;
          },
          SoundboardSoundGridSectionType: function () {
            return r;
          },
          SoundboardSoundItemType: function () {
            return o;
          },
          LocalSoundTrigger: function () {
            return u;
          },
        }),
        ((d = l || (l = {}))[(d.PLAY = 0)] = "PLAY"),
        (d[(d.ADD = 1)] = "ADD"),
        ((c = a || (a = {})).ENTRY = "entry_sound"),
        (c.EXIT = "exit_sound"),
        (c.DEFAULT = "default"),
        ((m = s || (s = {})).ADDED = "added"),
        (m.UPDATED = "updated"),
        (m.REMOVED = "removed"),
        ((f = i || (i = {})).DEFAULT = "default"),
        (f.CUSTOM = "custom"),
        ((h = r || (r = {}))[(h.FAVORITES = 0)] = "FAVORITES"),
        (h[(h.RECENTLY_HEARD = 1)] = "RECENTLY_HEARD"),
        (h[(h.FREQUENTLY_USED = 2)] = "FREQUENTLY_USED"),
        (h[(h.GUILD = 3)] = "GUILD"),
        (h[(h.DEFAULTS = 4)] = "DEFAULTS"),
        (h[(h.SEARCH = 5)] = "SEARCH"),
        ((p = o || (o = {}))[(p.SOUND = 0)] = "SOUND"),
        (p[(p.ADD_SOUND = 1)] = "ADD_SOUND"),
        ((g = u || (u = {}))[(g.GIFT_CODE = 0)] = "GIFT_CODE"),
        (g[(g.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (g[(g.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL");
    },
    24156: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildIdsToFetchSoundsFor: function () {
            return o;
          },
          getGuildIdsToFetchSoundsFor: function () {
            return u;
          },
        });
      var l = n("884691"),
        a = n("65597"),
        s = n("305961"),
        i = n("235004");
      function r(e, t) {
        let n = Object.keys(e);
        return n.filter(e => null == t.get(e));
      }
      function o() {
        let e = (0, a.default)([s.default], () => s.default.getGuilds()),
          t = (0, a.default)([i.default], () => i.default.getSounds());
        return (0, l.useMemo)(() => r(e, t), [e, t]);
      }
      function u() {
        let e = s.default.getGuilds(),
          t = i.default.getSounds();
        return r(e, t);
      }
    },
    204653: function (e, t, n) {
      "use strict";
      var l, a, s, i;
      function r(e, t) {
        return {
          id: e.id,
          topic: e.topic,
          summShort: e.summ_short,
          people: Array.from(new Set(e.people)),
          startId: e.start_id,
          endId: e.end_id,
          count: e.count,
          channelId: t,
          source: e.source,
          type: e.type,
        };
      }
      n.r(t),
        n.d(t, {
          createSummaryFromServer: function () {
            return r;
          },
        }),
        n("222007"),
        ((s = l || (l = {}))[(s.SOURCE_0 = 0)] = "SOURCE_0"),
        (s[(s.SOURCE_1 = 1)] = "SOURCE_1"),
        ((i = a || (a = {}))[(i.UNSET = 0)] = "UNSET"),
        (i[(i.SOURCE_1 = 1)] = "SOURCE_1"),
        (i[(i.SOURCE_2 = 2)] = "SOURCE_2");
    },
    793237: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setHighlightedSummary: function () {
            return x;
          },
          toggleTopicsBar: function () {
            return N;
          },
          setSelectedSummary: function () {
            return T;
          },
          updateVisibleMessages: function () {
            return M;
          },
          useSummaryPolling: function () {
            return O;
          },
          setSummaryFeedback: function () {
            return j;
          },
          deleteSummary: function () {
            return R;
          },
          default: function () {
            return P;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("917351"),
        s = n.n(a),
        i = n("394846"),
        r = n("65597"),
        o = n("872717"),
        u = n("913144"),
        d = n("448993"),
        c = n("734575"),
        m = n("104589"),
        f = n("116460"),
        h = n("42203"),
        p = n("718517"),
        g = n("347738");
      let E = 30 * p.default.Millis.SECOND,
        C = 5 * p.default.Millis.SECOND,
        v = {},
        I = {};
      async function S(e, t) {
        let n, l;
        if (!g.default.shouldFetch(e, t)) return;
        let a = Date.now();
        u.default.dispatch({
          type: "REQUEST_CHANNEL_SUMMARY",
          channelId: e,
          summaryId: t,
          requestedAt: a,
        });
        try {
          let n = await o.default.get(
            "/channels/".concat(e, "/summaries/").concat(t)
          );
          l = null == n ? void 0 : n.body;
        } catch (e) {
          n = new d.APIError(e);
        }
        u.default.dispatch({
          type: "RECEIVE_CHANNEL_SUMMARY",
          channelId: e,
          summary: l,
          error: n,
          requestedAt: a,
          receivedAt: Date.now(),
        });
      }
      async function _(e) {
        var t, n;
        let l, a;
        if (!g.default.shouldFetch(e)) return;
        let i = Date.now();
        u.default.dispatch({
          type: "REQUEST_CHANNEL_SUMMARIES",
          channelId: e,
          requestedAt: i,
        });
        try {
          a = await o.default.get("/channels/".concat(e, "/summaries"));
        } catch (e) {
          l = new d.APIError(e);
        }
        let r =
          (null == a
            ? void 0
            : null === (t = a.body) || void 0 === t
              ? void 0
              : t.summaries) instanceof Array
            ? a.body.summaries
            : null !== (n = null == a ? void 0 : a.body) && void 0 !== n
              ? n
              : [];
        (r = s.takeRight(r, 75)),
          u.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: null != l ? l : void 0,
            requestedAt: i,
            receivedAt: Date.now(),
          });
      }
      function x(e, t) {
        u.default.dispatch({
          type: "SET_HIGHLIGHTED_SUMMARY",
          channelId: e,
          summaryId: null != t ? t : null,
        });
      }
      function N() {
        u.default.dispatch({ type: "TOGGLE_TOPICS_BAR" });
      }
      function T(e, t) {
        null != e && null != t && S(e, t),
          u.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null,
          });
      }
      function M(e, t) {
        u.default.dispatch({
          type: "UPDATE_VISIBLE_MESSAGES",
          topVisibleMessage: null != e ? e : null,
          bottomVisibleMessage: null != t ? t : null,
        });
      }
      function A(e, t) {
        return (
          null == v[e] && (v[e] = 0),
          null === t ? (v[e] = 0) : (v[e] += t),
          v[e]
        );
      }
      function O(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, r.default)([h.default], () => h.default.getChannel(e), [e]),
          [a, s] = l.useState(null),
          o = (0, c.useChannelSummariesExperiment)(n) && !i.isMobile;
        l.useEffect(() => {
          if (o)
            return (
              s(e),
              () => {
                s(null);
              }
            );
        }, [e, o]),
          l.useEffect(() => {
            if ((a !== e && null != a && b.stopPolling(e), o && null != a))
              return (
                (t || (null != e && a !== e)) && b.fetchSummaries(e),
                b.startPolling(e),
                () => {
                  null != a && b.stopPolling(e);
                }
              );
          }, [e, t, a, o]);
      }
      function j(e, t) {
        u.default.dispatch({
          type: "SET_SUMMARY_FEEDBACK",
          summary: e,
          rating: t,
        });
      }
      async function y() {
        var e;
        let t, n;
        if (!g.default.shouldFetchChannelAffinities())
          return Promise.resolve(null);
        let l = Date.now();
        u.default.dispatch({
          type: "REQUEST_CHANNEL_AFFINITIES",
          requestedAt: l,
        });
        try {
          n = await o.default.get("/users/@me/affinities/channels");
        } catch (e) {
          t = new d.APIError(e);
        }
        let a =
          null == n
            ? void 0
            : null === (e = n.body) || void 0 === e
              ? void 0
              : e.channel_affinities;
        u.default.dispatch({
          type: "RECEIVE_CHANNEL_AFFINITIES",
          affinities: a,
          error: null != t ? t : void 0,
          requestedAt: l,
          receivedAt: Date.now(),
        });
      }
      async function L(e) {
        let t,
          n,
          { useQuickSwitcher: l = !0, useChannelAffinities: a = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = null != e ? e : [];
        let s = Date.now();
        if (
          0 ===
          (e = e
            .concat(
              g.default.defaultChannelIds({
                withQuickSwitcher: l,
                withChannelAffinities: a,
              })
            )
            .filter(e => {
              let t = h.default.getChannel(e);
              return (0, c.canSeeChannelSummaries)(t, !1, !0);
            })
            .filter(e => {
              let t = Date.now(),
                n = g.default.status(e);
              if (null == n ? void 0 : n.fetching) return !1;
              let l = null == n ? void 0 : n.lastReceivedAt;
              return null == l || t - l > E;
            })
            .slice(0, 50)).length
        )
          return Promise.resolve(null);
        u.default.dispatch({
          type: "REQUEST_CHANNEL_SUMMARIES_BULK",
          channelIds: e,
          requestedAt: s,
        });
        try {
          n = await o.default.post({
            url: "/users/@me/summaries",
            body: { channel_ids: e },
          });
        } catch (e) {
          t = new d.APIError(e);
        }
        let i = null == n ? void 0 : n.body.summaries;
        u.default.dispatch({
          type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
          requestedAt: s,
          receivedAt: Date.now(),
          summaries: i,
          requestArgs: { channelIds: e },
          error: t,
        });
      }
      async function R(e) {
        try {
          await o.default.delete(
            "/channels/".concat(e.channelId, "/summaries/").concat(e.id)
          ),
            u.default.dispatch({ type: "DELETE_SUMMARY", summary: e });
        } catch (e) {
          throw new d.APIError(e);
        }
      }
      let b = {
        startPolling: function (e) {
          let t = A(e, 1);
          t - 1 == 0 &&
            (I[e] = setInterval(async () => {
              await b.fetchSummaries(e);
            }, C));
        },
        stopPolling: function (e) {
          let t = A(e, -1);
          t <= 0 && (A(e, 0), clearInterval(I[e]));
        },
        setSummaryFeedback: j,
        useSummaryPolling: O,
        updateVisibleMessages: M,
        setSelectedSummary: T,
        setHighlightedSummary: x,
        fetchSummaries: _,
        fetchSummariesBulk: L,
        useChannelSummaries: function (e) {
          let { channelIds: t = [] } = e;
          return (
            !(function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = l.useMemo(() => e.join(","), [e]);
              l.useEffect(() => {
                (async function e() {
                  try {
                    await y();
                  } catch (e) {}
                  try {
                    var e, n;
                    (null === (e = f.default.getProps().results) || void 0 === e
                      ? void 0
                      : e.length) === 0 &&
                      (0, m.search)(
                        null !== (n = f.default.getProps().query) &&
                          void 0 !== n
                          ? n
                          : ""
                      );
                  } catch (e) {}
                  await L(t.split(","));
                })();
              }, [t]);
            })(t),
            (0, r.useStateFromStoresArray)(
              [g.default],
              () => g.default.topSummaries(),
              []
            )
          );
        },
        deleteSummary: R,
      };
      var P = b;
    },
    995307: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SummariesSidebarToggledSource: function () {
            return i;
          },
          SummariesTopicClickedSource: function () {
            return r;
          },
          SummaryFeedbackReasons: function () {
            return o;
          },
          getSummaryFeedbackReasons: function () {
            return d;
          },
        });
      var l,
        a,
        s,
        i,
        r,
        o,
        u = n("782340");
      function d() {
        return [
          {
            value: "DUPLICATED",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED,
          },
          {
            value: "TOO_GENERIC",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC,
          },
          {
            value: "TOO_MANY",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY,
          },
          {
            value: "INACCURATE",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE,
          },
          {
            value: "NOT_USEFUL",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL,
          },
          {
            value: "OTHER",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER,
          },
        ];
      }
      ((l = i || (i = {})).TOOLBAR_BUTTON = "toolbar button"),
        (l.PILL = "pill"),
        ((a = r || (r = {})).SIDEBAR = "sidebar"),
        (a.PILL_DROPDOWN = "pill dropdown"),
        (a.PILL_NEXT_ARROW = "pill next arrow"),
        (a.PILL_PREVIOUS_ARROW = "pill previous arrow"),
        ((s = o || (o = {})).DUPLICATED = "DUPLICATED"),
        (s.TOO_GENERIC = "TOO_GENERIC"),
        (s.TOO_MANY = "TOO_MANY"),
        (s.INACCURATE = "INACCURATE"),
        (s.NOT_USEFUL = "NOT_USEFUL"),
        (s.OTHER = "OTHER");
    },
    347738: function (e, t, n) {
      "use strict";
      let l, a, s, i;
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("834022"),
        n("222007"),
        n("424973"),
        n("808653");
      var r,
        o,
        u = n("917351"),
        d = n.n(u),
        c = n("446674"),
        m = n("913144"),
        f = n("734575"),
        h = n("123225"),
        p = n("789563"),
        g = n("116460"),
        E = n("42203"),
        C = n("305961"),
        v = n("660478"),
        I = n("18494"),
        S = n("282109"),
        _ = n("697218"),
        x = n("718517"),
        N = n("299039"),
        T = n("204653");
      ((o = r || (r = {})).FETCHING = "fetching"),
        (o.OK = "ok"),
        (o.ERROR = "error");
      let M = {},
        A = {},
        O = {},
        j = [],
        y = {},
        L = { status: "ok", lastRequest: null, lastResponse: null },
        R = [],
        b = [];
      function P() {
        R = g.default
          .getProps()
          .results.filter(
            e =>
              e.type === h.AutocompleterResultTypes.TEXT_CHANNEL &&
              0 === e.record.type
          )
          .map(e => e.record.id);
      }
      class D extends c.default.PersistedStore {
        getState() {
          return { shouldShowTopicsBar: l };
        }
        initialize(e) {
          var t;
          (l =
            null === (t = null == e ? void 0 : e.shouldShowTopicsBar) ||
            void 0 === t ||
            t),
            this.waitFor(E.default, _.default, I.default, C.default, p.default),
            this.syncWith([g.default], P);
        }
        allSummaries() {
          return M;
        }
        topSummaries() {
          let e = Object.values(M)
            .flat()
            .filter(
              e =>
                e.people.length > 1 &&
                N.default.extractTimestamp(e.endId) >
                  new Date().getTime() - 5 * x.default.Millis.HOUR
            )
            .sort(
              (e, t) =>
                N.default.extractTimestamp(t.endId) -
                N.default.extractTimestamp(e.endId)
            );
          return e;
        }
        summaries(e) {
          var t;
          return null !== (t = M[e]) && void 0 !== t ? t : b;
        }
        shouldShowTopicsBar() {
          return l;
        }
        findSummary(e, t) {
          var n;
          return null !== (n = this.summaries(e).find(e => e.id === t)) &&
            void 0 !== n
            ? n
            : null;
        }
        selectedSummary(e) {
          return null != i && i.channelId === e && null != i.summaryId
            ? this.findSummary(e, null == i ? void 0 : i.summaryId)
            : null;
        }
        summaryFeedback(e) {
          return null == e ? null : O[e.id];
        }
        isFetching(e, t) {
          var n, l;
          return null != t
            ? (null === (l = A[e]) || void 0 === l ? void 0 : l.summaryId) === t
            : (null === (n = A[e]) || void 0 === n ? void 0 : n.fetching) ===
                !0;
        }
        status(e) {
          return A[e];
        }
        shouldFetch(e, t) {
          var n, l, a;
          let s = M[e],
            i = A[e],
            r = E.default.getChannel(e);
          if (!(0, f.canSeeChannelSummaries)(r)) return !1;
          if (null != t) {
            let e =
                null !==
                  (l = null == i ? void 0 : i.summaryIdLastRequestedAt) &&
                void 0 !== l
                  ? l
                  : 0,
              n = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || n > 5e3;
          }
          let o =
              null !== (a = null == i ? void 0 : i.lastRequestedAt) &&
              void 0 !== a
                ? a
                : 0,
            u = Date.now() - o;
          return (
            (null === (n = A[e]) || void 0 === n ? void 0 : n.fetching) !==
              !0 &&
            ((null == s ? void 0 : s.length) < 1 || u >= 5e3)
          );
        }
        channelAffinities() {
          return j;
        }
        channelAffinitiesById(e) {
          return null == e ? y : y[e];
        }
        channelAffinitiesStatus() {
          return L;
        }
        shouldFetchChannelAffinities() {
          return (
            !(
              "fetching" === L.status ||
              (null != L.lastResponse &&
                Date.now() - L.lastResponse < 30 * x.default.Millis.SECOND)
            ) && !0
          );
        }
        defaultChannelIds(e) {
          let {
              withQuickSwitcher: t,
              withChannelAffinities: n,
              withUnreads: l,
              numChannels: a = 25,
            } = e,
            s = [];
          return (
            t && (s = s.concat(R)),
            n && (s = s.concat(j.map(e => e.channel_id))),
            l &&
              (s = s.filter(e => {
                let t = E.default.getChannel(e);
                return (
                  null != t &&
                  !S.default.isChannelMuted(t.guild_id, e) &&
                  v.default.hasUnread(e)
                );
              })),
            (s = s.filter(e => {
              let t = E.default.getChannel(e);
              return (0, f.canSeeChannelSummaries)(t, !1, !1);
            })).slice(0, a)
          );
        }
        visibleSummaryIndex() {
          return s;
        }
      }
      D.persistKey = "SummaryStore";
      let w = new D(m.default, {
        CONNECTION_OPEN: () => !1,
        CHANNEL_SELECT(e) {
          let { channelId: t } = e;
          (null == i ? void 0 : i.channelId) !== t && (i = null);
        },
        TOGGLE_TOPICS_BAR() {
          l = !l;
        },
        RECEIVE_CHANNEL_SUMMARY(e) {
          var t, n;
          let { summary: l, channelId: a, error: s, receivedAt: i } = e;
          if (null != l && Object.keys(l).length > 0) {
            let e = (0, T.createSummaryFromServer)(l, a),
              n = [...(null !== (t = M[a]) && void 0 !== t ? t : [])],
              s = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
            s > -1 ? (n[s] = e) : n.push(e), (M[a] = n);
          }
          let r = {
            ...(null !== (n = A[a]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: i,
            summaryIdError: s,
          };
          A[a] = r;
        },
        REQUEST_CHANNEL_SUMMARY(e) {
          var t;
          let { channelId: n, summaryId: l, requestedAt: a } = e;
          A[n] = {
            ...(null !== (t = A[n]) && void 0 !== t ? t : { fetching: !1 }),
            summaryId: l,
            summaryIdLastRequestedAt: a,
          };
        },
        RECEIVE_CHANNEL_SUMMARIES(e) {
          let { summaries: t, channelId: n, error: l, receivedAt: a } = e,
            s = t
              .filter(e => Object.keys(e).length > 0)
              .map(e => (0, T.createSummaryFromServer)(e, n));
          if (
            null != i &&
            i.channelId === n &&
            !s.some(e => e.id === (null == i ? void 0 : i.summaryId))
          ) {
            var r;
            let e = null !== (r = M[n]) && void 0 !== r ? r : [],
              t = e.find(e => e.id === (null == i ? void 0 : i.summaryId));
            null != t && s.push(t);
          }
          M[n] = (0, u.sortBy)(s, e =>
            N.default.extractTimestamp(e.startId)
          ).reverse();
          let o = { ...A[n], fetching: !1, error: void 0, lastReceivedAt: a };
          null != l && (o.error = l), (A[n] = o);
        },
        REQUEST_CHANNEL_SUMMARIES(e) {
          var t;
          A[e.channelId] = {
            ...(null !== (t = A[e.channelId]) && void 0 !== t ? t : {}),
            fetching: !0,
            lastRequestedAt: e.requestedAt,
          };
        },
        SET_HIGHLIGHTED_SUMMARY(e) {
          var t;
          if (
            (null == a && null == e.channelId) ||
            (e.channelId === (null == a ? void 0 : a.channelId) &&
              e.summaryId === (null == a ? void 0 : a.summaryId))
          )
            return !1;
          if (
            null !=
              (a =
                null != e.channelId
                  ? {
                      channelId: e.channelId,
                      summaryId:
                        null !== (t = e.summaryId) && void 0 !== t ? t : null,
                    }
                  : null) &&
            a.channelId === e.channelId &&
            null != a.summaryId
          ) {
            let e = M[a.channelId];
            s =
              null == e
                ? void 0
                : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId));
          }
        },
        UPDATE_VISIBLE_MESSAGES(e) {
          let t = I.default.getChannelId();
          if (null != t) {
            if (null != a && a.channelId === t && null != a.summaryId) {
              let e = M[a.channelId];
              s =
                null == e
                  ? void 0
                  : e.findIndex(
                      e => e.id === (null == a ? void 0 : a.summaryId)
                    );
            } else {
              var n;
              s =
                null === (n = M[t]) || void 0 === n
                  ? void 0
                  : n.findIndex(t => {
                      var n, l, a, s;
                      return (
                        (n = e.topVisibleMessage),
                        (l = e.bottomVisibleMessage),
                        (a = t.startId),
                        (s = t.endId),
                        !(null == n || n > s) && !(null == l || l < a)
                      );
                    });
            }
          }
        },
        SET_SELECTED_SUMMARY(e) {
          var t;
          let n = e.channelId;
          return null == n
            ? null
            : (n !== (null == i ? void 0 : i.channelId) ||
                e.summaryId !== (null == i ? void 0 : i.summaryId)) &&
                void (i = {
                  channelId: n,
                  summaryId:
                    null !== (t = e.summaryId) && void 0 !== t ? t : null,
                });
        },
        SET_SUMMARY_FEEDBACK(e) {
          let { summary: t, rating: n } = e;
          null != n ? (O[t.id] = n) : delete O[t.id];
        },
        REQUEST_CHANNEL_AFFINITIES() {
          L = { ...L, status: "fetching", lastRequest: Date.now() };
        },
        RECEIVE_CHANNEL_AFFINITIES(e) {
          var t;
          let { affinities: n, error: l } = e;
          if (null != l) {
            (j = []),
              (y = {}),
              (L = { ...L, status: "error", lastResponse: Date.now() });
            return;
          }
          (j = null != n ? n : []),
            (y =
              null !==
                (t =
                  null == n
                    ? void 0
                    : n.reduce(
                        (e, t) => ((e[t.channel_id] = t.affinity), e),
                        {}
                      )) && void 0 !== t
                ? t
                : {}),
            (L = { ...L, status: "ok", lastResponse: Date.now() });
        },
        REQUEST_CHANNEL_SUMMARIES_BULK(e) {
          let { channelIds: t, requestedAt: n } = e,
            l = t.reduce((e, t) => {
              var l;
              let a = null !== (l = A[t]) && void 0 !== l ? l : {};
              return (
                (e[t] = {
                  ...a,
                  fetching: !0,
                  lastRequestedAt: n,
                  error: void 0,
                }),
                e
              );
            }, {});
          A = { ...A, ...l };
        },
        RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
          let {
              summaries: t,
              receivedAt: n,
              error: l,
              requestArgs: { channelIds: a },
            } = e,
            s = d.toPairs(t).reduce((e, t) => {
              let [n, l] = t,
                a = d
                  .chain(l.map(e => (0, T.createSummaryFromServer)(e, n)))
                  .sortBy(e => N.default.extractTimestamp(e.startId))
                  .takeRight(75)
                  .reverse()
                  .filter(e => Object.keys(e).length > 0)
                  .value();
              return (e[n] = a), e;
            }, {}),
            i = a.reduce(
              (e, t) => {
                var a;
                let i = null !== (a = A[t]) && void 0 !== a ? a : {},
                  r = s[t];
                return (
                  null != r && (e.summariesByChannel[t] = r),
                  (e.summaryFetchStatusByChannel[t] = {
                    ...i,
                    fetching: !1,
                    error: l,
                    lastReceivedAt: n,
                  }),
                  e
                );
              },
              { summariesByChannel: {}, summaryFetchStatusByChannel: {} }
            );
          (M = { ...M, ...i.summariesByChannel }),
            (A = { ...A, ...i.summaryFetchStatusByChannel });
        },
        CONVERSATION_SUMMARY_UPDATE(e) {
          var t, n, l;
          let { channel_id: a, summaries: s, guild_id: i } = e,
            r = Date.now(),
            o = d
              .chain(s)
              .sortBy(e => N.default.extractTimestamp(e.start_id))
              .filter(e => Object.keys(e).length > 0)
              .map(e => (0, T.createSummaryFromServer)(e, a))
              .reverse()
              .value(),
            u = null !== (n = M[a]) && void 0 !== n ? n : [],
            c = d
              .chain(o)
              .concat(u)
              .sortBy(e => N.default.extractTimestamp(e.startId))
              .takeRight(75)
              .uniqBy("id")
              .reverse()
              .value();
          (M[a] = c),
            (A[a] = {
              ...A[a],
              error: void 0,
              fetching:
                null !==
                  (l =
                    null === (t = A[a]) || void 0 === t
                      ? void 0
                      : t.fetching) &&
                void 0 !== l &&
                l,
              lastReceivedAt: r,
            });
        },
        CLEAR_CONVERSATION_SUMMARIES() {
          (M = {}), (A = {});
        },
        DELETE_SUMMARY(e) {
          var t;
          let n = e.summary.channelId,
            l = null !== (t = M[n]) && void 0 !== t ? t : [],
            a = l.indexOf(e.summary);
          -1 !== a && M[n].splice(a, 1);
        },
      });
      var U = w;
    },
    979975: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("599110"),
        a = n("793237"),
        s = n("49111");
      function i(e) {
        let {
          summary: t,
          guildId: n,
          channelId: i,
          rating: r = null,
          problem: o = null,
          feedback: u = "",
          location: d,
        } = e;
        (0, a.setSummaryFeedback)(t, r),
          l.default.track(s.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
            reason: o,
            location: d,
            rating: r,
            feedback: u,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: i,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type,
          });
      }
    },
    402318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("424973");
      var l = n("37983");
      n("884691");
      var a = n("917351"),
        s = n.n(a),
        i = n("77078"),
        r = n("86621"),
        o = n("449008"),
        u = n("735310");
      let d = (0, r.default)(e => {
        let { member: t, empty: n, guildId: a } = e;
        return n || null == t
          ? (0, l.jsx)("div", { className: u.partyMember })
          : (0, l.jsx)("div", {
              className: u.partyMember,
              children: (0, l.jsx)(i.Avatar, {
                src: t.getAvatarURL(a, 16),
                "aria-label": t.username,
                size: i.AvatarSizes.SIZE_16,
                className: u.partyMember,
              }),
            });
      });
      var c = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: a = 1,
            maxAvatarsShown: i = 2,
            guildId: r,
          } = e,
          { totalSize: c, knownSize: m } = t;
        if (c < a) return null;
        let f = s(n)
            .filter(o.isNotNullish)
            .take(i)
            .map(e => (0, l.jsx)(d, { member: e, guildId: r }, e.id))
            .value(),
          h = c - m;
        for (let e = 0; e < h && f.length < i; e++)
          f.push(
            (0, l.jsx)(d, { empty: !0, guildId: r }, "empty-member-".concat(e))
          );
        let p = Math.max(Math.min(c - f.length, 99), 0);
        if (1 === p) {
          let e = n[i];
          f.push((0, l.jsx)(d, { member: e, guildId: r }, e.id));
        }
        return (0, l.jsx)("div", {
          className: u.wrapper,
          children: (0, l.jsxs)("div", {
            className: u.partyMembers,
            children: [
              f,
              p > 1
                ? (0, l.jsxs)("div", {
                    className: u.partyMemberOverflow,
                    children: ["+", p],
                  })
                : null,
            ],
          }),
        });
      };
    },
    584998: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("272030"),
        o = n("120027"),
        u = n("487269"),
        d = n("957255"),
        c = n("660478"),
        m = n("109264"),
        f = n("251144"),
        h = n("20662"),
        p = n("15738"),
        g = n("299039"),
        E = n("347738"),
        C = n("118094"),
        v = n("402318"),
        I = n("976818"),
        S = n("49111"),
        _ = n("200521"),
        x = n("137738");
      function N(e) {
        let {
            summary: t,
            channel: c,
            members: I,
            guildId: N,
            unread: T,
            onClick: M,
          } = e,
          [A, O] = a.useState(!1),
          j = (0, u.getTimestampString)(g.default.extractTimestamp(t.startId)),
          y = (0, s.useStateFromStores)([E.default], () =>
            E.default.summaryFeedback(t)
          ),
          L = (e, n) => {
            e.stopPropagation(),
              (0, C.default)({ summary: t, channel: c, rating: n });
          },
          R = d.default.can(S.Permissions.MANAGE_MESSAGES, c);
        return (0, l.jsxs)(i.Clickable, {
          className: x.container,
          onClick: M,
          onContextMenu: e => {
            R &&
              (0, r.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("113286")
                  .then(n.bind(n, "113286"));
                return n => (0, l.jsx)(e, { ...n, summary: t });
              });
          },
          onMouseEnter: () => O(!0),
          onMouseLeave: () => O(!1),
          children: [
            (0, l.jsx)(p.default, {
              hovered: A,
              unread: T,
              className: x.unreadPill,
            }),
            (0, l.jsx)("div", {
              className: x.rowHeader,
              children: (0, l.jsxs)("div", {
                className: x.rowHeaderLeft,
                children: [
                  (0, l.jsx)(i.Text, {
                    className: x.timestamp,
                    color: "interactive-normal",
                    variant: "text-xs/normal",
                    children: j,
                  }),
                  (0, l.jsx)(o.default, {
                    height: 4,
                    width: 4,
                    "aria-hidden": "true",
                    className: x.dot,
                  }),
                  (0, l.jsx)(m.default, {
                    height: 12,
                    width: 12,
                    className: x.icon,
                  }),
                  (0, l.jsx)(i.Text, {
                    className: x.count,
                    color: "interactive-normal",
                    variant: "text-xs/normal",
                    children: t.count,
                  }),
                  I.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(o.default, {
                          height: 4,
                          width: 4,
                          "aria-hidden": "true",
                          className: x.dot,
                        }),
                        (0, l.jsx)(v.default, {
                          partySize: {
                            knownSize: I.length,
                            totalSize: I.length,
                          },
                          maxAvatarsShown: 3,
                          members: I,
                          guildId: N,
                        }),
                      ],
                    }),
                ],
              }),
            }),
            A &&
              !y &&
              (0, l.jsxs)("div", {
                className: x.feedbackContainer,
                children: [
                  (0, l.jsx)(i.Clickable, {
                    onClick: e => L(e, _.FeedbackRating.GOOD),
                    children: (0, l.jsx)(h.default, {
                      className: x.thumbIcon,
                      width: 12,
                      height: 12,
                    }),
                  }),
                  (0, l.jsx)(i.Clickable, {
                    onClick: e => L(e, _.FeedbackRating.BAD),
                    children: (0, l.jsx)(f.default, {
                      className: x.thumbIcon,
                      width: 12,
                      height: 12,
                    }),
                  }),
                ],
              }),
            (0, l.jsx)(i.Text, {
              color: "header-primary",
              variant: "text-sm/semibold",
              className: x.title,
              children: t.topic,
            }),
            (0, l.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: x.subtitle,
              children: t.summShort,
            }),
          ],
        });
      }
      function T(e) {
        let {
            summaries: t,
            summariesMembers: n,
            channel: i,
            selectTopic: r,
            setOpen: o,
          } = e,
          u = (0, s.useStateFromStores)([c.default], () =>
            c.default.getOldestUnreadMessageId(i.id)
          ),
          d = a.useCallback(
            e => {
              r(e), o(!1);
            },
            [r, o]
          );
        return t.length < 1
          ? (0, l.jsx)(I.default, {})
          : (0, l.jsx)(l.Fragment, {
              children: t.map((e, t) => {
                var a;
                let s = null !== (a = n[t]) && void 0 !== a ? a : [];
                return (0, l.jsx)(
                  N,
                  {
                    summary: e,
                    channel: i,
                    members: s,
                    guildId: i.guild_id,
                    unread: null != u && g.default.compare(e.endId, u) > 0,
                    onClick: () => d(t),
                  },
                  t
                );
              }),
            });
      }
    },
    976818: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("543289"),
        i = n("909004"),
        r = n("782340"),
        o = n("203513");
      function u() {
        return (0, l.jsxs)("div", {
          className: o.container,
          children: [
            (0, l.jsxs)("div", {
              className: o.iconContainer,
              children: [
                (0, l.jsx)("div", {
                  className: o.icon,
                  children: (0, l.jsx)(i.default, {
                    className: o.iconOffset,
                    width: 28,
                    height: 28,
                  }),
                }),
                (0, l.jsx)(s.default, { className: o.stars }),
              ],
            }),
            (0, l.jsx)(a.Heading, {
              className: o.header,
              variant: "heading-xl/semibold",
              children: r.default.Messages.SUMMARY_EMPTY_STATE_TITLE,
            }),
            (0, l.jsx)(a.Text, {
              className: o.text,
              color: "header-secondary",
              variant: "text-md/normal",
              children: r.default.Messages.SUMMARY_EMPTY_STATE_TEXT,
            }),
          ],
        });
      }
    },
    118094: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("979975"),
        i = n("200521"),
        r = n("782340");
      function o(e, t, n) {
        let { rating: l, problem: i, feedback: o } = n;
        (0, s.default)({
          problem: i,
          summary: e,
          feedback: o,
          guildId: t.guild_id,
          channelId: t.id,
          location: "Summary divider",
          rating: l,
        }),
          (0, a.showToast)(
            (0, a.createToast)(
              r.default.Messages.CALL_FEEDBACK_CONFIRMATION,
              a.ToastType.SUCCESS
            )
          );
      }
      function u(e) {
        let { summary: t, channel: s, rating: r } = e;
        null != t &&
          (r === i.FeedbackRating.BAD
            ? (0, a.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("747194")
                  .then(n.bind(n, "747194"));
                return n =>
                  (0, l.jsx)(e, {
                    ...n,
                    onSubmit: e => o(t, s, e),
                    startRating: r,
                  });
              })
            : o(t, s, {
                rating: r,
                problem: null,
                feedback: "",
                dontShowAgain: !1,
              }));
      }
    },
    485422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("368639"),
        u = n("62843"),
        d = n("632215");
      function c(e) {
        let {
            userBio: t,
            className: n,
            animateOnHover: s = !1,
            isHovering: c = !1,
            lineClamp: m = 6,
          } = e,
          f = a.useMemo(() => (0, o.parseBioReact)(t), [t]);
        return (0, l.jsx)("div", {
          className: i(n, d.markup),
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            lineClamp: m,
            children: (0, l.jsx)(u.MessagesInteractionContext.Provider, {
              value: { disableAnimations: s && !c, disableInteractions: !1 },
              children: f,
            }),
          }),
        });
      }
    },
    908583: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdleHandlerContext: function () {
            return i;
          },
          IdleStateContext: function () {
            return r;
          },
          default: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("862337");
      let i = a.createContext({
          onPreventIdle: () => null,
          onAllowIdle: () => null,
          onForceIdle: () => null,
          onActive: () => null,
        }),
        r = a.createContext(!1);
      function o(e) {
        let { children: t, timeout: n } = e,
          [o, u] = a.useState(!1),
          d = a.useRef(new Set()),
          c = a.useRef(null);
        a.useEffect(
          () => (
            (c.current = new s.DelayedCall(n, () => u(!0))),
            c.current.delay(),
            () => {
              var e;
              null === (e = c.current) || void 0 === e || e.cancel(),
                (c.current = null);
            }
          ),
          [n]
        );
        let m = a.useCallback(
            e => {
              var t;
              u(!1),
                d.current.add(e),
                null === (t = c.current) || void 0 === t || t.cancel();
            },
            [d, c, u]
          ),
          f = a.useCallback(
            e => {
              if ((d.current.delete(e), 0 === d.current.size)) {
                var t;
                null === (t = c.current) || void 0 === t || t.delay();
              }
            },
            [d, c]
          ),
          h = a.useCallback(() => {
            if ((u(!1), 0 === d.current.size)) {
              var e;
              null === (e = c.current) || void 0 === e || e.delay();
            }
          }, [d, c, u]),
          p = a.useCallback(() => {
            var e;
            !(d.current.size > 0) &&
              (null === (e = c.current) || void 0 === e || e.cancel(), u(!0));
          }, [c, u]),
          g = a.useMemo(
            () => ({
              onAllowIdle: f,
              onPreventIdle: m,
              onActive: h,
              onForceIdle: p,
            }),
            [f, m, h, p]
          );
        return (0, l.jsx)(r.Provider, {
          value: o,
          children: (0, l.jsx)(i.Provider, {
            value: g,
            children: t({ idle: o, ...g }),
          }),
        });
      }
    },
    550410: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePreventIdle: function () {
            return i;
          },
          default: function () {
            return r;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("908583");
      function i(e) {
        let {
            onPreventIdle: t,
            onAllowIdle: n,
            onActive: l,
          } = a.useContext(s.IdleHandlerContext),
          i = a.useCallback(() => {
            t(e);
          }, [e, t]),
          r = a.useCallback(() => {
            n(e);
          }, [e, n]);
        return { preventIdle: i, allowIdle: r, onActive: l };
      }
      function r(e) {
        let { children: t, className: n } = e,
          { onForceIdle: r, onActive: o } = a.useContext(s.IdleHandlerContext),
          { preventIdle: u, allowIdle: d } = i("interact");
        a.useEffect(() => () => d(), [d]);
        let c = a.useCallback(
          e => {
            var t;
            let n =
              null !== (t = e.target.ownerDocument) && void 0 !== t
                ? t
                : document;
            !e.currentTarget.contains(n.activeElement) && r();
          },
          [r]
        );
        return (0, l.jsx)("div", {
          className: n,
          onMouseEnter: u,
          onMouseLeave: d,
          onFocus: o,
          onBlur: c,
          children: t,
        });
      }
    },
    981913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
          CenterControlButton: function () {
            return p;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("461380"),
        o = n("587974"),
        u = n("550410"),
        d = n("641568"),
        c = n("782340"),
        m = n("397651");
      function f(e) {
        let {
          label: t,
          onClick: n,
          onKeyDown: a,
          onMouseEnter: r,
          onMouseLeave: o,
          onContextMenu: d,
          className: c,
          wrapperClassName: f,
          iconClassName: h,
          iconComponent: p,
          themeable: g = !1,
          disabled: E = !1,
          isActive: C = !1,
          tooltipPosition: v = "top",
          shouldShowTooltip: I = !0,
          forceTooltipOpen: S = !1,
          buttonRef: _,
          grow: x,
          "aria-label": N,
        } = e;
        return (0, l.jsx)(u.default, {
          children: (0, l.jsx)(i.Tooltip, {
            position: v,
            text: t,
            "aria-label": N,
            shouldShow: I,
            forceOpen: S,
            children: e => {
              let {
                onClick: t,
                onContextMenu: u,
                onMouseEnter: v,
                onMouseLeave: I,
                ...S
              } = e;
              return (0, l.jsx)(i.Button, {
                look: i.Button.Looks.BLANK,
                size: i.Button.Sizes.NONE,
                onKeyDown: e => {
                  null == a || a(e);
                },
                onClick: e => {
                  null == t || t(), null == n || n(e);
                },
                onMouseEnter: e => {
                  null == v || v(), null == r || r(e);
                },
                onMouseLeave: e => {
                  null == I || I(), null == o || o(e);
                },
                onContextMenu: e => {
                  null == u || u(), null == d || d(e);
                },
                onFocus: e => {
                  null == v || v(), null == r || r(e);
                },
                onBlur: e => {
                  null == I || I(), null == o || o(e);
                },
                disabled: E,
                innerClassName: m.lineHeightReset,
                className: s({ [m.active]: C }, c),
                wrapperClassName: f,
                buttonRef: _,
                grow: x,
                "aria-label": N,
                ...S,
                children: (0, l.jsx)(p, {
                  className: s(m.controlIcon, h, {
                    [m.themeable]: g,
                    [m.active]: C,
                  }),
                }),
              });
            },
          }),
        });
      }
      let h = {
        red: m.red,
        white: m.white,
        green: m.green,
        yellow: m.yellow,
        primaryDark: m.primaryDark,
        primaryLight: m.primaryLight,
        activeLight: m.activeLight,
      };
      function p(e) {
        let {
            color: t,
            isActive: n = !1,
            className: a,
            iconClassName: p,
            onPopoutClick: g,
            popoutOpen: E = !1,
            ...C
          } = e,
          v = (0, d.default)(t, n),
          I = (0, l.jsx)(f, {
            ...C,
            grow: !1,
            onContextMenu: g,
            iconClassName: s(p, m.centerIcon),
            className: s(null == g ? a : m.staticButton, m.centerButton, h[v]),
          }),
          S = null;
        return (
          null != g &&
            (S = (0, l.jsxs)("div", {
              className: s(a, m.contextMenuContainer),
              children: [
                (0, l.jsx)(o.default, {
                  mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                  width: 56,
                  height: 56,
                  children: I,
                }),
                (0, l.jsx)(u.default, {
                  children: (0, l.jsx)(i.Clickable, {
                    "aria-label": c.default.Messages.MORE_OPTIONS,
                    onClick: g,
                    onContextMenu: g,
                    className: s(m.contextMenuNub, h[v], { [m.active]: E }),
                    children: (0, l.jsx)(r.default, {
                      className: s(m.contextMenuCaret, { [m.open]: E }),
                    }),
                  }),
                }),
              ],
            })),
          (0, l.jsxs)(l.Fragment, {
            children: [
              S,
              (0, l.jsx)("div", {
                className: s({ [m.unmasked]: null != g }, null != g ? a : null),
                children: I,
              }),
            ],
          })
        );
      }
    },
    95032: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("292687"),
        i = n("471671"),
        r = n("2770"),
        o = n("45622"),
        u = n("563680"),
        d = n("981913"),
        c = n("782340"),
        m = a.default.connectStores([i.default, s.default], e => {
          let { node: t, guestWindow: n } = e;
          return {
            enabled: (0, u.isFullScreen)(t, null == n ? void 0 : n.document),
          };
        })(function (e) {
          let { enabled: t, ...n } = e,
            a = t
              ? c.default.Messages.EXIT_FULL_SCREEN
              : c.default.Messages.FULL_SCREEN,
            s = t ? o.default : r.default;
          return (0, l.jsx)(d.default, { label: a, iconComponent: s, ...n });
        });
    },
    641568: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("819855"),
        s = n("841098"),
        i = n("191145"),
        r = n("18494"),
        o = n("49111");
      function u(e, t) {
        let n = (0, l.useStateFromStores)([r.default], () =>
            r.default.getVoiceChannelId()
          ),
          u = (0, l.useStateFromStores)([i.default], () =>
            null != n ? i.default.getMode(n) : null
          ),
          d = (0, s.default)();
        return null != e
          ? e
          : u === o.ChannelModes.VOICE && (0, a.isThemeLight)(d)
            ? t
              ? "activeLight"
              : "primaryLight"
            : t
              ? "white"
              : "primaryDark";
      }
    },
    525864: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          VOICE_RECORDING_MIN_DURATION_MILLIS: function () {
            return s;
          },
          WAVEFORM_WAVE_MAX_VALUE: function () {
            return i;
          },
        }),
        ((a = l || (l = {}))[(a.SENDING = 0)] = "SENDING"),
        (a[(a.CANCELLING = 1)] = "CANCELLING"),
        (a[(a.LOCKING = 2)] = "LOCKING"),
        (a[(a.LOCKED = 3)] = "LOCKED");
      let s = 500,
        i = 255;
    },
    293246: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("627445"),
        a = n.n(l);
      function s(e, t) {
        if ((a(e.length >= t, "Waveform smaller than samples"), e.length === t))
          return e;
        let n = e.length / t,
          l = [],
          s = 0;
        for (; l.length < t; ) {
          let t = Math.round((l.length + 1) * n),
            a = 0,
            i = 0;
          for (let n = s; n < t && n < e.length; n++) (a += e[n]), i++;
          (l[l.length] = a / i), (s = t);
        }
        return l;
      }
    },
    876308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        o = n("77078"),
        u = n("206230"),
        d = n("806135"),
        c = n("170113"),
        m = n("316680"),
        f = n("830837"),
        h = n("132755"),
        p = n("659500"),
        g = n("718517"),
        E = n("829536"),
        C = n("534107"),
        v = n("49111"),
        I = n("782340"),
        S = n("447946");
      let _ = a.lazy(() => n.el("403130").then(n.bind(n, "403130")));
      function x(e) {
        let { played: t, duration: n, currentTime: a } = e,
          s =
            null == n
              ? "--:--"
              : t
                ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - a))
                : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
        return (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          className: S.duration,
          tabularNumbers: !0,
          children: s,
        });
      }
      var N = a.memo(function (e) {
        var t, n, s, c, N, T;
        let M,
          {
            src: A,
            volume: O = 1,
            onVolumeChange: j,
            onMute: y,
            waveform: L,
            durationSecs: R,
            onVolumeShow: b,
            onVolumeHide: P,
            onPlay: D,
            onPause: w,
            onError: U,
          } = e,
          k = a.useRef(null),
          [V, F] = a.useState(0),
          [B, H] = a.useState(R),
          [G, W] = a.useState(!1),
          [z, Z] = a.useState(!1),
          [J, Y] = a.useState(!1),
          [X, K] = a.useState(!1),
          [q, Q] = a.useState("none"),
          [$, ee] = a.useState(() => ("function" == typeof O ? O() : O)),
          et = a.useRef(void 0),
          en = a.useCallback(() => {
            Z(e => !e);
          }, []),
          el = a.useCallback(() => {
            Q("metadata");
          }, []),
          ea = a.useCallback(e => {
            let t = e.currentTarget.duration;
            !isNaN(t) && H(t);
          }, []),
          es = a.useCallback(() => {
            Z(!1),
              null == et.current &&
                (et.current = setTimeout(() => {
                  K(!1), (et.current = void 0);
                }, 500));
          }, []),
          ei = a.useCallback(() => {
            !J && es();
          }, [es, J]),
          er = a.useCallback(() => {
            let e = k.current;
            if (null == e) return;
            let t = e.error;
            null == U || U(t);
          }, [U]),
          eo = a.useCallback(
            e => {
              let t = (0, E.perceptualToAmplitude)(e, 1);
              W(0 === t), ee(t), null == j || j(t);
            },
            [j]
          ),
          eu = a.useCallback(() => {
            W(!G), null == y || y(!G);
          }, [G, y]),
          ed = a.useCallback(() => {
            Y(!0);
          }, []),
          ec = a.useCallback(() => {
            Y(!1), V === B && es();
          }, [V, B, es]),
          em = a.useCallback(
            e => {
              let t = k.current;
              if (null == B || null == t) return;
              let n = e * B;
              F(n),
                (t.currentTime = n),
                K(!0),
                clearTimeout(et.current),
                (et.current = void 0);
            },
            [B]
          );
        a.useEffect(() => {
          !X && z && K(!0);
        }, [z, X]);
        let ef = a.useRef(null);
        a.useEffect(() => {
          if (X || z) {
            if (z) {
              var e, t;
              (ef.current = performance.now()),
                null == D ||
                  D(
                    !1,
                    V,
                    (null !==
                      (t =
                        null === (e = k.current) || void 0 === e
                          ? void 0
                          : e.duration) && void 0 !== t
                      ? t
                      : 0) * g.default.Millis.SECOND
                  );
            } else {
              let e = performance.now(),
                t = ef.current;
              null == w || w(V, null != t ? (e - t) / 1e3 : 0),
                (ef.current = null);
            }
          }
        }, [z]),
          (t = k),
          (n = z),
          (s = F),
          a.useEffect(() => {
            let e;
            return (
              !(function l() {
                let a = t.current;
                if (null != a)
                  s(a.currentTime), n && (e = requestAnimationFrame(l));
              })(),
              () => {
                null != e && cancelAnimationFrame(e);
              }
            );
          }, [t, n, s]),
          (c = A),
          (N = z),
          (T = Z),
          a.useEffect(() => {
            if (N)
              return (
                p.ComponentDispatch.dispatch(
                  v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED,
                  { src: c }
                ),
                p.ComponentDispatch.subscribe(
                  v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED,
                  e
                ),
                () => {
                  p.ComponentDispatch.unsubscribe(
                    v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED,
                    e
                  );
                }
              );
            function e(e) {
              let { src: t } = e;
              c !== t && T(!1);
            }
          }, [c, N, T]);
        let eh = z ? f.default : h.default,
          ep = z ? I.default.Messages.PAUSE : I.default.Messages.PLAY;
        M =
          "Safari" === platform.name
            ? (0, l.jsx)(a.Suspense, {
                children: (0, l.jsx)(_, {
                  ref: k,
                  className: S.audioElement,
                  src: A,
                  preload: q,
                  playing: z && !J,
                  onEnded: ei,
                  onLoadedMetadata: ea,
                  onError: er,
                  muted: G,
                  volume: $,
                }),
              })
            : (0, l.jsx)(d.default, {
                ref: k,
                className: S.audioElement,
                controls: !1,
                preload: q,
                onEnded: ei,
                onLoadedMetadata: ea,
                onError: er,
                muted: G,
                volume: $,
                playing: z && !J,
                children: (0, l.jsx)("source", { src: A }),
              });
        let eg = (0, r.useStateFromStores)(
            [u.default],
            () => u.default.useReducedMotion
          ),
          { enabled: eE } = (0, o.useRedesignIconContext)();
        return (0, l.jsxs)("div", {
          className: i(S.container, { [S.playing]: z }),
          onMouseEnter: el,
          children: [
            (0, l.jsx)("div", {
              className: S.rippleContainer,
              children: (0, l.jsx)("div", {
                className: i(S.ripple, { [S.reducedMotion]: eg }),
              }),
            }),
            (0, l.jsx)(o.Clickable, {
              className: S.playButtonContainer,
              onClick: en,
              "aria-label": ep,
              children: (0, l.jsx)(eh, {
                className: i(S.playIcon, { [S.oldPlayIconSpacing]: !eE && !z }),
                width: 18,
                height: 18,
              }),
            }),
            (0, l.jsx)(C.default, {
              className: S.waveform,
              waveform: L,
              currentTime: V,
              duration: null != B ? B : 1,
              playing: z,
              played: X,
              onDrag: em,
              onDragStart: ed,
              onDragEnd: ec,
            }),
            (0, l.jsx)(x, { played: X, currentTime: V, duration: B }),
            (0, l.jsx)(m.default, {
              className: S.volumeButton,
              iconClassName: S.volumeButtonIcon,
              sliderWrapperClassName: S.volumeSlider,
              muted: G,
              value: (0, E.amplitudeToPerceptual)($, 1),
              minValue: 0,
              maxValue: 1,
              currentWindow: window,
              onValueChange: eo,
              onToggleMute: eu,
              onVolumeShow: b,
              onVolumeHide: P,
            }),
            M,
          ],
        });
      });
    },
    534107: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("101997"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("669491"),
        o = n("77078"),
        u = n("731898"),
        d = n("554743"),
        c = n("284679"),
        m = n("293246"),
        f = n("247883"),
        h = n("525864"),
        p = n("899090");
      let g = h.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
        E = 6,
        C = 2,
        v = [0, 0, 0, 0, 0];
      function I(e) {
        let { showAll: t, currentTime: n, duration: l, numSegments: a } = e;
        return t ? a : Math.max(0, Math.round((n / l) * a));
      }
      function S(e) {
        var t, n, l, a, s;
        let {
            context: i,
            devicePixelRatio: r,
            canvasHeight: o,
            segmentValue: u,
            segmentIndex: d,
            constrainMin: c,
          } = e,
          m = c ? (24 - C) * u + C : 24 * u;
        if (0 !== m)
          (t = i),
            (n = 6 * d * r),
            (l = (o / 2 - m / 2) * r),
            (a = m * r),
            (s = 1 * r),
            t.moveTo(n, l + s),
            t.lineTo(n, l + a - s),
            t.arc(n + s, l + a - s, s, Math.PI, 0, !0),
            t.lineTo(n + 2 * s, l + s),
            t.arc(n + s, l + s, s, 0, Math.PI, !0),
            t.closePath();
      }
      function _(e, t, n) {
        let [l, s] = a.useState(e),
          [i, r] = a.useState(e);
        return (
          a.useLayoutEffect(() => {
            s(i), r(e);
          }, [e, t, n]),
          [l, i]
        );
      }
      function x(e, t, n, l) {
        if (null == l) return [t, !1];
        let a = Math.min((n - l) / 200, 1);
        if (1 === a) return [t, !1];
        let s = (0, c.interpolateColor)(e, t, a);
        return [s, !0];
      }
      function N(e) {
        let {
            className: t,
            waveform: n,
            currentTime: s,
            duration: c,
            played: C,
            playing: N,
            onDrag: T,
            onDragStart: M,
            onDragEnd: A,
          } = e,
          { ref: O, width: j } = (0, u.default)(),
          y = a.useMemo(() => {
            var e;
            let t;
            return (
              Math.floor(
                ((t =
                  (e = c) <= g
                    ? 40
                    : e >= 45
                      ? 294
                      : ((Math.min(e, 45) - g) / (45 - g)) * 254 + 40) +
                  4) /
                  E
              ) *
                E -
              4
            );
          }, [c]),
          L = a.useRef(),
          R = (function (e, t) {
            let n = a.useMemo(
                () =>
                  (function (e) {
                    let t;
                    if (null == e) return;
                    try {
                      t = window.atob(e);
                    } catch (e) {
                      return;
                    }
                    let n = [];
                    for (let e = 0; e < t.length; e++)
                      n[e] = t.charCodeAt(e) / h.WAVEFORM_WAVE_MAX_VALUE;
                    return n;
                  })(e),
                [e]
              ),
              l = a.useMemo(
                () =>
                  (function (e) {
                    if (null != e) return Math.floor((e + 4) / 6);
                  })(t),
                [t]
              ),
              s = a.useMemo(() => {
                var e;
                return null !==
                  (e = (function (e, t) {
                    if (null != e && null != t) {
                      if (e.length < t) {
                        let n = t - e.length;
                        return e.concat(Array(n).fill(0));
                      }
                      return (0, m.default)(e, t);
                    }
                  })(null != n ? n : [], l)) && void 0 !== e
                  ? e
                  : v;
              }, [n, l]);
            return s;
          })(n, j),
          b = a.useRef(C),
          P = a.useRef(N),
          D = a.useRef(null),
          w = window.devicePixelRatio,
          {
            lastBackgroundFillColor: U,
            backgroundFillColor: k,
            lastActiveFillColor: V,
            activeFillColor: F,
            lastInactiveFillColor: B,
            inactiveFillColor: H,
          } = (function (e, t) {
            let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
              l = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
              a = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
              s = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
              i = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
              u = t ? s : n,
              [d, c] = _(u, t, e),
              m = t ? i : e ? a : l,
              [f, h] = _(m, t, e),
              p = e ? u : l,
              [g, E] = _(p, t, e);
            return {
              lastBackgroundFillColor: d,
              backgroundFillColor: c,
              lastActiveFillColor: f,
              activeFillColor: h,
              lastInactiveFillColor: g,
              inactiveFillColor: E,
            };
          })(C, N);
        a.useEffect(() => {
          let e = I({
            showAll: !C,
            currentTime: s,
            duration: c,
            numSegments: R.length,
          });
          L.current = R.map((t, n) => new f.default(n < e ? t : 0));
        }, [R]),
          a.useEffect(() => {
            let e = L.current;
            if (null == e) return;
            let t = I({
              showAll: !C,
              currentTime: s,
              duration: c,
              numSegments: R.length,
            });
            for (let n = 0; n < e.length; n++) {
              let l = e[n];
              if (n < t) {
                l.animateTo(R[n]);
                continue;
              }
              l.reset();
            }
          }, [R, s, c, C]),
          a.useEffect(() => {
            let e = null;
            return (
              (e = requestAnimationFrame(function t(n) {
                let l = O.current,
                  a = null == l ? void 0 : l.getContext("2d"),
                  s = L.current;
                if (null == l || null == a || null == s) return;
                let i = !1;
                (b.current !== C || P.current !== N) &&
                  ((b.current = C), (P.current = N), (D.current = n)),
                  null != D.current &&
                    n > D.current + 200 &&
                    (D.current = null);
                let r = l.height / w;
                a.clearRect(0, 0, l.width, l.height), a.beginPath();
                let [o, u] = x(U, k, n, D.current);
                (i = i || u), (a.fillStyle = o);
                for (let e = 0; e < R.length; e++)
                  S({
                    context: a,
                    devicePixelRatio: w,
                    canvasHeight: r,
                    segmentValue: R[e],
                    segmentIndex: e,
                    constrainMin: !0,
                  });
                a.fill();
                let [d, c] = x(B, H, n, D.current);
                i = i || c;
                let [m, f] = x(V, F, n, D.current);
                i = i || f;
                for (let e = 0; e < s.length; e++) {
                  let t = s[e],
                    n = Math.max(t.getCurrentValue(), R[e] - 0.1);
                  a.beginPath(),
                    (a.fillStyle = t.isReset ? d : m),
                    S({
                      context: a,
                      devicePixelRatio: w,
                      canvasHeight: r,
                      segmentValue: n,
                      segmentIndex: e,
                      constrainMin: !t.isReset,
                    }),
                    (i = i || t.isAnimating()),
                    a.fill();
                }
                i && (e = requestAnimationFrame(t));
              })),
              () => {
                null != e && cancelAnimationFrame(e);
              }
            );
          }, [O, w, R, j, s, c, C, N, U, k, V, F, B, H]);
        let [, G] = (0, d.default)({
          ref: O,
          onDrag: T,
          onDragStart: M,
          onDragEnd: A,
        });
        return (0, l.jsx)("canvas", {
          onMouseDown: G,
          className: i(p.canvas, t),
          style: { width: y },
          ref: O,
          height: 32 * window.devicePixelRatio,
          width: (null != j ? j : 0) * window.devicePixelRatio,
        });
      }
    },
    247883: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l,
        a = n("188904");
      l = class {
        getCurrentValue() {
          if (null == this.animationDetails) return this.value;
          let e = performance.now() - this.animationDetails.animationStart,
            t = this.value < this.animationDetails.lastValue ? 150 : 500;
          return e > t
            ? ((this.animationDetails = null), this.value)
            : this.value < this.animationDetails.lastValue
              ? a.easeOutQuint(
                  e,
                  this.animationDetails.lastValue,
                  this.value,
                  t
                )
              : a.easeOutBack(
                  e,
                  this.animationDetails.lastValue,
                  this.value,
                  t,
                  4
                );
        }
        animateTo(e) {
          (this.isReset = !1),
            this.value !== e &&
              ((this.animationDetails = {
                lastValue: this.value,
                animationStart: performance.now(),
              }),
              (this.value = e));
        }
        isAnimating() {
          return null != this.animationDetails;
        }
        reset() {
          this.animateTo(0), (this.isReset = !0);
        }
        constructor(e) {
          (this.value = e), (this.animationDetails = null), (this.isReset = !1);
        }
      };
    },
    410889: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentUpload: function () {
            return p;
          },
          default: function () {
            return g;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("477850"),
        o = n.n(r),
        u = n("77078"),
        d = n("254490"),
        c = n("945330"),
        m = n("782340"),
        f = n("713351");
      let h = e => {
          let { filename: t } = e,
            a = (0, d.classifyFileName)(t),
            s = n("777483")(
              "../images/file_icons/icon-file-"
                .concat(a, ".svg")
                .replace("../images/file_icons/", "./")
            );
          return (0, l.jsx)("img", {
            className: f.icon,
            src: s,
            alt: m.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
              fileType: a,
            }),
            title: a,
          });
        },
        p = e => {
          let {
              className: t,
              filename: n,
              size: a,
              progress: s,
              onCancelUpload: r,
              onClick: d,
              onContextMenu: p,
            } = e,
            g = 100 === s,
            E = !g && a > 0;
          return (0, l.jsxs)("div", {
            className: i(f.attachment, t),
            children: [
              (0, l.jsx)(h, { filename: n }),
              (0, l.jsxs)("div", {
                className: f.attachmentInner,
                children: [
                  (0, l.jsxs)("div", {
                    className: f.filenameWrapper,
                    children: [
                      (0, l.jsx)(u.Clickable, {
                        className: f.filename,
                        onClick: d,
                        onContextMenu: p,
                        children: n,
                      }),
                      E
                        ? (0, l.jsx)("div", {
                            className: f.size,
                            children: "— ".concat(o.filesize(a)),
                          })
                        : null,
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: f.progressContainer,
                    children: g
                      ? m.default.Messages.ATTACHMENT_PROCESSING
                      : (0, l.jsx)(u.Progress, {
                          className: f.progress,
                          percent: s,
                        }),
                  }),
                ],
              }),
              g
                ? null
                : (0, l.jsx)(u.Clickable, {
                    onClick: r,
                    children: (0, l.jsx)(c.default, {
                      className: f.cancelButton,
                      width: 24,
                      height: 24,
                    }),
                  }),
            ],
          });
        };
      var g = e => {
        let {
          className: t,
          url: n,
          filename: s,
          size: r,
          onClick: d,
          onContextMenu: c,
          renderAdjacentContent: m,
        } = e;
        return (0, l.jsxs)(a.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: i(f.attachment, f.newMosaicStyle, t),
              children: [
                (0, l.jsx)(h, { filename: s }),
                (0, l.jsxs)("div", {
                  className: f.attachmentInner,
                  children: [
                    (0, l.jsx)("div", {
                      className: f.filenameLinkWrapper,
                      children: (0, l.jsx)(u.Anchor, {
                        className: f.fileNameLink,
                        href: n,
                        onClick: d,
                        onContextMenu: c,
                        children: s,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: f.metadata,
                      children: o.filesize(r),
                    }),
                  ],
                }),
              ],
            }),
            null != m && m(),
          ],
        });
      };
    },
    725962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("143435"),
        i = n("77078"),
        r = n("599110"),
        o = n("195812"),
        u = n("49111"),
        d = n("782340"),
        c = e => {
          let {
              href: t,
              className: n,
              iconClassName: c,
              rel: m,
              target: f,
              mimeType: h,
              fileName: p,
              focusProps: g,
              onClick: E,
              ...C
            } = e,
            v = a.useMemo(
              () => s.designConfig.getDefaultLinkInterceptor(t),
              [t]
            ),
            I = a.useCallback(
              e => {
                r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                  attachment_type: null == h ? void 0 : h[0],
                  attachment_subtype: null == h ? void 0 : h[1],
                }),
                  null == E || E(),
                  null == v || v(e);
              },
              [v, h, E]
            );
          return null != p
            ? (0, l.jsx)(i.Anchor, {
                href: t,
                onClick: I,
                target: f,
                rel: m,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: g,
                ...C,
                children: p,
              })
            : (0, l.jsx)(i.Anchor, {
                href: t,
                onClick: I,
                target: f,
                rel: m,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: g,
                ...C,
                children: (0, l.jsx)(o.default, { className: c }),
              });
        };
    },
    275623: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("164538");
      function r(e) {
        let { className: t, ...n } = e;
        return (0, l.jsx)("div", { className: s(i.gifTag, t), ...n });
      }
    },
    663175: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l,
        a = n("37983"),
        s = n("884691"),
        i = n("254490"),
        r = n("170113");
      l = class extends s.PureComponent {
        render() {
          let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: s,
            volume: o,
            renderLinkComponent: u,
            onVolumeChange: d,
            onVolumeShow: c,
            onVolumeHide: m,
            autoMute: f,
            onMute: h,
            mimeType: p,
            onPlay: g,
          } = this.props;
          return (0, a.jsx)(r.default, {
            src: e,
            fileName: n,
            fileSize: (0, i.sizeString)(t),
            type: r.default.Types.AUDIO,
            className: l,
            playable: s,
            volume: o,
            onMute: h,
            autoMute: f,
            onVolumeChange: d,
            onVolumeShow: c,
            onVolumeHide: m,
            renderLinkComponent: u,
            mimeType: p,
            onPlay: g,
          });
        }
      };
    },
    952368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IMAGE_GIF_RE: function () {
            return g;
          },
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("917351"),
        o = n("290381"),
        u = n("407063"),
        d = n("315102"),
        c = n("103603"),
        m = n("275623"),
        f = n("594098"),
        h = n("719347"),
        p = n("49111");
      let g = /\.gif($|\?|#)/i,
        E = /\.png($|\?|#)/i;
      ((l = class e extends i.Component {
        static isAnimated(e) {
          let { src: t, original: n, animated: l } = e;
          return l || g.test(null != n && "" !== n ? n : t);
        }
        static isSrcPNG(e) {
          let { src: t } = e;
          return E.test(t);
        }
        componentDidMount() {
          let { readyState: t } = this.state;
          t === p.ImageReadyStates.LOADING &&
            this.loadImage(
              this.getSrc(this.getRatio(), e.isAnimated(this.props)),
              this.handleImageLoad
            ),
            e.isAnimated(this.props) && this.observeVisibility();
        }
        componentDidUpdate(t) {
          let n = e.isAnimated(this.props),
            l = e.isAnimated(t);
          l !== n &&
            (n ? this.observeVisibility() : this.unobserveVisibility());
        }
        componentWillUnmount() {
          e.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach(e => e()),
            this._cancellers.clear();
        }
        getSrc(t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
              src: l,
              width: a,
              height: s,
              maxWidth: i,
              maxHeight: r,
              mediaLayoutType: o,
            } = this.props,
            c = null,
            m = null;
          return (
            d.SUPPORTS_WEBP && (n || !e.isAnimated(this.props))
              ? ((c = "webp"), e.isSrcPNG(this.props) && (m = "lossless"))
              : n && (c = "png"),
            (0, u.getImageSrc)({
              src: l,
              width: a,
              height: s,
              ratio: t,
              maxWidth: o === h.MediaLayoutType.MOSAIC ? i : void 0,
              maxHeight: o === h.MediaLayoutType.MOSAIC ? r : void 0,
              format: c,
              quality: m,
            })
          );
        }
        getRatio() {
          let {
            width: e,
            height: t,
            maxWidth: n = 400,
            maxHeight: l = 300,
            mediaLayoutType: a,
            useFullWidth: s,
          } = this.props;
          return a === h.MediaLayoutType.MOSAIC && s
            ? (0, c.getCoverRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: l,
              })
            : (0, c.getRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: l,
              });
        }
        getType() {
          let { mediaLayoutType: e, responsive: t } = this.props;
          return null != e
            ? e
            : t
              ? h.MediaLayoutType.RESPONSIVE
              : h.MediaLayoutType.STATIC;
        }
        loadImage(e, t) {
          let { width: n, height: l } = this.props;
          if (1 === n && 1 === l) return;
          let a = (0, u.loadImage)(e, (e, n) => {
            null != a && this._cancellers.delete(a), null == t || t(e, n);
          });
          null != a && this._cancellers.add(a);
        }
        render() {
          let {
              alt: t,
              zoomThumbnailPlaceholder: n,
              onZoom: l,
              shouldLink: a,
              onContextMenu: i,
              autoPlay: o,
              original: u,
              className: d,
              imageClassName: c,
              children: m,
              animated: h,
              shouldAnimate: g,
              width: E,
              height: C,
              minWidth: v,
              minHeight: I,
              maxWidth: S,
              maxHeight: _,
              renderItem: x,
              onClick: N,
              renderAccessory: T,
              tabIndex: M,
              limitResponsiveWidth: A,
              useFullWidth: O,
              placeholder: j,
              placeholderVersion: y,
              showThumbhashPlaceholder: L,
            } = this.props,
            { readyState: R, hasMouseOver: b, hasFocus: P } = this.state,
            D = null != l,
            w = this.getRatio(),
            U = (0, r.clamp)(
              Math.round(E * w),
              null != v ? v : 0,
              null != S ? S : 1 / 0
            ),
            k = (0, r.clamp)(
              Math.round(C * w),
              null != I ? I : 0,
              null != _ ? _ : 1 / 0
            ),
            V = {
              alt: t,
              readyState: R,
              onContextMenu: null != i ? i : void 0,
              zoomable: D,
              className: d,
              imageClassName: c,
              minWidth: v,
              minHeight: I,
              mediaLayoutType: this.getType(),
              limitResponsiveWidth: A,
              useFullWidth: O,
              tabIndex: M,
              width: U,
              height: k,
              renderItem: x,
              src: "",
              placeholder: j,
              placeholderVersion: y,
              showThumbhashPlaceholder: L,
              children:
                null != m
                  ? e => {
                      let { src: t, size: n, alt: l, mediaLayoutType: a } = e;
                      return m({ src: t, size: n, alt: l, mediaLayoutType: a });
                    }
                  : void 0,
              onMouseEnter: this.onMouseEnter,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            };
          if (1 === V.width && 1 === V.height) return null;
          switch (
            ((D || null != N) && (V.onClick = this.onClick),
            a && (V.original = null != u && "" !== u ? u : V.src),
            R)
          ) {
            case p.ImageReadyStates.LOADING:
              null != n && (V.src = n);
              break;
            case p.ImageReadyStates.READY:
              if (e.isAnimated(this.props)) {
                V.onMouseLeave = this.onMouseLeave;
                let t =
                  (o || b || P) &&
                  (null == g || g) &&
                  e.visibilityObserver.isVisible(this);
                t
                  ? ((V.src = this.getSrc(w)), (V.renderAccessory = T))
                  : ((V.src = this.getSrc(w, !h || !o)),
                    (V.renderAccessory = this.renderAccessory)),
                  null != m &&
                    (V.children = e => {
                      let { src: n, size: l, alt: a, mediaLayoutType: s } = e;
                      return m({
                        src: n,
                        size: l,
                        animating: t,
                        alt: a,
                        mediaLayoutType: s,
                      });
                    });
              } else V.src = this.getSrc(w);
          }
          return (0, s.jsx)(f.default, { ...V });
        }
        constructor(t) {
          super(t),
            (this.state = {
              readyState: p.ImageReadyStates.LOADING,
              hasMouseOver: !1,
              hasFocus: !1,
            }),
            (this._cancellers = new Set()),
            (this.observeVisibility = () => {
              e.visibilityObserver.observe(this);
            }),
            (this.unobserveVisibility = () => {
              e.visibilityObserver.unobserve(this);
            }),
            (this.handleImageLoad = e =>
              this.setState({
                readyState: e
                  ? p.ImageReadyStates.ERROR
                  : p.ImageReadyStates.READY,
              })),
            (this.preloadImage = (e, t) => {
              let { width: n, height: l } = e,
                { width: a, height: s } = this.props;
              (1 !== a || 1 !== s) &&
                this.loadImage(
                  this.getSrc(
                    (0, c.getRatio)({
                      width: a,
                      height: s,
                      maxWidth: n,
                      maxHeight: l,
                    })
                  ),
                  t
                );
            }),
            (this.onMouseEnter = t => {
              e.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
              let { onMouseEnter: n } = this.props;
              null != n && n(t, { preloadImage: this.preloadImage });
            }),
            (this.onFocus = t => {
              e.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            (this.onBlur = e => {
              let { currentTarget: t, relatedTarget: n } = e;
              !t.contains(n) && this.setState({ hasFocus: !1 });
            }),
            (this.onMouseLeave = () => this.setState({ hasMouseOver: !1 })),
            (this.onClick = e => {
              let { onZoom: t, onClick: n } = this.props;
              null != n
                ? n(e)
                : null != t &&
                  (e.preventDefault(),
                  t(e, {
                    zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                  }));
            }),
            (this.renderAccessory = () => {
              let { hasMouseOver: e, hasFocus: t } = this.state,
                n =
                  null != this.props.renderAccessory
                    ? this.props.renderAccessory()
                    : null;
              return this.props.shouldRenderAccessory
                ? e || t
                  ? n
                  : (0, s.jsx)(m.default, {})
                : null;
            }),
            (0, u.isImageLoaded)(
              this.getSrc(this.getRatio(), e.isAnimated(this.props))
            ) && (this.state.readyState = p.ImageReadyStates.READY);
        }
      }).visibilityObserver = new o.VisibilityObserver({ threshold: 0.7 })),
        (l.defaultProps = {
          shouldLink: !1,
          autoPlay: !1,
          animated: !1,
          minWidth: 0,
          minHeight: 0,
          shouldRenderAccessory: !0,
        }),
        (a = l);
    },
    888673: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l,
        a = n("37983"),
        s = n("884691"),
        i = n("254490"),
        r = n("952368"),
        o = n("170113"),
        u = n("49111"),
        d = n("782340");
      l = class extends s.Component {
        render() {
          let {
            src: e,
            fileSize: t,
            className: n,
            mediaPlayerClassName: l,
            poster: s,
            fileName: c,
            naturalWidth: m,
            naturalHeight: f,
            playable: h,
            downloadable: p = !0,
            volume: g,
            autoPlay: E,
            autoMute: C,
            responsive: v,
            mediaLayoutType: I,
            mimeType: S,
            renderOverlayContent: _,
            renderLinkComponent: x,
            onClick: N,
            onPlay: T,
            onEnded: M,
            onVolumeChange: A,
            onMute: O,
            alt: j = d.default.Messages.VIDEO,
            ...y
          } = this.props;
          return (0, a.jsx)(r.default, {
            alt: j,
            className: n,
            src: s,
            ...y,
            minWidth: o.default.minWidth,
            minHeight: o.default.minHeight,
            shouldLink: !1,
            shouldAnimate: !1,
            mediaLayoutType: I,
            responsive: v,
            children: n => {
              let {
                  src: s,
                  size: { width: r, height: d },
                } = n,
                j = !(
                  (m <= u.MAX_VIDEO_WIDTH && f <= u.MAX_VIDEO_HEIGHT) ||
                  (m <= u.MAX_VIDEO_HEIGHT && f <= u.MAX_VIDEO_WIDTH)
                );
              return (0, a.jsx)(o.default, {
                className: l,
                forceExternal: j,
                src: e,
                poster: s,
                width: r,
                height: d,
                responsive: v,
                volume: g,
                autoPlay: null != E && E,
                autoMute: null != C && C,
                type: o.default.Types.VIDEO,
                mediaLayoutType: I,
                fileName: c,
                fileSize: null == t ? void 0 : (0, i.sizeString)(t),
                playable: h,
                renderLinkComponent: x,
                renderOverlayContent: _,
                onClick: N,
                onPlay: T,
                onEnded: M,
                onVolumeChange: A,
                onMute: O,
                mimeType: S,
                downloadable: p,
              });
            },
          });
        }
      };
    },
    672724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("458960"),
        o = n("994000");
      let u = { friction: 14, tension: 200 },
        d = { DURATION: "DURATION", VOLUME: "VOLUME" };
      function c(e) {
        let t = 0 | e,
          n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
      }
      class m extends a.Component {
        componentDidMount() {
          let { previewWidth: e, animatedProgress: t } = this.state;
          (this._previewId = e.addListener(this.handlePreviewChange)),
            (this._progressId = t.addListener(this.handleAnimatedChange));
        }
        componentWillUnmount() {
          let { previewWidth: e, animatedProgress: t } = this.state;
          e.removeListener(this._previewId),
            t.removeListener(this._progressId),
            window.removeEventListener("mouseup", this.handleDragEnd, !1),
            window.removeEventListener("mousemove", this.handleDragMove, !1);
        }
        componentDidUpdate(e, t) {
          let {
            dragging: n,
            previewWidth: l,
            animatedProgress: a,
          } = this.state;
          !n && t.dragging && l.setValue(a._value);
        }
        setGrabber(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            { animatedProgress: n } = this.state;
          t ? r.default.spring(n, { toValue: e, ...u }).start() : n.setValue(e);
        }
        calculatePercentage(e, t) {
          let {
            wrapper: n,
            props: { type: l },
          } = this;
          if (null == n) return 0;
          let {
              left: a,
              width: s,
              bottom: i,
              height: r,
            } = n.getBoundingClientRect(),
            o = l === d.VOLUME ? (i - t) / r : (e - a) / s;
          return Math.min(1, Math.max(0, o));
        }
        render() {
          let {
              buffers: e,
              type: t,
              className: n,
              sliderClassName: a,
            } = this.props,
            { dragging: s, previewWidth: u, animatedProgress: c } = this.state;
          return (0, l.jsx)("div", {
            className: i(n, t === d.VOLUME ? o.vertical : o.horizontal),
            children: (0, l.jsx)("div", {
              className: i(
                a,
                s ? o.mediaBarInteractionDragging : o.mediaBarInteraction,
                t === d.VOLUME ? o.mediaBarInteractionVolume : null
              ),
              onMouseDown: this.handleDragStart,
              onMouseMove: this.handleMouseMove,
              ref: e => (this.wrapper = e),
              children: (0, l.jsxs)("div", {
                className: i(
                  o.mediaBarWrapper,
                  t === d.VOLUME ? o.mediaBarWrapperVolume : null
                ),
                children: [
                  null != e
                    ? e.map((e, t) => {
                        let [n, a] = e;
                        return (0, l.jsx)(
                          "div",
                          {
                            className: o.buffer,
                            style: {
                              width: "".concat(100 * a, "%"),
                              left: "".concat(100 * n, "%"),
                            },
                          },
                          t
                        );
                      })
                    : null,
                  t === d.DURATION
                    ? (0, l.jsx)(r.default.div, {
                        className: o.mediaBarPreview,
                        style: {
                          width: u.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                          }),
                        },
                      })
                    : null,
                  (0, l.jsx)(r.default.div, {
                    className: o.mediaBarProgress,
                    style: {
                      width: c.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                      }),
                    },
                    children: (0, l.jsx)("span", {
                      className: o.mediaBarGrabber,
                    }),
                  }),
                  t === d.DURATION
                    ? (0, l.jsx)(r.default.div, {
                        ref: this.setBubbleRef,
                        className: o.bubble,
                        style: {
                          left: (s ? c : u).interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                          }),
                        },
                      })
                    : null,
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              animatedProgress: new r.default.Value(0),
              dragging: !1,
              offsetLeft: 0,
              offsetWidth: 0,
              previewWidth: new r.default.Value(0),
            }),
            (this.handlePreviewChange = () => {
              let {
                bubble: e,
                state: { dragging: t, previewWidth: n },
                props: { value: l },
              } = this;
              !t && null != e && (e.innerText = c(n._value * l));
            }),
            (this.handleAnimatedChange = () => {
              let {
                bubble: e,
                state: { dragging: t, animatedProgress: n },
                props: { value: l },
              } = this;
              t && null != e && (e.innerText = c(n._value * l));
            }),
            (this.handleMouseMove = e => {
              let { dragging: t, previewWidth: n } = this.state;
              if (t) return;
              let { clientX: l, clientY: a } = e;
              n.setValue(this.calculatePercentage(l, a));
            }),
            (this.handleDragMove = e => {
              let { onDrag: t, type: n } = this.props,
                { clientX: l, clientY: a } = e;
              t(this.calculatePercentage(l, a), n);
            }),
            (this.handleDragStart = e => {
              let {
                  onDragStart: t,
                  onDrag: n,
                  type: l,
                  currentWindow: a,
                } = this.props,
                { clientX: s, clientY: i } = e;
              if ((e.preventDefault(), null == this.wrapper)) return;
              let { left: r, width: o } = this.wrapper.getBoundingClientRect();
              this.setState(
                { dragging: !0, offsetLeft: r, offsetWidth: o },
                () => {
                  t(l),
                    n(this.calculatePercentage(s, i), l),
                    a.removeEventListener("mouseup", this.handleDragEnd, !1),
                    a.removeEventListener("mousemove", this.handleDragMove, !1),
                    a.addEventListener("mouseup", this.handleDragEnd, !1),
                    a.addEventListener("mousemove", this.handleDragMove, !1);
                }
              );
            }),
            (this.handleDragEnd = () => {
              let { onDragEnd: e, currentWindow: t } = this.props;
              e(),
                t.removeEventListener("mouseup", this.handleDragEnd, !1),
                t.removeEventListener("mousemove", this.handleDragMove, !1),
                this.setState({ dragging: !1 });
            }),
            (this.setBubbleRef = e => {
              null == e
                ? (this.bubble = null)
                : null != e.componentRef
                  ? (this.bubble = e.componentRef)
                  : null != e.refs && (this.bubble = e.refs.node);
            });
        }
      }
      (m.Types = d), (m.defaultProps = { currentWindow: window });
      var f = m;
    },
    924444: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImageModal: function () {
            return _;
          },
          VideoModal: function () {
            return x;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("394846"),
        o = n("77078"),
        u = n("304580"),
        d = n("605160"),
        c = n("659500"),
        m = n("103603"),
        f = n("874276"),
        h = n("952368"),
        p = n("888673"),
        g = n("505684"),
        E = n("49111"),
        C = n("782340"),
        v = n("713139");
      function I(e) {
        let { onClose: t } = e,
          n = a.useRef(null);
        return (0, l.jsx)("div", {
          className: v.mobileCloseWrapper,
          ref: n,
          children: (0, l.jsx)(o.FocusRingScope, {
            containerRef: n,
            children: (0, l.jsx)("div", {
              children: (0, l.jsx)(u.default, {
                closeAction: t,
                keybind: "ESC",
              }),
            }),
          }),
        });
      }
      let S = e => {
        let { children: t, hasMediaControls: n, isObscured: s, src: r } = e,
          [o, u] = a.useState(!1),
          c = a.useRef(r);
        return (a.useEffect(() => {
          r !== c.current && u(!s);
        }, [r, s]),
        s)
          ? (0, l.jsx)(g.ObscuredDisplayContext.Provider, {
              value: o,
              children: (0, l.jsx)(
                g.default,
                {
                  type: g.default.Types.ATTACHMENT,
                  reason: d.ObscureReason.EXPLICIT_CONTENT,
                  className: v.obscureContainer,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  obscurityControlClassName: i({ [v.controlsOffset]: n && o }),
                  onToggleObscurity: e => {
                    e.stopPropagation(),
                      e.nativeEvent.stopPropagation(),
                      u(e => !e);
                  },
                  children: e =>
                    (0, l.jsx)(l.Fragment, {
                      children: (0, l.jsx)("div", {
                        className: i(v.obscureWrapper, { [v.obscure]: e }),
                        children: t(e),
                      }),
                    }),
                },
                r
              ),
            })
          : (0, l.jsx)(l.Fragment, { children: t(!1) });
      };
      function _(e) {
        let {
            src: t,
            original: n,
            placeholder: s,
            width: i,
            height: o,
            animated: u,
            children: d,
            responsive: f,
            renderLinkComponent: p,
            maxWidth: g,
            maxHeight: _,
            shouldAnimate: x,
            onClose: N,
            shouldHideMediaOptions: T = !1,
            obscure: M = !1,
            ...A
          } = e,
          { width: O, height: j } = (0, m.zoomFit)(i, o),
          y = r.isMobile && null != N;
        a.useEffect(() => {
          if (null != N)
            return (
              c.ComponentDispatch.subscribe(
                E.ComponentActions.MEDIA_MODAL_CLOSE,
                N
              ),
              () => {
                c.ComponentDispatch.unsubscribe(
                  E.ComponentActions.MEDIA_MODAL_CLOSE,
                  N
                );
              }
            );
        }, [N]);
        let L = T
          ? e => {
              e.stopPropagation(), e.preventDefault();
            }
          : A.onContextMenu;
        return (0, l.jsxs)("div", {
          className: v.wrapper,
          children: [
            y ? (0, l.jsx)(I, { onClose: N }) : null,
            (0, l.jsx)(S, {
              isObscured: M,
              src: t,
              children: e =>
                (0, l.jsx)(
                  h.default,
                  {
                    src: t,
                    placeholder: s,
                    shouldLink: !1,
                    width: i,
                    height: o,
                    maxWidth: O,
                    maxHeight: j,
                    children: d,
                    animated: !e && u,
                    autoPlay: !e,
                    responsive: f,
                    onContextMenu: L,
                    ...A,
                  },
                  t
                ),
            }),
            null != n &&
              !T &&
              p({
                href: n,
                target: "_blank",
                rel: "noreferrer noopener",
                className: v.downloadLink,
                children: C.default.Messages.OPEN_IN_BROWSER,
              }),
          ],
        });
      }
      function x(e) {
        let {
            src: t,
            width: n,
            height: a,
            onClose: s,
            renderLinkComponent: o,
            shouldHideMediaOptions: u = !1,
            obscure: d = !1,
            ...c
          } = e,
          { width: h, height: g } = (0, m.zoomFit)(n, a),
          E = r.isMobile && null != s,
          _ = u
            ? e => {
                e.stopPropagation(), e.preventDefault();
              }
            : c.onContextMenu;
        return (0, l.jsxs)("div", {
          className: i(v.wrapper, v.videoWrapper),
          children: [
            E ? (0, l.jsx)(I, { onClose: s }) : null,
            (0, l.jsx)(S, {
              hasMediaControls: !0,
              isObscured: d,
              src: t,
              children: e =>
                (0, l.jsx)(
                  p.default,
                  {
                    src: t,
                    width: n,
                    height: a,
                    maxWidth: h,
                    maxHeight: g,
                    renderLinkComponent: o,
                    volume: f.getVolume,
                    autoMute: f.getMuted,
                    onVolumeChange: f.setVolume,
                    onMute: f.setMuted,
                    autoPlay: !e,
                    onContextMenu: _,
                    ...c,
                  },
                  t
                ),
            }),
            !u &&
              o({
                href: t,
                target: "_blank",
                rel: "noreferrer noopener",
                className: v.downloadLink,
                children: C.default.Messages.OPEN_IN_BROWSER,
              }),
          ],
        });
      }
    },
    170113: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          convertSecondsToClockFormat: function () {
            return b;
          },
          default: function () {
            return V;
          },
        }),
        n("424973"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("917351"),
        o = n.n(r),
        u = n("458960"),
        d = n("77078"),
        c = n("95032"),
        m = n("718517"),
        f = n("829536"),
        h = n("563680"),
        p = n("725962"),
        g = n("672724"),
        E = n("392284"),
        C = n("468482"),
        v = n("316680"),
        I = n("830837"),
        S = n("132755"),
        _ = n("73034"),
        x = n("58608"),
        N = n("719347"),
        T = n("49111"),
        M = n("782340"),
        A = n("167691"),
        O = n("173791");
      let j = "-:--",
        y = { friction: 14, tension: 200 },
        L = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
        R = { width: "100%", height: "100%", backgroundColor: "black" };
      function b(e) {
        let t = 0 | e,
          n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
      }
      let P = e => {
        let { current: t, duration: n } = e,
          a = null != t ? b(t) : j,
          s = null != n ? b(n) : j;
        return (
          (a = a.padStart(s.length, "0")),
          (0, l.jsxs)("div", {
            className: A.durationTimeWrapper,
            children: [
              (0, l.jsx)("span", {
                className: A.durationTimeDisplay,
                children: a,
              }),
              (0, l.jsx)("span", {
                className: A.durationTimeSeparator,
                children: "/",
              }),
              (0, l.jsx)("span", {
                className: A.durationTimeDisplay,
                children: s,
              }),
            ],
          })
        );
      };
      class D extends a.Component {
        componentDidMount() {
          this.state.translateY.setValue(this.props.autoPlay ? 1 : 0);
        }
        componentDidUpdate(e) {
          let { hide: t, playing: n } = this.props;
          if (t && !e.hide) {
            var l;
            this.animateControls(1, n),
              null === (l = this.volumeButton) || void 0 === l || l.blur();
          } else !t && e.hide && this.animateControls(0, n);
        }
        updateProgress(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            { durationBar: n } = this;
          null != n && n.setGrabber(e, t);
        }
        animateControls(e, t) {
          let { translateY: n } = this.state;
          t ? u.default.spring(n, { toValue: e, ...y }).start() : n.setValue(e);
        }
        getAnimatedStyle() {
          let { translateY: e } = this.state;
          return {
            transform: [
              {
                translateY: e.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ],
          };
        }
        renderPlayIcon() {
          let {
            playing: e,
            currentTime: t,
            duration: n,
            onPause: a,
            onPlay: s,
            disabled: i,
          } = this.props;
          return e
            ? (0, l.jsx)(d.Clickable, {
                className: A.videoButton,
                onClick: a,
                tabIndex: i ? -1 : 0,
                "aria-label": M.default.Messages.PAUSE,
                children: (0, l.jsx)(
                  I.default,
                  { className: A.controlIcon },
                  "pause"
                ),
              })
            : null != t && t === n
              ? (0, l.jsx)(d.Clickable, {
                  className: A.videoButton,
                  onClick: s,
                  tabIndex: i ? -1 : 0,
                  "aria-label": M.default.Messages.PLAY_AGAIN,
                  children: (0, l.jsx)(
                    _.default,
                    { className: A.controlIcon },
                    "replay"
                  ),
                })
              : (0, l.jsx)(d.Clickable, {
                  className: A.videoButton,
                  onClick: s,
                  tabIndex: i ? -1 : 0,
                  "aria-label": M.default.Messages.PLAY,
                  children: (0, l.jsx)(
                    S.default,
                    { className: A.controlIcon },
                    "play"
                  ),
                });
        }
        render() {
          let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: a,
            muted: s,
            onDrag: i,
            onDragEnd: r,
            onDragStart: o,
            onToggleMuted: d,
            onVolumeShow: c,
            onVolumeHide: m,
            width: f,
            volume: h,
            type: p,
          } = this.props;
          return (0, l.jsxs)(u.default.div, {
            className: p === L.VIDEO ? A.videoControls : A.audioControls,
            onClick: e => e.stopPropagation(),
            onDoubleClick: e => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
              this.renderPlayIcon(),
              "string" == typeof f || f > 250
                ? (0, l.jsx)(P, { current: n, duration: a })
                : null,
              (0, l.jsx)(g.default, {
                buffers: e,
                value: null != a ? a : 0,
                onDrag: i,
                onDragEnd: r,
                onDragStart: o,
                type: g.default.Types.DURATION,
                ref: this.setDurationRef,
              }),
              (0, l.jsx)("div", {
                className: O.flex,
                children: (0, l.jsx)(v.default, {
                  ref: this.setVolumeButtonRef,
                  muted: s,
                  value: h,
                  minValue: 0,
                  maxValue: 1,
                  currentWindow: window,
                  onValueChange: e => i(e, g.default.Types.VOLUME),
                  onToggleMute: d,
                  onVolumeShow: c,
                  onVolumeHide: m,
                  iconClassName: A.controlIcon,
                  sliderWrapperClassName: A.volumeSliderWrapper,
                }),
              }),
              t,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { translateY: new u.default.Value(0) }),
            (this.setDurationRef = e => {
              this.durationBar = e;
            }),
            (this.setVolumeButtonRef = e => {
              this.volumeButton = e;
            });
        }
      }
      function w(e) {
        let {
          fileName: t,
          fileSize: n,
          src: a,
          disabled: s,
          mimeType: i,
          hideDownloadButton: r,
        } = e;
        return (0, l.jsxs)("div", {
          className: A.audioMetadata,
          children: [
            (0, l.jsxs)("div", {
              className: A.metadataContent,
              children: [
                s
                  ? t
                  : (0, l.jsx)(p.default, {
                      href: a,
                      className: A.metadataDownload,
                      iconClassName: A.metadataIcon,
                      mimeType: i,
                      fileName: t,
                    }),
                (0, l.jsx)("div", { className: A.metadataSize, children: n }),
              ],
            }),
            !r &&
              (0, l.jsx)(p.default, {
                href: a,
                className: A.metadataDownload,
                iconClassName: A.metadataIcon,
                mimeType: i,
              }),
          ],
        });
      }
      D.defaultProps = { disabled: !1 };
      class U extends a.Component {
        pop() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.setState({ play: e }, this.popAnimation);
        }
        getAnimatedStyle() {
          let { opacity: e, scale: t } = this.state;
          return u.default.accelerate({
            opacity: e.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.8],
            }),
            transform: [
              {
                scale: t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          });
        }
        render() {
          let { play: e } = this.state,
            t = e ? S.default : I.default;
          return (0, l.jsx)(u.default.div, {
            className: A.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, l.jsx)(t, { className: A.playPausePopIcon }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              play: !1,
              scale: new u.default.Value(0),
              opacity: new u.default.Value(0),
            }),
            (this.popAnimation = () => {
              let { opacity: e, scale: t } = this.state;
              t.setValue(0),
                e.setValue(0),
                u.default
                  .parallel([
                    u.default.sequence([
                      u.default.timing(e, { toValue: 1, duration: 200 }),
                      u.default.timing(e, { toValue: 0, duration: 200 }),
                    ]),
                    u.default.spring(t, { toValue: 1.5, ...y, friction: 80 }),
                  ])
                  .start();
            });
        }
      }
      class k extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
          return !e.playable && t.playing
            ? { playing: !1, hideControls: !1 }
            : null;
        }
        componentDidMount() {
          let { playing: e, muted: t, volume: n } = this.state,
            { current: l } = this.mediaRef;
          null != l &&
            (t && (l.muted = t),
            e && (this.play(!0), this.handleUIUpdate()),
            (l.volume = n));
        }
        componentDidUpdate(e, t) {
          let {
              props: { onPause: n, onVolumeChange: l, onMute: a },
              state: {
                playing: s,
                fullscreen: i,
                muted: r,
                dragging: o,
                volume: u,
              },
            } = this,
            { current: d } = this.mediaRef,
            { current: c } = this.playPausePopRef;
          if (null == d) return;
          s && !t.playing
            ? (this.play(),
              this.handleMouseMove(),
              this.handleUIUpdate(),
              t.hasClickedPlay && (null == c || c.pop(s)))
            : !s &&
              t.playing &&
              (d.pause(), null == c || c.pop(s), null == n || n());
          let m = (0, h.getFullScreenNode)(d.parentNode, d);
          i && !t.fullscreen && null != m
            ? ((0, h.requestFullScreen)(m),
              m.addEventListener(
                h.FULLSCREEN_CHANGE_EVENT,
                this.handleFullScreenExit
              ))
            : !i &&
              t.fullscreen &&
              null != m &&
              (m.removeEventListener(
                h.FULLSCREEN_CHANGE_EVENT,
                this.handleFullScreenExit
              ),
              (0, h.exitFullScreen)(m)),
            o === g.default.Types.DURATION &&
            t.dragging !== g.default.Types.DURATION &&
            s
              ? d.pause()
              : o !== g.default.Types.DURATION &&
                t.dragging === g.default.Types.DURATION &&
                s &&
                d.play(),
            r !== t.muted && ((d.muted = r), null == a || a(r)),
            u !== t.volume && ((d.volume = u), null == l || l(u));
        }
        componentWillUnmount() {
          this._unmounted = !0;
          let { current: e } = this.mediaRef;
          if (null == e) return;
          let t = (0, h.getFullScreenNode)(e.parentNode, e);
          null != t &&
            (t.removeEventListener(
              h.FULLSCREEN_CHANGE_EVENT,
              this.handleFullScreenExit
            ),
            (0, h.exitFullScreen)(t));
        }
        play() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: l } = this.props,
            { current: a } = this.mediaRef;
          if (null != a) {
            let s = {};
            if ("function" == typeof n) {
              let e = n();
              e !== this.state.volume && ((a.volume = e), (s.volume = e));
            }
            if ("function" == typeof l) {
              let e = l();
              e !== this.state.muted && ((a.muted = e), (s.muted = e));
            }
            this.setState(s),
              a.play(),
              null == t ||
                t(
                  e,
                  a.currentTime * m.default.Millis.SECOND,
                  a.duration * m.default.Millis.SECOND
                );
          }
        }
        getWidth() {
          let { width: e } = this.props;
          return "100%" === e ? e : Math.max(e, k.minWidth);
        }
        getHeight() {
          let { height: e } = this.props;
          return "100%" === e ? e : Math.max(e, k.minHeight);
        }
        updateValue(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            { current: n } = this.controlsRef;
          null != n && n.updateProgress(e, t);
        }
        updateTime(e, t) {
          let n = 0 | e,
            l = 0 | t;
          (this.state.currentTime !== n || this.state.duration !== l) &&
            this.setState({ currentTime: n, duration: l });
        }
        updateControlsVisibility() {
          let { dragging: e, fullscreen: t } = this.state,
            n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
          n !== this.state.hideControls &&
            null == e &&
            this.setState({ hideControls: n });
        }
        renderVideo() {
          let {
              src: e,
              poster: t,
              forceExternal: n,
              onError: a,
              responsive: s,
              mediaLayoutType: i,
            } = this.props,
            { playing: r, fullscreen: o } = this.state,
            u = this.getWidth(),
            d = this.getHeight();
          return n
            ? (0, l.jsx)(x.default, {
                className: A.video,
                controls: !1,
                height: d,
                poster: t,
                width: u,
                responsive: s && !o,
                mediaLayoutType: i,
                playsInline: !0,
                autoPlay: r,
              })
            : (0, l.jsx)(x.default, {
                className: A.video,
                controls: !1,
                playsInline: !0,
                autoPlay: r,
                height: d,
                responsive: s && !o,
                mediaLayoutType: o ? N.MediaLayoutType.STATIC : i,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onError: a,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                poster: t,
                preload: this.state.preload,
                ref: this.mediaRef,
                width: u,
                src: e,
              });
        }
        renderAudio() {
          return (0, l.jsx)("audio", {
            className: A.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, l.jsx)("source", { src: this.props.src }),
          });
        }
        renderControls() {
          let { current: e } = this.mediaRef,
            {
              props: {
                type: t,
                autoPlay: n,
                playable: a = !0,
                onVolumeShow: s,
                onVolumeHide: i,
              },
              state: {
                buffers: r,
                currentTime: o,
                duration: u,
                hasClickedPlay: d,
                hideControls: m,
                muted: p,
                playing: g,
                fullscreen: C,
                volume: v,
                dragging: I,
              },
            } = this,
            S = this.getWidth();
          return d || n || t === L.AUDIO
            ? (0, l.jsx)(D, {
                buffers: r,
                currentTime: o,
                duration: u,
                volume: (0, f.amplitudeToPerceptual)(v, 1),
                hide: t === L.VIDEO && m,
                muted: p,
                autoPlay: n,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                onDragStart: this.handleDragStart,
                onPause: () => this.setPlay(!1),
                onPlay: () => this.setPlay(!0),
                onToggleMuted: this.toggleMuted,
                onVolumeShow: s,
                onVolumeHide: i,
                playing: g,
                dragging: I,
                type: t,
                ref: this.controlsRef,
                width: C ? window.screen.width : S,
                disabled: !a,
                children:
                  t === L.VIDEO
                    ? (0, l.jsx)(c.default, {
                        "aria-label":
                          M.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                        className: A.videoButton,
                        guestWindow: window,
                        onClick: this.toggleFullscreen,
                        node: (0, h.getFullScreenNode)(
                          null == e ? void 0 : e.parentNode,
                          e
                        ),
                      })
                    : null,
              })
            : (0, l.jsx)(E.default, {
                onPlay: this.handleVideoClick,
                inactive: !a,
              });
        }
        renderMetadata() {
          let {
            fileName: e,
            fileSize: t,
            src: n,
            type: a,
            playable: s,
            mimeType: i,
          } = this.props;
          return null == e || null == t
            ? null
            : a === L.AUDIO
              ? (0, l.jsx)(w, {
                  fileName: e,
                  fileSize: t,
                  src: n,
                  disabled: !s,
                  mimeType: i,
                  hideDownloadButton: !0,
                })
              : null;
        }
        renderPlayPausePop() {
          return (0, l.jsx)(U, { ref: this.playPausePopRef });
        }
        getMediaStyle() {
          let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: l } = this.state,
            a = this.getWidth();
          return l
            ? R
            : t === L.AUDIO
              ? { width: void 0, height: "auto" }
              : e
                ? void 0
                : { width: a, height: n };
        }
        render() {
          let {
              height: e,
              type: t,
              src: n,
              forceExternal: a,
              className: s,
              renderLinkComponent: r,
              responsive: o,
              mediaLayoutType: u,
              renderOverlayContent: d,
            } = this.props,
            { fullscreen: c, hideControls: m, playing: f } = this.state,
            h = A.wrapperPaused;
          if (
            (t === L.AUDIO
              ? (h = A.wrapperAudio)
              : m
                ? (h = A.wrapperControlsHidden)
                : f && (h = A.wrapperPlaying),
            a && t === L.VIDEO)
          ) {
            let t = this.getWidth();
            return (0, l.jsxs)("div", {
              className: i(h, {
                [A.wrapperMediaMosaic]: u === N.MediaLayoutType.MOSAIC,
              }),
              style: o ? void 0 : { width: t, height: e },
              children: [
                this.renderMetadata(),
                this.renderVideo(),
                (0, l.jsx)("div", {
                  className: A.playCenter,
                  children: (0, l.jsx)(C.default, {
                    className: A.playButton,
                    externalURL: n,
                    renderLinkComponent: r,
                  }),
                }),
              ],
            });
          }
          return (0, l.jsxs)("div", {
            className: i(h, A.newMosaicStyle, s, {
              [A.wrapperMediaMosaic]: u === N.MediaLayoutType.MOSAIC,
            }),
            "data-fullscreen": c,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: f ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
              this.renderMetadata(),
              t === L.AUDIO ? this.renderAudio() : this.renderVideo(),
              this.renderControls(),
              t === L.VIDEO ? this.renderPlayPausePop() : null,
              null != d
                ? (0, l.jsx)("div", {
                    className: i({ [A.overlayContentHidden]: f || c }),
                    children: d(),
                  })
                : null,
            ],
          });
        }
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this._unmounted = !1),
            (this._lastMove = 0),
            (this.mediaRef = a.createRef()),
            (this.controlsRef = a.createRef()),
            (this.playPausePopRef = a.createRef()),
            (this.handleFullScreenExit = () => {
              let { current: e } = this.mediaRef;
              if (null == e) return;
              let t = (0, h.getFullScreenNode)(e.parentNode, e);
              (null == t || !(0, h.isFullScreen)(t)) &&
                this.setState({ fullscreen: !1 });
            }),
            (this.toggleFullscreen = () => {
              let e = !this.state.fullscreen;
              this.setState({ fullscreen: e });
            }),
            (this.setMuted = e => {
              this.setState({ muted: e });
            }),
            (this.toggleMuted = () => {
              this.setMuted(!this.state.muted);
            }),
            (this.setTime = function (e) {
              let n =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                { current: l } = t.mediaRef;
              null != l &&
                isFinite(l.duration) &&
                isFinite(l.currentTime) &&
                ((l.currentTime = e),
                t.updateValue(e / l.duration, n),
                t.updateTime(e, l.duration));
            }),
            (this.handleUIUpdate = () => {
              if (!this.state.playing || this._unmounted) return;
              let { current: e } = this.mediaRef;
              null != e &&
                (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
                this.updateTime(e.currentTime, e.duration),
                this.updateControlsVisibility(),
                requestAnimationFrame(this.handleUIUpdate));
            }),
            (this.handleDrag = (e, t) => {
              let { current: n } = this.mediaRef;
              if (t === g.default.Types.DURATION)
                null != n &&
                  isFinite(n.duration) &&
                  this.setTime(n.duration * e, !1);
              else if (t === g.default.Types.VOLUME) {
                let t = (0, f.perceptualToAmplitude)(e, 1);
                0 === t
                  ? this.setState({ muted: !0, volume: t })
                  : this.state.muted && t > 0
                    ? this.setState({ muted: !1, volume: t })
                    : this.setState({ volume: t });
              }
            }),
            (this.handleLoaded = () => {
              let { current: e } = this.mediaRef;
              null != e &&
                (this.updateTime(e.currentTime, e.duration),
                this.setState({
                  hasLoadedMetadata: !0,
                  currentTime: e.currentTime,
                  duration: e.duration,
                }));
            }),
            (this.handleDurationChange = () => {
              let { current: e } = this.mediaRef;
              null != e &&
                (this.updateTime(e.currentTime, e.duration),
                this.setState({ duration: e.duration }));
            }),
            (this.handleBuffer = o.debounce(() => {
              let { current: e } = this.mediaRef;
              if (null == e) {
                this.setState({ buffers: [] });
                return;
              }
              this.setState({
                buffers: (function (e) {
                  let t = [],
                    { duration: n } = e;
                  for (let l = 0; l < e.buffered.length; l++) {
                    let a = e.buffered.start(l),
                      s = e.buffered.end(l);
                    if (s - a < 1) continue;
                    let i = (s - a) / n,
                      r = a / n;
                    t.push([r, i]);
                  }
                  return t;
                })(e),
              });
            }, 400)),
            (this.handleEnded = e => {
              let { onEnded: t } = this.props;
              this.setState({ playing: !1, hideControls: !1 }),
                null != t && t(e);
            }),
            (this.handleMouseMove = () => {
              this._lastMove = Date.now();
            }),
            (this.handleMouseLeave = () => {
              this.state.playing && (this._lastMove = 0),
                this.setState({ hovering: !1 });
            }),
            (this.handleMouseEnter = () => {
              "none" === this.state.preload &&
                this.setState({ preload: "metadata" }),
                this.setState({ hovering: !0 });
            }),
            (this.handleVideoClick = e => {
              let {
                state: { hasClickedPlay: t, playing: n },
                props: { onClick: l, autoPlay: a, autoMute: s },
              } = this;
              if (null != l) {
                l(e);
                return;
              }
              e.stopPropagation(),
                a && !t && n && s
                  ? this.setState({ muted: !1, hasClickedPlay: !0 })
                  : this.setPlay(!this.state.playing);
            }),
            (this.setPlay = e => {
              let {
                props: { autoMute: t },
                state: { hasClickedPlay: n, muted: l },
              } = this;
              e !== this.state.playing &&
                (e
                  ? this.setState({
                      playing: e,
                      hasClickedPlay: !0,
                      muted: (!!n || !t) && l,
                    })
                  : this.setState({ playing: !1, hideControls: !1 }));
            }),
            (this.handleDragStart = e => {
              this.setState({ dragging: e });
            }),
            (this.handleDragEnd = () => {
              this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            (this.handleKeyDown = e => {
              let { current: t } = this.mediaRef;
              if (e.which === T.KeyboardKeys.SPACE)
                e.preventDefault(), this.setPlay(!this.state.playing);
              else if (
                e.which >= T.KeyboardKeys.DIGIT_0 &&
                e.which <= T.KeyboardKeys.DIGIT_9 &&
                null != t
              ) {
                e.preventDefault();
                let n = (e.which - T.KeyboardKeys.DIGIT_0) / 10;
                (t.currentTime = t.duration * n), this.setPlay(!0);
              }
            });
          let { autoPlay: n, autoMute: l, volume: s, playable: i } = this.props,
            r = "function" == typeof s ? s() : s,
            u = "function" == typeof l ? l() : l;
          this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: u,
            volume: r,
            playing: n,
            preload: "none",
            width: k.minWidth,
            height: k.minHeight,
            hovering: !1,
          };
        }
      }
      (k.Types = L),
        (k.defaultProps = {
          width: 400,
          height: 300,
          forceExternal: !1,
          playable: !0,
          downloadable: !0,
          autoPlay: !1,
          autoMute: !1,
          volume: 1,
        }),
        (k.minWidth = 150),
        (k.minHeight = 110);
      var V = k;
    },
    666897: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("509043"),
        o = n("77078"),
        u = n("873218"),
        d = n("780121"),
        c = e => {
          let {
              children: t,
              className: n,
              color: s,
              iconType: c,
              onMouseEnter: m,
              onMouseLeave: f,
              ...h
            } = e,
            [p, g] = a.useState(!1),
            E = a.useCallback(
              e => {
                g(!0), null == m || m(e);
              },
              [g, m]
            ),
            C = a.useCallback(
              e => {
                g(!1), null == f || f(e);
              },
              [g, f]
            ),
            v = {};
          return (
            null != s &&
              (v = {
                color: (0, r.int2hex)(s),
                backgroundColor: p
                  ? (0, r.int2rgba)(s, 0.3)
                  : (0, r.int2rgba)(s, 0.1),
              }),
            (0, l.jsx)(o.Clickable, {
              ...h,
              tag: "span",
              className: i(n, { [d.wrapper]: !0, interactive: h.onClick }),
              onMouseEnter: E,
              onMouseLeave: C,
              style: v,
              tabIndex: null != h.onClick ? 0 : -1,
              children:
                null != c
                  ? (0, l.jsx)(u.default, { iconType: c, children: t })
                  : t,
            })
          );
        };
    },
    505684: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ObscuredDisplayContext: function () {
            return _;
          },
          default: function () {
            return N;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("669491"),
        d = n("681187"),
        c = n("77078"),
        m = n("605160"),
        f = n("449008"),
        h = n("462579"),
        p = n("867544"),
        g = n("782340"),
        E = n("145719");
      ((a = l || (l = {})).TEXT = "text"),
        (a.ATTACHMENT = "attachment"),
        (a.EMBED = "embed");
      let C = e => {
          let { className: t } = e;
          return (0, s.jsx)("div", {
            className: o(E.spoilerWarning, t),
            children: g.default.Messages.SPOILER,
          });
        },
        v = e => {
          let { className: t, isSingleMosaicItem: n, obscureOnly: l } = e;
          return (0, s.jsx)("div", {
            className: o(E.explicitContentWarning, t),
            children: l
              ? null
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.ImageWarningIcon, {
                      width: 32,
                      height: 32,
                      color: u.default.colors.WHITE,
                    }),
                    n &&
                      (0, s.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: E.explicitContentWarningText,
                        children: g.default.Messages.EXPLICIT_CONTENT_WARNING,
                      }),
                  ],
                }),
          });
        },
        I = e => {
          let {
            reason: t = m.ObscureReason.SPOILER,
            className: n,
            isSingleMosaicItem: l = !1,
          } = e;
          switch (t) {
            case m.ObscureReason.SPOILER:
              return (0, s.jsx)(C, { className: n });
            case m.ObscureReason.EXPLICIT_CONTENT:
              return (0, s.jsx)(v, { isSingleMosaicItem: l, className: n });
            case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
              return (0, s.jsx)(v, {
                isSingleMosaicItem: l,
                className: n,
                obscureOnly: !0,
              });
            default:
              return (0, f.assertNever)(t);
          }
        },
        S = e => {
          let {
            obscureReason: t,
            isVisible: n,
            handleToggleObscurity: l,
            obscurityControlClassName: a,
          } = e;
          return t !== m.ObscureReason.EXPLICIT_CONTENT
            ? null
            : (0, s.jsx)("div", {
                className: o(E.obscureButtonContainer, a),
                children: (0, s.jsx)(c.Clickable, {
                  className: o(E.obscureHoverButton),
                  onClick: l,
                  "aria-label":
                    g.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
                  children: n
                    ? (0, s.jsx)(h.default, { width: 24, height: 24 })
                    : (0, s.jsx)(p.default, { width: 24, height: 24 }),
                }),
              });
        },
        _ = i.createContext(!1);
      class x extends i.PureComponent {
        renderWithTooltip(e) {
          return (0, s.jsx)(c.Tooltip, {
            position: "left",
            text: this.state.visible ? null : this.tooltipText,
            children: t => {
              let { onMouseEnter: n, onMouseLeave: l } = t;
              return i.cloneElement(i.Children.only(e), {
                onMouseEnter: n,
                onMouseLeave: l,
              });
            },
          });
        }
        renderObscuredAttachment() {
          let {
              children: e,
              inline: t,
              className: n,
              containerStyles: l,
              obscured: a = !0,
              reason: i = m.ObscureReason.SPOILER,
              isSingleMosaicItem: r = !1,
              obscurityControlClassName: u,
            } = this.props,
            { visible: d } = this.state,
            f = (0, s.jsx)(_.Consumer, {
              children: f => {
                let h = f || d || !a;
                return [
                  m.ObscureReason.EXPLICIT_CONTENT,
                  m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT,
                ].includes(i) && !t
                  ? (0, s.jsxs)("div", {
                      "aria-label": h ? void 0 : this.ariaLabel,
                      "aria-expanded": h,
                      style: l,
                      className: o(n, E.spoilerContent, E.spoilerContainer, {
                        [E.hidden]: !h,
                        [E.constrainedObscureContent]: r,
                      }),
                      role: h ? "presentation" : "button",
                      tabIndex: h ? -1 : 0,
                      children: [
                        h || t
                          ? null
                          : (0, s.jsx)(I, { reason: i, isSingleMosaicItem: r }),
                        (0, s.jsx)("div", {
                          "aria-hidden": !h,
                          className: E.spoilerInnerContainer,
                          children: e(!h),
                        }),
                        (0, s.jsx)(S, {
                          obscureReason: i,
                          isVisible: d,
                          handleToggleObscurity: this.handleToggleObscurity,
                          obscurityControlClassName: u,
                        }),
                      ],
                    })
                  : (0, s.jsxs)(c.Clickable, {
                      onClick: h ? void 0 : this.removeObscurity,
                      "aria-label": h ? void 0 : this.ariaLabel,
                      "aria-expanded": h,
                      style: l,
                      className: o(n, E.spoilerContent, E.spoilerContainer, {
                        [E.hidden]: !h,
                        [E.hiddenSpoiler]: !h,
                      }),
                      role: h ? "presentation" : "button",
                      tabIndex: h ? -1 : 0,
                      children: [
                        h || t
                          ? null
                          : (0, s.jsx)(I, { reason: i, isSingleMosaicItem: r }),
                        (0, s.jsx)("div", {
                          "aria-hidden": !h,
                          className: E.spoilerInnerContainer,
                          children: e(!h),
                        }),
                      ],
                    });
              },
            });
          return t ? this.renderWithTooltip(f) : f;
        }
        renderObscuredEmbed() {
          let {
              children: e,
              className: t,
              containerStyles: n,
              isSingleMosaicItem: l,
              obscurityControlClassName: a,
              reason: i = m.ObscureReason.SPOILER,
            } = this.props,
            { visible: r } = this.state;
          return (0, s.jsx)(_.Consumer, {
            children: u => {
              let d = u || r;
              return [
                m.ObscureReason.EXPLICIT_CONTENT,
                m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT,
              ].includes(i)
                ? (0, s.jsxs)("div", {
                    "aria-label": r ? void 0 : this.ariaLabel,
                    "aria-expanded": d,
                    style: n,
                    className: o(t, E.spoilerContent, E.spoilerContainer, {
                      [E.hidden]: !d,
                    }),
                    role: d ? "presentation" : "button",
                    tabIndex: d ? -1 : 0,
                    children: [
                      d
                        ? null
                        : (0, s.jsx)(I, { reason: i, isSingleMosaicItem: l }),
                      (0, s.jsx)("div", {
                        "aria-hidden": !d,
                        className: E.spoilerInnerContainer,
                        children: e(!d),
                      }),
                      (0, s.jsx)(S, {
                        obscureReason: i,
                        isVisible: r,
                        handleToggleObscurity: this.handleToggleObscurity,
                        obscurityControlClassName: a,
                      }),
                    ],
                  })
                : (0, s.jsxs)(c.Clickable, {
                    "aria-label": this.ariaLabel,
                    "aria-expanded": d,
                    className: o(t, E.spoilerContent, E.spoilerContainer, {
                      [E.hidden]: !d,
                    }),
                    onClick: d ? void 0 : this.removeObscurity,
                    style: n,
                    role: d ? "presentation" : "button",
                    tabIndex: d ? -1 : 0,
                    children: [
                      d
                        ? null
                        : (0, s.jsx)(I, { reason: i, className: E.embed }),
                      (0, s.jsx)("div", { "aria-hidden": !d, children: e(!d) }),
                    ],
                  });
            },
          });
        }
        renderObscuredText() {
          let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: l } = this.state,
            a = (0, s.jsx)(_.Consumer, {
              children: a => {
                let r = a || l,
                  u = i.Children.toArray(e(r)),
                  d = i.Children.map(u, e => {
                    let n = i.isValidElement(e);
                    return n && null != t ? t(e, r) : e;
                  });
                return (0, s.jsx)(c.Clickable, {
                  tag: "span",
                  onClick: r ? void 0 : this.removeObscurity,
                  "aria-label": r ? void 0 : this.ariaLabel,
                  "aria-expanded": r,
                  tabIndex: r ? -1 : 0,
                  role: r ? "presentation" : "button",
                  className: o(n, E.spoilerContent, E.spoilerMarkdownContent, {
                    [E.hidden]: !r,
                  }),
                  children: (0, s.jsx)("span", {
                    className: E.obscuredTextContent,
                    children: (0, s.jsx)("span", {
                      "aria-hidden": !r,
                      className: E.obscuredTextContentInner,
                      children: d,
                    }),
                  }),
                });
              },
            });
          return this.renderWithTooltip(a);
        }
        render() {
          let { type: e = "text" } = this.props;
          switch (e) {
            case "text":
              return this.renderObscuredText();
            case "attachment":
              return this.renderObscuredAttachment();
            case "embed":
              return this.renderObscuredEmbed();
            default:
              return (0, f.assertNever)(e);
          }
        }
        get ariaLabel() {
          let { reason: e = m.ObscureReason.SPOILER } = this.props;
          switch (e) {
            case m.ObscureReason.SPOILER:
              return g.default.Messages.SPOILER;
            case m.ObscureReason.EXPLICIT_CONTENT:
              return g.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
            case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
              return g.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
            default:
              return (0, f.assertNever)(e);
          }
        }
        get tooltipText() {
          let { reason: e = m.ObscureReason.SPOILER } = this.props;
          switch (e) {
            case m.ObscureReason.SPOILER:
              return g.default.Messages.SPOILER;
            case m.ObscureReason.EXPLICIT_CONTENT:
              return g.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
            case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
              return g.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
            default:
              return (0, f.assertNever)(e);
          }
        }
        constructor(...e) {
          super(...e),
            (this.state = { visible: !1 }),
            (this.removeObscurity = e => {
              let { visible: t } = this.state;
              if (t) return;
              !t && (e.preventDefault(), e.stopPropagation()),
                this.setState({ visible: !0 });
              let { onReveal: n } = this.props;
              null != n && n();
            }),
            (this.handleToggleObscurity = e => {
              e.stopPropagation(), e.nativeEvent.stopPropagation();
              let { onToggleObscurity: t } = this.props;
              null != t && t(e), this.setState(e => ({ visible: !e.visible }));
            }),
            (this.obscure = () => {
              let { visible: e } = this.state;
              e && this.setState({ visible: !1 });
            });
        }
      }
      (x.Types = l), (x.Reasons = m.ObscureReason);
      var N = x;
    },
    98292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("374665");
      function u(e) {
        let { children: t, "aria-label": n, className: s, position: u } = e,
          d = a.useRef(null),
          c = null != n ? n : "string" == typeof t && t;
        return (0, l.jsx)(r.Tooltip, {
          position: null != u ? u : "top",
          delay: 500,
          text: t,
          "aria-label": c,
          children: n => {
            let { onMouseEnter: a, onMouseLeave: r } = n;
            return (0, l.jsx)("div", {
              className: i(s, o.overflow),
              ref: d,
              "aria-hidden": e["aria-hidden"],
              onMouseEnter: () => {
                let { current: e } = d;
                null != e &&
                  e.offsetWidth < e.scrollWidth &&
                  (null == a || a());
              },
              onMouseLeave: r,
              children: t,
            });
          },
        });
      }
    },
    839952: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("868233"),
        o = n("77078"),
        u = n("903962"),
        d = n("993105"),
        c = n("410889"),
        m = n("461380"),
        f = n("195812"),
        h = n("967685"),
        p = n("204591"),
        g = n("782340"),
        E = n("219127"),
        C = n("862839");
      function v(e) {
        let { text: t, language: a } = e,
          s = () =>
            (0, l.jsx)("pre", {
              children: (0, l.jsx)("code", {
                className: i(C.scrollbarGhostHairline, E.codeView, "hljs"),
                children: t,
              }),
            });
        return (0, l.jsx)(r.LazyLibrary, {
          createPromise: () => n.el("86256").then(n.bind(n, "86256")),
          webpackId: "86256",
          render: e => {
            if (!e.hasLanguage(a)) return s();
            let n = e.highlight(a, t, !0);
            return null == n
              ? s()
              : (0, l.jsx)("pre", {
                  children: (0, l.jsx)("code", {
                    className: i(
                      C.scrollbarGhostHairline,
                      E.codeView,
                      "hljs",
                      n.language
                    ),
                    dangerouslySetInnerHTML: { __html: n.value },
                  }),
                });
          },
          renderFallback: () => s(),
        });
      }
      function I(e) {
        let { expanded: t, setExpanded: n, isWholeFile: a, numLines: s } = e,
          i = (
            a
              ? g.default.Messages.PREVIEW_NUM_LINES
              : g.default.Messages.PREVIEW_NUM_LINES_AT_LEAST
          ).format({ lines: s });
        return (0, l.jsx)(o.Tooltip, {
          text: ""
            .concat(
              t ? g.default.Messages.COLLAPSE : g.default.Messages.EXPAND,
              " ("
            )
            .concat(i, ")"),
          children: e =>
            (0, l.jsxs)(o.Clickable, {
              ...e,
              className: E.toggleExpandSection,
              onClick: () => {
                n(!t);
              },
              children: [
                (0, l.jsx)(m.default, {
                  direction: t
                    ? m.default.Directions.UP
                    : m.default.Directions.DOWN,
                }),
                t ? g.default.Messages.COLLAPSE : g.default.Messages.EXPAND,
              ],
            }),
        });
      }
      function S(e) {
        let { attachment: t } = e,
          n = ""
            .concat(t.filename, " (")
            .concat((0, d.formatKbSize)(t.size), ")");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(o.Tooltip, {
              text: n,
              children: e =>
                (0, l.jsx)("span", {
                  ...e,
                  className: i(E.downloadSection, E.attachmentName),
                  children: t.filename,
                }),
            }),
            (0, l.jsx)(o.Tooltip, {
              text: n,
              children: e =>
                (0, l.jsx)("span", {
                  ...e,
                  className: i(E.downloadSection, E.formattedSize),
                  children: (0, d.formatKbSize)(t.size),
                }),
            }),
            (0, l.jsx)(o.Tooltip, {
              text: "".concat(g.default.Messages.DOWNLOAD, " ").concat(n),
              children: e =>
                (0, l.jsx)(o.Anchor, {
                  ...e,
                  className: E.downloadSection,
                  href: t.url,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: (0, l.jsx)(f.default, {
                    className: E.downloadButton,
                    width: 24,
                    height: 24,
                  }),
                }),
            }),
          ],
        });
      }
      function _(e) {
        let { language: t, setLanguage: n } = e;
        return (0, l.jsx)(o.Popout, {
          position: "left",
          renderPopout: e => {
            let { closePopout: a } = e;
            return (0, l.jsx)(o.Dialog, {
              "aria-label": g.default.Messages.PREVIEW_CHANGE_LANGUAGE,
              children: (0, l.jsx)(o.Combobox, {
                className: E.languageSelector,
                multiSelect: !1,
                placeholder:
                  g.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                value: new Set([t]),
                autoFocus: !0,
                onChange: e => {
                  n(e), a();
                },
                children: e =>
                  Array.from(u.PLAINTEXT_FILE_EXTENSIONS)
                    .filter(t => t.toLowerCase().includes(e.toLowerCase()))
                    .map(e =>
                      (0, l.jsx)(
                        o.ComboboxItem,
                        {
                          value: e,
                          children: (0, l.jsx)(o.ComboboxItem.Label, {
                            children: e,
                          }),
                        },
                        e
                      )
                    ),
              }),
            });
          },
          children: e =>
            (0, l.jsx)(o.Tooltip, {
              text: g.default.Messages.PREVIEW_CHANGE_LANGUAGE,
              children: t =>
                (0, l.jsx)(p.default, {
                  width: 24,
                  height: 24,
                  ...t,
                  ...e,
                  className: E.codeIcon,
                }),
            }),
        });
      }
      function x(e) {
        return (0, l.jsx)(o.Tooltip, {
          text: g.default.Messages.PREVIEW_WHOLE_FILE,
          children: t =>
            (0, l.jsx)(o.Clickable, {
              ...t,
              className: E.openFullPreviewSection,
              onClick: () => {
                (0, o.openModal)(t => (0, l.jsx)(T, { ...e, ...t }));
              },
              children: (0, l.jsx)(h.default, {}),
            }),
        });
      }
      function N(e) {
        var t;
        let {
            attachment: n,
            fileContents: a,
            expanded: s,
            setExpanded: r,
            language: u,
            setLanguage: c,
            bytesLeft: m,
            className: f,
          } = e,
          h = null == a ? void 0 : a.split("\n"),
          p =
            null !== (t = null == h ? void 0 : h.length) && void 0 !== t
              ? t
              : 0,
          C = s ? 100 : 6,
          N = 0 === m,
          T = "";
        N && s && p > C ? (T = "\n...") : !N && (T = "..."),
          "" !== T &&
            (N
              ? (T +=
                  " " +
                  g.default.Messages.PREVIEW_LINES_LEFT.format({
                    lines: p - C,
                  }))
              : (T +=
                  " " +
                  g.default.Messages.PREVIEW_BYTES_LEFT.format({
                    formattedBytes: (0, d.formatKbSize)(m),
                  })));
        let M = (null == h ? void 0 : h.slice(0, C).join("\n")) + T,
          A = s || C < p;
        return (0, l.jsxs)("div", {
          className: i(f, E.container),
          children: [
            (0, l.jsx)("div", {
              className: i(E.textContainer, { [E.expanded]: s }),
              children:
                null == a
                  ? (0, l.jsx)(o.Spinner, { className: E.spinner })
                  : (0, l.jsx)(v, { text: M, language: u }),
            }),
            (0, l.jsxs)(o.Text, {
              color: "header-secondary",
              className: E.footer,
              variant: "text-sm/normal",
              children: [
                A
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(I, {
                          expanded: s,
                          setExpanded: r,
                          isWholeFile: N,
                          numLines: p,
                        }),
                        (0, l.jsx)(x, {
                          language: u,
                          fileContents: a,
                          bytesLeft: m,
                          attachment: n,
                        }),
                      ],
                    })
                  : null,
                (0, l.jsx)("div", { className: E.footerGap }),
                (0, l.jsx)(S, { attachment: n }),
                (0, l.jsx)(_, { language: u, setLanguage: c }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        let {
            transitionState: t,
            language: n,
            fileContents: s,
            bytesLeft: i,
            attachment: r,
          } = e,
          [u, c] = a.useState(n),
          m = null != s ? s : "";
        return (
          0 !== i &&
            (m += "... ".concat(
              g.default.Messages.PREVIEW_BYTES_LEFT.format({
                formattedBytes: (0, d.formatKbSize)(i),
              })
            )),
          (0, l.jsx)(o.ModalRoot, {
            transitionState: t,
            "aria-label": g.default.Messages.PREVIEW_MODAL_LABEL,
            size: o.ModalSize.LARGE,
            className: E.modalRoot,
            children: (0, l.jsxs)("div", {
              className: E.modalContent,
              children: [
                (0, l.jsx)(o.ScrollerThin, {
                  className: E.modalTextContainer,
                  children:
                    null == s
                      ? (0, l.jsx)(o.Spinner, { className: E.spinner })
                      : (0, l.jsx)(v, { text: m, language: u }),
                }),
                (0, l.jsxs)(o.Text, {
                  color: "header-secondary",
                  className: E.footer,
                  variant: "text-sm/normal",
                  children: [
                    (0, l.jsx)("div", { className: E.footerGap }),
                    (0, l.jsx)(S, { attachment: r }),
                    (0, l.jsx)(_, { language: u, setLanguage: c }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var M = a.memo(
        function (e) {
          let { attachment: t, className: n, onClick: s, onContextMenu: r } = e,
            [o, u] = a.useState(!1),
            [d, m] = a.useState(t.filename.split(".").slice(-1)[0]),
            {
              fileContents: f,
              bytesLeft: h,
              hadError: p,
            } = (function (e, t) {
              let [n, l] = a.useState(!1),
                [s, i] = a.useState(null),
                [r, o] = a.useState(1);
              return (
                a.useEffect(() => {
                  (async function n() {
                    try {
                      var n, a;
                      let s = await fetch(e, {
                          headers: {
                            Range: "bytes=0-".concat(5e4),
                            Accept: "text/plain",
                          },
                        }),
                        r = (function (e) {
                          var t;
                          let n = "utf-8",
                            l =
                              null !==
                                (t =
                                  null == e
                                    ? void 0
                                    : e.split("charset=").slice(-1)[0]) &&
                              void 0 !== t
                                ? t
                                : n;
                          try {
                            return new TextDecoder(l);
                          } catch (t) {
                            if (
                              (null == e ? void 0 : e.startsWith("text")) ||
                              l.toLowerCase().includes("utf")
                            )
                              return new TextDecoder(n);
                            throw t;
                          }
                        })(t),
                        u = r.decode(await s.arrayBuffer()),
                        d =
                          null !== (n = s.headers.get("content-range")) &&
                          void 0 !== n
                            ? n
                            : "0",
                        c =
                          null !== (a = s.headers.get("content-length")) &&
                          void 0 !== a
                            ? a
                            : "1",
                        m = parseInt(d.split("/")[1]),
                        f = m - parseInt(c);
                      i(0 === f ? u : u.slice(0, -1)), o(f), l(!1);
                    } catch (e) {
                      o(0), l(!0);
                    }
                  })();
                }, [e, t]),
                { fileContents: s, bytesLeft: r, hadError: n }
              );
            })(t.url, t.content_type);
          return p
            ? (0, l.jsx)(c.default, {
                url: t.url,
                filename: t.filename,
                size: t.size,
                onClick: s,
                onContextMenu: r,
                className: n,
              })
            : (0, l.jsx)(N, {
                attachment: t,
                fileContents: f,
                bytesLeft: h,
                expanded: o,
                setExpanded: u,
                language: d,
                setLanguage: m,
                className: i(E.newMosaicStyle, n),
              });
        },
        (e, t) =>
          e.attachment.id === t.attachment.id && e.className === t.className
      );
    },
    392284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("62843"),
        u = n("132755"),
        d = n("782340"),
        c = n("760687");
      function m(e) {
        let { onPlay: t, className: n, inactive: s } = e,
          m = a.useRef(null),
          f = (0, l.jsx)("div", {
            className: c.iconWrapper,
            ref: m,
            children: (0, l.jsx)(u.default, { className: i(c.icon) }),
          });
        return (0, l.jsx)(o.MessagesInteractionContext.Consumer, {
          children: e =>
            s || null == t
              ? (0, l.jsx)("div", { className: c.cover, children: f })
              : (0, l.jsx)(r.Clickable, {
                  className: i(n, c.cover, {
                    [c.active]: !e.disableInteractions,
                  }),
                  onClick: t,
                  tabIndex: 0,
                  "aria-label": d.default.Messages.PLAY,
                  focusProps: { ringTarget: m },
                  children: f,
                }),
        });
      }
    },
    468482: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("62843"),
        o = n("648739"),
        u = n("132755"),
        d = n("782340"),
        c = n("335171"),
        m = e => {
          let {
            onPlay: t,
            externalURL: n,
            className: a,
            renderLinkComponent: m,
            inactive: f,
            messageId: h,
            channelId: p,
          } = e;
          return (0, l.jsx)(r.MessagesInteractionContext.Consumer, {
            children: e =>
              (0, l.jsxs)("div", {
                className: s(a, c.wrapper, {
                  [c.disableInteractions]: e.disableInteractions,
                }),
                children: [
                  f && null == t
                    ? (0, l.jsx)("div", {
                        className: c.iconWrapper,
                        children: (0, l.jsx)(u.default, {
                          className: c.iconPlay,
                        }),
                      })
                    : null,
                  null != t
                    ? (0, l.jsx)(i.Clickable, {
                        onClick: t,
                        className: s(c.iconWrapperActive),
                        tabIndex: f ? -1 : 0,
                        "aria-label": d.default.Messages.PLAY,
                        children: (0, l.jsx)(u.default, {
                          className: c.iconPlay,
                        }),
                      })
                    : null,
                  null != n
                    ? m({
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: c.iconWrapperActive,
                        children: (0, l.jsx)(o.default, {
                          "aria-label": d.default.Messages.OPEN_LINK,
                          className:
                            null != t ? c.iconExternalMargins : c.iconExternal,
                        }),
                        messageId: h,
                        channelId: p,
                      })
                    : null,
                ],
              }),
          });
        };
    },
    316680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        o = n("672724"),
        u = n("368121"),
        d = n("570511"),
        c = n("974261"),
        m = n("782340"),
        f = n("906419");
      class h extends a.PureComponent {
        componentDidMount() {
          this.updateMediaBar();
        }
        componentDidUpdate(e) {
          (this.props.value !== e.value || this.props.muted !== e.muted) &&
            this.updateMediaBar();
        }
        updateMediaBar() {
          let { muted: e, value: t, maxValue: n } = this.props,
            l = this._mediaBar.current;
          null != l && (e ? l.setGrabber(0) : l.setGrabber(t / n));
        }
        render() {
          let {
              iconClassName: e,
              className: t,
              sliderWrapperClassName: n,
              sliderClassName: a,
              currentWindow: s,
              muted: h,
              minValue: p,
              maxValue: g,
              value: E,
              onVolumeShow: C,
              onVolumeHide: v,
            } = this.props,
            { hovered: I, focused: S, dragging: _ } = this.state,
            x = u.default;
          return (
            h || E === p ? (x = d.default) : E < g / 2 && (x = c.default),
            (0, l.jsxs)("div", {
              className: i(t, f.container),
              onMouseEnter: () => {
                clearTimeout(this._hoverTimeout),
                  this.setState({ hovered: !0 }),
                  null == C || C();
              },
              onMouseLeave: () => {
                clearTimeout(this._hoverTimeout),
                  (this._hoverTimeout = setTimeout(() => {
                    this.setState({ hovered: !1 }), null == v || v();
                  }, 150));
              },
              onFocus: () => this.setState({ focused: !0 }),
              onBlur: () => this.setState({ focused: !1 }),
              onKeyDown: this.handleKeyDown,
              children: [
                (0, l.jsx)("div", {
                  className: i(f.volumeButtonSlider, n, {
                    [f.sliderVisible]: I || S || _,
                  }),
                  onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout),
                      this.setState({ hovered: !0 });
                  },
                  onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                      (this._hoverTimeout = setTimeout(
                        () => this.setState({ hovered: !1 }),
                        150
                      ));
                  },
                  children: (0, l.jsx)(o.default, {
                    sliderClassName: a,
                    type: o.default.Types.VOLUME,
                    value: E / g,
                    onDrag: this.handleValueChange,
                    onDragStart: this.handleDragStart,
                    onDragEnd: this.handleDragEnd,
                    currentWindow: s,
                    ref: this._mediaBar,
                  }),
                }),
                (0, l.jsx)(r.Button, {
                  className: f.volumeButton,
                  "aria-label": m.default.Messages.CONTROL_VOLUME,
                  size: r.Button.Sizes.NONE,
                  look: r.Button.Looks.BLANK,
                  onClick: this.handleToggleMute,
                  children: (0, l.jsx)(x, { className: e }),
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this._mediaBar = a.createRef()),
            (this.state = { hovered: !1, focused: !1, dragging: !1 }),
            (this.handleValueChange = e => {
              let { maxValue: t, onValueChange: n } = this.props;
              null == n || n(e * t);
            }),
            (this.handleToggleMute = () => {
              let { onToggleMute: e } = this.props;
              null == e || e();
            }),
            (this.handleKeyDown = e => {
              let {
                  minValue: t,
                  value: n,
                  maxValue: l,
                  onValueChange: a,
                } = this.props,
                s = 0.05 * (l - t);
              switch (e.key) {
                case "ArrowUp":
                  e.stopPropagation(),
                    e.preventDefault(),
                    null == a || a(Math.min(l, n + s));
                  break;
                case "ArrowDown":
                  e.stopPropagation(),
                    e.preventDefault(),
                    null == a || a(Math.max(t, n - s));
              }
            }),
            (this.handleDragStart = () => {
              this.setState({ dragging: !0 });
            }),
            (this.handleDragEnd = () => {
              this.setState({ dragging: !1 });
            }),
            (this.blur = () => {
              this.setState({ focused: !1 });
            });
        }
      }
      h.defaultProps = { minValue: 0, maxValue: 100, handleSize: 16 };
      var p = h;
    },
    413709: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("821455"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsxs)("g", {
                className: s,
                fill: a,
                children: [
                  (0, l.jsx)("path", {
                    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z",
                  }),
                  (0, l.jsx)("path", {
                    d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z",
                  }),
                ],
              }),
            });
          },
          s.CopyIcon,
          void 0,
          { size: 16 }
        );
    },
    195812: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("691096"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z",
              }),
            });
          },
          s.DownloadIcon,
          void 0,
          { size: 24 }
        );
    },
    256170: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("469563"),
        r = n("384737"),
        o = n("996674"),
        u = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              className: i,
              foreground: r,
              open: u = !1,
            } = e;
            return (0, l.jsx)("svg", {
              className: s(o.arrow, i, { [o.open]: u }),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: r,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z",
              }),
            });
          },
          r.ChevronSmallDownIcon,
          void 0,
          { size: 24 }
        );
    },
    967685: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("159190"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z",
                }),
              ],
            });
          },
          s.MaximizeIcon,
          void 0,
          { size: 16 }
        );
    },
    462579: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("736616"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z",
                }),
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
                }),
              ],
            });
          },
          s.EyeIcon,
          void 0,
          { size: 16 }
        );
    },
    2770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("332127"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z",
                }),
              ],
            });
          },
          s.FullscreenEnterIcon,
          void 0,
          { size: 24 }
        );
    },
    204591: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("943325"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 20,
              height: n = 20,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              viewBox: "0 0 20 20",
              ...(0, i.default)(r),
              width: t,
              height: n,
              children: [
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z",
                }),
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z",
                }),
              ],
            });
          },
          s.AngleBracketsIcon,
          void 0,
          { size: 20 }
        );
    },
    45622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("485358"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M16,8V3H14V8a2,2,0,0,0,2,2h5V8Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M14,16v5h2V16h5V14H16A2,2,0,0,0,14,16Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M8,8H3v2H8a2,2,0,0,0,2-2V3H8Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M8,14H3v2H8v5h2V16A2,2,0,0,0,8,14Z",
                }),
              ],
            });
          },
          s.FullscreenExitIcon,
          void 0,
          { size: 24 }
        );
    },
    648739: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            className: i,
            fill: s,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
          }),
        });
      }
    },
    830837: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("828516"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              fill: "none",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.25 2.25226H7.5C7.9125 2.25226 8.25 2.58976 8.25 3.00226V15.0023C8.25 15.4148 7.9125 15.7523 7.5 15.7523H5.25C4.8375 15.7523 4.5 15.4148 4.5 15.0023V3.00226C4.5 2.58976 4.8375 2.25226 5.25 2.25226ZM11.25 2.25226H13.5C13.9125 2.25226 14.25 2.58976 14.25 3.00226V15.0023C14.25 15.4148 13.9125 15.7523 13.5 15.7523H11.25C10.8375 15.7523 10.5 15.4148 10.5 15.0023V3.00226C10.5 2.58976 10.8375 2.25226 11.25 2.25226Z",
                fill: a,
                className: s,
              }),
            });
          },
          s.PauseIcon,
          void 0,
          { size: 16 }
        );
    },
    948613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("4997"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, l.jsx)("path", { d: "M0 0H18V18H0z" }),
                  (0, l.jsx)("path", {
                    fill: a,
                    className: s,
                    fillRule: "nonzero",
                    d: "M7,13 L7,5 L12,9 L7,13 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,11.1217319 1.84285472,13.1565632 3.34314575,14.6568542 C4.84343678,16.1571453 6.87826808,17 9,17 C11.1217319,17 13.1565632,16.1571453 14.6568542,14.6568542 C16.1571453,13.1565632 17,11.1217319 17,9 C17,6.87826808 16.1571453,4.84343678 14.6568542,3.34314575 C13.1565632,1.84285472 11.1217319,1 9,1 Z",
                  }),
                ],
              }),
            });
          },
          s.CirclePlayIcon,
          void 0,
          { size: 24 }
        );
    },
    73034: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            className: i,
            fill: s,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
          }),
        });
      }
    },
    600785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("434657"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                id: "a",
                d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
              }),
            });
          },
          s.LockIcon,
          void 0,
          { size: 24 }
        );
    },
    570511: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("352265"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M19.73 9L21 10.27l-2.23 2.23L21 14.73 19.73 16l-2.23-2.23L15.27 16 14 14.73l2.23-2.23L14 10.27 15.27 9l2.23 2.23z",
                  fillRule: "evenodd",
                }),
                (0, l.jsx)("path", {
                  fill: a,
                  className: s,
                  d: "M11.38 3.08a1 1 0 0 0-1.09.22L6 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l4.29 4.71A1 1 0 0 0 12 20V4a1 1 0 0 0-.62-.92z",
                }),
              ],
            });
          },
          s.VoiceXIcon,
          void 0,
          { size: 24 }
        );
    },
    974261: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("992305"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
              }),
            });
          },
          s.VoiceLowIcon,
          void 0,
          { size: 24 }
        );
    },
    909004: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("504626"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                d: "M12.6667 1.33331H7.33333C6.6 1.33331 6 1.93331 6 2.66665V5.99998C6 6.73331 5.4 7.33331 4.66667 7.33331C3.19333 7.33331 2 8.52665 2 9.99998V13.3333C2 14.0666 2.6 14.6666 3.33333 14.6666H8.66667C9.4 14.6666 10 14.0666 10 13.3333V9.99998C10 9.26665 10.6 8.66665 11.3333 8.66665C12.8067 8.66665 14 7.47331 14 5.99998V2.66665C14 1.93331 13.4 1.33331 12.6667 1.33331ZM8 13.3333H4C3.63333 13.3333 3.33333 13.0333 3.33333 12.6666C3.33333 12.3 3.63333 12 4 12H8C8.36667 12 8.66667 12.3 8.66667 12.6666C8.66667 13.0333 8.36667 13.3333 8 13.3333ZM8 10.6666H4C3.63333 10.6666 3.33333 10.3666 3.33333 9.99998C3.33333 9.63331 3.63333 9.33331 4 9.33331H8C8.36667 9.33331 8.66667 9.63331 8.66667 9.99998C8.66667 10.3666 8.36667 10.6666 8 10.6666ZM12 6.66665H8C7.63333 6.66665 7.33333 6.36665 7.33333 5.99998C7.33333 5.63331 7.63333 5.33331 8 5.33331H12C12.3667 5.33331 12.6667 5.63331 12.6667 5.99998C12.6667 6.36665 12.3667 6.66665 12 6.66665ZM12 3.99998H8C7.63333 3.99998 7.33333 3.69998 7.33333 3.33331C7.33333 2.96665 7.63333 2.66665 8 2.66665H12C12.3667 2.66665 12.6667 2.96665 12.6667 3.33331C12.6667 3.69998 12.3667 3.99998 12 3.99998Z",
              }),
            });
          },
          s.TopicsIcon,
          void 0,
          { size: 16 }
        );
    },
    959097: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("782926"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z",
                }),
              ],
            });
          },
          s.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    251144: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 12,
          height: n = 12,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            className: i,
            d: "M14.0652 10.5L16.6739 10.5C16.7604 10.5 16.8433 10.4641 16.9045 10.4002C16.9656 10.3362 17 10.2495 17 10.1591L17 4.0227C17 3.9323 16.9656 3.8456 16.9045 3.7817C16.8433 3.7177 16.7604 3.6818 16.6739 3.6818L14.0652 3.6818C13.9787 3.6818 13.8958 3.7177 13.8346 3.7817C13.7735 3.8456 13.7391 3.9323 13.7391 4.0227L13.7391 10.1591C13.7391 10.2495 13.7735 10.3362 13.8346 10.4002C13.8958 10.4641 13.9787 10.5 14.0652 10.5ZM2 10.8409C2 11.7804 2.7317 12.5454 3.6304 12.5454L7.7359 12.5454C7.537 13.1789 7.2174 14.34 7.2174 15.2727C7.2174 16.7516 8.4193 18 9.1739 18C9.8515 18 10.3354 17.6018 10.3563 17.5848C10.3943 17.5526 10.425 17.512 10.4461 17.4659C10.4672 17.4198 10.4782 17.3693 10.4783 17.3182L10.4783 16.6939C10.4783 15.5814 10.7103 14.4811 11.1595 13.4634L12.3565 10.7516L12.9063 10.4645C12.9605 10.4361 13.006 10.3924 13.0379 10.3385C13.0698 10.2846 13.0868 10.2225 13.087 10.1591L13.087 4.0227C13.087 3.932 13.0524 3.8455 12.9917 3.7814C12.5033 3.2714 11.4076 3 10.8044 3L4.7717 3C4.5222 3.0004 4.2768 3.0674 4.0588 3.1944C3.8409 3.3215 3.6575 3.5046 3.526 3.7264C3.3944 3.9481 3.3192 4.2013 3.3072 4.4619C3.2952 4.7225 3.347 4.982 3.4576 5.2159C3.1122 5.3973 2.8496 5.7144 2.7273 6.0978C2.6051 6.4812 2.6332 6.8996 2.8054 7.2614C2.5635 7.3883 2.3601 7.5831 2.2179 7.8239C2.0757 8.0646 2.0002 8.342 2 8.625C2 9.0341 2.1559 9.4166 2.4239 9.6989C2.1533 10.007 2 10.4107 2 10.8409Z",
            fill: s,
          }),
        });
      }
    },
    20662: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 12,
          height: n = 12,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            className: i,
            d: "M5.93478 9.5H3.32609C3.2396 9.5 3.15666 9.53592 3.09551 9.59985C3.03436 9.66378 3 9.75049 3 9.84091V15.9773C3 16.0677 3.03436 16.1544 3.09551 16.2183C3.15666 16.2823 3.2396 16.3182 3.32609 16.3182H5.93478C6.02127 16.3182 6.10421 16.2823 6.16536 16.2183C6.22651 16.1544 6.26087 16.0677 6.26087 15.9773V9.84091C6.26087 9.75049 6.22651 9.66378 6.16536 9.59985C6.10421 9.53592 6.02127 9.5 5.93478 9.5ZM18 9.15909C18 8.21955 17.2683 7.45455 16.3696 7.45455H12.2641C12.463 6.82114 12.7826 5.66 12.7826 4.72727C12.7826 3.24841 11.5807 2 10.8261 2C10.1485 2 9.66457 2.39818 9.6437 2.41523C9.60568 2.44738 9.57501 2.488 9.55391 2.53412C9.53281 2.58024 9.52182 2.6307 9.52174 2.68182V3.3061C9.52174 4.41859 9.28971 5.51885 8.84048 6.5366L7.64348 9.24841L7.0937 9.53545C7.03952 9.56394 6.99396 9.60756 6.96207 9.66149C6.93018 9.71541 6.91321 9.77751 6.91304 9.84091V15.9773C6.91304 16.068 6.94761 16.1545 7.00826 16.2186C7.49674 16.7286 8.59239 17 9.19565 17H15.2283C15.4778 16.9996 15.7232 16.9326 15.9412 16.8056C16.1591 16.6785 16.3425 16.4954 16.474 16.2736C16.6056 16.0519 16.6808 15.7987 16.6928 15.5381C16.7048 15.2775 16.653 15.018 16.5424 14.7841C16.8878 14.6027 17.1504 14.2856 17.2727 13.9022C17.3949 13.5188 17.3668 13.1004 17.1946 12.7386C17.4365 12.6117 17.6399 12.4169 17.7821 12.1761C17.9243 11.9354 17.9998 11.658 18 11.375C18 10.9659 17.8441 10.5834 17.5761 10.3011C17.8467 9.99296 18 9.58932 18 9.15909Z",
            fill: s,
          }),
        });
      }
    },
    873218: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("446685"),
        r = n("593195"),
        o = n("109264"),
        u = n("991497"),
        d = n("660074"),
        c = n("45029"),
        m = n("990745"),
        f = n("620193"),
        h = n("368121"),
        p = n("228427"),
        g = n("959097"),
        E = n("328413"),
        C = n("782340"),
        v = n("671934"),
        I = function (e) {
          let { iconType: t, children: n } = e,
            a = null;
          switch (t) {
            case "voice":
              a = (0, l.jsx)(h.default, {
                className: v.icon,
                "aria-label": C.default.Messages.VOICE_CHANNEL,
              });
              break;
            case "voice-locked":
              a = (0, l.jsx)(c.default, {
                className: v.icon,
                "aria-label": C.default.Messages.VOICE_CHANNEL_LOCKED,
              });
              break;
            case "stage":
              a = (0, l.jsx)(p.default, {
                className: v.icon,
                "aria-label": C.default.Messages.STAGE_CHANNEL,
              });
              break;
            case "stage-locked":
              a = (0, l.jsx)(c.default, {
                className: v.icon,
                "aria-label": C.default.Messages.STAGE_CHANNEL_LOCKED,
              });
              break;
            case "thread":
              a = (0, l.jsx)(g.default, {
                className: v.icon,
                "aria-label": C.default.Messages.THREAD,
              });
              break;
            case "text":
              a = (0, l.jsx)(r.default, {
                className: v.icon,
                "aria-label": C.default.Messages.CHANNEL,
              });
              break;
            case "forum":
              a = (0, l.jsx)(u.default, {
                className: v.icon,
                "aria-label": C.default.Messages.FORUM_CHANNEL,
              });
              break;
            case "post":
              a = (0, l.jsx)(d.default, {
                className: v.icon,
                "aria-label": C.default.Messages.FORUM_POST,
              });
              break;
            case "home":
            case "guide":
              a = (0, l.jsx)(f.default, {
                className: v.icon,
                "aria-label": C.default.Messages.SERVER_GUIDE,
              });
              break;
            case "browse":
            case "customize":
              a = (0, l.jsx)(i.default, {
                className: v.icon,
                "aria-label": C.default.Messages.CHANNEL_BROWSER_TITLE,
              });
              break;
            case "message":
              a = (0, l.jsx)(o.default, {
                className: v.icon,
                "aria-label": C.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
              });
              break;
            case "locked":
              a = (0, l.jsx)(c.default, {
                className: v.icon,
                "aria-label": C.default.Messages.NO_ACCESS,
              });
              break;
            case "media":
              a = (0, l.jsx)(m.default, {
                className: v.icon,
                "aria-label": C.default.Messages.MEDIA_CHANNEL,
              });
          }
          return (0, l.jsxs)("span", {
            className: s("channelWithIcon", {
              [v.iconMentionText]: "text" === t,
            }),
            children: [
              (0, l.jsx)(E.default, { children: a }),
              null != n && "" !== n
                ? (0, l.jsx)("span", { className: v.name, children: n })
                : null,
            ],
          });
        };
    },
    250832: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("476263"),
        s = n("328413"),
        i = n("550473"),
        r = function (e) {
          let { guild: t, children: n } = e,
            r =
              null != t
                ? (0, l.jsx)(a.default, {
                    guild: t,
                    size: a.default.Sizes.MEDIUM,
                    className: i.icon,
                    active: !0,
                  })
                : null;
          return (0, l.jsxs)("span", {
            children: [
              (0, l.jsx)(s.default, { children: r }),
              (0, l.jsx)("span", { className: i.name, children: n }),
            ],
          });
        };
    },
    848825: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("772280"),
        s = n("961291"),
        i = function () {
          return (0, l.jsx)(a.default, { className: s.icon });
        };
    },
    22248: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("109264"),
        s = n("782340"),
        i = n("708124"),
        r = function () {
          return (0, l.jsx)(a.default, {
            className: i.icon,
            "aria-label": s.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          });
        };
    },
    328413: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("219629");
      function s(e) {
        let { children: t } = e;
        return (0, l.jsxs)("span", { className: a.nowrap, children: [t, "⁠"] });
      }
    },
    28236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("65597"),
        o = n("77078"),
        u = n("430568"),
        d = n("277855"),
        c = n("305122"),
        m = n("462550"),
        f = n("235004"),
        h = n("520497"),
        p = n("812809"),
        g = n("948613"),
        E = n("368121"),
        C = n("653110"),
        v = function (e) {
          let { soundId: t, jumbo: n = !1 } = e,
            { currentPreviewRef: s } = a.useContext(m.default),
            v = (0, r.default)([f.default], () => f.default.getSoundById(t)),
            I =
              (null == v ? void 0 : v.emojiId) != null ||
              (null == v ? void 0 : v.emojiName) != null,
            [S, _] = a.useState(!1),
            x = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"),
            N = a.useCallback(() => {
              var e;
              null == v && (0, c.maybeFetchSoundboardSounds)();
              let n = new Audio((0, h.default)(t));
              null != s.current && s.current.pause(),
                (s.current = n),
                (n.currentTime = 0),
                (n.volume = (0, p.default)(
                  null !== (e = null == v ? void 0 : v.volume) && void 0 !== e
                    ? e
                    : 0.5
                )),
                _(!0),
                n.play(),
                n.addEventListener(
                  "ended",
                  () => {
                    _(!1);
                  },
                  { once: !0 }
                );
            }, [t, v, s, _]);
          return x
            ? null == v
              ? (0, l.jsxs)(o.Clickable, {
                  title: "Risky Click",
                  tag: "span",
                  onClick: N,
                  className: C.container,
                  children: [
                    (0, l.jsx)(E.default, { className: C.unknownSound }),
                    (0, l.jsx)(o.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "none",
                      className: C.text,
                      children: "Unknown",
                    }),
                  ],
                })
              : n
                ? (0, l.jsxs)(o.Clickable, {
                    onClick: N,
                    className: C.jumboContainer,
                    children: [
                      (0, l.jsx)("div", {
                        className: i(C.jumboOverlay, { [C.playing]: S }),
                        children: (0, l.jsx)(g.default, {
                          className: C.jumboPlayIcon,
                        }),
                      }),
                      I &&
                        (0, l.jsx)(u.default, {
                          emojiId: null == v ? void 0 : v.emojiId,
                          emojiName: null == v ? void 0 : v.emojiName,
                          className: C.jumboEmoji,
                        }),
                      (0, l.jsx)(o.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "none",
                        className: C.text,
                        children: v.name,
                      }),
                    ],
                  })
                : (0, l.jsxs)(o.Clickable, {
                    tag: "span",
                    onClick: N,
                    className: C.container,
                    children: [
                      I &&
                        (0, l.jsx)(u.default, {
                          emojiId: null == v ? void 0 : v.emojiId,
                          emojiName: null == v ? void 0 : v.emojiName,
                          className: C.emoji,
                        }),
                      (0, l.jsx)(o.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "none",
                        className: C.text,
                        children: v.name,
                      }),
                    ],
                  })
            : null;
        };
    },
    719347: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return s;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return i;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return r;
          },
          MediaLayoutType: function () {
            return l;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return o;
          },
        });
      let s = 550,
        i = 350,
        r = 40;
      ((a = l || (l = {})).STATIC = "STATIC"),
        (a.RESPONSIVE = "RESPONSIVE"),
        (a.MOSAIC = "MOSAIC");
      let o = 20;
    },
    15738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("907002"),
        r = n("336637");
      let o = Object.freeze({ tension: 400, friction: 30 }),
        u = Object.freeze({ opacity: 0, height: 8, x: -4 });
      function d(e) {
        let {
          selected: t = !1,
          hovered: n = !1,
          unread: a = !1,
          disabled: d = !1,
          className: c,
        } = e;
        (t = !d && t), (n = !d && n), (a = !d && a);
        let m = { opacity: 1, height: t ? 40 : n ? 20 : 8, x: 0 },
          f = (0, i.useTransition)(t || n || a, {
            config: o,
            keys: e => (e ? "pill" : "empty"),
            immediate: !n && !document.hasFocus(),
            initial: t || n || a ? m : null,
            from: u,
            leave: u,
            enter: m,
            update: m,
          });
        return (0, l.jsx)("div", {
          className: s(c, r.wrapper),
          "aria-hidden": !0,
          children: f(
            (e, t) =>
              t && (0, l.jsx)(i.animated.span, { className: r.item, style: e })
          ),
        });
      }
    },
    58608: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("118810"),
        i = n("446674"),
        r = n("206230"),
        o = n("719347");
      let u = e => {
        let {
            externalRef: t,
            autoPlay: n,
            playOnHover: u,
            responsive: d,
            mediaLayoutType: c,
            ...m
          } = e,
          f = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          h = a.useRef(null);
        function p() {
          var e;
          u &&
            (null == h || null === (e = h.current) || void 0 === e || e.play());
        }
        function g() {
          var e;
          u &&
            (null == h ||
              null === (e = h.current) ||
              void 0 === e ||
              e.pause());
        }
        return (
          a.useLayoutEffect(
            () => () => {
              let { current: e } = h;
              null != e &&
                (function (e) {
                  e.removeAttribute("src"),
                    Array.from(e.children).forEach(e => {
                      (0, s.isElement)(e, HTMLSourceElement) &&
                        (e.removeAttribute("src"), e.removeAttribute("type")),
                        (0, s.isElement)(e, HTMLImageElement) &&
                          e.removeAttribute("src");
                    });
                  try {
                    e.load();
                  } catch (e) {}
                })(e);
            },
            []
          ),
          a.useLayoutEffect(
            () => (
              "function" == typeof t
                ? (t(null), t(h.current))
                : null != t && (t.current = h.current),
              () => {
                "function" == typeof t
                  ? t(null)
                  : null != t && (t.current = null);
              }
            ),
            [t, h]
          ),
          (0, l.jsx)("video", {
            ref: h,
            autoPlay: !f && !u && n,
            onMouseEnter: p,
            onMouseLeave: g,
            onFocus: p,
            onBlur: g,
            style:
              c === o.MediaLayoutType.MOSAIC
                ? {
                    width: "100%",
                    height: "100%",
                    maxHeight: "inherit",
                    objectFit: "cover",
                  }
                : d
                  ? (function () {
                      return {
                        maxWidth: m.width,
                        maxHeight: m.height,
                        width: "100%",
                        height: "100%",
                      };
                    })()
                  : {},
            ...m,
          })
        );
      };
      var d = a.forwardRef((e, t) => (0, l.jsx)(u, { ...e, externalRef: t }));
    },
    794818: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AnalyticsContexts: function () {
            return l;
          },
          MINIMUM_MEMBER_COUNT: function () {
            return p;
          },
          startLurking: function () {
            return g;
          },
          viewGuild: function () {
            return E;
          },
          makeDiscoverableGuild: function () {
            return C;
          },
          trackDiscoveryViewed: function () {
            return v;
          },
          trackDiscoveryExited: function () {
            return I;
          },
          trackSearchClosed: function () {
            return S;
          },
          trackSearchStarted: function () {
            return _;
          },
          trackTagSearchStarted: function () {
            return x;
          },
          trackSearchResultsViewed: function () {
            return N;
          },
          trackGuildJoinClicked: function () {
            return T;
          },
          getDiscoverableGuild: function () {
            return M;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("522632"),
        i = n("872717"),
        r = n("851387"),
        o = n("267567"),
        u = n("393414"),
        d = n("239380"),
        c = n("525065"),
        m = n("305961"),
        f = n("599110"),
        h = n("49111");
      ((a = l || (l = {})).SEARCH = "Search"),
        (a.RECOMMENDED = "Recommended"),
        (a.POPULAR = "Popular"),
        (a.RECOMMENDED_E3 = "Recommended - E3"),
        (a.HEADER = "Header");
      let p = ">200";
      async function g(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            channelId: l,
            onSuccess: a,
            joinSource: s,
            loadId: i,
            setsHistorySnapshot: c = !0,
          } = n,
          f = (0, u.getHistory)();
        c && o.default.setHistorySnapshot({ ...f });
        let h = m.default.getGuild(e),
          p = { state: { analyticsSource: t } };
        null != h && null != h.joinedAt
          ? (0, d.transitionToGuild)(e, p)
          : (await r.default.joinGuild(e, {
              lurker: !0,
              source: s,
              loadId: i,
              lurkLocation: null == t ? void 0 : t.page,
            }),
            await r.default.transitionToGuildSync(
              e,
              { ...p, welcomeModalChannelId: l, search: f.location.search },
              l
            )),
          null == a || a();
      }
      async function E(e) {
        let t,
          {
            loadId: n,
            guildId: a,
            index: s,
            analyticsContext: i,
            categoryId: r,
          } = e;
        "string" == typeof i && i in l && (t = i);
        let o = {
          page: h.AnalyticsPages.GUILD_DISCOVERY,
          object: h.AnalyticsObjects.CARD,
          section: t,
        };
        await g(a, o, { loadId: n }),
          (function (e) {
            let {
                loadId: t,
                guildId: n,
                index: l,
                analyticsContext: a,
                categoryId: s,
              } = e,
              i = { page: h.AnalyticsPages.GUILD_DISCOVERY, section: a };
            "string" != typeof a && null != a.location && (i = a.location),
              f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                location: i,
                guild_id: n,
                load_id: t,
                card_index: l,
                location_object: h.AnalyticsObjects.CARD,
                category_id: s,
              });
          })({
            loadId: n,
            guildId: a,
            index: s,
            analyticsContext: i,
            categoryId: r,
          });
      }
      function C(e) {
        return {
          id: e.id,
          name: e.name,
          description: e.description,
          splash: e.splash,
          banner: e.banner,
          icon: e.icon,
          features: new Set(e.features),
          presenceCount: e.approximate_presence_count,
          memberCount: e.approximate_member_count,
          premiumSubscriptionCount: e.premium_subscription_count,
          preferredLocale: e.preferred_locale,
          discoverySplash: e.discovery_splash,
          emojis: e.emojis,
          emojiCount: e.emoji_count,
          stickers: e.stickers,
          stickerCount: e.sticker_count,
          keywords: e.keywords,
        };
      }
      function v(e) {
        let {
            loadId: t,
            gamesYouPlayGuilds: n,
            allGuilds: l,
            categoryId: a,
            recommendationsSource: s = null,
          } = e,
          i = n.length,
          r = l.length;
        f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
          load_id: t,
          num_guilds: i + r,
          num_guilds_recommended: i,
          num_guilds_popular: r,
          recommended_guild_ids: n.map(e => e.id),
          category_id: a,
          recommendations_source: s,
        });
      }
      function I(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
          load_id: e,
          guild_ids_viewed: t,
          recommendations_source: n,
        });
      }
      function S(e) {
        f.default.track(h.AnalyticEvents.SEARCH_CLOSED, { load_id: e });
      }
      function _(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        f.default.track(h.AnalyticEvents.SEARCH_STARTED, {
          search_type: h.SearchTypes.GUILD_DISCOVERY,
          load_id: e,
          location: n.location,
          category_id: t,
        });
      }
      function x(e, t, n, l) {
        f.default.track(h.AnalyticEvents.SEARCH_STARTED, {
          search_type: h.SearchTypes.GUILD_DISCOVERY_TAG,
          load_id: e,
          location: { page: h.AnalyticsPages.GUILD_DISCOVERY, section: n },
          category_id: t,
          guild_id: l,
        });
      }
      function N(e) {
        let {
          loadId: t,
          searchId: n,
          query: l,
          guildResults: a,
          analyticsContext: s,
          categoryId: i,
          isTagSearch: r,
        } = e;
        f.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
          search_type: r
            ? h.SearchTypes.GUILD_DISCOVERY_TAG
            : h.SearchTypes.GUILD_DISCOVERY,
          load_id: t,
          search_id: n,
          total_results: void 0 !== a ? a.length : null,
          guild_ids: void 0 !== a ? a.map(e => e.id) : null,
          query: l,
          location: s.location,
          category_id: i,
        });
      }
      function T(e) {
        let t = o.default.getLoadId(e);
        f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
          guild_id: e,
          load_id: t,
          guild_size: c.default.getMemberCount(e),
        });
      }
      async function M(e) {
        try {
          var t, n;
          let l = await i.default.get({
              url: h.Endpoints.GUILD_DISCOVERY,
              query: s.stringify({ guild_ids: e }),
              oldFormErrors: !0,
            }),
            a =
              null === (n = l.body) || void 0 === n
                ? void 0
                : null === (t = n.guilds) || void 0 === t
                  ? void 0
                  : t[0];
          if (null == a) return a;
          return C(a);
        } catch (e) {
          return null;
        }
      }
    },
    874276: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getVolume: function () {
            return s;
          },
          setVolume: function () {
            return i;
          },
          getMuted: function () {
            return r;
          },
          setMuted: function () {
            return o;
          },
        });
      var l = n("95410");
      let a = "MediaPlayerVolume";
      function s() {
        var e;
        let { volume: t } =
          null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
        return (
          "number" != typeof t && (t = 1), (t = Math.min(1, Math.max(0, t)))
        );
      }
      function i(e) {
        l.default.set(a, { volume: e, muted: r() });
      }
      function r() {
        var e;
        let { muted: t } =
          null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
        return "boolean" != typeof t && (t = !1), t;
      }
      function o(e) {
        l.default.set(a, { volume: s(), muted: e });
      }
    },
    532340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AngleBracketsIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M9.6 7.8 4 12l5.6 4.2a1 1 0 0 1 .4.8v1.98c0 .21-.24.33-.4.2l-8.1-6.4a1 1 0 0 1 0-1.56l8.1-6.4c.16-.13.4-.01.4.2V7a1 1 0 0 1-.4.8ZM14.4 7.8 20 12l-5.6 4.2a1 1 0 0 0-.4.8v1.98c0 .21.24.33.4.2l8.1-6.4a1 1 0 0 0 0-1.56l-8.1-6.4a.25.25 0 0 0-.4.2V7a1 1 0 0 0 .4.8Z",
            className: r,
          }),
        });
      };
    },
    250573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M10.57 4.01a6.97 6.97 0 0 1 9.86 0l.54.55a6.99 6.99 0 0 1 0 9.88l-7.26 7.27a1 1 0 0 1-1.42-1.42l7.27-7.26a4.99 4.99 0 0 0 0-7.06L19 5.43a4.97 4.97 0 0 0-7.02 0l-8.02 8.02a3.24 3.24 0 1 0 4.58 4.58l6.24-6.24a1.12 1.12 0 0 0-1.58-1.58l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a3.12 3.12 0 1 1 4.42 4.42l-6.24 6.24a5.24 5.24 0 0 1-7.42-7.42l8.02-8.02Z",
            className: r,
          }),
        });
      };
    },
    282371: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CirclePlayIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: i = "transparent",
          secondaryColorClass: r = "",
          color: o = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...d
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    532054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CopyIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z",
              className: r,
            }),
          ],
        });
      };
    },
    46575: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DownloadIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: r,
          }),
        });
      };
    },
    19493: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M22.89 11.7c.07.2.07.4 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7Zm-4.5-3.62A15.11 15.11 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19c-2.8 0-4.87-1.38-6.39-3.08A15.11 15.11 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5c2.8 0 4.87 1.38 6.39 3.08Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    455578: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FullscreenEnterIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z",
            className: r,
          }),
        });
      };
    },
    248307: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FullscreenExitIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M8 6a2 2 0 0 1-2 2H3a1 1 0 0 0 0 2h3a4 4 0 0 0 4-4V3a1 1 0 0 0-2 0v3ZM8 18a2 2 0 0 0-2-2H3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0v-3ZM18 8a2 2 0 0 1-2-2V3a1 1 0 1 0-2 0v3a4 4 0 0 0 4 4h3a1 1 0 1 0 0-2h-3ZM16 18c0-1.1.9-2 2-2h3a1 1 0 1 0 0-2h-3a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0v-3Z",
            className: r,
          }),
        });
      };
    },
    383362: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MaximizeIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L18.58 4H15a1 1 0 0 1-1-1ZM5.41 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l5.3-5.3a1 1 0 0 1 1.4 1.42L5.42 20Z",
            className: r,
          }),
        });
      };
    },
    299476: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PauseIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z",
            className: r,
          }),
        });
      };
    },
    733214: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThreadIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z",
            fill: "string" == typeof i ? i : i.css,
            className: r,
          }),
        });
      };
    },
    208425: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TopicsIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    466497: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceLowIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
            className: r,
          }),
        });
      };
    },
    10397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceXIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=69875.539f89966b68395c1baa.js.map
