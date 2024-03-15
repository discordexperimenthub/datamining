(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81423"],
  {
    289867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("913144"),
        l = {
          toggleMembersSection() {
            i.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            i.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            i.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    102457: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CALL_ACCEPT: function () {
            return o;
          },
          CALL_START: function () {
            return a;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (
              i.ComponentDispatch.hasSubscribers(l.ComponentActions.CALL_ACCEPT)
            )
              return (
                i.ComponentDispatch.dispatch(l.ComponentActions.CALL_ACCEPT), !1
              );
          },
        },
        a = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (
              i.ComponentDispatch.hasSubscribers(l.ComponentActions.CALL_START)
            )
              return (
                i.ComponentDispatch.dispatch(l.ComponentActions.CALL_START, e),
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
        l = n("722525"),
        o = n("393414"),
        a = n("239380"),
        u = n("18494"),
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
                (0, l.transitionToChannel)(t, u.default.getChannelId(t)));
            }
            return null != e && (0, a.transitionToGuild)(e), !1;
          },
        },
        A = {
          binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.back)(), !1),
        },
        C = {
          binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.forward)(), !1),
        };
    },
    863536: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_DM_GROUP: function () {
            return u;
          },
        });
      var i = n("722525"),
        l = n("162771"),
        o = n("659500"),
        a = n("49111");
      let u = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != l.default.getGuildId() && (0, i.transitionToChannel)(a.ME),
          o.ComponentDispatch.safeDispatch(a.ComponentActions.TOGGLE_DM_CREATE),
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
        l = n("616265"),
        o = n("243338");
      let a = {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
          (0, i.hasModalOpen)(o.CREATE_GUILD_MODAL_KEY)
            ? l.default.updateCreateGuildModal({
                slide: o.CreateGuildSlideTypes.JOIN_GUILD,
                location: "Keyboard Shortcut",
              })
            : l.default.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
      };
    },
    211314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BROWSER_DEVTOOLS: function () {
            return l;
          },
        });
      var i = n("773336");
      let l = {
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
            return o;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(),
            e.stopPropagation(),
            i.ComponentDispatch.dispatch(l.ComponentActions.FOCUS_SEARCH, {
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
        l = n("945956"),
        o = n("49111");
      let a = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(), e.stopPropagation();
          let t = l.default.getGuildId(),
            n = l.default.getChannelId();
          return (
            null != n && (0, i.transitionToChannel)(null != t ? t : o.ME, n), !1
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
        l = n("255397"),
        o = n("819689"),
        a = n("267363"),
        u = n("244201"),
        s = n("191145"),
        d = n("529805"),
        r = n("685841"),
        E = n("208021"),
        c = n("582713"),
        _ = n("328511"),
        A = n("467094"),
        C = n("982108"),
        T = n("42203"),
        S = n("474643"),
        I = n("836417"),
        f = n("377253"),
        p = n("660478"),
        N = n("18494"),
        O = n("162771"),
        R = n("144747"),
        L = n("471671"),
        D = n("659500"),
        h = n("49111");
      let g = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (L.default.isElementFullScreen()) return !1;
          if (
            D.ComponentDispatch.hasSubscribers(h.ComponentActions.CALL_DECLINE)
          )
            return (
              D.ComponentDispatch.dispatch(h.ComponentActions.CALL_DECLINE), !1
            );
          if (R.default.close()) return !1;
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
            let t = (0, u.getWindowDispatchForElement)(e.target);
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
          let t = O.default.getGuildId(),
            n = N.default.getChannelId(t),
            o = T.default.getChannel(n),
            a = C.default.getSection(n, null == o ? void 0 : o.isDM()),
            d =
              a === h.ChannelSections.SIDEBAR_CHAT
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
              ? (l.default.updateChatOpen(n, !1), !1)
              : (D.ComponentDispatch.dispatch(
                  h.ComponentActions.SCROLLTO_PRESENT
                ),
                !1)
            : (E.default.closeChannelSidebar(n), !1);
        },
      };
      function b(e) {
        if (null != e) {
          if (I.default.isEditingAny(e)) return o.default.endEditMessage(e), !1;
          if (null != r.default.getPendingReply(e))
            return (0, d.deletePendingReply)(e), !1;
          if (
            null != _.default.getStickerPreview(e, S.DraftType.ChannelMessage)
          )
            return (
              (0, A.clearStickerPreview)(e, S.DraftType.ChannelMessage), !1
            );
        }
      }
      function G(e) {
        if (null == e) return !1;
        let t = !1,
          n = f.default.getMessages(e);
        return (
          n.hasMoreAfter &&
            (o.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), (t = !0)),
          p.default.hasUnread(e) && ((0, a.ack)(e), (t = !0)),
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
            return E;
          },
        });
      var i = n("819689"),
        l = n("542827"),
        o = n("952451"),
        a = n("377253"),
        u = n("18494"),
        s = n("162771"),
        d = n("659500"),
        r = n("49111");
      let E = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = s.default.getGuildId();
          if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, l.default)([e]);
          let t = u.default.getChannelId(e);
          if (null == t) return;
          let n = a.default.getMessages(t);
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
            return a;
          },
        });
      var i = n("819689"),
        l = n("660478"),
        o = n("18494");
      let a = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = o.default.getChannelId();
          if (null != e) {
            let t = l.default.ackMessageId(e);
            null != t &&
              l.default.getOldestUnreadTimestamp(e) > 0 &&
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
        l = n("646186"),
        o = n("162771");
      let a = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          let t =
            null !== (e = o.default.getGuildId()) && void 0 !== e ? e : void 0;
          (0, l.goToAppDirectory)({
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
            return o;
          },
        });
      var i = n("104589"),
        l = n("778588");
      let o = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!l.default.hasLayers() && (0, i.show)(), !1),
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
        l = n("722525"),
        o = n("945956"),
        a = n("18494"),
        u = n("49111");
      let s = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!o.default.isConnected()) return !1;
          let t =
              null !== (e = o.default.getGuildId()) && void 0 !== e ? e : u.ME,
            n = a.default.getChannelId(t);
          return (
            (0, l.transitionToChannel)(t, n),
            i.default.channelListScrollTo(t, o.default.getChannelId()),
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
            return o;
          },
          SCROLL_DOWN: function () {
            return a;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatchToLastSubscribed(
              l.ComponentActions.SCROLL_PAGE_UP
            ),
            !1
          ),
        },
        a = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatchToLastSubscribed(
              l.ComponentActions.SCROLL_PAGE_DOWN
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
            return u;
          },
        });
      var i = n("558986"),
        l = n("659500"),
        o = n("49111"),
        a = n("958706");
      let u = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.initiateEmojiInteraction)(
            a.EmojiInteractionPoint.SearchEmojiKeybindPressed
          ),
          l.ComponentDispatch.dispatchToLastSubscribed(
            o.ComponentActions.TOGGLE_EMOJI_POPOUT
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
            return o;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatchToLastSubscribed(
            l.ComponentActions.TOGGLE_GIF_PICKER
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
            return o;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatchToLastSubscribed(
            l.ComponentActions.TOGGLE_STICKER_PICKER
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
            return l;
          },
          SERVER_PREV: function () {
            return o;
          },
        });
      var i = n("903147");
      let l = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: e => (
            e.preventDefault(), e.stopPropagation(), (0, i.default)(), !1
          ),
        },
        o = {
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
        l = n("659500"),
        o = n("49111");
      let a = {
        binds: ["return"],
        action() {
          if (
            !i.default.keyboardModeEnabled &&
            l.ComponentDispatch.hasSubscribers(o.ComponentActions.MODAL_SUBMIT)
          )
            return (
              l.ComponentDispatch.dispatch(o.ComponentActions.MODAL_SUBMIT), !1
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
        l = n("206230"),
        o = n("778588"),
        a = n("42887"),
        u = n("945956"),
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
            let S = null != T && "BODY" === T.tagName;
            return (
              !(
                (l.default.keyboardModeEnabled &&
                  !S &&
                  !/^[a-zA-Z0-9]$/.test(t)) ||
                s.ComponentDispatch.hasSubscribers(
                  E.ComponentActions.MODAL_CLOSE
                ) ||
                o.default.hasLayers()
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
                    u.default.isConnected() &&
                    a.default.getMode() === E.InputModes.PUSH_TO_TALK &&
                    !a.default.isSelfMute() &&
                    Object.values(a.default.getShortcuts())
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
            return l;
          },
          TOGGLE_DEAFEN: function () {
            return o;
          },
        });
      var i = n("629109");
      let l = {
          binds: ["mod+shift+m"],
          comboKeysBindGlobal: !0,
          action: () => (i.default.toggleSelfMute({ usedKeybind: !0 }), !1),
        },
        o = {
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
        l = n("870691"),
        o = n("923959"),
        a = n("162771"),
        u = n("49111");
      let s = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = a.default.getGuildId();
          if (null == e) return !1;
          let t = o.default
            .getChannels(e)
            [u.ChannelTypes.GUILD_CATEGORY].some(e => {
              let { channel: t } = e;
              return "null" !== t.id && !l.default.isCollapsed(t.id);
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
            return o;
          },
        });
      var i = n("659500"),
        l = n("49111");
      let o = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.ComponentDispatch.dispatch(l.ComponentActions.TOGGLE_CHANNEL_PINS),
          !1
        ),
      };
    },
    640968: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_HELP: function () {
            return l;
          },
        });
      var i = n("701909");
      let l = {
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
        l = n("244030"),
        o = n("386867");
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.hasModalOpen)(o.KEYBOARD_SHORTCUT_MODAL_KEY)
            ? l.hide()
            : l.show(),
          !1
        ),
      };
    },
    992642: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TOGGLE_INBOX_UNREADS_TAB: function () {
            return u;
          },
          MARK_TOP_INBOX_CHANNEL_READ: function () {
            return s;
          },
        });
      var i = n("917351"),
        l = n.n(i),
        o = n("659500"),
        a = n("49111");
      let u = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (
            o.ComponentDispatch.dispatch(
              a.ComponentActions.TOGGLE_INBOX_UNREADS_TAB
            ),
            !1
          ),
        },
        s = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: l.debounce(
            () => {
              if (
                o.ComponentDispatch.hasSubscribers(
                  a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ
                )
              )
                return (
                  o.ComponentDispatch.dispatch(
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
            return A;
          },
        });
      var i = n("298386"),
        l = n("255397"),
        o = n("289867"),
        a = n("191145"),
        u = n("217513"),
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
            return l.default.updateChatOpen(t, !a.default.getChatOpen(t)), !1;
          if (null != t && null != n && n.type === i.ChannelTypes.DM) {
            let e = d.default.getSection(t, null == n ? void 0 : n.isDM()),
              i = (0, u.getDisplayProfile)(n.getRecipientId()),
              l = e === _.ChannelSections.PROFILE;
            return (
              (0, s.trackProfilePanelToggled)(i, !l),
              o.default.toggleProfilePanelSection(),
              !1
            );
          }
          return o.default.toggleMembersSection(), !1;
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
            return S;
          },
          MENTION_PREV: function () {
            return I;
          },
        });
      var i = n("592864"),
        l = n("615387"),
        o = n("393027"),
        a = n("233069"),
        u = n("42203"),
        s = n("660478"),
        d = n("282109"),
        r = n("49111"),
        E = n("133335");
      let c = (e, t) => {
          let n = u.default.getChannel(t);
          return (
            null != n &&
            ((0, a.isPrivate)(n.type)
              ? !!s.default.getMentionCount(t)
              : (!d.default.isChannelMuted(e, t) ||
                  s.default.getMentionCount(t) > 0) &&
                (0, l.getHasImportantUnread)(n))
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
              null !== (e = o.default.getState().guildId) && void 0 !== e
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
              null !== (e = o.default.getState().guildId) && void 0 !== e
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
            return u;
          },
        });
      var i = n("42203"),
        l = n("18494"),
        o = n("659500"),
        a = n("49111");
      let u = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = i.default.getChannel(l.default.getChannelId());
          return (
            null != e &&
              !e.isManaged() &&
              o.ComponentDispatch.dispatch(a.ComponentActions.UPLOAD_FILE),
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
            return u;
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
        l = n("206230"),
        o = n("49111");
      function a(e) {
        return o.Accessibility.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              o.Accessibility.ZOOM_SCALES.indexOf(l.default.zoom) + e,
              o.Accessibility.ZOOM_SCALES.length - 1
            )
          )
        ];
      }
      let u = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(a(1)), !1),
        },
        s = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(a(-1)), !1),
        },
        d = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.setZoom)(o.Accessibility.ZOOM_DEFAULT), !1),
        };
      var r = { ZOOM_IN: u, ZOOM_OUT: s, ZOOM_RESET: d };
    },
    493765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KeybindGroup: function () {
            return i;
          },
          getNameForKeybindGroup: function () {
            return B;
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
        l,
        o = n("102457"),
        a = n("55562"),
        u = n("863536"),
        s = n("786720"),
        d = n("211314"),
        r = n("218143"),
        E = n("586819"),
        c = n("953260"),
        _ = n("798232"),
        A = n("278412"),
        C = n("222301"),
        T = n("903376"),
        S = n("242149"),
        I = n("714208"),
        f = n("24312"),
        p = n("30269"),
        N = n("709079"),
        O = n("616903"),
        R = n("271524"),
        L = n("333949"),
        D = n("945924"),
        h = n("648900"),
        g = n("838021"),
        b = n("745991"),
        G = n("640968"),
        m = n("347445"),
        M = n("992642"),
        y = n("200431"),
        P = n("493334"),
        U = n("809392"),
        K = n("202035"),
        H = n("49111"),
        v = n("782340");
      function B(e) {
        switch (e) {
          case "NAVIGATION":
            return v.default.Messages
              .USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
          case "VOICE_AND_VIDEO":
            return v.default.Messages
              .USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
          case "CHAT":
            return v.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
          case "MISCELLANEOUS":
            return v.default.Messages
              .USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
          case "MESSAGE":
            return v.default.Messages
              .USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
          case "DND":
            return v.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
        }
      }
      function V(e) {
        switch (e) {
          case "MESSAGE":
            return v.default.Messages
              .USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
          case "DND":
            return v.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
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
      ((l = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (l.CHAT = "CHAT"),
        (l.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (l.MISCELLANEOUS = "MISCELLANEOUS"),
        (l.MESSAGE = "MESSAGE"),
        (l.DND = "DND");
      let Y = {
        [H.KeybindActions.SERVER_NEXT]: R.SERVER_NEXT,
        [H.KeybindActions.SERVER_PREV]: R.SERVER_PREV,
        [H.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
        [H.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
        [H.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
        [H.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
        [H.KeybindActions.UNREAD_NEXT]: P.UNREAD_NEXT,
        [H.KeybindActions.UNREAD_PREV]: P.UNREAD_PREV,
        [H.KeybindActions.MENTION_CHANNEL_NEXT]: P.MENTION_NEXT,
        [H.KeybindActions.MENTION_CHANNEL_PREV]: P.MENTION_PREV,
        [H.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
        [H.KeybindActions.JUMP_TO_GUILD]: c.JUMP_TO_GUILD,
        [H.KeybindActions.SUBMIT]: L.SUBMIT,
        [H.KeybindActions.TEXTAREA_FOCUS]: D.TEXTAREA_FOCUS,
        [H.KeybindActions.MARK_CHANNEL_READ]: _.MARK_CHANNEL_READ,
        [H.KeybindActions.MARK_SERVER_READ]: A.MARK_SERVER_READ,
        [H.KeybindActions.TOGGLE_CHANNEL_PINS]: b.TOGGLE_CHANNEL_PINS,
        [H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: M.TOGGLE_INBOX_UNREADS_TAB,
        [H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]:
          M.MARK_TOP_INBOX_CHANNEL_READ,
        [H.KeybindActions.TOGGLE_USERS]: y.TOGGLE_USERS,
        [H.KeybindActions.TOGGLE_HELP]: G.TOGGLE_HELP,
        [H.KeybindActions.TOGGLE_MUTE]: h.TOGGLE_MUTE,
        [H.KeybindActions.TOGGLE_DEAFEN]: h.TOGGLE_DEAFEN,
        [H.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]:
          g.TOGGLE_CATEGORY_COLLAPSED,
        [H.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
        [H.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
        [H.KeybindActions.QUICKSWITCHER_SHOW]: S.QUICKSWITCHER_SHOW,
        [H.KeybindActions.CREATE_DM_GROUP]: u.CREATE_DM_GROUP,
        [H.KeybindActions.SEARCH_EMOJIS]: p.SEARCH_EMOJIS,
        [H.KeybindActions.SEARCH_GIFS]: N.SEARCH_GIFS,
        [H.KeybindActions.SEARCH_STICKERS]: O.SEARCH_STICKERS,
        [H.KeybindActions.TOGGLE_HOTKEYS]: m.TOGGLE_HOTKEYS,
        [H.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
        [H.KeybindActions.CREATE_GUILD]: s.CREATE_GUILD,
        [H.KeybindActions.UPLOAD_FILE]: U.UPLOAD_FILE,
        [H.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
        [H.KeybindActions.CALL_ACCEPT]: o.CALL_ACCEPT,
        [H.KeybindActions.CALL_START]: o.CALL_START,
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
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: F(
              H.KeybindActions.SERVER_PREV,
              H.KeybindActions.SERVER_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: F(
              H.KeybindActions.CHANNEL_PREV,
              H.KeybindActions.CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: F(
              H.KeybindActions.NAVIGATE_BACK,
              H.KeybindActions.NAVIGATE_FORWARD
            ),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: F(
              H.KeybindActions.UNREAD_PREV,
              H.KeybindActions.UNREAD_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: F(
              H.KeybindActions.MENTION_CHANNEL_PREV,
              H.KeybindActions.MENTION_CHANNEL_NEXT
            ),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: F(H.KeybindActions.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: F(H.KeybindActions.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: F(H.KeybindActions.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: F(H.KeybindActions.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0,
          },
          {
            description: v.default.Messages.DND_OPERATION_LABEL_START,
            binds: ["mod+d"],
            group: "DND",
          },
          {
            description: v.default.Messages.DND_OPERATION_LABEL_MOVE,
            binds: ["up", "down"],
            group: "DND",
          },
          {
            description: v.default.Messages.DND_OPERATION_LABEL_DROP,
            binds: ["spacebar", "enter"],
            group: "DND",
          },
          {
            description: v.default.Messages.DND_OPERATION_LABEL_CANCEL,
            binds: ["esc"],
            group: "DND",
            groupEnd: !0,
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: F(H.KeybindActions.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: F(H.KeybindActions.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: F(H.KeybindActions.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: F(H.KeybindActions.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: F(H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: F(H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: F(H.KeybindActions.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: F(H.KeybindActions.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: F(H.KeybindActions.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: F(H.KeybindActions.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: F(H.KeybindActions.SCROLL_UP, H.KeybindActions.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: F(H.KeybindActions.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: F(H.KeybindActions.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: F(H.KeybindActions.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: F(H.KeybindActions.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: F(H.KeybindActions.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: F(H.KeybindActions.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: F(H.KeybindActions.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: F(H.KeybindActions.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: F(H.KeybindActions.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: F(H.KeybindActions.FOCUS_SEARCH),
            group: "MISCELLANEOUS",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0,
          },
          {
            description: v.default.Messages.EDIT_MESSAGE,
            binds: ["e"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.DELETE_MESSAGE,
            binds: ["backspace"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.PIN_MESSAGE,
            binds: ["p"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.ADD_REACTION,
            binds: ["plus"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.MESSAGE_ACTION_REPLY,
            binds: ["r"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.COPY_TEXT,
            binds: ["mod+c"],
            group: "MESSAGE",
          },
          {
            description: v.default.Messages.MARK_UNREAD,
            binds: ["alt+enter"],
            group: "MESSAGE",
          },
          {
            description:
              v.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
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
        l = n("677315"),
        o = n("290886"),
        a = n("288518"),
        u = n("486503"),
        s = n("393027"),
        d = n("845579"),
        r = n("686470"),
        E = n("791823"),
        c = n("287850"),
        _ = n("449008"),
        A = n("722525"),
        C = n("49111"),
        T = n("724210");
      let S = () => {
        let e =
          a.default.getMessageRequestsCount() > 0 ||
          u.default.getSpamChannelsCount() > 0;
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
      function I(e, t) {
        (0, A.transitionToChannel)(e, t);
      }
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = s.default.getState().guildId;
        null == t
          ? !(function (e) {
              var t;
              let { channelId: n, path: i, basePath: l } = s.default.getState(),
                o = c.default.getPrivateChannelIds(),
                a = __OVERLAY__ ? o : [...S(), ...o];
              let u =
                  null == n
                    ? ((t = null != i ? i : l),
                      S().findIndex(e => t.startsWith(e)))
                    : null != n
                      ? a.indexOf(n)
                      : 0,
                d = u + e;
              d >= a.length ? (d = 0) : d < 0 && (d = a.length - 1);
              let r = a[d];
              S().includes(r)
                ? !(function (e) {
                    let t = E.default.getCurrentRoute();
                    e === C.Routes.APPLICATION_STORE && null != t
                      ? (0, A.transitionToPage)(t)
                      : (0, A.transitionToPage)(e);
                  })(r)
                : I(C.ME, r);
            })(e)
          : !(function (e, t) {
              var n, a;
              let u = s.default.getState().channelId,
                d = (0, i.default)(t).map(e => e.id);
              ((0, l.canSeeGuildHome)(t) || (0, o.canSeeOnboardingHome)(t)) &&
                d.unshift(T.StaticChannelRoute.GUILD_HOME);
              let r = null != u ? d.indexOf(u) : -1;
              let E =
                ((n = r + e), (a = d.length), n < 0 ? a - 1 : n >= a ? 0 : n);
              I(t, d[E]);
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
        l = n.n(i),
        o = n("379881"),
        a = n("15131"),
        u = n("393027"),
        s = n("42203"),
        d = n("957255"),
        r = n("18494"),
        E = n("677099"),
        c = n("330338"),
        _ = n("722525"),
        A = n("49111"),
        C = l.throttle(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = E.default.getFlattenedGuildIds(),
            n = (function (e) {
              let t = u.default.getState().guildId;
              if (null == t) return -2;
              if (t === A.FAVORITES) return -1;
              let n = e.indexOf(t);
              return -1 === n ? -2 : n;
            })(t);
          if (
            (-1 === (n += e) &&
              !(0, a.isFavoritesGuildVisible)(
                o.default,
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
            l = r.default.getChannelId(i);
          (0, _.transitionToChannel)(i, l === i ? null : l, !1);
        }, A.NAVIGATION_THROTTLE);
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
      var l = n("917351"),
        o = n.n(l),
        a = n("77078"),
        u = n("6587"),
        s = n("393027"),
        d = n("923959"),
        r = n("162771"),
        E = n("677099"),
        c = n("287850"),
        _ = n("659500"),
        A = n("722525"),
        C = n("49111"),
        T = n("133335");
      function S(e, t) {
        var n, i;
        return [
          { resourceId: e, type: T.ReadStateTypes.GUILD_EVENT },
          ...((n = e),
          (i = t),
          n === C.ME
            ? c.default.getPrivateChannelIds()
            : (0, u.default)(n, i).map(e => e.id)),
        ];
      }
      var I = o.throttle(function (e, t) {
        var l, o;
        let u,
          {
            channelPredicate: c = (e, t) => !0,
            guildPredicate: T = e => !0,
            guildFeaturePredicate: I = (e, t) => !1,
            withVoiceChannels: f = !1,
          } = t,
          p =
            null !== (l = s.default.getState().guildId) && void 0 !== l
              ? l
              : C.ME,
          N = s.default.getState().channelId,
          O = (function (e, t) {
            let n = [C.ME, ...E.default.getFlattenedGuildIds()],
              i = n.indexOf(e);
            return t > 0
              ? n.slice(i).concat(n.slice(0, i), e)
              : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
          })(p, e),
          R = e > 0 ? 0 : O.length - 1,
          L = S(p, f),
          D = L.indexOf(N) + e;
        for (; null != p && "" !== p; ) {
          if (((u = L[D]), T(p)))
            for (; null != u && "" !== u; ) {
              if ("string" == typeof u) {
                if (c(p, u)) return (0, A.transitionToChannel)(p, u, !1, f);
              } else if ("object" == typeof u && I(u.resourceId, u.type))
                return (
                  p !== r.default.getGuildId() &&
                    (0, A.transitionToChannel)(
                      p,
                      null === (o = d.default.getDefaultChannel(p)) ||
                        void 0 === o
                        ? void 0
                        : o.id
                    ),
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("659707")
                      .then(n.bind(n, "659707"));
                    return t => (0, i.jsx)(e, { ...t, guildId: p });
                  })
                );
              (D += e), (u = L[D]);
            }
          if (((R += e), null == (p = O[R]) || "" === p)) break;
          (L = S(p, f)), (D = e < 0 ? L.length - 1 : 0);
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
        l = n("446674"),
        o = n("123561"),
        a = n("829072"),
        u = n("233069"),
        s = n("870691"),
        d = n("952451"),
        r = n("49111"),
        E = n("695838");
      function c(e, t, n) {
        let i =
          e === E.FAVORITES_RAW_GUILD_ID || e === r.FAVORITES
            ? (0, a.computeFavoritesState)()
            : o.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
        return A(i, t, n);
      }
      function _(e, t, n, o, a) {
        let u = (0, l.useStateFromStores)([d.default], () =>
            d.default.getGuildChangeSentinel(e)
          ),
          r = (0, l.useStateFromStores)([s.default], () => s.default.version);
        return (0, i.useMemo)(() => A(t, o, a).map(e => e.id), [t, n, u, r]);
      }
      function A(e, t, n) {
        let i = [];
        return (
          e.forEachShownChannel(e => {
            ((0, u.isGuildSelectableChannelType)(e.type) ||
              (t && (0, u.isGuildVocalChannelType)(e.type))) &&
              i.push(e);
          }, n),
          i
        );
      }
    },
    243338: function (e, t, n) {
      "use strict";
      var i, l;
      n.r(t),
        n.d(t, {
          CreateGuildSlideTypes: function () {
            return i;
          },
          CREATE_GUILD_MODAL_KEY: function () {
            return o;
          },
        }),
        ((l = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_GUILD = "customize-guild"),
        (l.CHANNEL_PROMPT = "channel-prompt"),
        (l.JOIN_GUILD = "join-guild"),
        (l.CREATION_INTENT = "creation-intent");
      let o = "create-guild";
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
        l = n.n(i),
        o = n("446674"),
        a = n("913144"),
        u = n("191225"),
        s = n("203288"),
        d = n("398604"),
        r = n("401690"),
        E = n("755624"),
        c = n("374363"),
        _ = n("271938"),
        A = n("870691"),
        C = n("42203"),
        T = n("816092"),
        S = n("546463"),
        I = n("957255"),
        f = n("660478"),
        p = n("18494"),
        N = n("282109"),
        O = n("449008"),
        R = n("299039"),
        L = n("319839"),
        D = n("397336");
      let h = null,
        g = null,
        b = new L.default();
      function G() {
        let e = p.default.getChannelId(),
          t = p.default.getVoiceChannelId();
        return (h = e), (g = t), b.clear();
      }
      function m(e) {
        let {
          guild: { id: t },
        } = e;
        return b.clearGuildId(t);
      }
      function M(e) {
        let {
          channel: { guild_id: t },
        } = e;
        return b.clearGuildId(t);
      }
      function y(e) {
        let { guildId: t } = e;
        return b.clearGuildId(t);
      }
      function P(e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
      }
      function U() {
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
      function v() {
        let e = p.default.getChannelId(),
          t = p.default.getVoiceChannelId(),
          n = h !== e || g !== t;
        return (
          !!n &&
          (l([h, g, e, t])
            .uniq()
            .forEach(e => {
              null != e && b.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
          (h = e),
          (g = t),
          !0)
        );
      }
      function B(e) {
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
      class w extends o.default.Store {
        initialize() {
          this.waitFor(
            r.default,
            _.default,
            A.default,
            C.default,
            T.default,
            u.default,
            S.default,
            s.default,
            d.default,
            E.default,
            I.default,
            f.default,
            p.default,
            N.default,
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
      var W = new w(a.default, {
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
            l(t)
              .map(e => {
                var t;
                return null === (t = C.default.getChannel(e.channelId)) ||
                  void 0 === t
                  ? void 0
                  : t.guild_id;
              })
              .filter(O.isNotNullish)
              .uniq()
              .forEach(e => {
                b.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        BULK_CLEAR_RECENTS: y,
        CACHE_LOADED_LAZY: G,
        CATEGORY_COLLAPSE_ALL: y,
        CATEGORY_COLLAPSE: B,
        CATEGORY_EXPAND_ALL: y,
        CATEGORY_EXPAND: B,
        CHANNEL_ACK: P,
        CHANNEL_COLLAPSE: function (e) {
          var t;
          let { channelId: n } = e;
          return b.clearGuildId(
            null === (t = C.default.getChannel(n)) || void 0 === t
              ? void 0
              : t.guild_id
          );
        },
        CHANNEL_CREATE: M,
        CHANNEL_DELETE: M,
        CHANNEL_LOCAL_ACK: P,
        CHANNEL_MUTE_EXPIRED: y,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: P,
        CHANNEL_SELECT: v,
        CHANNEL_STATUSES: function (e) {
          return b.clearGuildId(e.guildId);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            l(t)
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
        DISABLE_AUTOMATIC_ACK: P,
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { channelId: t } = e;
          return b.nonPositionalChannelIdUpdate(t);
        },
        DRAWER_CLOSE: U,
        DRAWER_OPEN: U,
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function (e) {
          let { guildId: t, channelId: n } = e;
          return b.updateSubtitles(t, n);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
          F();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
        ENABLE_AUTOMATIC_ACK: P,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
          let { guildId: t } = e;
          return b.updateSubtitles(t);
        },
        GAMES_DATABASE_FETCH_FAIL: F,
        GAMES_DATABASE_FETCH: F,
        GAMES_DATABASE_UPDATE: F,
        GUILD_APPLICATIONS_FETCH_SUCCESS: F,
        GUILD_CREATE: m,
        GUILD_DELETE: m,
        GUILD_FEED_FETCH_SUCCESS: F,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          return _.default.getId() === n.id && b.clearGuildId(t);
        },
        GUILD_MUTE_EXPIRED: y,
        GUILD_ROLE_CREATE: y,
        GUILD_ROLE_DELETE: y,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: y,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: y,
        GUILD_ROLE_UPDATE: y,
        GUILD_SCHEDULED_EVENT_CREATE: Y,
        GUILD_SCHEDULED_EVENT_DELETE: Y,
        GUILD_SCHEDULED_EVENT_UPDATE: Y,
        GUILD_TOGGLE_COLLAPSE_MUTED: y,
        GUILD_UPDATE: m,
        IMPERSONATE_STOP: y,
        IMPERSONATE_UPDATE: y,
        LOAD_CHANNELS: function (e) {
          e.channels.forEach(e => {
            let { guildId: t } = e;
            return b.clearGuildId(t);
          });
        },
        LOAD_MESSAGES_SUCCESS: P,
        MESSAGE_ACK: P,
        MESSAGE_CREATE: function (e) {
          let { channelId: t } = e;
          return b.nonPositionalChannelIdUpdate(t);
        },
        MESSAGE_DELETE_BULK: P,
        MESSAGE_DELETE: P,
        NOTIFICATION_SETTINGS_UPDATE: G,
        OVERLAY_INITIALIZE: G,
        PASSIVE_UPDATE_V1: function (e) {
          return null != e.channels && (b.clearGuildId(e.guildId), !0);
        },
        RECOMPUTE_READ_STATES: G,
        RESORT_THREADS: P,
        SET_RECENTLY_ACTIVE_COLLAPSED: G,
        THREAD_CREATE: K,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return b.nonPositionalChannelUpdate(t);
        },
        THREAD_LIST_SYNC: y,
        THREAD_MEMBER_UPDATE: H,
        THREAD_MEMBERS_UPDATE: H,
        THREAD_UPDATE: K,
        TRY_ACK: P,
        UPDATE_CHANNEL_DIMENSIONS: P,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
          let { guildId: t } = e;
          b.updateSubtitles(t);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: y,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: y,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach(e => {
            let { guild_id: t } = e;
            return b.clearGuildId(t);
          });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: y,
        USER_GUILD_SETTINGS_GUILD_UPDATE: y,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          var t;
          let { settings: n } = e;
          if (n.type !== D.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
          let i =
              null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
            l = !1;
          return (
            null != i &&
              R.default.keys(i).forEach(e => {
                let t = i[e].guildRecentsDismissedAt;
                null != t && (l = b.updateRecentsCategory(e) || l);
              }),
            l
          );
        },
        VOICE_CATEGORY_COLLAPSE: V,
        VOICE_CATEGORY_EXPAND: V,
        VOICE_CHANNEL_SELECT: v,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          return b.nonPositionalChannelIdUpdate(e.id);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = v(),
            i = new Set();
          for (let { channelId: e, oldChannelId: l } of t)
            null != l &&
              !i.has(l) &&
              (b.nonPositionalChannelIdUpdate(l) && (n = !0), i.add(l)),
              null != e &&
                !i.has(e) &&
                (b.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
          return n;
        },
        WINDOW_FOCUS: U,
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
        l = n("917351"),
        o = n.n(l),
        a = n("151426"),
        u = n("191225"),
        s = n("379881"),
        d = n("106682"),
        r = n("398604"),
        E = n("401690"),
        c = n("755624"),
        _ = n("233069"),
        A = n("870691"),
        C = n("42203"),
        T = n("816092"),
        S = n("546463"),
        I = n("957255"),
        f = n("660478"),
        p = n("18494"),
        N = n("282109"),
        O = n("449008"),
        R = n("319839"),
        L = n("695838"),
        D = n("843455");
      let h = [
        u.default,
        s.default,
        r.default,
        E.default,
        c.default,
        A.default,
        C.default,
        S.default,
        I.default,
        f.default,
        p.default,
        N.default,
      ];
      function g() {
        let [e, t] = i.useState(() => b());
        return (
          i.useEffect(() => {
            let e = o.throttle(() => t(b()), 100);
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
          t = N.default.isGuildCollapsed(L.FAVORITES_RAW_GUILD_ID),
          n = p.default.getChannelId(),
          i = C.default.getChannel(n),
          l = p.default.getVoiceChannelId(),
          u = [],
          r = {};
        for (let t in e) {
          let n = e[t],
            i = C.default.getChannel(n.id);
          if (null == i || n.type === a.FavoriteChannelType.CATEGORY) continue;
          let l = (0, d.createFavoritesChannelRecord)(e, n, i);
          if (null == n.parentId || !(n.parentId in e)) {
            u.push(l);
            continue;
          }
          !(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(l);
        }
        function c(n, a) {
          let { isCollapsed: u, isMuted: s } = a;
          return o(n)
            .map(n => {
              var d;
              if (
                !n.isPrivate() &&
                !I.default.can(D.Permissions.VIEW_CHANNEL, n)
              )
                return null;
              let r = null != i && (i.id === n.id || l === n.id),
                c = null != i && i.isThread() && i.parent_id === n.id,
                A =
                  null !==
                    (d =
                      r || c || !u
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
                C = (0, R.computeThreadIds)(n, A, i, l, t),
                S = T.default.isCollapsed(n.id),
                p = N.default.isChannelMuted(n.guild_id, n.id),
                O = {
                  id: n.id,
                  record: n,
                  category: a,
                  position: e[n.id].order,
                  threadIds: C,
                  threadCount: o.size(C),
                  isCollapsed: S,
                  isMuted: p,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, R.computeSubtitle)(n, S, !1),
                };
              return r || c || f.default.getMentionCount(n.id) > 0
                ? O
                : (t && p) ||
                    (u &&
                      (p ||
                        s ||
                        (0, _.isVoiceChannel)(n.type) ||
                        ((0, _.isGuildReadableType)(n.type) &&
                          !1 === f.default.hasUnread(n.id))))
                  ? null
                  : O;
            })
            .filter(O.isNotNullish)
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
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map(e => e.id),
            getShownChannelAndThreadIds: () => u.map(e => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
              return null == S && (S = c(u, this)), S;
            },
          },
          g = o(e)
            .values()
            .filter(e => e.type === a.FavoriteChannelType.CATEGORY)
            .sortBy(e => e.order)
            .map(e => {
              var t;
              let { id: n, order: i } = e,
                l = s.default.getCategoryRecord(n),
                o = null !== (t = r[n]) && void 0 !== t ? t : [],
                a = N.default.isChannelMuted(L.FAVORITES_RAW_GUILD_ID, n),
                u = A.default.isCollapsed(n),
                d = null;
              return {
                isMuted: a,
                isCollapsed: u,
                record: l,
                id: n,
                position: i,
                getChannelRecords: () => o,
                getShownChannelIds: () => o.map(e => e.id),
                getShownChannelAndThreadIds: () => o.map(e => e.id),
                isEmpty: () => 0 === o.length,
                get channelList() {
                  return null == d && (d = c(o, this)), d;
                },
              };
            })
            .value(),
          b = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          G = {
            id: L.FAVORITES_RAW_GUILD_ID,
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
              if (e < R.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t)
                return !1;
              let n = g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY];
              return 0 === n.channelList.length;
            },
            getCategoryFromSection: e =>
              e === R.SECTION_INDEX_UNCATEGORIZED_CHANNELS
                ? h
                : g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY],
            getNamedCategoryFromSection: e =>
              g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY],
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
                        section: n + R.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
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
            return l;
          },
          hide: function () {
            return o;
          },
        });
      var i = n("913144");
      function l() {
        i.default.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function o() {
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
            return m;
          },
          selectResult: function () {
            return M;
          },
          switchToResult: function () {
            return y;
          },
        }),
        n("781738"),
        n("222007");
      var i = n("913144"),
        l = n("450911"),
        o = n("255397"),
        a = n("406189"),
        u = n("987317"),
        s = n("123225"),
        d = n("537325"),
        r = n("144491"),
        E = n("239380"),
        c = n("233069"),
        _ = n("42203"),
        A = n("686470"),
        C = n("18494"),
        T = n("162771"),
        S = n("599110"),
        I = n("340454"),
        f = n("116460"),
        p = n("49111"),
        N = n("724210");
      let O = () => Promise.resolve();
      {
        let e = n("780009");
        O = e.playApplication;
      }
      let R = Object.freeze({
          [s.AutocompleterQuerySymbols.USER]: s.AutocompleterResultTypes.USER,
          [s.AutocompleterQuerySymbols.TEXT_CHANNEL]:
            s.AutocompleterResultTypes.TEXT_CHANNEL,
          [s.AutocompleterQuerySymbols.VOICE_CHANNEL]:
            s.AutocompleterResultTypes.VOICE_CHANNEL,
          [s.AutocompleterQuerySymbols.GUILD]: s.AutocompleterResultTypes.GUILD,
          [s.AutocompleterQuerySymbols.APPLICATION]:
            s.AutocompleterResultTypes.APPLICATION,
        }),
        L = new RegExp(
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
            i = null !== (t = R[n]) && void 0 !== t ? t : null;
          return [e.replace(L, ""), i];
        })(e);
        return { query: t, queryMode: n };
      }
      function h(e, t) {
        let {
            results: n,
            queryMode: i,
            query: l,
            maxQueryLength: o,
          } = f.default.getProps(),
          a = T.default.getGuildId(),
          u = C.default.getChannelId(a),
          d =
            n[
              (0, s.findNextSelectedResult)(s.FindResultDirections.DOWN, -1, n)
            ],
          r = I.default.isEmail(l),
          E = I.default.isPhoneNumber(l),
          A = I.default.isUserTagLike(l),
          p = null != u && (0, N.isStaticChannelRoute)(u),
          O = {
            current_channel_id: p ? void 0 : u,
            current_channel_static_route: p ? u : void 0,
            current_guild_id: a,
            query_mode: null != i ? i : "GENERAL",
            query_length: l.length,
            max_query_length: o,
            is_email_like: r,
            is_phone_like: E,
            is_username_like: A,
            query: r || E || A ? null : l,
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
        if (null != u) {
          let e = _.default.getChannel(u);
          O.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: i, record: l } = t;
          switch (
            ((O.selected_type = e),
            (O.selected_score = i),
            (O.selected_index = n.indexOf(t)),
            e)
          ) {
            case s.AutocompleterResultTypes.GUILD:
              O.selected_guild_id = l.id;
              break;
            case s.AutocompleterResultTypes.TEXT_CHANNEL:
            case s.AutocompleterResultTypes.VOICE_CHANNEL:
              l instanceof c.ChannelRecordBase &&
                (O.selected_guild_id = null != l.guild_id ? l.guild_id : null),
                (O.selected_channel_id = l.id);
              break;
            case s.AutocompleterResultTypes.GROUP_DM:
              O.selected_channel_id = l.id;
              break;
            case s.AutocompleterResultTypes.USER:
              O.selected_user_id = l.id;
          }
        }
        S.default.track(e, O);
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
          S.default.track(p.AnalyticEvents.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
          });
        })(e),
          i.default.dispatch({ type: "QUICKSWITCHER_SHOW", ...D(t) });
      }
      function G() {
        h(p.AnalyticEvents.QUICKSWITCHER_CLOSED), g();
      }
      function m(e) {
        i.default.dispatch({ type: "QUICKSWITCHER_SEARCH", ...D(e) });
      }
      function M(e) {
        i.default.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function y(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        g(), h(p.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: c, record: C } = e,
          T = { page: p.AnalyticsPages.QUICK_SWITCHER };
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
                ? o.default.updateChatOpen(C.id, !0)
                : u.default.selectVoiceChannel(C.id),
              (0, r.transitionToChannel)(t.id, {
                state: { analyticsSource: T },
                navigationReplace: !0,
              }));
            break;
          case s.AutocompleterResultTypes.USER:
            l.default.openPrivateChannel([C.id], !1, !1, "Quickswitcher"),
              a.default.channelListScrollTo(
                p.ME,
                _.default.getDMFromUserId(C.id)
              );
            break;
          case s.AutocompleterResultTypes.GROUP_DM:
            (0, r.transitionToChannel)(C.id, { navigationReplace: !0 }),
              a.default.channelListScrollTo(p.ME, C.id);
            break;
          case s.AutocompleterResultTypes.APPLICATION:
            let S = A.default.getActiveLibraryApplication(C.id);
            O(C.id, S, {
              analyticsParams: {
                source: p.AnalyticsLocations.QUICK_SWITCHER,
                location: p.AnalyticsLocations.QUICK_SWITCHER,
              },
            });
            break;
          case s.AutocompleterResultTypes.LINK:
            (0, d.default)(C.path, { navigationReplace: !0 });
        }
        i.default.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    208021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("913144"),
        l = n("819689"),
        o = n("115718"),
        a = n("347895"),
        u = n("341329"),
        s = n("582713"),
        d = n("724210"),
        r = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: o,
              hasSingleMessageRequest: a,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: o,
              channelId: t,
              details: {
                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: a,
              },
            }),
              null != n
                ? l.default.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                  })
                : u.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: n,
              baseChannelId: a,
              flash: d = !0,
              details: r,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: a,
              channelId: n,
              details: r,
            });
            let E = null == r ? void 0 : r.initialMessageId;
            null != E
              ? l.default.jumpToMessage({
                  channelId: n,
                  messageId: E,
                  flash: d,
                  jumpType: o.JumpTypes.INSTANT,
                })
              : u.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, a.selectHomeResourceChannel)(t, n, !1),
              i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: s.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: d.StaticChannelRoute.GUILD_HOME,
                channelId: n,
              }));
          },
          openThreadAsSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              channelId: a,
              flash: d = !0,
              details: r,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: a,
              details: r,
            }),
              (null == r ? void 0 : r.initialMessageId) != null
                ? l.default.jumpToMessage({
                    channelId: a,
                    messageId: r.initialMessageId,
                    flash: d,
                    jumpType: o.JumpTypes.INSTANT,
                  })
                : u.default.fetchMessages({ guildId: t, channelId: a });
          },
          closeChannelSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: l,
              details: o,
            } = e;
            return i.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: l,
              baseChannelId: n,
              guildId: t,
              details: o,
            });
          },
          closeGuildSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    893980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackProfilePanelViewed: function () {
            return s;
          },
          trackProfilePanelToggled: function () {
            return d;
          },
        });
      var i = n("373469"),
        l = n("824563"),
        o = n("27618"),
        a = n("599110"),
        u = n("49111");
      let s = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: i,
            activity: l,
            customStatusActivity: o,
            status: s,
          } = e;
          a.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != l &&
              (null == l ? void 0 : l.type) !== u.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == l ? void 0 : l.type) === u.ActivityTypes.PLAYING,
            load_duration_ms: i,
            profile_user_status: s,
            has_custom_status: null != o,
            has_profile_effect: null != t.profileEffectId,
            ...r(t),
          });
        },
        d = (e, t) => {
          a.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...r(e),
          });
        },
        r = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            a = null != i.default.getAnyStreamForUser(n),
            s = l.default.findActivity(n, e => {
              let { type: t } = e;
              return a
                ? t === u.ActivityTypes.PLAYING
                : t !== u.ActivityTypes.CUSTOM_STATUS;
            }),
            d = null == s ? void 0 : s.assets,
            r = o.default.isFriend(n);
          return {
            has_images: !!(null !== (t = null == d ? void 0 : d.large_image) &&
            void 0 !== t
              ? t
              : null == d
                ? void 0
                : d.small_image),
            is_friend: r,
            viewed_profile_user_id: n,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
    },
    791823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("70102");
      var i = n("446674"),
        l = n("913144");
      let o = null;
      class a extends i.default.Store {
        getCurrentPath() {
          return null != o ? o.pathname : null;
        }
        getCurrentRoute() {
          return (function (e) {
            let t = null != e && null != e.search ? e.search : "";
            return null != e ? "".concat(e.pathname).concat(t) : null;
          })(o);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment"
          );
        }
      }
      a.displayName = "ApplicationStoreLocationStore";
      var u = new a(l.default, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          o = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          o = null;
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
        l,
        o,
        a = n("446674"),
        u = n("913144"),
        s = n("42203"),
        d = n("476108"),
        r = n("305961"),
        E = n("18494"),
        c = n("287850"),
        _ = n("49111");
      let A = (null !==
        (o =
          null === (l = window) || void 0 === l
            ? void 0
            : null === (i = l.location) || void 0 === i
              ? void 0
              : i.pathname) && void 0 !== o
        ? o
        : ""
      ).startsWith(_.Routes.ACTIVITIES)
        ? _.Routes.ACTIVITIES
        : null;
      function C(e) {
        let { link: t } = e;
        if (A === t) return !1;
        A = t;
      }
      class T extends a.default.Store {
        initialize() {
          this.waitFor(d.default, c.default, E.default, r.default, s.default);
        }
        getHomeLink() {
          return null != A ? A : d.default.fallbackRoute;
        }
      }
      T.displayName = "AppViewStore";
      var S = new T(u.default, {
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
//# sourceMappingURL=4059f4e4c2f18d41dc03.js.map
