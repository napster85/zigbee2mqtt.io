"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95676],{798602:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-670e3bef","path":"/devices/TH1400ZB.html","title":"Sinopé TH1400ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé TH1400ZB control via MQTT","description":"Integrate your Sinopé TH1400ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Setting outdoor temperature","slug":"setting-outdoor-temperature","link":"#setting-outdoor-temperature","children":[]},{"level":3,"title":"Setting outdoor temperature","slug":"setting-outdoor-temperature-1","link":"#setting-outdoor-temperature-1","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Backlight_auto_dim (enum)","slug":"backlight-auto-dim-enum","link":"#backlight-auto-dim-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669914619000},"filePathRelative":"devices/TH1400ZB.md"}')},563073:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var o=a(166252);const n=(0,o._)("h1",{id:"sinope-th1400zb",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#sinope-th1400zb","aria-hidden":"true"},"#"),(0,o.Uk)(" Sinopé TH1400ZB")],-1),s=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),i=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TH1400ZB")],-1),l=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Zigbee low volt thermostat")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, pi_heating_demand), backlight_auto_dim, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TH1400ZB.jpg",alt:"Sinopé TH1400ZB"})])],-1),r=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="setting-outdoor-temperature" tabindex="-1"><a class="header-anchor" href="#setting-outdoor-temperature" aria-hidden="true">#</a> Setting outdoor temperature</h3><p>To set the <em>outdoor temperature</em> (value below the Out label on the thermostat display), you need to send the value to the following MQTT topic:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_outdoor_temperature\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">&#39;Auto_Publish_Outdoor_Temprature&#39;</span>\n  <span class="token key atrule">alias</span><span class="token punctuation">:</span> <span class="token string">&#39;Publish outside temperature&#39;</span>\n  <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;Automatically Publish the outdoor temperature to thermostats&#39;</span>\n  <span class="token key atrule">mode</span><span class="token punctuation">:</span> single\n  <span class="token key atrule">trigger</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> state\n    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> sensor.&lt;OUTDOOR_TEMPERATURE_SENSOR_NAME<span class="token punctuation">&gt;</span>\n  <span class="token key atrule">condition</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token key atrule">action</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish\n    <span class="token key atrule">data</span><span class="token punctuation">:</span>\n      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set/thermostat_outdoor_temperature\n      <span class="token key atrule">payload_template</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ states(&#39;sensor.&lt;OUTDOOR_TEMPERATURE_SENSOR_NAME&gt;&#39;) }}&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-outdoor-temperature-1" tabindex="-1"><a class="header-anchor" href="#setting-outdoor-temperature-1" aria-hidden="true">#</a> Setting outdoor temperature</h3><p>To enable time you need to send a blank message to the following MQTT topic:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_time\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Every time the above message is sent, Zigbee2MQTT will calculate the current time and send it to the thermostat.</em></p><p>If the thermostat loses power, you need to do this again. For Home Assistant users: if you want to avoid remembering to do this, you can add the following <code>action</code> to your <code>Auto_Publish_Outdoor_Temperature</code> automation (noted above).</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish\n    <span class="token key atrule">data</span><span class="token punctuation">:</span>\n      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set/thermostat_time\n      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum" aria-hidden="true">#</a> Backlight_auto_dim (enum)</h3><p>Control backlight dimming behavior. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on demand</code>, <code>sensing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},g=(0,a(983744).Z)(m,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[s,(0,o._)("tbody",null,[i,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(a,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sinopé")])),_:1})])]),d,u,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,o.kq)(" Notes END: Do not edit below this line "),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);