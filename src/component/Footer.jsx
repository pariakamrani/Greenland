import { MapPinIcon, DevicePhoneMobileIcon, ClockIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="bg-teal-800/90 text-white w-full mt-60 px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-center md:text-right">
        {/* ستون ۱ */}
        <div>
          <h4 className="font-bold text-xl mb-4">درباره ما</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><a href="#" className="hover:text-teal-200">معرفی گل‌آرا‌ها</a></li>
            <li><a href="#" className="hover:text-teal-200">پیوستن به تیم ما</a></li>
            <li><a href="#" className="hover:text-teal-200">تماس با ما</a></li>
            <li><a href="#" className="hover:text-teal-200">وبلاگ (مجله گل و گیاه)</a></li>
            <li><a href="#" className="hover:text-teal-200">گل و گیاه</a></li>
          </ul>
        </div>

        {/* ستون ۲ */}
        <div>
          <h4 className="font-bold text-xl mb-4">گیاه آپارتمانی</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><a href="#" className="hover:text-teal-200">طراحی دکوراسیون با گیاهان</a></li>
            <li><a href="#" className="hover:text-teal-200">جعبه گل</a></li>
            <li><a href="#" className="hover:text-teal-200">تاج گل</a></li>
            <li><a href="#" className="hover:text-teal-200">رزهای جاودان</a></li>
            <li><a href="#" className="hover:text-teal-200">گل با عروسک و شکلات</a></li>
          </ul>
        </div>

        {/* ستون ۳ */}
        <div>
          <h4 className="font-bold text-xl mb-4">دسته‌بندی محصولات</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><a href="#" className="hover:text-teal-200">گل و گیاه لاکچری</a></li>
            <li><a href="#" className="hover:text-teal-200">گیاهان آپارتمانی سایز بزرگ</a></li>
            <li><a href="#" className="hover:text-teal-200">گیاهان گلدار آپارتمانی</a></li>
            <li><a href="#" className="hover:text-teal-200">گیاهان رونده آپارتمانی</a></li>
            <li><a href="#" className="hover:text-teal-200">گل برای هدیه</a></li>
          </ul>
        </div>
      </div>

      {/* خط جداکننده */}
      <div className="border-t border-teal-600 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm">
          <p className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-teal-300" />
            تهران، خیابان کریمخان زند، قرنی بهشهر، پلاک ۵۵ عمارتن
          </p>
          <p className="flex items-center gap-2">
            <DevicePhoneMobileIcon className="w-5 h-5 text-teal-300" />
            ۰۲۱-۴۴۴۷۵۹۳۶
          </p>
          <p className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-teal-300" />
            همه‌روزه ۱۰ الی ۹
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;