export default {
  github: 'https://github.com/jefliu123/system-design-primer-nextra',
  docsRepositoryBase:
    'https://github.com/jefliu123/system-design-primer-nextra',
  titleSuffix: ' – System Design Primer',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        System Design Primer
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Learn How to Design Large-Scale Systems
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="System Design Primer: Learn How to Design Large-Scale Systems"
      />
      <meta
        name="og:description"
        content="System Design Primer: Learn How to Design Large-Scale Systems"
      />
      <meta name="og:title" content="System Design Primer" />
      <meta name="apple-mobile-web-app-title" content="System Design Primer" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Jeffrey Liu.</>,
  defaultMenuCollapsed: true,
  floatTOC: true,
}
