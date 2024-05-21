import { Severity } from 'ants-monitor-utils';
import { BreadCrumbTypes } from 'ants-monitor-shared';
import { ReportDataType } from './transportData';
import { Replace } from './replace';
import { TNumStrObj } from './common';

export interface BreadcrumbPushData {
  /**
   * 事件类型
   */
  type: BreadCrumbTypes;
  data: ReportDataType | Replace.IRouter | Replace.TriggerConsole | TNumStrObj;
  category?: string;
  time?: number;
  level: Severity;
}
