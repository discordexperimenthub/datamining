(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94216"],
  {
    310013: function (e, t, l) {
      "use strict";
      var a = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        s = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          arguments: !0,
          arity: !0,
        },
        n = "function" == typeof Object.getOwnPropertySymbols;
      e.exports = function (e, t, l) {
        if ("string" != typeof t) {
          var i = Object.getOwnPropertyNames(t);
          n && (i = i.concat(Object.getOwnPropertySymbols(t)));
          for (var r = 0; r < i.length; ++r)
            if (!a[i[r]] && !s[i[r]] && (!l || !l[i[r]]))
              try {
                e[i[r]] = t[i[r]];
              } catch (e) {}
        }
        return e;
      };
    },
    229806: function (e, t, l) {
      "use strict";
      e.exports = l.p + "6cc337af6e577789bc25.svg";
    },
    654125: function (e, t, l) {
      "use strict";
      e.exports = l.p + "b45b4145db9ac11e2381.svg";
    },
    108647: function (e, t, l) {
      "use strict";
      e.exports = l.p + "ca2118f52077f527edd7.svg";
    },
    943005: function (e, t, l) {
      "use strict";
      e.exports = l.p + "b02c644f3c87d8b5aea8.svg";
    },
    872957: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          fetchBuildSize: function () {
            return r;
          },
        });
      var a = l("872717"),
        s = l("913144"),
        n = l("677225"),
        i = l("49111");
      async function r(e, t, l, r) {
        if (n.default.needsToFetchBuildSize(l)) {
          s.default.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: l,
          });
          try {
            let n = await a.default.post({
              url: i.Endpoints.APPLICATION_BUILD_SIZE(e, t, l),
              body: { manifest_ids: r },
              oldFormErrors: !0,
            });
            s.default.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
              buildId: l,
              sizeKB: n.body.size_kb,
            });
          } catch (e) {
            s.default.dispatch({
              type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
              buildId: l,
            });
          }
        }
      }
    },
    885508: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          acceptPurchaseTerms: function () {
            return s;
          },
          acceptEULA: function () {
            return n;
          },
        });
      var a = l("913144");
      function s() {
        a.default.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" });
      }
      function n(e) {
        a.default.dispatch({
          type: "APPLICATION_STORE_ACCEPT_EULA",
          eulaId: e,
        });
      }
    },
    641608: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          addInstallLocation: function () {
            return n;
          },
          removeInstallLocation: function () {
            return i;
          },
          updateInstallLocation: function () {
            return r;
          },
          fetchMetadata: function () {
            return c;
          },
        }),
        l("222007");
      var a = l("913144"),
        s = l("152723");
      function n(e) {
        s.default.queryDirectory(e, (t, l) => {
          null == t &&
            null != l &&
            a.default.dispatch({
              type: "INSTALLATION_LOCATION_ADD",
              path: e,
              metadata: l,
            });
        });
      }
      function i(e) {
        a.default.dispatch({ type: "INSTALLATION_LOCATION_REMOVE", path: e });
      }
      function r(e, t) {
        let { label: l, isDefault: s } = t;
        a.default.dispatch({
          type: "INSTALLATION_LOCATION_UPDATE",
          path: e,
          label: l,
          isDefault: s,
        });
      }
      function c(e) {
        let t = {},
          l = 0;
        for (let n of e)
          null != n &&
            "string" == typeof n &&
            s.default.queryDirectory(n, (s, i) => {
              ++l,
                null == s && null != i && (t[n] = i),
                l === e.length &&
                  a.default.dispatch({
                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                    metadataPayload: t,
                  });
            });
      }
    },
    545876: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        }),
        l("70102"),
        l("222007");
      var a = l("37983"),
        s = l("884691"),
        n = l("414456"),
        i = l.n(n),
        r = l("627445"),
        c = l.n(r),
        u = l("446674"),
        o = l("77078"),
        d = l("971427"),
        h = l("701909"),
        f = l("719923"),
        p = l("49111"),
        I = l("646718"),
        A = l("782340"),
        L = l("180978");
      class m extends s.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state)
          );
        }
        componentDidUpdate(e, t) {
          let l = this.hasAcceptedNeccessaryTerms(e, t),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          a !== l && this.props.onChange(a);
        }
        hasAcceptedNeccessaryTerms(e, t) {
          return (
            (null == e.eulaId || t.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === I.SubscriptionIntervalTypes.YEAR)
            return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === I.SubscriptionIntervalTypes.MONTH)
            return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: t,
              hasPreviouslyAcceptedEULA: s,
              forceShow: n,
              disabled: r,
              className: u,
              checkboxClassname: d,
              checkboxLabelClassname: I,
              finePrint: m,
              showPricingLink: g,
              showWithdrawalWaiver: S,
              isTrial: T,
              isDiscount: E,
              subscriptionPlan: N,
              finePrintClassname: v,
            } = this.props,
            { hasAcceptedEULA: M, hasAcceptedWithdrawalWaiver: C } = this.state;
          return (c(
            !T || null != N,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"
          ),
          n || (null != e && !s) || S)
            ? (0, a.jsxs)("div", {
                className: u,
                children: [
                  S &&
                    (0, a.jsx)(o.FormTitle, {
                      className: L.formTitle,
                      children:
                        A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (n || !s)
                    ? (0, a.jsx)(o.Checkbox, {
                        type: o.Checkbox.Types.INVERTED,
                        value: M,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: r,
                        className: L.checkbox,
                        children: (0, a.jsx)("div", {
                          className: L.checkboxLabel,
                          children:
                            A.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format(
                              {
                                applicationName: t,
                                onClick: t => {
                                  (0, o.openModalLazy)(async () => {
                                    let { default: t } = await l
                                      .el("523360")
                                      .then(l.bind(l, "523360"));
                                    return l =>
                                      (0, a.jsx)(t, { eulaId: e, ...l });
                                  }),
                                    t.preventDefault();
                                },
                              }
                            ),
                        }),
                      })
                    : null,
                  null == m
                    ? null
                    : (0, a.jsx)("div", {
                        className: i(L.finePrint, v),
                        children: m,
                      }),
                  S
                    ? (0, a.jsxs)("div", {
                        className: u,
                        children: [
                          (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: C,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: r,
                            className: i(L.checkbox, d),
                            children: (0, a.jsx)("div", {
                              className: i(L.checkboxLabel, I),
                              children:
                                A.default.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: L.finePrint,
                            children:
                              A.default.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  g &&
                    (0, a.jsxs)("div", {
                      className: L.finePrint,
                      children: [
                        "*",
                        A.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: h.default.getArticleURL(
                            p.HelpdeskArticles.LOCALIZED_PRICING
                          ),
                        }),
                      ],
                    }),
                  T &&
                    null != N &&
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        A.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                          buttonText: (0, f.getBillingReviewSubheader)(null, N),
                          interval: this.formatInterval(
                            null == N ? void 0 : N.interval
                          ),
                          cancelSubscriptionArticle: h.default.getArticleURL(
                            p.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: h.default.getArticleURL(
                            p.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                  E &&
                    null != N &&
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        A.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                          buttonText: (0, f.getBillingReviewSubheader)(null, N),
                          interval: this.formatInterval(
                            null == N ? void 0 : N.interval
                          ),
                          cancelSubscriptionArticle: h.default.getArticleURL(
                            p.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: h.default.getArticleURL(
                            p.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            (this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
              this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            (this.handleToggleEULAAcceptance = (e, t) => {
              this.setState({ hasAcceptedEULA: t });
            });
        }
      }
      var g = u.default.connectStores([d.default], e => {
        let { eulaId: t } = e;
        return {
          hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t),
        };
      })(m);
    },
    727441: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        }),
        l("222007"),
        l("70102");
      var a = l("37983"),
        s = l("884691"),
        n = l("446674"),
        i = l("77078"),
        r = l("913144"),
        c = l("71313"),
        u = l("872957"),
        o = l("885508"),
        d = l("190017"),
        h = l("545876"),
        f = l("299285"),
        p = l("393414"),
        I = l("677225"),
        A = l("971427"),
        L = l("98328"),
        m = l("145131"),
        g = l("953109"),
        S = l("993105"),
        T = l("391820"),
        E = l("49111"),
        N = l("782340"),
        v = l("842277");
      class M extends s.Component {
        fetchInstallSize() {
          let {
            applicationId: e,
            branchId: t,
            buildId: l,
            manifestIds: a,
            buildSizeKB: s,
          } = this.props;
          null != l &&
            null != a &&
            null == s &&
            r.default.wait(() => {
              (0, u.fetchBuildSize)(e, t, l, a);
            });
        }
        componentDidMount() {
          let {
            applicationId: e,
            branchId: t,
            buildId: l,
            manifestIds: a,
          } = this.props;
          null == l || null == a
            ? (0, c.fetchLiveBuild)(e, t)
            : this.fetchInstallSize();
        }
        componentDidUpdate(e) {
          (this.props.buildId !== e.buildId ||
            this.props.manifestIds !== e.manifestIds) &&
            this.fetchInstallSize();
        }
        componentWillUnmount() {
          this.isUnmounted = !0;
        }
        renderButton() {
          let { buildId: e } = this.props,
            { hasError: t, hasAcceptedNeccessaryTerms: l } = this.state;
          return (0, a.jsx)(i.Button, {
            disabled: t || null == e || !l,
            color: i.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: N.default.Messages.GAME_ACTION_BUTTON_INSTALL,
          });
        }
        render() {
          let {
              application: e,
              buildSizeKB: t,
              transitionState: l,
            } = this.props,
            { selectedInstallationPath: s, isInstalling: n } = this.state,
            r = null != e && e.getSplashURL(440);
          return (0, a.jsxs)(i.ModalRoot, {
            transitionState: l,
            size: i.ModalSize.SMALL,
            "aria-label":
              N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
            children: [
              null != r
                ? (0, a.jsx)("div", {
                    className: v.splash,
                    style: { backgroundImage: "url(".concat(r, ")") },
                  })
                : null,
              (0, a.jsxs)(i.ModalHeader, {
                justify: m.default.Justify.BETWEEN,
                children: [
                  (0, a.jsx)(m.default.Child, {
                    grow: 1,
                    children: (0, a.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children:
                        N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                    }),
                  }),
                  (0, a.jsx)(m.default.Child, {
                    grow: 0,
                    children: (0, a.jsx)(i.ModalCloseButton, {
                      onClick: this.close,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                children: [
                  (0, a.jsxs)(m.default, {
                    align: m.default.Align.CENTER,
                    children: [
                      (0, a.jsx)(g.default, {
                        game: e,
                        size: g.default.Sizes.MEDIUM,
                        className: v.gameIcon,
                      }),
                      (0, a.jsx)("div", {
                        className: v.gameName,
                        children: null != e && e.name,
                      }),
                      null != t
                        ? (0, a.jsx)("div", {
                            className: v.installSize,
                            children: (0, S.formatSize)(t, {
                              useKibibytes: !0,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)("div", { className: v.divider }),
                  (0, a.jsx)(T.default, {
                    autoFocus: !0,
                    className: v.selector,
                    value: s,
                    requiredDiskKB: t,
                    onChange: this.handleChangePath,
                  }),
                  (0, a.jsx)(h.default, {
                    eulaId: e.eulaId,
                    applicationName: e.name,
                    disabled: n,
                    onChange: this.handlePurchaseTermsChange,
                    className: v.terms,
                  }),
                ],
              }),
              (0, a.jsx)(i.ModalFooter, { children: this.renderButton() }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              selectedInstallationPath: this.props.defaultInstallationPath,
              hasError: !1,
              isInstalling: !1,
              hasAcceptedNeccessaryTerms: !1,
            }),
            (this.isUnmounted = !1),
            (this.handleChangePath = (e, t) => {
              this.setState({ selectedInstallationPath: e, hasError: t });
            }),
            (this.install = (e, t) => {
              let {
                application: l,
                branchId: a,
                analyticsLocation: s,
              } = this.props;
              if (null == l) return null;
              (0, d.installApplication)({
                application: l,
                branchId: a,
                buildId: e,
                manifestIds: t,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: s,
              }),
                (0, p.transitionTo)(E.Routes.APPLICATION_LIBRARY),
                this.close();
            }),
            (this.handleInstall = () => {
              let {
                application: e,
                buildId: t,
                manifestIds: l,
                hasPreviouslyAcceptedStoreTerms: a,
              } = this.props;
              if (null != t && null != l)
                !a && (0, o.acceptPurchaseTerms)(),
                  null != e && null != e.eulaId && (0, o.acceptEULA)(e.eulaId),
                  this.install(t, l);
              else
                throw Error(
                  "Unexpected missing build info for non-premium product"
                );
            }),
            (this.handlePurchaseTermsChange = e => {
              this.setState({ hasAcceptedNeccessaryTerms: e });
            }),
            (this.close = () => {
              this.props.onClose();
            });
        }
      }
      var C = n.default.connectStores(
        [I.default, L.default, A.default, f.default],
        e => {
          let { applicationId: t, branchId: l } = e,
            a = I.default.getTargetBuildId(t, l);
          return {
            application: f.default.getApplication(t),
            defaultInstallationPath: L.default.defaultInstallationPath,
            buildId: a,
            manifestIds: I.default.getTargetManifests(t, l),
            buildSizeKB: null != a ? I.default.getBuildSize(a) : null,
            hasPreviouslyAcceptedStoreTerms: A.default.hasAcceptedStoreTerms,
          };
        }
      )(M);
    },
    391820: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return I;
          },
        }),
        l("424973"),
        l("222007");
      var a = l("37983"),
        s = l("884691"),
        n = l("446674"),
        i = l("77078"),
        r = l("641608"),
        c = l("98328"),
        u = l("993105"),
        o = l("50885"),
        d = l("782340"),
        h = l("370121");
      let f = "select";
      class p extends s.PureComponent {
        fetchAllDirectoryMetadata() {
          let { installationPaths: e } = this.props,
            t = e.map(e => {
              let { path: t } = e;
              return t;
            }),
            { newInstallationPath: l } = this.state;
          for (let e of (null != l && t.push(l),
          (t = t.filter(e => !this.fetchedMetadataPaths.has(e))),
          (0, r.fetchMetadata)(t),
          t))
            this.fetchedMetadataPaths.add(e);
        }
        componentDidMount() {
          this.fetchAllDirectoryMetadata();
        }
        componentDidUpdate(e) {
          this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== e.requiredDiskKB ||
              this.props.installationPathsMetadata !==
                e.installationPathsMetadata) &&
              this.sendChange(this.props.value);
        }
        getOptions() {
          let { installationPaths: e } = this.props,
            { newInstallationPath: t } = this.state,
            l = e.map(e => {
              let { path: t, label: l } = e;
              return { value: t, label: this.renderLabel(t, l) };
            });
          return (
            null != t && l.push({ value: t, label: this.renderLabel(t) }),
            l.push({
              value: f,
              label:
                d.default.Messages
                  .APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY,
            }),
            l
          );
        }
        hasEnoughDiskSpace(e) {
          let { requiredDiskKB: t, installationPathsMetadata: l } = this.props,
            a = null != l[e] ? l[e].availableKB : null;
          return null == t || null == a || t < a;
        }
        sendChange(e) {
          let { installationPathsMetadata: t, onChange: l } = this.props,
            a = null != t[e] && !1 === t[e].hasPermission;
          l(e, a || !this.hasEnoughDiskSpace(e));
        }
        renderError() {
          let { value: e, installationPathsMetadata: t } = this.props,
            l = null != t[e] && !1 === t[e].hasPermission;
          return l
            ? (0, a.jsx)("div", {
                className: h.error,
                children:
                  d.default.Messages
                    .APPLICATION_INSTALLATION_MODAL_NO_PERMISSION,
              })
            : this.hasEnoughDiskSpace(e)
              ? null
              : (0, a.jsx)("div", {
                  className: h.error,
                  children:
                    d.default.Messages
                      .APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE,
                });
        }
        renderLabel(e, t) {
          let { installationPathsMetadata: l } = this.props,
            a = null != t ? t : e;
          return null != l[e] && null != l[e].availableKB
            ? d.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format(
                {
                  path: a,
                  size: (0, u.formatSize)(l[e].availableKB, {
                    useKibibytes: !0,
                  }),
                }
              )
            : a;
        }
        render() {
          let { value: e, className: t, autoFocus: l } = this.props;
          return (0, a.jsxs)("div", {
            className: t,
            children: [
              (0, a.jsx)(i.FormTitle, {
                tag: "h5",
                children:
                  d.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION,
              }),
              (0, a.jsx)(i.SingleSelect, {
                autoFocus: l,
                options: this.getOptions(),
                value: e,
                onChange: this.handleChange,
              }),
              this.renderError(),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { newInstallationPath: null }),
            (this.fetchedMetadataPaths = new Set()),
            (this.handleChange = e => {
              e === f
                ? o.default.showOpenDialog(["openDirectory"]).then(e => {
                    if (null != e && e.length > 0) {
                      let t = e[0];
                      this.setState({
                        newInstallationPath:
                          null !=
                          this.props.installationPaths.find(e => {
                            let { path: l } = e;
                            return l === t;
                          })
                            ? null
                            : t,
                      }),
                        this.sendChange(t);
                    }
                  })
                : this.sendChange(e);
            });
        }
      }
      var I = n.default.connectStores([c.default], () => ({
        installationPaths: c.default.installationPaths,
        installationPathsMetadata: c.default.installationPathsMetadata,
      }))(p);
    },
    80300: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          backgroundImagePreloader: function () {
            return o;
          },
        }),
        l("424973");
      var a = l("37983"),
        s = l("884691"),
        n = l("310013"),
        i = l.n(n),
        r = l("407063");
      let c = /url\(['"](.*)['"]\)/,
        u = e => {
          if (null == e || "" === e || "none" === e) return null;
          let t = e.match(c);
          return null != t ? t[1] : e;
        };
      function o(e) {
        class t extends s.Component {
          componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: l, loaded: a } = this.state,
              { style: s } = this.props,
              n = null != s ? u(s.backgroundImage) : null;
            null == n && n !== l
              ? this.setState({ loaded: !0, cached: n })
              : this.cachedURLs.indexOf(n) >= 0
                ? this.setState({ loaded: !0, cached: n })
                : null != n &&
                  n !== l &&
                  !0 === a &&
                  this.setState({ loaded: !1 }, () => this.preloadURL(n));
          }
          preloadURL(e) {
            this.canceller && this.canceller(),
              (this.canceller = (0, r.loadImage)(e, t => {
                this.canceller && (this.canceller = null),
                  !t &&
                    (this.cachedURLs.push(e),
                    this.setState({ cached: e, loaded: !0 }));
                let { onBackgroundImageLoad: l } = this.props;
                l && l(t, e);
              }));
          }
          componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
          }
          render() {
            let { style: t, onBackgroundImageLoad: l, ...s } = this.props,
              { loaded: n, cached: i } = this.state;
            if (!n && null != t) {
              var r;
              t = {
                ...t,
                backgroundImage:
                  null == (r = i) || "" === r || "none" === r
                    ? "none"
                    : "url(".concat(r, ")"),
              };
            }
            return (0, a.jsx)(e, { style: t, ...s });
          }
          constructor(e) {
            super(e), (this.cachedURLs = []), (this.canceller = null);
            let { style: t } = e,
              l = null != t ? u(t.backgroundImage) : null;
            (this.cachedURLs = [l]), (this.state = { cached: l, loaded: !0 });
          }
        }
        return i(t, e), t;
      }
    },
    841248: function (e, t, l) {
      "use strict";
      l.r(t);
      var a = l("9330");
      l.es(a, t);
    },
    227422: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return n;
          },
        }),
        l("222007");
      var a = l("884691"),
        s = l("760850");
      function n(e, t) {
        let [l, n] = a.useState();
        return (
          a.useEffect(() => {
            if (null == e || null != t) {
              n(void 0);
              return;
            }
            (0, s.default)().then(t => {
              null != t &&
                t.identifyGame(e, (e, t) => {
                  0 === e &&
                    null != t.icon &&
                    "" !== t.icon &&
                    null != t.name &&
                    "" !== t.name &&
                    n("data:image/png;base64,".concat(t.icon));
                });
            });
          }, [e, t]),
          null != t ? t : l
        );
      }
    },
    931138: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var a = l("37983"),
        s = l("884691"),
        n = l("414456"),
        i = l.n(n),
        r = l("77078"),
        c = l("760607"),
        u = l("684133");
      function o(e) {
        let {
            children: t,
            size: l = 16,
            className: n,
            flowerStarClassName: o,
            ...d
          } = e,
          h = s.Children.only(t),
          f = (0, r.useRedesignIconContext)().enabled;
        return (0, a.jsxs)("div", {
          className: i(u.flowerStarContainer, n),
          style: { width: l, height: l },
          children: [
            (0, a.jsx)(c.default, { ...d, className: i(o, u.flowerStar) }),
            (0, a.jsx)("div", {
              className: i(u.childContainer, {
                [u.redesignIconChildContainer]: f,
              }),
              children: h,
            }),
          ],
        });
      }
    },
    953109: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var a = l("37983");
      l("884691");
      var s = l("414456"),
        n = l.n(s),
        i = l("227422"),
        r = l("476263"),
        c = l("547620"),
        u = l("646718"),
        o = l("877670");
      let d = {
          XXSMALL: o.xxsmall,
          XSMALL: o.xsmall,
          SMALL: o.small,
          MEDIUM: o.medium,
          LARGE: o.large,
        },
        h = e => {
          let t,
            {
              game: s,
              guild: h,
              skuId: f,
              pid: p,
              className: I,
              guildClassName: A,
              size: L = d.MEDIUM,
              ...m
            } = e;
          if (
            (null != f &&
              (t = (function (e) {
                if (null == e) return null;
                switch (e) {
                  case u.PremiumSubscriptionSKUs.GUILD:
                    return l("229806");
                  case u.PremiumSubscriptionSKUs.TIER_0:
                    return l("654125");
                  case u.PremiumSubscriptionSKUs.TIER_1:
                    return l("108647");
                  case u.PremiumSubscriptionSKUs.TIER_2:
                  case u.PremiumSubscriptionSKUs.LEGACY:
                    return l("943005");
                  default:
                    return null;
                }
              })(f)),
            null != s &&
              null == t &&
              (t = s.getIconURL(
                (function (e) {
                  switch (e) {
                    case d.XXSMALL:
                      return 16;
                    case d.XSMALL:
                      return 24;
                    case d.SMALL:
                      return 30;
                    case d.MEDIUM:
                      return 40;
                    case d.LARGE:
                      return 60;
                    default:
                      return 80;
                  }
                })(L)
              )),
            null == (t = (0, i.default)(p, t)) && null != h)
          ) {
            let e = (function (e) {
              switch (e) {
                case d.XSMALL:
                  return r.default.Sizes.SMALLER;
                case d.SMALL:
                  return r.default.Sizes.SMALL;
                case d.LARGE:
                  return r.default.Sizes.LARGE;
                default:
                case d.MEDIUM:
                  return r.default.Sizes.MEDIUM;
              }
            })(L);
            return (0, a.jsx)(r.default, {
              className: n(o.gameIcon, A, I),
              guild: h,
              size: e,
            });
          }
          return null == t
            ? (0, a.jsx)(c.default, { className: n(o.gameIcon, L, I) })
            : (0, a.jsx)("div", {
                ...m,
                className: n(o.gameIcon, L, I),
                style: { backgroundImage: "url('".concat(t, "')") },
              });
        };
      h.Sizes = d;
      var f = h;
    },
    476263: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        });
      var a = l("37983"),
        s = l("884691"),
        n = l("414456"),
        i = l.n(n),
        r = l("90915"),
        c = l("446674"),
        u = l("669491"),
        o = l("77078"),
        d = l("80300"),
        h = l("471671"),
        f = l("103603"),
        p = l("474293"),
        I = l("580357"),
        A = l("356659");
      let L = {
          SMOL: "Smol",
          MINI: "Mini",
          SMALLER: "Smaller",
          SMALL: "Small",
          MEDIUM: "Medium",
          LARGE: "Large",
          LARGER: "Larger",
          XLARGE: "XLarge",
        },
        m = {
          [L.SMOL]: 16,
          [L.MINI]: 20,
          [L.SMALLER]: 24,
          [L.SMALL]: 30,
          [L.MEDIUM]: 40,
          [L.LARGE]: 50,
          [L.LARGER]: 64,
          [L.XLARGE]: 100,
        },
        g = {
          [L.SMOL]: [10, 10, 8, 6, 6, 4],
          [L.MINI]: [12, 12, 10, 10, 8, 6, 4],
          [L.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
          [L.SMALL]: [14, 14, 12, 12, 10, 8, 6],
          [L.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
          [L.LARGE]: [18, 18, 16, 16, 14, 12, 10],
          [L.LARGER]: [19, 19, 17, 17, 15, 13, 11],
          [L.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
        };
      class S extends s.PureComponent {
        renderAcronym() {
          let { guild: e, iconSrc: t } = this.props;
          return null != e.icon || null != t
            ? null
            : (0, a.jsx)("div", { className: A.acronym, children: e.acronym });
        }
        renderBadge() {
          let { showBadge: e, guild: t, badgeStrokeColor: l } = this.props;
          return e && null != t.hasFeature
            ? (0, a.jsx)(I.default, {
                className: A.guildIconBadge,
                guild: t,
                badgeStrokeColor: l,
              })
            : null;
        }
        renderIcon() {
          var e, t;
          let {
              guild: l,
              className: s,
              showBadge: n,
              active: r,
              size: c,
              style: u = {},
              textScale: d,
              showTooltip: h,
              tooltipPosition: f,
              onClick: I,
              to: L,
              badgeStrokeColor: m,
              animate: S,
              tabIndex: T,
              iconSrc: E,
              "aria-hidden": N,
              ...v
            } = this.props,
            M = g[c],
            C = null != I ? o.Clickable : "div";
          return (0, a.jsxs)(C, {
            className: i(A.icon, s, (0, p.getClass)(A, "iconSize", c), {
              [null !== (e = (0, p.getClass)(A, "iconActive", c)) &&
              void 0 !== e
                ? e
                : ""]: r,
              [A.iconInactive]: !r,
              [A.noIcon]: null == l.icon,
            }),
            "aria-hidden": N,
            style:
              null == l.icon
                ? {
                    fontSize:
                      (null !== (t = M[l.acronym.length]) && void 0 !== t
                        ? t
                        : M[M.length - 1]) * d,
                    ...u,
                  }
                : u,
            onClick: null != L || null == I ? void 0 : I,
            tabIndex: T,
            ...v,
            children: [this.renderAcronym(), this.renderBadge()],
          });
        }
        renderTooltip() {
          let { guild: e, showTooltip: t, tooltipPosition: l } = this.props;
          return t
            ? (0, a.jsx)(o.Tooltip, {
                text: e.name,
                position: l,
                "aria-label": !1,
                children: e =>
                  s.cloneElement(s.Children.only(this.renderIcon()), { ...e }),
              })
            : this.renderIcon();
        }
        render() {
          let {
            to: e,
            guild: t,
            source: l,
            tabIndex: s,
            "aria-hidden": n,
          } = this.props;
          return null != e
            ? (0, a.jsx)(r.Link, {
                "aria-hidden": n,
                to: {
                  pathname: e,
                  state: null != l ? { analyticsSource: l } : null,
                },
                "aria-label": t.toString(),
                tabIndex: s,
                children: this.renderTooltip(),
              })
            : this.renderTooltip();
        }
      }
      let T = c.default.connectStores([h.default], e => {
        let { guild: t, animate: l, iconSrc: a, style: s, size: n } = e;
        return {
          style: {
            ...s,
            backgroundImage: (0, f.makeCssUrlString)(
              null != a ? a : t.getIconURL(m[n], l && h.default.isFocused())
            ),
          },
        };
      })((0, d.backgroundImagePreloader)(e => (0, a.jsx)(S, { ...e })));
      class E extends s.PureComponent {
        render() {
          return (0, a.jsx)(T, { ...this.props });
        }
      }
      (E.Sizes = L),
        (E.defaultProps = {
          size: L.LARGE,
          textScale: 1,
          showBadge: !1,
          showTooltip: !1,
          active: !1,
          tooltipPosition: "top",
          badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
          animate: !1,
        });
      var N = E;
    },
    547620: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var a = l("37983");
      l("884691");
      var s = l("469563"),
        n = l("841248"),
        i = l("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: s = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 40 40",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: n,
                    fill: s,
                    fillOpacity: ".8",
                    d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z",
                  }),
                  (0, a.jsx)("rect", {
                    className: n,
                    width: "38",
                    height: "38",
                    x: "1",
                    y: "1",
                    stroke: s,
                    strokeOpacity: ".4",
                    strokeWidth: "2",
                    rx: "5",
                  }),
                  (0, a.jsx)("circle", {
                    className: n,
                    cx: "7",
                    cy: "7",
                    r: "2",
                    fill: s,
                    fillOpacity: ".4",
                  }),
                  (0, a.jsx)("circle", {
                    className: n,
                    cx: "7",
                    cy: "33",
                    r: "2",
                    fill: s,
                    fillOpacity: ".4",
                  }),
                  (0, a.jsx)("circle", {
                    className: n,
                    cx: "33",
                    cy: "7",
                    r: "2",
                    fill: s,
                    fillOpacity: ".4",
                  }),
                  (0, a.jsx)("circle", {
                    className: n,
                    cx: "33",
                    cy: "33",
                    r: "2",
                    fill: s,
                    fillOpacity: ".4",
                  }),
                ],
              }),
            });
          },
          n.UnknownGameIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return n;
          },
        });
      var a = l("37983");
      l("884691");
      var s = l("75196"),
        n = function (e) {
          let {
            width: t = 16,
            height: l = 16,
            color: n = "currentColor",
            foreground: i,
            ...r
          } = e;
          return (0, a.jsx)("svg", {
            ...(0, s.default)(r),
            width: t,
            height: l,
            viewBox: "0 0 16 15.2",
            children: (0, a.jsx)("path", {
              className: i,
              fill: n,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    474293: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getClass: function () {
            return s;
          },
        }),
        l("808653");
      var a = l("159885");
      function s(e, t) {
        for (
          var l = arguments.length, s = Array(l > 2 ? l - 2 : 0), n = 2;
          n < l;
          n++
        )
          s[n - 2] = arguments[n];
        let i = s.reduce((e, t) => e + (0, a.upperCaseFirstChar)(t), ""),
          r = "".concat(t).concat(i),
          c = e[r];
        if (null != c) return c;
      }
    },
    9330: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          UnknownGameIcon: function () {
            return i;
          },
        });
      var a = l("37983");
      l("884691");
      var s = l("669491"),
        n = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=cf38b3dec1892bd04512.js.map
