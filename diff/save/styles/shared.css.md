```diff
  }
  .enable-forced-colors .disabled_fc1e26 {
    color: GrayText;
    opacity: 1;
  }
- .defaultColor__77578 {
-   color: var(--text-normal);
+ .svg__7900e {
+   contain: paint;
  .lineClamp1__92431 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
```

```diff
    opacity: 1;
  }
  .defaultColor__77578 {
    color: var(--text-normal);
  }
- .lineClamp1__92431 {
-   overflow: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   min-width: 0;
- }
- .lineClamp2Plus_d4306b {
-   display: -webkit-box;
-   -webkit-box-orient: vertical;
-   overflow: hidden;
- }
- .selectable__06545 {
-   -webkit-user-select: text;
-   -moz-user-select: text;
-   user-select: text;
- }
- .tabularNumbers__3286f {
-   font-feature-settings: "tnum";
-   font-variant-numeric: tabular-nums;
- }
- .svg__7900e {
-   contain: paint;
- }
- .mask__5d7d8 {
-   display: block;
- }
- .status__1c26d {
-   width: 100%;
-   height: 100%;
- }
- .enable-forced-colors .status__1c26d {
-   forced-color-adjust: none !important;
- }
- .layerContainer_d5a653 {
-   background: none !important;
-   position: absolute;
-   top: 0;
-   left: 0;
-   right: 0;
-   right: var(--devtools-sidebar-width, 0);
-   bottom: 0;
+ .mask__5d7d8 {
+   display: block;
+ }
+ .status__1c26d {
+   width: 100%;
+   height: 100%;
+ }
+ .enable-forced-colors .status__1c26d {
+   forced-color-adjust: none !important;
+ }
+ .layerContainer_d5a653 {
+   background: none !important;
+   position: absolute;
+   top: 0;
+   left: 0;
+   right: 0;
+   right: var(--devtools-sidebar-width, 0);
+   bottom: 0;
+   pointer-events: none;
+   z-index: 1002;
+ }
+ .layer_ec16dd {
+   position: absolute;
+   pointer-events: auto;
+ }
+ .emptyError__6cf96:empty:before {
+   content: "RENDERING NULL FOR A POPOUT/MODAL/LAYER WILL BREAK THE APP";
+   word-break: break-word;
+   display: block;
+   background-color: red;
+   color: var(--white-500);
+   font-size: 32px;
+   max-width: 500px;
+   padding: 8px;
+   font-weight: 700;
+   border: 10px dashed var(--green-230);
+ }
+ .layerHidden__9c8ad {
+   visibility: hidden;
+ }
+ .disabledPointerEvents_bb5546 {
    z-index: 1002;
  }
  .layer_ec16dd {
    position: absolute;
    pointer-events: auto;
```

```diff
    left: 0;
    right: 0;
    right: var(--devtools-sidebar-width, 0);
    bottom: 0;
    pointer-events: none;
-   z-index: 1002;
- }
- .layer_ec16dd {
-   position: absolute;
-   pointer-events: auto;
- }
- .emptyError__6cf96:empty:before {
-   content: "RENDERING NULL FOR A POPOUT/MODAL/LAYER WILL BREAK THE APP";
-   word-break: break-word;
-   display: block;
-   background-color: red;
-   color: var(--white-500);
-   font-size: 32px;
-   max-width: 500px;
-   padding: 8px;
-   font-weight: 700;
-   border: 10px dashed var(--green-230);
- }
- .layerHidden__9c8ad {
-   visibility: hidden;
- }
- .disabledPointerEvents_bb5546 {
-   pointer-events: none;
- }
- .tooltip__01384 {
-   position: relative;
-   border-radius: 5px;
-   font-weight: 500;
-   font-size: 14px;
-   line-height: 16px;
-   max-width: 190px;
-   box-sizing: border-box;
-   word-wrap: break-word;
-   z-index: 1002;
-   will-change: opacity, transform;
- }
- .tooltipDisablePointerEvents__14727 {
-   pointer-events: none;
+ }
+ .tooltip__01384 {
+   position: relative;
+   border-radius: 5px;
+   font-weight: 500;
+   font-size: 14px;
+   line-height: 16px;
+   max-width: 190px;
+   box-sizing: border-box;
+   word-wrap: break-word;
+   z-index: 1002;
+   will-change: opacity, transform;
+ }
+ .tooltipDisablePointerEvents__14727 {
+   pointer-events: none;
+ }
+ .tooltipPointer_a79354 {
+   width: 0;
+   height: 0;
+   border: 0 solid transparent;
+   border-width: 5px;
+   pointer-events: none;
+ }
+ .tooltipContent__79a2d {
+   padding: 8px 12px;
+   overflow: hidden;
+ }
+ .tooltipContentAllowOverflow__96a58 {
+   overflow: visible;
+ }
+ .tooltipTop__5f583 {
+   transform-origin: 50%100%;
+ }
+ .tooltipTop__5f583 .tooltipPointer_a79354 {
+   position: absolute;
+   top: 100%;
+   left: 50%;
+   margin-left: -5px;
  .tooltipPointer_a79354 {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 5px;
```

```diff
    will-change: opacity, transform;
  }
  .tooltipDisablePointerEvents__14727 {
    pointer-events: none;
  }
- .tooltipPointer_a79354 {
-   width: 0;
-   height: 0;
-   border: 0 solid transparent;
-   border-width: 5px;
-   pointer-events: none;
- }
- .tooltipContent__79a2d {
-   padding: 8px 12px;
-   overflow: hidden;
- }
- .tooltipContentAllowOverflow__96a58 {
-   overflow: visible;
- }
- .tooltipTop__5f583 {
-   transform-origin: 50%100%;
- }
- .tooltipTop__5f583 .tooltipPointer_a79354 {
-   position: absolute;
-   top: 100%;
-   left: 50%;
-   margin-left: -5px;
- }
- .tooltipCenter__83d69,
- .tooltipBottom_ba4564 {
-   transform-origin: 50%0%;
+ .tooltipCenter__83d69,
+ .tooltipBottom_ba4564 {
+   transform-origin: 50%0%;
+ }
+ .tooltipCenter__83d69 .tooltipPointer_a79354,
+ .tooltipBottom_ba4564 .tooltipPointer_a79354 {
+   position: absolute;
+   bottom: 100%;
+   left: 50%;
+   margin-left: -5px;
+   border-top-width: 5px;
+   transform: rotate(180deg);
+ }
+ .tooltipLeft_b6b150 {
+   transform-origin: 100%50%;
+ }
+ .tooltipLeft_b6b150 .tooltipPointer_a79354 {
+   position: absolute;
+   left: 100%;
+   top: 50%;
+   margin-top: -5px;
+   border-right-width: 5px;
+   transform: rotate(270deg);
+ }
+ .tooltipRight_e5fa1c {
+   transform-origin: 0%50%;
  .tooltipCenter__83d69 .tooltipPointer_a79354,
  .tooltipBottom_ba4564 .tooltipPointer_a79354 {
    position: absolute;
    bottom: 100%;
    left: 50%;
```

```diff
  }
  .tooltipCenter__83d69,
  .tooltipBottom_ba4564 {
    transform-origin: 50%0%;
  }
- .tooltipCenter__83d69 .tooltipPointer_a79354,
- .tooltipBottom_ba4564 .tooltipPointer_a79354 {
-   position: absolute;
-   bottom: 100%;
-   left: 50%;
-   margin-left: -5px;
-   border-top-width: 5px;
-   transform: rotate(180deg);
- }
- .tooltipLeft_b6b150 {
-   transform-origin: 100%50%;
- }
- .tooltipLeft_b6b150 .tooltipPointer_a79354 {
-   position: absolute;
-   left: 100%;
-   top: 50%;
-   margin-top: -5px;
-   border-right-width: 5px;
-   transform: rotate(270deg);
- }
- .tooltipRight_e5fa1c {
-   transform-origin: 0%50%;
- }
- .tooltipRight_e5fa1c .tooltipPointer_a79354 {
-   position: absolute;
-   right: 100%;
-   top: 50%;
-   margin-top: -5px;
-   border-left-width: 5px;
-   transform: rotate(90deg);
- }
- .theme-dark .tooltip__01384,
- .theme-light .tooltip__01384 {
-   box-shadow: var(--elevation-high);
-   color: var(--text-normal);
- }
- .theme-dark .tooltipPrimary_e5c00d,
- .theme-light .tooltipPrimary_e5c00d {
-   background-color: var(--background-floating);
- }
- .theme-dark .tooltipPrimary_e5c00d .tooltipPointer_a79354,
- .theme-light .tooltipPrimary_e5c00d .tooltipPointer_a79354 {
-   border-top-color: var(--background-floating);
+ .tooltipRight_e5fa1c .tooltipPointer_a79354 {
+   position: absolute;
+   right: 100%;
+   top: 50%;
+   margin-top: -5px;
+   border-left-width: 5px;
+   transform: rotate(90deg);
+ }
+ .theme-dark .tooltip__01384,
+ .theme-light .tooltip__01384 {
+   box-shadow: var(--elevation-high);
+   color: var(--text-normal);
+ }
+ .theme-dark .tooltipPrimary_e5c00d,
+ .theme-light .tooltipPrimary_e5c00d {
+   background-color: var(--background-floating);
+ }
+ .theme-dark .tooltipPrimary_e5c00d .tooltipPointer_a79354,
+ .theme-light .tooltipPrimary_e5c00d .tooltipPointer_a79354 {
+   border-top-color: var(--background-floating);
+ }
+ .theme-dark .tooltipBlack__90eaa,
+ .theme-light .tooltipBlack__90eaa {
+   background-color: var(--black-500);
+   color: var(--white-500);
+ }
+ .theme-dark .tooltipBlack__90eaa .tooltipPointer_a79354,
+ .theme-light .tooltipBlack__90eaa .tooltipPointer_a79354 {
+   border-top-color: var(--black-500);
+ }
+ .theme-dark .tooltipGrey_a35fcf,
+ .theme-light .tooltipGrey_a35fcf {
+   background-color: var(--primary-700);
+   color: var(--white-500);
+ }
+ .theme-dark .tooltipGrey_a35fcf .tooltipPointer_a79354,
+ .theme-light .tooltipGrey_a35fcf .tooltipPointer_a79354 {
+   border-top-color: var(--primary-700);
+ }
+ .theme-dark .tooltipBrand__13fbc,
+ .theme-light .tooltipBrand__13fbc {
+   color: var(--white-500);
+   background-color: var(--brand-experiment);
  .theme-dark .tooltipBlack__90eaa,
  .theme-light .tooltipBlack__90eaa {
    background-color: var(--black-500);
    color: var(--white-500);
  }
```

```diff
  }
  .theme-dark .tooltipPrimary_e5c00d .tooltipPointer_a79354,
  .theme-light .tooltipPrimary_e5c00d .tooltipPointer_a79354 {
    border-top-color: var(--background-floating);
  }
- .theme-dark .tooltipBlack__90eaa,
- .theme-light .tooltipBlack__90eaa {
-   background-color: var(--black-500);
-   color: var(--white-500);
- }
- .theme-dark .tooltipBlack__90eaa .tooltipPointer_a79354,
- .theme-light .tooltipBlack__90eaa .tooltipPointer_a79354 {
-   border-top-color: var(--black-500);
+ .theme-dark .tooltipBrand__13fbc .tooltipPointer_a79354,
+ .theme-light .tooltipBrand__13fbc .tooltipPointer_a79354 {
+   border-top-color: var(--brand-experiment);
+ }
+ .theme-dark .tooltipRed_d5b8c2,
+ .theme-light .tooltipRed_d5b8c2 {
+   color: var(--white-500);
+   background-color: var(--status-danger);
  .theme-dark .tooltipGrey_a35fcf,
  .theme-light .tooltipGrey_a35fcf {
    background-color: var(--primary-700);
    color: var(--white-500);
  }
```

```diff
  }
  .theme-dark .tooltipBlack__90eaa .tooltipPointer_a79354,
  .theme-light .tooltipBlack__90eaa .tooltipPointer_a79354 {
    border-top-color: var(--black-500);
  }
- .theme-dark .tooltipGrey_a35fcf,
- .theme-light .tooltipGrey_a35fcf {
-   background-color: var(--primary-700);
-   color: var(--white-500);
- }
- .theme-dark .tooltipGrey_a35fcf .tooltipPointer_a79354,
- .theme-light .tooltipGrey_a35fcf .tooltipPointer_a79354 {
-   border-top-color: var(--primary-700);
+ .theme-dark .tooltipRed_d5b8c2 .tooltipPointer_a79354,
+ .theme-light .tooltipRed_d5b8c2 .tooltipPointer_a79354 {
+   border-top-color: var(--status-danger);
+ }
+ .theme-dark .tooltipGreen__0ed4a,
+ .theme-light .tooltipGreen__0ed4a {
+   color: var(--white-500);
+   background-color: var(--green-360);
  .theme-dark .tooltipBrand__13fbc,
  .theme-light .tooltipBrand__13fbc {
    color: var(--white-500);
    background-color: var(--brand-experiment);
  }
```

```diff
  }
  .theme-dark .tooltipGrey_a35fcf .tooltipPointer_a79354,
  .theme-light .tooltipGrey_a35fcf .tooltipPointer_a79354 {
    border-top-color: var(--primary-700);
  }
- .theme-dark .tooltipBrand__13fbc,
- .theme-light .tooltipBrand__13fbc {
-   color: var(--white-500);
-   background-color: var(--brand-experiment);
- }
- .theme-dark .tooltipBrand__13fbc .tooltipPointer_a79354,
- .theme-light .tooltipBrand__13fbc .tooltipPointer_a79354 {
-   border-top-color: var(--brand-experiment);
+ .theme-dark .tooltipGreen__0ed4a .tooltipPointer_a79354,
+ .theme-light .tooltipGreen__0ed4a .tooltipPointer_a79354 {
+   border-top-color: var(--green-360);
+ }
+ .theme-dark .tooltipYellow__5a50f,
+ .theme-light .tooltipYellow__5a50f {
+   color: var(--status-warning-text);
+   background-color: var(--status-warning-background);
  .theme-dark .tooltipRed_d5b8c2,
  .theme-light .tooltipRed_d5b8c2 {
    color: var(--white-500);
    background-color: var(--status-danger);
  }
```

```diff
  }
  .theme-dark .tooltipBrand__13fbc .tooltipPointer_a79354,
  .theme-light .tooltipBrand__13fbc .tooltipPointer_a79354 {
    border-top-color: var(--brand-experiment);
  }
- .theme-dark .tooltipRed_d5b8c2,
- .theme-light .tooltipRed_d5b8c2 {
-   color: var(--white-500);
-   background-color: var(--status-danger);
- }
- .theme-dark .tooltipRed_d5b8c2 .tooltipPointer_a79354,
- .theme-light .tooltipRed_d5b8c2 .tooltipPointer_a79354 {
-   border-top-color: var(--status-danger);
- }
- .theme-dark .tooltipGreen__0ed4a,
- .theme-light .tooltipGreen__0ed4a {
-   color: var(--white-500);
-   background-color: var(--green-360);
- }
- .theme-dark .tooltipGreen__0ed4a .tooltipPointer_a79354,
- .theme-light .tooltipGreen__0ed4a .tooltipPointer_a79354 {
-   border-top-color: var(--green-360);
- }
- .theme-dark .tooltipYellow__5a50f,
- .theme-light .tooltipYellow__5a50f {
-   color: var(--status-warning-text);
-   background-color: var(--status-warning-background);
- }
- .theme-dark .tooltipYellow__5a50f .tooltipPointer_a79354,
- .theme-light .tooltipYellow__5a50f .tooltipPointer_a79354 {
-   border-top-color: var(--status-warning-background);
+ .theme-dark .tooltipYellow__5a50f .tooltipPointer_a79354,
+ .theme-light .tooltipYellow__5a50f .tooltipPointer_a79354 {
+   border-top-color: var(--status-warning-background);
+ }
+ .theme-dark .tooltipPremium__04f99,
+ .theme-light .tooltipPremium__04f99 {
+   background: linear-gradient(
+     270deg,
+     var(--premium-tier-2-pink-for-gradients) 0%,
+     var(--premium-tier-2-pink-for-gradients-2) 33.63%,
+     var(--premium-tier-2-purple-for-gradients) 100%
+   );
+ }
+ .theme-dark .tooltipPremium__04f99 .tooltipPointer_a79354,
+ .theme-light .tooltipPremium__04f99 .tooltipPointer_a79354 {
+   border-top-color: var(--premium-tier-2-pink-for-gradients-2);
+ }
+ .enable-forced-colors .tooltip__01384 {
+   border: 1px solid CanvasText;
+ }
+ .enable-forced-colors .tooltipPointer_a79354 {
+   background-color: CanvasText;
+   border: none;
+   border-radius: 100%;
+   height: 10px;
+   width: 10px;
  .theme-dark .tooltipPremium__04f99,
  .theme-light .tooltipPremium__04f99 {
    background: linear-gradient(
      270deg,
      var(--premium-tier-2-pink-for-gradients) 0%,
```

```diff
  }
  .theme-dark .tooltipYellow__5a50f .tooltipPointer_a79354,
  .theme-light .tooltipYellow__5a50f .tooltipPointer_a79354 {
    border-top-color: var(--status-warning-background);
  }
- .theme-dark .tooltipPremium__04f99,
- .theme-light .tooltipPremium__04f99 {
-   background: linear-gradient(
-     270deg,
-     var(--premium-tier-2-pink-for-gradients) 0%,
-     var(--premium-tier-2-pink-for-gradients-2) 33.63%,
-     var(--premium-tier-2-purple-for-gradients) 100%
-   );
- }
- .theme-dark .tooltipPremium__04f99 .tooltipPointer_a79354,
- .theme-light .tooltipPremium__04f99 .tooltipPointer_a79354 {
-   border-top-color: var(--premium-tier-2-pink-for-gradients-2);
+ .wrapper_edb6e0 {
+   position: relative;
+   border-radius: 50%;
+ }
+ .pointer__4360d {
+   cursor: pointer;
+ }
+ .mask__1979f {
+   pointer-events: none;
+   position: relative;
+   display: block;
+   width: auto;
  .enable-forced-colors .tooltip__01384 {
    border: 1px solid CanvasText;
  }
  .enable-forced-colors .tooltipPointer_a79354 {
    background-color: CanvasText;
```

```diff
  }
  .theme-dark .tooltipPremium__04f99 .tooltipPointer_a79354,
  .theme-light .tooltipPremium__04f99 .tooltipPointer_a79354 {
    border-top-color: var(--premium-tier-2-pink-for-gradients-2);
  }
- .enable-forced-colors .tooltip__01384 {
-   border: 1px solid CanvasText;
- }
- .enable-forced-colors .tooltipPointer_a79354 {
-   background-color: CanvasText;
-   border: none;
-   border-radius: 100%;
-   height: 10px;
-   width: 10px;
+ .svg_f5b652 {
+   position: absolute;
+   contain: paint;
+ }
+ .status_bf52c0 {
+   position: absolute;
+   bottom: 0;
+   right: 0;
+   height: auto;
  .wrapper_edb6e0 {
    position: relative;
    border-radius: 50%;
  }
  .pointer__4360d {
```

```diff
    border: none;
    border-radius: 100%;
    height: 10px;
    width: 10px;
  }
- .wrapper_edb6e0 {
-   position: relative;
-   border-radius: 50%;
- }
- .pointer__4360d {
-   cursor: pointer;
- }
- .mask__1979f {
-   pointer-events: none;
-   position: relative;
-   display: block;
-   width: auto;
- }
- .svg_f5b652 {
-   position: absolute;
-   contain: paint;
- }
- .status_bf52c0 {
-   position: absolute;
-   bottom: 0;
-   right: 0;
-   height: auto;
- }
- .cursorDefault_e4f616 {
-   cursor: default;
- }
- .avatarStack__6604a {
-   display: grid;
-   width: 100%;
-   height: 100%;
- }
- .avatar__991e2,
- .avatarSpeaking__61fb1 {
-   width: 100%;
-   height: 100%;
-   grid-area: 1/1;
- }
- .avatar__991e2 {
-   display: block;
-   -o-object-fit: cover;
-   object-fit: cover;
-   pointer-events: none;
+ .cursorDefault_e4f616 {
+   cursor: default;
+ }
+ .avatarStack__6604a {
+   display: grid;
+   width: 100%;
+   height: 100%;
+ }
+ .avatar__991e2,
+ .avatarSpeaking__61fb1 {
+   width: 100%;
+   height: 100%;
+   grid-area: 1/1;
+ }
+ .avatar__991e2 {
+   display: block;
+   -o-object-fit: cover;
+   object-fit: cover;
+   pointer-events: none;
+ }
+ .avatar__991e2:before {
+   content: "";
+   display: block;
+   width: 100%;
+   height: 100%;
+   background-color: var(--background-modifier-accent);
+ }
+ .avatarSpeaking__61fb1 {
+   box-shadow:
+     inset 0 0 0 2px var(--status-speaking),
+     inset 0 0 0 3px var(--background-secondary);
+   border-radius: 50%;
+ }
+ .pointerEvents__33f6a {
+   pointer-events: auto;
+ }
+ .avatarDecoration_ae35e3 {
+   position: absolute;
+   top: var(--custom-avatar-avatar-decoration-border-position);
+   left: var(--custom-avatar-avatar-decoration-border-position);
+   pointer-events: none;
+   contain: paint;
  .avatar__991e2:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
```

```diff
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    pointer-events: none;
  }
- .avatar__991e2:before {
-   content: "";
-   display: block;
-   width: 100%;
-   height: 100%;
-   background-color: var(--background-modifier-accent);
+ .wrapper__3af0b {
+   box-sizing: border-box;
+   position: relative;
+   width: 48px;
+   height: 48px;
+   cursor: pointer;
  .avatarSpeaking__61fb1 {
    box-shadow:
      inset 0 0 0 2px var(--status-speaking),
      inset 0 0 0 3px var(--background-secondary);
    border-radius: 50%;
```

```diff
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--background-modifier-accent);
  }
- .avatarSpeaking__61fb1 {
-   box-shadow:
-     inset 0 0 0 2px var(--status-speaking),
-     inset 0 0 0 3px var(--background-secondary);
-   border-radius: 50%;
- }
- .pointerEvents__33f6a {
-   pointer-events: auto;
- }
- .avatarDecoration_ae35e3 {
-   position: absolute;
-   top: var(--custom-avatar-avatar-decoration-border-position);
-   left: var(--custom-avatar-avatar-decoration-border-position);
-   pointer-events: none;
-   contain: paint;
+ .wrapperSimple_a34580 {
+   border-radius: 50%;
+   overflow: hidden;
+ }
+ .svg_ad7356 {
+   contain: paint;
+   box-sizing: border-box;
+   position: absolute;
+   top: 0;
+   left: 0;
+   width: 48px;
+   height: 48px;
+ }
+ .noContain__8ce64 {
+   contain: style;
  .wrapper__3af0b {
    box-sizing: border-box;
    position: relative;
    width: 48px;
    height: 48px;
```

```diff
    top: var(--custom-avatar-avatar-decoration-border-position);
    left: var(--custom-avatar-avatar-decoration-border-position);
    pointer-events: none;
    contain: paint;
  }
- .wrapper__3af0b {
-   box-sizing: border-box;
-   position: relative;
-   width: 48px;
-   height: 48px;
-   cursor: pointer;
+ .lowerBadge__669e7 {
+   pointer-events: none;
+   position: absolute;
+   bottom: 0;
+   right: 0;
+   z-index: 2;
  .wrapperSimple_a34580 {
    border-radius: 50%;
    overflow: hidden;
  }
  .svg_ad7356 {
```

```diff
    position: relative;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
- .wrapperSimple_a34580 {
-   border-radius: 50%;
-   overflow: hidden;
+ .isHighlighted__40992 {
+   stroke: black;
+   stroke-width: 8px;
  .svg_ad7356 {
    contain: paint;
    box-sizing: border-box;
    position: absolute;
    top: 0;
```

```diff
  }
  .wrapperSimple_a34580 {
    border-radius: 50%;
    overflow: hidden;
  }
- .svg_ad7356 {
-   contain: paint;
-   box-sizing: border-box;
-   position: absolute;
-   top: 0;
-   left: 0;
-   width: 48px;
-   height: 48px;
- }
- .noContain__8ce64 {
-   contain: style;
- }
- .lowerBadge__669e7 {
-   pointer-events: none;
-   position: absolute;
-   bottom: 0;
-   right: 0;
-   z-index: 2;
- }
- .isHighlighted__40992 {
-   stroke: black;
-   stroke-width: 8px;
+ .upperBadge_c7cfb3 {
+   pointer-events: none;
+   position: absolute;
+   top: 0;
+   right: 0;
+ }
+ .focusStroke__2cebd {
+   fill: transparent;
+   stroke: transparent;
+   stroke-width: 0;
+ }
+ .focusFill_b97f34,
+ .highlight__0768a {
+   fill: transparent;
+ }
+ .keyboard-mode .focusStroke__2cebd {
+   fill: var(--blue-345);
+   stroke: var(--blue-345);
+   stroke-width: 8px;
+ }
+ .keyboard-mode .focusFill_b97f34 {
+   fill: var(--background-tertiary);
  .upperBadge_c7cfb3 {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
```

```diff
  }
  .isHighlighted__40992 {
    stroke: black;
    stroke-width: 8px;
  }
- .upperBadge_c7cfb3 {
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   right: 0;
- }
- .focusStroke__2cebd {
-   fill: transparent;
-   stroke: transparent;
-   stroke-width: 0;
- }
- .focusFill_b97f34,
- .highlight__0768a {
-   fill: transparent;
+ .keyboard-mode .simpleFocused__1a6f6 {
+   box-shadow: 0 0 0 4px var(--blue-345);
+ }
+ .card__4dc22 {
+   position: relative;
+   border-width: 1px;
+   border-style: solid;
+   border-radius: 5px;
+   --__card-accent-color: transparent;
+   border-color: transparent;
+   border-color: var(--__card-accent-color);
+ }
+ .card__4dc22:not(.outline_cb0aed) {
+   background-color: var(--__card-accent-color);
  .keyboard-mode .focusStroke__2cebd {
    fill: var(--blue-345);
    stroke: var(--blue-345);
    stroke-width: 8px;
  }
```

```diff
  }
  .focusFill_b97f34,
  .highlight__0768a {
    fill: transparent;
  }
- .keyboard-mode .focusStroke__2cebd {
-   fill: var(--blue-345);
-   stroke: var(--blue-345);
-   stroke-width: 8px;
- }
- .keyboard-mode .focusFill_b97f34 {
-   fill: var(--background-tertiary);
- }
- .keyboard-mode .simpleFocused__1a6f6 {
-   box-shadow: 0 0 0 4px var(--blue-345);
- }
- .card__4dc22 {
-   position: relative;
-   border-width: 1px;
-   border-style: solid;
-   border-radius: 5px;
-   --__card-accent-color: transparent;
-   border-color: transparent;
-   border-color: var(--__card-accent-color);
- }
- .card__4dc22:not(.outline_cb0aed) {
-   background-color: var(--__card-accent-color);
- }
- .card__4dc22 a:hover {
-   -webkit-text-decoration: underline;
-   text-decoration: underline;
- }
- .cardDanger__40bc3 a,
- .cardWarning_d49e9e a,
- .cardSuccess_b4c985 a,
- .cardBrand_c25152 a {
-   font-weight: 700;
- }
- .cardDanger__40bc3 {
-   --__card-accent-color: var(--status-danger);
- }
- .cardWarning_d49e9e {
-   --__card-accent-color: var(--status-warning-background);
+ .card__4dc22 a:hover {
+   -webkit-text-decoration: underline;
+   text-decoration: underline;
+ }
+ .cardDanger__40bc3 a,
+ .cardWarning_d49e9e a,
+ .cardSuccess_b4c985 a,
+ .cardBrand_c25152 a {
+   font-weight: 700;
+ }
+ .cardDanger__40bc3 {
+   --__card-accent-color: var(--status-danger);
+ }
+ .cardWarning_d49e9e {
+   --__card-accent-color: var(--status-warning-background);
+ }
+ .cardSuccess_b4c985 {
+   --__card-accent-color: var(--green-360);
+ }
+ .cardBrand_c25152 {
+   --__card-accent-color: var(--brand-experiment);
+ }
+ .card__4dc22 a {
+   color: var(--text-link);
+ }
+ .cardDanger__40bc3 a,
+ .cardWarning_d49e9e a,
+ .cardSuccess_b4c985 a,
+ .cardBrand_c25152 a {
+   color: var(--white-500);
+ }
+ .cardPrimary_cb7a0e {
+   background: var(--deprecated-card-bg);
+   border-color: var(--background-tertiary);
+ }
+ .cardPrimary_cb7a0e.editable_c46920 {
+   background: var(--deprecated-card-editable-bg);
+   border-color: var(--background-tertiary);
  .cardSuccess_b4c985 {
    --__card-accent-color: var(--green-360);
  }
  .cardBrand_c25152 {
    --__card-accent-color: var(--brand-experiment);
```

```diff
    --__card-accent-color: var(--status-danger);
  }
  .cardWarning_d49e9e {
    --__card-accent-color: var(--status-warning-background);
  }
- .cardSuccess_b4c985 {
-   --__card-accent-color: var(--green-360);
+ .cardPrimary_cb7a0e.outline_cb0aed {
+   border-color: var(--background-tertiary);
  .cardBrand_c25152 {
    --__card-accent-color: var(--brand-experiment);
  }
  .card__4dc22 a {
    color: var(--text-link);
```

```diff
    --__card-accent-color: var(--status-warning-background);
  }
  .cardSuccess_b4c985 {
    --__card-accent-color: var(--green-360);
  }
- .cardBrand_c25152 {
-   --__card-accent-color: var(--brand-experiment);
- }
- .card__4dc22 a {
-   color: var(--text-link);
- }
- .cardDanger__40bc3 a,
- .cardWarning_d49e9e a,
- .cardSuccess_b4c985 a,
- .cardBrand_c25152 a {
-   color: var(--white-500);
- }
- .cardPrimary_cb7a0e {
-   background: var(--deprecated-card-bg);
-   border-color: var(--background-tertiary);
- }
- .cardPrimary_cb7a0e.editable_c46920 {
-   background: var(--deprecated-card-editable-bg);
-   border-color: var(--background-tertiary);
- }
- .cardPrimary_cb7a0e.outline_cb0aed {
-   border-color: var(--background-tertiary);
+ .checkboxWrapper__02583 {
+   display: flex;
+   position: relative;
+   -webkit-user-select: none;
+   -moz-user-select: none;
+   user-select: none;
+   flex: 1 1 auto;
+   font-size: 16px;
+   max-width: 100%;
+ }
+ .checkboxWrapper__02583.row_f4c450 {
+   background-color: var(--background-secondary);
+   padding: 10px;
+   border-radius: 3px;
+ }
+ .checkboxWrapper__02583.row_f4c450.checked__24ad6 {
+   background-color: var(--background-tertiary);
+   color: var(--interactive-active);
+ }
+ .checkboxWrapper__02583.row_f4c450:hover:not(.checked__24ad6) {
+   background-color: var(--background-modifier-hover);
+   color: var(--interactive-hover);
  .checkboxWrapper__02583 {
    display: flex;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
```

```diff
    border-color: var(--background-tertiary);
  }
  .cardPrimary_cb7a0e.outline_cb0aed {
    border-color: var(--background-tertiary);
  }
- .checkboxWrapper__02583 {
-   display: flex;
-   position: relative;
-   -webkit-user-select: none;
-   -moz-user-select: none;
-   user-select: none;
-   flex: 1 1 auto;
-   font-size: 16px;
-   max-width: 100%;
+ .checkboxWrapper__02583.row_f4c450:active:not(.checked__24ad6) {
+   background-color: var(--background-modifier-active);
+   color: var(--interactive-active);
+ }
+ .checkboxWrapperDisabled_eb30cf {
+   opacity: 0.6;
+ }
+ .checkboxWrapperDisabled_eb30cf.row_f4c450 {
+   opacity: 0.3;
  .checkboxWrapper__02583.row_f4c450 {
    background-color: var(--background-secondary);
    padding: 10px;
    border-radius: 3px;
  }
```

```diff
    user-select: none;
    flex: 1 1 auto;
    font-size: 16px;
    max-width: 100%;
  }
- .checkboxWrapper__02583.row_f4c450 {
-   background-color: var(--background-secondary);
-   padding: 10px;
-   border-radius: 3px;
- }
- .checkboxWrapper__02583.row_f4c450.checked__24ad6 {
-   background-color: var(--background-tertiary);
-   color: var(--interactive-active);
- }
- .checkboxWrapper__02583.row_f4c450:hover:not(.checked__24ad6) {
-   background-color: var(--background-modifier-hover);
-   color: var(--interactive-hover);
- }
- .checkboxWrapper__02583.row_f4c450:active:not(.checked__24ad6) {
-   background-color: var(--background-modifier-active);
-   color: var(--interactive-active);
+ .alignTop__7f19d {
+   align-items: top;
+ }
+ .alignCenter__0b119 {
+   align-items: center;
+ }
+ .input_f56cea {
+   position: absolute;
+   top: 0;
+   left: 0;
+   opacity: 0;
+   margin: 0;
+   padding: 0;
+   -webkit-appearance: none;
+   -moz-appearance: none;
+   appearance: none;
  .checkboxWrapperDisabled_eb30cf {
    opacity: 0.6;
  }
  .checkboxWrapperDisabled_eb30cf.row_f4c450 {
    opacity: 0.3;
```

```diff
  }
  .checkboxWrapper__02583.row_f4c450:active:not(.checked__24ad6) {
    background-color: var(--background-modifier-active);
    color: var(--interactive-active);
  }
- .checkboxWrapperDisabled_eb30cf {
-   opacity: 0.6;
- }
- .checkboxWrapperDisabled_eb30cf.row_f4c450 {
-   opacity: 0.3;
+ .inputDefault__7fb3f,
+ .inputDisabled__1cc25 {
+   width: 100%;
+   height: 100%;
+   z-index: 1;
  .alignTop__7f19d {
    align-items: top;
  }
  .alignCenter__0b119 {
    align-items: center;
```

```diff
    opacity: 0.6;
  }
  .checkboxWrapperDisabled_eb30cf.row_f4c450 {
    opacity: 0.3;
  }
- .alignTop__7f19d {
-   align-items: top;
+ .inputDefault__7fb3f {
+   cursor: pointer;
  .alignCenter__0b119 {
    align-items: center;
  }
  .input_f56cea {
    position: absolute;
```

```diff
    opacity: 0.3;
  }
  .alignTop__7f19d {
    align-items: top;
  }
- .alignCenter__0b119 {
-   align-items: center;
+ .inputDisabled__1cc25 {
+   cursor: not-allowed;
  .input_f56cea {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
```

```diff
    align-items: top;
  }
  .alignCenter__0b119 {
    align-items: center;
  }
- .input_f56cea {
-   position: absolute;
-   top: 0;
-   left: 0;
-   opacity: 0;
-   margin: 0;
-   padding: 0;
-   -webkit-appearance: none;
-   -moz-appearance: none;
-   appearance: none;
- }
- .inputDefault__7fb3f,
- .inputDisabled__1cc25 {
-   width: 100%;
-   height: 100%;
-   z-index: 1;
- }
- .inputDefault__7fb3f {
-   cursor: pointer;
- }
- .inputDisabled__1cc25 {
-   cursor: not-allowed;
- }
- .inputReadonly_aff436 {
-   cursor: default;
-   width: 0;
-   height: 0;
-   z-index: -1;
- }
- .box__66058 {
-   border-radius: 6px;
- }
- .smallBox__28dd5 {
-   border-radius: 4px;
- }
- .round__67d8d {
-   border-radius: 50%;
- }
- .checkbox_c7f690 {
-   display: flex;
-   justify-content: center;
-   align-items: center;
-   flex: 0 0 auto;
-   border-width: 1px;
-   border-style: solid;
-   box-sizing: border-box;
- }
- .label__2f99c {
-   flex: 1 1 auto;
-   min-width: 0;
- }
- .labelClickable_db0be7 {
-   cursor: pointer;
- }
- .labelDisabled_f9ebde {
-   cursor: not-allowed;
- }
- .labelForward__9779e {
-   padding-left: 8px;
+ .inputReadonly_aff436 {
+   cursor: default;
+   width: 0;
+   height: 0;
+   z-index: -1;
+ }
+ .box__66058 {
+   border-radius: 6px;
+ }
+ .smallBox__28dd5 {
+   border-radius: 4px;
+ }
+ .round__67d8d {
+   border-radius: 50%;
+ }
+ .checkbox_c7f690 {
+   display: flex;
+   justify-content: center;
+   align-items: center;
+   flex: 0 0 auto;
+   border-width: 1px;
+   border-style: solid;
+   box-sizing: border-box;
+ }
+ .label__2f99c {
+   flex: 1 1 auto;
+   min-width: 0;
+ }
+ .labelClickable_db0be7 {
+   cursor: pointer;
+ }
+ .labelDisabled_f9ebde {
+   cursor: not-allowed;
+ }
+ .labelForward__9779e {
+   padding-left: 8px;
+ }
+ .labelReversed__4d479 {
+   padding-right: 8px;
+ }
+ .theme-light .checkbox_c7f690 {
+   border-color: var(--primary-300);
+ }
+ .theme-light.checked {
+   background: var(--white-500);
+ }
+ .theme-dark .checkbox_c7f690 {
+   border-color: var(--primary-400);
+ }
+ .theme-dark.checked {
+   border-color: var(--white-500);
+   background-color: var(--white-500);
+ }
+ .enable-forced-colors .checkbox_c7f690 {
+   border-color: ButtonText;
+ }
+ .enable-forced-colors .checked__24ad6 .checkbox_c7f690 {
+   border-color: Highlight !important;
+   background-color: Highlight !important;
  .labelReversed__4d479 {
    padding-right: 8px;
  }
  .theme-light .checkbox_c7f690 {
    border-color: var(--primary-300);
```

```diff
    cursor: not-allowed;
  }
  .labelForward__9779e {
    padding-left: 8px;
  }
- .labelReversed__4d479 {
-   padding-right: 8px;
+ .enable-forced-colors .checked__24ad6 .checkbox_c7f690 svg * {
+   fill: HighlightText;
  .theme-light .checkbox_c7f690 {
    border-color: var(--primary-300);
  }
  .theme-light.checked {
    background: var(--white-500);
```

```diff
    padding-left: 8px;
  }
  .labelReversed__4d479 {
    padding-right: 8px;
  }
- .theme-light .checkbox_c7f690 {
-   border-color: var(--primary-300);
- }
- .theme-light.checked {
-   background: var(--white-500);
- }
- .theme-dark .checkbox_c7f690 {
-   border-color: var(--primary-400);
- }
- .theme-dark.checked {
-   border-color: var(--white-500);
-   background-color: var(--white-500);
- }
- .enable-forced-colors .checkbox_c7f690 {
-   border-color: ButtonText;
- }
- .enable-forced-colors .checked__24ad6 .checkbox_c7f690 {
-   border-color: Highlight !important;
-   background-color: Highlight !important;
+ .enable-forced-colors .checkboxWrapperDisabled_eb30cf,
+ .enable-forced-colors .checkboxWrapperDisabled_eb30cf.row_f4c450 {
+   opacity: 1;
+ }
+ .enable-forced-colors .checkboxWrapperDisabled_eb30cf .checkbox_c7f690 {
+   border-color: GrayText;
+ }
+ .enable-forced-colors .labelDisabled_f9ebde,
+ .enable-forced-colors .labelDisabled_f9ebde > div {
+   color: GrayText;
+ }
+ .collapseable__71e46 {
+   position: relative;
+   background-color: var(--background-secondary-alt);
+   border-radius: 8px;
+   transition: background-color.1s ease;
+ }
+ .collapseable__71e46:active {
+   background-color: var(--background-accent);
  .enable-forced-colors .checked__24ad6 .checkbox_c7f690 svg * {
    fill: HighlightText;
  }
  .enable-forced-colors .checkboxWrapperDisabled_eb30cf,
  .enable-forced-colors .checkboxWrapperDisabled_eb30cf.row_f4c450 {
```

```diff
  }
  .enable-forced-colors .checked__24ad6 .checkbox_c7f690 {
    border-color: Highlight !important;
    background-color: Highlight !important;
  }
- .enable-forced-colors .checked__24ad6 .checkbox_c7f690 svg * {
-   fill: HighlightText;
- }
- .enable-forced-colors .checkboxWrapperDisabled_eb30cf,
- .enable-forced-colors .checkboxWrapperDisabled_eb30cf.row_f4c450 {
-   opacity: 1;
- }
- .enable-forced-colors .checkboxWrapperDisabled_eb30cf .checkbox_c7f690 {
-   border-color: GrayText;
- }
- .enable-forced-colors .labelDisabled_f9ebde,
- .enable-forced-colors .labelDisabled_f9ebde > div {
-   color: GrayText;
+ .collapseable__71e46:before {
+   box-shadow: var(--elevation-stroke), var(--elevation-low);
+   opacity: 0;
+   content: "";
+   position: absolute;
+   top: 0;
+   left: 0;
+   right: 0;
+   bottom: 0;
+   transition: opacity.2s ease-in-out;
+   z-index: 0;
+   overflow: visible;
+   border-radius: 8px;
  .collapseable__71e46 {
    position: relative;
    background-color: var(--background-secondary-alt);
    border-radius: 8px;
    transition: background-color.1s ease;
```

```diff
  }
  .enable-forced-colors .labelDisabled_f9ebde,
  .enable-forced-colors .labelDisabled_f9ebde > div {
    color: GrayText;
  }
- .collapseable__71e46 {
-   position: relative;
-   background-color: var(--background-secondary-alt);
-   border-radius: 8px;
-   transition: background-color.1s ease;
+ .collapseable__71e46.toggled_bb1607 {
+   cursor: default;
+ }
+ .collapseable__71e46.toggled_bb1607:active {
+   background-color: var(--background-secondary);
  .collapseable__71e46:active {
    background-color: var(--background-accent);
  }
  .collapseable__71e46:before {
    box-shadow: var(--elevation-stroke), var(--elevation-low);
```

```diff
    position: relative;
    background-color: var(--background-secondary-alt);
    border-radius: 8px;
    transition: background-color.1s ease;
  }
- .collapseable__71e46:active {
-   background-color: var(--background-accent);
+ .collapseable__71e46.toggled_bb1607:before {
+   opacity: 1;
  .collapseable__71e46:before {
    box-shadow: var(--elevation-stroke), var(--elevation-low);
    opacity: 0;
    content: "";
    position: absolute;
```

```diff
    transition: background-color.1s ease;
  }
  .collapseable__71e46:active {
    background-color: var(--background-accent);
  }
- .collapseable__71e46:before {
-   box-shadow: var(--elevation-stroke), var(--elevation-low);
-   opacity: 0;
-   content: "";
-   position: absolute;
-   top: 0;
-   left: 0;
-   right: 0;
-   bottom: 0;
-   transition: opacity.2s ease-in-out;
-   z-index: 0;
-   overflow: visible;
-   border-radius: 8px;
+ .collapseable__71e46:not(:last-child) {
+   margin-bottom: 16px;
+ }
+ .header__9f152 {
+   position: relative;
+   cursor: pointer;
+ }
+ .header__9f152.toggled_bb1607 {
+   cursor: default;
+ }
+ .contentExpandContainer__7ee61 {
+   overflow: hidden;
+   flex: 1;
  .collapseable__71e46.toggled_bb1607 {
    cursor: default;
  }
  .collapseable__71e46.toggled_bb1607:active {
    background-color: var(--background-secondary);
```

```diff
    transition: opacity.2s ease-in-out;
    z-index: 0;
    overflow: visible;
    border-radius: 8px;
  }
- .collapseable__71e46.toggled_bb1607 {
-   cursor: default;
+ .showOverflow_a66822 {
+   overflow: visible;
  .collapseable__71e46.toggled_bb1607:active {
    background-color: var(--background-secondary);
  }
  .collapseable__71e46.toggled_bb1607:before {
    opacity: 1;
```

```diff
    border-radius: 8px;
  }
  .collapseable__71e46.toggled_bb1607 {
    cursor: default;
  }
- .collapseable__71e46.toggled_bb1607:active {
-   background-color: var(--background-secondary);
- }
- .collapseable__71e46.toggled_bb1607:before {
-   opacity: 1;
- }
- .collapseable__71e46:not(:last-child) {
-   margin-bottom: 16px;
- }
- .header__9f152 {
-   position: relative;
-   cursor: pointer;
- }
- .header__9f152.toggled_bb1607 {
-   cursor: default;
- }
- .contentExpandContainer__7ee61 {
+ .focusTarget_d20efc {
+   width: 0;
+   height: 0;
+   pointer-events: none;
+ }
+ .defaultColor__37d78 {
+   color: var(--text-normal);
+ }
+ .lineClamp1__0ec05 {
+   overflow: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   min-width: 0;
+ }
+ .lineClamp2Plus__9938b {
+   display: -webkit-box;
+   -webkit-box-orient: vertical;
    flex: 1;
  }
  .showOverflow_a66822 {
    overflow: visible;
  }
```

```diff
  .header__9f152.toggled_bb1607 {
    cursor: default;
  }
  .contentExpandContainer__7ee61 {
    overflow: hidden;
-   flex: 1;
- }
- .showOverflow_a66822 {
-   overflow: visible;
- }
- .focusTarget_d20efc {
-   width: 0;
-   height: 0;
-   pointer-events: none;
+ }
+ .selectable__46283 {
+   -webkit-user-select: text;
+   -moz-user-select: text;
+   user-select: text;
+ }
+ .tabularNumbers__766ad {
+   font-feature-settings: "tnum";
+   font-variant-numeric: tabular-nums;
  .defaultColor__87d87 {
    color: var(--header-primary);
  }
  .container__7712a {
    box-sizing: border-box;
```

```diff
  @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
    .theme-light .socialLink_f11d71 {
      color: hsl(228 calc(6% * var(--saturation-factor, 1)) 32.5%);
    }
  }
- /*# sourceMappingURL=shared.7c519c166f4774f71391.css.map*/
+ /*# sourceMappingURL=shared.39fbf97151c609765312.css.map*/

```