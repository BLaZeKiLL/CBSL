using System;
using System.IO;
using System.Text;

using UnityEngine;

using Object = UnityEngine.Object;

namespace CBSL.Logging.Handlers {

    // TODO : Better formating controls
    public class FileHandler : ILogHandler, IDisposable {

        private StreamWriter _stream;

        public FileHandler(string fileName, Encoding encoding) {
            _stream = new StreamWriter(new FileStream(Path.Combine(Application.persistentDataPath, fileName), FileMode.OpenOrCreate, FileAccess.ReadWrite), encoding);
        }

        public void LogFormat(LogType logType, Object context, string format, params object[] args) {
            _stream.WriteLine(format, args);
            _stream.Flush();
        }

        public void LogException(Exception exception, Object context) {
            _stream.WriteLine(exception.Message);
            _stream.Flush();
        }

        public void Dispose() {
            _stream.Dispose();
        }

    }

}