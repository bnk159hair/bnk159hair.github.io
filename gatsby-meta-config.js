module.exports = {
  title: `bnk159hair.github.io`,
  description: `하이영의 일지`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://bnk159hair.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김하영`,
    bio: {
      role: `백엔드 개발자`,
      description: ['계속해서 성장하는', '빠르게 배울 수 있는', '협업을 중시하는'],
      thumbnail: 'Hiyoung.jpg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/bnk159hair`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.01 ~',
        activity: 'SSAFY(삼성청년SW아카데미) 9기',
      },
      {
        date: '2023.09 ~ 2023.09',
        activity: '신한은행 해커톤',
      },
      {
        date: '2021.07 ~ 2022.05',
        activity: '산학연계 팀프로젝트',
      },
      {
        date: '2017.03 ~ 2023.02',
        activity: '컴퓨터정보공학 전공',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
      {
        title: '태산 - 통합 저축 플랫폼 (자세한 내용) ->',
        description:
          '사용자의 소비습관 관리를 통해 잘못된 소비 습관을 개선하고 소액으로 저축을 진행하여 부담없이 꾸준히 저축할 수 있는 플랫폼입니다.',
        techStack: [
          '23.08 ~ 23.10',
          'SpringBoot',
          'Java',
          'JPA',
          'QueryDSL',
          'MySQL',
          'Python',
          'FastAPI',
          'FastTEXT',
        ],
        thumbnailUrl: '태산 웹화면.png',
        links: {
          post: '/Projects/taesan',
          github: 'https://github.com/bnk159hair/Taesan',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: '모아일기 - 아이들을 위한 용돈일기장 서비스 (자세한 내용) ->',
        description:
          '아이들에게 어렵게 느껴지는 용돈 기입장 대신 거래내역과 일기장을 융합하여 더욱 손쉽게 아이들의 올바른 소비습관을 기르게 해줄 수 있는 서비스입니다.',
        techStack: [
          '23.09 ~ 23.09',
          'SpringBoot',
          'Java',
          'JPA',
          'QueryDSL',
          'MySQL',
          'Docker',
          'Jenkins',
        ],
        thumbnailUrl: '모아일기.png',
        links: {
          post: '/Projects/moa-diary',
          github: 'https://github.com/Shinhan-Hackathon-IJOAH/IJoah',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: '어울림 - 교외 지역 아이들을 위한 화상 미팅 서비스 (자세한 내용) ->',
        description:
          '또래 친구를 만나기 힘든 교외 지역 아이들을 대상으로 랜덤 화상 미팅 서비스를 통해 친구를 만나고 사귈 수 있는 서비스입니다.',
        techStack: ['23.07 ~ 23.08', 'SpringBoot', 'Java', 'JPA', 'MySQL', 'Docker', 'Jenkins'],
        thumbnailUrl: 'eoulim-project.png',
        links: {
          post: '/Projects/eoulim',
          github: 'https://github.com/bnk159hair/Eoullim',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'JourneyJoy - 여행 계획 작성 서비스',
        description:
          '국내 관광지 공공데이터를 기반으로 원하는 지역의 여행지를 조회할 수 있으며 여행지를 선택하여 플랜(여행 계획)을 작성하고 플랜에 대한 리뷰를 사람들과 공유할 수 있는 서비스를 개발하였습니다. 해당 프로젝트에서 데이터베이스 스키마 설계와 카카오맵 API 연동, 플랜 CRUD, 리뷰 CRUD의 기능 구현을 맡았습니다.',
        techStack: ['23.05 ~ 23.05', 'SpringBoot', 'Vue.js', 'MySQL'],
        thumbnailUrl: 'journeyjoy.png',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: '백혈구 측정 딥러닝 모델 개발',
        description:
          'DVS라는 센서를 통해 모세혈관을 측정하여 백혈구 개수를 카운팅하는 딥러닝 모델 개발을 목표로 수행한 산학연계 팀프로젝트입니다. 해당 프로젝트에서 데이터 시각화 기능을 구현하였습니다.',
        techStack: ['21.07 ~ 22.05', 'Python'],
        thumbnailUrl: '산학연계 팀프로젝트.png',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};
