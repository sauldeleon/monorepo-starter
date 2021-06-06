import * as React from 'react'

declare global {
  /** Equivalent to `React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>` */
  type AProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  /** Equivalent to `React.AnchorHTMLAttributes<HTMLAnchorElement>` */
  type APropsWithoutRef = React.AnchorHTMLAttributes<HTMLAnchorElement>
  /** Equivalent to `React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>` */
  type AreaProps = React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>
  /** Equivalent to `React.AreaHTMLAttributes<HTMLAreaElement>` */
  type AreaPropsWithoutRef = React.AreaHTMLAttributes<HTMLAreaElement>
  /** Equivalent to `React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>` */
  type AudioProps = React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>
  /** Equivalent to `React.AudioHTMLAttributes<HTMLAudioElement>` */
  type AudioPropsWithoutRef = React.AudioHTMLAttributes<HTMLAudioElement>
  /** Equivalent to `React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>` */
  type BaseProps = React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>
  /** Equivalent to `React.BaseHTMLAttributes<HTMLBaseElement>` */
  type BasePropsWithoutRef = React.BaseHTMLAttributes<HTMLBaseElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>` */
  type BodyProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
  /** Equivalent to `React.HTMLAttributes<HTMLBodyElement>` */
  type BodyPropsWithoutRef = React.HTMLAttributes<HTMLBodyElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>` */
  type BRProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>
  /** Equivalent to `React.HTMLAttributes<HTMLBRElement>` */
  type BRPropsWithoutRef = React.HTMLAttributes<HTMLBRElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>` */
  type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  /** Equivalent to `React.ButtonHTMLAttributes<HTMLButtonElement>` */
  type ButtonPropsWithoutRef = React.ButtonHTMLAttributes<HTMLButtonElement>
  /** Equivalent to `React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>` */
  type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
  /** Equivalent to `React.CanvasHTMLAttributes<HTMLCanvasElement>` */
  type CanvasPropsWithoutRef = React.CanvasHTMLAttributes<HTMLCanvasElement>
  /** Equivalent to `React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>` */
  type DataProps = React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>
  /** Equivalent to `React.DataHTMLAttributes<HTMLDataElement>` */
  type DataPropsWithoutRef = React.DataHTMLAttributes<HTMLDataElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>` */
  type DataListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>
  /** Equivalent to `React.HTMLAttributes<HTMLDataListElement>` */
  type DataListPropsWithoutRef = React.HTMLAttributes<HTMLDataListElement>
  /** Equivalent to `React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>` */
  type DialogProps = React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>
  /** Equivalent to `React.DialogHTMLAttributes<HTMLDialogElement>` */
  type DialogPropsWithoutRef = React.DialogHTMLAttributes<HTMLDialogElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>` */
  type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  /** Equivalent to `React.HTMLAttributes<HTMLDivElement>` */
  type DivPropsWithoutRef = React.HTMLAttributes<HTMLDivElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>` */
  type DLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>
  /** Equivalent to `React.HTMLAttributes<HTMLDListElement>` */
  type DLPropsWithoutRef = React.HTMLAttributes<HTMLDListElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>` */
  type ElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  /** Equivalent to `React.HTMLAttributes<HTMLElement>` */
  type ElementPropsWithoutRef = React.HTMLAttributes<HTMLElement>
  /** Equivalent to `React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>` */
  type EmbedProps = React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
  /** Equivalent to `React.EmbedHTMLAttributes<HTMLEmbedElement>` */
  type EmbedPropsWithoutRef = React.EmbedHTMLAttributes<HTMLEmbedElement>
  /** Equivalent to `React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>` */
  type FieldSetProps = React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>
  /** Equivalent to `React.FieldsetHTMLAttributes<HTMLFieldSetElement>` */
  type FieldSetPropsWithoutRef = React.FieldsetHTMLAttributes<HTMLFieldSetElement>
  /** Equivalent to `React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>` */
  type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
  /** Equivalent to `React.FormHTMLAttributes<HTMLFormElement>` */
  type FormPropsWithoutRef = React.FormHTMLAttributes<HTMLFormElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  /** Equivalent to `React.HTMLAttributes<HTMLHeadingElement>` */
  type HeadingPropsWithoutRef = React.HTMLAttributes<HTMLHeadingElement>
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H1Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H1PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H2Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H2PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H3Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H3PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H4Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H4PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H5Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H5PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `HeadingProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>` */
  type H6Props = HeadingProps
  /** Equivalent to `HeadingPropsWithoutRef` and `React.HTMLAttributes<HTMLHeadingElement>` */
  type H6PropsWithoutRef = HeadingPropsWithoutRef
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>` */
  type HeadProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>
  /** Equivalent to `React.HTMLAttributes<HTMLHeadElement>` */
  type HeadPropsWithoutRef = React.HTMLAttributes<HTMLHeadElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>` */
  type HRProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>
  /** Equivalent to `React.HTMLAttributes<HTMLHRElement>` */
  type HRPropsWithoutRef = React.HTMLAttributes<HTMLHRElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>` */
  type HtmlProps = React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
  /** Equivalent to `React.HtmlHTMLAttributes<HTMLHtmlElement>` */
  type HtmlPropsWithoutRef = React.HtmlHTMLAttributes<HTMLHtmlElement>
  /** Equivalent to `React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>` */
  type IFrameProps = React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>
  /** Equivalent to `React.IframeHTMLAttributes<HTMLIFrameElement>` */
  type IFramePropsWithoutRef = React.IframeHTMLAttributes<HTMLIFrameElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>` */
  type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  /** Equivalent to `React.ImgHTMLAttributes<HTMLImageElement>` */
  type ImgPropsWithoutRef = React.ImgHTMLAttributes<HTMLImageElement>
  /** Equivalent to `React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>` */
  type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  /** Equivalent to `React.InputHTMLAttributes<HTMLInputElement>` */
  type InputPropsWithoutRef = React.InputHTMLAttributes<HTMLInputElement>
  /** Equivalent to `React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>` */
  type InsProps = React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>
  /** Equivalent to `React.InsHTMLAttributes<HTMLModElement>` */
  type InsPropsWithoutRef = React.InsHTMLAttributes<HTMLModElement>
  /** Equivalent to `React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>` */
  type DelProps = React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>
  /** Equivalent to `React.DelHTMLAttributes<HTMLModElement>` */
  type DelPropsWithoutRef = React.DelHTMLAttributes<HTMLModElement>
  /** Equivalent to `React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>` */
  type LabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  /** Equivalent to `React.LabelHTMLAttributes<HTMLLabelElement>` */
  type LabelPropsWithoutRef = React.LabelHTMLAttributes<HTMLLabelElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>` */
  type LegendProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>
  /** Equivalent to `React.HTMLAttributes<HTMLLegendElement>` */
  type LegendPropsWithoutRef = React.HTMLAttributes<HTMLLegendElement>
  /** Equivalent to `React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>` */
  type LIProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  /** Equivalent to `React.LiHTMLAttributes<HTMLLIElement>` */
  type LIPropsWithoutRef = React.LiHTMLAttributes<HTMLLIElement>
  /** Equivalent to `React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>` */
  type LinkProps = React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>
  /** Equivalent to `React.LinkHTMLAttributes<HTMLLinkElement>` */
  type LinkPropsWithoutRef = React.LinkHTMLAttributes<HTMLLinkElement>
  /** Equivalent to `React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>` */
  type MapProps = React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>
  /** Equivalent to `React.MapHTMLAttributes<HTMLMapElement>` */
  type MapPropsWithoutRef = React.MapHTMLAttributes<HTMLMapElement>
  /** Equivalent to `React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>` */
  type MetaProps = React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>
  /** Equivalent to `React.MetaHTMLAttributes<HTMLMetaElement>` */
  type MetaPropsWithoutRef = React.MetaHTMLAttributes<HTMLMetaElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>` */
  type ObjectProps = React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>
  /** Equivalent to `React.ObjectHTMLAttributes<HTMLObjectElement>` */
  type ObjectPropsWithoutRef = React.ObjectHTMLAttributes<HTMLObjectElement>
  /** Equivalent to `React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>` */
  type OLProps = React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>
  /** Equivalent to `React.OlHTMLAttributes<HTMLOListElement>` */
  type OLPropsWithoutRef = React.OlHTMLAttributes<HTMLOListElement>
  /** Equivalent to `React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>` */
  type OptGroupProps = React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
  /** Equivalent to `React.OptgroupHTMLAttributes<HTMLOptGroupElement>` */
  type OptGroupPropsWithoutRef = React.OptgroupHTMLAttributes<HTMLOptGroupElement>
  /** Equivalent to `React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>` */
  type OptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
  /** Equivalent to `React.OptionHTMLAttributes<HTMLOptionElement>` */
  type OptionPropsWithoutRef = React.OptionHTMLAttributes<HTMLOptionElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>` */
  type PProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  /** Equivalent to `React.HTMLAttributes<HTMLParagraphElement>` */
  type PPropsWithoutRef = React.HTMLAttributes<HTMLParagraphElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>` */
  type ParamProps = React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>
  /** Equivalent to `React.ParamHTMLAttributes<HTMLParamElement>` */
  type ParamPropsWithoutRef = React.ParamHTMLAttributes<HTMLParamElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>` */
  type PreProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  /** Equivalent to `React.HTMLAttributes<HTMLPreElement>` */
  type PrePropsWithoutRef = React.HTMLAttributes<HTMLPreElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>` */
  type ProgressProps = React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>
  /** Equivalent to `React.ProgressHTMLAttributes<HTMLProgressElement>` */
  type ProgressPropsWithoutRef = React.ProgressHTMLAttributes<HTMLProgressElement>
  /** Equivalent to `React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>` */
  type BlockQuoteProps = React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
  /** Equivalent to `QuotePropsWithoutRef` and `React.BlockquoteHTMLAttributes<HTMLQuoteElement>` */
  type BlockQuotePropsWithoutRef = React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>` */
  type QProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
  /** Equivalent to `QuotePropsWithoutRef` and `React.HTMLAttributes<HTMLQuoteElement>` */
  type QPropsWithoutRef = React.HTMLAttributes<HTMLQuoteElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>` */
  type CiteProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
  /** Equivalent to `QuotePropsWithoutRef` and `React.HTMLAttributes<HTMLQuoteElement>` */
  type CitePropsWithoutRef = React.HTMLAttributes<HTMLQuoteElement>
  /** Equivalent to `React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>` */
  type SlotProps = React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>
  /** Equivalent to `React.SlotHTMLAttributes<HTMLSlotElement>` */
  type SlotPropsWithoutRef = React.SlotHTMLAttributes<HTMLSlotElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>` */
  type ScriptProps = React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>
  /** Equivalent to `React.ScriptHTMLAttributes<HTMLScriptElement>` */
  type ScriptPropsWithoutRef = React.ScriptHTMLAttributes<HTMLScriptElement>
  /** Equivalent to `ScriptProps` and `React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>` */
  type NoScriptProps = ScriptProps
  /** Equivalent to `ScriptPropsWithoutRef` and `React.ScriptHTMLAttributes<HTMLScriptElement>` */
  type NoScriptPropsWithoutRef = ScriptPropsWithoutRef
  /** Equivalent to `React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>` */
  type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
  /** Equivalent to `React.SelectHTMLAttributes<HTMLSelectElement>` */
  type SelectPropsWithoutRef = React.SelectHTMLAttributes<HTMLSelectElement>
  /** Equivalent to `React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>` */
  type SourceProps = React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
  /** Equivalent to `React.SourceHTMLAttributes<HTMLSourceElement>` */
  type SourcePropsWithoutRef = React.SourceHTMLAttributes<HTMLSourceElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>` */
  type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  /** Equivalent to `React.HTMLAttributes<HTMLSpanElement>` */
  type SpanPropsWithoutRef = React.HTMLAttributes<HTMLSpanElement>
  /** Equivalent to `React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>` */
  type StyleProps = React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>
  /** Equivalent to `React.StyleHTMLAttributes<HTMLStyleElement>` */
  type StylePropsWithoutRef = React.StyleHTMLAttributes<HTMLStyleElement>
  /** Equivalent to `React.SVGProps<SVGSVGElement>` */
  type SVGProps = React.SVGProps<SVGSVGElement>
  /** Equivalent to `React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>` */
  type TableProps = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>
  /** Equivalent to `React.TableHTMLAttributes<HTMLTableElement>` */
  type TablePropsWithoutRef = React.TableHTMLAttributes<HTMLTableElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>` */
  type ColProps = React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
  /** Equivalent to `React.ColHTMLAttributes<HTMLTableColElement>` */
  type ColPropsWithoutRef = React.ColHTMLAttributes<HTMLTableColElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>` */
  type ColGroupProps = React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
  /** Equivalent to `React.ColgroupHTMLAttributes<HTMLTableColElement>` */
  type ColGroupPropsWithoutRef = React.ColgroupHTMLAttributes<HTMLTableColElement>
  /** Equivalent to `React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>` */
  type TDProps = React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
  /** Equivalent to `React.TdHTMLAttributes<HTMLTableDataCellElement>` */
  type TDPropsWithoutRef = React.TdHTMLAttributes<HTMLTableDataCellElement>
  /** Equivalent to `React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>` */
  type THProps = React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
  /** Equivalent to `React.ThHTMLAttributes<HTMLTableHeaderCellElement>` */
  type THPropsWithoutRef = React.ThHTMLAttributes<HTMLTableHeaderCellElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>` */
  type TRProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
  /** Equivalent to `React.HTMLAttributes<HTMLTableRowElement>` */
  type TRPropsWithoutRef = React.HTMLAttributes<HTMLTableRowElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>` */
  type TableSectionProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
  /** Equivalent to `React.HTMLAttributes<HTMLTableSectionElement>` */
  type TableSectionPropsWithoutRef = React.HTMLAttributes<HTMLTableSectionElement>
  /** Equivalent to `TableSectionProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>` */
  type THeadProps = TableSectionProps
  /** Equivalent to `TableSectionPropsWithoutRef` and `React.HTMLAttributes<HTMLTableSectionElement>` */
  type THeadPropsWithoutRef = TableSectionPropsWithoutRef
  /** Equivalent to `TableSectionProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>` */
  type TBodyProps = TableSectionProps
  /** Equivalent to `TableSectionPropsWithoutRef` and `React.HTMLAttributes<HTMLTableSectionElement>` */
  type TBodyPropsWithoutRef = TableSectionPropsWithoutRef
  /** Equivalent to `TableSectionProps` and `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>` */
  type TFootProps = TableSectionProps
  /** Equivalent to `TableSectionPropsWithoutRef` and `React.HTMLAttributes<HTMLTableSectionElement>` */
  type TFootPropsWithoutRef = TableSectionPropsWithoutRef
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>` */
  type TemplateProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>
  /** Equivalent to `React.HTMLAttributes<HTMLTemplateElement>` */
  type TemplatePropsWithoutRef = React.HTMLAttributes<HTMLTemplateElement>
  /** Equivalent to `React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>` */
  type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  /** Equivalent to `React.TextareaHTMLAttributes<HTMLTextAreaElement>` */
  type TextAreaPropsWithoutRef = React.TextareaHTMLAttributes<HTMLTextAreaElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>` */
  type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>
  /** Equivalent to `React.HTMLAttributes<HTMLTitleElement>` */
  type TitlePropsWithoutRef = React.HTMLAttributes<HTMLTitleElement>
  /** Equivalent to `React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>` */
  type TrackProps = React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>
  /** Equivalent to `React.TrackHTMLAttributes<HTMLTrackElement>` */
  type TrackPropsWithoutRef = React.TrackHTMLAttributes<HTMLTrackElement>
  /** Equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>` */
  type ULProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
  /** Equivalent to `React.HTMLAttributes<HTMLUListElement>` */
  type ULPropsWithoutRef = React.HTMLAttributes<HTMLUListElement>
  /** Equivalent to `React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>` */
  type VideoProps = React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
  /** Equivalent to `React.VideoHTMLAttributes<HTMLVideoElement>` */
  type VideoPropsWithoutRef = React.VideoHTMLAttributes<HTMLVideoElement>
  /** Equivalent to `React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>` */
  type WebViewProps = React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>
  /** Equivalent to `React.WebViewHTMLAttributes<HTMLWebViewElement>` */
  type WebViewPropsWithoutRef = React.WebViewHTMLAttributes<HTMLWebViewElement>
}

export {}
