(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18036"],
  {
    721247: function (e, t, s) {
      "use strict";
      e.exports = s.p + "13e4de50fe494530c2c1.png";
    },
    378913: function (e, t, s) {
      "use strict";
      e.exports = s.p + "906a38cbd45d6780304c.svg";
    },
    97595: function (e, t, s) {
      "use strict";
      e.exports = s.p + "79b6525428d203d4dc7a.svg";
    },
    251834: function (e, t, s) {
      "use strict";
      e.exports = s.p + "559d26c8222b2691e986.svg";
    },
    800573: function (e, t, s) {
      "use strict";
      e.exports = s.p + "4db33740afa8c892ed27.svg";
    },
    41668: function (e, t, s) {
      "use strict";
      e.exports = s.p + "1ed67ff58fdb5a109fc8.svg";
    },
    660389: function (e, t, s) {
      "use strict";
      e.exports = s.p + "6e27695fd61b8fa1ebde.svg";
    },
    212509: function (e, t, s) {
      "use strict";
      e.exports = s.p + "deabad3453b517c8cb7f.png";
    },
    494323: function (e, t, s) {
      "use strict";
      e.exports = s.p + "bd6a8da80056942f263e.svg";
    },
    556659: function (e, t, s) {
      "use strict";
      e.exports = s.p + "dad1a596835f9bb1024d.svg";
    },
    787762: function (e, t, s) {
      "use strict";
      e.exports = s.p + "4396f31050743192914e.svg";
    },
    508971: function (e, t, s) {
      "use strict";
      e.exports = s.p + "a7d2c7ff9cdc7b4b1d04.svg";
    },
    32209: function (e, t, s) {
      "use strict";
      e.exports = s.p + "22b6ded15e9c553447ea.webm";
    },
    381471: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d2e50ba9152e262f3633.webm";
    },
    242777: function (e, t, s) {
      "use strict";
      e.exports = s.p + "27316f256e0a1fb24421.mov";
    },
    838623: function (e, t, s) {
      "use strict";
      e.exports = s.p + "9492f371ccf5db4f0156.mp4";
    },
    844389: function (e, t, s) {
      "use strict";
      e.exports = s.p + "35b6e69b80885d349202.png";
    },
    392518: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b85e9e5e26daee13304b.webm";
    },
    336406: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0375f4834ae07b9d5de9.mov";
    },
    414298: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b9b0ab98fd3fcb65f4d5.mp4";
    },
    815143: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b7fb33c633b7ad9732e5.png";
    },
    134072: function (e, t, s) {
      "use strict";
      e.exports = s.p + "988b1594e4843a08ef39.webm";
    },
    193990: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var a = s("913144"),
        n = {
          setDesktopType(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
              desktopType: e,
            });
          },
          setTTSType(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_TTS_TYPE",
              ttsType: e,
            });
          },
          setDisabledSounds(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
              sounds: e,
            });
          },
          toggleDisableAllSounds() {
            a.default.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
          },
          setDisableUnreadBadge(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
              disableUnreadBadge: e,
            });
          },
          setTaskbarFlash(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
              taskbarFlash: e,
            });
          },
          setNotifyMessagesInSelectedChannel(e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
              notify: e,
            });
          },
          setPermissionsState(e, t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_PERMISSION_STATE",
              enabled: e,
              source: t,
            });
          },
          showNotification(e, t, s, n) {
            let l =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {};
            a.default.dispatch({
              type: "NOTIFICATION_CREATE",
              icon: e,
              title: t,
              body: s,
              trackingProps: n,
              options: {
                ...l,
                onClick() {
                  var e;
                  null === (e = l.onClick) || void 0 === e || e.call(l),
                    a.default.dispatch({ type: "NOTIFICATION_CLICK" });
                },
              },
            });
          },
          clickedNotification() {
            a.default.dispatch({ type: "NOTIFICATION_CLICK" });
          },
        };
    },
    68130: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("77078"),
        l = s("694187"),
        i = s("782340"),
        r = s("350335");
      function u(e) {
        let { icon: t, onChange: s } = e;
        return (0, a.jsx)(n.FocusRing, {
          within: !0,
          children: (0, a.jsxs)("div", {
            className: r.iconContainer,
            children: [
              null != t
                ? (0, a.jsx)("img", {
                    alt: "Your icon",
                    className: r.filledIcon,
                    src: t,
                  })
                : (0, a.jsxs)("svg", {
                    width: "80",
                    height: "80",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    children: [
                      (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z",
                        fill: "currentColor",
                      }),
                      (0, a.jsx)("circle", {
                        cx: "68",
                        cy: "12",
                        r: "12",
                        fill: "#5865f2",
                      }),
                      (0, a.jsx)("path", {
                        d: "M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z",
                        fill: "white",
                      }),
                      (0, a.jsx)("path", {
                        d: "M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z",
                        fill: "currentColor",
                      }),
                      (0, a.jsx)("path", {
                        d: "M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z",
                        fill: "currentColor",
                      }),
                      (0, a.jsx)("path", {
                        d: "M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z",
                        fill: "currentColor",
                      }),
                    ],
                  }),
              (0, a.jsx)(l.default, {
                onChange: s,
                multiple: !1,
                tabIndex: 0,
                "aria-label":
                  i.default.Messages.GUILD_CREATE_UPLOAD_ICON_BUTTON_TEXT,
              }),
            ],
          }),
        });
      }
    },
    767517: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s("872717"),
        n = s("913144"),
        l = s("619443"),
        i = s("239380"),
        r = s("305961"),
        u = s("49111"),
        d = {
          acceptGuildTemplate: (e, t, s) => (
            n.default.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code: e }),
            new Promise((d, o) => {
              a.HTTP.post({
                url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                body: { name: t, icon: s },
                oldFormErrors: !0,
              }).then(
                t => {
                  let s = t.body;
                  n.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                    code: e,
                    guild: s,
                  }),
                    l.default.isConnected()
                      ? r.default.addConditionalChangeListener(() => {
                          if (null != r.default.getGuild(s.id))
                            return (0, i.transitionToGuild)(s.id), d(s), !1;
                        })
                      : ((0, i.transitionToGuild)(s.id), d(s));
                },
                t => {
                  n.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                    code: e,
                  }),
                    o(t.body);
                }
              );
            })
          ),
        };
    },
    819220: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getVerifiedName: function () {
            return n;
          },
        });
      var a = s("5487");
      function n(e) {
        return (0, a.default)(e).author;
      }
    },
    5487: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s("579033"),
        n = s("782340");
      function l(e) {
        switch (e) {
          case a.InternalTemplateCodes.CLASSROOM:
            return {
              header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM,
              description:
                n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.LOCAL_COMMUNITIES:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.CREATORS_HOBBIES:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.GLOBAL_COMMUNITIES:
            return {
              header:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.FRIENDS_FAMILY:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.STUDY_GROUPS:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.CREATE_FROM_SCRATCH:
            return {
              header:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH,
              nameLabel:
                n.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.CAMPUS_CLUBS:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS,
              nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.LEAGUE_CLUBS:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS,
              nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
              author: n.default.Messages.DISCORD_NAME,
            };
          case a.InternalTemplateCodes.GITHUB_HACKATHON:
            return {
              header:
                n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON,
              description:
                n.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON,
              nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
              author: "GitHub Education",
            };
          default:
            return {
              header: n.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD,
              nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: n.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
            };
        }
      }
    },
    932180: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        }),
        s("424973");
      var a = s("884691"),
        n = s("599110"),
        l = s("579033"),
        i = s("49111");
      function r(e) {
        let t = a.useRef([]);
        a.useEffect(() => {
          if (null != e && e.state !== l.GuildTemplateStates.RESOLVING)
            !t.current.includes(e.code) &&
              (t.current.push(e.code),
              n.default.track(i.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
              }));
        });
      }
    },
    800932: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return R;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        l = s("414456"),
        i = s.n(l),
        r = s("917351"),
        u = s.n(r),
        d = s("509043"),
        o = s("669491"),
        c = s("77078"),
        E = s("437822"),
        T = s("327037"),
        _ = s("68130"),
        f = s("697218"),
        L = s("461380"),
        S = s("593195"),
        I = s("368121"),
        p = s("767517"),
        A = s("5487"),
        C = s("932180"),
        m = s("473759"),
        M = s("49111"),
        N = s("782340"),
        g = s("828999");
      function R(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          [s, l] = n.useState(""),
          [i, r] = n.useState(null),
          [u, d] = n.useState(null),
          o = (0, A.default)(e.code);
        n.useEffect(() => {
          (async function e() {
            let e = f.default.getCurrentUser();
            if (null == e)
              try {
                e = await (0, T.fetchCurrentUser)();
              } catch (e) {
                E.default.verifySSOToken(null);
              }
            null != e && l(o.defaultName.format({ username: e.username }));
          })();
        }, [o.defaultName]);
        (0, C.default)(e);
        let L = (0, a.jsxs)(a.Fragment, {
            children: [
              t ? (0, a.jsx)(m.default, { guildTemplate: e }) : null,
              (0, a.jsx)("div", {
                className: g.icon,
                children: (0, a.jsx)(_.default, { icon: i, onChange: r }),
              }),
              (0, a.jsx)(c.FormItem, {
                title: o.nameLabel,
                children: (0, a.jsx)(c.TextInput, {
                  type: "text",
                  value: s,
                  maxLength: 100,
                  onChange: l,
                  error: null == u ? void 0 : u.name,
                }),
              }),
              (0, a.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: g.guidelines,
                children: o.terms.format({
                  guidelinesURL: M.MarketingURLs.GUIDELINES,
                }),
              }),
            ],
          }),
          S = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
          I = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", { className: g.divider }),
              (0, a.jsxs)(c.FormItem, {
                className: g.previewSection,
                title: N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                children: [
                  (0, a.jsx)(O, { channels: e.serializedSourceGuild.channels }),
                  (0, a.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: g.protip,
                    children: [
                      (0, a.jsxs)("span", {
                        className: g.protipText,
                        children: [
                          N.default.Messages.FORM_LABEL_ROLES_PRO_TIP,
                          ":",
                        ],
                      }),
                      " ",
                      N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP,
                    ],
                  }),
                ],
              }),
              S.length > 0
                ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(c.FormItem, {
                      className: g.previewSection,
                      title:
                        N.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                      children: (0, a.jsx)(D, { roles: S }),
                    }),
                  })
                : null,
            ],
          });
        return {
          form: L,
          preview: I,
          handleSubmit: () =>
            p.default.acceptGuildTemplate(e.code, s, i).catch(e => d(e)),
        };
      }
      function O(e) {
        let { channels: t } = e,
          s = u(t)
            .sortBy(e =>
              null == e.parent_id
                ? 1e4 * Number(e.id)
                : 1e4 * Number(e.parent_id) + e.id
            )
            .map(e => {
              let t = (function (e) {
                let { type: t } = e;
                return t === M.ChannelTypes.GUILD_VOICE
                  ? I.default
                  : t === M.ChannelTypes.GUILD_CATEGORY
                    ? L.default
                    : S.default;
              })(e);
              return (0, a.jsxs)(
                "div",
                {
                  className: i(g.channel, {
                    [g.category]: e.type === M.ChannelTypes.GUILD_CATEGORY,
                  }),
                  children: [
                    (0, a.jsx)(t, { className: g.channelIcon }),
                    (0, a.jsx)(c.Text, {
                      className: g.channelText,
                      variant: "text-sm/normal",
                      children: e.name,
                    }),
                  ],
                },
                e.id
              );
            })
            .value();
        return (0, a.jsx)("div", { className: g.channelsWrapper, children: s });
      }
      s("721247");
      function D(e) {
        let { roles: t } = e,
          s = t
            .slice()
            .reverse()
            .map(e => (0, a.jsx)(h, { role: e }, e.id));
        return (0, a.jsx)("ul", { className: g.rolesWrapper, children: s });
      }
      function h(e) {
        var t;
        let { role: s } = e,
          n =
            null == s.color
              ? o.default.unsafe_rawColors.PRIMARY_300.css
              : (0, d.int2hex)(s.color);
        return (0, a.jsxs)("li", {
          className: g.role,
          style: {
            borderColor:
              null !== (t = (0, d.hex2rgb)(n, 0.6)) && void 0 !== t
                ? t
                : void 0,
          },
          children: [
            (0, a.jsx)(c.RoleCircle, { className: g.roleCircle, color: n }),
            (0, a.jsx)("div", { className: g.roleName, children: s.name }),
          ],
        });
      }
    },
    434824: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("124969"),
        l = s("5487"),
        i = s("473759"),
        r = s("579033"),
        u = s("223369");
      let d = {
        [r.InternalTemplateCodes.CLASSROOM]: s("251834"),
        [r.InternalTemplateCodes.LOCAL_COMMUNITIES]: s("787762"),
        [r.InternalTemplateCodes.CREATORS_HOBBIES]: s("41668"),
        [r.InternalTemplateCodes.GLOBAL_COMMUNITIES]: s("494323"),
        [r.InternalTemplateCodes.FRIENDS_FAMILY]: s("660389"),
        [r.InternalTemplateCodes.STUDY_GROUPS]: s("508971"),
        [r.InternalTemplateCodes.CREATE_FROM_SCRATCH]: s("800573"),
        [r.InternalTemplateCodes.CAMPUS_CLUBS]: s("97595"),
        [r.InternalTemplateCodes.LEAGUE_CLUBS]: s("556659"),
        [r.InternalTemplateCodes.GITHUB_HACKATHON]: s("212509"),
      };
      function o(e) {
        let { headerId: t, guildTemplate: s } = e,
          o = s.code,
          c = d[o];
        if (null != c) {
          var E;
          let { header: e, description: d, author: T } = (0, l.default)(o);
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("img", { className: u.image, src: c, alt: "" }),
              (0, a.jsx)(n.Title, { className: u.header, id: t, children: e }),
              (0, a.jsx)(n.SubTitle, { children: d }),
              s.state === r.GuildTemplateStates.RESOLVED
                ? (0, a.jsx)(i.UsagePill, {
                    className: u.usagePill,
                    count: null !== (E = s.usageCount) && void 0 !== E ? E : 0,
                    verifiedName: T,
                  })
                : null,
            ],
          });
        }
        return (0, a.jsx)(i.default, {
          pillClassName: u.usagePill,
          guildTemplate: s,
          tall: !0,
        });
      }
    },
    473759: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          UsagePill: function () {
            return I;
          },
          default: function () {
            return p;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("414456"),
        l = s.n(n),
        i = s("77078"),
        r = s("931138"),
        u = s("124969"),
        d = s("486952"),
        o = s("819220"),
        c = s("5487"),
        E = s("579033"),
        T = s("782340"),
        _ = s("118243"),
        f = s("890957");
      function L() {
        return (0, a.jsx)(r.default, {
          className: _.verifiedIcon,
          children: (0, a.jsx)("div", {
            className: _.verifiedCheckContainer,
            children: (0, a.jsx)(d.default, { className: _.verifiedCheck }),
          }),
        });
      }
      function S(e) {
        let { verified: t, text: s } = e;
        return t
          ? (0, a.jsxs)("div", {
              className: _.verifiedNameContainer,
              children: [(0, a.jsx)(L, {}), s],
            })
          : (0, a.jsx)(a.Fragment, { children: s });
      }
      function I(e) {
        let { className: t, count: s, creator: n, verifiedName: i } = e;
        return (0, a.jsx)("div", {
          className: l(_.usagePill, t, _.userText),
          children:
            null != n || null != i
              ? T.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                  usageCount: s,
                  creator: null != i ? i : n,
                  creatorHook: (e, t) =>
                    (0, a.jsx)(S, { text: e, verified: null != i }, t),
                })
              : T.default.Messages.GUILD_TEMPLATE_USAGES.format({
                  usageCount: s,
                }),
        });
      }
      function p(e) {
        var t;
        let { guildTemplate: s, error: n, tall: r, pillClassName: d } = e;
        if (null != n && "" !== n)
          return (0, a.jsxs)("div", {
            className: _.container,
            children: [
              (0, a.jsx)(u.Title, {
                children: T.default.Messages.INVITE_MODAL_ERROR_TITLE,
              }),
              (0, a.jsx)(u.SubTitle, { children: n }),
            ],
          });
        if (s.state === E.GuildTemplateStates.RESOLVING)
          return (0, a.jsx)("div", {
            className: _.container,
            children: (0, a.jsx)(i.Spinner, {}),
          });
        let L = (0, c.default)(s.code).header;
        if (!r)
          return (0, a.jsxs)("div", {
            className: _.container,
            children: [
              (0, a.jsx)(u.Title, { className: _.title, children: L }),
              (0, a.jsx)(u.SubTitle, {
                className: l(_.subtitle, _.userText),
                children: s.name,
              }),
            ],
          });
        return (0, a.jsxs)("div", {
          className: _.container,
          children: [
            (0, a.jsx)(u.Title, { className: _.title, children: L }),
            (0, a.jsx)(u.SubTitle, {
              className: l(_.subtitle, f.marginTop2),
              children: T.default.Messages.GUILD_TEMPLATE_BASED_ON,
            }),
            (0, a.jsx)(u.Title, {
              className: l(_.title, _.userText),
              children: s.name,
            }),
            null != s.description &&
              "" !== s.description &&
              (0, a.jsx)(u.SubTitle, {
                className: l(_.subtitle, _.userText, f.marginTop8),
                children: s.description,
              }),
            (0, a.jsx)(I, {
              className: d,
              count: null !== (t = s.usageCount) && void 0 !== t ? t : 0,
              creator: s.creator.username,
              verifiedName: (0, o.getVerifiedName)(s.code),
            }),
          ],
        });
      }
    },
    843456: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("414456"),
        l = s.n(n),
        i = s("77078"),
        r = s("476765"),
        u = s("124969"),
        d = s("800932"),
        o = s("434824"),
        c = s("782340"),
        E = s("419402");
      function T(e) {
        let { transitionState: t, onClose: s, guildTemplate: n } = e,
          { form: T, preview: _, handleSubmit: f } = (0, d.default)(n, !1),
          L = (0, r.useUID)();
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)(i.ModalRoot, {
            size: i.ModalSize.DYNAMIC,
            transitionState: t,
            className: l(E.modalRoot),
            "aria-labelledby": L,
            children: [
              (0, a.jsxs)("div", {
                className: E.modalContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: l(E.modalSection, E.ctaSection),
                    children: (0, a.jsx)("div", {
                      className: E.ctaContainer,
                      children: (0, a.jsx)(o.default, {
                        guildTemplate: n,
                        headerId: L,
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: l(E.modalSection, E.formSection),
                    children: (0, a.jsxs)(i.Scroller, {
                      className: E.formContainer,
                      children: [
                        (0, a.jsx)(u.Title, {
                          className: E.header,
                          children:
                            c.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
                        }),
                        T,
                        _,
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalFooter, {
                className: E.modalFooter,
                children: [
                  (0, a.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    onClick: s,
                    children: c.default.Messages.CLOSE,
                  }),
                  (0, a.jsx)(i.Button, {
                    color: i.Button.Colors.GREEN,
                    onClick: async () => {
                      let e = await f();
                      null != e && s();
                    },
                    children: c.default.Messages.CREATE,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    94927: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s("862205");
      let n = (0, a.createExperiment)({
        kind: "user",
        id: "2023-12_2023_eoy_ringtone",
        label: "EOY Ringtone 2023",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      var l = n;
    },
    684581: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("94927"),
        n = s("782340"),
        l = s("32209"),
        i = s("381471");
      let r = {
        experiment: a.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () =>
          n.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: { webmDark: l, webmLight: i },
        getLoadingTips: () => [],
      };
      var u = r;
    },
    488284: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("424973");
      var a = s("446674"),
        n = s("193990"),
        l = s("845579"),
        i = s("385649"),
        r = s("599110"),
        u = s("684581"),
        d = s("49111"),
        o = s("782340");
      function c() {
        return (
          _() &&
          u.default.experiment.getCurrentConfig(
            { location: "holiday_events_is_eligible" },
            { autoTrackExposure: !1 }
          ).enabled
        );
      }
      function E() {
        let { enabled: e } = u.default.experiment.useExperiment(
          { location: "holiday_events_use_eligible" },
          { autoTrackExposure: !1 }
        );
        return _() && e;
      }
      function T() {
        return (
          null != u.default.ringtone &&
          null != u.default.getRingtoneSettingsLabel
        );
      }
      function _() {
        let e = Date.now();
        return e >= u.default.startTimeMs && e <= u.default.endTimeMs;
      }
      var f = {
        subscribe: function (e) {
          return u.default.experiment.subscribe(
            { location: "holiday_events_subscribe" },
            e
          );
        },
        isEligible: c,
        isRingtoneDisabled: function () {
          return (
            null == u.default.ringtone ||
            i.default.isSoundDisabled(u.default.ringtone)
          );
        },
        isRingtoneEligible: function () {
          let e = c();
          return e && T();
        },
        onRingtoneSettingValueChange: function (e) {
          let t = i.default.getDisabledSounds();
          if (null == u.default.ringtone) return;
          let s = t.filter(e => e !== u.default.ringtone);
          !e && s.push(u.default.ringtone),
            n.default.setDisabledSounds(s),
            r.default.track(d.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
              toggled_on: e,
              sound_name: u.default.ringtone,
            });
        },
        useIsEligible: E,
        useIsRingtoneDisabled: function () {
          return (0, a.useStateFromStores)(
            [i.default],
            () =>
              null == u.default.ringtone ||
              i.default.isSoundDisabled(u.default.ringtone)
          );
        },
        useIsRingtoneEligible: function () {
          let e = E();
          return e && T();
        },
        useRingtoneSettingDescription: function () {
          let e = l.NativePhoneIntegrationEnabled.useSetting();
          return e ? void 0 : o.default.Messages.ENABLE_PHONE_INTEGRATION;
        },
        useRingtoneSettingValue: function () {
          let e = (0, a.useStateFromStores)([i.default], () =>
              i.default.getDisabledSounds()
            ),
            t = l.NativePhoneIntegrationEnabled.useSetting();
          return (
            null != u.default.ringtone && t && !e.includes(u.default.ringtone)
          );
        },
        getAppSpinnerSources: function () {
          return _() ? u.default.appSpinnerSources : null;
        },
        getLoadingTips: function () {
          var e;
          return _()
            ? null === (e = u.default.getLoadingTips) || void 0 === e
              ? void 0
              : e.call(u.default)
            : null;
        },
      };
    },
    385649: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        });
      var a = s("446674"),
        n = s("913144"),
        l = s("599110"),
        i = s("773336"),
        r = s("49111");
      let u = {
          desktopType: i.isPlatformEmbedded
            ? r.DesktopNotificationTypes.ALL
            : r.DesktopNotificationTypes.NEVER,
          disableAllSounds: !1,
          disabledSounds: [],
          ttsType: r.TTSNotificationTypes.NEVER,
          disableUnreadBadge: !1,
          taskbarFlash: !0,
          notifyMessagesInSelectedChannel: !1,
        },
        d = u;
      function o(e, t) {
        !__OVERLAY__ && l.default.track(e, t);
      }
      function c(e) {
        let { desktopType: t } = e;
        (d.desktopType = t),
          o(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === r.DesktopNotificationTypes.ALL,
          });
      }
      class E extends a.default.DeviceSettingsStore {
        initialize(e) {
          d = { ...u, ...e };
        }
        getUserAgnosticState() {
          return d;
        }
        getDesktopType() {
          return d.desktopType;
        }
        getTTSType() {
          return d.ttsType;
        }
        getDisabledSounds() {
          return d.disabledSounds;
        }
        getDisableAllSounds() {
          return d.disableAllSounds;
        }
        getDisableUnreadBadge() {
          return d.disableUnreadBadge;
        }
        getNotifyMessagesInSelectedChannel() {
          return d.notifyMessagesInSelectedChannel;
        }
        get taskbarFlash() {
          return d.taskbarFlash;
        }
        isSoundDisabled(e) {
          return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e);
        }
      }
      (E.displayName = "NotificationSettingsStore"),
        (E.persistKey = "notifications"),
        (E.migrations = [
          e => {
            let t = { ...e };
            return (
              (t.disabledSounds = t.disabledSounds || []),
              (t.disableUnreadBadge = t.disableUnreadBadge || !1),
              (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash),
              (t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER),
              null == t.desktopType &&
                (t.desktopType = i.isPlatformEmbedded
                  ? r.DesktopNotificationTypes.ALL
                  : r.DesktopNotificationTypes.NEVER),
              t
            );
          },
        ]);
      var T = new E(n.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: c,
        NOTIFICATIONS_SET_TTS_TYPE: function (e) {
          let { ttsType: t } = e;
          d.ttsType = t;
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function (e) {
          let { sounds: t } = e;
          d.disabledSounds = t;
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function () {
          d.disableAllSounds = !d.disableAllSounds;
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
          let { enabled: t, source: s } = e;
          o(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
            enabled: t === r.NotificationPermissionTypes.ENABLED,
            source: s,
          }),
            t === r.NotificationPermissionTypes.BLOCKED
              ? c({ desktopType: r.DesktopNotificationTypes.NEVER })
              : t === r.NotificationPermissionTypes.ENABLED &&
                c({ desktopType: r.DesktopNotificationTypes.ALL });
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function (e) {
          let { disableUnreadBadge: t } = e;
          d.disableUnreadBadge = t;
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function (e) {
          let { taskbarFlash: t } = e;
          d.taskbarFlash = t;
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function (e) {
          let { notify: t } = e;
          d.notifyMessagesInSelectedChannel = t;
        },
      });
    },
    124969: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Title: function () {
            return p;
          },
          SubTitle: function () {
            return A;
          },
          Image: function () {
            return Image;
          },
          Button: function () {
            return C;
          },
          Avatar: function () {
            return m;
          },
          GuildIcon: function () {
            return M;
          },
          ChannelIcon: function () {
            return N;
          },
          Input: function () {
            return g;
          },
          Block: function () {
            return R;
          },
          SubText: function () {
            return O;
          },
          AuthSpinner: function () {
            return D;
          },
          ActivityCount: function () {
            return h;
          },
          JoiningAs: function () {
            return x;
          },
          IncompatibleBrowser: function () {
            return U;
          },
          default: function () {
            return b;
          },
        }),
        s("834022");
      var a = s("37983");
      s("884691");
      var n = s("414456"),
        l = s.n(n),
        i = s("77078"),
        r = s("843962"),
        u = s("145131"),
        d = s("476263"),
        o = s("476765"),
        c = s("637888"),
        E = s("98013"),
        T = s("701909"),
        _ = s("439932"),
        f = s("49111"),
        L = s("782340"),
        S = s("2710");
      let I = i.Avatar;
      null == I && (I = () => null);
      let p = e => {
          let { className: t, id: s, children: n } = e;
          return (0, a.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: l(S.title, t),
            id: s,
            children: n,
          });
        },
        A = e => {
          let { className: t, children: s } = e;
          return (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: s,
          });
        },
        Image = e => {
          let { className: t, src: s } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: s,
            className: l(S.image, t),
          });
        },
        C = e => {
          let { className: t, ...s } = e,
            n = s.look === i.Button.Looks.LINK;
          return (0, a.jsx)(i.Button, {
            size: n ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !n,
            className: l(t, { [S.button]: !n, [S.linkButton]: n }),
            ...s,
          });
        };
      (C.Looks = i.Button.Looks),
        (C.Colors = i.Button.Colors),
        (C.Sizes = i.Button.Sizes);
      let m = e => {
          let { className: t, src: s, size: n } = e;
          return (0, a.jsx)(I, {
            src: s,
            size: n,
            className: l(S.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        M = e => {
          let { guild: t, size: s, animate: n = !1, className: l } = e;
          return (0, a.jsx)(d.default, {
            active: !0,
            guild: t,
            size: s,
            animate: n,
            className: l,
          });
        };
      M.Sizes = d.default.Sizes;
      let N = e => {
        let { className: t, channel: s, size: n } = e;
        return (0, a.jsx)(I, {
          src: (0, r.getChannelIconURL)(s),
          size: n,
          className: l(S.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      N.Sizes = i.AvatarSizes;
      let g = e => {
          let {
              label: t,
              error: s,
              placeholder: n,
              value: r,
              className: u,
              inputClassName: d,
              setRef: c,
              type: E = "text",
              onChange: T,
              autoComplete: _,
              autoFocus: f,
              maxLength: L,
              spellCheck: I,
              name: p,
              description: A,
              required: C,
              onFocus: m,
              onBlur: M,
            } = e,
            N = (0, o.useUID)();
          return (0, a.jsxs)(i.FormItem, {
            title: t,
            error: s,
            className: u,
            required: C,
            tag: "label",
            htmlFor: N,
            children: [
              (0, a.jsx)(i.TextInput, {
                name: p,
                type: E,
                value: r,
                inputRef: c,
                placeholder: n,
                inputClassName: l(d, { [S.inputError]: null != s }),
                "aria-label": t,
                onChange: T,
                autoComplete: _,
                autoFocus: f,
                maxLength: L,
                spellCheck: I,
                id: N,
                onFocus: m,
                onBlur: M,
              }),
              null != A
                ? (0, a.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: S.description,
                    children: A,
                  })
                : null,
            ],
          });
        },
        R = e => {
          let { className: t, children: s } = e;
          return (0, a.jsx)("div", { className: l(S.block, t), children: s });
        },
        O = e => {
          let { className: t, children: s, isProminent: n } = e;
          return (0, a.jsx)(i.Text, {
            variant: n ? "text-sm/normal" : "text-xs/normal",
            className: l(S.subText, t),
            children: s,
          });
        },
        D = e => {
          let { className: t } = e;
          return (0, a.jsx)(u.default, {
            direction: u.default.Direction.VERTICAL,
            align: u.default.Align.CENTER,
            className: t,
            children: (0, a.jsx)(c.default, { className: S.spinnerVideo }),
          });
        },
        h = e => {
          let t,
            {
              online: s,
              total: n,
              className: r,
              flat: d,
              textClassName: o,
            } = e;
          return null == n
            ? null
            : (null != s &&
                s > 0 &&
                (t = (0, a.jsxs)("div", {
                  className: l(S.pill, S.pillOnline, d && S.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: S.pillIconOnline }),
                    (0, a.jsx)(i.Text, {
                      tag: "span",
                      className: l(S.pillMessage, o),
                      variant: "text-sm/normal",
                      children:
                        L.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: s }
                        ),
                    }),
                  ],
                })),
              (0, a.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                className: r,
                children: [
                  t,
                  (0, a.jsxs)("div", {
                    className: l(S.pill, d && S.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: S.pillIconTotal }),
                      (0, a.jsx)(i.Text, {
                        tag: "span",
                        className: l(S.pillMessage, o),
                        variant: "text-sm/normal",
                        children:
                          L.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: n }
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        x = e => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, a.jsxs)("div", {
                className: S.joiningAs,
                children: [
                  (0, a.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      L.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(m, {
                    className: S.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, a.jsx)(i.Text, {
                    className: S.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        U = e => {
          let { className: t } = e;
          return (0, a.jsxs)(R, {
            className: t,
            children: [
              (0, a.jsx)(C, {
                onClick: () =>
                  window.open((0, E.getCurrentPlatformDownloadURL)()),
                children:
                  L.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                    platform: (0, E.getPlatformReadableName)(),
                  }),
              }),
              (0, a.jsx)(O, {
                className: S.downloadButtonSubtext,
                children: L.default.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: T.default.getArticleURL(
                    f.HelpdeskArticles.SUPPORTED_BROWSERS
                  ),
                }),
              }),
            ],
          });
        };
      var b = e => {
        let {
          className: t,
          contentClassName: s,
          tag: n = "section",
          onSubmit: i,
          children: r,
          expanded: u = !1,
          theme: d = f.ThemeTypes.DARK,
          style: o,
        } = e;
        return (0, a.jsxs)(n, {
          "data-theme": d,
          onSubmit: i,
          style: o,
          className: l(
            u ? S.authBoxExpanded : S.authBox,
            (0, _.getThemeClass)(d),
            t
          ),
          children: [
            (0, a.jsx)("div", { className: S.discordLogo }),
            (0, a.jsx)("div", {
              className: l(S.centeringWrapper, s),
              children: r,
            }),
          ],
        });
      };
    },
    637888: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        }),
        s("843762");
      var a = s("37983"),
        n = s("884691"),
        l = s("819855"),
        i = s("77078"),
        r = s("488284"),
        u = s("560528"),
        d = s("242777"),
        o = s("336406"),
        c = s("58608"),
        E = s("49111"),
        T = s("838623"),
        _ = s("844389"),
        f = s("392518"),
        L = s("414298"),
        S = s("815143"),
        I = s("134072");
      function p(e) {
        let {
            movDark: t = d,
            movLight: s = o,
            mp4Dark: n = T,
            mp4Light: l = L,
            pngDark: i = _,
            pngLight: r = S,
            webmDark: c = f,
            webmLight: p = I,
          } = e,
          A = (0, u.getChromeVersion)(),
          C = [
            (0, a.jsx)("source", { src: n, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: i }, "png"),
          ],
          m = [
            (0, a.jsx)("source", { src: l, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: r }, "png"),
          ];
        return (
          (A > 52 || -1 === A) &&
            (C.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm")
            ),
            m.unshift(
              (0, a.jsx)("source", { src: p, type: "video/webm" }, "webm")
            )),
          (0, u.supportsHEVCAlpha)() &&
            (C.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc")
            ),
            m.unshift(
              (0, a.jsx)("source", { src: s, type: "video/mp4" }, "hevc")
            )),
          { [E.ThemeTypes.DARK]: C, [E.ThemeTypes.LIGHT]: m }
        );
      }
      let A = r.default.getAppSpinnerSources(),
        C = null != A ? p(A) : null,
        m = p({});
      var M = e => {
        var t;
        let {
            loop: s = !0,
            autoPlay: r = !0,
            setRef: u,
            className: d,
            onReady: o,
          } = e,
          { theme: T } = (0, i.useThemeContext)(),
          { reducedMotion: _ } = n.useContext(
            i.AccessibilityPreferencesContext
          ),
          f = m;
        null != C && (f = C);
        let L = (0, l.isThemeDark)(T) ? E.ThemeTypes.DARK : E.ThemeTypes.LIGHT,
          S = null !== (t = f[L]) && void 0 !== t ? t : f[E.ThemeTypes.DARK];
        return (0, a.jsx)(
          c.default,
          {
            ref: u,
            onLoadedData: o,
            className: d,
            loop: !_.enabled && s,
            autoPlay: !_.enabled && r,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: S,
          },
          T
        );
      };
    },
    98013: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          makeDesktopDownloadURL: function () {
            return d;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return E;
          },
          getMobileDownloadLink: function () {
            return T;
          },
        });
      var a = s("597755"),
        n = s.n(a),
        l = s("815157"),
        i = s("271938"),
        r = s("49111");
      let u = "linux";
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          s = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(r.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != s ? "&format=".concat(s) : "");
      }
      function o() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = n.os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? u
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [u]: "Linux" }[o(e)];
      }
      function E() {
        let e = o();
        return d(e, !1, e === u ? "tar.gz" : null);
      }
      function T(e, t, s) {
        let a = null != s ? s.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.default)(
              null != a
                ? a
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != a ? a : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != a ? a : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=e136e5818ba8e273c8fc.js.map
