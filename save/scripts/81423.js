(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81423"],
  {
    102457: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CALL_ACCEPT: function () {
            return l;
          },
          CALL_START: function () {
            return a;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (
              i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_ACCEPT)
            )
              return (
                i.ComponentDispatch.dispatch(o.ComponentActions.CALL_ACCEPT), !1
              );
          },
        },
        a = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (
              i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_START)
            )
              return (
                i.ComponentDispatch.dispatch(o.ComponentActions.CALL_START, e),
                !1
              );
          },
        };
    },
    55562: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CHANNEL_NEXT: function () {
            return r;
          },
          CHANNEL_PREV: function () {
            return _;
          },
          TOGGLE_PREVIOUS_GUILD: function () {
            return A;
          },
          NAVIGATE_BACK: function () {
            return c;
          },
          NAVIGATE_FORWARD: function () {
            return C;
          },
        });
      var i = n("473532"),
        o = n("722525"),
        l = n("393414"),
        a = n("239380"),
        d = n("18494"),
        u = n("162771"),
        s = n("773336"),
        E = n("49111");
      let r = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.default)(), !1),
        },
        _ = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.default)(-1), !1),
        },
        A = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let e;
            let t = u.default.getGuildId();
            if (null != t) e = E.ME;
            else {
              let t = u.default.getLastSelectedGuildId();
              null != t &&
                ((e = t),
                (0, o.transitionToChannel)(t, d.default.getChannelId(t)));
            }
            return null != e && (0, a.transitionToGuild)(e), !1;
          },
        },
        c = {
          binds: (0, s.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.back)(), !1),
        },
        C = {
          binds: (0, s.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.forward)(), !1),
        };
    },
    863536: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_DM_GROUP: function () {
            return d;
          },
        });
      var i = n("722525"),
        o = n("162771"),
        l = n("659500"),
        a = n("49111");
      let d = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != o.default.getGuildId() && (0, i.transitionToChannel)(a.ME),
          l.ComponentDispatch.safeDispatch(a.ComponentActions.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    786720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD: function () {
            return a;
          },
        });
      var i = n("77078"),
        o = n("616265"),
        l = n("243338");
      let a = {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
          (0, i.hasModalOpen)(l.CREATE_GUILD_MODAL_KEY)
            ? o.default.updateCreateGuildModal({
                slide: l.CreateGuildSlideTypes.JOIN_GUILD,
                location: "Keyboard Shortcut",
              })
            : o.default.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
      };
    },
    211314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BROWSER_DEVTOOLS: function () {
            return o;
          },
        });
      var i = n("773336");
      let o = {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
          if ((0, i.isWeb)() && "discord.com" === location.host)
            return e.preventDefault(), e.stopPropagation(), !1;
        },
      };
    },
    218143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FOCUS_SEARCH: function () {
            return l;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(),
            e.stopPropagation(),
            i.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_SEARCH, {
              prefillCurrentChannel: !0,
            });
        },
      };
    },
    586819: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          JUMP_TO_CURRENT_CALL: function () {
            return a;
          },
        });
      var i = n("722525"),
        o = n("945956"),
        l = n("49111");
      let a = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(), e.stopPropagation();
          let t = o.default.getGuildId(),
            n = o.default.getChannelId();
          return (
            null != n && (0, i.transitionToChannel)(null != t ? t : l.ME, n), !1
          );
        },
      };
    },
    798232: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MARK_CHANNEL_READ: function () {
            return b;
          },
        });
      var i = n("118810"),
        o = n("255397"),
        l = n("819689"),
        a = n("267363"),
        d = n("244201"),
        u = n("191145"),
        s = n("529805"),
        E = n("685841"),
        r = n("208021"),
        _ = n("582713"),
        A = n("328511"),
        c = n("467094"),
        C = n("982108"),
        T = n("42203"),
        S = n("474643"),
        I = n("836417"),
        f = n("377253"),
        N = n("660478"),
        O = n("18494"),
        L = n("162771"),
        D = n("144747"),
        R = n("471671"),
        p = n("659500"),
        h = n("49111");
      let b = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (R.default.isElementFullScreen()) return !1;
          if (
            p.ComponentDispatch.hasSubscribers(h.ComponentActions.CALL_DECLINE)
          )
            return (
              p.ComponentDispatch.dispatch(h.ComponentActions.CALL_DECLINE), !1
            );
          if (D.default.close()) return !1;
          if (
            p.ComponentDispatch.hasSubscribers(
              h.ComponentActions.MEDIA_MODAL_CLOSE
            )
          )
            return (
              p.ComponentDispatch.dispatch(
                h.ComponentActions.MEDIA_MODAL_CLOSE
              ),
              !1
            );
          if ((0, i.isElement)(e.target)) {
            let t = (0, d.getWindowDispatchForElement)(e.target);
            if (
              null == t
                ? void 0
                : t.hasSubscribers(h.ComponentActions.POPOUT_CLOSE)
            )
              return t.dispatch(h.ComponentActions.POPOUT_CLOSE), !1;
          }
          if (
            p.ComponentDispatch.hasSubscribers(
              h.ComponentActions.CLOSE_GIF_PICKER
            )
          )
            return (
              p.ComponentDispatch.dispatch(h.ComponentActions.CLOSE_GIF_PICKER),
              !1
            );
          if (
            p.ComponentDispatch.hasSubscribers(h.ComponentActions.MODAL_CLOSE)
          )
            return (
              p.ComponentDispatch.dispatch(h.ComponentActions.MODAL_CLOSE), !1
            );
          if (
            p.ComponentDispatch.hasSubscribers(
              h.ComponentActions.SEARCH_RESULTS_CLOSE
            )
          )
            return (
              p.ComponentDispatch.dispatch(
                h.ComponentActions.SEARCH_RESULTS_CLOSE
              ),
              !1
            );
          let t = L.default.getGuildId(),
            n = O.default.getChannelId(t),
            l = T.default.getChannel(n),
            a = C.default.getSection(n, null == l ? void 0 : l.isDM()),
            s =
              a === h.ChannelSections.SIDEBAR_CHAT
                ? C.default.getSidebarState(n)
                : null,
            E =
              (null == s ? void 0 : s.type) === _.SidebarType.VIEW_THREAD ||
              (null == s ? void 0 : s.type) === _.SidebarType.VIEW_CHANNEL
                ? s.channelId
                : null;
          if (!1 === G(n) || !1 === G(E)) return !1;
          if (
            null != n &&
            (null == s ? void 0 : s.type) === _.SidebarType.CREATE_THREAD
          )
            return r.default.closeChannelSidebar(n), !1;
          let A = g(n),
            c = g(E);
          return null == n || A || c || null == s
            ? null != n && !A && u.default.getChatOpen(n)
              ? (o.default.updateChatOpen(n, !1), !1)
              : (p.ComponentDispatch.dispatch(
                  h.ComponentActions.SCROLLTO_PRESENT
                ),
                !1)
            : (r.default.closeChannelSidebar(n), !1);
        },
      };
      function G(e) {
        if (null != e) {
          if (I.default.isEditingAny(e)) return l.default.endEditMessage(e), !1;
          if (null != E.default.getPendingReply(e))
            return (0, s.deletePendingReply)(e), !1;
          if (
            null != A.default.getStickerPreview(e, S.DraftType.ChannelMessage)
          )
            return (
              (0, c.clearStickerPreview)(e, S.DraftType.ChannelMessage), !1
            );
        }
      }
      function g(e) {
        if (null == e) return !1;
        let t = !1,
          n = f.default.getMessages(e);
        return (
          n.hasMoreAfter &&
            (l.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), (t = !0)),
          N.default.hasUnread(e) && ((0, a.ack)(e), (t = !0)),
          (0, a.localAck)(e),
          t
        );
      }
    },
    278412: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MARK_SERVER_READ: function () {
            return r;
          },
        });
      var i = n("819689"),
        o = n("542827"),
        l = n("952451"),
        a = n("377253"),
        d = n("18494"),
        u = n("162771"),
        s = n("659500"),
        E = n("49111");
      let r = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = u.default.getGuildId();
          if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, o.default)([e]);
          let t = d.default.getChannelId(e);
          if (null == t) return;
          let n = a.default.getMessages(t);
          n.hasMoreAfter
            ? i.default.jumpToPresent(t, E.MAX_MESSAGES_PER_CHANNEL)
            : s.ComponentDispatch.dispatch(E.ComponentActions.SCROLLTO_PRESENT);
        },
      };
    },
    222301: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          JUMP_TO_FIRST_UNREAD: function () {
            return a;
          },
        });
      var i = n("819689"),
        o = n("660478"),
        l = n("18494");
      let a = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = l.default.getChannelId();
          if (null != e) {
            let t = o.default.ackMessageId(e);
            null != t &&
              o.default.getOldestUnreadTimestamp(e) > 0 &&
              i.default.jumpToMessage({
                channelId: e,
                messageId: t,
                offset: 1,
                context: "Keyboard Shortcut",
              });
          }
          return !1;
        },
      };
    },
    903376: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OPEN_APP_DIRECTORY: function () {
            return a;
          },
        });
      var i = n("412707"),
        o = n("646186"),
        l = n("162771");
      let a = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          let t =
            null !== (e = l.default.getGuildId()) && void 0 !== e ? e : void 0;
          (0, o.goToAppDirectory)({
            guildId: t,
            entrypoint: {
              name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT,
            },
          });
        },
      };
    },
    242149: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QUICKSWITCHER_SHOW: function () {
            return l;
          },
        });
      var i = n("104589"),
        o = n("778588");
      let l = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!o.default.hasLayers() && (0, i.show)(), !1),
      };
    },
    714208: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RETURN_TO_AUDIO_CHANNEL: function () {
            return u;
          },
        });
      var i = n("406189"),
        o = n("722525"),
        l = n("945956"),
        a = n("18494"),
        d = n("49111");
      let u = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!l.default.isConnected()) return !1;
          let t =
              null !== (e = l.default.getGuildId()) && void 0 !== e ? e : d.ME,
            n = a.default.getChannelId(t);
          return (
            (0, o.transitionToChannel)(t, n),
            i.default.channelListScrollTo(t, l.default.getChannelId()),
            !1
          );
        },
      };
    },
    24312: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SCROLL_UP: function () {
            return l;
          },
          SCROLL_DOWN: function () {
            return a;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatchToLastSubscribed(
              o.ComponentActions.SCROLL_PAGE_UP
            ),
            !1
          ),
        },
        a = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatchToLastSubscribed(
              o.ComponentActions.SCROLL_PAGE_DOWN
            ),
            !1
          ),
        };
    },
    30269: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SEARCH_EMOJIS: function () {
            return d;
          },
        });
      var i = n("558986"),
        o = n("659500"),
        l = n("49111"),
        a = n("958706");
      let d = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.initiateEmojiInteraction)(
            a.EmojiInteractionPoint.SearchEmojiKeybindPressed
          ),
          o.ComponentDispatch.dispatchToLastSubscribed(
            l.ComponentActions.TOGGLE_EMOJI_POPOUT
          ),
          !1
        ),
      };
    },
    709079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SEARCH_GIFS: function () {
            return l;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatchToLastSubscribed(
            o.ComponentActions.TOGGLE_GIF_PICKER
          ),
          !1
        ),
      };
    },
    616903: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SEARCH_STICKERS: function () {
            return l;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatchToLastSubscribed(
            o.ComponentActions.TOGGLE_STICKER_PICKER
          ),
          !1
        ),
      };
    },
    271524: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SERVER_NEXT: function () {
            return o;
          },
          SERVER_PREV: function () {
            return l;
          },
        });
      var i = n("903147");
      let o = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: e => (
            e.preventDefault(), e.stopPropagation(), (0, i.default)(), !1
          ),
        },
        l = {
          binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
          comboKeysBindGlobal: !0,
          action: e => (
            e.preventDefault(), e.stopPropagation(), (0, i.default)(-1), !1
          ),
        };
    },
    333949: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUBMIT: function () {
            return a;
          },
        });
      var i = n("206230"),
        o = n("659500"),
        l = n("49111");
      let a = {
        binds: ["return"],
        action() {
          if (
            !i.default.keyboardModeEnabled &&
            o.ComponentDispatch.hasSubscribers(l.ComponentActions.MODAL_SUBMIT)
          )
            return (
              o.ComponentDispatch.dispatch(l.ComponentActions.MODAL_SUBMIT), !1
            );
        },
      };
    },
    945924: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TEXTAREA_FOCUS: function () {
            return T;
          },
        }),
        n("222007");
      var i = n("965955"),
        o = n("206230"),
        l = n("778588"),
        a = n("42887"),
        d = n("945956"),
        u = n("659500"),
        s = n("791776"),
        E = n("13798"),
        r = n("49111");
      let _ = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        A = new Set([
          "Alt",
          "AltGraph",
          "CapsLock",
          "Control",
          "Fn",
          "FnLock",
          "Hyper",
          "Meta",
          "NumLock",
          "OS",
          "ScrollLock",
          "Shift",
          "Super",
          "Symbol",
          "SymbolLock",
        ]),
        c = new Set([
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
          "F13",
          "F14",
          "F15",
          "F16",
          "F17",
          "F18",
          "F19",
          "F20",
          "Accept",
          "ContextMenu",
          "Find",
          "ZoomIn",
          "ZoomOut",
        ]),
        C = new Set([
          "ChannelDown",
          "ChannelUp",
          "MediaFastForward",
          "MediaPause",
          "MediaPlay",
          "MediaPlayPause",
          "MediaRecord",
          "MediaRewind",
          "MediaStop",
          "MediaTrackNext",
          "MediaTrackPrevious",
          "AudioBalanceLeft",
          "AudioBalanceRight",
          "AudioBassDown",
          "AudioBassBoostDown",
          "AudioBassBoostToggle",
          "AudioBassBoostUp",
          "AudioBassUp",
          "AudioFaderFront",
          "AudioFaderReader",
          "AudioSurroundModeNext",
          "AudioTrebleDown",
          "AudioTreblUp",
          "AudioVolumeDown",
          "AudioVolumeMute",
          "AudioVolumeUp",
          "VolumeUp",
          "VolumeDown",
          "VolumeMute",
        ]),
        T = {
          binds: ["any-character"],
          keydown(e, t) {
            var n;
            let T =
              null === (n = (0, s.eventOwnerDocument)(e)) || void 0 === n
                ? void 0
                : n.activeElement;
            if (
              (0, s.isInputLikeElement)(T) ||
              i.LOCK_STACK.isActive() ||
              A.has(t) ||
              c.has(t) ||
              C.has(t)
            )
              return !1;
            let S = null != T && "BODY" === T.tagName;
            return (
              !(
                (o.default.keyboardModeEnabled &&
                  !S &&
                  !/^[a-zA-Z0-9]$/.test(t)) ||
                u.ComponentDispatch.hasSubscribers(
                  r.ComponentActions.MODAL_CLOSE
                ) ||
                l.default.hasLayers()
              ) &&
              ("Tab" === t &&
              u.ComponentDispatch.hasSubscribers(
                r.ComponentActions.TEXTAREA_FOCUS
              ) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (e.preventDefault(),
                  u.ComponentDispatch.dispatch(
                    r.ComponentActions.TEXTAREA_FOCUS
                  ),
                  !1)
                : !(
                    d.default.isConnected() &&
                    a.default.getMode() === r.InputModes.PUSH_TO_TALK &&
                    !a.default.isSelfMute() &&
                    Object.values(a.default.getShortcuts())
                      .map(E.toBrowserEvents)
                      .some(t => t.map(e => e.keyCode).includes(e.keyCode))
                  ) &&
                  void (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !_.has(t) &&
                    u.ComponentDispatch.dispatchToLastSubscribed(
                      r.ComponentActions.TEXTAREA_FOCUS
                    )
                  ))
            );
          },
        };
    },
    648900: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_MUTE: function () {
            return o;
          },
          TOGGLE_DEAFEN: function () {
            return l;
          },
        });
      var i = n("629109");
      let o = {
          binds: ["mod+shift+m"],
          comboKeysBindGlobal: !0,
          action: () => (i.default.toggleSelfMute({ usedKeybind: !0 }), !1),
        },
        l = {
          binds: ["mod+shift+d"],
          comboKeysBindGlobal: !0,
          action: () => (i.default.toggleSelfDeaf(), !1),
        };
    },
    838021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_CATEGORY_COLLAPSED: function () {
            return u;
          },
        });
      var i = n("820542"),
        o = n("870691"),
        l = n("923959"),
        a = n("162771"),
        d = n("49111");
      let u = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = a.default.getGuildId();
          if (null == e) return !1;
          let t = l.default
            .getChannels(e)
            [d.ChannelTypes.GUILD_CATEGORY].some(e => {
              let { channel: t } = e;
              return "null" !== t.id && !o.default.isCollapsed(t.id);
            });
          return (
            t ? (0, i.categoryCollapseAll)(e) : (0, i.categoryExpandAll)(e), !1
          );
        },
      };
    },
    745991: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_CHANNEL_PINS: function () {
            return l;
          },
        });
      var i = n("659500"),
        o = n("49111");
      let l = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatch(o.ComponentActions.TOGGLE_CHANNEL_PINS),
          !1
        ),
      };
    },
    640968: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_HELP: function () {
            return o;
          },
        });
      var i = n("701909");
      let o = {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(i.SUPPORT_LOCATION), !1),
      };
    },
    347445: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_HOTKEYS: function () {
            return a;
          },
        });
      var i = n("77078"),
        o = n("244030"),
        l = n("386867");
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.hasModalOpen)(l.KEYBOARD_SHORTCUT_MODAL_KEY)
            ? o.hide()
            : o.show(),
          !1
        ),
      };
    },
    992642: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_INBOX_UNREADS_TAB: function () {
            return d;
          },
          MARK_TOP_INBOX_CHANNEL_READ: function () {
            return u;
          },
        });
      var i = n("917351"),
        o = n.n(i),
        l = n("659500"),
        a = n("49111");
      let d = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.ComponentDispatch.dispatch(
              a.ComponentActions.TOGGLE_INBOX_UNREADS_TAB
            ),
            !1
          ),
        },
        u = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: o.debounce(
            () => {
              if (
                l.ComponentDispatch.hasSubscribers(
                  a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ
                )
              )
                return (
                  l.ComponentDispatch.dispatch(
                    a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ
                  ),
                  !1
                );
            },
            100,
            { leading: !0 }
          ),
        };
    },
    200431: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_USERS: function () {
            return c;
          },
        });
      var i = n("298386"),
        o = n("255397"),
        l = n("289867"),
        a = n("191145"),
        d = n("217513"),
        u = n("893980"),
        s = n("982108"),
        E = n("42203"),
        r = n("18494"),
        _ = n("162771"),
        A = n("49111");
      let c = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = _.default.getGuildId(),
            t = r.default.getChannelId(e),
            n = E.default.getChannel(t);
          if (null != t && null != n && n.type === i.ChannelTypes.GUILD_VOICE)
            return o.default.updateChatOpen(t, !a.default.getChatOpen(t)), !1;
          if (null != t && null != n && n.type === i.ChannelTypes.DM) {
            let e = s.default.getSection(t, null == n ? void 0 : n.isDM()),
              i = (0, d.getDisplayProfile)(n.getRecipientId()),
              o = e === A.ChannelSections.PROFILE;
            return (
              (0, u.trackProfilePanelToggled)(i, !o),
              l.default.toggleProfilePanelSection(),
              !1
            );
          }
          return l.default.toggleMembersSection(), !1;
        },
      };
    },
    493334: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UNREAD_NEXT: function () {
            return c;
          },
          UNREAD_PREV: function () {
            return C;
          },
          MENTION_NEXT: function () {
            return S;
          },
          MENTION_PREV: function () {
            return I;
          },
        });
      var i = n("592864"),
        o = n("615387"),
        l = n("393027"),
        a = n("233069"),
        d = n("42203"),
        u = n("660478"),
        s = n("282109"),
        E = n("49111"),
        r = n("133335");
      let _ = (e, t) => {
          let n = d.default.getChannel(t);
          return (
            null != n &&
            ((0, a.isPrivate)(n.type)
              ? !!u.default.getMentionCount(t)
              : (!s.default.isChannelMuted(e, t) ||
                  u.default.getMentionCount(t) > 0) &&
                (0, o.getHasImportantUnread)(n))
          );
        },
        A = (e, t) => {
          if (t === r.ReadStateTypes.GUILD_EVENT)
            return (
              !s.default.isMuteScheduledEventsEnabled(e) &&
              u.default.hasUnread(e, t)
            );
          return u.default.hasUnread(e, t);
        },
        c = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let t =
              null !== (e = l.default.getState().guildId) && void 0 !== e
                ? e
                : E.ME;
            return (
              (0, i.default)(1, {
                channelPredicate: _,
                guildPredicate: e => e === t || !s.default.isMuted(e),
                guildFeaturePredicate: A,
              }),
              !1
            );
          },
        },
        C = {
          binds: ["alt+shift+up"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let t =
              null !== (e = l.default.getState().guildId) && void 0 !== e
                ? e
                : E.ME;
            return (
              (0, i.default)(-1, {
                channelPredicate: _,
                guildPredicate: e => e === t || !s.default.isMuted(e),
                guildFeaturePredicate: A,
              }),
              !1
            );
          },
        },
        T = (e, t) => u.default.getMentionCount(t) > 0,
        S = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.default)(1, { channelPredicate: T, withVoiceChannels: !0 }),
            !1
          ),
        },
        I = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.default)(-1, { channelPredicate: T, withVoiceChannels: !0 }),
            !1
          ),
        };
    },
    809392: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UPLOAD_FILE: function () {
            return d;
          },
        });
      var i = n("42203"),
        o = n("18494"),
        l = n("659500"),
        a = n("49111");
      let d = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = i.default.getChannel(o.default.getChannelId());
          return (
            null != e &&
              !e.isManaged() &&
              l.ComponentDispatch.dispatch(a.ComponentActions.UPLOAD_FILE),
            !1
          );
        },
      };
    },
    202035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ZOOM_IN: function () {
            return d;
          },
          ZOOM_OUT: function () {
            return u;
          },
          ZOOM_RESET: function () {
            return s;
          },
          default: function () {
            return E;
          },
        });
      var i = n("180748"),
        o = n("206230"),
        l = n("49111");
      function a(e) {
        return l.Accessibility.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              l.Accessibility.ZOOM_SCALES.indexOf(o.default.zoom) + e,
              l.Accessibility.ZOOM_SCALES.length - 1
            )
          )
        ];
      }
      let d = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(a(1)), !1),
        },
        u = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(a(-1)), !1),
        },
        s = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(l.Accessibility.ZOOM_DEFAULT), !1),
        };
      var E = { ZOOM_IN: d, ZOOM_OUT: u, ZOOM_RESET: s };
    },
    493765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KeybindGroup: function () {
            return i;
          },
          getNameForKeybindGroup: function () {
            return V;
          },
          getDescriptionForKeybindGroup: function () {
            return F;
          },
          DEFAULT_LAYOUT: function () {
            return Y;
          },
          getDefaultLayoutContent: function () {
            return w;
          },
          default: function () {
            return W;
          },
        }),
        n("70102");
      var i,
        o,
        l = n("102457"),
        a = n("55562"),
        d = n("863536"),
        u = n("786720"),
        s = n("211314"),
        E = n("218143"),
        r = n("586819"),
        _ = n("953260"),
        A = n("798232"),
        c = n("278412"),
        C = n("222301"),
        T = n("903376"),
        S = n("242149"),
        I = n("714208"),
        f = n("24312"),
        N = n("30269"),
        O = n("709079"),
        L = n("616903"),
        D = n("271524"),
        R = n("333949"),
        p = n("945924"),
        h = n("648900"),
        b = n("838021"),
        G = n("745991"),
        g = n("640968"),
        M = n("347445"),
        P = n("992642"),
        U = n("200431"),
        m = n("493334"),
        y = n("809392"),
        K = n("202035"),
        H = n("49111"),
        B = n("782340");
      function V(e) {
        switch (e) {
          case "NAVIGATION":
            return B.default.Messages
              .USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
          case "VOICE_AND_VIDEO":
            return B.default.Messages
              .USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
          case "CHAT":
            return B.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
          case "MISCELLANEOUS":
            return B.default.Messages
              .USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
          case "MESSAGE":
            return B.default.Messages
              .USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
          case "DND":
            return B.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
        }
      }
      function F(e) {
        switch (e) {
          case "MESSAGE":
            return B.default.Messages
              .USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
          case "DND":
            return B.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
          default:
            return null;
        }
      }
      function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map(e => {
          let t = Y[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      ((o = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (o.CHAT = "CHAT"),
        (o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (o.MISCELLANEOUS = "MISCELLANEOUS"),
        (o.MESSAGE = "MESSAGE"),
        (o.DND = "DND");
      let Y = {
        [H.KeybindActions.SERVER_NEXT]: D.SERVER_NEXT,
        [H.KeybindActions.SERVER_PREV]: D.SERVER_PREV,
        [H.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
        [H.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
        [H.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
        [H.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
        [H.KeybindActions.UNREAD_NEXT]: m.UNREAD_NEXT,
        [H.KeybindActions.UNREAD_PREV]: m.UNREAD_PREV,
        [H.KeybindActions.MENTION_CHANNEL_NEXT]: m.MENTION_NEXT,
        [H.KeybindActions.MENTION_CHANNEL_PREV]: m.MENTION_PREV,
        [H.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
        [H.KeybindActions.JUMP_TO_GUILD]: _.JUMP_TO_GUILD,
        [H.KeybindActions.SUBMIT]: R.SUBMIT,
        [H.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
        [H.KeybindActions.MARK_CHANNEL_READ]: A.MARK_CHANNEL_READ,
        [H.KeybindActions.MARK_SERVER_READ]: c.MARK_SERVER_READ,
        [H.KeybindActions.TOGGLE_CHANNEL_PINS]: G.TOGGLE_CHANNEL_PINS,
        [H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: P.TOGGLE_INBOX_UNREADS_TAB,
        [H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]:
          P.MARK_TOP_INBOX_CHANNEL_READ,
        [H.KeybindActions.TOGGLE_USERS]: U.TOGGLE_USERS,
        [H.KeybindActions.TOGGLE_HELP]: g.TOGGLE_HELP,
        [H.KeybindActions.TOGGLE_MUTE]: h.TOGGLE_MUTE,
        [H.KeybindActions.TOGGLE_DEAFEN]: h.TOGGLE_DEAFEN,
        [H.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]:
          b.TOGGLE_CATEGORY_COLLAPSED,
        [H.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
        [H.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
        [H.KeybindActions.QUICKSWITCHER_SHOW]: S.QUICKSWITCHER_SHOW,
        [H.KeybindActions.CREATE_DM_GROUP]: d.CREATE_DM_GROUP,
        [H.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
        [H.KeybindActions.SEARCH_GIFS]: O.SEARCH_GIFS,
        [H.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
        [H.KeybindActions.TOGGLE_HOTKEYS]: M.TOGGLE_HOTKEYS,
        [H.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
        [H.KeybindActions.CREATE_GUILD]: u.CREATE_GUILD,
        [H.KeybindActions.UPLOAD_FILE]: y.UPLOAD_FILE,
        [H.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
        [H.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
        [H.KeybindActions.CALL_START]: l.CALL_START,
        [H.KeybindActions.FOCUS_SEARCH]: E.FOCUS_SEARCH,
        [H.KeybindActions.JUMP_TO_CURRENT_CALL]: r.JUMP_TO_CURRENT_CALL,
        [H.KeybindActions.ZOOM_IN]: K.ZOOM_IN,
        [H.KeybindActions.ZOOM_OUT]: K.ZOOM_OUT,
        [H.KeybindActions.ZOOM_RESET]: K.ZOOM_RESET,
        [H.KeybindActions.OPEN_APP_DIRECTORY]: T.OPEN_APP_DIRECTORY,
        [H.KeybindActions.BROWSER_DEVTOOLS]: s.BROWSER_DEVTOOLS,
      };
      function w() {
        return [
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: v(
              H.KeybindActions.SERVER_PREV,
              H.KeybindActions.SERVER_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: v(
              H.KeybindActions.CHANNEL_PREV,
              H.KeybindActions.CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: v(
              H.KeybindActions.NAVIGATE_BACK,
              H.KeybindActions.NAVIGATE_FORWARD
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: v(
              H.KeybindActions.UNREAD_PREV,
              H.KeybindActions.UNREAD_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: v(
              H.KeybindActions.MENTION_CHANNEL_PREV,
              H.KeybindActions.MENTION_CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: v(H.KeybindActions.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: v(H.KeybindActions.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: v(H.KeybindActions.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: v(H.KeybindActions.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0,
          },
          {
            description: B.default.Messages.DND_OPERATION_LABEL_START,
            binds: ["mod+d"],
            group: "DND",
          },
          {
            description: B.default.Messages.DND_OPERATION_LABEL_MOVE,
            binds: ["up", "down"],
            group: "DND",
          },
          {
            description: B.default.Messages.DND_OPERATION_LABEL_DROP,
            binds: ["spacebar", "enter"],
            group: "DND",
          },
          {
            description: B.default.Messages.DND_OPERATION_LABEL_CANCEL,
            binds: ["esc"],
            group: "DND",
            groupEnd: !0,
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: v(H.KeybindActions.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: v(H.KeybindActions.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: v(H.KeybindActions.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: v(H.KeybindActions.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: v(H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: v(H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: v(H.KeybindActions.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: v(H.KeybindActions.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: v(H.KeybindActions.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: v(H.KeybindActions.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: v(H.KeybindActions.SCROLL_UP, H.KeybindActions.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: v(H.KeybindActions.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: v(H.KeybindActions.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: v(H.KeybindActions.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: v(H.KeybindActions.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: v(H.KeybindActions.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: v(H.KeybindActions.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: v(H.KeybindActions.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: v(H.KeybindActions.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: v(H.KeybindActions.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: v(H.KeybindActions.FOCUS_SEARCH),
            group: "MISCELLANEOUS",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0,
          },
          {
            description: B.default.Messages.EDIT_MESSAGE,
            binds: ["e"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.DELETE_MESSAGE,
            binds: ["backspace"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.PIN_MESSAGE,
            binds: ["p"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.ADD_REACTION,
            binds: ["plus"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.MESSAGE_ACTION_REPLY,
            binds: ["r"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.COPY_TEXT,
            binds: ["mod+c"],
            group: "MESSAGE",
          },
          {
            description: B.default.Messages.MARK_UNREAD,
            binds: ["alt+enter"],
            group: "MESSAGE",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0,
          },
        ];
      }
      var W = Y;
    },
    473532: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007"),
        n("843762");
      var i = n("6587"),
        o = n("677315"),
        l = n("290886"),
        a = n("288518"),
        d = n("486503"),
        u = n("393027"),
        s = n("845579"),
        E = n("686470"),
        r = n("791823"),
        _ = n("287850"),
        A = n("449008"),
        c = n("722525"),
        C = n("49111"),
        T = n("724210");
      let S = () => {
        let e =
          a.default.getMessageRequestsCount() > 0 ||
          d.default.getSpamChannelsCount() > 0;
        return [
          C.Routes.FRIENDS,
          E.default.hasLibraryApplication() && !s.DisableGamesTab.getSetting()
            ? C.Routes.APPLICATION_LIBRARY
            : null,
          C.Routes.APPLICATION_STORE,
          e ? C.Routes.MESSAGE_REQUESTS : null,
          C.Routes.COLLECTIBLES_SHOP,
          s.FamilyCenterEnabled.getSetting() ? C.Routes.FAMILY_CENTER : null,
        ].filter(A.isNotNullish);
      };
      function I(e, t) {
        (0, c.transitionToChannel)(e, t);
      }
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = u.default.getState().guildId;
        null == t
          ? !(function (e) {
              var t;
              let { channelId: n, path: i, basePath: o } = u.default.getState(),
                l = _.default.getPrivateChannelIds(),
                a = __OVERLAY__ ? l : [...S(), ...l];
              let d =
                  null == n
                    ? ((t = null != i ? i : o),
                      S().findIndex(e => t.startsWith(e)))
                    : null != n
                      ? a.indexOf(n)
                      : 0,
                s = d + e;
              s >= a.length ? (s = 0) : s < 0 && (s = a.length - 1);
              let E = a[s];
              S().includes(E)
                ? !(function (e) {
                    let t = r.default.getCurrentRoute();
                    e === C.Routes.APPLICATION_STORE && null != t
                      ? (0, c.transitionToPage)(t)
                      : (0, c.transitionToPage)(e);
                  })(E)
                : I(C.ME, E);
            })(e)
          : !(function (e, t) {
              var n, a;
              let d = u.default.getState().channelId,
                s = (0, i.default)(t).map(e => e.id);
              ((0, o.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)) &&
                s.unshift(T.StaticChannelRoute.GUILD_HOME);
              let E = null != d ? s.indexOf(d) : -1;
              let r =
                ((n = E + e), (a = s.length), n < 0 ? a - 1 : n >= a ? 0 : n);
              I(t, s[r]);
            })(e, t);
      }
    },
    903147: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n("917351"),
        o = n.n(i),
        l = n("379881"),
        a = n("15131"),
        d = n("393027"),
        u = n("42203"),
        s = n("957255"),
        E = n("18494"),
        r = n("677099"),
        _ = n("330338"),
        A = n("722525"),
        c = n("49111"),
        C = o.throttle(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = r.default.getFlattenedGuildIds(),
            n = (function (e) {
              let t = d.default.getState().guildId;
              if (null == t) return -2;
              if (t === c.FAVORITES) return -1;
              let n = e.indexOf(t);
              return -1 === n ? -2 : n;
            })(t);
          if (
            (-1 === (n += e) &&
              !(0, a.isFavoritesGuildVisible)(
                l.default,
                u.default,
                s.default
              ) &&
              (n += e),
            -3 === n && (n = t.length - 1),
            n >= t.length || -2 === n)
          ) {
            (0, A.transitionToPage)(_.default.getHomeLink());
            return;
          }
          let i = -1 === n ? c.FAVORITES : t[n],
            o = E.default.getChannelId(i);
          (0, A.transitionToChannel)(i, o === i ? null : o, !1);
        }, c.NAVIGATION_THROTTLE);
    },
    592864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var o = n("917351"),
        l = n.n(o),
        a = n("77078"),
        d = n("6587"),
        u = n("393027"),
        s = n("923959"),
        E = n("162771"),
        r = n("677099"),
        _ = n("287850"),
        A = n("659500"),
        c = n("722525"),
        C = n("49111"),
        T = n("133335");
      function S(e, t) {
        var n, i;
        return [
          { resourceId: e, type: T.ReadStateTypes.GUILD_EVENT },
          ...((n = e),
          (i = t),
          n === C.ME
            ? _.default.getPrivateChannelIds()
            : (0, d.default)(n, i).map(e => e.id)),
        ];
      }
      var I = l.throttle(function (e, t) {
        var o, l;
        let d,
          {
            channelPredicate: _ = (e, t) => !0,
            guildPredicate: T = e => !0,
            guildFeaturePredicate: I = (e, t) => !1,
            withVoiceChannels: f = !1,
          } = t,
          N =
            null !== (o = u.default.getState().guildId) && void 0 !== o
              ? o
              : C.ME,
          O = u.default.getState().channelId,
          L = (function (e, t) {
            let n = [C.ME, ...r.default.getFlattenedGuildIds()],
              i = n.indexOf(e);
            return t > 0
              ? n.slice(i).concat(n.slice(0, i), e)
              : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
          })(N, e),
          D = e > 0 ? 0 : L.length - 1,
          R = S(N, f),
          p = R.indexOf(O) + e;
        for (; null != N && "" !== N; ) {
          if (((d = R[p]), T(N)))
            for (; null != d && "" !== d; ) {
              if ("string" == typeof d) {
                if (_(N, d)) return (0, c.transitionToChannel)(N, d, !1, f);
              } else if ("object" == typeof d && I(d.resourceId, d.type))
                return (
                  N !== E.default.getGuildId() &&
                    (0, c.transitionToChannel)(
                      N,
                      null === (l = s.default.getDefaultChannel(N)) ||
                        void 0 === l
                        ? void 0
                        : l.id
                    ),
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("659707")
                      .then(n.bind(n, "659707"));
                    return t => (0, i.jsx)(e, { ...t, guildId: N });
                  })
                );
              (p += e), (d = R[p]);
            }
          if (((D += e), null == (N = L[D]) || "" === N)) break;
          (R = S(N, f)), (p = e < 0 ? R.length - 1 : 0);
        }
        A.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2,
        });
      }, C.NAVIGATION_THROTTLE);
    },
    6587: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
          useFlattenedChannelIdListWithThreads: function () {
            return A;
          },
        }),
        n("424973");
      var i = n("884691"),
        o = n("446674"),
        l = n("123561"),
        a = n("829072"),
        d = n("233069"),
        u = n("870691"),
        s = n("952451"),
        E = n("49111"),
        r = n("695838");
      function _(e, t, n) {
        let i =
          e === r.FAVORITES_RAW_GUILD_ID || e === E.FAVORITES
            ? (0, a.computeFavoritesState)()
            : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
        return c(i, t, n);
      }
      function A(e, t, n, l, a) {
        let d = (0, o.useStateFromStores)([s.default], () =>
            s.default.getGuildChangeSentinel(e)
          ),
          E = (0, o.useStateFromStores)([u.default], () => u.default.version);
        return (0, i.useMemo)(() => c(t, l, a).map(e => e.id), [t, n, d, E]);
      }
      function c(e, t, n) {
        let i = [];
        return (
          e.forEachShownChannel(e => {
            ((0, d.isGuildSelectableChannelType)(e.type) ||
              (t && (0, d.isGuildVocalChannelType)(e.type))) &&
              i.push(e);
          }, n),
          i
        );
      }
    },
    243338: function (e, t, n) {
      "use strict";
      var i, o;
      n.r(t),
        n.d(t, {
          CreateGuildSlideTypes: function () {
            return i;
          },
          CREATE_GUILD_MODAL_KEY: function () {
            return l;
          },
        }),
        ((o = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (o.CUSTOMIZE_GUILD = "customize-guild"),
        (o.CHANNEL_PROMPT = "channel-prompt"),
        (o.JOIN_GUILD = "join-guild"),
        (o.CREATION_INTENT = "creation-intent");
      let l = "create-guild";
    },
    123561: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return W;
          },
        }),
        n("222007");
      var i = n("917351"),
        o = n.n(i),
        l = n("446674"),
        a = n("913144"),
        d = n("191225"),
        u = n("203288"),
        s = n("398604"),
        E = n("401690"),
        r = n("755624"),
        _ = n("374363"),
        A = n("271938"),
        c = n("870691"),
        C = n("42203"),
        T = n("816092"),
        S = n("546463"),
        I = n("957255"),
        f = n("660478"),
        N = n("18494"),
        O = n("282109"),
        L = n("449008"),
        D = n("299039"),
        R = n("319839"),
        p = n("397336");
      let h = null,
        b = null,
        G = new R.default();
      function g() {
        let e = N.default.getChannelId(),
          t = N.default.getVoiceChannelId();
        return (h = e), (b = t), G.clear();
      }
      function M(e) {
        let {
          guild: { id: t },
        } = e;
        return G.clearGuildId(t);
      }
      function P(e) {
        let {
          channel: { guild_id: t },
        } = e;
        return G.clearGuildId(t);
      }
      function U(e) {
        let { guildId: t } = e;
        return G.clearGuildId(t);
      }
      function m(e) {
        let { channelId: t } = e;
        return G.nonPositionalChannelIdUpdate(t);
      }
      function y() {
        return null != h && G.nonPositionalChannelIdUpdate(h);
      }
      function K(e) {
        let { channel: t } = e;
        return G.nonPositionalChannelIdUpdate(t.id);
      }
      function H(e) {
        let { id: t } = e;
        return G.nonPositionalChannelIdUpdate(t);
      }
      function B() {
        let e = N.default.getChannelId(),
          t = N.default.getVoiceChannelId(),
          n = h !== e || b !== t;
        return (
          !!n &&
          (o([h, b, e, t])
            .uniq()
            .forEach(e => {
              null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
          (h = e),
          (b = t),
          !0)
        );
      }
      function V(e) {
        let { id: t } = e,
          n = C.default.getChannel(t);
        return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id);
      }
      function F(e) {
        let { guildId: t } = e;
        return G.clearGuildId(t);
      }
      function v() {
        return G.updateSubtitles();
      }
      function Y(e) {
        let { guildScheduledEvent: t } = e;
        return G.updateSubtitles(t.guild_id);
      }
      class w extends l.default.Store {
        initialize() {
          this.waitFor(
            E.default,
            A.default,
            c.default,
            C.default,
            T.default,
            d.default,
            S.default,
            u.default,
            s.default,
            r.default,
            I.default,
            f.default,
            N.default,
            O.default,
            _.default
          );
        }
        getGuild(e, t) {
          let n = G.getGuild(e, t);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        getGuildWithoutChangingCommunityRows(e) {
          let t = G.getGuildWithoutCommunityRows(e);
          return { guildChannelsVersion: t.version, guildChannels: t };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let t = G.getGuildWithoutCommunityRows(e),
            n = t.getCategoryFromSection(t.recentsSectionNumber);
          return n.getShownChannelIds().length;
        }
      }
      w.displayName = "ChannelListStore";
      var W = new w(a.default, {
        APPLICATION_FETCH_FAIL: v,
        APPLICATION_FETCH_SUCCESS: v,
        APPLICATION_FETCH: v,
        APPLICATIONS_FETCH_FAIL: v,
        APPLICATIONS_FETCH_SUCCESS: v,
        APPLICATIONS_FETCH: v,
        BACKGROUND_SYNC: g,
        BULK_ACK: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            o(t)
              .map(e => {
                var t;
                return null === (t = C.default.getChannel(e.channelId)) ||
                  void 0 === t
                  ? void 0
                  : t.guild_id;
              })
              .filter(L.isNotNullish)
              .uniq()
              .forEach(e => {
                G.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        BULK_CLEAR_RECENTS: U,
        CACHE_LOADED_LAZY: g,
        CATEGORY_COLLAPSE_ALL: U,
        CATEGORY_COLLAPSE: V,
        CATEGORY_EXPAND_ALL: U,
        CATEGORY_EXPAND: V,
        CHANNEL_ACK: m,
        CHANNEL_COLLAPSE: function (e) {
          var t;
          let { channelId: n } = e;
          return G.clearGuildId(
            null === (t = C.default.getChannel(n)) || void 0 === t
              ? void 0
              : t.guild_id
          );
        },
        CHANNEL_CREATE: P,
        CHANNEL_DELETE: P,
        CHANNEL_LOCAL_ACK: m,
        CHANNEL_MUTE_EXPIRED: U,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: m,
        CHANNEL_SELECT: B,
        CHANNEL_STATUSES: function (e) {
          return G.clearGuildId(e.guildId);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            o(t)
              .map(e => e.guild_id)
              .uniq()
              .forEach(e => {
                G.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        CONNECTION_OPEN_SUPPLEMENTAL: v,
        CONNECTION_OPEN: g,
        CURRENT_USER_UPDATE: g,
        DECAY_READ_STATES: g,
        DEV_TOOLS_DESIGN_TOGGLE_SET: g,
        DISABLE_AUTOMATIC_ACK: m,
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { channelId: t } = e;
          return G.nonPositionalChannelIdUpdate(t);
        },
        DRAWER_CLOSE: y,
        DRAWER_OPEN: y,
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function (e) {
          let { guildId: t, channelId: n } = e;
          return G.updateSubtitles(t, n);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
          v();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: v,
        ENABLE_AUTOMATIC_ACK: m,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
          let { guildId: t } = e;
          return G.updateSubtitles(t);
        },
        GAMES_DATABASE_FETCH_FAIL: v,
        GAMES_DATABASE_FETCH: v,
        GAMES_DATABASE_UPDATE: v,
        GUILD_APPLICATIONS_FETCH_SUCCESS: v,
        GUILD_CREATE: M,
        GUILD_DELETE: M,
        GUILD_FEED_FETCH_SUCCESS: v,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          return A.default.getId() === n.id && G.clearGuildId(t);
        },
        GUILD_MUTE_EXPIRED: U,
        GUILD_ROLE_CREATE: U,
        GUILD_ROLE_DELETE: U,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: U,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: U,
        GUILD_ROLE_UPDATE: U,
        GUILD_SCHEDULED_EVENT_CREATE: Y,
        GUILD_SCHEDULED_EVENT_DELETE: Y,
        GUILD_SCHEDULED_EVENT_UPDATE: Y,
        GUILD_TOGGLE_COLLAPSE_MUTED: U,
        GUILD_UPDATE: M,
        IMPERSONATE_STOP: U,
        IMPERSONATE_UPDATE: U,
        LOAD_CHANNELS: function (e) {
          e.channels.forEach(e => {
            let { guildId: t } = e;
            return G.clearGuildId(t);
          });
        },
        LOAD_MESSAGES_SUCCESS: m,
        MESSAGE_ACK: m,
        MESSAGE_CREATE: function (e) {
          let { channelId: t } = e;
          return G.nonPositionalChannelIdUpdate(t);
        },
        MESSAGE_DELETE_BULK: m,
        MESSAGE_DELETE: m,
        NOTIFICATION_SETTINGS_UPDATE: g,
        OVERLAY_INITIALIZE: g,
        PASSIVE_UPDATE_V1: function (e) {
          return null != e.channels && (G.clearGuildId(e.guildId), !0);
        },
        RECOMPUTE_READ_STATES: g,
        RESORT_THREADS: m,
        SET_RECENTLY_ACTIVE_COLLAPSED: g,
        THREAD_CREATE: K,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return G.nonPositionalChannelUpdate(t);
        },
        THREAD_LIST_SYNC: U,
        THREAD_MEMBER_UPDATE: H,
        THREAD_MEMBERS_UPDATE: H,
        THREAD_UPDATE: K,
        TRY_ACK: m,
        UPDATE_CHANNEL_DIMENSIONS: m,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
          let { guildId: t } = e;
          G.updateSubtitles(t);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach(e => {
            let { guild_id: t } = e;
            return G.clearGuildId(t);
          });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U,
        USER_GUILD_SETTINGS_GUILD_UPDATE: U,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          var t;
          let { settings: n } = e;
          if (n.type !== p.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
          let i =
              null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
            o = !1;
          return (
            null != i &&
              D.default.keys(i).forEach(e => {
                let t = i[e].guildRecentsDismissedAt;
                null != t && (o = G.updateRecentsCategory(e) || o);
              }),
            o
          );
        },
        VOICE_CATEGORY_COLLAPSE: F,
        VOICE_CATEGORY_EXPAND: F,
        VOICE_CHANNEL_SELECT: B,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          return G.nonPositionalChannelIdUpdate(e.id);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = B(),
            i = new Set();
          for (let { channelId: e, oldChannelId: o } of t)
            null != o &&
              !i.has(o) &&
              (G.nonPositionalChannelIdUpdate(o) && (n = !0), i.add(o)),
              null != e &&
                !i.has(e) &&
                (G.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
          return n;
        },
        WINDOW_FOCUS: y,
      });
    },
    829072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesServerChannelList: function () {
            return b;
          },
          computeFavoritesState: function () {
            return G;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("884691"),
        o = n("917351"),
        l = n.n(o),
        a = n("151426"),
        d = n("191225"),
        u = n("379881"),
        s = n("106682"),
        E = n("398604"),
        r = n("401690"),
        _ = n("755624"),
        A = n("233069"),
        c = n("870691"),
        C = n("42203"),
        T = n("816092"),
        S = n("546463"),
        I = n("957255"),
        f = n("660478"),
        N = n("18494"),
        O = n("282109"),
        L = n("449008"),
        D = n("319839"),
        R = n("695838"),
        p = n("843455");
      let h = [
        d.default,
        u.default,
        E.default,
        r.default,
        _.default,
        c.default,
        C.default,
        S.default,
        I.default,
        f.default,
        N.default,
        O.default,
      ];
      function b() {
        let [e, t] = i.useState(() => G());
        return (
          i.useEffect(() => {
            let e = l.throttle(() => t(G()), 100);
            return (
              h.forEach(t => t.addChangeListener(e)),
              () => h.forEach(t => t.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function G() {
        let e = u.default.getFavoriteChannels(),
          t = O.default.isGuildCollapsed(R.FAVORITES_RAW_GUILD_ID),
          n = N.default.getChannelId(),
          i = C.default.getChannel(n),
          o = N.default.getVoiceChannelId(),
          d = [],
          E = {};
        for (let t in e) {
          let n = e[t],
            i = C.default.getChannel(n.id);
          if (null == i || n.type === a.FavoriteChannelType.CATEGORY) continue;
          let o = (0, s.createFavoritesChannelRecord)(e, n, i);
          if (null == n.parentId || !(n.parentId in e)) {
            d.push(o);
            continue;
          }
          !(n.parentId in E) && (E[n.parentId] = []), E[n.parentId].push(o);
        }
        function _(n, a) {
          let { isCollapsed: d, isMuted: u } = a;
          return l(n)
            .map(n => {
              var s;
              if (
                !n.isPrivate() &&
                !I.default.can(p.Permissions.VIEW_CHANNEL, n)
              )
                return null;
              let E = null != i && (i.id === n.id || o === n.id),
                _ = null != i && i.isThread() && i.parent_id === n.id,
                c =
                  null !==
                    (s =
                      E || _ || !d
                        ? r.default.getActiveJoinedRelevantThreadsForParent(
                            n.guild_id,
                            n.id
                          )
                        : r.default.getActiveJoinedUnreadThreadsForParent(
                            n.guild_id,
                            n.id
                          )) && void 0 !== s
                    ? s
                    : {},
                C = (0, D.computeThreadIds)(n, c, i, o, t),
                S = T.default.isCollapsed(n.id),
                N = O.default.isChannelMuted(n.guild_id, n.id),
                L = {
                  id: n.id,
                  record: n,
                  category: a,
                  position: e[n.id].order,
                  threadIds: C,
                  threadCount: l.size(C),
                  isCollapsed: S,
                  isMuted: N,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, D.computeSubtitle)(n, S, !1),
                };
              return E || _ || f.default.getMentionCount(n.id) > 0
                ? L
                : (t && N) ||
                    (d &&
                      (N ||
                        u ||
                        ((0, A.isGuildReadableType)(n.type) &&
                          !1 === f.default.hasUnread(n.id))))
                  ? null
                  : L;
            })
            .filter(L.isNotNullish)
            .sortBy(e => {
              let { record: t } = e;
              return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
        }
        let S = null,
          h = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map(e => e.id),
            getShownChannelAndThreadIds: () => d.map(e => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
              return null == S && (S = _(d, this)), S;
            },
          },
          b = l(e)
            .values()
            .filter(e => e.type === a.FavoriteChannelType.CATEGORY)
            .sortBy(e => e.order)
            .map(e => {
              var t;
              let { id: n, order: i } = e,
                o = u.default.getCategoryRecord(n),
                l = null !== (t = E[n]) && void 0 !== t ? t : [],
                a = O.default.isChannelMuted(R.FAVORITES_RAW_GUILD_ID, n),
                d = c.default.isCollapsed(n),
                s = null;
              return {
                isMuted: a,
                isCollapsed: d,
                record: o,
                id: n,
                position: i,
                getChannelRecords: () => l,
                getShownChannelIds: () => l.map(e => e.id),
                getShownChannelAndThreadIds: () => l.map(e => e.id),
                isEmpty: () => 0 === l.length,
                get channelList() {
                  return null == s && (s = _(l, this)), s;
                },
              };
            })
            .value(),
          G = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          g = {
            id: R.FAVORITES_RAW_GUILD_ID,
            hideMutedChannels: t,
            favoritesSectionNumber: 1,
            recentsSectionNumber: 2,
            voiceChannelsSectionNumber: -999,
            getSections: () => [
              0,
              0,
              0,
              h.channelList.length,
              ...b.map(e => Math.max(1, e.channelList.length)),
            ],
            isPlaceholderRow(e, t) {
              if (e < D.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t)
                return !1;
              let n = b[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY];
              return 0 === n.channelList.length;
            },
            getCategoryFromSection: e =>
              e === D.SECTION_INDEX_UNCATEGORIZED_CHANNELS
                ? h
                : b[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY],
            getNamedCategoryFromSection: e =>
              b[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY],
            getChannelFromSectionRow(e, t) {
              let n = this.getCategoryFromSection(e);
              return null == n || null == n.channelList[t]
                ? null
                : { category: n, channel: n.channelList[t] };
            },
            getCommunitySection: () => G,
            getFirstVoiceChannel: () => null,
            getSectionRowsFromChannel(e) {
              let t = [h, ...b];
              for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                  if (t[n].channelList[i].id === e)
                    return [
                      {
                        section: n + D.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
                        row: i,
                      },
                    ];
              return [];
            },
            forEachShownChannel(e) {
              let t = [h, ...b];
              for (let n of t)
                for (let t of n.channelList)
                  for (let n of (e(t.record), t.threadIds)) {
                    let t = C.default.getChannel(n);
                    null != t && e(t);
                  }
            },
            forEachChannel(e) {
              let t = [h, ...b];
              for (let n of t) for (let t of n.getChannelRecords()) e(t);
            },
            getSlicedChannels: e => [[], e, []],
            getChannels: () => [],
          };
        return g;
      }
    },
    244030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          show: function () {
            return o;
          },
          hide: function () {
            return l;
          },
        });
      var i = n("913144");
      function o() {
        i.default.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function l() {
        i.default.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    386867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KEYBOARD_SHORTCUT_MODAL_KEY: function () {
            return i;
          },
        });
      let i = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    208021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("913144"),
        o = n("819689"),
        l = n("115718"),
        a = n("347895"),
        d = n("341329"),
        u = n("582713"),
        s = n("724210"),
        E = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: l,
              hasSingleMessageRequest: a,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: l,
              channelId: t,
              details: {
                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: a,
              },
            }),
              null != n
                ? o.default.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                  })
                : d.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: n,
              baseChannelId: a,
              flash: s = !0,
              details: E,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: a,
              channelId: n,
              details: E,
            });
            let r = null == E ? void 0 : E.initialMessageId;
            null != r
              ? o.default.jumpToMessage({
                  channelId: n,
                  messageId: r,
                  flash: s,
                  jumpType: l.JumpTypes.INSTANT,
                })
              : d.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, a.selectHomeResourceChannel)(t, n, !1),
              i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: u.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: s.StaticChannelRoute.GUILD_HOME,
                channelId: n,
              }));
          },
          openThreadAsSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              channelId: a,
              flash: s = !0,
              details: E,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: a,
              details: E,
            }),
              (null == E ? void 0 : E.initialMessageId) != null
                ? o.default.jumpToMessage({
                    channelId: a,
                    messageId: E.initialMessageId,
                    flash: s,
                    jumpType: l.JumpTypes.INSTANT,
                  })
                : d.default.fetchMessages({ guildId: t, channelId: a });
          },
          closeChannelSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: o,
              details: l,
            } = e;
            return i.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: o,
              baseChannelId: n,
              guildId: t,
              details: l,
            });
          },
          closeGuildSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    791823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("70102");
      var i = n("446674"),
        o = n("913144");
      let l = null;
      class a extends i.default.Store {
        getCurrentPath() {
          return null != l ? l.pathname : null;
        }
        getCurrentRoute() {
          return (function (e) {
            let t = null != e && null != e.search ? e.search : "";
            return null != e ? "".concat(e.pathname).concat(t) : null;
          })(l);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment"
          );
        }
      }
      a.displayName = "ApplicationStoreLocationStore";
      var d = new a(o.default, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          l = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          l = null;
        },
      });
    },
    330338: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i,
        o,
        l,
        a = n("446674"),
        d = n("913144"),
        u = n("42203"),
        s = n("476108"),
        E = n("305961"),
        r = n("18494"),
        _ = n("287850"),
        A = n("49111");
      let c = (null !==
        (l =
          null === (o = window) || void 0 === o
            ? void 0
            : null === (i = o.location) || void 0 === i
              ? void 0
              : i.pathname) && void 0 !== l
        ? l
        : ""
      ).startsWith(A.Routes.ACTIVITIES)
        ? A.Routes.ACTIVITIES
        : null;
      function C(e) {
        let { link: t } = e;
        if (c === t) return !1;
        c = t;
      }
      class T extends a.default.Store {
        initialize() {
          this.waitFor(s.default, _.default, r.default, E.default, u.default);
        }
        getHomeLink() {
          return null != c ? c : s.default.fallbackRoute;
        }
      }
      T.displayName = "AppViewStore";
      var S = new T(d.default, {
        OVERLAY_INITIALIZE: function () {
          let e = _.default.getPrivateChannelIds(),
            t = r.default.getChannelId(A.ME);
          (null != t || null != e[0]) &&
            (c = A.Routes.CHANNEL(A.ME, null != t ? t : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: C,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          C({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          if (null == c || !c.startsWith(A.Routes.APPLICATION_STORE)) return !1;
          c = A.Routes.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          if (null == t && null != n) {
            let e = A.Routes.CHANNEL(A.ME, n);
            if (e !== c) return (c = e), !0;
          }
          return !1;
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          null == t.guild_id &&
            null != t.id &&
            null != c &&
            c === A.Routes.CHANNEL(A.ME, t.id) &&
            (c = null);
        },
      });
    },
  },
]);
//# sourceMappingURL=a1ef575609a87658d1fa.js.map
