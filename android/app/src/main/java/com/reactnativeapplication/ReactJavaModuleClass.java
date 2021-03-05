package com.reactnativeapplication;

import android.content.Context;
import android.telephony.TelephonyManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class ReactJavaModuleClass extends ReactContextBaseJavaModule {
    public static ReactContext reactContext;
    public ReactJavaModuleClass(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
        reactContext=getReactApplicationContext();

    }

    @NonNull
    @Override
    public String getName() {
        return "ReactJava";
    }

}
