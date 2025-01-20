import React, { useState } from "react";
import axios from "axios";

function Test() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleDownload = async () => {
    setStatus("جاري التحميل...");

    try {
      // إرسال رابط الفيديو إلى السيرفر
      const response = await axios.post("http://localhost:5000/download", {
        url,
      });

      // استلام رابط الفيديو المحمل من السيرفر
      setVideoUrl(response.data.videoUrl);
      setStatus("تم العثور على الفيديو. اضغط لتحميله.");
    } catch (error) {
      setStatus("حدث خطأ أثناء التحميل");
    }
  };

  return (
    <div>
      <h1>تحميل فيديو من يوتيوب</h1>
      <input
        type="text"
        placeholder="أدخل رابط الفيديو"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>تحميل الفيديو</button>
      <p>{status}</p>
      {videoUrl && (
        <div>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            اضغط هنا لتحميل الفيديو
          </a>
        </div>
      )}
    </div>
  );
}

export default Test;
