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
                  buildHookId: '5e46992b5691962598187994',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a8x9npip',
                  apiId: '5c417be2-344c-4104-8715-0fb78ba6ecd5'
                },
                {
                  buildHookId: '5e46992b140b493645daac11',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4xmvmzut',
                  apiId: '7d021e57-d4c3-4438-91dc-56e873d2b0e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/appility/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4xmvmzut.netlify.com', category: 'apps'}
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
