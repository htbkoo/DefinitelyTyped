// Type definitions for epub-gen
// Project: https://github.com/cyrilis/epub-gen
// Definitions by: htbkoo <https://github.com/htbkoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 *  new EpubGen(option [, output])
 *
 *  - options (EpubGenOptions): Options to configure the EpubGen object, with following fields:
 *    - title: Title of the book
 *    - author: Name of the author for the book, string or array, eg. "Alice" or ["Alice", "Bob"]
 *    - publisher: Publisher name (optional)
 *    - cover: Book cover image (optional), File path (absolute path) or web url, eg. "http://abc.com/book-cover.jpg" or "/User/Alice/images/book-cover.jpg"
 *    - output Out put path (absolute path), you can also path output as the second argument when use new , eg: new Epub(options, output)
 *    - version: You can specify the version of the generated EPUB, 3 the latest version (http://idpf.org/epub/30) or 2 the previous version (http://idpf.org/epub/201, for better compatibility with older readers). If not specified, will fallback to 3.
 *    - css: If you really hate our css, you can pass css string to replace our default style. eg: "body{background: #000}"
 *    - fonts: Array of (absolute) paths to custom fonts to include on the book so they can be used on custom css.
 *    - lang: Language of the book in 2 letters code (optional). If not specified, will fallback to en.
 *    - tocTitle: Title of the table of contents. If not specified, will fallback to Table Of Contents.
 *    - appendChapterTitles: Automatically append the chapter title at the beginning of each contents. You can disable that by specifying false.
 *    - customOpfTemplatePath: Optional. For advanced customizations: absolute path to an OPF template.
 *    - customNcxTocTemplatePath: Optional. For advanced customizations: absolute path to a NCX toc template.
 *    - customHtmlTocTemplatePath: Optional. For advanced customizations: absolute path to a HTML toc template.
 *    - content: Book Chapters content. It's should be an array of objects. eg. [{title: "Chapter 1",data: "<div>..."}, {data: ""},...], and within each chapter object:
 *      - title: optional, Chapter title
 *      - author: optional, if each book author is different, you can fill it.
 *      - data: required, HTML String of the chapter content. image paths should be absolute path (should start with "http" or "https"), so that they could be downloaded. With the upgrade is possible to use local images (for this the path must start with file: //)
 *      - excludeFromToc: optional, if is not shown on Table of content, default: false;
 *      - beforeToc: optional, if is shown before Table of content, such like copyright pages. default: false;
 *      - filename: optional, specify filename for each chapter, default: undefined;
 *    - verbose: specify whether or not to console.log progress messages, default: false.
 *  - output (String): If you don't want pass the output pass the output path as the second argument, you should specify output path as option.output.
 *
 *  Creates an EpubGen type object for creating epub files
 *
 *      const EpubGen = require("epub-gen");
 *      new EpubGen(option [, output]).promise.then(
 *          () => console.log("Ebook Generated Successfully!"),
 *          err => console.error("Failed to generate Ebook because of ", err)
 *      );
 *
 **/
declare module "epub-gen" {

  interface EpubGenOptions {
    title: string;
    author: string | string[];
    publisher?: string;
    cover?: string;
    output?: string;
    version?: number;
    css?: number;
    fonts?: string[];
    lang?: string;
    appendChapterTitles?: boolean;
    customOpfTemplatePath?: string;
    customNcxTocTemplatePath?: string;
    customHtmlTocTemplatePath?: string;
    content: Chapter[];
    verbose?: boolean;
  }

  interface Chapter{
    title?: string;
    author?: string;
    data: string;
    excludeFromToc?: boolean;
    beforeToc?: boolean;
    filename?: string;
  }

	class EpubGen {
		constructor(option: EpubGenOptions, output?: string);

		promise: Promise<void>;
	}

	export = EpubGen;
}
