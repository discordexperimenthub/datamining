(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56122"],
  {
    101017: function (e, a, l) {
      "use strict";
      e.exports = l.p + "76db37e93ca50f3fa98b.svg";
    },
    65757: function (e, a, l) {
      "use strict";
      e.exports = l.p + "829f8ef7dcf355fbe141.svg";
    },
    375832: function (e, a, l) {
      "use strict";
      e.exports = l.p + "606576712b69844bb246.svg";
    },
    125632: function (e, a, l) {
      "use strict";
      e.exports = l.p + "1a008a52c770a5334da4.png";
    },
    591589: function (e, a, l) {
      "use strict";
      e.exports = l.p + "a97cf12e63e89483261f.png";
    },
    608684: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          ImageUploaderIcon: function () {
            return h;
          },
          default: function () {
            return g;
          },
        }),
        l("222007");
      var t = l("37983"),
        i = l("884691"),
        n = l("414456"),
        r = l.n(n),
        s = l("627445"),
        o = l.n(s),
        u = l("77078"),
        d = l("159885"),
        c = l("694187"),
        f = l("49111"),
        m = l("782340"),
        v = l("574448");
      function h(e) {
        let { className: a, icon: l = null } = e;
        return (0, t.jsx)("div", {
          className: r(v.imageUploaderIcon, a),
          children: l,
        });
      }
      class p extends i.PureComponent {
        handleExternalFileChange(e) {
          o(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted"
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let a, l, i, n;
          let {
            image: s,
            hint: o,
            name: p,
            makeURL: g,
            disabled: I,
            onChange: x,
            showIcon: S,
            showIconDisabled: A,
            className: U,
            imageClassName: N,
            iconClassName: E,
            iconWrapperClassName: T,
            icon: j,
            hideSize: y,
            imageStyle: C,
            showRemoveButton: P,
            maxFileSizeBytes: b,
            onFileSizeError: M,
            onOpenImageSelectModal: R,
            "aria-label": _,
          } = this.props;
          if (
            (null != (a = null != s && /^data:/.test(s) ? s : g(s))
              ? (l = 'url("'.concat(a, '")'))
              : null != p &&
                (i = (0, t.jsx)("div", {
                  className: v.imageUploaderAcronym,
                  children: (0, d.getAcronym)(p),
                })),
            I)
          )
            return (0, t.jsx)("div", {
              className: r(v.imageUploader, v.disabled, U),
              children: (0, t.jsxs)("div", {
                className: r(v.imageUploaderInner, N),
                style: { ...C, backgroundImage: l },
                children: [
                  i,
                  A &&
                    (0, t.jsx)("div", {
                      className: r(
                        v.imageUploaderIcon,
                        v.imageUploaderIconDisabled,
                        E
                      ),
                      children: j,
                    }),
                ],
              }),
            });
          null != s
            ? (n = (0, t.jsx)(u.Anchor, {
                className: v.removeButton,
                onClick: this.handleRemove,
                children: m.default.Messages.REMOVE,
              }))
            : !y &&
              (n = (0, t.jsx)("small", {
                className: v.sizeInfo,
                children: m.default.Messages.MINIMUM_SIZE.format({
                  size: f.AVATAR_SIZE,
                }),
              }));
          let k =
            null !== (e = null != _ ? _ : o) && void 0 !== e
              ? e
              : m.default.Messages.CHANGE_AVATAR;
          return (0, t.jsxs)("div", {
            className: r(v.imageUploader, U),
            children: [
              (0, t.jsx)(u.FocusRing, {
                within: !0,
                children: (0, t.jsxs)("div", {
                  className: S ? r(v.imageUploaderIconWrapper, T) : void 0,
                  children: [
                    (0, t.jsxs)("div", {
                      className: r(v.imageUploaderInner, N),
                      style: { ...C, backgroundImage: l },
                      children: [
                        (0, t.jsx)("span", { "aria-hidden": !0, children: i }),
                        null != R
                          ? (0, t.jsx)(u.Clickable, {
                              className: v.imageUploaderFileInput,
                              "aria-label": k,
                              onClick: R,
                            })
                          : (0, t.jsx)(c.default, {
                              ref: this.inputRef,
                              onChange: x,
                              className: v.imageUploaderFileInput,
                              "aria-label": k,
                              tabIndex: 0,
                              maxFileSizeBytes: b,
                              onFileSizeError: M,
                            }),
                      ],
                    }),
                    null != o &&
                      (0, t.jsx)("div", {
                        className: v.imageUploaderHint,
                        "aria-hidden": "true",
                        children: o,
                      }),
                    S && (0, t.jsx)(h, { className: E, icon: j }),
                  ],
                }),
              }),
              P ? n : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = i.createRef()),
            (this.handleRemove = () => {
              this.props.onChange(null);
            });
        }
      }
      p.defaultProps = {
        name: "",
        makeURL: e => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      };
      var g = p;
    },
    360871: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          FakeActivityCharacter: function () {
            return t;
          },
          default: function () {
            return I;
          },
        }),
        l("222007");
      var t,
        i,
        n = l("37983"),
        r = l("884691"),
        s = l("414456"),
        o = l.n(s),
        u = l("146606"),
        d = l("77078"),
        c = l("206230"),
        f = l("777003"),
        m = l("782340"),
        v = l("771216"),
        h = l("125632"),
        p = l("591589");
      ((i = t || (t = {}))[(i.WUMPUS = 0)] = "WUMPUS"),
        (i[(i.PHIBI = 1)] = "PHIBI");
      let g = { 0: v.activityCharacterWumpus, 1: v.activityCharacterPhibi };
      var I = r.memo(function (e) {
        let {
            activityName: a,
            activityCharacter: l = 0,
            showExampleButton: t = !1,
          } = e,
          [i, s] = r.useState(0),
          [I, x] = (0, u.useSpring)(() => ({
            from: { rotate: "0deg" },
            config: { tension: 1e3, friction: 5 },
          })),
          S = r.useRef({
            seconds: i,
            jitter: async () => {
              for (;;) {
                var e;
                let a =
                  ((e = S.current.seconds),
                  c.default.useReducedMotion
                    ? 0
                    : Math.min(10, ((e -= 5399) / 300) * 10));
                x({ rotate: "-".concat(a, "deg") }),
                  await new Promise(e => setTimeout(e, 80)),
                  x({ rotate: "".concat(a, "deg") }),
                  await new Promise(e => setTimeout(e, 80));
              }
            },
          });
        return (
          r.useEffect(() => void (S.current.seconds = i)),
          r.useEffect(() => {
            let e = setInterval(() => {
              s(e => (5399 === e && S.current.jitter(), ++e));
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          (0, n.jsxs)(f.default, {
            lastSection: !0,
            "aria-hidden": !0,
            children: [
              (0, n.jsx)(d.Heading, {
                className: v.fakeActivityTitle,
                variant: "eyebrow",
                children:
                  m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE,
              }),
              (0, n.jsxs)("div", {
                className: v.fakeActivityLayout,
                children: [
                  (0, n.jsx)("div", {
                    className: o(v.fakeActivityIcon, g[l]),
                    children: (0, n.jsx)(u.animated.img, {
                      className: v.fakeActivityPencil,
                      src: 0 === l ? p : h,
                      style: I,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: v.fakeActivityContent,
                    children: [
                      (0, n.jsx)(d.Text, {
                        variant: "text-sm/semibold",
                        children:
                          null != a
                            ? a
                            : m.default.Messages.USER_SETTINGS_USER_PROFILE,
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children:
                          m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format(
                            {
                              renderTimeHook(e, a) {
                                let l = i % 60,
                                  t = (i - l) / 60;
                                return (0, n.jsxs)(
                                  "span",
                                  {
                                    className: v.fakeActivityTimeValues,
                                    children: [
                                      t.toString().padStart(2, "0"),
                                      ":",
                                      l.toString().padStart(2, "0"),
                                    ],
                                  },
                                  a
                                );
                              },
                            }
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              t &&
                (0, n.jsx)(d.Button, {
                  className: v.button,
                  color: v.buttonColor,
                  size: d.Button.Sizes.SMALL,
                  fullWidth: !0,
                  children:
                    m.default.Messages
                      .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                }),
            ],
          })
        );
      });
    },
    184900: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          default: function () {
            return ei;
          },
        }),
        l("222007");
      var t = l("37983"),
        i = l("884691"),
        n = l("414456"),
        r = l.n(n),
        s = l("509043"),
        o = l("446674"),
        u = l("669491"),
        d = l("77078"),
        c = l("272030"),
        f = l("875212"),
        m = l("841098"),
        v = l("206230"),
        h = l("685665"),
        p = l("462274"),
        g = l("234251"),
        I = l("606292"),
        x = l("335031"),
        S = l("608684"),
        A = l("635471"),
        U = l("388491"),
        N = l("217513"),
        E = l("581295"),
        T = l("878569"),
        j = l("430312"),
        y = l("552243"),
        C = l("10532"),
        P = l("935409"),
        b = l("648149"),
        M = l("369869"),
        R = l("802279"),
        _ = l("465215"),
        k = l("491250"),
        w = l("106435"),
        B = l("845579"),
        O = l("26989"),
        z = l("824563"),
        F = l("102985"),
        L = l("471671"),
        D = l("275623"),
        G = l("832132"),
        W = l("315102"),
        H = l("719923"),
        V = l("158998"),
        Z = l("50885"),
        Y = l("360871"),
        q = l("771325"),
        K = l("453252"),
        X = l("49111"),
        J = l("75015"),
        Q = l("590456"),
        $ = l("782340"),
        ee = l("248549"),
        ea = l("375832");
      let el = Z.default.getEnableHardwareAcceleration()
          ? d.AnimatedAvatar
          : d.Avatar,
        et = (0, T.buildGetPremiumUserBannerStyles)({
          premiumUserWithBanner: ee.avatarUploaderPremium,
          premiumUserWithoutBanner: ee.avatarUploaderPremiumNoBanner,
          default: ee.avatarUploaderNormal,
        });
      function ei(e) {
        var a, n, T, Z;
        let {
            user: ei,
            guild: en,
            canUsePremiumCustomization: er,
            onUpsellClick: es,
            onAvatarChange: eo,
            onBannerChange: eu,
            pendingAccentColor: ed,
            pendingBanner: ec,
            pendingBio: ef,
            pendingPronouns: em,
            pendingAvatar: ev,
            pendingAvatarDecoration: eh,
            pendingNickname: ep,
            pendingGlobalName: eg,
            pendingThemeColors: eI,
            pendingProfileEffectId: ex,
            avatarClassName: eS,
            activityName: eA,
            activityCharacter: eU,
            isTryItOutFlow: eN = !1,
            disabledInputs: eE = !1,
            hideExampleButton: eT = !1,
            hideFakeActivity: ej = !1,
            hideBioSection: ey = !1,
            forProfileEffectModal: eC = !1,
            hideMemberStatusSection: eP = !0,
            bodyClassName: eb,
            slideInAvatarDecoration: eM = !1,
            useLargeBanner: eR = !1,
          } = e,
          e_ = i.useRef(null),
          [ek, ew] = i.useState(!1),
          eB = B.GifAutoPlay.getSetting(),
          {
            avatarDecorationSrc: eO,
            avatarSrc: ez,
            eventHandlers: eF,
          } = (0, w.default)({
            user: ei,
            guildId: null == en ? void 0 : en.id,
            avatarDecorationOverride:
              (0, g.hasGlobalDefaultAvatarDecoration)(ei, en) && null == eh
                ? void 0
                : eh,
            avatarOverride: ev,
            size: d.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          eL = (0, N.default)(ei.id, null == en ? void 0 : en.id),
          eD = (0, o.useStateFromStores)(
            [v.default],
            () => v.default.syncProfileThemeWithUserTheme
          ),
          eG = (0, m.default)(),
          eW = (0, o.useStateFromStores)([O.default], () =>
            null == en ? null : O.default.getMember(en.id, ei.id)
          ),
          eH = null != en,
          eV =
            null === (a = (0, N.default)(ei.id, null)) || void 0 === a
              ? void 0
              : a.profileEffectId,
          eZ = null == eL ? void 0 : eL.profileEffectId,
          eY = eH && null == ex ? (ex !== eZ && null !== ex ? eZ : eV) : ex,
          eq = void 0 === ev ? ei.getAvatarURL(void 0, 80) : ev,
          eK = (0, p.default)(
            eq,
            (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(),
            !1
          ),
          eX = null == eL ? void 0 : eL.getPreviewThemeColors(eI),
          eJ =
            null !== (n = null == eX ? void 0 : eX[0]) && void 0 !== n
              ? n
              : null == eL
                ? void 0
                : eL.primaryColor,
          eQ = eD ? eG : (0, U.getProfileTheme)(eJ),
          e$ = (0, x.default)(
            null !== (T = null != ed ? ed : eJ) && void 0 !== T
              ? T
              : (0, s.hex2int)(eK)
          ).hsl,
          e0 = (0, o.useStateFromStores)([L.default], () =>
            L.default.isFocused()
          ),
          e1 = null == eL ? void 0 : eL.getPreviewBanner(ec, eB ? e0 : ek),
          e5 = null != e1 || null != eY,
          e2 = eR || null != eY,
          e8 =
            null !==
              (Z = (0, q.getPreviewNickname)(
                ep,
                null == eW ? void 0 : eW.nick
              )) && void 0 !== Z
              ? Z
              : (0, q.getPreviewDisplayName)(eg, V.default.getName(ei)),
          [e3, e4] = (0, o.useStateFromStoresArray)([z.default], () => [
            z.default.findActivity(
              ei.id,
              e => e.type === X.ActivityTypes.CUSTOM_STATUS
            ),
            z.default.getStatus(ei.id),
          ]),
          e6 = (0, d.useStatusFillColor)(e4),
          e7 = (0, o.useStateFromStores)(
            [F.default],
            () => F.default.hidePersonalInformation
          ),
          e9 =
            (null == eL ? void 0 : eL.canUsePremiumProfileCustomization) || er,
          ae = i.useCallback(() => {
            var e, a;
            null === (a = e_.current) ||
              void 0 === a ||
              null === (e = a.inputRef.current) ||
              void 0 === e ||
              e.activateUploadDialogue();
          }, []),
          aa = i.useCallback(
            (e, a) => {
              null == e || null == a
                ? eo(null)
                : "image/gif" !== a.type || H.default.canUseAnimatedAvatar(ei)
                  ? (0, d.openModalLazy)(async () => {
                      let { default: i } = await l
                        .el("57015")
                        .then(l.bind(l, "57015"));
                      return l =>
                        (0, t.jsx)(i, {
                          onCrop: eo,
                          file: a,
                          imgURI: e,
                          allowSkip: !0,
                          ...l,
                        });
                    })
                  : (0, d.openModalLazy)(async () => {
                      let { default: a } = await l
                        .el("805923")
                        .then(l.bind(l, "805923"));
                      return l =>
                        (0, t.jsx)(a, {
                          ...l,
                          imgURI: e,
                          onChangeAvatar: () => {
                            l.onClose(), ae();
                          },
                        });
                    });
            },
            [ei, ae, eo]
          ),
          al = (e, a) => {
            if (null == e || null == a) return eu(null);
            (0, d.openModalLazy)(async () => {
              let { default: i } = await l.el("57015").then(l.bind(l, "57015"));
              return l =>
                (0, t.jsx)(i, {
                  onCrop: eu,
                  uploadType: J.UploadTypes.BANNER,
                  file: a,
                  imgURI: e,
                  allowSkip: !0,
                  ...l,
                });
            });
          };
        function at() {
          let e = null != eQ ? (0, d.getStatusBackdropColor)(eQ) : null;
          return (0, t.jsxs)("div", {
            className: ee.status,
            children: [
              null != e &&
                (null == eL ? void 0 : eL.canUsePremiumProfileCustomization) &&
                (0, t.jsx)("div", {
                  className: ee.statusDotBackground,
                  style: {
                    backgroundColor: e,
                    opacity: (0, d.getStatusBackdropOpacity)(e4, e),
                  },
                }),
              (0, t.jsx)("svg", {
                className: ee.statusDot,
                children: (0, t.jsx)("rect", {
                  height: "100%",
                  width: "100%",
                  fill: e6,
                  mask: "url(#".concat((0, d.getStatusMask)(e4, !1), ")"),
                }),
              }),
            ],
          });
        }
        let ai = "ProfileCustomizationPreview";
        (0, f.useTriggerDebuggingAA)({
          location: ai + " auto on",
          autoTrackExposure: !0,
        }),
          (0, f.useTriggerDebuggingAA)({
            location: ai + " auto off",
            autoTrackExposure: !1,
          });
        let { analyticsLocations: an } = (0, h.default)();
        i.useEffect(() => {
          if (eB) return;
          let e =
            null == eL
              ? void 0
              : eL.getBannerURL({ canAnimate: !0, size: 480 });
          if (!W.isAnimatedImageURL(e)) return;
          let a = new Image();
          a.src = null != e ? e : "";
        }, [eL, eB]);
        let ar = null == en;
        return (0, t.jsxs)(j.default, {
          forceShowPremium: er,
          user: ei,
          guildId: null == en ? void 0 : en.id,
          profileType: Q.UserProfileTypes.POPOUT,
          pendingThemeColors: eI,
          pendingProfileEffectId: eY,
          className: eC
            ? e9
              ? ee.profileEffectsModalCustomizationPreviewWithTheme
              : ee.profileEffectsModalCustomizationPreviewWithoutTheme
            : e9
              ? ee.profileCustomizationPreviewWithTheme
              : ee.profileCustomizationPreviewWithoutTheme,
          children: [
            (0, t.jsx)(A.default, { profileEffectId: void 0 !== eY ? eY : eZ }),
            (0, t.jsxs)(d.HeadingLevel, {
              children: [
                (0, t.jsx)(E.default, {
                  profileType: Q.UserProfileTypes.POPOUT,
                  hasBanner: e5,
                  isPremium: er,
                  hasThemeColors: e9,
                  forProfileEffectModal: eC,
                  hasProfileEffect: e2,
                  children: er
                    ? (0, t.jsxs)("div", {
                        onMouseMove: () => ew(!0),
                        onMouseLeave: () => ew(!1),
                        children: [
                          (0, t.jsx)(S.default, {
                            className: ee.bannerUploader,
                            showRemoveButton: !1,
                            disabled: !er || eE,
                            image: e1,
                            makeURL: () => e1,
                            onChange: al,
                            imageStyle: { backgroundColor: e$ },
                            imageClassName: r(
                              e5
                                ? ee.bannerUploaderInnerSquare
                                : ee.bannerUploaderInnerSquareEmpty
                            ),
                            hint: $.default.Messages.CHANGE_BANNER,
                            onOpenImageSelectModal: () =>
                              (0, q.handleOpenSelectImageModal)(
                                J.UploadTypes.BANNER,
                                null == eW ? void 0 : eW.guildId,
                                eN,
                                void 0
                              ),
                            hideSize: !0,
                            maxFileSizeBytes: K.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                            onFileSizeError: q.showFileSizeErrorModal,
                          }),
                          !eB && W.isAnimatedImageURL(e1)
                            ? (0, t.jsx)(D.default, { className: ee.gifTag })
                            : null,
                        ],
                      })
                    : (0, t.jsx)("div", {
                        className: e2
                          ? ee.bannerUploaderInnerSquare
                          : ee.bannerNormal,
                        style: { backgroundColor: e$ },
                        children: eE
                          ? null
                          : (0, t.jsx)(d.Clickable, {
                              onClick: () =>
                                null == es
                                  ? void 0
                                  : es({
                                      object:
                                        X.AnalyticsObjects.EDIT_PROFILE_BANNER,
                                    }),
                              className: ee.bannerNitroUpsell,
                              children: (0, t.jsx)(d.Heading, {
                                className: ee.bannerNitroUpsellText,
                                variant: "eyebrow",
                                children:
                                  $.default.Messages
                                    .USER_SETTINGS_UNLOCK_BANNER,
                              }),
                            }),
                      }),
                }),
                ar
                  ? (function () {
                      let e = () =>
                          (0, q.handleOpenSelectImageModal)(
                            J.UploadTypes.AVATAR,
                            null == eW ? void 0 : eW.guildId,
                            eN
                          ),
                        a = () =>
                          (0, I.openAvatarDecorationModal)({
                            guild: null == en ? void 0 : en,
                            analyticsLocations: an,
                            isTryItOutFlow: eN,
                          });
                      return (0, t.jsxs)(d.Clickable, {
                        ...eF,
                        "aria-disabled": eE,
                        onClick: eE
                          ? void 0
                          : i => {
                              (0, c.openContextMenuLazy)(i, async () => {
                                let { default: i } = await l
                                  .el("609516")
                                  .then(l.bind(l, "609516"));
                                return () =>
                                  (0, t.jsx)(i, {
                                    changeAvatarAction: e,
                                    changeDecorationAction: a,
                                  });
                              });
                            },
                        className: r(
                          et({
                            isPremium: er,
                            hasBanner: e5,
                            hasProfileEffect: e2,
                          }),
                          { [ee.defaultCursor]: eE }
                        ),
                        children: [
                          (0, t.jsx)(el, {
                            className: ee.avatarUploaderInner,
                            src: ez,
                            avatarDecoration: eM ? null : eO,
                            size: d.AvatarSizes.SIZE_80,
                            "aria-label": ei.username,
                          }),
                          eM &&
                            (0, t.jsx)(
                              y.default,
                              {
                                initTranslate3d:
                                  "translate3d(-20px, -120px, 0)",
                                children: (0, t.jsx)(el, {
                                  src: ea,
                                  avatarDecoration: eO,
                                  size: d.AvatarSizes.SIZE_80,
                                  status: X.StatusTypes.UNKNOWN,
                                  className: ee.tryingOutAvatarDecoration,
                                  "aria-hidden": !0,
                                }),
                              },
                              eO
                            ),
                          eE
                            ? null
                            : (0, t.jsx)("div", {
                                className: ee.hoverIconWrapper,
                                children: (0, t.jsx)(G.default, {
                                  className: ee.hoverIcon,
                                  color: "white",
                                }),
                              }),
                          at(),
                        ],
                      });
                    })()
                  : (function () {
                      let e = null != eW && !er,
                        a = (0, t.jsxs)("div", {
                          className: et({
                            isPremium: er,
                            hasBanner: e5,
                            hasProfileEffect: e2,
                          }),
                          children: [
                            (0, t.jsx)(S.default, {
                              disabled: eE,
                              ref: e_,
                              showIcon: null == eO,
                              hint: e
                                ? $.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR
                                : $.default.Messages.CHANGE_AVATAR,
                              showRemoveButton: !1,
                              imageClassName: r(eS, ee.avatarUploaderInner),
                              image: ez,
                              onChange: aa,
                              makeURL: () => ez,
                              maxFileSizeBytes:
                                K.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                              onFileSizeError: q.showFileSizeErrorModal,
                              onOpenImageSelectModal: () =>
                                (0, q.handleOpenSelectImageModal)(
                                  J.UploadTypes.AVATAR,
                                  null == eW ? void 0 : eW.guildId,
                                  eN,
                                  void 0
                                ),
                            }),
                            null != eO &&
                              (0, t.jsx)("img", {
                                className: ee.avatarDecoration,
                                src: eO,
                                alt: " ",
                                "aria-hidden": !0,
                              }),
                            at(),
                          ],
                        });
                      return e
                        ? (0, t.jsx)(d.Clickable, {
                            onClickCapture: e => {
                              e.stopPropagation(),
                                null == es ||
                                  es({ object: X.AnalyticsObjects.AVATAR });
                            },
                            children: a,
                          })
                        : a;
                    })(),
                (0, t.jsx)(P.UserPopoutBadgeList, {
                  user: ei,
                  guildId: null == en ? void 0 : en.id,
                  isTryItOutFlow: eN,
                  forProfileEffectModal: eC,
                }),
                (function () {
                  let e = null == eL ? void 0 : eL.getPreviewBio(ef);
                  return (0, t.jsxs)(j.default.Inner, {
                    className: r(ee.body, eb),
                    children: [
                      (0, t.jsx)(k.default, {
                        isTryItOut: eN,
                        user: ei,
                        nickname: null != e8 ? e8 : ei.username,
                        pronouns:
                          null != em ? em : null == eL ? void 0 : eL.pronouns,
                        usernameIcon: (() => {
                          let e = null != eW;
                          if (!e) return;
                          let a = null === ev;
                          if (a) return;
                          let l = null != eW.avatar || null != ev;
                          if (l)
                            return (0, t.jsx)(b.default, {
                              user: ei,
                              nickname: e8,
                            });
                        })(),
                      }),
                      !eC &&
                        (0, t.jsx)(R.default, { customStatusActivity: e3 }),
                      (0, t.jsx)(C.default, {}),
                      !ey &&
                        (0, t.jsx)(M.default, {
                          isUsingGuildBio:
                            null == e ? void 0 : e.isUsingGuildValue,
                          guild: en,
                          bio: null == e ? void 0 : e.value,
                          hidePersonalInformation: e7,
                          lastSection: ej,
                          lineClamp: eC ? 3 : void 0,
                        }),
                      !eP &&
                        (0, t.jsx)(_.default, {
                          userId: ei.id,
                          guild: en,
                          guildMember: eW,
                        }),
                      !ej &&
                        (0, t.jsx)(Y.default, {
                          activityName: eA,
                          activityCharacter: eU,
                          showExampleButton: null == en && !eT,
                        }),
                    ],
                  });
                })(),
              ],
            }),
          ],
        });
      }
    },
    552243: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          default: function () {
            return s;
          },
        });
      var t = l("37983");
      l("884691");
      var i = l("146606"),
        n = l("65597"),
        r = l("206230"),
        s = e => {
          let { children: a, initTranslate3d: l } = e,
            s = (0, n.default)([r.default], () => r.default.useReducedMotion),
            o = (0, i.useSpring)({
              immediate: s,
              from: { transform: l },
              to: { transform: "translate3d(0, 0, 0)" },
            });
          return (0, t.jsx)(i.animated.div, { style: o, children: a });
        };
    },
  },
]);
//# sourceMappingURL=ff8819b4ffb1470cbc55.js.map
