using System;

using UnityEngine;

namespace CBSL.Logging {

    public static class Logger {

        public static string GetTag<T>() {
            var name = typeof(T).Name.Split('`')[0];
            var hue = (float) name.GetHashCode() % 10000 / 10000;
            var color = Color.HSVToRGB((hue + 1) / 2, 1f, 1f);
            return $"<color=#{ColorUtility.ToHtmlStringRGB(color)}>{name}</color>";
        }
        
        public static string GetTag<T>(string color) => $"<color={color}>{typeof(T).Name}</color>";

        public static void SetLogLevel(LogType level) => Debug.unityLogger.filterLogType = level;

        public static void EnableLogging(bool enable) => Debug.unityLogger.logEnabled = enable;

        public static void SetLogHandler(ILogHandler handler) => Debug.unityLogger.logHandler = handler;

        public static void Info<T>(string message) => Debug.unityLogger.Log(LogType.Log, GetTag<T>(), message);
        public static void Warn<T>(string message) => Debug.unityLogger.Log(LogType.Warning, GetTag<T>(), message);
        public static void Error<T>(string message) => Debug.unityLogger.Log(LogType.Error, GetTag<T>(), message);
        
        public static void Info(string tag, string message) => Debug.unityLogger.Log(LogType.Log, tag, message);
        public static void Warn(string tag, string message) => Debug.unityLogger.Log(LogType.Warning, tag, message);
        public static void Error(string tag, string message) => Debug.unityLogger.Log(LogType.Error, tag, message);
        
    }

}