this["YAD"] = this["YAD"] || {};
this["YAD"]["templates"] = this["YAD"]["templates"] || {};
this["YAD"]["templates"]["dropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    return "    <div class=\"dropdown__item\">\n        <div class=\"name\">"
    + this.escapeExpression(helpers.lookup.call(depth0,depth0,(depths[1] != null ? depths[1].prop : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "</div>\n    </div>\n";
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
},"useData":true,"useDepths":true});