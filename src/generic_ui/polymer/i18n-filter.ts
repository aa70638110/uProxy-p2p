/// <reference path='../../../../third_party/polymer/polymer.d.ts' />

var ui = ui_context.ui;

declare var PolymerExpressions: any;
PolymerExpressions.prototype.$$ = (language :string, placeholder :string, params?: any) :string => {
  return ui.i18n_t(placeholder, params);
}
