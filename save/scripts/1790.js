(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1790"],
  {
    766665: function (e, t, a) {
      var l = a("424498");
      e.exports = function (e, t, a) {
        "__proto__" == t && l
          ? l(e, t, {
              configurable: !0,
              enumerable: !0,
              value: a,
              writable: !0,
            })
          : (e[t] = a);
      };
    },
    53708: function (e, t, a) {
      "use strict";
      e.exports = a.p + "f6c7b8245d3a54cf98b2.png";
    },
    145079: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        r = a.n(n),
        s = a("446674"),
        i = a("77078"),
        u = a("102985"),
        o = a("79798"),
        d = a("754474"),
        c = a("158998"),
        f = a("782340"),
        C = a("168540");
      function h(e) {
        if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return d.BotTypes.AI;
        if (e.bot) return d.BotTypes.BOT;
        return null;
      }
      let m = e => {
        let {
          primary: t,
          secondary: a,
          botType: n,
          botVerified: s,
          discriminatorClass: u,
          className: d,
          usernameClass: c,
          color: h,
          botClass: m,
          showStreamerModeTooltip: v,
        } = e;
        return (0, l.jsxs)("div", {
          className: r(C.info, d),
          children: [
            (0, l.jsx)(i.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: v,
              "aria-label": !!v && void 0,
              children: e =>
                (0, l.jsx)("span", {
                  ...e,
                  className: r(C.username, c),
                  style: null != h ? { color: h } : void 0,
                  children: t,
                }),
            }),
            null != a
              ? (0, l.jsx)("span", {
                  className: r(C.infoSpacing, u),
                  children: a,
                })
              : void 0,
            null != n &&
              (0, l.jsx)(o.default, {
                type: n,
                className: r(C.infoSpacing, m),
                verified: s,
              }),
          ],
        });
      };
      var v = e => {
        let {
            hideDiscriminator: t = !1,
            user: a,
            nick: n,
            forceUsername: r,
            showAccountIdentifier: i,
            overrideDiscriminator: o,
            forcePomelo: f,
            ...C
          } = e,
          v = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          g = v || t || a.isNonUserBot(),
          p = a.toString(),
          x = c.default.getName(a),
          N = r ? p : null != n ? n : x,
          T = a.isPomelo() || f;
        if (T || N !== p) {
          let e =
              N === p && T && r
                ? c.default.getUserTag(a, { forcePomelo: f })
                : N,
            t = i && e !== "@".concat(p) ? c.default.getUserTag(a) : void 0;
          return (0, l.jsx)(m, {
            primary: e,
            secondary: t,
            botVerified: a.isVerifiedBot(),
            botType: h(a),
            showStreamerModeTooltip: v && e !== x,
            ...C,
          });
        }
        return (0, l.jsx)(d.default, {
          name: N,
          botType: h(a),
          botVerified: a.isVerifiedBot(),
          discriminator: g || N !== p ? null : null != o ? o : a.discriminator,
          ...C,
        });
      };
    },
    163725: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("962821");
      a.es(l, t);
    },
    811513: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("430143");
      a.es(l, t);
    },
    587864: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("53531");
      a.es(l, t);
    },
    769174: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("28289");
      a.es(l, t);
    },
    619335: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var l = a("274870"),
        n = a("116320"),
        r = a("617559"),
        s = a("213523"),
        i = a("593195"),
        u = a("361777"),
        o = a("497757"),
        d = a("774223"),
        c = a("991497"),
        f = a("393621"),
        C = a("905999"),
        h = a("660074"),
        m = a("990745"),
        v = a("190986"),
        g = a("721618"),
        p = a("733160"),
        x = a("990864"),
        N = a("274652"),
        T = a("922744"),
        S = a("155207"),
        M = a("745183"),
        E = a("368121"),
        L = a("944633"),
        I = a("228427"),
        j = a("959097"),
        _ = a("656038"),
        R = a("49111");
      function A(e, t) {
        switch (e.type) {
          case R.ChannelTypes.DM:
            return n.default;
          case R.ChannelTypes.GROUP_DM:
            let a = (0, l.getIsBroadcastingGDM)(e.id);
            return a ? d.default : S.default;
          case R.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return N.default;
            if ((0, _.default)(e)) return x.default;
            else return p.default;
          case R.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return s.default;
            if (e.isNSFW()) return o.default;
            else if ((0, _.default)(e)) return u.default;
            else return i.default;
          case R.ChannelTypes.GUILD_FORUM:
            let A = e.isMediaChannel();
            if (e.isNSFW()) return A ? g.default : C.default;
            if ((0, _.default)(e)) return A ? v.default : f.default;
            else return A ? m.default : c.default;
          case R.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return g.default;
            if ((0, _.default)(e)) return v.default;
            else return m.default;
          case R.ChannelTypes.GUILD_STAGE_VOICE:
            return I.default;
          case R.ChannelTypes.GUILD_VOICE:
            if ((0, _.default)(e)) return L.default;
            return E.default;
          case R.ChannelTypes.ANNOUNCEMENT_THREAD:
          case R.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return T.default;
            if (e.isForumPost()) return h.default;
            else return j.default;
          case R.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return T.default;
            return M.default;
          case R.ChannelTypes.GUILD_DIRECTORY:
            return r.default;
          default:
            return null;
        }
      }
    },
    390236: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("884691");
      let n = l.createContext(void 0);
      var r = n;
    },
    689226: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getRoleIconData: function () {
            return c;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return h;
          },
          canGuildUseRoleIcons: function () {
            return m;
          },
        }),
        a("781738");
      var l = a("867805"),
        n = a("407063"),
        r = a("315102"),
        s = a("773336"),
        i = a("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        d = (0, s.isAndroid)(),
        c = (e, t) => {
          if (null == e) return null;
          let a =
            null != e.unicodeEmoji
              ? l.default.getByName(
                  l.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: C(e, t),
            unicodeEmoji: null != a ? a : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, n.getBestMediaProxySize)(t * (0, n.getDevicePixelRatio)())
            )
          ),
        C = (e, t) => {
          let { id: a, icon: l } = e;
          if (null == l) return;
          if (l.startsWith("data:")) return l;
          let s = r.SUPPORTS_WEBP ? "webp" : "png",
            c = "",
            f = "quality=lossless";
          return (null != t &&
            ((c =
              "size=" +
              (0, n.getBestMediaProxySize)(t * (0, n.getDevicePixelRatio)())),
            (f = d ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(a, "/")
                .concat(l, ".")
                .concat(s, "?")
                .concat(c)
                .concat(f)
            : "".concat(o).concat(i.Endpoints.ROLE_ICON(a, l), "?").concat(c);
        },
        h = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(o, "/roles")) && e.includes("/icons/")),
        m = (e, t) => {
          var a;
          let l =
            (null == t
              ? void 0
              : null === (a = t.tags) || void 0 === a
                ? void 0
                : a.subscription_listing_id) != null;
          return l || e.features.has(i.GuildFeatures.ROLE_ICONS);
        };
    },
    134947: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useTrackThreadBrowserTab: function () {
            return x;
          },
          useActiveThreads: function () {
            return N;
          },
          useActiveGuildThreads: function () {
            return T;
          },
          useArchivedThreads: function () {
            return S;
          },
        }),
        a("222007");
      var l = a("884691"),
        n = a("917351"),
        r = a.n(n),
        s = a("446674"),
        i = a("404607"),
        u = a("42203"),
        o = a("957255"),
        d = a("660478"),
        c = a("449008"),
        f = a("299039"),
        C = a("689275"),
        h = a("821343"),
        m = a("755624"),
        v = a("263024"),
        g = a("487269"),
        p = a("843455");
      function x() {
        l.useEffect(() => {
          (0, g.trackThreadBrowserTab)();
        }, []);
      }
      function N(e) {
        let t = (function (e) {
            let t = (0, s.useStateFromStoresArray)(
              [o.default, C.default, u.default],
              () =>
                r(C.default.getThreadsForParent(e.guild_id, e.id))
                  .values()
                  .map(e => {
                    let { id: t } = e;
                    return u.default.getChannel(t);
                  })
                  .filter(c.isNotNullish)
                  .filter(e => o.default.can(p.Permissions.VIEW_CHANNEL, e))
                  .map(e => e.id)
                  .value(),
              [e.guild_id, e.id]
            );
            return l.useMemo(
              () =>
                r(t)
                  .sort((e, t) =>
                    f.default.compare(
                      d.default.lastMessageId(e),
                      d.default.lastMessageId(t)
                    )
                  )
                  .reverse()
                  .value(),
              [t]
            );
          })(e),
          [a, n] = (0, s.useStateFromStores)(
            [m.default],
            () => r.partition(t, e => m.default.hasJoined(e)),
            [t],
            s.statesWillNeverBeEqual
          );
        return { joinedThreadIds: a, unjoinedThreadIds: n };
      }
      function T(e) {
        let t = (0, s.useStateFromStoresArray)(
          [o.default, C.default, u.default],
          () =>
            r(C.default.getThreadsForGuild(e))
              .values()
              .map(e => r.values(e))
              .flatten()
              .map(e => {
                let { id: t } = e;
                return u.default.getChannel(t);
              })
              .filter(c.isNotNullish)
              .filter(e => o.default.can(p.Permissions.VIEW_CHANNEL, e))
              .map(e => e.id)
              .value(),
          [e]
        );
        return l.useMemo(
          () =>
            r(t)
              .sort((e, t) =>
                f.default.compare(
                  d.default.lastMessageId(e),
                  d.default.lastMessageId(t)
                )
              )
              .reverse()
              .value(),
          [t]
        );
      }
      function S(e, t, a) {
        let {
            canLoadMore: n,
            loading: d,
            nextOffset: c,
            isInitialLoad: f,
          } = (0, s.useStateFromStoresObject)([h.default], () => ({
            loading: h.default.isLoading(e.id, t, a),
            isInitialLoad: h.default.isInitialLoad,
            canLoadMore: h.default.canLoadMore,
            nextOffset: h.default.nextOffset,
          })),
          C = l.useCallback(() => {
            o.default.can(p.Permissions.READ_MESSAGE_HISTORY, e) &&
              v.default.loadArchivedThreads(e.guild_id, e.id, t, a, c);
          }, [e, t, a, c]);
        l.useEffect(() => {
          f && C();
        }, [e.id, t, a, f]),
          l.useEffect(() => {
            i.default.resort(e.id);
          }, [e.id]);
        let m = (0, s.useStateFromStoresArray)(
          [h.default, u.default, o.default],
          () =>
            r(h.default.getThreads(e.id, t, a))
              .filter(e => {
                let t = u.default.getChannel(e);
                return (
                  null != t && o.default.can(p.Permissions.VIEW_CHANNEL, t)
                );
              })
              .value()
        );
        return { threadIds: m, canLoadMore: n, loading: d || f, loadMore: C };
      }
    },
    557872: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("414456"),
        s = a.n(r),
        i = a("77078"),
        u = a("134947"),
        o = a("913979"),
        d = a("529353");
      function c(e) {
        let { guildId: t, goToThread: a } = e,
          r = (0, u.useActiveGuildThreads)(t),
          c = n.useCallback(
            e => {
              let t = r[e.row];
              return (0, l.jsx)(
                o.default,
                { threadId: t, goToThread: a, showChannelName: !0 },
                "".concat(e.section, "-").concat(e.row)
              );
            },
            [r, a]
          );
        return (0, l.jsx)(i.List, {
          className: s(d.list, d.activeThreadsList),
          fade: !0,
          sections: [r.length],
          renderSection: () => null,
          sectionHeight: 0,
          rowHeight: 80,
          renderRow: c,
          chunkSize: 20,
        });
      }
    },
    469755: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("77078"),
        r = a("945330"),
        s = a("959097"),
        i = a("557872"),
        u = a("967241"),
        o = a("648564"),
        d = a("782340"),
        c = a("464771");
      function f(e) {
        let { guildId: t, onClose: a, transitionState: f } = e;
        return (0, l.jsx)(n.ModalRoot, {
          className: c.modal,
          transitionState: f,
          "aria-label": d.default.Messages.THREADS,
          size: n.ModalSize.DYNAMIC,
          children: (0, l.jsxs)("div", {
            className: c.container,
            children: [
              (0, l.jsxs)("div", {
                className: c.header,
                children: [
                  (0, l.jsx)(s.default, { className: c.threadIcon }),
                  (0, l.jsx)(n.Heading, {
                    variant: "heading-md/semibold",
                    className: c.title,
                    children: d.default.Messages.ALL_ACTIVE_THREADS,
                  }),
                  (0, l.jsx)("div", { className: c.spacer }),
                  (0, l.jsx)(n.Clickable, {
                    className: c.closeIcon,
                    onClick: a,
                    "aria-label": d.default.Messages.CLOSE,
                    children: (0, l.jsx)(r.default, {}),
                  }),
                ],
              }),
              (0, l.jsx)(i.default, {
                guildId: t,
                goToThread: (e, t) => {
                  a(),
                    (0, u.openThreadSidebarForViewing)(
                      e,
                      !t,
                      o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL
                    );
                },
              }),
            ],
          }),
        });
      }
    },
    913979: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("446674"),
        s = a("77078"),
        i = a("272030"),
        u = a("42203"),
        o = a("124948"),
        d = a("697218"),
        c = a("811305"),
        f = a("800843"),
        C = a("442184"),
        h = a("648564"),
        m = a("963906"),
        v = n.memo(function (e) {
          let { threadId: t, goToThread: n, showChannelName: o } = e,
            d = (0, r.useStateFromStores)([u.default], () =>
              u.default.getChannel(t)
            ),
            c = (0, r.useStateFromStores)([u.default], () =>
              u.default.getChannel(d.parent_id)
            );
          return (0, l.jsxs)(s.Clickable, {
            className: m.container,
            onClick: e => n(d, e.shiftKey),
            onContextMenu: e =>
              (0, i.openContextMenuLazy)(e, async () => {
                let { default: e } = await a
                  .el("994827")
                  .then(a.bind(a, "994827"));
                return t => (0, l.jsx)(e, { ...t, channel: d });
              }),
            children: [
              (0, l.jsxs)("div", {
                className: m.left,
                children: [
                  (0, l.jsxs)(s.Heading, {
                    className: m.threadNameLine,
                    variant: "heading-md/semibold",
                    children: [
                      (0, l.jsx)("span", {
                        className: m.threadName,
                        children: d.name,
                      }),
                      o && null != c
                        ? (0, l.jsx)("span", {
                            className: m.parentName,
                            children: "#".concat(c.name),
                          })
                        : null,
                    ],
                  }),
                  (0, C.default)(d),
                ],
              }),
              (0, l.jsx)(g, { channel: d }),
            ],
          });
        });
      function g(e) {
        let { channel: t } = e,
          a = (0, r.useStateFromStores)([f.default], () => {
            var e;
            return null !== (e = f.default.getMemberIdsPreview(t.id)) &&
              void 0 !== e
              ? e
              : [];
          }),
          s = (0, r.useStateFromStores)([f.default], () => {
            var e;
            return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e
              ? e
              : 0;
          }),
          i = (0, r.useStateFromStoresArray)([d.default], () =>
            a.map(e => d.default.getUser(e))
          );
        return (n.useEffect(() => {
          a.filter((e, t) => null == i[t]).forEach(e => {
            o.default.requestMember(t.guild_id, e);
          });
        }, []),
        0 === a.length)
          ? null
          : (0, l.jsx)(c.default, {
              className: m.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: i,
              count: s,
              max: h.MAX_THREAD_MEMBERS_PREVIEW,
            });
      }
    },
    442184: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("446674"),
        s = a("77078"),
        i = a("308289"),
        u = a("750560"),
        o = a("619335"),
        d = a("95045"),
        c = a("574073"),
        f = a("26989"),
        C = a("660478"),
        h = a("27618"),
        m = a("697218"),
        v = a("959097"),
        g = a("93427"),
        p = a("299039"),
        x = a("158998"),
        N = a("610730"),
        T = a("487269"),
        S = a("719347"),
        M = a("782340"),
        E = a("963906");
      function L(e) {
        return e.isActiveThread()
          ? (0, l.jsx)(I, { channel: e })
          : (0, l.jsx)(R, { channel: e });
      }
      function I(e) {
        let { channel: t } = e,
          a = (0, r.useStateFromStores)([N.default], () =>
            N.default.getMostRecentMessage(t.id)
          );
        return null == a
          ? (0, l.jsx)(j, { channel: t })
          : (0, l.jsx)(_, { channel: t, message: a });
      }
      function j(e) {
        let { channel: t } = e,
          a = (0, T.useLastMessageTimestamp)(t);
        return (0, l.jsxs)(s.Text, {
          className: E.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            M.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES,
            "\xa0 • \xa0",
            (0, T.getTimestampString)(a),
          ],
        });
      }
      function _(e) {
        let { channel: t, message: a } = e;
        (0, u.useSubscribeGuildMembers)({ [t.guild_id]: [a.author.id] });
        let o = (0, r.useStateFromStores)([m.default], () => {
            var e;
            return null !== (e = m.default.getUser(a.author.id)) && void 0 !== e
              ? e
              : a.author;
          }),
          { nick: f, colorString: C } = (0, c.default)(a),
          v = (0, r.useStateFromStores)([h.default], () =>
            h.default.isBlocked(a.author.id)
          ),
          x = n.useMemo(() => {
            let e =
                null != a.content && "" !== a.content
                  ? (0, d.default)(a, { formatInline: !0 }).content
                  : null,
              {
                contentPlaceholder: t,
                renderedContent: n,
                icon: r,
              } = (0, g.renderSingleLineMessage)(a, e, v, E.messageContent, {
                iconClass: E.messageContentIcon,
                iconSize: S.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
              });
            return (0, l.jsxs)(l.Fragment, {
              children: [
                null != n ? n : (0, l.jsx)("span", { children: t }),
                r,
              ],
            });
          }, [a, v]);
        return (0, l.jsxs)(s.Text, {
          className: E.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            (0, l.jsx)(i.default, {
              className: E.avatar,
              user: o,
              size: s.AvatarSizes.SIZE_16,
            }),
            (0, l.jsx)(s.NameWithRole, {
              name: f,
              color: C,
              className: E.authorName,
            }),
            ":\xa0",
            x,
            "\xa0 • \xa0",
            (0, T.getTimestampString)(p.default.extractTimestamp(a.id)),
          ],
        });
      }
      function R(e) {
        var t, a, n;
        let { channel: d } = e,
          c = (0, r.useStateFromStores)([C.default], () =>
            C.default.lastMessageId(d.id)
          ),
          h =
            null == c
              ? new Date(
                  null !==
                    (a =
                      null === (t = d.threadMetadata) || void 0 === t
                        ? void 0
                        : t.archiveTimestamp) && void 0 !== a
                    ? a
                    : Date.now()
                ).getTime()
              : p.default.extractTimestamp(c);
        (0, u.useSubscribeGuildMembers)({ [d.guild_id]: [d.ownerId] });
        let g = (0, r.useStateFromStores)([m.default], () =>
            m.default.getUser(d.ownerId)
          ),
          N = (0, r.useStateFromStores)([f.default], () =>
            f.default.getMember(d.guild_id, d.ownerId)
          ),
          S = null !== (n = (0, o.default)(d)) && void 0 !== n ? n : v.default;
        return (0, l.jsx)(s.Text, {
          className: E.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children:
            null == g
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("div", {
                      className: E.noAvatarIcon,
                      children: (0, l.jsx)(S, { width: 10, height: 10 }),
                    }),
                    M.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, T.getTimestampString)(h),
                    }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(i.default, {
                      className: E.avatar,
                      user: g,
                      size: s.AvatarSizes.SIZE_16,
                    }),
                    M.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                      authorHook(e, t) {
                        var a, n;
                        return (0, l.jsx)(
                          s.NameWithRole,
                          {
                            className: E.startedByName,
                            color:
                              null !==
                                (a = null == N ? void 0 : N.colorString) &&
                              void 0 !== a
                                ? a
                                : void 0,
                            name:
                              null !== (n = null == N ? void 0 : N.nick) &&
                              void 0 !== n
                                ? n
                                : x.default.getName(g),
                          },
                          t
                        );
                      },
                    }),
                    (0, l.jsx)("span", { className: E.bullet, children: "•" }),
                    M.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, T.getTimestampString)(h),
                    }),
                  ],
                }),
        });
      }
    },
    754474: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BotTypes: function () {
            return i.BotTagTypes;
          },
          default: function () {
            return o;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        r = a.n(n),
        s = a("79798"),
        i = a("988268"),
        u = a("293005"),
        o = e => {
          let {
            name: t,
            discriminator: a,
            invertBotTagColor: n,
            nameColor: i,
            className: o,
            botType: d,
            usernameClass: c,
            discriminatorClass: f,
            botClass: C,
            botVerified: h = !1,
            style: m,
            useRemSizes: v = !1,
            usernameIcon: g,
          } = e;
          return (0, l.jsxs)("div", {
            className: r(o, u.nameTag),
            style: m,
            children: [
              (0, l.jsxs)("span", {
                className: r(u.username, c),
                style: null != i ? { color: i } : void 0,
                children: [g, t],
              }),
              null != a
                ? (0, l.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", a],
                  })
                : null,
              null != d
                ? (0, l.jsx)(s.default, {
                    type: d,
                    invertColor: n,
                    className: r(C, u.bot),
                    verified: h,
                    useRemSizes: v,
                  })
                : null,
            ],
          });
        };
    },
    191814: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var l = a("37983");
      function n(e) {
        let { size: t, horizontal: a = !1 } = e,
          n = a ? t : 1,
          r = a ? 1 : t;
        return (0, l.jsx)("span", {
          style: {
            display: "block",
            width: n,
            minWidth: n,
            height: r,
            minHeight: r,
          },
        });
      }
      a("884691");
    },
    476765: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return u;
          },
        });
      var l = a("995008"),
        n = a.n(l),
        r = a("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return n(e);
        },
        i = () => (0, r.useLazyValue)(() => s()),
        u = e => {
          let { children: t } = e;
          return t(i());
        };
    },
    461380: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        r = a.n(n),
        s = a("384737"),
        i = a("448052"),
        u = a("748802"),
        o = a("260792"),
        d = a("77078"),
        c = a("75196"),
        f = a("366842");
      let C = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        h = e => {
          let {
              direction: t = C.DOWN,
              width: a = 24,
              height: n = 24,
              color: h = "currentColor",
              transition: m = f.transition,
              className: v,
              foreground: g,
              expanded: p,
              ...x
            } = e,
            { enabled: N } = (0, d.useRedesignIconContext)(),
            T = t;
          if ((!0 === p ? (T = C.DOWN) : !1 === p && (T = C.RIGHT), N)) {
            let e = {
              [C.UP]: o.ChevronSmallUpIcon,
              [C.DOWN]: s.ChevronSmallDownIcon,
              [C.LEFT]: i.ChevronSmallLeftIcon,
              [C.RIGHT]: u.ChevronSmallRightIcon,
            }[T];
            return (0, l.jsx)(e, {
              ...x,
              className: v,
              width: a,
              height: n,
              color: h,
              colorClass: g,
            });
          }
          return (0, l.jsx)("svg", {
            className: r(v, m, T),
            width: a,
            height: n,
            viewBox: "0 0 24 24",
            ...(0, c.default)(x),
            children: (0, l.jsx)("path", {
              className: g,
              fill: "none",
              stroke: h,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      h.Directions = C;
      var m = h;
    },
    774223: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("75196");
      function r(e) {
        let {
          width: t = 24,
          height: a = 24,
          color: r = "currentColor",
          className: s,
          foreground: i,
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, n.default)(u),
          className: s,
          width: t,
          height: a,
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            className: i,
            fill: r,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z",
          }),
        });
      }
    },
    867544: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("469563"),
        s = a("163725"),
        i = a("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: r = "currentColor",
              foregroundColor: s = n.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...d
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(d),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("rect", {
                  fill: s,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, l.jsx)("path", {
                  fill: r,
                  className: o,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          s.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    543289: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("75196");
      function r(e) {
        let { width: t = 104, height: a = 80, ...r } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(r),
          width: t,
          height: a,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, l.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    922744: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        r = a("782926"),
        s = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              foreground: r,
              ...i
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          r.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    155207: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        r = a("811513"),
        s = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              foreground: r,
              ...i
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          r.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        r = a("587864"),
        s = a("75196"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              foreground: r,
              ...i
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          r.ThreadLockIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SUPPORTS_COPY: function () {
            return s;
          },
          copy: function () {
            return i;
          },
        }),
        a("70102");
      var l = a("281071"),
        n = a("773336"),
        r = a("50885");
      let s = (() => {
        if (n.isPlatformEmbedded) return null != r.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function i(e) {
        return (
          !!s && (n.isPlatformEmbedded ? (r.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    962821: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          EyeSlashIcon: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: i,
            }),
          ],
        });
      };
    },
    430143: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GroupIcon: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: i,
          }),
        });
      };
    },
    53531: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThreadLockIcon: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof s ? s : s.css,
              className: i,
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof s ? s : s.css,
              className: i,
            }),
          ],
        });
      };
    },
    28289: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TrophyIcon: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: i,
          }),
        });
      };
    },
    281071: function (e, t, a) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let a = document.createRange(),
          l = window.getSelection(),
          n = document.createElement("textarea");
        (n.value = e),
          (n.contentEditable = "true"),
          (n.style.visibility = "none"),
          t.appendChild(n),
          a.selectNodeContents(n),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(a),
          n.focus(),
          n.setSelectionRange(0, e.length);
        let r = document.execCommand("copy");
        return t.removeChild(n), r;
      }
      a.r(t),
        a.d(t, {
          copy: function () {
            return l;
          },
        }),
        a("70102");
    },
  },
]);
//# sourceMappingURL=5eb8bac5d554c90c09cd.js.map
