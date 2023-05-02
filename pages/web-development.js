import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const ServiceDetailsPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="تطوير المواقع الالكترونية">
          <HeaderOne />
          <PageBanner title="تطوير المواقع الالكترونية'" name="تطوير المواقع الالكترونية" />
          <ServiceDetails title='تطوير المواقع الالكترونية'  content="نحن نوفر خدمات تطوير المواقع في المملكة العربية السعودية للعملاء الذين يرغبون في تطوير موقع إلكتروني عالي الجودة والأداء. نحن نمتلك فريق من المطورين المتخصصين والمؤهلين الذين يضمنون تقديم حلول مبتكرة وفعالة للعملاء.

نحن نقدم خدمات تطوير المواقع الإلكترونية السلسة والمتكاملة، بدءًا من تصميم الواجهة الأمامية وصولًا إلى تطوير الخلفية. نحن نستخدم أحدث التقنيات والأدوات لتحقيق تجربة مستخدم ممتازة وتحسين الأداء وسرعة التحميل.

نحن نهتم بتلبية متطلبات العملاء وتوفير حلول مخصصة لتحقيق أهدافهم. نحن نقدم خدمات تطوير المواقع المتنوعة، بما في ذلك تطوير مواقع الإلكترونية السلسة، وتطوير المتاجر الإلكترونية، وتطوير المنصات التفاعلية، والعديد من الخدمات الأخرى.

نحن نحرص على تقديم خدمات عالية الجودة والتسليم في الوقت المحدد، ونهتم بتقديم تجربة مميزة للعملاء. إذا كنت تبحث عن خدمات تطوير المواقع في المملكة العربية السعودية، فلا تتردد في الاتصال بنا لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في تحقيق أهدافك."/>
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
