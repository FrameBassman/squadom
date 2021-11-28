import Vue from 'vue'
// @ts-ignore
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  pageTrackerTemplate: () => {},
  onBeforeTrack: () => {},
  onAfterTrack: () => {},
  onReady: () => {},
  enabled: true,
  disableScriptLoad: false,
  bootstrap: true,
  globalObjectName: "gtag",
  globalDataLayerName: "dataLayer",
  pageTrackerEnabled: true,
  pageTrackerScreenviewEnabled: false,
  pageTrackerSkipSamePath: true,
  defaultGroupName: "default",
  includes: null,
  config: { id: 'G-HMFF9YRREJ' }
})