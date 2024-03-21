(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14694"],
  {
    828986: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s("872717"),
        a = s("913144"),
        l = s("263024"),
        i = s("508229"),
        d = s("404118"),
        r = s("49111"),
        u = s("782340");
      let o = {
        async pinMessage(e, t) {
          let { id: s, name: a } = e;
          await l.default.unarchiveThreadIfNecessary(e.id),
            n.HTTP.put({ url: r.Endpoints.PIN(s, t), oldFormErrors: !0 }).catch(
              () => {
                let t;
                (t = e.isPrivate()
                  ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format(
                      { maxPins: r.MAX_PINS_PER_CHANNEL }
                    )
                  : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                      maxPins: r.MAX_PINS_PER_CHANNEL,
                      channelName: a,
                    })),
                  d.default.show({
                    title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                    body: t,
                    confirmText: u.default.Messages.OKAY,
                  });
              }
            );
        },
        async unpinMessage(e, t) {
          await l.default.unarchiveThreadIfNecessary(e.id),
            n.HTTP.del({
              url: r.Endpoints.PIN(e.id, t),
              oldFormErrors: !0,
            }).catch(() =>
              d.default.show({
                title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                confirmText: u.default.Messages.TRY_AGAIN,
                cancelText: u.default.Messages.CANCEL,
                onConfirm: o.unpinMessage.bind(o, e, t),
              })
            );
        },
        ackPins(e) {
          a.default.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = i.default.getPinnedMessages(e);
          (t || null == s || (!s.loaded && !s.loading)) &&
            (a.default.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e }),
            n.HTTP.get({
              url: r.Endpoints.PINS(e),
              retries: 2,
              oldFormErrors: !0,
            }).then(
              t => {
                a.default.dispatch({
                  type: "LOAD_PINNED_MESSAGES_SUCCESS",
                  messages: t.body,
                  channelId: e,
                });
              },
              () => {
                a.default.dispatch({
                  type: "LOAD_PINNED_MESSAGES_FAILURE",
                  channelId: e,
                });
              }
            ));
        },
      };
      var c = o;
    },
    249561: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        }),
        s("702976"),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        i = s.n(l),
        d = s("77078"),
        r = s("828986"),
        u = s("819689"),
        o = s("679653"),
        c = s("390236"),
        f = s("377114"),
        E = s("699473"),
        g = s("27618"),
        M = s("697218"),
        _ = s("822332"),
        h = s("568734"),
        m = s("870190"),
        N = s("49111"),
        S = s("782340"),
        A = s("618537");
      class I extends a.PureComponent {
        render() {
          let e, t;
          let { report: s } = this.state,
            {
              channel: a,
              message: l,
              showContextMenuHint: i,
              ...r
            } = this.props,
            u =
              a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT &&
              (0, h.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
          return (
            i &&
              (e = (0, n.jsx)(_.default, {
                className: A.spacingTop,
                children:
                  S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format(),
              })),
            (0, m.canDeleteAndReportMessage)(l) &&
              (t = (0, n.jsx)(d.FormSwitch, {
                value: s,
                onChange: this.handleToggleReport,
                hideBorder: !0,
                className: A.spacingTop,
                children: S.default.Messages.DELETE_MESSAGE_REPORT,
              })),
            (0, n.jsx)(c.default.Provider, {
              value: a.guild_id,
              children: (0, n.jsxs)(d.ConfirmModal, {
                header: u
                  ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER
                  : S.default.Messages.DELETE_MESSAGE_TITLE,
                confirmText: S.default.Messages.DELETE,
                cancelText: S.default.Messages.CANCEL,
                onConfirm: this.handleDelete,
                ...r,
                children: [
                  (0, n.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: A.spacing,
                    children: u
                      ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY
                      : S.default.Messages.DELETE_MESSAGE_BODY,
                  }),
                  (0, n.jsx)("div", {
                    className: A.message,
                    children: (0, n.jsx)(E.default, {
                      channel: a,
                      message: l,
                      disableInteraction: !0,
                    }),
                  }),
                  t,
                  e,
                ],
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = { report: !1 }),
            (this.handleDelete = () => {
              let { report: e } = this.state,
                { channel: t, message: s } = this.props;
              e
                ? (0, f.showReportModalForMessage)(s, () =>
                    u.default.deleteMessage(t.id, s.id)
                  )
                : u.default.deleteMessage(t.id, s.id);
            }),
            (this.handleToggleReport = e => {
              this.setState({ report: e });
            });
        }
      }
      var C = {
        confirmPin: function (e, t) {
          (0, d.openModal)(s => {
            let a;
            let l = (0, o.computeChannelName)(e, M.default, g.default);
            return (
              (a = e.isPrivate()
                ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL
                : S.default.Messages.PIN_MESSAGE_BODY.format({
                    channelName: l,
                  })),
              (0, n.jsx)(c.default.Provider, {
                value: e.guild_id,
                children: (0, n.jsxs)(d.ConfirmModal, {
                  header: S.default.Messages.PIN_MESSAGE_TITLE,
                  confirmText: S.default.Messages.PIN_CONFIRM,
                  cancelText: S.default.Messages.CANCEL,
                  confirmButtonColor: d.Button.Colors.BRAND,
                  onConfirm: () => r.default.pinMessage(e, t.id),
                  ...s,
                  children: [
                    (0, n.jsx)(d.Text, {
                      variant: "text-md/normal",
                      className: A.spacing,
                      children: a,
                    }),
                    (0, n.jsx)("div", {
                      className: A.message,
                      children: (0, n.jsx)(E.default, {
                        channel: e,
                        message: t,
                        animateAvatar: !1,
                        disableInteraction: !0,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        },
        confirmUnpin: function (e, t) {
          (0, d.openModal)(s =>
            (0, n.jsx)(c.default.Provider, {
              value: e.guild_id,
              children: (0, n.jsxs)(d.ConfirmModal, {
                header: S.default.Messages.UNPIN_MESSAGE_TITLE,
                confirmText: S.default.Messages.UNPIN_CONFIRM,
                cancelText: S.default.Messages.CANCEL,
                onConfirm: () => r.default.unpinMessage(e, t.id),
                ...s,
                children: [
                  (0, n.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: A.spacing,
                    children: S.default.Messages.UNPIN_MESSAGE_BODY,
                  }),
                  (0, n.jsx)("div", {
                    className: i(A.message, A.spacing),
                    children: (0, n.jsx)(E.default, {
                      channel: e,
                      message: t,
                      disableInteraction: !0,
                    }),
                  }),
                  (0, n.jsx)(_.default, {
                    children:
                      S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format(),
                  }),
                ],
              }),
            })
          );
        },
        confirmDelete: function (e, t) {
          let s =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          (0, d.openModal)(a =>
            (0, n.jsx)(I, {
              channel: e,
              message: t,
              showContextMenuHint: s,
              ...a,
            })
          );
        },
        confirmEdit: function (e, t, s) {
          (0, d.openModal)(a =>
            (0, n.jsx)(d.ConfirmModal, {
              header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
              confirmText: S.default.Messages.CONFIRM,
              cancelText: S.default.Messages.CANCEL,
              confirmButtonColor: d.Button.Colors.BRAND,
              onConfirm: () => u.default.editMessage(e, t, { content: s }),
              ...a,
              children: (0, n.jsx)(d.Text, {
                variant: "text-md/normal",
                className: A.spacing,
                children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY,
              }),
            })
          );
        },
      };
    },
    601248: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("169276");
      s.es(n, t);
    },
    518155: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("281071"),
        l = s("77078"),
        i = s("83900"),
        d = s("599110"),
        r = s("306160"),
        u = s("49111"),
        o = s("782340");
      function c(e, t) {
        return r.SUPPORTS_COPY &&
          e.type !== u.MessageTypes.GUILD_INVITE_REMINDER
          ? (0, n.jsx)(l.MenuItem, {
              id: "copy-link",
              label: o.default.Messages.COPY_MESSAGE_LINK,
              icon: i.default,
              action: () => {
                (0, a.copy)(
                  ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(u.Routes.CHANNEL(t.guild_id, t.id, e.id))
                ),
                  d.default.track(u.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: e.id,
                    channel: e.channel_id,
                  });
              },
            })
          : null;
      }
    },
    718381: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("446674"),
        l = s("77078"),
        i = s("819689"),
        d = s("249561"),
        r = s("300322"),
        u = s("957255"),
        o = s("697218"),
        c = s("228220"),
        f = s("49111"),
        E = s("782340");
      function g(e, t) {
        let s = (0, a.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          g = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
          M = (0, a.useStateFromStores)(
            [u.default],
            () => u.default.can(f.Permissions.MANAGE_MESSAGES, t),
            [t]
          ),
          _ = M || (null != s && e.canDeleteOwnMessage(s.id));
        return e.state === f.MessageStates.SENDING ||
          !_ ||
          f.MessageTypesSets.UNDELETABLE.has(e.type) ||
          !g
          ? null
          : (0, n.jsx)(l.MenuItem, {
              id: "delete",
              label: E.default.Messages.DELETE_MESSAGE,
              action: function (s) {
                e.state === f.MessageStates.SEND_FAILED
                  ? i.default.deleteMessage(t.id, e.id, !0)
                  : s.shiftKey
                    ? i.default.deleteMessage(t.id, e.id)
                    : d.default.confirmDelete(t, e, !0);
              },
              color: "danger",
              icon: c.default,
            });
      }
    },
    875834: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        l = s("300322"),
        i = s("993477"),
        d = s("456936"),
        r = s("782340");
      function u(e, t) {
        let s = (0, l.useIsActiveChannelOrUnarchivableThread)(t);
        return s
          ? (0, n.jsx)(a.MenuItem, {
              id: "mark-unread",
              label: r.default.Messages.MARK_UNREAD,
              action: () => (0, d.default)(t.id, e.id),
              icon: i.default,
            })
          : null;
      }
    },
    146574: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getNativeContextMenuChannelAnalytics: function () {
            return l;
          },
        });
      var n = s("18494"),
        a = s("724210");
      function l() {
        var e;
        let t =
          null !== (e = n.default.getCurrentlySelectedChannelId()) &&
          void 0 !== e
            ? e
            : void 0;
        return null != t && (0, a.isStaticChannelRoute)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    152298: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        l = s("773336"),
        i = s("50885"),
        d = s("782340");
      function r(e, t) {
        return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
          ? (0, n.jsx)(a.MenuItem, {
              id: "copy",
              label: d.default.Messages.COPY,
              hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
              action: () => {
                i.default.copy(e), null == t || t.focus();
              },
            })
          : null;
      }
    },
    26051: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return _;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        l = s("689226"),
        i = s("467475"),
        d = s("24373"),
        r = s("48703"),
        u = s("599110"),
        o = s("128259"),
        c = s("773336"),
        f = s("50885"),
        E = s("146574"),
        g = s("49111"),
        M = s("782340");
      function _(e, t, s, _) {
        let h = (0, i.default)(null == s ? void 0 : s.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          h ||
          (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, d.isStickerAssetUrl)(e)) ||
          (null != e && (0, l.isRoleIconAssetUrl)(e))
        )
          return null;
        let m = (0, r.getHostname)(e),
          N = s => {
            u.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
              hostname: m,
              ...(0, E.getNativeContextMenuChannelAnalytics)(),
            }),
              (0, o.handleClick)(
                {
                  href: e,
                  trusted: (0, o.isLinkTrusted)(e, t),
                  shouldConfirm: !0,
                },
                s
              );
          };
        return [
          (0, n.jsx)(
            a.MenuItem,
            {
              id: "copy-native-link",
              label: M.default.Messages.COPY_LINK,
              action: () => {
                u.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                  hostname: m,
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                }),
                  f.default.copy(e);
              },
            },
            "copy-native-link"
          ),
          (0, n.jsx)(
            a.MenuItem,
            {
              id: "open-native-link",
              label: M.default.Messages.OPEN_LINK,
              action: e => N(e),
            },
            "open-native-link"
          ),
        ];
      }
    },
    667358: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var n = s("37983"),
        a = s("884691"),
        l = s("627445"),
        i = s.n(l),
        d = s("77078"),
        r = s("599110"),
        u = s("773336"),
        o = s("49111"),
        c = s("782340");
      function f(e) {
        let t = a.useCallback(() => {
          i(null != e, "text cannot be null"),
            r.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(e)),
              "_blank"
            );
        }, [e]);
        return u.isPlatformEmbedded &&
          null != e &&
          (null == e ? void 0 : e.length) !== 0
          ? [
              (0, n.jsx)(
                d.MenuItem,
                {
                  id: "search-google",
                  label: c.default.Messages.SEARCH_WITH_GOOGLE,
                  action: t,
                },
                "search-google"
              ),
            ]
          : null;
      }
    },
    508229: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s("843762");
      var n = s("917351"),
        a = s.n(n),
        l = s("446674"),
        i = s("913144"),
        d = s("447435"),
        r = s("692038"),
        u = s("915639"),
        o = s("42203"),
        c = s("26989"),
        f = s("305961"),
        E = s("377253"),
        g = s("27618"),
        M = s("697218");
      let _ = {};
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = o.default.getChannel(e),
          l = null != a ? a.getGuildId() : null;
        return {
          id: e,
          messages: t.map(e => (0, r.createMessageRecord)(e)),
          guildId: l,
          loaded: s,
          loading: n,
        };
      }
      function m(e) {
        let { channel: t } = e;
        delete _[t.id];
      }
      function N() {
        a.forEach(_, e => {
          e.messages = e.messages.map(e =>
            e.set("blocked", g.default.isBlocked(e.author.id))
          );
        });
      }
      class S extends l.default.Store {
        initialize() {
          this.waitFor(
            o.default,
            f.default,
            c.default,
            E.default,
            M.default,
            u.default
          );
        }
        getPinnedMessages(e) {
          var t;
          return null !== (t = _[e]) && void 0 !== t ? t : void 0;
        }
        loaded(e) {
          return null != _[e] && _[e].loaded;
        }
      }
      S.displayName = "ChannelPinsStore";
      var A = new S(i.default, {
        CONNECTION_OPEN: function () {
          _ = {};
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          _ = a(_)
            .filter(e => e.guildId !== t.id)
            .keyBy("id")
            .value();
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.id,
            s = e.message.channel_id;
          if (null == s) return !1;
          let n = _[s];
          if (null == n && !e.message.pinned) return !1;
          if (null == e.message.author) {
            if (null != n) {
              let l = a.findIndex(n.messages, e => e.id === t);
              if (l >= 0) {
                let t = n.messages[l],
                  a = (0, r.updateMessageRecord)(t, e.message);
                if (a !== t) {
                  let e = n.messages.slice();
                  (e[l] = a), (_[s].messages = e);
                }
              }
            }
            return;
          }
          if (e.message.pinned) {
            if (null == n) {
              (n = h(s, [e.message], !1)), (_[s] = n);
              return;
            }
            n.messages = n.messages.slice();
            let l = a.findIndex(n.messages, e => e.id === t);
            -1 === l
              ? n.messages.unshift((0, r.createMessageRecord)(e.message))
              : (n.messages[l] = (0, r.updateMessageRecord)(
                  n.messages[l],
                  e.message
                )),
              (_[s] = n);
          } else {
            if (null == n) return;
            let e = a.findIndex(n.messages, e => e.id === t);
            if (-1 === e) return;
            (n.messages = n.messages.slice()),
              n.messages.splice(e, 1),
              (_[s] = n);
          }
        },
        MESSAGE_DELETE: function (e) {
          let { id: t, channelId: s } = e,
            n = _[s];
          if (null == n) return !1;
          let l = a.remove(n.messages, e => e.id === t);
          if (0 === l.length) return !1;
          (n.messages = n.messages.slice()), (_[s] = n);
        },
        MESSAGE_DELETE_BULK: function (e) {
          let { ids: t, channelId: s } = e,
            n = _[s];
          null != n &&
            (n.messages = n.messages.filter(e => -1 === t.indexOf(e.id)));
        },
        LOAD_PINNED_MESSAGES: function (e) {
          let { channelId: t } = e;
          _[t] = h(t, [], !1, !0);
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { channelId: t, messages: s } = e;
          _[t] = h(t, s, !0);
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
          let { channelId: t } = e;
          delete _[t];
        },
        CHANNEL_DELETE: m,
        THREAD_DELETE: m,
        RELATIONSHIP_ADD: N,
        RELATIONSHIP_REMOVE: N,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
          let { messageId: t, channelId: s } = e,
            n = _[s];
          if (null == n) return;
          let l = a.findIndex(n.messages, e => e.id === t);
          -1 !== l &&
            ((n.messages = n.messages.slice()),
            (n.messages[l] = (0, d.handleExplicitMediaScanTimeoutForMessage)(
              n.messages[l]
            )),
            (_[s] = n));
        },
      });
    },
    993477: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("469563"),
        l = s("601248"),
        i = s("75196"),
        d = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: a = "currentColor",
              foreground: l,
              ...d
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, i.default)(d),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: l,
                fill: a,
                d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z",
              }),
            });
          },
          l.ChatMarkUnreadIcon,
          void 0,
          { size: 24 }
        );
    },
    870190: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          canReportMessage: function () {
            return r;
          },
          canDeleteAndReportMessage: function () {
            return u;
          },
        });
      var n = s("42203"),
        a = s("525065"),
        l = s("957255"),
        i = s("697218"),
        d = s("49111");
      function r(e) {
        return (
          null != e &&
          (function (e) {
            if (null == e) return !1;
            let t = e.id,
              s = i.default.getCurrentUser();
            return null != s && s.id !== t && !0 !== e.system && !0;
          })(e.author)
        );
      }
      function u(e) {
        return (
          null != e &&
          r(e) &&
          (function (e) {
            let t = n.default.getChannel(e);
            if (null == t) return !1;
            if (
              t.type === d.ChannelTypes.DM ||
              t.type === d.ChannelTypes.GROUP_DM
            )
              return !0;
            if (
              l.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
                channelId: e,
              })
            ) {
              let e = a.default.getMemberCount(t.getGuildId());
              return null != e && e >= 50;
            }
            return !1;
          })(e.getChannelId())
        );
      }
    },
    169276: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ChatMarkUnreadIcon: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("669491"),
        l = s("82169");
      let i = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "M12.93 21.96c.25-.03.43-.23.47-.47a3 3 0 0 1 .08-.35.66.66 0 0 0-.24-.71A3 3 0 0 1 12 18v-3a3 3 0 0 1 4.35-2.68c.14.07.3.09.44.04a7 7 0 0 1 4.58.05c.3.1.63-.1.63-.41a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.32 0 .63-.01.93-.04Z",
              fill: "string" == typeof i ? i : i.css,
              className: d,
            }),
            (0, n.jsx)("path", {
              d: "M18 17h-1.24a3 3 0 1 1 .26 4.25 1 1 0 1 0-1.33 1.5A4.98 4.98 0 0 0 24 19a5 5 0 0 0-8-4 1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2Z",
              fill: "string" == typeof i ? i : i.css,
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=5d5de717e4a99fc9d45b.js.map
