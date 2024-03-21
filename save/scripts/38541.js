(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38541"],
  {
    533806: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("224701");
      n.es(l, t);
    },
    795228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        u = n("895026"),
        o = n("36402");
      let r = {};
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, a.useStateFromStores)([o.default], () =>
            o.default.getRoleMemberCount(e)
          );
        return (
          l.useEffect(() => {
            if (null == e) return;
            let n = r[e],
              l = null != n && t > 0 && Date.now() - n < t;
            !l && ((r[e] = Date.now()), u.fetchMemberCounts(e));
          }, [e, t]),
          n
        );
      }
    },
    470055: function (e, t, n) {
      "use strict";
      let l, a, u, o, r;
      n.r(t),
        n.d(t, {
          InteractionModalState: function () {
            return i;
          },
          default: function () {
            return M;
          },
        });
      var s,
        i,
        c = n("627445"),
        d = n.n(c),
        f = n("446674"),
        I = n("913144"),
        p = n("819689"),
        m = n("798609"),
        T = n("274800"),
        C = n("718517");
      ((s = i || (i = {}))[(s.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (s[(s.ERRORED = 1)] = "ERRORED"),
        (s[(s.SUCCEEDED = 2)] = "SUCCEEDED");
      class h extends f.default.Store {
        getModalState(e) {
          return e !== l ? null : a;
        }
      }
      h.displayName = "InteractionModalStore";
      var M = new h(I.default, {
        LOGOUT: function () {
          return (l = null), (a = null), (u = null), (o = null), (r = null), !0;
        },
        INTERACTION_MODAL_CREATE: function (e) {
          let { nonce: t } = e;
          return (
            t === r &&
              (p.default.deleteMessage(o, u, !0),
              (u = null),
              (o = null),
              (r = null)),
            !1
          );
        },
        INTERACTION_IFRAME_MODAL_CREATE: function (e) {
          let { nonce: t } = e;
          return (
            t === r &&
              (p.default.deleteMessage(o, u, !0),
              (u = null),
              (o = null),
              (r = null)),
            !1
          );
        },
        INTERACTION_QUEUE: function (e) {
          let { messageId: t, nonce: n, data: s } = e;
          switch (s.interactionType) {
            case m.InteractionTypes.APPLICATION_COMMAND:
              return (u = t), (o = s.channelId), (r = n), !1;
            case m.InteractionTypes.MODAL_SUBMIT:
              return (
                d(
                  null == l || 1 === a || 2 === a,
                  "cannot submit multiple modals at once"
                ),
                (l = n),
                (a = 0),
                setTimeout(() => {
                  l === n && 0 === a && (0, T.setFailed)(n);
                }, 10 * C.default.Millis.SECOND),
                !0
              );
            default:
              return !1;
          }
        },
        INTERACTION_SUCCESS: function (e) {
          let { nonce: t } = e;
          return null != t && t === l && ((a = 2), !0);
        },
        INTERACTION_FAILURE: function (e) {
          let { nonce: t } = e;
          return null != t && t === l && ((a = 1), !0);
        },
      });
    },
    732523: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useModalState: function () {
            return A;
          },
          useIframeModalState: function () {
            return O;
          },
        }),
        n("222007"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660");
      var l = n("884691"),
        a = n("627445"),
        u = n.n(a),
        o = n("446674"),
        r = n("872717"),
        s = n("913144"),
        i = n("798609"),
        c = n("763898"),
        d = n("711562"),
        f = n("274800"),
        I = n("271938"),
        p = n("42203"),
        m = n("26989"),
        T = n("162771"),
        C = n("315102"),
        h = n("718517"),
        M = n("299039"),
        E = n("812684"),
        N = n("470055"),
        S = n("524094"),
        R = n("49111"),
        _ = n("782340");
      let v = e => {
        let t = !0;
        return (
          e.forEach(e => {
            !e() && (t = !1);
          }),
          t
        );
      };
      function g(e) {
        return l.useMemo(() => {
          let t = T.default.getGuildId(),
            n =
              null != t && null != e.bot
                ? m.default.getMember(t, e.bot.id)
                : void 0,
            l = C.default.getApplicationIconURL({
              id: e.id,
              icon: e.icon,
              botIconFirst: !0,
              bot: null != n ? e.bot : void 0,
            }),
            a = null != n && null != e.bot ? e.bot.username : e.name,
            u = (0, d.default)(e.id);
          return {
            applicationIconURL: l,
            applicationName: a,
            applicationBaseUrl: u,
          };
        }, [e.id, e.icon, e.name, e.bot]);
      }
      function A(e, t) {
        var n;
        let { application: a, customId: d, components: m, channelId: T } = e,
          C =
            null === (n = p.default.getChannel(T)) || void 0 === n
              ? void 0
              : n.guild_id,
          S = (0, c.default)(),
          [A, O] = l.useState(null),
          [y, D] = l.useState(null),
          b = (0, o.useStateFromStores)(
            [N.default],
            () => N.default.getModalState(y),
            [y]
          ),
          j = l.useMemo(
            () => (0, E.createComponents)(m, a.id, C),
            [m, a.id, C]
          ),
          L = l.useRef(new Set()),
          w = l.useCallback(() => {
            O(null),
              D(null),
              v(L.current) &&
                D(
                  (function (e, t) {
                    let n = M.default.fromTimestamp(Date.now()),
                      l = e.channelId,
                      a = p.default.getChannel(l);
                    u(null != a, "expected channel");
                    let o = x(e.customId, e.components, []);
                    (0, f.addQueued)(n, {
                      data: {
                        interactionType: i.InteractionTypes.MODAL_SUBMIT,
                      },
                    });
                    let s = () => {
                      (null == t || !t.aborted) &&
                        r.HTTP.post({
                          url: R.Endpoints.INTERACTIONS,
                          body: {
                            type: i.InteractionTypes.MODAL_SUBMIT,
                            application_id: e.application.id,
                            channel_id: a.id,
                            guild_id: a.guild_id,
                            data: {
                              id: e.id,
                              custom_id: e.customId,
                              components: o,
                            },
                            session_id: I.default.getSessionId(),
                            nonce: n,
                          },
                          signal: t,
                        }).catch(e => {
                          429 === e.status
                            ? setTimeout(
                                s,
                                e.body.retry_after * h.default.Millis.SECOND
                              )
                            : (0, f.setFailed)(n);
                        });
                    };
                    return s(), n;
                  })(e, S)
                );
          }, [S, e]);
        l.useEffect(() => {
          b === N.InteractionModalState.SUCCEEDED &&
            (s.default.dispatch({
              type: "CLEAR_INTERACTION_MODAL_STATE",
              id: d,
            }),
            t()),
            b === N.InteractionModalState.ERRORED &&
              O(_.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED);
        }, [y, b, t, d]);
        let { applicationIconURL: U, applicationName: B } = g(a);
        return {
          components: j,
          applicationIconURL: U,
          applicationName: B,
          submissionState: b,
          error: A,
          validators: L.current,
          onSubmit: w,
        };
      }
      function O(e) {
        let { application: t, customId: n } = e,
          {
            applicationIconURL: l,
            applicationName: a,
            applicationBaseUrl: o,
          } = g(t),
          r = p.default.getChannel(e.channelId);
        u(null != r, "channel should not be null");
        let s = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
          i = { instance_id: s, custom_id: n, channel_id: e.channelId };
        null != r.guild_id && "" !== r.guild_id && (i.guild_id = r.guild_id);
        let c = new URL(null != o ? o : "");
        c.pathname = e.iframePath;
        let d = c.toString();
        return {
          applicationIconURL: l,
          applicationName: a,
          applicationBaseUrl: o,
          queryParams: i,
          iframeUrl: d,
        };
      }
      let x = (e, t, n) =>
        t.map((t, l) => {
          let a = [...n, l];
          switch (t.type) {
            case i.ComponentType.ACTION_ROW:
              var o;
              return {
                type: t.type,
                components: x(
                  e,
                  null !== (o = t.components) && void 0 !== o ? o : [],
                  a
                ),
              };
            case i.ComponentType.INPUT_TEXT: {
              let n = S.default.getInteractionComponentState(e, a);
              return {
                type: t.type,
                custom_id: t.custom_id,
                value:
                  (null == n ? void 0 : n.type) === t.type ? n.value : null,
              };
            }
            case i.ComponentType.STRING_SELECT: {
              let n = S.default.getInteractionComponentState(e, a);
              return {
                type: t.type,
                custom_id: t.custom_id,
                values:
                  (null == n ? void 0 : n.type) === t.type ? n.values : null,
              };
            }
            default:
              u(!1, "unreachable");
          }
        });
    },
    394816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
          openInteractionModal: function () {
            return p;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        u = n("555158"),
        o = n("258078"),
        r = n("307311"),
        s = n("470055"),
        i = n("732523"),
        c = n("383247"),
        d = n("782340"),
        f = n("343225");
      function I(e) {
        let { customId: t, title: n, onClose: I, transitionState: p } = e,
          {
            components: m,
            applicationIconURL: T,
            applicationName: C,
            submissionState: h,
            error: M,
            validators: E,
            onSubmit: N,
          } = (0, i.useModalState)(e, I);
        return (0, l.jsx)("form", {
          onSubmit: e => {
            e.preventDefault(), N();
          },
          children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: p,
            children: [
              (0, l.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                  (0, l.jsx)(a.Avatar, {
                    src: T,
                    size: a.AvatarSizes.SIZE_24,
                    "aria-label": C,
                    className: f.applicationIcon,
                  }),
                  (0, l.jsx)(o.default, {
                    color: o.default.Colors.HEADER_PRIMARY,
                    size: o.default.Sizes.SIZE_24,
                    children: n,
                  }),
                  (0, l.jsx)(a.ModalCloseButton, {
                    onClick: I,
                    className: f.closeButton,
                  }),
                ],
              }),
              (0, l.jsxs)(a.ModalContent, {
                children: [
                  null != M && "" !== M
                    ? (0, l.jsx)(u.default, {
                        messageType: u.HelpMessageTypes.ERROR,
                        className: f.submissionWarning,
                        children: M,
                      })
                    : null,
                  (0, l.jsx)(u.default, {
                    messageType: u.HelpMessageTypes.WARNING,
                    className: f.submissionWarning,
                    children:
                      d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: C }
                      ),
                  }),
                  (0, l.jsx)(a.FormSection, {
                    children: (0, l.jsx)(r.ComponentStateContextProvider, {
                      modal: { customId: t },
                      validators: E,
                      children: (0, c.renderComponents)(m),
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)(a.ModalFooter, {
                children: [
                  (0, l.jsx)(a.Button, {
                    type: "submit",
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: h === s.InteractionModalState.IN_FLIGHT,
                    children: d.default.Messages.SUBMIT,
                  }),
                  (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    onClick: I,
                    children: d.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(e) {
        (0, a.openModal)(t => (0, l.jsx)(I, { ...t, ...e }));
      }
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return p;
          },
        });
      var l,
        a,
        u = n("37983");
      n("884691");
      var o = n("414456"),
        r = n.n(o),
        s = n("77078"),
        i = n("36694"),
        c = n("381546"),
        d = n("68238"),
        f = n("423487"),
        I = n("950038");
      ((l = a || (a = {}))[(l.WARNING = 0)] = "WARNING"),
        (l[(l.INFO = 1)] = "INFO"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.POSITIVE = 3)] = "POSITIVE");
      var p = function (e) {
        let {
            children: t,
            messageType: n,
            className: l,
            textColor: a = "text-normal",
            textVariant: o = "text-sm/medium",
          } = e,
          p = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return d.default;
              case 2:
                return c.default;
              case 3:
                return i.default;
            }
          })(n),
          m = (function (e) {
            switch (e) {
              case 0:
                return I.warning;
              case 1:
                return I.info;
              case 2:
                return I.error;
              case 3:
                return I.positive;
            }
          })(n);
        return (0, u.jsxs)("div", {
          className: r(I.container, m, l),
          children: [
            (0, u.jsx)("div", {
              className: I.iconDiv,
              children: (0, u.jsx)(p, { className: I.icon }),
            }),
            (0, u.jsx)(s.Text, {
              className: I.text,
              color: a,
              variant: o,
              children: t,
            }),
          ],
        });
      };
    },
    781896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        u = n("533806"),
        o = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: u,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, o.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: u,
                d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                fill: a,
              }),
            });
          },
          u.UserIcon,
          void 0,
          { size: 24 }
        );
    },
    224701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UserIcon: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        u = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...s
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, u.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=e3b71802190a2f73c071.js.map
