(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92832"],
  {
    979897: function (e, t, n) {
      (e = n.nmd(e)), n("854508");
      var r =
        r ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var t = e.document,
              n = function () {
                return e.URL || e.webkitURL || e;
              },
              r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              i = "download" in r,
              s = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              a = e.webkitRequestFileSystem,
              l = e.requestFileSystem || a || e.mozRequestFileSystem,
              u = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              d = "application/octet-stream",
              c = 0,
              f = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              E = function (e, t, n) {
                for (var r = (t = [].concat(t)).length; r--; ) {
                  var i = e["on" + t[r]];
                  if ("function" == typeof i)
                    try {
                      i.call(e, n || e);
                    } catch (e) {
                      u(e);
                    }
                }
              },
              h = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              _ = function (t, u, _) {
                !_ && (t = h(t));
                var p,
                  C,
                  v = this,
                  S = t.type,
                  m = !1,
                  R = function () {
                    E(v, "writestart progress write writeend".split(" "));
                  },
                  I = function () {
                    if (C && o && "undefined" != typeof FileReader) {
                      var r = new FileReader();
                      (r.onloadend = function () {
                        var e = r.result;
                        (C.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (v.readyState = v.DONE),
                          R();
                      }),
                        r.readAsDataURL(t),
                        (v.readyState = v.INIT);
                      return;
                    }
                    (m || !p) && (p = n().createObjectURL(t)),
                      C
                        ? (C.location.href = p)
                        : void 0 === e.open(p, "_blank") &&
                          o &&
                          (e.location.href = p),
                      (v.readyState = v.DONE),
                      R(),
                      f(p);
                  },
                  A = function (e) {
                    return function () {
                      if (v.readyState !== v.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  N = { create: !0, exclusive: !1 };
                if (((v.readyState = v.INIT), !u && (u = "download"), i)) {
                  (p = n().createObjectURL(t)),
                    setTimeout(function () {
                      (r.href = p),
                        (r.download = u),
                        s(r),
                        R(),
                        f(p),
                        (v.readyState = v.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    S &&
                    S !== d &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)),
                    (m = !0)),
                  a && "download" !== u && (u += ".download"),
                  (S === d || a) && (C = e),
                  !l)
                ) {
                  I();
                  return;
                }
                (c += t.size),
                  l(
                    e.TEMPORARY,
                    c,
                    A(function (e) {
                      e.root.getDirectory(
                        "saved",
                        N,
                        A(function (e) {
                          var n = function () {
                            e.getFile(
                              u,
                              N,
                              A(function (e) {
                                e.createWriter(
                                  A(function (n) {
                                    (n.onwriteend = function (t) {
                                      (C.location.href = e.toURL()),
                                        (v.readyState = v.DONE),
                                        E(v, "writeend", t),
                                        f(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && I();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = v["on" + e];
                                        }),
                                      n.write(t),
                                      (v.abort = function () {
                                        n.abort(), (v.readyState = v.DONE);
                                      }),
                                      (v.readyState = v.WRITING);
                                  }),
                                  I
                                );
                              }),
                              I
                            );
                          };
                          e.getFile(
                            u,
                            { create: !1 },
                            A(function (e) {
                              e.remove(), n();
                            }),
                            A(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : I();
                            })
                          );
                        }),
                        I
                      );
                    }),
                    I
                  );
              },
              p = _.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = h(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((p.abort = function () {
                  (this.readyState = this.DONE), E(this, "abort");
                }),
                (p.readyState = p.INIT = 0),
                (p.WRITING = 1),
                (p.DONE = 2),
                (p.error =
                  p.onwritestart =
                  p.onprogress =
                  p.onwrite =
                  p.onabort =
                  p.onerror =
                  p.onwriteend =
                    null),
                function (e, t, n) {
                  return new _(e, t, n);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content
        );
      void 0 !== e && e.exports
        ? (e.exports.saveAs = r)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return r;
          });
    },
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return i;
          },
          updateCardInfo: function () {
            return s;
          },
          clearCardInfo: function () {
            return o;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return l;
          },
        });
      var r = n("913144");
      function i(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function s(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function a(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function l() {
        r.default.wait(() =>
          r.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return i;
          },
        });
      var r = n("913144");
      function i() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        o = n("446674"),
        a = n("77078"),
        l = n("102985"),
        u = n("79798"),
        d = n("754474"),
        c = n("158998"),
        f = n("782340"),
        E = n("168540");
      function h(e) {
        if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return d.BotTypes.AI;
        if (e.bot) return d.BotTypes.BOT;
        return null;
      }
      let _ = e => {
        let {
          primary: t,
          secondary: n,
          botType: i,
          botVerified: o,
          discriminatorClass: l,
          className: d,
          usernameClass: c,
          color: h,
          botClass: _,
          showStreamerModeTooltip: p,
        } = e;
        return (0, r.jsxs)("div", {
          className: s(E.info, d),
          children: [
            (0, r.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: p,
              "aria-label": !!p && void 0,
              children: e =>
                (0, r.jsx)("span", {
                  ...e,
                  className: s(E.username, c),
                  style: null != h ? { color: h } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, r.jsx)("span", {
                  className: s(E.infoSpacing, l),
                  children: n,
                })
              : void 0,
            null != i &&
              (0, r.jsx)(u.default, {
                type: i,
                className: s(E.infoSpacing, _),
                verified: o,
              }),
          ],
        });
      };
      var p = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: i,
            forceUsername: s,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...E
          } = e,
          p = (0, o.useStateFromStores)(
            [l.default],
            () => l.default.hidePersonalInformation
          ),
          C = p || t || n.isNonUserBot(),
          v = n.toString(),
          S = c.default.getName(n),
          m = s ? v : null != i ? i : S,
          R = n.isPomelo() || f;
        if (R || m !== v) {
          let e =
              m === v && R && s
                ? c.default.getUserTag(n, { forcePomelo: f })
                : m,
            t = a && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
          return (0, r.jsx)(_, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: h(n),
            showStreamerModeTooltip: p && e !== S,
            ...E,
          });
        }
        return (0, r.jsx)(d.default, {
          name: m,
          botType: h(n),
          botVerified: n.isVerifiedBot(),
          discriminator: C || m !== v ? null : null != u ? u : n.discriminator,
          ...E,
        });
      };
    },
    984557: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var r,
        i = n("884691"),
        s = n("979897"),
        o = n("49671"),
        a = n("773336");
      r = class extends i.Component {
        getFileContents() {
          let { fileContents: e } = this.props;
          return "function" == typeof e && (e = e()), e;
        }
        downloadNative(e, t) {
          o.default.fileManager.saveWithDialog(e, t);
        }
        downloadHtml5(e, t) {
          let n = new Blob([e], { type: this.props.contentType });
          (0, s.saveAs)(n, t);
        }
        render() {
          let { children: e } = this.props,
            t = i.Children.only(e);
          return i.cloneElement(t, { onClick: this.handleFileDownload });
        }
        constructor(...e) {
          super(...e),
            (this.handleFileDownload = e => {
              e.preventDefault();
              let t = this.getFileContents(),
                { fileName: n, onDownload: r } = this.props;
              a.isPlatformEmbedded
                ? this.downloadNative(t, n)
                : this.downloadHtml5(t, n),
                null == r || r();
            });
        }
      };
    },
    184504: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("627445"),
        o = n.n(s),
        a = n("446674"),
        l = n("77078"),
        u = n("913144"),
        d = n("430713"),
        c = n("984557"),
        f = n("367376"),
        E = n("878720"),
        h = n("601745"),
        _ = n("650893"),
        p = n("697218"),
        C = n("145131"),
        v = n("583227"),
        S = n("49111"),
        m = n("482931"),
        R = n("782340"),
        I = n("193384");
      let A = e => {
        let { label: t, text: n, children: i, ...s } = e;
        return (0, r.jsxs)(C.default, {
          direction: C.default.Direction.VERTICAL,
          ...s,
          children: [
            (0, r.jsx)(l.FormTitle, { tag: "h2", children: t }),
            null != n
              ? (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  className: I.sectionBody,
                  children: n,
                })
              : null,
            (0, r.jsx)(C.default.Child, { wrap: !0, children: i }),
          ],
        });
      };
      class N extends i.PureComponent {
        renderSMSSection() {
          let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(S.UserFlags.MFA_SMS),
            i = e.hasFlag(S.UserFlags.PARTNER) || e.hasFlag(S.UserFlags.STAFF);
          return t
            ? (0, r.jsxs)(A, {
                label: R.default.Messages.MFA_SMS_ENABLE,
                text: R.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                children: [
                  (0, r.jsxs)(l.Text, {
                    variant: "text-md/normal",
                    className: I.sectionBody,
                    children: [
                      (0, r.jsx)("strong", {
                        className: I.phoneNumber,
                        children:
                          R.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                            phoneNumber: e.phone,
                          }),
                      }),
                      (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        size: l.Button.Sizes.MIN,
                        className: I.linkButton,
                        onClick: this.handleChangePhoneNumber,
                        children: R.default.Messages.CHANGE_PHONE_NUMBER,
                      }),
                    ],
                  }),
                  (0, r.jsx)(l.Button, {
                    onClick: this.handleEnableSMS,
                    disabled: n || i,
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: i
                      ? R.default.Messages.MFA_SMS_DISABLED_PARTNER
                      : n
                        ? R.default.Messages.MFA_SMS_ALREADY_ENABLED
                        : R.default.Messages.MFA_SMS_ENABLE,
                  }),
                ],
              })
            : (0, r.jsx)(A, {
                label: R.default.Messages.MFA_SMS_ENABLE,
                text: R.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                children: (0, r.jsx)(l.Button, {
                  onClick: this.handleEnableSMS,
                  color: l.Button.Colors.GREEN,
                  size: l.Button.Sizes.SMALL,
                  disabled: i,
                  children: i
                    ? R.default.Messages.MFA_SMS_DISABLED_PARTNER
                    : R.default.Messages.MFA_SMS_ADD_PHONE,
                }),
              });
        }
        renderBackupCodesSection() {
          return (0, r.jsx)(A, {
            label: R.default.Messages.TWO_FA_DOWNLOAD_CODES,
            text: R.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
            children: (0, r.jsx)(c.default, {
              fileContents: this.getDownloadFileContents,
              contentType: "text/plain",
              fileName: "discord_backup_codes.txt",
              onDownload: () =>
                u.default.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
              children: (0, r.jsx)(l.Button, {
                color: l.Button.Colors.GREEN,
                size: l.Button.Sizes.SMALL,
                children: R.default.Messages.TWO_FA_DOWNLOAD_CODES,
              }),
            }),
          });
        }
        renderHeader(e) {
          return (0, r.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
              (0, r.jsxs)(C.default.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    className: I.header,
                    children: f.default.parse(
                      R.default.Messages.TWO_FA_SUCCESS_HEADER
                    ),
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: I.subHeader,
                    children: e,
                  }),
                ],
              }),
              (0, r.jsx)(C.default.Child, {
                grow: 0,
                children: (0, r.jsx)(l.ModalCloseButton, {
                  onClick: this.handleCloseModal,
                }),
              }),
            ],
          });
        }
        renderConfirmModal(e) {
          let { onClose: t } = this.props;
          return (0, r.jsx)(l.DeclarativeConfirmModal, {
            dismissable: !0,
            header: R.default.Messages.TWO_FA_CONFIRM_TITLE,
            confirmText: R.default.Messages.TWO_FA_CONFIRM_CONFIRM,
            cancelText: R.default.Messages.CANCEL,
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
              u.default.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-normal",
              children: e,
            }),
          });
        }
        render() {
          let { isTotp: e } = this.props;
          return e ? this.renderTotp() : this.renderWebAuthn();
        }
        renderTotp() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: I.modal,
            children: [
              this.renderHeader(
                R.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()
              ),
              (0, r.jsxs)(l.ModalContent, {
                className: I.modalInner,
                children: [
                  this.renderSMSSection(),
                  (0, r.jsx)(l.FormDivider, { className: I.divider }),
                  this.renderBackupCodesSection(),
                ],
              }),
              t &&
                this.renderConfirmModal(R.default.Messages.TWO_FA_CONFIRM_BODY),
            ],
          });
        }
        renderWebAuthn() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: I.modal,
            children: [
              this.renderHeader(
                R.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()
              ),
              (0, r.jsx)(l.ModalContent, {
                className: I.modalInner,
                children: this.renderBackupCodesSection(),
              }),
              t &&
                this.renderConfirmModal(
                  R.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY
                ),
            ],
          });
        }
        openPhoneVerificationModal() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, l.openModal)(
            t =>
              (0, r.jsx)(h.default, {
                reason: E.ChangePhoneReason.MFA_PHONE_UPDATE,
                ...t,
                ...e,
              }),
            { modalKey: m.PHONE_VERIFICATION_MODAL_KEY }
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = { showConfirmModal: !1 }),
            (this.handleCloseModal = () => {
              let { onClose: e, hasSeenBackupPrompt: t } = this.props;
              t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            (this.getDownloadFileContents = () => {
              let e = this.props.backupCodes
                  .map(e => {
                    let { consumed: t, code: n } = e;
                    return "* "
                      .concat(n.substr(0, 4), "-")
                      .concat(n.substr(4), " ")
                      .concat(
                        t
                          ? "(".concat(
                              R.default.Messages.TWO_FA_BACKUP_CODE_USED,
                              ")"
                            )
                          : ""
                      );
                  })
                  .join("\r\n"),
                t = R.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                  email: this.props.currentUser.email,
                });
              return "".concat(t, "\r\n\r\n").concat(e);
            }),
            (this.handleChangePhoneNumber = () => {
              this.openPhoneVerificationModal();
            }),
            (this.handleEnableSMS = () => {
              let { currentUser: e } = this.props,
                t = () => {
                  (0, l.openModal)(e =>
                    (0, r.jsx)(v.default, {
                      ...e,
                      handleSubmit: e => d.default.enableSMS(e),
                      title: R.default.Messages.MFA_SMS_ENABLE,
                    })
                  );
                };
              null == e.phone
                ? this.openPhoneVerificationModal({ onAddedPhone: t })
                : t();
            });
        }
      }
      var T = a.default.connectStores([p.default, _.default], () => {
        let e = p.default.getCurrentUser();
        return (
          o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
          {
            currentUser: e,
            backupCodes: _.default.getBackupCodes(),
            hasSeenBackupPrompt: _.default.hasSeenBackupPrompt,
          }
        );
      })(N);
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("76527");
      n.es(r, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("632874");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("618807");
      n.es(r, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("28289");
      n.es(r, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("882039");
      n.es(r, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var r = n("884691");
      function i(e) {
        let [t, n] = (0, r.useState)(!1),
          i = (0, r.useRef)(e.current);
        return (
          (0, r.useEffect)(() => {
            i.current = e.current;
          }, [e]),
          (0, r.useEffect)(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => n(!0),
              r = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", r),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", r);
              }
            );
          }, [i]),
          t
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("446674"),
        i = n("76393");
      function s() {
        return (0, r.useStateFromStores)(
          [i.default],
          () =>
            null != i.default.getRemoteSessionId() ||
            null != i.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("884691");
      let i = r.createContext(void 0);
      var s = i;
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return c;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return h;
          },
          canGuildUseRoleIcons: function () {
            return _;
          },
        }),
        n("781738");
      var r = n("867805"),
        i = n("407063"),
        s = n("315102"),
        o = n("773336"),
        a = n("49111");
      let l = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        d = (0, o.isAndroid)(),
        c = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: E(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let o = s.SUPPORTS_WEBP ? "webp" : "png",
            c = "",
            f = "quality=lossless";
          return (null != t &&
            ((c =
              "size=" +
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())),
            (f = d ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(l, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(o, "?")
                .concat(c)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(c);
        },
        h = e =>
          e.startsWith(l) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        _ = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(a.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return o;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return l;
          },
        });
      var r = n("316693"),
        i = n("923510"),
        s = n("49111");
      let o = s.Permissions.VIEW_CHANNEL,
        a = r.combine(o, s.Permissions.CONNECT),
        l = r.combine(o, i.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    650484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
          PaymentPortalBody: function () {
            return _;
          },
          PaymentPortalFooter: function () {
            return p;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("414456"),
        o = n.n(s),
        a = n("627445"),
        l = n.n(a),
        u = n("817736"),
        d = n.n(u),
        c = n("77078"),
        f = n("642906"),
        E = n("304006");
      function h(e) {
        var t, n, s, a, u, d;
        let {
            header: h,
            isLargeModal: _,
            stepProps: p,
          } = (function (e) {
            let { header: t, isLargeModal: n, ...r } = e;
            return { header: t, isLargeModal: n, stepProps: r };
          })(e),
          {
            step: C,
            stepConfigs: v,
            setBodyNode: S,
            setFooterNode: m,
            setModalOverlayNode: R,
            setReadySlideId: I,
          } = (0, f.usePaymentContext)(),
          A = v.find(e => e.key === C);
        i.useEffect(() => {
          R(null);
        }, [C, R]),
          l(null != A, "Unknown step for current payment flow.");
        let N =
            null !==
              (u =
                null == A
                  ? void 0
                  : null === (t = A.options) || void 0 === t
                    ? void 0
                    : t.hideSlider) &&
            void 0 !== u &&
            u,
          T =
            null == A
              ? void 0
              : null === (n = A.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          g =
            void 0 !== _ && _
              ? E.sliderBodyLarge
              : null == A
                ? void 0
                : null === (s = A.options) || void 0 === s
                  ? void 0
                  : s.sliderBodyClassName;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            null ===
              (d =
                null == A
                  ? void 0
                  : null === (a = A.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === d ||
            d
              ? h
              : null,
            A.renderStep(p),
            null == C || N
              ? null
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(c.ModalContent, {
                      className: o(E.body, T),
                      children: (0, r.jsx)(c.Slides, {
                        activeSlide: C,
                        centered: !1,
                        onSlideReady: e => I(e),
                        children: v
                          .filter(e => null != e.key)
                          .map(e =>
                            (0, r.jsx)(
                              c.Slide,
                              {
                                id: e.key,
                                children: (0, r.jsx)("form", {
                                  className: o(E.sliderBody, g),
                                  ref: e => S(e),
                                  onSubmit: e => e.preventDefault(),
                                }),
                              },
                              e.key
                            )
                          ),
                      }),
                    }),
                    (0, r.jsx)("div", { ref: e => m(e) }),
                    (0, r.jsx)("div", { ref: e => R(e) }),
                  ],
                }),
          ],
        });
      }
      function _(e) {
        let { children: t } = e,
          { bodyNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
      }
      function p(e) {
        let { children: t } = e,
          { footerNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("748820"),
        s = n("77078"),
        o = n("112679"),
        a = n("55689"),
        l = n("676379"),
        u = n("697218"),
        d = n("599110"),
        c = n("659500"),
        f = n("719923"),
        E = n("49111"),
        h = n("646718");
      function _(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: _,
            onClose: p,
            onComplete: C,
            onSubscriptionConfirmation: v,
            analyticsLocations: S,
            analyticsObject: m,
            analyticsLocation: R,
            analyticsSourceLocation: I,
            isGift: A = !1,
            giftMessage: N,
            subscriptionTier: T,
            trialId: g,
            postSuccessGuild: M,
            openInvoiceId: O,
            applicationId: P,
            referralTrialOfferId: y,
            giftRecipient: x,
            returnRef: b,
            subscription: D,
            skipConfirm: F,
          } = null != e ? e : {},
          w = !1,
          L = (0, i.v4)(),
          V = u.default.getCurrentUser(),
          U = (0, f.isPremiumExactly)(V, h.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: i, ...s } = n;
              return (0, r.jsx)(e, {
                ...s,
                loadId: L,
                subscriptionTier: T,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(T),
                isGift: A,
                giftMessage: N,
                giftRecipient: x,
                initialPlanId: t,
                followupSKUInfo: _,
                onClose: (e, t) => {
                  i(),
                    null == p || p(e),
                    e &&
                      (null == v || v(),
                      !A &&
                        null != t &&
                        t === h.PremiumSubscriptionSKUs.TIER_2 &&
                        !U &&
                        c.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (w = !0),
                    null == C || C(),
                    !A && (0, l.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: v,
                analyticsLocations: S,
                analyticsObject: m,
                analyticsLocation: R,
                analyticsSourceLocation: I,
                trialId: g,
                postSuccessGuild: M,
                planGroup: h.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: O,
                applicationId: P,
                referralTrialOfferId: y,
                returnRef: b,
                subscription: D,
                skipConfirm: !!F,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !w &&
                d.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: L,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != R ? R : m,
                  source: I,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: A,
                  eligible_for_trial: null != g,
                  application_id: P,
                  location_stack: S,
                }),
                (0, o.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == p || p(w),
                w && (null == v || v());
            },
          }
        );
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return h;
          },
          getManageResourcePermissions: function () {
            return _;
          },
        }),
        n("222007");
      var r = n("884691"),
        i = n("316693"),
        s = n("446674"),
        o = n("813006");
      n("923959");
      var a = n("957255"),
        l = n("697218");
      n("991170");
      var u = n("270161"),
        d = n("843455");
      let c = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, r) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
          if ("userId" in e) return r && null != t && e.userId === t.id;
          if ("user" in e) {
            var i;
            return (
              r &&
              null != t &&
              (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id
            );
          }
          return !1;
        },
        E = e => {
          if (null == e)
            return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              i.combine(t, d.Permissions.CREATE_EVENTS),
              i.combine(t, d.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        h = e => {
          let [t, n] =
              e instanceof o.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : E(e),
            [i, u, h, _] = (0, s.useStateFromStoresArray)([a.default], () => [
              a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            p = (0, s.useStateFromStores)([l.default], () =>
              l.default.getCurrentUser()
            ),
            C = r.useCallback(e => f(e, p, u, i), [i, u, p]),
            v = r.useCallback(e => f(e, p, _, h), [_, h, p]);
          return null == e
            ? c
            : {
                canCreateExpressions: i,
                canCreateGuildEvent: h,
                canManageAllExpressions: u,
                canManageAllEvents: _,
                canManageGuildExpression: C,
                canManageGuildEvent: v,
              };
        },
        _ = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : l.default,
            [r, i] =
              e instanceof o.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : E(e),
            s = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            h = t.can(r, e),
            _ = t.can(i, e),
            p = n.getCurrentUser();
          return null == e
            ? c
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: h,
                canManageAllExpressions: u,
                canManageAllEvents: _,
                canManageGuildExpression: e => f(e, p, u, s),
                canManageGuildEvent: e => f(e, p, _, h),
              };
        };
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return i;
          },
          default: function () {
            return f;
          },
        });
      var r,
        i,
        s = n("759843"),
        o = n("872717"),
        a = n("913144"),
        l = n("271938"),
        u = n("840707"),
        d = n("482931"),
        c = n("49111");
      ((r = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          a.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          o.HTTP.del({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = l.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            o.HTTP.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          o.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          o.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          o.HTTP.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          o.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          o.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          o.HTTP.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = {},
            o = l.default.getFingerprint();
          null != o && "" !== o && (i["X-Fingerprint"] = o),
            r && (i.authorization = "");
          let f = await u.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: i,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: s.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              a.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY,
              }),
            f.body
          );
        },
      };
    },
    482931: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PHONE_VERIFICATION_MODAL_KEY: function () {
            return r;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return i;
          },
        });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        i = 6;
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return i;
          },
        });
      var r = n("913144");
      let i = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("884691"),
        i = n("79112"),
        s = n("685665"),
        o = n("929423");
      n("424562");
      var a = n("49111"),
        l = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: d,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, s.default)(),
          E = (0, r.useCallback)(() => {
            null != t && (0, o.initGuildIdentitySettings)(t, null != d ? d : f),
              i.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? l.ProfileCustomizationSubsection.GUILD
                  : l.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: u,
                  analyticsLocations: d,
                  openWithoutBackstack: c,
                }
              );
          }, [t, n, u, d, c, f]);
        return E;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return C;
          },
          useCanStartPublicThread: function () {
            return v;
          },
          computeCanStartPublicThread: function () {
            return S;
          },
          useCanStartPrivateThread: function () {
            return m;
          },
          useCanStartThread: function () {
            return R;
          },
          useCanViewThreadForMessage: function () {
            return A;
          },
          useHasActiveThreads: function () {
            return N;
          },
          useCanManageThread: function () {
            return T;
          },
          useCanUnarchiveThread: function () {
            return O;
          },
          canUnarchiveThread: function () {
            return P;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return x;
          },
          computeIsReadOnlyThread: function () {
            return b;
          },
          useIsThreadModerator: function () {
            return F;
          },
          useCanJoinThreadVoice: function () {
            return w;
          },
          useIsNonModInLockedThread: function () {
            return L;
          },
        });
      var r = n("917351"),
        i = n.n(r),
        s = n("316693"),
        o = n("446674"),
        a = n("296892"),
        l = n("889014"),
        u = n("913491"),
        d = n("233069"),
        c = n("271938"),
        f = n("42203"),
        E = n("957255"),
        h = n("299039"),
        _ = n("401690"),
        p = n("49111");
      let C = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function v(e, t) {
        let n = (0, o.useStateFromStores)(
          [E.default],
          () => {
            let t = e.isForumLikeChannel()
              ? p.Permissions.SEND_MESSAGES
              : s.combine(
                  p.Permissions.CREATE_PUBLIC_THREADS,
                  p.Permissions.READ_MESSAGE_HISTORY
                );
            return E.default.can(t, e);
          },
          [e]
        );
        return I(n, e, t);
      }
      function S(e, t) {
        let n = e.isForumLikeChannel()
            ? p.Permissions.SEND_MESSAGES
            : s.combine(
                p.Permissions.CREATE_PUBLIC_THREADS,
                p.Permissions.READ_MESSAGE_HISTORY
              ),
          r = E.default.can(n, e);
        return I(r, e, t);
      }
      function m(e) {
        let t = (0, o.useStateFromStores)(
          [E.default],
          () =>
            E.default.can(s.combine(p.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === p.ChannelTypes.GUILD_TEXT && I(t, e);
      }
      function R(e) {
        let t = v(e),
          n = m(e);
        return t || n;
      }
      function I(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !d.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function A(e) {
        let t = (0, o.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(h.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, o.useStateFromStores)(
            [E.default],
            () => E.default.can(p.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function N(e) {
        return (0, o.useStateFromStoresObject)([_.default, E.default], () => {
          let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = _.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = i(n).some(e =>
              E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)
            ),
            o = i(t).some(
              e =>
                !(e.channel.id in n) &&
                E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = i(r).some(e => E.default.can(p.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: s || o || a,
            hasMoreActiveThreads: a || o,
          };
        });
      }
      function T(e) {
        let t = (0, o.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, o.useStateFromStores)(
            [E.default],
            () => null != t && E.default.can(p.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, o.useStateFromStores)([c.default], () => c.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function g(e, t) {
        return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function M(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function O(e) {
        let t = (0, o.useStateFromStores)([E.default], () => g(e, E.default)),
          n = F(e);
        return M(e, t, n);
      }
      function P(e) {
        let t = g(e, E.default),
          n = (function (e) {
            return D(e, E.default);
          })(e);
        return M(e, t, n);
      }
      function y(e) {
        var t;
        let n = (0, o.useStateFromStores)(
          [E.default],
          () =>
            null != e &&
            E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function x(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = E.default.can(p.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function D(e, t) {
        return null != e && t.can(p.Permissions.MANAGE_THREADS, e);
      }
      function F(e) {
        return (0, o.useStateFromStores)([E.default], () => D(e, E.default));
      }
      function w(e) {
        let t = (0, l.default)(),
          n = (0, o.useStateFromStores)([E.default], () =>
            E.default.can(p.Permissions.CONNECT, e)
          ),
          r = y(e),
          i = C.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && i && n && r;
      }
      function L(e) {
        let t = F(e);
        return e.isLockedThread() && !t;
      }
    },
    892313: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n("917351"),
        i = n.n(r),
        s = n("49111"),
        o = n("782340");
      let {
          CAPTCHA: a,
          EMAIL: l,
          PHONE: u,
          REVERIFY_EMAIL: d,
          REVERIFY_PHONE: c,
        } = s.VerificationTypes,
        f = {
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [l],
          [s.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [c],
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
            l,
            u,
          ],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
            u,
            d,
          ],
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [
            l,
            c,
          ],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]:
            [d, c],
          [s.UserRequiredActions.REQUIRE_CAPTCHA]: [a],
          [s.UserRequiredActions.AGREEMENTS]: [],
        };
      var E = {
        isPhoneReverification: (e, t) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (t === s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE ||
            t ===
              s.UserRequiredActions
                .REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t ===
              s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: e =>
          e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL ||
          e ===
            s.UserRequiredActions
              .REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e ===
            s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: e =>
          null == e || "symbol" == typeof e ? [] : f[e],
        getButtonTitle(e) {
          switch (e) {
            case s.VerificationTypes.EMAIL:
              return o.default.Messages.VERIFY_BY_EMAIL;
            case s.VerificationTypes.PHONE:
              return o.default.Messages.START_PHONE_VERIFICATION_BUTTON;
            case s.VerificationTypes.REVERIFY_EMAIL:
              return o.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case s.VerificationTypes.REVERIFY_PHONE:
              return o.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
              return o.default.Messages.START_VERIFICATION_BUTTON;
          }
        },
        areVerificationTypesEqual: (e, t) => i.isEqual(e, t),
      };
    },
    330387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("446674"),
        i = n("913144");
      let s = null;
      class o extends r.default.Store {
        hasAction() {
          return null != s;
        }
        getAction() {
          return s;
        }
      }
      function a(e) {
        s = e.requiredAction;
      }
      o.displayName = "UserRequiredActionStore";
      var l = new o(i.default, {
        CONNECTION_OPEN: a,
        USER_REQUIRED_ACTION_UPDATE: a,
      });
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("414456"),
        o = n.n(s),
        a = n("77078"),
        l = n("760607"),
        u = n("684133");
      function d(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: d,
            ...c
          } = e,
          f = i.Children.only(t),
          E = (0, a.useRedesignIconContext)().enabled;
        return (0, r.jsxs)("div", {
          className: o(u.flowerStarContainer, s),
          style: { width: n, height: n },
          children: [
            (0, r.jsx)(l.default, { ...c, className: o(d, u.flowerStar) }),
            (0, r.jsx)("div", {
              className: o(u.childContainer, {
                [u.redesignIconChildContainer]: E,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    754474: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BotTypes: function () {
            return a.BotTagTypes;
          },
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        o = n("79798"),
        a = n("988268"),
        l = n("293005"),
        u = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: i,
            nameColor: a,
            className: u,
            botType: d,
            usernameClass: c,
            discriminatorClass: f,
            botClass: E,
            botVerified: h = !1,
            style: _,
            useRemSizes: p = !1,
            usernameIcon: C,
          } = e;
          return (0, r.jsxs)("div", {
            className: s(u, l.nameTag),
            style: _,
            children: [
              (0, r.jsxs)("span", {
                className: s(l.username, c),
                style: null != a ? { color: a } : void 0,
                children: [C, t],
              }),
              null != n
                ? (0, r.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != d
                ? (0, r.jsx)(o.default, {
                    type: d,
                    invertColor: i,
                    className: s(E, l.bot),
                    verified: h,
                    useRemSizes: p,
                  })
                : null,
            ],
          });
        };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return i;
          },
          Shine: function () {
            return p;
          },
          default: function () {
            return v;
          },
        });
      var r,
        i,
        s = n("37983"),
        o = n("884691"),
        a = n("414456"),
        l = n.n(a),
        u = n("458960"),
        d = n("77078"),
        c = n("252744"),
        f = n("145131"),
        E = n("61435");
      ((r = i || (i = {})).DEFAULT = "default"), (r.SMALL = "small");
      let h = { default: E.shineDefault, small: E.shineSmall },
        _ = { default: E.shineInnerDefault, small: E.shineInnerSmall };
      class p extends o.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
          return (0, s.jsx)(u.default.div, {
            ...r,
            className: l(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, s.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: h[t],
              children: (0, s.jsx)("div", { className: _[t] }),
            }),
          });
        }
      }
      p.defaultProps = { shineSize: "default" };
      let C = e => {
        let {
            children: t,
            className: n,
            disabled: r,
            submitting: i,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: h,
            onlyShineOnHover: _,
            ...C
          } = e,
          v = o.createRef(),
          S = (0, c.default)(v),
          m = !r && !i && !0 !== a && (!_ || S);
        return (0, s.jsxs)(d.Button, {
          buttonRef: v,
          ...C,
          className: l(E.shinyButton, n),
          disabled: r,
          submitting: i,
          children: [
            t,
            m
              ? (0, s.jsx)(p, {
                  shinePaused: f,
                  className: l(
                    E.buttonShine,
                    _ ? E.onlyShineOnHover : void 0,
                    h
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      C.ShineSizes = i;
      var v = C;
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return l;
          },
        });
      var r = n("995008"),
        i = n.n(r),
        s = n("775560");
      let o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        a = () => (0, s.useLazyValue)(() => o()),
        l = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        o = n("384737"),
        a = n("448052"),
        l = n("748802"),
        u = n("260792"),
        d = n("77078"),
        c = n("75196"),
        f = n("366842");
      let E = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        h = e => {
          let {
              direction: t = E.DOWN,
              width: n = 24,
              height: i = 24,
              color: h = "currentColor",
              transition: _ = f.transition,
              className: p,
              foreground: C,
              expanded: v,
              ...S
            } = e,
            { enabled: m } = (0, d.useRedesignIconContext)(),
            R = t;
          if ((!0 === v ? (R = E.DOWN) : !1 === v && (R = E.RIGHT), m)) {
            let e = {
              [E.UP]: u.ChevronSmallUpIcon,
              [E.DOWN]: o.ChevronSmallDownIcon,
              [E.LEFT]: a.ChevronSmallLeftIcon,
              [E.RIGHT]: l.ChevronSmallRightIcon,
            }[R];
            return (0, r.jsx)(e, {
              ...S,
              className: p,
              width: n,
              height: i,
              color: h,
              colorClass: C,
            });
          }
          return (0, r.jsx)("svg", {
            className: s(p, _, R),
            width: n,
            height: i,
            viewBox: "0 0 24 24",
            ...(0, c.default)(S),
            children: (0, r.jsx)("path", {
              className: C,
              fill: "none",
              stroke: h,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      h.Directions = E;
      var _ = h;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("733154"),
        o = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, o.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                className: s,
                fill: i,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          s.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("469563"),
        o = n("163725"),
        a = n("75196"),
        l = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foregroundColor: o = i.default.unsafe_rawColors.RED_400.css,
              foreground: l,
              background: u,
              ...d
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, a.default)(d),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: o,
                  className: l,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: s,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          o.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196"),
        s = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: s = "currentColor",
            foreground: o,
            ...a
          } = e;
          return (0, r.jsx)("svg", {
            ...(0, i.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, r.jsx)("path", {
              className: o,
              fill: s,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196");
      function s(e) {
        let { width: t = 104, height: n = 80, ...s } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("424823"),
        o = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, o.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: i,
                className: s,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("390300"),
        o = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, o.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: s,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("287083"),
        o = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: i = "currentColor",
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, o.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: i,
              }),
            });
          },
          s.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return o;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var r = n("281071"),
        i = n("773336"),
        s = n("50885");
      let o = (() => {
        if (i.isPlatformEmbedded) return null != s.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!o && (i.isPlatformEmbedded ? (s.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return a;
          },
        });
      var r = n("884691"),
        i = n("446674"),
        s = n("244201"),
        o = n("471671");
      function a() {
        let { windowId: e } = r.useContext(s.default);
        return (0, i.useStateFromStores)(
          [o.default],
          () => o.default.isFocused(e),
          [e]
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: a,
          }),
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
            }),
          ],
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
            }),
          ],
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return o;
          },
        }),
        n("222007");
      var r = n("817736"),
        i = n("118810");
      let s = { root: null, rootMargin: "0px", threshold: 0.5 };
      class o {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, r.findDOMNode)(e);
          (0, i.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = s) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      }
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilitySensor: function () {
            return u;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("884691"),
        i = n("748820"),
        s = n("157590");
      let o = (0, i.v4)(),
        a = new Map(),
        l = new Map();
      class u extends r.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = l.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return r.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: r } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, i.v4)())
            : (this.elementId = o);
          let u = this.getVisibilityObserverId();
          !l.has(u) &&
            l.set(
              u,
              new s.VisibilityObserver({ root: t, rootMargin: n, threshold: r })
            );
        }
      }
      u.defaultProps = {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return r.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return i.VisibilitySensor;
          },
        }),
        n("6268");
      var r = n("157590"),
        i = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          i = document.createElement("textarea");
        (i.value = e),
          (i.contentEditable = "true"),
          (i.style.visibility = "none"),
          t.appendChild(i),
          n.selectNodeContents(i),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          i.focus(),
          i.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(i), s;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=ec02e5f03d647fb7b76f.js.map
