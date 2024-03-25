(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29232"],
  {
    101916: function (e, t, a) {
      "use strict";
      e.exports = a.p + "c6614584201970ac058c.png";
    },
    384335: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a("941580");
      a.es(s, t);
    },
    211208: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("446674"),
        o = a("77078"),
        c = a("997289"),
        i = a("716849"),
        r = a("552917"),
        d = a("697218"),
        u = a("719923"),
        O = a("154867"),
        E = a("870879"),
        _ = a("239448"),
        g = a("439141"),
        A = a("648911"),
        p = a("360371"),
        f = a("917219"),
        M = a("49111"),
        m = a("991207"),
        I = a("782340"),
        v = a("80387");
      function h(e) {
        let {
            onLearnMore: t,
            selectedBackgroundOption: h,
            onSelectBackgroundOption: x,
            currentDeviceId: C,
            smallerBackgroundOptions: N,
          } = e,
          R = (0, l.useStateFromStores)([d.default], () =>
            d.default.getCurrentUser()
          ),
          [T, k] = n.useState(null);
        (0, i.useMaybeFetchPremiumLikelihood)(r.default);
        let D = (0, A.default)(),
          B = u.default.canUseCustomBackgrounds(R),
          U = (0, l.useStateFromStoresObject)([E.default], () =>
            B ? E.default.videoFilterAssets : {}
          ),
          j = n.useMemo(
            () =>
              Object.values(U).filter(
                e => e.type === f.VideoFilterType.BACKGROUND
              ),
            [U]
          ),
          L = (0, c.useAnalyticsContext)();
        n.useEffect(() => {
          D
            ? (0, g.applyBackgroundOptionPreview)(h, C, { track: !1 }).catch(
                () => x(null)
              )
            : null != h && x(null);
        }, [C]);
        let V = e => {
          x(e),
            (0, g.applyBackgroundOptionPreview)(e, C, { location: L.location })
              .then(() => k(null))
              .catch(() => {
                k(I.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY),
                  (0, g.applyBackgroundOptionPreview)(null, C, {
                    location: L.location,
                  });
              });
        };
        return D
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(o.Heading, {
                  className: v.spacingTop24,
                  variant: "eyebrow",
                  color: "header-secondary",
                  children: I.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND,
                }),
                null != T
                  ? (0, s.jsx)(o.FormErrorBlock, {
                      className: v.videoBackgroundError,
                      children: T,
                    })
                  : null,
                (0, s.jsx)(p.default, {
                  canUseCustomBackgrounds: B,
                  customBackgroundOptions: j,
                  selectedOption: h,
                  onSelectOption: V,
                  onUpsellClick: () => {
                    (0, o.openModalLazy)(async () => {
                      let { default: e } = await a
                        .el("497296")
                        .then(a.bind(a, "497296"));
                      return a =>
                        (0, s.jsx)(e, {
                          ...a,
                          onLearnMore: t,
                          analyticsSource: {
                            ...L.location,
                            object: M.AnalyticsObjects.BUTTON_CTA,
                          },
                        });
                    });
                  },
                  onAddBackgroundImage: function (e, t) {
                    let a =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    return new Promise(async s => {
                      try {
                        let s = await (0, O.uploadVideoFilterAsset)(
                          e,
                          f.VideoFilterType.BACKGROUND
                        );
                        V(s),
                          (0, _.trackBackgroundOptionAdded)(
                            s,
                            t.type === m.FileTypes.MP4,
                            a
                          ),
                          k(null);
                      } catch (e) {
                        k(e.message);
                      }
                      s();
                    });
                  },
                  smallerOptions: N,
                }),
              ],
            })
          : null;
      }
    },
    360371: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return z;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        o = a.n(l),
        c = a("446674"),
        i = a("77078"),
        r = a("272030"),
        d = a("997289"),
        u = a("812204"),
        O = a("685665"),
        E = a("597517"),
        _ = a("269596"),
        g = a("589578"),
        A = a("818643"),
        p = a("216422"),
        f = a("468759"),
        M = a("132755"),
        m = a("956089"),
        I = a("58608"),
        v = a("599110"),
        h = a("315102"),
        x = a("299039"),
        C = a("239448"),
        N = a("977801"),
        R = a("917219"),
        T = a("49111"),
        k = a("533613"),
        D = a("75015"),
        B = a("646718"),
        U = a("782340"),
        j = a("754146");
      function L(e) {
        let {
          icon: t,
          onClick: a,
          text: n,
          children: l,
          className: c,
          selected: r = !1,
          disabled: d = !1,
          onMouseLeave: u,
          onBlur: O,
        } = e;
        return (0, s.jsxs)(i.Clickable, {
          className: o(c, j.backgroundOption, {
            [j.backgroundOptionSelected]: r,
            [j.backgroundOptionDisabled]: d,
          }),
          onMouseLeave: u,
          onBlur: O,
          onClick: d ? void 0 : a,
          children: [
            r ? (0, s.jsx)("div", { className: j.backgroundOptionRing }) : null,
            (0, s.jsxs)("div", {
              className: j.backgroundOptionInner,
              children: [
                l,
                (0, s.jsxs)("div", {
                  className: j.backgroundOptionContent,
                  children: [
                    (0, s.jsx)(t, {
                      className: o(j.backgroundIconOptionIcon),
                      width: 18,
                      height: 18,
                    }),
                    (0, s.jsx)(i.Text, {
                      className: j.backgroundOptionText,
                      color: "none",
                      variant: "text-sm/normal",
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let { option: t, source: a, isAnimated: l } = e,
          [o, c] = n.useState(!1);
        if (
          (n.useEffect(() => {
            let e = new Image();
            e.src = a;
          }, [a]),
          !l || null == t)
        )
          return (0, s.jsx)("div", {
            className: j.backgroundImageOption,
            style: { backgroundImage: "url(".concat(a, ")") },
          });
        let i = (0, h.getVideoFilterAssetURL)({
          userId: t.user_id,
          assetId: t.id,
          assetHash: t.asset,
          size: 720,
          canAnimate: !1,
        });
        return (0, s.jsx)("img", {
          onMouseMove: () => c(!0),
          onMouseLeave: () => c(!1),
          className: j.backgroundImageOption,
          src: o ? a : i,
          alt: t.id,
        });
      }
      function S(e) {
        let {
            option: t,
            source: n,
            selected: l = !1,
            onSelectOption: g,
            isAnimatedImage: A,
            isVideo: p,
            hotspotLocation: f,
            ...h
          } = e,
          x = (0, d.useAnalyticsContext)(),
          { analyticsLocations: N } = (0, O.default)(
            u.default.VIDEO_BACKGROUND_IMAGE_OPTION
          ),
          R = (0, c.useStateFromStores)(
            [_.default],
            () => null != f && _.default.hasHotspot(f)
          ),
          k = p
            ? (0, s.jsx)(I.default, {
                className: j.backgroundImageOption,
                src: n,
                loop: !0,
                playOnHover: !0,
                muted: !0,
              })
            : (0, s.jsx)(V, {
                isAnimated: A,
                option: (0, C.isCustomBackgroundOption)(t) ? t : void 0,
                source: n,
              });
        function D() {
          null != f &&
            R &&
            (E.hideHotspot(f),
            v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
              type: B.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
              location: x.location,
              location_stack: N,
            }));
        }
        return (0, s.jsxs)(i.Clickable, {
          ...h,
          className: o(j.backgroundOption, { [j.backgroundOptionSelected]: l }),
          onClick: () => g(t),
          onContextMenu: e =>
            (0, r.openContextMenuLazy)(e, async () => {
              let { default: e } = await a
                .el("597035")
                .then(a.bind(a, "597035"));
              return a =>
                (0, s.jsx)(e, { ...a, backgroundOption: t, optionIsInUse: l });
            }),
          children: [
            l ? (0, s.jsx)("div", { className: j.backgroundOptionRing }) : null,
            (0, s.jsx)("div", {
              onFocus: D,
              onMouseEnter: D,
              className: j.backgroundOptionInner,
              children: k,
            }),
            p || A
              ? (0, s.jsx)("div", {
                  className: j.playIcon,
                  children: (0, s.jsx)(M.default, { width: 12, height: 12 }),
                })
              : null,
            R &&
              (0, s.jsx)(m.TextBadge, {
                text: U.default.Messages.NEW,
                className: j.newTextBadge,
              }),
          ],
        });
      }
      function P() {
        return (0, s.jsxs)("div", {
          className: j.customBackgroundTooltip,
          children: [
            (0, s.jsx)(p.default, { className: j.customBackgroundTooltipIcon }),
            (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              children:
                U.default.Messages
                  .CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
            }),
          ],
        });
      }
      function b(e) {
        let { onClick: t, tooltipText: a, disabled: n = !1 } = e,
          l = (0, c.useStateFromStores)([_.default], () =>
            _.default.hasHotspot(
              k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW
            )
          );
        function o() {
          E.hideHotspot(
            k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW
          );
        }
        let r = l
          ? U.default.Messages
              .CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP
          : a;
        return (0, s.jsxs)(i.TooltipContainer, {
          text: r,
          className: j.newBackgroundTooltipContainer,
          children: [
            (0, s.jsxs)(L, {
              className: j.backgroundOptionBlurred,
              disabled: n,
              icon: A.default,
              onClick: t,
              onMouseLeave: o,
              onBlur: o,
              text: (0, s.jsxs)("div", {
                className: j.backgroundCustomInlineUpsell,
                children: [
                  (0, s.jsx)(p.default, {
                    className: j.backgroundCustomInlineUpsellIcon,
                  }),
                  (0, s.jsx)("div", {
                    className: j.overflowEllipsis,
                    children:
                      U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM,
                  }),
                ],
              }),
              children: [
                (0, s.jsx)("div", {
                  className: j.backgroundCustomInlineUpsellBackground,
                }),
                (0, s.jsx)("div", {
                  className: j.backgroundCustomInlineUpsellBackgroundDarkener,
                }),
              ],
            }),
            l &&
              (0, s.jsx)(m.TextBadge, {
                text: U.default.Messages.NEW,
                className: j.newTextBadge,
              }),
          ],
        });
      }
      function y(e) {
        let { onClick: t } = e,
          a = (0, d.useAnalyticsContext)(),
          { analyticsLocations: l } = (0, O.default)(
            u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL
          );
        return (
          n.useEffect(() => {
            v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
              type: B.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
              location: a.location,
              location_stack: l,
            });
          }, []),
          (0, s.jsx)(b, {
            onClick: t,
            tooltipText:
              U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP,
          })
        );
      }
      function w(e) {
        let { onAddBackgroundImage: t, disabled: n } = e,
          l = (0, i.useModalContext)(),
          o = n
            ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format(
                { maxCustomBackgrounds: 25 }
              )
            : U.default.Messages
                .CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM,
          c = [
            {
              name: U.default.Messages.IMAGES,
              extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
          ];
        return (0, s.jsx)(b, {
          disabled: n,
          onClick: function () {
            (0, i.openModalLazy)(
              async () => {
                let { default: e } = await a
                  .el("420333")
                  .then(a.bind(a, "420333"));
                return a =>
                  (0, s.jsx)(e, {
                    maxFileSizeBytes:
                      R.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
                    onComplete: t,
                    uploadType: D.UploadTypes.VIDEO_BACKGROUND,
                    filters: c,
                    modalTitle: U.default.Messages.UPLOAD_BACKGROUND,
                    imageSpecifications:
                      U.default.Messages
                        .CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                    uploadOptionTitle:
                      U.default.Messages
                        .SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                    showUpsellHeader: !0,
                    ...a,
                  });
              },
              { contextKey: l }
            );
          },
          tooltipText: o,
        });
      }
      function z(e) {
        let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: a,
            selectedOption: l,
            onSelectOption: o,
            onUpsellClick: c,
            onAddBackgroundImage: r,
            smallerOptions: d,
          } = e,
          E = n.useMemo(
            () =>
              a.sort((e, t) =>
                null == e.last_used || null == t.last_used
                  ? x.default.compare(t.id, e.id)
                  : new Date(t.last_used).getTime() -
                    new Date(e.last_used).getTime()
              ),
            [a]
          ),
          _ = E.length >= 25,
          { analyticsLocations: A } = (0, O.default)(
            u.default.VIDEO_BACKGROUND_OPTIONS
          ),
          p = Object.values((0, N.default)()),
          M = p.sort(
            (e, t) =>
              R.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] -
              R.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]
          );
        return (0, s.jsx)(O.AnalyticsLocationProvider, {
          value: A,
          children: (0, s.jsxs)("div", {
            className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
            children: [
              (0, s.jsx)(L, {
                selected: null == l,
                icon: f.default,
                onClick: () => o(null),
                text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE,
              }),
              (0, s.jsx)(L, {
                className: j.backgroundOptionBlurred,
                selected: l === R.BLUR_BACKGROUND_OPTION,
                icon: g.default,
                onClick: () => o(R.BLUR_BACKGROUND_OPTION),
                text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                children: (0, s.jsx)("div", {
                  className: j.backgroundOptionBlurBackground,
                }),
              }),
              t
                ? (0, s.jsx)(w, { onAddBackgroundImage: r, disabled: _ })
                : (0, s.jsx)(y, { onClick: c }),
              E.map(e =>
                (0, s.jsx)(
                  i.Tooltip,
                  {
                    text: (0, s.jsx)(P, {}),
                    "aria-label":
                      U.default.Messages
                        .CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                    children: t => {
                      let a = (0, h.getVideoFilterAssetURL)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                      });
                      return null == a
                        ? null
                        : (0, n.createElement)(S, {
                            ...t,
                            key: e.id,
                            option: e,
                            source: a,
                            selected:
                              (0, C.isCustomBackgroundOption)(l) &&
                              l.id === e.id,
                            onSelectOption: o,
                            isVideo: (0, h.isVideoAssetHash)(e.asset),
                            isAnimatedImage: (0, h.isAnimatedIconHash)(e.asset),
                          });
                    },
                  },
                  e.id
                )
              ),
              M.map(e => {
                let t = !0 === e.isVideo;
                return (0, s.jsx)(
                  i.Tooltip,
                  {
                    text: e.name,
                    "aria-label": e.name,
                    children: a =>
                      (0, n.createElement)(S, {
                        ...a,
                        key: e.id,
                        option: e.id,
                        source: e.source,
                        selected: l === e.id,
                        onSelectOption: o,
                        isVideo: t,
                        isAnimatedImage: !1,
                        hotspotLocation: e.hotspotLocation,
                      }),
                  },
                  e.id
                );
              }),
            ],
          }),
        });
      }
    },
    739477: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FilterLoadingIndicator: function () {
            return M;
          },
          default: function () {
            return m;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        o = a.n(l),
        c = a("446674"),
        i = a("862337"),
        r = a("77078"),
        d = a("629109"),
        u = a("845579"),
        O = a("154867"),
        E = a("211208"),
        _ = a("42887"),
        g = a("599110"),
        A = a("49111"),
        p = a("782340"),
        f = a("248502");
      function M() {
        let [e, t] = n.useState(!1),
          a = (0, c.useStateFromStores)([_.default], () =>
            _.default.isMediaFilterSettingLoading()
          );
        return (n.useEffect(() => {
          let e = new i.Timeout();
          return (
            a
              ? e.start(150, () => {
                  t(!0);
                })
              : (e.stop(), t(!1)),
            () => e.stop()
          );
        }, [a]),
        e)
          ? (0, s.jsx)("div", {
              className: f.filterLoadingIndicator,
              children: (0, s.jsx)(r.Spinner, {}),
            })
          : null;
      }
      function m(e) {
        let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: a = !1,
            onLearnMore: l,
            selectedBackgroundOption: i,
            onSelectBackgroundOption: M,
            renderCamera: m,
            hidePreviewToggle: I = !1,
            showSmallBackgroundOptions: v = !1,
          } = e,
          h = (0, c.useStateFromStores)([_.default], () =>
            _.default.getVideoDeviceId()
          ),
          x = (0, c.useStateFromStoresArray)([_.default], () =>
            Object.values(_.default.getVideoDevices())
          ),
          C = u.AlwaysPreviewVideo.useSetting(),
          N = x.map(e => {
            let { id: t, name: a } = e;
            return { value: t, label: a };
          });
        return (
          n.useEffect(() => {
            (0, O.fetchVideoFilterAssets)();
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              m(h),
              _.default.isEnabled()
                ? null
                : (0, s.jsx)(r.Text, {
                    className: f.permissionWarning,
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children:
                      p.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                        onEnableClick: d.default.enable,
                      }),
                  }),
              I
                ? null
                : (0, s.jsx)(r.FormSwitch, {
                    className: f.previewToggle,
                    note: p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                    onChange: e => {
                      u.AlwaysPreviewVideo.updateSetting(e),
                        g.default.track(
                          A.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL,
                          { always_preview_video: e }
                        );
                    },
                    value: C,
                    hideBorder: !0,
                    children: (0, s.jsx)("div", {
                      className: f.cameraPreviewTitle,
                      children:
                        p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW,
                    }),
                  }),
              t
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      a
                        ? null
                        : (0, s.jsx)(r.Heading, {
                            className: f.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.CAMERA_PREVIEW_CAMERA,
                          }),
                      (0, s.jsx)(r.SingleSelect, {
                        placeholder: p.default.Messages.CHANGE_CAMERA,
                        className: o(f.selector, { [f.selectorNoHeader]: a }),
                        options: N,
                        value: h,
                        onChange: e => d.default.setVideoDevice(e),
                      }),
                    ],
                  }),
              (0, s.jsx)(E.default, {
                onLearnMore: l,
                selectedBackgroundOption: i,
                onSelectBackgroundOption: M,
                currentDeviceId: h,
                smallerBackgroundOptions: v,
              }),
            ],
          })
        );
      }
    },
    589578: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        l = a("384335"),
        o = a("75196"),
        c = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              className: l,
              foreground: c,
              ...i
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, o.default)(i),
              className: l,
              width: t,
              height: a,
              viewBox: "0 0 32 32",
              children: (0, s.jsx)("path", {
                className: c,
                d: "M10.5 24c0-3.682 2.318-6 6-6s6 2.318 6 6h-12zM16.5 16a4 4 0 100-8 4 4 0 000 8zM29.166 15.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 15h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 15zM31.167 16.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 11.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 11h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 11zM31.167 12.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 7.334H28.5a.335.335 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.335.335 0 00-.334-.333zM26.5 7h-1.333a.335.335 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333V7.333A.335.335 0 0026.5 7zM31.167 8.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 23.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 23h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 23zM31.167 24.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 19.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 19h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 19zM31.167 20.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 15.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 15H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 15zM1.833 16.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 11.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 11H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 11zM1.833 12.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 7.334h-.667a.335.335 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.335.335 0 00-.333-.333zM7.833 7H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333V7.333A.335.335 0 007.833 7zM1.833 8.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 23.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 23H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 23zM1.833 24.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 19.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 19H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 19zM1.833 20.333a.333.333 0 100-.667.333.333 0 000 .667z",
                fill: n,
              }),
            });
          },
          l.BlurBackgroundIcon,
          void 0,
          { size: 24 }
        );
    },
    941580: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BlurBackgroundIcon: function () {
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("669491"),
        l = a("82169");
      let o = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: o = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, l.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M21.7 2.3a1 1 0 0 1 0 1.4l-4.92 4.93c-.12.12-.33.09-.41-.06-.23-.42-.52-.8-.85-1.13a.26.26 0 0 1-.01-.36l4.78-4.79a1 1 0 0 1 1.42 0ZM20 20.6c0 .26.36.45.55.27l1.16-1.16a1 1 0 0 0-1.42-1.42l-.4.41a.25.25 0 0 0-.07.24c.12.53.18 1.09.18 1.66ZM4 20.6c0 .2.02.4.05.6a.26.26 0 0 1-.07.23l-.27.28a1 1 0 0 1-1.42-1.42l1.35-1.34c.19-.19.53.01.48.27-.08.45-.12.91-.12 1.38ZM16.7 3.7l-2.58 2.6a.26.26 0 0 1-.28.05A4.99 4.99 0 0 0 12 6c-.15 0-.23-.18-.13-.29L15.3 2.3a1 1 0 1 1 1.42 1.42ZM7 11c0-.15-.18-.23-.29-.13L2.3 15.3a1 1 0 1 0 1.42 1.42l3.58-3.6c.08-.06.1-.17.06-.27A4.99 4.99 0 0 1 7 11ZM18.23 15.36c-.1.1-.1.24-.02.35.32.37.6.77.83 1.2.09.14.29.18.41.05l2.26-2.25a1 1 0 0 0-1.42-1.42l-2.06 2.07ZM21.7 9.7l-4.62 4.64a.26.26 0 0 1-.33.03l-.45-.3a.27.27 0 0 1-.09-.37c.38-.6.64-1.27.74-2 0-.05.03-.1.07-.14L20.3 8.3a1 1 0 1 1 1.42 1.42ZM11.7 2.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4-1.4l8-8a1 1 0 0 1 1.4 0ZM6.7 3.7a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3ZM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 20.6c0-3.1 2.5-5.6 5.6-5.6h.8c3.1 0 5.6 2.5 5.6 5.6 0 .77-.63 1.4-1.4 1.4a.17.17 0 0 1-.16-.12c-.19-.7-.44-1.36-.68-1.89-.11-.24-.43-.15-.4.12l.08.8a1 1 0 0 1-1 1.09H9.55a1 1 0 0 1-.99-1.1l.08-.79c.03-.27-.29-.36-.4-.12-.24.53-.5 1.19-.68 1.89a.17.17 0 0 1-.16.12A1.4 1.4 0 0 1 6 20.6Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=76829ca6456f2f4dd9d9.js.map
