export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6219f4f50877afa82b5e0a12',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-a9kmu939',
                  apiId: 'a6c3fd60-f802-45d0-85c6-b96c4e8be317'
                },
                {
                  buildHookId: '6219f4f5760a2baa28b57087',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-k25bfig7',
                  apiId: '070756a5-4853-4678-9565-2b3c29bdafca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helloreally/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-k25bfig7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
