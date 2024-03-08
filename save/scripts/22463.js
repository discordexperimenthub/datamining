(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22463"],
  {
    60266: function (e, t, n) {
      e.exports = function (e, t, n, i) {
        for (var E = -1, o = null == e ? 0 : e.length; ++E < o; ) {
          var r = e[E];
          t(i, r, n(r), e);
        }
        return i;
      };
    },
    581628: function (e, t, n) {
      var i = n("978603");
      e.exports = function (e, t, n, E) {
        return (
          i(e, function (e, i, o) {
            t(E, e, n(e), o);
          }),
          E
        );
      };
    },
    278296: function (e, t, n) {
      var i = n("60266"),
        E = n("581628"),
        o = n("698273"),
        r = n("725502");
      e.exports = function (e, t) {
        return function (n, s) {
          var l = r(n) ? i : E,
            c = t ? t() : {};
          return l(n, e, o(s, 2), c);
        };
      };
    },
    816494: function (e, t, n) {
      var i = n("766665"),
        E = n("278296")(function (e, t, n) {
          i(e, n, t);
        });
      e.exports = E;
    },
    779807: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("528993");
      n.es(i, t);
    },
    170213: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SafetyHubView: function () {
            return c;
          },
          SafetyHubLinks: function () {
            return u;
          },
          SafetyHubPolicyNoticeKeys: function () {
            return T;
          },
          SafetySystemNotificationCtaType: function () {
            return I;
          },
          SafetySystemNotificationEmbedKeys: function () {
            return L;
          },
          SafetyHubAnalyticsActions: function () {
            return S;
          },
          SafetyHubAnalyticsActionSource: function () {
            return a;
          },
          AppealIngestionSignal: function () {
            return _;
          },
          AppealIngestionSignalOrder: function () {
            return C;
          },
          DEFAULT_MEDIA_MAX_WIDTH: function () {
            return f;
          },
          DEFAULT_MEDIA_MAX_HEIGHT: function () {
            return O;
          },
          AppealIngestionSlideTypes: function () {
            return A;
          },
          SlidesOrderDsaEligible: function () {
            return d;
          },
          SlidesOrderNonDsaEligible: function () {
            return R;
          },
        });
      var i,
        E,
        o,
        r,
        s,
        l,
        c,
        I,
        S,
        a,
        _,
        A,
        N = n("49111");
      ((i = c || (c = {})).SETTINGS = "SETTINGS"),
        (i.ACCOUNT_STANDING = "ACCOUNT_STANDING");
      class u {}
      (u.TOS_LINK = "https://discord.com/terms"),
        (u.COMMUNITY_GUIDELINES = "https://discord.com/guidelines"),
        (u.APPEALS_LINK =
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"),
        (u.WARNING_SYSTEM_HELPCENTER_LINK =
          "https://support.discord.com/hc/articles/18210965981847"),
        (u.AGE_VERIFICATION_LINK =
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"),
        (u.SPAM_LINK =
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
      class T {}
      (T.CLASSIFICATION_ID = "classification_id"),
        (T.INCIDENT_TIMESTAMP = "incident_time"),
        ((E = I || (I = {})).POLICY_VIOLATION_DETAIL =
          "policy_violation_detail"),
        (E.LEARN_MORE_LINK = "learn_more_link");
      class L {}
      (L.ICON_TYPE = "icon_type"),
        (L.HEADER = "header"),
        (L.BODY = "body"),
        (L.CTAS = "ctas"),
        (L.TIMESTAMP = "timestamp"),
        (L.THEME = "theme"),
        (L.CLIENT_VERSION_MESSAGE = "client_version_message"),
        (L.LEARN_MORE_LINK = "learn_more_link"),
        (L.CLASSIFICATION_ID = "classification_id"),
        ((o = S || (S = {}))[(o.ViewViolationDetail = 0)] =
          "ViewViolationDetail"),
        (o[(o.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (o[(o.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (o[(o.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (o[(o.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (o[(o.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (o[(o.ClickCommunityGuidelinesLink = 6)] =
          "ClickCommunityGuidelinesLink"),
        (o[(o.ClickWarningSystemHelpcenterLink = 7)] =
          "ClickWarningSystemHelpcenterLink"),
        ((r = a || (a = {}))[(r.SystemDM = 0)] = "SystemDM"),
        (r[(r.StandingTab = 1)] = "StandingTab"),
        (r[(r.AppealIngestion = 2)] = "AppealIngestion"),
        Object.freeze({
          SPEED_BUMP: N.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: N.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION:
            N.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: N.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: N.AnalyticsSections.APPEAL_INGESTION_THANKS,
          SPAM: N.AnalyticsSections.APPEAL_INGESTION_SPAM,
        }),
        ((s = _ || (_ = {}))[(s.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (s[(s.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (s[(s.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (s[(s.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let C = [0, 1, 2, 3],
        f = 372,
        O = 279;
      ((l = A || (A = {})).SPEED_BUMP = "speed-bump"),
        (l.COLLECT_SIGNAL = "collect-signal"),
        (l.CONFIRM_SUBMISSION = "confirm-submission"),
        (l.REQUEST_SENT = "request-sent"),
        (l.THANKS = "thanks");
      let d = {
          "speed-bump": { next: "collect-signal", prev: null },
          "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
          "confirm-submission": {
            next: "request-sent",
            prev: "collect-signal",
          },
          "request-sent": { next: null, prev: null },
        },
        R = {
          "collect-signal": { next: "thanks", prev: null },
          thanks: { next: null, prev: null },
        };
    },
    908539: function (e, t, n) {
      "use strict";
      var i, E, o, r, s, l, c, I, S, a, _;
      n.r(t),
        n.d(t, {
          ContentIdType: function () {
            return i;
          },
          AppealStatusType: function () {
            return E;
          },
          ActionType: function () {
            return r;
          },
          AccountStandingState: function () {
            return s;
          },
          ClassificationRequestState: function () {
            return l;
          },
        }),
        ((i || (i = {})).MESSAGE = "message"),
        ((c = E || (E = {}))[(c.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (c[(c.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (c[(c.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        ((I = o || (o = {}))[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (I[(I.UNKNOWN = 1)] = "UNKNOWN"),
        (I[(I.UNSOLICITED_PORNOGRAPHY = 100)] = "UNSOLICITED_PORNOGRAPHY"),
        (I[(I.NONCONSENSUAL_PORNOGRAPHY = 200)] = "NONCONSENSUAL_PORNOGRAPHY"),
        (I[(I.GLORIFYING_VIOLENCE = 210)] = "GLORIFYING_VIOLENCE"),
        (I[(I.HATE_SPEECH = 220)] = "HATE_SPEECH"),
        (I[(I.CRACKED_ACCOUNTS = 230)] = "CRACKED_ACCOUNTS"),
        (I[(I.ILLICIT_GOODS = 240)] = "ILLICIT_GOODS"),
        (I[(I.SOCIAL_ENGINEERING = 250)] = "SOCIAL_ENGINEERING"),
        (I[(I.TEST_CLASSIFICATION = 9e3)] = "TEST_CLASSIFICATION"),
        (I[(I.TEST_CLASSIFICATION_LOW = 9001)] = "TEST_CLASSIFICATION_LOW"),
        (I[(I.TEST_CLASSIFICATION_SEVERE = 9002)] =
          "TEST_CLASSIFICATION_SEVERE"),
        ((S = r || (r = {}))[(S.BAN = 0)] = "BAN"),
        (S[(S.TEMP_BAN = 1)] = "TEMP_BAN"),
        (S[(S.GLOBAL_QUARANTINE = 2)] = "GLOBAL_QUARANTINE"),
        (S[(S.REQUIRE_VERIFICATION = 3)] = "REQUIRE_VERIFICATION"),
        (S[(S.USER_WARNING = 4)] = "USER_WARNING"),
        (S[(S.USER_SPAMMER = 5)] = "USER_SPAMMER"),
        (S[(S.CHANNEL_SPAM = 6)] = "CHANNEL_SPAM"),
        (S[(S.MESSAGE_SPAM = 7)] = "MESSAGE_SPAM"),
        (S[(S.DISABLE_SUSPICIOUS_ACTIVITY = 8)] =
          "DISABLE_SUSPICIOUS_ACTIVITY"),
        (S[(S.LIMITED_ACCESS = 9)] = "LIMITED_ACCESS"),
        (S[(S.CHANNEL_SCHEDULE_DELETE = 10)] = "CHANNEL_SCHEDULE_DELETE"),
        (S[(S.MESSAGE_CONTENT_REMOVAL = 11)] = "MESSAGE_CONTENT_REMOVAL"),
        (S[(S.GUILD_DISABLE_INVITE = 12)] = "GUILD_DISABLE_INVITE"),
        (S[(S.USER_CONTENT_REMOVAL = 13)] = "USER_CONTENT_REMOVAL"),
        (S[(S.USER_USERNAME_MANGLE = 14)] = "USER_USERNAME_MANGLE"),
        (S[(S.GUILD_LIMITED_ACCESS = 15)] = "GUILD_LIMITED_ACCESS"),
        (S[(S.USER_MESSAGE_REMOVAL = 16)] = "USER_MESSAGE_REMOVAL"),
        (S[(S.GUILD_DELETE = 20)] = "GUILD_DELETE"),
        ((a = s || (s = {}))[(a.ALL_GOOD = 100)] = "ALL_GOOD"),
        (a[(a.LIMITED = 200)] = "LIMITED"),
        (a[(a.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (a[(a.AT_RISK = 400)] = "AT_RISK"),
        (a[(a.SUSPENDED = 500)] = "SUSPENDED"),
        ((_ = l || (l = {}))[(_.PENDING = 0)] = "PENDING"),
        (_[(_.SUCCESS = 1)] = "SUCCESS"),
        (_[(_.FAILED = 2)] = "FAILED");
    },
    736393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getClassificationRelativeIncidentTime: function () {
            return S;
          },
          getAttachmentFilename: function () {
            return a;
          },
          parseMessageEmbedForProps: function () {
            return _;
          },
          isFlaggedContentEmpty: function () {
            return A;
          },
          getAppealSignalDisplayText: function () {
            return N;
          },
          capitalizeText: function () {
            return u;
          },
          isGuildClassification: function () {
            return T;
          },
          getRequestReviewErrorFromCode: function () {
            return L;
          },
        }),
        n("808653");
      var i = n("866227"),
        E = n.n(i),
        o = n("651693"),
        r = n("908539"),
        s = n("170213"),
        l = n("49111"),
        c = n("894488"),
        I = n("782340");
      function S(e) {
        return E().to(E(e));
      }
      function a(e) {
        var t, n;
        return (0, o.isImageFile)(e.filename) || (0, o.isVideoFile)(e.filename)
          ? ""
              .concat(c.SPOILER_ATTACHMENT_PREFIX)
              .concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
          : null !== (n = e.filename) && void 0 !== n
            ? n
            : "";
      }
      function _(e) {
        var t, n, i, E;
        if (null == e.fields) return;
        let o = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
        return {
          header:
            null !== (t = o[s.SafetySystemNotificationEmbedKeys.HEADER]) &&
            void 0 !== t
              ? t
              : "",
          icon: o[s.SafetySystemNotificationEmbedKeys.ICON_TYPE],
          body:
            null !== (n = o[s.SafetySystemNotificationEmbedKeys.BODY]) &&
            void 0 !== n
              ? n
              : "",
          ctas: (null !== (i = o[s.SafetySystemNotificationEmbedKeys.CTAS]) &&
          void 0 !== i
            ? i
            : ""
          )
            .split(",")
            .filter(e => "" !== e),
          timestamp: parseFloat(
            null !== (E = o[s.SafetySystemNotificationEmbedKeys.TIMESTAMP]) &&
              void 0 !== E
              ? E
              : 0
          ),
          theme: o[s.SafetySystemNotificationEmbedKeys.THEME],
          learn_more_link:
            o[s.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
          classification_id:
            o[s.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID],
        };
      }
      function A(e) {
        if (e.type === r.ContentIdType.MESSAGE)
          return "" === e.content && 0 === e.attachments.length;
        return !0;
      }
      let N = e => {
          let t = {
            [s.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]:
              I.default.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [s.AppealIngestionSignal.TOO_STRICT_UNFAIR]:
              I.default.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [s.AppealIngestionSignal.DONT_AGREE_PENALTY]:
              I.default.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [s.AppealIngestionSignal.SOMETHING_ELSE]:
              I.default.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE,
          };
          return t[e];
        },
        u = e =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function T(e) {
        return null != e && null != e.guild_metadata;
      }
      let L = e => {
        if (e === l.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION)
          return I.default.Messages
            .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
        return I.default.Messages
          .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
      };
    },
    854908: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var E = n("446674"),
        o = n("77078"),
        r = n("393414"),
        s = n("271938"),
        l = n("489622"),
        c = n("861348"),
        I = n("170213"),
        S = n("49111"),
        a = n("782340"),
        _ = n("97911");
      function A() {
        return (0, i.jsxs)(l.default, {
          color: l.NoticeColors.DANGER,
          className: _.nagbar,
          children: [
            (0, i.jsx)(o.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: a.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR,
            }),
            (0, i.jsx)(l.NoticeButtonAnchor, {
              href: I.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children:
                  a.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA,
              }),
            }),
          ],
        });
      }
      function N() {
        return (0, i.jsx)("div", {
          className: _.pageContainer,
          children: (0, i.jsx)(c.default, {}),
        });
      }
      function u() {
        let e = (0, E.useStateFromStores)([s.default], () =>
          s.default.getSuspendedUserToken()
        );
        return (
          null == e && (0, r.transitionTo)(S.Routes.LOGIN),
          (0, i.jsxs)("div", {
            className: _.container,
            children: [(0, i.jsx)(A, {}), (0, i.jsx)(N, {})],
          })
        );
      }
    },
    300113: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var E = n("469563"),
        o = n("769174"),
        r = n("75196"),
        s = (0, E.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: E = "currentColor",
              className: o,
              foreground: s,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, r.default)(l),
              className: o,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: s,
                fill: E,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.722 3.00098H21C21.553 3.00098 22 3.44898 22 4.00098V8.00098C22 8.30498 21.861 8.59298 21.625 8.78198L16.696 12.724C15.794 13.86 14.49 14.659 13 14.911V16.001H15C15.553 16.001 16 16.449 16 17.001V19.001H8V17.001C8 16.449 8.447 16.001 9 16.001H11V14.911C9.51 14.659 8.206 13.86 7.304 12.724L2.375 8.78198C2.139 8.59298 2 8.30498 2 8.00098V4.00098C2 3.44898 2.447 3.00098 3 3.00098H6.278C6.625 2.40598 7.263 2.00098 8 2.00098H16C16.738 2.00098 17.375 2.40598 17.722 3.00098ZM4 5.00098V7.52098L6.006 9.12598C6.006 9.10435 6.00448 9.08348 6.00297 9.06274C6.00148 9.04224 6 9.02185 6 9.00098V5.00098H4ZM17.994 9.12698L20 7.52098V5.00098H18V9.00098C18 9.02173 17.9985 9.042 17.9971 9.0625C17.9955 9.08349 17.994 9.10472 17.994 9.12698ZM7 20.001H17V22.001H7V20.001Z",
              }),
            });
          },
          o.TrophyIcon,
          void 0,
          { size: 24 }
        );
    },
    489622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NoticeColors: function () {
            return _;
          },
          NoticeButton: function () {
            return A;
          },
          PrimaryCTANoticeButton: function () {
            return N;
          },
          NoticeButtonAnchor: function () {
            return u;
          },
          NoticeCloseButton: function () {
            return T;
          },
          default: function () {
            return L;
          },
        });
      var i = n("37983");
      n("884691");
      var E = n("414456"),
        o = n.n(E),
        r = n("394846"),
        s = n("77078"),
        l = n("945330"),
        c = n("599110"),
        I = n("49111"),
        S = n("782340"),
        a = n("125792");
      let _ = Object.freeze({
        DEFAULT: a.colorDefault,
        NEUTRAL: a.colorNeutral,
        BRAND: a.colorBrand,
        WARNING: a.colorWarning,
        DANGER: a.colorDanger,
        INFO: a.colorInfo,
        STREAMER_MODE: a.colorStreamerMode,
        CUSTOM: a.colorCustom,
        SPOTIFY: a.colorSpotify,
        PLAYSTATION: a.colorPlayStation,
        PREMIUM_TIER_0: a.colorPremiumTier0,
        PREMIUM_TIER_1: a.colorPremiumTier1,
        PREMIUM_TIER_2: a.colorPremiumTier2,
      });
      function A(e) {
        let { children: t, className: n, minor: E = !1, ...r } = e;
        return (0, i.jsx)(s.FocusRing, {
          children: (0, i.jsx)("button", {
            className: o(a.button, n, { [a.buttonMinor]: E }),
            ...r,
            children: t,
          }),
        });
      }
      function N(e) {
        let {
          children: t,
          noticeType: n,
          additionalTrackingProps: E,
          ...o
        } = e;
        return (0, i.jsx)(A, {
          ...o,
          onClick: e => {
            var t, i;
            null != o.onClick && o.onClick(e),
              (t = n),
              (i = E),
              null != t &&
                c.default.track(
                  I.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED,
                  { notice_type: t, ...i }
                );
          },
          children: t,
        });
      }
      function u(e) {
        let { children: t, href: n, ...E } = e;
        return (0, i.jsx)(s.Anchor, {
          ...E,
          className: a.button,
          href: n,
          children: t,
        });
      }
      function T(e) {
        let { onClick: t, noticeType: n } = e;
        return (0, i.jsx)(s.Clickable, {
          focusProps: { offset: 6 },
          className: a.closeButton,
          onClick: () => {
            var e;
            t(),
              null != (e = n) &&
                c.default.track(I.AnalyticEvents.APP_NOTICE_CLOSED, {
                  notice_type: e,
                });
          },
          "aria-label": S.default.Messages.DISMISS,
          children: (0, i.jsx)(l.default, {
            className: a.closeIcon,
            width: 18,
            height: 18,
          }),
        });
      }
      function L(e) {
        let { color: t = _.DEFAULT, className: n, style: E, children: s } = e;
        return (0, i.jsx)("div", {
          className: o(a.notice, { [a.isMobile]: r.isMobile }, n, t),
          style: null != E ? E : void 0,
          children: s,
        });
      }
    },
    528993: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          WarningIcon: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var E = n("669491"),
        o = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = E.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, o.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=f164bc122b772e671e11.js.map
