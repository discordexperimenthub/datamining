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
      function _(e, t, a) {
        let _ = e.id,
          m = l.useRef();
        null == m.current &&
          (m.current = [
            (0, d.generateEmptyPollAnswer)(),
            (0, d.generateEmptyPollAnswer)(),
          ]);
        let [f, L] = l.useState(m.current),
          [R, C] = l.useState(""),
          [N, T] = l.useState(n.PollLayoutTypes.DEFAULT),
          [h, O] = l.useState(!1),
          [P, I] = l.useState(c.PollDurations.ONE_DAY),
          [g, x] = l.useState({}),
          [p, M] = l.useState(!1),
          v = f.filter(e => (0, d.isAnswerFilled)(e, N)),
          S = f.filter(e => (0, d.isIncompleteAnswer)(e, N)),
          j =
            R.length > 0 &&
            v.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
            0 === S.length,
          [D, { error: b, loading: w }] = (0, s.default)(u.default.createPoll),
          U = f.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL,
          y = f.length > c.MIN_NUMBER_OF_ANSWERS_PER_POLL,
          k = l.useCallback(e => {
            x(e => {
              let t = { ...e };
              return delete t.question, t;
            }),
              C(e);
          }, []),
          B = l.useCallback(e => {
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
          F = l.useCallback((e, t) => {
            L(a => {
              let l = [...a];
              return (l[t] = { ...l[t], image: e }), l;
            });
          }, []),
          H = l.useCallback(
            (e, t, a) => {
              var l;
              let n = f[t],
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
            [f]
          ),
          G = l.useCallback(
            async (e, t, a) => {
              let l = f[t].localCreationAnswerId;
              H(e, t), F(A(a, o.PollMediaUploadAttachmentStatus.PREPARING), t);
              let n = await i.handlePollGifAttachmentAdd(e, l, a);
              if (null == n) {
                F(A(a, o.PollMediaUploadAttachmentStatus.ERROR), t);
                return;
              }
              F(A(a, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [f, F, H]
          ),
          W = l.useCallback(
            (e, t, a) => {
              let l = f[t].localCreationAnswerId,
                n = URL.createObjectURL(a);
              H(e, t),
                F(A(n, o.PollMediaUploadAttachmentStatus.PREPARING), t),
                i.handlePollMediaAttachmentAdd(e, l, a),
                F(A(n, o.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t);
            },
            [f, F, H]
          ),
          K = l.useCallback(
            (e, t) => {
              H(_, t),
                F(
                  { emoji: e, stickerId: void 0, mediaAttachmentState: void 0 },
                  t
                );
            },
            [_, F, H]
          ),
          Y = l.useCallback(e => {
            L(t => {
              let a = [...t];
              return (a[e] = { ...a[e], image: void 0 }), a;
            });
          }, []),
          V = l.useCallback(() => {
            U && L(e => [...e, (0, d.generateEmptyPollAnswer)()]);
          }, [U]),
          z = l.useCallback(
            e => {
              if (!y) return;
              let t = f.length;
              H(_, e),
                L(t => {
                  let a = [...t];
                  return a.splice(e, 1), a;
                }),
                null == a || a({ indexToRemove: e, numberOfAnswers: t });
            },
            [f.length, y, _, a, H]
          );
        l.useEffect(
          () => () => {
            i.removeAllPollUploadAttachments(_);
          },
          [_]
        );
        let X = l.useCallback(() => {
            let e = !0,
              t = {};
            0 === R.trim().length &&
              ((e = !1),
              (t.question = E.default.Messages.CREATE_POLL_QUESTION_REQUIRED));
            let a = f.filter(e => (0, d.isAnswerFilled)(e, N));
            return (
              a.length < c.MIN_NUMBER_OF_ANSWERS_PER_POLL &&
                ((e = !1),
                (t["answer-".concat(f[0].localCreationAnswerId)] =
                  E.default.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED)),
              f.forEach(a => {
                (0, d.isIncompleteAnswer)(a, N) &&
                  ((e = !1),
                  (t["answer-".concat(a.localCreationAnswerId)] =
                    E.default.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT));
              }),
              x(t),
              M(!e),
              e
            );
          }, [f, R, N]),
          q = l.useCallback(async () => {
            await D({
              channel: e,
              question: R,
              answers: v,
              allowMultiSelect: h,
              duration: P,
              layout: N,
              onClose: t,
            });
          }, [R, v, h, P, D, e, N, t]),
          J = l.useCallback(() => {
            X() && q();
          }, [q, X]);
        return {
          answers: f,
          question: R,
          setQuestion: C,
          selectedLayoutType: N,
          setSelectedLayoutType: T,
          allowMultiSelect: h,
          setAllowMultiSelect: O,
          duration: P,
          setDuration: I,
          canPost: j,
          canAddMoreAnswers: U,
          canRemoveMoreAnswers: y,
          handleQuestionChange: k,
          handleAnswerTextChange: B,
          handleGifSelect: G,
          handleEmojiSelect: K,
          handleCustomUpload: W,
          handleAddAnswer: V,
          handleRemoveAnswer: z,
          handleRemoveAnswerImage: Y,
          fieldErrors: g,
          createPoll: q,
          handleSubmitPoll: J,
          submitting: w,
          createPollError: b,
          shouldFocusOnInvalidField: p,
          setShouldFocusOnInvalidField: M,
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
        m = a("42203"),
        f = a("474643"),
        L = a("585722"),
        R = a("476765"),
        C = a("832132"),
        N = a("46829"),
        T = a("228220"),
        h = a("773336"),
        O = a("562228"),
        P = a("714411"),
        I = a("356581"),
        g = a("491096"),
        x = a("958706"),
        p = a("13030"),
        M = a("782340"),
        v = a("345379");
      let S = { offset: { top: -4, bottom: -4, left: 0, right: -8 } };
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
      function D(e) {
        let {
          onSelect: t,
          onEditMedia: a,
          onDeleteMedia: n,
          closePopout: s,
        } = e;
        return (0, l.jsx)("div", {
          className: v.menuContainer,
          children: (0, l.jsx)(u.Menu, {
            navId: "poll-media-edit-menu",
            onClose: s,
            "aria-label": M.default.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
            onSelect: t,
            children: (0, l.jsxs)(u.MenuGroup, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: "poll-media-replace",
                  label: M.default.Messages.CREATE_POLL_REPLACE_EMOJI,
                  action: a,
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: "poll-media-delete",
                  label: M.default.Messages.CREATE_POLL_REMOVE_EMOJI,
                  action: n,
                  color: "danger",
                }),
              ],
            }),
          }),
        });
      }
      function b(e) {
        let {
            channelId: t,
            localCreationAnswerId: a,
            buttonImage: s,
            layout: d,
            onEmojiSelect: c,
            onEmojiRemove: E,
            answerIndex: A,
            shouldShowEmojiPicker: f,
            toggleEmojiPicker: L,
          } = e,
          R = (0, i.useStateFromStores)([m.default], () =>
            m.default.getChannel(t)
          ),
          {
            emoji: T,
            isLoadingMedia: h,
            hasUpload: P,
            mediaUrl: g,
            mediaFilename: S,
          } = (0, I.default)({
            channelId: t,
            localCreationAnswerId: a,
            image: s,
          }),
          b = d === o.PollLayoutTypes.DEFAULT,
          w = P || null != T,
          U = n.useCallback(() => {
            E(A);
          }, [E, A]),
          y = n.useMemo(
            () =>
              P
                ? M.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, O.filterOutUUID)(S),
                    answerNumber: A + 1,
                  })
                : null != T
                  ? M.default.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
                      emojiName: T.name,
                      answerNumber: A + 1,
                    })
                  : M.default.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({
                      answerNumber: A + 1,
                    }),
            [P, T, A, S]
          ),
          k = n.useCallback(
            e => {
              let { closePopout: t } = e;
              return (0, l.jsx)("div", {
                className: v.emojiPicker,
                children: (0, l.jsx)(_.default, {
                  channel: R,
                  pickerIntention: x.EmojiIntention.POLLS,
                  closePopout: t,
                  onNavigateAway: t,
                  onSelectEmoji: (e, a) => {
                    null != e && c(e, A), a && t();
                  },
                }),
              });
            },
            [R, c, A]
          ),
          B = n.useCallback(
            e => {
              let { closePopout: t } = e;
              return (0, l.jsx)(D, {
                onSelect: t,
                onEditMedia: L,
                onDeleteMedia: U,
                closePopout: t,
              });
            },
            [U, L]
          ),
          F = h
            ? (0, l.jsx)(u.Spinner, {
                className: b
                  ? v.spinnerWrapperDefault
                  : v.spinnerWrapperImageOnly,
              })
            : (0, l.jsx)(j, {
                hasUpload: P,
                mediaUrl: g,
                mediaFilename: S,
                imageClassName: r(v.media, b ? v.gifDefault : v.gifJumbo),
                emoji: T,
                emojiClassName: r(v.media, b ? v.emojiDefault : v.emojiJumbo),
                fallback: (0, l.jsx)(N.default, {
                  className: b
                    ? v.expressionPickerIconDefault
                    : v.expressionPickerIconImageOnly,
                }),
              }),
          H = r(
            p.CHAT_INPUT_BUTTON_CLASSNAME,
            d === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS
              ? v.expressionPickerButtonImageOnly
              : v.expressionPickerButtonDefault,
            { [v.canEditMedia]: w }
          );
        return (0, l.jsx)(u.Popout, {
          renderPopout: k,
          shouldShow: f,
          onRequestClose: L,
          animation: u.Popout.Animation.NONE,
          position: "bottom",
          spacing: 2,
          children: e => {
            let { "aria-controls": t, "aria-expanded": a, ...n } = e;
            return (0, l.jsx)(u.Popout, {
              animation: u.Popout.Animation.NONE,
              position: "bottom",
              renderPopout: B,
              children: e => {
                let {
                  onClick: n,
                  "aria-controls": s,
                  "aria-expanded": r,
                  ...o
                } = e;
                return (0, l.jsxs)(u.Clickable, {
                  ...o,
                  className: H,
                  onClick: w && !f ? n : L,
                  "aria-label": y,
                  "aria-controls": null != t ? t : s,
                  "aria-expanded": a || r,
                  children: [
                    F,
                    w &&
                      (0, l.jsx)(C.default, {
                        className: v.editIcon,
                        "aria-hidden": !0,
                      }),
                  ],
                });
              },
            });
          },
        });
      }
      function w(e) {
        var t;
        let { value: a, id: n } = e,
          s = (() => {
            var e;
            let t =
              null !== (e = null == a ? void 0 : a.length) && void 0 !== e
                ? e
                : 0;
            return g.MAX_POLL_ANSWER_LENGTH - t;
          })();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: r(v.characterCount),
              "aria-hidden": "true",
              children: [
                null !== (t = null == a ? void 0 : a.length) && void 0 !== t
                  ? t
                  : 0,
                " / ",
                g.MAX_POLL_ANSWER_LENGTH,
              ],
            }),
            (0, l.jsxs)(u.HiddenVisually, {
              id: n,
              children: [
                M.default.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
                  remainingCharacters: s,
                }),
                " ",
                M.default.Messages.MAXIMUM_LENGTH.format({
                  maxLength: g.MAX_POLL_ANSWER_LENGTH,
                }),
              ],
            }),
          ],
        });
      }
      var U = n.forwardRef(function (e, t) {
        let {
            channelId: s,
            answer: c,
            index: _,
            layout: A,
            isLastAnswer: m,
            onAnswerTextChange: C,
            onEmojiSelect: N,
            onEmojiRemove: I,
            canRemoveAnswer: x,
            onRemoveAnswer: p,
            addAnswer: j,
            submitPoll: D,
            answerTextInputRefs: U,
            error: y,
            inputRef: k,
            deleteButtonRef: B,
          } = e,
          F = (0, R.useUID)(),
          H = (0, R.useUID)(),
          G = null != y && y.length > 0,
          W = (0, i.useStateFromStores)([L.default], () =>
            L.default.getUpload(s, c.localCreationAnswerId, f.DraftType.Poll)
          ),
          [K, Y] = n.useState(!1),
          V = () => {
            function e(e) {
              d.default.update(s, c.localCreationAnswerId, f.DraftType.Poll, {
                description: e,
              });
            }
            (0, u.openModalLazy)(async () => {
              let { default: t } = await a.el("38228").then(a.bind(a, "38228"));
              return a =>
                (0, l.jsx)(t, { channelId: s, answer: c, onSave: e, ...a });
            });
          },
          z = n.useCallback(() => {
            Y(e => !e);
          }, []),
          X = n.useCallback(
            e => {
              let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
              switch (e.key.toLowerCase()) {
                case "enter":
                  var l;
                  m &&
                    (e.preventDefault(),
                    (
                      (0, O.isAnswerFilled)(c, A) || "macos" !== (0, h.getOS)()
                        ? t
                        : a
                    )
                      ? (e.stopPropagation(), D())
                      : j()),
                    null === (l = U.current[_ + 1]) ||
                      void 0 === l ||
                      l.focus();
                  break;
                case "e":
                  ("macos" === (0, h.getOS)() ? a : t) &&
                    (e.preventDefault(), e.stopPropagation(), z());
              }
            },
            [j, c, U, _, m, A, D, z]
          ),
          q = (0, l.jsx)(b, {
            channelId: s,
            buttonImage: c.image,
            layout: A,
            onEmojiSelect: N,
            onEmojiRemove: I,
            localCreationAnswerId: c.localCreationAnswerId,
            answerIndex: _,
            shouldShowEmojiPicker: K,
            toggleEmojiPicker: z,
          }),
          J = null != W && null != W.description && W.description.length > 0;
        return (0, l.jsx)(l.Fragment, {
          children:
            A === o.PollLayoutTypes.DEFAULT
              ? (0, l.jsxs)("div", {
                  className: r(v.answerRow, { [v.hasDeleteButton]: x }),
                  children: [
                    (0, l.jsxs)("div", {
                      className: r(v.defaultTextInputWrapper, {
                        [v.hasError]: G,
                      }),
                      ref: t,
                      children: [
                        q,
                        (0, l.jsx)(u.TextInput, {
                          "aria-label":
                            M.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format(
                              { answerNumber: _ + 1 }
                            ),
                          placeholder:
                            M.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                          value: c.text,
                          className: v.defaultTextInput,
                          inputClassName: v.defaultTextInput,
                          onChange: e =>
                            C({
                              text: e,
                              index: _,
                              localCreationAnswerId: c.localCreationAnswerId,
                            }),
                          onKeyDown: X,
                          maxLength: g.MAX_POLL_ANSWER_LENGTH,
                          "aria-invalid": G,
                          "aria-describedby": G ? F : H,
                          focusProps: S,
                          inputRef: k,
                        }),
                        (0, l.jsx)(w, { value: c.text, id: H }),
                      ],
                    }),
                    x &&
                      (0, l.jsx)(u.Clickable, {
                        onClick: () => p(_),
                        className: v.removeAnswerButtonDefault,
                        "aria-label":
                          M.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                            { answerNumber: _ + 1 }
                          ),
                        ref: B,
                        children: (0, l.jsx)(T.default, {
                          className: v.trashIcon,
                          "aria-hidden": !0,
                        }),
                      }),
                    G &&
                      (0, l.jsx)(u.Text, {
                        id: F,
                        variant: "text-xs/medium",
                        color: "text-danger",
                        className: v.errorText,
                        children: y,
                      }),
                  ],
                })
              : (0, l.jsxs)("div", {
                  className: v.imageOnlyContainer,
                  ref: t,
                  children: [
                    (0, l.jsxs)("div", {
                      className: v.imagePreviewContainer,
                      children: [
                        q,
                        J &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/semibold",
                                className: v.altBadge,
                                "aria-hidden": !0,
                                children: M.default.Messages.IMAGE_ALT,
                              }),
                              (0, l.jsxs)("div", {
                                onClick: V,
                                children: [
                                  (0, l.jsx)(u.HiddenVisually, {
                                    children:
                                      M.default.Messages
                                        .CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT,
                                  }),
                                  (0, l.jsx)(u.Text, {
                                    variant: "text-xxs/medium",
                                    className: v.altTextPreview,
                                    children: W.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: v.imageOnlyAnswerActionBar,
                      children: [
                        null != W
                          ? (0, l.jsx)(E.default, {
                              tooltip:
                                M.default.Messages
                                  .CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                              "aria-label": J
                                ? M.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format(
                                    { answerNumber: _ + 1 }
                                  )
                                : M.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format(
                                    { answerNumber: _ + 1 }
                                  ),
                              onClick: V,
                              children: (0, l.jsx)(P.ImageAltIcon, {
                                "aria-hidden": !0,
                              }),
                            })
                          : null,
                        (0, l.jsx)(E.default, {
                          tooltip: M.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                          "aria-label":
                            M.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format(
                              { answerNumber: _ + 1 }
                            ),
                          onClick: () => p(_),
                          dangerous: !0,
                          children: (0, l.jsx)(T.default, {
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
        o = a("33112"),
        i = a("418009"),
        u = a("77078"),
        d = a("428958"),
        c = a("773284"),
        E = a("191814"),
        _ = a("476765"),
        A = a("151185"),
        m = a("562228"),
        f = a("104182"),
        L = a("741138"),
        R = a("362415"),
        C = a("418298"),
        N = a("612805"),
        T = a("233365"),
        h = a("491096"),
        O = a("660516"),
        P = a("782340"),
        I = a("149753");
      let g = (0, _.uid)(),
        x = (0, _.uid)();
      function p(e) {
        let { question: t, onChange: a, error: s, inputRef: o } = e,
          [i, d] = n.useState(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.FormTitle, {
              tag: u.FormTitleTags.LABEL,
              htmlFor: x,
              children: P.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
            }),
            (0, l.jsx)(u.TextArea, {
              inputRef: o,
              id: x,
              placeholder: P.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
              value: t,
              className: r(I.questionInput, { [I.hasError]: null != s }),
              onChange: a,
              maxLength: h.MAX_POLL_QUESTION_LENGTH,
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
          n = (0, L.default)(),
          s = n[t];
        return (0, l.jsxs)("div", {
          className: I.duration,
          children: [
            (0, l.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              tag: "label",
              "aria-hidden": !0,
              children: P.default.Messages.CREATE_POLL_DURATION_LABEL,
            }),
            (0, l.jsx)(u.Select, {
              "aria-label":
                P.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format(
                  { duration: s }
                ),
              className: I.durationSelect,
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
          _ = (0, m.useCanPostImagePolls)();
        (0, d.default)({
          type: O.ImpressionTypes.MODAL,
          name: o.ImpressionNames.POLL_EDITOR_VIEWED,
        });
        let L = n.useRef(null),
          x = n.useRef([]),
          S = n.useRef([]),
          j = n.useRef(null),
          D = n.useRef([]),
          b = n.useCallback(e => {
            var t, a, l, n;
            let { indexToRemove: s, numberOfAnswers: r } = e,
              o = r === h.MIN_NUMBER_OF_ANSWERS_PER_POLL + 1;
            o
              ? null === (a = j.current) ||
                void 0 === a ||
                null === (t = a.ref) ||
                void 0 === t ||
                t.focus()
              : null === (n = D.current[s === r - 1 ? s - 1 : s + 1]) ||
                void 0 === n ||
                null === (l = n.ref) ||
                void 0 === l ||
                l.focus();
          }, []),
          {
            answers: w,
            question: U,
            selectedLayoutType: y,
            setSelectedLayoutType: k,
            allowMultiSelect: B,
            setAllowMultiSelect: F,
            duration: H,
            setDuration: G,
            handleQuestionChange: W,
            handleAnswerTextChange: K,
            handleEmojiSelect: Y,
            canAddMoreAnswers: V,
            handleRemoveAnswerImage: z,
            canRemoveMoreAnswers: X,
            handleAddAnswer: q,
            handleRemoveAnswer: J,
            createPollError: Q,
            handleSubmitPoll: Z,
            fieldErrors: $,
            submitting: ee,
            shouldFocusOnInvalidField: et,
            setShouldFocusOnInvalidField: ea,
          } = (0, f.default)(t, s, b),
          { trackPollCreationCancelled: el } = (0,
          R.useTrackPollCreationEvents)(w, B, y),
          en = n.useRef(w.length),
          es = y === i.PollLayoutTypes.DEFAULT,
          er = n.useCallback(() => {
            el(), s();
          }, [s, el]),
          eo = n.useCallback(() => {
            if ((0, m.isPollCreationEmpty)(U, w, y)) er();
            else {
              (0, T.default)({
                title: P.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                body: P.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                cta: P.default.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                closeLabel:
                  P.default.Messages
                    .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                onConfirm: () => {
                  er();
                },
              });
              return;
            }
          }, [er, w, U, y]);
        n.useEffect(() => {
          (0, u.updateModal)(
            h.POLL_CREATION_MODAL_KEY,
            e => (0, l.jsx)(v, { ...e, channel: t }),
            eo
          );
        }, [eo, t]),
          n.useEffect(() => {
            if (w.length > en.current) {
              var e;
              null === (e = S.current[w.length - 1]) ||
                void 0 === e ||
                e.focus();
            }
            en.current = w.length;
          }, [w.length]),
          n.useEffect(() => {
            if (et) {
              var e, t;
              if ((null == $ ? void 0 : $.question) != null)
                null === (e = L.current) || void 0 === e || e.focus();
              else {
                let e = w.findIndex(
                  e => $["answer-".concat(e.localCreationAnswerId)]
                );
                -1 !== e &&
                  (null === (t = S.current[e]) || void 0 === t || t.focus());
              }
              ea(!1);
            }
          }, [$, w, et, ea, S, x]);
        let ei = (0, c.default)({ disabled: ee, onSubmit: Z });
        return (0, l.jsxs)(u.ModalRoot, {
          size: u.ModalSize.MEDIUM,
          className: I.container,
          transitionState: a,
          "aria-labelledby": g,
          children: [
            (0, l.jsxs)(u.ModalHeader, {
              className: I.header,
              separator: !1,
              children: [
                (0, l.jsx)(u.Heading, {
                  color: "interactive-normal",
                  variant: "text-lg/semibold",
                  className: I.headerText,
                  id: g,
                  children: P.default.Messages.CREATE_POLL_HEADING,
                }),
                (0, l.jsx)(u.ModalCloseButton, { onClick: eo }),
              ],
            }),
            (0, l.jsxs)(u.ModalContent, {
              className: I.content,
              onKeyDown: ei,
              children: [
                null != Q &&
                  (0, l.jsx)(u.FormErrorBlock, {
                    className: I.apiErrorBlock,
                    children: Q.getAnyErrorMessage(),
                  }),
                (0, l.jsx)(p, {
                  question: U,
                  onChange: W,
                  error: null == $ ? void 0 : $.question,
                  inputRef: L,
                }),
                _ &&
                  (0, l.jsx)(N.default, {
                    selectedLayoutType: y,
                    onSelectedLayoutType: k,
                  }),
                (0, l.jsx)(E.default, { size: 26 }),
                (0, l.jsxs)("fieldset", {
                  className: r(
                    I.answerInputsContainer,
                    es ? I.defaultContainer : I.imageOnlyContainer
                  ),
                  children: [
                    (0, l.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.LEGEND,
                      children:
                        P.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL,
                    }),
                    w.map((e, a) =>
                      (0, l.jsx)(
                        C.default,
                        {
                          answer: e,
                          channelId: t.id,
                          index: a,
                          isLastAnswer: a === w.length - 1,
                          onEmojiSelect: Y,
                          onEmojiRemove: z,
                          layout: y,
                          onAnswerTextChange: K,
                          onRemoveAnswer: J,
                          addAnswer: q,
                          submitPoll: Z,
                          answerTextInputRefs: S,
                          error:
                            null == $
                              ? void 0
                              : $["answer-".concat(e.localCreationAnswerId)],
                          canRemoveAnswer: X,
                          ref: e => (x.current[a] = e),
                          inputRef: e => (S.current[a] = e),
                          deleteButtonRef: e => (D.current[a] = e),
                        },
                        e.localCreationAnswerId
                      )
                    ),
                    V &&
                      (0, l.jsxs)(u.Clickable, {
                        className: r(
                          es
                            ? I.addAnswerButtonDefault
                            : I.addAnswerButtonImageOnly,
                          { [I.canRemoveMoreAnswers]: X }
                        ),
                        onClick: V ? q : void 0,
                        "aria-label":
                          P.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                        ref: j,
                        children: [
                          (0, l.jsx)(A.default, {
                            className: es
                              ? I.addAnswerIconDefault
                              : I.addAnswerIconImageOnly,
                          }),
                          es &&
                            (0, l.jsx)(u.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              className: I.addAnswerButtonLabel,
                              children:
                                P.default.Messages
                                  .CREATE_POLL_ADD_ANSWER_BUTTON,
                            }),
                        ],
                      }),
                  ],
                }),
                (0, l.jsx)(E.default, { size: 18 }),
                (0, l.jsx)(M, { selectedDuration: H, onSelect: G }),
              ],
            }),
            (0, l.jsxs)(u.ModalFooter, {
              className: I.footer,
              children: [
                (0, l.jsx)(u.Checkbox, {
                  className: I.checkbox,
                  type: u.Checkbox.Types.INVERTED,
                  size: 24,
                  value: B,
                  checkboxColor: (0, u.useToken)(
                    u.tokens.colors.INTERACTIVE_NORMAL
                  ).hex(),
                  onChange: (e, t) => F(t),
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "interactive-active",
                    children: P.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS,
                  }),
                }),
                (0, l.jsx)(u.Button, {
                  look: u.ButtonLooks.FILLED,
                  size: u.Button.Sizes.MEDIUM,
                  className: I.postButton,
                  onClick: Z,
                  submitting: ee,
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: I.postButtonText,
                    children: P.default.Messages.CREATE_POLL_POST,
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
          [f, L] = l.useState("");
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
              L(_.item.file.name),
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
            mediaFilename: f,
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=631367ed9dc8a4ac7d6b.js.map
