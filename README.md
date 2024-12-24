# Zero2Aura 🚀

منصة تعليمية متطورة لتعلم البرمجة باللغة العربية، مع تصميم عصري وتجربة مستخدم فريدة.

## المميزات ✨

- تصميم عصري وحديث
- دعم كامل للغة العربية مع واجهة RTL
- تمارين برمجة تفاعلية
- دروس فيديو عالية الجودة
- نظام تتبع التقدم الذكي
- نظام مصادقة آمن
- ميزات مجتمعية متقدمة
- تصميم متجاوب لجميع الأجهزة

## التقنيات المستخدمة 🛠

- الواجهة الأمامية: React.js مع Material-UI
- الخادم: Python FastAPI
- قاعدة البيانات: PostgreSQL
- المصادقة: JWT

## تعليمات التثبيت 📝

1. تثبيت المتطلبات:
   ```bash
   # الخادم
   pip install -r requirements.txt
   
   # الواجهة الأمامية
   cd frontend
   npm install
   ```

2. إعداد متغيرات البيئة:
   قم بإنشاء ملف `.env` في المجلد الرئيسي:
   ```
   DATABASE_URL=postgresql://user:password@localhost/zero2aura_db
   SECRET_KEY=your_secret_key
   ```

3. تشغيل التطبيق:
   ```bash
   # الخادم
   uvicorn main:app --reload

   # الواجهة الأمامية
   cd frontend
   npm start
   ```
