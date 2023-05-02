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
        <Layout PageTitle="تصميم جرافيكي">
          <HeaderOne />
          <PageBanner title="تصميم جرافيكي" name="تصميم جرافيكي" />
          <ServiceDetails title='تصميم جرافيكي'  content="نحن نقدم خدمات تصميم جرافيك في المملكة العربية السعودية للعملاء الذين يحتاجون إلى تصميمات عالية الجودة للعلامات التجارية والمنتجات والخدمات. نحن نتميز بفريق متخصص من المصممين الذين يستخدمون أحدث التقنيات والأدوات لتحقيق أفضل النتائج.

نحن نهتم بتحقيق رؤية العملاء وتحويلها إلى تصميمات فريدة ومبتكرة. نحن نقدم خدمات تصميم شاملة تشمل تصميم الشعارات، والمواد الإعلانية، والكتيبات، والبطاقات الشخصية، والتصاميم الرقمية والتفاعلية، والعديد من الخدمات الأخرى.

نحن نحرص على تلبية احتياجات العملاء بأفضل الطرق الممكنة، وتقديم الجودة العالية والتسليم في الوقت المحدد. نحن نتعامل مع العملاء بكل احترام ونهتم بتوفير تجربة رائعة لهم.

إذا كنت تبحث عن خدمات تصميم جرافيك في المملكة العربية السعودية، فأنت في المكان الصحيح. اتصل بنا الآن لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في تحقيق أهدافك."/>
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
