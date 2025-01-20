import express from "express"; // استيراد مكتبة express
import ytdl from "ytdl-core"; // استيراد مكتبة ytdl-core
import cors from "cors"; // استيراد مكتبة cors

// إنشاء تطبيق Express
const app = express();
const port = 5000;

// تفعيل CORS لجميع الأصول
app.use(cors());

// تعيين نوع محتوى JSON
app.use(express.json());

// API endpoint لتحميل الفيديو
app.post("/download", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send("رابط الفيديو مفقود");
  }

  try {
    console.log("محاولة تحميل الفيديو من الرابط: ", url);
    const info = await ytdl.getInfo(url);
    const videoStream = ytdl(url, { quality: "highest" });

    // إرسال الفيديو للمستخدم كـ رابط قابل للتنزيل
    res.header(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp4"`
    );
    videoStream.pipe(res);
  } catch (error) {
    console.error("حدث خطأ أثناء تحميل الفيديو:", error);
    res.status(500).send("حدث خطأ أثناء تحميل الفيديو");
  }
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم يعمل على http://localhost:${port}`);
});
