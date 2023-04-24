import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">خدماتنا</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="#">تطوير المواقع الالكترونية</a>
            </li>
            <li>
              <a href="#">تصميم الجرافيكس</a>
            </li>
            <li>
              <a href="#">التسويق الالكتروني</a>
            </li>
            <li>
              <a href="#">تحسين محركات البحث</a>
            </li>
            <li>
              <a href="#">تطوير التطبيقات</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>تحتاج لمساعدة؟</h4>
          <p>
          هل تفضل التحدث مع شخص حقيقي بدلاً من ملء النموذج؟ اتصل بالمكتب الرئيسي وسنقوم بتوصيلك مع عضو في الفريق الذي يمكنه المساعدة.
          </p>
          <h2>0599990530</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
