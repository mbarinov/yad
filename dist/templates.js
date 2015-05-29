this["YAD"] = this["YAD"] || {};
this["YAD"]["templates"] = this["YAD"]["templates"] || {};
this["YAD"]["templates"]["dropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.item,depth0,{"name":"item","hash":{"avatars":(depths[1] != null ? depths[1].avatars : depths[1])},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"dropdown__item\">No data</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class=\"dropdown__inner\">\n";
  stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias1),(options={"name":"items","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.items) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias1),(options={"name":"items","hash":{},"fn":this.noop,"inverse":this.program(3, data, 0, blockParams, depths),"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.items) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true,"useDepths":true});
Handlebars.registerPartial("item", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"thumb\">\n            <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.thumb || (depth0 != null ? depth0.thumb : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"thumb","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"sub\">"
    + this.escapeExpression(((helper = (helper = helpers.sub || (depth0 != null ? depth0.sub : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"sub","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"dropdown__item\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.avatars : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.avatars : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"clear\"></div>\n</div>";
},"useData":true}));
this["YAD"]["templates"]["input"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input class=\"dropdown__input\" type=\"text\" value=\"\" placeholder=\"Введите текст\">\n<div class=\"clear\"></div>";
},"useData":true});