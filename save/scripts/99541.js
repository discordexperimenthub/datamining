(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99541"],
  {
    92693: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0c1a82e7889ced7b3bf1.svg";
    },
    428958: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("884691"),
        l = n("714617"),
        s = n.n(l),
        r = n("995008"),
        o = n.n(r),
        i = n("759843"),
        u = n("913144"),
        d = n("42203"),
        c = n("18494"),
        C = n("162771"),
        f = n("599110"),
        T = n("716241"),
        h = n("939011");
      let _ = (0, i.trackMaker)({
        analyticEventConfigs: f.AnalyticEventConfigs,
        dispatcher: u.default,
        TRACK_ACTION_NAME: "TRACK",
      });
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { disableTrack: !1, trackOnInitialLoad: !1 },
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = a.useRef(),
          r = a.useRef();
        a.useEffect(
          () => {
            let a = !s(l.current, e);
            a && (l.current = e);
            let u = !s(r.current, n);
            if ((u && (r.current = n), !a && !u)) return;
            let p = { ...e, sequenceId: o("impression_") };
            return (
              !(function (e) {
                var t, n;
                let a =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  { name: l, type: s, properties: r } = e;
                if (
                  e.type === i.ImpressionTypes.MODAL &&
                  null == e.name &&
                  (0, h.getImpressionStack)().some(e => {
                    var t;
                    return null === (t = e._stackContext) || void 0 === t
                      ? void 0
                      : t.isSlide;
                  })
                )
                  return;
                (0, h.setCurrentImpression)(e);
                let o =
                    null !== (t = null == r ? void 0 : r.guild_id) &&
                    void 0 !== t
                      ? t
                      : C.default.getGuildId(),
                  u =
                    null !== (n = null == r ? void 0 : r.channel_id) &&
                    void 0 !== n
                      ? n
                      : c.default.getChannelId(o),
                  p = (0, f.expandEventProperties)({
                    impression_type: s,
                    location: (0, h.getLocation)(),
                    ...(0, T.collectGuildAnalyticsMetadata)(o),
                    ...(0, T.collectChannelAnalyticsMetadata)(
                      d.default.getChannel(u)
                    ),
                    ...r,
                  });
                if (a) {
                  (0, h.setDebugTrackedData)(null, null);
                  return;
                }
                null != l && null != s && ((0, f.debugLogEvent)(l, p), _(l, p)),
                  (0, h.setDebugTrackedData)(l, p);
              })(p, t.disableTrack),
              () => {
                null != p && (0, h.cleanupImpression)(p);
              }
            );
          },
          t.trackOnInitialLoad ? [] : void 0
        );
      }
    },
    644512: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("759843"),
        r = n("77078"),
        o = n("599417"),
        i = n("428958"),
        u = n("782340"),
        d = n("829504"),
        c = n("92693");
      function C(e) {
        let {
            transitionState: t,
            onFormSubmit: n,
            onResend: C,
            onSuccess: f,
            onClose: T,
            headerText: h,
            confirmButtonText: _,
            confirmButtonColor: p,
            impressionName: E,
          } = e,
          [g, m] = l.useState(!1),
          [I, M] = l.useState(""),
          [N, A] = l.useState(!1),
          [S, v] = l.useState(null),
          x = l.useRef(null);
        (0, i.default)({ type: s.ImpressionTypes.MODAL, name: E });
        let R = async e => {
            e.preventDefault(), v(null), m(!0);
            try {
              let e = await n(I);
              null != f && f(e), T();
            } catch (t) {
              let e = new o.default(t);
              v(e.getAnyErrorMessage());
            } finally {
              m(!1);
            }
          },
          y = async () => {
            if (!N) {
              A(!0);
              try {
                await C(),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      u.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT,
                      r.ToastType.SUCCESS
                    )
                  );
              } catch (n) {
                let e = new o.default(n),
                  t = e.getAnyErrorMessage();
                null != t &&
                  (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE));
              } finally {
                A(!1);
              }
            }
          };
        return (0, a.jsx)(r.ModalRoot, {
          transitionState: t,
          children: (0, a.jsxs)("form", {
            onSubmit: R,
            children: [
              (0, a.jsx)("img", { alt: "", className: d.headerImage, src: c }),
              (0, a.jsxs)(r.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                  (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.title,
                    children: h,
                  }),
                  (0, a.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: d.subtitle,
                    children:
                      u.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE,
                  }),
                  (0, a.jsx)(r.ModalCloseButton, {
                    onClick: T,
                    className: d.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)(r.ModalContent, {
                children: [
                  (0, a.jsx)(r.FormItem, {
                    title:
                      u.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                    error: S,
                    children: (0, a.jsx)(r.TextInput, {
                      value: I,
                      onChange: M,
                      inputRef: x,
                    }),
                  }),
                  (0, a.jsx)(r.Text, {
                    className: d.help,
                    variant: "text-sm/normal",
                    children:
                      u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format(
                        { onResend: y }
                      ),
                  }),
                ],
              }),
              (0, a.jsxs)(r.ModalFooter, {
                children: [
                  (0, a.jsx)(r.Button, {
                    type: "submit",
                    color: null != p ? p : r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MEDIUM,
                    submitting: g,
                    children: _,
                  }),
                  (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.PRIMARY,
                    onClick: T,
                    children: u.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7b63220ac698e9a6f3bc.js.map
