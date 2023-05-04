import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark
};

export const NavLinks = [
  {
    name: "الرئيسية",
    url: "/",
    
  },
  {
    name: "من نحن",
    url: "/about"
  },
  {
    name: "خدماتنا",
    url: "#",
    subItems: [
      {
        name: "تطوير التطبيقات",
        url: "/app-development"
      },
      {
        name: "تحسين محركات البحث",
        url: "/seo"
      },
      {
        name: "التسويق الرقمي",
        url: "/digital-marketing"
      },
      {
        name: "تصميم الجرافيك",
        url: "/graphic-design"
      },
      {
        name: "تطوير المواقع الالكترونية",
        url: "/web-development"
      }
    ]
   
  },
  {
    name: "الاعمال",
    url: "/portfolio",
  },
  // {
  //   name: "المدونة",
  //   url: "/blog",
  
  // },
 
  {
    name: "اتصل بنا",
    url: "/contact"
  }
];

const sliderOne01 = "http://layerdrops.com/meipalyhtml/demo/images/slider/1_1.jpg";
const sliderOne02 = "http://layerdrops.com/meipalyhtml/demo/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "مرحبا بك في الاوائل",
    title: "افضل شركة للتطوير والتسويق الالكتروني والتدريب",
    button: {
      label: "انشئ موقعآ آفضل ومميز بامكانيات عالية",
      url: "/about"
    }
  },
  {
    image: sliderOne02,
    subTitle: "مرحبا بك في الاوائل",
    title: "افضل شركة للتطوير والتسويق الالكتروني والتدريب",
    button: {
      label: "انشئ موقعا افضل ومميز بامكانيات عالية",
      url: "/about"
    }
  }
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training."
};

export const ContactInfosList = [
  {
    title: "austin",
    infos: [
      {
        name: "22 Texas West Hills"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "boston",
    infos: [
      {
        name: "5 Federal Street Boston"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "new york",
    infos: [
      {
        name: "8th Broklyn New York"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "baltimore",
    infos: [
      {
        name: "3 Lombabr 50 baltimore"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  }
];

export const ContactFormTitle = {
  subTitle: "تواصل معنا",
  title: "لخدمتك بشكل افضل من قبل مستشارينا المختصين",
  description:
    "نحن ملتزمون بتوفير خدمة استثنائية لعملائنا، في حين نقدم لموظفينا أفضل التدريبات. "
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single"
  }
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  }
];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";

export const PortfolioData = [
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio01,
    url: "/portfolio-details"
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio02,
    url: "/portfolio-details"
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio03,
    url: "/portfolio-details"
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio04,
    url: "/portfolio-details"
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio05,
    url: "/portfolio-details"
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio06,
    url: "/portfolio-details"
  }
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" }
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Design Styles",
  text:
    " Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci dolors sit amet elit amet. ",
  client: "Jessica Brown",
  categories: [
    {
      name: "Graphic,",
      url: "#"
    },
    {
      name: "Illustrations,",
      url: "#"
    }
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "#"
    },
    {
      name: "Twitter",
      url: "#"
    },
    {
      name: "Linkedin",
      url: "#"
    }
  ]
};

export const ServicePostData = [
  {
    title: "Modren Design",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-settings",
    url: "/service-details"
  },
  {
    title: "Digital products",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-transfer",
    url: "/service-details"
  },
  {
    title: "Marketing Strategy",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-pie-chart",
    url: "/service-details"
  }
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "نصمم منتجات رقمية تساعد على نمو الأعمال.",
    subTitle: "خدمات تطويرية وتسويقية حديثة واستراتيجيات مبتكرة ومدروسة لمشروعك",
    text:
      "نحن ملتزمون بتقديم خدمة استثنائية لعملائنا مع تقديم أفضل التدريبات لموظفينا."
  },
  posts: [
    {
      title: "تطوير المواقع الإلكترونية",
      iconName: "mei-web-design",
      url: "/service-details"
    },
    {
      title: "تصميم الجرافيكس",
      iconName: "mei-computer-graphic",
      url: "/service-details"
    },
    {
      title: "التسويق الرقمي",
      iconName: "mei-development-1",
      url: "/service-details"
    },
    {
      title: "تحسين محركات البحث",
      iconName: "mei-development",
      url: "/service-details"
    },
    {
      title: "تطوير التطبيقات",
      iconName: "mei-app-development",
      url: "/service-details"
    }
  ]
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details"
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/service-details"
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/service-details"
    }
  ]
};

export const FunfactData = [
  {
    title: "مشاريع تطويرية",
    countNumber: 325
  },
  {
    title: "العملاء النشطاء",
    countNumber: 60
  },
  {
    title: "الاعمال",
    countNumber: 626
  },
  {
    title: "عملاؤنا السعداء",
    countNumber: 300
  }
];

const trustClient01 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "نحن موثوقون من قبل أكثر من 600 عميل.",
  text:
    "نحن نفتخر بموثوقية خدماتنا وبالثقة التي يولوها لنا عملاؤنا، حيث أننا قد حققنا ثقتهم من خلال تقديم خدمات عالية الجودة والتي تلبي احتياجاتهم بكل دقة واحترافية. ومن خلال خبرتنا الواسعة والتي تمتد لعدة سنوات، وفريق العمل المؤهل والمتخصص في مجالات عدة، تمكنا من تقديم خدمات مميزة وفعالة لأكثر من 600 عميل، مما يدل على جودة عملنا واحترافيته. ونحن نعد عملائنا بالاستمرار في تقديم الخدمات المميزة والموثوقة التي تلبي احتياجاتهم المتغيرة، ونسعى دوماً لتحقيق رضاهم وإرضاءهم بكل ما نقدمه.",
  url: "/about"
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "عملاؤنا",
    subTitle: "عملاؤنا",
    text:
      "احترامًا الاتفاق والسرية التامة للعميل لم نقم باضافة عملائنا في موقعنا"
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01
    },
    {
      url: "#",
      image: ClientCarousel02
    },
    {
      url: "#",
      image: ClientCarousel03
    },
    {
      url: "#",
      image: ClientCarousel04
    },
    {
      url: "#",
      image: ClientCarousel05
    }
  ]
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "انشئ موقعًا أفضل بسرعة أكبر مع الاوائل.",
    subTitle: "تعرف علينا."
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "تأسست الشركة.",
    number: 2019
  }
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "خبراء في مجالهم",
    subTitle: "تعرف على فريقنا",
    text:
      "نحن ملتزمون بتقديم خدمة استثنائية لعملائنا مع تقديم أفضل التدريبات لموظفينا."
  },
  posts: [
    {
      image: team01,
      name: "Herman Fisher",
      designation: "General Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team02,
      name: "Charlie Kennedy",
      designation: "Brand Designer",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team03,
      name: "Helena Adkins",
      designation: "Seinor Designer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team04,
      name: "Virginia Farmer",
      designation: "Marketing Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team05,
      name: "Philip Hansen",
      designation: "Co Founder",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    }
  ]
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Make amazing websites without touching cod",
    subTitle: "the only design you need",
    text:
      "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purus aliquet."
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "Watch Video"
  }
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Subscribe us",
    subTitle: "don’t miss out our latest updates"
  }
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers"
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    }
  ]
};

const featureTab01 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/c1.jpg";
const featureTab02 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/c2.jpg";
const featureTab03 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "لماذا تختارنا؟",
    subTitle: "فوائدنا.",
    text:
      "نحن ملتزمون بتوفير خدمة استثنائية لعملائنا، مع تقديم أفضل التدريبات لموظفينا."
  },
  posts: [
    {
      title: "رسالتنا",
      content:
        "عمل خدمات تطويرية و تسویقیة فريدة و مبتکرة تعطي التميز والإنتاجية للعميل وتجعله قادر على المنافسة و الإستقرار في السوق. ",
      image: featureTab01,
      // lists: [
      //   {
      //     item: "Self-contained, state-of-the-art time clock"
      //   },
      //   {
      //     item: "Scalability of up to 500 employees per time clock"
      //   },
      //   {
      //     item: "The ability to connect up to 32 time clocks"
      //   },
      //   {
      //     item: "Employee self-enrollment"
      //   },
      //   {
      //     item: "Payroll integration"
      //   },
      //   {
      //     item: "Built-in backup camera to verify failed punches"
      //   }
      // ]
    },
    {
      title: "رؤيتنا",
      content:
        "أن نكون الوكالة الأولى في المملكة العربية السعودية و الخليج في تقديم ما يحتاجة العميل في كل ما يخص التطویر و التسويق وزيادة الدخل و عدد العملاء.",
      image: featureTab02,
      // lists: [
      //   {
      //     item: "Self-contained, state-of-the-art time clock"
      //   },
      //   {
      //     item: "Scalability of up to 500 employees per time clock"
      //   },
      //   {
      //     item: "The ability to connect up to 32 time clocks"
      //   },
      //   {
      //     item: "Employee self-enrollment"
      //   },
      //   {
      //     item: "Payroll integration"
      //   },
      //   {
      //     item: "Built-in backup camera to verify failed punches"
      //   }
      // ]
    },
    {
      title: "هدفنا",
      content:
        "نحن نهدف إلى تقديم خدمات تصميم المواقع والتسويق الإلكتروني عالية الجودة للعملاء، بما يمكّنهم من تعزيز حضورهم الرقمي وزيادة نسبة التحويل لديهم. كما نسعى إلى توفير بيئة عمل محفزة وتدريبات مستمرة لفريق العمل، لتمكينهم من تقديم خدمات متميزة وتحقيق رضا العملاء والنجاح المشترك.",
      image: featureTab03,
      // lists: [
      //   {
      //     item: "Self-contained, state-of-the-art time clock"
      //   },
      //   {
      //     item: "Scalability of up to 500 employees per time clock"
      //   },
      //   {
      //     item: "The ability to connect up to 32 time clocks"
      //   },
      //   {
      //     item: "Employee self-enrollment"
      //   },
      //   {
      //     item: "Payroll integration"
      //   },
      //   {
      //     item: "Built-in backup camera to verify failed punches"
      //   }
      // ]
    }
  ]
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "الأشياء العظيمة في الأعمال التجارية لا تتم بواسطة شخص واحد.",
  specialText: "تتم بواسطة فريق من الأشخاص.  ",
  text:
    "نحن ملتزمون بتوفير خدمة استثنائية لعملائنا، مع تقديم أفضل التدريبات لموظفينا. "
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "نبذةعن اعمالنا المميزة لعملائنا",
    subTitle: "معرض أعمالنا",
    text:
      "نحن ملتزمون بتقديم خدمة استثنائية لعملائنا مع تقديم أفضل التدريبات لموظفينا."
  }
};

const video02 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "تجربة رقمية",
    subTitle: "كيف نعمل؟",
    text:
      "نحن ملتزمون بتقديم خدمة استثنائية لعملائنا مع تقديم أفضل التدريبات لموظفينا."
  },
  video: {
    title: "شاهد الفيديو",
    ID: "y2Eqx6ys1hQ",
    image: video02
  }
};

const aboutTwo01 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/2.jpg";
const aboutTwo02 = "http://layerdrops.com/meipalyhtml/demo/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "من نحن؟",
    subTitle: "مرحبًا بك في وكالة الاوائل لتصميم المواقع",
    text:
      "وكالة تطوير و تسويق تأسست في مدينة الدمام عام 2019م وبفضل الله اليوم لدينا عدد كبير من الأفرع إبتداء من الرياض و جدة وإنتهاء بـ أبها و جازان ، ما يميزنا الخبرة و السرعة با الإضافة إلى الكفائه في العمل ، حيث نملك فريقاً لدية خبرة بعشرات السنين في مجال التطوير و التسويق الإلكتروني وكذالك لدينا ما يميزنا في تقديم الحلول و الإستشارات في مجال الاتصال التسويقي من كتابة المحتوى، والتصاميم الإبداعية، وتصميم وتطوير المواقع الالكترونية، وإدارة حسابات التواصل الاجتماعي، وانشاء الإعلانات الترويجية والمطبوعة، وعمل الخطط التسويقية وغيرها من الخدمات. نطمح دائما للتوسع وإيجاد أفضل وأنسب الحلول لعملائنا بناءً على احتياج كل عميل بابتكار طرق إبداعية وخطط تسويقية لإضافة بصمتكم في التسويق الرقمي وجذب المزيد من العملاء."
  },
  button: {
    label: "المزيد",
    url: "#"
  },
  gallery: [aboutTwo01, aboutTwo02]
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "real experience",
    subTitle: "our core features",
    text:
      " We are committed to providing our customers with exceptional service while offering our employees the best training. "
  },
  posts: [
    {
      title: "No Coding Skills Require",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "Online Documentation",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "SEO Optimized",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    }
  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01
  }
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio"
  },
  {
    label: "Reqeust a free quote",
    url: "/contact"
  }
];
