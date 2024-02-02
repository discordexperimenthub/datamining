```diff
    }
    .desktopHeader_ee0dd9 {
      display: none;
    }
  }
- .wrapper__83f97 {
-   padding: 8px;
-   min-width: 300px;
-   flex: 1;
-   display: flex;
-   flex-direction: row;
-   align-items: center;
-   border-radius: var(--radius-sm);
-   background-color: var(--background-modifier-hover);
-   cursor: pointer;
-   color: var(--white-500);
-   text-align: left;
-   gap: 8px;
-   border: 1px solid transparent;
-   box-sizing: border-box;
+ .wrapper__3d173 {
+   width: 100%;
+   min-height: 166px;
+   display: flex;
+   gap: 20px;
+   color: var(--white);
+   box-sizing: border-box;
+   padding: 35px;
+   border-radius: var(--radius-sm);
+   align-items: center;
+   background-color: var(--primary-700);
+   background-size: cover;
+   background-position: center;
+   background-repeat: no-repeat;
+   position: relative;
  }
  .wrapper__83f97:disabled {
    cursor: not-allowed;
    color: var(--text-muted);
  }
```

```diff
    text-align: left;
    gap: 8px;
    border: 1px solid transparent;
    box-sizing: border-box;
  }
- .wrapper__83f97:disabled {
-   cursor: not-allowed;
-   color: var(--text-muted);
- }
- .selected__2b4d8 {
-   background-color: var(--brand-500);
-   box-shadow: 0 0 4px 0 var(--brand-500);
-   border-color: rgba(255, 255, 255, 0.15);
+ .textWrapper__1c560 {
+   max-width: 520px;
+ }
+ .title__1f83d {
+   font-size: 32px;
+   font-style: normal;
+   font-weight: var(--font-weight-extrabold);
+   line-height: 40px;
  }
  .icon_e1e45d {
    width: 36px;
    height: 36px;
    background-color: var(--background-message-hover);
```

```diff
  .selected__2b4d8 {
    background-color: var(--brand-500);
    box-shadow: 0 0 4px 0 var(--brand-500);
    border-color: rgba(255, 255, 255, 0.15);
  }
- .icon_e1e45d {
-   width: 36px;
-   height: 36px;
-   background-color: var(--background-message-hover);
-   border-radius: var(--radius-round);
-   display: flex;
-   justify-content: center;
-   align-items: center;
- }
- .title__8b7fa {
-   font-family: var(--font-primary);
-   font-size: 14px;
-   font-weight: var(--font-weight-semibold);
- }
- .body__34e23 {
-   font-family: var(--font-primary);
-   font-size: 12px;
-   font-weight: var(--font-weight-normal);
- }
- .productCard_a1742a {
-   color: var(--white);
-   background-color: var(--background-secondary);
-   border-radius: 8px;
-   overflow: hidden;
-   max-width: 375px;
- }
- .cardHeaderImg_f6c932 {
-   width: 100%;
-   height: 120px;
-   background-repeat: no-repeat;
-   background-size: cover;
-   background-position: center;
- }
- .cardTitleWrapper_c73f42 {
-   width: 100%;
-   padding: 16px;
-   box-sizing: border-box;
-   border-bottom: thin solid var(--background-modifier-accent);
- }
- .cardTitleName__0e039 {
-   font-size: 20px;
-   font-weight: var(--font-weight-extrabold);
-   line-height: 20px;
- }
- .cardTitleDesc__59fab {
-   padding-top: 8px;
-   font-size: 12px;
-   color: var(--primary-360);
-   line-height: 16px;
+ .subtitle_dd3e5f {
+   font-size: 14px;
+   line-height: 18px;
+ }
+ @value iconSize: 100px;
+ .icon__0fd04 {
+   height: 100px;
+   width: 100px;
+   border-radius: 100px;
+   overflow: hidden;
+   flex-shrink: 0;
+ }
+ .icon__0fd04 img {
+   height: 100px;
+   width: 100px;
+ }
+ .wrapper__83f97 {
+   padding: 8px;
+   min-width: 300px;
+   flex: 1;
+   display: flex;
+   flex-direction: row;
+   align-items: center;
+   border-radius: var(--radius-sm);
+   background-color: var(--background-modifier-hover);
+   cursor: pointer;
+   color: var(--white-500);
+   text-align: left;
+   gap: 8px;
+   border: 1px solid transparent;
+   box-sizing: border-box;
+ }
+ .wrapper__83f97:disabled {
+   cursor: not-allowed;
+   color: var(--text-muted);
+ }
+ .selected__2b4d8 {
+   background-color: var(--brand-500);
+   box-shadow: 0 0 4px 0 var(--brand-500);
+   border-color: rgba(255, 255, 255, 0.15);
+ }
+ .icon_e1e45d {
+   width: 36px;
+   height: 36px;
+   background-color: var(--background-message-hover);
+   border-radius: var(--radius-round);
+   display: flex;
+   justify-content: center;
+   align-items: center;
  }
  .cardPrice__92dbb {
    padding: 16px;
    display: flex;
    justify-content: space-between;
```

```diff
    padding-top: 8px;
    font-size: 12px;
    color: var(--primary-360);
    line-height: 16px;
  }
- .cardPrice__92dbb {
-   padding: 16px;
-   display: flex;
-   justify-content: space-between;
-   box-sizing: border-box;
-   align-items: center;
- }
- .cardPriceLabel_eb2eee {
-   font-size: 12px;
-   color: #dbdee1;
-   line-height: 16px;
-   margin-top: 5px;
- }
- .cardBenefitsWrapper_d04abe {
-   padding: 16px;
- }
- .cardBenefit_ed801c {
-   width: 100%;
-   display: flex;
-   gap: 16px;
-   padding: 16px 0;
- }
- .cardBenefitTitle__98537 {
-   font-size: 12px;
-   text-transform: uppercase;
-   font-weight: var(--font-weight-bold);
-   color: var(--primary-330);
- }
- @value iconSize: 24px;
- .cardBenefitIcon_ef7acc {
-   width: 24px;
-   height: 24px;
-   font-size: 24px;
- }
- .cardBenefitIcon_ef7acc img {
-   width: 24px;
-   height: 24px;
-   -o-object-fit: cover;
-   object-fit: cover;
- }
- .cardBenefitName__3fac8 {
-   font-size: 16px;
-   font-weight: var(--font-weight-semibold);
-   color: var(--primary-130);
-   line-height: 20px;
- }
- .cardBenefitDesc__61917 {
-   font-size: 14px;
-   font-weight: var(--font-weight-medium);
-   line-height: 18px;
-   color: var(--primary-330);
- }
- @value maxModalWidth from './MarkdownModal.module.css';
- .video__562f3 {
-   border-radius: 3px;
- }
- @media (max-width: 490px) {
-   .video__562f3 {
-     width: auto !important;
-   }
- }
- .container_bd6694 {
-   padding-bottom: 20px;
- }
- .container_bd6694 p > img,
- .image__988dc {
-   border-radius: 5px;
- }
- .title_cb085d {
-   font-weight: 700;
-   font-size: 16px;
-   line-height: 20px;
-   text-transform: uppercase;
- }
- .lead__8e4f4 {
-   margin-bottom: 20px;
-   border-radius: 5px;
- }
- .added_dc4118,
- .fixed__61d41,
- .progress_be0b9b,
- .improved_df526b {
-   display: flex;
-   align-items: center;
-   margin-top: 40px;
- }
- .added_dc4118.marginTop__89620,
- .fixed__61d41.marginTop__89620,
- .progress_be0b9b.marginTop__89620,
- .improved_df526b.marginTop__89620 {
-   margin-top: 20px;
- }
- .added_dc4118:after,
- .fixed__61d41:after,
- .progress_be0b9b:after,
- .improved_df526b:after {
-   content: "";
-   height: 1px;
-   flex: 1 1 auto;
-   margin-left: 4px;
-   opacity: 0.6;
+ .title__8b7fa {
+   font-family: var(--font-primary);
+   font-size: 14px;
+   font-weight: var(--font-weight-semibold);
+ }
+ .body__34e23 {
+   font-family: var(--font-primary);
+   font-size: 12px;
+   font-weight: var(--font-weight-normal);
+ }
+ .productCard_a1742a {
+   color: var(--white);
+   background-color: var(--background-secondary);
+   border-radius: 8px;
+   overflow: hidden;
+   max-width: 375px;
+ }
+ .cardHeaderImg_f6c932 {
+   width: 100%;
+   height: 120px;
+   background-repeat: no-repeat;
+   background-size: cover;
+   background-position: center;
+ }
+ .cardTitleWrapper_c73f42 {
+   width: 100%;
+   padding: 16px;
+   box-sizing: border-box;
+   border-bottom: thin solid var(--background-modifier-accent);
+ }
+ .cardTitleName__0e039 {
+   font-size: 20px;
+   font-weight: var(--font-weight-extrabold);
+   line-height: 20px;
+ }
+ .cardTitleDesc__59fab {
+   padding-top: 8px;
+   font-size: 12px;
+   color: var(--primary-360);
+   line-height: 16px;
+ }
+ .cardPrice__92dbb {
+   padding: 16px;
+   display: flex;
+   justify-content: space-between;
+   box-sizing: border-box;
+   align-items: center;
+ }
+ .cardPriceLabel_eb2eee {
+   font-size: 12px;
+   color: #dbdee1;
+   line-height: 16px;
+   margin-top: 5px;
+ }
+ .cardBenefitsWrapper_d04abe {
+   padding: 16px;
+ }
+ .cardBenefit_ed801c {
+   width: 100%;
+   display: flex;
+   gap: 16px;
+   padding: 16px 0;
+ }
+ .cardBenefitTitle__98537 {
+   font-size: 12px;
+   text-transform: uppercase;
+   font-weight: var(--font-weight-bold);
+   color: var(--primary-330);
+ }
+ @value iconSize: 24px;
+ .cardBenefitIcon_ef7acc {
+   width: 24px;
+   height: 24px;
+   font-size: 24px;
+ }
+ .cardBenefitIcon_ef7acc img {
+   width: 24px;
+   height: 24px;
+   -o-object-fit: cover;
+   object-fit: cover;
+ }
+ .cardBenefitName__3fac8 {
+   font-size: 16px;
+   font-weight: var(--font-weight-semibold);
+   color: var(--primary-130);
+   line-height: 20px;
+ }
+ .cardBenefitDesc__61917 {
+   font-size: 14px;
+   font-weight: var(--font-weight-medium);
+   line-height: 18px;
+   color: var(--primary-330);
+ }
+ @value maxModalWidth from './MarkdownModal.module.css';
+ .video__562f3 {
+   border-radius: 3px;
+ }
+ @media (max-width: 490px) {
+   .video__562f3 {
+     width: auto !important;
+   }
  }
  .added_dc4118 {
    color: var(--text-positive);
  }
  .added_dc4118:after {
```

```diff
    height: 1px;
    flex: 1 1 auto;
    margin-left: 4px;
    opacity: 0.6;
  }
- .added_dc4118 {
-   color: var(--text-positive);
+ .container_bd6694 {
+   padding-bottom: 20px;
  }
  .added_dc4118:after {
    background-color: var(--info-positive-foreground);
  }
  .fixed__61d41 {
```

```diff
    opacity: 0.6;
  }
  .added_dc4118 {
    color: var(--text-positive);
  }
- .added_dc4118:after {
-   background-color: var(--info-positive-foreground);
- }
- .fixed__61d41 {
-   color: #f23f42;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .fixed__61d41 {
-     color: hsl(359 calc(87.3% * var(--saturation-factor, 1)) 59.8%);
-   }
- }
- .fixed__61d41:after {
-   background-color: #f23f42;
+ .container_bd6694 p > img,
+ .image__988dc {
+   border-radius: 5px;
+ }
+ .title_cb085d {
+   font-weight: 700;
+   font-size: 16px;
+   line-height: 20px;
+   text-transform: uppercase;
+ }
+ .lead__8e4f4 {
+   margin-bottom: 20px;
+   border-radius: 5px;
  }
  @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
    .fixed__61d41:after {
      background-color: hsl(359 calc(87.3% * var(--saturation-factor, 1)) 59.8%);
    }
```

```diff
    }
  }
  .fixed__61d41:after {
    background-color: #f23f42;
  }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .fixed__61d41:after {
-     background-color: hsl(359 calc(87.3% * var(--saturation-factor, 1)) 59.8%);
-   }
- }
- .progress_be0b9b {
-   color: var(--text-warning);
+ .added_dc4118,
+ .fixed__61d41,
+ .progress_be0b9b,
+ .improved_df526b {
+   display: flex;
+   align-items: center;
+   margin-top: 40px;
  }
  .progress_be0b9b:after {
    background-color: var(--info-warning-foreground);
  }
  .improved_df526b {
```

```diff
    }
  }
  .progress_be0b9b {
    color: var(--text-warning);
  }
- .progress_be0b9b:after {
-   background-color: var(--info-warning-foreground);
- }
- .improved_df526b {
-   color: #5865f2;
+ .added_dc4118.marginTop__89620,
+ .fixed__61d41.marginTop__89620,
+ .progress_be0b9b.marginTop__89620,
+ .improved_df526b.marginTop__89620 {
+   margin-top: 20px;
  }
  @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
    .improved_df526b {
      color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
    }
```

```diff
    background-color: var(--info-warning-foreground);
  }
  .improved_df526b {
    color: #5865f2;
  }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .improved_df526b {
-     color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
-   }
- }
- .improved_df526b:after {
-   background-color: #5865f2;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .improved_df526b:after {
-     background-color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
-   }
+ .added_dc4118:after,
+ .fixed__61d41:after,
+ .progress_be0b9b:after,
+ .improved_df526b:after {
+   content: "";
+   height: 1px;
+   flex: 1 1 auto;
+   margin-left: 4px;
+   opacity: 0.6;
+ }
+ .added_dc4118 {
+   color: var(--text-positive);
  }
  .footer__55d42 {
    display: flex;
  }
  .socialLink_f11d71 {
```

```diff
  @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
    .improved_df526b:after {
      background-color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
    }
  }
- .footer__55d42 {
-   display: flex;
+ .added_dc4118:after {
+   background-color: var(--info-positive-foreground);
  }
  .socialLink_f11d71 {
    margin-right: 16px;
  }
  .premiumBanner__6597f {
```

```diff
    }
  }
  .footer__55d42 {
    display: flex;
  }
- .socialLink_f11d71 {
-   margin-right: 16px;
+ .fixed__61d41 {
+   color: #f23f42;
  }
  .premiumBanner__6597f {
    background-image: linear-gradient(to left, #b3aeff, #738df5);
    color: #fff;
    display: flex;
```

```diff
    display: flex;
  }
  .socialLink_f11d71 {
    margin-right: 16px;
  }
- .premiumBanner__6597f {
-   background-image: linear-gradient(to left, #b3aeff, #738df5);
-   color: #fff;
-   display: flex;
-   align-items: center;
-   border-radius: 5px;
-   font-size: 16px;
-   line-height: 18px;
-   padding: 16px;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .premiumBanner__6597f {
-     background-image: linear-gradient(
-       to left,
-       hsl(244 calc(100% * var(--saturation-factor, 1)) 84.1%),
-       hsl(228 calc(86.7% * var(--saturation-factor, 1)) 70.6%)
-     );
-     color: hsl(0 calc(0% * var(--saturation-factor, 1)) 100%);
-   }
- }
- .premiumBanner__6597f .premiumIcon__9fe69 {
-   flex-shrink: 0;
-   margin-right: 16px;
-   width: 36px;
-   height: 36px;
- }
- .theme-dark .date__21306 {
-   color: #c4c9ce;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-dark .date__21306 {
-     color: hsl(210 calc(9.3% * var(--saturation-factor, 1)) 78.8%);
-   }
- }
- .theme-dark .video__562f3 {
-   box-shadow: 0 2px 10px 0 hsl(calc(1 * 0%), 0%-hsl / 0.2);
-   box-shadow: 0 2px 10px 0
-     hsl(var(0, calc(0% * var(--saturation-factor, 1)), 0%-hsl) / 0.2);
- }
- .theme-dark .socialLink_f11d71 {
-   color: #c4c9ce;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-dark .socialLink_f11d71 {
-     color: hsl(210 calc(9.3% * var(--saturation-factor, 1)) 78.8%);
-   }
- }
- .theme-dark .improved_df526b {
-   color: #949cf7;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-dark .improved_df526b {
-     color: hsl(235 calc(86.1% * var(--saturation-factor, 1)) 77.5%);
-   }
- }
- .theme-dark .improved_df526b:after {
-   background-color: #949cf7;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-dark .improved_df526b:after {
-     background-color: hsl(235 calc(86.1% * var(--saturation-factor, 1)) 77.5%);
-   }
- }
- .theme-light .date__21306 {
-   color: #80848e;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-light .date__21306 {
-     color: hsl(223 calc(5.8% * var(--saturation-factor, 1)) 52.9%);
-   }
- }
- .theme-light .video__562f3 {
-   box-shadow: 0 2px 10px 0 hsl(calc(1 * 0%), 0%-hsl / 0.1);
-   box-shadow: 0 2px 10px 0
-     hsl(var(0, calc(0% * var(--saturation-factor, 1)), 0%-hsl) / 0.1);
- }
- .theme-light .socialLink_f11d71 {
-   color: #4e5058;
- }
- @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
-   .theme-light .socialLink_f11d71 {
-     color: hsl(228 calc(6% * var(--saturation-factor, 1)) 32.5%);
-   }
- }
- /*# sourceMappingURL=shared.45ef64544e63e19dd34c.css.map*/
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .fixed__61d41 {
+     color: hsl(359 calc(87.3% * var(--saturation-factor, 1)) 59.8%);
+   }
+ }
+ .fixed__61d41:after {
+   background-color: #f23f42;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .fixed__61d41:after {
+     background-color: hsl(359 calc(87.3% * var(--saturation-factor, 1)) 59.8%);
+   }
+ }
+ .progress_be0b9b {
+   color: var(--text-warning);
+ }
+ .progress_be0b9b:after {
+   background-color: var(--info-warning-foreground);
+ }
+ .improved_df526b {
+   color: #5865f2;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .improved_df526b {
+     color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
+   }
+ }
+ .improved_df526b:after {
+   background-color: #5865f2;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .improved_df526b:after {
+     background-color: hsl(235 calc(85.6% * var(--saturation-factor, 1)) 64.7%);
+   }
+ }
+ .footer__55d42 {
+   display: flex;
+ }
+ .socialLink_f11d71 {
+   margin-right: 16px;
+ }
+ .premiumBanner__6597f {
+   background-image: linear-gradient(to left, #b3aeff, #738df5);
+   color: #fff;
+   display: flex;
+   align-items: center;
+   border-radius: 5px;
+   font-size: 16px;
+   line-height: 18px;
+   padding: 16px;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .premiumBanner__6597f {
+     background-image: linear-gradient(
+       to left,
+       hsl(244 calc(100% * var(--saturation-factor, 1)) 84.1%),
+       hsl(228 calc(86.7% * var(--saturation-factor, 1)) 70.6%)
+     );
+     color: hsl(0 calc(0% * var(--saturation-factor, 1)) 100%);
+   }
+ }
+ .premiumBanner__6597f .premiumIcon__9fe69 {
+   flex-shrink: 0;
+   margin-right: 16px;
+   width: 36px;
+   height: 36px;
+ }
+ .theme-dark .date__21306 {
+   color: #c4c9ce;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-dark .date__21306 {
+     color: hsl(210 calc(9.3% * var(--saturation-factor, 1)) 78.8%);
+   }
+ }
+ .theme-dark .video__562f3 {
+   box-shadow: 0 2px 10px 0 hsl(calc(1 * 0%), 0%-hsl / 0.2);
+   box-shadow: 0 2px 10px 0
+     hsl(var(0, calc(0% * var(--saturation-factor, 1)), 0%-hsl) / 0.2);
+ }
+ .theme-dark .socialLink_f11d71 {
+   color: #c4c9ce;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-dark .socialLink_f11d71 {
+     color: hsl(210 calc(9.3% * var(--saturation-factor, 1)) 78.8%);
+   }
+ }
+ .theme-dark .improved_df526b {
+   color: #949cf7;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-dark .improved_df526b {
+     color: hsl(235 calc(86.1% * var(--saturation-factor, 1)) 77.5%);
+   }
+ }
+ .theme-dark .improved_df526b:after {
+   background-color: #949cf7;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-dark .improved_df526b:after {
+     background-color: hsl(235 calc(86.1% * var(--saturation-factor, 1)) 77.5%);
+   }
+ }
+ .theme-light .date__21306 {
+   color: #80848e;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-light .date__21306 {
+     color: hsl(223 calc(5.8% * var(--saturation-factor, 1)) 52.9%);
+   }
+ }
+ .theme-light .video__562f3 {
+   box-shadow: 0 2px 10px 0 hsl(calc(1 * 0%), 0%-hsl / 0.1);
+   box-shadow: 0 2px 10px 0
+     hsl(var(0, calc(0% * var(--saturation-factor, 1)), 0%-hsl) / 0.1);
+ }
+ .theme-light .socialLink_f11d71 {
+   color: #4e5058;
+ }
+ @supports (color: rgba(0, 0, 0, 0)) and (top: var(--f)) {
+   .theme-light .socialLink_f11d71 {
+     color: hsl(228 calc(6% * var(--saturation-factor, 1)) 32.5%);
+   }
+ }
+ /*# sourceMappingURL=shared.b26c3e34f71899dcfce5.css.map*/

```