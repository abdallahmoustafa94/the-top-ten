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
        <Layout PageTitle="Service Details Page">
          <HeaderOne />
          <PageBanner title="تطوير التطبيقات" name="تطوير التطبيقات" />
          <ServiceDetails title='تطوير التطبيقات'  content="نحن نوفر خدمات تطوير التطبيقات في المملكة العربية السعودية للعملاء الذين يرغبون في تطوير تطبيقات مبتكرة وعالية الجودة للأجهزة المحمولة والأجهزة اللوحية. نحن نمتلك فريق متخصص من المطورين، يستخدمون أحدث التقنيات والأدوات لتحقيق أفضل النتائج.

نحن نقدم خدمات تطوير التطبيقات الشاملة، بدءًا من تصميم الواجهة الأمامية وصولًا إلى تطوير الخلفية واختبار التطبيق. نحن نهتم بتحقيق رؤية العملاء وتحويلها إلى تطبيقات فريدة وسلسة.

نحن نهتم بتلبية متطلبات العملاء وتوفير حلول مخصصة لتحقيق أهدافهم. نحن نقدم خدمات تطوير التطبيقات المتنوعة، بما في ذلك تطوير تطبيقات الأعمال، وتطوير تطبيقات التجارة الإلكترونية، وتطوير تطبيقات الألعاب، والعديد من الخدمات الأخرى.

نحن نحرص على تقديم تطبيقات ذات جودة عالية وأداء رائع، ونهتم بتقديم تجربة مميزة للمستخدمين. إذا كنت تبحث عن خدمات تطوير التطبيقات في المملكة العربية السعودية، فلا تتردد في الاتصال بنا لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في تحقيق أهدافك في تطوير التطبيقات."/>
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
