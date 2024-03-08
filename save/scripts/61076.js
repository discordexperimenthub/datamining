(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61076"],
  {
    111633: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t, n;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            A.test(e)
              ? (e = e.substr(0, e.length - 2))
              : x.test(e) && (e = e.substr(0, e.length - 1)),
            (n = M.exec(e))
              ? u.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = p.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                E.test(e)
                  ? (e += "e")
                  : S.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = _.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = T.exec(e)) && u.test(n[1]) && (e = n[1] + l[n[2]]),
            (n = v.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = C.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = h.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = g.exec(e)) &&
              (d.test(n[1]) || (o.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var l = {
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
        a = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        i = "[aeiouy]",
        s = "([^aeiou][^aeiouy]*)",
        r = "(" + i + "[aeiou]*)",
        u = RegExp("^" + s + "?" + r + s),
        o = RegExp("^" + s + "?" + r + s + r + "?$"),
        d = RegExp("^" + s + "?(" + r + s + "){2,}"),
        c = RegExp("^" + s + "?" + i),
        f = RegExp("^" + s + i + "[^aeiouwxy]$"),
        m = /ll$/,
        g = /^(.+?)e$/,
        _ = /^(.+?)y$/,
        h = /^(.+?(s|t))(ion)$/,
        p = /^(.+?)(ed|ing)$/,
        E = /(at|bl|iz)$/,
        M = /^(.+?)eed$/,
        x = /^.+?[^s]s$/,
        A = /^.+?(ss|i)es$/,
        S = /([^aeiouylsz])\1$/,
        T = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        v = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("70102");
      var l = n("884691");
      function a() {
        let e = (0, l.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: a, children: i } = t,
              s = (0, l.useRef)();
            return (
              !s.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !a && (a = () => n)),
                (s.current = a())),
              (0, l.createElement)(e.Provider, { value: s.current }, i)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              a = (0, l.useContext)(e);
            if (!a)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return a(t, n);
          },
          useStoreApi: () => {
            let t = (0, l.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, l.useMemo)(
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
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        i = n("77078"),
        s = n("390236"),
        r = a.memo(function (e) {
          var t, n, r, u;
          let {
              user: o,
              size: d = i.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...m
            } = e,
            g = a.useContext(s.default);
          return (0, l.jsx)(i.Avatar, {
            src:
              ((t = o),
              (n = (0, i.getAvatarSize)(d)),
              (r = c),
              (u = g),
              t.getAvatarURL(u, n, r)),
            size: d,
            "aria-label": f ? void 0 : o.username,
            "aria-hidden": f,
            ...m,
          });
        });
    },
    612278: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFirstForumPostMessage: function () {
            return x;
          },
          useMostRecentForumMessage: function () {
            return A;
          },
          preloadForumThreads: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("917351"),
        a = n.n(l),
        i = n("446674"),
        s = n("872717"),
        r = n("913144"),
        u = n("42203"),
        o = n("299039"),
        d = n("670902"),
        c = n("349778"),
        f = n("430475"),
        m = n("324261"),
        g = n("49111");
      class _ {
        get(e) {
          return (
            !this._set.hasOwnProperty(e) &&
              (this._set[e] = this._defaultValueFunc()),
            this._set[e]
          );
        }
        delete(e) {
          delete this._set[e];
        }
        hasNext() {
          return !a.isEmpty(this._set);
        }
        next() {
          return o.default.keys(this._set)[0];
        }
        constructor(e) {
          (this._set = {}), (this._defaultValueFunc = e);
        }
      }
      let h = new (class e {
          request(e, t) {
            this.requested.get(e).add(t);
          }
          hasRequested(e, t) {
            return this.requested.get(e).has(t);
          }
          finishRequesting(e, t) {
            let n = this.requested.get(e);
            t.forEach(e => n.delete(e)), h.compact(e);
          }
          getRequested(e) {
            return this.requested.get(e);
          }
          getNextBatch(e, t) {
            return Array.from(this.requested.get(e)).slice(0, t);
          }
          hasNext() {
            return this.requested.hasNext();
          }
          next() {
            return this.requested.next();
          }
          compact(e) {
            0 === this.requested.get(e).size && this.requested.delete(e);
          }
          constructor() {
            this.requested = new _(() => new Set());
          }
        })(),
        p = null;
      function E(e, t) {
        let n = (0, c.isForumActivityExperimentEnabled)(e);
        if (n) {
          let { loaded: e, message: n } = m.default.getMessageState(t);
          return !e && null == n;
        }
        return !1;
      }
      function M(e, t) {
        return !e && null == t;
      }
      function x(e) {
        var t, n;
        let { loaded: l, firstMessage: a } = (0, i.useStateFromStoresObject)(
            [f.default],
            () => f.default.getMessage(e.id)
          ),
          s = (0, i.useStateFromStores)([u.default], () =>
            u.default.getChannel(e.parent_id)
          );
        if (null != s && ((t = l), (n = a), !t && null == n)) v(s, e.id);
        return { loaded: l, firstMessage: a };
      }
      function A(e, t) {
        let { loaded: n, message: l } = (0, i.useStateFromStoresObject)(
          [m.default],
          () => m.default.getMessageState(t.id)
        );
        return (
          null != e && E(t.guild_id, t.id) && v(e, t.id),
          { loaded: n, mostRecentMessage: l }
        );
      }
      function S(e, t) {
        let n = !1;
        t.forEach(t => {
          var l, a;
          let { loaded: i, firstMessage: s } = f.default.getMessage(t);
          if (((l = i), (a = s), (!l && null == a) || E(e.guild_id, t)))
            h.request(e.id, t), (n = !0);
        }),
          n && null == p && (p = setTimeout(C, 0));
      }
      function T(e) {
        S(e, (0, d.computeThreadIdsSnapshot)(e.id).slice(0, 10));
      }
      function v(e, t) {
        if (h.hasRequested(e.id, t)) return;
        let n = (0, d.computeThreadIdsSnapshot)(e.id),
          l = n.findIndex(e => e === t),
          a = n.slice(l, l + 5).filter(t => !h.hasRequested(e.id, t));
        S(e, a);
      }
      async function C() {
        try {
          for (; h.hasNext(); ) await I(h.next());
        } finally {
          p = null;
        }
      }
      async function I(e) {
        let t = h.getNextBatch(e, 10);
        try {
          var n;
          if (0 === t.length) return;
          let l =
            null === (n = u.default.getChannel(e)) || void 0 === n
              ? void 0
              : n.guild_id;
          if (null == l) return;
          let {
            body: { threads: a },
          } = await s.default.post({
            url: g.Endpoints.FORUM_POSTS(e),
            body: { thread_ids: t },
          });
          r.default.dispatch({
            type: "LOAD_FORUM_POSTS",
            guildId: l,
            threads: a,
          });
        } catch (e) {
        } finally {
          h.finishRequesting(e, t);
        }
      }
    },
    324261: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var l = n("446674"),
        a = n("913144"),
        i = n("692038"),
        s = n("42203"),
        r = n("697218"),
        u = n("449008"),
        o = n("299039");
      let d = {};
      function c(e) {
        var t;
        let n = s.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        let l = d[n.id];
        return (
          o.default.compare(
            null == e ? void 0 : e.id,
            null == l
              ? void 0
              : null === (t = l.message) || void 0 === t
                ? void 0
                : t.id
          ) > -1
        );
      }
      function f(e, t) {
        let n = null == t ? null : (0, i.createMessageRecord)(t);
        return (d[e] = { loaded: !0, message: n }), !0;
      }
      function m(e) {
        return d[e];
      }
      function g(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.message;
      }
      function _(e) {
        let { threads: t, mostRecentMessages: n } = e;
        t.forEach(e => f(e.id, null)),
          null == n ||
            n.filter(u.isNotNullish).forEach(e => {
              f(e.channel_id, e);
            });
      }
      class h extends l.default.Store {
        initialize() {
          this.waitFor(s.default, r.default);
        }
        getMessageState(e) {
          return !(e in d) && (d[e] = { loaded: !1, message: null }), d[e];
        }
      }
      h.displayName = "ForumPostRecentMessageStore";
      var p = new h(a.default, {
        CONNECTION_OPEN: function () {
          d = {};
        },
        MESSAGE_CREATE: function (e) {
          if (e.isPushNotification || !c(e.message)) return !1;
          e.message.channel_id ===
          o.default.castMessageIdAsChannelId(e.message.id)
            ? f(e.message.channel_id, null)
            : f(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
          if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
          !(function (e, t) {
            let n = (function (e) {
                return d[e];
              })(e),
              l = g(e);
            null != n &&
              null != l &&
              (d[e] = { ...n, message: (0, i.updateMessageRecord)(l, t) });
          })(e.message.channel_id, e.message);
        },
        MESSAGE_DELETE: function (e) {
          return (function (e, t) {
            let n = g(e);
            return (null == n ? void 0 : n.id) === t && (delete d[e], !0);
          })(e.channelId, e.id);
        },
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          for (let e in t) f(e, t[e].most_recent_message);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: _,
        LOAD_THREADS_SUCCESS: _,
      });
    },
    67994: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("446674"),
        s = n("77078"),
        r = n("819689"),
        u = n("81594"),
        o = n("681736"),
        d = n("447435"),
        c = n("694187"),
        f = n("42203"),
        m = n("474643"),
        g = n("305961"),
        _ = n("377253"),
        h = n("476765"),
        p = n("254490"),
        E = n("299039"),
        M = n("412861"),
        x = n("834021"),
        A = n("867965"),
        S = n("152637"),
        T = n("578198"),
        v = n("49111"),
        C = n("843455"),
        I = n("782340"),
        O = n("106847");
      function R(e) {
        var t;
        let {
            threadId: n,
            attachments: R,
            sendMessage: b,
            transitionState: L,
            onClose: y,
          } = e,
          F = (0, h.useUID)(),
          U = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.getChannel(n),
            [n]
          ),
          N = (0, i.useStateFromStores)(
            [g.default],
            () => g.default.getGuild(null == U ? void 0 : U.getGuildId()),
            [U]
          ),
          D = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.getChannel(null == U ? void 0 : U.parent_id),
            [U]
          ),
          P = null === (t = R[0]) || void 0 === t ? void 0 : t.item,
          [j, z] = a.useState(null);
        a.useEffect(() => {
          null != P && (0, c.processImage)(P.file, (e, t) => z(e), C.NOOP);
        }, [P]);
        let w =
            null != P && null != j
              ? {
                  src: j,
                  width: S.MAX_THUMBNAIL_WIDTH,
                  height: S.MAX_THUMBNAIL_HEIGHT,
                  spoiler: R[0].spoiler,
                  alt: R[0].description,
                }
              : null,
          [G, k] = a.useState(!1),
          B = a.useCallback(() => {
            (0, A.trackForumAddMediaToOriginalPostClicked)({ added: !1 }),
              b(),
              y();
          }, [b, y]),
          q = a.useCallback(() => {
            null != U &&
              null != N &&
              ((0, A.trackForumAddMediaToOriginalPostClicked)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: n,
                    setIsUploading: l,
                    guild: a,
                    onClose: i,
                  } = e,
                  s = new o.default(
                    v.Endpoints.MESSAGE(
                      t.id,
                      E.default.castChannelIdAsMessageId(t.id)
                    ),
                    "PATCH"
                  );
                s.on("start", () => {
                  l(!0);
                }),
                  s.on("progress", e => {
                    let r = (0, p.maxFileSize)(a.id);
                    e.currentSize > r &&
                      (s.cancel(),
                      l(!1),
                      i(),
                      (0, M.showUploadFileSizeExceededError)(
                        t,
                        (0, x.getWebUploadFiles)(n)
                      ));
                  }),
                  s.on("error", (e, n, a) => {
                    l(!1),
                      n === v.AbortCodes.EXPLICIT_CONTENT &&
                        (i(),
                        r.default.sendExplicitMediaClydeError(
                          t.id,
                          null == a ? void 0 : a.attachments,
                          d.TrackMediaRedactionContext
                            .EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED
                        ),
                        u.default.clearAll(t.id, m.DraftType.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    l(!1),
                      i(),
                      u.default.clearAll(t.id, m.DraftType.ChannelMessage);
                  });
                let c = _.default
                    .getMessages(t.id)
                    .get(E.default.castChannelIdAsMessageId(t.id)),
                  f = null != c ? c.attachments : [];
                s.uploadFiles(
                  n,
                  { attachments: [...f] },
                  { addFilesTo: "attachments" }
                );
              })({
                thread: U,
                attachments: R,
                setIsUploading: k,
                guild: N,
                onClose: y,
              }));
          }, [U, R, k, N, y]);
        return null == D
          ? null
          : (0, l.jsxs)(s.ModalRoot, {
              transitionState: L,
              size: s.ModalSize.SMALL,
              className: O.modalRoot,
              "aria-labelledby": F,
              children: [
                (0, l.jsxs)(s.ModalContent, {
                  className: O.modal,
                  children: [
                    (0, l.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: O.header,
                      id: F,
                      children:
                        I.default.Messages
                          .FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE,
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: O.body,
                      children:
                        I.default.Messages
                          .FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION,
                    }),
                    (0, l.jsx)("div", {
                      className: O.forumPost,
                      children: (0, l.jsx)(T.ForumPostComposerStoreProvider, {
                        createStore: () =>
                          (0, T.createForumPostComposerStore)(D),
                        children: (0, l.jsx)(S.default, {
                          threadId: n,
                          goToThread: C.NOOP,
                          overrideMedia: w,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(s.ModalFooter, {
                  className: O.modalFooter,
                  children: [
                    (0, l.jsx)(s.Button, {
                      look: s.Button.Looks.BLANK,
                      className: O.cancelButton,
                      disabled: G,
                      onClick: y,
                      children: I.default.Messages.CANCEL,
                    }),
                    (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: O.dontAddButton,
                      disabled: G,
                      onClick: B,
                      children:
                        I.default.Messages
                          .FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD,
                    }),
                    (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      className: O.button,
                      submitting: G,
                      onClick: q,
                      autoFocus: !0,
                      children:
                        I.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    90625: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IncreasedActivityForumTagPill: function () {
            return E;
          },
          IncreasedActivityForumTagOverflow: function () {
            return M;
          },
          default: function () {
            return x;
          },
          ForumTagOverflow: function () {
            return A;
          },
        }),
        n("222007");
      var l,
        a,
        i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("974667"),
        d = n("446674"),
        c = n("77078"),
        f = n("430568"),
        m = n("206230"),
        g = n("385976"),
        _ = n("945330"),
        h = n("782340"),
        p = n("375659");
      function E(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: l,
            className: a,
            onClick: r,
            onRemove: E,
            selected: M,
            ariaLabel: x,
          } = e,
          { name: A, emojiId: S, emojiName: T } = t,
          v = null != E,
          [C, I] = s.useState(!1),
          O = (0, d.useStateFromStores)([g.default], () =>
            null != S ? g.default.getUsableCustomEmojiById(S) : null
          ),
          R = v || null != r,
          b = (!v || !C) && (null != S || null != T),
          L = 0 === n,
          y = s.useRef(null),
          F = (0, d.useStateFromStores)(
            [m.default],
            () => m.default.keyboardModeEnabled
          ),
          U = (0, i.jsxs)(i.Fragment, {
            children: [
              b
                ? (0, i.jsx)(f.default, {
                    className: u(p.emoji, { [p.small]: L }),
                    emojiId: S,
                    emojiName: T,
                    animated: !!(null == O ? void 0 : O.animated),
                    size: "reaction",
                    alt: "",
                  })
                : null,
              C &&
                v &&
                (0, i.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, i.jsx)(_.default, { className: p.close }),
                }),
              (0, i.jsx)(c.Text, {
                className: p.increasedActivityText,
                variant: "text-xs/medium",
                lineClamp: 1,
                children: A,
              }),
            ],
          }),
          N = {
            key: t.id,
            className: u(
              p.pill,
              p.increasedActivityPill,
              {
                [p.disabled]: l,
                [p.clickable]: R,
                [p.increasedActivitySmall]: L,
                [p.selected]: M,
              },
              a
            ),
            onClick: e => {
              null == r || r(e),
                null == E || E(t),
                !F && null != y.current && y.current.blur();
            },
            onMouseEnter: () => v && I(!0),
            onMouseLeave: () => v && I(!1),
          },
          D = (0, o.useListItem)("forum-tag-".concat(t.id));
        return R
          ? (0, i.jsx)(c.Clickable, {
              ...D,
              innerRef: y,
              focusProps: { ringTarget: y },
              "aria-label":
                null != x
                  ? x
                  : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: A,
                    }),
              role: "button",
              "aria-pressed": M,
              ...N,
              children: U,
            })
          : (0, i.jsx)("div", {
              "aria-label":
                null != x
                  ? x
                  : h.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                      tagName: A,
                    }),
              ...N,
              children: U,
            });
      }
      function M(e) {
        let { tags: t, count: n, size: l = 1 } = e,
          a = 0 === l;
        return (0, i.jsx)(c.Tooltip, {
          "aria-label": h.default.Messages.FORUM_TAGS,
          text: (0, i.jsx)(i.Fragment, {
            children: t.map(e =>
              (0, i.jsx)(
                x,
                { tag: e, className: p.tooltipPill, size: x.Sizes.SMALL },
                e.id
              )
            ),
          }),
          children: e =>
            (0, i.jsx)("div", {
              ...e,
              className: u(p.pill, p.increasedActivityPill, {
                [p.increasedActivitySmall]: a,
              }),
              children: (0, i.jsxs)(c.Text, {
                className: p.increasedActivityText,
                variant: a ? "text-xs/medium" : "text-sm/medium",
                children: ["+", n],
              }),
            }),
        });
      }
      function x(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: l,
            className: a,
            onClick: r,
            onRemove: E,
            selected: M,
            ariaLabel: x,
          } = e,
          { name: A, emojiId: S, emojiName: T } = t,
          v = null != E,
          [C, I] = s.useState(!1),
          O = (0, d.useStateFromStores)([g.default], () =>
            null != S ? g.default.getUsableCustomEmojiById(S) : null
          ),
          R = v || null != r,
          b = (!v || !C) && (null != S || null != T),
          L = 0 === n,
          y = s.useRef(null),
          F = (0, d.useStateFromStores)(
            [m.default],
            () => m.default.keyboardModeEnabled
          ),
          U = (0, i.jsxs)(i.Fragment, {
            children: [
              b
                ? (0, i.jsx)(f.default, {
                    className: u(p.emoji, { [p.small]: L }),
                    emojiId: S,
                    emojiName: T,
                    animated: !!(null == O ? void 0 : O.animated),
                    size: "reaction",
                  })
                : null,
              C &&
                v &&
                (0, i.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, i.jsx)(_.default, { className: p.close }),
                }),
              (0, i.jsx)(c.Text, {
                variant: L ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: A,
              }),
            ],
          }),
          N = {
            key: t.id,
            className: u(
              p.pill,
              {
                [p.disabled]: l,
                [p.clickable]: R,
                [p.small]: L,
                [p.selected]: M,
              },
              a
            ),
            onClick: e => {
              null == r || r(e),
                null == E || E(t),
                !F && null != y.current && y.current.blur();
            },
            onMouseEnter: () => v && I(!0),
            onMouseLeave: () => v && I(!1),
          },
          D = (0, o.useListItem)("forum-tag-".concat(t.id));
        return R
          ? (0, i.jsx)(c.Clickable, {
              ...D,
              innerRef: y,
              focusProps: { ringTarget: y },
              "aria-label":
                null != x
                  ? x
                  : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: A,
                    }),
              role: "button",
              "aria-pressed": M,
              ...N,
              children: U,
            })
          : (0, i.jsx)("div", { ...N, children: U });
      }
      function A(e) {
        let { tags: t, count: n, size: l = 1 } = e,
          a = 0 === l;
        return (0, i.jsx)(c.Tooltip, {
          "aria-label": h.default.Messages.FORUM_TAGS,
          text: (0, i.jsx)(i.Fragment, {
            children: t.map(e =>
              (0, i.jsx)(
                x,
                { tag: e, className: p.tooltipPill, size: x.Sizes.SMALL },
                e.id
              )
            ),
          }),
          children: e =>
            (0, i.jsx)("div", {
              ...e,
              className: u(p.pill, { [p.small]: a }),
              children: (0, i.jsxs)(c.Text, {
                variant: a ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((a = l || (l = {}))[(a.SMALL = 0)] = "SMALL"),
        (a[(a.MEDIUM = 1)] = "MEDIUM"),
        (x.Sizes = l);
    },
    406043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentUserCommunicationDisabled: function () {
            return r;
          },
          default: function () {
            return d;
          },
          userCommunicationDisabled: function () {
            return c;
          },
        });
      var l = n("446674"),
        a = n("26989"),
        i = n("697218"),
        s = n("509");
      function r(e) {
        let t = (0, l.useStateFromStores)([i.default], () =>
          i.default.getCurrentUser()
        );
        return d(null == t ? void 0 : t.id, e);
      }
      function u(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null;
      }
      function o(e) {
        var t;
        return [
          null !== (t = null == e ? void 0 : e.communicationDisabledUntil) &&
          void 0 !== t
            ? t
            : null,
          (0, s.isMemberCommunicationDisabled)(e),
        ];
      }
      function d(e, t) {
        let n = (0, l.useStateFromStores)(
          [a.default],
          () => u(e, t, a.default),
          [t, e]
        );
        return o(n);
      }
      function c(e, t) {
        let n = u(e, t, a.default);
        return o(n);
      }
    },
    441823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openUserContextMenu: function () {
            return i;
          },
          openModerateUserContextMenu: function () {
            return s;
          },
          openModerateRoleContextMenu: function () {
            return r;
          },
          openModerationRaidContextMenu: function () {
            return u;
          },
        }),
        n("70102");
      var l = n("37983");
      n("884691");
      var a = n("272030");
      function i(e, t, i) {
        i.isGroupDM()
          ? (0, a.openContextMenuLazy)(e, async () => {
              let { default: e } = await n
                .el("166452")
                .then(n.bind(n, "166452"));
              return n => (0, l.jsx)(e, { ...n, user: t, channel: i });
            })
          : i.isDM()
            ? (0, a.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("130074")
                  .then(n.bind(n, "130074"));
                return n =>
                  (0, l.jsx)(e, {
                    ...n,
                    user: t,
                    channel: i,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != i.guild_id
              ? (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("834247")
                    .then(n.bind(n, "834247"));
                  return n =>
                    (0, l.jsx)(e, {
                      ...n,
                      user: t,
                      channel: i,
                      guildId: i.guild_id,
                    });
                })
              : (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("406784")
                    .then(n.bind(n, "406784"));
                  return n => (0, l.jsx)(e, { ...n, user: t });
                });
      }
      function s(e, t) {
        let { user: i, channel: s, moderationAlertId: r, guildId: u, ...o } = t;
        if (
          (null == s ? void 0 : s.isGroupDM()) ||
          (null == s ? void 0 : s.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != u ? u : null == s ? void 0 : s.getGuildId();
        null != d &&
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("467940").then(n.bind(n, "467940"));
            return t =>
              (0, l.jsx)(e, {
                ...t,
                user: i,
                channelId: null == s ? void 0 : s.id,
                guildId: d,
                moderationAlertId: r,
                ...o,
              });
          });
      }
      function r(e, t) {
        let {
          user: i,
          guildId: s,
          analyticsLocations: r,
          onCloseContextMenu: u,
        } = t;
        (0, a.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("522651").then(n.bind(n, "522651"));
          return t =>
            (0, l.jsx)(e, {
              ...t,
              user: i,
              guildId: s,
              analyticsLocations: r,
              onCloseContextMenu: u,
            });
        });
      }
      function u(e, t, i) {
        null != i &&
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("701587").then(n.bind(n, "701587"));
            return t => (0, l.jsx)(e, { ...t, guildId: i });
          });
      }
    },
    412861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showUploadFileSizeExceededError: function () {
            return x;
          },
          promptToUpload: function () {
            return A;
          },
        }),
        n("424973"),
        n("222007"),
        n("70102");
      var l = n("255397"),
        a = n("81594"),
        i = n("783480"),
        s = n("336522"),
        r = n("966724"),
        u = n("716241"),
        o = n("191145"),
        d = n("585722"),
        c = n("697218"),
        f = n("599110"),
        m = n("254490"),
        g = n("719923"),
        _ = n("834021"),
        h = n("49111"),
        p = n("894488"),
        E = n("646718"),
        M = n("782340");
      function x(e, t) {
        let n = c.default.getCurrentUser(),
          l = e.getGuildId(),
          a = m.maxFileSize(l),
          i = [],
          r = 0,
          o = 0,
          d = 0,
          f = [];
        for (let e of t)
          (d += 1),
            (r += e.size),
            i.push(e.size),
            e.size > o && (o = e.size),
            null != e.type ? f.push(e.type) : f.push("unknown");
        if (o > a) {
          (0, u.trackWithMetadata)(h.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: i,
            pre_compression_aggregate_file_size: r,
            num_attachments: d,
            error_type: p.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: f,
          }),
            (0, s.openUploadError)({
              title: M.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, _.getErrorHelp)(n, l),
              showPremiumUpsell: !(0, g.isPremiumExactly)(
                n,
                E.PremiumTypes.TIER_2
              ),
              fileSize: o,
            });
          return;
        }
        (0, s.openUploadError)({
          title: M.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: M.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: m.sizeString(m.getMaxRequestSize()),
          }),
        });
      }
      function A(e, t, n) {
        let {
          filesMetadata: u,
          requireConfirm: c = !0,
          showLargeMessageDialog: m = !1,
          isThumbnail: g = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != u && u.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let p = t.getGuildId();
        if ((0, _.filesExceedUploadLimits)(e, p)) {
          x(t, e);
          return;
        }
        if (d.default.getUploadCount(t.id, n) + e.length > h.MAX_UPLOAD_COUNT) {
          (0, s.openUploadError)({
            title: M.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: M.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: h.MAX_UPLOAD_COUNT,
            }),
          }),
            f.default.track(h.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: d.default.getUploadCount(t.id, n),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === h.ChannelTypes.GUILD_VOICE ||
            t.type === h.ChannelTypes.GUILD_STAGE_VOICE) &&
            !o.default.getChatOpen(t.id) &&
            l.default.updateChatOpen(t.id, !0),
          c)
        ) {
          let l = Array.from(e).map((e, t) => ({
            file: e,
            platform: r.UploadPlatform.WEB,
            isThumbnail: g,
            ...(null == u ? void 0 : u[t]),
          }));
          a.default.addFiles({
            files: l,
            channelId: t.id,
            showLargeMessageDialog: m,
            draftType: n,
          });
        } else
          i.default.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: g,
            filesMetadata: u,
          });
      }
    },
    834021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getErrorHelp: function () {
            return u;
          },
          filesExceedUploadLimits: function () {
            return o;
          },
          getWebUploadFiles: function () {
            return d;
          },
        }),
        n("808653"),
        n("424973");
      var l = n("966724"),
        a = n("254490"),
        i = n("719923"),
        s = n("646718"),
        r = n("782340");
      function u(e, t) {
        let n = a.sizeString(a.maxFileSize(t));
        return i.default.isPremium(e, s.PremiumTypes.TIER_2)
          ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n })
          : i.default.isPremium(e, s.PremiumTypes.TIER_1)
            ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format(
                { maxSize: n }
              )
            : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: n,
              });
      }
      function o(e, t) {
        return a.anyFileTooLarge(e, t) || a.uploadSumTooLarge(e);
      }
      function d(e) {
        return e.reduce(
          (e, t) => (
            t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e
          ),
          []
        );
      }
    },
  },
]);
//# sourceMappingURL=e6af41fa7a5e2244e055.js.map
