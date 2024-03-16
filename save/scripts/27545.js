(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27545"],
  {
    741161: function (e, t, a) {
      "use strict";
      e.exports = a.p + "58bf98682d30fb823326.svg";
    },
    687444: function (e, t, a) {
      "use strict";
      e.exports = a.p + "090a89c5314322102655.svg";
    },
    890747: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          uploadRtcLogFiles: function () {
            return d;
          },
        }),
        a("222007");
      var n = a("811022"),
        l = a("872717"),
        o = a("448993"),
        s = a("42887"),
        r = a("254490"),
        i = a("49671"),
        c = a("49111");
      let u = new n.default("uploadRtcLogFiles");
      async function d(e, t) {
        let a;
        if (null == i.default.fileManager.readLogFiles)
          throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL);
        let n = [];
        try {
          n = (n = await i.default.fileManager.readLogFiles(e)).map(e =>
            (0, r.transformNativeFile)(e, "application/octet-stream")
          );
        } catch (e) {
          throw (
            (u.error("uploadDebugFiles: read error '".concat(e, "'")),
            new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.READ))
          );
        }
        if (0 === n.length)
          throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.NO_FILE);
        try {
          let e = { extraInfo: t, mediaEngineState: s.default.getState() };
          a = await l.default.post({
            url: c.Endpoints.DEBUG_LOGS(c.DebugLogCategory.RTC),
            attachments: [
              ...n.map(e => ({ name: e.name, file: e, filename: e.name })),
              {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(e, void 0, 2)]),
              },
            ],
          });
        } catch (e) {
          if (429 === e.status)
            throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.PROGRESS);
          throw (
            (u.error(
              "Debug log upload error: status: "
                .concat(e.status, ", message: ")
                .concat(e.message)
            ),
            new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.UPLOAD))
          );
        }
        let d = n.length + 1;
        if ("success_count" in a.body && a.body.success_count !== d)
          throw (
            (u.error(
              "Debug log upload: stored files "
                .concat(a.body.success_count, " !== ")
                .concat(d)
            ),
            new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL))
          );
        if (
          ("store_success" in a.body && !a.body.store_success) ||
          ("id_match" in a.body && !a.body.id_match) ||
          ("all_success" in a.body && !a.body.all_success)
        )
          throw (
            (u.error(
              "Debug log upload: store_success: ".concat(
                a.body.store_success,
                " / "
              ) +
                "id_match: ".concat(a.body.id_match, " / ") +
                "all_success: ".concat(a.body.all_success)
            ),
            new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL))
          );
      }
    },
    367632: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          fetchBugReportConfig: function () {
            return c;
          },
          getFeatureId: function () {
            return u;
          },
          getPriorities: function () {
            return d;
          },
          submitReport: function () {
            return m;
          },
        }),
        a("424973");
      var n = a("759843"),
        l = a("872717"),
        o = a("147746");
      a("18108"), a("773336");
      var s = a("840707"),
        r = a("49111"),
        i = a("782340");
      async function c() {
        let e = await l.default.get({ url: r.Endpoints.BUG_REPORTS });
        return e.body;
      }
      function u(e) {
        var t, a;
        return null !==
          (a =
            null !== (t = null == e ? void 0 : e.name) && void 0 !== t
              ? t
              : "" + (null == e ? void 0 : e.squad)) && void 0 !== a
          ? a
          : "";
      }
      function d() {
        return [
          {
            title: i.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
            description:
              i.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
            emoji: "801497159479722084",
            value: 0,
          },
          {
            title: i.default.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
            description:
              i.default.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
            emoji: "410336837563973632",
            value: 1,
          },
          {
            title: i.default.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
            description:
              i.default.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
            emoji: "841420679643529296",
            value: 2,
          },
          {
            title: i.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
            description:
              i.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
            emoji: "827645852352512021",
            value: 3,
          },
        ];
      }
      async function m(e, t, a) {
        var l, i;
        let c = [
          { name: "name", value: e.name },
          { name: "priority", value: "".concat(e.priority) },
          {
            name: "override_platform_information",
            value: "".concat(t.overridePlatformInformation),
          },
        ];
        "" !== e.description &&
          c.push({ name: "description", value: e.description }),
          "" !== e.url && c.push({ name: "external_url", value: e.url });
        let u =
          null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
        null != u &&
          "" !== u &&
          c.push({ name: "asana_inbox_id", value: "".concat(u) });
        let d = null === (i = e.feature) || void 0 === i ? void 0 : i.name;
        null != d && "" !== d && c.push({ name: "feature_name", value: d }),
          t.overridePlatformInformation &&
            (c.push({ name: "device", value: t.device }),
            c.push({ name: "os", value: t.operatingSystem }),
            c.push({ name: "os_version", value: t.operatingSystemVersion }),
            c.push({ name: "client_version", value: t.clientVersion }),
            c.push({ name: "client_build_number", value: t.clientBuildNumber }),
            c.push({
              name: "release_channel",
              value: window.GLOBAL_ENV.RELEASE_CHANNEL,
            }),
            c.push({ name: "locale", value: t.locale })),
          (0, o.uploadDebugLogFiles)(r.DebugLogCategory.WEB_APP);
        try {
          return await s.default.post({
            url: r.Endpoints.BUG_REPORTS,
            attachments: a,
            fields: c,
            trackedActionData: {
              event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
              properties: { priority: e.priority, asana_inbox_id: u },
            },
          });
        } catch (e) {
          return e;
        }
      }
    },
    374159: function (e, t, a) {
      "use strict";
      function n(e) {
        return e.map((e, t) => {
          var a, n;
          return {
            file: e.file,
            name:
              null !== (n = e.id) && void 0 !== n ? n : "attachment_".concat(t),
            filename: null === (a = e.file) || void 0 === a ? void 0 : a.name,
          };
        });
      }
      a.r(t),
        a.d(t, {
          getAttachments: function () {
            return n;
          },
        });
    },
    323518: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return O;
          },
        }),
        a("222007");
      var n = a("37983"),
        l = a("884691"),
        o = a("748820"),
        s = a("446674"),
        r = a("819855"),
        i = a("77078"),
        c = a("371642"),
        u = a("966724"),
        d = a("9560"),
        m = a("761354"),
        f = a("161778"),
        g = a("228220"),
        p = a("258078"),
        h = a("149279"),
        _ = a("315102"),
        v = a("773336"),
        E = a("367632"),
        R = a("374159"),
        x = a("782340"),
        I = a("521870"),
        T = a("741161"),
        S = a("687444");
      let N = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map(e => ({ label: e, value: e }));
      function O(e) {
        var t, O, b, j, L;
        let { transitionState: C, onClose: P } = e,
          U = l.useRef(null),
          y = l.useRef(null),
          [B, M] = l.useState(""),
          [w, D] = l.useState(""),
          [F, G] = l.useState(),
          [A, V] = l.useState(""),
          [k, Y] = l.useState([]),
          [H, W] = l.useState(),
          [K, z] = l.useState(),
          [J, X] = l.useState(!1),
          [Q, q] = l.useState(""),
          [Z, $] = l.useState(
            (function (e) {
              switch (e) {
                case "windows":
                  return "Windows";
                case "macos":
                  return "Mac OS X";
                case "linux":
                  return "Linux";
              }
              return "";
            })((0, v.getOS)())
          ),
          [ee, et] = l.useState(""),
          [ea, en] = l.useState(""),
          [el, eo] = l.useState(""),
          [es, er] = l.useState(""),
          [ei, ec] = l.useState(!1),
          [eu, ed] = l.useState(!1),
          [em, ef] = l.useState(!1),
          eg = () => {
            null == P || P();
          },
          ep = e => {
            Y(k.filter(t => t.id !== e));
          };
        async function eh() {
          var e;
          if ((ef(!1), "" === B || null == F)) {
            ec(!0);
            return;
          }
          let t =
            null == H
              ? void 0
              : null === (e = H.features) || void 0 === e
                ? void 0
                : e.find(e => (0, E.getFeatureId)(e) === K);
          ed(!0), ec(!1);
          let l = (0, R.getAttachments)(
              k.map(e => {
                let { item: t } = e;
                return t;
              })
            ),
            o =
              !0 === J
                ? {
                    overridePlatformInformation: J,
                    device: Q,
                    operatingSystem: Z,
                    operatingSystemVersion: ee,
                    clientVersion: ea,
                    clientBuildNumber: el,
                    locale: es,
                  }
                : { overridePlatformInformation: J },
            s = await (0, E.submitReport)(
              { name: B, description: w, priority: F, feature: t, url: A },
              o,
              l
            ).catch(() => ef(!0));
          ed(!1),
            null != s && s.ok
              ? (window.open(s.body.permalink_url, "_blank"),
                eg(),
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await a
                    .el("223993")
                    .then(a.bind(a, "223993"));
                  return t => (0, n.jsx)(e, { ...t, asanaTask: s.body });
                }))
              : ef(!0);
        }
        l.useEffect(() => {
          (async function e() {
            let e = await (0, E.fetchBugReportConfig)();
            W(e);
          })();
        }, []),
          l.useEffect(() => {
            if (k.length > 0) {
              var e;
              null === (e = y.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [k]);
        let e_ = (0, s.useStateFromStores)([f.default], () => f.default.theme),
          ev = (0, r.isThemeDark)(e_) ? T : S;
        return (0, n.jsx)(i.ModalRoot, {
          className: I.modalRoot,
          transitionState: C,
          "aria-label": x.default.Messages.SUBMIT_BUG,
          children: (0, n.jsx)(i.ModalContent, {
            className: I.modalContent,
            paddingFix: !1,
            children: (0, n.jsx)("div", {
              className: I.container,
              children: (0, n.jsx)(i.HeadingLevel, {
                forceLevel: 1,
                component: (0, n.jsx)("div", {
                  className: I.sidebarContainer,
                  children: (0, n.jsx)(p.default, {
                    strong: !0,
                    color: p.default.Colors.HEADER_PRIMARY,
                    size: p.default.Sizes.SIZE_24,
                    children: (0, n.jsx)(i.H, {
                      children: x.default.Messages.BUG_REPORT_TITLE,
                    }),
                  }),
                }),
                children: (0, n.jsxs)("div", {
                  className: I.contentContainer,
                  children: [
                    (0, n.jsx)("img", {
                      className: I.contentIcon,
                      alt: "",
                      src: ev,
                    }),
                    (0, n.jsxs)("form", {
                      className: I.form,
                      onSubmit: eh,
                      children: [
                        (0, n.jsx)(i.FormItem, {
                          error:
                            ei && "" === B ? x.default.Messages.REQUIRED : null,
                          title: x.default.Messages.BUG_REPORT_NAME,
                          className: I.formInput,
                          children: (0, n.jsx)(i.TextInput, {
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: B,
                            maxLength: 100,
                            onChange: M,
                          }),
                        }),
                        (0, n.jsxs)(i.FormItem, {
                          title: x.default.Messages.BUG_REPORT_DESCRIPTION,
                          className: I.formInput,
                          children: [
                            (0, n.jsx)(i.TextArea, {
                              placeholder: "What did you expect to see?",
                              value: w,
                              onChange: D,
                            }),
                            (0, n.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children:
                                "You can add additional information/media on the ticket after submitting",
                            }),
                          ],
                        }),
                        (0, n.jsx)(i.FormItem, {
                          error:
                            ei && void 0 === F
                              ? x.default.Messages.REQUIRED
                              : null,
                          title: x.default.Messages.BUG_REPORT_PRIORITY,
                          className: I.formInput,
                          children: (0, n.jsx)(i.SingleSelect, {
                            renderOptionLabel: e =>
                              (function (e) {
                                let t = e.priority;
                                return (0, n.jsxs)("div", {
                                  className: I.formPriorityImageContainer,
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: I.formPriorityTitleContainer,
                                      children: [
                                        (0, n.jsx)("img", {
                                          alt: "",
                                          className: I.formPriorityImage,
                                          src: (0, _.getEmojiURL)({
                                            id: t.emoji,
                                            animated: !0,
                                            size: 48,
                                          }),
                                        }),
                                        (0, n.jsx)(i.Text, {
                                          color: "header-primary",
                                          variant: "text-sm/semibold",
                                          className: I.formPriorityTitle,
                                          children: t.title,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)(i.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: I.formPriorityDescription,
                                      children: t.description,
                                    }),
                                  ],
                                });
                              })(e),
                            onChange: G,
                            options: (0, E.getPriorities)().map(e => ({
                              priority: e,
                              value: e.value,
                              label: e.title,
                            })),
                            value: F,
                            maxVisibleItems: 3,
                            closeOnSelect: !0,
                          }),
                        }),
                        (0, n.jsx)(i.FormItem, {
                          title: x.default.Messages.BUG_REPORT_FEATURE_AREA,
                          className: I.formInput,
                          children: (0, n.jsx)(i.SearchableSelect, {
                            value: K,
                            options:
                              null !==
                                (L =
                                  null == (t = H)
                                    ? void 0
                                    : null === (j = t.features) || void 0 === j
                                      ? void 0
                                      : null ===
                                            (b = j.filter(
                                              e => "" !== (0, E.getFeatureId)(e)
                                            )) || void 0 === b
                                        ? void 0
                                        : null ===
                                              (O = b.map(e => {
                                                var t;
                                                return {
                                                  label:
                                                    null !== (t = e.name) &&
                                                    void 0 !== t
                                                      ? t
                                                      : "",
                                                  value: (0, E.getFeatureId)(e),
                                                };
                                              })) || void 0 === O
                                          ? void 0
                                          : O.sort((e, t) =>
                                              e.label.localeCompare(t.label)
                                            )) && void 0 !== L
                                ? L
                                : [],
                            isDisabled: null == H,
                            onChange: e => z(e),
                          }),
                        }),
                        (0, n.jsx)(i.FormItem, {
                          title: x.default.Messages.BUG_REPORT_URL,
                          className: I.formInput,
                          children: (0, n.jsx)(i.TextInput, {
                            placeholder:
                              x.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                            type: "text",
                            value: A,
                            maxLength: 5e3,
                            onChange: V,
                          }),
                        }),
                        (0, n.jsx)(i.FormItem, {
                          className: I.formInput,
                          children: (0, n.jsx)(i.Checkbox, {
                            value: J,
                            onChange: (e, t) => X(t),
                            children: (0, n.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children:
                                x.default.Messages
                                  .BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION,
                            }),
                          }),
                        }),
                        J
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(i.FormItem, {
                                  title: x.default.Messages.BUG_REPORT_DEVICE,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.TextInput, {
                                    placeholder: "Device",
                                    value: Q,
                                    onChange: e => q(e),
                                  }),
                                }),
                                (0, n.jsx)(i.FormItem, {
                                  title: x.default.Messages.BUG_REPORT_OS,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.SingleSelect, {
                                    value: Z,
                                    options: N,
                                    onChange: e => $(e),
                                  }),
                                }),
                                (0, n.jsx)(i.FormItem, {
                                  title:
                                    x.default.Messages.BUG_REPORT_OS_VERSION,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.TextInput, {
                                    placeholder: "Operating System Version",
                                    value: ee,
                                    onChange: e => et(e),
                                  }),
                                }),
                                (0, n.jsx)(i.FormItem, {
                                  title:
                                    x.default.Messages
                                      .BUG_REPORT_CLIENT_VERSION,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.TextInput, {
                                    placeholder: "Client Version",
                                    value: ea,
                                    onChange: e => en(e),
                                  }),
                                }),
                                (0, n.jsx)(i.FormItem, {
                                  title:
                                    x.default.Messages
                                      .BUG_REPORT_CLIENT_BUILD_NUMBER,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.TextInput, {
                                    placeholder: "Client Build Number",
                                    value: el,
                                    onChange: e => eo(e),
                                  }),
                                }),
                                (0, n.jsx)(i.FormItem, {
                                  title: x.default.Messages.BUG_REPORT_LOCALE,
                                  className: I.formInput,
                                  children: (0, n.jsx)(i.TextInput, {
                                    placeholder: "Locale",
                                    value: es,
                                    onChange: e => er(e),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, n.jsxs)(i.Button, {
                          className: I.uploadButton,
                          children: [
                            x.default.Messages.BUG_REPORT_ADD_ATTACHMENTS,
                            (0, n.jsx)(c.default, {
                              ref: U,
                              onChange: e => {
                                var t, a;
                                if (
                                  (null === (a = e.currentTarget) ||
                                  void 0 === a
                                    ? void 0
                                    : null === (t = a.files) || void 0 === t
                                      ? void 0
                                      : t[0]) != null
                                ) {
                                  let t = Array.from(e.currentTarget.files).map(
                                    e =>
                                      new u.default({
                                        id: (0, o.v4)(),
                                        file: e,
                                        platform: u.UploadPlatform.WEB,
                                      })
                                  );
                                  Y([...k, ...t]);
                                }
                              },
                              multiple: !0,
                            }),
                          ],
                        }),
                        k.length > 0
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("div", {
                                  className: I.imageOptionsContainer,
                                  children: (0, n.jsx)(i.FormTitle, {
                                    children: "Preview",
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  ref: y,
                                  className: I.attachmentsGrid,
                                  children:
                                    k.length > 0 &&
                                    k.map(e =>
                                      (0, n.jsxs)(
                                        "div",
                                        {
                                          className: I.attachmentsGridItem,
                                          children: [
                                            (0, n.jsx)(i.Text, {
                                              variant: "text-sm/normal",
                                              children: e.filename,
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: I.attachmentContainer,
                                              children: [
                                                (0, n.jsx)(m.UploadIcon, {
                                                  upload: e,
                                                }),
                                                (0, n.jsx)("div", {
                                                  className: I.toolBar,
                                                  children: (0, n.jsx)(
                                                    h.default,
                                                    {
                                                      children: (0, n.jsx)(
                                                        d.default,
                                                        {
                                                          tooltip:
                                                            x.default.Messages
                                                              .ATTACHMENT_UTILITIES_REMOVE,
                                                          onClick: () =>
                                                            ep(e.id),
                                                          dangerous: !0,
                                                          children: (0, n.jsx)(
                                                            g.default,
                                                            {}
                                                          ),
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                    ),
                                }),
                              ],
                            })
                          : null,
                        em
                          ? (0, n.jsx)(i.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              children: "Something went wrong, try again!",
                            })
                          : null,
                      ],
                    }),
                    (0, n.jsxs)(i.ModalFooter, {
                      className: I.submitContainer,
                      children: [
                        (0, n.jsx)(i.Button, {
                          className: I.formButton,
                          look: i.ButtonLooks.BLANK,
                          onClick: eg,
                          children: (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: x.default.Messages.CANCEL,
                          }),
                        }),
                        (0, n.jsx)(i.Button, {
                          submitting: eu,
                          className: I.formButton,
                          onClick: eh,
                          children: "Submit and Open Report",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    147746: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          uploadDebugLogFiles: function () {
            return f;
          },
        });
      var n = a("872717"),
        l = a("890747"),
        o = a("42203"),
        s = a("821316"),
        r = a("605250"),
        i = a("836403"),
        c = a("825287"),
        u = a("929331"),
        d = a("49111");
      let m = new r.default("DebugUploadManager");
      async function f(e, t) {
        await g(e), await (0, l.uploadRtcLogFiles)(14680064, t);
      }
      async function g(e) {
        try {
          let t = s.stringify(),
            a = "",
            l = await (0, i.getPushNotificationLogs)().then(e =>
              (0, i.serializePushNotificationLogs)(e, !0)
            ),
            r = t.length + a.length + l.length;
          if (r > 9437184) {
            let e = 1 - 9437184 / r;
            (t = t.slice(t.length - Math.floor(t.length * e))),
              (a = a.slice(a.length - Math.floor(a.length * e))),
              (l = l.slice(l.length - Math.floor(l.length * e)));
          }
          let m = null,
            f = "\n    "
              .concat((0, u.default)(m), "\n\n    Metadata:\n    ")
              .concat(
                JSON.stringify((0, c.default)(), void 0, 2),
                "\n\n    ChannelStore:\n    "
              )
              .concat(
                JSON.stringify(o.default.getDebugInfo(), void 0, 2),
                "\n\n    Logs:\n    "
              )
              .concat(t, "\n\n    System logs:\n    ")
              .concat(a, "\n\n    Push Notifications:\n    ")
              .concat(l, "\n    ");
          s.clear();
          let g = d.Endpoints.DEBUG_LOG(e, "discord_app_logs");
          await n.default.post({
            url: g,
            body: f,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
          });
        } catch (e) {
          m.error(
            "uploadAppLogFiles: upload app log files error ".concat(e.message)
          );
        }
      }
    },
    836403: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          serializePushNotificationLogs: function () {
            return s;
          },
          getPushNotificationLogs: function () {
            return r;
          },
        });
      var n = a("95410"),
        l = a("271938"),
        o = a("49111");
      function s(e, t) {
        if (0 === e.length) return "No logs";
        let a = n.default.get(o.DEVICE_TOKEN),
          l = n.default.get(o.DEVICE_VOIP_TOKEN),
          s = e
            .map(e => {
              let a = e.silent ? "Silent" : "Displayed",
                n = t
                  ? "".concat(e.channelId, " - ").concat(e.messageId)
                  : "".concat(e.title, " - ").concat(e.content);
              return ""
                .concat(new Date(e.receivedTimestamp).toISOString(), " [")
                .concat(e.type, "] ")
                .concat(a, " - ")
                .concat(n);
            })
            .join("\n");
        return ""
          .concat(null != a ? "Device Token: ".concat(a) : "", "\n")
          .concat(null != l ? "Device Voip Token: ".concat(l) : "", "\n\n")
          .concat(s);
      }
      async function r() {
        let e = l.default.getId(),
          t = [];
        return t;
      }
    },
    825287: function (e, t, a) {
      "use strict";
      function n() {
        return {
          logsUploaded: new Date().toISOString(),
          releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
          buildNumber: "275975",
          versionHash: "042d33fadcb1ba00202028ee09e39c9b6c094f4c",
        };
      }
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
    },
    929331: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        }),
        a("781738"),
        a("424973"),
        a("222007");
      var n = a("917351"),
        l = a.n(n),
        o = a("102053"),
        s = a("487269");
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return o.default.logGroups
          .map(n => {
            var o, r;
            let {
                index: c,
                timestamp: u,
                logs: d,
                nativeLogs: m,
                serverTrace: f,
              } = n,
              g =
                0 === c
                  ? null !==
                      (r =
                        null ===
                          (o = l.find(
                            d,
                            e => e.log.indexOf("Logger loaded") >= 0
                          )) || void 0 === o
                          ? void 0
                          : o.timestamp) && void 0 !== r
                    ? r
                    : e
                  : u,
              p = (function (e, t) {
                var a, n;
                let o = (function (e) {
                    let t = [];
                    for (let a = 0; a < e.length; a++) {
                      let n = e[a],
                        l = e[a + 1];
                      null != l && l.log === n.log.replace("Start ", "Finish ")
                        ? ((l.log = l.log.replace("Finish ", "")),
                          t.push(l),
                          a++)
                        : t.push(n);
                    }
                    return t;
                  })(e).map(e => {
                    let a =
                        null == e.timestamp
                          ? ""
                          : ((e.timestamp - t) / 1e3).toFixed(3),
                      n = null == e.delta ? "" : String(Math.round(e.delta));
                    return {
                      totalTime: a,
                      deltaTime: n,
                      log: ""
                        .concat(
                          e.emoji.length > 0 ? "".concat(e.emoji, " ") : ""
                        )
                        .concat(e.prefix)
                        .concat(e.log, "\n"),
                    };
                  }),
                  s =
                    null !== (a = l.max(o.map(e => e.totalTime.length))) &&
                    void 0 !== a
                      ? a
                      : 0,
                  r =
                    null !== (n = l.max(o.map(e => e.deltaTime.length))) &&
                    void 0 !== n
                      ? n
                      : 0;
                return o
                  .map(e => {
                    let { totalTime: t, deltaTime: a, log: n } = e;
                    return ""
                      .concat(l.padStart(t, s), " ")
                      .concat(l.padStart(a, r), " ")
                      .concat(n);
                  })
                  .join("");
              })(
                (function (e, t, a, n) {
                  e = e.slice();
                  let l = new Set(t.map(i)),
                    o = "",
                    s = [];
                  t.forEach(t => {
                    let n = i(t),
                      r = 0,
                      c = a || !t.autoGenerated,
                      u =
                        n.startsWith("Start ") &&
                        !n.includes("RUN_JS_BUNDLE") &&
                        l.has(n.replace("Start ", "Finish ")),
                      d =
                        n.startsWith("Finish ") &&
                        !n.includes("RUN_JS_BUNDLE") &&
                        l.has(n.replace("Finish ", "Start "));
                    if (d) {
                      o = o.substring(2);
                      let e = s.pop();
                      null != e &&
                        ((r = t.timestamp - e.timestamp),
                        (c =
                          c ||
                          (r > 5 &&
                            !(function (e) {
                              return [
                                "GET_CONSTANTS",
                                "CONVERT_CONSTANTS",
                              ].some(t => e.includes(t));
                            })(n))),
                        (e.shouldKeep = e.shouldKeep || c));
                    }
                    let m = {
                      emoji: "☕",
                      timestamp: t.timestamp,
                      delta: r > 0 ? r : void 0,
                      prefix: o,
                      log: n,
                      shouldKeep: c,
                    };
                    (function (e, t) {
                      let a = 0;
                      for (; a < e.length; a++) {
                        let { timestamp: n } = e[a];
                        if (null != n && n > t.timestamp) break;
                      }
                      e.splice(a, 0, t);
                    })(e, m),
                      u && ((o += "| "), s.push(m));
                  });
                  let r = !1;
                  return e.filter(
                    e =>
                      !(r && e.log.includes("↪")) &&
                      !(r =
                        (!n && "\uD83C\uDFA8" === e.emoji) ||
                        !1 === e.shouldKeep)
                  );
                })(d, m, t, a),
                g
              ),
              h = "Trace #"
                .concat(c + 1, " started ")
                .concat((0, s.getTimestampString)(u), "\n")
                .concat(p);
            return (
              null != f &&
                (h += "\n Server trace for trace #".concat(c + 1).concat(f)),
              h
            );
          })
          .join("\n\n");
      }
      function i(e) {
        let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
        return (
          t.includes("_START") && (t = "Start " + t.replace("_START", "")),
          t.includes("_END") && (t = "Finish " + t.replace("_END", "")),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=da90a9221247b8e691a6.js.map
