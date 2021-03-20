package com.reactnativeapplication;

import android.content.Context;
import android.telephony.TelephonyManager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

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

    public  void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
    @ReactMethod
    public  void checkForEmulator(){
        TelephonyManager tm = (TelephonyManager)reactContext.getSystemService(Context.TELEPHONY_SERVICE);
        String networkOperator = tm.getNetworkOperatorName();
        WritableMap params = Arguments.createMap();
        if("Android".equals(networkOperator)) {
            params.putString("deviceType", "Emulator");
        }
        else {
            params.putString("deviceType", "Real");
        }
        sendEvent(reactContext, "DeviceCheck", params);
    }
}
