"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10324],{348849:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-a6e3ebc6","path":"/devices/TS004F.html","title":"TuYa TS004F control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS004F control via MQTT","description":"Integrate your TuYa TS004F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Serialnumber","slug":"serialnumber","link":"#serialnumber","children":[]},{"level":3,"title":"Button positions","slug":"button-positions","link":"#button-positions","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Device modes","slug":"device-modes","link":"#device-modes","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669914619000},"filePathRelative":"devices/TS004F.md"}')},21452:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const a=(0,o._)("h1",{id:"tuya-ts004f",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts004f","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS004F")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS004F")],-1),l=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Wireless switch with 4 buttons")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS004F.jpg",alt:"TuYa TS004F"})])],-1),h=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="serialnumber" tabindex="-1"><a class="header-anchor" href="#serialnumber" aria-hidden="true">#</a> Serialnumber</h3><table><thead><tr><th>Location</th><th>Serial</th></tr></thead><tbody><tr><td>Above the battery</td><td>ESW-OZBA-EU</td></tr></tbody></table><h3 id="button-positions" tabindex="-1"><a class="header-anchor" href="#button-positions" aria-hidden="true">#</a> Button positions</h3><table><thead><tr><th>1</th><th>2</th></tr></thead><tbody><tr><td>3</td><td>4</td></tr></tbody></table><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To enter pairing mode hold button 3 (about 10 seconds) until all 4 LEDs start flashing.</p><h3 id="device-modes" tabindex="-1"><a class="header-anchor" href="#device-modes" aria-hidden="true">#</a> Device modes</h3><p>This device has two modes:</p><ol><li>dimmer mode</li><li>switch mode <em>(to have the 12 actions mentioned below)</em></li></ol><p>To switch between modes hold buttons 2+4 (about 6 seconds) until light 3 flashes once.</p>',11),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_single</code>, <code>1_double</code>, <code>1_hold</code>, <code>2_single</code>, <code>2_double</code>, <code>2_hold</code>, <code>3_single</code>, <code>3_double</code>, <code>3_hold</code>, <code>4_single</code>, <code>4_double</code>, <code>4_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),b={},m=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),r,s,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,o.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);