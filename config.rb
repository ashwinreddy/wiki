puts "using config file"

#Precious::App.set(:wiki_options, { :universal_toc => true })
#
#
#module Gollum
  #class Markup
      #GitHub::Markup::Markdown::MARKDOWN_GEMS.delete('kramdown')
      #GitHub::Markup::Markdown::MARKDOWN_GEMS['pandoc-ruby'] = proc { |content|
          #PandocRuby.convert(content, :from => 'markdown_github-tex_math_dollars', :to => :html, :filter => 'pandoc-citeproc')
      #}
  #end
#end

module Gollum
  class Markup
    if gem_exists?('pandoc-ruby')
      GitHub::Markup::Markdown::MARKDOWN_GEMS.delete('kramdown')
      GitHub::Markup::Markdown::MARKDOWN_GEMS['pandoc-ruby'] = proc { |content|
          #PandocRuby.convert(content, :from => 'markdown-tex_math_dollars-raw_tex', :to => :html, :filter => 'pandoc-citeproc')
          PandocRuby.convert(content, '--citeproc', :from => 'markdown-tex_math_dollars-raw_tex', :to => :html)
      }
    else
      GitHub::Markup::Markdown::MARKDOWN_GEMS['kramdown'] = proc { |content|
          Kramdown::Document.new(content, :input => "GFM", :hard_wrap => 'false', :auto_ids => false, :math_engine => nil, :smart_quotes => ["'", "'", '"', '"'].map{|char| char.codepoints.first}).to_html
      }
    end

    # markdown, rdoc, and plain text are always supported.
    register(:markdown, "Markdown", :extensions => ['md','mkd','mkdn','mdown','markdown'])
    register(:rdoc, "RDoc")
    register(:txt, "Plain Text",
             :skip_filters => Proc.new {|filter| ![:PlainText,:YAML].include?(filter) })
    # the following formats are available only when certain gem is installed
    # or certain program exists.
    register(:textile, "Textile",
             :enabled => MarkupRegisterUtils::gem_exists?("RedCloth"))
    register(:org, "Org-mode",
             :enabled => MarkupRegisterUtils::gem_exists?("org-ruby"))
    register(:creole, "Creole",
             :enabled => MarkupRegisterUtils::gem_exists?("creole"),
             :reverse_links => true)
    register(:rst, "reStructuredText",
             :enabled => MarkupRegisterUtils::executable_exists?("python2"),
             :extensions => ['rest', 'rst'])
    register(:asciidoc, "AsciiDoc",
             :skip_filters => [:Tags],
             :enabled => MarkupRegisterUtils::gem_exists?("asciidoctor"),
             :extensions => ['adoc','asciidoc'])
    register(:mediawiki, "MediaWiki",
             :enabled => MarkupRegisterUtils::gem_exists?("wikicloth"),
             :extensions => ['mediawiki','wiki'], :reverse_links => true)
    register(:pod, "Pod",
             :enabled => MarkupRegisterUtils::executable_exists?("perl"))
    register(:bib, "BibTeX", :extensions => ['bib'],
             :enabled => MarkupRegisterUtils::all_gems_available?(["bibtex-ruby", "citeproc-ruby", "csl"]),
             :skip_filters => Proc.new {|filter| true unless [:YAML,:BibTeX,:Sanitize].include?(filter)})
  end
end
