import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.descubra_se.app',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;