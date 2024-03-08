(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82329"],
  {
    7115: function (e, t, a) {
      "use strict";
      e.exports = a.p + "939a6d418697a2811ab8.png";
    },
    571034: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("474643"),
        l = a("254490"),
        r = a("412861"),
        s = a("626301"),
        o = a("789946"),
        _ = a("646718"),
        u = a("49111"),
        E = a("782340");
      function d(e) {
        var t;
        let { channel: d, onClose: f, content: p, ...A } = e;
        function L() {
          f(), (0, s.navigateToPremiumMarketingPage)(!0);
        }
        return (0, i.jsx)(o.default, {
          artURL: a("7115"),
          type: _.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
          title:
            E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
          body: E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format(
            { maxLength: u.MAX_MESSAGE_LENGTH, onLearnMore: L }
          ),
          context:
            E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format(
              { maxLength: u.MAX_MESSAGE_LENGTH }
            ),
          glowUp:
            E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format(
              { onLearnMore: L }
            ),
          analyticsSource: {
            page:
              (null == (t = d) ? void 0 : t.getGuildId()) != null
                ? u.AnalyticsPages.GUILD_CHANNEL
                : (null == t ? void 0 : t.isGroupDM()) ||
                    (null == t ? void 0 : t.isPrivate())
                  ? u.AnalyticsPages.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: u.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
            object: u.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: f,
          secondaryCTA:
            E.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
          onSecondaryClick: function () {
            f();
            let e = new Blob([p], { type: "text/plain" });
            (0, r.promptToUpload)(
              [(0, l.makeFile)(e, "message.txt")],
              d,
              n.DraftType.ChannelMessage,
              { requireConfirm: !0, showLargeMessageDialog: !0 }
            );
          },
          ...A,
        });
      }
    },
    412861: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          showUploadFileSizeExceededError: function () {
            return m;
          },
          promptToUpload: function () {
            return g;
          },
        }),
        a("424973"),
        a("222007"),
        a("70102");
      var i = a("255397"),
        n = a("81594"),
        l = a("783480"),
        r = a("336522"),
        s = a("966724"),
        o = a("716241"),
        _ = a("191145"),
        u = a("585722"),
        E = a("697218"),
        d = a("599110"),
        f = a("254490"),
        p = a("719923"),
        A = a("834021"),
        L = a("49111"),
        c = a("894488"),
        M = a("646718"),
        T = a("782340");
      function m(e, t) {
        let a = E.default.getCurrentUser(),
          i = e.getGuildId(),
          n = f.maxFileSize(i),
          l = [],
          s = 0,
          _ = 0,
          u = 0,
          d = [];
        for (let e of t)
          (u += 1),
            (s += e.size),
            l.push(e.size),
            e.size > _ && (_ = e.size),
            null != e.type ? d.push(e.type) : d.push("unknown");
        if (_ > n) {
          (0, o.trackWithMetadata)(L.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: s,
            num_attachments: u,
            error_type: c.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: d,
          }),
            (0, r.openUploadError)({
              title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, A.getErrorHelp)(a, i),
              showPremiumUpsell: !(0, p.isPremiumExactly)(
                a,
                M.PremiumTypes.TIER_2
              ),
              fileSize: _,
            });
          return;
        }
        (0, r.openUploadError)({
          title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: T.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: f.sizeString(f.getMaxRequestSize()),
          }),
        });
      }
      function g(e, t, a) {
        let {
          filesMetadata: o,
          requireConfirm: E = !0,
          showLargeMessageDialog: f = !1,
          isThumbnail: p = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != o && o.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let c = t.getGuildId();
        if ((0, A.filesExceedUploadLimits)(e, c)) {
          m(t, e);
          return;
        }
        if (u.default.getUploadCount(t.id, a) + e.length > L.MAX_UPLOAD_COUNT) {
          (0, r.openUploadError)({
            title: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: L.MAX_UPLOAD_COUNT,
            }),
          }),
            d.default.track(L.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: u.default.getUploadCount(t.id, a),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === L.ChannelTypes.GUILD_VOICE ||
            t.type === L.ChannelTypes.GUILD_STAGE_VOICE) &&
            !_.default.getChatOpen(t.id) &&
            i.default.updateChatOpen(t.id, !0),
          E)
        ) {
          let i = Array.from(e).map((e, t) => ({
            file: e,
            platform: s.UploadPlatform.WEB,
            isThumbnail: p,
            ...(null == o ? void 0 : o[t]),
          }));
          n.default.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: a,
          });
        } else
          l.default.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: a,
            isThumbnail: p,
            filesMetadata: o,
          });
      }
    },
    834021: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getErrorHelp: function () {
            return o;
          },
          filesExceedUploadLimits: function () {
            return _;
          },
          getWebUploadFiles: function () {
            return u;
          },
        }),
        a("808653"),
        a("424973");
      var i = a("966724"),
        n = a("254490"),
        l = a("719923"),
        r = a("646718"),
        s = a("782340");
      function o(e, t) {
        let a = n.sizeString(n.maxFileSize(t));
        return l.default.isPremium(e, r.PremiumTypes.TIER_2)
          ? s.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: a })
          : l.default.isPremium(e, r.PremiumTypes.TIER_1)
            ? s.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format(
                { maxSize: a }
              )
            : s.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: a,
              });
      }
      function _(e, t) {
        return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (
            t.item.platform === i.UploadPlatform.WEB && e.push(t.item.file), e
          ),
          []
        );
      }
    },
  },
]);
//# sourceMappingURL=f5d14b34c0154609c81e.js.map
