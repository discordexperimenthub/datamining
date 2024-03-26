(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57832"],
  {
    800751: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SHAKE_INTENSITY_DEFAULT: function () {
            return j;
          },
          SHAKE_INTENSITY_MAX: function () {
            return C;
          },
          SHAKE_INTENSITY_INCREMENT: function () {
            return E;
          },
          default: function () {
            return R;
          },
        }),
        n("424973"),
        n("881410"),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        l = n("759843"),
        r = n("669491"),
        o = n("77078"),
        a = n("428958"),
        c = n("69927"),
        u = n("384997"),
        d = n("674574"),
        h = n("304386"),
        m = n("423487"),
        p = n("956089"),
        f = n("659500"),
        S = n("286235"),
        b = n("901582"),
        g = n("534291"),
        v = n("49111"),
        x = n("782340"),
        N = n("380640");
      let T = Object.freeze({
          shouldPreventNavigation: !1,
          onPreventNavigation: null,
          sidebarOpen: !0,
        }),
        j = 1.4,
        C = 15,
        E = 2;
      function I(e) {
        var t, n;
        let { section: s, setPreventNavigation: r, scrollerRef: o } = e;
        (0, a.default)({
          type: l.ImpressionTypes.PANE,
          name: null == s ? void 0 : s.impressionName,
          properties: null == s ? void 0 : s.impressionProperties,
        });
        let c =
            null !== (t = null == s ? void 0 : s.element) && void 0 !== t
              ? t
              : v.NOOP_NULL,
          u =
            null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n
              ? n
              : {};
        return (0, i.jsx)(b.default, {
          section: s.section,
          children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: r,
            refToScroller: o,
          }),
        });
      }
      class P extends s.PureComponent {
        componentDidMount() {
          this.getPredicateSections().forEach(e => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
              n.forEach(e => {
                e.addChangeListener(this.handleNoticeStoreUpdate),
                  this._subscribedStores.push(e);
              });
          });
        }
        componentDidUpdate(e) {
          let { section: t } = e;
          t !== this.props.section && (this._intensity = j);
        }
        componentWillUnmount() {
          (this._unmounted = !0),
            this._subscribedStores.forEach(e =>
              e.removeChangeListener(this.handleNoticeStoreUpdate)
            ),
            this.props.sections.forEach(e => {
              var t;
              return null === (t = e.onSettingsClose) || void 0 === t
                ? void 0
                : t.call(e);
            });
        }
        getPredicateSections() {
          return this.props.sections.filter(
            e => null == e.predicate || e.predicate()
          );
        }
        validNavigation() {
          var e;
          let { section: t } = this.props,
            n = this.getPredicateSections(),
            { notice: i } =
              null !== (e = n.find(e => t === e.section)) && void 0 !== e
                ? e
                : {};
          return null != i &&
            i.stores.some(
              e =>
                e.showNotice() &&
                !(null != e.canCloseEarly && e.canCloseEarly())
            )
            ? (f.ComponentDispatch.dispatch(v.ComponentActions.SHAKE_APP, {
                duration: 300,
                intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + E, C)),
              f.ComponentDispatch.dispatch(v.ComponentActions.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = j), !0);
        }
        renderSidebar(e) {
          let { section: t, title: n } = this.props,
            s = e
              .flatMap(e => e.newIndicatorDismissibleContentTypes)
              .filter(e => null != e),
            l = null != t ? t : e[0].section;
          return (0, i.jsx)(u.default, {
            contentTypes: s,
            children: t => {
              let { visibleContent: s } = t;
              return (0, i.jsx)(o.TabBar, {
                selectedItem: l,
                onItemSelect: this.handleSetSection,
                orientation: "vertical",
                "aria-label": n,
                children: e.map((e, t) => {
                  switch (e.section) {
                    case g.SectionTypes.HEADER:
                      return (0, i.jsx)(
                        o.TabBar.Header,
                        { children: e.label },
                        t
                      );
                    case g.SectionTypes.DIVIDER:
                      return (0, i.jsx)(o.TabBar.Separator, {}, t);
                    case g.SectionTypes.CUSTOM:
                      var n;
                      let r =
                        null !== (n = e.element) && void 0 !== n
                          ? n
                          : v.NOOP_NULL;
                      return (0, i.jsx)(r, {}, t);
                    default:
                      return this.renderSettingsSectionTabBarItem(
                        e,
                        l === e.section,
                        s
                      );
                  }
                }),
              });
            },
          });
        }
        renderNotice(e) {
          let { theme: t } = this.props;
          if (null == e || null == e.notice) return null;
          let { stores: n, element: s } = e.notice;
          return null == n || n.some(e => e.showNotice())
            ? (0, i.jsx)(s, { theme: t })
            : null;
        }
        render() {
          var e;
          let {
              sidebarTheme: t,
              section: n,
              title: s,
              onClose: l,
              hideSidebar: r,
            } = this.props,
            o = this.getPredicateSections(),
            a = o.find(e => e.section === n);
          if (null == a || null == n) return null;
          let u =
            null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) &&
            void 0 !== e
              ? e
              : s;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c.AppPageTitle, { location: s, subsection: u }),
              (0, i.jsx)(g.default, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, i.jsx)(I, {
                  section: a,
                  setPreventNavigation: this.setPreventNavigation,
                  scrollerRef: this.scrollerRef,
                }),
                mobileSidebarOpen: this.state.sidebarOpen,
                hideSidebar: r,
                toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                contentType: a.type,
                notice: this.renderNotice(a),
                closeAction: null != l ? this.handleClose : void 0,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this._unmounted = !1),
            (this._intensity = j),
            (this._subscribedStores = []),
            (this.scrollerRef = s.createRef()),
            (this.state = {
              ...T,
              sidebarOpen:
                this.props.section !== v.UserSettingsSections.SUBSCRIPTIONS &&
                this.props.section !==
                  v.UserSettingsSections.PROFILE_CUSTOMIZATION,
            }),
            (this.setPreventNavigation = (e, t) => {
              this.setState({
                shouldPreventNavigation: e,
                onPreventNavigation: t,
              });
            }),
            (this.handleSetSection = e => {
              let { onSetSection: t, sections: n } = this.props,
                { shouldPreventNavigation: i, onPreventNavigation: s } =
                  this.state,
                l = () => {
                  var i;
                  null == t || t(e);
                  let { notice: s } =
                      null !== (i = n.find(t => e === t.section)) &&
                      void 0 !== i
                        ? i
                        : {},
                    l = null != s ? s.stores : null;
                  null != l &&
                    l.forEach(e => {
                      !this._subscribedStores.includes(e) &&
                        (e.addChangeListener(this.handleNoticeStoreUpdate),
                        this._subscribedStores.push(e));
                    }),
                    this.setState({ ...T, sidebarOpen: !1 });
                };
              this.validNavigation() &&
                !i &&
                (l(),
                S.default.addBreadcrumb({
                  category: "settings",
                  message: "Set section: ".concat(e),
                })),
                i && null != s && s(l);
            }),
            (this.handleClose = () => {
              if (this.validNavigation()) {
                let { onClose: e } = this.props;
                null == e || e();
              }
            }),
            (this.handleNoticeStoreUpdate = () => {
              !this._unmounted && ((this._intensity = j), this.forceUpdate());
            }),
            (this.renderSettingsSectionTabBarItem = (e, t, n) => {
              let {
                  section: s,
                  label: l = null,
                  ariaLabel: a,
                  onClick: c,
                  color: u,
                  icon: f,
                  className: S,
                  newIndicator: b,
                  newIndicatorDismissibleContentTypes: g,
                  badgeCount: T,
                } = e,
                j = null;
              s === v.UserSettingsSections.ACCOUNT &&
              this.props.isEligibleForPomelo
                ? (j = (0, i.jsx)(m.default, {
                    color: r.default.colors.STATUS_WARNING.css,
                  }))
                : s === v.UserSettingsSections.INVENTORY &&
                    null != this.props.shouldShowSettingBadgeForQuests &&
                    this.props.shouldShowSettingBadgeForQuests.length > 0
                  ? (j = (0, i.jsx)(d.QuestUserSettingsBadge, {
                      questIds: this.props.shouldShowSettingBadgeForQuests,
                    }))
                  : null != e.decoration
                    ? (j = (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: e.decoration,
                      }))
                    : null != n && (null == g ? void 0 : g.includes(n)) && !t
                      ? (j =
                          null != b
                            ? b
                            : (0, i.jsx)(p.TextBadge, {
                                text: x.default.Messages.NEW,
                              }))
                      : null != f
                        ? (j = f)
                        : null != T &&
                          T > 0 &&
                          (j = (0, i.jsx)(p.NumberBadge, { count: T }));
              let C =
                s === v.UserSettingsSections.PREMIUM
                  ? (0, i.jsx)(h.default, {
                      label: l,
                      isSelected: t,
                      decoration: j,
                    })
                  : null == j
                    ? l
                    : (0, i.jsxs)("div", {
                        className: N.tabBarItemContainer,
                        children: [l, j],
                      });
              return (0, i.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: s,
                  onClick: c,
                  className: S,
                  "aria-label": a,
                  children: C,
                },
                s
              );
            });
        }
      }
      var R = P;
    },
    534291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SectionTypes: function () {
            return x;
          },
          ListContentScroller: function () {
            return T;
          },
          DefaultCustomContentScroller: function () {
            return j;
          },
          ContentTypes: function () {
            return s;
          },
          default: function () {
            return I;
          },
        });
      var i,
        s,
        l = n("37983"),
        r = n("884691"),
        o = n("414456"),
        a = n.n(o),
        c = n("146606"),
        u = n("353386"),
        d = n("394846"),
        h = n("266491"),
        m = n("77078"),
        p = n("84339"),
        f = n("965397"),
        S = n("773336"),
        b = n("439932"),
        g = n("304580"),
        v = n("7691");
      let x = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        N = r.createContext(null);
      class T extends r.PureComponent {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, l.jsx)("div", {
            className: v.customContainer,
            children: (0, l.jsx)(m.ListAuto, {
              ...t,
              className: a(v.customScroller, v.contentRegionScroller),
              ref: e,
            }),
          });
        }
        render() {
          return (0, l.jsx)("div", {
            className: v.customColumn,
            children: this.renderContent(),
          });
        }
      }
      function j(e) {
        let { children: t } = e;
        return (0, l.jsx)("div", {
          className: v.customColumn,
          children: (0, l.jsx)("div", {
            className: v.customContainer,
            children: (0, l.jsx)(m.ScrollerAuto, {
              className: a(v.customScroller, v.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (T.defaultProps = { paddingTop: 60, paddingBottom: 60 }),
        ((i = s || (s = {})).MINIMAL = "minimal"),
        (i.CUSTOM = "custom"),
        (i.DEFAULT = "default"),
        (i.WIDE = "wide");
      let C = Object.freeze({
        minimal: "contentColumnMinimal",
        custom: "contentColumnCustom",
        default: "contentColumnDefault",
        wide: "contentColumnWide",
      });
      function E(e) {
        let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
          s = r.useRef(null);
        return null == i
          ? null
          : (0, l.jsx)("div", {
              className: a(v.toolsContainer, {
                [v.mobileToolsContainer]: t,
                [v.mobileSidebarTools]: t,
                [v.closeIconOnly]: !n,
                [v.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, l.jsx)(m.FocusRingScope, {
                containerRef: s,
                children: (0, l.jsx)("div", {
                  className: v.tools,
                  children: (0, l.jsx)(g.default, {
                    className: a({ [v.mobileToolsCloseIcon]: t }),
                    closeAction: i,
                    keybind: "ESC",
                  }),
                }),
              }),
            });
      }
      var I = function (e) {
        let {
            sidebar: t,
            content: n,
            notice: i,
            section: s,
            closeAction: o,
            sidebarTheme: S,
            contentType: g,
            scrollerRef: x,
            mobileSidebarOpen: T,
            toggleSidebar: j,
            hideSidebar: I = !1,
          } = e,
          P = r.useRef(null),
          R = r.useRef(null),
          y = (0, p.default)(s),
          A = (0, c.useTransition)(I, {
            from: { position: "absolute", opacity: 0 },
            enter: { opacity: 1 },
            reverse: I,
            config: c.config.stiff,
          }),
          M = r.useCallback(
            e => {
              (P.current = e), null != x && (x.current = e);
            },
            [x]
          );
        r.useLayoutEffect(() => {
          null != P.current && y !== s && P.current.scrollTo({ to: 0 });
        }, [s, y, P]);
        let O = (0, l.jsx)(E, {
          isMobile: d.isMobile,
          mobileSidebarOpen: T,
          closeAction: o,
        });
        function _() {
          return null == i
            ? null
            : (0, l.jsx)(
                f.default,
                {
                  className: a(v.noticeRegion, {
                    [v.noticeRegionHiddenSidebar]: I,
                  }),
                  children: i,
                },
                s
              );
        }
        return (0, l.jsx)(l.Fragment, {
          children: A((e, i) =>
            (0, l.jsxs)(c.animated.div, {
              style: e,
              className: v.standardSidebarView,
              children: [
                !i &&
                  (null == t
                    ? null
                    : (0, l.jsx)("div", {
                        className: a(v.sidebarRegion, (0, b.getThemeClass)(S), {
                          [v.flexFullWidth]: d.isMobile,
                          [v.hidden]: d.isMobile && !1 === T,
                        }),
                        children: (0, l.jsx)(m.AdvancedScrollerThin, {
                          className: v.sidebarRegionScroller,
                          fade: !0,
                          children: (0, l.jsxs)("nav", {
                            className: a(v.sidebar, {
                              [v.mobileSidebar]: d.isMobile,
                            }),
                            children: [
                              d.isMobile &&
                                (0, l.jsx)("div", {
                                  className: v.mobileSidebarHeader,
                                  children: O,
                                }),
                              t,
                            ],
                          }),
                        }),
                      })),
                (function () {
                  let e = null != j && null != o && T,
                    t =
                      d.isMobile &&
                      (0, l.jsxs)("div", {
                        className: a(v.mobileContentHeader, {
                          [v.hideHamburger]: !e,
                        }),
                        children: [
                          e && (0, l.jsx)(u.HamburgerButton, { onClick: j }),
                          O,
                        ],
                      });
                  if ("custom" === g)
                    return (0, l.jsxs)(h.TransitionGroup, {
                      component: "div",
                      className: v.contentRegion,
                      children: [t, n, !d.isMobile && O, _()],
                    });
                  let i = C[null != g ? g : "default"];
                  return (0, l.jsxs)(h.TransitionGroup, {
                    component: "div",
                    className: a(v.contentRegion, {
                      [v.hidden]: d.isMobile && !0 === T,
                    }),
                    children: [
                      (0, l.jsxs)("div", {
                        className: v.contentTransitionWrap,
                        children: [
                          t,
                          (0, l.jsxs)(m.AdvancedScrollerAuto, {
                            className: a(
                              v.contentRegionScroller,
                              I
                                ? v.contentRegionHiddenSidebar
                                : v.contentRegionShownSidebar
                            ),
                            ref: M,
                            children: [
                              (0, l.jsx)(N.Provider, {
                                value: P.current,
                                children: (0, l.jsx)(m.TabBar.Panel, {
                                  id: s,
                                  className: a(v.contentColumn, v[i], {
                                    [v.mobileContent]: d.isMobile,
                                  }),
                                  ref: R,
                                  style: d.isMobile
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: I
                                    ? n
                                    : (0, l.jsx)(m.FocusRingScope, {
                                        containerRef: R,
                                        children: n,
                                      }),
                                }),
                              }),
                              !d.isMobile && O,
                            ],
                          }),
                        ],
                      }),
                      _(),
                    ],
                  });
                })(),
              ],
            })
          ),
        });
      };
    },
    674574: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QuestUserSettingsBadge: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("956089"),
        l = n("588025"),
        r = n("534801"),
        o = n("782340");
      function a(e) {
        return (0, i.jsx)(r.QuestContentImpressionTracker, {
          questId: e.questIds,
          questContent: l.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE,
          children: e =>
            (0, i.jsx)("span", {
              ref: e,
              children: (0, i.jsx)(s.TextBadge, {
                text: o.default.Messages.NEW,
              }),
            }),
        });
      }
    },
    304386: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        r = n("446674"),
        o = n("154889"),
        a = n("917247"),
        c = n("801388"),
        u = n("770469"),
        d = n("641078"),
        h = n("773367"),
        m = n("160299"),
        p = n("324929"),
        f = n("189405");
      function S(e) {
        let t,
          { decoration: n, label: s, isSelected: S } = e,
          b = (0, a.usePremiumTrialOffer)(),
          g = (0, o.usePremiumDiscountOffer)(),
          v = (0, d.useIsEligibleForBogoPromotion)(),
          x = (0, r.useStateFromStores)(
            [m.default],
            () => m.default.isLocalizedPromoEnabled
          ),
          N = x && null == b && null == n;
        return (
          (t = v
            ? (0, i.jsx)(c.default, {})
            : null != g
              ? (0, i.jsx)(h.PremiumDiscountOfferTabBadge, {
                  isTabSelected: S,
                  userDiscount: g,
                  includesAmountOff: !1,
                })
              : null != b
                ? (0, i.jsx)(h.PremiumTrialOfferTabBadge, {
                    isTabSelected: S,
                    trialOffer: b,
                  })
                : null != n
                  ? n
                  : N
                    ? (0, i.jsx)(u.LocalizedPricingBadgeIcon, {
                        entryPoint: u.BadgeEntryPoint.SettingsMenu,
                      })
                    : (0, i.jsx)(p.default, { isSelected: S })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: l(f.premiumLabel, { [f.selected]: (S || N) && !v }),
                children: [s, t],
              }),
              (0, i.jsx)("div", {
                className: l(f.background, {
                  [f.auPromo]: N && !S,
                  [f.auPromoSelected]: N && S,
                  [f.selectedBackground]: !N && !v && S,
                }),
              }),
            ],
          })
        );
      }
    },
    965397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        l = n("414456"),
        r = n.n(l),
        o = n("458960"),
        a = n("77078"),
        c = n("899284");
      let u = { friction: 7, tension: 60 };
      class d extends s.Component {
        componentWillAppear(e) {
          this.animateTo(1).start(e);
        }
        componentWillEnter(e) {
          this.animateTo(1).start(e);
        }
        componentWillLeave(e) {
          let { reducedMotion: t } = this.context;
          t.enabled
            ? this.animateTo(0).start(e)
            : o.default
                .stagger(250, [this.animateTo(1.3), this.animateTo(0)])
                .start(e);
        }
        animateTo(e) {
          return o.default.spring(this.animation, { ...u, toValue: e });
        }
        getAnimatedStyle() {
          let { reducedMotion: e } = this.context;
          return o.default.accelerate({
            opacity: this.animation,
            transform: e.enabled
              ? void 0
              : [
                  {
                    translateY: this.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["150%", "0%"],
                    }),
                  },
                ],
          });
        }
        render() {
          let { className: e, children: t } = this.props;
          return (0, i.jsx)(o.default.div, {
            className: r(e, c.slider),
            style: this.getAnimatedStyle(),
            children: t,
          });
        }
        constructor(...e) {
          super(...e), (this.animation = new o.default.Value(0));
        }
      }
      d.contextType = a.AccessibilityPreferencesContext;
      var h = d;
    },
  },
]);
//# sourceMappingURL=faf74021ea1a1efc3820.js.map
