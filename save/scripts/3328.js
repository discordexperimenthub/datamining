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
            return A;
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
        i = a("172402"),
        o = a("914271"),
        u = a("847511"),
        d = a("562228"),
        c = a("491096"),
        E = a("782340");
      function A(e, t) {
        let a = e.id,
          A = l.useRef();
        null == A.current &&
          (A.current = [
            (0, d.generateEmptyPollAnswer)(),
            (0, d.generateEmptyPollAnswer)(),
          ]);
        let [m, L] = l.useState(A.current),
          [f, C] = l.useState(""),
          [R, T] = l.useState(n.PollLayoutTypes.DEFAULT),
          [N, h] = l.useState(!1),
          [O, I] = l.useState(c.PollDurations.ONE_DAY),
          [P, x] = l.useState({}),
          [g, p] = l.useState(!1),
          M = m.filter(e => (0, d.isAnswerFilled)(e, R)),
          v = m.filter(e => (0, d.isIncompleteAnswer)(e, R)),
          S =
            f.length > 0 &&
            M.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
            0 === v.length,
          [j, { error: D, loading: b }] = (0, s.default)(u.default.createPoll),
          w = m.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL,
          U = m.length > c.MIN_NUMBER_OF_ANSWERS_PER_POLL,
          y = l.useCallback(e => {
            x(e => {
              let t = { ...e };
              return delete t.question, t;
            }),
              C(e);
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
          F = l.useCallback(
            (e, t, a) => {
              var l;
              let n = m[t],
                s =
                  null === (l = n.image) || void 0 === l
                    ? void 0
                    : l.mediaAttachmentState;
              null != s &&
                s.mediaURL !== a &&
                o.removePollUploadAttachment(
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
          G = l.useCallback(
            async (e, t, a) => {
              let l = m[t].localCreationAnswerId;
              F(e, t), B(_(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
              let n = await o.handlePollGifAttachmentAdd(e, l, a);
              if (null == n) {
                B(_(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
                return;
              }
              B(_(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [m, B, F]
          ),
          H = l.useCallback(
            (e, t, a) => {
              let l = m[t].localCreationAnswerId,
                n = URL.createObjectURL(a);
              F(e, t),
                B(_(n, i.PollMediaUploadAttachmentStatus.PREPARING), t),
                o.handlePollMediaAttachmentAdd(e, l, a),
                B(_(n, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [m, B, F]
          ),
          W = l.useCallback(
            (e, t) => {
              F(a, t),
                B(
                  { emoji: e, stickerId: void 0, mediaAttachmentState: void 0 },
                  t
                );
            },
            [a, B, F]
          ),
          Y = l.useCallback(e => {
            L(t => {
              let a = [...t];
              return (a[e] = { ...a[e], image: void 0 }), a;
            });
          }, []),
          V = l.useCallback(() => {
            w && L(e => [...e, (0, d.generateEmptyPollAnswer)()]);
          }, [w]),
          z = l.useCallback(
            e => {
              U &&
                (F(a, e),
                L(t => {
                  let a = [...t];
                  return a.splice(e, 1), a;
                }));
            },
            [U, a, F]
          );
        l.useEffect(
          () => () => {
            o.removeAllPollUploadAttachments(a);
          },
          [a]
        );
        let K = l.useCallback(() => {
            let e = !0,
              t = {};
            0 === f.trim().length &&
              ((e = !1),
              (t.question = E.default.Messages.CREATE_POLL_QUESTION_REQUIRED));
            let a = m.filter(e => (0, d.isAnswerFilled)(e, R));
            return (
              a.length < c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
                ((e = !1),
                (t["answer-".concat(m[0].localCreationAnswerId)] =
                  E.default.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED)),
              m.forEach(a => {
                (0, d.isIncompleteAnswer)(a, R) &&
                  ((e = !1),
                  (t["answer-".concat(a.localCreationAnswerId)] =
                    E.default.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT));
              }),
              x(t),
              p(!e),
              e
            );
          }, [m, f, R]),
          X = l.useCallback(async () => {
            await j({
              channel: e,
              question: f,
              answers: M,
              allowMultiSelect: N,
              duration: O,
              layout: R,
              onClose: t,
            });
          }, [f, M, N, O, j, e, R, t]),
          q = l.useCallback(() => {
            K() && X();
          }, [X, K]);
        return {
          answers: m,
          question: f,
          setQuestion: C,
          selectedLayoutType: R,
          setSelectedLayoutType: T,
          allowMultiSelect: N,
          setAllowMultiSelect: h,
          duration: O,
          setDuration: I,
          canPost: S,
          canAddMoreAnswers: w,
          canRemoveMoreAnswers: U,
          handleQuestionChange: y,
          handleAnswerTextChange: k,
          handleGifSelect: G,
          handleEmojiSelect: W,
          handleCustomUpload: H,
          handleAddAnswer: V,
          handleRemoveAnswer: z,
          handleRemoveAnswerImage: Y,
          fieldErrors: P,
          createPoll: X,
          handleSubmitPoll: q,
          submitting: b,
          createPollError: D,
          shouldFocusOnInvalidField: g,
          setShouldFocusOnInvalidField: p,
        };
      }
      function _(e, t) {
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
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_1_HOUR,
          [l.PollDurations.ONE_DAY]:
            n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_24_HOURS,
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
            i = 0;
          e.forEach(e => {
            let t = e.image;
            null != t &&
              (null != t.emoji
                ? (r += 1)
                : null != t.stickerId
                  ? (i += 1)
                  : null != t.mediaAttachmentState && (l += 1));
          }),
            n.default.trackWithMetadata(
              s.AnalyticEvents.POLL_CREATION_CANCELLED,
              {
                answers_count: e.length,
                attachments_count: l,
                emojis_count: r,
                stickers_count: i,
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
            return M;
          },
          default: function () {
            return j;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        i = a("418009"),
        o = a("446674"),
        u = a("77078"),
        d = a("81594"),
        c = a("430568"),
        E = a("9560"),
        A = a("86678"),
        _ = a("858619"),
        m = a("474643"),
        L = a("585722"),
        f = a("476765"),
        C = a("46829"),
        R = a("228220"),
        T = a("562228"),
        N = a("714411"),
        h = a("356581"),
        O = a("491096"),
        I = a("958706"),
        P = a("13030"),
        x = a("782340"),
        g = a("345379");
      let p = { offset: { top: -4, bottom: -4, left: 0, right: -8 } };
      function M(e) {
        let {
          hasUpload: t,
          mediaUrl: a,
          mediaFilename: n,
          imageClassName: s,
          emoji: r,
          emojiClassName: i,
          fallback: o,
        } = e;
        return t
          ? (0, l.jsx)("img", { src: a, alt: n, className: s })
          : null != r
            ? (0, l.jsx)(c.default, {
                className: i,
                emojiId: r.id,
                emojiName:
                  r.type === _.EmojiTypes.UNICODE ? r.surrogates : r.name,
                animated: r.animated,
              })
            : (0, l.jsx)(l.Fragment, { children: o });
      }
      function v(e) {
        let {
            channelId: t,
            localCreationAnswerId: a,
            buttonImage: s,
            layout: o,
            onEmojiSelect: d,
            answerIndex: c,
          } = e,
          {
            emoji: E,
            isLoadingMedia: _,
            hasUpload: m,
            mediaUrl: L,
            mediaFilename: f,
          } = (0, h.default)({
            channelId: t,
            localCreationAnswerId: a,
            image: s,
          }),
          R = o === i.PollLayoutTypes.DEFAULT,
          N = n.useMemo(
            () =>
              m
                ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, T.filterOutUUID)(f),
                    answerNumber: c + 1,
                  })
                : null != E
                  ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                      imageName: E.name,
                      answerNumber: c + 1,
                    })
                  : x.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                      answerNumber: c + 1,
                    }),
            [m, E, c, f]
          ),
          O = n.useCallback(
            e => {
              let { closePopout: t } = e;
              return (0, l.jsx)("div", {
                className: g.emojiPicker,
                children: (0, l.jsx)(A.default, {
                  pickerIntention: I.EmojiIntention.POLLS,
                  closePopout: t,
                  onNavigateAway: t,
                  onSelectEmoji: (e, a) => {
                    null != e && d(e, c), a && t();
                  },
                }),
              });
            },
            [d, c]
          ),
          p = _
            ? (0, l.jsx)(u.Spinner, {
                className: R
                  ? g.spinnerWrapperDefault
                  : g.spinnerWrapperImageOnly,
              })
            : (0, l.jsx)(M, {
                hasUpload: m,
                mediaUrl: L,
                mediaFilename: f,
                imageClassName: r(g.media, R ? g.gifDefault : g.gifJumbo),
                emoji: E,
                emojiClassName: r(g.media, R ? g.emojiDefault : g.emojiJumbo),
                fallback: (0, l.jsx)(C.default, {
                  className: R
                    ? g.expressionPickerIconDefault
                    : g.expressionPickerIconImageOnly,
                }),
              });
        return (0, l.jsx)(u.Popout, {
          animation: u.Popout.Animation.NONE,
          position: "bottom",
          renderPopout: O,
          "aria-label": N,
          children: e =>
            (0, l.jsx)(u.Clickable, {
              className: r(
                P.CHAT_INPUT_BUTTON_CLASSNAME,
                o === i.PollLayoutTypes.IMAGE_ONLY_ANSWERS
                  ? g.expressionPickerButtonImageOnly
                  : g.expressionPickerButtonDefault
              ),
              ...e,
              children: p,
            }),
        });
      }
      function S(e) {
        var t;
        let { value: a, id: n } = e,
          s = (() => {
            var e;
            let t =
              null !== (e = null == a ? void 0 : a.length) && void 0 !== e
                ? e
                : 0;
            return O.MAX_POLL_ANSWER_LENGTH - t;
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
                O.MAX_POLL_ANSWER_LENGTH,
              ],
            }),
            (0, l.jsxs)(u.HiddenVisually, {
              id: n,
              children: [
                x.default.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
                  remainingCharacters: s,
                }),
                " ",
                x.default.Messages.MAXIMUM_LENGTH.format({
                  maxLength: O.MAX_POLL_ANSWER_LENGTH,
                }),
              ],
            }),
          ],
        });
      }
      var j = n.forwardRef(function (e, t) {
        let {
            channelId: n,
            answer: s,
            index: c,
            layout: A,
            onAnswerTextChange: _,
            onEmojiSelect: C,
            canRemoveAnswer: T,
            onRemoveAnswer: h,
            error: I,
            inputRef: P,
          } = e,
          M = (0, f.useUID)(),
          j = (0, f.useUID)(),
          D = null != I && I.length > 0,
          b = (0, o.useStateFromStores)([L.default], () =>
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
          U = (0, l.jsx)(v, {
            channelId: n,
            buttonImage: s.image,
            layout: A,
            onEmojiSelect: C,
            localCreationAnswerId: s.localCreationAnswerId,
            answerIndex: c,
          }),
          y = null != b && null != b.description && b.description.length > 0;
        return (0, l.jsx)(l.Fragment, {
          children:
            A === i.PollLayoutTypes.DEFAULT
              ? (0, l.jsxs)("div", {
                  className: r(g.answerRow, { [g.hasDeleteButton]: T }),
                  children: [
                    (0, l.jsxs)("div", {
                      className: r(g.defaultTextInputWrapper, {
                        [g.hasError]: D,
                      }),
                      ref: t,
                      children: [
                        U,
                        (0, l.jsx)(u.TextInput, {
                          "aria-label":
                            x.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format(
                              { answerNumber: c + 1 }
                            ),
                          placeholder:
                            x.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                          value: s.text,
                          className: g.defaultTextInput,
                          inputClassName: g.defaultTextInput,
                          onChange: e =>
                            _({
                              text: e,
                              index: c,
                              localCreationAnswerId: s.localCreationAnswerId,
                            }),
                          maxLength: O.MAX_POLL_ANSWER_LENGTH,
                          "aria-invalid": D,
                          "aria-describedby": D ? M : j,
                          focusProps: p,
                          inputRef: P,
                        }),
                        (0, l.jsx)(S, { value: s.text, id: j }),
                      ],
                    }),
                    T &&
                      (0, l.jsx)(u.Clickable, {
                        onClick: () => h(c),
                        className: g.removeAnswerButtonDefault,
                        "aria-label":
                          x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                            { answerNumber: c + 1 }
                          ),
                        children: (0, l.jsx)(R.default, {
                          className: g.trashIcon,
                          "aria-hidden": !0,
                        }),
                      }),
                    D &&
                      (0, l.jsx)(u.Text, {
                        id: M,
                        variant: "text-xs/medium",
                        color: "text-danger",
                        className: g.errorText,
                        children: I,
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
                        U,
                        y &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/semibold",
                                className: g.altBadge,
                                "aria-hidden": !0,
                                children: x.default.Messages.IMAGE_ALT,
                              }),
                              (0, l.jsxs)("div", {
                                onClick: w,
                                children: [
                                  (0, l.jsx)(u.HiddenVisually, {
                                    children:
                                      x.default.Messages
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
                                x.default.Messages
                                  .CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                              "aria-label": y
                                ? x.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format(
                                    { answerNumber: c + 1 }
                                  )
                                : x.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format(
                                    { answerNumber: c + 1 }
                                  ),
                              onClick: w,
                              children: (0, l.jsx)(N.ImageAltIcon, {
                                "aria-hidden": !0,
                              }),
                            })
                          : null,
                        (0, l.jsx)(E.default, {
                          tooltip: x.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                          "aria-label":
                            x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                              { answerNumber: c + 1 }
                            ),
                          onClick: () => h(c),
                          dangerous: !0,
                          children: (0, l.jsx)(R.default, {
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
            return v;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        i = a("33112"),
        o = a("418009"),
        u = a("77078"),
        d = a("428958"),
        c = a("773284"),
        E = a("191814"),
        A = a("476765"),
        _ = a("151185"),
        m = a("562228"),
        L = a("104182"),
        f = a("741138"),
        C = a("362415"),
        R = a("418298"),
        T = a("612805"),
        N = a("233365"),
        h = a("491096"),
        O = a("660516"),
        I = a("782340"),
        P = a("149753");
      let x = (0, A.uid)(),
        g = (0, A.uid)();
      function p(e) {
        let { question: t, onChange: a, error: s, inputRef: i } = e,
          [o, d] = n.useState(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.FormTitle, {
              tag: u.FormTitleTags.LABEL,
              htmlFor: g,
              children: I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
            }),
            (0, l.jsx)(u.TextArea, {
              inputRef: i,
              id: g,
              placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
              value: t,
              className: r(P.questionInput, { [P.hasError]: null != s }),
              onChange: a,
              maxLength: h.MAX_POLL_QUESTION_LENGTH,
              error: s,
              onFocus: () => d(!0),
              onBlur: () => d(!1),
              showCharacterCount: o,
              showRemainingCharacterCount: o,
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
      function v(e) {
        let { channel: t, transitionState: a, onClose: s } = e,
          A = (0, m.useCanPostImagePolls)();
        (0, d.default)({
          type: O.ImpressionTypes.MODAL,
          name: i.ImpressionNames.POLL_EDITOR_VIEWED,
        });
        let {
            answers: f,
            question: g,
            selectedLayoutType: S,
            setSelectedLayoutType: j,
            allowMultiSelect: D,
            setAllowMultiSelect: b,
            duration: w,
            setDuration: U,
            handleQuestionChange: y,
            handleAnswerTextChange: k,
            handleEmojiSelect: B,
            canAddMoreAnswers: F,
            canRemoveMoreAnswers: G,
            handleAddAnswer: H,
            handleRemoveAnswer: W,
            createPollError: Y,
            handleSubmitPoll: V,
            fieldErrors: z,
            submitting: K,
            shouldFocusOnInvalidField: X,
            setShouldFocusOnInvalidField: q,
          } = (0, L.default)(t, s),
          { trackPollCreationCancelled: Q } = (0, C.useTrackPollCreationEvents)(
            f,
            D,
            S
          ),
          Z = n.useRef(null),
          J = n.useRef([]),
          $ = n.useRef([]),
          ee = S === o.PollLayoutTypes.DEFAULT,
          et = n.useCallback(() => {
            Q(), s();
          }, [s, Q]),
          ea = n.useCallback(() => {
            if ((0, m.isPollCreationEmpty)(g, f, S)) et();
            else {
              (0, N.default)({
                title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                body: I.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                cta: I.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                closeLabel:
                  I.default.Messages
                    .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                onConfirm: () => {
                  et();
                },
              });
              return;
            }
          }, [et, f, g, S]);
        n.useEffect(() => {
          (0, u.updateModal)(
            h.POLL_CREATION_MODAL_KEY,
            e => (0, l.jsx)(v, { ...e, channel: t }),
            ea
          );
        }, [ea, t]),
          n.useEffect(() => {
            if (X) {
              var e, t;
              if ((null == z ? void 0 : z.question) != null)
                null === (e = Z.current) || void 0 === e || e.focus();
              else {
                let e = f.findIndex(
                  e => z["answer-".concat(e.localCreationAnswerId)]
                );
                -1 !== e &&
                  (null === (t = $.current[e]) || void 0 === t || t.focus());
              }
              q(!1);
            }
          }, [z, f, X, q, $, J]);
        let el = (0, c.default)({ disabled: K, onSubmit: V });
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
                (0, l.jsx)(u.ModalCloseButton, { onClick: ea }),
              ],
            }),
            (0, l.jsxs)(u.ModalContent, {
              className: P.content,
              onKeyDown: el,
              children: [
                null != Y &&
                  (0, l.jsx)(u.FormErrorBlock, {
                    children: Y.getAnyErrorMessage(),
                  }),
                (0, l.jsx)(p, {
                  question: g,
                  onChange: y,
                  error: null == z ? void 0 : z.question,
                  inputRef: Z,
                }),
                A &&
                  (0, l.jsx)(T.default, {
                    selectedLayoutType: S,
                    onSelectedLayoutType: j,
                  }),
                (0, l.jsx)(E.default, { size: 26 }),
                (0, l.jsxs)("fieldset", {
                  className: r(
                    P.answerInputsContainer,
                    ee ? P.defaultContainer : P.imageOnlyContainer
                  ),
                  children: [
                    (0, l.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.LEGEND,
                      children:
                        I.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL,
                    }),
                    f.map((e, a) =>
                      (0, l.jsx)(
                        R.default,
                        {
                          answer: e,
                          channelId: t.id,
                          index: a,
                          onEmojiSelect: B,
                          ref: e => (J.current[a] = e),
                          inputRef: e => ($.current[a] = e),
                          layout: S,
                          onAnswerTextChange: k,
                          onRemoveAnswer: W,
                          error:
                            null == z
                              ? void 0
                              : z["answer-".concat(e.localCreationAnswerId)],
                          canRemoveAnswer: G,
                        },
                        e.localCreationAnswerId
                      )
                    ),
                    F &&
                      (0, l.jsxs)(u.Clickable, {
                        className: r(
                          ee
                            ? P.addAnswerButtonDefault
                            : P.addAnswerButtonImageOnly,
                          { [P.canRemoveMoreAnswers]: G }
                        ),
                        onClick: F ? H : void 0,
                        "aria-label":
                          I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                        children: [
                          (0, l.jsx)(_.default, {
                            className: ee
                              ? P.addAnswerIconDefault
                              : P.addAnswerIconImageOnly,
                          }),
                          ee &&
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
                (0, l.jsx)(M, { selectedDuration: w, onSelect: U }),
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
                  onChange: (e, t) => b(t),
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
                  onClick: V,
                  submitting: K,
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
            return _;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        r = a.n(s),
        i = a("418009"),
        o = a("77078"),
        u = a("95689"),
        d = a("100300"),
        c = a("782340"),
        E = a("563778");
      function A(e) {
        let { label: t, isSelected: a, onClick: n, children: s } = e,
          i = (0, o.useRadioItem)({ isSelected: a, label: t });
        return (0, l.jsx)(o.Clickable, {
          ...i,
          onClick: n,
          className: r(E.option, a && E.optionSelected),
          children: s,
        });
      }
      var _ = function (e) {
        let { selectedLayoutType: t, onSelectedLayoutType: a } = e,
          s = (0, o.useRadioGroup)({ orientation: "horizontal" }),
          r = n.useMemo(
            () => [
              {
                name: i.PollLayoutTypes.DEFAULT,
                label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                icon: d.default,
              },
              {
                name: i.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                icon: u.default,
              },
            ],
            []
          ),
          _ = e => {
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
              A,
              {
                label: e.label,
                isSelected: e.name === t,
                onClick: () => _(e.name),
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
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(i),
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
            return o;
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
        i = a("172402");
      function o(e) {
        var t, a;
        let { channelId: o, localCreationAnswerId: u, image: d } = e,
          c = null == d ? void 0 : d.emoji,
          E =
            (null == d
              ? void 0
              : null === (t = d.mediaAttachmentState) || void 0 === t
                ? void 0
                : t.status) === i.PollMediaUploadAttachmentStatus.PREPARING,
          A = (0, n.useStateFromStores)([r.default], () =>
            r.default.getUpload(o, u, s.DraftType.Poll)
          ),
          [_, m] = l.useState(),
          [L, f] = l.useState("");
        return (
          l.useEffect(() => {
            var e;
            if (
              (null == A
                ? void 0
                : null === (e = A.item) || void 0 === e
                  ? void 0
                  : e.file) == null
            )
              return;
            let t = URL.createObjectURL(A.item.file);
            return (
              m(t),
              f(A.item.file.name),
              () => {
                URL.revokeObjectURL(t);
              }
            );
          }, [
            null == A
              ? void 0
              : null === (a = A.item) || void 0 === a
                ? void 0
                : a.file,
          ]),
          {
            emoji: c,
            isLoadingMedia: E,
            hasUpload: null != A,
            upload: A,
            mediaUrl: _,
            mediaFilename: L,
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=6255610f29eefa13cc9c.js.map
