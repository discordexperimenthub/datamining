(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54361"],
  {
    417125: function (e, t, s) {
      var n = {
        "./bg.png": "585337",
        "./cs.png": "83076",
        "./da.png": "228351",
        "./de.png": "96895",
        "./el.png": "954635",
        "./en-GB.png": "883638",
        "./en-US.png": "969851",
        "./es-419.png": "359765",
        "./es-ES.png": "98918",
        "./fi.png": "110775",
        "./fr.png": "128393",
        "./hi.png": "79794",
        "./hr.png": "988195",
        "./hu.png": "366988",
        "./it.png": "583917",
        "./ja.png": "895466",
        "./ko.png": "879503",
        "./lt.png": "370757",
        "./nl.png": "461053",
        "./no.png": "871682",
        "./pl.png": "140693",
        "./pt-BR.png": "260276",
        "./ro.png": "929905",
        "./ru.png": "830793",
        "./sv-SE.png": "841801",
        "./th.png": "862866",
        "./tr.png": "567215",
        "./uk.png": "142242",
        "./vi.png": "610487",
        "./zh-CN.png": "986521",
        "./zh-TW.png": "204827",
      };
      function l(e) {
        return s(a(e));
      }
      function a(e) {
        if (!s.o(n, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (l.id = '"417125"'),
        (l.keys = function () {
          return Object.keys(n);
        }),
        (l.resolve = a),
        (e.exports = l);
    },
    188890: function (e, t, s) {
      "use strict";
      e.exports = s.p + "46a1c09891faef334aa3.svg";
    },
    130238: function (e, t, s) {
      "use strict";
      e.exports = s.p + "2d3c64e8280123026530.svg";
    },
    879839: function (e, t, s) {
      "use strict";
      e.exports = s.p + "281d86827cce2adcda14.svg";
    },
    61995: function (e, t, s) {
      "use strict";
      e.exports = s.p + "89274721372b43f33780.svg";
    },
    113140: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b999acf8adec647ff6a8.svg";
    },
    897234: function (e, t, s) {
      "use strict";
      e.exports = s.p + "66f49cc70d29fb6f1e7d.svg";
    },
    523568: function (e, t, s) {
      "use strict";
      e.exports = s.p + "3b923dfa614118dc866e.svg";
    },
    190602: function (e, t, s) {
      "use strict";
      e.exports = s.p + "59a1c8c64796c0107f29.svg";
    },
    972119: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("108402"),
        i = s("601680"),
        r = s("831137"),
        o = s("446674"),
        c = s("452804"),
        u = s("915639"),
        d = s("599110"),
        p = s("49111"),
        h = s("782340"),
        N = s("504659");
      class g extends l.Component {
        shouldScrollToTop(e) {
          let { location: t } = e;
          return (
            t.pathname.startsWith(p.Routes.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(
              p.Routes.APPLICATION_STORE_LISTING_APPLICATION("")
            )
          );
        }
        render() {
          let { location: e, className: t, render: s, locale: o } = this.props;
          return (0, n.jsx)(r.default, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, r) =>
              (0, n.jsxs)(l.Fragment, {
                children: [
                  (0, n.jsx)(i.Header, {
                    avoidRouter: !0,
                    locale: o,
                    authRedirectTo: e.pathname,
                    track: d.default.track,
                    className: N.marketingHeader,
                    onChangeLocale: this.handleHeaderLocaleChange,
                    mobileClassName: N.marketingHeader,
                    openNavAriaLabel: h.default.Messages.OPEN_NAVIGATION,
                    hideNavAriaLabel: h.default.Messages.HIDE_NAVIGATION,
                    skipToContentLabel: h.default.Messages.SKIP_TO_CONTENT,
                  }),
                  s(t, r),
                  (0, n.jsx)(a.Footer, {
                    locale: o,
                    authRedirectTo: e.pathname,
                    avoidRouter: !0,
                    track: d.default.track,
                    className: N.marketingFooter,
                  }),
                ],
              }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleHeaderLocaleChange = e => {
              e !== this.props.locale && c.default.overrideLocale(e);
            });
        }
      }
      var m = o.default.connectStores([u.default], () => ({
        locale: u.default.locale,
      }))(g);
    },
    352220: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Images: function () {
            return n;
          },
        });
      let n = {
        ASSET_SOCIAL_TWITTER: s("190602"),
        ASSET_SOCIAL_FACEBOOK: s("897234"),
        ASSET_SOCIAL_INSTAGRAM: s("523568"),
        ICON_TRANSLATE: s("879839"),
        ICON_ARROW_DOWN: s("61995"),
        ASSET_LOGO_DISCORD_SVG: s("113140"),
      };
    },
    108402: function (e, t, s) {
      "use strict";
      let n;
      s.r(t),
        s.d(t, {
          Footer: function () {
            return A;
          },
        });
      var l = s("37983"),
        a = s("884691"),
        i = s("421898"),
        r = s.n(i),
        o = s("290381"),
        c = s("171718"),
        u = s("141631"),
        d = s("518066"),
        p = s("146230"),
        h = s("843455"),
        N = s("53452"),
        g = s("792788"),
        m = s("161934");
      let k = "Footer Navigation",
        C = { BLURPLE: "Blurple", PRIMARY: "Primary" },
        x = e => [
          {
            title: e.PRODUCT,
            routes: [
              {
                link: h.WebRoutes.DOWNLOAD,
                title: e.DOWNLOAD,
                tracking: "download",
              },
              {
                link: h.WebRoutes.BRANDING,
                title: e.BRANDING,
                tracking: "branding",
              },
              {
                link: h.WebRoutes.NITRO,
                title: e.NITRO,
                tracking: "nitro",
                external: !0,
              },
            ],
          },
          {
            title: e.DEVELOPERS,
            routes: [
              {
                link: h.WebRoutes.RICH_PRESENCE,
                title: e.RICH_PRESENCE,
                tracking: "rich_presence",
              },
              {
                link: h.WebRoutes.VERIFICATION,
                title: e.VERIFICATION,
                tracking: "verification",
                external: !0,
              },
              {
                link: h.Links.DEV_PORTAL_APPLICATIONS,
                title: e.APPLICATIONS,
                tracking: "developers",
                external: !0,
              },
              {
                link: h.Links.DEV_PORTAL_DOCUMENTATION,
                title: e.DOCUMENTATION,
                tracking: "documentation",
                external: !0,
              },
            ],
          },
          {
            title: e.RESOURCES,
            routes: [
              {
                link: h.Links.HELP_AND_SUPPORT,
                title: e.HELP_AND_SUPPORT,
                tracking: "helpandsupport",
                external: !0,
              },
              {
                link: h.WebRoutes.GUIDELINES,
                title: e.GUIDELINES,
                tracking: "guidelines",
                external: !0,
              },
              {
                link: h.Links.FEEDBACK,
                title: e.FEEDBACK,
                tracking: "feedback",
                external: !0,
              },
              {
                link: h.WebRoutes.TERMS,
                title: e.TERMS,
                tracking: "terms",
                external: !0,
              },
              {
                link: h.WebRoutes.PRIVACY,
                title: e.PRIVACY,
                tracking: "privacy",
                external: !0,
              },
              {
                link: h.WebRoutes.SECURITY,
                title: e.SECURITY,
                tracking: "security",
              },
              {
                link: h.Links.STATUS,
                title: e.STATUS,
                tracking: "status",
                external: !0,
              },
              {
                link: h.WebRoutes.SAFETY_LANDING,
                title: e.SAFETY_CENTER,
                tracking: "safetycenter",
                external: !0,
              },
            ],
          },
          {
            title: e.COMPANY,
            routes: [
              { link: h.WebRoutes.COMPANY, title: e.ABOUT, tracking: "about" },
              {
                link: h.WebRoutes.BLOG,
                title: e.BLOG,
                tracking: "blog",
                external: !0,
              },
              {
                link: h.WebRoutes.JOBS,
                title: e.JOBS,
                tracking: "join",
                external: !0,
              },
            ],
          },
          {
            title: e.MORE,
            routes: [
              {
                link: h.WebRoutes.PARTNERS,
                title: e.PARTNERS,
                tracking: "partners",
                external: !0,
              },
              {
                link: h.WebRoutes.HYPESQUAD,
                title: e.HYPESQUAD,
                tracking: "hypesquad",
                external: !0,
              },
              {
                link: h.Links.PRESS_INQUIRIES,
                title: e.PRESS_INQUIRIES,
                tracking: "pressinquiries",
                external: !0,
              },
              {
                link: h.WebRoutes.OPEN_SOURCE,
                title: e.OPEN_SOURCE,
                tracking: "open_source",
              },
            ],
          },
        ],
        f = e => {
          let { colorVariant: t, animate: s } = e;
          return (0, l.jsx)("svg", {
            className: (0, u.getClass)(m, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, l.jsx)("path", {
              className: (0, u.getClass)(
                m,
                "footerBackground",
                s ? "Play" : "Paused"
              ),
              fill: "#1a1c1e",
              fillOpacity: "0.3",
              d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
          });
        };
      class A extends a.PureComponent {
        componentDidMount() {
          this.setState({
            token: (0, c.getToken)(),
            isAppCompatible: N.IS_APP_COMPATIBLE_BROWSER,
          });
        }
        renderAppButton(e) {
          if ("STATIC_RENDERER" === this.props.platform) return null;
          let {
              downloadLink: t,
              isMobile: s,
              mobileDownloadText: a,
              platform: i,
              variant: r,
              authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
          if (s)
            return (0, l.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: i,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              target: "_blank",
              className: (0, u.getClass)(m, "button", r),
              href: t,
              children: a,
            });
          if (!c)
            return (0, l.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: i,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              className: (0, u.getClass)(m, "button", r),
              href: h.WebRoutes.DOWNLOAD,
              children: g.default.Messages.Navigation.DOWNLOAD,
            });
          let d =
              null != o
                ? h.AppRoutes.REGISTER_WITH_REDIRECT(o)
                : h.AppRoutes.REGISTER,
            p = g.default.Messages.Common.SIGN_UP_NOW;
          return (
            e &&
              ((d = h.AppRoutes.ME),
              (p = g.default.Messages.Common.OPEN_DISCORD)),
            (0, l.jsx)(n, {
              eventName: k,
              className: (0, u.getClass)(m, "button", this.props.variant),
              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
              href: d,
              children: p,
            })
          );
        }
        render() {
          let {
              variant: e,
              style: t,
              className: a,
              avoidRouter: i,
              showWave: c,
            } = this.props,
            { animateBackground: d, token: N } = this.state,
            C = x(g.default.Messages.Navigation).map(e => {
              let t = e.routes.map((e, t) =>
                e.external
                  ? (0, l.jsx)(
                      n,
                      {
                        className: m.route,
                        eventName: k,
                        data: { linkClicked: e.tracking },
                        href: e.link,
                        children: e.title,
                      },
                      e.link || t
                    )
                  : (0, l.jsx)(
                      p.default,
                      {
                        avoidRouter: i,
                        to: e.link,
                        from: "footer_navigation",
                        className: m.route,
                        children: (0, l.jsx)(n, {
                          tag: "span",
                          eventName: k,
                          data: { linkClicked: e.tracking },
                          children: e.title,
                        }),
                      },
                      e.link
                    )
              );
              return (0, l.jsxs)(
                "div",
                {
                  className: m.navigationSection,
                  children: [
                    (0, l.jsx)("h3", {
                      className: m.navigationHeader,
                      children: e.title,
                    }),
                    t,
                  ],
                },
                e.title
              );
            });
          return (0, l.jsx)(o.VisibilitySensor, {
            onChange: this.handleVisibility,
            children: (0, l.jsxs)("footer", {
              className: r((0, u.getClass)(m, "footer", e), a),
              style: t,
              children: [
                c ? (0, l.jsx)(f, { colorVariant: e, animate: d }) : null,
                (0, l.jsxs)("div", {
                  className: m.footerContent,
                  children: [
                    (0, l.jsxs)("div", {
                      className: m.navigation,
                      children: [
                        (0, l.jsx)("div", {
                          className: m.logoWrap,
                          children: (0, l.jsx)(n, {
                            className: m.logo,
                            href: h.WebRoutes.INDEX,
                            eventName: k,
                            data: { linkClicked: "logo" },
                            children: (0, l.jsx)("img", {
                              alt: g.default.Messages.Navigation.HOME,
                              src: s("188890"),
                            }),
                          }),
                        }),
                        C,
                      ],
                    }),
                    (0, l.jsx)("div", { className: m.separator }),
                    (0, l.jsxs)("div", {
                      className: m.joinDiscord,
                      children: [
                        (0, l.jsxs)("div", {
                          className: m.stats,
                          children: [
                            (0, l.jsx)("h2", {
                              className: m.readyToJoin,
                              children:
                                g.default.Messages.Footer.READY_TO_TRY_DISCORD,
                            }),
                            (0, l.jsx)("h3", {
                              className: m.joinOtherPlayers,
                              children:
                                g.default.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format(
                                  { num: h.ROUGH_COUNT_MILLION_PLAYERS }
                                ),
                            }),
                          ],
                        }),
                        this.renderAppButton(N),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(e) {
          super(e),
            (this.state = {
              animateBackground: !1,
              isMobile: null,
              token: null,
              isAppCompatible: !0,
            }),
            (this.handleVisibility = e => {
              this.setState({ animateBackground: e });
            }),
            null != e.locale && g.default.setLocale(e.locale),
            (n = t =>
              (0, l.jsx)(d.default, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
      (A.Variants = C), (A.defaultProps = { variant: C.PRIMARY, showWave: !0 });
    },
    719562: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DesktopHeader: function () {
            return x;
          },
        }),
        s("222007"),
        s("424973");
      var n = s("37983"),
        l = s("884691"),
        a = s("421898"),
        i = s.n(a),
        r = s("844234"),
        o = s("447669"),
        c = s("146230"),
        u = s("472263"),
        d = s("904934"),
        p = s("156713"),
        h = s("843455"),
        N = s("53452"),
        g = s("352220"),
        m = s("510590");
      let k = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
        C = () => [
          {
            route: (0, r.getLocalizedLink)(h.LocalizedLinks.TWITTER),
            linkClicked: "twitter",
            alt: "Discord's Twitter",
            img: g.Images.ASSET_SOCIAL_TWITTER,
          },
          {
            route: h.SOCIAL_LINKS.FACEBOOK_URL,
            linkClicked: "facebook",
            alt: "Discord's Facebook",
            img: g.Images.ASSET_SOCIAL_FACEBOOK,
          },
          {
            route: h.SOCIAL_LINKS.INSTAGRAM_URL,
            linkClicked: "instagram",
            alt: "Discord's Instagram",
            img: g.Images.ASSET_SOCIAL_INSTAGRAM,
          },
        ];
      class x extends l.PureComponent {
        componentDidMount() {
          this.setState({ isAppCompatible: N.IS_APP_COMPATIBLE_BROWSER });
        }
        render() {
          let {
            className: e,
            mainContentId: t,
            skipToContentLabel: s,
            NavigationMessages: l,
            onChangeLocale: a,
            TrackClick: r,
            avoidRouter: o,
          } = this.props;
          return (0, n.jsxs)("header", {
            className: i(m.header, e),
            children: [
              (0, n.jsxs)("nav", {
                className: m.headerInner,
                children: [
                  (0, n.jsxs)("div", {
                    className: m.headerLogo,
                    children: [
                      (0, n.jsx)(r, {
                        tag: "div",
                        eventName: k,
                        data: { linkClicked: "logo" },
                        children: (0, n.jsx)(c.default, {
                          avoidRouter: o,
                          to: h.WebRoutes.INDEX,
                          from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                          children: (0, n.jsx)(u.DesktopHeaderLogo, {}),
                        }),
                      }),
                      null != t
                        ? (0, n.jsx)("a", {
                            className: m.skipToContent,
                            href: "#".concat(t),
                            children: s,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)("ul", {
                    className: m.headerNav,
                    children: (0, n.jsx)(p.MainNavigation, {
                      avoidRouter: o,
                      TrackClick: r,
                      styles: m,
                      NavigationMessages: l,
                    }),
                  }),
                  (0, n.jsxs)("ul", {
                    className: m.headerNavRight,
                    children: [
                      this.renderSocialMediaNav(),
                      (0, n.jsx)(d.LocalePicker, { onChange: a }),
                    ],
                  }),
                ],
              }),
              null != t && (0, n.jsx)("div", { id: t, tabIndex: -1 }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { isAppCompatible: !0 }),
            (this.getAppButton = () => {
              let {
                  token: e,
                  NavigationMessages: t,
                  TrackClick: s,
                  authRedirectTo: l,
                } = this.props,
                { isAppCompatible: a } = this.state,
                i = (0, o.getLoginPath)(l),
                r = t.LOGIN;
              return (
                null != e && ((i = h.AppRoutes.ME), (r = t.OPEN)),
                a
                  ? (0, n.jsx)(
                      "li",
                      {
                        className: m.listItemInactive,
                        children: (0, n.jsx)(s, {
                          eventName: k,
                          className: m.appButton,
                          data: {
                            linkClicked: e ? "open" : "login",
                            googleAnalytics: !0,
                          },
                          href: i,
                          children: r,
                        }),
                      },
                      "app-button"
                    )
                  : null
              );
            }),
            (this.renderSocialMediaNav = () => {
              let { TrackClick: e } = this.props,
                t = C().map(t =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: i(m.listItemInactive, m.listItemSocialMedia),
                      children: (0, n.jsx)(e, {
                        eventName: k,
                        className: m.rightNavLink,
                        data: { linkClicked: t.linkClicked },
                        href: t.route,
                        rel: "me",
                        target: "_blank",
                        children: (0, n.jsx)("img", { src: t.img, alt: t.alt }),
                      }),
                    },
                    t.route
                  )
                ),
                s = this.getAppButton();
              return null != s && t.push(s), t;
            });
        }
      }
    },
    472263: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DesktopHeaderLogo: function () {
            return r;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("750485"),
        i = s("699794");
      class r extends l.PureComponent {
        render() {
          return (0, n.jsxs)(a.Flex, {
            wrap: a.Flex.Wrap.NO_WRAP,
            children: [
              (0, n.jsx)(a.Flex.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsxs)("svg", {
                  className: i.clyde,
                  viewBox: "0 0 33 36",
                  children: [
                    (0, n.jsx)("ellipse", {
                      cx: "19.6",
                      cy: "17.1",
                      rx: "1.9",
                      ry: "2",
                    }),
                    (0, n.jsx)("ellipse", {
                      cx: "12.8",
                      cy: "17.1",
                      rx: "1.9",
                      ry: "2",
                    }),
                    (0, n.jsx)("path", {
                      d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(a.Flex.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsx)("svg", {
                  className: i.type,
                  viewBox: "0 0 98 36",
                  children: (0, n.jsx)("path", {
                    d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z",
                  }),
                }),
              }),
            ],
          });
        }
      }
    },
    624265: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DropdownMenu: function () {
            return h;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("416037"),
        i = s.n(a),
        r = s("701800"),
        o = s("141631"),
        c = s("146230"),
        u = s("843455"),
        d = s("447699");
      let p = u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
      class h extends l.PureComponent {
        render() {
          let e = (0, r.isActiveCreator)(this.context.router),
            {
              isOpen: t,
              dropdownLinks: s,
              TrackClick: l,
              avoidRouter: a,
              id: i,
              "aria-label": h,
            } = this.props,
            N = s.map((t, s) =>
              t.divider
                ? (0, n.jsx)(
                    "hr",
                    { className: d.divider },
                    "divider-".concat(s)
                  )
                : t.external
                  ? (0, n.jsx)(
                      "li",
                      {
                        className: d.moreListItemInactive,
                        children: (0, n.jsx)(l, {
                          className: d.moreListLink,
                          eventName: p,
                          data: { linkClicked: t.linkClicked },
                          href: t.route,
                          rel: "me",
                          children: (0, n.jsx)("span", {
                            className: d.moreListLinkCopy,
                            children: t.title,
                          }),
                        }),
                      },
                      t.route
                    )
                  : (0, n.jsx)(
                      "li",
                      {
                        className: (0, o.getClass)(
                          d,
                          "moreListItem",
                          e(t.route) ? "Active" : "Inactive"
                        ),
                        children: (0, n.jsx)(c.default, {
                          avoidRouter: a,
                          className: d.moreListLink,
                          to: t.route,
                          from: u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                          role: "menuitem",
                          children: (0, n.jsx)(l, {
                            tag: "span",
                            className: d.moreListLinkCopy,
                            eventName: p,
                            data: { linkClicked: t.linkClicked },
                            children: t.title,
                          }),
                        }),
                      },
                      t.route
                    )
            );
          return (0, n.jsx)("ul", {
            id: i,
            className: (0, o.getClass)(d, "moreList", t ? "Open" : "Closed"),
            "aria-label": h,
            children: N,
          });
        }
      }
      h.contextTypes = { router: i.object.isRequired };
    },
    904934: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          LocalePicker: function () {
            return p;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("421898"),
        i = s.n(a),
        r = s("750485"),
        o = s("141631"),
        c = s("352220"),
        u = s("792788"),
        d = s("743370");
      class p extends l.PureComponent {
        componentDidMount() {
          this.callChangeLocale(u.default.getLocale());
        }
        render() {
          let { isOpen: e, languages: t, current: l } = this.state,
            { className: a } = this.props,
            u = null;
          return (
            null != t &&
              (u = t
                .sort((e, t) =>
                  e.code < t.code ? -1 : e.code > t.code ? 1 : 0
                )
                .map(e => {
                  let t = (function (e) {
                    try {
                      return s("417125")(
                        "../../images/flags/"
                          .concat(e, ".png")
                          .replace("../../images/flags/", "./")
                      );
                    } catch (e) {
                      return null;
                    }
                  })(e.code);
                  return null == t
                    ? null
                    : (0, n.jsxs)(
                        "li",
                        {
                          className: (0, o.getClass)(
                            d,
                            "locale",
                            null != l && e.code === l.code ? "Current" : null
                          ),
                          onClick: () => this.setLocale(e.code),
                          children: [
                            (0, n.jsx)("img", {
                              className: d.localeImage,
                              src: t,
                              alt: e.name,
                            }),
                            e.name,
                          ],
                        },
                        e.code
                      );
                })),
            (0, n.jsxs)("div", {
              className: i(d.localePicker, a),
              onMouseEnter: this.open,
              onMouseLeave: this.close,
              onClick: this.toggle,
              children: [
                (0, n.jsxs)(r.Flex, {
                  align: r.Flex.Align.CENTER,
                  className: (0, o.getClass)(d, "opener", e ? "Open" : null),
                  children: [
                    (0, n.jsx)("span", { className: d.line }),
                    (0, n.jsx)("img", {
                      className: d.localeIcon,
                      src: c.Images.ICON_TRANSLATE,
                      alt: "Choose Locale",
                    }),
                    (0, n.jsx)("img", {
                      className: d.arrowIcon,
                      src: c.Images.ICON_ARROW_DOWN,
                      alt: "Open Locale",
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: (0, o.getClass)(
                    d,
                    "localeList",
                    e ? "Open" : "Closed"
                  ),
                  children: u,
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              languages: u.default.getLanguages().filter(e => e.enabled),
              current: u.default.getLocaleInfo(),
              isOpen: !1,
            }),
            (this.setLocale = e => {
              null != u.default &&
                (u.default.setLocale(e), this.callChangeLocale(e));
            }),
            (this.callChangeLocale = e => {
              let { onChange: t } = this.props;
              null != t && t(e);
            }),
            (this.open = () => {
              this.setState({ isOpen: !0 });
            }),
            (this.close = () => {
              this.setState({ isOpen: !1 });
            }),
            (this.toggle = () => {
              let { isOpen: e } = this.state;
              this.setState({ isOpen: !e });
            });
        }
      }
    },
    156713: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MainNavigation: function () {
            return p;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("701800"),
        i = s("146230"),
        r = s("292273"),
        o = s("843455"),
        c = s("792788");
      let u = o.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
        d = (e, t) => [
          {
            route: o.WebRoutes.DOWNLOAD,
            linkClicked: "download",
            title: t.DOWNLOAD,
          },
          {
            route: o.WebRoutes.NITRO,
            linkClicked: "nitro",
            title: t.NITRO,
            external: !0,
          },
          {
            route: o.WebRoutes.JOBS,
            linkClicked: "jobs",
            title: t.JOBS,
            external: !0,
          },
          {
            title: t.DEVELOPERS,
            links: [
              {
                route: o.WebRoutes.RICH_PRESENCE,
                linkClicked: "rich_presence",
                title: t.RICH_PRESENCE,
              },
              {
                route: o.WebRoutes.VERIFICATION,
                linkClicked: "verification",
                title: t.VERIFICATION,
                external: !0,
              },
              {
                route: o.Links.DEV_PORTAL,
                linkClicked: "developers",
                title: t.DEVELOPER_PORTAL,
                external: !0,
              },
              {
                route: o.Links.DEV_PORTAL_DOCUMENTATION,
                linkClicked: "documentation",
                title: t.DOCUMENTATION,
                external: !0,
              },
            ],
          },
          {
            title: t.COMMUNITY,
            links: [
              {
                route: o.WebRoutes.OPEN_SOURCE,
                linkClicked: "open_source",
                title: t.OPEN_SOURCE,
              },
              {
                route: o.WebRoutes.PARTNERS,
                linkClicked: "partners",
                title: t.PARTNERS,
                external: !0,
              },
              {
                route: o.WebRoutes.HYPESQUAD,
                linkClicked: "hypesquad",
                title: t.HYPESQUAD,
                external: !0,
              },
              {
                route: o.WebRoutes.GUIDELINES,
                linkClicked: "guidelines",
                title: t.GUIDELINES,
                external: !0,
              },
            ],
          },
          {
            title: t.SUPPORT,
            links: [
              {
                route: "//support.discord.com/hc/".concat(e),
                linkClicked: "helpandsupport",
                title: t.HELP_AND_SUPPORT,
                external: !0,
              },
              {
                route: o.Links.STATUS,
                linkClicked: "status",
                title: t.STATUS,
                external: !0,
              },
              {
                route: o.WebRoutes.SAFETY_LANDING,
                linkClicked: "safetycenter",
                title: t.SAFETY_CENTER,
                external: !0,
              },
            ],
          },
        ];
      class p extends l.PureComponent {
        render() {
          let e = (0, a.isActiveCreator)(this.context.router),
            {
              isMobile: t,
              isVisible: s,
              styles: l,
              NavigationMessages: p,
              TrackClick: h,
              avoidRouter: N,
            } = this.props,
            { sectionShown: g } = this.state,
            m = null != c.default ? c.default.getLocale().toLowerCase() : "";
          return d(m, p).map(a => {
            if (null != a.links)
              return (0, n.jsx)(
                r.default,
                {
                  title: a.title,
                  links: a.links,
                  isOpen: g === a.title,
                  isMobile: t,
                  avoidRouter: N,
                  TrackClick: h,
                  onClose: this.closeSubNav,
                  onOpen: this.openSubNav,
                },
                a.title
              );
            if (a.external && null != a.route)
              return (0, n.jsx)(
                "li",
                {
                  className: l.listItemInactive,
                  role: "none",
                  children: (0, n.jsx)(h, {
                    className: l.mainNavLink,
                    eventName: u,
                    data: a.linkClicked ? { linkClicked: a.linkClicked } : {},
                    href: a.route,
                    rel: "me",
                    children: a.title,
                  }),
                },
                "external_link_".concat(a.route)
              );
            if (null != a.route)
              return (0, n.jsx)(
                "li",
                {
                  className: e(a.route) ? l.listItemActive : l.listItemInactive,
                  role: "none",
                  children: (0, n.jsx)(i.default, {
                    avoidRouter: N,
                    to: a.route,
                    from: o.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                    tabIndex: s ? 0 : -1,
                    role: "menuitem",
                    children: (0, n.jsx)(h, {
                      tag: "span",
                      className: l.mainNavLink,
                      eventName: u,
                      data: { linkClicked: a.linkClicked },
                      children: a.title,
                    }),
                  }),
                },
                "link_".concat(a.route)
              );
            return [];
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { sectionShown: null }),
            (this.closeSubNav = () => {
              let { sectionShown: e } = this.state;
              null !== e && this.setState({ sectionShown: null });
            }),
            (this.openSubNav = e => {
              let { sectionShown: t } = this.state;
              t !== e && this.setState({ sectionShown: e });
            });
        }
      }
      p.defaultProps = { isMobile: !1, isVisible: !0 };
    },
    717443: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MobileHeader: function () {
            return k;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("421898"),
        i = s.n(a),
        r = s("582909"),
        o = s.n(r),
        c = s("353386"),
        u = s("146230"),
        d = s("904934"),
        p = s("156713"),
        h = s("843455"),
        N = s("352220"),
        g = s("116161");
      let m = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
      class k extends l.PureComponent {
        componentDidMount() {
          window.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleKeyDown);
        }
        render() {
          let {
              className: e,
              NavigationMessages: t,
              TrackClick: s,
              onChangeLocale: l,
              avoidRouter: a,
              openNavAriaLabel: r,
              hideNavAriaLabel: o,
            } = this.props,
            { menuOpen: k } = this.state;
          return (0, n.jsx)("header", {
            className: i(g.header, e),
            children: (0, n.jsxs)("nav", {
              className: g.headerInner,
              children: [
                (0, n.jsx)(s, {
                  tag: "div",
                  eventName: m,
                  className: g.headerLogo,
                  data: { linkClicked: "logo" },
                  children: (0, n.jsx)(u.default, {
                    avoidRouter: a,
                    className: g.logoWrapper,
                    to: h.WebRoutes.INDEX,
                    from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                    children: (0, n.jsx)("img", {
                      className: g.logo,
                      src: N.Images.ASSET_LOGO_DISCORD_SVG,
                      alt: "Discord",
                      itemProp: "logo",
                    }),
                  }),
                }),
                (0, n.jsx)(s, {
                  tag: "div",
                  className: g.hamburgerButton,
                  eventName: m,
                  data: { linkClicked: "mobile-menu" },
                  children: (0, n.jsx)(c.HamburgerButton, {
                    open: k,
                    "aria-haspopup": "true",
                    "aria-label": k ? o : r,
                    "aria-expanded": k,
                    "aria-controls": this._mainNavId,
                    onClick: this.toggleMenu,
                  }),
                }),
                (0, n.jsxs)("ul", {
                  className: k ? g.headerNavOpen : g.headerNav,
                  children: [
                    (0, n.jsx)(p.MainNavigation, {
                      avoidRouter: a,
                      TrackClick: s,
                      styles: g,
                      isMobile: !0,
                      isVisible: k,
                      NavigationMessages: t,
                    }),
                    (0, n.jsx)(d.LocalePicker, { onChange: l }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._mainNavId = o("mainNav")),
            (this.state = { menuOpen: !1 }),
            (this.toggleMenu = () => {
              this.setState({ menuOpen: !this.state.menuOpen });
            }),
            (this.handleKeyDown = e => {
              let { menuOpen: t } = this.state;
              ("Escape" === e.key || "Esc" === e.key) &&
                (e.preventDefault(), t && this.toggleMenu());
            });
        }
      }
    },
    292273: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        }),
        s("222007");
      var n,
        l,
        a = s("37983"),
        i = s("884691"),
        r = s("582909"),
        o = s.n(r),
        c = s("701800"),
        u = s("146230"),
        d = s("624265"),
        p = s("843455"),
        h = s("352220"),
        N = s("517018");
      let g = p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
      ((n = class extends i.PureComponent {
        render() {
          let {
              title: e,
              links: t,
              isOpen: s,
              isMobile: n,
              TrackClick: l,
              avoidRouter: i,
            } = this.props,
            r =
              n && s
                ? (0, a.jsx)("ul", {
                    className: N.mobileSubMenuOpen,
                    id: this._dropdownId,
                    children: this.renderMobileSubMenu(),
                  })
                : null;
          return n
            ? (0, a.jsxs)(
                "li",
                {
                  className: N.subListHeading,
                  tabIndex: -1,
                  onClick: this.toggleMenu,
                  onKeyDown: this.handleKeyDown,
                  children: [
                    (0, a.jsxs)(
                      "span",
                      {
                        className: N.mobileMenuItem,
                        "aria-label": "Open ".concat(e, " Nav"),
                        "aria-expanded": s,
                        "aria-controls": this._dropdownId,
                        "aria-haspopup": "true",
                        role: "menuitem",
                        tabIndex: 0,
                        children: [
                          e,
                          (0, a.jsx)("img", {
                            src: h.Images.ICON_ARROW_DOWN,
                            className: N.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more"
                    ),
                    r,
                  ],
                },
                "dropdown_".concat(e)
              )
            : (0, a.jsxs)(
                "li",
                {
                  role: "none",
                  tabIndex: -1,
                  onFocus: this.openMenu,
                  onBlur: this.closeMenu,
                  onMouseEnter: this.openMenu,
                  onMouseLeave: this.closeMenu,
                  className: N.desktopSubMenuItem,
                  children: [
                    (0, a.jsxs)(
                      "span",
                      {
                        className: N.desktopMenuMore,
                        role: "menuitem",
                        tabIndex: 0,
                        "aria-haspopup": "true",
                        "aria-expanded": s,
                        "aria-controls": this._dropdownId,
                        children: [
                          e,
                          (0, a.jsx)("img", {
                            src: h.Images.ICON_ARROW_DOWN,
                            className: N.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more"
                    ),
                    (0, a.jsx)(d.DropdownMenu, {
                      id: this._dropdownId,
                      avoidRouter: i,
                      TrackClick: l,
                      isOpen: s,
                      dropdownLinks: t,
                      "aria-label": e,
                    }),
                  ],
                },
                "dropdown_".concat(e)
              );
        }
        constructor(...e) {
          super(...e),
            (this._dropdownId = o("subMenuDropdown")),
            (this.closeMenu = () => {
              this.props.onClose();
            }),
            (this.openMenu = () => {
              let { title: e, onOpen: t } = this.props;
              t(e);
            }),
            (this.toggleMenu = () => {
              let { isOpen: e, title: t, onOpen: s, onClose: n } = this.props;
              e ? n() : s(t);
            }),
            (this.handleKeyDown = e => {
              ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), this.toggleMenu());
            }),
            (this.renderMobileSubMenu = () => {
              let { links: e, TrackClick: t, avoidRouter: s } = this.props,
                n = (0, c.isActiveCreator)(this.context.router);
              return e.map(e =>
                e.external
                  ? (0, a.jsx)(
                      "li",
                      {
                        className: N.subListItemInactive,
                        children: (0, a.jsx)(t, {
                          eventName: g,
                          className: N.subListItemLink,
                          data: {
                            linkClicked: "mobile-".concat(e.linkClicked),
                          },
                          rel: "me",
                          href: e.route,
                          children: e.title,
                        }),
                      },
                      e.route
                    )
                  : (0, a.jsx)(
                      "li",
                      {
                        className: n(e.route)
                          ? N.subListItemActive
                          : N.subListItemInactive,
                        children: (0, a.jsx)(u.default, {
                          avoidRouter: s,
                          to: e.route,
                          from: p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                          children: (0, a.jsx)(t, {
                            className: N.subListItemLink,
                            tag: "span",
                            eventName: g,
                            data: {
                              linkClicked: "mobile-".concat(e.linkClicked),
                            },
                            children: e.title,
                          }),
                        }),
                      },
                      e.route
                    )
              );
            });
        }
      }).defaultProps = { isOpen: !1, isMobileMenuOpen: !1 }),
        (l = n);
    },
    601680: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Header: function () {
            return h;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("421898"),
        i = s.n(a),
        r = s("518066"),
        o = s("719562"),
        c = s("717443"),
        u = s("792788"),
        d = s("694663");
      let p = null;
      class h extends l.PureComponent {
        render() {
          let {
            token: e,
            className: t,
            onChangeLocale: s,
            mainContentId: a,
            mobileClassName: r,
            avoidRouter: h,
            authRedirectTo: N,
            openNavAriaLabel: g,
            hideNavAriaLabel: m,
            skipToContentLabel: k,
          } = this.props;
          return null == p
            ? null
            : (0, n.jsxs)(l.Fragment, {
                children: [
                  (0, n.jsx)(o.DesktopHeader, {
                    className: i(d.desktopHeader, t),
                    TrackClick: p,
                    token: e,
                    avoidRouter: h,
                    authRedirectTo: N,
                    NavigationMessages: u.default.Messages.Navigation,
                    onChangeLocale: s,
                    mainContentId: a,
                    skipToContentLabel: k,
                  }),
                  (0, n.jsx)(c.MobileHeader, {
                    className: i(d.mobileHeader, r),
                    token: e,
                    avoidRouter: h,
                    TrackClick: p,
                    NavigationMessages: u.default.Messages.Navigation,
                    onChangeLocale: s,
                    openNavAriaLabel: g,
                    hideNavAriaLabel: m,
                  }),
                ],
              });
        }
        constructor(e) {
          super(e),
            null != e.locale && u.default.setLocale(e.locale),
            (p = t =>
              (0, n.jsx)(r.default, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
    },
    831137: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("742868");
      class i extends l.Component {
        componentDidUpdate(e) {
          let {
            props: { location: t, shouldScrollToTop: s },
            scrollRef: { current: n },
          } = this;
          null != n &&
            t !== e.location &&
            (null != s
              ? s(this.props) && (n.scrollTop = 0)
              : (n.scrollTop = 0));
        }
        render() {
          let { className: e, render: t } = this.props;
          return (0, n.jsx)("div", {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop),
          });
        }
        constructor(...e) {
          super(...e),
            (this.scrollRef = l.createRef()),
            (this.scrollTo = e => {
              null != this.scrollRef.current &&
                (this.scrollRef.current.scrollTop = e);
            }),
            (this.getScrollTop = () =>
              null == this.scrollRef.current
                ? 0
                : this.scrollRef.current.scrollTop);
        }
      }
      var r = (0, a.withRouter)(i);
    },
    518066: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        }),
        s("222007");
      var n,
        l,
        a = s("37983"),
        i = s("884691");
      ((n = class extends i.PureComponent {
        render() {
          let {
            tag: e,
            children: t,
            eventName: s,
            data: n,
            track: l,
            trackOutboundLink: i,
            ...r
          } = this.props;
          return null == e
            ? null
            : (0, a.jsx)(e, { ...r, onClick: this.handleClick, children: t });
        }
        constructor(...e) {
          super(...e),
            (this.handleClick = e => {
              let {
                eventName: t,
                data: s,
                href: n,
                onClick: l,
                trackOutboundLink: a,
                track: i,
              } = this.props;
              if (
                (s.googleAnalytics &&
                  a &&
                  (null != n
                    ? a(n)
                    : console.warn(
                        "TrackClick.handleClick: No href provided when using data.googleAnalytics"
                      )),
                l && l(e),
                !t)
              )
                return !1;
              i(t, s);
            });
        }
      }).defaultProps = { tag: "a", data: {} }),
        (l = n);
    },
    146230: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        }),
        s("70102"),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("294094"),
        i = s("742868");
      class r extends l.Component {
        render() {
          let {
            to: e,
            from: t,
            isNavLink: s,
            children: l,
            tabIndex: a = 0,
            role: r,
            className: o,
          } = this.props;
          if (null == e)
            throw Error("Missing 'to' route prop in TrackLink component");
          let c = "string" == typeof e ? e : e.pathname,
            u = "string" == typeof e ? "" : e.hash,
            d = "string" == typeof e ? "" : e.search;
          return s
            ? (0, n.jsx)(i.NavLink, {
                className: o,
                tabIndex: a,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: u,
                  search: d,
                  state: { previousLinkLocation: t },
                },
                role: r,
                children: l,
              })
            : (0, n.jsx)(i.Link, {
                className: o,
                tabIndex: a,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: u,
                  search: d,
                  state: { previousLinkLocation: t },
                },
                role: r,
                children: l,
              });
        }
        constructor(...e) {
          super(...e),
            (this.handleOnClick = () => {
              let {
                to: e,
                avoidRouter: t,
                onClick: s,
                history: n,
              } = this.props;
              if (null != s) s();
              else if (t) {
                let t =
                    "string" == typeof e
                      ? (0, a.createLocation)(e, null, void 0, n.location)
                      : e,
                  s = n.createHref(t);
                window.location = s;
              }
            });
        }
      }
      var o = (0, i.withRouter)(r);
    },
    750485: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Flex: function () {
            return g;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("421898"),
        i = s.n(a),
        r = s("782600"),
        o = s("983663");
      let c = {
          VERTICAL: r.flexVertical,
          HORIZONTAL: r.flexHorizontal,
          HORIZONTAL_REVERSE: r.flexHorizontalReverse,
        },
        u = {
          START: r.flexJustifyStart,
          END: r.flexJustifyEnd,
          CENTER: r.flexJustifyCenter,
          BETWEEN: r.flexJustifyBetween,
          AROUND: r.flexJustifyAround,
        },
        d = {
          NO_WRAP: r.flexNowrap,
          WRAP: r.flexWrap,
          WRAP_REVERSE: r.flexWrapReverse,
        },
        p = {
          START: r.flexAlignStart,
          END: r.flexAlignEnd,
          CENTER: r.flexAlignCenter,
          STRETCH: r.flexAlignStretch,
        },
        h = { SMALL: o.flexGutterSmall, LARGE: o.flexGutterLarge };
      class N extends l.PureComponent {
        render() {
          let {
              children: e,
              className: t,
              shrink: s,
              grow: a,
              basis: r,
              style: c,
              wrap: u,
              ...d
            } = this.props,
            p = {
              style: { flexGrow: a, flexShrink: s, flexBasis: r, ...c },
              className: t === o.flexChild ? t : i(o.flexChild, t),
              ...d,
            };
          if (!u && "string" != typeof e && 1 === l.Children.count(e)) {
            let s = l.Children.only(e);
            return (
              (p.style = { ...p.style, ...s.props.style }),
              (p.className = i(s.props.className, t)),
              l.cloneElement(s, p)
            );
          }
          return (0, n.jsx)("div", { ...p, children: e });
        }
      }
      N.defaultProps = { className: o.flexChild, style: {}, wrap: !1 };
      class g extends l.PureComponent {
        render() {
          let {
              children: e,
              className: t,
              direction: s,
              justify: l,
              align: a,
              wrap: r,
              shrink: c,
              grow: u,
              basis: d,
              style: p,
              gutter: h,
              ...N
            } = this.props,
            g = { flexShrink: c, flexGrow: u, flexBasis: d, ...p };
          return (0, n.jsx)("div", {
            style: g,
            className: i(o.flex, s, l, a, r, h, t),
            ...N,
            children: e,
          });
        }
      }
      (g.Child = N),
        (g.Direction = c),
        (g.Align = p),
        (g.Justify = u),
        (g.Wrap = d),
        (g.Gutter = h),
        (g.defaultProps = {
          direction: c.HORIZONTAL,
          justify: u.START,
          align: p.STRETCH,
          wrap: d.WRAP,
          shrink: 1,
          grow: 1,
          basis: "auto",
          style: {},
        });
    },
    844234: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getLocalizedLink: function () {
            return l;
          },
        });
      var n = s("792788");
      let l = e => {
        let t = n.default.getLocale().toLowerCase();
        return t in e ? e[t] : e.default;
      };
    },
    701800: function (e, t, s) {
      "use strict";
      let n;
      s.r(t),
        s.d(t, {
          isActiveCreator: function () {
            return o;
          },
        }),
        s("424973"),
        s("781738");
      var l = s("413886"),
        a = s.n(l),
        i = s("736671"),
        r = s.n(i);
      function o(e) {
        return t => {
          if (null != e)
            return null != r(t, { end: !1 }).exec(e.history.location.pathname);
        };
      }
      a();
    },
    141631: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getClass: function () {
            return l;
          },
        }),
        s("808653");
      var n = s("617258");
      function l(e, t) {
        for (
          var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), a = 2;
          a < s;
          a++
        )
          l[a - 2] = arguments[a];
        let i = l.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
          r = "".concat(t).concat(i),
          o = e[r];
        return null == o ? "" : o;
      }
    },
  },
]);
//# sourceMappingURL=5bfba258ff8f04255cce.js.map
