(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50525"],
  {
    571423: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("544361");
      i.es(n, t);
    },
    436984: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("168535");
      i.es(n, t);
    },
    567062: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return I;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("414456"),
        s = i.n(l),
        r = i("146606"),
        o = i("446674"),
        d = i("77078"),
        u = i("731898"),
        c = i("206230"),
        f = i("782340"),
        E = i("398277"),
        I = a.memo(function (e) {
          let {
              renderHeader: t,
              children: i,
              isExpanded: l,
              isStuck: I,
              onExpand: T,
            } = e,
            m = (0, o.useStateFromStores)(
              [c.default],
              () => c.default.useReducedMotion
            ),
            [_, x] = a.useState(!0),
            [h, p] = a.useState(!1),
            { ref: R, height: M = 0 } = (0, u.default)(),
            { ref: F, height: v = 0 } = (0, u.default)(),
            [N, S] = a.useState(l),
            C = (0, r.useSpring)({
              height: N ? v + M : M,
              immediate: _ || m,
              config: { ...r.config.stiff, clamp: !0 },
              onStart: () => {
                p(!1);
              },
              onRest: () => {
                p(!0);
              },
            });
          a.useLayoutEffect(() => {
            p(!1), S(l);
          }, [l]);
          let [g, A] = a.useState(!1),
            L = () => {
              A(!1);
            };
          return (
            a.useLayoutEffect(() => {
              let e = setTimeout(() => {
                x(!1);
              }, 100);
              return () => clearTimeout(e);
            }, []),
            (0, n.jsx)(d.Clickable, {
              className: s(E.editCard, { [E.toggled]: l, [E.active]: g }),
              onMouseLeave: L,
              onMouseDown: () => {
                A(!0);
              },
              onMouseUp: L,
              children: (0, n.jsxs)(r.animated.div, {
                className: s(E.contentExpandContainer, {
                  [E.showOverflow]: l && h,
                }),
                style: C,
                children: [
                  (0, n.jsx)(d.Clickable, {
                    innerRef: R,
                    onClick: I ? void 0 : T,
                    className: s(E.innerHeader, { [E.toggled]: l && I }),
                    "aria-label": f.default.Messages.EXPAND,
                    children: t,
                  }),
                  (0, n.jsx)("div", { ref: F, children: i }),
                ],
              }),
            })
          );
        });
    },
    90490: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return A;
          },
        }),
        i("424973"),
        i("222007");
      var n = i("446674"),
        a = i("407846"),
        l = i("913144"),
        s = i("305961"),
        r = i("697218"),
        o = i("591023"),
        d = i("567054"),
        u = i("982527"),
        c = i("49111");
      let f = {};
      function E(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : 0;
      }
      function I(e, t) {
        f[e] = t;
      }
      function T(e, t, i) {
        if (t !== i && null != t) {
          var n, a, l, s;
          if (t === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
            let t = E(e);
            (n = e), (a = t + 1), (f[n] = a);
          }
          if (i === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
            let t = E(e);
            (l = e), (s = Math.max(0, t - 1)), (f[l] = s);
          }
        }
      }
      let m = !1,
        _ = {
          GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
          GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) =>
            "guild-".concat(e, "-").concat(t),
        };
      function x(e) {
        let t = [];
        return (
          t.push(_.GUILD_JOIN_REQUESTS_BY_ID(e.id)),
          t.push(
            _.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)
          ),
          t
        );
      }
      let h = new a.default(x, e => "".concat(e.id)),
        p = new a.default(x, e => "".concat(e.id)),
        R = new a.default(x, e => "".concat(e.actionedAt));
      function M(e) {
        return h.get(e);
      }
      function F(e) {
        h.set(e.id, e),
          (0, o.isSubmittedApplicationStatus)(e.applicationStatus) &&
            (R.delete(e.id), p.set(e.id, e)),
          (0, o.isActionedApplicationStatus)(e.applicationStatus) &&
            (p.delete(e.id), R.set(e.id, e));
      }
      function v(e) {
        var t, i;
        let { guildId: n, request: a } = e,
          l = (0, u.joinRequestFromServer)(a),
          s = r.default.getCurrentUser();
        if (null == s || l.userId === s.id) return !1;
        let o =
          null === ((i = l.id), (t = h.get(i))) || void 0 === t
            ? void 0
            : t.applicationStatus;
        return T(n, l.applicationStatus, o), F(l), !0;
      }
      let N = {},
        S = {},
        C = {};
      class g extends n.default.Store {
        getRequests(e, t) {
          let i = _.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
          return (0, o.isActionedApplicationStatus)(t)
            ? R.values(i)
            : (0, o.isSubmittedApplicationStatus)(t)
              ? p.values(i)
              : h.values(i);
        }
        getSubmittedGuildJoinRequestTotal(e) {
          return E(e);
        }
        isFetching() {
          return m;
        }
        getSelectedApplicationTab(e) {
          var t;
          let i = s.default.getGuild(e),
            n = (null == i ? void 0 : i.hasFeature(c.GuildFeatures.CLAN))
              ? "REVIEW_APPLICATION"
              : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
          return null !== (t = N[e]) && void 0 !== t ? t : n;
        }
        getSelectedSortOrder(e) {
          var t;
          return null !== (t = S[e]) && void 0 !== t
            ? t
            : d.GuildJoinRequestSortOrders.TIMESTAMP_DESC;
        }
        getSelectedGuildJoinRequest(e) {
          var t;
          let i = C[e];
          return null != i ? ((t = i.id), h.get(t)) : null;
        }
      }
      g.displayName = "GuildJoinRequestStoreV2";
      var A = new g(l.default, {
        GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
          let { status: t, requests: i, total: n, guildId: a } = e;
          if (
            ((m = !1), t === d.GuildJoinRequestApplicationStatuses.SUBMITTED)
          ) {
            var l, s;
            (l = a), (s = n), (f[l] = s);
          }
          i.forEach(e => {
            F(e);
          });
        },
        GUILD_JOIN_REQUESTS_FETCH_START: function () {
          m = !0;
        },
        GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
          m = !1;
        },
        GUILD_JOIN_REQUESTS_BULK_ACTION: function (e) {
          let { guildId: t, action: i } = e,
            n = h.values(
              _.GUILD_JOIN_REQUESTS_BY_STATUS(
                t,
                d.GuildJoinRequestApplicationStatuses.SUBMITTED
              )
            );
          n.forEach(e => {
            F({ ...e, applicationStatus: i });
          }),
            (f[t] = 0);
        },
        GUILD_JOIN_REQUEST_CREATE: v,
        GUILD_JOIN_REQUEST_UPDATE: v,
        GUILD_JOIN_REQUEST_DELETE: function (e) {
          var t, i;
          let { id: n, guildId: a } = e;
          let l = ((t = n), h.get(t));
          if (null != l) {
            T(a, null, l.applicationStatus),
              (i = n),
              h.delete(i),
              p.delete(i),
              R.delete(i);
          }
        },
        GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
          let { guildId: t, applicationTab: i } = e;
          i !== N[t] && (N[t] = i);
        },
        GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
          var t;
          let { guildId: i, sortOrder: n } = e;
          if (n === S[i]) return;
          S[i] = n;
          let a =
            null !== (t = N[i]) && void 0 !== t
              ? t
              : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
          "REVIEW_APPLICATION" !== a &&
            ((0, o.isActionedApplicationStatus)(a) && R.clear(),
            (0, o.isSubmittedApplicationStatus)(a) && p.clear());
        },
        GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
          let { guildId: t, request: i } = e;
          C[t] = i;
        },
      });
    },
    859130: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useSubmittedGuildJoinRequestTotal: function () {
            return l;
          },
        });
      var n = i("446674"),
        a = i("90490");
      function l(e) {
        let { guildId: t } = e,
          i = (0, n.useStateFromStores)(
            [a.default],
            () => a.default.getSubmittedGuildJoinRequestTotal(t),
            [t]
          );
        return i;
      }
    },
    414989: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return T;
          },
        });
      var n = i("37983"),
        a = i("884691"),
        l = i("77078"),
        s = i("100300"),
        r = i("879478"),
        o = i("151185"),
        d = i("179016"),
        u = i("567054"),
        c = i("546470"),
        f = i("782340"),
        E = i("935090");
      function I(e) {
        let { onClick: t, text: i, icon: a } = e;
        return (0, n.jsx)("div", {
          className: E.addFormFieldContainer,
          children: (0, n.jsxs)(l.Clickable, {
            className: E.addFormField,
            onClick: t,
            children: [
              (0, n.jsx)(a, { className: E.icon, height: 16, width: 16 }),
              (0, n.jsx)(l.FormText, {
                className: E.addFormFieldText,
                children: i,
              }),
            ],
          }),
        });
      }
      var T = function (e) {
        let { addFormField: t, showManualApprovalWarning: T, guild: m } = e,
          _ = a.useCallback(
            e => {
              (0, c.openEmptyFormFieldModal)(e, t, m);
            },
            [t, m]
          ),
          x = a.useCallback(
            e => {
              T
                ? (0, l.openModalLazy)(async () => {
                    let { default: t } = await i
                      .el("331761")
                      .then(i.bind(i, "331761"));
                    return i => (0, n.jsx)(t, { ...i, onSubmit: () => _(e) });
                  })
                : _(e);
            },
            [T, _]
          );
        return (0, n.jsxs)("div", {
          className: E.backgroundContainer,
          children: [
            (0, n.jsx)("div", {
              className: E.containerTopHat,
              children: (0, n.jsx)(l.Text, {
                className: E.containerTopHatText,
                variant: "text-xs/bold",
                color: "header-secondary",
                children:
                  f.default.Messages
                    .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED,
              }),
            }),
            (0, n.jsxs)("div", {
              className: E.leftRailIconContainer,
              children: [
                (0, n.jsx)("div", {
                  className: E.iconContainer,
                  children: (0, n.jsx)(o.default, {
                    width: 18,
                    height: 20,
                    className: E.icon,
                  }),
                }),
                (0, n.jsxs)(l.FormSection, {
                  children: [
                    (0, n.jsx)(l.FormTitle, {
                      tag: "h3",
                      className: E.leftRailIconContainerTitle,
                      children:
                        f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS,
                    }),
                    (0, n.jsx)(l.FormText, {
                      className: E.leftRailIconContainerDescription,
                      type: l.FormText.Types.DESCRIPTION,
                      children:
                        f.default.Messages
                          .MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION,
                    }),
                    (0, n.jsx)(I, {
                      formFieldType: u.VerificationFormFieldTypes.TEXT_INPUT,
                      addFormField: t,
                      icon: d.default,
                      text: f.default.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                      onClick: () => x(u.VerificationFormFieldTypes.TEXT_INPUT),
                    }),
                    (0, n.jsx)(I, {
                      formFieldType: u.VerificationFormFieldTypes.PARAGRAPH,
                      addFormField: t,
                      icon: r.default,
                      text: f.default.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                      onClick: () => x(u.VerificationFormFieldTypes.PARAGRAPH),
                    }),
                    (0, n.jsx)(I, {
                      formFieldType:
                        u.VerificationFormFieldTypes.MULTIPLE_CHOICE,
                      addFormField: t,
                      icon: s.default,
                      text: f.default.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                      onClick: () =>
                        x(u.VerificationFormFieldTypes.MULTIPLE_CHOICE),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    64284: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return I;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("446674"),
        s = i("77078"),
        r = i("448993"),
        o = i("50926"),
        d = i("526253"),
        u = i("192918"),
        c = i("394294"),
        f = i("782340"),
        E = i("935090"),
        I = function (e) {
          var t;
          let { guildId: i } = e,
            I = (0, l.useStateFromStores)([d.default], () => d.default.get(i)),
            [T, m] = a.useState(null),
            [_, x] = a.useState(
              null !== (t = null == I ? void 0 : I.description) && void 0 !== t
                ? t
                : ""
            ),
            h = a.useRef(!1),
            p = a.useRef(!1);
          a.useEffect(
            () => () => {
              p.current = !0;
            },
            []
          );
          let R = a.useCallback(async () => {
            if (!h.current) {
              m(null);
              try {
                await o.default.updateVerificationFormDescription(i, _);
              } catch (t) {
                if (p.current) return;
                let e = new r.APIError(t);
                m(e.getAnyErrorMessage());
              } finally {
                if (p.current) return;
                h.current = !1;
              }
            }
          }, [_, i]);
          return (0, n.jsxs)(u.default, {
            title:
              f.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
            children: [
              (0, n.jsx)(s.TextArea, {
                className: E.fieldBackground,
                maxLength: c.MAX_DESCRIPTION_LENGTH,
                value: null != _ ? _ : "",
                placeholder:
                  f.default.Messages
                    .GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
                onChange: e => {
                  x(e);
                },
                onBlur: R,
                autosize: !0,
              }),
              null != T && "" !== T
                ? (0, n.jsx)(s.Text, {
                    className: E.errorText,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: T,
                  })
                : null,
            ],
          });
        };
    },
    335724: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("414456"),
        l = i.n(a),
        s = i("77078"),
        r = i("213523"),
        o = i("567054"),
        d = i("546470"),
        u = i("782340"),
        c = i("935090"),
        f = function (e) {
          let { addFormField: t, guild: i } = e;
          return (0, n.jsxs)("div", {
            className: l(
              c.spacingContainer,
              c.leftRailIconContainer,
              c.backgroundContainer
            ),
            children: [
              (0, n.jsx)("div", {
                className: c.iconContainer,
                children: (0, n.jsx)(r.default, {
                  width: 18,
                  height: 20,
                  className: c.icon,
                }),
              }),
              (0, n.jsxs)(s.FormSection, {
                children: [
                  (0, n.jsx)(s.FormTitle, {
                    tag: "h3",
                    className: c.leftRailIconContainerTitle,
                    children:
                      u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE,
                  }),
                  (0, n.jsx)(s.FormText, {
                    className: c.leftRailIconContainerDescription,
                    type: s.FormText.Types.DESCRIPTION,
                    children:
                      u.default.Messages
                        .MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION,
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: () =>
                      (0, d.openEmptyFormFieldModal)(
                        o.VerificationFormFieldTypes.TERMS,
                        t,
                        i
                      ),
                    children:
                      u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON,
                  }),
                ],
              }),
            ],
          });
        };
    },
    403025: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return d;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("414456"),
        l = i.n(a),
        s = i("472850"),
        r = i("933351"),
        o = i("935090"),
        d = function (e) {
          let {
              formField: t,
              index: i,
              isDragEnabled: a,
              isDropHovered: d,
              onDrop: u,
              onEdit: c,
              onRemove: f,
            } = e,
            { label: E } = t;
          return (0, n.jsx)(r.default, {
            field: t,
            index: i,
            isDragEnabled: a,
            isDropHovered: d,
            onDrop: u,
            onEdit: c,
            onRemove: f,
            title: E,
            children: (0, n.jsx)(s.MultipleChoiceFieldBody, {
              field: t,
              value: void 0,
              radioItemClassName: l(
                o.fieldBackground,
                o.multipleChoiceFixedTextColor
              ),
              disabled: !1,
            }),
          });
        };
    },
    933351: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return _;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("414456"),
        s = i.n(l),
        r = i("917351"),
        o = i("476042"),
        d = i("669491"),
        u = i("77078"),
        c = i("673220"),
        f = i("782340"),
        E = i("935090");
      function I(e) {
        let { title: t, children: i, onEdit: a, onRemove: l } = e;
        return (0, n.jsxs)("div", {
          className: E.backgroundContainer,
          children: [
            (0, n.jsxs)("div", {
              className: E.containerPadding,
              children: [
                (0, n.jsx)(u.FormTitle, {
                  tag: "h3",
                  className: E.containerTitle,
                  children: t,
                }),
                i,
              ],
            }),
            (0, n.jsxs)(u.FormSection, {
              className: E.containerFooter,
              children: [
                (0, n.jsx)(u.Button, {
                  className: s(E.removeButton, E.button),
                  size: u.Button.Sizes.SMALL,
                  look: u.Button.Looks.BLANK,
                  onClick: l,
                  children: f.default.Messages.REMOVE,
                }),
                (0, n.jsx)(u.Button, {
                  className: E.button,
                  size: u.Button.Sizes.SMALL,
                  color: u.Button.Colors.PRIMARY,
                  onClick: a,
                  children: f.default.Messages.EDIT,
                }),
              ],
            }),
          ],
        });
      }
      let T = "FORM_FIELD";
      function m(e) {
        let { index: t, field: i, isDropHovered: l, onDrop: u } = e,
          f = (0, r.debounce)(async (e, t, i) => {
            await u(e, t, i);
          }),
          m = a.useRef(null),
          [, _] = (0, o.useDrag)({
            type: T,
            item: { index: t, field: i },
            end: (e, t) => {
              null != e && !t.didDrop() && f(e.field, null, !0);
            },
          }),
          [, x] = (0, o.useDrop)({
            accept: T,
            hover: (e, i) => {
              var n;
              let { index: a } = e,
                l =
                  null === (n = m.current) || void 0 === n
                    ? void 0
                    : n.getBoundingClientRect(),
                s = i.getClientOffset();
              if (null == l || null == s) return;
              let r = (l.bottom - l.top) / 2,
                o = s.y - l.top;
              (!(a < t) || !(o < r)) &&
                (!(a > t) || !(o < r)) &&
                a !== t &&
                f(e.field, t, !1);
            },
            drop: e => {
              f(e.field, t, !0);
            },
          });
        return (
          a.useLayoutEffect(
            () => (
              _(x(m)),
              () => {
                x(null), _(null);
              }
            ),
            [_, x]
          ),
          (0, n.jsxs)("div", {
            ref: m,
            "data-dnd-name": "field-".concat(t),
            className: s(E.dragContainer, { [E.dropHovered]: l }),
            children: [
              (0, n.jsx)("div", {
                className: E.dragIconContainer,
                children: (0, n.jsx)(c.default, {
                  className: E.dragIcon,
                  color: d.default.unsafe_rawColors.PRIMARY_400.css,
                }),
              }),
              (0, n.jsx)(I, { ...e }),
            ],
          })
        );
      }
      function _(e) {
        return (0, n.jsx)("div", {
          className: E.spacingContainer,
          children: e.isDragEnabled
            ? (0, n.jsx)(m, { ...e })
            : (0, n.jsx)(I, { ...e }),
        });
      }
    },
    263974: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("199901"),
        l = i("933351"),
        s = i("935090"),
        r = function (e) {
          let {
              formField: t,
              index: i,
              isDragEnabled: r,
              isDropHovered: o,
              onDrop: d,
              onEdit: u,
              onRemove: c,
            } = e,
            { label: f, placeholder: E } = t;
          return (0, n.jsx)(l.default, {
            field: t,
            index: i,
            isDragEnabled: r,
            isDropHovered: o,
            onDrop: d,
            onEdit: u,
            onRemove: c,
            title: f,
            children: (0, n.jsx)(a.ParagraphFieldBody, {
              className: s.fieldBackground,
              placeholder: E,
              disabled: !0,
            }),
          });
        };
    },
    192918: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("414456"),
        l = i.n(a),
        s = i("77078"),
        r = i("935090");
      function o(e) {
        let { title: t, children: i } = e;
        return (0, n.jsxs)(s.FormSection, {
          className: l(
            r.backgroundContainer,
            r.spacingContainer,
            r.containerPadding
          ),
          children: [
            (0, n.jsx)(s.FormTitle, {
              tag: "h3",
              className: r.containerTitle,
              children: t,
            }),
            i,
          ],
        });
      }
    },
    169324: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return E;
          },
        }),
        i("222007");
      var n = i("37983");
      i("884691");
      var a = i("414456"),
        l = i.n(a),
        s = i("669491"),
        r = i("77078"),
        o = i("461380"),
        d = i("772970"),
        u = i("933351"),
        c = i("782340"),
        f = i("935090"),
        E = function (e) {
          let {
              channelId: t,
              formField: i,
              index: a,
              isDragEnabled: E,
              isDropHovered: I,
              onDrop: T,
              onEdit: m,
              onRemove: _,
              title: x,
            } = e,
            h = i.values,
            p = h.slice(0, 1),
            R = h.length - p.length;
          return (0, n.jsxs)(u.default, {
            field: i,
            index: a,
            isDragEnabled: E,
            isDropHovered: I,
            onDrop: T,
            onEdit: m,
            onRemove: _,
            title: x,
            children: [
              (0, n.jsx)(d.TermsFieldBody, {
                className: l(f.fieldBackground, { [f.withFooter]: 0 !== R }),
                terms: p,
                channelId: t,
              }),
              0 !== R &&
                (0, n.jsxs)(r.Clickable, {
                  className: l(f.fieldFooterContainer, f.clickable),
                  onClick: m,
                  children: [
                    (0, n.jsx)(r.FormText, {
                      className: f.clickable,
                      children:
                        c.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format(
                          { count: R }
                        ),
                    }),
                    (0, n.jsx)(o.default, {
                      className: f.termsFieldCaretIcon,
                      height: 14,
                      width: 14,
                      color: s.default.unsafe_rawColors.WHITE_500.css,
                    }),
                  ],
                }),
              (0, n.jsx)(d.TermsFieldCheckbox, { disabled: !0, checked: !1 }),
            ],
          });
        };
    },
    333554: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("621115"),
        l = i("933351"),
        s = i("935090"),
        r = function (e) {
          let {
              formField: t,
              index: i,
              isDragEnabled: r,
              isDropHovered: o,
              onDrop: d,
              onEdit: u,
              onRemove: c,
            } = e,
            { label: f, placeholder: E } = t;
          return (0, n.jsx)(l.default, {
            field: t,
            index: i,
            isDragEnabled: r,
            isDropHovered: o,
            onDrop: d,
            onEdit: u,
            onRemove: c,
            title: f,
            children: (0, n.jsx)(a.TextInputFieldBody, {
              className: s.fieldBackground,
              placeholder: E,
              disabled: !0,
            }),
          });
        };
    },
    925993: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getVerificationLevelText: function () {
            return T;
          },
          default: function () {
            return _;
          },
        });
      var n = i("37983"),
        a = i("884691"),
        l = i("669491"),
        s = i("77078"),
        r = i("957255"),
        o = i("556081"),
        d = i("216947"),
        u = i("987772"),
        c = i("192918"),
        f = i("49111"),
        E = i("782340"),
        I = i("935090");
      function T(e) {
        switch (e) {
          case f.VerificationLevels.LOW:
            return E.default.Messages.VERIFICATION_LEVEL_LOW;
          case f.VerificationLevels.MEDIUM:
            return E.default.Messages.VERIFICATION_LEVEL_MEDIUM;
          case f.VerificationLevels.HIGH:
            return E.default.Messages.VERIFICATION_LEVEL_HIGH;
          case f.VerificationLevels.VERY_HIGH:
            return E.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
          default:
            return "";
        }
      }
      let m = {
        [f.VerificationLevels.NONE]: "",
        [f.VerificationLevels.LOW]: l.default.unsafe_rawColors.GREEN_360.css,
        [f.VerificationLevels.MEDIUM]:
          l.default.unsafe_rawColors.YELLOW_300.css,
        [f.VerificationLevels.HIGH]: l.default.unsafe_rawColors.ORANGE_345.css,
        [f.VerificationLevels.VERY_HIGH]:
          l.default.unsafe_rawColors.RED_400.css,
      };
      var _ = function (e) {
        let { guild: t } = e,
          l = r.default.can(f.Permissions.MANAGE_GUILD, t),
          _ = t.verificationLevel,
          x = _ === f.VerificationLevels.VERY_HIGH ? d.default : o.default,
          h = a.useMemo(() => T(_), [_]),
          p = m[_],
          R = (0, n.jsx)("div", {
            className: I.verificationLevelTitle,
            children:
              E.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format(
                {
                  verificationLevelHook: function () {
                    return (0, n.jsx)(
                      s.Text,
                      {
                        className: I.verificationLevelHook,
                        style: { color: p },
                        variant: "text-sm/semibold",
                        children: h,
                      },
                      "hook"
                    );
                  },
                }
              ),
          }),
          M =
            _ === f.VerificationLevels.VERY_HIGH
              ? E.default.Messages
                  .MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL
              : E.default.Messages
                  .MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
        return (0, n.jsx)(c.default, {
          title: R,
          children: (0, n.jsxs)("div", {
            className: I.verificationContainer,
            children: [
              (0, n.jsx)(x, { width: 20, height: 20, className: I.icon }),
              (0, n.jsx)(s.Text, {
                className: I.guildVerificationText,
                variant: "text-sm/normal",
                children: M,
              }),
              l &&
                (0, n.jsx)(s.Clickable, {
                  className: I.iconInteractiveContainer,
                  onClick: () =>
                    (0, s.openModalLazy)(async () => {
                      let { default: e } = await i
                        .el("161069")
                        .then(i.bind(i, "161069"));
                      return i => (0, n.jsx)(e, { ...i, guild: t });
                    }),
                  children: (0, n.jsx)(u.default, {
                    width: 20,
                    height: 20,
                    className: I.iconInteractive,
                  }),
                }),
            ],
          }),
        });
      };
    },
    832285: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return T;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("77078"),
        l = i("272030"),
        s = i("100300"),
        r = i("879478"),
        o = i("151185"),
        d = i("179016"),
        u = i("567054"),
        c = i("546470"),
        f = i("782340"),
        E = i("70933");
      function I(e) {
        let { addFormField: t, onSelect: i, guild: o } = e;
        return (0, n.jsx)(a.Menu, {
          navId: "add-questions",
          className: E.menu,
          onClose: l.closeContextMenu,
          "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: (0, n.jsxs)(a.MenuGroup, {
            children: [
              (0, n.jsx)(a.MenuItem, {
                id: "text-input",
                icon: d.default,
                label:
                  f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                action: () =>
                  (0, c.openEmptyFormFieldModal)(
                    u.VerificationFormFieldTypes.TEXT_INPUT,
                    t,
                    o
                  ),
              }),
              (0, n.jsx)(a.MenuItem, {
                id: "paragraph",
                icon: r.default,
                label:
                  f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                action: () =>
                  (0, c.openEmptyFormFieldModal)(
                    u.VerificationFormFieldTypes.PARAGRAPH,
                    t,
                    o
                  ),
              }),
              (0, n.jsx)(a.MenuItem, {
                id: "multiple-choice",
                icon: s.default,
                label:
                  f.default.Messages
                    .MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                action: () =>
                  (0, c.openEmptyFormFieldModal)(
                    u.VerificationFormFieldTypes.MULTIPLE_CHOICE,
                    t,
                    o
                  ),
              }),
            ],
          }),
        });
      }
      var T = function (e) {
        let { addFormField: t, guild: i } = e,
          s = e => {
            (0, l.openContextMenu)(
              e,
              e => (0, n.jsx)(I, { ...e, addFormField: t, guild: i }),
              { position: "top", align: "center" }
            );
          };
        return (0, n.jsx)("div", {
          className: E.container,
          children: (0, n.jsx)(a.Tooltip, {
            text: f.default.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
            children: e =>
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(a.Clickable, {
                    ...e,
                    className: E.iconContainer,
                    onClick: s,
                    children: (0, n.jsx)(o.default, {
                      width: 18,
                      height: 20,
                      className: E.icon,
                    }),
                  }),
                  (0, n.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children:
                      f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION,
                  }),
                ],
              }),
          }),
        });
      };
    },
    26754: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return s;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("77078"),
        l = i("241959"),
        s = function (e) {
          let { text: t } = e;
          return (0, n.jsxs)("div", {
            className: l.container,
            children: [
              (0, n.jsx)(a.FormDivider, {}),
              (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "header-secondary",
                className: l.text,
                children: t.toUpperCase(),
              }),
              (0, n.jsx)(a.FormDivider, {}),
            ],
          });
        };
    },
    546470: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          getFormFieldBuilderComponent: function () {
            return E;
          },
          openEmptyFormFieldModal: function () {
            return I;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("917351"),
        l = i("77078"),
        s = i("567054"),
        r = i("403025"),
        o = i("263974"),
        d = i("169324"),
        u = i("333554"),
        c = i("49111"),
        f = i("782340");
      function E(e) {
        let {
            dropHoveredIndex: t,
            formField: c,
            guild: E,
            index: I,
            isDragEnabled: m,
            submittedGuildJoinRequestsCount: _,
            removeFormField: x,
            updateFormField: h,
            updateFormFieldOrder: p,
          } = e,
          R = async () => {
            await x(I);
          },
          M = async e => {
            await h(I, e);
          },
          F = async (e, t, i) => {
            await p(e, t, i);
          },
          v = (0, a.uniqueId)(),
          N = t === I,
          S = {
            key: v,
            index: I,
            isDragEnabled: m,
            isDropHovered: N,
            onEdit: () => {
              0 === _
                ? T(c, M, E)
                : (0, l.openModalLazy)(async () => {
                    let { default: e } = await i
                      .el("265397")
                      .then(i.bind(i, "265397"));
                    return t =>
                      (0, n.jsx)(e, {
                        ...t,
                        guildId: E.id,
                        submittedGuildJoinRequestsCount: _,
                        onConfirm: () => T(c, M, E),
                      });
                  });
            },
            onRemove: R,
            onDrop: F,
          };
        switch (c.field_type) {
          case s.VerificationFormFieldTypes.TERMS:
            return (0, n.jsx)(d.default, {
              channelId: E.rulesChannelId,
              title: f.default.Messages.GUILD_RULES_HEADER,
              formField: c,
              ...S,
            });
          case s.VerificationFormFieldTypes.PARAGRAPH:
            return (0, n.jsx)(o.default, { formField: c, ...S });
          case s.VerificationFormFieldTypes.TEXT_INPUT:
            return (0, n.jsx)(u.default, { formField: c, ...S });
          case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
            return (0, n.jsx)(r.default, { formField: c, ...S });
          default:
            return null;
        }
      }
      function I(e, t, a) {
        let r = { onCloseRequest: c.NOOP };
        switch (e) {
          case s.VerificationFormFieldTypes.TERMS:
            return (0, l.openModalLazy)(async () => {
              let { default: e } = await i
                .el("262099")
                .then(i.bind(i, "262099"));
              return i =>
                (0, n.jsx)(e, { ...i, field: void 0, onSave: t, guild: a });
            }, r);
          case s.VerificationFormFieldTypes.PARAGRAPH:
            return (0, l.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: e } = await i
                .el("198784")
                .then(i.bind(i, "198784"));
              return i => (0, n.jsx)(e, { ...i, field: void 0, onSave: t });
            }, r);
          case s.VerificationFormFieldTypes.TEXT_INPUT:
            return (0, l.openModalLazy)(async () => {
              let { TextInputFormFieldModal: e } = await i
                .el("198784")
                .then(i.bind(i, "198784"));
              return i => (0, n.jsx)(e, { ...i, field: void 0, onSave: t });
            }, r);
          case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
            return (0, l.openModalLazy)(async () => {
              let { default: e } = await i
                .el("827619")
                .then(i.bind(i, "827619"));
              return i => (0, n.jsx)(e, { ...i, field: void 0, onSave: t });
            }, r);
        }
      }
      function T(e, t, a) {
        let r = { onCloseRequest: c.NOOP };
        switch (e.field_type) {
          case s.VerificationFormFieldTypes.TERMS:
            return (0, l.openModalLazy)(async () => {
              let { default: l } = await i
                .el("262099")
                .then(i.bind(i, "262099"));
              return i =>
                (0, n.jsx)(l, { ...i, field: e, onSave: t, guild: a });
            }, r);
          case s.VerificationFormFieldTypes.PARAGRAPH:
            return (0, l.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: a } = await i
                .el("198784")
                .then(i.bind(i, "198784"));
              return i => (0, n.jsx)(a, { ...i, field: e, onSave: t });
            }, r);
          case s.VerificationFormFieldTypes.TEXT_INPUT:
            return (0, l.openModalLazy)(async () => {
              let { TextInputFormFieldModal: a } = await i
                .el("198784")
                .then(i.bind(i, "198784"));
              return i => (0, n.jsx)(a, { ...i, field: e, onSave: t });
            }, r);
          case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
            return (0, l.openModalLazy)(async () => {
              let { default: a } = await i
                .el("827619")
                .then(i.bind(i, "827619"));
              return i => (0, n.jsx)(a, { ...i, field: e, onSave: t });
            }, r);
        }
      }
    },
    613786: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return p;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("77078"),
        s = i("50926"),
        r = i("520141"),
        o = i("567054"),
        d = i("409464"),
        u = i("414989"),
        c = i("64284"),
        f = i("335724"),
        E = i("925993"),
        I = i("832285"),
        T = i("26754"),
        m = i("546470"),
        _ = i("394294"),
        x = i("49111"),
        h = i("782340"),
        p = function (e) {
          let {
              guild: t,
              submittedGuildJoinRequestsCount: i,
              onFormFieldUpdate: p,
              hideVerificationLevelField: R,
            } = e,
            M = t.hasFeature(x.GuildFeatures.CLAN),
            F = a.useRef(!1),
            [v, N] = a.useState(null),
            [S, C] = a.useState(e.formFields),
            g = a.useRef(e.formFields),
            A = a.useMemo(() => S.filter(d.isAutomaticApprovalFormField), [S]),
            L = a.useMemo(() => S.filter(d.isManualApprovalFormField), [S]),
            j = L.length,
            y = a.useMemo(() => S.length === _.MAX_FORM_ELEMENTS, [S]),
            O = a.useMemo(() => S.some(o.isTermsFormField), [S]),
            U = a.useMemo(() => S.some(e => !(0, o.isTermsFormField)(e)), [S]),
            D = j > 1,
            V = (0, r.useIsMemberVerificationManualApproval)(t.id),
            w = a.useCallback(() => {
              (0, l.showToast)(
                (0, l.createToast)(
                  h.default.Messages.ERROR_GENERIC_TITLE,
                  l.ToastType.FAILURE
                )
              );
            }, []),
            G = a.useCallback(
              async e => {
                if (!F.current) {
                  F.current = !0;
                  try {
                    await s.default.updateVerificationForm(t.id, e),
                      p(),
                      C(e),
                      (g.current = e);
                  } catch (e) {
                    throw (C(g.current), e);
                  } finally {
                    null != v && N(null), (F.current = !1);
                  }
                }
              },
              [v, t.id, p]
            ),
            B = a.useCallback(
              async e => {
                let t =
                  e.field_type === o.VerificationFormFieldTypes.TERMS
                    ? [e, ...S]
                    : [...S, e];
                await G(t);
              },
              [S, G]
            ),
            b = a.useCallback(
              async (e, t) => {
                if (S[e] === t) return;
                let i = [...S];
                (i[e] = t), await G(i);
              },
              [S, G]
            ),
            P = a.useCallback(
              async (e, t, i) => {
                let n = S.indexOf(e),
                  a = [...S];
                if (
                  (null != t &&
                    t !== n &&
                    (a.splice(n, 1), a.splice(t, 0, e), C(a)),
                  i)
                )
                  try {
                    await G(a), null !== v && N(null);
                  } catch (e) {
                    w();
                  }
                else v !== t && N(t);
              },
              [v, S, G, w]
            ),
            H = a.useCallback(
              async e => {
                try {
                  await G([...S.slice(0, e), ...S.slice(e + 1)]);
                } catch (e) {
                  w();
                }
              },
              [S, G, w]
            ),
            k = (0, n.jsxs)(n.Fragment, {
              children: [
                !R && (0, n.jsx)(E.default, { guild: t }),
                (0, n.jsx)(c.default, { guildId: t.id }),
                !O &&
                  !y &&
                  (0, n.jsx)(f.default, { addFormField: B, guild: t }),
                A.map(e =>
                  (0, m.getFormFieldBuilderComponent)({
                    dropHoveredIndex: v,
                    formField: e,
                    guild: t,
                    index: S.indexOf(e),
                    isDragEnabled: !1,
                    submittedGuildJoinRequestsCount: i,
                    removeFormField: H,
                    updateFormField: b,
                    updateFormFieldOrder: P,
                  })
                ),
              ],
            });
          return V
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(T.default, {
                    text: h.default.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER,
                  }),
                  k,
                  (0, n.jsx)(T.default, {
                    text: h.default.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER,
                  }),
                  !U &&
                    (0, n.jsx)(u.default, {
                      addFormField: B,
                      showManualApprovalWarning: !M && !(j > 0),
                      guild: t,
                    }),
                  L.map(e =>
                    (0, m.getFormFieldBuilderComponent)({
                      dropHoveredIndex: v,
                      formField: e,
                      guild: t,
                      index: S.indexOf(e),
                      isDragEnabled: D,
                      submittedGuildJoinRequestsCount: i,
                      removeFormField: H,
                      updateFormField: b,
                      updateFormFieldOrder: P,
                    })
                  ),
                  U &&
                    !y &&
                    (0, n.jsx)(I.default, { addFormField: B, guild: t }),
                ],
              })
            : k;
        };
    },
    690343: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("414456"),
        l = i.n(a),
        s = i("77078"),
        r = i("854743");
      function o(e) {
        let {
            checked: t,
            onChange: i,
            disabled: a,
            className: o,
            tooltipProps: d,
          } = e,
          u = e => {
            e.stopPropagation(), e.preventDefault();
          };
        return (0, n.jsx)(s.Clickable, {
          onClick: u,
          onMouseDown: u,
          onMouseUp: u,
          className: l(r.switch, o),
          ...d,
          children: (0, n.jsx)(s.Switch, {
            checked: t,
            onChange: i,
            disabled: a,
          }),
        });
      }
    },
    439979: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return M;
          },
        }),
        i("222007");
      var n = i("37983"),
        a = i("884691"),
        l = i("414456"),
        s = i.n(l),
        r = i("446674"),
        o = i("77078"),
        d = i("567062"),
        u = i("50926"),
        c = i("526253"),
        f = i("567054"),
        E = i("859130"),
        I = i("613786"),
        T = i("462579"),
        m = i("641892"),
        _ = i("690343"),
        x = i("782340"),
        h = i("854743"),
        p = i("108288");
      function R(e) {
        let {
            guild: t,
            isExpanded: l,
            emptyFormFields: s,
            hasTermsField: r,
          } = e,
          d = t.hasVerificationGate(),
          [c, f] = a.useState(d),
          E = e => {
            e.preventDefault(), e.stopPropagation();
          },
          I = async e => {
            try {
              f(e), await u.default.enableVerificationForm(t.id, e);
            } catch {
              f(c);
            }
          },
          R = e => {
            e && s
              ? (0, o.openModalLazy)(async () => {
                  let { ConfirmModal: t } = await i
                    .el("77078")
                    .then(i.bind(i, "77078"));
                  return i =>
                    (0, n.jsx)(t, {
                      ...i,
                      header:
                        x.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
                      cancelText:
                        x.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
                      confirmText:
                        x.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
                      onConfirm: () => I(e),
                      children: (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children:
                          x.default.Messages
                            .MEMBER_VERIFICATION_AUTOMATIC_WARNING,
                      }),
                    });
                })
              : I(e);
          },
          M = () => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await i.el("93184").then(i.bind(i, "93184"));
              return i => (0, n.jsx)(e, { ...i, guildId: t.id, isPreview: !0 });
            });
          };
        return (0, n.jsxs)("div", {
          className: h.itemWrapper,
          children: [
            (0, n.jsxs)("div", {
              className: h.itemContent,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children:
                    x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING,
                }),
                (l || (s && !c)) &&
                  (0, n.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children:
                      x.default.Messages
                        .GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE,
                  }),
                !l &&
                  (0, n.jsx)("div", {
                    className: p.pillRow,
                    children:
                      r &&
                      (0, n.jsxs)(o.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        className: h.valuePill,
                        children: [
                          (0, n.jsx)(m.default, { width: 16, height: 16 }),
                          x.default.Messages
                            .GUILD_SETTINGS_SAFETY_RULES_FORM_PILL,
                        ],
                      }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              className: p.previewAndEnable,
              children:
                l || c || !s
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(o.Clickable, {
                          onMouseDown: E,
                          onMouseUp: E,
                          onClick: e => {
                            E(e), M();
                          },
                          children: (0, n.jsx)(o.Tooltip, {
                            tooltipContentClassName: p.tooltip,
                            text: x.default.Messages.PREVIEW,
                            children: e =>
                              (0, n.jsx)(T.default, {
                                height: 24,
                                width: 24,
                                className: p.previewIcon,
                                ...e,
                              }),
                          }),
                        }),
                        (0, n.jsx)(_.default, {
                          checked: c,
                          onChange: () => R(!c),
                        }),
                      ],
                    })
                  : (0, n.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      children:
                        x.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON,
                    }),
            }),
          ],
        });
      }
      function M(e) {
        var t;
        let { guild: i } = e,
          [l, o] = a.useState(!1),
          [T, m] = a.useState(!1),
          _ = a.useRef(!1),
          x = a.useCallback(() => {
            _.current = !0;
          }, []),
          M = (0, E.useSubmittedGuildJoinRequestTotal)({ guildId: i.id }),
          F = (0, r.useStateFromStores)([c.default], () => c.default.get(i.id)),
          v =
            null !== (t = null == F ? void 0 : F.formFields) && void 0 !== t
              ? t
              : [];
        return (
          a.useEffect(() => {
            u.default.fetchVerificationForm(i.id).then(() => {
              m(!0);
            });
          }, [i.id]),
          (0, n.jsx)(d.default, {
            renderHeader: (0, n.jsx)(R, {
              guild: i,
              isExpanded: l,
              emptyFormFields:
                (null == v ? void 0 : v.length) == null ||
                (null == v ? void 0 : v.length) === 0,
              hasTermsField:
                null == v
                  ? void 0
                  : v.some(
                      e => e.field_type === f.VerificationFormFieldTypes.TERMS
                    ),
            }),
            isExpanded: l,
            onExpand: () => o(!l),
            children: (0, n.jsx)("div", {
              className: s(h.itemBodyContainer, p.rulesScreeningItems),
              children:
                T &&
                (0, n.jsx)(I.default, {
                  guild: i,
                  submittedGuildJoinRequestsCount: M,
                  formFields: v,
                  onFormFieldUpdate: x,
                  hideVerificationLevelField: !0,
                }),
            }),
          })
        );
      }
    },
    673220: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("469563"),
        l = i("436984"),
        s = i("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: i = 16,
              color: a = "currentColor",
              ...l
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: i,
              viewBox: "0 0 4 14",
              children: (0, n.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "1",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "4.61111107",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "4.61111107",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "8.22222227",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "8.22222227",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "11.83333337",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "11.83333337",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, n.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "1",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                ],
              }),
            });
          },
          l.DragIcon,
          void 0,
          { size: 16 }
        );
    },
    879478: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("469563"),
        l = i("571423"),
        s = i("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: i = 16,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: i,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("rect", {
                  className: l,
                  y: "3",
                  width: "16",
                  height: "2",
                  rx: "1",
                  fill: a,
                }),
                (0, n.jsx)("rect", {
                  className: l,
                  y: "11",
                  width: "8",
                  height: "2",
                  rx: "1",
                  fill: a,
                }),
                (0, n.jsx)("rect", {
                  className: l,
                  y: "7",
                  width: "16",
                  height: "2",
                  rx: "1",
                  fill: a,
                }),
              ],
            });
          },
          l.ChannelListIcon,
          void 0,
          { size: 16 }
        );
    },
    641892: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return s;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("469563"),
        l = i("797350"),
        s = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: i = 16,
              color: a = "currentColor",
              className: l,
              foreground: s,
            } = e;
            return (0, n.jsx)("svg", {
              className: l,
              width: t,
              height: i,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.5 17.2916V3.74996H17.5V18.3333H4.5C3.3955 18.3333 2.5 17.4005 2.5 16.25V3.74996C2.5 2.59944 3.3955 1.66663 4.5 1.66663H15.5V15.2083H4.5C3.94775 15.2083 3.5 15.6742 3.5 16.25C3.5 16.8257 3.94775 17.2916 4.5 17.2916H16.5ZM11.9859 4.99996L7.94446 8.9957L6.35432 7.42204L5 8.75288L7.94427 11.6666L13.3333 6.33344L11.9859 4.99996Z",
              }),
            });
          },
          l.BookCheckIcon,
          void 0,
          { size: 16 }
        );
    },
    179016: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("75196");
      function l(e) {
        let {
          width: t = 17,
          height: i = 16,
          color: l = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: i,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("rect", {
              className: s,
              y: "5",
              width: "16",
              height: "2",
              rx: "1",
              fill: l,
            }),
            (0, n.jsx)("rect", {
              className: s,
              y: "9",
              width: "8",
              height: "2",
              rx: "1",
              fill: l,
            }),
          ],
        });
      }
    },
    544361: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ChannelListIcon: function () {
            return s;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("669491"),
        l = i("82169");
      let s = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
            className: r,
          }),
        });
      };
    },
    168535: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          DragIcon: function () {
            return s;
          },
        });
      var n = i("37983");
      i("884691");
      var a = i("669491"),
        l = i("82169");
      let s = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=07fc4e44bb04b240cdc8.js.map
