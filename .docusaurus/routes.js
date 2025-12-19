import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/demo/blog',
    component: ComponentCreator('/demo/blog', '9cb'),
    exact: true
  },
  {
    path: '/demo/blog/archive',
    component: ComponentCreator('/demo/blog/archive', '373'),
    exact: true
  },
  {
    path: '/demo/blog/authors',
    component: ComponentCreator('/demo/blog/authors', '74f'),
    exact: true
  },
  {
    path: '/demo/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/demo/blog/authors/all-sebastien-lorber-articles', 'f99'),
    exact: true
  },
  {
    path: '/demo/blog/authors/yangshun',
    component: ComponentCreator('/demo/blog/authors/yangshun', 'aa4'),
    exact: true
  },
  {
    path: '/demo/blog/first-blog-post',
    component: ComponentCreator('/demo/blog/first-blog-post', '02a'),
    exact: true
  },
  {
    path: '/demo/blog/long-blog-post',
    component: ComponentCreator('/demo/blog/long-blog-post', '3ad'),
    exact: true
  },
  {
    path: '/demo/blog/mdx-blog-post',
    component: ComponentCreator('/demo/blog/mdx-blog-post', '294'),
    exact: true
  },
  {
    path: '/demo/blog/tags',
    component: ComponentCreator('/demo/blog/tags', '9e0'),
    exact: true
  },
  {
    path: '/demo/blog/tags/docusaurus',
    component: ComponentCreator('/demo/blog/tags/docusaurus', '64b'),
    exact: true
  },
  {
    path: '/demo/blog/tags/facebook',
    component: ComponentCreator('/demo/blog/tags/facebook', 'ffe'),
    exact: true
  },
  {
    path: '/demo/blog/tags/hello',
    component: ComponentCreator('/demo/blog/tags/hello', '326'),
    exact: true
  },
  {
    path: '/demo/blog/tags/hola',
    component: ComponentCreator('/demo/blog/tags/hola', '230'),
    exact: true
  },
  {
    path: '/demo/blog/welcome',
    component: ComponentCreator('/demo/blog/welcome', 'dfb'),
    exact: true
  },
  {
    path: '/demo/markdown-page',
    component: ComponentCreator('/demo/markdown-page', '3dc'),
    exact: true
  },
  {
    path: '/demo/search',
    component: ComponentCreator('/demo/search', 'a79'),
    exact: true
  },
  {
    path: '/demo/docs',
    component: ComponentCreator('/demo/docs', '824'),
    routes: [
      {
        path: '/demo/docs/1.0',
        component: ComponentCreator('/demo/docs/1.0', '4ca'),
        routes: [
          {
            path: '/demo/docs/1.0',
            component: ComponentCreator('/demo/docs/1.0', '228'),
            routes: [
              {
                path: '/demo/docs/1.0/category/tutorial---basics',
                component: ComponentCreator('/demo/docs/1.0/category/tutorial---basics', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/category/tutorial---extras',
                component: ComponentCreator('/demo/docs/1.0/category/tutorial---extras', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/intro',
                component: ComponentCreator('/demo/docs/1.0/intro', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/congratulations',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/congratulations', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/create-a-blog-post', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/create-a-document', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/create-a-page', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/deploy-your-site', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/demo/docs/1.0/tutorial-basics/markdown-features', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/demo/docs/1.0/tutorial-extras/manage-docs-versions', '79a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/1.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/demo/docs/1.0/tutorial-extras/translate-your-site', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/demo/docs/next',
        component: ComponentCreator('/demo/docs/next', '352'),
        routes: [
          {
            path: '/demo/docs/next',
            component: ComponentCreator('/demo/docs/next', 'f7a'),
            routes: [
              {
                path: '/demo/docs/next/category/tutorial---basics',
                component: ComponentCreator('/demo/docs/next/category/tutorial---basics', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/category/tutorial---extras',
                component: ComponentCreator('/demo/docs/next/category/tutorial---extras', '497'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/category/tutorial---super',
                component: ComponentCreator('/demo/docs/next/category/tutorial---super', '86a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/intro',
                component: ComponentCreator('/demo/docs/next/intro', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/congratulations', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/create-a-blog-post', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/create-a-document', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/create-a-page', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/deploy-your-site', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/demo/docs/next/tutorial-basics/markdown-features', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/demo/docs/next/tutorial-extras/manage-docs-versions', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/demo/docs/next/tutorial-extras/translate-your-site', '520'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/congratulations',
                component: ComponentCreator('/demo/docs/next/tutorial-super/congratulations', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/create-a-blog-post',
                component: ComponentCreator('/demo/docs/next/tutorial-super/create-a-blog-post', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/create-a-document',
                component: ComponentCreator('/demo/docs/next/tutorial-super/create-a-document', '732'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/create-a-page',
                component: ComponentCreator('/demo/docs/next/tutorial-super/create-a-page', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/deploy-your-site',
                component: ComponentCreator('/demo/docs/next/tutorial-super/deploy-your-site', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/next/tutorial-super/markdown-features',
                component: ComponentCreator('/demo/docs/next/tutorial-super/markdown-features', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/demo/docs',
        component: ComponentCreator('/demo/docs', 'a09'),
        routes: [
          {
            path: '/demo/docs',
            component: ComponentCreator('/demo/docs', '768'),
            routes: [
              {
                path: '/demo/docs/category/tutorial---basics',
                component: ComponentCreator('/demo/docs/category/tutorial---basics', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/category/tutorial---extras',
                component: ComponentCreator('/demo/docs/category/tutorial---extras', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/intro',
                component: ComponentCreator('/demo/docs/intro', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/demo/docs/tutorial-basics/congratulations', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-blog-post', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-document', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-page', '444'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/demo/docs/tutorial-basics/deploy-your-site', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/demo/docs/tutorial-basics/markdown-features', '09d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/demo/docs/tutorial-extras/manage-docs-versions', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/demo/docs/tutorial-extras/translate-your-site', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/demo/',
    component: ComponentCreator('/demo/', 'bbb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
