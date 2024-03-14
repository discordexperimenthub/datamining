(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3328"],
  {
    773284: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("884691"),
        n = a("773336");
      function s(e) {
        let t = l.useRef(e);
        return (
          l.useEffect(() => {
            t.current = e;
          }, [e]),
          l.useCallback(e => {
            let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
              l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
              { disabled: s = !1, onSubmit: r } = t.current;
            if ("enter" === e.key.toLowerCase())
              ("macos" === (0, n.getOS)() ? l : a) &&
                !s &&
                (e.preventDefault(), r());
          }, [])
        );
      }
    },
    172402: function (e, t, a) {
      "use strict";
      var l, n;
      a.r(t),
        a.d(t, {
          PollMediaUploadAttachmentStatus: function () {
            return l;
          },
        }),
        ((n = l || (l = {})).PREPARING = "PREPARING"),
        (n.READY_TO_UPLOAD = "READY_TO_UPLOAD"),
        (n.ERROR = "ERROR");
    },
    104182: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        }),
        a("222007"),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660");
      var l = a("884691"),
        n = a("418009"),
        s = a("162426"),
        r = a("314743"),
        o = a("172402"),
        i = a("914271"),
        u = a("847511"),
        d = a("562228"),
        c = a("491096"),
        E = a("782340");
      function _(e, t) {
        let a = e.id,
          _ = l.useRef();
        null == _.current &&
          (_.current = [
            (0, d.generateEmptyPollAnswer)(),
            (0, d.generateEmptyPollAnswer)(),
          ]);
        let [m, L] = l.useState(_.current),
          [f, R] = l.useState(""),
          [C, N] = l.useState(n.PollLayoutTypes.DEFAULT),
          [T, O] = l.useState(!1),
          [h, I] = l.useState(c.PollDurations.ONE_DAY),
          [P, x] = l.useState({}),
          [p, g] = l.useState(!1),
          M = m.filter(e => (0, d.isAnswerFilled)(e, C)),
          j = m.filter(e => (0, d.isIncompleteAnswer)(e, C)),
          S =
            f.length > 0 &&
            M.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
            0 === j.length,
          [v, { error: D, loading: U }] = (0, s.default)(u.default.createPoll),
          b = m.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL,
          w = m.length > c.MIN_NUMBER_OF_ANSWERS_PER_POLL,
          y = l.useCallback(e => {
            x(e => {
              let t = { ...e };
              return delete t.question, t;
            }),
              R(e);
          }, []),
          k = l.useCallback(e => {
            let { text: t, index: a, localCreationAnswerId: l } = e;
            x(e => {
              let t = { ...e };
              return delete t["answer-".concat(l)], t;
            }),
              L(e => {
                let l = [...e];
                return (l[a] = { ...l[a], text: t }), l;
              });
          }, []),
          B = l.useCallback((e, t) => {
            L(a => {
              let l = [...a];
              return (l[t] = { ...l[t], image: e }), l;
            });
          }, []),
          H = l.useCallback(
            (e, t, a) => {
              var l;
              let n = m[t],
                s =
                  null === (l = n.image) || void 0 === l
                    ? void 0
                    : l.mediaAttachmentState;
              null != s &&
                s.mediaURL !== a &&
                i.removePollUploadAttachment(
                  e,
                  n.localCreationAnswerId,
                  (0, r.getFileNameFromGifUrl)(
                    n.localCreationAnswerId,
                    s.mediaURL
                  )
                );
            },
            [m]
          ),
          F = l.useCallback(
            async (e, t, a) => {
              let l = m[t].localCreationAnswerId;
              H(e, t), B(A(a, o.PollMediaUploadAttachmentStatus.PREPARING), t);
              let n = await i.handlePollGifAttachmentAdd(e, l, a);
              if (null == n) {
                B(A(a, o.PollMediaUploadAttachmentStatus.ERROR), t);
                return;
              }
              B(A(a, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [m, B, H]
          ),
          G = l.useCallback(
            (e, t, a) => {
              let l = m[t].localCreationAnswerId,
                n = URL.createObjectURL(a);
              H(e, t),
                B(A(n, o.PollMediaUploadAttachmentStatus.PREPARING), t),
                i.handlePollMediaAttachmentAdd(e, l, a),
                B(A(n, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [m, B, H]
          ),
          W = l.useCallback(
            (e, t) => {
              H(a, t),
                B(
                  { emoji: e, stickerId: void 0, mediaAttachmentState: void 0 },
                  t
                );
            },
            [a, B, H]
          ),
          Y = l.useCallback(e => {
            L(t => {
              let a = [...t];
              return (a[e] = { ...a[e], image: void 0 }), a;
            });
          }, []),
          V = l.useCallback(() => {
            b && L(e => [...e, (0, d.generateEmptyPollAnswer)()]);
          }, [b]),
          z = l.useCallback(
            e => {
              w &&
                (H(a, e),
                L(t => {
                  let a = [...t];
                  return a.splice(e, 1), a;
                }));
            },
            [w, a, H]
          );
        l.useEffect(
          () => () => {
            i.removeAllPollUploadAttachments(a);
          },
          [a]
        );
        let K = l.useCallback(() => {
            let e = !0,
              t = {};
            0 === f.trim().length &&
              ((e = !1),
              (t.question = E.default.Messages.CREATE_POLL_QUESTION_REQUIRED));
            let a = m.filter(e => (0, d.isAnswerFilled)(e, C));
            return (
              a.length < c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
                ((e = !1),
                (t["answer-".concat(m[0].localCreationAnswerId)] =
                  E.default.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED)),
              m.forEach(a => {
                (0, d.isIncompleteAnswer)(a, C) &&
                  ((e = !1),
                  (t["answer-".concat(a.localCreationAnswerId)] =
                    E.default.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT));
              }),
              x(t),
              g(!e),
              e
            );
          }, [m, f, C]),
          X = l.useCallback(async () => {
            await v({
              channel: e,
              question: f,
              answers: M,
              allowMultiSelect: T,
              duration: h,
              layout: C,
              onClose: t,
            });
          }, [f, M, T, h, v, e, C, t]),
          q = l.useCallback(() => {
            K() && X();
          }, [X, K]);
        return {
          answers: m,
          question: f,
          setQuestion: R,
          selectedLayoutType: C,
          setSelectedLayoutType: N,
          allowMultiSelect: T,
          setAllowMultiSelect: O,
          duration: h,
          setDuration: I,
          canPost: S,
          canAddMoreAnswers: b,
          canRemoveMoreAnswers: w,
          handleQuestionChange: y,
          handleAnswerTextChange: k,
          handleGifSelect: F,
          handleEmojiSelect: W,
          handleCustomUpload: G,
          handleAddAnswer: V,
          handleRemoveAnswer: z,
          handleRemoveAnswerImage: Y,
          fieldErrors: P,
          createPoll: X,
          handleSubmitPoll: q,
          submitting: U,
          createPollError: D,
          shouldFocusOnInvalidField: p,
          setShouldFocusOnInvalidField: g,
        };
      }
      function A(e, t) {
        return {
          mediaAttachmentState: { status: t, mediaURL: e },
          emoji: void 0,
          stickerId: void 0,
        };
      }
    },
    741138: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("491096"),
        n = a("782340");
      function s() {
        return Object.freeze({
          [l.PollDurations.ONE_HOUR]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format(
              { num: 1 }
            ),
          [l.PollDurations.FOUR_HOURS]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format(
              { num: 4 }
            ),
          [l.PollDurations.EIGHT_HOURS]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format(
              { num: 8 }
            ),
          [l.PollDurations.ONE_DAY]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format(
              { num: 24 }
            ),
          [l.PollDurations.THREE_DAYS]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_3_DAYS,
          [l.PollDurations.SEVEN_DAYS]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_7_DAYS,
        });
      }
    },
    362415: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useTrackPollCreationEvents: function () {
            return r;
          },
        });
      var l = a("884691"),
        n = a("716241"),
        s = a("49111");
      function r(e, t, a) {
        let r = l.useCallback(() => {
          let l = 0,
            r = 0,
            o = 0;
          e.forEach(e => {
            let t = e.image;
            null != t &&
              (null != t.emoji
                ? (r += 1)
                : null != t.stickerId
                  ? (o += 1)
                  : null != t.mediaAttachmentState && (l += 1));
          }),
            n.default.trackWithMetadata(
              s.AnalyticEvents.POLL_CREATION_CANCELLED,
              {
                answers_count: e.length,
                attachments_count: l,
                emojis_count: r,
                stickers_count: o,
                allow_multiselect: t,
                layout_type: a,
              }
            );
        }, [e, t, a]);
        return { trackPollCreationCancelled: r };
      }
    },
    418298: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PollCreationMediaPreview: function () {
            return j;
          },
          default: function () {
            return U;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        o = a("418009"),
        i = a("446674"),
        u = a("77078"),
        d = a("81594"),
        c = a("430568"),
        E = a("9560"),
        _ = a("86678"),
        A = a("858619"),
        m = a("474643"),
        L = a("585722"),
        f = a("476765"),
        R = a("832132"),
        C = a("46829"),
        N = a("228220"),
        T = a("562228"),
        O = a("714411"),
        h = a("356581"),
        I = a("491096"),
        P = a("958706"),
        x = a("13030"),
        p = a("782340"),
        g = a("345379");
      let M = { offset: { top: -4, bottom: -4, left: 0, right: -8 } };
      function j(e) {
        let {
          hasUpload: t,
          mediaUrl: a,
          mediaFilename: n,
          imageClassName: s,
          emoji: r,
          emojiClassName: o,
          fallback: i,
        } = e;
        return t
          ? (0, l.jsx)("img", { src: a, alt: n, className: s })
          : null != r
            ? (0, l.jsx)(c.default, {
                className: o,
                emojiId: r.id,
                emojiName:
                  r.type === A.EmojiTypes.UNICODE ? r.surrogates : r.name,
                animated: r.animated,
              })
            : (0, l.jsx)(l.Fragment, { children: i });
      }
      function S(e) {
        let {
          onSelect: t,
          onEditMedia: a,
          onDeleteMedia: n,
          closePopout: s,
        } = e;
        return (0, l.jsx)("div", {
          className: g.menuContainer,
          children: (0, l.jsx)(u.Menu, {
            navId: "poll-media-edit-menu",
            onClose: s,
            "aria-label": p.default.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
            onSelect: t,
            children: (0, l.jsxs)(u.MenuGroup, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: "poll-media-replace",
                  label: p.default.Messages.CREATE_POLL_REPLACE_EMOJI,
                  action: a,
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: "poll-media-delete",
                  label: p.default.Messages.CREATE_POLL_REMOVE_EMOJI,
                  action: n,
                  color: "danger",
                }),
              ],
            }),
          }),
        });
      }
      function v(e) {
        let {
            channelId: t,
            localCreationAnswerId: a,
            buttonImage: s,
            layout: i,
            onEmojiSelect: d,
            onEmojiRemove: c,
            answerIndex: E,
          } = e,
          [A, m] = n.useState(!1),
          {
            emoji: L,
            isLoadingMedia: f,
            hasUpload: N,
            mediaUrl: O,
            mediaFilename: I,
          } = (0, h.default)({
            channelId: t,
            localCreationAnswerId: a,
            image: s,
          }),
          M = i === o.PollLayoutTypes.DEFAULT,
          v = N || null != L,
          D = n.useCallback(() => {
            c(E);
          }, [c, E]),
          U = n.useCallback(() => {
            m(e => !e);
          }, []),
          b = n.useMemo(
            () =>
              N
                ? p.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, T.filterOutUUID)(I),
                    answerNumber: E + 1,
                  })
                : null != L
                  ? p.default.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
                      emojiName: L.name,
                      answerNumber: E + 1,
                    })
                  : p.default.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({
                      answerNumber: E + 1,
                    }),
            [N, L, E, I]
          ),
          w = n.useCallback(
            e => {
              let { closePopout: t } = e;
              return (0, l.jsx)("div", {
                className: g.emojiPicker,
                children: (0, l.jsx)(_.default, {
                  pickerIntention: P.EmojiIntention.POLLS,
                  closePopout: t,
                  onNavigateAway: t,
                  onSelectEmoji: (e, a) => {
                    null != e && d(e, E), a && t();
                  },
                }),
              });
            },
            [d, E]
          ),
          y = n.useCallback(
            e => {
              let { closePopout: t } = e;
              return (0, l.jsx)(S, {
                onSelect: t,
                onEditMedia: U,
                onDeleteMedia: D,
                closePopout: t,
              });
            },
            [D, U]
          ),
          k = f
            ? (0, l.jsx)(u.Spinner, {
                className: M
                  ? g.spinnerWrapperDefault
                  : g.spinnerWrapperImageOnly,
              })
            : (0, l.jsx)(j, {
                hasUpload: N,
                mediaUrl: O,
                mediaFilename: I,
                imageClassName: r(g.media, M ? g.gifDefault : g.gifJumbo),
                emoji: L,
                emojiClassName: r(g.media, M ? g.emojiDefault : g.emojiJumbo),
                fallback: (0, l.jsx)(C.default, {
                  className: M
                    ? g.expressionPickerIconDefault
                    : g.expressionPickerIconImageOnly,
                }),
              }),
          B = r(
            x.CHAT_INPUT_BUTTON_CLASSNAME,
            i === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS
              ? g.expressionPickerButtonImageOnly
              : g.expressionPickerButtonDefault,
            { [g.canEditMedia]: v }
          );
        return (0, l.jsx)(u.Popout, {
          renderPopout: w,
          shouldShow: A,
          onRequestClose: U,
          animation: u.Popout.Animation.NONE,
          position: "bottom",
          spacing: 2,
          children: e => {
            let { "aria-controls": t, "aria-expanded": a, ...n } = e;
            return (0, l.jsx)(u.Popout, {
              animation: u.Popout.Animation.NONE,
              position: "bottom",
              renderPopout: y,
              children: e => {
                let {
                  onClick: n,
                  "aria-controls": s,
                  "aria-expanded": r,
                  ...o
                } = e;
                return (0, l.jsxs)(u.Clickable, {
                  ...o,
                  className: B,
                  onClick: v && !A ? n : U,
                  "aria-label": b,
                  "aria-controls": null != t ? t : s,
                  "aria-expanded": a || r,
                  children: [
                    k,
                    v &&
                      (0, l.jsx)(R.default, {
                        className: g.editIcon,
                        "aria-hidden": !0,
                      }),
                  ],
                });
              },
            });
          },
        });
      }
      function D(e) {
        var t;
        let { value: a, id: n } = e,
          s = (() => {
            var e;
            let t =
              null !== (e = null == a ? void 0 : a.length) && void 0 !== e
                ? e
                : 0;
            return I.MAX_POLL_ANSWER_LENGTH - t;
          })();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: r(g.characterCount),
              "aria-hidden": "true",
              children: [
                null !== (t = null == a ? void 0 : a.length) && void 0 !== t
                  ? t
                  : 0,
                " / ",
                I.MAX_POLL_ANSWER_LENGTH,
              ],
            }),
            (0, l.jsxs)(u.HiddenVisually, {
              id: n,
              children: [
                p.default.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
                  remainingCharacters: s,
                }),
                " ",
                p.default.Messages.MAXIMUM_LENGTH.format({
                  maxLength: I.MAX_POLL_ANSWER_LENGTH,
                }),
              ],
            }),
          ],
        });
      }
      var U = n.forwardRef(function (e, t) {
        let {
            channelId: n,
            answer: s,
            index: c,
            layout: _,
            onAnswerTextChange: A,
            onEmojiSelect: R,
            onEmojiRemove: C,
            canRemoveAnswer: T,
            onRemoveAnswer: h,
            error: P,
            inputRef: x,
          } = e,
          j = (0, f.useUID)(),
          S = (0, f.useUID)(),
          U = null != P && P.length > 0,
          b = (0, i.useStateFromStores)([L.default], () =>
            L.default.getUpload(n, s.localCreationAnswerId, m.DraftType.Poll)
          ),
          w = () => {
            function e(e) {
              d.default.update(n, s.localCreationAnswerId, m.DraftType.Poll, {
                description: e,
              });
            }
            (0, u.openModalLazy)(async () => {
              let { default: t } = await a.el("38228").then(a.bind(a, "38228"));
              return a =>
                (0, l.jsx)(t, { channelId: n, answer: s, onSave: e, ...a });
            });
          },
          y = (0, l.jsx)(v, {
            channelId: n,
            buttonImage: s.image,
            layout: _,
            onEmojiSelect: R,
            onEmojiRemove: C,
            localCreationAnswerId: s.localCreationAnswerId,
            answerIndex: c,
          }),
          k = null != b && null != b.description && b.description.length > 0;
        return (0, l.jsx)(l.Fragment, {
          children:
            _ === o.PollLayoutTypes.DEFAULT
              ? (0, l.jsxs)("div", {
                  className: r(g.answerRow, { [g.hasDeleteButton]: T }),
                  children: [
                    (0, l.jsxs)("div", {
                      className: r(g.defaultTextInputWrapper, {
                        [g.hasError]: U,
                      }),
                      ref: t,
                      children: [
                        y,
                        (0, l.jsx)(u.TextInput, {
                          "aria-label":
                            p.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format(
                              { answerNumber: c + 1 }
                            ),
                          placeholder:
                            p.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                          value: s.text,
                          className: g.defaultTextInput,
                          inputClassName: g.defaultTextInput,
                          onChange: e =>
                            A({
                              text: e,
                              index: c,
                              localCreationAnswerId: s.localCreationAnswerId,
                            }),
                          maxLength: I.MAX_POLL_ANSWER_LENGTH,
                          "aria-invalid": U,
                          "aria-describedby": U ? j : S,
                          focusProps: M,
                          inputRef: x,
                        }),
                        (0, l.jsx)(D, { value: s.text, id: S }),
                      ],
                    }),
                    T &&
                      (0, l.jsx)(u.Clickable, {
                        onClick: () => h(c),
                        className: g.removeAnswerButtonDefault,
                        "aria-label":
                          p.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                            { answerNumber: c + 1 }
                          ),
                        children: (0, l.jsx)(N.default, {
                          className: g.trashIcon,
                          "aria-hidden": !0,
                        }),
                      }),
                    U &&
                      (0, l.jsx)(u.Text, {
                        id: j,
                        variant: "text-xs/medium",
                        color: "text-danger",
                        className: g.errorText,
                        children: P,
                      }),
                  ],
                })
              : (0, l.jsxs)("div", {
                  className: g.imageOnlyContainer,
                  ref: t,
                  children: [
                    (0, l.jsxs)("div", {
                      className: g.imagePreviewContainer,
                      children: [
                        y,
                        k &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/semibold",
                                className: g.altBadge,
                                "aria-hidden": !0,
                                children: p.default.Messages.IMAGE_ALT,
                              }),
                              (0, l.jsxs)("div", {
                                onClick: w,
                                children: [
                                  (0, l.jsx)(u.HiddenVisually, {
                                    children:
                                      p.default.Messages
                                        .CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT,
                                  }),
                                  (0, l.jsx)(u.Text, {
                                    variant: "text-xxs/medium",
                                    className: g.altTextPreview,
                                    children: b.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: g.imageOnlyAnswerActionBar,
                      children: [
                        null != b
                          ? (0, l.jsx)(E.default, {
                              tooltip:
                                p.default.Messages
                                  .CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                              "aria-label": k
                                ? p.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format(
                                    { answerNumber: c + 1 }
                                  )
                                : p.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format(
                                    { answerNumber: c + 1 }
                                  ),
                              onClick: w,
                              children: (0, l.jsx)(O.ImageAltIcon, {
                                "aria-hidden": !0,
                              }),
                            })
                          : null,
                        (0, l.jsx)(E.default, {
                          tooltip: p.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                          "aria-label":
                            p.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                              { answerNumber: c + 1 }
                            ),
                          onClick: () => h(c),
                          dangerous: !0,
                          children: (0, l.jsx)(N.default, {
                            "aria-hidden": !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
        });
      });
    },
    487757: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        o = a("33112"),
        i = a("418009"),
        u = a("77078"),
        d = a("428958"),
        c = a("773284"),
        E = a("191814"),
        _ = a("476765"),
        A = a("151185"),
        m = a("562228"),
        L = a("104182"),
        f = a("741138"),
        R = a("362415"),
        C = a("418298"),
        N = a("612805"),
        T = a("233365"),
        O = a("491096"),
        h = a("660516"),
        I = a("782340"),
        P = a("149753");
      let x = (0, _.uid)(),
        p = (0, _.uid)();
      function g(e) {
        let { question: t, onChange: a, error: s, inputRef: o } = e,
          [i, d] = n.useState(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.FormTitle, {
              tag: u.FormTitleTags.LABEL,
              htmlFor: p,
              children: I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
            }),
            (0, l.jsx)(u.TextArea, {
              inputRef: o,
              id: p,
              placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
              value: t,
              className: r(P.questionInput, { [P.hasError]: null != s }),
              onChange: a,
              maxLength: O.MAX_POLL_QUESTION_LENGTH,
              error: s,
              onFocus: () => d(!0),
              onBlur: () => d(!1),
              showCharacterCount: i,
              showCharacterCountFullPadding: !0,
              showRemainingCharacterCount: i,
              rows: 1,
              autosize: !0,
              autoFocus: !0,
            }),
          ],
        });
      }
      function M(e) {
        let { selectedDuration: t, onSelect: a } = e,
          n = (0, f.default)(),
          s = n[t];
        return (0, l.jsxs)("div", {
          className: P.duration,
          children: [
            (0, l.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              tag: "label",
              "aria-hidden": !0,
              children: I.default.Messages.CREATE_POLL_DURATION_LABEL,
            }),
            (0, l.jsx)(u.Select, {
              "aria-label":
                I.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format(
                  { duration: s }
                ),
              className: P.durationSelect,
              options: Object.entries(n).map(e => {
                let [t, a] = e;
                return { label: a, value: parseInt(t) };
              }),
              isSelected: e => e === t,
              select: a,
              serialize: e => "".concat(e),
              renderOptionLabel: e =>
                (0, l.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children: e.label,
                }),
              popoutPosition: "top",
            }),
          ],
        });
      }
      function j(e) {
        let { channel: t, transitionState: a, onClose: s } = e,
          _ = (0, m.useCanPostImagePolls)();
        (0, d.default)({
          type: h.ImpressionTypes.MODAL,
          name: o.ImpressionNames.POLL_EDITOR_VIEWED,
        });
        let {
            answers: f,
            question: p,
            selectedLayoutType: S,
            setSelectedLayoutType: v,
            allowMultiSelect: D,
            setAllowMultiSelect: U,
            duration: b,
            setDuration: w,
            handleQuestionChange: y,
            handleAnswerTextChange: k,
            handleEmojiSelect: B,
            canAddMoreAnswers: H,
            handleRemoveAnswerImage: F,
            canRemoveMoreAnswers: G,
            handleAddAnswer: W,
            handleRemoveAnswer: Y,
            createPollError: V,
            handleSubmitPoll: z,
            fieldErrors: K,
            submitting: X,
            shouldFocusOnInvalidField: q,
            setShouldFocusOnInvalidField: J,
          } = (0, L.default)(t, s),
          { trackPollCreationCancelled: Q } = (0, R.useTrackPollCreationEvents)(
            f,
            D,
            S
          ),
          Z = n.useRef(null),
          $ = n.useRef([]),
          ee = n.useRef([]),
          et = S === i.PollLayoutTypes.DEFAULT,
          ea = n.useCallback(() => {
            Q(), s();
          }, [s, Q]),
          el = n.useCallback(() => {
            if ((0, m.isPollCreationEmpty)(p, f, S)) ea();
            else {
              (0, T.default)({
                title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                body: I.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                cta: I.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                closeLabel:
                  I.default.Messages
                    .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                onConfirm: () => {
                  ea();
                },
              });
              return;
            }
          }, [ea, f, p, S]);
        n.useEffect(() => {
          (0, u.updateModal)(
            O.POLL_CREATION_MODAL_KEY,
            e => (0, l.jsx)(j, { ...e, channel: t }),
            el
          );
        }, [el, t]),
          n.useEffect(() => {
            if (q) {
              var e, t;
              if ((null == K ? void 0 : K.question) != null)
                null === (e = Z.current) || void 0 === e || e.focus();
              else {
                let e = f.findIndex(
                  e => K["answer-".concat(e.localCreationAnswerId)]
                );
                -1 !== e &&
                  (null === (t = ee.current[e]) || void 0 === t || t.focus());
              }
              J(!1);
            }
          }, [K, f, q, J, ee, $]);
        let en = (0, c.default)({ disabled: X, onSubmit: z });
        return (0, l.jsxs)(u.ModalRoot, {
          size: u.ModalSize.MEDIUM,
          className: P.container,
          transitionState: a,
          "aria-labelledby": x,
          children: [
            (0, l.jsxs)(u.ModalHeader, {
              className: P.header,
              separator: !1,
              children: [
                (0, l.jsx)(u.Heading, {
                  color: "interactive-normal",
                  variant: "text-lg/semibold",
                  className: P.headerText,
                  id: x,
                  children: I.default.Messages.CREATE_POLL_HEADING,
                }),
                (0, l.jsx)(u.ModalCloseButton, { onClick: el }),
              ],
            }),
            (0, l.jsxs)(u.ModalContent, {
              className: P.content,
              onKeyDown: en,
              children: [
                null != V &&
                  (0, l.jsx)(u.FormErrorBlock, {
                    className: P.apiErrorBlock,
                    children: V.getAnyErrorMessage(),
                  }),
                (0, l.jsx)(g, {
                  question: p,
                  onChange: y,
                  error: null == K ? void 0 : K.question,
                  inputRef: Z,
                }),
                _ &&
                  (0, l.jsx)(N.default, {
                    selectedLayoutType: S,
                    onSelectedLayoutType: v,
                  }),
                (0, l.jsx)(E.default, { size: 26 }),
                (0, l.jsxs)("fieldset", {
                  className: r(
                    P.answerInputsContainer,
                    et ? P.defaultContainer : P.imageOnlyContainer
                  ),
                  children: [
                    (0, l.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.LEGEND,
                      children:
                        I.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL,
                    }),
                    f.map((e, a) =>
                      (0, l.jsx)(
                        C.default,
                        {
                          answer: e,
                          channelId: t.id,
                          index: a,
                          onEmojiSelect: B,
                          onEmojiRemove: F,
                          ref: e => ($.current[a] = e),
                          inputRef: e => (ee.current[a] = e),
                          layout: S,
                          onAnswerTextChange: k,
                          onRemoveAnswer: Y,
                          error:
                            null == K
                              ? void 0
                              : K["answer-".concat(e.localCreationAnswerId)],
                          canRemoveAnswer: G,
                        },
                        e.localCreationAnswerId
                      )
                    ),
                    H &&
                      (0, l.jsxs)(u.Clickable, {
                        className: r(
                          et
                            ? P.addAnswerButtonDefault
                            : P.addAnswerButtonImageOnly,
                          { [P.canRemoveMoreAnswers]: G }
                        ),
                        onClick: H ? W : void 0,
                        "aria-label":
                          I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                        children: [
                          (0, l.jsx)(A.default, {
                            className: et
                              ? P.addAnswerIconDefault
                              : P.addAnswerIconImageOnly,
                          }),
                          et &&
                            (0, l.jsx)(u.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              className: P.addAnswerButtonLabel,
                              children:
                                I.default.Messages
                                  .CREATE_POLL_ADD_ANSWER_BUTTON,
                            }),
                        ],
                      }),
                  ],
                }),
                (0, l.jsx)(E.default, { size: 18 }),
                (0, l.jsx)(M, { selectedDuration: b, onSelect: w }),
              ],
            }),
            (0, l.jsxs)(u.ModalFooter, {
              className: P.footer,
              children: [
                (0, l.jsx)(u.Checkbox, {
                  className: P.checkbox,
                  type: u.Checkbox.Types.INVERTED,
                  size: 24,
                  value: D,
                  checkboxColor: (0, u.useToken)(
                    u.tokens.colors.INTERACTIVE_NORMAL
                  ).hex(),
                  onChange: (e, t) => U(t),
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "interactive-active",
                    children: I.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS,
                  }),
                }),
                (0, l.jsx)(u.Button, {
                  look: u.ButtonLooks.FILLED,
                  size: u.Button.Sizes.MEDIUM,
                  className: P.postButton,
                  onClick: z,
                  submitting: X,
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: P.postButtonText,
                    children: I.default.Messages.CREATE_POLL_POST,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    612805: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        o = a("418009"),
        i = a("77078"),
        u = a("95689"),
        d = a("100300"),
        c = a("782340"),
        E = a("563778");
      function _(e) {
        let { label: t, isSelected: a, onClick: n, children: s } = e,
          o = (0, i.useRadioItem)({ isSelected: a, label: t });
        return (0, l.jsx)(i.Clickable, {
          ...o,
          onClick: n,
          className: r(E.option, a && E.optionSelected),
          children: s,
        });
      }
      var A = function (e) {
        let { selectedLayoutType: t, onSelectedLayoutType: a } = e,
          s = (0, i.useRadioGroup)({ orientation: "horizontal" }),
          r = n.useMemo(
            () => [
              {
                name: o.PollLayoutTypes.DEFAULT,
                label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                icon: d.default,
              },
              {
                name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                icon: u.default,
              },
            ],
            []
          ),
          A = e => {
            a(e);
          };
        return (0, l.jsx)("div", {
          className: E.container,
          "aria-label":
            c.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
          ...s,
          children: r.map(e => {
            let a = e.icon;
            return (0, l.jsx)(
              _,
              {
                label: e.label,
                isSelected: e.name === t,
                onClick: () => A(e.name),
                children: (0, l.jsx)(a, { className: E.icon }),
              },
              e.name
            );
          }),
        });
      };
    },
    714411: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ImageAltIcon: function () {
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        s = a("75196");
      let r = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          viewBox: "0 0 24 24",
          fill: "string" == typeof r ? r : r.css,
          children: [
            (0, l.jsxs)("g", {
              "clip-path": "url(#clip0_1_16)",
              children: [
                (0, l.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H12.2763C12.4842 22 12.6704 21.8714 12.744 21.6769L13.5005 19.6769C13.6242 19.3498 13.3825 19 13.0328 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333L15.7659 13.6879L15.9155 13.2924C16.2097 12.5146 16.9545 12 17.7861 12H20.1143C20.6827 12 21.2003 12.2434 21.57 12.6395C21.6838 12.7614 22 12.6785 22 12.5118V5C22 3.34315 20.6569 2 19 2H5ZM8.64943 5.07947C9.32431 4.42611 10.4329 5.06617 10.2045 5.97731C10.082 6.46608 10.3694 6.96388 10.854 7.10216C11.7572 7.35994 11.7572 8.64005 10.854 8.89784C10.3694 9.03612 10.082 9.53392 10.2045 10.0227C10.4329 10.9338 9.32431 11.5739 8.64943 10.9205C8.28741 10.57 7.71259 10.57 7.35057 10.9205C6.67569 11.5739 5.56708 10.9338 5.79547 10.0227C5.91798 9.53392 5.63058 9.03612 5.14603 8.89784C4.24276 8.64006 4.24276 7.35994 5.14603 7.10216C5.63058 6.96388 5.91798 6.46608 5.79547 5.97731C5.56708 5.06617 6.67569 4.42611 7.35057 5.07947C7.71259 5.42996 8.28741 5.42996 8.64943 5.07947Z",
                }),
                (0, l.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M21.613 24.04H23.912L20.1143 14H17.7861L13.9884 24.04H16.2874L16.9422 22.1193H20.9582L21.613 24.04ZM17.6115 20.1986L18.9502 16.2845L20.2889 20.1986H17.6115Z",
                }),
              ],
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsx)("clipPath", {
                id: "clip0_1_16",
                children: (0, l.jsx)("rect", { width: "24", height: "24" }),
              }),
            }),
          ],
        });
      };
    },
    233365: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("551042");
      function s(e) {
        (0, n.openModalLazy)(async () => {
          let { default: t } = await a.el("553621").then(a.bind(a, "553621"));
          return a => (0, l.jsx)(t, { ...e, ...a });
        });
      }
    },
    356581: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        }),
        a("222007"),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660");
      var l = a("884691"),
        n = a("446674"),
        s = a("474643"),
        r = a("585722"),
        o = a("172402");
      function i(e) {
        var t, a;
        let { channelId: i, localCreationAnswerId: u, image: d } = e,
          c = null == d ? void 0 : d.emoji,
          E =
            (null == d
              ? void 0
              : null === (t = d.mediaAttachmentState) || void 0 === t
                ? void 0
                : t.status) === o.PollMediaUploadAttachmentStatus.PREPARING,
          _ = (0, n.useStateFromStores)([r.default], () =>
            r.default.getUpload(i, u, s.DraftType.Poll)
          ),
          [A, m] = l.useState(),
          [L, f] = l.useState("");
        return (
          l.useEffect(() => {
            var e;
            if (
              (null == _
                ? void 0
                : null === (e = _.item) || void 0 === e
                  ? void 0
                  : e.file) == null
            )
              return;
            let t = URL.createObjectURL(_.item.file);
            return (
              m(t),
              f(_.item.file.name),
              () => {
                URL.revokeObjectURL(t);
              }
            );
          }, [
            null == _
              ? void 0
              : null === (a = _.item) || void 0 === a
                ? void 0
                : a.file,
          ]),
          {
            emoji: c,
            isLoadingMedia: E,
            hasUpload: null != _,
            upload: _,
            mediaUrl: A,
            mediaFilename: L,
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=c0cfe33232d48a99494b.js.map
