(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86612"],
  {
    444342: function (e, t, l) {
      "use strict";
      e.exports = l.p + "8678aef5e54059df845e.svg";
    },
    853701: function (e, t, l) {
      "use strict";
      e.exports = l.p + "792a9ed858431240f0e6.svg";
    },
    185370: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ICON_SIZE: function () {
            return a;
          },
        });
      let a = { xxs: 12, xs: 16, sm: 18, md: 24, lg: 32, custom: void 0 };
    },
    743087: function (e, t, l) {
      "use strict";
      l.r(t);
      var a = l("161213");
      l.es(a, t);
    },
    311207: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("77078"),
        i = l("298878"),
        s = l("782340"),
        r = () =>
          (0, a.jsx)(n.TooltipContainer, {
            text: s.default.Messages.CLIPS_BETA_TAG_HOVER,
            children: (0, a.jsx)(i.default, {}),
          });
    },
    6468: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          canAttachClipsToChannel: function () {
            return s;
          },
        });
      var a = l("42203"),
        n = l("957255"),
        i = l("49111");
      function s(e) {
        let t = a.default.getChannel(e),
          l = null == t ? void 0 : t.isPrivate(),
          s = null == t ? void 0 : t.isForumChannel();
        return (
          l ||
          (n.default.can(i.Permissions.ATTACH_FILES, t) &&
            n.default.can(i.Permissions.SEND_MESSAGES, t) &&
            !s)
        );
      }
    },
    552022: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return b;
          },
        }),
        l("222007");
      var a,
        n,
        i = l("37983"),
        s = l("884691"),
        r = l("414456"),
        o = l.n(r),
        u = l("866227"),
        d = l.n(u),
        c = l("446674"),
        f = l("862337"),
        p = l("185370"),
        m = l("504318"),
        h = l("77078"),
        E = l("812204"),
        C = l("685665"),
        v = l("730859"),
        _ = l("739034"),
        g = l("697218"),
        L = l("561744"),
        x = l("491920"),
        T = l("826432"),
        I = l("228220"),
        S = l("15165"),
        A = l("58608"),
        N = l("599110"),
        M = l("449008"),
        R = l("299039"),
        P = l("803725"),
        j = l("135284"),
        y = l("49111"),
        D = l("782340"),
        O = l("432261"),
        H = l("323805");
      ((n = a || (a = {})).DELETE = "delete"),
        (n.EDIT = "edit"),
        (n.SHARE = "share");
      var b = function (e) {
        var t, l, a;
        let {
            clip: n,
            exporting: r,
            actionsDisabled: u,
            isNew: d,
            onDelete: p,
            onEdit: m,
            onShare: _,
          } = e,
          x = (0, c.useStateFromStoresArray)([g.default], () =>
            n.users.map(e => g.default.getUser(e)).filter(M.isNotNullish)
          ),
          { AnalyticsLocationProvider: T } = (0, C.default)(
            E.default.CLIPS_GALLERY_ITEM
          ),
          [I, S] = s.useState(!1),
          A = s.useRef(null),
          P = (0, L.default)(
            null !==
              (a =
                null === (t = n.editMetadata) || void 0 === t
                  ? void 0
                  : t.start) && void 0 !== a
              ? a
              : 0
          ),
          j = s.useRef(
            new f.DelayedCall(500, () => {
              var e;
              let t = A.current;
              null != t &&
                t.paused &&
                ((t.currentTime = P.current),
                null === (e = A.current) || void 0 === e || e.play());
            })
          ),
          H = s.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
          }, []),
          b = s.useCallback(() => {
            var e;
            S(!0), null === (e = j.current) || void 0 === e || e.delay();
          }, []),
          U = s.useCallback(() => {
            var e, t, l;
            S(!1);
            let a = A.current;
            null === (e = j.current) || void 0 === e || e.cancel(),
              null != a &&
                (a.pause(),
                (a.currentTime =
                  null !==
                    (l =
                      null === (t = n.editMetadata) || void 0 === t
                        ? void 0
                        : t.start) && void 0 !== l
                    ? l
                    : 0));
          }, [
            null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start,
          ]),
          V = s.useCallback(
            e => {
              var t, l;
              (null === (l = e.relatedTarget) || void 0 === l
                ? void 0
                : null === (t = l.parentElement) || void 0 === t
                  ? void 0
                  : t.parentElement) !== e.currentTarget.parentElement && U();
            },
            [U]
          ),
          z = new Date(R.default.extractTimestamp(n.id)),
          F = z.toLocaleDateString(),
          G = z.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          Y = "".concat(F, " • ").concat(G);
        return (0, i.jsx)(T, {
          children: (0, i.jsxs)(h.ClickableContainer, {
            "aria-disabled": u,
            "aria-label": D.default.Messages.EDIT,
            onClick: u
              ? void 0
              : () => {
                  m(n),
                    N.default.track(y.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED);
                },
            className: o(O.clipItem, { [O.disabled]: u }),
            onBlur: V,
            onFocus: b,
            onMouseOver: b,
            onMouseLeave: U,
            children: [
              (0, i.jsx)(w, { clip: n, isNew: d, videoRef: A }),
              (0, i.jsxs)("div", {
                className: O.clipFooter,
                children: [
                  (0, i.jsx)(k, { clip: n, focused: I, onFocus: b }),
                  (0, i.jsx)(h.Text, {
                    className: O.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: n.applicationName,
                  }),
                  (0, i.jsx)(h.Text, {
                    className: O.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: Y,
                  }),
                  (0, i.jsxs)("div", {
                    className: O.usersAndDelete,
                    children: [
                      (0, i.jsx)(v.default, {
                        maxUsers: 4,
                        users: x,
                        onFocus: e => {
                          var t, l, a, n;
                          let i = e.relatedTarget,
                            s =
                              null === (l = e.currentTarget.parentElement) ||
                              void 0 === l
                                ? void 0
                                : null === (t = l.parentElement) || void 0 === t
                                  ? void 0
                                  : t.parentElement;
                          if ((null == i ? void 0 : i.parentElement) !== s)
                            (null == i
                              ? void 0
                              : null === (n = i.parentElement) || void 0 === n
                                ? void 0
                                : null === (a = n.parentElement) || void 0 === a
                                  ? void 0
                                  : a.parentElement) !== s && b();
                        },
                      }),
                      I &&
                        (0, i.jsx)(B, {
                          clip: n,
                          actionsDisabled: u,
                          exporting: r,
                          onBeforeDelete: H,
                          onDelete: p,
                          onEdit: m,
                          onShare: _,
                          onBlur: e => {
                            var t;
                            (null === (t = e.relatedTarget) || void 0 === t
                              ? void 0
                              : t.parentElement) !==
                              e.currentTarget.parentElement && U();
                          },
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function w(e) {
        let { clip: t, isNew: l, videoRef: a } = e,
          n = 0 === t.length,
          [r, o] = s.useMemo(() => {
            let e = t.length,
              l = !1,
              a =
                null != t.editMetadata
                  ? t.editMetadata.end - t.editMetadata.start
                  : null;
            return (
              null != a && 1e3 * a < t.length && ((e = 1e3 * a), (l = !0)),
              [l, d.duration(e)]
            );
          }, [t.length, t.editMetadata]),
          u = "".concat(o.seconds()).padStart(2, "0");
        return (0, i.jsxs)("div", {
          className: O.clipThumbContainer,
          children: [
            (0, i.jsx)(U, { clip: t, videoRef: a }),
            (0, i.jsxs)("div", {
              className: O.clipBadges,
              children: [
                n &&
                  (0, i.jsx)("div", {
                    className: O.clipProcessingBadge,
                    children: (0, i.jsx)(h.Text, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: D.default.Messages.CLIPS_PROCESSING_BADGE,
                    }),
                  }),
                !n &&
                  l &&
                  (0, i.jsxs)(h.Text, {
                    className: O.clipNewBadge,
                    variant: "eyebrow",
                    color: "always-white",
                    children: [
                      (0, i.jsx)(T.default, { className: O.newIcon }),
                      D.default.Messages.NEW.toUpperCase(),
                    ],
                  }),
                !n &&
                  (0, i.jsxs)("div", {
                    className: O.clipDurationBadge,
                    children: [
                      r
                        ? (0, i.jsx)(S.default, {
                            className: O.clipDurationEditIcon,
                          })
                        : null,
                      (0, i.jsx)(h.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: "".concat(o.minutes(), ":").concat(u),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        var t;
        let { clip: l, focused: a, onFocus: n } = e,
          [r, u] = s.useState(l.name),
          d = !l.name,
          [c, f] = s.useState(!1),
          [E, C] = s.useState(null !== (t = l.name) && void 0 !== t ? t : ""),
          [v, _] = s.useState(!1),
          g = async () => {
            _(!0),
              await (0, P.updateClipMetadata)(l.id, {
                name: "" === E ? void 0 : E,
              }),
              _(!1),
              f(!1);
          };
        return (s.useEffect(() => {
          if (r !== l.name) {
            var e;
            u(l.name), C(null !== (e = l.name) && void 0 !== e ? e : "");
          }
        }, [l.name, r]),
        c)
          ? (0, i.jsx)(h.TextInput, {
              inputClassName: o(H["heading-lg/medium"], O.clipTitleInput),
              onClick: e => e.stopPropagation(),
              value: E,
              autoFocus: !0,
              onKeyDown: e => {
                "Enter" === e.key && g();
              },
              disabled: v,
              onChange: C,
              onBlur: g,
            })
          : (0, i.jsxs)(h.Clickable, {
              className: O.clipTitleInputPlaceholder,
              onFocus: n,
              onClick: e => {
                e.stopPropagation(), f(!0);
              },
              children: [
                d
                  ? (0, i.jsx)(h.Heading, {
                      className: O.clipTitle,
                      color: "text-muted",
                      variant: "heading-lg/medium",
                      children: D.default.Messages.CLIPS_ADD_A_TITLE,
                    })
                  : (0, i.jsx)(h.Heading, {
                      className: O.clipTitle,
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: l.name,
                    }),
                a &&
                  (0, i.jsx)(m.PencilIcon, {
                    "aria-label": D.default.Messages.EDIT,
                    color: h.tokens.colors.TEXT_MUTED,
                    height: p.ICON_SIZE.sm,
                    width: p.ICON_SIZE.sm,
                    className: O.clipTitleIcon,
                  }),
              ],
            });
      }
      function U(e) {
        let { clip: t, videoRef: l } = e,
          a = (0, j.useClipProtocolURL)(t);
        return 0 === t.length
          ? (0, i.jsx)(h.Spinner, {
              type: h.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: O.clipThumb,
            })
          : null != a
            ? (0, i.jsx)(A.default, {
                preload: "metadata",
                muted: !0,
                poster: t.thumbnail,
                src: a,
                loop: !0,
                className: O.clipThumb,
                ref: l,
              })
            : (0, i.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: O.clipThumb,
              });
      }
      function B(e) {
        let {
            clip: t,
            exporting: l,
            actionsDisabled: a,
            onBeforeDelete: n,
            onDelete: r,
            onEdit: o,
            onShare: u,
            onBlur: d,
          } = e,
          c = (0, _.default)(),
          f = s.useCallback(
            e => {
              e.stopPropagation(),
                e.shiftKey ? (n(), (0, P.deleteClip)(t.filepath)) : r(t, n),
                N.default.track(
                  y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED,
                  { type: "delete" }
                );
            },
            [r, n, t]
          ),
          p = s.useCallback(
            e => {
              e.stopPropagation(),
                o(t),
                N.default.track(
                  y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED,
                  { type: "edit" }
                );
            },
            [o, t]
          ),
          m = s.useCallback(
            e => {
              e.stopPropagation(),
                u(t),
                N.default.track(
                  y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED,
                  { type: "share" }
                );
            },
            [u, t]
          );
        return (0, i.jsxs)("div", {
          className: O.buttonContainer,
          children: [
            null != r &&
              (0, i.jsx)(h.Tooltip, {
                text: D.default.Messages.DELETE,
                children: e =>
                  (0, i.jsx)(h.Button, {
                    ...e,
                    disabled: a,
                    color: c ? h.Button.Colors.RED : h.Button.Colors.PRIMARY,
                    onClick: f,
                    className: O.button,
                    size: h.Button.Sizes.NONE,
                    look: h.Button.Looks.FILLED,
                    children: (0, i.jsx)(I.default, { className: O.miniIcon }),
                  }),
              }),
            (0, i.jsx)(h.Tooltip, {
              text: D.default.Messages.EDIT,
              children: e =>
                (0, i.jsx)(h.Button, {
                  ...e,
                  disabled: a,
                  color: h.Button.Colors.PRIMARY,
                  onClick: p,
                  className: O.button,
                  size: h.Button.Sizes.NONE,
                  look: h.Button.Looks.FILLED,
                  children: (0, i.jsx)(S.default, { className: O.miniIcon }),
                }),
            }),
            (0, i.jsx)(h.Tooltip, {
              text: D.default.Messages.SHARE,
              children: e => {
                let { onBlur: t, ...n } = e;
                return (0, i.jsx)(h.Button, {
                  ...n,
                  disabled: a && !l,
                  submitting: l,
                  color: h.Button.Colors.BRAND,
                  onBlur: e => {
                    d(e), null == t || t();
                  },
                  onClick: m,
                  className: O.button,
                  size: h.Button.Sizes.NONE,
                  look: h.Button.Looks.FILLED,
                  children: (0, i.jsx)(x.default, { className: O.miniIcon }),
                });
              },
            }),
          ],
        });
      }
    },
    548405: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var a = l("37983"),
        n = l("884691"),
        i = l("414456"),
        s = l.n(i),
        r = l("65597"),
        o = l("77078"),
        u = l("79112"),
        d = l("227602"),
        c = l("13798"),
        f = l("386045"),
        p = l("49111"),
        m = l("782340"),
        h = l("487277");
      function E(e) {
        let { isEmptyBecauseQuery: t, closePopout: l } = e,
          i = (0, r.default)([d.default], () =>
            d.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP)
          ),
          E = (0, r.default)(
            [f.default],
            () => f.default.getSettings().clipsEnabled
          ),
          C = t ? h.noSearchResultsImage : h.noClipsImage,
          v = n.useCallback(() => {
            l(), u.default.open(p.UserSettingsSections.CLIPS);
          }, [l]),
          _ = (() => {
            if (!E)
              return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format(
                { onClick: v }
              );
            if (t) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
            if (null == i)
              return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format(
                { onClick: v }
              );
            {
              let e = c.toString(i.shortcut, !0);
              return m.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                keybind: e,
                keybindHook: () =>
                  (0, a.jsx)("span", {
                    className: h.keybindHintKeys,
                    children: (0, a.jsx)(o.KeyCombo, {
                      className: h.keybindShortcut,
                      shortcut: e,
                    }),
                  }),
              });
            }
          })();
        return (0, a.jsx)("div", {
          className: h.container,
          children: (0, a.jsxs)("div", {
            className: h.content,
            children: [
              (0, a.jsx)("div", { className: C }),
              (0, a.jsx)(o.Text, {
                variant: "text-md/medium",
                className: s(h.noClipsText, { [h.noSearchResultsText]: t }),
                children: _,
              }),
            ],
          }),
        });
      }
    },
    411445: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return p;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("77078"),
        i = l("79112"),
        s = l("810567"),
        r = l("522049"),
        o = l("474571"),
        u = l("311207"),
        d = l("49111"),
        c = l("782340"),
        f = l("216855");
      function p(e) {
        let {
          filterQuery: t,
          setFilterQuery: l,
          onClose: p,
          sortOrder: m,
          setSortOrder: h,
        } = e;
        return (0, a.jsxs)(n.ModalHeader, {
          className: f.root,
          separator: !1,
          children: [
            (0, a.jsx)(r.default, { className: f.icon }),
            (0, a.jsx)(n.Heading, {
              className: f.title,
              variant: "heading-xxl/bold",
              children: c.default.Messages.CLIPS,
            }),
            (0, a.jsx)("div", {
              className: f.betaTag,
              children: (0, a.jsx)(u.default, {}),
            }),
            (0, a.jsx)(s.default, {
              autoFocus: !0,
              size: s.default.Sizes.MEDIUM,
              placeholder: c.default.Messages.SEARCH,
              className: f.queryInput,
              query: t,
              onChange: l,
              onClear: () => l(""),
            }),
            (0, a.jsx)(n.Select, {
              placeholder: c.default.Messages.CLIPS_SORT_PLACEHOLDER,
              className: f.sortInput,
              options: [
                {
                  value: "descending",
                  label: c.default.Messages.CLIPS_SORT_RECENT,
                },
                {
                  value: "ascending",
                  label: c.default.Messages.CLIPS_SORT_OLDEST,
                },
              ],
              isSelected: e => e === m,
              select: h,
              serialize: e => e,
            }),
            (0, a.jsx)(n.Button, {
              color: n.ButtonColors.TRANSPARENT,
              size: n.Button.Sizes.NONE,
              className: f.settingsButton,
              look: n.Button.Looks.FILLED,
              onClick: () => {
                i.default.open(d.UserSettingsSections.CLIPS), p();
              },
              children: (0, a.jsx)(o.default, {}),
            }),
            (0, a.jsx)(n.ModalCloseButton, { className: f.button, onClick: p }),
          ],
        });
      }
    },
    167573: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l("222007");
      var a = l("37983"),
        n = l("884691"),
        i = l("448105"),
        s = l.n(i),
        r = l("917351"),
        o = l.n(r),
        u = l("759843"),
        d = l("446674"),
        c = l("551042"),
        f = l("77078"),
        p = l("812204"),
        m = l("685665"),
        h = l("428958"),
        E = l("299039"),
        C = l("386045"),
        v = l("803725"),
        _ = l("142485"),
        g = l("552022"),
        L = l("548405"),
        x = l("411445"),
        T = l("80028"),
        I = l("578675");
      function S(e) {
        let { channelId: t, onClose: i, transitionState: r } = e,
          [S, A] = n.useState(""),
          [N, M] = n.useState("descending"),
          [R, P] = n.useState(!0),
          [j, y] = n.useState(null),
          D = n.useDeferredValue(S),
          O = (0, d.useStateFromStores)([C.default], () =>
            C.default.getClips()
          ),
          H = (0, d.useStateFromStores)([C.default], () =>
            C.default.getPendingClips()
          ),
          b = (0, d.useStateFromStores)(
            [C.default],
            () => C.default.getSettings().storageLocation
          ),
          w = (0, d.useStateFromStoresArray)([C.default], () =>
            C.default.getNewClipIds()
          ),
          { AnalyticsLocationProvider: k } = (0, m.default)(
            p.default.CLIPS_GALLERY
          ),
          U = n.useMemo(() => [...H, ...O], [O, H]);
        (0, h.default)(
          {
            type: u.ImpressionTypes.MODAL,
            name: u.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: U.length },
          },
          { disableTrack: R },
          [U.length, R]
        ),
          n.useEffect(
            () => (
              (0, v.clearClipsSession)(),
              () => {
                (0, v.clearClipsSession)(), (0, v.clearNewClipIds)();
              }
            ),
            []
          );
        let B = n.useMemo(
          () =>
            o(U)
              .filter(e => {
                if ("" === D.trim()) return !0;
                let t = D.toLowerCase();
                return (
                  (null != e.name &&
                    "" !== e.name &&
                    s(t, e.name.toLowerCase())) ||
                  s(t, e.applicationName.toLowerCase())
                );
              })
              .sort((e, t) =>
                "ascending" === N
                  ? E.default.compare(e.id, t.id)
                  : "descending" === N
                    ? E.default.compare(t.id, e.id)
                    : 0
              )
              .chunk(3)
              .value(),
          [U, D, N]
        );
        n.useEffect(() => {
          (async function e() {
            P(!0);
            try {
              await v.loadClipsDirectory(b);
            } finally {
              P(!1);
            }
          })();
        }, [b]);
        let V = n.useCallback(
            e => {
              (0, f.openModalLazy)(
                async () => {
                  let { default: n } = await l
                    .el("473070")
                    .then(l.bind(l, "473070"));
                  return l => (0, a.jsx)(n, { ...l, channelId: t, clip: e });
                },
                { modalKey: T.CLIPS_EDIT_MODAL_KEY }
              );
            },
            [t]
          ),
          { onShareClick: z } = (0, _.default)({
            channelId: t,
            setExporting: y,
          }),
          F = n.useCallback((e, t) => {
            (0, f.openModalLazy)(async () => {
              let { default: n } = await l
                .el("386092")
                .then(l.bind(l, "386092"));
              return l =>
                (0, a.jsx)(n, {
                  clip: e,
                  ...l,
                  onBeforeDelete: t,
                  onAfterDelete: () => l.onClose(),
                });
            });
          }, []),
          G = n.useCallback(
            e => {
              let { row: t } = e,
                l = B[t];
              return (0, a.jsx)(
                "div",
                {
                  className: I.clipsRow,
                  children: l.map(e => {
                    let t = 0 === e.length;
                    return (0, a.jsx)(
                      g.default,
                      {
                        actionsDisabled: null != j || t,
                        exporting: j === e.id,
                        isNew: w.includes(e.id),
                        onDelete: F,
                        onEdit: V,
                        onShare: e =>
                          z({
                            clip: e,
                            onShareComplete: () =>
                              c.closeModal(T.CLIPS_GALLERY_MODAL_KEY),
                          }),
                        clip: e,
                      },
                      e.id
                    );
                  }),
                },
                "clips-gallery-".concat(t)
              );
            },
            [B, w, j, z, F, V]
          ),
          Y =
            R || 0 !== B.length
              ? R
                ? (0, a.jsx)("div", {
                    className: I.spinnerContainer,
                    children: (0, a.jsx)(f.Spinner, {}),
                  })
                : (0, a.jsx)(f.List, {
                    className: I.clipGrid,
                    sections: [B.length],
                    sectionHeight: 0,
                    rowHeight: 328.25,
                    renderRow: G,
                  })
              : (0, a.jsx)(L.default, {
                  isEmptyBecauseQuery: U.length > 0,
                  closePopout: i,
                });
        return (0, a.jsx)(f.ModalRoot, {
          size: f.ModalSize.DYNAMIC,
          transitionState: r,
          className: I.root,
          children: (0, a.jsxs)(k, {
            children: [
              (0, a.jsx)(x.default, {
                onClose: i,
                filterQuery: S,
                setFilterQuery: A,
                sortOrder: N,
                setSortOrder: M,
              }),
              Y,
            ],
          }),
        });
      }
    },
    16002: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          shareClip: function () {
            return m;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("77078"),
        i = l("42203"),
        s = l("474643"),
        r = l("599110"),
        o = l("299039"),
        u = l("412861"),
        d = l("13136"),
        c = l("803725"),
        f = l("80028"),
        p = l("49111");
      async function m(e, t) {
        let { channelId: m, editMetadata: h, analyticsLocations: E } = t,
          C = i.default.getChannel(m);
        if (null != C)
          try {
            var v;
            let t = await (0, c.exportClip)(e, h),
              l =
                null !== (v = e.name) && void 0 !== v
                  ? v
                  : (0, f.CLIP_NAME_TEMPLATE)(o.default.extractTimestamp(e.id)),
              a = (0, d.default)(l);
            (0, u.promptToUpload)(
              [
                new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
                  type: "video/mp4",
                }),
              ],
              C,
              s.DraftType.ChannelMessage,
              { filesMetadata: [{ clip: e }] }
            ),
              r.default.track(p.AnalyticEvents.CLIP_SHARED, {
                location_stack: E,
                guild_id: C.guild_id,
                channel_id: C.id,
                channel_type: C.type,
                application_id: e.applicationId,
                clip_id: e.id,
              });
          } catch (e) {
            throw (f.ClipsLogger.error(e), e);
          }
        else
          (0, n.openModalLazy)(async () => {
            let { default: t } = await l.el("143909").then(l.bind(l, "143909"));
            return l => (0, a.jsx)(t, { ...l, clip: e, editMetadata: h });
          });
      }
    },
    135284: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useClipProtocolURL: function () {
            return i;
          },
        });
      var a = l("884691"),
        n = l("49671");
      function i(e) {
        let t = (0, a.useMemo)(
          () =>
            null == n.default.clips.getClipProtocolURLFromPath
              ? null
              : n.default.clips.getClipProtocolURLFromPath(e.filepath),
          [e.filepath]
        );
        return t;
      }
    },
    142485: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var a = l("884691"),
        n = l("685665"),
        i = l("6468"),
        s = l("16002"),
        r = e => {
          let { channelId: t, setExporting: l } = e,
            { analyticsLocations: r } = (0, n.default)(),
            o = a.useCallback(
              async e => {
                let {
                  clip: a,
                  cropData: n,
                  applicationAudioEnabled: o,
                  voiceAudioEnabled: u,
                  onShareComplete: d,
                } = e;
                l(a.id);
                try {
                  var c, f, p, m, h, E, C, v, _, g;
                  let e = (0, i.canAttachClipsToChannel)(t);
                  await (0, s.shareClip)(a, {
                    channelId: e ? t : void 0,
                    analyticsLocations: r,
                    editMetadata: {
                      start:
                        null !==
                          (E =
                            null !== (h = null == n ? void 0 : n.start) &&
                            void 0 !== h
                              ? h
                              : null === (c = a.editMetadata) || void 0 === c
                                ? void 0
                                : c.start) && void 0 !== E
                          ? E
                          : 0,
                      end:
                        null !==
                          (v =
                            null !== (C = null == n ? void 0 : n.end) &&
                            void 0 !== C
                              ? C
                              : null === (f = a.editMetadata) || void 0 === f
                                ? void 0
                                : f.end) && void 0 !== v
                          ? v
                          : a.length / 1e3,
                      applicationAudio:
                        null ===
                          (_ =
                            null != o
                              ? o
                              : null === (p = a.editMetadata) || void 0 === p
                                ? void 0
                                : p.applicationAudio) ||
                        void 0 === _ ||
                        _,
                      voiceAudio:
                        null ===
                          (g =
                            null != u
                              ? u
                              : null === (m = a.editMetadata) || void 0 === m
                                ? void 0
                                : m.voiceAudio) ||
                        void 0 === g ||
                        g,
                    },
                  });
                } catch (e) {
                } finally {
                  null == d || d(), l(null);
                }
              },
              [t, r, l]
            );
          return { onShareClick: o };
        };
    },
    491920: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("469563"),
        i = l("743087"),
        s = l("75196"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: l = 32,
              color: n = "currentColor",
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, s.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                fill: n,
              }),
            });
          },
          i.ShareIcon,
          void 0,
          { size: 32 }
        );
    },
    826432: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("469563"),
        i = l("49097"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: s,
            } = e;
            return (0, a.jsxs)("svg", {
              className: i,
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  className: s,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z",
                }),
                (0, a.jsx)("path", {
                  className: s,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z",
                }),
                (0, a.jsx)("path", {
                  className: s,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z",
                }),
              ],
            });
          },
          i.SparklesIcon,
          void 0,
          { size: 24 }
        );
    },
    15165: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("75196");
      function i(e) {
        let {
          width: t = 24,
          height: l = 24,
          color: i = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 18 20",
          children: (0, a.jsx)("path", {
            fill: i,
            className: s,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z",
          }),
        });
      }
    },
    412861: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          showUploadFileSizeExceededError: function () {
            return g;
          },
          promptToUpload: function () {
            return L;
          },
        }),
        l("424973"),
        l("222007"),
        l("70102");
      var a = l("255397"),
        n = l("81594"),
        i = l("783480"),
        s = l("336522"),
        r = l("966724"),
        o = l("716241"),
        u = l("191145"),
        d = l("585722"),
        c = l("697218"),
        f = l("599110"),
        p = l("254490"),
        m = l("719923"),
        h = l("834021"),
        E = l("49111"),
        C = l("894488"),
        v = l("646718"),
        _ = l("782340");
      function g(e, t) {
        let l = c.default.getCurrentUser(),
          a = e.getGuildId(),
          n = p.maxFileSize(a),
          i = [],
          r = 0,
          u = 0,
          d = 0,
          f = [];
        for (let e of t)
          (d += 1),
            (r += e.size),
            i.push(e.size),
            e.size > u && (u = e.size),
            null != e.type ? f.push(e.type) : f.push("unknown");
        if (u > n) {
          (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: a,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: i,
            pre_compression_aggregate_file_size: r,
            num_attachments: d,
            error_type: C.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: f,
          }),
            (0, s.openUploadError)({
              title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, h.getErrorHelp)(l, a),
              showPremiumUpsell: !(0, m.isPremiumExactly)(
                l,
                v.PremiumTypes.TIER_2
              ),
              fileSize: u,
            });
          return;
        }
        (0, s.openUploadError)({
          title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: _.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: p.sizeString(p.getMaxRequestSize()),
          }),
        });
      }
      function L(e, t, l) {
        let {
          filesMetadata: o,
          requireConfirm: c = !0,
          showLargeMessageDialog: p = !1,
          isThumbnail: m = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != o && o.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let C = t.getGuildId();
        if ((0, h.filesExceedUploadLimits)(e, C)) {
          g(t, e);
          return;
        }
        if (d.default.getUploadCount(t.id, l) + e.length > E.MAX_UPLOAD_COUNT) {
          (0, s.openUploadError)({
            title: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: E.MAX_UPLOAD_COUNT,
            }),
          }),
            f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: d.default.getUploadCount(t.id, l),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === E.ChannelTypes.GUILD_VOICE ||
            t.type === E.ChannelTypes.GUILD_STAGE_VOICE) &&
            !u.default.getChatOpen(t.id) &&
            a.default.updateChatOpen(t.id, !0),
          c)
        ) {
          let a = Array.from(e).map((e, t) => ({
            file: e,
            platform: r.UploadPlatform.WEB,
            isThumbnail: m,
            ...(null == o ? void 0 : o[t]),
          }));
          n.default.addFiles({
            files: a,
            channelId: t.id,
            showLargeMessageDialog: p,
            draftType: l,
          });
        } else
          i.default.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: l,
            isThumbnail: m,
            filesMetadata: o,
          });
      }
    },
    834021: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getErrorHelp: function () {
            return o;
          },
          filesExceedUploadLimits: function () {
            return u;
          },
          getWebUploadFiles: function () {
            return d;
          },
        }),
        l("808653"),
        l("424973");
      var a = l("966724"),
        n = l("254490"),
        i = l("719923"),
        s = l("646718"),
        r = l("782340");
      function o(e, t) {
        let l = n.sizeString(n.maxFileSize(t));
        return i.default.isPremium(e, s.PremiumTypes.TIER_2)
          ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: l })
          : i.default.isPremium(e, s.PremiumTypes.TIER_1)
            ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format(
                { maxSize: l }
              )
            : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: l,
              });
      }
      function u(e, t) {
        return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e);
      }
      function d(e) {
        return e.reduce(
          (e, t) => (
            t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e
          ),
          []
        );
      }
    },
    161213: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ShareIcon: function () {
            return s;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("669491"),
        i = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=1a9e9462f807e1589314.js.map
