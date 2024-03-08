(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75519"],
  {
    242412: function (e, s, t) {
      "use strict";
      e.exports = t.p + "29306de8953471954035.svg";
    },
    846770: function (e, s, t) {
      "use strict";
      e.exports = t.p + "9cf8c36deaa3dc7b8d65.svg";
    },
    621133: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return n;
          },
        });
      var a = t("706530"),
        l = t("782340");
      function n(e, s) {
        let t = [
          {
            value: a.StreamIssueReportReasons.BLACK_SCREEN,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_BLACK
              : l.default.Messages.STREAM_REPORT_BLACK,
          },
          {
            value: a.StreamIssueReportReasons.BLURRY,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_BLURRY
              : l.default.Messages.STREAM_REPORT_BLURRY,
          },
          {
            value: a.StreamIssueReportReasons.LAGGING,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_LAGGING
              : l.default.Messages.STREAM_REPORT_LAGGING,
          },
          {
            value: a.StreamIssueReportReasons.OUT_OF_SYNC,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC
              : l.default.Messages.STREAM_REPORT_OUT_OF_SYNC,
          },
          {
            value: a.StreamIssueReportReasons.AUDIO_MISSING,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING
              : l.default.Messages.STREAM_REPORT_AUDIO_MISSING,
          },
          {
            value: a.StreamIssueReportReasons.AUDIO_POOR,
            label: s
              ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_POOR
              : l.default.Messages.STREAM_REPORT_AUDIO_POOR,
          },
          {
            value: a.StreamIssueReportReasons.STREAM_STOPPED,
            label:
              l.default.Messages
                .STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY,
          },
          {
            value: a.StreamIssueReportReasons.OTHER,
            label: l.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
          },
        ];
        return t;
      }
    },
    435285: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return n;
          },
        });
      var a = t("599110"),
        l = t("49111");
      function n(e) {
        let {
          problem: s,
          stream: t,
          feedback: n,
          streamApplication: u,
          analyticsData: o,
          location: r,
          rating: R = null,
        } = e;
        a.default.track(l.AnalyticEvents.STREAM_REPORT_PROBLEM, {
          reason: s,
          streamer_user_id: t.ownerId,
          stream_channel_id: t.channelId,
          guild_id: t.guildId,
          application_id: null != u ? u.id : null,
          application_name: null != u ? u.name : null,
          location: r,
          rating: R,
          feedback: n,
          ...o,
        });
      }
    },
    385042: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return o;
          },
        });
      var a = t("884691"),
        l = t("69927"),
        n = t("773336"),
        u = t("782340");
      function o() {
        return (
          a.useEffect(() => {
            !n.isPlatformEmbedded &&
              (0, l.flashPageTitle)({
                messages: [
                  u.default.Messages.GO_LIVE_HEY,
                  u.default.Messages.GO_LIVE_LOOK,
                  u.default.Messages.GO_LIVE_LISTEN,
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    485857: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return M;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        n = t("77078"),
        u = t("145131"),
        o = t("621133"),
        r = t("435285"),
        R = t("385042"),
        d = t("782340"),
        E = t("489362"),
        i = t("47436");
      class _ extends l.PureComponent {
        render() {
          let { isStreamer: e, transitionState: s, onClose: t } = this.props,
            { problem: l } = this.state;
          return (0, a.jsxs)(n.ModalRoot, {
            transitionState: s,
            size: n.ModalSize.SMALL,
            "aria-label": d.default.Messages.STREAM_REPORT_A_PROBLEM,
            children: [
              (0, a.jsx)(R.default, {}),
              (0, a.jsxs)(n.ModalHeader, {
                separator: !1,
                children: [
                  (0, a.jsx)(n.ModalCloseButton, {
                    className: i.closeButton,
                    onClick: t,
                  }),
                  (0, a.jsx)(n.FormTitle, {
                    tag: "h2",
                    className: i.title,
                    children: d.default.Messages.STREAM_REPORT_A_PROBLEM,
                  }),
                ],
              }),
              (0, a.jsxs)(n.ModalContent, {
                className: i.content,
                children: [
                  (0, a.jsx)(n.Text, {
                    variant: "text-sm/normal",
                    children: d.default.Messages.STREAM_REPORT_PROBLEM_BODY,
                  }),
                  (0, a.jsx)(n.FormItem, {
                    title: d.default.Messages.STREAM_REPORT_LABEL,
                    children: (0, a.jsx)(n.SingleSelect, {
                      placeholder: d.default.Messages.STREAM_REPORT_PLACEHOLDER,
                      options: (0, o.default)(e, !1),
                      onChange: this.handleChanged,
                      value: l,
                      maxVisibleItems: 4,
                    }),
                  }),
                  (0, a.jsx)("div", { className: E.art }),
                ],
              }),
              (0, a.jsxs)(n.ModalFooter, {
                className: i.footer,
                children: [
                  (0, a.jsx)(n.Button, {
                    color: n.Button.Colors.BRAND,
                    disabled: null == l,
                    onClick: this.handleSubmit,
                    children: d.default.Messages.STREAM_REPORT_SUBMIT,
                  }),
                  (0, a.jsx)(u.default, {
                    children: (0, a.jsx)(n.Button, {
                      look: n.Button.Looks.LINK,
                      color: n.Button.Colors.PRIMARY,
                      size: n.Button.Sizes.NONE,
                      onClick: t,
                      children: d.default.Messages.CANCEL,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { problem: null }),
            (this.handleChanged = e => {
              this.setState({ problem: null != e ? e : null });
            }),
            (this.handleSubmit = () => {
              let {
                  stream: e,
                  streamApplication: s,
                  analyticsData: l,
                  onClose: u,
                } = this.props,
                { problem: o } = this.state;
              (0, r.default)({
                problem: o,
                stream: e,
                feedback: "",
                streamApplication: s,
                analyticsData: l,
                location: "Stream",
              }),
                u(),
                (0, n.openModalLazy)(async () => {
                  let { default: e } = await t
                    .el("874600")
                    .then(t.bind(t, "874600"));
                  return s =>
                    (0, a.jsx)(e, {
                      body: d.default.Messages.STREAM_REPORTED_BODY,
                      ...s,
                    });
                });
            });
        }
      }
      var M = _;
    },
  },
]);
//# sourceMappingURL=0ede2d527fa3e0377a95.js.map
