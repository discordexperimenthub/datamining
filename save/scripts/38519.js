(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38519"],
  {
    445356: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c8718df1382ba878f1fc.svg";
    },
    460287: function (e, t, n) {
      "use strict";
      e.exports = n.p + "08e581a604e6635d1424.svg";
    },
    361345: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7a280f89e607805835b8.png";
    },
    627771: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1998dcf226b71188b1bb.png";
    },
    202023: function (e, t, n) {
      "use strict";
      e.exports = n.p + "41fc6b68fd6791249f24.png";
    },
    626964: function (e, t, n) {
      "use strict";
      e.exports = n.p + "967ea9a6f0917ccea479.png";
    },
    937549: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5cf339c022ee100316f1.png";
    },
    674303: function (e, t, n) {
      "use strict";
      e.exports = n.p + "969507450abcd9cdd0f8.png";
    },
    475577: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c19dbbb190412b96403e.png";
    },
    365127: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6ca564c0842e4bf922a9.png";
    },
    711737: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d886ddab54ac6aa53568.png";
    },
    361784: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6ecfa3eb0eb955e3006a.png";
    },
    134647: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9d40ac01a4c79449fa1c.png";
    },
    856931: function (e, t, n) {
      "use strict";
      e.exports = n.p + "48956fccb1adf21b366d.png";
    },
    160864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        r = n("77078"),
        o = n("716849"),
        u = n("552917"),
        c = n("109036"),
        d = n("336522"),
        h = n("782340"),
        f = n("1065"),
        p = n("403693");
      function g() {
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)("div", { className: i(p.sparkleWhite, f.sparkleOne) }),
            (0, l.jsx)("div", { className: i(p.sparkleWhite, f.sparkleTwo) }),
            (0, l.jsx)("div", { className: i(p.lightWhite, f.lightOne) }),
            (0, l.jsx)("div", { className: i(p.lightWhite, f.lightTwo) }),
            (0, l.jsx)("div", { className: i(p.crossWhite, f.crossOne) }),
            (0, l.jsx)("div", { className: i(p.crossWhite, f.crossTwo) }),
            (0, l.jsx)("div", { className: i(p.popWhite, f.popOne) }),
          ],
        });
      }
      class v extends s.Component {
        componentDidMount() {
          let e = this.elementDOMRef.current;
          null != e &&
            (e.ownerDocument.body.addEventListener(
              "dragover",
              this.handleDragOver,
              !1
            ),
            e.ownerDocument.body.addEventListener(
              "drop",
              this.handleDragLeave,
              !1
            ),
            e.addEventListener("dragover", this.handleDragOverZone, !1),
            e.addEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.addEventListener("drop", this.handleDrop, !1));
        }
        componentWillUnmount() {
          let e = this.elementDOMRef.current;
          null != e &&
            (e.ownerDocument.body.removeEventListener(
              "dragover",
              this.handleDragOver,
              !1
            ),
            e.ownerDocument.body.removeEventListener(
              "drop",
              this.handleDragLeave,
              !1
            ),
            e.removeEventListener("dragover", this.handleDragOverZone, !1),
            e.removeEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.removeEventListener("drop", this.handleDrop, !1)),
            clearTimeout(this.dragOverTimeout);
        }
        render() {
          let {
            title: e,
            description: t,
            icons: n,
            style: s,
            className: a,
          } = this.props;
          return (0, l.jsx)("div", {
            ref: this.elementDOMRef,
            className: i(a, f.uploadArea, {
              [f.droppable]: this.state.isDragging,
              [f.uploadModalIn]: this.state.isOverZone,
            }),
            style: s,
            children: (0, l.jsxs)("div", {
              className: f.uploadDropModal,
              children: [
                this.state.isDragging && (0, l.jsx)(g, {}),
                (0, l.jsx)("div", { className: f.bgScale }),
                (0, l.jsxs)("div", {
                  className: f.inner,
                  children: [
                    (0, l.jsx)(c.default, { icons: n }),
                    (0, l.jsx)("div", { className: f.title, children: e }),
                    (0, l.jsx)("div", {
                      className: f.instructions,
                      children: (0, l.jsx)("pre", { children: t }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.state = { isDragging: !1, isOverZone: !1 }),
            (this.dragOverTimeout = null),
            (this.elementDOMRef = s.createRef()),
            (this.isAllDropFiles = e => {
              for (let n = 0; n < e.length; n++)
                try {
                  var t;
                  let l =
                    null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t
                      ? t
                      : e[n].getAsEntry();
                  if (l && !l.isFile) return !1;
                } catch (e) {
                  continue;
                }
              return !0;
            }),
            (this.preventUnwantedDrop = function (e) {
              let n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                l = e.dataTransfer;
              if (null == l) return !0;
              let s =
                  Array.isArray(l.types) &&
                  -1 !== l.types.indexOf("text/uri-list") &&
                  -1 === l.types.indexOf("application/json"),
                a = null != l.items && !t.isAllDropFiles(l.items);
              return (
                (!s && !a) ||
                (e.stopPropagation(),
                e.preventDefault(),
                (l.effectAllowed = "none"),
                (l.dropEffect = "none"),
                n &&
                  (t.setState({ isDragging: !1 }),
                  (0, d.openUploadError)({
                    title:
                      h.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                    help: h.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                    icons: t.props.icons,
                  })),
                !1)
              );
            }),
            (this.handleDragOver = e => {
              var t, n, l;
              if (!this.preventUnwantedDrop(e)) return !1;
              let s = e.dataTransfer;
              if (null == s) return;
              s.dropEffect = "copy";
              let a = (0, r.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
              if (
                (a && (0, r.closeModal)(d.UPLOAD_ERROR_MODAL_KEY),
                e.stopPropagation(),
                e.preventDefault(),
                null === (t = (n = this.props).onDragOver) ||
                  void 0 === t ||
                  t.call(n, e),
                !this.state.isDragging)
              ) {
                (0, o.maybeFetchPremiumLikelihood)(u.default);
                let e =
                    null === (l = this.elementDOMRef.current) || void 0 === l
                      ? void 0
                      : l.ownerDocument.defaultView,
                  t =
                    null != e &&
                    s.types instanceof e.DOMStringList &&
                    s.types.contains("application/x-moz-file");
                (t || -1 !== s.types.indexOf("Files")) &&
                  this.setState(e => (e.isDragging ? {} : { isDragging: !0 }));
              }
              clearTimeout(this.dragOverTimeout),
                (this.dragOverTimeout = setTimeout(() => {
                  var e, t;
                  this.setState({ isDragging: !1 }),
                    null === (e = (t = this.props).onDragClear) ||
                      void 0 === e ||
                      e.call(t);
                }, 1e3));
            }),
            (this.handleDragOverZone = () => {
              this.setState({ isOverZone: !0 });
            }),
            (this.handleDragLeaveZone = () => {
              this.setState({ isOverZone: !1 });
            }),
            (this.handleDragLeave = e => {
              this.state.isDragging &&
                (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            (this.clearDragging = () => {
              var e, t;
              this.setState({ isDragging: !1, isOverZone: !1 }),
                null === (e = (t = this.props).onDragClear) ||
                  void 0 === e ||
                  e.call(t);
            }),
            (this.handleDrop = e => {
              if (!this.preventUnwantedDrop(e, !0)) return !1;
              let t = e.dataTransfer;
              if (null == t) return !0;
              this.state.isDragging &&
                (e.preventDefault(),
                e.stopPropagation(),
                this.props.onDrop(t.files),
                this.clearDragging());
            });
        }
      }
      var m = v;
    },
    85941: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("711538");
      n.es(l, t);
    },
    569912: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("65597"),
        s = n("385976"),
        a = n("867805");
      function i(e, t) {
        let n = (0, l.default)(
            [s.default],
            () => (null != e ? s.default.getCustomEmojiById(e) : null),
            [e]
          ),
          i =
            null != t
              ? a.default.getByName(a.default.convertSurrogateToName(t, !1))
              : null;
        return { customEmoji: n, unicodeEmoji: i };
      }
    },
    205454: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CTAEmojiSize: function () {
            return r;
          },
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("430568"),
        a = n("569912"),
        i = n("845272");
      let r = { SMALL: i.small, MEDIUM: i.medium, LARGE: i.large };
      function o(e) {
        let {
            emojiId: t,
            emojiName: n,
            defaultComponent: i,
            size: o = r.MEDIUM,
          } = e,
          { customEmoji: u, unicodeEmoji: c } = (0, a.default)(t, n);
        return null == u && null == c
          ? (0, l.jsx)(l.Fragment, { children: i })
          : (0, l.jsx)(s.default, {
              emojiName: null != u ? (null == u ? void 0 : u.name) : n,
              animated: null != u && u.animated,
              emojiId: null == u ? void 0 : u.id,
              autoplay: !0,
              className: o,
            });
      }
    },
    507453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("414456"),
        a = n.n(s),
        i = n("41543");
      function r(e) {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: a(i.image, t) });
      }
    },
    41594: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChannelItemIcon: function () {
            return U;
          },
          default: function () {
            return y;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        r = n("974667"),
        o = n("617258"),
        u = n("446674"),
        c = n("77078"),
        d = n("843962"),
        h = n("679653"),
        f = n("419830"),
        p = n("565298"),
        g = n("305961"),
        v = n("824563"),
        m = n("191542"),
        C = n("697218"),
        D = n("37785"),
        E = n("98292"),
        N = n("587974"),
        T = n("50885"),
        _ = n("49111"),
        I = n("133335"),
        L = n("39776");
      let O = {
        SELECTED: L.modeSelected,
        CONNECTED: L.modeConnected,
        UNREAD_IMPORTANT: L.modeUnreadImportant,
        UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
        MUTED: L.modeMuted,
        LOCKED: L.modeLocked,
      };
      function x(e) {
        e.preventDefault(), e.stopPropagation();
      }
      let S = T.default.getEnableHardwareAcceleration()
        ? c.AnimatedAvatar
        : c.Avatar;
      function M(e) {
        let { channel: t } = e;
        return (0, l.jsx)(S, {
          src: (0, d.getChannelIconURL)(t),
          "aria-hidden": !0,
          size: c.AvatarSizes.SIZE_20,
        });
      }
      function R(e) {
        let { channel: t } = e,
          n = (0, u.useStateFromStores)([C.default], () =>
            C.default.getUser(null == t ? void 0 : t.recipients[0])
          ),
          s = (0, u.useStateFromStores)(
            [m.default],
            () =>
              !(null == n || null == t || t.isMultiUserDM()) &&
              null !=
                m.default.getTypingUsers(null == t ? void 0 : t.id)[
                  null == n ? void 0 : n.id
                ]
          ),
          { status: a, isMobile: i } = (0, u.useStateFromStoresObject)(
            [v.default],
            () =>
              null == n || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1 }
                : {
                    status: v.default.getStatus(n.id),
                    isMobile: v.default.isMobileOnline(n.id),
                  }
          );
        return (0, l.jsx)(S, {
          size: c.AvatarSizes.SIZE_20,
          src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
          status: a,
          isMobile: i,
          isTyping: s,
          "aria-label": null == n ? void 0 : n.username,
          statusTooltip: !0,
        });
      }
      let A = [13, 11, 10, 10, 10, 10, 10],
        U = e => {
          var t;
          let {
              className: n,
              channel: s,
              locked: a,
              hasActiveThreads: r,
              withGuildIcon: d,
            } = e,
            h = (0, u.useStateFromStores)(
              [g.default],
              () => g.default.getGuild(s.guild_id),
              [s.guild_id]
            ),
            p = d ? (null == h ? void 0 : h.getIconURL(48)) : null,
            v = null != p,
            m = (function (e, t, n) {
              switch (e.type) {
                case _.ChannelTypes.DM:
                  return function () {
                    return (0, l.jsx)(R, { channel: e });
                  };
                case _.ChannelTypes.GROUP_DM:
                  return function () {
                    return (0, l.jsx)(M, { channel: e });
                  };
                default:
                  return (0, f.getChannelIconComponent)(e, t, n);
              }
            })(s, h, { locked: a, hasActiveThreads: r });
          if (null == m) return null;
          let C = v
              ? null == h
                ? void 0
                : h.name
              : (0, f.getChannelIconTooltipText)(s, h, a, r),
            D =
              v && null != h
                ? "".concat(h.name, " - ").concat(C, " icon")
                : "".concat(C, " icon"),
            E = (0, o.getAcronym)(
              null !== (t = null == h ? void 0 : h.toString()) && void 0 !== t
                ? t
                : null
            ),
            T =
              s.type === _.ChannelTypes.DM ||
              s.type === _.ChannelTypes.GROUP_DM;
          return (0, l.jsx)(c.Tooltip, {
            text: C,
            delay: 500,
            children: e => {
              var t;
              return (0, l.jsxs)("div", {
                ...e,
                role: "img",
                "aria-label": D,
                className: i(L.iconContainer, {
                  [L.iconContainerWithGuildIcon]: v,
                }),
                children: [
                  v &&
                    (0, l.jsx)(N.default, {
                      mask: N.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                      children: (0, l.jsx)("img", {
                        alt: "",
                        src: p,
                        className: L.channelGuildIcon,
                      }),
                    }),
                  !v &&
                    d &&
                    !T &&
                    (0, l.jsx)(N.default, {
                      mask: N.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                      children: (0, l.jsx)("div", {
                        className: i(L.channelGuildIcon, L.acronym),
                        style: {
                          fontSize:
                            (t = E).length - 1 > A.length
                              ? A[A.length - 1]
                              : A[t.length - 1],
                        },
                        children: E,
                      }),
                    }),
                  (0, l.jsx)(m, {
                    className: i(L.icon, { [L.iconWithGuildIcon]: d }, n),
                  }),
                ],
              });
            },
          });
        };
      function y(e) {
        var t;
        let {
            channel: n,
            name: a,
            muted: o,
            selected: u,
            connected: d,
            unread: f,
            locked: g,
            hasActiveThreads: v,
            onClick: m,
            onMouseDown: C,
            onMouseUp: N,
            onContextMenu: T,
            connectDragPreview: S,
            className: M,
            iconClassName: R,
            subtitle: A,
            subtitleColor: y,
            channel: { type: b },
            onMouseEnter: j,
            onMouseLeave: w,
            "aria-label": H,
            children: G,
            guild: P,
            channelTypeOverride: k,
            forceInteractable: Z,
            mentionCount: F,
            resolvedUnreadSetting: V,
            isFavoriteSuggestion: W,
            withGuildIcon: B,
          } = e,
          K = V === I.UnreadSetting.ALL_MESSAGES || (null != F && F > 0),
          { role: Y, ...z } = (0, r.useListItem)(n.id),
          X = s.useRef(null),
          Q = s.useRef(null),
          q = (0, p.default)(n),
          J = _.Routes.CHANNEL(q, n.id),
          $ = (0, h.default)(n),
          ee = n.isGuildVocal(),
          et = (0, l.jsx)("div", {
            className: i({ [L.favoritesSuggestion]: W }),
            children: (0, l.jsxs)(D.default, {
              role: ee && !d ? "button" : "link",
              href: ee ? void 0 : J,
              target: "_blank",
              ref: X,
              className: L.link,
              onClick: () => (null == m ? void 0 : m(n)),
              ...z,
              "aria-label": H,
              focusProps: { enabled: !1 },
              children: [
                (0, l.jsxs)("div", {
                  className: L.linkTop,
                  children: [
                    (0, l.jsx)(U, {
                      className: R,
                      channel: n,
                      guild: P,
                      hasActiveThreads: v,
                      locked: g,
                      withGuildIcon: B,
                    }),
                    (0, l.jsx)(E.default, {
                      className: i(L.name),
                      "aria-hidden": !0,
                      children: null == a ? $ : a,
                    }),
                    s.Children.count(G) > 0
                      ? (0, l.jsx)("div", {
                          onClick: x,
                          className: L.children,
                          children: G,
                        })
                      : null,
                  ],
                }),
                null != A
                  ? (0, l.jsx)("div", {
                      className: i(L.linkBottom, { [L.withGuildIcon]: B }),
                      children: (0, l.jsx)(c.Text, {
                        color: null != y ? y : "text-muted",
                        variant: "text-xs/medium",
                        className: L.subtitle,
                        children: A,
                      }),
                    })
                  : null,
              ],
            }),
          });
        return (0, l.jsx)(c.FocusRing, {
          focusTarget: X,
          ringTarget: Q,
          offset: { top: 2, bottom: 2, right: 4 },
          children: (0, l.jsxs)("div", {
            className: i(
              M,
              null != m || null != N || null != C || Z
                ? L.wrapper
                : L.notInteractive,
              (() => {
                if (u) return O.SELECTED;
                if (d) return O.CONNECTED;
                if (g) return O.LOCKED;
                if (o) return O.MUTED;
                if (f) return K ? O.UNREAD_IMPORTANT : O.UNREAD_LESS_IMPORTANT;
                return null;
              })(),
              (function (e) {
                switch (e) {
                  case _.ChannelTypes.GUILD_STAGE_VOICE:
                  case _.ChannelTypes.GUILD_VOICE:
                    return L.typeVoice;
                  case _.ChannelTypes.ANNOUNCEMENT_THREAD:
                  case _.ChannelTypes.PUBLIC_THREAD:
                  case _.ChannelTypes.PRIVATE_THREAD:
                    return L.typeThread;
                  case _.ChannelTypes.GUILD_ANNOUNCEMENT:
                  case _.ChannelTypes.GUILD_TEXT:
                  case _.ChannelTypes.GUILD_STORE:
                  case _.ChannelTypes.GUILD_FORUM:
                  case _.ChannelTypes.GUILD_MEDIA:
                  default:
                    return L.typeDefault;
                }
              })(null != k ? k : b)
            ),
            onMouseUp: e => (null == N ? void 0 : N(e, n)),
            onMouseDown: e => (null == C ? void 0 : C(e, n)),
            onContextMenu: e => (null == T ? void 0 : T(e, n)),
            onMouseEnter: j,
            onMouseLeave: w,
            children: [
              o || !f || (u && !ee)
                ? null
                : (0, l.jsx)("div", {
                    className: i(L.unread, K ? L.unreadImportant : void 0),
                  }),
              null !== (t = null == S ? void 0 : S(et)) && void 0 !== t
                ? t
                : et,
            ],
          }),
        });
      }
    },
    676143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFilterCategoriesByQuery: function () {
            return x;
          },
          getFirstRouteFor: function () {
            return S;
          },
          clearRecentChannels: function () {
            return M;
          },
          useChannelBrowserSections: function () {
            return R;
          },
          useChannelBrowserChannelCount: function () {
            return A;
          },
          getActiveAgoTimestamp: function () {
            return U;
          },
        }),
        n("843762");
      var l = n("884691"),
        s = n("448105"),
        a = n.n(s),
        i = n("866227"),
        r = n.n(i),
        o = n("446674"),
        u = n("151426"),
        c = n("267363"),
        d = n("320954"),
        h = n("10641"),
        f = n("290886"),
        p = n("319839"),
        g = n("194704"),
        v = n("393414"),
        m = n("42203"),
        C = n("245997"),
        D = n("660478"),
        E = n("299039"),
        N = n("49111"),
        T = n("724210"),
        _ = n("796618"),
        I = n("133335"),
        L = n("782340");
      function O(e, t) {
        e.index = t;
      }
      function x(e, t, n, s) {
        s = s.toLowerCase();
        let i = (0, f.useCanSeeOnboardingHome)(e),
          r = l.useCallback(
            (e, t) =>
              !(
                i && e.channel.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)
              ) &&
              e.channel.type !== N.ChannelTypes.GUILD_DIRECTORY &&
              (0 === t.length ||
                a(t, e.channel.name.toLowerCase()) ||
                e.channel.topic.toLowerCase().includes(t)),
            [i]
          );
        return l.useMemo(() => {
          let e = { null: [], _categories: [] };
          return (
            n[N.ChannelTypes.GUILD_CATEGORY].forEach(n => {
              let { channel: l } = n;
              "null" === l.id && (e.null = t.null.filter(e => r(e, s))),
                (e[l.id] = t[l.id].filter(e => r(e, s)));
            }),
            (e._categories = t._categories.filter(
              t =>
                "null" === t.channel.id ||
                0 === s.length ||
                e[t.channel.id].length > 0
            )),
            (0, d.default)(e._categories, e).forEach(O),
            e
          );
        }, [t, n, r, s]);
      }
      function S(e) {
        let t = e.getSections();
        if (t[p.SECTION_INDEX_COMMUNITY] > 0) {
          let t = e.getCommunitySection().getRow(0);
          switch (t) {
            case _.ChannelListCommunityRow.GUILD_HOME:
              return T.StaticChannelRoute.GUILD_HOME;
            case _.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
              return T.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
            case _.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
              return T.StaticChannelRoute.MEMBER_APPLICATIONS;
          }
        }
        for (
          let l = p.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
          l < e.voiceChannelsSectionNumber;
          l++
        )
          if (t[l] > 0) {
            var n;
            let t =
              null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n
                ? void 0
                : n.channel;
            if (null != t) return t.id;
          }
        return null;
      }
      function M(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        (0, g.bulkClearRecents)(e, t),
          (0, c.bulkAck)(
            t.map(e => ({
              channelId: e,
              readStateType: I.ReadStateTypes.CHANNEL,
              messageId: D.default.lastMessageId(e),
            }))
          ),
          null != n && (0, v.transitionTo)(N.Routes.CHANNEL(e, n));
      }
      function R(e, t, n, l) {
        let s = (0, h.useIsDismissibleContentDismissed)(
            u.DismissibleContent.CHANNEL_BROWSER_NUX
          ),
          a = (0, o.useStateFromStoresObject)(
            [m.default],
            () => {
              let t = {},
                n = m.default.getMutableGuildChannelsForGuild(e);
              for (let e in n) {
                let { parent_id: s } = n[e];
                if (null != s) {
                  var l;
                  t[s] = (null !== (l = t[s]) && void 0 !== l ? l : 0) + 1;
                }
              }
              return t;
            },
            [e]
          ),
          i = t._categories.map(e => {
            let l = t[e.channel.id];
            return {
              rowCount:
                "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
              rowHeight: 0 === l.length ? 0 : n,
            };
          });
        return !s && null != l && i.unshift({ rowCount: 1, rowHeight: l }), i;
      }
      function A(e) {
        var t, n;
        let l = (0, o.useStateFromStores)([C.default], () =>
            C.default.getCategories(e)
          ),
          s = l._categories.length,
          a = l._categories[l._categories.length - 1];
        if (null == a) return 0;
        let i =
            null !==
              (n = null === (t = a.channel) || void 0 === t ? void 0 : t.id) &&
            void 0 !== n
              ? n
              : "null",
          r = l[i];
        return null == r
          ? 0
          : 0 === r.length
            ? a.index + 2 - s
            : r[r.length - 1].index + 2 - s;
      }
      function U(e) {
        var t;
        return L.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
          timeAgo: r(
            E.default.extractTimestamp(
              null !== (t = D.default.lastMessageId(e)) && void 0 !== t ? t : e
            )
          ).fromNow(),
        });
      }
    },
    194704: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          bulkClearRecents: function () {
            return o;
          },
        });
      var l = n("801340"),
        s = n("913144"),
        a = n("872173"),
        i = n("599110"),
        r = n("49111");
      async function o(e, t) {
        await (0, a.updateUserGuildSettings)(
          e,
          e => (
            (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date())), !0
          ),
          a.UserSettingsDelay.INFREQUENT_USER_ACTION
        ),
          s.default.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: e,
            channelIds: t,
          }),
          i.default.track(r.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            action_type: "recents_dismissed",
          });
      }
    },
    91551: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("917351"),
        i = n.n(a),
        r = n("888400"),
        o = n("782340");
      let u = () => [
        o.default.Messages.COUNTDOWN_UNITS_SECONDS,
        o.default.Messages.COUNTDOWN_UNITS_MINUTES,
        o.default.Messages.COUNTDOWN_UNITS_HOURS,
        o.default.Messages.COUNTDOWN_UNITS_DAYS,
      ];
      class c extends s.PureComponent {
        componentDidMount() {
          let { intervalDuration: e, onInterval: t } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
          }, e);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(e) {
          let { showDays: t, showUnits: n, className: s } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            r = u();
          if (0 === e.days) a.shift();
          else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
          }
          let o = i(a)
            .map(e => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
              t > 0 && !n ? ":" : " ",
              (0, l.jsxs)(
                "span",
                { children: [e, n ? r[a.length - t - 1] : null] },
                t
              ),
            ])
            .flatten()
            .value();
          return (0, l.jsx)("span", { className: s, children: o });
        }
        render() {
          let {
            deadline: e,
            children: t,
            className: n,
            stopAtOneSec: s,
          } = this.props;
          if (e === 1 / 0)
            return (0, l.jsx)("span", {
              className: n,
              "aria-label": o.default.Messages.MAX_AGE_NEVER,
              children: "∞",
            });
          let a = (0, r.diffAsUnits)(Date.now(), e, s);
          return null != t
            ? t(a, this.defaultRender.bind(this, a))
            : this.defaultRender(a);
        }
      }
      c.defaultProps = {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      };
      var d = c;
    },
    37785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("77078"),
        i = n("393414"),
        r = n("49111"),
        o = s.forwardRef(function (e, t) {
          let {
              href: n,
              children: o,
              onClick: u,
              onKeyPress: c,
              focusProps: d,
              ...h
            } = e,
            f = s.useCallback(
              e => {
                !e.repeat &&
                  ((e.charCode === r.KeyboardKeys.SPACE ||
                    e.charCode === r.KeyboardKeys.ENTER) &&
                    (e.preventDefault(),
                    null != n && (0, i.transitionTo)(n),
                    null == u || u()),
                  null == c || c(e));
              },
              [n, c, u]
            ),
            p = s.useCallback(
              e => {
                !e.metaKey &&
                  !e.shiftKey &&
                  0 === e.button &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, i.transitionTo)(n),
                  null == u || u());
              },
              [n, u]
            ),
            g = (0, l.jsx)("a", {
              ref: t,
              href: n,
              onClick: p,
              onKeyPress: f,
              ...h,
              children: o,
            });
          return (0, l.jsx)(a.FocusRing, { ...d, children: g });
        });
    },
    100300: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("85941"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: s = "currentColor",
              ...a
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                fill: s,
              }),
            });
          },
          a.ListBulletsIcon,
          void 0,
          { size: 16 }
        );
    },
    711538: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ListBulletsIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=eb6d743808dd0cd2dc1a.js.map
