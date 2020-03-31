module.exports = {
  themeConfig: {
   nav: [
       { text: '博客', link: '/' },
       { text: 'Github', link: 'https://github.com/zdj0311' },
   ],
   sidebar: {
       '/': [
           {
               title:'javascript',
               children:[
                   'js',
               ]
           },
           {
            title:'vue',
            children:[
                'vue',
            ]
        },
        {
            title:'V8',
            children:[
                'V8',
            ]
        },
       ]
       },
   sidebarDepth: 2,
   lastUpdated: 'Last Updated', 
}
}