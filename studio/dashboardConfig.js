export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d834783d8941fcd4e2cb9c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bfdarnew',
                  apiId: '6f1c2552-c62e-4a75-b045-15070d4a0885'
                },
                {
                  buildHookId: '61d834783f7d4f21fd9e2b72',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-enptvqji',
                  apiId: '6454b52d-ad4e-484a-8eaf-b93301def08e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ingridoberbuchler/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-enptvqji.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
