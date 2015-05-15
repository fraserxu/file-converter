file-converter
==============

A client-side app that lets you convert between documents written in various markup languages.

> If you need to convert files from one markup format into another, [pandoc](http://pandoc.org/index.html) is your swiss-army knife. Pandoc can convert documents in markdown, reStructuredText, textile, HTML, DocBook, LaTeX, MediaWiki markup, TWiki markup, OPML, Emacs Org-Mode, Txt2Tags, Microsoft Word docx, EPUB, or Haddock markup to
  * HTML formats: XHTML, HTML5, and HTML slide shows using Slidy, reveal.js, Slideous, S5, or DZSlides.
  * Word processor formats: Microsoft Word docx, OpenOffice/LibreOffice ODT, OpenDocument XML
  * Ebooks: EPUB version 2 or 3, FictionBook2
  * Documentation formats: DocBook, GNU TexInfo, Groff man pages, Haddock markup
  * Page layout formats: InDesign ICML
  * Outline formats: OPML
  * TeX formats: LaTeX, ConTeXt, LaTeX Beamer slides
  * PDF via LaTeX
  * Lightweight markup formats: Markdown, reStructuredText, AsciiDoc, MediaWiki markup, DokuWiki markup, Emacs Org-Mode, Textile
  * Custom formats: custom writers can be written in lua.

You can just drag or select a supported file(eg: txt, markdown...) and then convert it into the format you want(html, pdf, docx...).

![screen shot 2015-05-10 at 10 45 35 pm](https://cloud.githubusercontent.com/assets/1183541/7554306/318cdb54-f766-11e4-9fb7-67b526d93daf.png)

#### Dependencies

* [pandoc](http://pandoc.org/index.html)
* [electron](http://electron.atom.io/)

#### Development

```
$ npm install && npm run watch
$ electron .
```

#### License
MIT
