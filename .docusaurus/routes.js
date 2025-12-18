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
    path: '/demo/docs',
    component: ComponentCreator('/demo/docs', '8b9'),
    routes: [
      {
        path: '/demo/docs',
        component: ComponentCreator('/demo/docs', 'c94'),
        routes: [
          {
            path: '/demo/docs',
            component: ComponentCreator('/demo/docs', '137'),
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
                component: ComponentCreator('/demo/docs/intro', '721'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/demo/docs/tutorial-basics/congratulations', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-blog-post', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-document', '24e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/demo/docs/tutorial-basics/create-a-page', '5bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/demo/docs/tutorial-basics/deploy-your-site', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/demo/docs/tutorial-basics/markdown-features', '016'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/demo/docs/tutorial-extras/manage-docs-versions', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/demo/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/demo/docs/tutorial-extras/translate-your-site', '9b8'),
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
