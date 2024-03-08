(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34345"],
  {
    660617: function (e, n, t) {
      "use strict";
      e.exports = t.p + "15f0716f5c45b340dbd6.svg";
    },
    329786: function (e, n, t) {
      "use strict";
      e.exports = t.p + "152d4ec15aff5a5389d5.svg";
    },
    823286: function (e, n, t) {
      "use strict";
      e.exports = t.p + "7d57f2b13996b75a8d7d.svg";
    },
    104528: function (e, n, t) {
      "use strict";
      e.exports = t.p + "00f710da7f31fde658db.svg";
    },
    790971: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PlayStationLinkDiscordConsent: function () {
            return d;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("747651"),
        s = t("106076"),
        a = t("755993"),
        r = t("49111"),
        l = t("171644");
      function d(e) {
        let {
            platformType: n,
            authToken: t,
            onContinue: d,
            onError: u,
            onClose: C,
          } = e,
          c =
            n === r.PlatformTypes.PLAYSTATION_STAGING
              ? s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID
              : s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID,
          T =
            n === r.PlatformTypes.PLAYSTATION_STAGING
              ? o.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING
              : o.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
        return (0, i.jsx)(a.TwoWayLinkDiscordConsent, {
          platformType: n,
          clientId: c,
          scopes: l.PLAYSTATION_CLIENT_SCOPES,
          authToken: t,
          onContinue: d,
          onError: u,
          onClose: C,
          redirectUri: T,
        });
      }
    },
    689625: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PlayStationLinkError: function () {
            return a;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("871988"),
        s = t("782340");
      function a(e) {
        let { onContinue: n, onClose: t } = e;
        return (0, i.jsx)(o.TwoWayLinkError, {
          title: s.default.Messages.CONNECT_CONSOLE_ERROR_TITLE,
          body: s.default.Messages.CONNECT_PS_ERROR_BODY,
          onClose: t,
          onContinue: n,
        });
      }
    },
    38167: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PlayStationLinkLanding: function () {
            return T;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("38828"),
        s = t("157357"),
        a = t("701909"),
        r = t("634644"),
        l = t("106390"),
        d = t("49111"),
        u = t("782340"),
        C = t("823286");
      function c() {
        let e = [
            u.default.Messages.PS_VALUE_PROP_VOICE,
            u.default.Messages.PS_VALUE_PROP_GAME,
          ],
          n = [u.default.Messages.PS_VALUE_PROP_GAME];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.ValuePropContainer, {
              children: (0, i.jsx)(l.BulletedValueProp, {
                icon: (0, i.jsx)(s.default, {}),
                title: u.default.Messages.PS5,
                bulletPoints: e,
              }),
            }),
            (0, i.jsx)(l.ValuePropContainer, {
              children: (0, i.jsx)(l.BulletedValueProp, {
                icon: (0, i.jsx)(o.default, {}),
                title: u.default.Messages.PS4,
                bulletPoints: n,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { platformType: n, onContinue: t, onClose: o } = e;
        return (0, i.jsx)(r.TwoWayLinkLanding, {
          platformType: n,
          headerConnect: u.default.Messages.CONNECT_PS_LANDING_TITLE,
          headerReconnect: u.default.Messages.RECONNECT_PS_LANDING_TITLE,
          body: u.default.Messages.CONNECT_PS_LANDING_BODY,
          onClose: o,
          onContinue: t,
          img: (0, i.jsx)("img", { src: C, width: 230, height: 138, alt: "" }),
          valueProps: (0, i.jsx)(c, {}),
          learnMoreLink: a.default.getArticleURL(
            d.HelpdeskArticles.PS_CONNECTION
          ),
        });
      }
    },
    59833: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return T;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("77078"),
        s = t("997511"),
        a = t("790971"),
        r = t("689625"),
        l = t("38167"),
        d = t("437679"),
        u = t("251782"),
        C = t("598347"),
        c = t("221818");
      function T(e) {
        let {
            transitionState: n,
            onClose: t,
            analyticsLocation: T,
            platformType: S,
          } = e,
          {
            slide: f,
            gotoNext: P,
            gotoError: N,
            handleWaitingForConnection: A,
            handleAuthToken: L,
            expectedCallbackState: _,
            callbackData: p,
          } = (0, s.useTwoWayLinkModalSlideManager)(T, S);
        return (0, i.jsx)(o.ModalRoot, {
          className: c.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, i.jsxs)(o.Slides, {
            activeSlide: f,
            width: 408,
            children: [
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.LANDING,
                children: (0, i.jsx)(l.PlayStationLinkLanding, {
                  platformType: S,
                  onContinue: P,
                  onClose: t,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
                  platformType: S,
                  isWaitingForConnection: !1,
                  onWaitingForConnection: A,
                  onAuthToken: L,
                  onError: N,
                  onClose: t,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
                  platformType: S,
                  isWaitingForConnection: !0,
                  expectedCallbackState: _,
                  onAuthToken: L,
                  onError: N,
                  onClose: t,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                children: (0, i.jsx)(a.PlayStationLinkDiscordConsent, {
                  platformType: S,
                  authToken: p,
                  onContinue: P,
                  onError: N,
                  onClose: t,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.ERROR,
                children: (0, i.jsx)(r.PlayStationLinkError, {
                  onContinue: P,
                  onClose: t,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: C.TwoWayLinkModalSlideTypes.SUCCESS,
                children: (0, i.jsx)(u.PlayStationLinkSuccess, { onClose: t }),
              }),
            ],
          }),
        });
      }
    },
    437679: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PlayStationLinkPreConnect: function () {
            return d;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("79528"),
        s = t("171644"),
        a = t("782340"),
        r = t("660617"),
        l = t("329786");
      function d(e) {
        let {
            platformType: n,
            isWaitingForConnection: t,
            onWaitingForConnection: d,
            expectedCallbackState: u,
            onAuthToken: C,
            onError: c,
            onClose: T,
          } = e,
          S = t
            ? (0, i.jsx)("img", {
                src: l,
                width: "180",
                height: "125",
                alt: "",
              })
            : (0, i.jsx)("img", {
                src: r,
                width: "180",
                height: "111",
                alt: "",
              }),
          f = t
            ? a.default.Messages.CONSOLE_PRECONNECT_TITLE_WAITING
            : a.default.Messages.PS_PRECONNECT_TITLE,
          P = t
            ? a.default.Messages.PS_PRECONNECT_BODY_WAITING
            : a.default.Messages.PS_PRECONNECT_BODY;
        return (0, i.jsx)(o.TwoWayLinkPreConnect, {
          platformType: n,
          isWaitingForConnection: t,
          onWaitingForConnection: d,
          expectedCallbackState: u,
          onAuthToken: C,
          onError: c,
          onClose: T,
          img: S,
          title: f,
          body: P,
          redirectDestination: s.PLAYSTATION_LINK_DEST_ORIGIN,
        });
      }
    },
    251782: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PlayStationLinkSuccess: function () {
            return r;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("451039"),
        s = t("782340"),
        a = t("104528");
      function r(e) {
        let { onClose: n } = e;
        return (0, i.jsx)(o.TwoWayLinkSuccess, {
          img: (0, i.jsx)("img", {
            src: a,
            width: "241 ",
            height: "118",
            alt: "",
          }),
          title: s.default.Messages.PS_LINK_SUCCESS_TITLE,
          body: s.default.Messages.PS_LINK_SUCCESS_BODY,
          onClose: n,
        });
      }
    },
    38828: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return s;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("75196");
      function s(e) {
        let {
          width: n = 24,
          height: t = 24,
          color: s = "currentColor",
          foreground: a,
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, o.default)(r),
          width: n,
          height: t,
          viewBox: "0 0 24 25",
          children: (0, i.jsx)("path", {
            className: a,
            fill: s,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.9598 11.9353C17.4729 11.6167 16.8191 11.2112 15.9803 11.2112C14.5817 11.2112 13.3483 12.1684 12.932 13.4612H0.525391L3.90301 7.61133H23.4748L21.3882 11.2261C21.2883 11.2162 21.1876 11.2112 21.0863 11.2112C20.2471 11.2112 19.5928 11.6167 19.1063 11.9353H17.9598ZM15.7138 18.3989C16.2002 17.8094 16.5066 17.2843 16.8108 16.7205H20.2546C20.5588 17.2843 20.8657 17.8094 21.3517 18.3989C21.6203 18.7193 22.1464 18.8611 22.4731 18.8611C22.7232 18.8611 23.5251 18.8611 23.4725 18.025C23.423 17.233 22.9077 14.1051 22.9041 14.0862C22.7421 13.2312 21.9515 12.5612 21.0862 12.5612C20.6117 12.5612 20.1933 12.8362 19.7794 13.1083C19.6878 13.1686 19.5963 13.2287 19.5045 13.2857H17.561C17.469 13.2287 17.3775 13.1684 17.2857 13.1081C16.872 12.8361 16.454 12.5612 15.9793 12.5612C15.1139 12.5612 14.3237 13.2312 14.1613 14.0862C14.1582 14.1051 13.6429 17.233 13.5934 18.025C13.5403 18.8611 14.3426 18.8611 14.5924 18.8611C14.9191 18.8611 15.446 18.7193 15.7138 18.3989Z",
            "aria-hidden": !0,
          }),
        });
      }
    },
    157357: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return s;
          },
        });
      var i = t("37983");
      t("884691");
      var o = t("75196");
      function s(e) {
        let {
          width: n = 24,
          height: t = 24,
          color: s = "currentColor",
          foreground: a,
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, o.default)(r),
          width: n,
          height: t,
          viewBox: "0 0 24 25",
          children: [
            (0, i.jsx)("path", {
              className: a,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: a,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: a,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    747651: function (e, n, t) {
      "use strict";
      var i, o;
      t.r(n),
        t.d(n, {
          ConsoleAuthorizationRedirectURIs: function () {
            return i;
          },
        }),
        t("222007"),
        ((o = i || (i = {})).PLAYSTATION =
          "https://discord.com/connections/playstation/link"),
        (o.PLAYSTATION_STAGING =
          "https://discord.com/connections/playstation-stg/link");
    },
    106076: function (e, n, t) {
      "use strict";
      var i, o;
      t.r(n),
        t.d(n, {
          ConsoleOAuthApplications: function () {
            return i;
          },
          ConsoleOAuthApplicationsSets: function () {
            return s;
          },
        }),
        t("222007"),
        ((o = i || (i = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (o.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (o.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let s = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
  },
]);
//# sourceMappingURL=8400b3f3be190176aa9d.js.map
