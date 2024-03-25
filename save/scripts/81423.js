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
            return u;
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
        u = {
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
            return E;
          },
          CHANNEL_PREV: function () {
            return c;
          },
          TOGGLE_PREVIOUS_GUILD: function () {
            return _;
          },
          NAVIGATE_BACK: function () {
            return A;
          },
          NAVIGATE_FORWARD: function () {
            return C;
          },
        });
      var i = n("473532"),
        o = n("722525"),
        l = n("393414"),
        u = n("239380"),
        a = n("18494"),
        s = n("162771"),
        d = n("773336"),
        r = n("49111");
      let E = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.default)(), !1),
        },
        c = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.default)(-1), !1),
        },
        _ = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let e;
            let t = s.default.getGuildId();
            if (null != t) e = r.ME;
            else {
              let t = s.default.getLastSelectedGuildId();
              null != t &&
                ((e = t),
                (0, o.transitionToChannel)(t, a.default.getChannelId(t)));
            }
            return null != e && (0, u.transitionToGuild)(e), !1;
          },
        },
        A = {
          binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.back)(), !1),
        },
        C = {
          binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.forward)(), !1),
        };
    },
    863536: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_DM_GROUP: function () {
            return a;
          },
        });
      var i = n("722525"),
        o = n("162771"),
        l = n("659500"),
        u = n("49111");
      let a = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != o.default.getGuildId() && (0, i.transitionToChannel)(u.ME),
          l.ComponentDispatch.safeDispatch(u.ComponentActions.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    786720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD: function () {
            return u;
          },
        });
      var i = n("77078"),
        o = n("616265"),
        l = n("243338");
      let u = {
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
            return u;
          },
        });
      var i = n("722525"),
        o = n("945956"),
        l = n("49111");
      let u = {
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
            return g;
          },
        });
      var i = n("118810"),
        o = n("255397"),
        l = n("819689"),
        u = n("267363"),
        a = n("244201"),
        s = n("191145"),
        d = n("529805"),
        r = n("685841"),
        E = n("208021"),
        c = n("582713"),
        _ = n("328511"),
        A = n("467094"),
        C = n("982108"),
        T = n("42203"),
        I = n("474643"),
        S = n("836417"),
        f = n("377253"),
        N = n("660478"),
        O = n("18494"),
        R = n("162771"),
        L = n("144747"),
        p = n("471671"),
        D = n("659500"),
        h = n("49111");
      let g = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (p.default.isElementFullScreen()) return !1;
          if (
            D.ComponentDispatch.hasSubscribers(h.ComponentActions.CALL_DECLINE)
          )
            return (
              D.ComponentDispatch.dispatch(h.ComponentActions.CALL_DECLINE), !1
            );
          if (L.default.close()) return !1;
          if (
            D.ComponentDispatch.hasSubscribers(
              h.ComponentActions.MEDIA_MODAL_CLOSE
            )
          )
            return (
              D.ComponentDispatch.dispatch(
                h.ComponentActions.MEDIA_MODAL_CLOSE
              ),
              !1
            );
          if ((0, i.isElement)(e.target)) {
            let t = (0, a.getWindowDispatchForElement)(e.target);
            if (
              null == t
                ? void 0
                : t.hasSubscribers(h.ComponentActions.POPOUT_CLOSE)
            )
              return t.dispatch(h.ComponentActions.POPOUT_CLOSE), !1;
          }
          if (
            D.ComponentDispatch.hasSubscribers(
              h.ComponentActions.CLOSE_GIF_PICKER
            )
          )
            return (
              D.ComponentDispatch.dispatch(h.ComponentActions.CLOSE_GIF_PICKER),
              !1
            );
          if (
            D.ComponentDispatch.hasSubscribers(h.ComponentActions.MODAL_CLOSE)
          )
            return (
              D.ComponentDispatch.dispatch(h.ComponentActions.MODAL_CLOSE), !1
            );
          if (
            D.ComponentDispatch.hasSubscribers(
              h.ComponentActions.SEARCH_RESULTS_CLOSE
            )
          )
            return (
              D.ComponentDispatch.dispatch(
                h.ComponentActions.SEARCH_RESULTS_CLOSE
              ),
              !1
            );
          let t = R.default.getGuildId(),
            n = O.default.getChannelId(t),
            l = T.default.getChannel(n),
            u = C.default.getSection(n, null == l ? void 0 : l.isDM()),
            d =
              u === h.ChannelSections.SIDEBAR_CHAT
                ? C.default.getSidebarState(n)
                : null,
            r =
              (null == d ? void 0 : d.type) === c.SidebarType.VIEW_THREAD ||
              (null == d ? void 0 : d.type) === c.SidebarType.VIEW_CHANNEL
                ? d.channelId
                : null;
          if (!1 === b(n) || !1 === b(r)) return !1;
          if (
            null != n &&
            (null == d ? void 0 : d.type) === c.SidebarType.CREATE_THREAD
          )
            return E.default.closeChannelSidebar(n), !1;
          let _ = G(n),
            A = G(r);
          return null == n || _ || A || null == d
            ? null != n && !_ && s.default.getChatOpen(n)
              ? (o.default.updateChatOpen(n, !1), !1)
              : (D.ComponentDispatch.dispatch(
                  h.ComponentActions.SCROLLTO_PRESENT
                ),
                !1)
            : (E.default.closeChannelSidebar(n), !1);
        },
      };
      function b(e) {
        if (null != e) {
          if (S.default.isEditingAny(e)) return l.default.endEditMessage(e), !1;
          if (null != r.default.getPendingReply(e))
            return (0, d.deletePendingReply)(e), !1;
          if (
            null != _.default.getStickerPreview(e, I.DraftType.ChannelMessage)
          )
            return (
              (0, A.clearStickerPreview)(e, I.DraftType.ChannelMessage), !1
            );
        }
      }
      function G(e) {
        if (null == e) return !1;
        let t = !1,
          n = f.default.getMessages(e);
        return (
          n.hasMoreAfter &&
            (l.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), (t = !0)),
          N.default.hasUnread(e) && ((0, u.ack)(e), (t = !0)),
          (0, u.localAck)(e),
          t
        );
      }
    },
    278412: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MARK_SERVER_READ: function () {
            return E;
          },
        });
      var i = n("819689"),
        o = n("542827"),
        l = n("952451"),
        u = n("377253"),
        a = n("18494"),
        s = n("162771"),
        d = n("659500"),
        r = n("49111");
      let E = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = s.default.getGuildId();
          if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, o.default)([e]);
          let t = a.default.getChannelId(e);
          if (null == t) return;
          let n = u.default.getMessages(t);
          n.hasMoreAfter
            ? i.default.jumpToPresent(t, r.MAX_MESSAGES_PER_CHANNEL)
            : d.ComponentDispatch.dispatch(r.ComponentActions.SCROLLTO_PRESENT);
        },
      };
    },
    222301: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          JUMP_TO_FIRST_UNREAD: function () {
            return u;
          },
        });
      var i = n("819689"),
        o = n("660478"),
        l = n("18494");
      let u = {
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
            return u;
          },
        });
      var i = n("412707"),
        o = n("646186"),
        l = n("162771");
      let u = {
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
            return s;
          },
        });
      var i = n("406189"),
        o = n("722525"),
        l = n("945956"),
        u = n("18494"),
        a = n("49111");
      let s = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!l.default.isConnected()) return !1;
          let t =
              null !== (e = l.default.getGuildId()) && void 0 !== e ? e : a.ME,
            n = u.default.getChannelId(t);
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
            return u;
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
        u = {
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
            return a;
          },
        });
      var i = n("558986"),
        o = n("659500"),
        l = n("49111"),
        u = n("958706");
      let a = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.initiateEmojiInteraction)(
            u.EmojiInteractionPoint.SearchEmojiKeybindPressed
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
            return u;
          },
        });
      var i = n("206230"),
        o = n("659500"),
        l = n("49111");
      let u = {
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
        u = n("42887"),
        a = n("945956"),
        s = n("659500"),
        d = n("791776"),
        r = n("13798"),
        E = n("49111");
      let c = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        _ = new Set([
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
        A = new Set([
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
              null === (n = (0, d.eventOwnerDocument)(e)) || void 0 === n
                ? void 0
                : n.activeElement;
            if (
              (0, d.isInputLikeElement)(T) ||
              i.LOCK_STACK.isActive() ||
              _.has(t) ||
              A.has(t) ||
              C.has(t)
            )
              return !1;
            let I = null != T && "BODY" === T.tagName;
            return (
              !(
                (o.default.keyboardModeEnabled &&
                  !I &&
                  !/^[a-zA-Z0-9]$/.test(t)) ||
                s.ComponentDispatch.hasSubscribers(
                  E.ComponentActions.MODAL_CLOSE
                ) ||
                l.default.hasLayers()
              ) &&
              ("Tab" === t &&
              s.ComponentDispatch.hasSubscribers(
                E.ComponentActions.TEXTAREA_FOCUS
              ) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (e.preventDefault(),
                  s.ComponentDispatch.dispatch(
                    E.ComponentActions.TEXTAREA_FOCUS
                  ),
                  !1)
                : !(
                    a.default.isConnected() &&
                    u.default.getMode() === E.InputModes.PUSH_TO_TALK &&
                    !u.default.isSelfMute() &&
                    Object.values(u.default.getShortcuts())
                      .map(r.toBrowserEvents)
                      .some(t => t.map(e => e.keyCode).includes(e.keyCode))
                  ) &&
                  void (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !c.has(t) &&
                    s.ComponentDispatch.dispatchToLastSubscribed(
                      E.ComponentActions.TEXTAREA_FOCUS
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
            return s;
          },
        });
      var i = n("820542"),
        o = n("870691"),
        l = n("923959"),
        u = n("162771"),
        a = n("49111");
      let s = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = u.default.getGuildId();
          if (null == e) return !1;
          let t = l.default
            .getChannels(e)
            [a.ChannelTypes.GUILD_CATEGORY].some(e => {
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
            return u;
          },
        });
      var i = n("77078"),
        o = n("244030"),
        l = n("386867");
      let u = {
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
            return a;
          },
          MARK_TOP_INBOX_CHANNEL_READ: function () {
            return s;
          },
        });
      var i = n("917351"),
        o = n.n(i),
        l = n("659500"),
        u = n("49111");
      let a = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.ComponentDispatch.dispatch(
              u.ComponentActions.TOGGLE_INBOX_UNREADS_TAB
            ),
            !1
          ),
        },
        s = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: o.debounce(
            () => {
              if (
                l.ComponentDispatch.hasSubscribers(
                  u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ
                )
              )
                return (
                  l.ComponentDispatch.dispatch(
                    u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ
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
            return A;
          },
        });
      var i = n("298386"),
        o = n("255397"),
        l = n("289867"),
        u = n("191145"),
        a = n("217513"),
        s = n("893980"),
        d = n("982108"),
        r = n("42203"),
        E = n("18494"),
        c = n("162771"),
        _ = n("49111");
      let A = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = c.default.getGuildId(),
            t = E.default.getChannelId(e),
            n = r.default.getChannel(t);
          if (null != t && null != n && n.type === i.ChannelTypes.GUILD_VOICE)
            return o.default.updateChatOpen(t, !u.default.getChatOpen(t)), !1;
          if (null != t && null != n && n.type === i.ChannelTypes.DM) {
            let e = d.default.getSection(t, null == n ? void 0 : n.isDM()),
              i = (0, a.getDisplayProfile)(n.getRecipientId()),
              o = e === _.ChannelSections.PROFILE;
            return (
              (0, s.trackProfilePanelToggled)(i, !o),
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
            return A;
          },
          UNREAD_PREV: function () {
            return C;
          },
          MENTION_NEXT: function () {
            return I;
          },
          MENTION_PREV: function () {
            return S;
          },
        });
      var i = n("592864"),
        o = n("615387"),
        l = n("393027"),
        u = n("233069"),
        a = n("42203"),
        s = n("660478"),
        d = n("282109"),
        r = n("49111"),
        E = n("133335");
      let c = (e, t) => {
          let n = a.default.getChannel(t);
          return (
            null != n &&
            ((0, u.isPrivate)(n.type)
              ? !!s.default.getMentionCount(t)
              : (!d.default.isChannelMuted(e, t) ||
                  s.default.getMentionCount(t) > 0) &&
                (0, o.getHasImportantUnread)(n))
          );
        },
        _ = (e, t) => {
          if (t === E.ReadStateTypes.GUILD_EVENT)
            return (
              !d.default.isMuteScheduledEventsEnabled(e) &&
              s.default.hasUnread(e, t)
            );
          return s.default.hasUnread(e, t);
        },
        A = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let t =
              null !== (e = l.default.getState().guildId) && void 0 !== e
                ? e
                : r.ME;
            return (
              (0, i.default)(1, {
                channelPredicate: c,
                guildPredicate: e => e === t || !d.default.isMuted(e),
                guildFeaturePredicate: _,
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
                : r.ME;
            return (
              (0, i.default)(-1, {
                channelPredicate: c,
                guildPredicate: e => e === t || !d.default.isMuted(e),
                guildFeaturePredicate: _,
              }),
              !1
            );
          },
        },
        T = (e, t) => s.default.getMentionCount(t) > 0,
        I = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.default)(1, { channelPredicate: T, withVoiceChannels: !0 }),
            !1
          ),
        },
        S = {
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
            return a;
          },
        });
      var i = n("42203"),
        o = n("18494"),
        l = n("659500"),
        u = n("49111");
      let a = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = i.default.getChannel(o.default.getChannelId());
          return (
            null != e &&
              !e.isManaged() &&
              l.ComponentDispatch.dispatch(u.ComponentActions.UPLOAD_FILE),
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
            return a;
          },
          ZOOM_OUT: function () {
            return s;
          },
          ZOOM_RESET: function () {
            return d;
          },
          default: function () {
            return r;
          },
        });
      var i = n("180748"),
        o = n("206230"),
        l = n("49111");
      function u(e) {
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
      let a = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(u(1)), !1),
        },
        s = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(u(-1)), !1),
        },
        d = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(l.Accessibility.ZOOM_DEFAULT), !1),
        };
      var r = { ZOOM_IN: a, ZOOM_OUT: s, ZOOM_RESET: d };
    },
    493765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KeybindGroup: function () {
            return i;
          },
          getNameForKeybindGroup: function () {
            return v;
          },
          getDescriptionForKeybindGroup: function () {
            return V;
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
        u = n("55562"),
        a = n("863536"),
        s = n("786720"),
        d = n("211314"),
        r = n("218143"),
        E = n("586819"),
        c = n("953260"),
        _ = n("798232"),
        A = n("278412"),
        C = n("222301"),
        T = n("903376"),
        I = n("242149"),
        S = n("714208"),
        f = n("24312"),
        N = n("30269"),
        O = n("709079"),
        R = n("616903"),
        L = n("271524"),
        p = n("333949"),
        D = n("945924"),
        h = n("648900"),
        g = n("838021"),
        b = n("745991"),
        G = n("640968"),
        M = n("347445"),
        m = n("992642"),
        P = n("200431"),
        U = n("493334"),
        y = n("809392"),
        K = n("202035"),
        H = n("49111"),
        B = n("782340");
      function v(e) {
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
      function V(e) {
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
      function F() {
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
        [H.KeybindActions.SERVER_NEXT]: L.SERVER_NEXT,
        [H.KeybindActions.SERVER_PREV]: L.SERVER_PREV,
        [H.KeybindActions.CHANNEL_NEXT]: u.CHANNEL_NEXT,
        [H.KeybindActions.CHANNEL_PREV]: u.CHANNEL_PREV,
        [H.KeybindActions.NAVIGATE_BACK]: u.NAVIGATE_BACK,
        [H.KeybindActions.NAVIGATE_FORWARD]: u.NAVIGATE_FORWARD,
        [H.KeybindActions.UNREAD_NEXT]: U.UNREAD_NEXT,
        [H.KeybindActions.UNREAD_PREV]: U.UNREAD_PREV,
        [H.KeybindActions.MENTION_CHANNEL_NEXT]: U.MENTION_NEXT,
        [H.KeybindActions.MENTION_CHANNEL_PREV]: U.MENTION_PREV,
        [H.KeybindActions.TOGGLE_PREVIOUS_GUILD]: u.TOGGLE_PREVIOUS_GUILD,
        [H.KeybindActions.JUMP_TO_GUILD]: c.JUMP_TO_GUILD,
        [H.KeybindActions.SUBMIT]: p.SUBMIT,
        [H.KeybindActions.TEXTAREA_FOCUS]: D.TEXTAREA_FOCUS,
        [H.KeybindActions.MARK_CHANNEL_READ]: _.MARK_CHANNEL_READ,
        [H.KeybindActions.MARK_SERVER_READ]: A.MARK_SERVER_READ,
        [H.KeybindActions.TOGGLE_CHANNEL_PINS]: b.TOGGLE_CHANNEL_PINS,
        [H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: m.TOGGLE_INBOX_UNREADS_TAB,
        [H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]:
          m.MARK_TOP_INBOX_CHANNEL_READ,
        [H.KeybindActions.TOGGLE_USERS]: P.TOGGLE_USERS,
        [H.KeybindActions.TOGGLE_HELP]: G.TOGGLE_HELP,
        [H.KeybindActions.TOGGLE_MUTE]: h.TOGGLE_MUTE,
        [H.KeybindActions.TOGGLE_DEAFEN]: h.TOGGLE_DEAFEN,
        [H.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]:
          g.TOGGLE_CATEGORY_COLLAPSED,
        [H.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
        [H.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
        [H.KeybindActions.QUICKSWITCHER_SHOW]: I.QUICKSWITCHER_SHOW,
        [H.KeybindActions.CREATE_DM_GROUP]: a.CREATE_DM_GROUP,
        [H.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
        [H.KeybindActions.SEARCH_GIFS]: O.SEARCH_GIFS,
        [H.KeybindActions.SEARCH_STICKERS]: R.SEARCH_STICKERS,
        [H.KeybindActions.TOGGLE_HOTKEYS]: M.TOGGLE_HOTKEYS,
        [H.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
        [H.KeybindActions.CREATE_GUILD]: s.CREATE_GUILD,
        [H.KeybindActions.UPLOAD_FILE]: y.UPLOAD_FILE,
        [H.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: S.RETURN_TO_AUDIO_CHANNEL,
        [H.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
        [H.KeybindActions.CALL_START]: l.CALL_START,
        [H.KeybindActions.FOCUS_SEARCH]: r.FOCUS_SEARCH,
        [H.KeybindActions.JUMP_TO_CURRENT_CALL]: E.JUMP_TO_CURRENT_CALL,
        [H.KeybindActions.ZOOM_IN]: K.ZOOM_IN,
        [H.KeybindActions.ZOOM_OUT]: K.ZOOM_OUT,
        [H.KeybindActions.ZOOM_RESET]: K.ZOOM_RESET,
        [H.KeybindActions.OPEN_APP_DIRECTORY]: T.OPEN_APP_DIRECTORY,
        [H.KeybindActions.BROWSER_DEVTOOLS]: d.BROWSER_DEVTOOLS,
      };
      function w() {
        return [
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: F(
              H.KeybindActions.SERVER_PREV,
              H.KeybindActions.SERVER_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: F(
              H.KeybindActions.CHANNEL_PREV,
              H.KeybindActions.CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: F(
              H.KeybindActions.NAVIGATE_BACK,
              H.KeybindActions.NAVIGATE_FORWARD
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: F(
              H.KeybindActions.UNREAD_PREV,
              H.KeybindActions.UNREAD_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: F(
              H.KeybindActions.MENTION_CHANNEL_PREV,
              H.KeybindActions.MENTION_CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: F(H.KeybindActions.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: F(H.KeybindActions.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: F(H.KeybindActions.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: F(H.KeybindActions.CREATE_GUILD),
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
            binds: F(H.KeybindActions.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: F(H.KeybindActions.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: F(H.KeybindActions.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: F(H.KeybindActions.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: F(H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: F(H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: F(H.KeybindActions.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: F(H.KeybindActions.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: F(H.KeybindActions.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: F(H.KeybindActions.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: F(H.KeybindActions.SCROLL_UP, H.KeybindActions.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: F(H.KeybindActions.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: F(H.KeybindActions.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: F(H.KeybindActions.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: F(H.KeybindActions.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: F(H.KeybindActions.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: F(H.KeybindActions.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: F(H.KeybindActions.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: F(H.KeybindActions.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description:
              B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: F(H.KeybindActions.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: F(H.KeybindActions.FOCUS_SEARCH),
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
        u = n("288518"),
        a = n("486503"),
        s = n("393027"),
        d = n("845579"),
        r = n("686470"),
        E = n("791823"),
        c = n("287850"),
        _ = n("449008"),
        A = n("722525"),
        C = n("49111"),
        T = n("724210");
      let I = () => {
        let e =
          u.default.getMessageRequestsCount() > 0 ||
          a.default.getSpamChannelsCount() > 0;
        return [
          C.Routes.FRIENDS,
          r.default.hasLibraryApplication() && !d.DisableGamesTab.getSetting()
            ? C.Routes.APPLICATION_LIBRARY
            : null,
          C.Routes.APPLICATION_STORE,
          e ? C.Routes.MESSAGE_REQUESTS : null,
          C.Routes.COLLECTIBLES_SHOP,
          d.FamilyCenterEnabled.getSetting() ? C.Routes.FAMILY_CENTER : null,
        ].filter(_.isNotNullish);
      };
      function S(e, t) {
        (0, A.transitionToChannel)(e, t);
      }
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = s.default.getState().guildId;
        null == t
          ? !(function (e) {
              var t;
              let { channelId: n, path: i, basePath: o } = s.default.getState(),
                l = c.default.getPrivateChannelIds(),
                u = __OVERLAY__ ? l : [...I(), ...l];
              let a =
                  null == n
                    ? ((t = null != i ? i : o),
                      I().findIndex(e => t.startsWith(e)))
                    : null != n
                      ? u.indexOf(n)
                      : 0,
                d = a + e;
              d >= u.length ? (d = 0) : d < 0 && (d = u.length - 1);
              let r = u[d];
              I().includes(r)
                ? !(function (e) {
                    let t = E.default.getCurrentRoute();
                    e === C.Routes.APPLICATION_STORE && null != t
                      ? (0, A.transitionToPage)(t)
                      : (0, A.transitionToPage)(e);
                  })(r)
                : S(C.ME, r);
            })(e)
          : !(function (e, t) {
              var n, u;
              let a = s.default.getState().channelId,
                d = (0, i.default)(t).map(e => e.id);
              ((0, o.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)) &&
                d.unshift(T.StaticChannelRoute.GUILD_HOME);
              let r = null != a ? d.indexOf(a) : -1;
              let E =
                ((n = r + e), (u = d.length), n < 0 ? u - 1 : n >= u ? 0 : n);
              S(t, d[E]);
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
        u = n("15131"),
        a = n("393027"),
        s = n("42203"),
        d = n("957255"),
        r = n("18494"),
        E = n("677099"),
        c = n("330338"),
        _ = n("722525"),
        A = n("49111"),
        C = o.throttle(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = E.default.getFlattenedGuildIds(),
            n = (function (e) {
              let t = a.default.getState().guildId;
              if (null == t) return -2;
              if (t === A.FAVORITES) return -1;
              let n = e.indexOf(t);
              return -1 === n ? -2 : n;
            })(t);
          if (
            (-1 === (n += e) &&
              !(0, u.isFavoritesGuildVisible)(
                l.default,
                s.default,
                d.default
              ) &&
              (n += e),
            -3 === n && (n = t.length - 1),
            n >= t.length || -2 === n)
          ) {
            (0, _.transitionToPage)(c.default.getHomeLink());
            return;
          }
          let i = -1 === n ? A.FAVORITES : t[n],
            o = r.default.getChannelId(i);
          (0, _.transitionToChannel)(i, o === i ? null : o, !1);
        }, A.NAVIGATION_THROTTLE);
    },
    592864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var o = n("917351"),
        l = n.n(o),
        u = n("77078"),
        a = n("6587"),
        s = n("393027"),
        d = n("923959"),
        r = n("162771"),
        E = n("677099"),
        c = n("287850"),
        _ = n("659500"),
        A = n("722525"),
        C = n("49111"),
        T = n("133335");
      function I(e, t) {
        var n, i;
        return [
          { resourceId: e, type: T.ReadStateTypes.GUILD_EVENT },
          ...((n = e),
          (i = t),
          n === C.ME
            ? c.default.getPrivateChannelIds()
            : (0, a.default)(n, i).map(e => e.id)),
        ];
      }
      var S = l.throttle(function (e, t) {
        var o, l;
        let a,
          {
            channelPredicate: c = (e, t) => !0,
            guildPredicate: T = e => !0,
            guildFeaturePredicate: S = (e, t) => !1,
            withVoiceChannels: f = !1,
          } = t,
          N =
            null !== (o = s.default.getState().guildId) && void 0 !== o
              ? o
              : C.ME,
          O = s.default.getState().channelId,
          R = (function (e, t) {
            let n = [C.ME, ...E.default.getFlattenedGuildIds()],
              i = n.indexOf(e);
            return t > 0
              ? n.slice(i).concat(n.slice(0, i), e)
              : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
          })(N, e),
          L = e > 0 ? 0 : R.length - 1,
          p = I(N, f),
          D = p.indexOf(O) + e;
        for (; null != N && "" !== N; ) {
          if (((a = p[D]), T(N)))
            for (; null != a && "" !== a; ) {
              if ("string" == typeof a) {
                if (c(N, a)) return (0, A.transitionToChannel)(N, a, !1, f);
              } else if ("object" == typeof a && S(a.resourceId, a.type))
                return (
                  N !== r.default.getGuildId() &&
                    (0, A.transitionToChannel)(
                      N,
                      null === (l = d.default.getDefaultChannel(N)) ||
                        void 0 === l
                        ? void 0
                        : l.id
                    ),
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("659707")
                      .then(n.bind(n, "659707"));
                    return t => (0, i.jsx)(e, { ...t, guildId: N });
                  })
                );
              (D += e), (a = p[D]);
            }
          if (((L += e), null == (N = R[L]) || "" === N)) break;
          (p = I(N, f)), (D = e < 0 ? p.length - 1 : 0);
        }
        _.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
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
            return c;
          },
          useFlattenedChannelIdListWithThreads: function () {
            return _;
          },
        }),
        n("424973");
      var i = n("884691"),
        o = n("446674"),
        l = n("123561"),
        u = n("829072"),
        a = n("233069"),
        s = n("870691"),
        d = n("952451"),
        r = n("49111"),
        E = n("695838");
      function c(e, t, n) {
        let i =
          e === E.FAVORITES_RAW_GUILD_ID || e === r.FAVORITES
            ? (0, u.computeFavoritesState)()
            : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
        return A(i, t, n);
      }
      function _(e, t, n, l, u) {
        let a = (0, o.useStateFromStores)([d.default], () =>
            d.default.getGuildChangeSentinel(e)
          ),
          r = (0, o.useStateFromStores)([s.default], () => s.default.version);
        return (0, i.useMemo)(() => A(t, l, u).map(e => e.id), [t, n, a, r]);
      }
      function A(e, t, n) {
        let i = [];
        return (
          e.forEachShownChannel(e => {
            ((0, a.isGuildSelectableChannelType)(e.type) ||
              (t && (0, a.isGuildVocalChannelType)(e.type))) &&
              i.push(e);
          }, n),
          i
        );
      }
    },
    243338: function (e, t, n) {
      "use strict";
      var i, o, l, u;
      n.r(t),
        n.d(t, {
          CreateGuildSlideTypes: function () {
            return i;
          },
          GuildCreationIntents: function () {
            return o;
          },
          CREATE_GUILD_MODAL_KEY: function () {
            return a;
          },
        }),
        ((l = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_GUILD = "customize-guild"),
        (l.CHANNEL_PROMPT = "channel-prompt"),
        (l.JOIN_GUILD = "join-guild"),
        (l.CREATION_INTENT = "creation-intent"),
        ((u = o || (o = {})).FRIENDS = "FRIENDS"),
        (u.COMMUNITY = "COMMUNITY"),
        (u.CLAN = "CLAN");
      let a = "create-guild";
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
        u = n("913144"),
        a = n("191225"),
        s = n("203288"),
        d = n("398604"),
        r = n("401690"),
        E = n("755624"),
        c = n("374363"),
        _ = n("271938"),
        A = n("870691"),
        C = n("42203"),
        T = n("816092"),
        I = n("546463"),
        S = n("957255"),
        f = n("660478"),
        N = n("18494"),
        O = n("282109"),
        R = n("449008"),
        L = n("299039"),
        p = n("319839"),
        D = n("397336");
      let h = null,
        g = null,
        b = new p.default();
      function G() {
        let e = N.default.getChannelId(),
          t = N.default.getVoiceChannelId();
        return (h = e), (g = t), b.clear();
      }
      function M(e) {
        let {
          guild: { id: t },
        } = e;
        return b.clearGuildId(t);
      }
      function m(e) {
        let {
          channel: { guild_id: t },
        } = e;
        return b.clearGuildId(t);
      }
      function P(e) {
        let { guildId: t } = e;
        return b.clearGuildId(t);
      }
      function U(e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
      }
      function y() {
        return null != h && b.nonPositionalChannelIdUpdate(h);
      }
      function K(e) {
        let { channel: t } = e;
        return b.nonPositionalChannelIdUpdate(t.id);
      }
      function H(e) {
        let { id: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
      }
      function B() {
        let e = N.default.getChannelId(),
          t = N.default.getVoiceChannelId(),
          n = h !== e || g !== t;
        return (
          !!n &&
          (o([h, g, e, t])
            .uniq()
            .forEach(e => {
              null != e && b.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
          (h = e),
          (g = t),
          !0)
        );
      }
      function v(e) {
        let { id: t } = e,
          n = C.default.getChannel(t);
        return null == n ? b.clearGuildId(t) : b.clearGuildId(n.guild_id);
      }
      function V(e) {
        let { guildId: t } = e;
        return b.clearGuildId(t);
      }
      function F() {
        return b.updateSubtitles();
      }
      function Y(e) {
        let { guildScheduledEvent: t } = e;
        return b.updateSubtitles(t.guild_id);
      }
      class w extends l.default.Store {
        initialize() {
          this.waitFor(
            r.default,
            _.default,
            A.default,
            C.default,
            T.default,
            a.default,
            I.default,
            s.default,
            d.default,
            E.default,
            S.default,
            f.default,
            N.default,
            O.default,
            c.default
          );
        }
        getGuild(e, t) {
          let n = b.getGuild(e, t);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        getGuildWithoutChangingCommunityRows(e) {
          let t = b.getGuildWithoutCommunityRows(e);
          return { guildChannelsVersion: t.version, guildChannels: t };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let t = b.getGuildWithoutCommunityRows(e),
            n = t.getCategoryFromSection(t.recentsSectionNumber);
          return n.getShownChannelIds().length;
        }
      }
      w.displayName = "ChannelListStore";
      var W = new w(u.default, {
        APPLICATION_FETCH_FAIL: F,
        APPLICATION_FETCH_SUCCESS: F,
        APPLICATION_FETCH: F,
        APPLICATIONS_FETCH_FAIL: F,
        APPLICATIONS_FETCH_SUCCESS: F,
        APPLICATIONS_FETCH: F,
        BACKGROUND_SYNC: G,
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
              .filter(R.isNotNullish)
              .uniq()
              .forEach(e => {
                b.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        BULK_CLEAR_RECENTS: P,
        CACHE_LOADED_LAZY: G,
        CATEGORY_COLLAPSE_ALL: P,
        CATEGORY_COLLAPSE: v,
        CATEGORY_EXPAND_ALL: P,
        CATEGORY_EXPAND: v,
        CHANNEL_ACK: U,
        CHANNEL_COLLAPSE: function (e) {
          var t;
          let { channelId: n } = e;
          return b.clearGuildId(
            null === (t = C.default.getChannel(n)) || void 0 === t
              ? void 0
              : t.guild_id
          );
        },
        CHANNEL_CREATE: m,
        CHANNEL_DELETE: m,
        CHANNEL_LOCAL_ACK: U,
        CHANNEL_MUTE_EXPIRED: P,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: U,
        CHANNEL_SELECT: B,
        CHANNEL_STATUSES: function (e) {
          return b.clearGuildId(e.guildId);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            o(t)
              .map(e => e.guild_id)
              .uniq()
              .forEach(e => {
                b.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        CONNECTION_OPEN_SUPPLEMENTAL: F,
        CONNECTION_OPEN: G,
        CURRENT_USER_UPDATE: G,
        DECAY_READ_STATES: G,
        DEV_TOOLS_DESIGN_TOGGLE_SET: G,
        DISABLE_AUTOMATIC_ACK: U,
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { channelId: t } = e;
          return b.nonPositionalChannelIdUpdate(t);
        },
        DRAWER_CLOSE: y,
        DRAWER_OPEN: y,
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function (e) {
          let { guildId: t, channelId: n } = e;
          return b.updateSubtitles(t, n);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
          F();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
        ENABLE_AUTOMATIC_ACK: U,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
          let { guildId: t } = e;
          return b.updateSubtitles(t);
        },
        GAMES_DATABASE_FETCH_FAIL: F,
        GAMES_DATABASE_FETCH: F,
        GAMES_DATABASE_UPDATE: F,
        GUILD_APPLICATIONS_FETCH_SUCCESS: F,
        GUILD_CREATE: M,
        GUILD_DELETE: M,
        GUILD_FEED_FETCH_SUCCESS: F,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          return _.default.getId() === n.id && b.clearGuildId(t);
        },
        GUILD_MUTE_EXPIRED: P,
        GUILD_ROLE_CREATE: P,
        GUILD_ROLE_DELETE: P,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
        GUILD_ROLE_UPDATE: P,
        GUILD_SCHEDULED_EVENT_CREATE: Y,
        GUILD_SCHEDULED_EVENT_DELETE: Y,
        GUILD_SCHEDULED_EVENT_UPDATE: Y,
        GUILD_TOGGLE_COLLAPSE_MUTED: P,
        GUILD_UPDATE: M,
        IMPERSONATE_STOP: P,
        IMPERSONATE_UPDATE: P,
        LOAD_CHANNELS: function (e) {
          e.channels.forEach(e => {
            let { guildId: t } = e;
            return b.clearGuildId(t);
          });
        },
        LOAD_MESSAGES_SUCCESS: U,
        MESSAGE_ACK: U,
        MESSAGE_CREATE: function (e) {
          let { channelId: t } = e;
          return b.nonPositionalChannelIdUpdate(t);
        },
        MESSAGE_DELETE_BULK: U,
        MESSAGE_DELETE: U,
        NOTIFICATION_SETTINGS_UPDATE: G,
        OVERLAY_INITIALIZE: G,
        PASSIVE_UPDATE_V1: function (e) {
          return null != e.channels && (b.clearGuildId(e.guildId), !0);
        },
        RECOMPUTE_READ_STATES: G,
        RESORT_THREADS: U,
        SET_RECENTLY_ACTIVE_COLLAPSED: G,
        THREAD_CREATE: K,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return b.nonPositionalChannelUpdate(t);
        },
        THREAD_LIST_SYNC: P,
        THREAD_MEMBER_UPDATE: H,
        THREAD_MEMBERS_UPDATE: H,
        THREAD_UPDATE: K,
        TRY_ACK: U,
        UPDATE_CHANNEL_DIMENSIONS: U,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
          let { guildId: t } = e;
          b.updateSubtitles(t);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach(e => {
            let { guild_id: t } = e;
            return b.clearGuildId(t);
          });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
        USER_GUILD_SETTINGS_GUILD_UPDATE: P,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          var t;
          let { settings: n } = e;
          if (n.type !== D.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
          let i =
              null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
            o = !1;
          return (
            null != i &&
              L.default.keys(i).forEach(e => {
                let t = i[e].guildRecentsDismissedAt;
                null != t && (o = b.updateRecentsCategory(e) || o);
              }),
            o
          );
        },
        VOICE_CATEGORY_COLLAPSE: V,
        VOICE_CATEGORY_EXPAND: V,
        VOICE_CHANNEL_SELECT: B,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          return b.nonPositionalChannelIdUpdate(e.id);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = B(),
            i = new Set();
          for (let { channelId: e, oldChannelId: o } of t)
            null != o &&
              !i.has(o) &&
              (b.nonPositionalChannelIdUpdate(o) && (n = !0), i.add(o)),
              null != e &&
                !i.has(e) &&
                (b.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
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
            return g;
          },
          computeFavoritesState: function () {
            return b;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("884691"),
        o = n("917351"),
        l = n.n(o),
        u = n("151426"),
        a = n("191225"),
        s = n("379881"),
        d = n("106682"),
        r = n("398604"),
        E = n("401690"),
        c = n("755624"),
        _ = n("233069"),
        A = n("870691"),
        C = n("42203"),
        T = n("816092"),
        I = n("546463"),
        S = n("957255"),
        f = n("660478"),
        N = n("18494"),
        O = n("282109"),
        R = n("449008"),
        L = n("319839"),
        p = n("695838"),
        D = n("843455");
      let h = [
        a.default,
        s.default,
        r.default,
        E.default,
        c.default,
        A.default,
        C.default,
        I.default,
        S.default,
        f.default,
        N.default,
        O.default,
      ];
      function g() {
        let [e, t] = i.useState(() => b());
        return (
          i.useEffect(() => {
            let e = l.throttle(() => t(b()), 100);
            return (
              h.forEach(t => t.addChangeListener(e)),
              () => h.forEach(t => t.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function b() {
        let e = s.default.getFavoriteChannels(),
          t = O.default.isGuildCollapsed(p.FAVORITES_RAW_GUILD_ID),
          n = N.default.getChannelId(),
          i = C.default.getChannel(n),
          o = N.default.getVoiceChannelId(),
          a = [],
          r = {};
        for (let t in e) {
          let n = e[t],
            i = C.default.getChannel(n.id);
          if (null == i || n.type === u.FavoriteChannelType.CATEGORY) continue;
          let o = (0, d.createFavoritesChannelRecord)(e, n, i);
          if (null == n.parentId || !(n.parentId in e)) {
            a.push(o);
            continue;
          }
          !(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(o);
        }
        function c(n, u) {
          let { isCollapsed: a, isMuted: s } = u;
          return l(n)
            .map(n => {
              var d;
              if (
                !n.isPrivate() &&
                !S.default.can(D.Permissions.VIEW_CHANNEL, n)
              )
                return null;
              let r = null != i && (i.id === n.id || o === n.id),
                c = null != i && i.isThread() && i.parent_id === n.id,
                A =
                  null !==
                    (d =
                      r || c || !a
                        ? E.default.getActiveJoinedRelevantThreadsForParent(
                            n.guild_id,
                            n.id
                          )
                        : E.default.getActiveJoinedUnreadThreadsForParent(
                            n.guild_id,
                            n.id
                          )) && void 0 !== d
                    ? d
                    : {},
                C = (0, L.computeThreadIds)(n, A, i, o, t),
                I = T.default.isCollapsed(n.id),
                N = O.default.isChannelMuted(n.guild_id, n.id),
                R = {
                  id: n.id,
                  record: n,
                  category: u,
                  position: e[n.id].order,
                  threadIds: C,
                  threadCount: l.size(C),
                  isCollapsed: I,
                  isMuted: N,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, L.computeSubtitle)(n, I, !1),
                };
              return r || c || f.default.getMentionCount(n.id) > 0
                ? R
                : (t && N) ||
                    (a &&
                      (N ||
                        s ||
                        (0, _.isVoiceChannel)(n.type) ||
                        ((0, _.isGuildReadableType)(n.type) &&
                          !1 === f.default.hasUnread(n.id))))
                  ? null
                  : R;
            })
            .filter(R.isNotNullish)
            .sortBy(e => {
              let { record: t } = e;
              return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
        }
        let I = null,
          h = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map(e => e.id),
            getShownChannelAndThreadIds: () => a.map(e => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
              return null == I && (I = c(a, this)), I;
            },
          },
          g = l(e)
            .values()
            .filter(e => e.type === u.FavoriteChannelType.CATEGORY)
            .sortBy(e => e.order)
            .map(e => {
              var t;
              let { id: n, order: i } = e,
                o = s.default.getCategoryRecord(n),
                l = null !== (t = r[n]) && void 0 !== t ? t : [],
                u = O.default.isChannelMuted(p.FAVORITES_RAW_GUILD_ID, n),
                a = A.default.isCollapsed(n),
                d = null;
              return {
                isMuted: u,
                isCollapsed: a,
                record: o,
                id: n,
                position: i,
                getChannelRecords: () => l,
                getShownChannelIds: () => l.map(e => e.id),
                getShownChannelAndThreadIds: () => l.map(e => e.id),
                isEmpty: () => 0 === l.length,
                get channelList() {
                  return null == d && (d = c(l, this)), d;
                },
              };
            })
            .value(),
          b = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          G = {
            id: p.FAVORITES_RAW_GUILD_ID,
            hideMutedChannels: t,
            favoritesSectionNumber: 1,
            recentsSectionNumber: 2,
            voiceChannelsSectionNumber: -999,
            getSections: () => [
              0,
              0,
              0,
              h.channelList.length,
              ...g.map(e => Math.max(1, e.channelList.length)),
            ],
            isPlaceholderRow(e, t) {
              if (e < L.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t)
                return !1;
              let n = g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY];
              return 0 === n.channelList.length;
            },
            getCategoryFromSection: e =>
              e === L.SECTION_INDEX_UNCATEGORIZED_CHANNELS
                ? h
                : g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY],
            getNamedCategoryFromSection: e =>
              g[e - L.SECTION_INDEX_FIRST_NAMED_CATEGORY],
            getChannelFromSectionRow(e, t) {
              let n = this.getCategoryFromSection(e);
              return null == n || null == n.channelList[t]
                ? null
                : { category: n, channel: n.channelList[t] };
            },
            getCommunitySection: () => b,
            getFirstVoiceChannel: () => null,
            getSectionRowsFromChannel(e) {
              let t = [h, ...g];
              for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                  if (t[n].channelList[i].id === e)
                    return [
                      {
                        section: n + L.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
                        row: i,
                      },
                    ];
              return [];
            },
            forEachShownChannel(e) {
              let t = [h, ...g];
              for (let n of t)
                for (let t of n.channelList)
                  for (let n of (e(t.record), t.threadIds)) {
                    let t = C.default.getChannel(n);
                    null != t && e(t);
                  }
            },
            forEachChannel(e) {
              let t = [h, ...g];
              for (let n of t) for (let t of n.getChannelRecords()) e(t);
            },
            getSlicedChannels: e => [[], e, []],
            getChannels: () => [],
          };
        return G;
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
    104589: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          show: function () {
            return b;
          },
          hide: function () {
            return G;
          },
          search: function () {
            return M;
          },
          selectResult: function () {
            return m;
          },
          switchToResult: function () {
            return P;
          },
        }),
        n("781738"),
        n("222007");
      var i = n("913144"),
        o = n("450911"),
        l = n("255397"),
        u = n("406189"),
        a = n("987317"),
        s = n("123225"),
        d = n("537325"),
        r = n("144491"),
        E = n("239380"),
        c = n("233069"),
        _ = n("42203"),
        A = n("686470"),
        C = n("18494"),
        T = n("162771"),
        I = n("599110"),
        S = n("340454"),
        f = n("116460"),
        N = n("49111"),
        O = n("724210");
      let R = () => Promise.resolve();
      {
        let e = n("780009");
        R = e.playApplication;
      }
      let L = Object.freeze({
          [s.AutocompleterQuerySymbols.USER]: s.AutocompleterResultTypes.USER,
          [s.AutocompleterQuerySymbols.TEXT_CHANNEL]:
            s.AutocompleterResultTypes.TEXT_CHANNEL,
          [s.AutocompleterQuerySymbols.VOICE_CHANNEL]:
            s.AutocompleterResultTypes.VOICE_CHANNEL,
          [s.AutocompleterQuerySymbols.GUILD]: s.AutocompleterResultTypes.GUILD,
          [s.AutocompleterQuerySymbols.APPLICATION]:
            s.AutocompleterResultTypes.APPLICATION,
        }),
        p = new RegExp(
          "^"
            .concat(s.AutocompleterQuerySymbols.USER, "|")
            .concat(s.AutocompleterQuerySymbols.TEXT_CHANNEL, "|")
            .concat(s.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\")
            .concat(s.AutocompleterQuerySymbols.GUILD, "|\\")
            .concat(s.AutocompleterQuerySymbols.APPLICATION)
        );
      function D(e) {
        let [t, n] = (function (e) {
          var t;
          let n = e.charAt(0),
            i = null !== (t = L[n]) && void 0 !== t ? t : null;
          return [e.replace(p, ""), i];
        })(e);
        return { query: t, queryMode: n };
      }
      function h(e, t) {
        let {
            results: n,
            queryMode: i,
            query: o,
            maxQueryLength: l,
          } = f.default.getProps(),
          u = T.default.getGuildId(),
          a = C.default.getChannelId(u),
          d =
            n[
              (0, s.findNextSelectedResult)(s.FindResultDirections.DOWN, -1, n)
            ],
          r = S.default.isEmail(o),
          E = S.default.isPhoneNumber(o),
          A = S.default.isUserTagLike(o),
          N = null != a && (0, O.isStaticChannelRoute)(a),
          R = {
            current_channel_id: N ? void 0 : a,
            current_channel_static_route: N ? a : void 0,
            current_guild_id: u,
            query_mode: null != i ? i : "GENERAL",
            query_length: o.length,
            max_query_length: l,
            is_email_like: r,
            is_phone_like: E,
            is_username_like: A,
            query: r || E || A ? null : o,
            top_result_type: null != d ? d.type : null,
            top_result_score: null != d ? d.score : null,
            num_results_total: f.default.getResultTotals(),
            num_results_users: f.default.getResultTotals(
              s.AutocompleterResultTypes.USER
            ),
            num_results_text_channels: f.default.getResultTotals(
              s.AutocompleterResultTypes.TEXT_CHANNEL
            ),
            num_results_voice_channels: f.default.getResultTotals(
              s.AutocompleterResultTypes.VOICE_CHANNEL
            ),
            num_results_guilds: f.default.getResultTotals(
              s.AutocompleterResultTypes.GUILD
            ),
            num_results_group_dms: f.default.getResultTotals(
              s.AutocompleterResultTypes.GROUP_DM
            ),
          };
        if (null != a) {
          let e = _.default.getChannel(a);
          R.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: i, record: o } = t;
          switch (
            ((R.selected_type = e),
            (R.selected_score = i),
            (R.selected_index = n.indexOf(t)),
            e)
          ) {
            case s.AutocompleterResultTypes.GUILD:
              R.selected_guild_id = o.id;
              break;
            case s.AutocompleterResultTypes.TEXT_CHANNEL:
            case s.AutocompleterResultTypes.VOICE_CHANNEL:
              o instanceof c.ChannelRecordBase &&
                (R.selected_guild_id = null != o.guild_id ? o.guild_id : null),
                (R.selected_channel_id = o.id);
              break;
            case s.AutocompleterResultTypes.GROUP_DM:
              R.selected_channel_id = o.id;
              break;
            case s.AutocompleterResultTypes.USER:
              R.selected_user_id = o.id;
          }
        }
        I.default.track(e, R);
      }
      function g() {
        i.default.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function b() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (f.default.isOpen()) return;
          let n = T.default.getGuildId(),
            i = C.default.getChannelId(n);
          if (null != i) {
            let e = _.default.getChannel(i);
            t = null != e ? e.type : null;
          }
          I.default.track(N.AnalyticEvents.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
          });
        })(e),
          i.default.dispatch({ type: "QUICKSWITCHER_SHOW", ...D(t) });
      }
      function G() {
        h(N.AnalyticEvents.QUICKSWITCHER_CLOSED), g();
      }
      function M(e) {
        i.default.dispatch({ type: "QUICKSWITCHER_SEARCH", ...D(e) });
      }
      function m(e) {
        i.default.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function P(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        g(), h(N.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: c, record: C } = e,
          T = { page: N.AnalyticsPages.QUICK_SWITCHER };
        switch (c) {
          case s.AutocompleterResultTypes.GUILD:
            (0, E.transitionToGuild)(C.id, { navigationReplace: !0 });
            break;
          case s.AutocompleterResultTypes.TEXT_CHANNEL:
            null != (t = _.default.getChannel(C.id)) &&
              (0, r.transitionToChannel)(t.id, {
                state: { analyticsSource: T },
                navigationReplace: !0,
              });
            break;
          case s.AutocompleterResultTypes.VOICE_CHANNEL:
            null != (t = _.default.getChannel(C.id)) &&
              (n
                ? l.default.updateChatOpen(C.id, !0)
                : a.default.selectVoiceChannel(C.id),
              (0, r.transitionToChannel)(t.id, {
                state: { analyticsSource: T },
                navigationReplace: !0,
              }));
            break;
          case s.AutocompleterResultTypes.USER:
            o.default.openPrivateChannel([C.id], !1, !1, "Quickswitcher"),
              u.default.channelListScrollTo(
                N.ME,
                _.default.getDMFromUserId(C.id)
              );
            break;
          case s.AutocompleterResultTypes.GROUP_DM:
            (0, r.transitionToChannel)(C.id, { navigationReplace: !0 }),
              u.default.channelListScrollTo(N.ME, C.id);
            break;
          case s.AutocompleterResultTypes.APPLICATION:
            let I = A.default.getActiveLibraryApplication(C.id);
            R(C.id, I, {
              analyticsParams: {
                source: N.AnalyticsLocations.QUICK_SWITCHER,
                location: N.AnalyticsLocations.QUICK_SWITCHER,
              },
            });
            break;
          case s.AutocompleterResultTypes.LINK:
            (0, d.default)(C.path, { navigationReplace: !0 });
        }
        i.default.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    791823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("70102");
      var i = n("446674"),
        o = n("913144");
      let l = null;
      class u extends i.default.Store {
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
      u.displayName = "ApplicationStoreLocationStore";
      var a = new u(o.default, {
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
            return I;
          },
        });
      var i,
        o,
        l,
        u = n("446674"),
        a = n("913144"),
        s = n("42203"),
        d = n("476108"),
        r = n("305961"),
        E = n("18494"),
        c = n("287850"),
        _ = n("49111");
      let A = (null !==
        (l =
          null === (o = window) || void 0 === o
            ? void 0
            : null === (i = o.location) || void 0 === i
              ? void 0
              : i.pathname) && void 0 !== l
        ? l
        : ""
      ).startsWith(_.Routes.ACTIVITIES)
        ? _.Routes.ACTIVITIES
        : null;
      function C(e) {
        let { link: t } = e;
        if (A === t) return !1;
        A = t;
      }
      class T extends u.default.Store {
        initialize() {
          this.waitFor(d.default, c.default, E.default, r.default, s.default);
        }
        getHomeLink() {
          return null != A ? A : d.default.fallbackRoute;
        }
      }
      T.displayName = "AppViewStore";
      var I = new T(a.default, {
        OVERLAY_INITIALIZE: function () {
          let e = c.default.getPrivateChannelIds(),
            t = E.default.getChannelId(_.ME);
          (null != t || null != e[0]) &&
            (A = _.Routes.CHANNEL(_.ME, null != t ? t : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: C,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          C({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          if (null == A || !A.startsWith(_.Routes.APPLICATION_STORE)) return !1;
          A = _.Routes.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          if (null == t && null != n) {
            let e = _.Routes.CHANNEL(_.ME, n);
            if (e !== A) return (A = e), !0;
          }
          return !1;
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          null == t.guild_id &&
            null != t.id &&
            null != A &&
            A === _.Routes.CHANNEL(_.ME, t.id) &&
            (A = null);
        },
      });
    },
  },
]);
//# sourceMappingURL=b30b00f1ceb5f5f4d58d.js.map
