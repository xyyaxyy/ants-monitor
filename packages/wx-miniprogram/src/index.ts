import { InitOptions } from 'ants-monitor-types';
import { isWxMiniEnv } from 'ants-monitor-utils';
import { setupReplace } from './load';
import { initOptions, log } from 'ants-monitor-core';
import { sendTrackData, track } from './initiative';
import { SDK_NAME, SDK_VERSION } from 'ants-monitor-shared';
import { MonitorVue } from 'ants-monitor-vue';
import { errorBoundaryReport } from 'ants-monitor-react';

export function init(options: InitOptions = {}) {
  if (!isWxMiniEnv) return;
  initOptions(options);
  setupReplace();
  Object.assign(wx, { monitorLog: log, SDK_NAME, SDK_VERSION });
}
export { log, sendTrackData, track, MonitorVue, errorBoundaryReport };
